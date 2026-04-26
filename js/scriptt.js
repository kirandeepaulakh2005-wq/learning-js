// dom manipulation:
//html se element ko select krna
//text content change krna
//style change krna
// element ko hide/show krna
// element ko add/remove krna
//event listeners

                //selectinhg element
let abcd=document.getElementById("abcd");   
console.log(abcd);
console.dir(abcd);//if we want to see all the properties of the element then we use console.dir
let mmm=document.getElementsByClassName("mmm");
console.log(mmm);
console.dir(mmm);
let abcde=document.querySelectorAll  ("h1");//it will select the first element with id abcd
console.log(abcde);
console.dir(abcde);

//                 //  manipulating element
// //texxt/access:
// //1.innerText  
// //2.textContent 
// //3.innerHtml
let h1=document.querySelector("h1");
h1.textContent="hello world"; 
h1.innerHTML="<i>hello world</i>";//it will make the text italic
h1.hidden=true;//it will hide the element  
console.dir(h1);

//                 //attribute manipulation:
// //1.getAttribute
// //2.setAttribute
// //3.removeAttribute4
let img=document.querySelector("img");
console.dir(img);
a.href="https://www.google.com";//it will change the href attribute of the anchor tag
a.setAttribute("href","https://www.google.com");//it will change the href attribute of the anchor tag
a.setAttribute("href","https://www.facebook.com");//it will change the href attribute of the anchor tag) 
a.setAttribute("href","https://www.facebook.com");//it will change the href attribute of the anchor tag) 
img.setAttribute("src","https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png");//it will change the src attribute of the image tag
let a=document.querySelector("a");
console.log(a.getAttribute("href"));//it will return the href attribute of the anchor tag
a.removeAttribute("href");//it will remove the href attribute of the anchor tag

                  //dynamic dom manipulation:
// 1.createElement:sabde phele esse  use kro k kiya create krna heh body me aur eske liye use hota hehtextconten kiya likhna heh create krne ke baad usko add krna hota heh body me appendChild se
let h2=document.createElement("h2");//it will create a new h1 element
h2.textContent="hello world";

// 2.appendChild:location specify krna ki kaha add krna heh yeh basically use hota heh script ke bhadh create krne ke liye
document.body.appendChild(h2);//it will add the h1 element to the end of the body
let h3=document.createElement("h3");
h3.textContent="hello world";
document.querySelector("div").appendChild(h3);//it will add the h3 element to the div element

// 3.removeChild
let h1=document.querySelector("h1");
h1.remove;//it will remove the h1 element from the body

// // 4.prepend:yeh use hota heh element ko body ke starting me add krne ke liye
document.body.prepend(h2);//it will add the h1 element to the beginning of the body


//                        //style updates via .style and classlist(add,remove,toggle)
// //style use krke hum element ke style ko change kr skte heh classlist use krke hum element ke class ko add remove toggle kr skte heh
// //classlist.add se bhi hum element ke andr class add krte heh aur classlist.remove se hum element ke andr class remove krte heh aur classlist.toggle se hum element ke andr class ko add krte heh agr class add na ho agr add hoh to remove  krte heh jisme hum style ki properties likhte heh.
let h3=document.querySelector("h3"); 
h1.style.color="red";
h1.style.backgroundColor="yellow";//it will change the color of the h1 element to red
h1.style.fontFamily="gilroy";console.dir(h1);
h3.classList.add("kk")//it will add the red class to the h1 element  
let h1=document.querySelector("h1");
h1.classList.remove("kk");//it will remove the red class from the h1 element
h1.classList.toggle("kk");//it will toggle the red class on the h1 element

                          //practice:
//1.what is the dom?how does it represent the html structure?
//dom:Document Object Model
//ehe ekk tree structure hota heh jo html document ko represent krta heh har element ek node hota heh aur uske child nodes bhi hote heh
//yeh batata heh ke konsa element kaha hai aur uske child nodes kya hai
//reprents the html structure using:
//1.nodes:har element ek node hota heh aur uske child nodes bhi hote heh
//2.properties:har node ke properties hoti heh jaise tagName,innerText,innerHTML etc        


//2.name the types of nodes in the dom?
//1.element node:yeh html element ko represent krta heh jaise h1,div,p etc
//2.text node:yeh html element ke andr likha hua text ko represent krta heh
//3.attribute node:yeh html element ke attributes ko represent krta heh jaise id,class,src etc
//4.comment node:yeh html document ke comments ko represent krta heh


//3.whta the diffrence between anelment node and a text node?
//element node:yeh html element ko represent krta heh jaise h1,div,p etc
//text node:yeh html element ke andr likha hua text ko represent krta heh   

