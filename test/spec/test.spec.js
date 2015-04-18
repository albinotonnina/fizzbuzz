/* global describe, it */

'use strict';

var expect = require('chai').expect,
    numerals = require('../../numerals.js');


describe('Arabic to Romans', function (){

    it('should return I when I pass 1', function (){
        expect(numerals(1)).to.be.equal('I');
    });

    it('should return II when I pass 2', function (){
        expect(numerals(2)).to.be.equal('II');
    });

    it('should return III when I pass 3', function (){
        expect(numerals(3)).to.be.equal('III');
    });

    it('should return IV when I pass 4', function (){
        expect(numerals(4)).to.be.equal('IV');
    });

    it('should return V when I pass 5', function (){
        expect(numerals(5)).to.be.equal('V');
    });

    it('should return VI when I pass 6', function (){
        expect(numerals(6)).to.be.equal('VI');
    });

    it('should return VII when I pass 7', function (){
        expect(numerals(7)).to.be.equal('VII');
    });

    it('should return VIII when I pass 8', function (){
        expect(numerals(8)).to.be.equal('VIII');
    });

    it('should return IX when I pass 9', function (){
        expect(numerals(9)).to.be.equal('IX');
    });

    it('should return X when I pass 10', function (){
        expect(numerals(10)).to.be.equal('X');
    });

    it('should return XI when I pass 11', function (){
        expect(numerals(11)).to.be.equal('XI');
    });

    it('should return XII when I pass 12', function (){
        expect(numerals(12)).to.be.equal('XII');
    });

    it('should return XIII when I pass 13', function (){
        expect(numerals(13)).to.be.equal('XIII');
    });

    it('should return XIV when I pass 14', function (){
        expect(numerals(14)).to.be.equal('XIV');
    });

    it('should return XC when I pass 90', function (){
        expect(numerals(90)).to.be.equal('XC');
    });

    it('should return XC when I pass 90', function (){
        expect(numerals(90)).to.be.equal('XC');
    });




});
