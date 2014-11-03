describe('func', function() {

    it('bind()를 통해 함수를 커링할 수 있다', function() {
        var a = {
            word: 'hello'
        };

        var b = function() {
            return this.word;
        };

        var curried = ne.bind(b, a);

        expect(curried()).toBe('hello');
    });

});