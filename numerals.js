var converter = {

    alphabet: [
        {
            value: 1000,
            symbol: 'M'
        },
        {
            value: 900,
            symbol: 'CM'
        },
        {
            value: 500,
            symbol: 'D'
        },
        {
            value: 400,
            symbol: 'CD'
        },
        {
            value: 100,
            symbol: 'C'
        },
        {
            value: 90,
            symbol: 'XC'
        },
        {
            value: 50,
            symbol: 'L'
        },
        {
            value: 40,
            symbol: 'XL'
        },
        {
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
        }],


    arabicToRoman: function (arabicNumeral){

        this.result = '';
        this.remaining = arabicNumeral;

        for(var i = 0; i < this.alphabet.length; i++){
            if(this.remaining >= this.alphabet[i].value){
                this.result += this.alphabet[i].symbol;
                this.remaining -= this.alphabet[i].value;
            }
        }

        for(var i = 0; i < this.remaining; i++){
            this.result += 'I';
        }

        return this.result;
    }
};


var converterModule = function (arabicNumeral){
    return Object.create(converter).arabicToRoman(arabicNumeral);
};

module.exports = converterModule;
