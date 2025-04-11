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
System.register("game_object", [], function (exports_2, context_2) {
    "use strict";
    var Item, Cell, Card, Board, CardList;
    var __moduleName = context_2 && context_2.id;
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
    exports_2("InitializeBoard", InitializeBoard);
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
    exports_2("InitializeCardList", InitializeCardList);
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
            exports_2("Item", Item);
            Cell = class Cell extends Item {
                GetView() {
                    return this.View;
                }
                GetTagName() {
                    return "td";
                }
            };
            exports_2("Cell", Cell);
            Card = class Card extends Item {
                GetView() {
                    return this.View;
                }
                GetTagName() {
                    return "li";
                }
            };
            exports_2("Card", Card);
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
            exports_2("Board", Board);
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
            exports_2("CardList", CardList);
        }
    };
});
System.register("board_and_cards", ["sample_module", "game_object"], function (exports_3, context_3) {
    "use strict";
    var sample_module_1, game_object_1;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
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
                    const gameRoot = document.getElementById("game_root");
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
//# sourceMappingURL=game.board_and_cards.js.map