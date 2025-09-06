# FORM AND REGISTER UI

Demo's Link : https://naraya-login-register-ui.netlify.app/
You can use it for your project, actually I made it while watching on YouTube tutorial, but nevermind, besides that I also understand the fundamentals, and it's fun

## Screenshot :
[Login Page Form]([https://imgur.com/a/UH9ZXsA](https://i.imgur.com/uFoBP9x.png))

## HTML :
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Naraya - Forms</title>
        <link rel="stylesheet" href="style.css">
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css" rel="stylesheet"/>
    </head>
    <body>
        <div class="container">
            <div class="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div class="input-box">
                        <input type="text" placeholder="Username">
                        <i class="ri-user-fill"></i>
                    </div>

                    <div class="input-box">
                        <input type="password" placeholder="Password">
                        <i class="ri-lock-fill"></i>
                    </div>

                    <div class="pass-forgot">
                        <a href="">Forgot Password?</a>
                    </div>
                    
                    <button type="submit" class="btn">Login</button>
                    <p>Or login with social platform</p>
                    <p>By @Naraya Rahmudi</p>
                    <div class="social-icons">
                        <a href=""><i class="ri-google-fill"></i></a>
                        <a href=""><i class="ri-github-fill"></i></a>
                        <a href=""><i class="ri-facebook-fill"></i></a>
                        <a href=""><i class="ri-linkedin-fill"></i></a>
                    </div>

                </form>
            </div>

            <div class="form-box register">
                <form action="">
                    <h1>Register</h1>
                    <div class="input-box">
                        <input type="text" placeholder="Username">
                        <i class="ri-user-fill"></i>
                    </div>

                    <div class="input-box">
                        <input type="email" placeholder="Email">
                        <i class="ri-mail-fill"></i>
                    </div>

                    <div class="input-box">
                        <input type="password" placeholder="Password">
                        <i class="ri-lock-fill"></i>
                    </div>

                    <div class="pass-forgot">
                        <a href="#" class="have-acc">Already have an account</a>
                    </div>
                    
                    <button href="#" type="submit" class="btn">Create Now</button>
                    <p>Or register with social platform</p>
                    <p>By @Naraya Rahmudi</p>
                    <div class="social-icons">
                        <a href="#"><i class="ri-google-fill"></i></a>
                        <a href="#"><i class="ri-github-fill"></i></a>
                        <a href="#"><i class="ri-facebook-fill"></i></a>
                        <a href="#"><i class="ri-linkedin-fill"></i></a>
                    </div>

                </form>
            </div>

            <div class="toggle-box">
                <div class="toggle-panel toggle-left">
                    <h1>Hello, Welcome!</h1>
                    <p>Do not have an account?</p>
                    <button class="btn register-button">Register</button>
                </div>

                <div class="toggle-panel toggle-right">
                    <h1>Welcome Back!</h1>
                    <p>Already have an account?</p>
                    <button class="btn login-button">Login</button>
                </div>
            </div>

        </div>

        <script src="main.js"></script>
    </body>
    <div class="background-test"></div>
    <footer class="copyright">
        &copy; <span>N</span>
        <span>A</span>
        <span>R</span>
        <span>A</span>
        <span>Y</span>
        <span>A</span>
    </footer>
</html>


```
## CSS :
```css
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Bebas+Neue&family=Dancing+Script:wght@400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Pacifico&display=swap');

/* --! NARAYA ROOT -- */

:root {
    --primaryTextColor: #252222;
    --secondaryTextColor: #6e6969;

    --borderColor: #f1f1f1;
    --lineColor: #d9d9d9;

    --primaryBackgroundColor: #fff;
    --secondaryBackgroundColor: #fbfbfb;
    --thirdBackgroundColor: #f5f3fe;

    --sectionPadding: 6rem 0;

    --primaryIconColor: #001BB7;
    --SecondaryIconColor: #0046FF;
    --thirdIconColor: #FF8040;

    --itemBorderRadius: 8px;
}


* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    font-family: "Montserrat", sans-serif;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(60deg, 
    rgb(230, 222, 222) 25%,
    rgb(212, 202, 202),
    rgb(233, 144, 126),
    rgb(213, 96, 96)
    );
}

/* BUTTON */
.btn {
    width: 100%;
    height: 48px;
    background: rgb(213, 96, 96);
    border: none;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    font-size: 18px;
    color: var(--primaryBackgroundColor);
    font-weight: 600;
}
/* END OF BUTTON */
.container {
    position: relative;
    background: var(--secondaryBackgroundColor);
    width: 850px;
    height: 550px;
    border-radius: 30px;
    box-shadow: 0 0 30px rgba(0, 0, 0, .3);
    margin: 20px;
    overflow: hidden;

}

.form-box {
    position: absolute;
    width: 50%;
    height: 100%;
    background: var(--secondaryBackgroundColor);
    right: 0;
    display: flex;
    align-items: center;
    color: var(--primaryTextColor);
    text-align: center;
    padding: 0 3rem;
    z-index: 1;
    transition: .6s ease-in-out 1.2s, visibility 0s 1s;
}

.container.active .form-box {
    right: 50%;
}

.form-box.register {
    visibility: hidden;
}

.container.container.active .form-box.register {
    visibility: visible;
}

form {
    width: 100%;

}

form p {
    font-size: 14.5;
    margin: 15px 0;
}

.container h1 {
    font-size: 36px;
}

.input-box {
    position: relative;
    margin: 30px 0;
}

.input-box input {
    width: 100%;
    padding: 13px 50px 13px 25px;
    background-color: #f6f3f1;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 15px;
    color: var(--secondaryTextColor);
    font-weight: 700;
}

.input-box input::placeholder {
    font-weight: 400;
    color: var(--primaryTextColor);
}

.input-box i {
    position: absolute;
    right: 17px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--secondaryTextColor);
    font-size: 22px;
    

}

