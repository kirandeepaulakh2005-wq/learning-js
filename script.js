               //Scope,Execution context,and closure
//scopre=>sccope heh app apne created variables and functions kaha tak youse kar sakte hoh
//scope->functional scope,global scope and block scope
   
                // variable scope
//functional scope->function ke andr hi use hoh sakte hai
function abcd(){
    var a = 12;
};
//global scope->poore code mein kahi  bhi use kr sakte hai
var b=12;

//block scope->{} curly braces mein hi use ho sakte hai
{
    var c=12;
};

                //Execution context:memory creation & execution phase
//execution context->js sabse phele jaise hi aoka function dekhta hai sabse phele js banata hai execution context,ye ekk process hai jo ki d different phases  mein chalta hai ,memory phase and doosre ka naam hai execution

                //lexical scoping and dynamic scoping
//lexical scoping->app kaha pr physically avialable hoh ye pore tareke se depend krta hai ki app kya access kr paoge 
function abcd(){
    let a=12;
    function defg(){
        console.log(a);
    }
};

//dynamic scoping->kaha se call kr rhe hoh uspe depend krega ke kya value milegi.
let a = 12;
function abcd(){
    console.log(a);
}
function defg(){
    let a=13;
    abcd();
}
 defg();

              //closure definition and how variables are preserved.
//closures->yeh hote hai functions jo ke kesi parent function ke andr hoh aur andr wala function return ho raha hoh,and returing function use kare,parent function ka koi variable 
//private variables kr sakte hoh
//global pollution rok sakte hoh
function abcd(){
    let a=12;
    return function(){
        console.log(a);
    }
};

//how variables are preserved:
//ye sach hai function ke khatam hone pe appka function and uske varibles khatam ho jatte hai,par jab bhi closures banta hai to  apkka function aur uske variables ka ekk backlink bnaya jatta hai aur uska naam hota hai  [[environment]]
  
                      //use cases:private counters,encapsulation
//private counter:
function countForMe(){
    let c = 0;
   return function(){
    c++;
    console.log(c);
   } ;
};

let fnc=countForMe();
fnc();
fnc();

//Encapsulation:Hum kuch data ko hide/protect kar dete hain taaki koi bhi bahar se directly change na kar sake.
function clickLimiter(){
    let click=0;
    return function(){
        if(click<5){
         click++;
         console.log(`clicked:${click} times`);
        }
        else{
            console.log("LIMIT EXCEEDED,TRY AFTER SOME TIME")
        }
    };
};
let fnc1=clickLimiter();
fnc1();
fnc1();
fnc1();
fnc1();
fnc1();
fnc1();


                        //The This keyword
//this keyword special keyword hai,kyuki jaise ki bakki sare keywords ki nature or value same rehti heh  pr eska nature oor value badal jata hai is batt se ki app usey kaha use kr rahe hoh.

//this in global scope,function,method,event handler,class
//globlal mein this ki value:window hoti heh
//function mein this ki value:window hoti heh
//method with es5 function mein this ki value:object hoti heh
//method with es6 function mein this ki value:window hoti heh
//es5 function inside es5 method mein this ki  value:window hoti heh
//arrow function inside es5 method mein this ki value:object hoti heh
//event handler mein this ki value:element hoti heh
//class mein this ki value:blank object hoti heh.


//this in global scope:
console.log(this);//window hoti heh value

//this in function:
function abcd()
{
    console.log(this);
}
abcd();//window hoti heh value

//this in method:
let obj={
    name:"kiran",
    sayName:function(){
       console.log(this); 
    },
};//function jo object ke andr hoh usse  method kehte heh aur ess process ko hum khethe heh method with es5 function.
//kabhi bhi esko humne arrow function nhi banana heh aur kabhi bhi method ke andr koi bhi aur function nhi bnana heh kioi esse this appni value lose kr dega. 
//aur andr wale function ko object bnane ke liye hum use krte heh arrow function(()=>{})  that is called method with  es6 arrow function.
obj.sayName();


//this in event handler :woh bnda yaha eventlistener lagga hoh.
document.querySelector("h1").addEventListener("click",function(){
 console.log((this.style.color="red"));
});

//this in class:this ki value blank object  hoti heh.
class Abcd{
       constructor(){
        console.log("heyhey");
        this.a=12;
       }
    }
    let val=new Abcd();

//arrow functions this:
//method mein hum kabhi bhi starting arrow function se nhi krte kioi this ki value arrow function ke parent function se li jati heh 
let obj1={
    name:"kiran",
    sayName:()=>{
       console.log(this); 
    },
};
obj1.sayName();//value object ki jagah window ayegi kioki arrow function ka koi bhi parent function nhi heh.
//correct way to write arrow function in bject:

let obj2={
    name:"kiran",
    sayName:function(){
        let defg=()=>{
       console.log(this); 
    };
    defg();
    }
};
obj2.sayName();

