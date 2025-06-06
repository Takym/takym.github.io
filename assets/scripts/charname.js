/*
	タグとキャラの名前の色指定
	末尾の「M」は母親、「F」は父親を意味する。
	「XXXXXXXX」は未指定である事を表す。
	このファイルで登録しなかった場合の色は、
	スタイルシートの設定によって不安定になる。
	このファイルは JSON ではなく JavaScript である。
*/
const XXXXXXXX    = "444444"; // 未指定
const valid       = "000000"; // 有効
const invalid     = "808080"; // 無効
const sobityezjyo = "4ED158"; // 措備手著語
const lenofodu    = "7B4B9D"; // レノフォドゥ語
const okabe       = "884444"; // 岡部
const mayuri      = "6677EE"; // まゆり
const daru        = "BBCC22"; // ダル
const tina        = "F53333"; // 紅莉栖
const moeka       = "EAA522"; // 桐生萌郁
const ruka        = "336666"; // ルカ子
const faris       = "FF0080"; // ﾌｪｲﾘｽ
const suzu        = "1111BB"; // 鈴羽
const maho        = "446633"; // 真帆
const kagari      = "AA2266"; // かがり
const yuki        = "8F65FF"; // 由季
const brown       = "989800"; // 天王寺
const nae         = "FF44CC"; // 綯
const leskinen    = "AA7766"; // ﾚｽｷﾈﾝ
const okabeM      = XXXXXXXX; // 岡部母、朱美
const tinaF       = XXXXXXXX; // 紅莉栖父、中鉢
const rukaF       = XXXXXXXX; // ルカ子父、栄輔
const farisM      = XXXXXXXX; // ﾌｪｲﾘｽ母、ちかね
const farisF      = XXXXXXXX; // ﾌｪｲﾘｽ父、幸高
const kuroki      = XXXXXXXX; // 黒木
const naeM        = XXXXXXXX; // 綯母、今宮綴
const fubuki      = XXXXXXXX; // フブキ
const shin        = XXXXXXXX; // フブキ兄、ｼﾝｲﾁ
const kaede       = XXXXXXXX; // カエデ
const reyes       = XXXXXXXX; // レイエス
const yondoshi    = XXXXXXXX; // 4℃
const izaki       = XXXXXXXX; // 井崎
const kayano      = XXXXXXXX; // 伽夜乃

