# 採用サイト - 本番用

このディレクトリには、デプロイ準備が整った採用サイトの完全なファイルが含まれています。

**テストサイト**: https://sogo-kappa.vercel.app/recruit/index.html

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

## Vercelへのデプロイ方法（GitHub不要・推奨）

**GitHubリポジトリを使わずに、ローカルファイルから直接デプロイする方法です。** これが最も簡単で安全な方法です。

### 方法1: Vercel CLIを使用（最も簡単・推奨）

**メリット：**
- ✅ GitHubリポジトリ不要
- ✅ プライベートリポジトリの心配なし
- ✅ ローカルファイルから直接デプロイ
- ✅ 簡単で迅速

**手順：**

1. **Vercel CLIをインストール**
   ```bash
   npm i -g vercel
   ```

2. **recruit-deliveryディレクトリに移動**
   ```bash
   cd /Users/kurea/Desktop/sogo-main/recruit-delivery
   ```

3. **Vercelにログイン（初回のみ）**
   ```bash
   vercel login
   ```
   ブラウザが開いてログインします

4. **新しいプロジェクトとしてデプロイ**
   ```bash
   vercel
   ```
   
   **質問への回答：**
   - "Set up and deploy?" → **Yes**
   - "Which scope?" → あなたのVercelアカウントを選択
   - "Link to existing project?" → **No**（新しいプロジェクトを作成）
   - "What's your project's name?" → `recruit-delivery` または任意の名前
   - "In which directory is your code located?" → **./**（現在のディレクトリ）

5. **本番環境にデプロイ**
   ```bash
   vercel --prod
   ```

   これで新しいURL（例: `recruit-delivery-xxx.vercel.app`）が生成されます。

**今後の更新方法：**
ファイルを変更したら、再度以下を実行：
```bash
cd /Users/kurea/Desktop/sogo-main/recruit-delivery
vercel --prod
```

---

### 方法2: 手動アップロード（GUI・GitHub不要）

1. **ZIPファイルを作成**
   ```bash
   cd /Users/kurea/Desktop/sogo-main
   zip -r recruit-delivery.zip recruit-delivery/ -x "*.DS_Store" "*.git*"
   ```

2. **Vercelダッシュボードでアップロード**
   - https://vercel.com にアクセスしてログイン
   - 「Add New Project」をクリック
   - 「Deploy」タブを選択（GitHubを選択しない）
   - 「Browse」で`recruit-delivery.zip`をアップロード
   - プロジェクト名を設定して「Deploy」

---

## GitHubリポジトリを使いたい場合

自動デプロイ（GitHubにプッシュするたびに自動更新）が必要な場合、新しいプライベートリポジトリを作成できます。

### ステップ1: 新しいプライベートリポジトリを作成

1. **GitHubで新しいリポジトリを作成**
   - https://github.com/new にアクセス
   - Repository name: `recruit-delivery` または任意の名前
   - **Visibility**: **Private** を選択（推奨）
   - 「Create repository」をクリック

### ステップ2: recruit-deliveryフォルダを新しいリポジトリにプッシュ

```bash
# recruit-deliveryディレクトリに移動
cd /Users/kurea/Desktop/sogo-main/recruit-delivery

# 新しいGitリポジトリとして初期化（既存の.gitがある場合は削除）
rm -rf .git  # 既存の.gitを削除（必要に応じて）
git init

# すべてのファイルを追加
git add .

# 初回コミット
git commit -m "Initial commit: Recruit delivery site"

# 新しいリモートリポジトリを追加（YOUR_USERNAMEを実際のユーザー名に置き換え）
git remote add origin https://github.com/YOUR_USERNAME/recruit-delivery.git

# メインブランチにプッシュ
git branch -M main
git push -u origin main
```

### ステップ3: Vercelで新しいリポジトリを選択

1. **Vercelダッシュボードにアクセス**
   - https://vercel.com にアクセスしてログイン

2. **新しいプロジェクトを作成**
   - 「Add New Project」をクリック
   - GitHubアカウントを連携（まだの場合）

3. **新しいリポジトリを選択**
   - リポジトリ一覧から `YOUR_USERNAME/recruit-delivery` を選択

4. **プロジェクト設定**
   - **Project Name**: `recruit-delivery` または任意の名前
   - **Framework Preset**: **Other** を選択
   - **Root Directory**: 空白のまま（recruit-deliveryフォルダが既にルート）
   - **Build Command**: 空白のまま
   - **Output Directory**: 空白のまま

5. **デプロイ**
   - 「Deploy」をクリック

### 自動デプロイの設定

デプロイ後、以下のように自動デプロイが有効になります：

- `recruit-delivery/` フォルダ内のファイルを変更
- 変更をコミットしてGitHubにプッシュ:
  ```bash
  cd /Users/kurea/Desktop/sogo-main/recruit-delivery
  git add .
  git commit -m "Update files"
  git push origin main
  ```
- Vercelが自動的に新しいデプロイを開始

**メリット：**
- ✅ 自動デプロイ（GitHubにプッシュするだけで更新）
- ✅ バージョン管理（変更履歴を追跡）
- ✅ プライベートリポジトリで安全に管理
- ✅ チームでの共同作業が可能

**注意：** この方法は必須ではありません。方法1（Vercel CLI）でも十分に機能します。

---

## その他のデプロイ方法

### 方法1: Vercel CLIを使用（GitHub不要）

1. Vercel CLIをインストール（未インストールの場合）:
   ```bash
   npm i -g vercel
   ```

2. `recruit-delivery/`ディレクトリに移動:
   ```bash
   cd recruit-delivery
   ```

3. 新しいプロジェクトとしてデプロイ:
   ```bash
   vercel
   ```
   
   **初回実行時の質問：**
   - "Set up and deploy?" → **Yes**
   - "Which scope?" → あなたのアカウントを選択
   - "Link to existing project?" → **No**（新しいプロジェクトを作成）
   - "What's your project's name?" → `recruit-delivery` または任意の名前
   - "In which directory is your code located?" → **./**（現在のディレクトリ）

4. 本番環境にデプロイ:
   ```bash
   vercel --prod
   ```

   これで新しいURL（例: `recruit-delivery-xxx.vercel.app`）が生成されます。

### 方法2: Vercel CLI（GitHub不要・最も簡単）

**GitHubに接続する必要はありません！** ローカルファイルから直接デプロイできます。

1. Vercel CLIをインストール:
   ```bash
   npm i -g vercel
   ```

2. `recruit-delivery/`ディレクトリに移動:
   ```bash
   cd recruit-delivery
   ```

3. ログイン（初回のみ）:
   ```bash
   vercel login
   ```
   ブラウザが開いてログインします

4. デプロイ:
   ```bash
   vercel
   ```
   - "Link to existing project?" → **No**
   - プロジェクト名を入力

5. 本番環境にデプロイ:
   ```bash
   vercel --prod
   ```

### 方法3: 手動アップロード（GitHub不要・GUI）

1. `recruit-delivery/`フォルダをZIP圧縮
2. https://vercel.com にアクセスしてログイン
3. 「Add New Project」をクリック
4. 「Deploy」タブを選択（GitHubを選択しない）
5. 「Browse」でZIPファイルをアップロード
6. プロジェクト名を設定して「Deploy」

### 方法4: GitHubからデプロイ（オプション）

GitHubリポジトリと連携したい場合のみ：

1. Vercelダッシュボード（https://vercel.com）にアクセス
2. 「Add New Project」をクリック
3. GitHubリポジトリ（`Willwesternavenue/sogo`）を選択
4. **重要**: 「Root Directory」を`recruit-delivery`に設定
5. プロジェクト名を設定（例: `recruit-delivery`）
6. Framework Preset: **Other**を選択
7. 「Deploy」をクリック

詳細は`DEPLOY.md`を参照してください。

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
