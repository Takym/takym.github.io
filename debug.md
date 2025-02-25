---
category: debug
---
# デバッグ用ページ

* [テスト記事](./blog/debug/1900/01/01/test.html)

## コードブロック
```cs
using System;

namespace Example
{
	internal static class Program
	{
		[STAThread()]
		private static int Main(string[] args)
		{
			Console.WriteLine("Hello, World!!");
			return 0;
		}
	}
}
```
```md
# Markdown

* **Item `1`**
* **Item `2`**
```

## 数式
$$y = mx + b$$
$$f'(x) = \frac{dy}{dx} = \lim_{\varDelta x \to 0}\frac{f(x + \varDelta x) - f(x)}{\varDelta x}$$

<details>
	<summary>タグ一覧</summary>
	{% if site.tags %}
	<ul>
		{% for tag in site.tags %}
		<li>{{ tag[0] }}</li>
		{% endfor %}
	</ul>
{% endif %}
</details>

<details>
	<summary>改行</summary>
	<br /><br /><br /><br /><br /><br /><br /><br />
	<br /><br /><br /><br /><br /><br /><br /><br />
	<br /><br /><br /><br /><br /><br /><br /><br />
	<br /><br /><br /><br /><br /><br /><br /><br />
	<br /><br /><br /><br /><br /><br /><br /><br />
	<br /><br /><br /><br /><br /><br /><br /><br />
	<br /><br /><br /><br /><br /><br /><br /><br />
	<br /><br /><br /><br /><br /><br /><br /><br />
	<br /><br /><br /><br /><br /><br /><br /><br />
	<br /><br /><br /><br /><br /><br /><br /><br />
	<br /><br /><br /><br /><br /><br /><br /><br />
	<br /><br /><br /><br /><br /><br /><br /><br />
	<br /><br /><br /><br /><br /><br /><br /><br />
	<br /><br /><br /><br /><br /><br /><br /><br />
	<br /><br /><br /><br /><br /><br /><br /><br />
	<br /><br /><br /><br /><br /><br /><br /><br />
</details>
