function three(num1, num2){
    let sum = (num1 + num2).toString();
    for(var i = 0; i < sum.length; i++){
        if(num1 == 3 || num2 == 3 && sum[i] == '3'){
            return true;
        }
    }
    return false;
}
console.log(three(3, 10));