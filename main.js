var red_slider = document.getElementById("red-slider")
var red_output = document.getElementById("red-output")
var green_slider = document.getElementById("green-slider")
var green_output = document.getElementById("green-output")
var blue_slider = document.getElementById("blue-slider")
var blue_output = document.getElementById("blue-output")

red_output.innerHTML = red_slider.value
green_output.innerHTML = green_slider.value
blue_output.innerHTML = blue_slider.value
var red_color = red_slider.value
var green_color = green_slider.value
var blue_color = blue_slider.value

updateSwatch(red_color,green_color,blue_color)


red_slider.oninput = function(){
    red_output.innerHTML = this.value
    red_color = this.value
    updateSwatch(red_color, green_color, blue_color)
}
green_slider.oninput = function(){
    green_output.innerHTML = this.value
    green_color = this.value
    updateSwatch(red_color, green_color, blue_color)
}
blue_slider.oninput = function(){
    blue_output.innerHTML = this.value
    blue_color = this.value
    updateSwatch(red_color, green_color, blue_color)
}


function updateSwatch(r,g,b){
    var colorSwatch = document.getElementById("color-swatch")
    colorSwatch.style.backgroundColor = "rgb("+r+","+g+","+b+")"
}