//4.inspect the following html in the browser and identify each node:
<div id="container">
    <h1 class="title">Hello World</h1>
    <p>This is a paragraph.</p>
</div>
//1.div element node
//2.h1 element node
//3.text node (Hello World)
//4.p element node
//5.text node (This is a paragraph.)
//6.comment node (This is a comment)

//5.what is the difference between getElementById,getElementsByClassName and querySelector?
//1.getElementById:yeh method ek element ko select krta heh uske id ke basis peh aur yeh method ek element ko return krta heh
//2.getElementsByClassName:yeh method ek ya zyada elements ko select krta heh unke class ke basis peh aur yeh method ek HTMLCollection return krta heh
//3.querySelector:yeh method ek element ko select krta heh uske css selector ke basis peh aur yeh method ek element ko return krta heh
//esme id select krne ke liye batana hota heh #idname class select krne ke liye .classname aur element select krne ke liye elementname likhna hota heh

//6.what does getelementsByClassName return?is it an array?
//getElementsByClassName ek HTMLCollection return krta heh jo ek array-like object hota heh lekin yeh array nahi hota heh isme hum length property use krke elements ki ginti kar sakte heh aur index ke basis peh elements ko access kar sakte heh lekin hum array methods like forEach, map, filter etc use nahi kar sakte heh isliye agar hume array methods use krne ho to hume HTMLCollection ko array me convert krna hota heh using Array.from() method.

//7.use querySelectorAll to select all buttons with class".buy-now".
let buttons=document.querySelectorAll(".buy-now");
console.log(buttons);

//8.T1:select the headind of a page by ID and change its text to welcom to sheriyans!.
let heading=document.getElementById("heading");
heading.textContent="welcome to sheriyans!";

//9.select all <li> elements and printtheir text using a loop.
let liElements=document.querySelectorAll("li");
liElements.forEach(function(li){
    console.log(li.textContent);
});
// or
let lis=document.querySelectorAll("li");
for(let i=0;i<lis.length;i++){
    console.log(lis[i].textContent);
}

//9.what is the difference between innerText,textContent and innerHTML?
//1.innerText:yeh element ke andr likha hua text ko represent krta heh lekin yeh element ke andr likha hua text ko render krta heh yani ki agar element ke andr koi html tag ho to yeh usko ignore krta heh aur sirf text ko render krta heh
//2.textContent:yeh element ke andr likha hua text ko represent krta heh lekin yeh element ke andr likha hua text ko render nahi krta heh yani ki agar element ke andr koi html tag ho to yeh usko bhi render krta heh aur text ko bhi render krta heh
//3.innerHTML:yeh element ke andr likha hua html code ko represent krta heh lekin yeh element ke andr likha hua html code ko render krta heh yani ki agar element ke andr koi html tag ho to yeh usko bhi render krta heh aur text ko bhi render krta heh
//not print the html tags if we use innerText but if we use textContent or innerHTML then it will print the html tags as well.

//10. when should you use textcontent instead of innerText?
//1.jab hume element ke andr likha hua text ko represent krna ho lekin hume usko render nahi krna ho to hum textContent use karte heh
//2.jab hume element ke andr likha hua text ko represent krna ho lekin hume usko render krna ho to hum innerText use karte heh
//3.jab hume element ke andr likha hua html code ko represent krna ho lekin hume usko render krna ho to hum innerHTML use karte heh

//11.T2:selecct a paragraph and replace its content with:<b>updated</b> by javascript}.
let p=document.querySelector("p");
p.innerHTML="<b>updated</b> by javascript";

//12.how do youu get the src of an image using javascript?
let img=document.querySelector("img");
console.log(img.getAttribute("src"));
// or
let img =document.querySelector("img");
console.log(img.src);

//13.what does setAttribute do?give an example of its usage.
//setAttribute method ek element ke attribute ko set krta heh ya update krta heh agar attribute pehle se exist karta heh to usko update krta heh agar attribute exist nahi karta heh to usko create krta heh
//example:
let a=document.querySelector("a");
a.setAttribute("href","https://www.google.com");//it will change the href attribute of the anchor tag to https://www.google.com
//or

document.querySelector("a").setAttribute("href","https://www.google.com");//it will change the href attribute of the anchor tag to https://www.google.com

//14.T3:select a link and update its href to point to your favorite website.
let link=document.querySelector("a");
link.href="https://www.google.com";//it will change the href attribute of the anchor tag to https://www.google.com

//15.add a title attribute to a div dynamically using javascript.
let div=document.querySelector("div");
div.setAttribute("title","this is a div");//it will add a title attribute to the div element with the value "this is a div"

