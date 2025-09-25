// ===== Exercise 1
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>DOM Practice – Chocolate Article</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body { font-family: system-ui, Arial, sans-serif; line-height: 1.6; margin: 2rem; }
    article { max-width: 720px; }
    h2, h3 { cursor: pointer; }
    button { padding: .6rem 1rem; margin: 1rem 0; border: 1px solid #ccc; border-radius: .5rem; background: #f6f6f6; cursor: pointer; }
    /* BONUS #7: fade out on hover of the 2nd paragraph */
    article p:nth-of-type(2) { transition: opacity .6s ease; }
    article p:nth-of-type(2):hover { opacity: 0; }
  </style>
</head>
<body>

  <article id="choco-article">
    <h1>Some Facts</h1>
    <h2>The Chocolate</h2>
    <h3>History of the chocolate</h3>

    <p>Chocolate is made from tropical Theobroma cacao tree seeds.</p>
    <p>Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
    <p>After the European discovery of the Americas, chocolate became very popular in the wider world, and its demand exploded.</p>
    <p>Chocolate has since become a popular food product that millions enjoy every day, thanks to its unique, rich, and sweet taste.</p>
    <p>But what effect does eating chocolate have on our health?</p>
  </article>

  <button id="boldify">Make all paragraphs bold</button>

  <script>
    // 1) Using a DOM property, retrieve the h1 and console.log it.
    const h1 = document.querySelector('#choco-article h1');
    console.log(h1); // logs the <h1> element

    // Ensure DOM is ready for manipulations that change the tree.
    document.addEventListener('DOMContentLoaded', () => {
      // 2) Remove the last paragraph in the <article>.
      const article = document.getElementById('choco-article');
      const lastP = article.querySelector('p:last-of-type');
      if (lastP) lastP.remove();
    });

    // 3) Add an event listener: when <h2> is clicked, background becomes red.
    const h2 = document.querySelector('#choco-article h2');
    h2.addEventListener('click', () => {
      h2.style.backgroundColor = 'red';
      h2.style.color = 'white';
    });

    // 4) Add an event listener to hide the <h3> when it’s clicked (display: none).
    const h3 = document.querySelector('#choco-article h3');
    h3.addEventListener('click', () => {
      h3.style.display = 'none';
    });

    // 5) Button: on click, make all <p> text bold.
    const boldBtn = document.getElementById('boldify');
    boldBtn.addEventListener('click', () => {
      document.querySelectorAll('#choco-article p').forEach(p => {
        p.style.fontWeight = '700';
      });
    });

    // 6) BONUS: On hover over the <h1>, set font size to a random pixel size 0–100.
    h1.addEventListener('mouseenter', () => {
      const size = Math.floor(Math.random() * 101); // 0..100
      h1.style.fontSize = size + 'px';
    });
    // (Optional) revert on mouseleave so it doesn’t stay huge/tiny forever
    h1.addEventListener('mouseleave', () => {
      h1.style.fontSize = '';
    });

    // 7) BONUS handled in CSS (see styles): article p:nth-of-type(2) fades out on hover.
  </script>
</body>
</html>

// ===== Exercise 2
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Work with Forms</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body { font-family: sans-serif; margin: 2rem; }
    form { margin-bottom: 1rem; }
    input[type="text"] { margin-bottom: .5rem; display: block; }
    ul { list-style: disc; margin-top: 1rem; }
  </style>
</head>
<body>

  <form id="userForm">
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="firstname"><br>

    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lastname"><br>

    <input type="submit" value="Submit" id="submit">
  </form>

  <ul class="usersAnswer"></ul>

  <script>
    // 1) Retrieve the form and console.log it
    const form = document.getElementById('userForm');
    console.log(form);

    // 2) Retrieve inputs by ID and console.log them
    const firstNameInputById = document.getElementById('fname');
    const lastNameInputById = document.getElementById('lname');
    console.log(firstNameInputById, lastNameInputById);

    // 3) Retrieve inputs by name attribute and console.log them
    const firstNameInputByName = document.getElementsByName('firstname')[0];
    const lastNameInputByName = document.getElementsByName('lastname')[0];
    console.log(firstNameInputByName, lastNameInputByName);

    // 4) Handle form submit event
    form.addEventListener('submit', function (event) {
      // preventDefault() stops the form from refreshing the page
      event.preventDefault();

      // get values
      const firstName = firstNameInputById.value.trim();
      const lastName = lastNameInputById.value.trim();

      // validate inputs
      if (!firstName || !lastName) {
        alert('Both fields must be filled.');
        return;
      }

      // select the <ul> container
      const ul = document.querySelector('.usersAnswer');
      ul.innerHTML = ''; // clear previous results

      // create <li> for first name
      const li1 = document.createElement('li');
      li1.textContent = `First name of the user: ${firstName}`;

      // create <li> for last name
      const li2 = document.createElement('li');
      li2.textContent = `Last name of the user: ${lastName}`;

      // append them to the <ul>
      ul.appendChild(li1);
      ul.appendChild(li2);
    });
  </script>

</body>
</html>

// ===== Exercise 3
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Transform the Sentence</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body { font-family: Arial, sans-serif; margin: 2rem; }
    p { font-size: 1.2rem; line-height: 1.5; }
  </style>
</head>
<body>

  <p id="text">
    <strong>Hello</strong> I hope you are enjoying <strong>this</strong> class.
    At the <strong>end</strong> you <strong>will</strong> be great Developers!
    <strong>Enjoy</strong> the <strong>JavaScript</strong> lessons.
  </p>

  <script>
    // 1) Declare global variable
    let allBoldItems;

    // 2) Function to collect all <strong> items
    function getBoldItems() {
      allBoldItems = document.getElementsByTagName('strong');
    }

    // 3) Function to highlight (change color to blue)
    function highlight() {
      for (let item of allBoldItems) {
        item.style.color = 'blue';
      }
    }

    // 4) Function to reset color back to black
    function returnItemsToDefault() {
      for (let item of allBoldItems) {
        item.style.color = 'black';
      }
    }

    // Call getBoldItems() once on load to populate the variable
    getBoldItems();

    // 5) Add mouse events to the paragraph
    const paragraph = document.getElementById('text');
    paragraph.addEventListener('mouseover', highlight);
    paragraph.addEventListener('mouseout', returnItemsToDefault);
  </script>

</body>
</html>

// ===== Exercise 4
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Volume of a Sphere</title>
  <style>
    body { font-family: system-ui, Arial, sans-serif; padding: 30px; }
    label, input { display: block; margin: .35rem 0; }
    input[readonly] { background: #f7f7f7; }
    .error { color: #b00020; margin-top: .25rem; }
  </style>
</head>
<body>

  <p>Input radius and get the volume of a sphere.</p>

  <form id="MyForm" novalidate>
    <label for="radius">Radius</label>
    <input type="number" step="any" min="0" name="radius" id="radius" required>

    <label for="volume">Volume</label>
    <input type="text" name="volume" id="volume" readonly>

    <input type="submit" value="Calculate" id="submit">
    <div id="msg" class="error" aria-live="polite"></div>
  </form>

  <script>
    // V = (4/3) * π * r^3
    const form   = document.getElementById('MyForm');
    const rInput = document.getElementById('radius');
    const vInput = document.getElementById('volume');
    const msg    = document.getElementById('msg');

    form.addEventListener('submit', (e) => {
      e.preventDefault(); // don’t reload the page

      const r = parseFloat(rInput.value);
      if (Number.isNaN(r) || r < 0) {
        msg.textContent = 'Enter a valid non-negative radius.';
        vInput.value = '';
        return;
      }
      msg.textContent = '';

      const volume = (4 / 3) * Math.PI * Math.pow(r, 3);
      vInput.value = volume.toFixed(6); // adjust decimals if you want
    });
  </script>

</body>
</html>

// ===== Exercise ...
