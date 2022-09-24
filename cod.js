cont = 0
function Ijuego()
{
    let btnmas = document.getElementById("btn-mas")
    btnmas.addEventListener("click", contM)

    let btnmenos = document.getElementById("menos")
    btnmenos.addEventListener("click", contm)

    let btnr = document.getElementById("reset")
    btnr.addEventListener("click", reiniciarJuego)
}

function contM()
{
    
    let spancontador = document.getElementById("contador")
    //let aum = document.getElementById("mas")
    cont++
    spancontador.innerHTML = cont
    Color()

}
function reiniciarJuego()
{
    location.reload()
    Color()
}
function contm()
{
    let spancontador = document.getElementById("contador")
    cont--
    spancontador.innerHTML = cont
    Color()

}

function Color()
{
    let color
    let spancontador = document.getElementById("contador")
    if(cont>0)
    {
        color = "green"
    }
    else if (cont<0){
        color = "red"
    }
    else if(cont==0)
    {
        color = "black"
    }

    spancontador.style.color = color
}
window.addEventListener("load",Ijuego)

    



