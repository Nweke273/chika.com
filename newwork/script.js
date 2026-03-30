
// functions 
// normal function 
// function expression 
// IIFE => immediately  invoked function expression 

//   let name = 'fred'

//  function sum(age = 20 , arr , bool = true){  //parameters
//        let name = 'micheal'
//       console.log(`${name} is ${age}years old`)  
//   }

//  sum() //arguments



//  const add = (a,b) => {
// return a * b

// }
// console.log(add(2, 4));


// function expression
// const names = function() {
  
// }

// return 

// function sum(a,b){
//     return a + b
// }

// let totalSum = sum(10,20)

// console.log(totalSum)


//  function age(){
//      return 20
//  }

//  let newage = age()
//  console.log(newage)


// function sum(){


// }

// sum()

// ((are , you)=>{
// console.log(`makuo ${are} my frineds are ${you} tomorrow`)
// })("and", "coming")


// ((car, street) => {
//   console.log(`Somto gave me a ${car} in ${street}`)
// })("bmw f30", "banana island")

//   ((age,name)=>{
//      console.log(`welcome to DD ${name}`, `you are ${age}years old`)
//   })(20 , 'micheal')

// recursive function 


// function fibunacci(n){
//     if (n == 1) return 1
//     if (n == 2) return 2 

//     return fibunacci(n - 1)  + 1
// }
//    4 + 3 
    //   5-1  = 4 + 1
    //   4 - 1 = 3 + 1

// let data = fibunacci(5)
// console.log(data)



// loops 

// for , while , do while 

// let i = 0
// console.log( ++i)
// for loop 
// - initialization 
// - condition 
// - increment or decrement 

// for (initialization; condition ; increment or decrement){

// }
// for (let chika = 0; chika <= 1000; chika++){
//     if (chika  == 100){
//         break 
//     }
//     if (chika == 10)continue;
//     if (chika == 101)break;
//      console.log(chika)
// }

// 0
// 1
// 2
// 3
// 4
// ...
// 8
// 9

// let chika = 0;
// let endValue = 10;

// while (chika < endValue){
//     console.log(chika)
//     if (chika  == 2){
//         console.log('chika is at 2')
//     }
//      if (chika == 2)continue; 
//    chika++
// }

// let chika = 0;
// let baseValue = 100;
// while (chika < baseValue){
//     console.log(chika)
//     chika++;
// }

// let chika = 0;

// do{
//   console.log(chika);
//   chika++;
// }while(chika < 10)

// ((min,max)=>{

// function userInput(){
//     return parseInt(prompt(`Enter your guess from ${min} - ${max}:`))
// }

// function getComputerNumber(){
//     return Math.floor(((Math.random() * max) + min) );
// }

// function game(userValue, computerValue){
//     let user = userInput() 
//     let cnumber =  getComputerNumber()
//     let datavalue = (user == cnumber)? `WOW!!! YOU WON`: (user > cnumber)? `you guess is greater than the computer number`: (user < cnumber)? `your guess is less than the computer number`: null
//     console.log(datavalue , cnumber)
// }

// game(userInput,getComputerNumber)
// })(10,100)


// ((min, max) => {

//     function userInput() {
//         return parseInt(prompt(`Enter your guess from ${min} - ${max}:`));
//     }

//     function getComputerNumber() {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }

//     function game() {

//         const computerNumber = getComputerNumber();
//         let attempts = 4;

//         while (attempts > 0) {

//             let userGuess = userInput();

//             if (userGuess === computerNumber) {
//                 alert(`WOW!!! YOU WON. The number was ${computerNumber}`);
//                 return;
//             }

//             attempts--;

//             if (attempts === 0) {
//                 alert( `Game Over. The number was ${computerNumber}`);
//                 return;
//             }

//             if (userGuess > computerNumber) {
//                 alert(`Too high! You have ${attempts} attempt(s) left.`);
//             } else {
//                 alert(`Too low! You have ${attempts} attempt(s) left.`);
//             }
//         }
//     }

//     game();

// })(10, 100);

// let r = 2.334
// let data = Math.floor(r)

// let min = 1 
// let max = 10 

// ((Math.random() * max) + min)

// Math.random() * max = 
//  0 > x < 1 * 10 = 0 > x < 10 + 1 = 1 > x < 11
// Math.random() = 0 => 1 * 10
// Math.random() * max = 0 => 10 + 1
// ((Math.random() * max) + min) 1 => 11
// 1 => 10


// let arr = [1,4,5,3,2,10];
// let everyValue =   arr.every((numb) => numb < 10);
// let someValue = arr.some((num)=> num < 10)

// console.log("EVERY VALUE ==>",everyValue, "SOME VALUE ==> ", someValue);


// Recursive  function 

// function factorial(n){
//     if (n == 1)return 1; //base case
//     return  n * factorial(n - 1);

// }

