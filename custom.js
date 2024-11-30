// Monitor gamepad inputs
window.addEventListener("gamepadconnected", (event) => {
  const gamepadIndex = event.gamepad.index;

  function update() {
    const gamepad = navigator.getGamepads()[gamepadIndex];

    if (gamepad) {
      const yButton = gamepad.buttons[3]; // "Y" button index
      const aButton = gamepad.buttons[0]; // "A" button index

      // Simulate both buttons lighting up when "Y" is pressed
      if (yButton.pressed) {
        document.getElementById("button-y").classList.add("active");
        document.getElementById("button-a").classList.add("active");
      } else {
        document.getElementById("button-y").classList.remove("active");
        document.getElementById("button-a").classList.remove("active");
      }
    }

    requestAnimationFrame(update);
  }

  update();
});
