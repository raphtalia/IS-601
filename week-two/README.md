# Week 2

## What would someone prefer to use string template literals instead of string concatenation?

String template literals are far cleaner to read than string concatenation.
Especially when needing to append spaces around variables or several variables.

## What is the default value for an argument when the caller did not supply the value?

The default value for the argument would be undefined.

## What is the main advantage to a Set data structure over an Array?

The main advantage is no duplicate values. This is very useful for cases where
all values need to be garuanteed to be unique. An example of this is a function
that returns a set of unique users from a database.

## Which asynchronous style do you prefer callbacks, promises, async/await and why?

It depends if I need a function to run multiple times such as with
`setInterval()` I prefer callbacks. If I want to yield the thread for a value or
multiple values I prefer promises. As promises give me quite the flexibility to
run things in series or parallel then wait for all of them to finish.

## Why do we as engineering write tests?

Because engineers are lazy so we don't always do a full test of the application
at the end of every minute change which may be impacting several systems. So we
write unit tests to test small portions of the application that increase in
scale such as does this rounding function round numbers correctly? If it does
then does the application display the correct value if a user inputs a number.

## What do you think the key differences are between CommonJS and ES6 Modules are?

A key difference is CommonJS can only be run in NodeJS while ES6 modules can be
run in both NodeJS and browsers.

## Research Notes

HTML or HyperText Markup Language is a form of XML that is used to describe the
structure of a web page or user interface. CSS on the other hand is a language
that is used to describe the style of a web page or simply make it pretty and
not an eyesore.
