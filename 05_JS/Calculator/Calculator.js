const buttonel=document.querySelectorAll("button");
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
            appendValue();
        }
    })
}

function clearResult(){

}

function getResult(){

}

function appendValue(buttonvalue){

}