
const app = document.getElementById('app');
app.innerHTML = '<p>Hello to bootcamp Pizza</p>';
console.log(app);

//-------------DODAVANJE IKONICA-----------------------------------------------

var facebook_url = 'https://www.facebook.com';
var youtube_url = 'https://www.youtube.com';
var twitter_url = 'https://www.twitter.com';


var facebook_icon_path = 'assets/images/fb_ico.png';
var youtube_icon_path = 'assets/images/yt.png';
var twwiter_icon_path = 'assets/images/tw.png';

const social = document.getElementById('social');
social.innerHTML = `<a href="${facebook_url}" target="_blank"><img class ="social-icon" src="${facebook_icon_path}" /></a>`;
social.innerHTML += `<a href="${youtube_url}" target="_blank"><img class ="social-icon" src="${youtube_icon_path}" /></a>`
social.innerHTML += `<a href="${twitter_url}" target="_blank"><img class ="social-icon" src="${twwiter_icon_path}" /></a>`
social.innerHTML += '<a href="https://www.instagram.com" target="_blank"><img class ="social-icon" src="assets/images/insta.png" /></a>'


//Dan 4.
var variable = 'Dobar dan';
console.log(variable);
var variable2 = ' dodatak poruke';
console.log(variable + variable2)
var number1 = 12;
var number2 = 0;
var number3 = number1 / number2;
console.log('To ' + number3 + ' and beyond!');
number1 = 15;
number2 = 10;
number3 = 2;
console.log(variable + number1 + number2 * number3); //'dobar dan' + '15' + '20'
console.log(number1 + number2 * number3 + variable);  //35 + 'Dobar dan'
const constant = 5;
console.log(constant);

//let se koristi kao lokalna promenjiva, ako je spolja vidi unutra kao i const
let b = 15;
{
    var a = 12; //vidi se svuda 
    console.log(a);
    console.log(b); //deklarisana ranije
}
console.log(a);
//console.log(b);

{
    let b;
    b = 10;
    console.log(b);
    {
        b = 15;
        let c;
        c = 18;
        console.log(c);
        {
            let d = 9;
            d = 21;
            console.log(d);
        }
        let d;
        console.log(d);
    }
}

/*
{ 
    let a;
    a = 10;
    var c;
    {
        let b;
    } 

    {
        b = 15;
    } 
}
*/

//iz ovog primera zakljucujemo da poslednja dodeljena vrednost var promenljivoj je njena vrednost
{
    var z;
    {
        z =30;
        console.log(z);
    }

    {
        z = 20;
        console.log(z);
    }
}
console.log(z);

/*iz ovoga vidimo domet promenljive let
{
    let x;
    {
        let g = 33;
        x =11;
        console.log(x);
        console.log(g);
    }

    {
        x = 22;
        console.log(x);
        console.log(g);
    }
}
*/

/* 5. dan */

var name = 'Bootcamp Pizza';
var address = 'Bulevar kralja Aleksandra';
var streetNumber = 73;
var postalCode = 11000;
var city = 'Belgrade';
var country = 'Republic of Serbia';
var phoneNumber = '+381(0)64-12-34-567';

const storeNameContainer = document.getElementById('store-name');
storeNameContainer.innerHTML = name;

const storeAdressContainer = document.getElementById('store-adress');
storeAdressContainer.innerHTML = `<p>${address} ${streetNumber}, ${postalCode} ${city}<br/>${country}</p>Phone: ${phoneNumber} `;

var radius = 16; 
//var pizzaSurface = radius * radius * 3.14;
//var pizzaSurface = radius * radius * Math.PI;
var pizzaSurface = Math.pow(radius, 2)*Math.PI;
console.log(`Pizza surface is ${Math.round(pizzaSurface)} cm²`);

//izracunati imamo poluprecnik pice izracunati duzinu korice ako se deli na n delova 2rP
var cutNumber = 1;
var sliceNumber = (2*radius*Math.PI)/(cutNumber*2); //obim korice parceta u zavisnosti od broja preseka
var sliceNumber1 = (2*radius*Math.PI)/(cutNumber*2) + 2*radius; //obim celog parceta u zavisnosti od broja preseka
var sliceNumber2 = cutNumber * 2;  // broj parcica
console.log(Math.round(sliceNumber));
console.log(Math.round(sliceNumber1));
console.log(Math.round(sliceNumber2));

