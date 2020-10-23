class particle{
    constructor(x,y,r){
        var options={restitution:0.5,
        isStatic:false}
        this.Body=Bodies.circle(x,y,r,options)
        this.color=color(random(0,255)),(random(0,255)),(random(0,255))
        this.r=r
        World.add(World,this.Body)
    }
    display(){
        push()
        translate(this.Body.position.x,this.Body.position.y)
        rotate(this.Body.angle)
        fill(this.color)
        ellipseMode(CENTER)
        ellipse(0,0,this.r,this.r)
        pop()
    }
}