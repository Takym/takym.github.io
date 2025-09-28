
import * as Base from "./game_object_base"

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

export class Board implements Base.IGameObject
{
	public View:        HTMLTableElement | undefined;
	public DisplayName: string           | undefined;
	public Cells:       Cell[][]         | undefined;

	public Create(parent: HTMLElement): void
	{
		if (!this.View && parent) {
			const table   = document.createElement("table");
			const caption = document.createElement("caption");

			caption.innerText = this.DisplayName ?? "";

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
			caption.innerText = this.DisplayName ?? "";
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

export class Cell extends Base.Item
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
