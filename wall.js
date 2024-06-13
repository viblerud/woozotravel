// const character = document.getElementById('character');
let walls = document.querySelectorAll('.wall');

function movePlayer(x, y) {
    const gameAreaRect = document.getElementById('main').getBoundingClientRect();
    const playerRect = character.getBoundingClientRect();


    const newX = playerRect.left + x;
    const newY = playerRect.top + y;

    let collisionDetected = false;
    for (let wall of walls) {
        const restrictedRect = wall.getBoundingClientRect();
        if (
            newX < restrictedRect.right ||
            newX + playerRect.width > restrictedRect.left ||
            newY < restrictedRect.bottom ||
            newY + playerRect.height > restrictedRect.top
        )
        playerRect.style.left = currentX + 'px';
        character.style.top = currentY + 'px';
        return true;
    }
    {   
        
    }

    if (collisionDetected) {
        console.log('작동');
        return;
    }

    if (newX >= gameAreaRect.left && newX + playerRect.width <= gameAreaRect.right) {
        character.style.left = character.offsetLeft + x + 'px';
    }
    if (newY >= gameAreaRect.top && newY + playerRect.height <= gameAreaRect.bottom) {
        character.style.top = character.offsetTop + y + 'px';
    }
}

// document.addEventListener('keydown', (event) => {
//     switch (event.key) {
//         case 'ArrowUp':
//             movePlayer(0, -moveNum);
//             break;
//         case 'ArrowDown':
//             movePlayer(0, moveNum);
//             break;
//         case 'ArrowLeft':
//             movePlayer(-moveNum, 0);
//             break;
//         case 'ArrowRight':
//             movePlayer(moveNum, 0);
//             break;
//     }
// });
