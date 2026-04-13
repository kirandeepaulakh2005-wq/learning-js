        //  variables
 
 // var let const
// var x = 1;
// {
    // var x=2;
// }//declarations and initialization
// console.log(x);//undefined
// declare and initialize
// 
// let a=10;
// {
    // let a=20;
    // console.log("Inside:",a);
// }
// console.log("outside:",a);

        //    Datatypes

// 1. Primitive Datatypes->aisi sari values jinko  copy krne pr real copy mil jayegi
//string,number,boolean,null,undefined,symbol,bigint
// let a = 2;
// let b = a;//copy of a
// a = a+12 ; 

// 2. reference/Non-primitive Datatypes->aisi sari values jinko copy krne pr real copy nahi milegi
//object,array,function
//[] {} ()
// let x= [1,2,3];
// let y = x;
// y.pop(); //copy of x
// 
                // strings   
// ''-single qquotes
//""-double quotes
//``-backticks
// let name = "john";
// let name2 = 'john';
// let name3 = `john`;
// 
    //    Number
// let num1 = 10;
// let num2 = 3.14;
// 
        //  Boolean
// let a = true;
// let b = false;
// 
            // Null
// null ka matlab hai appne jannboojh kar koi value nh di
// let c = null;

            //    undefined
// undefined ka matlab hai appne ekk variable banya hai lekin usme koi value nh di to jo value bu default milegi wo undefined hogi
// let d; //undefined

                //  Symbol
// symbol ek unique identifier/immutable/unchangeable hota hai
//future mein hum koi library use karenge ab is case mein un libraries mein kai bar kuchfields hoti hai jisne similar hm bhi banna deta hai aur galti se humari banayi hui fields us library ki original fields ko change kardeta hai to is case mein hum symbol ka use karenge taki humari fields unique ho jaye aur library ki original fields ko change na kar paye
// let u1 = Symbol("id");
// let u2 = Symbol("id");
// 
// let obj={
    // uid:1,
    // name:"john",
    // age:12,
    // email:"john12@gmail.com",
// };
// let u1=Symbol("id");
// 

        //   BigInt
//bigint ka use hum tab karenge jab humein itne bade numbers ke saath kaam karna padega jinka size normal number se zyada hoga
// let c = 9007199254740991n;


// let a=[1,2,3,4,5];
// let b=a;
// b.push(6);
//    ojects


// let l={
    // name:"john",
// };
// let j=l;
// j.name="doe";
// 


             //Dnamic typing->js main static typing nahi hoti hai isliye hum ek variable mein kisi bhi type ki value store kar sakte hai aur us variable ki type kabhi bhi change ho sakti hai
// let x=10;
// x="john";
// x=true;
// x=[];
// x=null;
// x=undefined;

// typeof quirks(e.g.,typeoff null==="object")

          // type coercion->js main automatic type conversion hoti hai jab hum different types ke values ke saath operations karte hai to js apne aap un values ko convert kar deta hai taki wo operation perform ho sake
// console.log(1+"2");//"12"
// console.log(1-"2");//- operator sirf numbers ke saath kaam karta hai isliye js "2" ko number 2 mein convert kar deta hai aur phir operation perform karta hai

            //truly and falsy values
//truly values->aisi sari values jinko boolean context mein true milta hai 
//truly values->"0"," ",[],{},function(){},Symbol(),BigInt(0),Infinity,-Infinity
//falsy values->aisi sari values jinko boolean context mein false milta hai
//falsy values->0,"",null,undefined,NaN,false,document.all,document.forms.length,document.images.length
// let a = 0;
// if(a){   
//     console.log("truly");
// }else{
    // console.log("falsy");
// }
    

      //predict the result:
// true+false;//1
// true+true;//2
// false+false;//0
// true+true+true;//3
// true+true+true+false;//3
// null+1;//1
// undefined+1;//NaN
// 5+"5";//"55"
// 5-"5";//0
// !!undefined;//false
// !!null;//false
// !!0;//false
// !!NaN;//false
// !!"";//false
// !!false;//false
// !!true;//true   


            //  OPERATORS
//Arthmetic,comparison,logical,aassignment,unary,ternary

    //  Arthmetic operator
