let count=0;
let numbers=[];
do {
let num=+ prompt('nhap so');
   if(Number.isInteger(num)){
       count++;
       if(num>10){
        numbers.push(num);
       }
   }else{
      console.log("so k pk la so nguyen");
   }

}while(count<10);
console.log(numbers);