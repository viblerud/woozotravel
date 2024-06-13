let character2 = document.querySelector('#character2');
let mapHome = document.querySelector('#stage-home');
let pointText2 = document.querySelector('#point-txt2');
let stageClear = document.querySelector('#stageclear');
let item2 = document.querySelectorAll('.item-good');

let itemBall = document.querySelector('.item-good.ball');
let itemBall2 = document.querySelector('.item-good.ball2');
let itemBall3 = document.querySelector('.item-good.ball3');
let itemBear = document.querySelector('.item-good.bear');
let itemBear2 = document.querySelector('.item-good.bear2');
let itemBear3 = document.querySelector('.item-good.bear3');
let itemCoffee = document.querySelector('.item-good.coffee');
let itemBone = document.querySelector('.item-good.bone');
let itemBone2 = document.querySelector('.item-good.bone2');
let itemRoll = document.querySelector('.item-good.roll');

let modalBall = document.querySelector('#ball')
let modalBear = document.querySelector('#bear')
let modalCoffee = document.querySelector('#coffee')
let modalBone = document.querySelector('#bone')
let modalRoll = document.querySelector('#roll')


let score2 = 0;


document.addEventListener('keydown', (e) => {
    let currentX2 = parseInt(getComputedStyle(character2).left); //지금 box가 가지고 있는 left값을 출력한다;
    // parseInt() 정수로 변환
    let currentY2 = parseInt(getComputedStyle(character2).top);
    let mapRect2 = mapHome.getBoundingClientRect();
    let character2Rect = character2.getBoundingClientRect();

    let moveNum = 50; //움직임 속도

    if(e.key === 'ArrowLeft') {
        if(currentX2 - moveNum >= 0) { //currentX가 50 움직였을때 0보다 크거나 같다
            /*조건에false가 뜨면서 안움직여야한다 */
            character2.style.left = (currentX2 - moveNum) + 'px';
            //string으로 처리해줘야함    
        } 
        character2.style.backgroundImage = 'url(./img/player_left.png)';
    } else if(e.key === 'ArrowRight') {
        if(currentX2 + moveNum <= mapRect2.width - character2Rect.width) {
            character2.style.left = (currentX2 + moveNum) + 'px';
            //string으로 처리해줘야함
        }       
        character2.style.backgroundImage = 'url(./img/player_right.png)';
    } else if(e.key === 'ArrowUp') {
        if(currentY2 - moveNum >= 0) {
            character2.style.top = (currentY2 - moveNum) + 'px';
        }  
    } else if(e.key === 'ArrowDown') {
        if(currentY2 + moveNum <= mapRect2.height - character2Rect.height) {
            character2.style.top = (currentY2 + moveNum) + 'px';
        }   
    }

    if (e.key === ' ') { // 추가된 부분 (스페이스를 눌렀을 때)

        item2.forEach(i => {
            let itemRect2 = i.getBoundingClientRect();
            let distance = Math.sqrt(Math.pow(character2Rect.left - itemRect2.left, 2) + Math.pow(character2Rect.top - itemRect2.top, 2));
            if (distance <= 50) {
                console.log('distance 작동');
                if (i.classList.contains('ball')) {
                    score2 ++;
                    pointText2.innerHTML = score2;
                } else if (i.classList.contains('ball2')) {
                    score2 ++;
                    pointText2.innerHTML = score2;
                } else if (i.classList.contains('ball3')) {
                    score2 ++;
                    pointText2.innerHTML = score2;
                } else if (i.classList.contains('bear')) {
                    score2++;
                    pointText2.innerHTML = score2;              
                } else if (i.classList.contains('bear2')) {
                    score2++;
                    pointText2.innerHTML = score2;
                } else if (i.classList.contains('bear3')) {
                    score2++;
                    pointText2.innerHTML = score2;
                }
                else if (i.classList.contains('coffee')) {
                    score2 ++;
                    pointText2.innerHTML = score2;
                } else if (i.classList.contains('bone')) {
                    score2++;
                    pointText2.innerHTML = score2;
                } else if (i.classList.contains('bone2')) {
                    score2++;
                    pointText2.innerHTML = score2;
                } else if (i.classList.contains('roll')) {
                    score2++;
                    pointText2.innerHTML = score2;
                } 
                if (score2 >= 70) {
                    if (stageHome.classList.contains('active')){
                    stageClear.classList.add('active');
                }
            }
            }
        });
    }
    
   
       

    }

)
