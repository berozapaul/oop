
function getArrayList<T>(items: T[]): T[] {
    return [].concat(items)
}

let numArray = getArrayList<number>([1, 2, 3]);
let strArray = getArrayList<string>(['Joe', 'Smith', 'Jenny'])

strArray.push("Carol");
numArray.push(4);
