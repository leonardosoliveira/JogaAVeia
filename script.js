let player1 = "playerA";
let player2 = "playerB";

let jogador = player1;

let tabuleiro = document.querySelectorAll("main div");


for (quadrado of tabuleiro) {
    quadrado.onclick = teste;
}



function teste(){
    let a = document.querySelector("#" + this.id + " span");
    if(jogador === player1){
        console.log(a.textContent.length);

        if(a.textContent.length !== 1){ 
        a.textContent = "X";
        jogador = player2;
        }
        console.log(a.textContent.length);
        
        
    }else{
        if(a.textContent.length !== 1){ 
            a.textContent = "O";
            jogador = player1;
            }
    }
}