//Primitives

//1. number
let age: number = 24;
age = 12;
age = 12.1;

//2. string
let userName: string;
userName = "Ajanta";

//3. boolean
let isInstructor: boolean;
isInstructor = false;

// More complex types
// Declaring array in TS

let hobbies: string[];
hobbies = ['Sports', 'Cooking'];


//Object types

let person: {
    name: string;
    age: number;
};

person = {
    name: 'Rupam',
    age: 32
};

let people: {
    name: string;
    age: number;
}[];

// Type Inference

let course = 'React - The Complete Guide';

/**
 * course = 12341; //Error - WHY ? since I dont mention type,
 * 
 * TypeScript uses it's one feature call type inference
 * Typesctipt tries to infers as much as can
 */


