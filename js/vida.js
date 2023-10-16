var main =  document.querySelector("container")
var nav = document.getElementById("navegation")
var showsdbar = false
const botao1 = document.getElementById("botao1")
const botao2 = document.getElementById("botao2")

function togglesidebar(){
    showsdbar = !showsdbar

    if(showsdbar){        
        nav.style.maxHeight=nav.scrollHeight+"px"
        document.getElementById("imagem").src="../image/x.png"
    }else{
        nav.style.maxHeight="0"
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

// 2ªparte- parte 1-  primeiro botão
// função do botão submit do <article>

function verificacaoArticle(nomeArticle, emailArticle, comentarioArticle, siteArticle){
    var nomeArt = nomeArticle.value.trim()
    var emailArt = emailArticle.value.trim()
    var comentario = comentarioArticle.value.trim()
    var nomeCond = false

    if(comentario.length<=1){
        document.getElementById("erroArt1").innerHTML="Comentário muito curto<br>"
    }else{
        document.getElementById("erroArt1").innerHTML="Comentário válido<br>"
    }
    
    if(nomeArt.length<=1){
        document.getElementById("erroArt2").innerHTML="Nome muito curto<br>"
        nomeCond = nomeCond
    }else{
        nomeCond =! nomeCond
        document.getElementById("erroArt2").innerHTML="Nome válido<br>"
    }

    const regex = /^[a-z0-9]+@[a-z0-9.-]+\.[a-z]{2,}$/i
    var cond = regex.test(emailArt)

    if(cond){
        document.getElementById("erroArt3").innerHTML="Email válido<br>"
    }else{
        document.getElementById("erroArt3").innerHTML="Email inválido<br><br>"
    }

    if(nomeArt==='' || emailArt==='' || nomeCond===false || cond===false || (comentario==='' || comentario<=3)){
        document.getElementById("erroArtGeral").innerHTML="Preencha os campos corretamente!!</br>";   
    }else if(cond && nomeCond){
        document.getElementById("erroArtGeral").innerHTML="Cadastro realizado com sucesso "+nomeArticle.value+" !!"
    }else{
        document.getElementById("erroArtGeral").innerHTML="";   
    }
}

const nomeArticle = document.getElementById("nome1")
const emailArticle = document.getElementById("email1")
const comentarioArticle = document.getElementById("comentario")
const siteArticle = document.getElementById("site")

document.querySelector("#submit1").addEventListener('click', event => { //botão submit <article>
    event.preventDefault()
    verificacaoArticle(nomeArticle, emailArticle, comentarioArticle, siteArticle) 
})

// 2ªparte- parte 2-  segundo botão
// função do botão submit do <aside>
function verificacaoAside(nomeAside, emailAside){
    var nomeCond = false
    const nomeAsd = nomeAside.value.trim()
    const emailAsd = emailAside.value.trim()

    if(nomeAsd.length<=1){
        document.getElementById("erroAside2").innerHTML="Nome muito curto"
        nomeCond = nomeCond
    }else{
        nomeCond =! nomeCond
        document.getElementById("erroAside2").innerHTML="Nome válido"
    }

    const regex = /^[a-z0-9]+@[a-z0-9.-]+\.[a-z]{2,}$/i
    var cond =regex.test(emailAsd)

    if(cond){
        document.getElementById("erroAside3").innerHTML="Email válido"
    }else{
        document.getElementById("erroAside3").innerHTML="Email inválido<br><br>"
    }

    if(nomeAsd==='' || emailAsd==='' || nomeCond===false || cond===false){
        document.getElementById("erroAside1").innerHTML="Preencha os campos corretamente!!</br>";   
    }else if(cond && nomeCond){
        document.getElementById("erroAside1").innerHTML="Cadastro realizado com sucesso "+nomeAside.value+" !!"  
    }else{
        document.getElementById("erroAside1").innerHTML="";   
    }

}

const nomeAside = document.getElementById("nome2")  
const emailAside = document.getElementById("email2")

document.querySelector("#submit2").addEventListener('click', event => { //botão submit <aside>
    event.preventDefault()
    verificacaoAside(nomeAside, emailAside) 
})


