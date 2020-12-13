function triangleArea(num1, num2, num3){

    var perimeter = (num1 + num2 + num3)/2;
    var area =  Math.sqrt(perimeter*((perimeter-num1)*(perimeter-num2)*(perimeter-num3)));
    return area;
}
console.log(triangleArea(2, 6, 7));