let arr = [1,6,10,25,63,16,7,2];
let count = 0;
    
function countNum(arr){
for(let i=0; i<arr.length; i++){
    let itemAtIndex = arr[i];

    if(itemAtIndex > 20){
        count ++;
    }

    
}
if(count<3){
    return count;
}else if(count>3){
    return -1;
}
}

console.log(countNum(arr))