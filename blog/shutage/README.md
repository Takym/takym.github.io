---
authors: Takym
category: shutage
---
# `shutage`: シュタゲ関連の情報
Copyright (C) 2020-2023 Takym.

## 目次
* [概要](#summary)
* [命名規則](#naming_convention)
* [SS作品の収集指針](#collection_guidelines)
* [charname.js の使い方](#charname)
* [キャラ名タグ一覧](#charname_tags)
* [このサイトの規約について](#terms)
* [貢献](#contribution)

## 概要 <a id="summary"></a>
* マルチメディア作品想定科学ADV「STEINS;GATE」(発売元：株式会社MAGES.)とその派生作品に関する情報を収集しています。
* 現在は更新が停滞しています。
* [ブログ記事一覧](./postlist.md)
* [ウィキ表示](https://takym.github.io/wiki/shutage)
* [ウィキ編集](https://github.com/Takym/shutage/wiki)

## 命名規則 <a id="naming_convention"></a>
* `_posts/shutage` ディレクトリ内のファイルは以下の様に命名する。
* 2/5chまとめのSS作品の場合：
	* `yyyy-mm-dd-ssxxxx`
		* `yyyy`は年、`mm`は月、`dd`は日を表す。
		* `ss`の後ろには四桁の連番を付与する。
		* 日付は最初の投稿とする。
	* `SS作品`タグを付与する。
	* 投稿者はこのリポジトリ内の記事の作成者を表し、SS作品の作者は記入しない。
		* 投稿者は GitHub ID を記入する。
		* 作者を記入する場合は、投稿者としてではなくページ内に記入する。
* このリポジトリのオリジナル作品の場合：
	* `yyyy-mm-dd-myssxxxx`
		* `yyyy`は年、`mm`は月、`dd`は日を表す。
		* `myss`の後ろには四桁の連番を付与する。
	* `SS作品`タグを付与する。
	* `自作`タグを付与する。
	* 投稿者はこのリポジトリ内の記事の作成者を表すが、オリジナル作品の場合はSS作品の作者も表す。
		* ただし、記事ページの全ての編集者の GitHub ID も記入する。

## SS作品の収集指針 <a id="collection_guidelines"></a>
* この指針(方針、規則)は絶対に厳守しなければならないものではない。
	* できる限りこの指針は守るべきではある。
* 作品名がキャラの台詞である事。(タグ付けに利用される為)
	* 鍵括弧より外側の名前をタグにする。
	* 例：`岡部「フゥーハッハッハ！！！」`
* 科学ADVを除き他作品が含まれない事。
	* ただし現実の有名人は含む。(現実の有名人は作品の人物ではない為)
* 例外：
	* [岡部倫太郎 12.14 HAPPY BIRTHDAY](https://takym.github.io/blog/shutage/2017/12/14/ss0000.html)
		* 公式作品である。
	* [『逆転のタイムマシン』](https://takym.github.io/blog/shutage/2017/05/20/ss0001.html)
	* [シュタゲで安価SS](https://takym.github.io/blog/shutage/2016/01/23/ss0000.html)
	* [Steins;Gate「二律背反のライデマイスター」](https://takym.github.io/blog/shutage/2015/09/27/ss0000.html)
		* 鍵括弧前に `Steins;Gate` とあるが、これは台詞とは見做されない。
	* [亡命者 ∞ 牧瀬章一【シュタゲSS】](https://takym.github.io/blog/shutage/2015/10/11/ss0000.html)
		* 台詞ではないが、牧瀬章一(その他キャラ)をタグ付けのキャラとしている。
	* [【シュタゲSS】ラボに帰ると紅莉栖が真っ赤だった](https://takym.github.io/blog/shutage/2015/08/06/ss0000.html)
		* 台詞ではないが、紅莉栖をタグ付けのキャラとしている。
	* [幻影のチェシャ猫](https://takym.github.io/blog/shutage/2015/02/28/ss0000.html)
		* 台詞ではないが、ﾌｪｲﾘｽをタグ付けのキャラとしている。
* 特殊な例：
	* [キムタク「ちょっと、待てよ」](https://takym.github.io/blog/shutage/2016/01/19/ss0000.html)
		* 作品名がキャラの台詞であり、且つ有名人が登場するが他作品は含まれないので、例外ではない。

## charname.js の使い方 <a id="charname"></a>
* キャラの名前の先頭に `#` または `^` を付けて太字にする。
* `#` は除去されないが、`^` は除去される。
* 例：
	* Markdown ソースコード
		>```md
		>* **#岡部**「フゥーハッハッハ！！！」
		>* **^岡部**「フゥーハッハッハ！！！」
		>```
	* 表示例
		* **#岡部**「フゥーハッハッハ！！！」
		* **^岡部**「フゥーハッハッハ！！！」
* 利用できるキャラの名前と色付けは下記のページを参照。
	* [最新の charname.html](https://takym.github.io/blog/shutage/charname.html)
	* [過去の charname.html](https://takym.github.io/blog/shutage/postable.html#charname.html)
	* [charname.html 生成器](./gen_charname.md)

## キャラ名タグ一覧 <a id="charname_tags"></a>
* **^岡部倫太郎**                - [岡部](https://takym.github.io/blog/shutage/postable.html#岡部)
* **^椎名まゆり**                - [まゆり](https://takym.github.io/blog/shutage/postable.html#まゆり)
* **^橋田至**                    - [ダル](https://takym.github.io/blog/shutage/postable.html#ダル)
* **^牧瀬紅莉栖**                - [紅莉栖](https://takym.github.io/blog/shutage/postable.html#紅莉栖)
* **^桐生萌郁**                  - [桐生萌郁](https://takym.github.io/blog/shutage/postable.html#桐生萌郁)
* **^漆原るか**                  - [ルカ子](https://takym.github.io/blog/shutage/postable.html#ルカ子)
* **^秋葉留未穂**                - [ﾌｪｲﾘｽ](https://takym.github.io/blog/shutage/postable.html#ﾌｪｲﾘｽ)
* **^阿万音鈴羽**/**^橋田鈴羽**  - [鈴羽](https://takym.github.io/blog/shutage/postable.html#鈴羽)
* **^比屋定真帆**                - [真帆](https://takym.github.io/blog/shutage/postable.html#真帆)
* **^椎名かがり**                - [かがり](https://takym.github.io/blog/shutage/postable.html#かがり)
* **^阿万音由季**                - [由季](https://takym.github.io/blog/shutage/postable.html#由季)
* **^天王寺裕吾**                - [天王寺](https://takym.github.io/blog/shutage/postable.html#天王寺)
* **^天王寺綯**                  - [綯](https://takym.github.io/blog/shutage/postable.html#綯)
* **^アレクシス・レスキネン**    - [ﾚｽｷﾈﾝ](https://takym.github.io/blog/shutage/postable.html#ﾚｽｷﾈﾝ)
* **上記以外**                   - [その他キャラ](https://takym.github.io/blog/shutage/postable.html#その他キャラ)

## このサイトの規約について <a id="terms"></a>
* ソフトウェアではありませんがMITライセンスとします。
* 詳細は[こちらのページ](../../docs/license.mit.md)をご覧ください。
* 利用ソフトウェア一覧は[こちらのページ](../../THIRD_PARTY_NOTICE.html)をご覧ください。

## 貢献 <a id="contribution"></a>
* 問題やプルリクエストは [`Takym/takym.github.io`](https://github.com/Takym/takym.github.io) へ投稿してください。
* [`Takym/shutage`](https://github.com/Takym/shutage) は廃止されました。
