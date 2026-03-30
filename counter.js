 let increBtn = document.getElementById("increment");
 let decreBtn = document.getElementById("decrement");
 let cout = document.getElementById("counter");
 let resetBtn = document.getElementById("redo");
 let counter = 0;

 increBtn.addEventListener("click", increment);
 decreBtn.addEventListener ("click", decrement);
 resetBtn.addEventListener("click", redo);


 function increment(){
     counter++
     cout.textContent = counter;
     cout.style.color = "green"
 }

 function decrement(){
 if(counter > 0){
       counter--
 }
    
  
     cout.textContent = counter;
     cout.style.color = "red"
 }

 function redo(){
     cout.textContent = 0;
     cout.style.color = "red"
 }