//lexical this ka matlab hota hai ki this apni value current function se nahi, balki outer surrounding scope se leta hai.
//Ye mostly arrow functions (=>) mein hota hai.



                     //Manual binding:bind,call,apply
//manual binding:function ko call krte time app set kr sakte ho ki uski this ki value kya hogi.

//call:
let obj3={
    name:"kiran",
};
function abcd(a,b,c){
    console.log(this,a,b,c);
}
abcd.call(obj3,1,2,3);

//apply:apply bhi call hi krega but yeh sirf 2 parameters hi pass krta heh  ess liye hum values ko array ki form me bhejhte heh tn jo sari values call ho paye pr hum esse rarely use krte heh.
let obj4={
    name:"kiran",
};
function abcd(a,b,c){
    console.log(this,a,b,c);
}
abcd.apply(obj4,[1,2,3]);

//bind:yeh ekk naya function deta heh means jo hum real function lete hai yeh uski copy bna deta heh.
let obj5={
    name:"kiran",
    age:21,
};
function abcd(a,b,c){
    console.log(this,a,b,c);
}
let fnc2 = abcd.bind(obj5,1,2,3);
fnc2();


                      //object oriented
//humein shikhna hai factories bnana ,matlab ki app ek bar blueprint bana do  ki har object kaisa dikhagea and hum log naye naye objects with different values bana payege,yahi upar upar se poora kamm hai oops mein aur yeh hota heh object-oriened.

//constuctor functions:esme hum phela letter bada rakhte heh aur hu esse new se chalate heh 
function CreatePencil(name,price,color,company){
    this.name=name;
    this.price=price;
    this.color=color;
    this.company=company;
    this.write=function(text){
        let h1=document.createElement("h1");
        h1.textContent=text;
        h1.style.color=this.color;
        document.body.append(h1);
    };
}
 let Pencil1= new CreatePencil("nataraj",10,"black","nataraj");
 let Pencil2=new CreatePencil("Doms",10,"green","DOMS");
//agr tumara constructor function koi field apne prototypr par attach krle to os constructor se banne wale sabhi new instances yanni ki objects ke pass wo field automatically chali jatti heh.

//prototype:Prototype ek backup object hota hai jahan JS missing properties/methods ko dhundta hai.
function CreatePencil(name,price,color,company){
    this.name=name;
    this.price=price;
    this.color=color;
    this.comapny=company;
     }
     CreatePencil.prototype.write=function(text){
        let h1=document.createElement("h1");
        h1.textContent=text;
        h1.style.color=this.color;
        console.log(h1);
        document.body.append(h1);
     };
//yeh hum use krte heh taki memory save ho sake
 let Pencil= new CreatePencil("nataraj",10,"black","nataraj");
 let Pencil3=new CreatePencil("Doms",10,"green","DOMS");


                           //ES6 classes
//classes:JavaScript me class ek blueprint hoti hai jisse hum multiple objects create karte hain.
//constuctor:Ye ek special function hota hai jo object create hote hi automatically run hota hai aur je classes me sabse phele chalta heh.

class CreatePencil1{
    constructor(name,company,price,color){
        this.name=name;
        this.comapny=company;
        this.price=price;
        this.color=color;
    }
    erase(){
        document.body.querySelectorAll("h1").forEach((elem) => {
            if(elem.style.color === this.color){
        elem.remove();
            }
        });
    }
    write(text){
        let h1=document.createElement("h1");
        h1.textContent=text;
        h1.style.color=this.color;
        document.body.appendChild(h1);
    }
}

let p1=new CreatePencil1("Natraj","Natraj",10,"red");
let p2=new CreatePencil1("Apsara","Apsara",15,"blue");

//methods:Method basically ek function hota hai jo object ke andar hota hai.
let user = {
    name: "Kiran",

    sayHello: function(){
        console.log("Hello");
    }
};

user.sayHello();

//extends: means ek class dusri class ki properties aur methods use kar sakti hai.
//super:super ka use parent class ko access karne ke liye hota hai.

class User{
    constructor(name,address,username,email,role){
        this.name=name;
        this.adress=address;
        this.username=username;
        this.email=email;
        this.role="user";
    }

    checkrole(){
console.log(`you are a ${this.role}`);
    }
    write(text){
        let h1=document.createElement("h1");
        h1.textContent=`${this.name}:${text}`;
        document.body.appendChild(h1);
    }
}

class Admin extends User{
    constructor(name,address,username,email,role){
        super(name,address,username,email,role);
        this.role="admin";
    }
    remove(){
        document.querySelector("h1").forEach(function(elem){
            elem.remove();
        });
     }
}

let u1=new User("kiran","aulakh","kiran123","kiran@gmail.com");
let u2=new User("jashan","faridkot","jashan123","Jashan@gmail.com");
let a1=new Admin("admin1","India","admmin123","a@gamil.com");


                            //Prototypal inheritance vs classical inheritance
