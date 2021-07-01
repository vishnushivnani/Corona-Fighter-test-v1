class HealthBar{
    constructor(x,y,width,height,maxHealth,color){
     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height;
     this.maxHealth = maxHealth;
     this.maxWidth = width;
     this.health = maxHealth;
     this.color = color;
    
    // this.body = rectangle(x,y,width,height)


    }
    display(){
        
        stroke("black")
        fill(this.color);
        rect(this.x,this.y,this.width,this.height);
      
    }
    updateHealth(val){
        
        this.health = val;
        this.width = (this.health/this.maxHealth) * this.maxWidth




    }
}