package actionsPerformed;

import java.awt.*;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import GlobalActions.scrollToAnElement;
import org.apache.log4j.Logger;
import org.openqa.selenium.*;

import GlobalActions.Screenshots;
import helpers.Environment;
import org.openqa.selenium.Point;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;
import pageobjects.ConnectedDeviceDetailsPage;
import pageobjects.PaymentPage;
import org.openqa.selenium.support.ui.Select;

public class PaymentPageActions extends Environment {

    final static Logger log = Logger.getLogger("PaymentPageActions");
    static JavascriptExecutor executor = (JavascriptExecutor) driver;


    public static void Set_Bank_details() throws IOException, InterruptedException {

        scrollToAnElement.scrollToElement(PaymentPage.Name_On_Account);
        Thread.sleep(2000);
        pageobjects.PaymentPage.Name_On_Account.sendKeys("Test Accepta");
        log.debug("Entered name is Test Accepta");
        Thread.sleep(2000);
        pageobjects.PaymentPage.Account_Number.sendKeys("10207136");
        log.debug("Entered Account number - 10207136");
        Thread.sleep(2000);
        pageobjects.PaymentPage.Sort_Code1.sendKeys("20");
        log.debug("Entered sort code - 20");
        Thread.sleep(2000);
        pageobjects.PaymentPage.Sort_Code2.sendKeys("15");
        log.debug("Entered sort code - 15");
        Thread.sleep(2000);
        pageobjects.PaymentPage.Sort_Code3.sendKeys("96");
        log.debug("Entered sort code - 96");
        Thread.sleep(2000);
        pageobjects.PaymentPage.Accept_Terms_Checkbox.click();
        log.debug("Clicked on the Accept Terms checkbox");
        Screenshots.captureScreenshot();

    }

    public static void Set_Bank_details(String Username) throws IOException, InterruptedException {

        //scrollToAnElement.scrollToElement(PaymentPage.Name_On_Account);
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,300)", "");

