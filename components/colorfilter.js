function makeSchet(num) {
    schet.querySelector('span').innerHTML = num;
} 
function changeNewBlock(newEl, sum, newKub, thisrow = null) {
    allsum += sum
    newEl.innerHTML = sum;
    makeSchet(allsum);
    newEl.classList.remove('block_activite_2');

    if(!localStorage.getItem('record')) {
        localStorage.setItem('record', JSON.stringify(allsum))
    } else if (allsum > JSON.parse(localStorage.getItem('record'))) {
            localStorage.setItem('record', JSON.stringify(allsum))
            schet.querySelector('.localInfo').innerHTML = JSON.parse(localStorage.getItem('record'));
    }


    if(sum == 5){
        addBumImg(sum, newEl, 'twohalf', 'five');
    }else if(sum == 10) {
        addBumImg(sum, newEl, 'five', 'ten');
    } else if(sum == 20) {
        addBumImg(sum, newEl, 'ten', 'twenty');
    } else if(sum == 40) {
        addBumImg(sum, newEl, 'twenty', 'fourty');
    } else if(sum == 80) {
        addBumImg(sum, newEl, 'fourty', 'sixty');
    } else if( sum == 120) {
        addBumImg(sum, newEl, 'sixty', 'onehtwo');
    } else if( sum == 160) {
        addBumImg(sum, newEl, 'eighty', 'onehsixty');
    } else if( sum == 320) {
        addBumImg(sum, newEl, 'onehsixty', 'onehfourty');
    }

    filterColumns(thisrow);
}

function addBumImg(sum, newEl, fromClass, toClass) {
    newEl.classList.remove(fromClass);
    newEl.classList.add(toClass);
    if(sum >= 320) {
        setTimeout(() => {
            newEl.innerHTML = `
            <img class="boom" src="./img/explosion.png" alt="bim"/>
            `;
        }, 100)
        setTimeout(() => {
            // newKub.remove()
            newEl.remove()
        }, 1000)
    }
}
