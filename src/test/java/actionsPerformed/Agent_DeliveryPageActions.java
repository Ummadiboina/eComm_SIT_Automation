package actionsPerformed;

import java.io.IOException;

import org.apache.log4j.Logger;

import GlobalActions.Screenshots;
import helpers.Environment;
import org.junit.Assert;
import org.openqa.selenium.By;
import pageobjects.Agent_DeliveryDetailsPage;

public class Agent_DeliveryPageActions extends Environment {

    final static Logger log = Logger.getLogger("Agent_DeliveryPageActions");
    public static String pacStacCodeStatus = "";

    /*
     * //this method used to perform click action on the Agent Home Page
     *
     * public static void ElementClickAction(String elementname) { // TODO
     * Auto-generated method stub log.debug("Agent_Home_Page_Action");
     * log.debug("Agent Delivery page validation");
     *
     * if(elementname!=null) { switch (elementname.toLowerCase()) { case
     * "AgreeAdvsioryCheck":
     * pageobjects.Agent_Deliverydetails.AgreeAdvsioryCheck.click(); break;
     *
     * }
     *
     * } }
     *
     */

    /*************************
     * Vinu Edited below
     *
     * @throws IOException
     ***********************/

    public static void Set_Bank_details(String Username) throws IOException {

        Agent_DeliveryDetailsPage.AccountName.sendKeys(Username);
        log.debug("Entered name is " + Username);

        Agent_DeliveryDetailsPage.AccountNumber.sendKeys("10207136");
        log.debug("Entered Account number - 10207136");

        Agent_DeliveryDetailsPage.SortCode.sendKeys("201596");
        log.debug("Entered sort code - 201596");

        pageobjects.Agent_DeliveryDetailsPage.CardCapture.click();
        log.debug("Card Cature Link is clicked");

        pageobjects.Agent_DeliveryDetailsPage.AgreeCreditCheck.click();
        log.debug("Clicked on the Accept Terms checkbox");
        Screenshots.captureScreenshot();
    }