        Thread.sleep(2000);
        if(driver.findElements(By.xpath("//input[@id='accountName']")).size()>0) {
            pageobjects.PaymentPage.Name_On_Account.sendKeys(Username);
            log.debug("Entered name is " + Username);
            Thread.sleep(2000);
            pageobjects.PaymentPage.Account_Number.sendKeys("10207136");
            log.debug("Entered Account number - 10207136");
            Thread.sleep(2000);
            pageobjects.PaymentPage.Sort_Code1.sendKeys("20");
            log.debug("Entered sort code - 20");
            Thread.sleep(2000);
            pageobjects.PaymentPage.Sort_Code2.sendKeys("15");
            log.debug("Entered sort code - 15");
            Thread.sleep(2000);
            pageobjects.PaymentPage.Sort_Code3.sendKeys("96");
            log.debug("Entered sort code - 96");
            Thread.sleep(2000);
            Screenshots.captureScreenshot();
            pageobjects.PaymentPage.Accept_Terms_Checkbox.click();
            log.debug("Clicked on the Accept Terms checkbox");
        }
        Screenshots.captureScreenshot();

    }


    public static void enterPotalCodeAddress()  {

        pageobjects.PaymentPage.housenumber.sendKeys("41");
        log.debug("Entered the House Number - 41");

        pageobjects.PaymentPage.postcode.sendKeys("WA27JQ");
        log.debug("Entered the Postcode - WA27JQ");

        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        pageobjects.PaymentPage.postcodesubmit.click();
        log.debug("Clicked on Find address");

        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        pageobjects.PaymentPage.Selectaddress.click();
        log.debug("Home Address Selected");
        try {
            Thread.sleep(3000);
            driver.findElement(By.xpath("//*[@id='btn-continue-label']")).click();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public static void Set_Bank_details_hv() throws IOException, InterruptedException {

        scrollToAnElement.scrollToElement(PaymentPage.Name_On_Account);
        Thread.sleep(2000);
        pageobjects.PaymentPage.Name_On_Account.sendKeys("Test Nine");
        log.debug("Entered name is Test Nine");
        Thread.sleep(2000);
        pageobjects.PaymentPage.Account_Number.sendKeys("10207136");
        log.debug("Entered Account number - 10207136");
        Thread.sleep(2000);
        pageobjects.PaymentPage.Sort_Code1.sendKeys("20");
        log.debug("Entered sort code - 20");
        Thread.sleep(2000);
        pageobjects.PaymentPage.Sort_Code2.sendKeys("15");
        log.debug("Entered sort code - 15");
        Thread.sleep(2000);
        pageobjects.PaymentPage.Sort_Code3.sendKeys("96");
        log.debug("Entered sort code - 96");
        Thread.sleep(2000);
        pageobjects.PaymentPage.Accept_Terms_Checkbox.click();
        log.debug("Clicked on the Accept Terms checkbox");
        Screenshots.captureScreenshot();

    }



    public static void affordabilityValidation(String employmentStatus, String annualIncome) throws IOException, InterruptedException {

        scrollToAnElement.scrollToElement(pageobjects.PaymentPage.affordabilityHeading);
        Thread.sleep(2000);
        Screenshots.captureScreenshot();

        //Employment Status
        /*if (driver.findElements(By.xpath("//span/i[@id='employment-statusSelectBoxItArrow']")).size() > 0) {
            pageobjects.PaymentPage.employmentDropDown.click();
            Thread.sleep(3000);
            Screenshots.captureScreenshot();


            WebElement empStatus = null;
            String empStatusName = "";
            List<WebElement> empStatusNames = driver.findElements(By.xpath("//ul[@id='employment-statusSelectBoxItOptions']/li"));

            for (int i = 1; i <= empStatusNames.size(); i++) {
                empStatusName = driver.findElement(By.xpath("//ul[@id='employment-statusSelectBoxItOptions']/li[" + i + "]")).getText();
                Thread.sleep(2000);
                if (empStatusName.contains(employmentStatus)) {
                    empStatus = driver.findElement(By.xpath("//ul[@id='employment-statusSelectBoxItOptions']/li[" + i + "]"));
                    break;
                }
            }

            Thread.sleep(3000);
            Point coordinates = empStatus.getLocation();
            Robot robot = new Robot();
            robot.mouseMove(coordinates.getX() + 80, coordinates.getY() + 100);
            Thread.sleep(2000);
            log.debug("Moving Mouse to employment status dropdown\n");

            Actions action = new Actions(driver);
            action.moveToElement(empStatus).click().build().perform();
            log.debug("Selected " + employmentStatus + "from employment status dropdown\n");
            Thread.sleep(3000);
            Screenshots.captureScreenshot();
        }


        //Annual Income
        if (driver.findElements(By.xpath("//span/i[@id='annual-incomeSelectBoxItArrow']")).size() > 0) {
            pageobjects.PaymentPage.annualIncomeDropDown.click();
            Thread.sleep(3000);
            Screenshots.captureScreenshot();


            WebElement annualIncomeEle = null;
            String income = "";
            List<WebElement> annualIncomeList = driver.findElements(By.xpath("//ul[@id='annual-incomeSelectBoxItOptions']/li"));

            for (int i = 1; i <= annualIncomeList.size(); i++) {
                income = driver.findElement(By.xpath("//ul[@id='annual-incomeSelectBoxItOptions']/li[" + i + "]")).getText();
                Thread.sleep(2000);
                if (income.contains(annualIncome)) {
                    annualIncomeEle = driver.findElement(By.xpath("//ul[@id='annual-incomeSelectBoxItOptions']/li[" + i + "]"));
                    break;
                }
            }

            Thread.sleep(3000);
            Point coordinates = annualIncomeEle.getLocation();
            Robot robot = new Robot();
            robot.mouseMove(coordinates.getX() + 80, coordinates.getY() + 100);
            Thread.sleep(2000);
            log.debug("Moving Mouse to annual income dropdown\n");

            Actions action = new Actions(driver);
            action.moveToElement(annualIncomeEle).click().build().perform();
            log.debug("Selected " + annualIncome + "from annual income dropdown\n");
            Thread.sleep(3000);
            Screenshots.captureScreenshot();
        }*/

        List<WebElement> empStatusNames = driver.findElements(By.xpath("//select[@id='employment-status']/option"));

        log.debug("The list of employment status is: \n");
        for(int i=1;i<empStatusNames.size();i++){
            log.debug("Status "+i+" is: "+empStatusNames.get(i)+"\n");
        }
        WebElement empStatusDropdown = driver.findElement(By.xpath("//select[@id='employment-status']"));
        Select select = new Select(empStatusDropdown);
        select.selectByVisibleText(employmentStatus);
        Thread.sleep(2000);
        Screenshots.captureScreenshot();

        List<WebElement> annualIncomeList = driver.findElements(By.xpath("//select[@id='annual-income']/option"));

        log.debug("The list of Income status is: \n");
        for(int i=1;i<annualIncomeList.size();i++){
            log.debug("Income "+i+" is: "+annualIncomeList.get(i)+"\n");
        }
        WebElement annualIncomDropdown = driver.findElement(By.xpath("//select[@id='annual-income']"));
        Select select2 = new Select(annualIncomDropdown);
        select2.selectByVisibleText(annualIncome);
        Thread.sleep(2000);
        Screenshots.captureScreenshot();

        if(driver.findElements(By.xpath("(//span[@id='affordability-terms-declaration1-custom'])")).size()>0) {
            pageobjects.PaymentPage.agreeFinancialCommitments.click();
            log.debug("Selected agree Financial commitments check box\n");
        }

        if(driver.findElements(By.xpath("(//span[@id='affordability-terms-declaration2-custom'])")).size()>0) {
            pageobjects.PaymentPage.agreeMyCircumstances.click();
            log.debug("Selected agree My Circumstances check box\n");
        }
        Thread.sleep(2000);
        Screenshots.captureScreenshot();

        /*if(driver.findElements(By.xpath("//a[@class='affordability-section-dont-agree-link']")).size()>0) {
            pageobjects.PaymentPage.affordabilityDontAgreeLink.click();
            log.debug("Clicked on affordability Dont Agree Link\n");
            JavascriptExecutor jse = (JavascriptExecutor) driver;
            jse.executeScript("window.scrollBy(0,400)", "");
            Thread.sleep(3000);
            Screenshots.captureScreenshot();
        }*/
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,250)", "");
        Screenshots.captureScreenshot();
        Thread.sleep(3000);

        if(driver.findElements(By.xpath("//span[@id='confirm-address-custom']")).size()>0){
            pageobjects.PaymentPage.affordabilityAgreeCreditCheck.click();
            log.debug("Selected agree CreditCheck check box\n");
            Thread.sleep(2000);
            Screenshots.captureScreenshot();
        }
    }

    public static void Time_At_Address() throws IOException, InterruptedException {
        Thread.sleep(5000);
        scrollToAnElement.scrollToElement(PaymentPage.Stay_Address_Years);

        pageobjects.PaymentPage.Stay_Address_Years.sendKeys("9");
        log.debug("Entered the stayed at address - 9");
        Thread.sleep(2000);
        pageobjects.PaymentPage.Stay_Address_months.sendKeys("9");
        log.debug("Entered the stayed at months - 9");
        Thread.sleep(2000);

        //executor.executeScript("arguments[0].click();", pageobjects.PaymentPage.Confirm_Address_Checkbox);

        /*pageobjects.PaymentPage.Confirm_Address_Checkbox.click();
        log.debug("Clicked on the Confirm Address checkbox");*/
        Screenshots.captureScreenshot();
    }

    public static void Time_At_Address_CC() throws InterruptedException, IOException {

        Thread.sleep(5000);
        /*pageobjects.PaymentPage.housenumber.sendKeys("41");
        log.debug("Entered the House Number - 41");

        pageobjects.PaymentPage.postcode.sendKeys("WA27JQ");
        log.debug("Entered the Postcode - WA27JQ");

        pageobjects.PaymentPage.postcodesubmit.click();
        log.debug("Clicked on Find address");

        Thread.sleep(6000);
        pageobjects.PaymentPage.Selectaddress.click();*/

        //DeliveryPageActions.SetDelivery();
        DeliveryPageActions.SetDeliveryPaymentPage();

        log.debug("Home Address Selected");
        Thread.sleep(5000);
        pageobjects.PaymentPage.Stay_Address_Years.sendKeys("9");
        log.debug("Entered the stayed at address - 9");
        Thread.sleep(4000);
        pageobjects.PaymentPage.Stay_Address_months.sendKeys("9");
        log.debug("Entered the stayed at months - 9");

        Thread.sleep(5000);
        /*pageobjects.PaymentPage.Confirm_Address_Checkbox.click();
        log.debug("Clicked on the Confirm Address checkbox");*/
        Screenshots.captureScreenshot();

    }
    public static void Card_Details_CCV() throws InterruptedException, IOException {

       //driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
        Thread.sleep(30000);

            /*driver.switchTo().frame("payment-iframe");
            Thread.sleep(5000);
            if (driver.findElements(By.xpath("//input[@type='password']")).size() > 0) {*/

            if (driver.findElements(By.xpath("//iframe[@class='payment-iframe']")).size() > 0) {

                driver.switchTo().frame("payment-iframe");
                Thread.sleep(3000);

                if (driver.findElements(By.xpath("//iframe[@id='authWindow']")).size() > 0) {

                    driver.switchTo().frame("authWindow");
                    Thread.sleep(5000);
                }

                PaymentPage.CCVSecurityCode.sendKeys("1234");
                log.debug("Entered CVV security code");
                Thread.sleep(3000);
                Screenshots.captureScreenshot();
                JavascriptExecutor executor = (JavascriptExecutor) driver;
                executor.executeScript("arguments[0].click();", PaymentPage.Submit_Next_Step);
                //PaymentPage.Submit_Next_Step.click();
                log.debug("Clicking on submit to next step");
                Thread.sleep(12000);
                log.debug("*********We are done***************");
                log.debug("Exiting the Card_CCV section");
                driver.switchTo().defaultContent();
            }
    }

    public static void depositCard_Details_CCV() throws InterruptedException, IOException {

        //driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
        Thread.sleep(5000);

        if (driver.findElements(By.xpath("//iframe[@class='deposit-iframe']")).size() > 0) {

            driver.switchTo().frame("deposit-iframe");
            Thread.sleep(5000);

            PaymentPage.SecurityCode.sendKeys("123");
            log.debug("Entered CVV security code for deposit section");
            Thread.sleep(3000);
            Screenshots.captureScreenshot();
            JavascriptExecutor executor = (JavascriptExecutor) driver;
            executor.executeScript("arguments[0].click();", PaymentPage.Continue_Next_Step);
            //PaymentPage.Submit_Next_Step.click();
            log.debug("Clicking on submit to next step");

            Thread.sleep(10000);
        }
    }


    public static void SelectAddrerss() throws InterruptedException, IOException {
        Thread.sleep(3000);
        if(driver.findElements(By.xpath("(//p[@id='customerAddress']//following-sibling::button)[1]")).size()>0) {
            JavascriptExecutor jse = (JavascriptExecutor) driver;
            jse.executeScript("window.scrollBy(0,400)", "");
            Thread.sleep(3000);
            Screenshots.captureScreenshot();
            Thread.sleep(2000);
            PaymentPage.Selectadd.click();
            log.debug("Address Selected");
        }
    }


    public static void Card_Details(String Username) throws InterruptedException, IOException {

       /* if(driver.findElement(By.xpath(" (//button[@name='select-address-btn'])[2]")).isEnabled()){
            driver.findElement(By.xpath(" (//button[@name='select-address-btn'])[2]")).click();
        }*/
        Thread.sleep(10000);
        if (driver.findElements(By.xpath("//iframe[@class='payment-iframe']")).size() > 0) {
            driver.switchTo().frame("payment-iframe"); // switching the frame by ID

            log.debug("********We are switch to the iframe*******");
            log.debug("Entering the Payments section");
            Thread.sleep(5000);
            scrollToAnElement.scrollToElement(PaymentPage.CardHolderName);
            //scrollToAnElement.scrollToElement(driver.findElement(By.xpath("//div[@id='card-details-section']/div[2]/h2")));

            Thread.sleep(5000);
            PaymentPage.CardHolderName.sendKeys(Username);
            log.debug("Entering name of the card as " + Username);

            Thread.sleep(2000);
            PaymentPage.CardNumber.sendKeys("4539791001730106");
            log.debug("Entered Card number as 4539xxxxxxxxxx06");
            Thread.sleep(2000);
            PaymentPage.CardMonth.sendKeys("12");
            log.debug("Entered Expiry Month");
            Thread.sleep(2000);
            PaymentPage.CardYear.sendKeys("2019");
            log.debug("Entered Expiry Year");
            Thread.sleep(2000);
            PaymentPage.SecurityCode.sendKeys("123");
            log.debug("Entered CVV security code");
            Thread.sleep(2000);
            Screenshots.captureScreenshot();
            PaymentPage.Continue_Next_Step.sendKeys(Keys.ENTER);
            log.debug("Clicking on continue to next step");
            Thread.sleep(10000);
            log.debug("*********We are done***************");
            log.debug("Exiting the Payments section");
            driver.switchTo().defaultContent();
            // log.debug(driver.getTitle());
        }


    }

    public static void Card_Details_CCA() throws InterruptedException, IOException {

       /* if(driver.findElement(By.xpath(" (//button[@name='select-address-btn'])[2]")).isEnabled()){
            driver.findElement(By.xpath(" (//button[@name='select-address-btn'])[2]")).click();
        }*/
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,300)", "");
        Thread.sleep(2000);
        Screenshots.captureScreenshot();

        scrollToAnElement.scrollToElement(driver.findElement(By.xpath("//div[@id='card-details']")));
        Thread.sleep(2000);
        Screenshots.captureScreenshot();
        driver.switchTo().frame("payment-iframe"); // switching the frame by ID

        Thread.sleep(2000);

        PaymentPage.SecurityCode.sendKeys("123");
        log.debug("Entered CVV security code");
        Thread.sleep(2000);
        Screenshots.captureScreenshot();
        PaymentPage.Continue_Next_Step.sendKeys(Keys.ENTER);
        log.debug("Clicking on continue to next step");
        Thread.sleep(10000);
        log.debug("*********We are done***************");
        log.debug("Exiting the Payments section");
        driver.switchTo().defaultContent();
        // log.debug(driver.getTitle());


    }



    public static void Card_Details() throws InterruptedException, IOException {
        Thread.sleep(10000);
        driver.switchTo().frame("payment-iframe"); // switching the frame by ID

        log.debug("********We are switch to the iframe*******");
        log.debug("Entering the Payments section");
        Thread.sleep(5000);
        scrollToAnElement.scrollToElement(PaymentPage.CardHolderName);
        Thread.sleep(2000);
        PaymentPage.CardHolderName.sendKeys("Test Accepta");
        log.debug("Entering name of the card as Test Accepta");

        Thread.sleep(2000);
        PaymentPage.CardNumber.sendKeys("4539791001730106");
        log.debug("Entered Card number as 4539xxxxxxxxxx06");
        Thread.sleep(2000);
        PaymentPage.CardMonth.sendKeys("01");
        log.debug("Entered Expiry Month");
        Thread.sleep(2000);
        PaymentPage.CardYear.sendKeys("2020");
        log.debug("Entered Expiry Year");
        Thread.sleep(2000);
        PaymentPage.SecurityCode.sendKeys("123");
        log.debug("Entered CVV security code");
        Thread.sleep(2000);
        PaymentPage.Continue_Next_Step.sendKeys(Keys.ENTER);
        log.debug("Clicking on continue to next step");
        Thread.sleep(2000);
        log.debug("*********We are done***************");
        log.debug("Exiting the Payments section");
        driver.switchTo().defaultContent();
        // log.debug(driver.getTitle());
        Screenshots.captureScreenshot();

    }


    public static void Card_Details_hv() throws InterruptedException, IOException {
        driver.switchTo().frame("payment-iframe"); // switching the frame by ID

        log.debug("********We are switch to the iframe*******");
        log.debug("Entering the Payments section");
        Thread.sleep(2000);
        scrollToAnElement.scrollToElement(PaymentPage.CardHolderName);
        Thread.sleep(2000);
        PaymentPage.CardHolderName.sendKeys("Test Nine");
        log.debug("Entering name of the card as Test Nine");
        Thread.sleep(2000);
        PaymentPage.CardNumber.sendKeys("4539791001730106");
        log.debug("Entered Card number as 4539xxxxxxxxxx06");
        Thread.sleep(2000);
        PaymentPage.CardMonth.sendKeys("01");
        log.debug("Entered Expiry Month");
        Thread.sleep(2000);
        PaymentPage.CardYear.sendKeys("2020");
        log.debug("Entered Expiry Year");
        Thread.sleep(2000);
        PaymentPage.SecurityCode.sendKeys("123");
        log.debug("Entered CVV security code");
        Thread.sleep(2000);
        PaymentPage.Continue_Next_Step.sendKeys(Keys.ENTER);
        log.debug("Clicking on continue to next step");
        Thread.sleep(2000);
        log.debug("*********We are done***************");
        log.debug("Exiting the Payments section");
        driver.switchTo().defaultContent();
        // log.debug(driver.getTitle());
        Screenshots.captureScreenshot();
    }

    public static void ValidateNonCreditPaymentPage() throws IOException, InterruptedException {
        // Below will display contents of the section

        log.debug("Payment pages validations :: " + driver.getTitle());

        log.debug("The Main Total are : " + pageobjects.PaymentPage.BasketTotal.getText());
        Thread.sleep(3000);
        // log.debug("The Basket contents are : "
        // +pageobjects.PaymentPage.BasketContent.getText());
        Screenshots.captureScreenshot();

    }

    public static void InsuranceSectionPaymentPage() throws InterruptedException, IOException {
        log.debug("Entering InsuranceSectionPaymentPage Method");

        Thread.sleep(5000);

        if (driver.findElement(By.xpath("(//li[@class='minicopy'] | //li[@class='microcopy'])[1]")).isDisplayed()) {
            log.debug("Insurance is displayed in Payment page and text is  - "
                    + driver.findElement(By.xpath("(//li[@class='minicopy'] | //li[@class='microcopy'])[1]")).getText());

        } else {
            log.debug("Insurance is not displayed");
        }

        Thread.sleep(2000);
        log.debug("Completed InsuranceSectionPaymentPage function");

        Screenshots.captureScreenshot();

    }

    public static void verifyCopyTextHomeAddress() throws IOException {
        String ExpectedText = "";
        String ActualText = "";

        // Dont edit the above
        ExpectedText = "If you have moved recently, you will need to ensure that your billing address is set to your new address in order to proceed.";
        ActualText = pageobjects.PaymentPage.HomeAddress.getText();

        if (ActualText.contains(ExpectedText)) {
            log.debug("Verification Success: Copy text message is getting displayed below home address");

        } else {
            log.debug("Verification Failed: Copy text message is not getting displayed below home address");

        }

        log.debug("Assertion worked for Ecomm-11886");

        Screenshots.captureScreenshot();

    }

    public static void ReviewConfirmCTA_PaymentPage() {

        try {
            Screenshots.captureScreenshot();
            if(driver.findElements(By.xpath("//h1[normalize-space()='Review details']/../div[3]/button[text()='Confirm']")).size()>0) {
                if (PaymentPage.reviewConfirmCTA.isDisplayed()) {
                    pageobjects.PaymentPage.reviewConfirmCTA.click();
                    log.debug("Clicked on the Review Confirm CTA at Payment page\n");
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    //ITFD-955

    public static void Bank_details_Field(String Username) throws IOException, InterruptedException {

        //scrollToAnElement.scrollToElement(PaymentPage.Name_On_Account);
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,300)", "");

        Thread.sleep(2000);
        if(driver.findElements(By.xpath("//input[@id='accountName']")).size()>0) {


            String beforeName_on_Account = pageobjects.PaymentPage.Name_On_Account_Field.getAttribute("class");
            Assert.assertEquals(beforeName_on_Account, "float-container");
            pageobjects.PaymentPage.Name_On_Account.sendKeys(Username);
            String afterName_on_Account = pageobjects.PaymentPage.Name_On_Account_Field.getAttribute("class");
            Assert.assertEquals(afterName_on_Account, "float-container active");
            log.debug("Entered name is " + Username);
            log.debug("Name_on_Account field text is shifted upper leffer corner\n");
            Thread.sleep(2000);

            String beforeAccount_Number = pageobjects.PaymentPage.Account_Number_Field.getAttribute("class");
            Assert.assertEquals(beforeAccount_Number, "float-container");
            pageobjects.PaymentPage.Account_Number.sendKeys("10207136");
            String afterAccount_Number = PaymentPage.Account_Number_Field.getAttribute("class");
            Assert.assertEquals(afterAccount_Number, "float-container active");
            log.debug("Entered Account number - 10207136");
            log.debug("Account_Number field text is shifted upper leffer corner\n");
            Thread.sleep(2000);

            pageobjects.PaymentPage.Sort_Code1.sendKeys("20");
            log.debug("Entered sort code - 20");
            Thread.sleep(2000);
            pageobjects.PaymentPage.Sort_Code2.sendKeys("15");
            log.debug("Entered sort code - 15");
            Thread.sleep(2000);
            pageobjects.PaymentPage.Sort_Code3.sendKeys("96");
            log.debug("Entered sort code - 96");
            Thread.sleep(2000);
            Screenshots.captureScreenshot();
            pageobjects.PaymentPage.Accept_Terms_Checkbox.click();
            log.debug("Clicked on the Accept Terms checkbox");
        }
        Screenshots.captureScreenshot();

    }

    public static void SIMO_Time_At_Address() throws IOException, InterruptedException {
        Thread.sleep(5000);
        scrollToAnElement.scrollToElement(PaymentPage.Stay_Address_Years);

        pageobjects.PaymentPage.Stay_Address_Years.sendKeys("9");
        log.debug("Entered the stayed at address - 9");
        Thread.sleep(2000);
        pageobjects.PaymentPage.Stay_Address_months.sendKeys("9");
        log.debug("Entered the stayed at months - 9");
        Thread.sleep(2000);

        executor.executeScript("arguments[0].click();", pageobjects.PaymentPage.SIMOConfirm_Address_Checkbox);

        /*pageobjects.PaymentPage.Confirm_Address_Checkbox.click();
        log.debug("Clicked on the Confirm Address checkbox");*/
        Screenshots.captureScreenshot();
    }

}