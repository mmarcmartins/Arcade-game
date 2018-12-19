// Inimigos que nosso jogador deve evitar




let vidas = [60,90,120];

class Character {
    constructor(sprite,col,row){
        this.sprite = sprite;
        this.x = col * 101;
        this.y = row * 70;       
    }

    render(){        
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
      ctx.font =  "18px Arial"
      ctx.textAlign = "center";
      ctx.strokeWidth = 1;
      ctx.fillText("Vidas: ",30,40);
      for(const vida of vidas){
          ctx.drawImage(Resources.get('images/Heart.png'),vida,13,30,40);
      }
  }

  update(dt){
  }

}

class Player extends Character{

   constructor(sprite,col,row){
        super(sprite,col,row,status);
        this.status = status;

    }

    handleInput(bt){

        switch(bt){
            case 'left' :                              
            this.x-= (this.x <= 0 ) ? 0 : 101;
            break;

            case 'right':                            
            this.x+= (this.x >= 404 ) ? 0 : 101;              
            break;

            case 'up':                
            this.y-= (this.y <= 70 ) ? -350 : 70;
            this.x = (this.y == 350 ) ? 202: this.x;                                
            break;

            case 'down':
            this.y += (this.y >= 420 ) ? 0 : 70;                          
            break;
        }

    }   


    update(){
        if(this.status === 0 ){            
           restartGame();
           
        }
    }

}

class Enemy extends Character {
    constructor(sprite,col,row,speed){
        super(sprite,col,row,speed);
        this.speed = speed;        
    }
    // As variáveis aplicadas a nossas instâncias entram aqui.
    // Fornecemos uma a você para que possa começcar.

    // A imagem/sprite de nossos inimigos, isso usa um
    // ajudante que é fornecido para carregar imagens
    // com facilidade.

    //this.sprite = 'images/enemy-bug.png';
    update(dt){                
        this.x += 1 * this.speed * dt * 80;
        if(this.x >= 505){
            let auxSpeed = Math.floor(Math.random() * Math.floor(15));
            this.speed = (auxSpeed < 3) ? 3 : auxSpeed;            
            this.x = -40 * this.speed ;            
        }
    }
}

function checkCollisions(){
    for( const enemy of allEnemies){
         if( enemy.x  >= ( player.x - 90 )  && enemy.x <= ( player.x + 90 )  && player.y === enemy.y ) {
            vidas.splice(-1,1);
              if(vidas.length > 0){
                  player.x = 202;
                  player.y = 350;                  
              } else {                  
                 player.status = 0;
              }
        }
    }

}

function restartGame(){        
       for( const enemy of allEnemies){
          enemy.speed = 0;
       }
}

// Atualize a posição do inimigo, método exigido pelo jogo
// Parâmetro: dt, um delta de tempo entre ticks

//Enemy.prototype.update = function(dt) {
    // Você deve multiplicar qualquer movimento pelo parâmetro
    // dt, o que garantirá que o jogo rode na mesma velocidade
    // em qualquer computador.
//};

// Desenhe o inimigo na tela, método exigido pelo jogo
//Enemy.prototype.render = function() {
  //  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
//};

// Agora, escreva sua própria classe de jogador
// Esta classe exige um método update(), 
// um render() e um handleInput().


// Represente seus objetos como instâncias.
// Coloque todos os objetos inimgos numa array allEnemies
// Coloque o objeto do jogador numa variável chamada jogador.
let player = new Player('images/char-horn-girl.png',2,5,1);

let allEnemies = [

    new Enemy('images/enemy-bug.png', -1, 1, 9),
    new Enemy('images/enemy-bug.png', -2, 2, 8),
    new Enemy('images/enemy-bug.png', -3, 3, 15),
    new Enemy('images/enemy-bug.png', -4, 1, 8),
    new Enemy('images/enemy-bug.png', -5, 2, 10),
    new Enemy('images/enemy-bug.png', -6, 3, 12),

];

let originalEnemiesPosition = allEnemies.slice(0);

// Isto reconhece cliques em teclas e envia as chaves para seu
// jogador. método handleInput(). Não é preciso mudar nada.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
