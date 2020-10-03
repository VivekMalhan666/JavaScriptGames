const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const scale = 20;
canvas.width = 600;
canvas.height = 600;
const rows = canvas.height/scale;
const columns = canvas.width/scale;
var snake;
console.log(new Snake());
(function setup(){
        snake = new Snake();
        fruit = new Fruit();
        fruit.randomPosition();
        
        window.setInterval(()=>{
            context.clearRect(0, 0, canvas.width, canvas.height);
            fruit.draw();
            snake.draw();
            snake.update();
            if(snake.eat(fruit)){
                fruit.randomPosition();
            }
        },200);
        snake.draw();
    }());

window.addEventListener('keydown',(evt)=>{
    snake.changeDirection(evt.key.replace("Arrow",""))
});