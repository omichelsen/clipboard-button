describe('clipboard-button', function () {
    var elm, callbacks, cpb;

    beforeEach(function () {
        elm = document.createElement('button');
        elm.id = 'myButton';
        elm.dataset.clipboardText = 'textToCopy';
        elm.textContent = 'Copy';
        document.body.appendChild(elm);

        callbacks = {
            success: function () {},
            fail: function (err) {}
        };

        spyOn(callbacks, 'success');
        spyOn(callbacks, 'fail');
    });

    afterEach(function () {
        cpb.destroy();
        document.body.removeChild(elm);
        elm = callbacks = cpb = null;
    });

    describe('init', function () {
        it('should load with selector string', function () {
            cpb = clipboardButton('#myButton');
            expect(cpb.element).toEqual(elm);
        });
        it('should load with elment instance', function () {
            cpb = clipboardButton(elm);
            expect(cpb.element).toEqual(elm);
        });
    });

    describe('click', function () {
        beforeEach(function () {
            cpb = clipboardButton(elm, callbacks.success, callbacks.fail);
        });
        it('should fail on click in Firefox', function () {
            elm.click();
            expect(callbacks.fail).toHaveBeenCalled();
        });
    });
});