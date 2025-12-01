
export interface IGameObject
{
	View:        HTMLElement | undefined;
	DisplayName: string      | undefined;

	Create(parent: HTMLElement): void;
	Update(                   ): void;
}

export abstract class Item implements IGameObject
{
	public View:        HTMLElement | undefined;
	public DisplayName: string      | undefined;

	public    abstract GetView   (                                   ): HTMLElement;
	protected abstract GetTagName(                                   ): string;
	protected abstract OnClick   (elem: HTMLElement, pe: PointerEvent): void;

	public Create(parent: HTMLElement): void
	{
		if (!this.View && parent) {
			const itemElem = document.createElement(this.GetTagName());
			itemElem.innerText = this.DisplayName ?? "";

			const onclick = this.OnClick.bind(this);
			itemElem.addEventListener("click", function(pe) {
				onclick(this, pe);
			});

			parent.appendChild(itemElem);

			this.View = itemElem;
		}
	}

	public Update(): void
	{
		const view = this.View;
		if (view) {
			view.innerText = this.DisplayName ?? "";
		}
	}
}
