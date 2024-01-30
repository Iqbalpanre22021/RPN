let i = 5
let j = 0
while (i>0){
    console.log(i)
    i--
}

while (j < 5){
    console.log(j)
    j++
}

for (i=1; i<5; i++) {
    console.log(i)
}

let nama = "iqbal";

for (let i =0; i < nama.length; i++){
    console.log(nama[i])
}  

let nama2 = "iqbal";
let result = "";
for (let i = nama2.length - 1; i>=0; i--){
    result += nama2[i]
}
console.log(result)

let result2 ="";
for (let i = 0; i<5; i++){
    for (let j = 0; j<5; j++){
        console.log(j)
    }
    console.log('')
}
console.log('selesai')

//kesimpulan looping akan serinig bertemu dengan lenght dan membuat kode menjadi lebih efisien.