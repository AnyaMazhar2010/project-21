class Ball{
    constructor(x,y,radius){
        var ball_options={
            isStatic:false,
            restitusion:0.3,
            friction:0,
            density:1.2 
            }
        this.ball = Matter.Bodies.circle(x,y,radius,ball_options)
        this.radius= radius
        World.add(world,this.ball)
    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.ball.position.x, this.ball.position.y,this.radius)
    }

}
