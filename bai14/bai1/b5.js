let text = prompt("nhap so");
let array = text.split(";");
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        count++;
    }
}
console.log(`tong so nguyen am la ${count}`);