//inheritance:ekk class se dosari class me kuj lena.
//classical inheritance:Means classes bnana aur unhe extend kr dena.

//Prototypal inheritance:object-object inheritance krta heh
//ek object hai app chao to uski sarri props/methods ko inherit kara dete ho dosre object mein.

let coffee={
    color:"dark",
    drink:function(){
        console.log("gut gut gut");
    },

};

let arabiataCoffee=Object.create(coffee);
arabiataCoffee.taste="bitter";
arabiataCoffee.drink();

              //callbacks,promises,and async/await
 //synchronous vs asynchronous JS

 //koi bhi code js mein line by line chalega aur ye natural pattern bhi hota hai ki code line by line chale,but kabhi  kabarr aise cases atte hai life mein jah par appka code wait krtaa hai and utni der mein agla code chal jatta hai.
console.log("hey1");
setTimeout(()=>{
 console.log("hey2");
 },2000);
  console.log("hey3");

//synchronous js:jo code line by line chale woh hota heh synchronous.
console.log("kiran1");
console.log("kiran2");
console.log("kiran3");

//asynchronous js:aisa code jo line by line na chal aur tab chalta heh jabb woh chalne ke liye ready ho jaye.
console.log("hey1");
setTimeout(()=>{
 console.log("hey2");
 },2000);
  console.log("hey3");


                   //callback pattern  and callback  hell
//Callback:ekk function ko agr app ekk aur function bhejh de rahe ho parameter mein,to wo parameter walla function kehlaata hai callback.
function abcd(fnc){
    setTimeout(fnc,Math.floor(Math.random()*10)*1000);
    }
abcd(function(){
    console.log("hey");
});

//callback hell:andr tkk call krna .

function profileLekarAao(username,cb){
    console.log("fetching profile data...");
    setTimeout(()=>{
        cb({_id:22222,username,age:21,email:"huihui@gamil.com"});
    },2000);
}

function sarePostlekaraao(id,cb){
    console.log("fetching all posts..")
    setTimeout(()=>{
        cb({_id:id,posts:["hey","hello","good morning"]});
    },3000);
}

function savedPostsNikallo(id,cb){
    console.log("fetching saved posts....")
    setTimeout(()=>{
        cb({_id:id,saved:[1,2,3,4,5,6]});
    },3000);
}

profileLekarAao("harsh",function(profileData) {
    console.log(profileData);
   sarePostlekaraao(profileData._id,function(posts){
    console.log(posts);
    savedPostsNikallo(profileData._id,function(saved){
      console.log(saved);
    })
   }) ;
});

                          //promises:resolve,reject,then,catch
//promises:app ekk promise banate hoh jo ki do states mein se ek sate me ja sakte hai and wo yaa to resolve hoga ya to reject hoga ab wo kya hoga ye to waqqt batayega par humein dono ke liye code likhna padta hai.

let pr=new Promise(function(res,rej){
    setTimeout(()=>{
        let rn=Math.floor(Math.random()*10);
        if(rn>5) res("resolved with"+rn);
        else rej("rejected with"+rn);
    },3000);
});
 pr
 .then(function(val){
    console.log(val);
 })
 .catch(function(val){
    console.log(val);
 });

                //asyn/await syntax,error handling with try-catch
//asyn keyword:Jab kisi function ke aage async lagate hain, toh wo function automatically ek Promise return karta hai.
async function greet() {
    return "Hello";
}

greet().then((data) => {
    console.log(data);
});

//await:wait ka matlab hota hai:Promise complete hone tak wait karo.
//await sirf async function ke andar hi use hota hai.
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data mil gaya");
        }, 2000);
    });
}

async function fetchData() {
    let result = await getData();
    console.log(result);
}

fetchData();

//try-catch :Agar Promise fail ho jaye toh error handle karne ke liye try...catch use karte hain.
let pr1=new Promise(function(res,rej){
    setTimeout(()=>{
        let rn=Math.floor(Math.random()*10);
        if(rn>5) res("resolved with"+rn);
        else rej("rejected with"+rn);
    },3000);
}); 
async function abcd(){
    try{
        let val=await pr1;
        console.log(val);
    }
    catch(err){
        console.log(err);

    }
} 
abcd(); 

//Async chaining ka matlab hota hai: Ek asynchronous operation complete hone ke baad doosra async operation chalana.
//JavaScript me ye mainly:
//.then() chaining se
//async/await se
//kiya jata hai.


                 //Fetch API + HTTP Basics
//Fetch API:GET,POST basics:
//fetch API:yeh ekk url hoti heh yaha se hume data milta heh.
fetch("https://randomuser.me/api/")
.then((rawdata)=>{
  return rawdata.json();
})
.then(data=>{
    console.log(data.results[0].name.first);
})
.catch((err)=>{
    console.log(err);
});

//if i need mutiple users then using:
fetch("https://randomuser.me/api/?results=5")
.then((raw)=>raw.json())
.then((data)=>console.log(data.results));


   




