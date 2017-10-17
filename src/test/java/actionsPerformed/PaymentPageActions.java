package actionsPerformed;

import java.awt.AWTException;
import java.io.IOException;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;

import GlobalActions.Screenshots;
import helpers.Environment;
import org.testng.Assert;
import pageobjects.PaymentPage;

public class PaymentPageActions extends Environment {

    final static Logger log = Logger.getLogger("PaymentPageActions");
    static JavascriptExecutor executor = (JavascriptExecutor) driver;


    public static void Set_Bank_details() throws IOException, InterruptedException {
        pageobjects.PaymentPage.Name_On_Account.sendKeys("Test Accepta");
        log.debug("Entered name is Test Accepta");

        pageobjects.PaymentPage.Account_Number.sendKeys("10207136");
        log.debug("Entered Account number - 10207136");

        pageobjects.PaymentPage.Sort_Code1.sendKeys("20");
        log.debug("Entered sort code - 20");

        pageobjects.PaymentPage.Sort_Code2.sendKeys("15");
        log.debug("Entered sort code - 15");

        pageobjects.PaymentPage.Sort_Code3.sendKeys("96");
        log.debug("Entered sort code - 96");

        pageobjects.PaymentPage.Accept_Terms_Checkbox.click();
        log.debug("Clicked on the Accept Terms checkbox");
        Screenshots.captureScreenshot();

    }

    public static void Set_Bank_details(String Username) throws IOException, InterruptedException {
        pageobjects.PaymentPage.Name_On_Account.sendKeys(Username);
        log.debug("Entered name is " + Username);

        pageobjects.PaymentPage.Account_Number.sendKeys("10207136");
        log.debug("Entered Account number - 10207136");

        pageobjects.PaymentPage.Sort_Code1.sendKeys("20");
        log.debug("Entered sort code - 20");

        pageobjects.PaymentPage.Sort_Code2.sendKeys("15");
        log.debug("Entered sort code - 15");

        pageobjects.PaymentPage.Sort_Code3.sendKeys("96");
        log.debug("Entered sort code - 96");

        pageobjects.PaymentPage.Accept_Terms_Checkbox.click();
        log.debug("Clicked on the Accept Terms checkbox");
        Screenshots.captureScreenshot();

    }

    public static void Set_Bank_details_hv() throws IOException, InterruptedException {

        pageobjects.PaymentPage.Name_On_Account.sendKeys("Test Nine");
        log.debug("Entered name is Test Nine");

        pageobjects.PaymentPage.Account_Number.sendKeys("10207136");
        log.debug("Entered Account number - 10207136");

        pageobjects.PaymentPage.Sort_Code1.sendKeys("20");
        log.debug("Entered sort code - 20");

        pageobjects.PaymentPage.Sort_Code2.sendKeys("15");
        log.debug("Entered sort code - 15");

        pageobjects.PaymentPage.Sort_Code3.sendKeys("96");
        log.debug("Entered sort code - 96");

        pageobjects.PaymentPage.Accept_Terms_Checkbox.click();
        log.debug("Clicked on the Accept Terms checkbox");
        Screenshots.captureScreenshot();

    }

    public static void Time_At_Address() throws IOException, InterruptedException {

        pageobjects.PaymentPage.Stay_Address_Years.sendKeys("9");
        log.debug("Entered the stayed at address - 9");

        pageobjects.PaymentPage.Stay_Address_months.sendKeys("9");
        log.debug("Entered the stayed at months - 9");

        executor.executeScript("arguments[0].click();", pageobjects.PaymentPage.Confirm_Address_Checkbox);

//		pageobjects.PaymentPage.Confirm_Address_Checkbox.click();
        log.debug("Clicked on the Confirm Address checkbox");
        Screenshots.captureScreenshot();
    }

    public static void Time_At_Address_CC() throws InterruptedException, IOException {
        pageobjects.PaymentPage.housenumber.sendKeys("41");
        log.debug("Entered the House Number - 41");

        pageobjects.PaymentPage.postcode.sendKeys("WA27JQ");
        log.debug("Entered the Postcode - WA27JQ");

        pageobjects.PaymentPage.postcodesubmit.click();
        log.debug("Clicked on Find address");

        pageobjects.PaymentPage.Selectaddress.click();
        log.debug("Home Address Selected");
        Thread.sleep(3000);

        pageobjects.PaymentPage.Stay_Address_Years.sendKeys("9");
        log.debug("Entered the stayed at address - 9");

        pageobjects.PaymentPage.Stay_Address_months.sendKeys("9");
        log.debug("Entered the stayed at months - 9");

        Thread.sleep(5000);
        pageobjects.PaymentPage.Confirm_Address_Checkbox.click();
        log.debug("Clicked on the Confirm Address checkbox");
        Screenshots.captureScreenshot();

    }

