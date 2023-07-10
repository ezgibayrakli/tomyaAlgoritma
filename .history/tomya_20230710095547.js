let array = [1257,[1,2,5,7], 554 [5,5,4], 68921 [6,8,9,2,1], 78521 [7,8,5,2,], 123]

const bolunur = 1 ;
const bolunmez = 0 ;

function kalaniBul(eleman,sayi){
    if(eleman % sayi === 0){
        console.log(`Sayı tam bölünür değerimiz ${bolunur}`)
    }else{
        console.log(`Sayi tam bölünmez değerimiz: ${bolunmez}`)
    }
    return eleman % sayi;
}
(kalaniBul)
let indexdeger1 = kalaniBul(array[0],array[0][0])
let indexdeger2 = kalaniBul(array[0],array[0][1])
let indexdeger3 = kalaniBul(array[0],array[0][2])
let indexdeger4 = kalaniBul(array[0],array[0][3])

console.log(`${indexdeger1 + indexdeger2 + indexdeger3 + indexdeger4}`)

// foraach (i = 0 ; i < array.length ;  i++){

// }