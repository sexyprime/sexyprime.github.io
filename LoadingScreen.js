function progress() {
    var prg = document.getElementById('progress');
    var percent = document.getElementById('percentCount');
    var counter = 5;
    var progress = 25;
    var id = setInterval(frame, 50);

    function frame() {
        if(progress == 500 && counter == 100) {
            clearInterval(id);
            sleep(500).then(() => {
                window.location.href="index.html";
            });
        } else {
            progress += 5;
            counter += 1;
            prg.style.width = progress + 'px';
            percent.innerHTML = counter + '%';
            }
        }
    }

function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

progress();


