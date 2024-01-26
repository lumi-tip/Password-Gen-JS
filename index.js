<html>
    <head>
        <link rel="stylesheet" href="index.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
    </head>
    <body>
        <h1>Generate a <br><span>Radom Password</span></h1>
        <p>Never use an insecure password again</p>
        <form>
            <label> Password Length:</label>
            <div class="input-wrapper">
                <input type="number" placeholder="15" id="length-in"><br>
                <small id="length-err"></small>
            </div>
        </form>
        <button id="btn-el">Generate password</button>
        <hr>
        <div class="password-container">
            <div class="password-wrapper" id="first-pass">
            </div>
            <div class="password-wrapper" id="second-pass">
            </div>
        </div>
        
        
        <script src="index.js"></script>
        <script src="https://kit.fontawesome.com/4f7b8c1103.js" crossorigin="anonymous"></script>
    </body>
</html>
