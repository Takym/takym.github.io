
import * as Common from "./common";

(function() {
	function CreateVersionTable()
	{
		const table = document.createElement("table");
		table.setAttribute("border", "1");

		const caption = document.createElement("caption");
		caption.innerText = "バージョン情報";
		table.appendChild(caption);

		const thead = document.createElement("thead");
		thead.innerHTML = "<tr><th colspan=\"2\">項目</th><th>値</th></tr>";
		table.appendChild(thead);

		const tbody = document.createElement("tbody");

		function addRow(name1: string, name2: string | null, value: string)
		{
			const tr = document.createElement("tr");

			if (name2) {
				tr.innerHTML = `<td>${name1}</td><td>${name2}</td><td>${value}</td>`;
			} else {
				tr.innerHTML = `<td colspan=\"2\">${name1}</td><td>${value}</td>`;
			}

			tbody.appendChild(tr);
		}

		addRow("バージョン番号", null, `<code>${Common.VersionInfo.version}</code>`);

		const authors = Common.VersionInfo.authors;
		for (let i = 0; i < authors.length; ++i) {
			const author = authors[i];
			addRow(
				"開発者",
				`第<code>${i + 1}</code>号`,
				`<a href=\"https://github.com/${author.id}\">${author.name}</a>`
			);
		}

		const lic = Common.VersionInfo.license;
		addRow("利用規約", null, `<a href=\"${lic.url}\">${lic.text}</a>`);

		table.appendChild(tbody);

		return table;
	}

	window.addEventListener("load", function() {
		const gameRoot = Common.GetGameRoot();
		if (gameRoot) {
			gameRoot.appendChild(CreateVersionTable());
		}
	});
})();
