/*
//toFixed() - zaokruzivanje broja
let b = 25.2356589;
console.log(b.toFixed(2));

console.log(b.valueOf());
console.log(typeof(b));
console.log(parseInt(b))

//sabiranje cifara broja

let c = 2456;
let sum = 0; // = 0 BITNO !!!

while(c > 0) {
    sum += c % 10;
    c = c/10;
    c = Math.floor(c);
}
console.log(`zbir cifara je ${sum}`);

let x = 65;
console.log(Math.sqrt(x));

console.log(Math.round(2.65));
*/

//*******************************************DATE AND TIME***********************************************************
/*
let dateTimeNow = new Date(); // vraca u ovom obliku 2019-11-02T22:29:05.928Z
console.log(dateTimeNow);

//TIME-------------------------------------------------------------------------------
let hours = dateTimeNow.getHours(); 
let minutes = dateTimeNow.getMinutes();
let seconds = dateTimeNow.getSeconds();
let timeStampString = `${hours}:${minutes}:${seconds}`; //23:30:18
console.log(timeStampString);

//DATE-------------------------------------------------------------------------------
let dateDay = dateTimeNow.getDate(); //date - dan u mesecu a day- je dan u nedelji
let month = dateTimeNow.getMonth()+1; //Januar je 0, Nedelja je 0
let year = dateTimeNow.getFullYear();
let dateStampString = `${dateDay}-${month}-${year}`; //2-11-2019
console.log(dateStampString);

{

    function prosek(M, N, k) {
        let sum = 0;
        let broj = 0; //koliko ih ima
        for(let i = M; i <= N; i++){
            if(i % k == 0) {
                sum+=i;
                broj++;
            }
        }
        return prosek1 = sum/broj;

    }
    
    console.log(prosek(10, 100, 7));
}
*/
function potrosnja(daljina, potrosnja){
    rezultat =  (daljina/100) * potrosnja;
    console.log(rezultat);
}
function potrosnja1(daljina, potrosnja){
    return  daljina/100 * potrosnja;  
}

potrosnja(100, 10);
console.log(potrosnja1(200, 6));


//**************************vazi u svakom jeziku CESTO PITANJE NA INTERVIJUIMA*******************************
function jePalindrom(poruka) {
    //let primer = 'porukica';
    //primer.charAt(pozicija);
    poruka = poruka.toLowerCase().split(' ').join('');

    let i = 0, j = poruka.length-1;
    while(i<j){
        if(poruka.charAt(i) != poruka.charAt(j)) {
            return false;
        }
        i++;
        j--;
    }
    return true;  
} 
console.log(jePalindrom('ana volim ilov ana'));

