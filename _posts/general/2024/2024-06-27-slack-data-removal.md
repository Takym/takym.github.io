---
layout: post
title: Slack のデータ削除の新方針に関する意見
authors: Takym
tags:
  - 声明記事
  - Slack
category: general
---
Copyright (C) 2024 Takym.

## 概要
セールスフォース傘下の Slack Technologies 社は無料の Slack ワークスペースで投稿してから一年以上経過したメッセージとファイルを順次削除していく事を[発表](https://slack.com/intl/ja-jp/help/articles/29414264463635)しました。また、[窓の杜](https://forest.watch.impress.co.jp/docs/news/1603168.html)や[技術評論社](https://gihyo.jp/article/2024/06/slack-free-plan-limitation)でも報道されています。本記事ではメッセージとファイルを合わせてデータと表記します。データの削除は 2024 年 08 月 26 日から行われるそうです。ただし、時差を考慮して 2024 年 08 月 25 日から削除が始まると考えた方が良さそうです。データを保持するには、削除が始まる前までに有料版への移行が必要になります。現状でも既に過去 90 日間を超えるデータを閲覧するには、有料版への変更が必要となっています。筆者にもこの方針の変更に関する通知のメールが届きました。著作権を尊重し、メールのコピーをこの記事には付けません。この記事では、Slack のこの方針に対して筆者の意見を述べます。

## 削除方針の通知に関して
この新方針の通知メールは実際に削除が始まる日の約二ヶ月前に行われました。筆者は削除開始日までの猶予期間が短く感じます。データ保持の対策を練ったり、その為の活動を行ったりするには、時間が短いです。有料版への移行は簡単にはできないので、その為の充分な期間がもう少し欲しいです。猶予期間の延長が難しいのであれば、無料版でも一時的に全データのエクスポート機能を開放する事もできるのではないでしょうか。データを継続して残したい利用者を有料版へ誘導したいというのも分かりますが、データの保持方法に関する選択肢が少ないと思います。また、この新方針が決定されるに至った背景や根拠などの情報が殆ど説明されていません。詳しい説明があれば新方針を否定的に捉えなかったかもしれません。新方針の通知は拙速的に行われ、説明が足りなかったと思います。

## データ削除そのもの関する意見
データの保持は権利の一つだと思います。確かに、物理的なストレージの容量は無限ではありませんし、権利維持の為に資金を支払うのは必要な事ですが、一方で、既存の利用者は急に選択肢が奪われたと感じるかもしれません。筆者もその一人です。例えば、既存のワークスペースと新規のワークスペースで対応を別けて、新規のワークスペースのみに削除方針を適用する事もできるかもしれません。

データが削除される事により、Slack 利用者や利用組織の歴史が失われる事になります。将来において過去の会話ログや変化の流れが確認できなくなってしまう事は大きな損失だと思います。

Slack の利便性の一部が失われ、利用者の一部が他のサービスへ流出してしまうのではないでしょうか。利用者数が減少する事で、それに引っ張られて投資も減少し、更にそれに呼応して Slack の新機能開発まで減ってしまうのではないでしょうか。確かに影響を大袈裟に考えていますが、絶対にないとも言い切れません。筆者は、大勢の利用者が他のサービスへ移ると、開発力も分散して小規模なチャットツールが乱立してしまうと予想しています。小規模なチャットツールが乱立すると、高機能且つ高性能な大規模なチャットツールが確立し難くなると思われます。確かに、公正な競争は必要ですし、今まで培われた Slack Technologies 社が今まで培ってきた技術はそれ自体が失われる事はありません。消費者にとってチャットツールの選択肢が増えるのは有益な事かもしれませんが、しかし他方で、信頼できない小さな会社によるサービスを受けるよりも、Slack Technologies 社の様に大きく信頼の置ける素晴らしい会社からサービスを受ける方が、多くの消費者にとってもっと喜ばしいのではないでしょうか。

## 追記（2024 年 08 月 20 日）

### 訂正
> 猶予期間の延長が難しいのであれば、無料版でも一時的に全データのエクスポート機能を開放する事もできるのではないでしょうか。

実際にエクスポートしたアーカイブファイルには、非公開になったパブリックチャンネルの全メッセージ履歴が含まれていました。
記事の記述に誤解を招く表現があった事にお詫びして訂正致します。
しかし、依然としてプライベートチャンネルやダイレクトメッセージは含まれていませんでした。
また、ファイルはリンクのみとなっており、削除する前に手動でダウンロードする必要があります。
データ削除措置を実施する前に、一時的な救済措置として、完全なデータのエクスポート機能を提供して欲しいと今でも感じております。

### バックアップツール
Slack からエクスポートして得られるアーカイブファイルに含まれる JSON ファイルを解析して、ファイルをダウンロードできるツールを開発しました。
同じ問題に悩まされている方がいらっしゃいましたら、拙作な出来ですが是非使ってみてください。

* **ダウンロード**：<https://github.com/Takym/Gradexor/releases/tag/JsonUrlSaver-v0.2.0.0>
* **動作報告など**：<https://github.com/Takym/Gradexor/discussions/7>
* **最新のソースコード**：<https://github.com/Takym/Gradexor/tree/master/JsonUrlSaver>
