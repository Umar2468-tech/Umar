 var a = document.querySelector("#bulb")
 var btn = document.querySelector("button")

 var flag = 0;

 btn.addEventListener("click", function(){ 
    if(flag == 0){
        bulb.style.backgroundColor = "yellow"
    console.log("chal gya bulb bhai chal gya")
    flag = 1;

    }else{
        bulb.style.backgroundColor = "white"
    console.log("waoo band ho gya bulb")
    flag = 0;
    }
    
 })

 let c = document.querySelector("h1")
 c.addEventListener("click", function(){
    c.innerHTML = "Jaduu"
 })

