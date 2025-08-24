
import * as Common from "../common";
import * as GO     from "./game_object";

(function() {
	window.addEventListener("load", function() {
		const gameRoot = Common.GetGameRoot();
		if (gameRoot) {
			const btnUpdate = document.createElement("button");
			const board     = GO.InitializeBoard(8, 12);
			const cardList  = GO.InitializeCardList(10);

			btnUpdate.innerText = "更新";
			btnUpdate.addEventListener("click", function() {
				board   .Update();
				cardList.Update();
			});

			gameRoot.appendChild(btnUpdate);
			board   .Create(gameRoot);
			cardList.Create(gameRoot);
		}
	});
})();
