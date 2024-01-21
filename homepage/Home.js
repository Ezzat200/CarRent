
// replace icon-nav-bar
let icon_ba = document.querySelector(".icon-ba")
let icon_x = document.querySelector(".icon-x")
console.log(icon_ba,icon_x)

icon_ba.addEventListener("click",function(){
    icon_x.style.display="block"
    icon_ba.style.display="none"
    
})
icon_x.addEventListener("click",function(){
    icon_x.style.display="none"
    icon_ba.style.display="block"
   
    


})


const sr=ScrollReveal({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
})
sr.reveal('.cont',{delay:800,origin:'left'})
sr.reveal('.ride-section',{delay:600,origin:'top'})
sr.reveal('.services-section',{delay:600,origin:'top'})
sr.reveal('.about-section',{delay:600,origin:'left'})
sr.reveal(' footer ul li ',{delay:400,origin:'bottom'})


function goToProduct(){
location.href="/Product/Product.html"
}

//sinup and login

function sinup(){
    location.href="/Register.html"
}
function login(){
    location.href= "/login.html"
}






