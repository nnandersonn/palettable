var red_slider = document.getElementById("red-slider")
var red_output = document.getElementById("red-output")
var green_slider = document.getElementById("green-slider")
var green_output = document.getElementById("green-output")
var blue_slider = document.getElementById("blue-slider")
var blue_output = document.getElementById("blue-output")

var submit_button = document.getElementById("submit-button")

var red_guesses = document.getElementsByClassName("red-guess")
var green_guesses = document.getElementsByClassName("green-guess")
var blue_guesses = document.getElementsByClassName("blue-guess")

var correct_color_1 = [48, 157, 142]

var color_guesses = [
    ["-","-","-","-","-","-"],
    ["-","-","-","-","-","-"],
    ["-","-","-","-","-","-"]
]

var guess_number = 0;




red_output.innerHTML = red_slider.value
green_output.innerHTML = green_slider.value
blue_output.innerHTML = blue_slider.value
var red_color = red_slider.value
var green_color = green_slider.value
var blue_color = blue_slider.value

updateSwatch(red_color,green_color,blue_color)
updateGuesses()

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

function updateGuesses() {
    // RED
    for (let i = 0; i < red_guesses.length; i++){
        red_guesses[i].innerHTML = color_guesses[0][i]
        var highlightColor = highlightGuess(0,color_guesses[0][i])
        red_guesses[i].style.backgroundColor = highlightColor
    }
    // GREEN
    for (let i = 0; i < green_guesses.length; i++){
        green_guesses[i].innerHTML = color_guesses[1][i]
        var highlightColor = highlightGuess(1,color_guesses[1][i])
        green_guesses[i].style.backgroundColor = highlightColor
    }
    // BLUE
    for (let i = 0; i < blue_guesses.length; i++){
        blue_guesses[i].innerHTML = color_guesses[2][i]
        var highlightColor = highlightGuess(2,color_guesses[2][i])
        blue_guesses[i].style.backgroundColor = highlightColor
    }
}

function submitGuess(){
    color_guesses[0][guess_number] = red_color
    color_guesses[1][guess_number] = green_color
    color_guesses[2][guess_number] = blue_color
    updateGuesses()
    guess_number ++;
}

function highlightGuess(RGB, guess){
    
    if (guess <= correct_color_1[RGB] + 10 && guess >= correct_color_1[RGB] - 10){
        return "#538D4E"
    } else if (guess > correct_color_1[RGB] + 10) {
        return "#DB504A"
    } else if (guess < correct_color_1[RGB] - 10) {
        return "#3891A6"
    }
}

submit_button.addEventListener("click", submitGuess)


