var pino1 = {x:102, y:390, cor:"white", casas:0, vez:1, bonus:0};
var pino2 = {x:107, y:385, cor:"red", casas:0, vez:1, bonus:0};
var pino3 = {x:112, y:390, cor:"yellow", casas:0, vez:1, bonus:0};
var pino4 = {x:118, y:385, cor:"blue", casas:0, vez:1, bonus:0};
var vezPino = 1;
var apertado = 1;

function init() {
    var canvas = document.getElementById('canvas');
    canvas.addEventListener('mousedown', onClick, false);
    setInterval(draw, 100);
}

function onClick(ev) {
    var mx = ev.offsetX;
    var my = ev.offsetY;

    if (mx >= 300 && mx <= 400
          && my >= 200 && my <= 300) {
          vez();
    }
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
    if(pino1.vez != 1 &&
        pino2.vez != 1 &&
        pino3.vez != 1 &&
        pino4.vez != 1){
            pino1.vez += 1;
            pino2.vez += 1;
            pino3.vez += 1;
            pino4.vez += 1;
        }

    if(pino1.vez==1){
        pino1.vez=0;
        andar(pino1);
        pino1.bonus = 0;

    }else if(pino2.vez==1){
        pino2.vez=0;
        andar(pino2);
        pino2.bonus = 0;

    }else if(pino3.vez==1){
        pino3.vez=0;
        andar(pino3);
        pino3.bonus = 0;

    }else{
        pino4.vez=0;
        andar(pino4);
        pino4.bonus = 0;

    }
}

function andar(p){
    p.casas = Math.floor(Math.random()*6+1);
    alert(p.cor + " anda " + p.casas);

    while(p.casas != 0){
        p.casas--;
        testeCasa(p, 50);
    }
}

function testeCasa(p, n){
    if(p.x > 100 && p.x < 150 &&
        p.y > 300 && p.y < 350){
        p.bonus = 2;
    }
    if(p.y >= 350 && p.x < 750){
        p.x+=n;
    }else if(p.x >= 750 && p.y > 150){
        p.y-=n;
    }else if(p.y <= 150 && p.x > 150){
        p.x-=n;
    }else{
        p.y+=n;
    }
    if(p.casas == 0){
        bonus(p);
    }
    //apertado = 1;
}

function bonus(p){
    let b = "CASA BONUS\n";
    //ANDA +2
    if(p.x >= 150 && p.x <= 200 && p.y >= 350 && p.y <= 400){
        alert(b + "Pino de cor "+ p.cor + " anda: +2 casas.");
        p.casas=2;
        while(p.casas != 0){
            p.casas--;
            testeCasa(p, 50);
        }
    }
    //VOLTA 1
    else if(p.x >= 450 && p.x <= 500 && p.y >= 350 && p.y <= 400){
        alert(b + "Pino de cor "+ p.cor + " volta: 1 casa.");
        p.casas=1;
        while(p.casas != 0){
            p.casas--;
            testeCasa(p, -50);
        }
    }
    //PERDE A VEZ
    else if(p.x >= 750 && p.x <= 800 && p.y >= 300 && p.y <= 350){
        alert(b + "Pino de cor "+ p.cor + " perde uma rodada.");
        p.vez = -1;
        p.bonus = 1;
    }        
    //ANDA +1
    else if(p.x >= 750 && p.x <= 800 && p.y >= 200 && p.y <= 250){
        alert(b + "Pino de cor "+ p.cor + " anda: +1 casa.");
        p.casas=1;
        while(p.casas != 0){
            p.casas--;
            testeCasa(p, 50);
        }
    }        
    //VOLTA 2
    else if(p.x >= 450 && p.x <= 500 && p.y >= 100 && p.y <= 150){
        alert(b + "Pino de cor "+ p.cor + " volta: 2 casas.");
        p.casas=2;
        while(p.casas != 0){
            p.casas--;
            testeCasa(p, -50);
        }
    }        
    //PERDE A VEZ
    else if(p.x >= 100 && p.x <= 150 && p.y >= 100 && p.y <= 150){
        alert(b + "Pino de cor "+ p.cor + " perde uma rodada.");
        p.vez = -1;
        p.bonus = 1;
    }
    //VOLTA 2
    else if(p.x >= 100 && p.x <= 150 && p.y >= 250 && p.y <= 300){
        alert(b + "Pino de cor "+ p.cor + " volta: 2 casas.");
        p.casas=2;
        while(p.casas != 0){
            p.casas--;
            testeCasa(p, -50);
        }
    }
}

