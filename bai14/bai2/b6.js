let num =+prompt("ban muon nhap bao nhieu ki tu")
let numner =[];
let count = 0
for(let i=0;i<num;i++){
    let number = prompt("moi nhap ki tu ")
    numner.push(number);
}
console.log(numner);
for(let i=0;i<numner.length;i++){
    if(numner[i]=="-")
    {
        numner[i]="_"     
    }
}
 console.log(numner);