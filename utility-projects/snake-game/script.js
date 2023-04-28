canvas = document.getElementById("learning-canvas");

canvas.height = 300;
canvas.width = 300;
canvas.style.backgroundColor = "#B1DDF0";

pen = canvas.getContext("2d");

pen.fillRect(30, 30, 60, 60);

pen.strokeStyle = "red";
pen.fillStyle = "yellow";
pen.arc(150, 150, 50, 0, 2 * Math.PI);
pen.stroke();
pen.fill();
