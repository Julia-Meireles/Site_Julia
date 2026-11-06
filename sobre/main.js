const botao = document.getElementById("botao_Sakura");
let animacaoPetalas = false;

botao.addEventListener("click", () => {
    document.getElementById("dica_Sakura").style.display = "none";
    //Cria novas pétalas e as coloca num array
    for (let i = 0; i < TOTAL; i++) {
        petalaArray.push(new Petala());
    }

    if (!animacaoPetalas) {
        animacaoPetalas = true;
        render();
    }
});

const canvas = document.querySelector('canvas');

//Determina o tamanho da janela.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variável que serve pra desenhar na tela
const ctx = canvas.getContext('2d');

const TOTAL = 30;
const petalaArray = [];

const petalaPNG = new Image();
petalaPNG.src = './assets/petala.png';

//Garante que a imagem da pétala carregue antes da função de renderizar, ai não dá pau na hora de desenhar ela no canva
petalaPNG.onload = () => {

}

// Função para repetir um frame várias vezes
function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petalaArray.forEach(petala =>{
        petala.animate()
    })

    window.requestAnimationFrame(render);
}

//Fica atualizando o tamanho dessa tela canvas se o usuário diminui ou aumenta a tela
window.addEventListener('resize', () =>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

// Meio que inicializa cada pétala pra desenhar ela no canva
class Petala {
    constructor() {
        this.x = (Math.random() * (canvas.width)) - 150;
        this.y = (Math.random() * canvas.height) - 600;
        this.width = 30 + Math.random() * 15;
        this.height = 20 + Math.random() * 10;
        this.opacity = this.width / 45;
        this.xVelocidade = 0.2 + Math.random();
        this.yVelocidade = 0.5 + Math.random();
    }
    draw(){
        ctx.globalAlpha = this.opacity;
        
        ctx.drawImage(
            petalaPNG,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }

    animate(){
        this.x += this.xVelocidade,
        this.y += this.yVelocidade,
        this.draw();
    }
}