//date and time -----------------------------------

//PAZNJA KORISTICEMO KASNIJE
{
    let dateTimeNow = new Date();
    console.log(dateTimeNow);

    let hours = dateTimeNow.getHours();
    let minutes = dateTimeNow.getMinutes();
    let seconds = dateTimeNow.getSeconds();
    let timeStampString = `${hours}:${minutes}:${seconds}`;
    console.log(timeStampString);
    //za danasnji datum
    console.log(dateTimeNow.getDay());

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    // drugi nacin, bzvz let totalSeconds = (hours * 60 + minutes) * 60 + seconds;

    console.log(`Total number of seconds today is ${totalSeconds}`)
    //posatvicemo datum na neki dan koji ej nedelja
    //dateTimeNow.setDate(27);
    //console.log(dateTimeNow.getDay());

    //napisati datum u sl formatu dd-mm-yyyy [{date} - time]
    let dateDay = dateTimeNow.getDate(); //dan u mesecu a day je dan u nedelji
    let month = dateTimeNow.getMonth()+1;
    let year = dateTimeNow.getFullYear();
    let dateStampString = `${dateDay}-${month}-${year}`;
    console.log(dateStampString);
    //moze i ovako
    //console.log(`[{${dateStampString}} - ${timeStampString}`);
    //i ovako
    console.log("[{" + dateStampString+ " } - " + timeStampString +"]");

}

//------------------------------------- 5. DAN -------------------------------------------

{
    let b;
    b = 4;
    if(b>3) console.log(`${b} je vece od 3`);
    else console.error(`${b} nije vece od 3`); //izbaci error

    console.warn('ovo je mnogo strava kod');  //kul stvar

    if(b % 2 == 0) console.log(`broj ${b}  je paran ! !`);
    else console.log(`broj ${b} je neparan ! !`);

    let discountDay = 2;
    let dateTimeNow = new Date();

    let dayInWeek = dateTimeNow.getDay();

    let capricciosa = 120 ;
    let pizzaCount = 5;
    let discountSize = 0.1;//10%
    let finalPrice = pizzaCount * capricciosa;

    if(dayInWeek === discountDay ) {
        // finalPrice = (1-discountSize) * capricciosa;
        finalPrice *= 1-discountSize;
    }
    console.log(`Price for ${pizzaCount} pizzas is ${finalPrice}`);

    let dayInWeekString;
    switch (dayInWeek) {
        case 0: dayInWeekString = "Sunday";
        break;
        case 1: dayInWeekString = "Monday";
        break;
        case 2: dayInWeekString = "Thusday";
        break;
        case 3: dayInWeekString = "Wednesday";
        break;
        case 4: dayInWeekString = "Thursday";
        break;
        case 5: dayInWeekString = "Friday";
        break;
        case 6: dayInWeekString = "Saturday";
        break;
        default: 
            console.error(`Unknown day ${dayInWeek}`);
            dayInWeekString = "Error";
            break;       
    }

    //let dateDay = dateTimeNow.getDate(); //dan u mesecu a day je dan u nedelji
   
    //let year = dateTimeNow.getFullYear();
    //let dateStampString = `${dateDay}-${month}-${year}`;

    let hours = dateTimeNow.getHours();
    let minutes = dateTimeNow.getMinutes();
    let seconds = dateTimeNow.getSeconds();
    let month = dateTimeNow.getMonth();
    let year = dateTimeNow.getFullYear();
    let date = dateTimeNow.getDate();
    let timeStampString = `${hours}:${minutes}:${seconds}`;
    console.log(timeStampString);

    let monthString;
    switch (month) {
        case 0: monthString = "January";
        break;
        case 1: monthString = "February";
        break;
        case 2: monthString = "Marth";
        break;
        case 3: monthString = "April";
        break;
        case 4: monthString = "May";
        break;
        case 5: monthString = "June";
        break;
        case 6: monthString = "July";
        break;
        case 7: monthString = "Avgust";
        break;
        case 8: monthString = "September";
        break;
        case 9: monthString = "October";
        break;
        case 10: monthString = "November";
        break;
        case 11: monthString = "December";
        break      
        default: 
            console.error(`Unknown day ${month}`);
            monthString = "Error";
            break;       
    }
  
    app.innerHTML += `<p>Today is ${dayInWeekString}, ${date} - ${monthString} - ${year}, Current time: <span>${timeStampString}</span></p>`;
}