// 4 * 6   = 24
// 3 * 2
// 2 * 1

//   = 24 
// 4  * 6
// 3 * 2
// 2 * 1


// 4!  = 4 * 3 * 2 * 1 = 24 
// 7! = 7 * 6 * 5 * 4 * 3 * 2 * 1 = 5040
// 1! = 1

// console.log(factorial(7)
//  n 
//  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
        //   n -2 n -1

// function fibunacci(n){
//     if (n <= 1) return n;
//     return fibunacci(n - 1) + fibunacci(n -2)
// }
// console.log(fibunacci(9))

//  if 0 or 1 return 1 


// DOM 


// let h1 = document.getElementsByTagName('h1')
// let h1_class = document.getElementsByClassName('h1-class')
// let h1_id = document.getElementById('h1-id')
// let body = document.getElementsByTagName('body')
// h1_id.style.cssText = "color:red;font-size:100px"
// h1_class.style.cssText = "color:red;font-size:100px"
// let attribute_id = h1_id.getAttribute('class')
// h1_id.setAttribute('name','new-name')
// h1_id.setAttribute('age','20')
// console.log(attribute_id)

// let img = document.createElement('img')
// img.style.cssText = "height:200px;width:150px"
// h1_id.append(img)
// img.setAttribute('src','./chika.png')



// let h1 = document.querySelector('#h1-id')
// h1.innerHTML = "WELCOME THE SECOND TIME"
// // let innerValue = h1.innerHTML
// let innerContent = h1.innerText
// console.log(innerContent)


// let h1 = document.querySelector('h1')
// h1.innerHTML = "Hey, Welcome Jacinta "
// h1.style.cssText = "color:blue;font-size:100px width: 100px"
// h1.setAttribute('id','helow')
// h1.setAttribute('class','hey')
//  let img = document.createElement('img')
//  img.style.cssText = "height:200px;width:150px"
//  h1.append(img)
//  img.setAttribute('src','./chika.png')

// let select_all = document.querySelectorAll('.parent')
// select_all.forEach((node,index)=>{
//     if(index === 0){
//         node.innerHTML = "<h1>WELCOME TO FIRST NODE</h1>"
//         console.log(node)
//     }else if (index === 1){
//         node.innerHTML = "<h2> WELCOME TO SECOND NODE</h2>"
//     }else{
//         node.innerHTML = "<h3>WELCOME TO THIRD NODE</h3>"
//     }
//     console.log(node)
// })

//  const observer = new IntersectionObserver((entries)=>{
//   entries.forEach(data=>{
//     if(data.isIntersecting)
//   })

//  })


//  let closes = document.querySelector('.close')
//  let cart_sidebar = document.querySelector('.cart-sidebar')
//  closes.addEventListener('click',()=>{
//    cart_sidebar.classList.add('close-cart')
//  })

//  let DB = [];
//  let product_cart_all = document.querySelectorAll('.product-card')
//  let tbody = document.querySelector('tbody')
//  product_cart_all.forEach((card , index)=>{
//  let buttons = card.children[0].children[0].children[0]
//  buttons.addEventListener('click',()=>{
//      let obj = {} 
   
//      let img = card.children[0].children[1].getAttribute('src')
//      let price = card.children[2].children[1]
//       let newPrice = price.innerHTML
//       let indexvalue = newPrice.indexOf('$')
//       let sanitized_price = parseFloat(newPrice.split('$')[1]).toFixed(2)
//       let name = card.children[1].innerHTML.split('-')[0]
//       let description = card.children[card.children.length -1].innerHTML.trim()
//       obj['price'] =sanitized_price;
//       obj['description'] = description;
//       obj['name'] = name;
//       obj['img'] = img 
//       obj['action'] = ""
//       DB.push(obj)
//       let newSet = new Set(DB)
//       let setToArray = Array.from(newSet)
//       console.log(setToArray)
      

     
//  })
//  })
// 1 or more data 
(()=>{

let name = "mike 20" 
let age = 20 
let regEx = /[a-z0-9]+/g

// let resolver = regEx.test(name)

let input = document.querySelector('.pass')
let dig = document.querySelector('.dig')
let cap = document.querySelector('.cap')
let spec = document.querySelector('.spec')
input.addEventListener('keyup',(evt)=>{

//  let testTrue =  regEx.test(evt.target.value)
 checkExp(evt.target.value)
//  console.log(testTrue)
})
// console.log(input ,resolver )

function checkExp(data){
   let isNumber = /[0-9]+/g
   if(isNumber.test(data)){
    dig.style.cssText="color:green"

   }
   let isUppercase = /[A-Z]+/g
   if(isUppercase.test(data)){
    cap.style.cssText="color:green"

   }
  

   let isSpecial = /[#$%@*]+/g
   if(isSpecial.test(data)){
    spec.style.cssText="color:green"

   }
}



})()








