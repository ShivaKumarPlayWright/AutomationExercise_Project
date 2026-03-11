class AddressInformation{
    constructor(page){
         this.page=page
         this.firstNameTextField=page.locator("#first_name")
         this.lastNameTextField=page.locator("#last_name")
         this.companyTextField=page.locator("#company")
         this.address1TextField=page.locator("#address1")
         this.address2TextField=page.locator("#address2")
         this.countryDropDown=page.locator("#country")
         this.stateTextField=page.locator("#state")
         this.cityTextField=page.locator("#city")
         this.zipCodeTextField=page.locator("#zipcode")
         this.mobileNumberTextField=page.locator("mobile_number")
         this.createAccountButton=page.getByRole("button",{name:"Create Account"})

    }

    async addressInformation(fName,lName,cName,address1,address2,country,state,city,zipcode,mbNumber){
        await this.firstNameTextField.fill(fName)
        await this.lastNameTextField.fill(lName)
        await this.companyTextField.fill(cName)
        await this.address1TextField.fill(address1)
        await this.address2TextField.fill(address2)
        await this.countryDropDown.selectOption(country)
        await this.stateTextField.fill(state)
        await this.cityTextField.fill(city)
        await this.zipCodeTextField.fill(zipcode)
        await this.mobileNumberTextField.fill(mbNumber)
        await this.createAccountButton.click()

    }
}
export default AddressInformation