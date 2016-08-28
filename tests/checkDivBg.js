describe('getDivBg', function() {
    var d = document.querySelector('.box');

    it('Should be black', function() {
        expect(d.style.backgroundColor).toBe('black');
    });
});