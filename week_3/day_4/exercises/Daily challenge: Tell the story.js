<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Mad Libs Game</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    label { display: block; margin-top: 10px; }
    input { padding: 6px; width: 200px; }
    button { margin-top: 15px; padding: 8px 12px; cursor: pointer; }
    #story { margin-top: 20px; font-weight: bold; font-size: 1.2em; }
  </style>
</head>
<body>

  <h1>Mad Libs</h1>

  <form id="libform">
    <label for="noun">Noun:</label>
    <input type="text" id="noun"><br>

    <label for="adjective">Adjective:</label>
    <input type="text" id="adjective"><br>

    <label for="person">Someone's Name:</label>
    <input type="text" id="person"><br>

    <label for="verb">Verb:</label>
    <input type="text" id="verb"><br>

    <label for="place">A place:</label>
    <input type="text" id="place"><br>

    <button type="submit" id="lib-button">Lib it!</button>
    <button type="button" id="shuffle">Shuffle Story</button>
  </form>

  <p>Generated story:</p>
  <span id="story">...</span>

  <script>
    const form = document.getElementById('libform');
    const storyEl = document.getElementById('story');

    let stories = []; // will hold generated story templates

    // define some story templates with placeholders
    const storyTemplates = [
      ({noun, adjective, person, verb, place}) =>
        `${person} took a ${adjective} ${noun} and decided to ${verb} all the way to ${place}.`,
      ({noun, adjective, person, verb, place}) =>
        `In ${place}, ${person} found a ${adjective} ${noun} and tried to ${verb} with it.`,
      ({noun, adjective, person, verb, place}) =>
        `No one expected ${person} to ${verb} a ${adjective} ${noun} while visiting ${place}!`
    ];

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // 1. get values
      const noun = document.getElementById('noun').value.trim();
      const adjective = document.getElementById('adjective').value.trim();
      const person = document.getElementById('person').value.trim();
      const verb = document.getElementById('verb').value.trim();
      const place = document.getElementById('place').value.trim();

      // 2. validate inputs
      if (!noun || !adjective || !person || !verb || !place) {
        alert("Please fill out all fields.");
        return;
      }

      const values = { noun, adjective, person, verb, place };

      // 3. generate story and show it
      const randomTemplate = storyTemplates[Math.floor(Math.random() * storyTemplates.length)];
      const newStory = randomTemplate(values);
      storyEl.textContent = newStory;

      // store the last used values for shuffling
      stories = values;
      console.log("Generated story:", newStory);
    });

    // BONUS: Shuffle button - reuse same values but randomize story template
    document.getElementById('shuffle').addEventListener('click', () => {
      if (Object.keys(stories).length === 0) {
        alert("Generate a story first!");
        return;
      }
      const randomTemplate = storyTemplates[Math.floor(Math.random() * storyTemplates.length)];
      storyEl.textContent = randomTemplate(stories);
    });
  </script>

</body>
</html>
