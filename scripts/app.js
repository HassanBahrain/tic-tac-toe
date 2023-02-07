function init() {


    let cells = document.querySelectorAll('.box')
    // const button = document.querySelector('.btn')
    const player1 = "X"
    const player2 = "O"
    let player1List = []
    let player2List = []
    let playTurn = []
    const restartbutton = document.querySelector('.btn')
    let EmptySpaces = Array(9).fill('')
    ///always put coma's
    const WINCon = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
var isWinningConditionMet = false

    let currentPlayer = player1

    function handleClick(event) {
        // console.log(event.target.id)
    }



    function clicked(event) {
        const id = event.target.id

        console.log("taco")
        console.log(id)
        // event.target.textContent = 'x'

        if (event.target.textContent === '') {
            // emptySpaces[id] = currentPlayer;
            // event.target.innerText = currentPlayer;
            // PlayerTurn.innerHTML = currentplayer;

            if (currentPlayer === player1) {
                event.target.textContent = 'x'
                currentPlayer = player2;
            }

            else {
                event.target.textContent = "O"
                currentPlayer = player1;
            }
            // PlayerTurn.innerHTML = currentPlayerTurn();
            checkWin()

        }
    }





























    function ResetGame(event) {
        // console.log("why")
        cells.forEach(box => {
            // console.log("Green")
            box.textContent = ""
        })


    }
    restartbutton.addEventListener('click', ResetGame)
    cells.forEach(cell => {
        cell.addEventListener('click', clicked)
    })


    //win condtin working 
    // if (currentPlayer === player1){
    //     event.target.textContent = 'x'
    //     currentPlayer = player2;


    // WINCon.forEach(condition => {
    //     let count = 0
    //     condition.forEach(cell => {
    //         if (player1List.includes(cell)) count++
    //     })
    //     if (count === 3) {
    //         console.log('Player 1 wins!')
    //         isWinningConditionMet = true
    //     }
    //     count = 0
    //     condition.forEach(cell => {
    //         if (player2List.includes(cell)) count++;
    //     })
    //     if (count === 3) {
    //         console.log('Player 2 wins!')
    //         isWinningConditionMet = true
    //     }
    //     if (isWinningConditionMet) {
    //         console.log('The game has ended, there is a winner!')
    //         cells.forEach(cell => {
    //             cell.removeEventListener('click', playTurn)
    //         })
    //     }
    // })
    




     function checkWin(){
        console.log(cells[0])
        // console.log(cells[0].innerHTML)
        if(cells[0].innerHTML === 'x' && cells[1].innerHTML === 'x' && cells[2].innerHTML === 'x') {
            console.log('x has won')
        }
            
        else if (game[3] === 'x' && game[4]==='x' && game[5] === 'x'){
            console.log('x has won')
        }
        

   

        // if game[0] ===



    //  }



























    restartbutton.addEventListener('click', RESET)
    function RESET(event) {

    }








}
}
window.addEventListener('DOMContentLoaded', init)


