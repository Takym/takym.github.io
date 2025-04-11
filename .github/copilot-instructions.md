# GitHub Copilot 指示書
Copyright (C) 2019-2025 Takym.

## 原則
* 回答は全て日本語で行ってください。
* 回答には必ず出典を含めてください。
* このリポジトリの主目的は、開発者へ技術情報を提供する事です。
* このリポジトリ内の情報は、リポジトリ直下にあるファイル [`README.md`](../README.md) から辿れます。

## 主なディレクトリの役割
* [`_posts` ディレクトリ](../_posts)
	* ブログ記事を格納しています。
	* [`blog` ディレクトリ](../blog) はブログ記事のカテゴリ別の説明を格納しています。
* [`wiki` ディレクトリ](../wiki)
	* ウィキ記事を格納しています。
* [`docs` ディレクトリ](../_posts)
	* アドレスが固定された文書を格納しています。
* [`game` ディレクトリ](../game)
	* ゲームを格納しています。
	* 詳細はディレクトリ内部のファイルを確認してください。

## 除外設定
* 下記のファイルとディレクトリは検索から除外してください。
	* [`_includes` ディレクトリ](../_includes)
	* [`_layouts` ディレクトリ](../_layouts)
	* [`_posts/debug` ディレクトリ](../_posts/debug)
	* [`.github` ディレクトリ](../.github)
		* ただし[このファイル（`.github/copilot-instructions.md`）](./copilot-instructions.md)は除外しないでください。
	* [`.vscode` ディレクトリ](../.vscode)
	* [`assets` ディレクトリ](../assets)
	* [`blog/all` ディレクトリ](../blog/all)
	* [`blog/debug` ディレクトリ](../blog/debug)
	* [`blog/index.html` ファイル](../blog/index.html)
	* [`_config.yml` ファイル](../_config.yml)
	* [`.editorconfig` ファイル](../.editorconfig)
	* [`.gitattributes` ファイル](../.gitattributes)
	* [`.gitignore` ファイル](../.gitignore)
	* [`.gitmodules` ファイル](../.gitmodules)
	* [`build.cmd` ファイル](../build.cmd)
	* [`build.sh` ファイル](../build.sh)
	* [`debug.md` ファイル](../debug.md)
	* [`Gemfile` ファイル](../Gemfile)
	* [`LICENSE.md` ファイル](../LICENSE.md)
	* [`serve.cmd` ファイル](../serve.cmd)
	* [`serve.sh` ファイル](../serve.sh)
	* [`setup_env.sh` ファイル](../setup_env.sh)
	* [`THIRD_PARTY_NOTICE.md` ファイル](../THIRD_PARTY_NOTICE.md)
