let array = [1257, 554, 68921, 78521, 123]
const bolunur = 1 ;
const bolunmez = 0 ;
function kalaniBul(eleman,sayi){
    if(eleman % sayi ==0){
        console.log(`Sayı tam bölünür değerimiz ${bolunur}`)
    }else{
        console.log(`Sayi tam bölünmez değerimiz: ${bolunmez}`)
    }
    return eleman % sayi;
}
console.log(kalaniBul)
let indexdeger1 = console.log(1257,1)
let indexdeger2 =console.log(1257,2)
let indexdeger3 = console.log(1257,5)
let indexdeger4 = console.log(1257,7)

console.log(`${indexdeger1 + indexdeger2 + indexdeger3 + indexdeger4}`)