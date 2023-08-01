var main =  document.querySelector("container")
var nav = document.getElementById("navegation")
var showsdbar = false
const botao1 = document.getElementById("botao1")
const botao2 = document.getElementById("botao2")

function togglesidebar(){
    showsdbar = !showsdbar

    if(showsdbar){        
        nav.style.maxHeight=nav.scrollHeight+"px"
        main.style.filter='blur(2px)'
        document.getElementById("imagem").src="../image/x.png"
    }else{
        nav.style.maxHeight="0"
        main.style.filter=''
        document.getElementById("imagem").src="../image/menu.png"
    }

}

function closesidebar(){
    if(showsdbar){
        togglesidebar();
    }
}

botao1.addEventListener('click', togglesidebar)
botao2.addEventListener('click', closesidebar)

window.addEventListener('resize', function(event){
    if(window.innerWidth>768 && showsdbar){
        togglesidebar()
    }
})