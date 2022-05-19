function filterColumns(thisrow) {
    setTimeout(() => {
        if(thisrow) {
            let blocks = thisrow.querySelectorAll('.block')
        blocks.forEach((el, index) => {
            if(index - 1 > -1 ) {
                if(el.innerHTML == blocks[index - 1].innerHTML) {
                    el.classList.add('improvisation')
                    setTimeout(() => {
                        changeNewBlock(blocks[index - 1], +el.innerHTML + +blocks[index - 1].innerHTML, el)
                        el.remove()
                        filterColumns(thisrow);
                    }, 300)
                }
            }
        })
    }
    }, 100)
};