//16.remove the disabled attribute from a button using javascript.
let button=document.querySelector("button");
button.removeAttribute("disabled");//it will remove the disabled attribute from the button element

//17.what does createElemnent do?whatis returned by this method?
//createElement method ek naya element create krta heh aur usko return krta heh jo ki ek DOM element hota heh jise hum apne document me add kr sakte heh using appendChild or prepend method. isme hum element ka tag name pass krte heh jise hum create krna chahte heh jaise h1,div,p etc. example:
 let h2=document.createElement("h2");//it will create a new h2 element and return it
 console.log(h2);//it will log the created h2 element to the console

//18.what is the difference between appendChild and prepend?
//appendChild method ek element ko parent element ke end me add krta heh jabki prepend method ek element ko parent element ke beginning me add krta heh. example:
let h2=document.createElement("h2");
h2.textContent="hello world";
document.body.appendChild(h2);//it will add the h2 element to the end of the body
document.body.prepend(h2);//it will add the h2 element to the beginning of the body

//19.can you remove an element using removechild?if yes, how?
//yes, we can remove an element using removeChild method. isme hume parent element ko select krna hota heh aur uske baad child element ko select krna hota heh jise hum remove krna chahte heh. example:
let h1=document.querySelector("h1");
h1.remove();//it will remove the h1 element from the document
//or
 let h1=document.querySelector("h1");
 h1.parentNode.removeChild(h1);//it will remove the h1 element from the document
//or 
document.querySelector("h1").removeChild();//it will remove the h1 element from the document

//20.create a new list item <li>New Task</li> and add it to the end of an existing unordered list <ul>.
let li=document.createElement("li");
li.textContent="New Task";
document.querySelector("ul").appendChild(li);//it will add the li element to the end of the ul element
 //or
let ul=document.querySelector("ul");
let li=document.createElement("li");
li.textContent="New Task";
ul.appendChild(li);//it will add the li element to the end of the ul element

//21.create a new image element with a placeholder source and add it  at tha top of a div.
let img=document.createElement("img");
img.src="https://via.placeholder.com/150";
document.querySelector("div").prepend(img);//it will add the img element to the beginning of the div element

//22.select  the first item in a list and delete it from the dom.
let firstLi=document.querySelector("ul li");
firstLi.remove();
//or
let firsttLi=document.querySelector("ul li");
firsttLi.parentNode.removeChild(firsttLi);
//or
let ul=document.querySelector("ul");
let li=ul.querySelector("li");
ul.removeChild(li);

//23.how do you change the background color of an element using javascript?
Element.style.backgroundColor="yellow";//it will change the background color of the element to yellow
//or
let element=document.querySelector("h1");
element.style.backgroundColor="yellow";//it will change the background color of the h1 element to yellow

//24.what is the difference between .classList.add and .classList.toggle?
//1.classList.add method ek class ko element ke class list me add krta heh agar class pehle se exist karti heh to usko add nahi krta heh
//2.classList.toggle method ek class ko element ke class list me toggle krta heh agar class pehle se exist karti heh to usko remove krta heh aur agar class exist nahi karti heh to usko add krta heh

//25.adda highlight class to every even item in a list using javascript.
let listItems=document.querySelectorAll("ul li");
listItems.forEach(function(li,index){
    if(index % 2 === 1){
        li.classList.add("highlight");//it will add the highlight class to every even item in the list
    }
});
//or
let li=document.querySelectorAll("ul li:nth-child(2n)");
li.forEach(function(item){
    item.classList.add("highlight");//it will add the highlight class to every even item in the list
});

//26.set the font size of all paragraphs to 18px using javascript.

let paragraphs=document.querySelectorAll("p");
paragraphs.forEach(function(p){
    p.style.fontSize="18px";//it will set the font size of all paragraphs to 18px
});


                //Events and event handling:
//1.what is an event in javascript?
//event ek action hota heh jo user ya browser ke dwara trigger hota heh jaise click,mouseover,keydown etc. event ke dwara hum user ke interactions ko handle kr sakte heh aur uske according apne webpage ko respond kr sakte heh
//browser mein page par koi bhi harkat karo event raise ho jayega.
//event matlab hota hai koi action hoa
//event listner ka matlab hai appne koi actionka reaction diya.

                   //event building:
//1.addEventListener:yeh method ek event listener ko element ke sath attach krta heh jise hum event handler bhi kehte heh jab specified event trigger hota heh to yeh event handler function execute hota heh
let h1=document.querySelector("h1");
h1.addEventListener("click",function(){
 h1.style.color="red";//it will change the color of the h1 element to red when it is clicked
});

