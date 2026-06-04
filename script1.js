             //design patterns:
//design patterns:Ye coding problems ko solve karne ke common solutions hote hain.


//1.module pattern:module pattern ek dsign pattern hai jisme hum apna code ek self executing function (IIFE)ke andr likhte hain, taki variables aur functions private rahen.
//iske andr se hum sirf wahi cheezein return karte hai jo bHr use karni hain.
//Is pattern ka main fayda hai data hiding(encapsulation)aur clean structure,takki code secure,reusble aur manageable ban sake.
     
let Bank=(function(){
 let bankbalance=12000;
 function checkbalane(){
    console.log(bankbalance);
 }
 function setbalance(val){
    bankbalance=val;
 }
 function withdraw(val){
    if(val<=bankbalance){
        bankbalance-=val;
        console.log(bankbalance);
    }
 }
 return {
    checkbalane,
    setbalance,
    withdraw,
 }
})();

Bank.withdraw(10000);

//2.Revealing Module Pattern:Revealing Module Pattern JavaScript ka ek design pattern hai jo private variables/functions ko hide karta hai aur sirf jo expose karna ho wahi return karta hai.
//object andr jo bhi return krna hota heh ose hum kisi name se bhejhte heh.

let Bank1=(function(){
 let bankbalance=12000;
 function checkbalane(){
    console.log(bankbalance);
 }
 function setbalance(val){
    bankbalance=val;
 }
 function withdraw(val){
    if(val<=bankbalance){
        bankbalance-=val;
        console.log(bankbalance);
    }
 }
 return {
    check:checkbalane,
    set:setbalance,
    draw:withdraw,
 }
})();

Bank1.draw(10000);

// 3.factory function pattern:Ek function banate ho jo objects create krta heh (factory=object bnane ki machine)
//yeh ek aisa design hai jisme hum ek simple function likhte heh jo naye objects banaker return karta hai,bina class ya new keyword use kiye.
//Is pattern ka main idan hai->objects creation ko ek function ke through control karna.
//Har barr jab humm factory function call karte hai,hume ek naya object milta hai jisme humare mathods aur (agar chaho to)private data ho sakta heh.
//yeh pattern specially useful hai jab hume ek hi type ke bhoth sare objects chaiye jaise :users,products,tasks,etc.
function createProduct(name,price){
    let stock=10;
    return{
        name,
        price,
        checkstock(){
            console.log(stock);
        },
        buy(qty){
            if(qty<=stock){
                stock-=qty;
                console.log(`${qty} pieces booked-${stock} pieces left.`);
            }
            else{
                console.log(`we only have ${stock} pieces left.`)
            }
        },
        refill(qty){
            stock +=qty;
            console.log(`refilled the stock-${stock} pieces now.`);
        }
    }

};

let iphone=createProduct("iphone",70000);
let kitkat=createProduct("kikat",10);
iphone.buy(6);

//4.observer pattern:Observer Pattern ek behavioral design pattern hai jisme ek object (Subject) apne observers ko notify karta hai jab uski state change hoti hai.
class YoutubeChannel{
    constructor(){
        this.subscribers=[];

    }
    subscribe(user){
        this.subscribers.push(user);
        user.update(`${user.name}, you have subscribed the channel.`);
    }
    unsubscriber(user){
        this.subscribers=this.subscribers.filter((sub) => sub !== user);
        user.update(`you have unsubscribed the channel.`)
    }
    notify(message){
        this.subscribers.forEach(sub => sub.update(message));
    }
}

class User{
    constructor(name){
        this.name=name;
    }
    update(data){
        console.log(`${this.name},${data}`);
    }
}

let  sheryians=new YoutubeChannel();
let  user1=new User("kiran");
let user2=new User("jashan");

sheryians.subscribe(user1);
sheryians.subscribe(user2);

sheryians.notify("new video is live on the channel.."); 
sheryians.notify("we are closing the chnnel,because it's april 1st");


//                          //Performance otimization
// //debouncing->app koi action kr rhe hoh aur app ye nhi chaahte ke har action pr kuj hoh,app chaahte hoh jab bhi apke actions ke beech mein koi specific gap aajeye  tab action perform hoh.

// let input=document.querySelector("input");

// function debounce(fnc,delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer=setTimeout(()=>{
//             fnc(...args);
//         },delay);
//     }
// }
// input.addEventListener("input",debounce(function(){
//     console.log("kiran");
// },1000)
// );

// //throttling ->interval par chalega means action agr hota raha aur apne ekk  interval bataya to utne interval me appkaeevent chalega.

// function throttle(fnc,delay){
//     let timer=0;
//     return function(...args){
//         let now=Date.now();
//         if(now - timer>=delay){
//             timer=now;
//             fnc(...args); 
//         }
//     };
// }

