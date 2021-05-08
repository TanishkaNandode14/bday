function preload()
{
}

function setup()
{
    canvas = createCanvas(750, 600);              
    canvas.position(387, 300);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video, 0, 0, 550, 400);
    tint(tint_color);

    rect(-50, 20, 55, 55, 20);
    circle(700, 50, 20);

    
}

function take_snapshot()
{
    save('tint#you.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}