    //ITFD-895, April Release new changes Validation by Jamal Khan
    public static void ofComSwitching(String ofComStatus, String journey) {

        try {
            Thread.sleep(5000);
            Screenshots.captureScreenshot();

            //ofCom Switching functionality is enabled or disabled
            if (ofComStatus.equalsIgnoreCase("Enabled")) {

                //Device is MBB or not
                if (journey.equalsIgnoreCase("CCA") || journey.equalsIgnoreCase("PayGsimo") || journey.equalsIgnoreCase("Tablet") || journey.equalsIgnoreCase("MBB") || journey.equalsIgnoreCase("AFU") || journey.equalsIgnoreCase("Accessory")) {
                    //As journey is MBB/AFU so ofCom should be disabled
                    if (driver.findElements(By.xpath("//li[normalize-space()='Are you switching to O2?']")).size() == 0) {
                        log.debug("As expected, ofCom Switching is disabled for MBB/AFU journey\n");
                    } else {
                        log.debug("Failed: ofCom Switching feature supposed to be disabled for MBB/AFU journey\n");
                        Assert.fail("Failed: ofCom Switching feature supposed to be disabled for MBB/AFU journey\n");
                    }
                } else {

                    log.debug("Journey is not a Tablet/PayGsimo/MBB/AFU/CFU journey\n");

                    if (driver.findElements(By.xpath("//li[normalize-space()='Are you switching to O2?']")).size() > 0) {
                        log.debug("As expected, ofCom Switching is enabled\n");

                        //Switching to O2 question validation
                        String ofComQuestion = Agent_DeliveryDetailsPage.switchingO2Question.getText();
                        Thread.sleep(3000);
                        if (ofComQuestion.contains("Are you switching to O2?")) {
                            log.debug("As expected, ofCom Switching to O2 question is displaying\n");
                            log.debug("OFCOM switching question is : " + ofComQuestion + "\n");
                        } else {
                            log.debug("Failed: ofCom Switching to O2 question is not displaying\n");
                            Assert.fail("Failed: ofCom Switching to O2 question is not displaying\n");
                        }

                        //ofCom Intro text
                        String ofComIntroText = Agent_DeliveryDetailsPage.switchingO2Intro.getText();
                        Thread.sleep(2000);
                        if (ofComIntroText.contains("If you already have your PAC or STAC code handy, we can start porting your number, or arrange a new one")) {
                            log.debug("OFCOM Switching to O2 Intro text is matching ie:: " + ofComIntroText + "\n");
                        } else {
                            log.debug("Failed: ofCom Switching to O2 Intro text is not matching ie:: " + ofComIntroText + "\n");
                            Assert.fail("Failed: ofCom Switching to O2 Intro text is not matching ie:: " + ofComIntroText + "\n");
                        }

                        /*//Switching to O2 PAC AND STAC code link validation
                        if (driver.findElements(By.xpath("//a[normalize-space='What is a PAC and STAC code?']")).size() > 0) {
                            log.debug("Failed: OFCOM Switching feature PAC and STAC link is displaying\n");
                            Assert.fail("Failed: ofCom Switching feature PAC and STAC link is displaying\n");
                        } else {
                            log.debug("ofCom Switching feature PAC and STAC link is not displaying\n");
                        }*/
                        log.debug("Now validating PAC and STAC code check box functionality\n");

                        String checkBox = Agent_DeliveryDetailsPage.PACSTACCheckBoxTxt.getText();
                        Thread.sleep(1000);
                        if (checkBox.contains("got my PAC or STAC code")) {
                            log.debug("Failed: PAC/STAC code checkbox text is matching ie: " + checkBox + "\n");
                        } else {
                            log.debug("Failed: PAC/STAC code checkbox text is not matching: " + checkBox + "\n");
                            Assert.fail("Failed: PAC/STAC code checkbox text is not matching: " + checkBox + "\n");
                        }

                        //Status of PAC and STAC input fields validation before selecting
                        if (Agent_DeliveryDetailsPage.PACSTACSection.isDisplayed()) {
                            log.debug("Failed due to PAC/STAC code input fields are displaying before selecting the PAC/STAC code checkbox\n");
                            Assert.fail("Failed due to PAC/STAC code input fields are displaying before selecting the PAC/STAC code checkbox\n");
                        } else {
                            log.debug("As expected, PAC/STAC code input fields are not displaying before selecting the PAC/STAC code checkbox\n");
                        }

                        if (Agent_DeliveryDetailsPage.PACSTACCheckBox.isSelected()) {
                            log.debug("Failed due to PAC/STAC code checkbox is selected before checking PAC/STAC code checkbox\n");
                            Assert.fail("Failed due to PAC/STAC code checkbox is selected before checking PAC/STAC code checkbox\n");
                        } else {
                            log.debug("As expected, PAC/STAC code checkbox is not selected before checking PAC/STAC code checkbox\n");
                        }

                        //clicking on PAC and STAC checkbox
                        log.debug("Clicking on PAC and STAC code checkbox to validate input fields\n");
                        Agent_DeliveryDetailsPage.PACSTACCheckBox.click();
                        log.debug("Clicked on PAC and STAC code checkbox\n");
                        pacStacCodeStatus = "Checked";
                        Thread.sleep(4000);
                        Screenshots.captureScreenshot();

                        if (Agent_DeliveryDetailsPage.PACSTACSection.isDisplayed()) {
                            log.debug("PAC/STAC code input fields are enabled/displaying after selecting PAC/STAC code checkbox\n");
                        } else {
                            log.debug("Failed due to PAC/STAC code input fields are not enabled/displaying after selecting PAC/STAC code checkbox\n");
                            Assert.fail("Failed due to PAC/STAC code input fields are not enabled/displaying after selecting PAC/STAC code checkbox\n");
                        }

                        //clicking on PAC and STAC checkbox
                        log.debug("Clicking on PAC and STAC code checkbox to hide input fields\n");
                        Agent_DeliveryDetailsPage.PACSTACCheckBox.click();

                        //Status of PAC and STAC input fields validation afte un-checking
                        if (Agent_DeliveryDetailsPage.PACSTACSection.isDisplayed()) {
                            log.debug("Failed due to PAC/STAC code input fields are displaying even after un-checking the PAC/STAC code checkbox\n");
                            Assert.fail("Failed due to PAC/STAC code input fields are displaying even after un-checking the PAC/STAC code checkbox\n");
                        } else {
                            log.debug("As expected, PAC/STAC code input fields are not displaying after un-checking the PAC/STAC code checkbox\n");
                        }

                        Screenshots.captureScreenshot();

                    } else {
                        log.debug("Failed: ofCom Switching feature supposed to be Enabled but it is disabled\n");
                        Assert.fail("Failed: ofCom Switching feature supposed to be Enabled but it is disabled\n");
                    }
                }
            } else if (ofComStatus.equalsIgnoreCase("Disabled")) {
                //Validating ofCom Switching feature is disabled or not
                if (driver.findElements(By.xpath("//li[normalize-space()='Are you switching to O2?']")).size() == 0) {
                    log.debug("As expected, ofCom Switching is disabled for disabled status\n");
                } else {
                    log.debug("Failed: ofCom Switching feature is enabled for disabled status\n");
                    Assert.fail("Failed: ofCom Switching feature is enabled for disabled status\n");
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    //ITFD-895, April Release new changes Validation by Jamal Khan
    public static void ofComPacStacCode(String ofComMobileNum, String PacStacCode, String PacStacCheck, String ofComStatus, String PacStackRetainCheck) {
        try {

            //ofCom Switching functionality is enabled or disabled
            if (ofComStatus.equalsIgnoreCase("Enabled")) {
                if (driver.findElements(By.xpath("//li[normalize-space()='Are you switching to O2?']")).size() > 0) {
                    log.debug("As expected, ofCom Switching is enabled\n");
                    log.debug("Currently validating PAC and STAC code check box functionality\n");

                    //PAC and Stac code checkbox Validation
                    if (PacStacCheck.equalsIgnoreCase("Yes")) {

                        //clicking on PAC and STAC checkbox
                        log.debug("Clicking on PAC and STAC code checkbox to enter input details\n");
                        Agent_DeliveryDetailsPage.PACSTACCheckBox.click();
                        log.debug("Clicked on PAC and STAC code checkbox\n");
                        pacStacCodeStatus = "Checked";
                        Screenshots.captureScreenshot();

                        //Entering inputs to Mobile Number and PACandStac Code fields
                        Agent_DeliveryDetailsPage.PACSTACMobileNum.sendKeys(ofComMobileNum);
                        log.debug("ofCom Switching mobile number is entered ie: " + ofComMobileNum + "\n");
                        Agent_DeliveryDetailsPage.PACSTACcode.sendKeys(PacStacCode);
                        log.debug("ofCom Switching PAC/STAC code is entered ie: " + PacStacCode + "\n");
                        Thread.sleep(2000);
                        Screenshots.captureScreenshot();

                    }

                    if (PacStacCheck.equalsIgnoreCase("Yes") && PacStackRetainCheck.equalsIgnoreCase("Yes") && pacStacCodeStatus.equals("Checked")) {
                        //Validating PAC/STAC fields retained values or not

                        log.debug("Clicking on PAC and STAC code checkbox to uncheck\n");
                        Agent_DeliveryDetailsPage.PACSTACCheckBox.click();
                        log.debug("PAC and STAC code checkbox is unchecked\n");
                        Screenshots.captureScreenshot();

                        //clicking on PAC and STAC checkbox again
                        log.debug("Clicking on PAC and STAC code checkbox again to validate values entered are retained or not\n");
                        Agent_DeliveryDetailsPage.PACSTACCheckBox.click();
                        log.debug("Clicked on PAC and STAC code checkbox again\n");
                        pacStacCodeStatus = "Checked";
                        Thread.sleep(3000);
                        Screenshots.captureScreenshot();

                        //SPAC and STAC Mobile Number input fields retained values or not
                        if (Agent_DeliveryDetailsPage.PACSTACMobileNum.getAttribute("value").equals(ofComMobileNum)) {
                            log.debug("As expected, Mobile Number field retained value ie: " + ofComMobileNum + "\n");
                        } else {
                            log.debug("Failed due to Mobile Number field not retained entered mobile number\n");
                            Assert.fail("Failed due to Mobile Number field not retained entered mobile number\n");
                        }

                        //SPAC and STAC code input fields retained values or not
                        if (Agent_DeliveryDetailsPage.PACSTACcode.getAttribute("value").equals(PacStacCode)) {
                            log.debug("As expected, PAC and STAC code field retained value ie: " + PacStacCode + "\n");
                        } else {
                            log.debug("Failed due to PAC and STAC code field not retained entered PAC and STAC code\n");
                            Assert.fail("Failed due to PAC and STAC code field not retained entered PAC and STAC code\n");
                        }
                    }
                } else {
                    log.debug("Failed: ofCom Switching feature supposed to be Enabled but it is disabled\n");
                    Assert.fail("Failed: ofCom Switching feature supposed to be Enabled but it is disabled\n");
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
