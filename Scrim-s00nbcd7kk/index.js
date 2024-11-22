let homeScore = 0
let awayScore = 0
let homeScoreBoard = document.getElementById("home-score")
let awayScoreBoard = document.getElementById("away-score")

homeScoreBoard.textContent = homeScore
awayScoreBoard.textContent = awayScore

function home1(){
    homeScore += 1
    homeScoreBoard.textContent = homeScore
}

function home2(){
    homeScore += 2
    homeScoreBoard.textContent = homeScore
}

function home3(){
    homeScore += 3
    homeScoreBoard.textContent = homeScore
}

function subtractHome(){
    homeScore -= 1
    homeScoreBoard.textContent = homeScore
}

function away1(){
    awayScore += 1
    awayScoreBoard.textContent = awayScore
}

function away2(){
    awayScore += 2
    awayScoreBoard.textContent = awayScore
}

function away3(){
    awayScore += 3
    awayScoreBoard.textContent = awayScore
}

function subtractAway(){
    awayScore -= 1
    awayScoreBoard.textContent = awayScore
}

function reset(){
    homeScore = 0
    awayScore = 0
    homeScoreBoard.textContent = homeScore
    awayScoreBoard.textContent = awayScore
}