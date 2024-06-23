
const Scroll = document.getElementById('scroll')


window.addEventListener("scroll", () =>{
    if (window.scrollY > 200){
         Scroll.style.display = 'flex'
    } else if(window.scrollY < 200){
         Scroll.style.display = 'none'
    }
})
Scroll.addEventListener("click", (st) =>{
    if(st){
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        })
    }
})

