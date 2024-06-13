

// 챗지피티에서 검색하여 변형 및 일부만 사용

document.addEventListener("DOMContentLoaded", function() {
    let percentage = 0;
    const percentageElement = document.getElementById("loading_num");
    

    function updatePercentage() {
        percentage += Math.floor(Math.random() * 5) + 1;
        if (percentage > 100) {
          percentage = 100;
        }
        percentageElement.textContent = percentage;
    
        if (percentage < 100) {
          let pause = Math.random() < 0.2;
          let delay = pause ? 1000 : 100;  // 20% chance to pause for 1 second
          setTimeout(updatePercentage, delay);
        } else {
            main.classList.add('active');
            loadPageMain.classList.remove('active');        
        }
    }
    updatePercentage();
});


