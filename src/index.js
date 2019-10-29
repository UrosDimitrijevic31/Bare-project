
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
        case 4: dayInWeekString = "SThursday";
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


















