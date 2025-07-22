/*
* HTML CODE
* This code is used to demonstrate event bubbling in JavaScript.
*
<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <h1>Hello, mate!</h1>
    <div id="box1">
      Box 1
      <div id="box2">Box 2</div>
    </div>
    <script src="src/index.js"></script>
  </body>
</html>

* CSS CODE
body {
  font-family: sans-serif;
}

#box1 {
  width: 200px;
  height: 100px;
  background-color: aquamarine;
}

#box2 {
  width: 100px;
  height: 50px;
  background-color: chocolate;
}
*/

const box1 = document.getElementById('box1');

if (box1) {
  box1.addEventListener('click', () => {
    alert('Click on box 1');
  });
}

const box2 = document.getElementById('box2');

if (box2) {
  box2.addEventListener('click', (e) => {
    // e.stopPropagation();  <---  // Uncomment this line
    // if we don't stop the propagation, it will keep bubbling up to box1
    // So this is the line to resolve the event bubbling bug
    alert('Click on box 2');
  });
}
