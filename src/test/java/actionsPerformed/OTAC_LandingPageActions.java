package actionsPerformed;

import GlobalActions.RandomEmailAddressCreation;
import GlobalActions.Screenshots;
import helpers.Environment;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import org.openqa.selenium.By;
import pageobjects.DeliveryPage;
import pageobjects.OTAC_PageObjects;

import java.io.IOException;

public class OTAC_LandingPageActions extends Environment {

    final static Logger log = Logger.getLogger("OTAC_LandingPageActions");

    public static void otacLogin(String OTACMSISDN, String securityCode) {
        try {
            pageobjects.OTAC_PageObjects.UserMsisdn.sendKeys(OTACMSISDN);
            log.debug("The OTAC Username is entered ie: "+OTACMSISDN+"\n");

            Thread.sleep(3000);
            Screenshots.captureScreenshot();
            if (pageobjects.OTAC_PageObjects.Continue.isDisplayed()) {
                pageobjects.OTAC_PageObjects.Continue.click();
                log.debug("The OTAC customer clicks on Continue CTA\n");
            }
            Thread.sleep(5000);
            Screenshots.captureScreenshot();

            OTAC_LandingPageActions.verifyPageURL();

            pageobjects.OTAC_PageObjects.UserMsisdnSixDigitCode.sendKeys(securityCode);
            log.debug("The OTAC Six digit code is entered\n");
            Screenshots.captureScreenshot();
            if (pageobjects.OTAC_PageObjects.Continue.isDisplayed()) {
                pageobjects.OTAC_PageObjects.Continue.click();
                log.debug("The OTAC customer clicks on Continue CTA\n");
            }
            Thread.sleep(5000);
            //Screenshots.captureScreenshot();

            String postURL = driver.getCurrentUrl();
            Thread.sleep(2000);
            Screenshots.captureScreenshot();
            if(postURL.contains("stac-capture-form")) {

                log.debug("Currently we are at STAC Capture Form ie: "+postURL+"\n");
            }

        }catch(Exception e){
            log.debug("Not able to complete OTAC, Found exception ie :"+e);
        }
    }

    public static void verifyPageURL() {
        try {
            String pageTitle = driver.getTitle();
            String currentURL = driver.getCurrentUrl();
            log.debug("We are at " + pageTitle + " page\n");
            log.debug("Current URL is: " + currentURL + "\n");
        }catch(Exception e){
            log.debug("Not able to verify OTAC login page, Found exception ie :"+e);
        }
    }

