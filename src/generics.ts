import string from "./string";

/**
 * We can redefine an array as a generic stack.
 */
type Stack<T> = T[];

const numberStack: Stack<number> = []

numberStack.push(10);
numberStack.push(20);
numberStack.push(30);

console.log(numberStack);

numberStack.pop();

console.log(numberStack);

/**
 * Here we have a type-specific queue class.
 */
class NumberQueue {
    private elements: number[]

    constructor() {
        this.elements = [];
    }

    public enqueue(item: number): void {
        this.elements.push(item);
    }

    public dequeue(): number {
        if (this.isEmpty()) {
            throw new Error("Queue is empty, nothing to dequeue.")
        } else {
            return this.elements.shift() || 0
        }
    }

    public isEmpty(): boolean {
        return this.elements.length == 0;
    }

    public toString = (): string => this.elements.toString();

}

const numberQueue = new NumberQueue();

numberQueue.enqueue(10);
numberQueue.enqueue(20);
numberQueue.enqueue(30);
console.log(numberQueue + "");
console.log(numberQueue.dequeue())
console.log(numberQueue + "");
// numberQueue.enqueue("a");

/**
 * Now we define a generic queue class.
 */

class GenericQueue<T> {
    private elements: T[]

    constructor() {
        this.elements = [];
    }

    public enqueue(item: T): void {
        this.elements.push(item);
    }

    public dequeue(): T | undefined {
        if (this.isEmpty()) {
            throw new Error("Queue is empty, nothing to dequeue.")
        } else {
            return this.elements.shift()
        }
    }

    public isEmpty(): boolean {
        return this.elements.length == 0;
    }

    public toString = (): string => this.elements.toString();

}

const stringQueue = new GenericQueue<string>();

stringQueue.enqueue("hello")
stringQueue.enqueue("ufabc")
stringQueue.enqueue("how")
stringQueue.enqueue("are")
stringQueue.enqueue("you")

console.log(stringQueue + "")
console.log(stringQueue.dequeue())
console.log(stringQueue + "")