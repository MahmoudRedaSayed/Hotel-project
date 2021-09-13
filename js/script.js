var iconSreach=document.getElementById("icon-sreach"),
    sreachList=document.querySelector(".header .search"),
    loginContainer=document.getElementById("login-container"),
    existItem=document.getElementById("existItem"),
    loginItem=document.getElementById("loginItem"),
    menuIcon=document.getElementById("menubar"),
    navBar=document.getElementById("nav-bar"),
    videos=document.querySelectorAll(".controls .vid-btn"),
    video=document.querySelector("#video");
iconSreach.onclick=()=>{
    iconSreach.classList.toggle("fa-times");
    sreachList.classList.toggle("active");
}
window.onscroll=()=>{
    iconSreach.classList.remove("fa-times");
    sreachList.classList.remove("active");
    navBar.classList.remove("active");
}
// the login page
loginItem.onclick=()=>{
    loginContainer.classList.add("active");
}
existItem.onclick=()=>{
    loginContainer.classList.remove("active");
}
//the menu
menuIcon.onclick=()=>{
    menuIcon.classList.toggle("fa-times");
    navBar.classList.toggle("active");
}
// the slider of the videos
videos.forEach(btn=>{
btn.onclick= ()=>{
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    video.setAttribute("src",btn.getAttribute("data-scr"));
}
});
var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    }
});
var swiper = new Swiper(".brand-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    }
});