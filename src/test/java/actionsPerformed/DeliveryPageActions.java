package actionsPerformed;

import GlobalActions.RandomEmailAddressCreation;
import GlobalActions.Screenshots;
import GlobalActions.scrollToAnElement;
import cucumber.api.DataTable;
import helpers.Environment;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import org.testng.Reporter;
import pageobjects.DeliveryPage;

import java.awt.*;
import java.awt.event.KeyEvent;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class DeliveryPageActions extends Environment {

    public List<HashMap<String, String>> datamap;
    final static Logger log = Logger.getLogger("DeliveryPageActions");
    static JavascriptExecutor js = (JavascriptExecutor) driver;

    public static void SetDelivery() throws InterruptedException {
        Thread.sleep(8000);
        try {

            if (DeliveryPage.Housenumber.isDisplayed()) {
                DeliveryPage.Housenumber.sendKeys("12");
                log.debug("Entered House number");
                Thread.sleep(2000);
                pageobjects.DeliveryPage.Postcode.sendKeys("B15 2LG");
                log.debug("Entered Post code");
                Thread.sleep(2000);
                pageobjects.DeliveryPage.Find_Address.click();
                log.debug("Clicked on the Find address button");
                Thread.sleep(5000);
            }
            Thread.sleep(3000);
            if (driver.findElements(By.xpath("//*[@id='delivery-address-selection' or @id='address-selection']/li[1]")).size() > 0) {
                pageobjects.DeliveryPage.SelectAddress1.click();
                log.debug("Selected an address");
            }
            Thread.sleep(3000);
            Screenshots.captureScreenshot();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void SetDelivery_AFU() throws InterruptedException {
        Thread.sleep(5000);
        try {


                pageobjects.DeliveryPage.HouseNum.sendKeys("12");
                log.debug("Entered House number");
                Thread.sleep(2000);
                pageobjects.DeliveryPage.Post.sendKeys("B15 2LG");
                log.debug("Entered Post code");
                Thread.sleep(2000);
                pageobjects.DeliveryPage.FindAddress.click();
                log.debug("Clicked on the Find address button");
                Thread.sleep(5000);


            if (driver.findElements(By.xpath("(//*[@class='selectAddrBtn'])[1]")).size() > 0) {
                pageobjects.DeliveryPage.SelectAdd1.click();
                log.debug("Selected an address");
            }
            Thread.sleep(3000);
            Screenshots.captureScreenshot();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void ClickAndCollect() {

        try {
            Thread.sleep(6000);
            if (pageobjects.DeliveryPage.clickAndCollect.isDisplayed()) {
                pageobjects.DeliveryPage.clickAndCollect.click();
                log.debug("Click and collect tab Selected an address");
                Thread.sleep(2000);
                pageobjects.DeliveryPage.storePostcode.clear();
                Thread.sleep(2000);
                pageobjects.DeliveryPage.storePostcode.sendKeys("M4");
                log.debug("Entered Post code");
                Thread.sleep(2000);
                Screenshots.captureScreenshot();
                pageobjects.DeliveryPage.Find_Store.click();
                log.debug("Clicked on the Find address button");
                Thread.sleep(5000);
                pageobjects.DeliveryPage.Select_Store.click();
                log.debug("Clicked on the Find address button");
                Screenshots.captureScreenshot();

            }
            Thread.sleep(3000);
            Screenshots.captureScreenshot();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void AboutYou(String Firstname, String Surname) {
        try {
            driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
            // Thread.sleep(3000);
            String str = RandomEmailAddressCreation.RandomEmail();
            log.debug("Entering an Random email id is " + str);
            DeliveryPage.Email_Address.sendKeys(str);
            log.debug("Setting the About you options");
            log.debug("Setting the About you options");
            Select dropdown = new Select(pageobjects.DeliveryPage.Title);
            dropdown.selectByIndex(2);
            log.debug("Selected the dropdown Mrs");
            Reporter.log("Selected the dropdown Mrs");
            DeliveryPage.First_Name.sendKeys(Firstname);
            // DeliveryPage.First_Name.sendKeys(map.get(0).get("FirstName"));
            DeliveryPage.Last_Name.sendKeys(Surname);
            log.debug("Entered first name and last name as " + Firstname + " " + Surname);
            DeliveryPage.Contact_Number.sendKeys("07829483426");
            log.debug("Enetered 10 digit contact number");
            Thread.sleep(3000);
            Screenshots.captureScreenshot();
            Thread.sleep(3000);
            DeliveryPage.Password.sendKeys("NTTDATA123");
            DeliveryPage.security_answer.sendKeys("SitTester");
            DeliveryPage.date.sendKeys("25");
            DeliveryPage.Month.sendKeys("01");
            DeliveryPage.year.sendKeys("1957");
            DeliveryPage.year.sendKeys(Keys.TAB);
            log.debug("Entered all the other relavant details");
            Screenshots.captureScreenshot();
        } catch (Exception e) {
            log.debug("Failed to proceed on Delivey page : " + e.getMessage());
            e.printStackTrace();
        }

    }

    public static void AboutYouTitle() {
        try {

            Thread.sleep(3000);
            Select dropdown = new Select(pageobjects.DeliveryPage.Title);
            dropdown.selectByIndex(2);
            log.debug("Selected the dropdown Mrs");
            Reporter.log("Selected the dropdown Mrs");
            Screenshots.captureScreenshot();
        } catch (Exception e) {
            log.debug("Failed to proceed on Delivey page : " + e.getMessage());
            e.printStackTrace();
        }

    }


    public static void AboutYouTen(String Firstname, String Surname) throws IOException, InterruptedException {
        log.debug("Entering an Random email id");
        DeliveryPage.Email_Address.sendKeys(RandomEmailAddressCreation.RandomEmail());
        log.debug("Setting the About you options");
        Select dropdown = new Select(pageobjects.DeliveryPage.Title);
        dropdown.selectByIndex(2);
        log.debug("Selected the dropdown Mrs");
        Reporter.log("Selected the dropdown Mrs");
        DeliveryPage.First_Name.sendKeys(Firstname);
        // DeliveryPage.First_Name.sendKeys(map.get(0).get("FirstName"));
        DeliveryPage.Last_Name.sendKeys(Surname);
        log.debug("Entered first name and last name as " + Firstname + " " + Surname);
        DeliveryPage.Contact_Number.sendKeys("7890987678");

        List<WebElement> menuOuter = driver.findElements(By.xpath("//*[@id='contact-number-error']"));
        if (menuOuter.size() > 0) {
            if (DeliveryPage.Contact_Error.isDisplayed()) {
                log.debug("Not accepting mobile number without 0 in the begining");
            }
        } else {
            log.debug("Mobile number without 0 is getting accepted");
        }
        Thread.sleep(2000);
        Screenshots.captureScreenshot();
        DeliveryPage.Contact_Number.clear();
        Thread.sleep(2000);
        Screenshots.captureScreenshot();
        DeliveryPage.Contact_Number.sendKeys("1234567890");
        List<WebElement> menuOuter1 = driver.findElements(By.xpath("//*[@id='contact-number-error']"));
        if (menuOuter1.size() > 0) {
            if (DeliveryPage.Contact_Error.isDisplayed()) {
                log.debug("Not accepting landline number without 0 in the begining");
            }
        } else {
            log.debug("Landline number without 0 is getting accepted");
        }
        Thread.sleep(2000);
        Screenshots.captureScreenshot();
        DeliveryPage.Password.sendKeys("NTTDATA123");
        DeliveryPage.security_answer.sendKeys("SitTester");
        DeliveryPage.date.sendKeys("25");
        DeliveryPage.Month.sendKeys("01");
        DeliveryPage.year.sendKeys("1957");
        DeliveryPage.year.sendKeys(Keys.TAB);
        log.debug("Entered all the other relavant details");
        Screenshots.captureScreenshot();

    }


    public static void ClickContinue() throws InterruptedException, IOException {
        Thread.sleep(3000);
        log.debug("in click continue function");
        int count = driver.findElements(By.xpath("//*[@id='checkbox-terms-agreement-required']")).size();
        //Boolean isPresent = driver.findElement(By.xpath("//*[@id='checkbox-terms-agreement-required']")).isEnabled();
        if (count >= 1) {
            log.debug("checkbox is present, so going to click on that");
            Thread.sleep(3000);
            js.executeScript("arguments[0].click();", driver.findElement(By.xpath("//*[@id='checkbox-terms-agreement-required']")));
            log.debug("checkbox Selected");
            pageobjects.DeliveryPage.Continue.click();
            log.debug("Clicking on the continue link");
            Thread.sleep(4000);
            Screenshots.captureScreenshot();
        } else {
            WebElement element = pageobjects.DeliveryPage.Continue;
            JavascriptExecutor executor = (JavascriptExecutor) driver;
            executor.executeScript("arguments[0].click();", element);
            //pageobjects.DeliveryPage.Continue.click();
            log.debug("Clicking on the continue link");
            Screenshots.captureScreenshot();
        }
    }

    //code for GDPR--Venkata
    public static void clickOnSubmitBtn(String customer, String status) throws InterruptedException, IOException {
        Thread.sleep(3000);

        log.debug("in click Submit button  function");
        if(status.equalsIgnoreCase("Enabled")) {
            //code to new validate on GDPR
            int count1 = driver.findElements(By.xpath("//*[@id='checkbox-terms-agreement-required']")).size();
            //int checkBox = driver.findElements(By.xpath("//*[@id='checkbox-terms-agreement-required']")).size();
            if (count1 <= 0) {
                System.out.println("checkbox is not displayed ie :: , I’d like to hear about everything I get, just for being on O2. Things like exclusive offers, tickets and upgrade deals.\n");
                log.debug("checkbox is not displayed ie :: , I’d like to hear about everything I get, just for being on O2. Things like exclusive offers, tickets and upgrade deals.\n");
            } else if (driver.findElements(By.xpath("//*[contains(text(),'Is this order for you or someone else?')]")).size() > 0) {
                System.out.println("Is this order for you or someone else? is displayed");
                log.debug("Is this order for you or someone else? is displayed");
            } else {
                System.out.println("checkbox is displayed ie :: , I’d like to hear about everything I get, just for being on O2. Things like exclusive offers, tickets and upgrade deals.\n");
                log.debug("checkbox is displayed ie :: , I’d like to hear about everything I get, just for being on O2. Things like exclusive offers, tickets and upgrade deals.\n");
                Assert.fail("checkbox is displayed ie :: , I’d like to hear about everything I get, just for being on O2. Things like exclusive offers, tickets and upgrade deals.\n");
            }

        Thread.sleep(3000);

        if(driver.findElements(By.xpath("//*[normalize-space(.)='Me']/preceding-sibling::input")).size()>0) {
            String thisOrderHeader = DeliveryPage.thisOrderTxt.getText();
            if (thisOrderHeader.contains("this order for you or someone else")) {
                System.out.println("New Check box of 'Is this order for you or someone else?' is Displayed");
                log.debug("New Check box of 'Is this order for you or someone else?' is Displayed");
                Thread.sleep(3000);
                DeliveryPage.thisOrderOverlay.click();
                Thread.sleep(3000);
                Screenshots.captureScreenshot();
                String thisOrderOVerLayTxt = DeliveryPage.thisOrderOverlayTxt.getText();
                Thread.sleep(3000);
                if (DeliveryPage.thisOrderOverlayTxt.isDisplayed()) {
                    if (thisOrderOVerLayTxt.contains("choose to receive information on our products, offers and more")) {
                        System.out.println("Successfully validated the OverLay Icon Text ie : " + thisOrderOVerLayTxt);
                        log.debug("Successfully validated the OVerLay Icon Text ie : " + thisOrderOVerLayTxt);
                        Thread.sleep(8000);

                        JavascriptExecutor executor = (JavascriptExecutor)driver;
                        executor.executeScript("arguments[0].click();", DeliveryPage.closeOveryPopup);
                        //DeliveryPage.closeOveryPopup.click();
                    } else {
                        System.out.println("Failed to validate the Overlay icon Text");
                        log.info("Failed to validate the Overlay icon Text");
                    }
                }
            } else {
                System.out.println("Failed to validate New Check box of 'Is this order for you or someone else?' is Displayed");
                log.debug("Failed to validate New Check box of 'Is this order for you or someone else?' is Displayed");
            }

            if (customer.contains("Me")) {
                boolean defaultSelect = DeliveryPage.Me_radioBtn.isSelected();
                if (defaultSelect) {
                    System.out.println("Me is selected by Default");
                    log.debug("Me is selected by Default");
                } else {

                    System.out.println("Me radio button is not selected by Default");
                    log.debug("Me radio button is not selected by Default");
                    Assert.fail("Me radio button is not selected by Default");
                }
            }

            if (customer.contains("Someone")) {
                boolean defaultSelect = DeliveryPage.someoneElse_radioBtn.isSelected();
                Thread.sleep(5000);
                if (!defaultSelect) {
                    DeliveryPage.someoneElse_radioBtn.click();
                    Thread.sleep(2000);
                    System.out.println("order for this customer : Me was selected by Default, as Requirement we have clicked Someone else");
                    log.debug("order for this customer : Me was selected by Default, as Requirement we have clicked Someone else");
                } else {
                    System.out.println("Someone else radio button is selected by Default");
                    log.debug("Someone else radio button is selected by Default");
                }
            }
        }
        }else if(status.equalsIgnoreCase("Disabled")) {
            JavascriptExecutor jse = (JavascriptExecutor) driver;
            jse.executeScript("window.scrollBy(0,300)", "");
            Screenshots.captureScreenshot();
            Thread.sleep(3000);
            scrollToAnElement.scrollToElement(pageobjects.DeliveryPage.continueBtn);
            Screenshots.captureScreenshot();
            if (driver.findElements(By.xpath("//label[normalize-space(.)='Me']")).size() < 1) {
                System.out.println("GDPR is Disabled");
                log.debug("GDPR is Disabled");
            } else {
                Assert.fail("Failed to verify if GDPR is Disabled");
        }
        }else{
            Assert.fail("Failed to do GDPR validations");
        }

        Screenshots.captureScreenshot();
        Thread.sleep(5000);
        System.out.println("Clicking on Continue button");
        log.debug("Clicking on Continue button");
        if(DeliveryPage.continueBtn.isDisplayed()) {
            DeliveryPage.continueBtn.click();
        }else{
            driver.findElement(By.xpath("(//button/span[@id='btn-continue-label'])[2]")).click();
        }
        Screenshots.captureScreenshot();

        log.debug("Clicked on Continue button");
    }


    public static void select_BringTradeInDevice_CheckBox() throws InterruptedException, IOException {
        Thread.sleep(8000);
        log.debug("Running select_BringTradeInDevice_CheckBox function");

        Boolean isPresent = driver.findElements(By.xpath("//*[@id='trade-in-confirmation-required']")).size() > 0;
        if (isPresent) {
            log.debug("checkbox is present, so going to click on that");
            Thread.sleep(3000);
            js.executeScript("arguments[0].click();", driver.findElement(By.xpath("//*[@id='trade-in-confirmation-required']")));
            log.debug("checkbox Selected");
            Thread.sleep(2000);
            Screenshots.captureScreenshot();
        } else {
            log.debug("Bring TradeIn Device checkbox is not displayed");
            Assert.fail("Bring TradeIn Device checkbox is not displayed");
            Screenshots.captureScreenshot();
        }
    }

    public static void MobileClickContinue() throws InterruptedException, IOException {
        Thread.sleep(3000);
        log.debug("in click continue function");

        Boolean isPresent = driver.findElements(By.xpath("//*[@id='checkbox-terms-agreement-required']")).size() > 0;
        if (isPresent) {
            log.debug("checkbox is present, so going to click on that");
            Thread.sleep(3000);
            js.executeScript("arguments[0].click();", driver.findElement(By.xpath("//*[@id='checkbox-terms-agreement-required']")));
            log.debug("checkbox Selected");

            //driver.findElement(By.xpath("//*[@id='checkbox-terms-agreement-required']")).sendKeys(Keys.ENTER);

            //*[@id="btn-continue"]

            log.debug("going to click on the continue link");

            js.executeScript("arguments[0].click();", pageobjects.DeliveryPage.SendMeMySim2);
            log.debug("Clicking on the continue link");
            Thread.sleep(4000);
            Screenshots.captureScreenshot();
        } else {
            pageobjects.DeliveryPage.Continue.click();
            log.debug("Clicking on the continue link");
            Screenshots.captureScreenshot();
        }
    }

    public static void selectExistingAcctAndFastCheckOut() throws InterruptedException, IOException {
        Thread.sleep(5000);

        log.debug("going to click on existing account");

        Screenshots.captureScreenshot();
        //pageobjects.DeliveryPage.SelectAcct.click();
        js.executeScript("arguments[0].click();", pageobjects.DeliveryPage.SelectAcct);
        log.debug("Selected existing account");
        Thread.sleep(4000);
        js.executeScript("arguments[0].click();", pageobjects.DeliveryPage.FastCheckOut);
        // pageobjects.DeliveryPage.FastCheckOut.click();
        log.debug("FastCheckout button is selected");
        // log.debug("FastCheckout button is selected");
        Screenshots.captureScreenshot();
    }

    public static void checkStockExtMsgDP() throws IOException {
        String ActualStockExtMsg = pageobjects.DeliveryPage.StockExtMessageDDPODP.getText();
        String ExpStockExtMsg = "You'll pay for your phone now. We'll send you an email or text to let you know when it will be delivered";
        log.debug("Act Del MSg" + ActualStockExtMsg);
        log.debug("Exp Del MSg" + ExpStockExtMsg);

        if (ActualStockExtMsg.matches(ExpStockExtMsg)) {
            log.debug("ActualStockExtMsg matches ExpStockExtMsg");
        } else {
            Assert.fail("Stock extended message for stock limited DD/Pre order phone does not match");

        }
        Screenshots.captureScreenshot();
    }

    public static void InsuranceSectionDeliveryPage() throws IOException {
        log.debug("Entering InsuranceSectionDeliveryPage Method");

        if (driver.findElement(By.xpath("//tr[@id='basket-insurance']")).isDisplayed()) {
            log.debug("Insurance is displayed in Delivery page and text is  - "
                    + driver.findElement(By.xpath("//tr[@id='basket-insurance']")).getText());

        } else {
            log.debug("Insurance is not displayed");
        }

        log.debug("Completed InsuranceSectionDeliveryPage function");
        log.debug("Completed InsuranceSectionDeliveryPage function");
        Screenshots.captureScreenshot();
    }

    public static void SetDelivery_Datatable(DataTable Table) throws InterruptedException {
        List<List<String>> values = Table.raw();
        for (int i = 0; i < values.size(); i++) {
            log.debug("The Details passed for delivery page are as below \n " + values.get(i).toString());
        }
        pageobjects.DeliveryPage.Housenumber.sendKeys(values.get(0).get(1));
        log.debug("Entered House number");
        log.debug("Entered House number");
        pageobjects.DeliveryPage.Postcode.sendKeys(values.get(1).get(1));
        log.debug("Entered Post code");
        Thread.sleep(3000);
        pageobjects.DeliveryPage.Find_Address.click();
        log.debug("Clicked on the Find address button");
        //log.debug("Clicked on the Find address button");
        Thread.sleep(5000);

        if (pageobjects.DeliveryPage.SelectAddress1.isDisplayed()) {
            log.debug("in select address 1");

            pageobjects.DeliveryPage.SelectAddress1.click();
            log.debug("Selected an address");
        }
        //*[@id="delivery-address-selector"]
        else if (pageobjects.DeliveryPage.SelectAddressDropdown.isDisplayed()) {
            log.debug("in select addressdropdown");
            Select dropdown = new Select(pageobjects.DeliveryPage.SelectAddressDropdown);
            dropdown.selectByIndex(1);
            log.debug("Selected an address");

        }
        //Screenshots.captureScreenshot();
    }

    public static void AboutYou_Datatable(DataTable Table) throws IOException, InterruptedException {
        List<List<String>> values = Table.raw();
        log.debug("Entering an Random email id");
        log.debug("Entering an Random email id");
        DeliveryPage.Email_Address.sendKeys(RandomEmailAddressCreation.RandomEmail());
        Thread.sleep(3000);
        log.debug("Setting the About you options");
        log.debug("Setting the About you options");

        Thread.sleep(3000);
        Select dropdown = new Select(pageobjects.DeliveryPage.Title);
        dropdown.selectByValue(values.get(2).get(1));
        log.debug("Selected the title dropdown ");
        log.debug("Selected the title dropdown " + values.get(2).get(1));

        Thread.sleep(3000);
        DeliveryPage.First_Name.sendKeys(values.get(3).get(1));
        log.debug("Entered first name as " + values.get(3).get(1));
        log.debug("Entered first name as " + values.get(3).get(1));

        Thread.sleep(3000);
        DeliveryPage.Last_Name.sendKeys(values.get(4).get(1));
        log.debug("Entered last name as " + values.get(4).get(1));
        log.debug("Entered last name as " + values.get(4).get(1));

        Thread.sleep(3000);
        DeliveryPage.Contact_Number.sendKeys(values.get(5).get(1));
        log.debug("Entered contact number as " + values.get(5).get(1));

        Thread.sleep(3000);
        DeliveryPage.Password.sendKeys(values.get(6).get(1));
        log.debug("Entered password as " + values.get(6).get(1));

        Thread.sleep(3000);
        DeliveryPage.security_answer.sendKeys(values.get(7).get(1));
        log.debug("Entered Security Answer as " + values.get(7).get(1));

        Thread.sleep(3000);
        DeliveryPage.date.sendKeys(values.get(8).get(1));
        log.debug("Entered Date of Birth - Date as " + values.get(8).get(1));

        Thread.sleep(3000);
        DeliveryPage.Month.sendKeys(values.get(9).get(1));
        log.debug("Entered Date of Birth - Month as " + values.get(9).get(1));

        Thread.sleep(3000);
        DeliveryPage.year.sendKeys(values.get(10).get(1));
        log.debug("Entered Date of Birth - Year as " + values.get(10).get(1));
        log.debug("Entered all the other relavant details");
        log.debug("Entered all the other Relevant details");

        DeliveryPage.year.sendKeys(Keys.TAB);
        Screenshots.captureScreenshot();

    }

    public static void AboutYou_Datatable_FreeSim(DataTable Table) throws IOException, InterruptedException {
        List<List<String>> values = Table.raw();
        log.debug("Entering an Random email id");
        log.debug("Entering an Random email id");
        DeliveryPage.Email_Address.sendKeys(RandomEmailAddressCreation.RandomEmail());
        Thread.sleep(3000);
        log.debug("Setting the About you options");
        log.debug("Setting the About you options");

        Thread.sleep(3000);
        Select dropdown = new Select(pageobjects.DeliveryPage.Title);
        dropdown.selectByValue(values.get(2).get(1));
        log.debug("Selected the title dropdown ");
        log.debug("Selected the title dropdown " + values.get(2).get(1));

        Thread.sleep(3000);
        DeliveryPage.First_Name.sendKeys(values.get(3).get(1));
        log.debug("Entered first name as " + values.get(3).get(1));
        log.debug("Entered first name as " + values.get(3).get(1));

        Thread.sleep(3000);
        DeliveryPage.Last_Name.sendKeys(values.get(4).get(1));
        log.debug("Entered last name as " + values.get(4).get(1));
        log.debug("Entered last name as " + values.get(4).get(1));

        Thread.sleep(3000);
        DeliveryPage.Contact_Number.sendKeys(values.get(5).get(1));
        log.debug("Entered contact number as " + values.get(5).get(1));

        Screenshots.captureScreenshot();

    }

    public static void verifyPromotionsDisplay_yourORder() {
        try {

            String promotionTxt = DeliveryPage.promotions_yourOrder.getText();
            if (promotionTxt.contains("promotion")) {
                String promotionValue = DeliveryPage.promotionVAlue_yourOrdre.getText();
                log.debug(" We are able to see the Promotions in YourOder  &  displayed Values is :: " + promotionValue);
                log.debug(" We are able to see the Promotions in YourOder  &  displayed Values is :: " + promotionValue);
            } else {
                log.debug("Failed to  able to see the Promotions in YourOder ");
                log.debug("Failed to  able to see the Promotions in YourOder ");
            }

        } catch (Exception e) {
            log.debug("Failed to  able to see the Promotions in YourOder & reason is :: " + e.getStackTrace());
            log.debug("Failed to  able to see the Promotions in YourOder & reason is :: " + e.getStackTrace());
        }

    }


    public static void click_on_Use_different_DeliveryAddress_link() {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            if (driver.findElements(By.xpath("//*[contains(text(),'Use a different delivery address')]")).size() > 0) {
                driver.findElement(By.xpath("//*[contains(text(),'Use a different delivery address')]")).click();
                log.debug(" Clicked on 'Use a different delivery address'link");

            } else {
                log.debug(" Failed to Click on 'Use a different delivery address'link");
            }

        } catch (Exception e) {
            log.debug(" Failed to Click on 'Use a different delivery address'link" + e.getStackTrace());

        }

    }

    public static void enterHouseNumAndPostalCode_DeliverySection(String houseNum, String postCode) {
        try {
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.MINUTES);

            if (DeliveryPage.Housenumber.isDisplayed()) {
                log.debug("Entering the address");
                pageobjects.DeliveryPage.Housenumber.sendKeys("12");
                log.debug("Entered House number");

                pageobjects.DeliveryPage.Postcode.sendKeys("SL11ER");
                log.debug("Entered Post code");
                pageobjects.DeliveryPage.Find_Address.click();
                log.debug("Clicked on the Find address button");

                pageobjects.DeliveryPage.SelectAddress1.click();
                log.debug("Clicked on the select address button");
                Screenshots.captureScreenshot();

            } else {
                log.debug(" Failed to  Entered the houseNumber and postcCode");

            }
        } catch (Exception e) {
            log.debug(" Failed to  Entered the houseNumber and postcCode" + e.getStackTrace());

        }
    }

    public static void enteredCommercialAddress_AddressLookUp(String postCode) {
        try {
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.MINUTES);
            if (DeliveryPage.commercialAddressErrorMsgAdressLookUp.isDisplayed()) {
                String invalidMsg = DeliveryPage.commercialAddressErrorMsgAdressLookUp.getText();
                if (invalidMsg.contains(postCode)) {
                    log.debug(" Entered commercial address during address lookup & displayed error message as ::  (" + invalidMsg + ")");

                } else {
                    log.debug(" Failed to  Display the Respective Error message, When we entered commercial address during address lookup ");

                }
                scrollToAnElement.scrollToElement(DeliveryPage.commercialAddressErrorMsgAdressLookUp);
                Screenshots.captureScreenshot();
            }
        } catch (Exception e) {
            log.debug(" Failed to  Display the Respective Error message, When we entered commercial address during address lookup " + e.getStackTrace());

        }
    }


    public static void enteredInvalidPostcodeAdressLookUp(String postCode) {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            if (DeliveryPage.postalCodeErrorMsgAdressLookUp.isDisplayed()) {
                String invalidMsg = DeliveryPage.postalCodeErrorMsgAdressLookUp.getText();
                if (invalidMsg.contains(postCode)) {
                    log.debug(" Entered invalid PostCode & displayed error message as ::  (" + invalidMsg + ")");

                } else {
                    log.debug(" Failed to  Display the Respective Error message, When we enter the invalid PostCode ");

                }
            }
        } catch (Exception e) {
            log.debug(" Failed to  Display the Respective Error message, When we enter the invalid PostCode " + e.getStackTrace());

        }
    }

    public static void enteredInvalidPostcodeEnterManualSection(String postCode) {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            if (DeliveryPage.postalCodeErrorMsgEnterManualSection.isDisplayed()) {
                String invalidMsg = DeliveryPage.postalCodeErrorMsgEnterManualSection.getText();
                if (invalidMsg.contains(postCode)) {
                    log.debug(" Entered invalid PostCode in Enter manually section & displayed error message as ::  (" + invalidMsg + ")");

                } else {
                    log.debug(" Failed to  Display the Respective Error message, When we enter the invalid PostCode in Enter manually section ");

                }
            }
        } catch (Exception e) {
            log.debug(" Failed to  Display the Respective Error message, When we enter the invalid PostCode in Enter manually section " + e.getStackTrace());

        }
    }

    public static void clickOnChange_delivery_link() {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            if (driver.findElement(By.xpath("//*[normalize-space(text())='Change delivery']")).isDisplayed()) {
                driver.findElement(By.xpath("//*[normalize-space(text())='Change delivery']")).click();
                log.debug(" Clicked on the'Change delivery' link");
                log.debug(" Clicked on the'Change delivery' link");
            } else {
                log.debug(" Failed to displayed the 'Change delivery' link ");
                Assert.fail(" Failed to displayed the 'Change delivery' link ");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug(" Failed to displayed the 'Change delivery' link " + e.getStackTrace());
            Assert.fail(" Failed to displayed the 'Change delivery' link ");
        }
    }

    public static void deliverySectionShouldShowOOS_message() {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            Screenshots.captureScreenshot();
            if (driver.findElements(By.xpath("//li[@class='delivery']//*[contains(text(),'out of stock')]")).size() > 0) {

                JavascriptExecutor jse = (JavascriptExecutor) driver;
                jse.executeScript("window.scrollBy(0,300)", "");
                Screenshots.captureScreenshot();
                if (driver.findElement(By.xpath("//li[@class='delivery']//*[contains(text(),'out of stock')]")).isDisplayed()) {
                    log.debug(" The Out of stock message is Displayed in the 'Your package' section");
                }
            } else {
                log.debug(" Failed to displayed  OOS message in the  'Your package' section");
                Assert.fail(" Failed to displayed  OOS message in 'Your package' section");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug(" Failed to displayed  OOS message in the  Delivery section" + e.getStackTrace());
            Assert.fail(" Failed to displayed  OOS message in the  Delivery section");
        }
    }


    public static void deliverySectionShouldShowClick_anf_collect_option_without_radio_button_and_OOS_msg() {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            if (driver.findElements(By.xpath("//*[contains(text(),'Out of stock')]")).size() > 0) {
                if (driver.findElement(By.xpath("//*[contains(text(),'Out of stock')]")).isDisplayed()) {
                    log.debug(" The Out of stock message is Displayed in the Delivery section");

                }
            } else {
                log.debug(" Failed to displayed  OOS message in the  Delivery section");
                Assert.fail(" Failed to displayed  OOS message in the  Delivery section");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug(" Failed to displayed  OOS message in the  Delivery section" + e.getStackTrace());
            Assert.fail(" Failed to displayed  OOS message in the  Delivery section");
        }
    }

    public static void deliveryInformationSection_OOS_msg() {
        try {
            driver.manage().timeouts().implicitlyWait(1, TimeUnit.MINUTES);
            if (driver.findElements(By.xpath("//*[contains(text(),'Out of stock')]")).size() > 0) {
                if (driver.findElement(By.xpath("//*[contains(text(),'Out of stock')]")).isDisplayed()) {
                    log.debug(" The Out of stock message is Displayed in the Delivery Information section");
                }
            } else {
                log.debug(" Failed to displayed  OOS message in the  Delivery Information section");
                Assert.fail(" Failed to displayed  OOS message in the  Delivery Information section");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug(" Failed to displayed  OOS message in the  Delivery Information section" + e.getStackTrace());
            Assert.fail(" Failed to displayed  OOS message in the  Delivery Information section");
        }
    }


    public static void ClickOnUseDifferentAddress() throws InterruptedException {
        List<WebElement> DiffAddressLink = driver.findElements(By.xpath("//a[normalize-space()='Use a different delivery address']"));
        if (DiffAddressLink.size() > 0) {
            WebElement element = pageobjects.DeliveryPage.DeliveryPageUseDiffAddressLink;
            JavascriptExecutor executor = (JavascriptExecutor) driver;
            executor.executeScript("arguments[0].click();", element);

            Thread.sleep(3000);

           /* log.debug("Entering the address");
            pageobjects.DeliveryPage.Housenumber.sendKeys("12");
            log.debug("Entered House number");

            pageobjects.DeliveryPage.Postcode.sendKeys("SL11ER");
            log.debug("Entered Post code");
            pageobjects.DeliveryPage.Find_Address.click();
            log.debug("Clicked on the Find address button");

            pageobjects.DeliveryPage.SelectAddress1.click();
            log.debug("Clicked on the select address button");*/

        } else
            Assert.fail("Unable to click on the Use a different address link");

    }


    public static void EnterPostcode(String Postcode) {

        if (Postcode.contains("Commercial")) {
            log.debug("Entering the commercial address");
            pageobjects.DeliveryPage.Housenumber.sendKeys("12");
            log.debug("Entered House number");

            pageobjects.DeliveryPage.Postcode.sendKeys("OX26 4WD");
            log.debug("Entered Commercial Post code");
            pageobjects.DeliveryPage.Find_Address.click();
            log.debug("Clicked on the Find address button");
        }
        if (Postcode.contains("Commercial")) {
            log.debug("Entering an Invalid address");
            pageobjects.DeliveryPage.Housenumber.sendKeys("12");
            log.debug("Entered House number");

            pageobjects.DeliveryPage.Postcode.sendKeys("O6 4WD");
            log.debug("Entered Invalid Post code");
            pageobjects.DeliveryPage.Find_Address.click();
            log.debug("Clicked on the Find address button");
        } else {
            log.debug("Unable to Enter Commercial or Invalid Address");
        }
    }

    public static void selectCreateNewAcctAndCheckOut() throws InterruptedException, IOException {
        Thread.sleep(5000);
        log.debug("Going to click on Create New account");
        pageobjects.DeliveryPage.SelectCreateNewAccount.click();
        Thread.sleep(3000);
        js.executeScript("arguments[0].click();", pageobjects.DeliveryPage.BeginCheckout);
        log.debug("BeginCheckout button is selected");
        Screenshots.captureScreenshot();
    }

    public static void validateYourOrderSection(String Element, String expValue) {

        String plan = "";

        if(Element.equalsIgnoreCase("DataRollOver")){

            String actValue = "";

            String simType = driver.findElement(By.xpath("//p[@id='qa-item']")).getText();
            List<WebElement> actPlnList = driver.findElements(By.xpath("//h2[text()='Your Order ']/../div[@class='order-desc']//p[contains(@ng-if,'freeSimDelivery')]/span"));

            if(simType.equalsIgnoreCase("Big Bundles sim")){

                for (int i = 2;i<actPlnList.size();i++) {
                    plan = actPlnList.get(i).getAttribute("textContent").replaceAll("\"", "").trim() + "|";
                }

                if(plan.contains(expValue)){
                    log.debug("Selected Data Roll over plan details is displayed in Your order section of Delivery page");

                }
                else{
                    log.debug("Selected Data Roll over plan details is not displayed in Your order section of Delivery page");

                }
            }

            if(simType.equalsIgnoreCase("Classic Pay As You Go sim")){

                for (int i = 1;i<actPlnList.size();i++) {
                    plan = actPlnList.get(i).getAttribute("textContent").replaceAll("\"", "").trim() + "|";
                }

                if(expValue.equals(actPlnList)){
                    log.debug("Selected Data Roll over plan details is displayed in Your order section of Delivery page");

                }
                else{
                    log.debug("Selected Data Roll over plan details is not displayed in Your order section of Delivery page");

                }
            }

            if(simType.equalsIgnoreCase("International sim")){

                for (int i = 1;i<actPlnList.size();i++) {
                    plan = actPlnList.get(i).getAttribute("textContent").replaceAll("\"", "").trim() + "|";
                }

                if(expValue.equals(actPlnList)){
                    log.debug("Selected Data Roll over plan details is displayed in Your order section of Delivery page");

                }
                else{
                    log.debug("Selected Data Roll over plan details is not displayed in Your order section of Delivery page");

                }
            }

        }

    }

    //Validating your bill cap
    public static void ValidateAppliedBillSpendCap(String BillCap, String CapAmount, String BSCstatus) throws InterruptedException, IOException {
        Thread.sleep(3000);
        String AppliedBillCap="";
        String pageTitle = driver.getTitle();
        Thread.sleep(2000);
        Screenshots.captureScreenshot();
        try {
            if(BSCstatus.equalsIgnoreCase("Enabled")) {
                if (driver.findElements(By.xpath("//h3[contains(text(),'Spend cap')] | //h3[contains(text(),'Spend Cap')]")).size() > 0) {

                    log.debug("Bill spend cap section is displayed at "+pageTitle+" page \n");
					/*JavascriptExecutor jse = (JavascriptExecutor) driver;
                    jse.executeScript("window.scrollBy(0,100)", "");*/
                    log.debug("Bill Spend Cap header is displayed in "+pageTitle+" page ie :: " + pageobjects.DeliveryPage.BillSpendCapHeader.getText());

                    Thread.sleep(2000);

                    AppliedBillCap = pageobjects.DeliveryPage.AppliedBillCap.getText();
                    Thread.sleep(2000);
                    if (BillCap.equalsIgnoreCase("CapMyBill")) {

                        if (CapAmount.equalsIgnoreCase("DontCapMyBillLink")) {
                            if (AppliedBillCap.contains("You've chosen not to add a Spend Cap")) {
                                log.debug("'Dont Cap My Bill' is validated successfully and cap text is::" + AppliedBillCap);
                            } else {
                                log.debug("Failed to validate 'Dont Cap My Bill' and cap text is::" + AppliedBillCap);
                                Assert.fail("Failed to validate 'Dont Cap My Bill' and cap text is::" + AppliedBillCap);
                            }
                        }else {
                            if (AppliedBillCap.contains(CapAmount)) {
                                log.debug("Applied bill cap is validated successfully in " + pageTitle + " page ie :: " + AppliedBillCap);
                            } else {
                                log.debug("Applied bill cap is not present in " + pageTitle + " page is:: " + AppliedBillCap);
                                Assert.fail("Applied bill cap is not present in " + pageTitle + " page is:: " + AppliedBillCap);
                            }
                        }
                    } else if (BillCap.equalsIgnoreCase("DontCapMyBill")) {
                        if (AppliedBillCap.contains("You've chosen not to add a Spend Cap")) {
                            log.debug("'Dont Cap My Bill' is validated successfully and cap text is::" + AppliedBillCap);
                        } else {
                            log.debug("Failed to validate 'Dont Cap My Bill' and cap text is::" + AppliedBillCap);
                            Assert.fail("Failed to validate 'Dont Cap My Bill' and cap text is::" + AppliedBillCap);
                        }
                    }
                } else {
                    log.debug("Bill cap section is not present under order summary section in " + pageTitle + " page");
                    Assert.fail("Bill cap section is not present under order summary section in " + pageTitle + " page");
                }
            }else if(BSCstatus.equalsIgnoreCase("Disabled")){
                if (driver.findElements(By.xpath("//h3[contains(text(),'Spend cap')]")).size() > 0) {
                    log.debug("Bill spend cap section is enabled it suppose to be in disabled status in " + pageTitle + " page");
                    Assert.fail("Bill spend cap section is enabled it suppose to be in disabled status in " + pageTitle + " page");
                }else{
                    log.debug("As expected, Bill spend cap section is disabled in " + pageTitle + " page");
                }
            }else {
                System.out.println("Unable to validate bill spend cap section in " + pageTitle + " page\n");
                log.debug("Unable to validate bill spend cap section in " + pageTitle + " page\n");
                Assert.fail("Unable to validate bill spend cap section in " + pageTitle + " page\n");
            }

        }catch(Exception e){
            log.debug("Unable to validate Bill cap section in " + pageTitle + " page is:: " + e);
            Assert.fail("Unable to validate Bill cap section in " + pageTitle + " page is:: " + e);
        }
    }

    //GDPR validation, ITFD-864, Jan 2019 Release, By Jamal Khan

    public static void GDPRvalidation(String BP1, String BP2, String BP3, String keyEvent, String DeviceType, String GDPRstatus, String PreSelected) throws InterruptedException, IOException {
        Thread.sleep(5000);

        String pageTitle = driver.getTitle();
        log.debug("Currently we are at "+pageTitle+" page and in Consumer GDPR validation function\n");

        Screenshots.captureScreenshot();

        if(GDPRstatus.equalsIgnoreCase("Enabled")) {

            //gdpr end user question validation
            if(driver.findElements(By.xpath("//*[contains(text(),'Is this order for you or someone else?')]")).size()>0){
                if(DeliveryPage.Me_radioBtn.isDisplayed() || DeliveryPage.thisOrderTxt.isDisplayed() || DeliveryPage.someoneElse_radioBtn.isDisplayed()) {
                    log.debug("Failing because GDPR end user question(old requirement) with options are displaying\n");
                    Assert.fail("Failing because GDPR end user question(old requirement) with options are displaying");
                }
            }else{
                log.debug("As expected, GDPR end user question with options are not displaying\n");
            }

            //gdpr consent validation
            if(DeviceType.equalsIgnoreCase("Connected")) {

                log.debug("Device type is connected device\n");
                if (driver.findElements(By.xpath("//label[contains(text(),'GDPR CONSENT')]")).size() > 0) {
                    log.debug("As expected, GDPR consent is in enabled mode\n");

                    //Header text validation
                    String headerTxt = DeliveryPage.gdprHeaderTxt.getText();
                    Thread.sleep(1000);
                    if (headerTxt.equalsIgnoreCase("")) {
                        log.debug("Header text is validated and it is matching with expected result, the actual header is :: " + headerTxt + "\n");
                    } else {
                        log.debug("Failed due to header text is not matching with expected result, the actual header is :: " + headerTxt + "\n");
                        Assert.fail("Failed due to header text is not matching with expected result, the actual header is :: " + headerTxt + "\n");
                    }

                    //Header description validation
                    String headerDescription = DeliveryPage.gdprHeaderDescription.getText();
                    Thread.sleep(1000);
                    if (headerDescription.contains("")) {
                        log.debug("Header description is validated and it is matching with expected result, the actual header description is :: " + headerDescription + "\n");
                    } else {
                        log.debug("Failed due to header description is not matching with expected result, the actual header description is :: " + headerDescription + "\n");
                        Assert.fail("Failed due to header description is not matching with expected result, the actual header description is :: " + headerDescription + "\n");
                    }

                    //O2 Products
                    if (driver.findElements(By.id("preference-heading-B1")).size() > 0) {

                        //O2Products Tile Text
                        String O2ProductsText = DeliveryPage.O2Products_Text.getText();
                        Thread.sleep(2000);
                        log.debug("O2 Tile Content text is:: " + O2ProductsText + "\n");

                        //O2Products moreInfo Link
                        if(keyEvent.equalsIgnoreCase("Yes")){
                            log.debug("Clicking on the O2Products 'Learn more about' with keyboard keys\n");
                            DeliveryPage.O2Products_MoreInfoLink.sendKeys(Keys.ENTER);
                            log.debug("Clicked on the O2Products 'Learn more about' with keyboard keys\n");
                        }else {
                            DeliveryPage.O2Products_MoreInfoLink.click();
                            log.debug("Clicked on Learn more about O2 products\n");
                        }

                        Thread.sleep(3000);
                        Screenshots.captureScreenshot();

                        //O2Products Overlay Text
                        String O2ProductsOverlayText = DeliveryPage.O2Products_OverlayText.getText();
                        Thread.sleep(2000);
                        log.debug("O2 products overlay text is:: " + O2ProductsOverlayText + "\n");
                        Thread.sleep(1000);

                        //O2Products Overlay Close Button clicking
                        if (DeliveryPage.O2Products_OverlayCloseButton.isEnabled()) {
                            if(keyEvent.equalsIgnoreCase("Yes")){
                                log.debug("Clicking on the O2Products 'O2Products Overlay Close icon' with keyboard keys\n");
                                DeliveryPage.O2Products_OverlayCloseButton.sendKeys(Keys.ENTER);
                                log.debug("Clicked on the O2Products 'O2Products Overlay Close icon' with keyboard keys\n");
                            }else {
                                DeliveryPage.O2Products_OverlayCloseButton.click();
                                log.debug("Clicked on O2 products overlay close button\n");
                            }
                        } else {
                            log.debug("Failed due to - O2 products overlay close button is disabled\n");
                            Assert.fail("Failed due to - O2 products overlay close button is disabled");
                        }
                    }

                    Thread.sleep(1000);

                    //O2 Perks And Extras
                    if (driver.findElements(By.id("preference-heading-B2")).size() > 0) {

                        //O2 Perks And Extras Tile Text
                        String O2PerksAndExtrasText = DeliveryPage.O2PerksAndExtras_Text.getText();
                        Thread.sleep(2000);
                        log.debug("O2 perks and extras Tile Content text is:: " + O2PerksAndExtrasText + "\n");

                        //O2 Perks And Extras more info Link clicking
                        if(keyEvent.equalsIgnoreCase("Yes")){
                            log.debug("Clicking on the O2 perks and extras 'Learn more about' link with keyboard keys\n");
                            DeliveryPage.O2PerksAndExtras_MoreInfoLink.sendKeys(Keys.ENTER);
                            log.debug("Clicked on the O2 perks and extras 'Learn more about' link with keyboard keys\n");
                        }else {
                            DeliveryPage.O2PerksAndExtras_MoreInfoLink.click();
                            log.debug("Clicked on Learn more about O2 perks and extras info link\n");
                        }

                        Thread.sleep(3000);
                        Screenshots.captureScreenshot();

                        //O2 Perks And Extras Overlay Text
                        String O2PerksAndExtrasOverlayText = DeliveryPage.O2PerksAndExtras_OverlayText.getText();
                        Thread.sleep(2000);
                        log.debug("O2 perks and extras overlay text is:: " + O2PerksAndExtrasOverlayText + "\n");
                        Thread.sleep(1000);

                        //O2 Perks And Extras overlay Close Button clicking
                        if (DeliveryPage.O2PerksAndExtras_OverlayCloseButton.isEnabled()) {
                            if(keyEvent.equalsIgnoreCase("Yes")){
                                log.debug("Clicking on the O2 perks and extras 'O2PerksAndExtras Overlay Close icon' with keyboard keys\n");
                                DeliveryPage.O2PerksAndExtras_OverlayCloseButton.sendKeys(Keys.ENTER);
                                log.debug("Clicked on the O2 perks and extras 'O2PerksAndExtras Overlay Close icon' with keyboard keys\n");
                            }else {
                                DeliveryPage.O2PerksAndExtras_OverlayCloseButton.click();
                                log.debug("Clicked on O2 perks and extras overlay close button \n");
                            }
                        } else {
                            log.debug("Failed due to - O2 perks and extras overlay close button is disabled\n");
                            Assert.fail("Failed due to - O2 perks and extras overlay close button is disabled\n");
                        }
                    }

                    Thread.sleep(1000);

                    //Offers From O2 Partner Text
                    if (driver.findElements(By.id("preference-heading-B3")).size() > 0) {

                        //Offers From O2 Partner Tile Text
                        String OffersFromO2PartnerText = DeliveryPage.OffersFromO2Partner_Text.getText();
                        Thread.sleep(2000);
                        log.debug("Offers from o2 partners brands Tile Content text is:: " + OffersFromO2PartnerText + "\n");

                        //Offers From O2 Partner more info Link clicking
                        if(keyEvent.equalsIgnoreCase("Yes")){
                            log.debug("Clicking on the Offers From O2 Partner 'Learn more about' link with keyboard keys\n");
                            DeliveryPage.OffersFromO2Partner_MoreInfoLink.sendKeys(Keys.ENTER);
                            log.debug("Clicked on the Offers From O2 Partner 'Learn more about' link with keyboard keys\n");
                        }else {
                            DeliveryPage.OffersFromO2Partner_MoreInfoLink.click();
                            log.debug("Clicked on Learn more about partner offers");
                        }

                        Thread.sleep(3000);
                        Screenshots.captureScreenshot();

                        //Offers From O2 Partner Overlay Text
                        String OffersFromO2PartnerOverlayText = DeliveryPage.OffersFromO2Partner_OverlayText.getText();
                        Thread.sleep(2000);
                        log.debug("Offers from o2 overlay text is:: " + OffersFromO2PartnerOverlayText + "\n");
                        Thread.sleep(1000);

                        //OffersFromO2Partner overlay CloseButton
                        if (DeliveryPage.OffersFromO2Partner_OverlayCloseButton.isEnabled()) {
                            if(keyEvent.equalsIgnoreCase("Yes")){
                                log.debug("Clicking on the Offers From O2 Partner 'Overlay Close icon' with keyboard keys\n");
                                DeliveryPage.OffersFromO2Partner_OverlayCloseButton.sendKeys(Keys.ENTER);
                                log.debug("Clicked on the Offers From O2 Partner 'Overlay Close icon' with keyboard keys\n");
                            }else {
                                DeliveryPage.OffersFromO2Partner_OverlayCloseButton.click();
                                log.debug("Clicked on offers from partners and brands overlay close button");
                            }
                        } else {
                            log.debug("Failed due to - offers from partners and brands overlay close button is disabled");
                            Assert.fail("Failed due to - offers from partners and brands overlay close button is disabled");
                        }
                    }

                    //Selecting O2 Products Business preferences
                    if (BP1.equalsIgnoreCase("Select")) {

                        if (driver.findElements(By.xpath("//input[@id='B1']")).size() <= 0) {
                            log.debug("O2Products business preference checkBox is not displayed");
                            Assert.fail("O2Products business preference checkBox is not displayed");
                        }

                        if (PreSelected.equalsIgnoreCase("Yes")) {
                            if (DeliveryPage.O2Products.isSelected()) {
                                log.debug("User is Upgrade customer and as expected, 'O2Products Preference' is selected by default as this option was selected earlier\n");
                            } else {
                                log.debug("Failed:: 'O2Products Preference' is expected to be selected by default as the customer was selected this preference earlier\n");
                                Assert.fail("Failed:: 'O2Products Preference' is expected to be selected by default as the customer was selected this preference earlier\n");
                            }
                        } else {
                            if (DeliveryPage.O2Products.isSelected()) {
                                log.debug("Failing due to - O2Products business preference is pre-selected in consumer acquisition journey\n");
                                Assert.fail("Failing due to - O2Products business preference is pre-selected in consumer acquisition journey\n");
                            } else {
                                if(keyEvent.equalsIgnoreCase("Yes")){
                                    log.debug("Selecting the O2Products business preference checkBox with keyboard keys\n");
                                    DeliveryPage.O2Products.sendKeys(Keys.SPACE);
                                    log.debug("Selected option with keyboard keys\n");
                                }else {
                                    log.debug("Clicking on O2Products business preference\n");
                                    DeliveryPage.O2Products.click();
                                    log.debug("O2Products business preference selected\n");
                                }
                            }
                        }
                    } else {
                        if (DeliveryPage.O2Products.isSelected()) {
                            log.debug("Failed:: 'O2Products Preference' is selected by default, it should not be in selected state \n");
                            Assert.fail("Failed:: 'O2Products Preference' is selected by default, it should not be in selected state \n");
                        } else {
                            log.debug("As expected, O2Products business preference is not selected by default/pre-ticked \n");
                        }
                    }
                    Thread.sleep(2000);

                    //Selecting O2 Perks And Extras business preference
                    if (BP2.equalsIgnoreCase("Select")) {

                        if (driver.findElements(By.xpath("//input[@id='B2']")).size() <= 0) {
                            log.debug("O2 Perks And Extras business preference checkBox is not displayed");
                            Assert.fail("O2 Perks And Extras business preference checkBox is not displayed");
                        }

                        if (PreSelected.equalsIgnoreCase("Yes")) {
                            if (DeliveryPage.O2PerksAndExtras.isSelected()) {
                                log.debug("User is Upgrade customer and as expected, 'O2 Perks And Extras Preference' is selected by default as this option was selected earlier\n");
                            } else {
                                log.debug("Failed:: 'O2 Perks And Extras Preference' is expected to be selected by default as the customer was selected this preference earlier");
                                Assert.fail("Failed:: 'O2 Perks And Extras Preference' is expected to be selected by default as the customer was selected this preference earlier");
                            }
                        } else {
                            if (DeliveryPage.O2PerksAndExtras.isSelected()) {
                                log.debug("Failing due to - O2 Perks And Extras business preference selected is pre-selected in consumer acquisition journey\n");
                                Assert.fail("Failing due to - O2 Perks And Extras business preference selected is pre-selected in consumer acquisition journey\n");
                            } else {
                                if(keyEvent.equalsIgnoreCase("Yes")){
                                    log.debug("Selecting the O2 Perks And Extras business preference checkBox with keyboard keys\n");
                                    DeliveryPage.O2PerksAndExtras.sendKeys(Keys.SPACE);
                                    log.debug("Selected option with keyboard keys\n");
                                }else {
                                    log.debug("Clicking on O2 Perks And Extras business preference\n");
                                    DeliveryPage.O2PerksAndExtras.click();
                                    log.debug("O2 Perks And Extras business preference selected\n");
                                }
                            }
                        }
                    } else {
                        if (DeliveryPage.O2PerksAndExtras.isSelected()) {
                            log.debug("Failed:: 'O2 Perks And Extras Preference' is selected by default, it should not be in selected state \n");
                            Assert.fail("Failed:: 'O2 Perks And Extras Preference' is selected by default, it should not be in selected state \n");
                        } else {
                            log.debug("As expected, O2 Perks And Extras business preference is not selected by default/pre-ticked \n");
                        }
                    }
                    Thread.sleep(2000);

                    //Selecting Offers From O2 Partner business preference
                    if (BP3.equalsIgnoreCase("Select")) {

                        if (driver.findElements(By.xpath("//input[@id='B3']")).size() <= 0) {
                            log.debug("Offers From O2 Partner business preference checkBox is not displayed");
                            Assert.fail("Offers From O2 Partner business preference checkBox is not displayed");
                        }

                        if (PreSelected.equalsIgnoreCase("Yes")) {
                            if (DeliveryPage.OffersFromO2Partner.isSelected()) {
                                log.debug("User is Upgrade customer and as expected, 'Offers From O2 Partner Preference' is selected by default as this option was selected earlier\n");
                            } else {
                                log.debug("Failed:: 'Offers From O2 Partner Preference' is expected to be selected by default as the customer was selected this preference earlier");
                                Assert.fail("Failed:: 'Offers From O2 Partner Preference' is expected to be selected by default as the customer was selected this preference earlier");
                            }
                        } else {
                            if (DeliveryPage.OffersFromO2Partner.isSelected()) {
                                log.debug("Failing due to - Offers From O2 Partner business preference is pre-selected in consumer acquisition journey\n");
                                Assert.fail("Failing due to - Offers From O2 Partner business preference is pre-selected in consumer acquisition journey\n");
                            } else {
                                if(keyEvent.equalsIgnoreCase("Yes")){
                                    log.debug("Selecting the Offers From O2 Partner business preference checkBox with keyboard keys\n");
                                    DeliveryPage.OffersFromO2Partner.sendKeys(Keys.SPACE);
                                    log.debug("Selected option with keyboard keys\n");
                                }else {
                                    log.debug("Clicking on Offers From O2 Partner business preference\n");
                                    DeliveryPage.OffersFromO2Partner.click();
                                    log.debug("Offers From O2 Partner business preference selected\n");
                                }
                            }
                        }
                    } else {
                        if (DeliveryPage.OffersFromO2Partner.isSelected()) {
                            log.debug("Failed:: 'Offers From O2 Partner Preference' is selected by default, it should not be in selected state \n");
                            Assert.fail("Failed:: 'Offers From O2 Partner Preference' is selected by default, it should not be in selected state \n");
                        } else {
                            log.debug("As expected, Offers From O2 Partner Preference business preference is not selected by default/pre-ticked \n");
                        }
                    }
                    Thread.sleep(2000);
                } else {
                    log.debug("Failing because GDPR is disabled for enable status, it supposed to be in enabled mode\n");
                    Assert.fail("Failing because GDPR is disabled for enable status, it supposed to be in enabled mode\n");
                }
            } else {
                log.debug("Device type is non-connected device\n");
                if(driver.findElements(By.xpath("//label[contains(text(),'GDPR CONSENT')]")).size()>0) {
                    log.debug("Failed due to GDPR is in enabled mode for non-connected device \n");
                    Assert.fail("Failed due to GDPR is in enabled mode for non-connected device \n");
                }else{
                    log.debug("As expected, GDPR is in disabled for non-connected device \n");
                }
            }
        }else if(GDPRstatus.equalsIgnoreCase("Disabled")) {

            //gdpr end user question validation
            if(driver.findElements(By.xpath("//label[contains(text(),'Is this order for you or someone else?')]")).size()>0){
                if(DeliveryPage.Me_radioBtn.isDisplayed() || DeliveryPage.thisOrderTxt.isDisplayed() || DeliveryPage.someoneElse_radioBtn.isDisplayed()) {
                    log.debug("Failing because GDPR end user question(old requirement) with options are displaying\n");
                    Assert.fail("Failing because GDPR end user question(old requirement) with options are displaying");
                }
            }

            //gdpr consent validation
            if(driver.findElements(By.xpath("//label[contains(text(),'GDPR CONSENT')]")).size()>0) {
                log.debug("Failed due to GDPR is in enabled mode, it should be in disabled mode \n");
                Assert.fail("Failed due to GDPR is in enabled mode, it should be in disabled mode \n");
            }else{
                log.debug("As expected, GDPR is in disabled mode for disabled state \n");
            }
        }

        Screenshots.captureScreenshot();

        log.debug("Clicking on Continue button\n");
        if(DeliveryPage.continueBtn.isDisplayed()) {
            DeliveryPage.continueBtn.click();
        }else{
            driver.findElement(By.xpath("(//button/span[@id='btn-continue-label'])[2]")).click();
        }
        log.debug("Clicked on Continue button\n");

    }
}
