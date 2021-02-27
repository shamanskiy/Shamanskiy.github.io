---
layout: post
title:  "CMake is your friend"
date:   2021-02-28 21:12:52 +0200
categories: [cmake, c++]
image:
  path: https://codethatmath.s3.eu-central-1.amazonaws.com/cmake_is_your_friend3.svg
---
I have a confession to make: until very recently, I was afraid of CMake. I had to  

```
mkdir build
cd build
cmake ..
make
```

or in a form of scary GUI on Windows. I prayed to all benevolent forces that CMake succeeded and if it didn’t, the project was over dead to me. Luckily, I’ve been converted and will now try to convince you to embrace CMake as well.



So what is CMake? According to a definition on cmake.org, CMake is an open-source, cross-platform family of tools designed to build, test and package software.
. We will concentrate on the “build” part here. The word may mislead one into thinking that CMake has something to do with compilation whereas in fact CMake just prepares, or configures, your project for compilation.  However, CMake is what happens to your project before compilation. Well, technically CMake and compilation there is also preprocessing when a preprocessor does its job on all. For the sake of simplicity, let’s count preprocessing as a part of compilation, together with ensuing linking. But I’m getting side-tracked.

Why might you want to use CMake? Well, I’m glad you’ve asked, here you go:
