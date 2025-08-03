
window.addEventListener("load", function() {
	function initToggleButton(buttonElem, menuElem, label) {
		const openLabel  = "▼第" + label + "メニューを開く";
		const closeLabel = "△第" + label + "メニューを閉じる";

		buttonElem.innerText = openLabel;

		buttonElem.addEventListener("click", function() {
			menuElem.classList.toggle("hidden");

			if (buttonElem.innerText === openLabel) {
				buttonElem.innerText = closeLabel;
			} else {
				buttonElem.innerText = openLabel;
			}
		});
	}

	const leftButton = document.getElementById("left_toggle");
	const leftMenu   = document.getElementById("left");
	if (leftButton && leftMenu) {
		initToggleButton(leftButton, leftMenu, "１");
	}

	const rightButton = document.getElementById("right_toggle");
	const rightMenu   = document.getElementById("right");
	if (rightButton && rightMenu) {
		initToggleButton(rightButton, rightMenu, "２");
	}

	const ghsp = document.querySelectorAll("div.ghsp");
	if (ghsp) {
		for (let i = 0; i < ghsp.length; ++i) {
			const ccontainerElem = ghsp[i];
			const frameElem      = document.createElement("iframe");
			frameElem.src        = "https://github.com/sponsors/Takym/card";
			frameElem.title      = "Sponsor Takym";
			ccontainerElem.append(frameElem);
		}
	}

	const imgs = document.querySelectorAll("img[alt]");
	if (imgs) {
		for (let i = 0; i < imgs.length; ++i) {
			const img = imgs[i];
			if (img.title === "") {
				img.title = img.alt;
			}
		}
	}
});
