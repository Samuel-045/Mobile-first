var main =  document.querySelector("main")
var nav = document.getElementById("navegation")
var showsdbar = false
const botao1 = document.getElementById("botao1")
const botao2 = document.getElementById("botao2")

function togglesidebar(){
    showsdbar = !showsdbar

    if(showsdbar){
        nav.style.marginTop="0";
        nav.style.display="initial"
        nav.style.animationName="showSideBar"
        main.style.filter='blur(2px)'
    }else{
        nav.style.marginTop="-35vw"
        nav.style.display="none"
        nav.animationName="showSideBar2"
        main.style.filter=''
    }

}

function closesidebar(){
    if(showsdbar){
        togglesidebar();
    }
}

botao1.addEventListener('click', togglesidebar)
botao2.addEventListener('click', closesidebar)