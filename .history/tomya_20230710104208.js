let array = [1257, [1, 2, 5, 7], 554, [5, 5, 4], 68921, [6, 8, 9, 2, 1], 78521, [7, 8, 5, 2, 1], 123, [1, 2, 3]];

const bolunur = 1;
const bolunmez = 0;

function kalaniBul(eleman, sayi) {
  if (eleman % sayi === 0) {
    console.log(`Sayı tam bölünür değerimiz ${bolunur}`);
  } else {
    console.log(`Sayı tam bölünmez değerimiz: ${bolunmez}`);
  }
 return eleman % sayi;
}
// 1257
let indexdeger1 = kalaniBul(array[0], array[1][0]);
let indexdeger2 = kalaniBul(array[0], array[1][1]);
let indexdeger3 = kalaniBul(array[0], array[1][2]);
let indexdeger4 = kalaniBul(array[0], array[1][3]);

console.log(`1257 Sayımızdan gelen değer = ${indexdeger1 + indexdeger2 + indexdeger3 + indexdeger4}`);

// 554
let indexdeger5 = kalaniBul(array[2], array[3][0]);
let indexdeger6 = kalaniBul(array[2], array[3][1]);
let indexdeger7 = kalaniBul(array[2], array[3][2]);

console.log(`554 Sayımızdan gelen değer = ${indexdeger5 + indexdeger6 + indexdeger7}`);

6
let indexdeger8 = kalaniBul(array[4], array[5][0]);
let indexdeger9 = kalaniBul(array[4], array[5][1]);
let indexdeger10 = kalaniBul(array[4], array[5][2]);
let indexdeger11 = kalaniBul(array[4], array[5][3]);
let indexdeger12 = kalaniBul(array[4], array[5][4]);

console.log(`68921 Sayımızdan gelen değer = ${indexdeger8 + indexdeger9 + indexdeger10 + indexdeger11 + indexdeger12}`);

let indexdeger13 = kalaniBul(array[6], array[7][0]);
let indexdeger14 = kalaniBul(array[6], array[7][1]);
let indexdeger15 = kalaniBul(array[6], array[7][2]);
let indexdeger16 = kalaniBul(array[6], array[7][3]);
let indexdeger17 = kalaniBul(array[6], array[7][4]);

console.log(`78521 Sayımızdan gelen değer = ${indexdeger13 + indexdeger14 + indexdeger15 + indexdeger16 + indexdeger17}`);

let indexdeger18 = kalaniBul(array[8], array[9][0]);
let indexdeger19 = kalaniBul(array[8], array[9][1]);
let indexdeger20 = kalaniBul(array[8], array[9][2]);

console.log(`123 Sayımızdan gelen değer = ${indexdeger18 + indexdeger19 + indexdeger20 }`);