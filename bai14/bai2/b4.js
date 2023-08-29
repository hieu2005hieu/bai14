let text = prompt("moi nhap chuoi")
let count = 0
for(let i=0;i<text.length;i++){
    if(text[i]>= 'a' && text[i]<= 'z' ){
        count++
    }else if(text[i]>= 'A' && text[i]<= 'Z' ){
        count++
    }
}
console.log(`chuoi co so tu la ${count}`);