<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Letters Only Input</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    input { padding: 8px; font-size: 16px; width: 250px; }
    p { margin-top: 15px; font-weight: bold; }
  </style>
</head>
<body>

  <h2>Daily Challenge: Only Letters Allowed</h2>
  <input type="text" id="letterInput" placeholder="Type here...">
  <p>Output: <span id="output"></span></p>

  <script>
    const input = document.getElementById('letterInput');
    const output = document.getElementById('output');

    // Listen for input changes
    input.addEventListener('input', () => {
      // Remove everything that's not a letter (A-Z or a-z)
      input.value = input.value.replace(/[^a-zA-Z]/g, '');
      output.textContent = input.value; // show live output
    });
  </script>

</body>
</html>
