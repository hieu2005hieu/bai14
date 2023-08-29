let arr = "1,2,3,4,5,6,7,8,7,10"
let number = arr.split(",")
let numbers = prompt("moi nhap so nguyen can xao")
if(number.indexOf(numbers)===-1){
 console.log("ko co so nguyen do trong mang ")
}else{
 for(let x=0;x<number.length;x++){
     if(numbers==number[x]){
         number.splice(x,1)
     }
 }
}
console.log(number);