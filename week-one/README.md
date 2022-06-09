# Week 1

## What do you think are the differences between var, let, and const?

`var` is a globally read & write variable. `let` is a locally-scoped read &
write variable. `const` is a locally-scoped read-only variable.

## How does this differ from other data structures that you are familiar with? Can you think of any advantages/disadvantages? (Arrays, Types)

Compared to Java arrays have fixed sizes while in JavaScript they do not. Types
are also mutable in JavaScipt. Both languages are zero-indexed. The flexibility
of types in JavaScript gives more freedom and makes it easier to prototype but
also more difficult to debug and maintain codebases as typechecking cannot be
done at runtime.

## How does this differ from other data structures that you are familiar with? Can you think of any advantages/disadvantages? (Objects)

Objects are essentially dictionaries or hashmaps. JavaScript allows you to
add/remove keys or read keys that never even existed. This is useful for
prototyping but this freedom can cause errors down the road.

## How do using classes differ from objects?

Objects are simply dictionaries or hashes. Classes are a blueprint for creating
objects.

## What do you think are the differences between strict equality and abstract equality?

Strict equality checks if the values are exactly equal without any casting. For
instance in strict equality `1` is not equal to `"1"`. Abstract equality checks
convert the values before comparing so `1` and `"1"` are converted to either
numbers or strings and then compared to be equal.

## Where do you think the concept of truthy/falsy might be useful?

An example is checking if a text field is not empty.
