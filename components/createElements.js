let allsum = 0;
schet.querySelector('.localInfo').innerHTML = JSON.parse(localStorage.getItem('record'));

const nums = [
    {num: 2.5, name: 'twohalf'},
    {num: 5, name: 'five'}, 
    {num: 10, name: 'ten'}, 
    {num: 20, name: 'twenty'},
    {num: 40, name: 'fourty'},
    {num: 80, name: 'sixty'},
    {num: 160, name: 'onehsixty'}
];

function complateGame () {
    wraper.innerHTML = '';
    wraper.insertAdjacentHTML('beforeend', `${nums.map(el => `
    <div class="blocks_row">
        <div class="block ${el.name}">${el.num}</div>
    </div>`).join('')}`)
    allsum = 0;
    schet.querySelector('span').innerHTML = 0;
}

function creatNextEl() {
    const choosen = nums[Math.floor(Math.random() * (nums.length - 2))]
    const newElement = document.createElement('div');
    newElement.innerHTML = choosen.num
    newElement.classList.add('block_new');
    newElement.classList.add(choosen.name);
    newElement.classList.add('block');
    next.append(newElement)
}