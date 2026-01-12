
var formName = "#contactForm";

	// 読込 : GoogleReCAPCHA
	var tag = document.createElement('script');
	tag.src = "https://www.google.com/recaptcha/api.js?render=6Le7jeQeAAAAANzRaYeX6LSo58G3K_Xov8MRsMr0";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 確認画面の生成処理（モーダル）
function confirmGenerate(){
	// 画面の基本生成
	var Confirm = document.querySelector(formName).cloneNode(true);	// 既存フォームをクローン
	$(Confirm).find("input[type='hidden']").remove();				// 削除：非表示項目
	$(Confirm).find("button[type=submit]").remove();				// 削除：送信ボタン

	// SELECTの書換
	$(Confirm).find("select").each(function(){
		let thisName = $(this).attr("name");
		let orgin = $(formName).find('select[name="' + thisName + '"]')
		let val = orgin.val();
		$(this).replaceWith('<div class="inner" style="overflow-wrap:normal;">' + val + '</div>');
	});

	// 環境固有データの処理
	let radioArr = {};
	$(Confirm).find("input[type=radio]").each(function(){
		// 
		if(typeof radioArr[$(this).attr("name")] == "undefined"){
			radioArr[$(this).attr("name")]	= [];
		}

		// 
		if($(this).attr("checked")){
			radioArr[$(this).attr("name")].push($(this).val());
		}

		// 
		if($(Confirm).find('[name="' + $(this).attr("name") + '"]').length == 1){
			$(this).next("span").remove();
			$(this).closest(".inner").replaceWith('<div class="inner" style="overflow-wrap:normal;">' + radioArr[$(this).attr("name")].join(" / ") + '</div>');
		}else{
			$(this).next("span").remove();
			$(this).remove();
		}
	})

	var checkval = "";
	var checkboxes = $(Confirm).find("[name='considered[]']:checked");
	checkboxes.each(function() {
		checkval += $(this).val() + ", ";
	});
	checkval = checkval.slice(0, -2);
	$(Confirm).find(".form_checkbox").replaceWith('<div class="inner" style="overflow-wrap:normal;">' + checkval + '</div>');
	$(Confirm).find(".empty_space").remove();

	

	// 入力タグの値を固定文字に置き換え
	$(Confirm).find("input, textarea").replaceWith(function() {
		let thisName = $(this).attr("name");
		let orgin = $(formName).find('[name="' + thisName + '"]')
		let val = orgin.val();
		$(this).replaceWith('<div class="inner" style="overflow-wrap:normal;">' + val + '</div>')
	});

	// 結果の返却
	return "以下の内容で送信します。<br>よろしいでしょうか？" + '<form class="ex">' + ($(Confirm).html()) + "</form>";
}

$().ready(function() {
	$.validator.setDefaults({
		errorElement: "div",
		submitHandler: function() {
			var Confirm = confirmGenerate();

			Swal.fire({
				title: '送信前確認',
				html : Confirm,
				showCancelButton: true,
				confirmButtonText: '送信',
				cancelButtonText: '戻る',
				reverseButtons: true,
				width : '80%',
				showClass: {
					popup: 'animated  faster',
					// icon: 'animated heartBeat delay-1s'
				},
				hideClass: {
					popup: 'animated fadeOutUp faster',
					// icon: 'animated heartBeat delay-1s'
				},
			}).then((result) => {
				// 送信ボタンの検知
				if (result.isConfirmed) {
					
					// googleReCaptchaStart
					grecaptcha.ready(function() {
						grecaptcha.execute('6Le7jeQeAAAAANzRaYeX6LSo58G3K_Xov8MRsMr0', {action: 'submit'}).then(function(token) {
							// Add your logic to submit to your backend server here.
							var mailForm = document.querySelector(formName);
							var recaptchaToken = mailForm.querySelector('[name="recaptchaToken"]');
							if(!recaptchaToken){
								recaptchaToken = document.createElement("input");
								recaptchaToken.setAttribute("name", "recaptchaToken");
								recaptchaToken.setAttribute("type", "hidden");
								mailForm.appendChild(recaptchaToken);
							}
							recaptchaToken.value = token;
					
							// フォーム送信処理
							$.ajax({
								url : $(formName).attr('action'),
								type: $(formName).attr('method'),
								data: $(formName).serialize(),
							})
							.done(function(data) {	// 送信成功時の処理
								var result = JSON.parse(data)
								if(result.result){
									if(result.redirectURL){
										location.href = result.redirectURL;
									}else{
										Swal.fire({
											icon: 'success',
											title: result.msg,
										});
									}
								}else{
									Swal.fire({
										icon: 'error',
										title: result.msg,
									})
								}
							})
							.fail(function() {	// 送信失敗時の処理
								Swal.fire({
									icon: 'error',
									title: '送信失敗しました。',
								})
							});
					
						});
					});
					
				}
			})
		}
	});

	// validate the comment form when it is submitted
	// validate signup form on keyup and submit
	$(formName).validate({
    rules : {
        purpose : {
            required : true
        }, 
        media : {
            required : true
        }, 
        company : {
            required : true
        }, 
        email : {
            required : true, 
            email : true
        }, 
        tel : {
            pattern : /(^0\d{1,3}-\d{1,4}-\d{4}$|^0\d{9,10}$)/i
        }
    }, 
    messages : {
        purpose : "お問い合わせ内容を選択してください。", 
        media : "検討中の媒体を選択してください。", 
        name : "会社名", 
        email : {
            required : "メールアドレスは必須です。", 
            email : "メールアドレスが正しくありません。"
        }, 
        tel : {
            required : "電話番号は必須です。", 
            pattern : "電話番号の形式が正しくありません。"
        }
    }
});	
});	