    public static void Card_Details(String Username) throws InterruptedException, AWTException, IOException {

        driver.switchTo().frame("payment-iframe"); // switching the frame by ID

        System.out.println("********We are switch to the iframe*******");
        log.debug("Entering the Payments section");
        Thread.sleep(5000);
        PaymentPage.Name_On_Card.sendKeys(Username);
        log.debug("Entering name of the card as " + Username);

        Thread.sleep(2000);
        PaymentPage.Card_Number.sendKeys("4539791001730106");
        log.debug("Entered Card number as 4539xxxxxxxxxx06");
        Thread.sleep(2000);
        PaymentPage.Expiry_Month.sendKeys("01");
        log.debug("Entered Expiry Month");
        Thread.sleep(2000);
        PaymentPage.Expiry_Year.sendKeys("2020");
        log.debug("Entered Expiry Year");
        Thread.sleep(2000);
        PaymentPage.CVV_Security_Code.sendKeys("123");
        log.debug("Entered CVV security code");
        Thread.sleep(2000);
        PaymentPage.Continue_Next_Step.sendKeys(Keys.ENTER);
        log.debug("Clicking on continue to next step");
        Thread.sleep(2000);
        System.out.println("*********We are done***************");
        log.debug("Exiting the Payments section");
        driver.switchTo().defaultContent();
        // System.out.println(driver.getTitle());
        Screenshots.captureScreenshot();

    }

    public static void Card_Details() throws InterruptedException, AWTException, IOException {

        driver.switchTo().frame("payment-iframe"); // switching the frame by ID

        System.out.println("********We are switch to the iframe*******");
        log.debug("Entering the Payments section");
        Thread.sleep(5000);
        PaymentPage.Name_On_Card.sendKeys("Test Accepta");
        log.debug("Entering name of the card as Test Accepta");

        Thread.sleep(2000);
        PaymentPage.Card_Number.sendKeys("4539791001730106");
        log.debug("Entered Card number as 4539xxxxxxxxxx06");
        Thread.sleep(2000);
        PaymentPage.Expiry_Month.sendKeys("01");
        log.debug("Entered Expiry Month");
        Thread.sleep(2000);
        PaymentPage.Expiry_Year.sendKeys("2020");
        log.debug("Entered Expiry Year");
        Thread.sleep(2000);
        PaymentPage.CVV_Security_Code.sendKeys("123");
        log.debug("Entered CVV security code");
        Thread.sleep(2000);
        PaymentPage.Continue_Next_Step.sendKeys(Keys.ENTER);
        log.debug("Clicking on continue to next step");
        Thread.sleep(2000);
        System.out.println("*********We are done***************");
        log.debug("Exiting the Payments section");
        driver.switchTo().defaultContent();
        // System.out.println(driver.getTitle());
        Screenshots.captureScreenshot();

    }


    public static void Card_Details_hv() throws InterruptedException, AWTException, IOException {
        driver.switchTo().frame("payment-iframe"); // switching the frame by ID

        System.out.println("********We are switch to the iframe*******");
        log.debug("Entering the Payments section");
        Thread.sleep(2000);
        PaymentPage.Name_On_Card.sendKeys("Test Nine");
        log.debug("Entering name of the card as Test Nine");
        Thread.sleep(2000);
        PaymentPage.Card_Number.sendKeys("4539791001730106");
        log.debug("Entered Card number as 4539xxxxxxxxxx06");
        Thread.sleep(2000);
        PaymentPage.Expiry_Month.sendKeys("01");
        log.debug("Entered Expiry Month");
        Thread.sleep(2000);
        PaymentPage.Expiry_Year.sendKeys("2020");
        log.debug("Entered Expiry Year");
        Thread.sleep(2000);
        PaymentPage.CVV_Security_Code.sendKeys("123");
        log.debug("Entered CVV security code");
        Thread.sleep(2000);
        PaymentPage.Continue_Next_Step.sendKeys(Keys.ENTER);
        log.debug("Clicking on continue to next step");
        Thread.sleep(2000);
        System.out.println("*********We are done***************");
        log.debug("Exiting the Payments section");
        driver.switchTo().defaultContent();
        // System.out.println(driver.getTitle());
        Screenshots.captureScreenshot();
    }

    public static void ValidateNonCreditPaymentPage() throws IOException, InterruptedException {
        // Below will display contents of the section

        log.debug("Payment pages validations" + driver.getTitle());

        log.debug("The Main Total are : " + pageobjects.PaymentPage.BasketTotal.getText());

        // log.debug("The Basket contents are : "
        // +pageobjects.PaymentPage.BasketContent.getText());
        Screenshots.captureScreenshot();

    }

    public static void InsuranceSectionPaymentPage() throws InterruptedException, IOException {
        System.out.println("Entering InsuranceSectionPaymentPage Method");

        Thread.sleep(3000);

        if (driver.findElement(By.xpath("//tr[@id='basket-insurance']")).isDisplayed()) {
            System.out.println("Insurance is displayed in Payment page and text is  - "
                    + driver.findElement(By.xpath("//tr[@id='basket-insurance']")).getText());

        } else {
            System.out.println("Insurance is not displayed");
        }

        Thread.sleep(2000);
        System.out.println("Completed InsuranceSectionPaymentPage function");
        log.debug("Completed InsuranceSectionPaymentPage function");
        Screenshots.captureScreenshot();

    }

    public static void verifyCopyTextHomeAddress() throws IOException, InterruptedException {
        String ExpectedText = "";
        String ActualText = "";

        // Dont edit the above
        ExpectedText = "If you have moved recently, you will need to ensure that your billing address is set to your new address in order to proceed.";
        ActualText = pageobjects.PaymentPage.HomeAddress.getText();
        /*Assert.assertTrue(ActualText.contains("*"),
				"Assertion Failed: Expected Message: " + ExpectedText + " is not present in the page");*/

        Assert.assertEquals(ExpectedText, ActualText);
        log.debug("Assertion worked for Ecomm-11886");
        System.out.println("Assertion worked for Ecomm-11886");
        Screenshots.captureScreenshot();

    }

}