// 1+2 = 3//Additional operator
// "har"+"rsh" = "harsh"//cocatenation
// 12-2=10//substraction operator
// 12/4=3//division operator
// 12*2=24//multiplication operator
// 12%2=0//modulus operator
// 2**3=8//star star operator
// 
    //  comparison OPERATORS
//  = value dalna 
//  let a=14;//assignment operator
//  double equal OPERATOR not strict(==)
//  12==13//false 
//  12=="12"//true  not check data types only compare values 
//  triple equal OPERATOR   strict(===)
//  12==="12"//false  check data types and values also
//  Not equal to OPERATOR not strict(!=)
//  12!=13//true  opposit to equal
//  !==//strict(!==)
//  12!==13//false opposite to not equal to operator
// Greater than equal to OPERATOR(>=)
// 12>=11//true
// less than equal to operator(<=)
// 12<=11//false
// greater than operator
// 12>11//true
// less than operator
// 42<44//true
// 
    // assignment OPERATORS
// = equal to
// +=plusand equal to
// -=minus and equal to
// *=multiply and equal to
// /=division and equal to
// %=modulus and equal to
// let a=12;
// a+=3;
// a-=11;
// a*=2;
// a/=4;
// a%=3;
// 
// 
    // logical operator
// &&=logical add
// true&&true//true
// false&&true//false
// ture&&false//false
// false&&false// false
// ||=LOGICAL OR 
// false||true//true
// !!=logical Not
// !12//FALSE
// !!12//TRUE
// 
    //   unary operator
// + - ! typeof ++ --//
// +//conert any data type into number
// !//showing the nature of data tyes
// ++//add values to a present one and print it immedaitely
// --//immedaitely decrease the value of current number annd print it 
// -//convert number into navvigation
// 
// 
        //   Ternary operator
        //   ?:
// 12>13 ? console.log("true"):console.log("false");       
// 
// 
// typeof 
// typeof null//oblject//wrong dsda ee null nu
// typeof []//object//wrong dsda ee aray nu
// typeof non //number//wrong type dsda ee
// 
// 
// instanceOf
// used only for Array,function,Object and  work with numbers
// kind of child from parents 
// not work with perimitive values

                // Controlflow
// if ,else ,else if
// if (12>17) {    
// }
// else if(10){
// }
// else{}
               // switch case
// switch(3){
    // case 1:
        // break;
        // case 2:
            // break;
            // case 3:
                // console.log("kiran");
                // break;
                // default:
// }
//early return pattern
// function getval(val){
    // if(val<100)return"A";
    // else if(val<75)return"B";
    // else return"c";
// }
// console.log(getval(75));
//  problem
//  function getGrade(score){
    // if(score >=90 && score<=100)
    // {
        // return"A";
    // }
//   else if(score >=80 && score<=89)
//  {
    //  return"B";
//  }
//   else if(score >=70 && score<=79)
//  {
    //  return"C";
//  }
//   else if(score >=60 && score<=69)
//  {
    //  return"D";
//  }
//   else if(score >=33 && score<=59)
//  {
    //  return"E";
//  }
//  else if(score>=0 && score<=32){
    // return"fail";
//  }
//  else{
    // return "invalid";
//  }
// }
// console.log(getGrade(54));

            // Rock-paper-scissorslogic
// function rps(user,computer){
// if(user==="rock" && computer==="scissor")return"user";
// if(user==="rock" && computer==="paper")return"computer";
// if(user==="scissor" && computer==="rock")return"computer";
// if(user==="paper" && computer==="rock")return"user";
// if(user==="scissor" && computer==="rock")return"computer";
// }
//   rps("rock","scissor");   

                    //   oraonthermethod
// function rps(user,computer){
// if(user===computer) return"draw";
// if(user==="rock" && computer==="scissor")return"user";
// if(user==="paper" && computer==="rock")return"user";
// if(user==="scissor" && computer==="paper")return"user";
// return "computer";
// }
// console.log(rps("rock","scissor"));
// 

            //   Loops
//reperat karne ko loop khethe heh            
//for  while foreach dowhile
//1 1 1 1 1 1 1 1 1 1 1 print repeatly and 1 also
//1 2 3 4 5 6 7 8  9 print repeated

//kaha se jana hai->kaha takk jana hai->kaise jana hai
//for (1-40)
// for(let i=1;i<101;i++) {
    // console.log("kiran");
    // console.log(i);
