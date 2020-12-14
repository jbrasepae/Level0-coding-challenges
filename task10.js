function vowels(str){
    var strVowels = '';
    for(var i = 0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U'){
            strVowels += str[i];
        }
    }
    return strVowels;
}
console.log(vowels('naledibOU'))