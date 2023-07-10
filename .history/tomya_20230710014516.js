let array = [1257, 554, 68921, 78521, 123]

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
console.log(kalaniBul)


console.log(`${indexdeger1 + indexdeger2 + indexdeger3 + indexdeger4}`)

for (i = 0 , i < array.length , i++){
    let indexdeger1 = console.log(array[i],array[i][0])
    let indexdeger2 = console.log(array[i],array[i][1])
    let indexdeger3 = console.log(array[i],array[i][2])
    let indexdeger4 = console.log(array[i],array[i][3])
}