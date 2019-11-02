/*console.log('caoon');
var b  = '5.23';
console.log(b);
console.log(typeof(b));
console.log(parseFloat(b));
console.log(typeof(parseFloat(b)));
console.log(parseInt(b));
console.log(typeof(b));
console.log(typeof(parseFloat(b)));
var a = "5.123454615";
console.log(a.slice(1, 5));
console.log(a.splite('.'));

let b = 2;
switch(b) {
    case 2: console.log('A');
    // eslint-disable-next-line no-fallthrough
    case 3: console.log('B');
        break;
    case 1: console.log('D');
        break;
    case 4: console.log('C');

}
*/
/* BOCNI EFEKAT
let b = 3;

 switch(b>5){
     case true: console.log('a');
     case false: console.log('b');
     default: console.log("How");
 }
 
let a =5;
let b = 6;
console.log(a,b);


let pom = a;
a = b;
b = pom;

{
    let a = 5;
    let b = 4;

    //zamena brojeva

    a = a * b; 
    b = a / b;  
    a = a/ b; 

    console.log(a, b);
}
var b = 5;

//if(b > 4) if(b<7) ; else console.log('a'); // CESTO PITANJE NA INTERVIJU-U, posle if mora ;

*/

/*
let b = 5;
//console.log(b>5?'B vece od 5':'b je manje ili jednako 5');

console.log(b > 5 ? b > 8?"b je vece od 8":"b je manje ili jednako 8":"b je manje od 5" );

var n = 1000;
var x = 5; //sa kojim brojem je deljivo
var count =0;
console.log(`prvih ${n} brojeva deljivih sa ${x}`)

for(;count<n;) {
    if(count % x == 0) {
        console.log(count++);
    }    
} 
*/


//dan 7. dan--------------------------------------
/*
{
//suma brojeva od 0 do n

    var n = 10;
    let sum = 0;
    for(let counter=0; counter<=n; counter++) {
        sum+=counter;
    }
    console.log(`Sum of numbers from 0 to ${n} is ${sum}`);
}

    console.log(`************************************************************`);

    //ispis brojev od N do 0, ukljucujuci i N

    for(let counter=n; counter>=0; counter--){
        console.log(`${counter}`);
    }

//ispisuje brojeve od Down do UP koji su deljivi sa 3, ukljucujuci DOWN i UP
//napisati kod koji sabira brojeve od DOWN do UP koji su deljivi sa 3, ukljucujuci DOWN i UP
//napisati kod koji ispisuje brojeve od UP do DOWN koji su deljivi sa 3, ukljucujuci DOWN i UP
//Down i up sami zadajete vrednosti

console.log(`********************************************************`);


let down = 10;
let up = 30;

console.log(`brojevi od ${down} do ${up} deljivi sa 3: `);
for(let a=down; a<=up; a++) {
    if(a % 3 == 0) console.log(a);
}
let sum = 0;
for(let a=down; a<=up; a++) {
    if(a % 3 == 0) {
        sum+=a;
    }
}
console.log(`ZBIR BROJEVA OD ${down} to ${up} je ${sum}`);

console.log(`brojevi od ${up} do ${down} deljivi sa 3: `);
for(let a=up; a>=down; a--) {
    if(a % 3 == 0) console.log(a);
}

let sumPlus = 0;
let sumPuta = 1;
let SUMA = 0;
let x = 4;
for(let a=1; a<=x; a++){
    sumPlus += a;
    sumPuta *= a;
    SUMA += sumPlus/sumPuta;
}
console.log(SUMA);



{
    let k = 15;
    let up = 30;
    let counter = up;
    while (counter > k) {
        console.log(counter);
        counter--;
    }
}
*/
/*
let key = 1;
switch (key) {
    case 0:
        console.log('A');
        break;
    case 1:
        console.log('B');
        break;
    case 2:
        console.log('C');
        break;
    default:
        break;
}


{
    let k = 7;
    let counterr = 0;
    let n = 35;
    while(counterr < n) {
        if(counterr % k == 0) break; 
        console.log(counterr);
        counterr++;    
    }

}

var m = 4;
var s ='';
var n = 2;
for(var i=0; i<n; i++){
    s ='';
    for(var J=0; J<m; J++){
        s +='*';
    
    }
    console.log(s);
}
*/
/*  ****
    *  *
    *  *
    ****

var m = 4;
var s ='';

for(var i=0; i<m; i++) {
    s ='';
    for(var j=0; j<m; j++){
        if(i == 0 || i == m-1) { //0. i 3. red
            s +='*';
        }     
        else  {               // gadja 1. i 2. red
            s ='*';
            for(var k=1;k<m-1;k++){
                s+=' ';
            }
            s += '*'
        }    
    }
    console.log(s);
}
*/

let n = 4;
let poklopac = '*'.repeat(n);
let srednjiDeo = '*'+' '.repeat(n-2)+'*';

console.log(poklopac);
for(let i=1;i<=n-2;i++){
    console.log(srednjiDeo);
}
console.log(poklopac);

