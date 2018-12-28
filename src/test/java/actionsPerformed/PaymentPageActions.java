package actionsPerformed;

import java.awt.AWTException;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import GlobalActions.scrollToAnElement;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;

import GlobalActions.Screenshots;
import helpers.Environment;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
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
        if (driver.findElements(By.xpath("//input[@id='accountName']")).size() > 0) {
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
            Thread.sleep(10000);
            pageobjects.PaymentPage.Accept_Terms_Checkbox.click();
            log.debug("Clicked on the Accept Terms checkbox");
        }
        Screenshots.captureScreenshot();

    }


    public static void enterPotalCodeAddress() {

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

    public static void Time_At_Address() throws IOException, InterruptedException {
        Thread.sleep(18000);
        scrollToAnElement.scrollToElement(PaymentPage.Stay_Address_Years);
        pageobjects.PaymentPage.Stay_Address_Years.sendKeys("9");
        log.debug("Entered the stayed at address - 9");
        Thread.sleep(2000);
        pageobjects.PaymentPage.Stay_Address_months.sendKeys("9");
        log.debug("Entered the stayed at months - 9");
        Thread.sleep(2000);

        //executor.executeScript("arguments[0].click();", pageobjects.PaymentPage.Confirm_Address_Checkbox);

        pageobjects.PaymentPage.Confirm_Address_Checkbox.click();
        log.debug("Clicked on the Confirm Address checkbox");
        Screenshots.captureScreenshot();
    }

    public static void Time_At_Address_CC() throws InterruptedException, IOException {

        Thread.sleep(10000);
        pageobjects.PaymentPage.housenumber.sendKeys("41");
        log.debug("Entered the House Number - 41");

        pageobjects.PaymentPage.postcode.sendKeys("WA27JQ");
        log.debug("Entered the Postcode - WA27JQ");

        pageobjects.PaymentPage.postcodesubmit.click();
        log.debug("Clicked on Find address");

        Thread.sleep(6000);
        pageobjects.PaymentPage.Selectaddress.click();
        log.debug("Home Address Selected");
        Thread.sleep(5000);
        pageobjects.PaymentPage.Stay_Address_Years.sendKeys("9");
        log.debug("Entered the stayed at address - 9");
        Thread.sleep(4000);
        pageobjects.PaymentPage.Stay_Address_months.sendKeys("9");
        log.debug("Entered the stayed at months - 9");

        Thread.sleep(5000);
        pageobjects.PaymentPage.Confirm_Address_Checkbox.click();
        log.debug("Clicked on the Confirm Address checkbox");
        Screenshots.captureScreenshot();

    }

    public static void Card_Details_CCV() throws InterruptedException, IOException {

        //driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
        Thread.sleep(5000);

            /*driver.switchTo().frame("payment-iframe");
            Thread.sleep(5000);
            if (driver.findElements(By.xpath("//input[@type='password']")).size() > 0) {*/

        if (driver.findElements(By.xpath("//iframe[@class='payment-iframe']")).size() > 0) {

            driver.switchTo().frame("payment-iframe");
            Thread.sleep(5000);

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


    public static void SelectAddrerss() throws InterruptedException {
        Thread.sleep(5000);
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,400)", "");
        Thread.sleep(3000);
        PaymentPage.Selectadd.click();
        log.debug("Address Selected");
    }


    public static void Card_Details(String Username) throws InterruptedException, IOException {

       /* if(driver.findElement(By.xpath(" (//button[@name='select-address-btn'])[2]")).isEnabled()){
            driver.findElement(By.xpath(" (//button[@name='select-address-btn'])[2]")).click();
        }*/
        Thread.sleep(4000);
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

}