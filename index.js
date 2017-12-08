const gamepad = new Gamepad();

gamepad.on('press', 'button_3', e => {
  console.log(`player ${e.player} pressed ${e.button}!`);
});

gamepad.setCustomMapping('keyboard', {
  'button_3': 38,
  'start': 27,
  'd_pad_up': [38, 87],
  'd_pad_down': [40, 83],
  'd_pad_left': [37, 65],
  'd_pad_right': [39, 68]
});
