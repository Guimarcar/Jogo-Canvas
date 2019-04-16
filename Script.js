var pino1 = {baseX: 110,baseY: 390,
                widthX: pino1.baseX+40, widthY: pino1.baseY,
                heightX: pino1.baseX+20, heightY: pino1.baseY-50,
                raio: 10};

function init() {
    setInterval(draw, 20);
}

function draw() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    //CASAS ROSA
    ctx.fillStyle = 'rgb(255, 150, 150)';
    //ESQUERDO
    ctx.fillRect(100, 100, 50, 50);
    ctx.fillRect(100, 200, 50, 50);
    //BAIXO
    ctx.fillRect(250, 350, 50, 50);
    ctx.fillRect(350, 350, 50, 50);
    ctx.fillRect(450, 350, 50, 50);
    ctx.fillRect(550, 350, 50, 50);
    ctx.fillRect(650, 350, 50, 50);
    ctx.fillRect(750, 350, 50, 50);
    //DIREITA
    ctx.fillRect(750, 250, 50, 50);
    ctx.fillRect(750, 150, 50, 50);
    //CIMA
    ctx.fillRect(700, 100, 50, 50);
    ctx.fillRect(600, 100, 50, 50);
    ctx.fillRect(500, 100, 50, 50);
    ctx.fillRect(400, 100, 50, 50);
    ctx.fillRect(300, 100, 50, 50);
    ctx.fillRect(200, 100, 50, 50);

    //CASAS AZUL
    ctx.fillStyle = 'rgb(150, 150, 255)';
    //ESQUERDA
    ctx.fillRect(100, 150, 50, 50);
    //BAIXO
    ctx.fillRect(200, 350, 50, 50);
    ctx.fillRect(300, 350, 50, 50);
    ctx.fillRect(400, 350, 50, 50);
    ctx.fillRect(500, 350, 50, 50);
    ctx.fillRect(600, 350, 50, 50);
    ctx.fillRect(700, 350, 50, 50);
    //DIREITA
    ctx.fillRect(750, 300, 50, 50);
    ctx.fillRect(750, 200, 50, 50);
    ctx.fillRect(750, 100, 50, 50);
    //CIMA
    ctx.fillRect(650, 100, 50, 50);
    ctx.fillRect(550, 100, 50, 50);
    ctx.fillRect(450, 100, 50, 50);
    ctx.fillRect(350, 100, 50, 50);
    ctx.fillRect(250, 100, 50, 50);
    ctx.fillRect(150, 100, 50, 50);

    //INICIO E FIM
    ctx.fillStyle = 'rgb(30, 30, 30)';
    ctx.fillRect(100, 250, 50, 100);
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillRect(100, 350, 100, 50);

    //Pino 1

    ctx.beginPath();
    ctx.moveTo(110, 390);
    ctx.lineTo(150, 390);
    ctx.lineTo(130, 350);
    ctx.closePath();

    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(130, 350, 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();

}