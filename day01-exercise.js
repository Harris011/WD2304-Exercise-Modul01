// Write a code to find area of rectangle.

let p = 5;
let l = 4;

let luas = p * l;
console.log(luas);


// Write a code to find perimeter of rectangle.

let panjang = 4;
let lebar = 3;
let keliling = 2 * panjang + 2 * lebar;
console.log(keliling);


// Write a code to find diameter, circumference and area of a circle.

let r = 3;
let d = 2 * r;
console.log(d);

const pi = 3.14;
let C = 2 * pi * d;
console.log(C);

let r2 = r ** 2;
let A  = pi * r2;
console.log (A);


// Write a code to find angles of triangle if two angles are given.

let a = 90;
let b = 30;
let c = 180 - (a + b);
console.log (c);


// Write a code to get difference between dates in days.

let tanggal1 = new Date("2020-01-06");
let tanggal2 = new Date("2022-05-02");
let perbedaanTanggal = Math.abs(tanggal2 - tanggal1);
let perbedaanHari = Math.round(perbedaanTanggal / (1000* 3600 * 24));
console.log(perbedaanTanggal);
console.log(`perbedaan tanggal 1 dan tanggal 2 adalah ${perbedaanHari} hari`);


// Write a code to convert days to years, months and days.

let hari = 3600;
let tahun = Math.floor(hari / 365);
let bulan = Math.floor ((hari % 365) / 30);
let tanggal = Math.floor ((hari % 365) % 30);
console.log(tahun + " tahun, " + bulan + " bulan, " + tanggal + " hari");