Type Annotations : Code we add to tell Typescript what type of value a variable will refer to.
example : We (developers) tell Typescript the type.
Variables : variables.ts

So when do we use Annotations?

1. When a function returns the 'any' type and we need to clarify the value.
2. When we declare a variable on one line then initialize it later.
3. When we want a variable to have a type that can't be inferred

Type Inference : Typescript tries to figure out what type of value a variable refers to.
example: Typescript guesses the type

So when to use Inference?
Always!

const color = 'red';

If declaration and initialization are on the same line, Typescript will figure out the type of 'color' for us.
