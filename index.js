// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2
    }
    get circumference(){
        return Math.PI * this.radius * 2
    }
    get area(){
        return Math.PI * Math.pow(this.radius,2)
    }
    set diameter(diam){
        this.radius = diam /2
    }
    set circumference(circum){
        this.radius = circum / (2 * Math.PI)
    }
    set area(newArea) {
        this.radius = Math.sqrt(newArea / Math.PI)
    }
}