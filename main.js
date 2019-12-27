function draw() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = document.body.clientWidth
    canvas.height = document.documentElement.clientHeight

    ctx.fillStyle = "black"
    ctx.strokeStyle = "none"

    let painting = false
    canvas.onmousedown = () => {
        painting = true
    }
    canvas.onmouseup = () => {
        painting = false
    }


    canvas.onmousemove = (e) => {

        console.log(e.clientX)
        console.log(e.clientY)
        if (painting === true) {

            ctx.beginPath();
            ctx.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.stroke();
        }
        else {

        }
    }
}
