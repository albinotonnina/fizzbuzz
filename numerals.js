var get_roman_numeral = function (arabicNumeral){

    var result = '';

    var alphabet = [
        {
            value: 1000,
            symbol: 'M'
        }, {
            value: 900,
            symbol: 'CM'
        }, {
            value: 500,
            symbol: 'D'
        }, {
            value: 400,
            symbol: 'CD'
        }, {
            value: 100,
            symbol: 'C'
        }, {
            value: 90,
            symbol: 'XC'
        }, {
            value: 50,
            symbol: 'L'
        }, {
            value: 40,
            symbol: 'XL'
        }, {
            value: 10,
            symbol: 'X'
        },
        {
            value: 9,
            symbol: 'IX'
        },
        {
            value: 5,
            symbol: 'V'
        },
        {
            value: 4,
            symbol: 'IV'
        },
        {
            value: 1,
            symbol: 'I'
        }
    ];


    // private static final int[]    VALUES  = { 1000, 900,  500, 400,  100, 90,   50,  40,   10,  9,    5,   4,    1   };
    // private static final String[] SYMBOLS = { "M",  "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" };


    var remaining = arabicNumeral;

    for(var i = 0; i < alphabet.length; i++){
        if(remaining >= alphabet[i].value){
            result += alphabet[i].symbol;
            remaining -= alphabet[i].value;
        }
    }

    for(var i = 0; i < remaining; i++){
        result += 'I';
    }

    return result;
};

module.exports = get_roman_numeral;
