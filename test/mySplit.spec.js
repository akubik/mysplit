const mySplit = require('../src/mySplit');

describe('mySplit tests', () => {
    it('should split text when delimiter is space', () => {
        const text = "Ala ma kota";
        const delimiter = " ";
        expect(mySplit(text, delimiter)).toEqual(["Ala", "ma", "kota"]);
    });

    it('should split text into array when delimiter is empty string', () => {
        const text = "Kot";
        const delimiter = "";
        expect(mySplit(text, delimiter)).toEqual(["K", "o", "t"]);
    });

    it('should return array with one empty string element when empty string provided', () => {
        const text = "";
        const delimiter = "whatever";
        expect(mySplit(text, delimiter)).toEqual([""]);
    });

    it('should split text when delimiter is one letter from inside', () => {
        const text = "Tekst";
        const delimiter = "s";
        expect(mySplit(text, delimiter)).toEqual(["Tek", "t"]);
    });

    it('should put delimiter as a first element of the result array when delimiter is first character in the string', () => {
        const text = " Tekst jest super";
        const delimiter = " ";
        expect(mySplit(text, delimiter)).toEqual(["", "Tekst", "jest", "super"]);
    });

    it('should put delimiter as a last element of the result array when delimiter is last character in the string', () => {
        const text = "Tekst jest super ";
        const delimiter = " ";
        expect(mySplit(text, delimiter)).toEqual(["Tekst", "jest", "super", ""]);
    });
});