var doors = [];
for (var i = 0; i < 100;  i++) {
  doors[i] = "Closed";
}

for (var j = 1; j <= 100; j++) { // j is what you're dividing by
  for (var k = 0; k < 100; k++) { //0 is the first door b/c of arrays
    if ((k + 1) % j) {
      toggle(k);
    }
    else {}
  }
}

for (var counter = 0; counter < 100; counter++) {
  console.log("Door " + (counter + 1) + " is " + doors[counter]);
}

function toggle(value) {
  if (doors[value] === "Open") {
    doors[value] = "Closed";
  }
  else {
    doors[value] = "Open";
  }
}
