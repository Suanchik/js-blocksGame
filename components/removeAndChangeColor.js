function addNewKubik(e) {
    const newKub = document.querySelector('.block_new');
    const last = e.target.closest('.blocks_row')?.lastElementChild;
    const thisrow = e.target.closest('.blocks_row')
    if(thisrow) {
        e.target.closest('.blocks_row').appendChild(newKub);
        startAction(last, newKub, thisrow);
    }

}
function startAction(last, newKub, thisrow) {
setTimeout(() => {
    removeAndChangeColorBlock(last, newKub, thisrow)
    if(last?.innerHTML === newKub?.innerHTML) {
        newKub.classList.add('block_activite_2');
    } else {
        newKub.classList.add('block_activite');
    }
}, 10)
}

function removeAndChangeColorBlock(el, newK, thisrow) {
creatNextEl();
setTimeout(() => {
    
    if(el?.innerHTML === newK?.innerHTML) {
        setTimeout(() => {
            changeNewBlock(el, +el.innerHTML + +newK.innerHTML, newK, thisrow)
        }, 400);
        newK.classList.remove('block_new');
        setTimeout(() => newK.remove(), 400)
    } else {
        newK.classList.remove('block_new');
        newK.classList.remove('block_activite');
        let kubiks = thisrow.querySelectorAll('.block');
        if(kubiks.length > 7) {
            wraper.innerHTML = '';
            wraper.insertAdjacentHTML('beforeend', `
            <div class="theEnd">
                <div class="theEndGame">конец игры</div>
                <div class="points">${allsum} очков</div>
                <div class="record">рекорд ${JSON.parse(localStorage.getItem('record'))} очков</div>
                <div class="playAgain" onclick="complateGame()">играть снова</div>
            </div>`)
        }
    }
}, 100)
}