
export function InitializeBoard(width: number, height: number): Board
{
	const cells: Cell[][] = Array(height);
	for (let y = 0; y < height; ++y) {
		const row: Cell[] = Array(width);
		for (let x = 0; x < width; ++x) {
			const cell = new Cell();
			cell.DisplayName = `(${x}, ${y})`;
			row[x] = cell;
		}
		cells[y] = row;
	}

	const board = new Board();
	board.DisplayName = `${width} x ${height}`;
	board.Cells       = cells;

	return board;
}

export function InitializeCardList(count: number): CardList
{
	const cards: Card[] = Array(count);
	for (let i = 0; i < count; ++i) {
		const card = new Card();
		card.DisplayName = `#${i}`;
		cards[i] = card;
	}

	const cardList = new CardList();
	cardList.DisplayName = `Count: ${count}`;
	cardList.Cards       = cards;

	return cardList;
}

export interface IGameObject
{
	View:        HTMLElement;
	DisplayName: string;

	Create(parent: HTMLElement): void;
	Update(                   ): void;
}

export abstract class Item implements IGameObject
{
	public View:        HTMLElement;
	public DisplayName: string;

	public    abstract GetView():    HTMLElement;
	protected abstract GetTagName(): string;

	public Create(parent: HTMLElement): void
	{
		if (!this.View && parent) {
			const itemElem = document.createElement(this.GetTagName());
			itemElem.innerText = this.DisplayName;

			parent.appendChild(itemElem);

			this.View = itemElem;
		}
	}

	public Update(): void
	{
		const view = this.View;
		if (view) {
			view.innerText = this.DisplayName;
		}
	}
}

export class Cell extends Item
{
	public override GetView(): HTMLTableCellElement
	{
		return this.View as HTMLTableCellElement;
	}

	protected override GetTagName(): string
	{
		return "td";
	}
}

export class Card extends Item
{
	public override GetView(): HTMLLIElement
	{
		return this.View as HTMLLIElement;
	}

	protected override GetTagName(): string
	{
		return "li";
	}
}

export class Board implements IGameObject
{
	public View:        HTMLTableElement;
	public DisplayName: string;
	public Cells:       Cell[][];

	public Create(parent: HTMLElement): void
	{
		if (!this.View && parent) {
			const table   = document.createElement("table");
			const caption = document.createElement("caption");

			caption.innerText = this.DisplayName;

			table .appendChild(caption);
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

	public Update(): void
	{
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
}

export class CardList implements IGameObject
{
	public View:        HTMLUListElement;
	public DisplayName: string;
	public Cards:       Card[];

	public Create(parent: HTMLElement): void
	{
		if (!this.View && parent) {
			const ul = document.createElement("ul");
			const li = document.createElement("li");

			li.innerHTML = `<b>${this.DisplayName}</b>`;

			ul    .appendChild(li);
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

	public Update(): void
	{
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
}
