function init() {

    let cells = document.querySelectorAll('.box')
    const button = document.querySelector('.btn')
    const player1 = "x"
    const player2 = "O"
    const restartbutton = document.querySelector('.btn')
    let EmptySpaces = Array(9).fill('')
    let Winning = false
    let winingmessage =document.querySelector('.score')
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

        // console.log("taco")
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
   
    cells.forEach(cell => {
        cell.addEventListener('click', clicked)

    })


     function checkWin(){
        console.log(cells[0])
        // console.log(cells[0].innerHTML)
        //wining condition of "X player"
        if(cells[0].innerHTML === 'x' && cells[1].innerHTML === 'x' && cells[2].innerHTML === 'x') {
            console.log('x has won')
            Winning = true
            winingmessage.innerHTML ='x won'
        }
            
        else if (cells[3].innerHTML === 'x' && cells[4].innerHTML==='x' && cells[5].innerHTML === 'x'){
            console.log('x has won')
            Winning = true
            winingmessage.innerHTML ='x won'
        }

        else if (cells[6].innerHTML=== 'x' && cells[7].innerHTML==='x' && cells[8].innerHTML === 'x'){
            console.log('x has won')
            Winning = true
            winingmessage.innerHTML ='x won'
        }



        else if (cells[0].innerHTML=== 'x' && cells[3].innerHTML==='x' && cells[6].innerHTML === 'x'){
            console.log('x has won')
            Winning = true
            winingmessage.innerHTML ='x won'
        }
        else if (cells[1].innerHTML=== 'x' && cells[4].innerHTML==='x' && cells[7].innerHTML === 'x'){
            console.log('x has won')
            Winning = true
            winingmessage.innerHTML ='x won'
        }
        else if (cells[2].innerHTML=== 'x' && cells[5].innerHTML==='x' && cells[8].innerHTML === 'x'){
            console.log('x has won')
            Winning = true
            winingmessage.innerHTML ='x won'
        }




        else if (cells[0].innerHTML=== 'x' && cells[4].innerHTML==='x' && cells[8].innerHTML === 'x'){
            console.log('x has won')
            Winning = true
            winingmessage.innerHTML ='x won'
        }
        else if (cells[0].innerHTML=== 'x' && cells[4].innerHTML==='x' && cells[6].innerHTML === 'x'){
            console.log('x has won')
            Winning = true
            winingmessage.innerHTML ='x won'
        }
        // else {
        //     winingmessage.innerHTML ='dr'
        // }




        /// O PLAYER CODE WINNING CONDTITION

        if(cells[0].innerHTML === '0' && cells[1].innerHTML === '0' && cells[2].innerHTML === '0') {
            console.log('O has won')
            Winning = true
            winingmessage.innerHTML ='O won'

        }
        else if (cells[3].innerHTML === '0' && cells[4].innerHTML==='0' && cells[5].innerHTML === '0'){
            console.log('0 has won')
            Winning = true
            winingmessage.innerHTML ='O won'
        }
        else if (cells[6].innerHTML === '0' && cells[7].innerHTML==='0' && cells[8].innerHTML === 'O'){
            console.log('0 has won')
            Winning = true
            winingmessage.innerHTML ='O won'
        }
        else if (cells[0].innerHTML === 'O' && cells[3].innerHTML==='O' && cells[6].innerHTML === 'O'){
            console.log('0 has won')
            Winning = true
            winingmessage.innerHTML ='O won'
        }

        else if (cells[1].innerHTML === 'O' && cells[4].innerHTML==='O' && cells[7].innerHTML === 'O'){
            console.log('0 has won')
            Winning = true
            winingmessage.innerHTML ='O won'
        }

        else if (cells[2].innerHTML === 'O' && cells[5].innerHTML==='O' && cells[8].innerHTML === 'O'){
            console.log('0 has won')
            Winning = true
            winingmessage.innerHTML ='O won'
        }
        else if (cells[0].innerHTML === 'O' && cells[4].innerHTML==='O' && cells[8].innerHTML === 'O'){
            console.log('0 has won')
            Winning = true
            winingmessage.innerHTML ='O won'
        }
        
        else if (cells[2].innerHTML === 'O' && cells[4].innerHTML==='O' && cells[6].innerHTML === 'O'){
            console.log('0 has won')
            Winning = true
            winingmessage.innerHTML ='O won'
        }

        if (Winning === true){
            cells.forEach(cell => {
                cell.removeEventListener('click', clicked)
            })

        }
}


function ResetGame() {
    for( let i =0 ; i<cells.length ; i++){
        cells[i].innerHTML = '' 
      }
      Winning=false
      winingmessage.innerHTML=''
        cells.forEach(cell => {
            console.log("play agin")
            cell.addEventListener('click', clicked)
    
        })

        console.log("Plaayyy")
     

    

}
button.addEventListener('click', ResetGame)
}
window.addEventListener('DOMContentLoaded', init)