// }
// kaha sejana hai->kab rukna hai-> kaise jan hai
//while (hello ajaye tab rukna heh)
// let i=1;
// while(i<30){
// console.log(i);
// i++
// }
// 
//do-while  ekk bar loop jaror chalega
// let i=12;
// do{
    // console.log(i);
    // i++;
// }
// while(i<2)

//break loop used for breaking in loop
// for(let i=1;i<201;i++){
    // console.log(i);
    // if(i===32){
        // break;
    // }
// }

//continue loop 
// for(let i=1;i<201;i++){
    // if(i===32){
    // continue;
// }
// console.log(i);
// }
// 
// problemsrelatedloops
//1.print values 1 to 10
// for(i=1;i<=10;i++){
//     console.log(i);
// }
//2.print values 10 to 1
// for(j=10;j>0;j--){
//     console.log(j);
// }
// // udingwhileloop
// let k=10;
// while(k>0){
//     console.log(k);
//      k--;
// }
// //3. print even numbers from 1 to  20
// for(let l=1;l<=20;l++){
//     if(l%2===0){
//         console.log(l);
//     }
// }
// //4.print odd numbers from 1to 15 usinga while loop.
// let a=1;
// while(a<=15){
//     if(a%2===1){
//         console.log(a);
//     }
//     a++;
// }
// //5. print the mutilication table of 5(i.e.,5*1=5...5*10=50).
// for(let i=1;i<=10;i++){
//     console.log(`5 * ${i} =${5 * i}`);
// }
// //6.find the sum of numbers from 1 to 100 
// let sum=0;
// for(let e=1;e<=100;e++){
//     sum=sum+e;
// }
// console.log(sum);

// //7. print all numbers between 1to50 thar are divisible by 3.
// for(let d=1;d<=50;d++){
//    if (d%3===0){
//    console.log(d); 
//    }
// }
// // //8.Ask the user for a number and print whether each number frrom 1 to that number is even or odd
// let val=prompt("given a number");
// for(let k=1;k<=val;k++){
//     if(k%2===0){
//         console.log(`${k} is even`);
//     }
//     else{
//         console.log('${k} is odd');
//     }
// }
// //9.count how many numbers between 1 to 100 are divisible by both 3and 5.
// let val1=prompt("given a number");
// for(let r=1;r<=100;r++){
//     if(r%3===0 && r%5===0){
//         console.log(`${r}is ddivisible by both 3 and 5 `);
//     }else{
//         console.log(`${r}not dividible by both 3 and 5.`);
//     }
// }


// brekandcontinueexamples
// 1.stop AT FIRST MUTIPLE OF 7.
// for(let i=1;i<=100;i++){
//     console.log(i);
//     if(i%7===0){   
//         break;
//     }
  
// }
//2.skip multiples of 3
// for(let i=1;i<=21;i++){
//     if(i%3===0)
//         continue;
//         console.log(i);
//     } 

    //3.print first 5 odd numbers only
    // write a ;loop  from 1 to 100  that:
//.priints only 5 odd numbers
//. then syops the loop
//use both if,continue,and a counter+break

    
    // let count = 0;
    // for(let u=1;u<=100;u++){
    //     if(u%2===1){
    //         count++;
    //         console.log(u);
    //     }
    //     if(count===5) break;
    // }

                //functions  
//agar code likh diya to woh turant chal jata hai js main code likhne ke baad turant execute ho jata hai isliye agar humein koi code baar baar use karna hai to hum us code ko ekk function ke andar likhenge taki jab bhi humein us code ki jarurat pade to hum us function ko call kar sakte hai aur wo code execute ho jayega
// function means codde turant na chale koi action pr hi chale
//code reuse hojnda ee te memory bhi save hojndi ee
 //1.example function declaration
//   function lolo(){
//         console.log("happy new year");
//  }
//  lolo();//function call

//  //2. function expression
//  //  let fnc=function(){
//     // console.log("hello");
// //  }
// // fnc();//function call

// // //3.  fat arrow function
// let fnc1=()=>{
//     console.log("hello");
// }
// fnc1();//function call

// // parameters and arguments
// //parameters->function ke andar likhe gaye variables ko parameters kehte hai    
// //arguments->function ko call karte waqt hum jo values pass karte hai unko arguments kehte hai
// function dance(w1){
//     console.log(`${w1} is dancing`);
// }
// dance("kiran");//function call with argument
// dance("manpreet");//function call with argument

