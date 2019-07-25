let player1 = "playerA";

let player2 = "playerB";

let jogador = player1;
let p0=null;
let p1=null;
let p2=null;
let p3=null;
let p4=null;
let p5=null;
let p6=null;
let p7=null;
let p8=null;
let i=1;
let tabuleiro = document.querySelectorAll("main div");


for (quadrado of tabuleiro) {
    quadrado.onclick = teste;
}


function teste(){
    let a = document.querySelector("#" + this.id + " span");
    id=this.id;
    
    if(jogador === player1){


        if(a.textContent.length !== 1){
        a.textContent = "X";
        b="X";
        jogador = player2;
        }


    }else{
        if(a.textContent.length !== 1){
            a.textContent = "O";
            jogador = player1;
            b="O";
            }
    }
        valores();
}
function valores(){
     if(id==='p0')
         p0=b;
        if(id==='p1')
             p1=b;
            if(id==='p2')
             p2=b;
                if(id==='p3')
                 p3=b;
                    if(id==='p4')
                     p4=b;
                        if(id==='p5')
                         p5=b;
                            if(id==='p6')
                             p6=b;
                                if(id==='p7')
                                 p7=b;
                                    if(id==='p8')
                                     p8=b;
    
     vitoria();
     vitoriaO();
    
     if(i>9){
        alert("Nao houve ganhadores");
    }
    }    

function vitoria(){i++;
if(p0==="X"&&p1==="x"&&p2==="X"){
    ganhar();
}
if(p3==="X"&&p4==="X"&&p5==="X"){
    ganhar();}
if(p6==="X"&&p7==="X"&&p8==="X"){
    ganhar();}
if(p0==="X"&&p3==="X"&&p6==="X"){
    ganhar();}
if(p1==="X"&&p4==="X"&&p7==="X"){
    ganhar();}
if(p2==="X"&&p5==="X"&&p8==="X"){
    ganhar();}
if(p0==="X"&&p4==="X"&&p8==="X"){
    ganhar();}
if(p2==="X"&&p4==="X"&&p6==="X"){
    ganhar();
}
}

function vitoriaO(){
    if(p0==="O"&&p1==="O"&&p2==="O"){
         ganharO();    }
    if(p3==="O"&&p4==="O"&&p5==="O"){
         ganharO();}
    if(p6==="O"&&p7==="O"&&p8==="O"){
         ganharO();}
    if(p0==="O"&&p3==="O"&&p6==="O"){
         ganharO();}
    if(p1==="O"&&p4==="O"&&p7==="O"){
         ganharO();}
    if(p2==="O"&&p5==="O"&&p8==="O"){
         ganharO();}
    if(p0==="O"&&p4==="O"&&p8==="O"){
         ganharO();}
    if(p2==="O"&&p4==="O"&&p6==="O"){
         ganharO();
    }
    }

    
function ganhar(){
   alert("O vencedor foi o jogador "+jogador1);
}
function ganharO(){
    alert("O vencedor foi o jogador "+jogador2);
}
function novoJogo(){
    window.parent.location.reload();

}

function salvarNome(div)
{let pegarJog1 = document.texto.texto.value;
     jogador1 = pegarJog1;
 let pegarJog2 = document.texto.text.value;
     jogador2 = pegarJog2;
}




