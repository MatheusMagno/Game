let canvas=document.getElementById('desenho');
let ctx=canvas.getContext('2d');

/*Player 1*/
let player=new Image();
player.src="P1.png";
let posX=0,posY=0,larguraP1=50,alturaP1=50;
let velocidade=3;
let w=a=s=d=false;

/*Player 2*/
let player2=new Image();
player2.src="P2.png";
let min=0; 
let max=450;
let larguraP2=50,alturaP2=50;
let rX=0;
let rY=0;

/*Load Player*/
player.addEventListener('load',()=>{
    ctx.drawImage(player,posX,posY,larguraP1,alturaP1);
});
player2.addEventListener('load',()=>{
    ctx.drawImage(player2,rX,rY,larguraP2,alturaP2);
});

/*Atualizar o mapa*/
const loop=()=>{
    ctx.clearRect(0,0,500,500);
    ctx.drawImage(player,posX,posY,larguraP1,alturaP1);
    ctx.drawImage(player2,rX,rY,larguraP2,alturaP2);
    colisao();
};
 
/*Movimentação do Player*/
window.addEventListener('keydown',(event)=>{
    if(event.keyCode==87){ //W
        w=true;
    }else if(event.keyCode==83){ //S
        s=true;
    }
    if(event.keyCode==68){ //D
        d=true;
    }else if(event.keyCode==65){ //A
        a=true;
    }  
});

window.addEventListener('keyup',(event)=>{
    if(event.keyCode==87){ //W
        w=false;
    }else if(event.keyCode==83){ //S
        s=false;
    }
    if(event.keyCode==68){ //D
        d=false;
    }else if(event.keyCode==65){ //A
        a=false;
    }  
});

const movimento=()=>{
    if(w){
        posY-=velocidade;
    }
    if(s){
        posY+=velocidade;
    }
    if(a){
        posX-=velocidade;
    } 
    if(d){
        posX+=velocidade;
    }
    
    if(posX<=0){
        posX=0;
    }
    if(posY+alturaP1>=canvas.height){
        posY=canvas.height-alturaP1;
    }
    if(posY<=0){
        posY=0;
    }
    if(posX+larguraP1>=canvas.width){
        posX=canvas.width-larguraP1;
    }
    loop()
    requestAnimationFrame(movimento)
}
requestAnimationFrame(movimento)



/*Colisão */
const colisao=()=>{
    if(posX<rX+larguraP2&&posX+larguraP1>rX&&posY<rY+alturaP2&&posY+alturaP2>rY){
        console.log("bateu")
        posiçaoAleatoria();
   }
}   


const posiçaoAleatoria=()=>{
    rX=Math.floor(Math.random()*(max-min+1))+min;
    rY=Math.floor(Math.random()*(max-min+1))+min;
}

posiçaoAleatoria();