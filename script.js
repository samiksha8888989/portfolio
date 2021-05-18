//js for nav bar effect on scroll
window.addEventListener("scroll",function(){
    const header = this.document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY >0)
});

//js of responsive nav sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");


menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");

});

navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});

//js for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

 window.addEventListener("scroll", function(){
    scrollBtn.classList.toggle("active", window.scrollY > 500);  
});
//js for scroll back to top button on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

