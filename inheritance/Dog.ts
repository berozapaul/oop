import {Animal} from "./Animal";

export class Dog extends Animal {
    constructor(data: { age: number; legs: number; name: string }, status: boolean) {
        super(data.age, data.legs, data.name);
    }
    woof(): string {
        return 'WOOF! WOOF!';
    }
}
