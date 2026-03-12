class LoginToYourAccount{
    constructor(page){
        this.emailIdTextField=page.locator("//input[@name='email']").first()
        this.passwordTextField=page.locator("//input[@name='password']")
        this.loginButton=page.locator("//button[@class='btn btn-default' and .='Login']")
    }
    async loginToyuorAccount(email,password){
        await this.emailIdTextField.fill(email)
        await this.passwordTextField.fill(password)
        await this.loginButton.dispatchEvent('click')
    }
}
export default LoginToYourAccount