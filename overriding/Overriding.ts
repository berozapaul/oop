class Animal {
    // A protected method
    protected doStuff()
    {
        console.log(`${this.constructor.name} has been called`)
    }

    // Expose the protected method as a public function
    public callDoStuff()
    {
        this.doStuff();
    }
}

class Dog extends Animal {

    // Override the protected method
    protected doStuff()
    {
        // If we want we can still explicitly call the initial method
        super.doStuff();
    }
}

const animalObj = new Animal();
animalObj.callDoStuff();

const dogObject = new Dog()
dogObject.callDoStuff();
