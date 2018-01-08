# SelfieBooth App with PWA

This app will show you how to make a JavaScript SelfieBooth app that takes images using the camera on your phone, laptop or desktop. We will showcase a number of awesome native APIs that allowed us to make our project without any external dependencies, third-party libraries or Flash - vanilla JavaScript only!

# The App
To the end user our app is just an oversimplified version of the camera app you can find on any smartphone. It uses a hardware camera to take pictures - that's it. Under the hood, however, a whole lot of JavaScript magic is going on. Here is a high-level overview:

We access the camera input and get a video stream from it using the getUserMedia API.
Project the camera stream onto a HTML video element.
When the user wants to take a picture, we copy the current video frame and draw it on a canvas element.
Transform the canvas into an image dataURL which then can be shown on the screen or downloaded as a PNG.
In the article below we will only look at the more interesting parts of the code. For the full source go to the Download button near the top of this page or checkout the demo.

*Keep in mind that the navigator.getUserMedia API is considered deprecated, but it still has pretty good browser support and is the only way to access the camera right now, until it's future replacement - navigator.mediaDevices.getUserMedia gains wider browser support.*