//css za conzolu :D :D :D :D--------------------
console.log(
    "%cHELLO FROM BOOTCAMP!",
    "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
  );

  console.log('%cUROS  ', 'color:blue; font-size:4rem; border:3px solid black', );

function helloworld() {
    console.log('Hello World');
}

console.log('Pre poziva funkcije');

helloworld();

console.log(`posle poziva funckije`);

function logMessage(message){
    console.log(`${message}`);            
}


{
    let poruka = `Danas je suncan dan`;    
    logMessage(poruka+1);
    logMessage('Batman!');

}

    function add(a, b){
        return  a+b;
}

    console.log(add(10,5));
 
{
 
    function datum(brojDana) {      
        switch (brojDana) {
            case 0: return "Sunday";
            case 1: return "Monday";
            case 2: return "Thusday";
            case 3: return "Wednesday";
            case 4: return "Thursday";       
            case 5: return "Friday";      
            case 6: return "Saturday";        
            default: 
                return console.error(`Unknown day ${brojDana}`);
        }
    }
    console.log(`Today is ${datum(5)}`);
    //funkcija koja proverava parne dane
 }
 
    
    function logMessageTimeStamp(message) {
        let dateTimeNow = new Date(); 
        console.log(`${dateTimeNow.getHours()}:${dateTimeNow.getMinutes()}:${dateTimeNow.getSeconds()} - ${message}`);
    }
    logMessageTimeStamp('ovo je poruka');

 


    let array = new Array();
    array.push(10);
    console.log(array);
    array.push('abc'); //dodaje na kraj niza
    console.log(array);
    array.unshift('start'); //dodaje na pocetak, ispred svih
    console.log(array);
    array[0] = 'Dobar dan'; //pregazi prvi element
    console.log(array);
    let nizb = [1,2,3];
    console.log(nizb); 
    //array.push(nizb); //moze i da doda niz 
    let nizc = array.concat(nizb);
    console.log(nizc);
    console.log(nizc.length);
    for(let i=0;i<nizc.length;i++){
        logMessageTimeStamp(nizc[i]);
    }    

    let porudzbine = [120, 650, 340, 210];
    //ubaciti porudzbine od 250 din
    porudzbine.push(250);

    //nakon toga ispisati sve porudzbine
    console.log(porudzbine);

    //potrebno da se ispisu porudzbine vece od 300 din

    /*1. nacin
    for(let i=0;i<porudzbine.length;i++){
        if(porudzbine[i] > 300) console.log(porudzbine[i]);
    }*/

    /* 2. nacin
    for(let element of porudzbine){
        if(element > 300){
            console.log(element);
        }
    }*/

    /* 3. nacin
    porudzbine.forEach(element => {
        if(element > 300){
            console.log(element);
        }
    });
    */
  /*
    let max;
    for(let element of porudzbine){
        max = Math.max(max, element);
    }
    console.log(max);

    console.log(Math.max(...porudzbine));

    let niz1 = [1,2,3];
    let niz2 = [4,5,6];
    niz1.push(...niz2);
*/

// -------------------------------11. DAN -------------------------------------------------------------

const orderBtnClassName = '.order-btn'; //class="order-btn" u HTML-u kod button-a
//const orderButtons = document.getElementsByClassName(orderBtnClassName); 
const orderButtons = document.querySelectorAll(orderBtnClassName);
console.log(orderButtons);

// for(let button in orderButtons){
//     console.log(button);
// }//NE, koristi se u drugim situacijama

const cart = document.querySelector('#cart'); //cart je id celog diva ikonice kanta

const cartPop = document.querySelector('#cart-pop'); //cart-pop je div koji se otvori kad stisnemo na kantu
const pizzaCounterBadge = document.querySelector('#counter');
cartPop.style.display = 'none'; //gadjamo style tog diva, style.display, baratanje css-om pomocu JS
let isCartVisible = false; //da li je vidljiv taj div, da bi mogla da se promeni vrednost
var pizzaCount = 0;


