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



