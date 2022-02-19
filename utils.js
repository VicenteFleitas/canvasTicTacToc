export const Tile = (id) => {
	let o = {
		color: "#cdcdcd",
		state: "", id: id, 
		w: 50, h: 50, x: 0, y: 0
	}
	return o;
}

const winningRules = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
]

export const rulesValidation = (board, currentPlayer) => {
	let roundWon = false;
	for (let i = 0; i <= 7; i++) {
		const winCondition = winningRules[i];
		const a = board[winCondition[0]].state;
		const b = board[winCondition[1]].state;
		const c = board[winCondition[2]].state;
		if (a === "" || b === "" || c === "") continue;
		if (a === b && b === c) {
			roundWon = true;
			break;
		}
	}
	if (roundWon) alert(`The winner is: ${currentPlayer}`);
	if (!roundWon && !Object.keys(board).find(id => board[id].state === "")) alert("Empate");
}

export const drawTile = (tile, ctx) => {
	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.fillStyle = tile.color;
	ctx.strokeStyle = "#000";
	ctx.rect(tile.x, tile.y, tile.w, tile.h);
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.lineWidth = 3;
	// draw X or O
	if (tile.state == "O") ctx.arc(tile.x + 25, tile.y + 25, 20, 0, 2 * Math.PI);
	if (tile.state == "X") {
		ctx.moveTo(tile.x + 5, tile.y + 5);
		ctx.lineTo(tile.x + 45, tile.y + 45);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(tile.x + 45, tile.y +  5);
		ctx.lineTo(tile.x + 5, tile.y + 45);
	}
	ctx.stroke();
}

export function getXY(canvas, event) {
    var rect = canvas.getBoundingClientRect();  // absolute position of canvas
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }
}

export function hitTestPoint(point, sprite) {

  let left, right, top, bottom, hit;

    //Get the position of the sprite's edges
    left = sprite.x;
    right = sprite.x + sprite.w;
    top = sprite.y;
    bottom = sprite.y + sprite.h;

    //Find out if the point is intersecting the rectangle
    hit = point.x > left && point.x < right && point.y > top && point.y < bottom;
  

  //`hit` will be either `true` or `false`
  return hit;
}