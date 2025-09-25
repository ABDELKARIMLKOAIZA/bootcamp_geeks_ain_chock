// ===== Exercise 1
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Select a kind of Music</title>
  <style>
    body { font-family: system-ui, Arial, sans-serif; padding: 24px; }
    #value { margin-top: .5rem; font-weight: 600; }
  </style>
</head>
<body>

  <select id="genres">
    <option value="rock">Rock</option>
    <option value="blues" selected>Blues</option>
  </select>

  <div id="value"></div>

  <script>
    const select = document.getElementById('genres');
    const out    = document.getElementById('value');

    // 1) Display current selected value
    function renderValue() {
      out.textContent = `Selected: ${select.value}`;
    }

    // 2) Add an additional option <option value="classic">Classic</option>
    const opt = document.createElement('option');
    opt.value = 'classic';
    opt.textContent = 'Classic';
    select.appendChild(opt);

    // 3) Make the newly added option selected by default
    select.value = 'classic'; // sets it selected

    // initial render + update on change
    renderValue();
    select.addEventListener('change', renderValue);
  </script>
</body>
</html>

// ===== Exercise 2
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Delete Colors</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    select { padding: 6px; margin-right: 10px; }
    input[type="button"] { padding: 6px 12px; cursor: pointer; }
  </style>
</head>
<body>

  <form>
    <select id="colorSelect">
      <option>Red</option>
      <option>Green</option>
      <option>White</option>
      <option>Black</option>
    </select>

    <input type="button" value="Select and Remove" id="removeBtn">
  </form>

  <script>
    const select = document.getElementById('colorSelect');
    const button = document.getElementById('removeBtn');

    // 1) Add click event listener
    button.addEventListener('click', removeColor);

    // 2) Function to remove selected color
    function removeColor() {
      if (select.options.length > 0) {
        select.remove(select.selectedIndex);
      } else {
        alert('No more colors to remove!');
      }
    }
  </script>

</body>
</html>

// ===== Exercise 3
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Shopping List</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    input[type="text"] { padding: 6px; width: 200px; margin-right: 8px; }
    button { padding: 6px 12px; margin-right: 6px; cursor: pointer; }
    ul { margin-top: 20px; }
    li { padding: 4px 0; }
  </style>
</head>
<body>
  <div id="root"></div>

  <script>
    // 1) Create empty array
    let shoppingList = [];

    // 2) Build form dynamically and add to DOM
    const root = document.getElementById('root');

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Add item...';

    const addButton = document.createElement('button');
    addButton.textContent = 'Add Item';
    addButton.addEventListener('click', addItem);

    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear All';
    clearButton.addEventListener('click', clearAll);

    const list = document.createElement('ul');

    root.appendChild(input);
    root.appendChild(addButton);
    root.appendChild(clearButton);
    root.appendChild(list);

    // 3) Add new item function
    function addItem() {
      const item = input.value.trim();
      if (item === '') return;

      shoppingList.push(item);
      renderList();
      input.value = '';
    }

    // 4) Clear all items function
    function clearAll() {
      shoppingList = [];
      renderList();
    }

    // Render function
    function renderList() {
      list.innerHTML = '';
      shoppingList.forEach(i => {
        const li = document.createElement('li');
        li.textContent = i;
        list.appendChild(li);
      });
    }
  </script>
</body>
</html>

// ===== Exercise 4

// ===== Exercise ...
