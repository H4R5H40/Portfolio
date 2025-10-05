let btn=document.querySelector(".view-mode");
let css_mode=document.querySelector("#css-style");
let mode_icon=document.querySelector("#mode");
btn.addEventListener('click',()=>{
    if(css_mode.getAttribute("href")=="lightMode.css"){
        css_mode.setAttribute("href","darkMode.css");
        mode_icon.setAttribute('src','light-mode.png')
        return;
    }
    if(css_mode.getAttribute("href")=="darkMode.css"){
        css_mode.setAttribute("href","lightMode.css");
        mode_icon.setAttribute('src','dark-mode.png')
        return;
    }
})