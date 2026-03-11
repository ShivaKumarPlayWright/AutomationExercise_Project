class NewUserSingUp{
    constructor(page){
        this.userNameTextField=page.getByPlaceholder("Name")
        this.emaiIdTextField=page.locator("//input[@name='email' and @data-qa='signup-email']")
        this.loginButton=page.getByRole("button",{name:"Signup"})

    }

    async newUserLogin(userName,emailId){
        await this.userNameTextField.fill(userName)
        await this.emaiIdTextField.fill(emailId)
        await this.loginButton.click()
    }
}
export default NewUserSingUp