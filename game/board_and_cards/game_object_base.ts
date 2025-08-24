
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