    public static void verifySTACFormElementsAndOTACmsisdn(String OTACMSISDN) {
        try {
            Thread.sleep(3000);
            String expectedText = "*";
            Screenshots.captureScreenshot();

            log.debug("Verifying the mandatory fields in the STAC Form\n");
            String actualHeadersText = pageobjects.OTAC_PageObjects.headerTxt.getText();
            log.debug("STAC Form header: "+actualHeadersText+"\n");
            log.debug("STAC Form mandatory field instruction label: "+pageobjects.OTAC_PageObjects.mandatoryFieldInstruction.getText()+"\n");

            String yourNumber = pageobjects.OTAC_PageObjects.yourNumber.getText();
            Thread.sleep(1000);
            log.debug("Your OTAC number is displayed in STAC form ie: "+yourNumber);

            String notYourNumber = pageobjects.OTAC_PageObjects.notYourNumber.getText();
            if(notYourNumber.contains("Not your number?")){
                log.debug("Not Your number question is displayed in STAC form ie: "+notYourNumber);
            }else{
                log.debug("Failed due to Not Your number question is not displayed\n");
                Assert.fail("Failed due to Not Your number question is not displayed\n");
            }

            String changeNumber = pageobjects.OTAC_PageObjects.changeNumber.getText();
            if(changeNumber.contains("Change number")){
                log.debug("Change number link is displayed in STAC form ie: "+changeNumber);
            }else{
                log.debug("Failed due to Change number link is not displayed\n");
                Assert.fail("Failed due to Change number link is not displayed\n");
            }

            String actualNonO2FieldText = pageobjects.OTAC_PageObjects.actualNonO2FieldText.getText();
            Thread.sleep(2000);
            Assert.assertTrue(actualNonO2FieldText.contains("*"),
                    "Assertion Failed: Expected Message: " + expectedText + " is not present in the Non O2 Field\n");
            log.debug("Assertion Success: '*' is present in: " + actualNonO2FieldText);

            String actualSTACCodeFieldText = pageobjects.OTAC_PageObjects.actualSTACCodeFieldText.getText();
            Thread.sleep(2000);
            Assert.assertTrue(actualSTACCodeFieldText.contains("*"),
                    "Assertion Failed: Expected Message: " + expectedText + " is not present in the STAC code field\n");
            log.debug("Assertion Success: '*' is present in: " + actualSTACCodeFieldText);

            String actualTariffFieldText = pageobjects.OTAC_PageObjects.actualTariffFieldText.getText();
            Thread.sleep(2000);
            Assert.assertTrue(actualTariffFieldText.contains("*"),
                    "Assertion Failed: Expected Message: " + expectedText + " is not present in the Tariff field\n");
            log.debug("Assertion Success: '*' is present in: " + actualTariffFieldText);

            String actualTariffInstructionText = pageobjects.OTAC_PageObjects.actualTariffInstructionText.getText();
            Thread.sleep(2000);
            log.debug("Tariff instruction text is present below the tariff field ie: " + actualTariffInstructionText);

            String alternateContactNumFieldTxt = pageobjects.OTAC_PageObjects.alternateContactNumFieldTxt.getText();
            Thread.sleep(2000);
            Assert.assertTrue(alternateContactNumFieldTxt.contains("Alternative contact number"),
                    "Assertion Failed: Expected Field Alternative contact number field: is not present in the STAC Form\n");
            log.debug("Assertion Success: 'Alternative contact number field' is present in the STAC Form ie: " + alternateContactNumFieldTxt);

            JavascriptExecutor jse = (JavascriptExecutor) driver;
            jse.executeScript("window.scrollBy(0,400)", "");
            log.debug("Scroll to Middle of the page for testing purpose\n");
            Thread.sleep(2000);
            Screenshots.captureScreenshot();

            String actualFirstNameFieldText = pageobjects.OTAC_PageObjects.actualFirstNameFieldText.getText();
            Thread.sleep(2000);
            Assert.assertTrue(actualFirstNameFieldText.contains("*"),
                    "Assertion Failed: Expected Message: " + expectedText + " is not present in the First Name Field \n");
            log.debug("Assertion Success: '*' is present in: " + actualFirstNameFieldText);

            String actualLastNameFieldText = pageobjects.OTAC_PageObjects.actualLastNameFieldText.getText();
            Thread.sleep(2000);
            Assert.assertTrue(actualLastNameFieldText.contains("*"),
                    "Assertion Failed: Expected Message: " + expectedText + " is not present in the Last Name Field \n");
            log.debug("Assertion Success: '*' is present in: " + actualLastNameFieldText);

            String actualEmailFieldText = pageobjects.OTAC_PageObjects.actualEmailFieldText.getText();
            Thread.sleep(2000);
            Assert.assertTrue(actualEmailFieldText.contains("*"),
                    "Assertion Failed: Expected Message: " + expectedText + " is not present in the Email Field \n");
            log.debug("Assertion Success: '*' is present in: " + actualEmailFieldText);

            String actualConfirmEmailNameFieldText = pageobjects.OTAC_PageObjects.actualConfirmEmailNameFieldText.getText();
            Thread.sleep(2000);
            Assert.assertTrue(actualConfirmEmailNameFieldText.contains("*"),
                    "Assertion Failed: Expected Message: " + expectedText + " is not present in the Confirm Email Field \n");
            log.debug("Assertion Success: '*' is present in: " + actualConfirmEmailNameFieldText);

            jse.executeScript("window.scrollBy(0,400)", "");
            Thread.sleep(2000);
            Screenshots.captureScreenshot();

            jse.executeScript("window.scrollBy(0,-900)", "");
            Thread.sleep(2000);
            log.debug("Scroll to Top of the page\n");


        }catch(Exception e){
            log.debug("Not able to verify STAC Form, Found exception ie :"+e);
        }
    }

