var pino1 = {x:102, y:390, cor:"white", casas:0, vez:1, bonus:0};
var pino2 = {x:107, y:385, cor:"red", casas:0, vez:1, bonus:0};
var pino3 = {x:112, y:390, cor:"yellow", casas:0, vez:1, bonus:0};
var pino4 = {x:118, y:385, cor:"blue", casas:0, vez:1, bonus:0};

function init() {
    setInterval(draw, 20);
}

function pinos(p){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(p.x+30, p.y);
    ctx.lineTo(p.x+15, p.y-40);
    ctx.closePath();

    ctx.fillStyle = p.cor;
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(p.x+15, p.y-40, 10, 0, 2 * Math.PI, false);

    ctx.fillStyle = p.cor;
    ctx.fill();
    ctx.stroke();

}

function vez(){
    console.log(pino1.vez, pino2.vez, pino3.vez, pino4.vez);
    if(pino1.vez){
        andar(pino1);
        pino1.vez=0;

    }else if(pino2.vez){
        andar(pino2);
        pino2.vez=0;

    }else if(pino3.vez){
        andar(pino3);
        pino3.vez=0;

    }else if(pino4.vez){
        andar(pino4);
        pino4.vez=0;
    }else{
        pino1.vez= pino2.vez = pino3.vez = pino4.vez = 1;
        vez();
    }
}

function andar(p){
    p.casas = Math.floor(Math.random()*6+1);
    while(p.casas != 0){
        testeCasa(p, 50);
        p.casas--;
    }
}

function testeCasa(p, n){
    if(p.y > 350 && p.x < 750){
        p.x+=50;
    }
}

vez();
vez();
vez();
vez();
vez();

function bonus(p){

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
    ctx.fillRect(150, 350, 50, 50);
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
    ctx.fillRect(100, 250, 50, 50);
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
    ctx.fillRect(100, 300, 50, 50);
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillRect(100, 350, 50, 50);

    //Contorno
    ctx.beginPath();
    ctx.moveTo(100,400);
    ctx.lineTo(800,400);
    ctx.lineTo(800,100);
    ctx.lineTo(100,100);
    ctx.lineTo(100,400);

    ctx.moveTo(150,350);
    ctx.lineTo(750,350);
    ctx.lineTo(750,150);
    ctx.lineTo(150,150);
    ctx.lineTo(150,350);
    ctx.lineWidth = 2;
    ctx.stroke();

    //Pino 1
	pinos(pino1);

    //Pino 2
	pinos(pino2);

    //Pino 3
	pinos(pino3);

    //Pino 4
	pinos(pino4);

}