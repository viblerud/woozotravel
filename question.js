let questionBtn = document.querySelector('#home-btn');
let question = document.querySelector('#question-bg');
let stageHome = document.getElementById('stage-bg');
let stage2Btn = document.getElementById('stage2-btn');

let dogImg = document.querySelector('#dog-img');



questionBtn.addEventListener('click', () => {
    question.classList.add('active');
    main.classList.remove('active');
})

stage2Btn.addEventListener('click', () => {
    stageHome.classList.add('active');
    question.classList.remove('active');
})

if (dogImg.classList.contains('right')) {
    console.log('작동');
    // question.classList.remove('active');
    // stageHome.classList.add('active');
}