    public static void inputDetailsInStacForm(String NonO2Number,String StacCode,String Tariff,String AlternativeNumber,String FirstName,String LastName,String EmailId) {
        try {

            log.debug("Entering the details in the STAC Form\n");
            Thread.sleep(2000);
            pageobjects.OTAC_PageObjects.actualNonO2Num.sendKeys(NonO2Number);
            log.debug("The Non O2 Number is entered ie, "+NonO2Number+"\n");
            Thread.sleep(1000);

            pageobjects.OTAC_PageObjects.actualSTACCode.sendKeys(StacCode);
            log.debug("The Stac code is entered ie, "+StacCode+"\n");
            Thread.sleep(1000);

            if(Tariff.equalsIgnoreCase("Business")){
                WebElement actualTariffDropdown = pageobjects.OTAC_PageObjects.actualTariff;
                Select select = new Select(actualTariffDropdown);
                select.selectByVisibleText(Tariff);
                log.debug("The Tariff is selected ie, " + Tariff+"\n");
                Thread.sleep(3000);

                String expectedText = "*";
                String actualBusinessDateFieldText = pageobjects.OTAC_PageObjects.actualBusinessDateFieldText.getText();
                Assert.assertTrue(actualBusinessDateFieldText.contains("*"),
                        "Assertion Failed: Expected Message: " + expectedText + " is not present in the Business Date Field\n");
                log.debug("Assertion Success: '*' is present in the text: " + actualBusinessDateFieldText);

                pageobjects.OTAC_PageObjects.selectTerminationDate.sendKeys("31-05-2019");
                log.debug("Termination date is entered ie: 31-05-2019\n");

            }else if(Tariff.equalsIgnoreCase("")){
                log.debug("The Tariff not selected as blank values has been passed\n");
            } else{
                WebElement actualTariffDropdown = pageobjects.OTAC_PageObjects.actualTariff;
                Select select = new Select(actualTariffDropdown);
                select.selectByVisibleText(Tariff);
                log.debug("The Tariff is selected ie, " + Tariff+"\n");
            }
            Screenshots.captureScreenshot();
            JavascriptExecutor jse = (JavascriptExecutor) driver;
            jse.executeScript("window.scrollBy(0,400)", "");
            log.debug("Scroll to Middle of the page for testing purpose\n");
            Thread.sleep(2000);
            Screenshots.captureScreenshot();

            pageobjects.OTAC_PageObjects.alternateContactNum.sendKeys(AlternativeNumber);
            log.debug("The alternate contact Number is entered ie, "+AlternativeNumber+"\n");
            Thread.sleep(1000);
            pageobjects.OTAC_PageObjects.actualFirstName.sendKeys(FirstName);
            log.debug("The first name is entered ie, "+FirstName+"\n");
            Thread.sleep(1000);
            pageobjects.OTAC_PageObjects.actualLastName.sendKeys(LastName);
            log.debug("The last name is entered ie, "+LastName+"\n");
            Thread.sleep(2000);
            Screenshots.captureScreenshot();
            Thread.sleep(1000);
            if(EmailId.equalsIgnoreCase("Random")) {
                String email = RandomEmailAddressCreation.RandomEmail();

                pageobjects.OTAC_PageObjects.actualEmail.sendKeys(email);
                log.debug("The emailId is entered ie, " + email+"\n");

                pageobjects.OTAC_PageObjects.actualConfirmEmail.sendKeys(email);
                log.debug("The confirm email Id is entered ie, " + email+"\n");
            }else{
                pageobjects.OTAC_PageObjects.actualEmail.sendKeys(EmailId);
                log.debug("The emailId is entered ie, " + EmailId+"\n");
            }

            jse.executeScript("window.scrollBy(0,400)", "");
            Thread.sleep(2000);
            Screenshots.captureScreenshot();

        }catch(Exception e){
            log.debug("Unable to input details in STAC Form, Found exception ie :"+e);
        }
    }


