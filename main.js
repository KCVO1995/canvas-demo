function draw() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let last = []
    canvas.width = document.body.clientWidth
    canvas.height = document.documentElement.clientHeight

    ctx.strokeStyle = "green"
    ctx.lineWidth = '10'
    ctx.lineCap = "round"
   

    let painting = false
    canvas.onmousedown = (e) => {
        painting = true
        last = [e.clientX,e.clientY]
    }
    canvas.ontouchstart = (x) => {
        painting = true
        last = [x.touches[0].clientX, x.touches[0].clientY]
        
    }
    canvas.onmouseup = () => {
        painting = false
    }
// 判断设备
    function is_touch_device() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }
// 连线函数封装
    function drawline(x1,y1,x2,y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    if (is_touch_device()) {
        canvas.ontouchmove = (x) => {
            drawline(last[0], last[1], x.touches[0].clientX, x.touches[0].clientY)
            last = [x.touches[0].clientX, x.touches[0].clientY]
            console.log(x)
        }
    }
    else {
        canvas.onmousemove = (e) => {
            console.log(e)
            console.log(e.clientX)
            console.log(e.clientY)
            if (painting === true) {
                drawline(last[0],last[1],e.clientX,e.clientY)
                last = [e.clientX,e.clientY]
            }
            else {

            }
        }      
    }
}
