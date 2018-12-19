// Inimigos que nosso jogador deve evitar



class Character {

    constructor(sprite,col,row){
        this.sprite = sprite;
        this.x = col * 101;
        this.y = row * 70;       
    }

    render(){
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  update(dt){

  }

}

class Player extends Character{

 constructor(sprite,col,row){
    super(sprite,col,row);

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
            player.x = 202;
            player.y = 350;
       }
   }
   
}

//console.log(ctx);

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
let player = new Player('images/char-horn-girl.png',2,5);

let allEnemies = [
new Enemy('images/enemy-bug.png', -1, 1, 3),
    new Enemy('images/enemy-bug.png', -2, 2, 5),
    new Enemy('images/enemy-bug.png', -3, 3, 6),
    new Enemy('images/enemy-bug.png', -4, 1, 8),
    new Enemy('images/enemy-bug.png', -5, 2, 10),
    new Enemy('images/enemy-bug.png', -6, 3, 12),
    ];


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
