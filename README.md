# 採用サイト - 本番用

このディレクトリには、デプロイ準備が整った採用サイトの完全なファイルが含まれています。

**テストサイト**: https://recruit-delivery.vercel.app/

## ディレクトリ構造

```
recruit-delivery/
├── index.html              # 採用サイトメインページ
├── business.html           # 事業ページ
├── company.html            # 企業情報ページ
├── fukuri.html            # 福利厚生ページ
├── recruit.html            # 募集要項ページ
├── service.html            # サービスページ
├── interviewNK.html        # インタビュー - N.K.さん
├── interviewRY.html        # インタビュー - R.Y.さん
├── interviewYO.html        # インタビュー - Y.O.さん
├── interviewHS.html        # インタビュー - H.S.さん
│
├── css/                    # スタイルシート
│   ├── reset.css
│   ├── utilities.css
│   ├── drawer_menu.css
│   ├── styles.css
│   ├── tablet.css
│   └── sp.css
│
├── js/                     # JavaScriptファイル
│   ├── jquery-3.3.1.min.js
│   ├── jquery.inview.js
│   ├── fade.js
│   ├── to_top.js
│   ├── scroll.js
│   ├── jquery.modal_scroll.js
│   ├── fade_in.js
│   ├── scroll_bar.js
│   └── toggle-nav.js
│
├── images/                 # 画像アセット
│   ├── logo.png
│   ├── favicon.ico
│   ├── interview/          # インタビュー画像
│   ├── common/             # 共通アイコン
│   ├── recruit/            # 採用関連画像
│   └── icons/              # アイコンファイル
│
└── form/                   # フォーム機能
    ├── mailform.php
    ├── form-setting.php
    └── ...
```

## デプロイメントに関する注意事項

- すべてのパスは、このスタンドアロン構造で動作するように更新されています
- 会社サイトへの外部リンクはアンカー（#）に変換されています
- すべてのアセット（CSS、JS、画像）が含まれています
- フォーム機能は `form/` ディレクトリに含まれています
- **注意**: Vercelは静的サイトホスティングなので、PHPフォーム機能は動作しません。PHPが必要な場合は、別のホスティングサービス（例：Netlify Functions、AWS Lambda）を使用するか、フォーム送信を外部サービス（例：Formspree、Netlify Forms）に移行する必要があります

## 必要要件

- フォーム機能のためのPHPサポート
- Webサーバー（Apache/Nginx）
- 外部依存関係なし（jQueryはCDNから読み込まれます）

## ファイル概要

- **10個のHTMLファイル**（すべての採用ページ）
- **8個のCSSファイル**（すべてのスタイルシート）
- **10個のJavaScriptファイル**（すべてのスクリプト）
- **76個以上の画像ファイル**（images/サブディレクトリに整理）
- **完全なフォーム機能**（form/ディレクトリ）

## 備考

- すべてのパスはスタンドアロンで動作するように更新済み
- 会社サイトへのリンクはアンカー（#）に変換済み
- .git、node_modules、環境ファイルは含まれていません
- 直接デプロイまたはZIP圧縮して配布可能な状態です
