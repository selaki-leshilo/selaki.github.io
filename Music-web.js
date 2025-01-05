
document.getElementById('signUpBtn').addEventListener('click',

function function1() {
    const signupContent = document.getElementById('js-content-header');
    signupContent.innerHTML = `      
        <div class="deco">

            <div class="SignUp-tab">
                
                <div class="heading">
                    SignUp
                </div>
                <div class="email">
                    <input class="email-input" type="email" placeholder="email"><i class="fa fa-"></i>
                </div>

                <div class="password">
                    <input class="password-input" type="password" placeholder="Password"><i class="fa fa-"></i>
                </div>

                <div class="signup-method">
                    Sign Up using:
                    <ul>
                        <li><i class="fa fa-google fa-2x"></i></li>
                        <li><i class="fa fa-facebook-square fa-2x"></i></li>
                        <li><i class="fa fa-twitter fa-2x"></i></li>
                        <li><i class="fa fa-github fa-2x"></i></li>
                    </ul>
                </div>

                <div class="message">
                    <input type="checkbox">
                    <p class="text">
                        by filling in this checkbox you agree to the user <button>terms & conditions</button>
                    </p>
                </div>

                <div class="button">
                    <button class="Register-btn">Register</button>
                </div>

                <div class="notice">
                    already have an account? click to<button id="Login">Login</button>
                </div>
            </div>

            <div class="deco1"></div>
            <div class="deco2"></div>
            <div class="deco3"></div>
            <div class="deco4"></div>
            <div class="deco5"></div>
            <div class="deco6"></div>
            <div class="deco7"></div>
        </div>        
        `;
});

document.getElementById('signUpBtn').addEventListener('click',

function function2() {
    const removeSignupBtn = document.getElementById('js-right-navBar');
    removeSignupBtn.innerHTML = `
    
            <a class="home" href="index.html"><i class="fa fa-home"></i>Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
    
    ` 

});

document.getElementById('signUpBtn').addEventListener('click',

    function function3() {
        const removeHearder = document.getElementById('js-bottom-header');
        removeHearder.innerHTML = `
        
        <div></div>
        ` 
        
    });