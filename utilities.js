function animate() {
    ctx3.clearRect(0, 0, canvas.width, canvas.height)
    ctx1.drawImage(background_lvl2, 0, 0, canvas.width, canvas.height);
    frogger.draw();
    frogger.update();
    handleObstacles();
    requestAnimationFrame(animate);
}
animate();


document.getElementById('up').onclick = function () {
    window.dispatchEvent(new KeyboardEvent('keydown', {
        key: "e",
        keyCode: 38,
        code: "KeyE",
        which: 38,
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
      }));
      window.dispatchEvent(new KeyboardEvent('keyup', {
        key: "e",
        keyCode: 38,
        code: "KeyE",
        which: 38,
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
      }));
    }
    document.getElementById('left').onclick = function () {
        window.dispatchEvent(new KeyboardEvent('keydown', {
            key: "e",
            keyCode: 37,
            code: "KeyE",
            which: 38,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false
          }));
          window.dispatchEvent(new KeyboardEvent('keyup', {
            key: "e",
            keyCode: 37,
            code: "KeyE",
            which: 38,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false
          }));
        }
        document.getElementById('right').onclick = function () {
            window.dispatchEvent(new KeyboardEvent('keydown', {
                key: "e",
                keyCode: 39,
                code: "KeyE",
                which: 39,
                shiftKey: false,
                ctrlKey: false,
                metaKey: false
              }));
              window.dispatchEvent(new KeyboardEvent('keyup', {
                key: "e",
                keyCode: 39,
                code: "KeyE",
                which: 39,
                shiftKey: false,
                ctrlKey: false,
                metaKey: false
              }));
            }
            document.getElementById('down').onclick = function () {
                window.dispatchEvent(new KeyboardEvent('keydown', {
                    key: "e",
                    keyCode: 40,
                    code: "KeyE",
                    which: 40,
                    shiftKey: false,
                    ctrlKey: false,
                    metaKey: false
                  }));
                  window.dispatchEvent(new KeyboardEvent('keyup', {
                    key: "e",
                    keyCode: 37,
                    code: "KeyE",
                    which: 38,
                    shiftKey: false,
                    ctrlKey: false,
                    metaKey: false
                  }));
                }
     

        window.addEventListener('keydown', function (e) {
            keys = [];
            keys[e.keyCode] = true;
            if (keys[37] || keys[38] || keys[39] || keys[40]) {
                frogger.jump();
            }
        })

        window.addEventListener('keyup', function (e) {
            delete keys[e.keycode];
            frogger.moving = false;

        });

        function scored() {
            score++;
            gameSpeed += 0.5;
            frogger.x = canvas.width / 2 - frogger.width / 2;
            frogger.y = canvas.height - frogger.height - 40;
        }