function changeCartPopDisplay() {
    //cartPop.style.display=isCartVisible?'none':'block';
    if (isCartVisible) { //true
        cartPop.style.display = 'none'; //ne vidi se
        //cart.style.color='#FFFFFF';
    } else { //false
        cartPop.style.display = 'block'; //vidi se 
        //cart.style.color='#ffff00';
    }
    isCartVisible = !isCartVisible; //pocetno je bilo false, sluzi da ako se ne vidi ukljuci ga, ako se vidi sakri ga

}

 cart.addEventListener('click', changeCartPopDisplay);



// let nesto=document.querySelector('#abc');
// let podatak=nesto.getAttribute('value');
// console.log(podatak)

// let object = document.querySelector('#abc');
// object.addEventListener('change', function () {
//      changeMe(object);
//      });

// function changeMe(element) {
//     let paragraph = document.querySelector('#par');
//     paragraph.innerHTML = element.getAttribute('value');
// }

//svakom button-u dodamo funkciju, primer ANONIMNE FUNKCIJE
for (let button of orderButtons) {
    button.addEventListener('click', function () {
        selectPizza(button);
    });
}
/*
orderButtons.forEach(button => {
    button.addEventListener('click', function () {
        selectPizza(button);
    });
});*/
//Zapamtiti
function selectPizza(element) {
    console.log(element);
    pizzaCount++;
    pizzaCounterBadge.innerHTML = pizzaCount;
}

//--------------------------- 12.dan OBJEKTI --------------------------------------
{
    let osoba =
    {
        name: 'Mirko',
        age: 18,
        money: 175,
        nicknames:['Micko', 'Mire', 'Miki']
    }

    let osobe = [
        {
            name: 'Jovan',
            age: 17,
            money: 165        
        },
        {
            name: 'Sima',
            age: 19,
            money: 200        
        },
        osoba
    ]
    console.log(osoba);
    console.log(osobe);

    let persona = {
        name: 'Milos',
        surname: 'Markovic'
    }
    console.log(persona.name);
    persona.name = 'Marko';

    console.log(`zovem se ${persona.name} a prezivam se ${persona.surname}`);
    console.log(osobe[0].name);

    osobe.forEach(element => {
        if(element.age>=18) {
            console.log(element);
        }
    })
    persona.age = 20; //kreiranje tog polja

//opisuje jednu stavku porudzbine
//napraviti objekar koji opisuje jednu porudzbinu potrebnoi je da sadrzi id pice, naziv pice, velicinu, kolicinu, cenu jednog komada
//nakon toga napsiati funkciju koja za poslatu picu vraca podatak o ukupnoj ceni jedne stavke porudzbine
//i tu vrednost dodaje u objekat stavke porudzbine

    let order = {
        id: 1,
        name: 'Margarita',
        size: 'XL',
        quantity: 5,
        price: 400 
    }
    let discountDay1 = 2;
    let discount = 0.1;
    let dayToday = new Date();
    function totalPrice(stavka){
        if(dayToday.getDay() == discountDay1) {
            return stavka.totalPrice = stavka.quantity * stavka.price*(1-discount);
        }
        else {
            return stavka.totalPrice = stavka.quantity * stavka.pricel;
        }
    }

    console.log(`Cena jedne pice je ${order.price}, a vi se narucili ${order.quantity}, ukupan racun iznosi ${totalPrice(order)}`);

    //---------------upotreba THIS --------------------------------------------------------------    
    order.izracunajUkupnuCenu = function() {
        return this.price * this.quantity
    }

    console.log(order.izracunajUkupnuCenu());

    console.log(osoba);
    let osobaString = JSON.stringify(osoba); //PRETVARANJE OBJEKTA U STRING, i u JAVI isto
    console.log(osobaString);

    let poruka = '{"naslov":"dobar dan", "telo":"Telo vreteno"}';
    console.log(poruka);
    let porukaObjekat = JSON.parse(poruka); // PRETVARAMO JSON(string) U OBJEKAT U JS
    console.log(porukaObjekat);

}












