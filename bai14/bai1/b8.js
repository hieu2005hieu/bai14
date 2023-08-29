let number = [1,2,11,4,10,5,8,7];
for(let i=0;i<number.length+1;i++){
 for(let j=i+1;j<number.length;j++){
     if(number[j]>number[i]){
         x = number[i]
         number[i] = number[j]
         number[j] = x;
     }
 }
}
console.log(number)