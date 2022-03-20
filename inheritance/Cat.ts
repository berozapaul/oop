import {Animal} from "./Animal";

export class Cat implements Animal {
    age: number;
    legs: number;
    name: string;

    meow(): string {
        return 'meow!';
    }
}
