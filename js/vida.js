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

// 2-1ª parte




// 2-2ª parte

const nomeAside = document.getElementById("nome2")
const emailAside = document.getElementById("email2")

function verificacaoAside(){
    var nomeCond = false
    const nome = nomeAside.value.trim()
    const email = emailAside.value.trim()

   

    if(nome.length<=1){
        document.getElementById("erroAside2").innerHTML="Nome muito curto"
        nomeCond = nomeCond
    }else{
        nomeCond =! nomeCond
        document.getElementById("erroAside2").innerHTML="Nome válido"
    }

    const regex = /^[a-z0-9]+@[a-z0-9.-]+\.[a-z]{2,}$/i
    var cond =regex.test(email)

    if(cond){
        document.getElementById("erroAside3").innerHTML="Email válido"
    }else{
        document.getElementById("erroAside3").innerHTML="Email inválido<br><br>"
    }

    if(nome==='' || email==='' || nome.length<=1 || cond===false){
        document.getElementById("erroAside1").innerHTML="Preencha os campos corretamente!!</br>";   
    }else if(cond && nomeCond){
        document.getElementById("erroAside1").innerHTML="Cadastro realizado com sucesso "+nomeAside.value+" !!"  
    }else{
        document.getElementById("erroAside1").innerHTML="";   
    }

}

document.querySelector("#submit2").addEventListener('click', event => { //botão aside
    event.preventDefault()
    verificacaoAside() 
    
    
})

//3ª parte
