let character = document.querySelector('#character');
let map = document.querySelector('#main');
let walls = document.querySelectorAll('.wall');

let step = 50;
let score = 0;


let home = document.querySelector('.item-home.home')
let items = document.querySelectorAll('.item-good, .item-enemy, .item-home');
let itemBlueberry = document.querySelector('.item-good.blueberry');
let itemGoguma = document.querySelector('.item-good.goguma');
let itemApple = document.querySelector('.item-good.apple');
let itemPaprika = document.querySelector('.item-good.paprika');
let itemPumpkin = document.querySelector('.item-good.pumpkin');

let itemChoco = document.querySelector('.item-enemy.chocolate')
let itemGrape = document.querySelector('.item-enemy.grape')
let itemOnion = document.querySelector('.item-enemy.onion')
let itemBee1 = document.querySelector('.item-enemy.bee')
let itemBee2 = document.querySelector('.item-enemy.bee2')


let pointText = document.querySelector('#point-txt');


let modalBg = document.querySelectorAll('.modal-bg');
let questionStg = document.getElementById('question');


let modalChoco = document.getElementById('chocolate');
let modalGrape = document.getElementById('grape');
let modalOnion = document.getElementById('onion');

let modalBlueberry = document.getElementById('blueberry');
let modalGoguma = document.getElementById('goguma');
let modalApple = document.getElementById('apple');
let modalPaprika = document.getElementById('paprika');
let modalPumpkin = document.getElementById('pumpkin');

let modalHomeClose = document.getElementById('homeclose');
let modalHome = document.getElementById('homeclear');



// 직접 작성한 스크립트를 챗지피티로 수정보완함
document.addEventListener('keydown', (event) => {
  
    let currentX = parseInt(getComputedStyle(character).left); //지금 box가 가지고 있는 left값을 출력한다;
    // parseInt() 정수로 변환
    let currentY = parseInt(getComputedStyle(character).top);
    let mapRect = map.getBoundingClientRect();
    let characterRect = character.getBoundingClientRect();

    let moveNum = 50; //움직임 속도

    if(event.key === 'ArrowLeft') {

        if(currentX - moveNum >= 0) { //currentX가 50 움직였을때 0보다 크거나 같다
            /*조건에false가 뜨면서 안움직여야한다 */
            character.style.left = (currentX - moveNum) + 'px';
            //string으로 처리해줘야함    
        } 
        character.style.backgroundImage = 'url(./img/player_left.png)';

    } else if(event.key === 'ArrowRight') {
        if(currentX + moveNum <= mapRect.width - characterRect.width) {
            character.style.left = (currentX + moveNum) + 'px';
            //string으로 처리해줘야함
        }      
        character.style.backgroundImage = 'url(./img/player_right.png)';
 
    } else if(event.key === 'ArrowUp') {
        if(currentY - moveNum >= 0) {
            character.style.top = (currentY - moveNum) + 'px';
        }  
    } else if(event.key === 'ArrowDown') {
        if(currentY + moveNum <= mapRect.height - characterRect.height) {
            character.style.top = (currentY + moveNum) + 'px';
        }   
    }

    // item에서 space를 눌렀을 때
    if (event.key === ' ') { // 추가된 부분 (스페이스를 눌렀을 때)
        items.forEach(item => {
            let itemRect = item.getBoundingClientRect();
            let distance = Math.sqrt(Math.pow(characterRect.left - itemRect.left, 2) + Math.pow(characterRect.top - itemRect.top, 2));
            if (distance <= 50) {
                console.log('distance 작동');
                if (item.classList.contains('chocolate')) {
                    modalChoco.classList.add('exit');                
                    if (modalChoco.classList.contains('exit')) {
                        itemChoco.style.display = 'none';
                    } 
                } else if (item.classList.contains('grape')) {
                    modalGrape.classList.add('exit');
                    if (modalGrape.classList.contains('exit')) {
                        itemGrape.style.display = 'none';
                    } 
                } else if (item.classList.contains('onion')) {
                    modalOnion.classList.add('exit');
                    if (modalOnion.classList.contains('exit')) {
                        itemOnion.style.display = 'none';
                    }
                } else if (item.classList.contains('blueberry')) {
                    score++;
                    pointText.innerHTML = score;
                    modalBlueberry.classList.add('exit');
                    if (modalBlueberry.classList.contains('exit')) {
                        itemBlueberry.style.display = 'none';
                    } 
                } else if (item.classList.contains('goguma')) {
                    score++;
                    pointText.innerHTML = score;
                    modalGoguma.classList.add('exit');
                    if (modalGoguma.classList.contains('exit')) {
                        itemGoguma.style.display = 'none';
                    } 
                } else if (item.classList.contains('apple')) {
                    score++;
                    pointText.innerHTML = score;
                    modalApple.classList.add('exit');
                    if (modalApple.classList.contains('exit')) {
                        itemApple.style.display = 'none';
                    }
                } else if (item.classList.contains('paprika')) {
                    score++;
                    pointText.innerHTML = score;
                    modalPaprika.classList.add('exit');
                    if (modalPaprika.classList.contains('exit')) {
                        itemPaprika.style.display = 'none';
                    }
                } else if (item.classList.contains('pumpkin')) {
                    score++;
                    pointText.innerHTML = score;
                    modalPumpkin.classList.add('exit');
                    if (modalPumpkin.classList.contains('exit')) {
                        itemPumpkin.style.display = 'none';
                    }
                } else if (item.classList.contains('home')) {
                    if (score < 5) {
                        modalHomeClose.classList.add('exit');                
                    } else if (score = 5) {
                        modalHome.classList.add('exit');    
                        score = 0;            
                    }
                }
            }
        });
    }

    if (event.key === 'Escape') {

        console.log('esc 작동');

        modalChoco.classList.remove('exit');
        modalGrape.classList.remove('exit');
        modalOnion.classList.remove('exit');

        modalBlueberry.classList.remove('exit');
        modalGoguma.classList.remove('exit');
        modalApple.classList.remove('exit');
        modalPaprika.classList.remove('exit');
        modalPumpkin.classList.remove('exit');

        modalHomeClose.classList.remove('exit');
    }
});