// function add(a,b){
//     console.log(a+b);
// }   
// add(12,13);//function call with arguments
// add(100,200);//function call with arguments

// // 1.default parameters
// function add(k1=0,k2=0){
//     console.log(k1+k2);
// }
// add(1,2);

// //2.rest parameters
// //jab arguments kai sarre ho to humein utne hi parameter banane padege,issey bachnne ke liye huj rest ka use krte hai(...)agr...function ke parameter space mein lagge to wo rest operator hai and agar wo arrays and objects mein lage to wo spread operator hai
// function abcd(...val){
//     console.log(val);

// }
// abcd(1,2,3,4,5);//function call with arguments

//             //return and early return 
// //return means jaha se aye ho wahi dall denge
// function abcd(v){
//     return 12+v;
// }


// let val=abcd(23);
// console.log(val);//35

// //early return pattern
// //alreday done in line 205

// // first class function
// //function ko values kitarah treat karte hai usse first class function kehte 
// function abcde(val){
//     val();
// }
// abcde(function(){
//     console.log("hello");
// });
// //high order function
// // woh function hota hai jo ki return kare funtion ya fir accept kare ekk function appne parameter mein
// function abcd1(val){
    
// }
// abcd1( function(){
// });

// // or
// function abcd1(){
//     return function(){
//         console.log("hello");
//         }
// }
// abcd1()();

//         //pure function and impure function
// //pure function->wo function hota hai jo ki same input par hamesha same output deta hai aur uska koi side effect nahi hota hai
// //aisa function jo ki bahar ki values ko na  badlewo hai pure function
// let w=12;
// function abcdd(){
//     console.log("kirandeeep aulakh");
// } 
//   abcdd();//pure function
// //impure function
// function hui(){
//     w++;
// }//aisa function jo bahar ki value ko badal de wdo hai impure function


//              //closure imporatnt for interview an lexical scopping
// //ek function jo return kare ek aur function aur return hone walla function hamesha use karega ooke parent function ka koi variable
// function abb(){
//     let d=12;
//     return function(){
//         console.log(d);
//     }
// } 
// abb()();
// //lexical scope->jo function apne parent function ke variables ko access kar sakta hai usse lexical scope kehte hai
// //physical scope->jo function apne parent function ke variables ko access nahi kar sakta hai usse physical scope kehte hai aur fuction ke andr hi access kar sakta hai usse block scope kehte hai 
// //lexical scopping->jo function apne parent function ke variables ko access kar sakta hai usse lexical scope kehte hai   
// function aa(){
//     let r=12;
//      function bb(){
//     let k=23;
//       function cc(){
//         let m=34;
//      }
//   }
// }

//                   //IIFE->Immediately Invoked Function Expression
// //aisa function jo ki turant execute ho jata hai usse IIFE kehte hai
// (function(){
//     console.log("hello KIRAN");
// })();


//        //hositing differences between declaration and expression
// sss();


// function sss(){
//     console.log("kkkk");
// }//hoisting is possible in function declaretion means function declaration se phela hum osse call kar sakte  hai

// let aaaa=function(){
//     console.log("hello");
//     }
//     aaaa();//function expression mein hoisting possible nahi hoti hai matlab function expression se phela hum osse call nahi kar sakte hai

//             // practice set for functions
// //1.what is the diffrence between function declaration and expression in terms of hoisting?
// //function declaration mein hoisting possible hoti hai matlab function declaration se phela hum osse call kar sakte  hai
// //function expression mein hoisting possible nahi hoti hai matlab function expression se phela hum osse call nahi kar sakte hai

// //2. convert this function into arrow function:
// //function multiply(a,b){
//     // return a*b;
// //}
// //arrow function
// let multiply=(a,b)=>{
//     console.log(multiply(2,3));
//      return a*b; 
     
//  }
//  //3. identify the output of this code:
//  function say(name="kiran"){
//     console.log("helo",name);
//  }
//     say();//helo kiran

// //4.what does the ...operator mean in parameters ?
// //jab arguments kai sarre ho to humein utne hi parameter banane padege,issey bachnne ke liye huj rest ka use krte hai(...)agr...function ke parameter space mein lagge to wo rest operator hai and agar wo arrays and objects mein lage to wo spread operator hai
// //example
// function asa(...numbers){
//     console.log(numbers);
// }

