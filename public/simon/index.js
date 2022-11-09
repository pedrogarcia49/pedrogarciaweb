const start = document.getElementById('start')
const displayScore = document.getElementById('display-score')
const display = document.getElementById('display')
const reset = document.getElementById('reset')
const tiles = document.getElementsByName('tile')
const tileG = tiles[0]
const tileR = tiles[1]
const tileY = tiles[2]
const tileB = tiles[3]
const greenAudio = new Audio('audio/green.mp3')
const redAudio = new Audio('audio/red.mp3')
const yellowAudio = new Audio('audio/yellow.mp3')
const blueAudio = new Audio('audio/blue.mp3')

class UI {
    score = 0
    movements = []
    playerMovements = []
    
    paintTile(value) {
        if (value == 'g') {
            setTimeout(() => {
                greenAudio.play()
                tileG.style.boxShadow = '0 0 8px 2px #30b362'
                setTimeout(() => {
                    tileG.style.boxShadow = ''
                }, 800)
            }, 800)
        }
        if (value == 'r') {
            setTimeout(() => {
                redAudio.play()
                tileR.style.boxShadow = '0 0 8px 2px #da606c'
                setTimeout(() => {
                    tileR.style.boxShadow = ''
                }, 800)
            }, 800)
        }
        if (value == 'y') {
            setTimeout(() => {
                yellowAudio.play()
                tileY.style.boxShadow = '0 0 8px 2px #dac435'
                setTimeout(() => {
                    tileY.style.boxShadow = ''
                }, 800)
            }, 800)
        }
        if (value == 'b') {
            setTimeout(() => {
                blueAudio.play()
                tileB.style.boxShadow = '0 0 8px 2px #4294c7'
                setTimeout(() => {
                    tileB.style.boxShadow = ''
                }, 900)
            }, 800)
        }
    }
    
    paintDisplay (color) {
    if (color == 'green') {
            setTimeout(() => {
                display.style.backgroundColor = '#30b362'
                display.querySelector('h1').style.color = 'white'
                setTimeout(() => {
                    display.style.backgroundColor = 'rgb(237, 237, 237)'
                    display.querySelector('h1').style.color = 'rgb(41, 41, 41)'
                }, 600)
            },200)
        } else if (color == 'red') {
            display.style.backgroundColor = '#dd3647'
            display.querySelector('h1').style.color = 'white'
        }
    }

    printScore() {
        displayScore.innerText = this.score
    }

    addMovement() {
        const colors = ['r','g','b','y']
        let randomNumber = Math.floor(Math.random()*colors.length)
        let value = colors[randomNumber]
        this.movements.push(value)
        this.paintTile(value)
    }

    addPlayerMovement(value) {
        this.playerMovements.push(value)
    }


    gameChecker() {
        let movements = JSON.stringify(this.movements)
        let playerMovements = JSON.stringify(this.playerMovements)
        if (movements == playerMovements) {
            this.score = this.score + 1
            this.playerMovements = []
            this.printScore()
            this.paintDisplay('green')
            this.addMovement()
        } else if (movements !== playerMovements) {
            this.paintDisplay('red')
        }
    }
}

//Tiles audio

tileG.addEventListener('mousedown', () => {
    greenAudio.play()
})

tileR.addEventListener('mousedown', () => {
    redAudio.play()
})

tileY.addEventListener('mousedown', () => {
    yellowAudio.play()
})

tileB.addEventListener('mousedown', () => {
    blueAudio.play()
})

//

start.addEventListener('click', () => {
    start.remove()

    const ui = new UI()

    ui.addMovement()

    reset.addEventListener('click', () =>{
        location.reload()
    })
    
    tiles.forEach((tile) => {
        setTimeout(() => {
            tile.addEventListener('click', () => {
                ui.addPlayerMovement(tile.id)
                if (ui.movements.length == ui.playerMovements.length) {
                    ui.gameChecker()
                }
            })
        }, 900)
    })
})

