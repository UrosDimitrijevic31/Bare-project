
const app = document.getElementById('app');
app.innerHTML = '<p>Hello to bootcamp Pizza</p>';
console.log(app);

//-------------DODAVANJE IKONICA-----------------------------------------------
const social = document.getElementById('social');
social.innerHTML = '<a href="https://www.facebook.com" target="_blank"><img class ="social-icon" src="assets/images/fb_ico.png" /></a>';
social.innerHTML += '<a href="https://www.youtube.com" target="_blank"><img class ="social-icon" src="assets/images/yt.png" /></a>'
social.innerHTML += '<a href="https://www.twitter.com" target="_blank"><img class ="social-icon" src="assets/images/tw.png" /></a>'
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