// asa(1,2,3,4,5);//function call with arguments

// //5. use rest parameter to accept any number of scores and return the total.
// function getscore(...scores){
// let total=0;
//     scores.forEach(function(val){
//     total=total+val;
//     });
//     return total;
// }
// console.log(getscore(10,20,30,40,50));//function call with arguments

// //6.fix the funtion uing early return pattern
// function chekage(age){
//     if(age<18){
//         console.log("too young");
//     }else {
//         console.log("allowed");
//     }
// } 
// //early return pattern
// function checkage(age){
//     if(age<18) return "too young";      
//         return "allowed";
//     }
// console.log(checkage(55));

// //7.identify the output of this code:
// function s(){
//     return;
// }
// console.log(s());//undefined

// //8.what does it mean when we say"a function is first class citizen in js?
// //function ko values kitarah treat karte hai usse first class function kehte hai

// //9.write a function that takes another function as an argument and calls it.or 
// //pass  a function into another function and call it inside.
// function callFunction(func){
//     func();
// }       
// callFunction(function(){
//     console.log("hello");
// }   
// );

// //10.can youn assign to a variable and then call it?
// let e=function(){
//     console.log("hello");
// }
// e();//function call with 

// //11.what is a higher order function?
// // woh function hota hai jo ki return kare funtion ya fir accept kare ekk function appne parameter mein
// function higherOrderFunction(func){
//     func();
// }
// higherOrderFunction(function(){
//     console.log("hello");
// }
// );

// //.12.identify the higher order function in this code:
// [1,2,3].map(function(val){
//     return val*2;
// });//map is a higher order function because it takes a function as an argument and returns a new array

// //13.identify the pure and impure functions in this code:
// let total=0;
// function addToTotal(num){
//     total+=num;//impure function because it changes the value of total which is outside the function
// }

// //14.convert the above function into a pure function
// let Total=0;
// function addToTotal(num){
//     let newTotal=Total+num;
//     newTotal+=num;//pure function because it does not change the value of total which is outside the function
// }   

// //15.what is a closure and how does it work in js?when it s created?
// //ek function jo return kare ek aur function aur return hone walla function hamesha use karega ooke parent function ka koi variable
// //closure is created when a function is defined inside another function and the inner function has access to the variables of the outer function even after the outer function has finished executing
// //example of closure
// function ccc(){
//     let p=12;
//     return function(){
//         console.log(p);
//     }
// }
// // also a clouser
// function outer(){
//     let count=0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }
// const counter=outer();
// counter();//1
// counter();//2

// //16.convert this function into an IIFE
// function greet(){
//     console.log("hello");
// }

// (function greet(){
//     console.log("hello");
// })();

// //17.what is the use of IIFE ? name one real-world use cases.
// //IIFE ka use hum tab karte hai jab humein ekk function ko turant execute karna hota hai aur us function ko baar baar use nahi karna hota hai
// //real-world use case of IIFE->jab humein ekk block scope create karna hota hai taki humari variables global scope mein na chale jaye to us case mein hum IIFE ka use karte hai taki humari variables block scope mein rahe aur global scope mein na jaye   
// //example

// let kiran =(function(){
//     let score=0;
//     return{
//         getscore:function(){
//             console.log(score);
//         },
//         setscore:function(val){
//             score=val;
//         },
//     };
// })();

    
// //18.what will be the output here and why?
// greet();
// function greet(){
//     console.log("hello");
// }//hello because of hoisting in function declaration    

   
//              //  practice set for functions
// // write a BMI calculator function that takes weight and height as parameters and returns the BMI value. Also, classify the BMI value into underweight, normal weight, overweight, and obese categories based on standard BMI ranges.
// function BMI(weight, height){
//     return  weight / (height * height);
// }
// console.log(BMI(69,1.7).toFixed(2));

// //create a reusable discount calculator (HOF):
// function discountCalculator(discount){
//     return function(price){
//         return price-price*(discount/100);
//     };
// }
// let ten = discountCalculator(10); // 10% discount
// let twenty = discountCalculator(20); // 20% discount
// console.log(ten(100)); 
// console.log(twenty(100)); 

