module.exports = new class RomanNumber{
   
    constructor() {  
    }

    toInt(str){

        const mapRomans = new Map([
            ['I', 1],
            ['V', 5],
            ['X', 10],
            ['L', 50],
            ['C', 100],
            ['D', 500],
            ['M', 1000]
        ]); 

        let result = 0;
        let current =0 
        let previous = 0;

        for (var i = 0; i < str.length; i++) {
            current = mapRomans.get(str.charAt(i));
            result += current;
            if(current>previous){
                result+= -(previous)*2
            }
          previous = current;
        }
        return result;
    }


    toRoman(num) {  
        var result = '';
        var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
        for (var i = 0;i<=decimal.length;i++) {
          while (num%decimal[i] < num) {     
            result += roman[i];
            num -= decimal[i];
          }
        }
        return result;
      }


   }