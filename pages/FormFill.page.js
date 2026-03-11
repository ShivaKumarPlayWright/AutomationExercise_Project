class FormFillDetails {
    constructor(page) {
        this.page=page
        this.mrcheckBox = page.locator("#id_gender1")
        this.passWordTextField = page.locator("#password")
        this.dayDropDown = page.locator("#days")
        this.monthDropDown = page.locator("#months")
        this.yearDropDown = page.locator("#years")
        this.signUpCheckBox=page.locator("#newsletter")
        this.receiveCheckBox=page.locator("#optin")
    }
  //select[@id='days']//following-sibling::option[@value='20']
    //option[.='Month']/following-sibling::option
    //option[.='Year']/following-sibling::option

    async formFill(){
        await this.mrcheckBox.click()
        await this.passWordTextField.fill("shivakumar@123")
        await this.dayDropDown.selectOption('20')
        await this.monthDropDown.selectOption('January')
        await this.yearDropDown.selectOption('1997')
        await this.signUpCheckBox.click()
        await this.receiveCheckBox.click()
    }
}
export default FormFillDetails 