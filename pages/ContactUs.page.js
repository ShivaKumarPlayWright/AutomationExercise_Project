class ContactUs{
    constructor(page){
        this.ContactUsButton=page.locator("//a[.=' Contact us']")
        this.nameTextFeild=page.getByPlaceholder("Name")
        this.emailTextFeild=page.locator("//input[@name='email']")
        this.subjectTextFeild=page.getByPlaceholder("Subject")
        this.messageTextFeild=page.getByPlaceholder("Your Message Here")
        this.uploadFile=page.locator("//input[@name='upload_file' and @class='form-control']")
        this.submitButton=page.locator("//input[@name='submit']")
    }

    async contactUs(name,emailId,subject,message,filepath) {
        await this.nameTextFeild.fill(name)
        await this.emailTextFeild.fill(emailId)
        await this.subjectTextFeild.fill(subject)
        await this.messageTextFeild.fill(message)
        await this.uploadFile.setInputFiles(filepath)
        await this.submitButton.click()
    }
}
export default ContactUs