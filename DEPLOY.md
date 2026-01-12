# Vercelデプロイ手順 - recruit-delivery専用プロジェクト

このフォルダ専用の新しいVercelプロジェクトを作成する方法です。

## 方法1: Vercel CLIを使用（最も簡単）

### ステップ1: Vercel CLIをインストール
```bash
npm i -g vercel
```

### ステップ2: recruit-deliveryディレクトリに移動
```bash
cd /Users/kurea/Desktop/sogo-main/recruit-delivery
```

### ステップ3: 新しいプロジェクトとしてデプロイ
```bash
vercel
```

初回実行時：
- プロジェクト名を聞かれます（例: `recruit-delivery` または `sogo-recruit-delivery`）
- 既存のプロジェクトにリンクするか聞かれます → **No**を選択（新しいプロジェクトを作成）
- デプロイ先のディレクトリを聞かれます → **Enter**（現在のディレクトリを使用）

### ステップ4: 本番環境にデプロイ
```bash
vercel --prod
```

これで新しいURL（例: `recruit-delivery-xxx.vercel.app`）が生成されます。

---

## 方法2: Vercelダッシュボードから作成

### ステップ1: Vercelにログイン
https://vercel.com にアクセスしてログイン

### ステップ2: 新しいプロジェクトを作成
1. 「Add New Project」をクリック
2. GitHubリポジトリを選択（`Willwesternavenue/sogo`）
3. **重要**: 「Root Directory」を`recruit-delivery`に設定
4. 「Configure Project」をクリック
5. プロジェクト名を設定（例: `recruit-delivery`）
6. Framework Preset: **Other**を選択
7. Build Command: 空白のまま
8. Output Directory: 空白のまま（または`.`）
9. 「Deploy」をクリック

### ステップ3: 環境変数（必要に応じて）
フォーム機能などで環境変数が必要な場合は、「Settings」→「Environment Variables」から設定

---

## 方法3: 手動アップロード（GitHub不要）

### ステップ1: ZIPファイルを作成
```bash
cd /Users/kurea/Desktop/sogo-main
zip -r recruit-delivery.zip recruit-delivery/ -x "*.DS_Store" "*.git*"
```

### ステップ2: Vercelダッシュボードでアップロード
1. https://vercel.com にアクセス
2. 「Add New Project」をクリック
3. 「Deploy」タブを選択
4. 「Browse」をクリックして`recruit-delivery.zip`を選択
5. プロジェクト名を設定
6. 「Deploy」をクリック

---

## プロジェクト設定の確認

デプロイ後、以下の設定を確認してください：

1. **カスタムドメイン**（オプション）:
   - プロジェクトの「Settings」→「Domains」からカスタムドメインを追加可能

2. **環境変数**（必要に応じて）:
   - 「Settings」→「Environment Variables」から設定

3. **リダイレクト設定**:
   - `vercel.json`ファイルで設定済み

---

## トラブルシューティング

### 404エラーが発生する場合
- `vercel.json`の設定を確認
- ルートディレクトリが正しく設定されているか確認

### 画像が表示されない場合
- パスが相対パス（`images/...`）になっているか確認
- ファイル名に日本語が含まれていないか確認

### フォームが動作しない場合
- Vercelは静的サイトホスティングのため、PHPは動作しません
- フォーム送信には外部サービス（Formspree、Netlify Forms等）の使用を検討

---

## 現在のテストサイトとの違い

- **既存サイト**: https://sogo-kappa.vercel.app/recruit/index.html
  - プロジェクト全体（`recruit/`フォルダ）からデプロイ
  
- **新規プロジェクト**: `recruit-delivery-xxx.vercel.app`
  - `recruit-delivery/`フォルダ専用の独立したプロジェクト
  - 完全にスタンドアロンで動作
