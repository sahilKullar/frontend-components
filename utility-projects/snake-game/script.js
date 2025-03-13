// Access the canvas element by using the id attribute
canvas = document.getElementById("learning-canvas");

// set the height and width of the canvas
canvas.height = 300;
canvas.width = 300;
canvas.style.backgroundColor = "#B1DDF0";

// Get the context for the canvas to draw the graphics
pen = canvas.getContext("2d");

// Draw a circle using the context on the canvas
pen.strokeStyle = "red";
pen.fillStyle = "yellow";
pen.arc(150, 150, 50, 0, 2 * Math.PI);
pen.stroke();
pen.fill();

// Draw a rectangle using the context on the canvas
pen.fillStyle = "black";
pen.fillRect(100, 200, 100, 40);
