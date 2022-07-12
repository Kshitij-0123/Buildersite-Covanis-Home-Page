const footer = document.querySelectorAll(".ts")

let today = new Date();
let date =`${today.getDate()}/${(today.getMonth()+1)}/${today.getFullYear()};`

const details = ["[Kshitij]","[201550072]","[GLA University]",`[${date}]`]

for(let i=0;i<footer.length;i++){
    footer[i].innerHTML = details[i];
}

const cllst=['a','b','c','d','e'];
let i=0;
const carousel = document.querySelector(".carousel-my");
const rtbt = document.querySelector(".rt");
const ltbt = document.querySelector(".lt");

rtbt.addEventListener("click",()=>{
    if(i===0){
        carousel.classList.toggle(cllst[4]);
        i=4;
        carousel.classList.toggle(cllst[0]);
    }
    else{
        carousel.classList.toggle(cllst[i]);
        i-=1;
        carousel.classList.toggle(cllst[i]);
    }
});

ltbt.addEventListener("click",()=>{
    if(i===4){
        carousel.classList.toggle(cllst[4]);
        i=0;
        carousel.classList.toggle(cllst[0]);
    }
    else{
        carousel.classList.toggle(cllst[i]);
        i+=1
        carousel.classList.toggle(cllst[i]);
    }
});

