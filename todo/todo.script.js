window.addEventListener('DOMContentLoaded',()=>{
    let tbody = document.querySelector('tbody')
    // let button = document.querySelector('.btn')
    // let t_description= document.querySelector('.description')
    // let user = document.querySelector('.user')
    let form = document.querySelector('form')
    // let checkbox = tbody.children[0].children[4].children[0]
    // let title = tbody.children[0].children[1]
    // let desc = tbody.children[0].children[2]
    let count = 1
    // checkbox.setAttribute('checked',true)
    // let checkStatus = checkbox.getAttribute('checked')
    // console.log(Boolean(checkStatus))

   form.addEventListener('submit',handleSubmit)

function handleSubmit(evt){
    evt.preventDefault()
    let tr = document.createElement('tr')
    let td_id = document.createElement('td')
    let td_name = document.createElement('td')
    let td_desc = document.createElement('td')
     console.log(evt.target.user.value, evt.target.desc.value)
     td_id.innerHTML = count++
     td_name.innerHTML = evt.target.user.value
     td_desc.innerHTML =  evt.target.desc.value
     tr.appendChild(td_id)
     tr.appendChild(td_name)
     tr.appendChild(td_desc)
     tbody.append(tr)
   }

//    form.onsubmit = (evt)=>{


//    }
    

// hoisting 
// sum(10,20)
// newSum(10,20)



// function sum(a,b){
//     console.log(a+b)
// }


// const newSum = (a,b)=>{
//     console.log(a+b)
// }







    // console.log(t_description, user)
    // checkbox.addEventListener('change',(e)=>{
    //     if( e.target.checked){
    //       title.style.cssText = "text-decoration:line-through"
    //       desc.style.cssText = "text-decoration:line-through"
    //     }else{
    //          title.style.cssText = "text-decoration:none"
    //          desc.style.cssText = "text-decoration:none"
    //     }
    // })




// document.addEventListener('click',()=>{
//     alert('clicked area')
// })

// document.onclick = () =>{

// }


// document.addEventListener('mousemove',(e)=>{
//    console.log(e.x , e.y)
// })

// document.addEventListener('keypress',(e)=>{
//     console.log(e.keyCode)
//     if (e.keyCode == 32){
//         alert('YOU CLICKED THE SPACE BAR')
//     }
// })

// document.addEventListener('mouseenter',()=>{
//     console.log('MOUSE ENTERED')
// })

// document.addEventListener('mouseleave',()=>{
//     console.log('MOUSE Leave')
// })

// document.addEventListener('keydown',()=>{
//     console.log('KEYDOWN')
// })

// document.addEventListener('keyup',()=>{
//     console.log('KEYUP')
// })


})