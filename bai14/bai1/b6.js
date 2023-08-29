let number = prompt(" so bat ki")
let text = number.split("  "); 
let numbers = prompt("moi nhap so ")
    if(text.indexOf(numbers)!==-1){
        console.log(`${numbers} is in the array`)
    }else{
        console.log(`${numbers} is in the not array`)
    }