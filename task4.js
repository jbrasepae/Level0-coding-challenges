function twoNumbers(num1, num2){
    if((num1 == 3 || num2 == 3) || (num1 && num2 == 3)){
        return true;
    }
    else{
        return false;
    }
}
console.log(twoNumbers(1, 2));