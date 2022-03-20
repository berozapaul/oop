class Person{
    name:string

    eat():void{
        console.log(this.name+" eats when hungry.")
    }
}

class Student extends Person{
    roll:number;

    constructor(roll:number, name:string){
        super();
        this.roll = roll
        this.name = name
    }

    // functions
    displayInformation():void{
        console.log("Name: "+this.name+", Roll Number: "+this.roll)
    }

    // overriding super class method
    eat():void{
        console.log(this.name+" eats during break.")
    }
}

const student = new Student(2, "Joe")

student.displayInformation() // Name: Joe, Roll Number: 2
student.eat() // Joe eats during break.
