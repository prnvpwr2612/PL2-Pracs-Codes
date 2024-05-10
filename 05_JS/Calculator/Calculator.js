const buttonel=document.querySelectorAll(".buttons");
const inputel=document.getElementById("result");

for(i=0;i<buttonel.length;i++){
    buttonel[i].addEventListener("click", () =>{
        const buttonvalue = buttonel[i].textContent;
        if(buttonvalue==='C'){
            clearResult();
        }
        else if(buttonvalue==="="){
            getResult();
        }
        else{
            appendValue(buttonvalue);
        }
    });
}

function clearResult(){
    inputel.value="";
}

function getResult(){
    inputel.value=eval(inputel.value);
}

function appendValue(buttonvalue){
    inputel.value = inputel.value + buttonvalue;
}