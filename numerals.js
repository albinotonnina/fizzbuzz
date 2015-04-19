var converter = {

    alphabet: [
        ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
        ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
        ['X', 10], ['IX', 9], ['V', 5], ['IV', 4],
        ['I', 1]
    ],

    romanToArabic: function (romanNumeral){
        var result = 0;
        for(var i = 0; i < this.alphabet.length; ++i){
            var pair = this.alphabet[i];
            var key = pair[0];
            var value = pair[1];
            var regex = RegExp('^' + key);
            while (romanNumeral.match(regex)){
                result += value;
                romanNumeral = romanNumeral.replace(regex, '')
            }
        }
        return result;

    },

    arabicToRoman: function (arabicNumeral){
        var result = '';
        for(var i = 0; arabicNumeral > 0 && i < this.alphabet.length; i++){
            var pair = this.alphabet[i];
            var key = pair[0];
            var value = pair[1];
            while (arabicNumeral >= value){
                result += key;
                arabicNumeral -= value;
            }
        }
        return result;
    }
};


module.exports = converter;
