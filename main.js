canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokestyle = "grey";
ctx.linewidth = 4;
ctx.rect(150,143,430,200);
ctx.stroke();


ctx.beginPath();
ctx.color = "blue";
ctx.lineWidth = 5;
ctx.arc(250,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.color = "black";
ctx.lineWidth = 5;
ctx.arc(350.210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.color = "red";
ctx.lineWidth = 5;
ctx.arc(450,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.color = "yellow";
ctx.lineWidth = 5;
ctx.arc(300,250,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.color = "green";
ctx.lineWidth = 5;
ctx.arc(400,250,40,0,2 * Math.PI);
ctx.stroke();