const counterel=document.querySelectorAll(".counter");
counterel.forEach((counterel)=>{
    counterel.innerText("0");
    function incrementCounter(){
        const current=+counterel.innerText;
        const dataCeil=+counterel.getAttribute("data-ceil");
        console.log(dataCeil);
        selfTimeout(dataCeil,40)
    }
})