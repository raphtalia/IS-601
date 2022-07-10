# Week 2

## Why do we as engineering write tests?

Because engineers are lazy so we don't always do a full test of the application
at the end of every minute change which may be impacting several systems. So we
write unit tests to test small portions of the application that increase in
scale such as does this rounding function round numbers correctly? If it does
then does the application display the correct value if a user inputs a number.

## Research Notes

The only unit testing framework I've used before is
[testez](https://github.com/Roblox/testez) and comparing it to Jest much of the
syntax is the same. This seems to be due to the behavior-driven syntax both
frameworks use with `describe()`, `expect()`, and to-be functions. Testez
compared to Jest is far more bare bones with Jest providing a lot of utility
methods for testing several argument and return combination at a time and more.
