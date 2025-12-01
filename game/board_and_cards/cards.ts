
import * as Base from "./game_object_base"

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

export class CardList implements Base.IGameObject
{
	public View:        HTMLUListElement | undefined;
	public DisplayName: string           | undefined;
	public Cards:       Card[]           | undefined;

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

export class Card extends Base.Item
{
	public override GetView(): HTMLLIElement
	{
		return this.View as HTMLLIElement;
	}

	protected override GetTagName(): string
	{
		return "li";
	}

	protected override OnClick(elem: HTMLElement, pe: PointerEvent): void
	{
		const view = this.GetView();
		if (view === elem) {
			view.innerText = "CLICKED: " + JSON.stringify(pe);
		}
	}
}
