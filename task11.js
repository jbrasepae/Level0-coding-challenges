function    commonLetters(str1, str2){
        let newStr1 = str1.split("");
        let newStr2 = str2.split("");
        let result = "";
        for(var i = 0; i < newStr1.length; i++){
            for(var j = 0; j < newStr2.length; j++){
                if(newStr2[j] == newStr1[i]){
                    result += newStr1[i];
                }
            }
        }
        return result;
    }
    
    console.log(commonLetters("house", "computers"));