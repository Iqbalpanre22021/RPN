function helloworld(){
    return 'hello world'
} 
console.log(helloworld())

function test(){
    console.log('test')
}
test()
console.log(test())
//return memberikan nilai ke fungsi bila tidak memberikan return ke fungsi 
//maka fungsi tersebut akan mempunyai nilai undefined 
//tujuan fungsi yang agar jika ada suatu proses yang sulit dapat digunakan berkali-kali

function tambahangka(angka1, angka2){
    return angka1+angka2;
}
console.log(tambahangka(1,2))
console.log(tambahangka(5,5))
console.log(tambahangka(10,2))

let angka5 = tambahangka(5,10);
console.log(angka5)

console.log(" ")

function balikkata(kata){
    let balikkata = "";
    for(let i = kata.length - 1; i >=0; i--){
        balikkata += kata[i];
    }
    return balikkata;
}

console.log(balikkata("ayam"))
console.log(balikkata("sapi"))
console.log(balikkata("gajah"))

console.log(' ')

function spasi(kata){
    let result = "";
    for(let i=0;i<kata.length;i++){
        if(i==0 || kata[i-1]==" "){
            result += kata[i].toUpperCase();
        }else{
            result+=kata[i]
        }
    }
    return result;
}

console.log(spasi("iqbal panre"))
console.log(spasi("ari setiawan"))