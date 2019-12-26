canvas.onclick = (e) => {
    console.log(e.clientX)
    console.log(e.clientY)
    let div = document.createElement("div")
    div.style.position = "absolute"
    div.style.left = e.clientX + 'px'
    div.style.top = e.clientY + 'px'
    div.style.width = '10px'
    div.style.height = '10px'
    div.style.transform = 'translate(-50%,-50%)'
    div.style.borderRadius = '50%'
    div.style.backgroundColor = 'blue'
    canvas.appendChild(div)
}