// input.addEventListener("input",throttle(function(){
//     console.log("kiran");
// },1000)
// );


// //Lazy loading images(with intersectionObserver):Lazy Loading ka matlab hai ki images tabhi load hongi jab user un tak scroll karke pahunchta hai. Isse website ki performance improve hoti hai aur initial page load fast hota hai.


// //code splitting(into level): Code Splitting ek optimization technique hai jisme hum apne JavaScript code ko chhote-chhote chunks (parts) me divide kar dete hain. Isse browser sirf wahi code load karta hai jo us time required hota hai.
// const btn=document.querySelector("button");
//     btn.addEventListener("click",async function(){
//     let heavy=await import("./heavy.js");
//     heavy.veryHeavy();
//     });


//  //Avoiding unnecessary reflows and repaints:yeh use hota heh browser ke load ko km krne ke liye. 
// // Reflow tab hota hai jab browser ko page ka layout dobara calculate karna padta hai. 
// //Repaint tab hota hai jab element ka appearance change hota hai, lekin layout same rehta hai.
// const ul=document.querySelector("ul");
// const space=document.createDocumentFragment();  
// for(let i=0;i<100;i++){
//     const li=document.createElement("li");
// li.textContent=i;
// space.appendChild(li);
// }
// ul.appendChild(space);


// //Memory leaks:timers,event listners:
// //JavaScript me setInterval() aur setTimeout() memory leak ka reason ban sakte hain agar unhe properly clear na kiya jaye.
// //Jab kisi element par event listener lagate hain aur baad me element remove kar dete hain, listener memory me reh sakta hai.
// let count =0;
// const int=setInterval(()=>{
//     if (count<10){
//         count++;
//         console.log(count);
//         }
//         else{
//             clearInterval(int);
//             console.log("finished");
//         }
// },500);


                     //Advanced topics and Architecture thinking
//pure and impure functions
//Functional Programming basics(map/filter/reduce as pipeline)

//separation of concerns(DOM vs logic):DOM ka code and logic ka colde alag rehna chaiye
const btn1=document.querySelector("button");
const ul1=document.querySelector("ul");

function add(n1,n2){
return n1+n2;
}

btn1.addEventListener("click",function(){
    const num1=Math.floor(Math.random()*10);
    const num2=Math.floor(Math.random()*10);

    let finalAdd=add(num1,num2);

    let li=document.createElement("li");
    li.textContent=finalAdd;
    ul1.appendChild(li);
});

//custom utilities(e.g.,own implementation of map,deep clone)
//map->ekk array ke top pe chalta heh and us  array ke sabhi memebers us map function ke andr atte hai and map function ek naya array return krta hai and us nye array mein jo bhi map ne return kiya hoga wahi placed hota hai.

//own implementation of map:
const arr =[1,2,3,4,5];
function myMap(arr,callback){
    let newarr=[];
    for(let i=0;i<arr.length;i++){
        newarr.push(callback(arr[i],i,arr))
    }
    return newarr;
}

// let ans= myMap([1,2,3,4],(num)=>num+2);
let ans=myMap(arr,function(val){
    return val+2;
});

//deep clone:Deep Clone ka matlab hai kisi object ya array ki completely independent copy banana.
const student = {
    name: "Kiran",
    skills: ["JS", "React"],
    address: {
        city: "Delhi"
    }
};

const clone = structuredClone(student);

clone.address.city = "Mumbai";

console.log(student.address.city);
console.log(clone.address.city);


//How JS works in browser(Event Loop,web APIs,call stack):

//call Stack(Execution Stack):
//Js single-threaded hai-> ekk time par ek hi kamm krta hai (synchoronously chalti hai).
//jab hum function call karte hai-> wo stack ke top pe chala jata hai.
//Function complete hone ke baad stack se nikal jata hai (pop ho jata hai).

function a(){
    console.log("a");
}
function b(){
    a();
 console.log("b");  
}
function c(){
    b();
    console.log("c");
}
c();

//web APIs:Web APIs browser dwara provide ki gayi functionalities hoti hain jo JavaScript ko browser ke features access karne deti hain.
//for e.g.,console ,setTimeout ,setInterval ,Alert ,prompt

//Event loop:Event Loop JavaScript ka ek mechanism hai jo Call Stack aur Callback Queue ko monitor karta hai aur asynchronous tasks ko execute karwata hai.
//yeh check krta hai ki call stack free hai ja fir nhi.
setTimeout(function(){
    console.log("hey1");
},1000);
setTimeout(function(){
    console.log("hey2");
},1200);
setTimeout(function(){
    console.log("hey3");
},400);
setTimeout(function(){
    console.log("hey4");
},4000);
setTimeout(function(){
    console.log("hey5");
},5000);



 

 



