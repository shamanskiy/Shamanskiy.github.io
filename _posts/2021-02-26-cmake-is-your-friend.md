---
layout: post
title:  "CMake is your friend"
date:   2021-02-26 21:12:52 +0200
categories: [cmake, c++, beginner]
image:
  path: https://codethatmath.s3.eu-central-1.amazonaws.com/cmake_is_your_friend3.svg
---
I remember the time when I was afraid of CMake. To me, it was this mystical command that usually appears before **`make`** on Linux and MacOS, i.e.   
~~~
mkdir build
cd build
cmake ..
make
~~~
And on Windows, it was a small weird app that somehow configures the project I want to build. My worst fear was to see CMake fail, which immediately meant "game over": I can't build this project. Luckily, I am less afraid now and use CMake for almost all of my C++ projects. In this post, I will try to show you how CMake can make your life much easier so maybe you'll start using it as well. 


For starters, what is CMake? You can check [cmake.org](https://cmake.org/) for an official definition but I like to think that *CMake is just a convenient and versatile tool that prepares a C++ project for compilation*. OK then, but why do you need to *prepare* a C++ project for compilation? To answer this question, let's look at several situations that motivate the use of CMake. After all, one of the best ways to explain an idea or technology is to look at the problems that it solves.

## Situation 1: you want to compile a C++ project on Linux without an IDE
Imagine you work on a Linux machine (can be Ubuntu, Fedora or whatever you prefer) and you want to compile a C++ project using only the command line. Why would you want to do it instead of using one of available IDEs - Integrated Development Environments - like QtCreator (my personal favorite), CodeBlocks, KDevelop and so on? Well, maybe because you only have the command line to work with and no graphical interface since you've logged in to a Linux machine remotely. Or maybe because you want to automate the build process by writing a script. Or maybe you simply don't want to use an IDE (or a mouse) and prefer the simplicity and efficiency of the command line. Regardless of the reason, you start small with a one-file "Hello, world!" program in a **`main.cpp`** file:
~~~c++
#include <iostream>

int main(){
  std::cout << "Hello, world!" << std::endl;
  return 0;
}
~~~
To build this, you can simply dust off your trusty GNU compiler and type
~~~
g++ main.cpp
~~~
into the command line to produce an executable named **`a.out`**. You can call it to greet the world but if you want to name the executable, use this command instead:
~~~
g++ main.cpp -o helloWorld
~~~
So far so good, where is CMake? Please wait, I'm getting to my point.





## Situation 2: you want to easily compile a C++ project on Windows, MacOS and Linux 


## Situation 3: you want to use an external library in a C++ project 

## What else can CMake do?

