//
const input = document.querySelectorAll('input');

// 1 
input[0].addEventListener("focus", () =>{
    input[0].style.backgroundColor="blue";
})

// 2 
input[1].addEventListener("focus", () =>{
    input[1].style.backgroundColor="blue";
});

input[1].addEventListener("focusout", () =>{
    input[1].style.backgroundColor="transparent";
});


// 3 

const p1 = document.getElementsByClassName("premierParagraphe")[0];
const p2 = document.getElementsByClassName("secondParagraphe")[0];
const p3 = document.getElementsByClassName("dernierParagraphe")[0];
const btnExo3 = document.getElementsByClassName("buttonExo")[0]; 


btnExo3.addEventListener("click", () =>{
    p1.innerText = p2.innerText; 
    p3.innerText = p2.innerText; 
})


// 4 
const pex4 = document.getElementById("exo4"); 
const btnExo4 = document.getElementsByClassName("buttonExo")[1]; 

//input[2].style.backgroundColor="red"


btnExo4.addEventListener("click", () =>{
    pex4.innerText = input[2].value;
});


//5 

const btn5 = document.getElementsByClassName("btn")[2];

//btn5.style.backgroundColor="red";


btn5.addEventListener("click", () =>{
    // const img = document.getElementsByClassName("img-responsive"); 
    const img = btn5.previousElementSibling; 
    const par = img.previousElementSibling; 
    let chemin = par.innerText.split(":"); 
    img.setAttribute('src',chemin[1]);
});

// 6 

const divBoxB = document.querySelectorAll("div.box-body"); 

const imgs = divBoxB[5].querySelectorAll("img"); 

let templink; 

imgs[0].addEventListener("click", () =>{
    templink = imgs[0].getAttribute("src");
})

imgs[1].addEventListener("click", () =>{
    if(templink){
        imgs[1].setAttribute("src", templink);   
    }
})

//7 

const txt = divBoxB[6].querySelectorAll('p'); 
const btn = divBoxB[6].querySelector("button"); 

btn.addEventListener("click", () =>{
    txt[1].innerText = [txt[0].innerText , txt[0].innerText  = txt[1].innerText ][0]; 
})



