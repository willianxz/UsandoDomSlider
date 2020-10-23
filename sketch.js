var rSlider;
var gSlider;
var bSlider;
var modeRgbButton;
var modeHsbButton;


function setup() {
 createCanvas(windowWidth, windowHeight);
 
 modeRgbButton = createButton("Mode RGB");
 modeHsbButton = createButton("Mode HSB");

 modeRgbButton.position(windowWidth/2, windowHeight - 100);
 modeHsbButton.position(windowWidth/2 + 100, windowHeight - 100);
 modeRgbButton.mousePressed(rgb);
 modeHsbButton.mousePressed(hsb);
 
 rSlider = createSlider(0, 255, 100); //Valor minimo, Valor maximo, Valor inicial
 gSlider = createSlider(0, 255, 100);
 bSlider = createSlider(0, 255, 100);
 
 rSlider.position(windowWidth/2 - 140, windowHeight - 50);
 gSlider.position(windowWidth/2 + 20, windowHeight - 50); 
 bSlider.position(windowWidth/2 + 180, windowHeight - 50); 
}

function draw() {
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  
  background(r, g, b);
  
  fill(0);
  textSize(16);
  text(rSlider.value(), windowWidth/2 - 80, windowHeight/2 + 305);
  text(gSlider.value(), windowWidth/2 + 80, windowHeight/2 + 305);
  text(bSlider.value(), windowWidth/2 + 240, windowHeight/2 + 305);
}

function rgb(){
 colorMode(RGB); 
}

function hsb(){
 colorMode(HSB); 
}
