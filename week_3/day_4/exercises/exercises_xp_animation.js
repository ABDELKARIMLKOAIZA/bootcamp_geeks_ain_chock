// ===== Exercise 1
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Timer Exercises</title>
  <style>
    p { background: yellow; color: red; margin: .4rem 0; }
  </style>
</head>
<body>
  <div id="container"></div>
  <button id="clear">Clear Interval</button>

  <script>
    const container = document.getElementById('container');
    const clearBtn  = document.getElementById('clear');

    /* ========= Part I =========
       After 2s, alert "Hello World". */
    setTimeout(() => alert('Hello World'), 2000);

    /* ========= Part II =========
       After 2s, add one paragraph <p>Hello World</p>. */
    setTimeout(() => {
      const p = document.createElement('p');
      p.textContent = 'Hello World';
      container.appendChild(p);
    }, 2000);

    /* ========= Part III =========
       Every 2s, add a paragraph.
       - Stop when user clicks the button.
       - Or stop automatically once there are 5 <p> in #container. */
    function addParagraph() {
      const p = document.createElement('p');
      p.textContent = 'Hello World';
      container.appendChild(p);

      // auto-stop at 5 paragraphs
      if (container.querySelectorAll('p').length >= 5) {
        clearInterval(intervalId);
        intervalId = null;
      }
    }

    let intervalId = setInterval(addParagraph, 2000);

    clearBtn.addEventListener('click', () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    });
  </script>
</body>
</html>


// ===== Exercise 2
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Move the Box</title>
  <style>
    #container {
      width: 400px;
      height: 400px;
      position: relative;
      background: yellow;
    }

    #animate {
      width: 50px;
      height: 50px;
      position: absolute;
      background-color: red;
      left: 0;
      top: 0;
    }
  </style>
</head>
<body>

  <p><button onclick="myMove()">Click Me</button></p>

  <div id="container">
    <div id="animate"></div>
  </div>

  <script>
    function myMove() {
      const elem = document.getElementById("animate");
      let pos = 0; // start from left 0
      clearInterval(window.moveInterval); // clear any previous interval
      window.moveInterval = setInterval(frame, 1); // move every 1ms

      function frame() {
        if (pos >= 350) { // 400 container - 50 box = 350 max position
          clearInterval(window.moveInterval);
        } else {
          pos++;
          elem.style.left = pos + "px";
        }
      }
    }
  </script>

</body>
</html>

// ===== Exercise 3


// ===== Exercise 4

// ===== Exercise ...
