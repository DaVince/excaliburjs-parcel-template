import * as ex from 'excalibur';

const game = new ex.Engine();
const actor = new ex.Actor(100, 100, 32, 32, ex.Color.Red);
game.add(actor);
game.start();
// If you see a red square, congratulations! It works!
