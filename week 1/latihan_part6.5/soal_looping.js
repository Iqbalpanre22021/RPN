// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let i = 1;
let j = 5;

console.log("Looping Pertama")
while (i<=5){
    console.log(i)
    i++
}
console.log("Looping Kedua")
while (j>0){
    console.log(j)
    j--
}
console.log("=========================================")
// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log("Looping Pertama")
for (i = 1; i <=5; i++){
    console.log(i)
}
console.log("Looping Kedua")
for (j = 5; j > 0; j--){
    console.log(j)
}

console.log("=============================================")


// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

for (i = 1; i<=100; i++){
    if (i%2==0){
        console.log(i,"adalah Genap")
    }else{
        console.log(i,"adalah Ganjil")
    }
}
 console.log("===================================================================================")

//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, 
//dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

console.log("Kelipatan 3")
for (i=1; i<=100; i+=2){
    if(i%3==0){
        console.log(i,"Kelipatan 3")
    }else{
        console.log(i)
    }
}
console.log("Kelipatan 6")
for (j=1; j<=100; j+=5){
    if(j%6==0){
        console.log(j,"Kelipatan 6")
    }else{
        console.log(j)
    }
}
console.log("Kelipatan 10")
for (k = 1; k<=100; k+=9){
    if(k%10==0){
        console.log(k,"Kelipatan 10")
    }else{
        console.log(k)
    }
}
console.log("================================================")
//5. Bintang asteriks
//Problem buatlah bintang seperti berikut
//hasilnya
//*
//**
//***
//****
//*****
let input = 5;
let result = "";
for (i=0; i<input; i++){
    for(j=0; j <=i; j++){
        result += "*";
    }
    result+="\n";
}
console.log(result)