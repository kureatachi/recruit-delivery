<?php
// 送信メールの方式
$formConfig["mail"] = array(
	"userAddress"  => "#email#", 				// 確認メール送信先指定（メールアドレス or #{input[name]}#でフォーム入力の内容から取得）
	"adminAddress" => "info@sougou.co.jp", 		// 管理社当てメール送信先
	"fromName"     => "SOU-GOU Inc.", 			// 送信元表示名
	"fromAddress"  => "info@sougou.co.jp", 		// 送信元アドレス：送信に使うメールアドレス
	"replyAddress" => "info@sougou.co.jp", 		// 返信先アドレス：返信設定のアドレス、fromと同じなら指定不要
	"sendType"     => "smtp", 					// 送信方式："smtp" or "sendmail" or "ses" SESのSMTP送信はsmtpを選択
	"isHTML"       => false, 					// HTMLメールで送るか
	"smtpHost"     => "smtp.alpha-prm.jp", 		// SMTPサーバー
	"smtpUser"     => "info%sougou.co.jp", 		// SMTPユーザー名
	"smtpPass"     => "Spcj-1101", 				// SMTPパスワード
	"smtpPort"     => 465, 						// SMTPポート番号（tlsの場合は465や587）
	"smtpAuth"     => true, 					// SMTP authenticationを有効化
	"smtpSecure"   => "ssl",					// 暗号化を有効（tls or ssl）無効の場合はfalse
	"smtpCharSet"  => "utf-8",					// メールの文字コード指定	
);

// サンクスページ指定：空の場合は送信状況メッセージのみ
$formConfig["thanksUrl"] = "thanks.html";						

// メールテンプレート、指定がない or ファイルパスが間違っている場合は送信されない。
$formConfig["userMail"]  = __DIR__."/mail-template/user.tpl";	// 問合者へのメールテンプレート
$formConfig["adminMail"] = __DIR__."/mail-template/admin.tpl";	// 管理者へのメールテンプレート

// フォームを特定する要素名
$formConfig["formName"] = "#contactForm"; 

// グーグルリキャプチャーキーの設定：指定した場合はリキャプチャー有効にする。（キー自体の有効性かは別問題）
$formConfig["googleReCaptchaKey"]        = "6Le7jeQeAAAAANzRaYeX6LSo58G3K_Xov8MRsMr0"; 		// キーID
$formConfig["googleReCaptchaSeacretKey"] = "6Le7jeQeAAAAANiL9HiEoS7U_WMK19J6OSyi7lPu"; 		// 秘密鍵


// -----------------------------------------------------------------
// バリデーションルールの記載(jQuery.validateの形式)
// jQueryValidateではrule内のpatternは["]無しだがここでは必要
// -----------------------------------------------------------------
$formConfig["validate"] = array(
	"rules" => array(
		"purpose" =>    array( "required" => true ),
		"media" =>    array( "required" => true ),
		"company" =>    array( "required" => true ),
		"email" =>   array("required" => true , "email" => true ),
		"tel" =>     array( "pattern" => "/(^0\d{1,3}-\d{1,4}-\d{4}$|^0\d{9,10}$)/i"),
		
	),
	"messages" => array(
		"purpose" => "お問い合わせ内容を選択してください。",
		"media"   => "検討中の媒体を選択してください。",
		"name"    => "会社名",
		"email"   => array(
			"required" => "メールアドレスは必須です。",
			"email"    => "メールアドレスが正しくありません。",
		),
		"tel" => array(
			"required" => "電話番号は必須です。",
			"pattern" => "電話番号の形式が正しくありません。"
		),

	)
);