function ganhador(){
    if(pino1.bonus == 2) return pino1;
    else if(pino2.bonus == 2) return pino2;
    else if(pino3.bonus == 2) return pino3;
    else if(pino4.bonus == 2) return pino4;
    else return 0;
}

function draw() {
    //if(apertado == 1){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //VERIFICA GANHADOR
    if(ganhador()){
        ctx.font="40pt Bernard MT Condensed";
        ctx.fillStyle = "rgb(20,20,20)";
        ctx.fillText("O Jogador com o Pino " + ganhador().cor,350,200);
        ctx.fillText("Ganhou o Jogo",380,300);
    }

    //ROLAR DADO
    ctx.fillStyle = "rgb(120,0,0)";
    ctx.fillRect(300, 200, 103, 103);
    ctx.fillStyle = "rgb(255,40,40)";
    ctx.fillRect(300, 200, 100, 100);

    //CASAS BONUS
    ctx.fillStyle = "yellow";
    ctx.fillRect(150, 350, 50, 50);
    ctx.fillRect(450, 350, 50, 50);
    ctx.fillRect(750, 300, 50, 50);
    ctx.fillRect(750, 200, 50, 50);
    ctx.fillRect(450, 100, 50, 50);
    ctx.fillRect(100, 100, 50, 50);
    ctx.fillRect(100, 250, 50, 50);

    //CASAS ROSA
    ctx.fillStyle = 'rgb(255, 150, 150)';
    //ESQUERDO
    ctx.fillRect(100, 200, 50, 50);
    //BAIXO
    ctx.fillRect(250, 350, 50, 50);
    ctx.fillRect(350, 350, 50, 50);
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
    ctx.fillRect(750, 100, 50, 50);
    //CIMA
    ctx.fillRect(650, 100, 50, 50);
    ctx.fillRect(550, 100, 50, 50);
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

    ctx.fillStyle = "black";

    ctx.font="12pt arial";
    ctx.fillText("Perde", 753, 320);
    ctx.fillText("vez", 760, 335);

    ctx.fillText("Perde", 105, 123);
    ctx.fillText("vez", 110, 138);

    ctx.font="20pt arial";
    ctx.fillText("+2", 160, 385);
    ctx.fillText("-1", 465, 385);
    ctx.fillText("+1", 760, 235);
    ctx.fillText("-2", 462, 135);
    ctx.fillText("-2", 113, 285);

    ctx.font="25pt arial";
    ctx.fillText("Rolar", 310, 238);
    ctx.font="20pt arial";
    ctx.fillText("Dado", 317, 280);
    
    /*
    ctx.font="40pt Bernard MT Condensed";
    ctx.fillStyle = "rgb(20,20,20)";
    ctx.fillText("Vez do pino de cor: ",180,70);

    if(vezPino == 1){
        if(!pino1.bonus){
            vezPino++;
            ctx.fillStyle = pino1.cor;
            ctx.fillText(pino1.cor,600,70);
        }else vezPino++;

    }
    
    if(vezPino == 2){
        if(!pino2.bonus){
            vezPino++;
            ctx.fillStyle = pino2.cor;
            ctx.fillText(pino2.cor,600,70);
        }else vezPino++;

    }
   
    if(vezPino == 3){
        if(!pino3.bonus){
            vezPino++;
            ctx.fillStyle = pino3.cor;
            ctx.fillText(pino3.cor,600,70);
        }else vezPino++;

    }
    
    if(vezPino == 4){
        if(!pino4.bonus){
            vezPino=1;
            ctx.fillStyle = pino4.cor;
            ctx.fillText(pino4.cor,600,70);
        }else vezPino=1;
    }*/

    //Pino 1
	pinos(pino1);

    //Pino 2
	pinos(pino2);

    //Pino 3
	pinos(pino3);

    //Pino 4
    pinos(pino4);

    //apertado = 0;
}
//}