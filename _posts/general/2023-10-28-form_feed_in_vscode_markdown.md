---
layout: post
title: "何故か VSCode の Markdown のプレビュー機能では書式送りが上矢印になる。"
authors: Takym
tags: "未指定"
category: general
---

<b><i><u>不思議な文字化け</u></i></b>

## ソースコード
```md
&gt;&#x0C;&#12;

\>&#x0C;&#12;

A&#x0C;&#12;

b
&#x0C;

&#12;
```

## 表示例
&gt;&#x0C;&#12;

\>&#x0C;&#12;

A&#x0C;&#12;

b
&#x0C;

&#12;

## 注意など
* 通常の文字（Markdown の特殊文字ではない文字）が先頭にある時だけ上矢印が表示される。
* 同様の内容の HTML ファイルを作成し、Microsoft Edge、Google Chrome、Avast Secure Browser で開いても再現された。
	* Internet Explorer では再現されなかった。
* Chromium の不具合なのだろうか。仕様なのだろうか。
* **追記**：バイナリエディタで「0C」と入力してから、メモ帳で開いても上矢印が表示された。
