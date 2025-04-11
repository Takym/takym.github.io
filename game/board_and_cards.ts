
import { sampleConstant } from "./sample_module";

(function() {
	window.addEventListener("load", function() {
		// Entry point

		const gameRoot = document.getElementById("game_root");
		if (gameRoot) {
			alert(gameRoot.innerText);
			gameRoot.innerText = "現在、準備中です。定数値：" + sampleConstant;
		}
	});
})();
