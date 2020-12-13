function take2numbers(num1, num2){
    if((num1 == 65 || num2 == 65) || (num1 + num2 == 65)){
        return true;
    }
    else{
        return false;
    }
}
console.log(take2numbers(10, 55))