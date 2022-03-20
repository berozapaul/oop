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
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function () {
        console.log(this.name + " eats when hungry.");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(roll, name) {
        var _this = _super.call(this) || this;
        _this.roll = roll;
        _this.name = name;
        return _this;
    }
    // functions
    Student.prototype.displayInformation = function () {
        console.log("Name : " + this.name + ", Roll Number : " + this.roll);
    };
    // overriding super class method
    Student.prototype.eat = function () {
        console.log(this.name + " eats during break.");
    };
    return Student;
}(Person));
var student = new Student(2, "Joe");
student.displayInformation(); // Name: Joe, Roll Number: 2
student.eat(); // Joe eats during break.
