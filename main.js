var red_slider = document.getElementById("red-slider")
var red_output = document.getElementById("red-output")
var green_slider = document.getElementById("green-slider")
var green_output = document.getElementById("green-output")
var blue_slider = document.getElementById("blue-slider")
var blue_output = document.getElementById("blue-output")

var submit_button = document.getElementById("submit-button")

var swatch_guesses = document.getElementsByClassName("swatch-guess")
var red_guesses = document.getElementsByClassName("red-guess")
var green_guesses = document.getElementsByClassName("green-guess")
var blue_guesses = document.getElementsByClassName("blue-guess")
var guessRows = document.getElementsByClassName("guess-row")

var winnerWindow = document.getElementsByClassName("winner-container")[0]

var correct_color_1 = [48, 157, 142]
var correctGuess = [false, false, false]

var color_guesses = [
    [],
    [],
    []
]

var guess_number = 0;
var colorSwatch = document.getElementById("color-swatch")
colorSwatch.style.backgroundColor = "rgb("+correct_color_1[0]+","+correct_color_1[1]+","+correct_color_1[2]+")"



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
    // updateSwatch(red_color, green_color, blue_color)
}
green_slider.oninput = function(){
    green_output.innerHTML = this.value
    green_color = this.value
    // updateSwatch(red_color, green_color, blue_color)
}
blue_slider.oninput = function(){
    blue_output.innerHTML = this.value
    blue_color = this.value
    // updateSwatch(red_color, green_color, blue_color)
}


function updateSwatch(r,g,b){
    var colorSwatchOutput = document.getElementById("swatch-output")
    colorSwatchOutput.style.backgroundColor = "rgb("+r+","+g+","+b+")"
}

function convertToColor(r,g,b) {
    return "rgb("+r+","+g+","+b+")"
}

function updateGuesses() {
    
    var row = 0

    

    for (let i = guess_number-1; i >= 0; i--){
        // RED
        var red_number = color_guesses[0][i]
        red_guesses[row].innerHTML = red_number
        var highlightColor = highlightGuess(0,red_number)
        red_guesses[row].style.backgroundColor = highlightColor
        
        // GREEN
        var green_number = color_guesses[1][i]
        green_guesses[row].innerHTML = green_number
        var highlightColor = highlightGuess(1,green_number)
        green_guesses[row].style.backgroundColor = highlightColor
        
        // BLUE
        var blue_number = color_guesses[2][i]
        blue_guesses[row].innerHTML = blue_number
        var highlightColor = highlightGuess(2,blue_number)
        blue_guesses[row].style.backgroundColor = highlightColor

        // SWATCHES
        swatch_guesses[row].style.backgroundColor = convertToColor(red_number, green_number, blue_number)
        if (i < guess_number ){
            swatch_guesses[row].innerHTML = i+1
        }
        
        

        row +=1
        
    }

    // check win state
    if (correctGuess[0] == true && correctGuess[1] == true && correctGuess[2] == true){
        document.getElementsByClassName("winner-container")[0].style.display = "flex"
        console.log("Winner winner")
    }

    guessRows[row-1].style.display = "flex"
    
}

function submitGuess(){
    color_guesses[0][guess_number] = red_color
    color_guesses[1][guess_number] = green_color
    color_guesses[2][guess_number] = blue_color
    guess_number ++;
    updateGuesses()
    
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function highlightGuess(RGB, guess){
    
    if (guess <= correct_color_1[RGB] + 10 && guess >= correct_color_1[RGB] - 10){
        correctGuess[RGB] = true
        return "#538D4E"
    } else if (guess > correct_color_1[RGB] + 10) {
        return "#DB504A"
    } else if (guess < correct_color_1[RGB] - 10) {
        return "#3891A6"
    }
}


submit_button.addEventListener("click", submitGuess)

winnerWindow.onclick = function(){winnerWindow.style.display = "none"}