// //build a counter using closures:
// function counter(){
//     let count=0;
//     return function(){
//         count++;
//         return count;
//     };
// }
// let c=counter();
// console.log(c());
// console.log(c());
// console.log(c());

// let d=counter();
// console.log(d());
   

// //create a pure function to transform a value:
// function double(val){
//     return val*2;

// }
// console.log(double(5));


// //use IIFE to isolate variables:
// (function(){
//     const password="mysecretpassword";
//     console.log("password");
// })();
//  console.log(password); // ReferenceError: password is not defined


                 //Arrays
// arrays are used to store multiple values in a single variable and they are ordered collection of items and they are mutable
// let arr=[1,2,3,4,5];
// console.log(arr[0]);//1
// console.log(arr[4]);//5

//create array                   
// let marks=[12,23,34,45,56];//index 0-4 layies and which value not layies in the array means element ,answer of those will be undefined.
// //or
// // let arr=new Array(1,2,3,4,5);
// //access array elements using index or console.log(arr[0]);//1

// //how to modify an array element
// let arr=[1,2,3,4,5];
// arr[0]=10;//modify the first element of the array
// console.log(arr);//[10,2,3,4,5]

//                  //arary methods
// //1.push() method->used to add an element at the end of the array
// let arr=[1,2,3,4,5];
// arr.push(6);
// console.log(arr);//[1,2,3,4,5,6]

// //2.pop() method->used to remove the last element of the array
// let arr=[1,2,3,4,5];
// arr.pop();
// console.log(arr);//[1,2,3,4]

// //3.shift() method->used to remove the first element of the array
// let arr=[1,2,3,4,5];
// arr.shift();
// console.log(arr);//[2,3,4,5]

// //4.unshift() method->used to add an element at the beginning of the array
// let arr=[1,2,3,4,5];
// arr.unshift(0);
// console.log(arr);//[0,1,2,3,4,5]

// //5.splice() method->used to add or remove elements from the array
// let arr=[1,2,3,4,5];
// arr.splice(2,1);//2=index from where to start to remove element and 1=number of elements to remove 
// console.log(arr);//[1,2,4,5]//remove 1 element from index 2

// //6.slice() method->used to create a new array from a portion of an existing array
// let arr=[1,2,3,4,5];
// let newArr=arr.slice(1,4);//1=index from where to start and 4=index from where to end but end index is not included
// console.log(newArr);//[2,3,4]//create a new array from index 1 to index 3

// //7.indexOf() method->used to find the index of the first occurrence of an element in the array
// let arr=[1,2,3,4,5];
// console.log(arr.indexOf(3));//2

// //8.includes() method->used to check if an element is present in the array or not
// let arr=[1,2,3,4,5];
// console.log(arr.includes(3));

// //9.length property->used to find the number of elements in the array
// let arr=[1,2,3,4,5];
// console.log(arr.length);//5 

//  //10.forEach() method->used to execute a provided function once for each array element
let arrrr2=[1,2,3,4,5];
arrrr2.forEach(function(val){
    console.log(val+5);
}
);//run array only not return new .

// //                         // reverse and sort
// // //reverse()->used to reverse the order of the elements in the array
// let arr=[1,2,3,4,5];
// arr.reverse();
// console.log(arr);//[5,4,3,2,1]


// //sort() = used to declare array in ascending and descending order.
//.sort() se hum numerical values sort nhi kr sakte without any formula but character values sort kr sakte heh.
// let arr1=[11,62,3,4,25];
// let sr = arr1.sort(function(a,b){
// //return a-b;//ascending order
// return b-a;//descending oreder
// });


//               //Map,Filter ,Reduce
// //map sirf tab use krna heh jabb appko ekk naya array banana hai pichle array ke data ke basis par
// //map dikhate hi sath mnn mein ek blank array bana liya kro
// //jab bhi apko koi essa case dikh jaye jaha par ek array se naya array banega and wo naya array kuch values ko rakhega tb map lagega
// let arr3=[11,15,4,18];
// let newarr=arr3.map(function(val){
//     // return 12;
//     if(val>10) return val;
// });


// //Filter means jo element condition ko satisfied krage wahin new array me ayege.
// let arr5=[1,8,5,6];
// let dd=arr5.filter(function(val){
//     if(val>4) return true;
// });


