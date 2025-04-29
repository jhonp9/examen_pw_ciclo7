let boton=function(){
    const texto=document.getElementById("url")
    const div=document.getElementById("importar")
    let nuevo=texto.value.trim()
    if(nuevo!==""){
        const a=document.createElement("div")
        const e=document.createElement("img")
        e.src=nuevo
        e.className="img"
        div.appendChild(a)
        a.appendChild(e)
        texto.value=""  
        texto.focus()   
    }

}
let main=function(){
    document.getElementById("boton").addEventListener("click",boton)
}
main()