let textone = prompt("moi nhap chuoi 1");
let texttwo = prompt("moi nhap chuoi 2");
let count = 0
for (let i = 0; i < textone.length; i++) {
    if (textone[i] == texttwo[i]) {
        count++
    }
}
if (count == textone.length) {
    console.log("2 mang giong nhau")
} else {
    console.log("2 mang khac nhau")
}