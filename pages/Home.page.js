class HomePage{
    constructor(page){
       this.loginButton=page.locator("//a[.=' Signup / Login']")
       this.continueButton=page.locator("//a[.='Continue']")
       this.deleteLink=page.locator("//a[text()=' Delete Account']")
    }
}
export default HomePage