// //reduce means koi badhe array ko shotte shotte parts me divide kr dena aur last me ekk hi  value bnani heh.
// let arr7=[1,5,6,2,4];
// let ee=arr7.reduce(function(accumulator,val){
//     return accumulator+val;
// },0);//acccumulator jo bar bar appni value ko yadd rahta heh aur return value acumulator me jati heh aur woh return value ko current vlue leta heh.


//                  //Find,Some,every(intro level)
//find ka matlab heh koi bhi ekk element jo condition ko satisfied krta heh woh return hoga.
// let arr14=[{id:1,val:1},//here val=object.
//     {id:2,val:2},
//     {id:3,val:1},
// ];
// let va=arr14.find(function(val){
//     return val.val===1;//only return first person which is satisfied condition.
// });   

//some ka matlb heh agr array ka koi bhi element jo condition ko satisfied krta heh then array true batayega warna false .
// let arr77=[10,30,32,90];
// let any=arr77.some(function(val){
//     return val>85;
// });

// //every matlb heh ke sare element condiotion ko satisfied  krega ja nhi agr krega to retrun hoga true nhi to false.
// let arr44=[10,15,20,44,77];
// let ww=arr44.every(function(val){
//     return val>11;
// });

//               //destructuring and spread operator
// // destructuring ka matlb heh hum kuj elements arrays se bhar lete heh jo ki valuse hoti heh variables ki.
// let arr88=[1,2,3,5,6];
// let[a,b,,c]=arr88;              

// //spread operator means array ki copy lena aur agar hum naye bne array me  koi change krege to jo phela wale arr jisko hunme copy kiya tha usme koi changes nhi ayege.
// let arr=[1,2,3,4,5,6];
// let arr2=[...arr];
// //... is called a spread operator and its also called rest functio in functions.

//                 //questions about array
// //1.create an array with 3 fruits and print the second fruit.
// let arr5=["apple","banana","mango"];
// console.log(arr5[1]);
// //or
// arr5[2];//used for console .

// //2.add  "mango" at the end and "pineapple" at the begining of the array.
// arr5.push("mango");
// arr5.unshift("pineapple");

// //3.replace banana with kiwi in the array.
// let fruit=["mango","banana"];
// fruit.pop();//remove the element from an array.
// fruit.push("kiwi");

// //4.what is the difference between push() and unshift()?
// //push is used to insert element at the end of array
// //unshift is used to insert element at beining of array.

// //5.Insert "red" and "blue" at index 1 in this array:
// let colors=["green","yellow"];
// colors.splice(1,0,"red","blue");

// //6.extract only the middle 3 elements from this array:
// let items=[1,2,3,4,5,6];
// let newarr=items.slice(1,4);

// //7.sort this array alphabetically and then reverse it:
// let names=["priya","kiran","mnpreet","sony"];
// names.sort().reverse();

// //8.use .map() to square each number:
// let arrr=[1,2,3,4];
// let rr=arrr.map(function(val){
//     return val*val;
// });

// //9.use filter() to keep numbers greater than10:
// let ar=[5,12,8,20,3];
// let qq=ar.filter(function(val){
//     return val>10;
// });

// //10. use reduce() to find the sum of this array:
// let arrrr=[10,2,30];
//  let sum =arrrr.reduce(function(Acc,val){
//    return Acc+val;

// },0);

// //11.use find() to get the first number less than 10:
// let arrrrr=[12,15,3,8,20];
// let ans=arrrrr.find(function(val){
//     return val <10;
// });

// //12. use some()to check if anny student has scored below 35:
// let scores=[10,55,40,80];
// let anss = scores.some(function(val){
//     return val<35;
// });

// //13.use every() to check if allnumbers  are even:
// let rrr=[2,4,6,8,10];
// let uu=rrr.every(function(val){
//     return val%2===0;
// });

// //14.destructure this array to get firstname nd lastname:
// let fullname=["kirandeep","kaur"];
// let [firstname,lastname]=fullname;

// //15.merge two arrays using spread operator:
// let ara=[1,2];
// let rar=[3,4];
// let cc=[...ara,...rar];

// //16.add "india" to the start of this array using spread:
// let countries=["usa","UK"];
// countries=["india",...countries];

// //17.clone this array properly (not by reference):
// let ss=[1,2,3];
// let arrr2=[...ss];


