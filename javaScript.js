const body = document.querySelector('body');

let intervalId;

// generating Random Color
const randomColor = () => {
	const hex = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += hex[Math.floor(Math.random() * 16)];
	}
	return color;
};

const changeColor = () => {
	intervalId = setInterval(changeBgColor, 1000);
};

function changeBgColor() {
	body.style.backgroundColor = randomColor();
}
const stopChange = () => {
	clearInterval(intervalId);
	console.log('stopped');
};

document.querySelector('#changeBg').addEventListener('click', changeColor);

document.querySelector('#stop').addEventListener('click', stopChange);
