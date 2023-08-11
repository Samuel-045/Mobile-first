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

//2ª parte


const nomeAside = document.getElementById("nome2")
const emailAside = document.getElementById("email2")

function verificacaoAside(){
    const nome = nomeAside.value.trim()
    const email = emailAside.value.trim()

    if(nome==='' || email==='' || nome.lenght<2){
        document.getElementById("erroAside1").innerHTML="Preencha os campos corretamente!!</br>";   
    }else{
        document.getElementById("erroAside1").innerHTML="";   
    }
}

document.querySelector("#submit2").addEventListener('click', event => {
    event.preventDefault()
    verificacaoAside() 
    
    console.log("teste")
})


