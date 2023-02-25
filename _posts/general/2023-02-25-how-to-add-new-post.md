---
layout: post
title: 記事の追加方法【2023年02月版】
authors: Takym
tags:
  - Article
  - HowTo
  - Sample
  - Test
  - テスト
category: general
---
[この記事](../../../2019/08/15/how-to-add-new-post.html)の情報が古くなったため書き直しました。

## 記事の追加方法
1. `_posts/general` ディレクトリに Markdown ファイルを作成します。
	* ファイル名の書式は `yyyy-mm-dd-title.md` です。
	* `yyyy` は四桁の西暦、`mm` は二桁の月、`dd` は二桁の日です。
	* `title` は半角英数字の任意の名前です。
2. ファイルの先頭に下記の記述を加えてください。「編集者」は GitHub の ID を指定してください。
```yml
---
layout: post
title: 記事の題名
authors:
  - 編集者1
  - 編集者2
  - 編集者3
tags:
  - タグ1
  - タグ2
  - タグ3
category: general
---
```

## syswiki とは？
<https://takym.github.io> の為に開発したシステムの名前です。
元々は別のウィキの名前だったのですが、それを本サイトに流用しました。
現在は公開されていません。<https://github.com/Takym/syswiki> には接続できない様になっている筈です。
所で、`syswiki` という文字列は、現段階ではこの記事にしか使われていません。
