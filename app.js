const nobtn=document.getElementById("no");
const yesbtn=document.getElementById("yes");
const btns=document.querySelector('.buttons');

nobtn.addEventListener("mouseenter", ()=>{
    const yesindex=Array.from(btns.children).indexOf(yesbtn);
    const noindex=Array.from(btns.children).indexOf(nobtn);
    
    if(yesindex<noindex){
        btns.insertBefore(nobtn,yesbtn);
    }else{
        btns.insertBefore(yesbtn,nobtn);
    }
})
