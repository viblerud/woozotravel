let startBtn = document.querySelector('#start-btn');
let main = document.querySelector('#main-bg');
let opening = document.getElementById('opening');
let loadPageMain = document.getElementById('loading_page1');

startBtn.addEventListener('click', () => {

        loadPageMain.classList.add('active');
        opening.classList.remove('active');

})

