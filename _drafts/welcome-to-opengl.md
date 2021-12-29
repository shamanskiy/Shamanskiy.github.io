---
layout: post
title:  "Welcome to OpenGL (draft)"
#date:   2021-04-30 21:12:52 +0200
categories: [opengl, beginner]
image:
  path: assets/images/welcome-to-opengl/Hero_image.png
---

Not so long ago, I've decided to dip my toe in computer graphics. As many of us, I encounter it indirectly pretty much everywhere - games, 3D modeling apps, Hollywood blockbusters to name a few - so you could say that I have a lot of experience with computer graphics. But I wanted to look under the hood, I wanted to follow the way of a triangle as it turns from numbers in a file to a 3D model on my screen. I knew that OpenGL was somehow involved, so I've started to learn it. Below are my progress so far and my first impression of OpenGL.

TL; DR;
- 90% of OpenGL programming is about passing data to the GPU
- another 10% is shader programming, which is pure linear algebra and really fun
- super interesting: real-time graphics

OpenGL setup...
---------
is brutal. As it turns out, one doesn't simply start to write shaders. Instead, you first need to set up the environment (GLEW, GLFW). Then you need to write about that much code to produce a simple black screen. 

```c++
std::cout << "Opengl window code";
```

Here, we initialize OpenGL/GLEW, we create GLFW context that handle the window and input and enter an infinite loop where we repeatedly color the window black. The result is impressive:

![Simple black window](placeholder.png)

If you want to actually draw something, you can start with a single triangle. Here is the code. 

```c++
std::cout << "Triangle code";
```

The main problem that we solving here is how to get an array of coordinates from normal memory to the GPU memory. This is done via arrays. In fact, this is a recurring theme in OpenGL programming: you have something in memory and you want to transfer it to GPU memory. I would go as far as to say this amounts to about 90% of all your work. Actual fun part - shader programming - is the rest 10%. And then this much to draw your first triangle.


![First triangle](placeholder.png)

Now, that's pretty much all you can without shaders. If you want to view your model from different positions, apply simple color or lighting, you have to deal with shaders. I've mentioned them already, but are they? Shaders are little programs - or not so little sometimes - that execute on the GPU and process the data. Dataflow-pipeline and filter analogy. At the very basic, they can transform and color the input triangles. But they can do much more - for example, generate new geometry or perform cool generate-purpose operations.

So I've mentioned already that most of stuff you do in OpenGL programming is transferring stuff from your machine memory to GPU memory? Shaders are now different! In order to use a shader, you have to read the shader code from the disk into the memory, than copy it to the GPU memory, compile it there and then, ideally, debug/check that is was compiled ssuccessfully. This steps are pretty logical for any compiled language but the difference here is that you have to do it all yourself. I won't show the code that does it (it's quite long). Instead, I'll refer to this [fantastic free tutorial for OpenGL](http://www.opengl-tutorial.org/beginners-tutorials/tutorial-2-the-first-triangle/) 


![Colored triangles](placehol.png)


Finally, textures. Although not necessary, they can be used to change your model. In the course that I follow, the author suggested using [stb](https://github.com/nothings/stb).

![Textured triangle](grass.png)

Next, drawing a single triangle very quickly gets boring. If you want to draw something more exciting, you can of course define more triangles manually. You can create a pyramid or a cube these way but even a decent sphere is tough. A more sustainable solution is to import 3D models created in 3D modeling software, e.g. [Blender](https://www.blender.org/). You DO NOT want to write code for importing yourself, so use something like [Assimp](https://www.assimp.org/). Data that read from a file with Assimp will need a bit of massaging before you can send them over to the GPU. 


Shaders: where the magic happens
----------
As you can see, setting up an environment for working with OpenGL is quite extensive. Don't get me wrong, it's important to do it once but the fun part, at least for me, is shader programming. With all the infrastructure in place - app window and input managed by GLFW, code to load and compile shaders and Assimp for model import - you can finally start having fun. 

As I said above, a shader is a program on the GPU that operates on the incoming stream of data. I like to think of them as filters in image processing. What I like about shader programming is that it is pure mathematics; specifically, linear algebra. You want rotate your model to look it at from a different angle? Multiply your data by a transformation matrix. You want to figure out which sections of a model are lit by the sun light? Compute a dot product of the surface normal and the light direction. Essentially, all the code outside from shaders serve one purpoise: to get all the data - vertices, normals, transformation matrix, various lighting parameters - to the shader. In a shader, you don't have to worry about anything - just focus on the math and get it right. The input and output are taken care off. Happy times.  

Another cool part of shader programming is how it completely demystifies the 

```c++
  vec3 color = 
```
Of course, this doesn't take into account shadows that different part of the tree throw on other parts of the tree. But still, the effect is so cool. And is was just one line.

![Full-width image](/assets/images/welcome-to-opengl/flat_tree.png){: width="400"}
![Full-width image](/assets/images/welcome-to-opengl/direct_light.png){: width="400"}


Finally, playing with OpenGL can be a great creative outlet. Even with very basic tool you create somewhat pleasing to look at images. For example, you can the tree model above, change the background from white to black, add a flat surface textured like grass and - the pinaccle of my OpenGL skill so far - add a point light. With a bit of imagination, you can imagine yourself sitting next to a fire under a tree on summer night. 


<div style="text-align: center"><img src="/assets/images/welcome-to-opengl/Hero_image2.png" width="400" /></div>

Conclusion 
-----------
The setup is totally worth it. 
You can see that I'm quite proud of my first humble steps. There is so much more to learn: shading, transparency, reflections. Eventually, I'd like to get into ray tracing. If you're interested, you can find my code on [GitHub](https://github.com/Shamanskiy/LearningOpenGL).


