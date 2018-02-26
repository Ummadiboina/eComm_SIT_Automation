package actionsPerformed;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.TimeUnit;

import GlobalActions.scrollToAnElement;
import cucumber.api.DataTable;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import org.testng.Reporter;

import GlobalActions.RandomEmailAddressCreation;
import GlobalActions.Screenshots;
import helpers.Environment;
import pageobjects.DeliveryPage;
import steps.E2EOrderPlaced_Steps;

import static pageobjects.FreeSimPage.Firstname;

    public class DeliveryPageActions extends Environment {

        public List<HashMap<String, String>> datamap;
        final static Logger log = Logger.getLogger("DeliveryPageActions");
        static JavascriptExecutor js = (JavascriptExecutor) driver;

        public static void SetDelivery() throws InterruptedException, IOException {
            pageobjects.DeliveryPage.Housenumber.sendKeys("12");
            log.debug("Entered House number");

            pageobjects.DeliveryPage.Postcode.sendKeys("B15 2LG");
            log.debug("Entered Post code");
            pageobjects.DeliveryPage.Find_Address.click();
            log.debug("Clicked on the Find address button");
            Thread.sleep(5000);
            if (pageobjects.DeliveryPage.SelectAddress1.isDisplayed()) {
                pageobjects.DeliveryPage.SelectAddress1.click();
                log.debug("Selected an address");

            }
            Screenshots.captureScreenshot();
        }

        public static void AboutYou(String Firstname, String Surname) throws IOException, InterruptedException {
            log.debug("Entering an Random email id");
            DeliveryPage.Email_Address.sendKeys(RandomEmailAddressCreation.RandomEmail());
            System.out.println("Setting the About you options");
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
            DeliveryPage.Password.sendKeys("NTTDATA123");
            DeliveryPage.security_answer.sendKeys("SitTester");
            DeliveryPage.date.sendKeys("25");
            DeliveryPage.Month.sendKeys("01");
            DeliveryPage.year.sendKeys("1957");
            DeliveryPage.year.sendKeys(Keys.TAB);
            log.debug("Entered all the other relavant details");
            Screenshots.captureScreenshot();

        }

        public static void AboutYouTen(String Firstname, String Surname) throws IOException, InterruptedException {
            log.debug("Entering an Random email id");
            DeliveryPage.Email_Address.sendKeys(RandomEmailAddressCreation.RandomEmail());
            System.out.println("Setting the About you options");
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
            if(DeliveryPage.Contact_Error.isDisplayed()){
                System.out.println("Not accepting mobile number without 0 in the begining");
            }
            else{
                Assert.fail("Mobile number without 0 accepted");
            }
            DeliveryPage.Contact_Number.clear();
            DeliveryPage.Contact_Number.sendKeys("1234567890");
            DeliveryPage.Password.sendKeys("NTTDATA123");
            DeliveryPage.security_answer.sendKeys("SitTester");
            DeliveryPage.date.sendKeys("25");
            DeliveryPage.Month.sendKeys("01");
            DeliveryPage.year.sendKeys("1957");
            log.debug("Entered all the other relavant details");
            Screenshots.captureScreenshot();

        }


        public static void ClickContinue() throws InterruptedException, IOException {
            Thread.sleep(3000);
            log.debug("in click continue function");

            Boolean isPresent = driver.findElements(By.xpath("//*[@id='checkbox-terms-agreement-required']")).size() > 0;
            if (isPresent) {
                log.debug("checkbox is present, so going to click on that");
                Thread.sleep(3000);
                js.executeScript("arguments[0].click();",driver.findElement(By.xpath("//*[@id='checkbox-terms-agreement-required']")));
                log.debug("checkbox Selected");
                pageobjects.DeliveryPage.Continue.click();
                log.debug("Clicking on the continue link");
                Thread.sleep(4000);
                Screenshots.captureScreenshot();
            } else {
                WebElement element = pageobjects.DeliveryPage.Continue;
                JavascriptExecutor executor = (JavascriptExecutor)driver;
                executor.executeScript("arguments[0].click();", element);
                //pageobjects.DeliveryPage.Continue.click();
                log.debug("Clicking on the continue link");
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
                js.executeScript("arguments[0].click();",driver.findElement(By.xpath("//*[@id='checkbox-terms-agreement-required']")));
                log.debug("checkbox Selected");

                //driver.findElement(By.xpath("//*[@id='checkbox-terms-agreement-required']")).sendKeys(Keys.ENTER);

                //*[@id="btn-continue"]

                log.debug("going to click on the continue link");

                js.executeScript("arguments[0].click();",pageobjects.DeliveryPage.SendMeMySim2);
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

            System.out.println("going to click on existing account");

            pageobjects.DeliveryPage.SelectAcct.click();
            Thread.sleep(3000);
            js.executeScript("arguments[0].click();", pageobjects.DeliveryPage.FastCheckOut);
            // pageobjects.DeliveryPage.FastCheckOut.click();
            System.out.println("FastCheckout button is selected");
            // log.debug("FastCheckout button is selected");
            Screenshots.captureScreenshot();
        }

        public static void checkStockExtMsgDP() throws IOException, InterruptedException {
            String ActualStockExtMsg = pageobjects.DeliveryPage.StockExtMessageDDPODP.getText();
            String ExpStockExtMsg = "You'll pay for your phone now. We�ll send you an email or text to let you know when it will be delivered";
            System.out.println("Act Del MSg" + ActualStockExtMsg);
            System.out.println("Exp Del MSg" + ExpStockExtMsg);

            if (ActualStockExtMsg.matches(ExpStockExtMsg)) {
                System.out.println("ActualStockExtMsg matches ExpStockExtMsg");
            } else {
                Assert.fail("Stock extended message for stock limited DD/Pre order phone does not match");

            }
            Screenshots.captureScreenshot();
        }

        public static void InsuranceSectionDeliveryPage() throws IOException, InterruptedException {
            System.out.println("Entering InsuranceSectionDeliveryPage Method");

            if (driver.findElement(By.xpath("//tr[@id='basket-insurance']")).isDisplayed()) {
                System.out.println("Insurance is displayed in Delivery page and text is  - "
                        + driver.findElement(By.xpath("//tr[@id='basket-insurance']")).getText());

            } else {
                System.out.println("Insurance is not displayed");
            }

            System.out.println("Completed InsuranceSectionDeliveryPage function");
            log.debug("Completed InsuranceSectionDeliveryPage function");
            Screenshots.captureScreenshot();
        }

        public static void SetDelivery_Datatable(DataTable Table) throws InterruptedException, IOException {
            List<List<String>> values = Table.raw();
            for (int i = 0; i < values.size(); i++) {
                System.out.println("The Details passed for delivery page are as below \n " + values.get(i).toString());
            }
            pageobjects.DeliveryPage.Housenumber.sendKeys(values.get(0).get(1).toString());
            System.out.println("Entered House number");
            log.debug("Entered House number");
            pageobjects.DeliveryPage.Postcode.sendKeys(values.get(1).get(1).toString());
            log.debug("Entered Post code");
            Thread.sleep(3000);
            pageobjects.DeliveryPage.Find_Address.click();
            System.out.println("Clicked on the Find address button");
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
            System.out.println("Entering an Random email id");
            DeliveryPage.Email_Address.sendKeys(RandomEmailAddressCreation.RandomEmail());
            Thread.sleep(3000);
            System.out.println("Setting the About you options");
            log.debug("Setting the About you options");

            Thread.sleep(3000);
            Select dropdown = new Select(pageobjects.DeliveryPage.Title);
            dropdown.selectByValue(values.get(2).get(1).toString());
            log.debug("Selected the title dropdown ");
            System.out.println("Selected the title dropdown " + values.get(2).get(1).toString());

            Thread.sleep(3000);
            DeliveryPage.First_Name.sendKeys(values.get(3).get(1).toString());
            log.debug("Entered first name as " + values.get(3).get(1).toString());
            System.out.println("Entered first name as " + values.get(3).get(1).toString());

            Thread.sleep(3000);
            DeliveryPage.Last_Name.sendKeys(values.get(4).get(1).toString());
            log.debug("Entered last name as " + values.get(4).get(1).toString());
            System.out.println("Entered last name as " + values.get(4).get(1).toString());

            Thread.sleep(3000);
            DeliveryPage.Contact_Number.sendKeys(values.get(5).get(1).toString());
            System.out.println("Entered contact number as " + values.get(5).get(1).toString());

            Thread.sleep(3000);
            DeliveryPage.Password.sendKeys(values.get(6).get(1).toString());
            System.out.println("Entered password as " + values.get(6).get(1).toString());

            Thread.sleep(3000);
            DeliveryPage.security_answer.sendKeys(values.get(7).get(1).toString());
            System.out.println("Entered Security Answer as " + values.get(7).get(1).toString());

            Thread.sleep(3000);
            DeliveryPage.date.sendKeys(values.get(8).get(1).toString());
            System.out.println("Entered Date of Birth - Date as " + values.get(8).get(1).toString());

            Thread.sleep(3000);
            DeliveryPage.Month.sendKeys(values.get(9).get(1).toString());
            System.out.println("Entered Date of Birth - Month as " + values.get(9).get(1).toString());

            Thread.sleep(3000);
            DeliveryPage.year.sendKeys(values.get(10).get(1).toString());
            System.out.println("Entered Date of Birth - Year as " + values.get(10).get(1).toString());
            log.debug("Entered all the other relavant details");
            System.out.println("Entered all the other Relevant details");

            DeliveryPage.year.sendKeys(Keys.TAB);
            Screenshots.captureScreenshot();

        }

        public static void AboutYou_Datatable_FreeSim(DataTable Table) throws IOException, InterruptedException {
            List<List<String>> values = Table.raw();
            log.debug("Entering an Random email id");
            System.out.println("Entering an Random email id");
            DeliveryPage.Email_Address.sendKeys(RandomEmailAddressCreation.RandomEmail());
            Thread.sleep(3000);
            System.out.println("Setting the About you options");
            log.debug("Setting the About you options");

            Thread.sleep(3000);
            Select dropdown = new Select(pageobjects.DeliveryPage.Title);
            dropdown.selectByValue(values.get(2).get(1).toString());
            log.debug("Selected the title dropdown ");
            System.out.println("Selected the title dropdown " + values.get(2).get(1).toString());

            Thread.sleep(3000);
            DeliveryPage.First_Name.sendKeys(values.get(3).get(1).toString());
            log.debug("Entered first name as " + values.get(3).get(1).toString());
            System.out.println("Entered first name as " + values.get(3).get(1).toString());

            Thread.sleep(3000);
            DeliveryPage.Last_Name.sendKeys(values.get(4).get(1).toString());
            log.debug("Entered last name as " + values.get(4).get(1).toString());
            System.out.println("Entered last name as " + values.get(4).get(1).toString());

            Thread.sleep(3000);
            DeliveryPage.Contact_Number.sendKeys(values.get(5).get(1).toString());
            System.out.println("Entered contact number as " + values.get(5).get(1).toString());

            Screenshots.captureScreenshot();

        }

        public static void verifyPromotionsDisplay_yourORder() {
            try{

                String promotionTxt  =  DeliveryPage.promotions_yourOrder.getText();
                if(promotionTxt.contains("promotion")){
                    String promotionValue  =  DeliveryPage.promotionVAlue_yourOrdre.getText();
                    System.out.println(" We are able to see the Promotions in YourOder  &  displayed Values is :: " + promotionValue);
                    log.debug(" We are able to see the Promotions in YourOder  &  displayed Values is :: " + promotionValue);
                }else{
                    System.out.println("Failed to  able to see the Promotions in YourOder ");
                    log.debug("Failed to  able to see the Promotions in YourOder ");
                }

            }catch (Exception e){
                System.out.println("Failed to  able to see the Promotions in YourOder & reason is :: "+ e.getStackTrace());
                log.debug("Failed to  able to see the Promotions in YourOder & reason is :: "+ e.getStackTrace());
            }

        }
        
        
        public static void click_on_Use_different_DeliveryAddress_link() {
            try{
                driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
                if(driver.findElements(By.xpath("//*[contains(text(),'Use a different delivery address')]")).size() > 0){
                    driver.findElement(By.xpath("//*[contains(text(),'Use a different delivery address')]")).click();
                    System.out.println(" Clicked on 'Use a different delivery address'link");
                    log.debug(" Clicked on 'Use a different delivery address'link");
                }else{
                    System.out.println(" Failed to Click on 'Use a different delivery address'link");
                    log.debug(" Failed to Click on 'Use a different delivery address'link");
                }

            }catch (Exception e){
                System.out.println(" Failed to Click on 'Use a different delivery address'link"+ e.getStackTrace());
                log.debug(" Failed to Click on 'Use a different delivery address'link"+ e.getStackTrace());
            }

        }


        public static void enterHouseNumAndPostalCode_DeliverySection(String houseNum , String postCode) {
            try{
                driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);

                if(DeliveryPage.Housenumber.isDisplayed()){
                    DeliveryPage.Housenumber.sendKeys(houseNum);
                    DeliveryPage.Housenumber.sendKeys(Keys.TAB );
                    DeliveryPage.Postcode.sendKeys(postCode);
                    DeliveryPage.Find_Address.click();
                    Thread.sleep(5000);
                    System.out.println(" Entered the houseNumber and postcCode");
                    log.debug(" Entered the houseNumber and postcCode");
                }else{
                    System.out.println(" Failed to  Entered the houseNumber and postcCode");
                    log.debug(" Failed to  Entered the houseNumber and postcCode");
                }
            }catch (Exception e){
                System.out.println(" Failed to  Entered the houseNumber and postcCode"+ e.getStackTrace());
                log.debug(" Failed to  Entered the houseNumber and postcCode"+ e.getStackTrace());
            }

        }

        public static void enteredCommercialAddress_AddressLookUp(String postCode) {
            try{
                driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
                if(DeliveryPage.commercialAddressErrorMsgAdressLookUp.isDisplayed()) {
                    String invalidMsg = DeliveryPage.commercialAddressErrorMsgAdressLookUp.getText();
                    if (invalidMsg.contains(postCode)) {
                        System.out.println(" Entered commercial address during address lookup & displayed error message as ::  (" + invalidMsg + ")");
                        log.debug(" Entered commercial address during address lookup & displayed error message as ::  (" + invalidMsg + ")");
                    } else {
                        System.out.println(" Failed to  Display the Respective Error message, When we entered commercial address during address lookup ");
                        log.debug(" Failed to  Display the Respective Error message, When we entered commercial address during address lookup ");
                    }
                }
            }catch (Exception e){
                System.out.println(" Failed to  Display the Respective Error message, When we entered commercial address during address lookup "+ e.getStackTrace());
                log.debug(" Failed to  Display the Respective Error message, When we entered commercial address during address lookup "+ e.getStackTrace());
            }
        }

        public static void enteredInvalidPostcodeAdressLookUp(String postCode) {
            try{
                driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
                   if(DeliveryPage.postalCodeErrorMsgAdressLookUp.isDisplayed()) {
                    String invalidMsg = DeliveryPage.postalCodeErrorMsgAdressLookUp.getText();
                    if (invalidMsg.contains(postCode)) {
                        System.out.println(" Entered invalid PostCode & displayed error message as ::  (" + invalidMsg + ")");
                        log.debug(" Entered ivnalid PostCode & displayed error message as ::  (" + invalidMsg + ")");
                    } else {
                        System.out.println(" Failed to  Display the Respective Error message, When we enter the invalid PostCode ");
                        log.debug(" Failed to  Display the Respective Error message, When we enter the invalid PostCode ");
                    }
                }
            }catch (Exception e){
                System.out.println(" Failed to  Display the Respective Error message, When we enter the invalid PostCode "+ e.getStackTrace());
                log.debug(" Failed to  Display the Respective Error message, When we enter the invalid PostCode "+ e.getStackTrace());
            }
        }

        public static void enteredInvalidPostcodeEnterManualSection(String postCode) {
            try{
                driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
                if(DeliveryPage.postalCodeErrorMsgEnterManualSection.isDisplayed()) {
                    String invalidMsg = DeliveryPage.postalCodeErrorMsgEnterManualSection.getText();
                    if (invalidMsg.contains(postCode)) {
                        System.out.println(" Entered invalid PostCode in Enter manually section & displayed error message as ::  (" + invalidMsg + ")");
                        log.debug(" Entered ivnalid PostCode in Enter manually section & displayed error message as ::  (" + invalidMsg + ")");
                    } else {
                        System.out.println(" Failed to  Display the Respective Error message, When we enter the invalid PostCode in Enter manually section ");
                        log.debug(" Failed to  Display the Respective Error message, When we enter the invalid PostCode in Enter manually section ");
                    }
                }
            }catch (Exception e){
                System.out.println(" Failed to  Display the Respective Error message, When we enter the invalid PostCode in Enter manually section "+ e.getStackTrace());
                log.debug(" Failed to  Display the Respective Error message, When we enter the invalid PostCode in Enter manually section "+ e.getStackTrace());
            }
        }

        public static void  clickOnChange_delivery_link() throws Exception {
            try {
                driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
                if (driver.findElement(By.xpath("//*[normalize-space(text())='Change delivery']")).isDisplayed()) {
                    driver.findElement(By.xpath("//*[normalize-space(text())='Change delivery']")).click();
                    System.out.println(" Clicked on the'Change delivery' link");
                    log.debug(" Clicked on the'Change delivery' link");
                } else {
                    System.out.println(" Failed to displayed the 'Change delivery' link ");
                    Assert.fail(" Failed to displayed the 'Change delivery' link ");
                }
            }
            catch (Exception e) {
                // TODO Auto-generated catch block
                System.out.println(" Failed to displayed the 'Change delivery' link " + e.getStackTrace());
                Assert.fail(" Failed to displayed the 'Change delivery' link ");
            }
        }

        public static void deliverySectionShouldShowOOS_message() throws Exception {
            try {
                driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
                if(driver.findElements(By.xpath("//li[@class='delivery']//*[contains(text(),'out of stock')]")).size() > 0) {
                    if (driver.findElement(By.xpath("//li[@class='delivery']//*[contains(text(),'out of stock')]")).isDisplayed()) {
                        System.out.println(" The Out of stock message is Displayed in the Delivery section");
                        log.debug(" The Out of stock message is Displayed in the Delivery section");
                    }
                }else {
                    System.out.println(" Failed to displayed  OOS message in the  Delivery section");
                    Assert.fail(" Failed to displayed  OOS message in the  Delivery section");
                }
            }
            catch (Exception e) {
                // TODO Auto-generated catch block
                System.out.println(" Failed to displayed  OOS message in the  Delivery section" + e.getStackTrace());
                Assert.fail(" Failed to displayed  OOS message in the  Delivery section");
            }
        }


        public static void deliverySectionShouldShowClick_anf_collect_option_without_radio_button_and_OOS_msg() throws Exception {
            try {
                driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
                if(driver.findElements(By.xpath("//*[contains(text(),'Out of stock')]")).size() > 0) {
                    if (driver.findElement(By.xpath("//*[contains(text(),'Out of stock')]")).isDisplayed()) {
                        System.out.println(" The Out of stock message is Displayed in the Delivery section");
                        log.debug(" The Out of stock message is Displayed in the Delivery section");
                    }
                }else {
                    System.out.println(" Failed to displayed  OOS message in the  Delivery section");
                    Assert.fail(" Failed to displayed  OOS message in the  Delivery section");
                }
            }
            catch (Exception e) {
                // TODO Auto-generated catch block
                System.out.println(" Failed to displayed  OOS message in the  Delivery section" + e.getStackTrace());
                Assert.fail(" Failed to displayed  OOS message in the  Delivery section");
            }
        }


        public static void ClickOnUseDifferentAddress(){
            List<WebElement> DiffAddressLink = driver.findElements(By.xpath("//*[@id='different-delivery-address']"));
            if (DiffAddressLink.size() > 0) {
                WebElement element = pageobjects.DeliveryPage.DeliveryPageUseDiffAddressLink;
                JavascriptExecutor executor = (JavascriptExecutor)driver;
                executor.executeScript("arguments[0].click();", element);

            }
            else
                Assert.fail("Unable to click on the Use a different address link");

        }


        public static void EnterPostcode(String Postcode){

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
            }

            else
            {
                log.debug("Unable to Enter Commercial or Invalid Address");
            }
        }


    }
