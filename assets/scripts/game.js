System.register("board_and_cards/game_object", [], function (exports_1, context_1) {
    "use strict";
    var Item, Cell, Card, Board, CardList;
    var __moduleName = context_1 && context_1.id;
    function InitializeBoard(width, height) {
        const cells = Array(height);
        for (let y = 0; y < height; ++y) {
            const row = Array(width);
            for (let x = 0; x < width; ++x) {
                const cell = new Cell();
                cell.DisplayName = `(${x}, ${y})`;
                row[x] = cell;
            }
            cells[y] = row;
        }
        const board = new Board();
        board.DisplayName = `${width} x ${height}`;
        board.Cells = cells;
        return board;
    }
    exports_1("InitializeBoard", InitializeBoard);
    function InitializeCardList(count) {
        const cards = Array(count);
        for (let i = 0; i < count; ++i) {
            const card = new Card();
            card.DisplayName = `#${i}`;
            cards[i] = card;
        }
        const cardList = new CardList();
        cardList.DisplayName = `Count: ${count}`;
        cardList.Cards = cards;
        return cardList;
    }
    exports_1("InitializeCardList", InitializeCardList);
    return {
        setters: [],
        execute: function () {
            Item = class Item {
                View;
                DisplayName;
                Create(parent) {
                    if (!this.View && parent) {
                        const itemElem = document.createElement(this.GetTagName());
                        itemElem.innerText = this.DisplayName;
                        parent.appendChild(itemElem);
                        this.View = itemElem;
                    }
                }
                Update() {
                    const view = this.View;
                    if (view) {
                        view.innerText = this.DisplayName;
                    }
                }
            };
            exports_1("Item", Item);
            Cell = class Cell extends Item {
                GetView() {
                    return this.View;
                }
                GetTagName() {
                    return "td";
                }
            };
            exports_1("Cell", Cell);
            Card = class Card extends Item {
                GetView() {
                    return this.View;
                }
                GetTagName() {
                    return "li";
                }
            };
            exports_1("Card", Card);
            Board = class Board {
                View;
                DisplayName;
                Cells;
                Create(parent) {
                    if (!this.View && parent) {
                        const table = document.createElement("table");
                        const caption = document.createElement("caption");
                        caption.innerText = this.DisplayName;
                        table.appendChild(caption);
                        parent.appendChild(table);
                        this.View = table;
                        const cells = this.Cells;
                        if (cells) {
                            for (let y = 0; y < cells.length; ++y) {
                                const row = cells[y];
                                if (row) {
                                    const tr = document.createElement("tr");
                                    table.appendChild(tr);
                                    for (let x = 0; x < row.length; ++x) {
                                        const cell = row[x];
                                        if (cell) {
                                            cell.Create(tr);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                Update() {
                    const view = this.View;
                    if (view) {
                        let caption = view.getElementsByTagName("caption")[0];
                        if (!caption) {
                            caption = document.createElement("caption");
                            view.appendChild(caption);
                        }
                        caption.innerText = this.DisplayName;
                        view.setAttribute("border", (Number.parseInt(view.getAttribute("border") ?? "0") + 1).toString());
                    }
                    const cells = this.Cells;
                    if (cells) {
                        for (let y = 0; y < cells.length; ++y) {
                            const row = cells[y];
                            if (row) {
                                for (let x = 0; x < row.length; ++x) {
                                    const cell = row[x];
                                    if (cell) {
                                        cell.Update();
                                    }
                                }
                            }
                        }
                    }
                }
            };
            exports_1("Board", Board);
            CardList = class CardList {
                View;
                DisplayName;
                Cards;
                Create(parent) {
                    if (!this.View && parent) {
                        const ul = document.createElement("ul");
                        const li = document.createElement("li");
                        li.innerHTML = `<b>${this.DisplayName}</b>`;
                        ul.appendChild(li);
                        parent.appendChild(ul);
                        this.View = ul;
                        const cards = this.Cards;
                        if (cards) {
                            for (let i = 0; i < cards.length; ++i) {
                                const card = cards[i];
                                if (card) {
                                    card.Create(ul);
                                }
                            }
                        }
                    }
                }
                Update() {
                    const view = this.View;
                    if (view) {
                        let li = view.getElementsByTagName("li")[0];
                        if (!li) {
                            li = document.createElement("li");
                            view.appendChild(li);
                        }
                        li.innerHTML = `<b>${this.DisplayName}</b>`;
                    }
                    const cards = this.Cards;
                    if (cards) {
                        for (let i = 0; i < cards.length; ++i) {
                            const card = cards[i];
                            if (card) {
                                card.Update();
                            }
                        }
                    }
                }
            };
            exports_1("CardList", CardList);
        }
    };
});
System.register("version", [], function (exports_2, context_2) {
    "use strict";
    var VersionInfo;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            exports_2("VersionInfo", VersionInfo = {
                "version": "0.0.0.0",
                "authors": [
                    {
                        "id": "Takym",
                        "name": "たかやま"
                    }
                ],
                "license": {
                    "url": "https://takym.github.io/docs/license.takym.html",
                    "text": "https://Takym.GITHUB.IO/ 利用規約"
                }
            });
        }
    };
});
System.register("common", ["version"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    function GetGameRoot() {
        return document.getElementById("game_root");
    }
    exports_3("GetGameRoot", GetGameRoot);
    return {
        setters: [
            function (version_1_1) {
                exports_3({
                    "VersionInfo": version_1_1["VersionInfo"]
                });
            }
        ],
        execute: function () {
        }
    };
});
System.register("board_and_cards/sample_module", [], function (exports_4, context_4) {
    "use strict";
    var sampleConstant;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            exports_4("sampleConstant", sampleConstant = "正常にモジュールを読み込めています。");
        }
    };
});
System.register("board_and_cards/index", ["common", "board_and_cards/sample_module", "board_and_cards/game_object"], function (exports_5, context_5) {
    "use strict";
    var common_1, sample_module_1, game_object_1;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (sample_module_1_1) {
                sample_module_1 = sample_module_1_1;
            },
            function (game_object_1_1) {
                game_object_1 = game_object_1_1;
            }
        ],
        execute: function () {
            (function () {
                window.addEventListener("load", function () {
                    const gameRoot = common_1.GetGameRoot();
                    if (gameRoot) {
                        gameRoot.innerText = "現在、準備中です。定数値：" + sample_module_1.sampleConstant;
                        const btnUpdate = document.createElement("button");
                        const board = game_object_1.InitializeBoard(8, 12);
                        const cardList = game_object_1.InitializeCardList(10);
                        btnUpdate.innerText = "更新";
                        btnUpdate.onclick = function () {
                            board.Update();
                            cardList.Update();
                        };
                        gameRoot.appendChild(btnUpdate);
                        board.Create(gameRoot);
                        cardList.Create(gameRoot);
                    }
                });
            })();
        }
    };
});
System.register("README", ["common"], function (exports_6, context_6) {
    "use strict";
    var Common;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (Common_1) {
                Common = Common_1;
            }
        ],
        execute: function () {
            (function () {
                function CreateVersionTable() {
                    const table = document.createElement("table");
                    table.setAttribute("border", "1");
                    const caption = document.createElement("caption");
                    caption.innerText = "バージョン情報";
                    table.appendChild(caption);
                    const thead = document.createElement("thead");
                    thead.innerHTML = "<tr><th colspan=\"2\">項目</th><th>値</th></tr>";
                    table.appendChild(thead);
                    const tbody = document.createElement("tbody");
                    function addRow(name_cat, name, value) {
                        const tr = document.createElement("tr");
                        if (name) {
                            tr.innerHTML = `<td>${name_cat}</td><td>${name}</td><td>${value}</td>`;
                        }
                        else {
                            tr.innerHTML = `<td colspan=\"2\">${name_cat}</td><td>${value}</td>`;
                        }
                        tbody.appendChild(tr);
                    }
                    addRow("バージョン番号", null, `<code>${Common.VersionInfo.version}</code>`);
                    const authors = Common.VersionInfo.authors;
                    for (let i = 0; i < authors.length; ++i) {
                        const author = authors[i];
                        addRow("開発者", `第<code>${i + 1}</code>号`, `<a href=\"https://github.com/${author.id}\">${author.name}</a>`);
                    }
                    const lic = Common.VersionInfo.license;
                    addRow("利用規約", null, `<a href=\"${lic.url}\">${lic.text}</a>`);
                    table.appendChild(tbody);
                    return table;
                }
                window.addEventListener("load", function () {
                    const gameRoot = Common.GetGameRoot();
                    if (gameRoot) {
                        gameRoot.appendChild(CreateVersionTable());
                    }
                });
            })();
        }
    };
});
//# sourceMappingURL=game.js.map