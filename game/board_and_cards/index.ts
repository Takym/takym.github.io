
import { sampleConstant } from "./board_and_cards/sample_module";

import { InitializeBoard, InitializeCardList } from "./board_and_cards/game_object";

(function() {
	window.addEventListener("load", function() {
		// Entry point

		const gameRoot = document.getElementById("game_root");
		if (gameRoot) {
			//alert(gameRoot.innerText);
			gameRoot.innerText = "現在、準備中です。定数値：" + sampleConstant;

			const btnUpdate = document.createElement("button");
			const board     = InitializeBoard(8, 12);
			const cardList  = InitializeCardList(10);

			btnUpdate.innerText = "更新";
			btnUpdate.onclick = function() {
				board   .Update();
				cardList.Update();
			};

			gameRoot.appendChild(btnUpdate);
			board   .Create(gameRoot);
			cardList.Create(gameRoot);
		}
	});
})();
