window.onload = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


canvas.addEventListener('mousemove', (e) => {
    mouse.x = e.x
    mouse.y = e.y
})

document.addEventListener('keydown', (e) => {
    if (e.key == 'w' || e.code == 'Space') {
        bird.speedY += 10;
    }
})