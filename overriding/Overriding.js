var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    // A protected method
    Animal.prototype.doStuff = function () {
        console.log("".concat(this.constructor.name, " has been called"));
    };
    // Expose the protected method as a public function
    Animal.prototype.callDoStuff = function () {
        this.doStuff();
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Override the protected method
    Dog.prototype.doStuff = function () {
        // If we want we can still explicitly call the initial method
        _super.prototype.doStuff.call(this);
    };
    return Dog;
}(Animal));
var animalObj = new Animal();
animalObj.callDoStuff();
var dogObject = new Dog();
dogObject.callDoStuff();