    public static void submitAndValidateStacFormReponse(String StacCodeVariant) {
        try {
          pageobjects.OTAC_PageObjects.submitCTA.click();
          log.debug("Submit button is clicked\n");

          Thread.sleep(8000);
          Screenshots.captureScreenshot();
          if(StacCodeVariant.equalsIgnoreCase("Valid")){
              String postURL = driver.getCurrentUrl();
              if(postURL.contains("stac-form-post-success-page")) {
                  log.debug("Customer submitted STAC Form successfully\n");
                  log.debug("Currently we are at STAC Form post success page ie: "+postURL+"\n");
              }else{
                  log.debug("Failed, Submitted STAC form throws error and we are Currently at page : "+postURL+"\n");
                  Assert.fail("Failed, Submitted STAC form throws error  and we are Currently at page : "+postURL+"\n");
              }

          }else{
              String postURL = driver.getCurrentUrl();
              Thread.sleep(2000);
              Screenshots.captureScreenshot();
              if(postURL.contains("stac-capture-form")) {
                  log.debug("Customer redirected to STAC Form because of "+StacCodeVariant+" input details\n");
                  log.debug("Currently we are at STAC Capture Form ie: "+postURL+"\n");
              }
              JavascriptExecutor jse = (JavascriptExecutor) driver;
              jse.executeScript("window.scrollBy(0,400)", "");
              Thread.sleep(2000);
              Screenshots.captureScreenshot();
          }
        }catch(Exception e){
            log.debug("Unable to input details in STAC Form, Found exception ie :"+e);
        }
    }

    public static void simoOtacValidation(String arg) throws IOException, InterruptedException {
        Thread.sleep(8000);
        String pageDetails = driver.getCurrentUrl();
        Thread.sleep(2000);
        if(pageDetails.contains("otac")) {
            log.debug("In OTAC page now: " + pageDetails + "\n");
        }else{
            log.debug("Customer did not redirected to otac page :" + pageDetails + "\n");
            Assert.fail("Customer did not redirected to otac page :" + pageDetails + "\n");
        }
        Screenshots.captureScreenshot();
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,400)", "");
        Thread.sleep(2000);
        Screenshots.captureScreenshot();
        jse.executeScript("window.scrollBy(0,-400)", "");
        Thread.sleep(2000);
        if (arg.contains("skip")) {
            log.debug("Skipping OTAC entry to verify account");
            Thread.sleep(3000);
            WebElement element = OTAC_PageObjects.skipThisStep_OTAC;
            JavascriptExecutor executor = (JavascriptExecutor)driver;
            executor.executeScript("arguments[0].click();", element);
            Thread.sleep(2000);

            log.debug("Clicked on skip this step");
            log.debug("Skipped OTAC entry step to verify account");
        }
        if (arg.contains("enterCode")) {
            log.debug("Entering OTAC to verify account");
            Thread.sleep(3000);
            WebElement element = OTAC_PageObjects.sendCode_OTAC;
            JavascriptExecutor executor = (JavascriptExecutor)driver;
            executor.executeScript("arguments[0].click();", element);
            Thread.sleep(6000);
            log.debug("Clicked on Send Code button");
            Screenshots.captureScreenshot();
            pageobjects.OTAC_PageObjects.enterCode_OTAC.sendKeys("999999");
            Thread.sleep(2000);
            Screenshots.captureScreenshot();
            log.debug("Entered OTAC code 999999 successfully");

            WebElement element1 = OTAC_PageObjects.submitCode_OTAC;
            executor.executeScript("arguments[0].click();", element1);
            Thread.sleep(5000);
        }
        Screenshots.captureScreenshot();
    }
}