// 実際のタグ名と色識別子の関連付け
const charnames = [
	////////////////////////////////
	// シュタゲのキャラ名に色付け //
	////////////////////////////////
	{ "name": "岡部倫太郎",                         "color": okabe    }, // 岡部
	{ "name": "岡部",                               "color": okabe    },
	{ "name": "倫太郎",                             "color": okabe    },
	{ "name": "鳳凰院凶真",                         "color": okabe    },
	{ "name": "鳳凰院",                             "color": okabe    },
	{ "name": "凶真",                               "color": okabe    },
	{ "name": "鳳凰院クロト",                       "color": okabe    },
	{ "name": "クロト",                             "color": okabe    },
	{ "name": "未来岡部",                           "color": okabe    },
	{ "name": "現在岡部",                           "color": okabe    },
	{ "name": "過去岡部",                           "color": okabe    },
	{ "name": "岡部Ω",                             "color": okabe    },
	{ "name": "岡部α",                             "color": okabe    },
	{ "name": "岡部SG",                             "color": okabe    },
	{ "name": "岡部β",                             "color": okabe    },
	{ "name": "岡部γ",                             "color": okabe    },
	{ "name": "岡部δ",                             "color": okabe    },
	{ "name": "岡部ε",                             "color": okabe    },
	{ "name": "岡部絶倫太郎",                       "color": okabe    },
	{ "name": "絶倫太郎",                           "color": okabe    },
	{ "name": "オカリン",                           "color": okabe    },
	{ "name": "オカリンおじさん",                   "color": okabe    },
	{ "name": "オカリンパパ",                       "color": okabe    },
	{ "name": "執念オカリン",                       "color": okabe    },
	{ "name": "絶倫オカリン",                       "color": okabe    },
	{ "name": "ゼツリン",                           "color": okabe    },
	{ "name": "オカリン・ニャンニャン",             "color": okabe    },
	{ "name": "キョーマ",                           "color": okabe    },
	{ "name": "リンターロ",                         "color": okabe    },
	{ "name": "M3",                                 "color": okabe    },
	{ "name": "岡部倫子",                           "color": okabe    },
	{ "name": "倫子",                               "color": okabe    },
	{ "name": "椎名まゆり",                         "color": mayuri   }, // まゆり
	{ "name": "椎名",                               "color": mayuri   },
	{ "name": "まゆり",                             "color": mayuri   },
	{ "name": "まゆしぃ",                           "color": mayuri   },
	{ "name": "マユシィ",                           "color": mayuri   },
	{ "name": "マユシィ・ニャンニャン",             "color": mayuri   },
	{ "name": "まちょり",                           "color": mayuri   },
	{ "name": "まちょしぃ",                         "color": mayuri   },
	{ "name": "まっちょしぃ",                       "color": mayuri   },
	{ "name": "マッチョシィ",                       "color": mayuri   },
	{ "name": "マッチョシィ・ニャンニャン",         "color": mayuri   },
	{ "name": "まゆ氏",                             "color": mayuri   },
	{ "name": "まゆりお姉ちゃん",                   "color": mayuri   },
	{ "name": "まゆりお姉さん",                     "color": mayuri   },
	{ "name": "まゆ姉さん",                         "color": mayuri   },
	{ "name": "まゆりママ",                         "color": mayuri   },
	{ "name": "かがり母",                           "color": mayuri   },
	{ "name": "橋田至",                             "color": daru     }, // ダル
	{ "name": "橋田",                               "color": daru     },
	{ "name": "至",                                 "color": daru     },
	{ "name": "いたる",                             "color": daru     },
	{ "name": "ダル",                               "color": daru     },
	{ "name": "ダル子",                             "color": daru     },
	{ "name": "ダルくん",                           "color": daru     },
	{ "name": "ダルおじさん",                       "color": daru     },
	{ "name": "ダルニャン",                         "color": daru     },
	{ "name": "ダルシィ・ニャン",                   "color": daru     },
	{ "name": "DaSH",                               "color": daru     },
	{ "name": "ダル・ザ・スーパーハッカー",         "color": daru     },
	{ "name": "バレル・タイター",                   "color": daru     },
	{ "name": "バレル",                             "color": daru     },
	{ "name": "スーパーハッカー",                   "color": daru     },
	{ "name": "スーパーハカー",                     "color": daru     },
	{ "name": "頼れる右腕",                         "color": daru     },
	{ "name": "マイ・フェイバリット・ライトアーム", "color": daru     },
	{ "name": "鈴羽父",                             "color": daru     },
	{ "name": "牧瀬紅莉栖",                         "color": tina     }, // 紅莉栖
	{ "name": "牧瀬",                               "color": tina     },
	{ "name": "紅莉栖",                             "color": tina     },
	{ "name": "クリス",                             "color": tina     },
	{ "name": "助手",                               "color": tina     },
	{ "name": "助手1号",                            "color": tina     },
	{ "name": "助手１号",                           "color": tina     },
	{ "name": "助手一号",                           "color": tina     },
	{ "name": "助手壱号",                           "color": tina     },
	{ "name": "腐助手",                             "color": tina     },
	{ "name": "クリスティーナ",                     "color": tina     },
	{ "name": "クリ腐ティーナ",                     "color": tina     },
	{ "name": "クリ腐",                             "color": tina     },
	{ "name": "ティーナ",                           "color": tina     },
	{ "name": "セレセブ",                           "color": tina     },
	{ "name": "セレブ・セブンティーン",             "color": tina     },
	{ "name": "くまぱん",                           "color": tina     },
	{ "name": "蘇りし者",                           "color": tina     },
	{ "name": "腐りし者",                           "color": tina     },
	{ "name": "ザ・ゾンビ",                         "color": tina     },
	{ "name": "実験大好きっ子",                     "color": tina     },
	{ "name": "実験大好きっ娘",                     "color": tina     },
	{ "name": "スイーツ（笑）",                     "color": tina     },
	{ "name": "スイーツ(笑)",                       "color": tina     },
	{ "name": "スイーツ（）",                       "color": tina     },
	{ "name": "スイーツ()",                         "color": tina     },
	{ "name": "＠ちゃんねらークリス",               "color": tina     },
	{ "name": "@ちゃんねらークリス",                "color": tina     },
	{ "name": "栗悟飯とカメハメ波",                 "color": tina     },
	{ "name": "栗御飯とカメハメ波",                 "color": tina     },
	{ "name": "栗ご飯とカメハメ波",                 "color": tina     },
	{ "name": "栗悟飯",                             "color": tina     },
	{ "name": "栗御飯",                             "color": tina     },
	{ "name": "栗ご飯",                             "color": tina     },
	{ "name": "ツンツン小生意気ヘルパー",           "color": tina     },
	{ "name": "ヴァージン・エクストラ諸島",         "color": tina     },
	{ "name": "天才変態少女",                       "color": tina     },
	{ "name": "天才変態処女",                       "color": tina     },
	{ "name": "天才HENTAI少女",                     "color": tina     },
	{ "name": "天才HENTAI処女",                     "color": tina     },
	{ "name": "変態天才少女",                       "color": tina     },
	{ "name": "変態天才処女",                       "color": tina     },
	{ "name": "HENTAI天才少女",                     "color": tina     },
	{ "name": "HENTAI天才処女",                     "color": tina     },
	{ "name": "実験大好き天才変態少女",             "color": tina     },
	{ "name": "実験大好き天才変態処女",             "color": tina     },
	{ "name": "実験大好き天才HENTAI少女",           "color": tina     },
	{ "name": "実験大好き天才HENTAI処女",           "color": tina     },
	{ "name": "実験大好き変態天才少女",             "color": tina     },
	{ "name": "実験大好き変態天才処女",             "color": tina     },
	{ "name": "実験大好きHENTAI天才少女",           "color": tina     },
	{ "name": "実験大好きHENTAI天才処女",           "color": tina     },
	{ "name": "冷血放蕩天才変態少女",               "color": tina     },
	{ "name": "冷血放蕩天才変態処女",               "color": tina     },
	{ "name": "冷血放蕩天才HENTAI少女",             "color": tina     },
	{ "name": "冷血放蕩天才HENTAI処女",             "color": tina     },
	{ "name": "冷血放蕩変態天才少女",               "color": tina     },
	{ "name": "冷血放蕩変態天才処女",               "color": tina     },
	{ "name": "冷血放蕩HENTAI天才少女",             "color": tina     },
	{ "name": "冷血放蕩HENTAI天才処女",             "color": tina     },
	{ "name": "実験大好き冷血放蕩天才変態少女",     "color": tina     },
	{ "name": "実験大好き冷血放蕩天才変態処女",     "color": tina     },
	{ "name": "実験大好き冷血放蕩天才HENTAI少女",   "color": tina     },
	{ "name": "実験大好き冷血放蕩天才HENTAI処女",   "color": tina     },
	{ "name": "実験大好き冷血放蕩変態天才少女",     "color": tina     },
	{ "name": "実験大好き冷血放蕩変態天才処女",     "color": tina     },
	{ "name": "実験大好き冷血放蕩HENTAI天才少女",   "color": tina     },
	{ "name": "実験大好き冷血放蕩HENTAI天才処女",   "color": tina     },
	{ "name": "メリケン処女",                       "color": tina     },
	{ "name": "臀部に蒙古斑女",                     "color": tina     },
	{ "name": "牧瀬プリン",                         "color": tina     },
	{ "name": "Amadeus紅莉栖",                      "color": tina     },
	{ "name": "Ama紅莉栖",                          "color": tina     },
	{ "name": "甘紅莉",                             "color": tina     },
	{ "name": "甘栗",                               "color": tina     },
	{ "name": "クーニャン",                         "color": tina     },
	{ "name": "クリスティーニャン",                 "color": tina     },
	{ "name": "クリスティーニャンニャン",           "color": tina     },
	{ "name": "クリス・ニャンニャン",               "color": tina     },
	{ "name": "セレセブ・ニャンニャン",             "color": tina     },
	{ "name": "助手のお姉ちゃん",                   "color": tina     },
	{ "name": "クリスお姉ちゃん",                   "color": tina     },
	{ "name": "助手のお姉さん",                     "color": tina     },
	{ "name": "クリスお姉さん",                     "color": tina     },
	{ "name": "紅莉栖おばさん",                     "color": tina     },
	{ "name": "牧瀬氏",                             "color": tina     },
	{ "name": "紅莉栖ちゃん",                       "color": tina     },
	{ "name": "クリスちゃん",                       "color": tina     },
	{ "name": "クリスたん",                         "color": tina     },
	{ "name": "クリスマス",                         "color": tina     },
	{ "name": "マックリス",                         "color": tina     },
	{ "name": "桐生萌郁",                           "color": moeka    }, // 桐生萌郁
	{ "name": "桐生",                               "color": moeka    },
	{ "name": "萌郁",                               "color": moeka    },
	{ "name": "閃光の指圧師",                       "color": moeka    },
	{ "name": "シャイニング・フィンガー",           "color": moeka    },
	{ "name": "指圧師",                             "color": moeka    },
	{ "name": "M4",                                 "color": moeka    },
	{ "name": "閃光・ニャンニャン",                 "color": moeka    },
	{ "name": "シャイニング・ニャンニャン",         "color": moeka    },
	{ "name": "モエモエ・ニャンニャン",             "color": moeka    },
	{ "name": "モエモエ",                           "color": moeka    },
	{ "name": "もえいく",                           "color": moeka    },
	{ "name": "もえいくさん",                       "color": moeka    },
	{ "name": "萌郁お姉ちゃん",                     "color": moeka    },
	{ "name": "萌郁お姉さん",                       "color": moeka    },
	{ "name": "桐生氏",                             "color": moeka    },
	{ "name": "漆原るか",                           "color": ruka     }, // ルカ子
	{ "name": "漆原",                               "color": ruka     },
	{ "name": "るか",                               "color": ruka     },
	{ "name": "るか子",                             "color": ruka     },
	{ "name": "ルカ",                               "color": ruka     },
	{ "name": "ルカ子",                             "color": ruka     },
	{ "name": "るか兄さん",                         "color": ruka     },
	{ "name": "ルカ兄さん",                         "color": ruka     },
	{ "name": "るか姉さん",                         "color": ruka     },
	{ "name": "ルカ姉さん",                         "color": ruka     },
	{ "name": "るかお兄さん",                       "color": ruka     },
	{ "name": "ルカお兄さん",                       "color": ruka     },
	{ "name": "るかお兄ちゃん",                     "color": ruka     },
	{ "name": "ルカお兄ちゃん",                     "color": ruka     },
	{ "name": "るかお姉さん",                       "color": ruka     },
	{ "name": "ルカお姉さん",                       "color": ruka     },
	{ "name": "るかお姉ちゃん",                     "color": ruka     },
	{ "name": "ルカお姉ちゃん",                     "color": ruka     },
	{ "name": "ルカニャン",                         "color": ruka     },
	{ "name": "ルカニャン・ニャンニャン",           "color": ruka     },
	{ "name": "るか氏",                             "color": ruka     },
	{ "name": "ルカ氏",                             "color": ruka     },
	{ "name": "るかくん",                           "color": ruka     },
	{ "name": "ルカくん",                           "color": ruka     },
	{ "name": "るかきゅん",                         "color": ruka     },
	{ "name": "ルカきゅん",                         "color": ruka     },
	{ "name": "るかちゃん",                         "color": ruka     },
	{ "name": "ルカちゃん",                         "color": ruka     },
	{ "name": "秋葉留未穂",                         "color": faris    }, // ﾌｪｲﾘｽ
	{ "name": "秋葉",                               "color": faris    },
	{ "name": "留未穂",                             "color": faris    },
	{ "name": "フェイリス・ニャンニャン",           "color": faris    },
	{ "name": "フェイリス",                         "color": faris    },
	{ "name": "フェイリスたん",                     "color": faris    },
	{ "name": "ニャンニャン",                       "color": faris    },
	{ "name": "ﾌｪｲﾘｽ",                              "color": faris    },
	{ "name": "猫娘",                               "color": faris    },
	{ "name": "隙間猫",                             "color": faris    },
	{ "name": "隙間ピンク",                         "color": faris    },
	{ "name": "阿万音鈴羽",                         "color": suzu     }, // 鈴羽
	{ "name": "阿万音",                             "color": suzu     },
	{ "name": "鈴羽",                               "color": suzu     },
	{ "name": "橋田鈴羽",                           "color": suzu     },
	{ "name": "橋田鈴",                             "color": suzu     },
	{ "name": "鈴",                                 "color": suzu     },
	{ "name": "老鈴羽",                             "color": suzu     },
	{ "name": "若鈴羽",                             "color": suzu     },
	{ "name": "鈴羽Ω",                             "color": suzu     },
	{ "name": "鈴羽α",                             "color": suzu     },
	{ "name": "鈴羽SG",                             "color": suzu     },
	{ "name": "鈴羽β",                             "color": suzu     },
	{ "name": "鈴羽γ",                             "color": suzu     },
	{ "name": "鈴羽δ",                             "color": suzu     },
	{ "name": "鈴羽ε",                             "color": suzu     },
	{ "name": "バイト戦士",                         "color": suzu     },
	{ "name": "スズさん",                           "color": suzu     },
	{ "name": "バイトのお姉ちゃん",                 "color": suzu     },
	{ "name": "鈴羽お姉ちゃん",                     "color": suzu     },
	{ "name": "鈴羽お姉さん",                       "color": suzu     },
	{ "name": "阿万音氏",                           "color": suzu     },
	{ "name": "鈴羽たん",                           "color": suzu     },
	{ "name": "世界一可愛い鈴羽",                   "color": suzu     },
	{ "name": "スズニャン",                         "color": suzu     },
	{ "name": "リンリン・ニャンニャン",             "color": suzu     },
	{ "name": "リンリン",                           "color": suzu     },
	{ "name": "ジョン・タイター",                   "color": suzu     },
	{ "name": "タイター",                           "color": suzu     },
	{ "name": "ダル娘",                             "color": suzu     },
	{ "name": "比屋定真帆",                         "color": maho     }, // 真帆
	{ "name": "比屋定",                             "color": maho     },
	{ "name": "真帆",                               "color": maho     },
	{ "name": "真帆氏",                             "color": maho     },
	{ "name": "真帆先輩",                           "color": maho     },
	{ "name": "真帆たん",                           "color": maho     },
	{ "name": "合法ロリ",                           "color": maho     },
	{ "name": "ロリっ子",                           "color": maho     },
	{ "name": "ロリっ娘",                           "color": maho     },
	{ "name": "比屋ジョセフィーヌ",                 "color": maho     },
	{ "name": "ジョセフィーヌ",                     "color": maho     },
	{ "name": "靴ちぐはぐ",                         "color": maho     },
	{ "name": "靴ちぐはぐロリっ子",                 "color": maho     },
	{ "name": "靴ちぐはぐロリっ娘",                 "color": maho     },
	{ "name": "ゴーヤチャンプルー",                 "color": maho     },
	{ "name": "助手2号",                            "color": maho     },
	{ "name": "助手２号",                           "color": maho     },
	{ "name": "助手二号",                           "color": maho     },
	{ "name": "助手弐号",                           "color": maho     },
	{ "name": "真帆お姉ちゃん",                     "color": maho     },
	{ "name": "真帆お姉さん",                       "color": maho     },
	{ "name": "真帆姉さん",                         "color": maho     },
	{ "name": "サリエリ",                           "color": maho     },
	{ "name": "Amadeus真帆",                        "color": maho     },
	{ "name": "Ama真帆",                            "color": maho     },
	{ "name": "甘真帆",                             "color": maho     },
	{ "name": "マホ",                               "color": maho     },
	{ "name": "マホさん",                           "color": maho     },
	{ "name": "マホニャン",                         "color": maho     },
	{ "name": "椎名かがり",                         "color": kagari   }, // かがり
	{ "name": "かがり",                             "color": kagari   },
	{ "name": "まゆり娘",                           "color": kagari   },
	{ "name": "まゆり義娘",                         "color": kagari   },
	{ "name": "K6205",                              "color": kagari   },
	{ "name": "阿万音由季",                         "color": yuki     }, // 由季
	{ "name": "由季",                               "color": yuki     },
	{ "name": "由季氏",                             "color": yuki     },
	{ "name": "由季たん",                           "color": yuki     },
	{ "name": "あまゆき",                           "color": yuki     },
	{ "name": "鈴羽母",                             "color": yuki     },
	{ "name": "天王寺裕吾",                         "color": brown    }, // 天王寺
	{ "name": "天王寺",                             "color": brown    },
	{ "name": "裕吾",                               "color": brown    },
	{ "name": "ミスターブラウン",                   "color": brown    },
	{ "name": "ミスターフェルディナント・ブラウン", "color": brown    },
	{ "name": "ミスターフェルディナンド・ブラウン", "color": brown    },
	{ "name": "ミスブラ",                           "color": brown    },
	{ "name": "Mr.ブラウン",                        "color": brown    },
	{ "name": "MB",                                 "color": brown    },
	{ "name": "FB",                                 "color": brown    },
	{ "name": "ブラウン氏",                         "color": brown    },
	{ "name": "ブラウン店長",                       "color": brown    },
	{ "name": "店長",                               "color": brown    },
	{ "name": "店長ニャン",                         "color": brown    },
	{ "name": "店長さん",                           "color": brown    },
	{ "name": "ハゲ",                               "color": brown    },
	{ "name": "綯父",                               "color": brown    },
	{ "name": "天王寺綯",                           "color": nae      }, // 綯
	{ "name": "綯",                                 "color": nae      },
	{ "name": "シスターブラウン",                   "color": nae      },
	{ "name": "シスブラ",                           "color": nae      },
	{ "name": "SB",                                 "color": nae      },
	{ "name": "小動物",                             "color": nae      },
	{ "name": "ナエニャン",                         "color": nae      },
	{ "name": "綯ちゃん",                           "color": nae      },
	{ "name": "綯氏",                               "color": nae      },
	{ "name": "萎え",                               "color": nae      },
	{ "name": "萎",                                 "color": nae      },
	{ "name": "萎えちゃん",                         "color": nae      },
	{ "name": "萎ちゃん",                           "color": nae      },
	{ "name": "萎え氏",                             "color": nae      },
	{ "name": "萎氏",                               "color": nae      },
	{ "name": "タイムリーパー・ナエ",               "color": nae      },
	{ "name": "アレクシス・レスキネン",             "color": leskinen }, // ﾚｽｷﾈﾝ
	{ "name": "アレクシス",                         "color": leskinen },
	{ "name": "レスキネン",                         "color": leskinen },
	{ "name": "ﾚｽｷﾈﾝ",                              "color": leskinen },
	{ "name": "レス",                               "color": leskinen },
	{ "name": "Alexis Leskinen",                    "color": leskinen },
	{ "name": "Alexis",                             "color": leskinen },
	{ "name": "Leskinen",                           "color": leskinen },
	{ "name": "レスキネン教授",                     "color": leskinen },
	{ "name": "教授",                               "color": leskinen },
	{ "name": "プロフェッサー",                     "color": leskinen },
	{ "name": "岡部朱美",                           "color": okabeM   }, // 岡部母、朱美
	{ "name": "朱美",                               "color": okabeM   },
	{ "name": "岡部母",                             "color": okabeM   },
	{ "name": "牧瀬章一",                           "color": tinaF    }, // 紅莉栖父、中鉢
	{ "name": "章一",                               "color": tinaF    },
	{ "name": "中鉢",                               "color": tinaF    },
	{ "name": "ドクター中鉢",                       "color": tinaF    },
	{ "name": "Dr.中鉢",                            "color": tinaF    },
	{ "name": "中鉢博士",                           "color": tinaF    },
	{ "name": "博士",                               "color": tinaF    },
	{ "name": "牧瀬父",                             "color": tinaF    },
	{ "name": "漆原栄輔",                           "color": rukaF    }, // ルカ子父、栄輔
	{ "name": "栄輔",                               "color": rukaF    },
	{ "name": "ルカ子父",                           "color": rukaF    },
	{ "name": "秋葉ちかね",                         "color": farisM   }, // ﾌｪｲﾘｽ母、ちかね
	{ "name": "ちかね",                             "color": farisM   },
	{ "name": "ﾌｪｲﾘｽ母",                            "color": farisM   },
	{ "name": "秋葉幸高",                           "color": farisF   }, // ﾌｪｲﾘｽ父、幸高
	{ "name": "幸高",                               "color": farisF   },
	{ "name": "ﾌｪｲﾘｽ父",                            "color": farisF   },
	{ "name": "黒木",                               "color": kuroki   }, // 黒木
	{ "name": "天王寺綴",                           "color": naeM     }, // 綯母、今宮綴
	{ "name": "今宮綴",                             "color": naeM     },
	{ "name": "今宮",                               "color": naeM     },
	{ "name": "綴",                                 "color": naeM     },
	{ "name": "綯母",                               "color": naeM     },
	{ "name": "中瀬克美",                           "color": fubuki   }, // フブキ
	{ "name": "中瀬",                               "color": fubuki   },
	{ "name": "克美",                               "color": fubuki   },
	{ "name": "フブキ",                             "color": fubuki   },
	{ "name": "中瀬シンイチ",                       "color": shin     }, // フブキ兄、ｼﾝｲﾁ
	{ "name": "シンイチ",                           "color": shin     },
	{ "name": "ｼﾝｲﾁ",                               "color": shin     },
	{ "name": "フブキ兄",                           "color": shin     },
	{ "name": "I chain his snake.",                 "color": shin     },
	{ "name": "ICHS",                               "color": shin     },
	{ "name": "ichs",                               "color": shin     },
	{ "name": "ＩＣＨＳ",                           "color": shin     },
	{ "name": "ｉｃｈｓ",                           "color": shin     },
	{ "name": "イクス",                             "color": shin     },
	{ "name": "来嶋かえで",                         "color": kaede    }, // カエデ
	{ "name": "来嶋",                               "color": kaede    },
	{ "name": "かえで",                             "color": kaede    },
	{ "name": "カエデ",                             "color": kaede    },
	{ "name": "ジュディ・レイエス",                 "color": reyes    }, // レイエス
	{ "name": "ジュディ",                           "color": reyes    },
	{ "name": "レイエス",                           "color": reyes    },
	{ "name": "Judy Reyes",                         "color": reyes    },
	{ "name": "Judy",                               "color": reyes    },
	{ "name": "Reyes",                              "color": reyes    },
	{ "name": "レイエス教授",                       "color": reyes    },
	{ "name": "鈴木功一",                           "color": yondoshi }, // 4℃
	{ "name": "鈴木",                               "color": yondoshi },
	{ "name": "功一",                               "color": yondoshi },
	{ "name": "4℃",                                "color": yondoshi },
	{ "name": "4°C",                               "color": yondoshi },
	{ "name": "4°Ｃ",                              "color": yondoshi },
	{ "name": "4°c",                               "color": yondoshi },
	{ "name": "4°ｃ",                              "color": yondoshi },
	{ "name": "４℃",                               "color": yondoshi },
	{ "name": "４°C",                              "color": yondoshi },
	{ "name": "４°Ｃ",                             "color": yondoshi },
	{ "name": "４°c",                              "color": yondoshi },
	{ "name": "４°ｃ",                             "color": yondoshi },
	{ "name": "よんどしー",                         "color": yondoshi },
	{ "name": "よんどし",                           "color": yondoshi },
	{ "name": "井崎",                               "color": izaki    }, // 井崎
	{ "name": "伽夜乃",                             "color": kayano   }, // 伽夜乃
	//////////////////////////
	// 通常のタグ名に色付け //
	//////////////////////////
	{ "name": "未指定",                 "color": invalid     },
	{ "name": "実験用",                 "color": invalid     },
	{ "name": "charname.html",          "color": invalid     },
	{ "name": "SS作品",                 "color": valid       },
	{ "name": "自作",                   "color": valid       },
	{ "name": "公式",                   "color": valid       },
	{ "name": "長編",                   "color": valid       },
	{ "name": "短編",                   "color": valid       },
	{ "name": "連載",                   "color": valid       },
	{ "name": "安価",                   "color": valid       },
	{ "name": "未完成",                 "color": invalid     },
	{ "name": "ソース無し",             "color": invalid     },
	{ "name": "ネタ",                   "color": valid       },
	{ "name": "シリアス",               "color": valid       },
	{ "name": "その他キャラ",           "color": valid       },
	{ "name": "まっちょしぃ登場",       "color": mayuri      },
	{ "name": "サイトの管理方針",       "color": valid       },
	{ "name": "Article",                "color": invalid     },
	{ "name": "HowTo",                  "color": invalid     },
	{ "name": "Sample",                 "color": invalid     },
	{ "name": "Test",                   "color": invalid     },
	{ "name": "テスト",                 "color": invalid     },
	{ "name": ".NET",                   "color": valid       },
	{ "name": "低レイヤ",               "color": valid       },
	{ "name": "アドベントカレンダー",   "color": valid       },
	{ "name": "著作権",                 "color": valid       },
	{ "name": "生成系人工知能",         "color": valid       },
	{ "name": "架空の言語",             "color": valid       },
	{ "name": "Sobityezjyo",            "color": sobityezjyo },
	{ "name": "措備手著語",             "color": sobityezjyo },
	{ "name": "ソビティエズ語",         "color": sobityezjyo },
	{ "name": "Lenofodu",               "color": lenofodu    },
	{ "name": "レノフォドゥ語",         "color": lenofodu    },
	{ "name": "例埜捕衝語・此人語",     "color": lenofodu    },
	{ "name": "下劣な記事",             "color": valid       },
	{ "name": "声明記事",               "color": valid       },
	{ "name": "Slack",                  "color": valid       },
	{ "name": "プログラミング言語会話", "color": valid       }
];