//                      //OBJECTS....
// //used {} for obejects and used when we gather information related to only one thing,person etc.
// let obj={} ;//blabnk object.
// let obj1={
//     name:"kiran",
//     rollno:348,
//     class:b.techCSE,
// };
// console.log(obj1.name);
// let aa="name";
// obj1[aa]//convert aa into name which is present in the object1.make sense in future dom.
// // or run at console we use :
// //obj1.name
// //obj['name']

// //key value structure:
// let obj2={
//     name:"kiran",//key:name,value:kiran.
// };

//                //dot vs bracket notation
// //dot and bracket both are ways to access  objects,it will be write as:
// //dot:
// obj2.name
// //bracket:
// obj2['name']



//                       //nesting and deep access
// //nesting ka matlb heh ekk ke andr ekk object.
// //deep acess ka mtlb heh object ke andr jo object heh osee access krna.
// const user={
//     name:"kiran",
//     address:{
//         city:"kotkapura",
//         pin:151207,
//         location:{
//             village:"aulakh",
//             dis:"Faridkot",
//         },
//     },
// };

// console.log(user.address.location.village);//deep access

//             //object destructuring
// //mtlb variables ki form me object ko access krta.used in react .
// // to acess long objects used it as:
// let{village,dis}=user.address.location;

               //looping
//for-in
let objj={
    name:"kiran",
    age:20,
    email:"kirandeep@gmail.com",
};
for(let key in objj){
    console.log(key,objj[key]);
    // console.log(Key,objj[key]);
}

//object.keys use hota heh jabb object ki keys ko array bnana hoh.
let objb={
    name:"kiran",
    age:20,
    email:"kirandeep@gmail.com",
};

Object.keys(objb);

//object.entries ka mtlb heh array ke andr array heh
Object.entries(objb);
 

              //copying objects:
//spread ka mtbl heh hum original object ki copy bnate heh aur using ... which is called spread. yeh hum nested object ke nhiuse krsakte kioki ess me objects references pass krne lagg jati heh.
//object.assign bhi original object ki copy krne ke km atta heh but essme hum ek blank object bui use krte heh.
//deep clone used gor nested objects.

let obj2={...objb};//spread.
let obj3=Object.assign({price:Infinity},obj2);//object.assign
 //deep cloning works in deep clone:
 let obb={
    name:"kiran",
    age:20,
    address:{
        city:"kotkapura",
    },
};

let obb2=JSON.parse(JSON.stringify(obb));//stringify se object string ki form me convert hoti heh aur fir bhadh me yeh parse ke karan asli object me ho jati heh.

             //Optional chaining  and computer properties:
//optional chaining ka mtlb heh ki agar hm future me kese bhi object ki key ko change krte heh aur osse ohee valle addresss se access krtave heh to code hume error ns denh aur undefined dede.
let obbb={
    name:"kiran",
    age:20,
};
// obbb?.names=not show error show answer as undefined.

//computed properties ka matlb heh key aur uski value ko add krna array me.
let  role="admin";
let ooo={
    name:"kkkk",
    age:20,
    address:{
        city:"kot",
    },
    [role]:"kkkk",
};//new key and value will added in that array.


               //Questions:
// 1create an object for a student with name,age,and iseneolled.
let tt={
    name:"kiran",
    age:20,
    isEnrolled:true,
};

//2.can an object key be a number or boolean?try this
const ojj={
    true:"yes",
    42:"answer",
};
console.log(ojj[42]);//yes

//3.acess the name from above object:
tt["name"]

//4.give a dynamic key let key="age",how will you access user[key}?
let key="age"
const user={
    age:20,
};
user[key]

//5.from the object below,print the cityy:
let ssd={
    city:"kot",
        location:{
            village:"aulakh",
        },
    };
ssd?.address?.location?.cityy//for undefined


//6.destructure the city and village .//
let {city}=ssd;
let {village}=ssd.location;
 
// //7.destructure the first name as a variable.//
const gser={
    "first-name":"kiran",

};
let {"first-name":firstNam}=gser;


//8.use objects.entries() to print all key-value pairs as:
//title:js
//deration:4weeks
const course={
    title:"js",
    duration:"4weeks",
};
Object.entries(course).forEach(function(val){
    console.log(val[0]+":"+val[1]);
}); 