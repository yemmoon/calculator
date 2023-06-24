// elements needed to work with HTML
const display = document.querySelector(".text");
const buttons = document.querySelectorAll("button");

buttons.forEach(button =>button.addEventListener("click",function(e){
    switch (e.target.innerText) {
     case "clear":
         display.innerText = "";
         break;//stopping point  

         case "delete":
             display.innerText = display.innerText.slice(length,-1);
             break;
       
case "=":
    try{display.innerText = eval(display.innerText);
        break;}
    
    catch{
        display.innerText = "Error"};
        break;

        default:
            display.innerText += e.target.innerText;
    }
}))