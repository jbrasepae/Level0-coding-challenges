function maximum(...nums){
    var max = 0;
    for(var i = 0; i < nums.length; i++ ){
        if(nums[i] > max ){
            max = nums[i];
        }
    }
    return max;
}
//console.log(maximum(1,2,3,));
console.log(maximum(1,2,3,30,20,45,4));