/* global describe, it */

'use strict';

var expect = require('chai').expect,
    numerals = require('../../numerals.js');


describe('Arabic to Romans', function (){

    it('should return I when I pass 1', function (){
        expect(numerals.arabicToRoman(1)).to.be.equal('I');
    });

    it('should return II when I pass 2', function (){
        expect(numerals.arabicToRoman(2)).to.be.equal('II');
    });

    it('should return III when I pass 3', function (){
        expect(numerals.arabicToRoman(3)).to.be.equal('III');
    });

    it('should return IV when I pass 4', function (){
        expect(numerals.arabicToRoman(4)).to.be.equal('IV');
    });

    it('should return V when I pass 5', function (){
        expect(numerals.arabicToRoman(5)).to.be.equal('V');
    });

    it('should return VI when I pass 6', function (){
        expect(numerals.arabicToRoman(6)).to.be.equal('VI');
    });

    it('should return VII when I pass 7', function (){
        expect(numerals.arabicToRoman(7)).to.be.equal('VII');
    });

    it('should return VIII when I pass 8', function (){
        expect(numerals.arabicToRoman(8)).to.be.equal('VIII');
    });

    it('should return IX when I pass 9', function (){
        expect(numerals.arabicToRoman(9)).to.be.equal('IX');
    });

    it('should return X when I pass 10', function (){
        expect(numerals.arabicToRoman(10)).to.be.equal('X');
    });

    it('should return XI when I pass 11', function (){
        expect(numerals.arabicToRoman(11)).to.be.equal('XI');
    });

    it('should return XII when I pass 12', function (){
        expect(numerals.arabicToRoman(12)).to.be.equal('XII');
    });

    it('should return XIII when I pass 13', function (){
        expect(numerals.arabicToRoman(13)).to.be.equal('XIII');
    });

    it('should return XIV when I pass 14', function (){
        expect(numerals.arabicToRoman(14)).to.be.equal('XIV');
    });

    it('should return XC when I pass 90', function (){
        expect(numerals.arabicToRoman(90)).to.be.equal('XC');
    });

    it('should return MCMLXXXV when I pass 1985', function (){
        expect(numerals.arabicToRoman(1985)).to.be.equal('MCMLXXXV');
    });

    it('should return MCMXC when I pass 1990', function (){
        expect(numerals.arabicToRoman(1990)).to.be.equal('MCMXC');
    });

    it('should return MDCLXVI when I pass 1666', function (){
        expect(numerals.arabicToRoman(1666)).to.be.equal('MDCLXVI');
    });
    it('should return MM when I pass 2000', function (){
        expect(numerals.arabicToRoman(2000)).to.be.equal('MM');
    });
    it('should return MMVIII when I pass 2008', function (){
        expect(numerals.arabicToRoman(2008)).to.be.equal('MMVIII');
    });



});


describe('Roman to Arabic', function (){

    it('should return 1 when I pass I', function (){
        expect(numerals.romanToArabic('I')).to.be.equal(1);
    });

    it('should return 2 when I pass II', function (){
        expect(numerals.romanToArabic('II')).to.be.equal(2);
    });

    it('should return 3 when I pass III', function (){
        expect(numerals.romanToArabic('III')).to.be.equal(3);
    });

    it('should return 4 when I pass IV', function (){
        expect(numerals.romanToArabic('IV')).to.be.equal(4);
    });

    it('should return 5 when I pass V', function (){
        expect(numerals.romanToArabic('V')).to.be.equal(5);
    });

    it('should return 6 when I pass VI', function (){
        expect(numerals.romanToArabic('VI')).to.be.equal(6);
    });

    it('should return 7 when I pass VII', function (){
        expect(numerals.romanToArabic('VII')).to.be.equal(7);
    });

    it('should return 8 when I pass VIII', function (){
        expect(numerals.romanToArabic('VIII')).to.be.equal(8);
    });

    it('should return 9 when I pass IX', function (){
        expect(numerals.romanToArabic('IX')).to.be.equal(9);
    });

    it('should return 10 when I pass X', function (){
        expect(numerals.romanToArabic('X')).to.be.equal(10);
    });

    it('should return 11 when I pass XI', function (){
        expect(numerals.romanToArabic('XI')).to.be.equal(11);
    });

    it('should return 12 when I pass XII', function (){
        expect(numerals.romanToArabic('XII')).to.be.equal(12);
    });

    it('should return 13 when I pass XIII', function (){
        expect(numerals.romanToArabic('XIII')).to.be.equal(13);
    });

    it('should return 14 when I pass XIV', function (){
        expect(numerals.romanToArabic('XIV')).to.be.equal(14);
    });

    it('should return 90 when I pass XC', function (){
        expect(numerals.romanToArabic('XC')).to.be.equal(90);
    });

    it('should return 1985 when I pass MCMLXXXV', function (){
        expect(numerals.romanToArabic('MCMLXXXV')).to.be.equal(1985);
    });

    it('should return 1990 when I pass MCMXC', function (){
        expect(numerals.romanToArabic('MCMXC')).to.be.equal(1990);
    });

    it('should return 1666 when I pass MDCLXVI', function (){
        expect(numerals.romanToArabic('MDCLXVI')).to.be.equal(1666);
    });
    it('should return 2000 when I pass MM', function (){
        expect(numerals.romanToArabic('MM')).to.be.equal(2000);
    });
    it('should return 2008 when I pass MMVIII', function (){
        expect(numerals.romanToArabic('MMVIII')).to.be.equal(2008);
    });



});