function animate(){
    ctx3.clearRect(0,0, canvas.width, canvas.height)
    ctx1.drawImage(background_lvl2, 0, 0, canvas.width, canvas.height);
    frogger.draw();
    frogger.update();
    handleObstacles();
    requestAnimationFrame(animate);
}
animate();

// document.getElementById('up').onclick = function() {
    
//         $('38').keydown();
//         $('38').keypress();
//         $('38').keyup();
//         $('38').blur();
    
//  }
//  document.getElementById('down').onclick = function() {
//     keys = [];
//     keys[40] = true;
//  }
//  document.getElementById('left').onclick = function() {
//     keys = [];
//     keys[37] = true;
//  }
//  document.getElementById('right').onclick = function() {
//     keys = [];
//     keys[39] = true;
//  }
// event listeners
window.addEventListener('keydown', function(e){
    keys = [];
    keys[e.keyCode] = true;
    if(keys[37] || keys [38] || keys[39] || keys [40]){
        frogger.jump();
    }
})

window.addEventListener('keyup', function(e){
    delete keys[e.keycode];
    frogger.moving = false;
    
});

function scored(){
    score++;
    gameSpeed += 0.05;
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
}