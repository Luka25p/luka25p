const c2 = document.getElementById("c2");
const aside = document.getElementById("aside");
const menu = document.getElementById("menu");
            // მენიუს დასაკეცი
c2.addEventListener("click", () =>{
    aside.style.display = 'none'
});
            // მენიუს გასახსნელი
menu.addEventListener("click", ()=>{
    aside.style.display = "flex"
});