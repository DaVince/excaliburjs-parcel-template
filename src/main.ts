import * as ex from 'excalibur';

const game = new ex.Engine();
const actor = new ex.Actor({x: 100, y: 100, width: 32, height: 32, color: ex.Color.Red});
game.add(actor);
game.start();
// If you see a red square, congratulations! It works!
