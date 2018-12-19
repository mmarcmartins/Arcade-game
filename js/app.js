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

}

class Player extends Character{

     constructor(sprite,col,row){
        super(sprite,col,row);
    } 

    handleInput(bt){

        switch(bt){
            case 'left' :

            break;
            case 'right':

            break;

            case 'up':

            break;

            case 'down':

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
    update(){
        
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
let player = new Player('images/char-horn-girl.png',1,3);

let allEnemies = [
    new Enemy('images/enemy-bug.png', 1, 2, 230),
    //new Enemy('images/enemy-bug.png', 1, 2, 230),
    //new Enemy('images/enemy-bug.png', 1, 2, 230),
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
