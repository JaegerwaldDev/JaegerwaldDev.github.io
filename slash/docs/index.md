---
title: Slash Documentation
layout: default
nav_order: 1
---
# **Slash Beginner's Guide**
**Note:** Please install Slash [here](https://www.github.com/JaegerwaldDev/Slash/) first. It is assumed that you already know basic programming language keywords; if you do not know where to start learning keywords, then a simple start is learning Python [here](https://www.freecodecamp.org/news/free-python-crash-course/).

## **Getting Started**

To get started with using Slash create a file called `main.slh` in your project folder, and open it in your text editor of choice.

First, make sure that everything is working by creating a simple "Hello World!" script; to do that write the following code in the `main.slh` file:
```
writeLine("Hello World!");
```
To run your project simply drag and drop the script onto the `slash_<version>.exe` application or `run.py` file, depending on your platform. If everything was done correctly, the console should output the following:
```
Hello World!
```
The console will only stay open for a short amount of time though; to fix that, we simply use the [wait]() function from the build-in [time library]().
```
from time use wait;

writeLine("Hello World!");

wait(5);
```

The console should now be opened for 5 seconds, with the output "Hello World!". If that is not the case, copy paste the script to make sure you didn't make any issues.

## **Variables**

Now let's get started with using [variables](). Firstly, clear the current script and then come back to this guide.

Variables are very simple to understand. They can have the following types of data: [strings](), [integers](), [lists]() and [dictionarys](). For now we will be focussing on strings and integers.

Write the following statement into the `main.slh` file:
```
from time use wait;

name = "John Smith";
age = 21;

wait(5);
```

This defines the variables "name" and "age"; name is a string type variable, while age is an integer variable. You can read this variables out using the `writeLine();` command:
```
from time use wait;

name = "John Smith";
age = 21;

writeLine(name);
writeLine(age);

wait(5);
```
Output:
```
John Smith
21
```

You can combine variables and strings by simply writing `..` after the string or variable.
```
from time use wait;

name = "John Smith";
age = 21;

writeLine(name.. "is".. age.. "years old.");

wait(5);
```
Output:
```
John Smith is 21 years old.
```
