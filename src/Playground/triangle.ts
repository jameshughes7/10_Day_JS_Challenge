export class Triangle {
    side1: number;
    side2: number;
    side3: number;

    constructor(side1: number, side2: number, side3: number) {
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
  
    isEquilateral(): boolean {
      return (
        this.matchingSides() === 3 && this.isValidTriangle()
      );
    }
  
    isIsosceles(): boolean {
      return (
        (this.matchingSides() === 2 || this.matchingSides() === 3) && this.isValidTriangle() 
      );
    }
  
    isScalene(): boolean {
      return this.matchingSides() === 1 && this.isValidTriangle()
    }
  
    isValidTriangle(): boolean {
      const sidesLengthValid = this.side1 !== 0 && this.side2 !== 0 && this.side3 !== 0;
      const shapeValid = (this.side1 + this.side2) >= this.side3 && 
                          (this.side1 + this.side3) >= this.side2 && 
                          (this.side2 + this.side3) >= this.side1;
      return sidesLengthValid && shapeValid; 
    }
  
    matchingSides(): number {
      return this.side1 === this.side2 && this.side1 === this.side3 ? 3
        : this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3 ? 2
        : 1
    }
  }
  