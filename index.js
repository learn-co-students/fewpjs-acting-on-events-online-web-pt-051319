let dodger = document.getElementById('dodger');

document.addEventListener('keydown', (e) => {
	switch(e.key) {
		case 'ArrowLeft':
			moveDodgerLeft();
			break;
		case 'ArrowRight':
			moveDodgerRight();
			break;
	};
});

let moveDodgerLeft = () => {
	let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  dodger.style.left = `${left - 1}px`;
}

let moveDodgerRight = () => {
	let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  dodger.style.left = `${left + 1}px`;	
}

		