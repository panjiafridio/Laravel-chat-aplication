<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/css/app.css">
    <title>Laravel Chat App</title>
</head>
<body>
    <div class="app">
        <header>
            <h1>Let's Talk</h1>
            <input type="text" name="username" id="username" placeholder="Please enter username...">
        </header>

        <div id="messages"></div>

        <form id="send-message">
            <input type="text" name="message" id="message-input" placeholder="write some message...">
            <button type="submit" id="message-send">Send message</button>
        </form>
    </div>

    <script src="./js/app.js"></script>
</body>
</html>