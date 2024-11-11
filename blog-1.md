# The Significance of Union and Intersection Types in TypeScript

Today, I will share something about the **Significance of Union and Intersection Types in TypeScript**.

So, let's get started! First, let's understand **Union Types**.

## What are Union Types?

**Union Types** in TypeScript allows a variable to hold multiple types. This is useful when you want to define a value with several possible types and restrict the value to only one of those types.

### Example of Union Types

Here’s an example: If you want to define a value that accepts either a `string` or a `number`, you can use a Union Type like this:

```typescript
const printId = (id: string | number): string | number => {
  return `Your ID is ${id}`;
};

printId("s98tjkfd"); // Your ID is s98tjkfd
printId(843787); // Your ID is 843787
```

Here you can send an id parameter in string value or number. and also the function printId also returns a `string` or a `number`.

### Now Let's move to Intersection Types

### What are Intersection Types?

An Intersection Type in Typescript allows a variable to have multiple types. It combines properties from multiple types into one. This is useful when you want to ensure that a value satisfies multiple type constraints simultaneously.

### Here is an example, if you want to combine two interfaces

```typescript

interface Person {
name: string;
age: number;
}

interface  Employee {
employeeId: number;
}


type EmployeePerson = Person && Employee;

const employee:  EmployeePerson = {
name:"Sujon", age: 22, employeeId: 30}

```

Here, EmployeePerson is an intersection of Person and Employee. That means EmployeePerson must have the interface of Person and Employee.

### When to Use Union and Intersection Types?

### When to Use Union Types:

Union Types are useful when a variable can have one of several possible types. They provide flexibility but limit the possibilities, which can prevent errors by narrowing the types you expect.

### When to Use Intersection Types:

Intersection Types are useful when you want to combine multiple types, ensuring that a variable or object satisfies all of them. They are particularly useful for merging interfaces or adding additional properties to an existing type.
