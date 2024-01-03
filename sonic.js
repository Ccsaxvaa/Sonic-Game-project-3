const dino = document.getElementById("dino");
    const cactus = document.getElementById("cactus");
    const scoreDisplay = document.getElementById('score');
    const usernameInput = document.getElementById("Register");
    let score = 0;

    function jump() {
      if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
          dino.classList.remove("jump");
        }, 300);
      }
    }

    let isAlive = setInterval(function () {
      // get current dino Y position
      let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

      // get current cactus X position
      let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
      );

      // detect collision
      if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        // collision
        alert(`Game Over! Your Score: ${score}`);
        score = 0; // Reset the score
        scoreDisplay.textContent = score;
        usernameInput.textContent=Register;
      } else if (cactusLeft <= 0) {
        // dinosaur successfully jumped over the cactus
        updateScore();
      }
    }, 10);

    document.addEventListener("keydown", function (event) {
      jump();
    });

    function updateScore() {
      score += 10; // You can adjust the scoring logic as needed
      scoreDisplay.textContent = score;
    }