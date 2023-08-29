let arr=[];

let index=0
for(let i=0;i<5;i++){
    let number=+prompt("nhap so")
    arr.push(number)
}
let max= arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}
console.log(`gia tri lon nhat la ${max} `);
let min= arr[0];
for (let i=1;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log(`gia tri trng binh ${min}`);