let p=document.querySelector("p");
p.addEventListener("click",function(){
p.style.color="blue";//it will change the color of the p element to blue when it is clicked
});  
let p=document.querySelector("p");
p.addEventListener("dblclick",function(){
p.style.color="green";
});//it will change the color of the p element to green when it is clicked

//2.removeEventListener:yeh method ek event listener ko element se remove krta heh jise hum event handler bhi kehte heh jab specified event trigger hota heh to yeh event handler function execute nahi hota he h1.addEventListener("click",function(){
h1.style.color="red";//it will change the color of the h1 element to red when it is clicked
document.querySelector("p");
function dblclick(){
    p.style.color="green";
}
p.addEventListener("dblclick",dblclick);
p.removeEventListener("dblclick",dblclick);//it will remove the event listener from the p element so that when it is double clicked the color will not change to green

                    //common events:click,input change,submit,mouseover,keyup

//1.click:yeh event tab trigger hota heh jab user kisi element par click krta heh
let p=document.querySelector("p");
p.addEventListener("click",function(){
p.style.color="blue";//it will change the color of the p element to blue when it is clicked
}); 

// //2.input:yeh event tab trigger hota heh jab user kisi input element ke value ko change krta heh
let input=document.querySelector("input");
input.addEventListener("input",function(dets){
    if(dets.data !==null){
console.log(dets.data);
    }
});//it will log the current value of the input element to the console whenever it is changed

// if we use backspace to delete the value of the input element then it will log null to the console because backspace does not add any character to the input element it only removes characters from it so it does not trigger the input event with any data but it triggers the input event with null data.

//3.submit:yeh event tab trigger hota heh jab user kisi form ko submit krta heh

let form=document.querySelector("form");
let inputs=document.querySelectorAll("input");
let main1=document.querySelector("#main1");

form.addEventListener("submit",function(dets){
    dets.preventDefault();//it will prevent the default behavior of the form which is to submit the form and reload the page
//     console.log(
//     inputs[0].value,
//     inputs[1].value,
//     inputs[2].value,
//     inputs[3].value
// );
//after this form we want to create a card for same submission form in which profilr picture will be shown :
let card=document.createElement("div");
card.classList.add("card");

let profile=document.createElement("div");
profile.classList.add("profile");

 let img1=document.createElement("img");
 img1.setAttribute("src", inputs[0].value);

let hh=document.createElement("h3");
hh.textContent=inputs[1].value;

let hhh=document.createElement("h5");
hhh.textContent=inputs[2].value;

let pp=document.createElement("p");
pp.textContent=inputs[3].value;    

profile.appendChild(img1);
card.appendChild(profile);

card.appendChild(hh);
card.appendChild(hhh);
card.appendChild(pp);

main1.appendChild(card);

// inputs.forEach(fuction(input){
// if(input.type !=="submit" ){
// inputs.value="";
// }
// })//it is used when i need blank form.

});//USED FOR REAL TIME DATA ENTRY CARD

//4.mouseover:yeh event tab trigger hota heh jab user kisi element par mouse pointer ko le jata heh

//5.keyup:yeh event tab trigger hota heh jab user kisi key ko release krta heh

//6.change:yeh event tab trigger hota heh jab user kisi input element ke value ko change krta heh aur uske baad input element se focus hata deta heh
let sel=document.querySelector("select");
let device=document.querySelector("#device");

sel.addEventListener("change",function(dets){
    device.textContent=`${dets.target.value} Device Selected`;
    console.log(dets.target.value);
});//it will log the current value of the select element to the console whenever it is changed and focus is removed from it


// //7.keydown:yeh event tab trigger hota heh jab user kisi key ko press krta heh
let h = document.querySelector("h1");

window.addEventListener("keydown", function (dets) {
    if (dets.key === " ") {
        h.textContent = "SPACE";
    } else {
        h.textContent = dets.key;
    }
    //console.log(`key ${dets.key} is pressed`);//it will log the key that is pressed to the console whenever any key is pressed
});//it will log the key that is pressed to the console whenever any key is pressed


// //  8.file input change:yeh event tab trigger hota heh jab user kisi file input element ke value ko change krta heh  
let button = document.querySelector("#button");
let fileinp = document.querySelector("#fileinp");
button.addEventListener("click", function () {
    fileinp.click();
});

fileinp.addEventListener("change", function (dets) {
     const file=(dets.target.files[0]);
    if(file){
    button.textContent = file.name;
    }
   });//it will log the name of the selected file to the console whenever the value of the file input element is changed
