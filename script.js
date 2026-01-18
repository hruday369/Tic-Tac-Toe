const cell = document.querySelectorAll('.cell');

const imgArr = ['./icons/circle.png','./icons/cross.png'];
let count = 1
let emptyArr = []
let player1_Set = []
let player2_Set = []

const display = document.querySelector('h1')
let displayWin = (p1,p2) =>{
    if(check_winner(p1)){
        return 'Player 1 Won'
    }
    else if(check_winner(p2)){
        return 'Player 2 Won';
    }
    else{
         return ''
    }
}
cell.forEach(eachcell =>{
    eachcell.addEventListener("click", (e) => {
    e.preventDefault();

    if (display.textContent) return;

    const cellNo = Number(eachcell.dataset.no);
    if (emptyArr.includes(cellNo)) return;

    if (count % 2 === 0) {
        eachcell.style.backgroundImage = `url('${imgArr[1]}')`;
        player2_Set.push(cellNo);
    } else {
        eachcell.style.backgroundImage = `url("${imgArr[0]}")`;
        player1_Set.push(cellNo);
    }

    emptyArr.push(cellNo)

    display.textContent = displayWin(player1_Set, player2_Set);

    count++;
});

})


const winningSet = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
function check_winner(playerArr){
    if(playerArr.length >= 3){
    playerArr = [...playerArr].sort((a, b) => a - b)
    for(let inn of winningSet){
        let filteredArr = playerArr.filter(num => inn.includes(num))
        if(filteredArr.length  === 3){
            return true;
            }
        }
    }
    return false;
}

// Reset button 
const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click',reset)

function reset(){
    count = 1;
    cell.forEach(c => c.style.backgroundImage = '');
    emptyArr = []
    player1_Set = []
    player2_Set = []
    display.textContent = ''
}