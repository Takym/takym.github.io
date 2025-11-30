---
layout: post
title: "二値論理"
authors: Takym
tags:
  - 下劣な記事
category: general
---
Copyright (C) 2025 Takym.

## 等価
* $L \coloneqq R$ - 左辺 $L$ を右辺 $R$ と定義する。
* $L = R$ - 左辺 $L$ と右辺 $R$ が等しい場合にその値を返す。
* $L \neq R$ - 左辺 $L$ と右辺 $R$ が等しくない事を示す。

## 定数
* $T$ - 「真」を意味する。
* $F$ - 「偽」を意味する。
* 常に $T \neq F$ が成立する。

## 変数
* $T$ と $F$ 以外の文字を用いる。

## 関数と引数
* $f(x)$ - 関数 $f$ に引数 $x$ を渡す。

## 単項演算子
* **肯定**
	* 特に何も付けない。
* **否定**
	* $\lnot F = T$
	* $\lnot T = F$
	* $\lnot \lnot X = X$

## 二項演算子
* **論理積**
	* $F \land F = F$
	* $F \land T = F$
	* $T \land F = F$
	* $T \land T = T$
* **論理和**
	* **包括的**
		* $F \lor F = F$
		* $F \lor T = T$
		* $T \lor F = T$
		* $T \lor T = T$
	* **排他的**
		* $F \veebar F = F$
		* $F \veebar T = T$
		* $T \veebar F = T$
		* $T \veebar T = F$
* **論理包含**
	* **順方向**
		* $F \implies F = T$
		* $F \implies T = T$
		* $T \implies F = F$
		* $T \implies T = T$
	* **逆方向**
		* $F \impliedby F = T$
		* $F \impliedby T = F$
		* $T \impliedby F = T$
		* $T \impliedby T = T$
* **同値**
	* $\lnot(L \veebar R)$
		* $L = R$ の時は $T$ を返す。
		* $L \neq R$ の時は $F$ を返す。

## 三項演算子
* **条件**
	* $C ? W_T : W_F$
		* $C = T$ の時は $W_T$ を返す。
		* $C = F$ の時は $W_F$ を返す。
