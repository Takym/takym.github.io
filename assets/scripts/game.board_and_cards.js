System.register("sample_module", [], function (exports_1, context_1) {
    "use strict";
    var sampleConstant;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("sampleConstant", sampleConstant = "正常にモジュールを読み込めています。");
        }
    };
});
System.register("board_and_cards", ["sample_module"], function (exports_2, context_2) {
    "use strict";
    var sample_module_1;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (sample_module_1_1) {
                sample_module_1 = sample_module_1_1;
            }
        ],
        execute: function () {
            (function () {
                window.addEventListener("load", function () {
                    const gameRoot = document.getElementById("game_root");
                    if (gameRoot) {
                        alert(gameRoot.innerText);
                        gameRoot.innerText = "現在、準備中です。定数値：" + sample_module_1.sampleConstant;
                    }
                });
            })();
        }
    };
});
//# sourceMappingURL=game.board_and_cards.js.map