// ページ読み込み処理
window.addEventListener("load", _ => {
	apply(document.getElementsByTagName("h2"    ));
	apply(document.getElementsByTagName("b"     ));
	apply(document.getElementsByTagName("strong"));

	function apply(tags)
	{
		const prefix = "font-weight:bold;color:#";
		for (let i = 0; i < tags.length; ++i) {
			let tag  = tags[i];
			let text = tag.innerText;
			for (let j = 0; j < charnames.length; ++j) {
				let name = charnames[j].name;
				if (text === "#" + name) {
					tag.style.cssText = prefix + charnames[j].color;
					break;
				} else if (text === "^" + name) {
					tag.innerText     = name;
					tag.style.cssText = prefix + charnames[j].color;
					break;
				}
			}
		}
	}

	// gen_charname.md の為のコード
	const code = document.getElementById("code_of_charname_md");
	if (code) {
		let newText = code.innerText;
		for (let i = 0; i < charnames.length; ++i) {
			newText += "**^" + charnames[i].name + "**\r\n";
		}
		code.innerText = newText;

		// 構文ハイライトを最適用 - 上手く行かなかったので諦める
		/* if (hljs && hljs.highlightElement) {
			//code.setAttribute("class",            "language-md");
			//code.setAttribute("data-highlighted", "no"         );

			code.classList.remove(...code.classList);
			code.classList.add("language-md");
			delete code.dataset.highlighted;
			hljs.highlightElement(code.parentElement);
		} //*/
	}
});