.pass-forgot {
    margin: -15px 0 15px;
}

.pass-forgot a {
    text-decoration: none;
    font-size: 14.5px;
    color: var(--primaryTextColor);
}

.social-icons {
    display: flex;
    justify-content: center;
}

.social-icons a {
    display: inline-flex;
    padding: 10px;
    border: 1.9px solid var(--primaryBackgroundColor);
    border-radius: var(--itemBorderRadius);
    text-decoration: none;
    font-size: 26px;
    color: var(--primaryTextColor);
    margin: 0 0.5rem;
}

.toggle-box {
    position: absolute;
    width: 100%;
    height: 100%;
    
}

.toggle-box::before {
    content: "";
    position: absolute;
    width: 300%;
    height: 100%;
    background-color: rgb(196, 76, 76);
    z-index: 2;
    left: -250%;
    border-radius: 150px;
    transition: 1.8s ease-in-out;
}

.container.active .toggle-box::before {
    left: 50%;
}

.toggle-panel {
    position: absolute;
    width: 50%;
    height: 100%;
    /* background: seagreen; */
    display: flex;
    color: var(--secondaryBackgroundColor);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    transition: .6s ease-in-out;
}

.toggle-panel.toggle-left {
    left: 0;
    transition-delay: 1.2s;
}

.container.active .toggle-panel.toggle-left {
    left: -50%;
    transition-delay: .6s;
}

.toggle-panel.toggle-right {
    right: -50%;
    transition-delay: .6s;
}

.container.active .toggle-panel.toggle-right {
    right: 0;
    transition-delay: 1.2s;

}

.toggle-panel p {
    margin: 5px 0 20px 0;
}

.toggle-panel .btn {
    width: 160px;
    height: 40px;
    /* background: transparent; */
    background: transparent;
    color: var(--secondaryBackgroundColor);
    border: 2px solid var(--secondaryBackgroundColor);
    box-shadow: none;
}

.copyright {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 0;
    line-height: 2rem;
    color: white;
    background-color: #d45555;
    
    padding: 0 2rem;
    height: 100%;
    width: 50px;
    z-index: -1;
    
}

.copyright::before {
    content: "";
    width: 1px;
    height: 50px;
    background: #fff;
    margin: 20px 0;
}

/* RESPONSIF */

@media screen and (max-width: 1050px) {
    .copyright {
        position: absolute;
        display: flex;
        flex-direction: row;
        letter-spacing: 1rem;
        align-items: center;
        justify-content: center;
        color: white;
        padding: 0 2rem;
        bottom: 0;
        background-color: #d45555;
        height: 50px;
        width: 100%;
        z-index: -1;
    }

    .copyright::before {
        content: "";
        width: 50px;
        height: 1px;
        background: #fff;
        margin: 0 20px;
    }
}


@media screen and (max-width: 650px) {
    .container {
        height: calc(100vh - 20vh)
    }

    .form-box {
        width: 100%;
        height: 70%;
        bottom: 0;
    }

    .container.active .form-box {
        right: 0;
        bottom: 30%;
    }

    .toggle-box::before {
        left: 0;
        top: -270%;
        width: 100%;
        height: 300%;
        border-radius: 20vw;
    }

    .container.active .toggle-box::before {
        top: 70%;
        left: 0;
    }

    .toggle-panel {
        width: 100%;
        height: 30%;
    }

    .toggle-panel.toggle-left {
        top: 0;
    }

    .container.active .toggle-panel.toggle-left {
        left: 0;
        top: -30%;
    }
    
    .toggle-panel.toggle-right {
        right: 0;
        bottom: -30%;
    }

    .container.active .toggle-panel.toggle-right {
        bottom: 0;
    } 

}
@media screen and (max-width: 400px) {
    .form-box {
        padding: 20px;
    }
    
    .toggle-panel h1 {
        font-size: 30px;
    }
}
```

## JAVASCRIPT :
```javascript
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-button');
const loginBtn = document.querySelector('.login-button');
const haveAccBtn = document.querySelector('.have-acc');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

haveAccBtn.addEventListener('click', () => {
    container.classList.remove('active');
});
