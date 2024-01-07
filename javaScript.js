const div = document.querySelector('.changeBgColor');

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
	if (!intervalId) {
		intervalId = setInterval(changeBgColor, 1000);
	}
};

function changeBgColor() {
	div.style.backgroundColor = randomColor();
}
const stopChange = () => {
	clearInterval(intervalId);
	intervalId = null;
};

document.querySelector('#changeBg').addEventListener('click', changeColor);

document.querySelector('#stop').addEventListener('click', stopChange);
3;
