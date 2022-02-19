import { Tile, drawTile, hitTestPoint, rulesValidation, getXY } from "./utils.js"
// init canvas
let canvas = document.getElementById('canvas');
canvas.setAttribute("width", "150");
canvas.setAttribute("height", "150");
let ctx = canvas.getContext('2d');
// create variables
const tiles = {};
let currentPlayer = "X";
// create tiles
let y = 0;
for (let i = 0; i < 9; i++) {
	tiles[i] = Tile(i);
	tiles[i].x = (i % 3) * tiles[i].w;
	tiles[i].y = y * tiles[i].h;
	if ((i % 3) == 2) y++;
}
// draw initital tiles
Object.keys(tiles).forEach((i) => {
	drawTile(tiles[i], ctx);
})
// add mouse listener
window.addEventListener("click", (e) => {
	Object.keys(tiles).forEach(i => {
		let pos = getXY(canvas, e);
		if (hitTestPoint({ x: pos.x, y: pos.y }, tiles[i])) {
			tiles[i].state = currentPlayer;
		}
		drawTile(tiles[i], ctx);
	})
	rulesValidation(tiles, currentPlayer);
	// change turn
	currentPlayer = currentPlayer == "X" ? "O" : "X";
})







