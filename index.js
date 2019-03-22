module.exports = new class RomanNumber{

    toNumber(str){
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

   }