// Your code here
class Polygon {
    constructor(arr){
        this.sides = arr;
    }
    get countSides (){
        return this.sides.length;
    }
    get perimeter (){
        let sum=0;
        for (let i=0 ; i < this.sides.length ; i++){
            sum += this.sides[i];
        }
        return sum;
    }
}
class Triangle extends Polygon {
    get isValid() {
        return (
          this.sides[0] + this.sides[1] > this.sides[2] &&
          this.sides[0] + this.sides[2] > this.sides[1] &&
          this.sides[2] + this.sides[1] > this.sides[0]
        );
      }
}
class Square extends Polygon {
    get isValid() {
        return (
          this.sides[0] === this.sides[1] &&
          this.sides[2] === this.sides[3] &&
          this.sides[1] === this.sides[2]
        );
      }
    get area() {
        return this.sides[0]*this.sides[1];
    }
}