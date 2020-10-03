function Fruit(){
    this.x = Math.random * 60;
    this.y = Math.random * 60;
    
    this.randomPosition = function(){
        this.x = Math.floor((Math.random() * (rows -1)) + 1 ) * scale;
        this.y = Math.floor((Math.random() * (columns -1)) + 1 ) * scale;
    }
    this.draw = function(){
        context.fillStyle='red';
        context.fillRect(this.x,this.y, scale, scale);
        context.fill();
        
    }
    
}