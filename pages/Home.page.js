class HomePage{
    constructor(page){
       this.loginButton=page.locator("//a[.=' Signup / Login']")
       this.continueButton=page.locator("//a[.='Continue']")
       this.deleteLink=page.locator("//a[text()=' Delete Account']")
       this.testCaseLink=page.locator("//a[.=' Test Cases']")
       this.productLink=page.locator("//a[text()=' Products']")
    }
}
export default HomePage