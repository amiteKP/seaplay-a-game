score = 0;
pass = true;

audio=new Audio("music2.mp3");
audiover=new Audio("Game Over.mp3");
setTimeout(() => {
    audio.play()
}, 1000);


document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        human = document.querySelector('.human');
        human.classList.add('animateHuman');
        setTimeout(() => {
            human.classList.remove('animateHuman')
        }, 700);
    }
    if (e.keyCode == 39) {
        human = document.querySelector('.human');
        humanx = parseInt(window.getComputedStyle(human, null).getPropertyValue('left'));
        human.style.left = humanx + 110 + "px";
    }
    if (e.keyCode == 37) {
        human = document.querySelector('.human');
        humanx = parseInt(window.getComputedStyle(human, null).getPropertyValue('left'));
        human.style.left = (humanx - 110) + "px";
    }
}
setInterval(() => {
    human = document.querySelector('.human');
    gameover = document.querySelector('.gameover');
    hurdle = document.querySelector('.hurdle');
    dx = parseInt(window.getComputedStyle(human, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(human, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(hurdle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(hurdle, null).getPropertyValue('top'));


    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    console.log(offsetX, offsetY);
    if (offsetX < 113 && offsetY < 52) {
        gameover.innerHTML= 'Game Over-reload to play again!';
        hurdle.classList.remove('hurdles')
        audiover.play()
        audio.pause()
        human.classList.add('losehuman');
    }
    else if (offsetX < 145 && pass) {
        score += 1;
        updatescore(score);
        pass = false;
        setTimeout(() => {
            pass = true;
        }, 1000);

        setTimeout(() => {
            animadur = parseFloat(window.getComputedStyle(hurdle, null).getPropertyValue('animation-duration'));
            newduration = animadur - 0.2;
            hurdle.style.animationDuration = newduration + 's';
            console.log("new duration:" ,newduration);
        }, 750);


    }

}, 100);

function updatescore(score) {
    scoreCount.innerHTML = "Your Score:" + score
}