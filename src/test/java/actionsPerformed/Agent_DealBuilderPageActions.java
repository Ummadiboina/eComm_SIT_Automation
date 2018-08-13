package actionsPerformed;

import java.io.IOException;
import java.util.*;
import java.util.concurrent.TimeUnit;

import GlobalActions.CommonActions;
import GlobalActions.scrollToAnElement;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import GlobalActions.Screenshots;
import helpers.Environment;

import pageobjects.Agent_DealBuilderPage;

import org.junit.Assert;

public class Agent_DealBuilderPageActions extends Environment {

    final static Logger log = Logger.getLogger("Agent_DealBuilderPageActions");
    public static ArrayList deviceNames;
    public static ArrayList DevicesAndTariffs;
    public  static ArrayList lstOfDeviceAdded_DB;

    // this method used to perform click action on the Agent Home Page

    public static void ValidateAgentHomepage() throws IOException {

        log.debug("Agent Home page Validation" + driver.getTitle());

        Screenshots.captureScreenshot();

        // Assert.assertEquals("Agent Home Page",
        // pageobjects.Agent_HomePage.sectionHeading.getText());

        // Assert.assertEquals("Your basket",
        // pageobjects.BasketPage.BasketHeaderXXL.getText());
    }

    public static void SelectPAYMDevice(String Device) throws InterruptedException, IOException {

        // Reporter.log("Selected the dropdown Mrs");

        Agent_DealBuilderPage.DevicesTab.click();
        log.debug("Clicked on Devices tab");

        Thread.sleep(7000);

        if (Device.contains("Random")) {
            Thread.sleep(6000);
            Agent_DealBuilderPage.firstAvailableDevice.click();
            Thread.sleep(6000);
            log.debug("Selected device ");
        } else {
            Thread.sleep(3000);
            Agent_DealBuilderPage.SearchTextBox_PayMDevice.sendKeys(Device);
            log.debug("Clicked on SearchTextBox to enter" + Device);
            Thread.sleep(4000);
            Agent_DealBuilderPage.SelectInStockPAYMDevice.click();
            Thread.sleep(6000);
        }
        Screenshots.captureScreenshot();
    }

    public static void SelectTariff(String Tariff) throws InterruptedException, IOException {
        Agent_DealBuilderPage.TariffsTab.click();
        Thread.sleep(8000);
        if (Tariff.contains("Random")) {
            // Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("Standard");
            Agent_DealBuilderPage.SelectingFirstAvailableTariff.click();
            Thread.sleep(5000);
            log.debug("Selected Random Tariff ");
            Screenshots.captureScreenshot();
        }
        if (Tariff.contains("Standard")) {
            Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("Standard");
            Agent_DealBuilderPage.SelectingFirstAvailableTariff.click();
            Thread.sleep(5000);
            log.debug("Selected Random Tariff ");
        }
        if (Tariff.contains("SimO")) {
            Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("- / Simo");
            Agent_DealBuilderPage.SelectingFirstAvailableTariff.click();
            Thread.sleep(5000);
            log.debug("Selected Random SimO Tariff ");

        }
        if (Tariff.contains("Refresh")) {
            Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("Refresh");
            Thread.sleep(3000);
            Agent_DealBuilderPage.SelectingFirstAvailableTariff.click();
            Thread.sleep(5000);
            log.debug("Selected Refresh Tariff ");

        }
        ////////////////////////////// Basecomms
        ////////////////////////////// Tariff//////////////////////////////////////

        if (Tariff.contains("Base")) {
            Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("Base");
            Thread.sleep(2000);
            Agent_DealBuilderPage.SelectingFirstAvailableTariff.click();
            Thread.sleep(3000);
            log.debug("Selected Random Basecomms Tariff ");

        }
        Screenshots.captureScreenshot();

    }
    /////////////////////////////////// Basecomms Agent Offers column
    /////////////////////////////////// validation//////////////////////////////////

    public static void BasecommsAgentOffersColumnValidation() throws InterruptedException, IOException {
    Thread.sleep(8000);
        Screenshots.captureScreenshot();
        List<WebElement> menuOuter = driver.findElements(By.xpath("//*[@id='planTable']/tbody/tr"));
        log.debug(menuOuter.size());
        int j = 1;
        for (int i = 0; i < menuOuter.size()-1; i++) {
            j = i + 1;
            if (menuOuter.get(i).getText().trim().contains("Base Comms")) {
                if (driver.findElement(By.xpath("//*[@id='planTable']/tbody/tr[" + j + "]/td[11]")).getText().equalsIgnoreCase("Base Comms")) {
                    log.debug("Offers contains Base comms");
                    driver.findElement(By.xpath("//*[@id='planTable']/tbody/tr")).click();
                    break;

                } else {

                    log.debug("Offers does not contain Basecomms");

                }
            }
        }

    }

    public static void HandsetTariffCombination() throws IOException {

        try {
            Thread.sleep(3000);
            log.debug("Tariff Name: " + driver.findElement(By.xpath("//*[@id='planTable']/tbody/tr[1]/td[6]")).getText());
            if (driver.findElement(By.xpath("//*[@id='planTable']/tbody/tr[1]/td[6]")).getText().equals("Standard")) {
                log.debug("Selected Tariff is a Standard Tariff hence Handset Tariff combination is not required");
            } else {

                List<WebElement> menuOuter = driver.findElements(By.xpath("//*[@class='priceSelection']/select/option"));
                log.debug("The size of the table is :" + menuOuter.size());

                for (int i = 0; i < menuOuter.size(); i++) {
                    log.debug("Option " + i + " is: " + menuOuter.get(i).getText());
                }
                int selectSize=menuOuter.size()-1;

                //driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option)[" + menuOuter.size() + "]")).click();
                driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option)[" + selectSize + "]")).click();
                log.debug("Selected Option : " + driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option)[" + selectSize + "]")).getText());

                log.debug("Selected combination of handset and talk plan");
                Thread.sleep(9000);
            }
            Screenshots.captureScreenshot();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug("handset and tariff dropdown is not displayed, should be fine");
            Screenshots.captureScreenshot();
        }
    }

    public static void HandsetTariffCombination_new() throws IOException {
        try {
            log.debug("Tariff Name: " + driver.findElement(By.xpath("//*[@id='planTable']/tbody/tr[1]/td[6]")).getText());
            if (driver.findElement(By.xpath("//*[@id='planTable']/tbody/tr[1]/td[6]")).getText()
                    .equals("Standard")) {
                log.debug("Selected Tariff is a Standard Tariff hence Handset Tariff combination is not required");
            } else {

                List<WebElement> menuOuter = driver.findElements(By.xpath("//*[@class='priceSelection']/select/option"));
                log.debug("The size of the table is :" + menuOuter.size());

                for (int i = 0; i < menuOuter.size(); i++) {
                    log.debug("Option " + i + " is: " + menuOuter.get(i).getText());
                }

                //driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option)[" + menuOuter.size() + "]")).click();
                //log.debug("Selected Option : " + driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option)[" + menuOuter.size() + "]")).getText());


                driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
                driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option[2])")).click();
                log.debug("Selected Option : "+driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option[2])")).getText());

                log.debug("Selected combination of handset and talk plan");
                Thread.sleep(9000);
            }
            Screenshots.captureScreenshot();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug("handset and tariff dropdown is not displayed, should be fine");
            Screenshots.captureScreenshot();
        }
    }

    public static void SelectExtras(String Extras) throws InterruptedException, IOException {

        // Selecting an Extra
        Agent_DealBuilderPage.ExtrasTab.click();
        log.debug("Clicked on Extras Tab");

        Thread.sleep(3000);

        if (Extras.contains("Random")) {

            // pageobjects.Agent_DealBuilderPage.prepayDeviceTableFilter.click();
            Agent_DealBuilderPage.SelectingAvailableDataAllowance.click();
            Thread.sleep(3000);
            log.debug("Selected Random extra ");

        }

        if (Extras.contains("Base")) {

            log.debug("No extras for Basecomms devices");
        }
        Screenshots.captureScreenshot();

    }

    public static void ClickOnExtras() throws InterruptedException, IOException {

        // Selecting an Extra
        Agent_DealBuilderPage.ExtrasTab.click();
        log.debug("Clicked on Extras Tab");
        Thread.sleep(3000);
        Screenshots.captureScreenshot();
        Thread.sleep(3000);
    }

    public static void SelectBolton() throws InterruptedException, IOException {

        // Selecting a Bolton
        Thread.sleep(3000);
        Agent_DealBuilderPage.SelectBolton.click();
        log.debug("Clicked on Extras Tab");
        Thread.sleep(3000);
        Screenshots.captureScreenshot();
        Thread.sleep(4000);
    }


    public static void SelectPayGDevice(String Device) throws InterruptedException, IOException {

        Agent_DealBuilderPage.prepayDevicesTab.click();
        Thread.sleep(6000);

        if (Device.contains("iPhone 7 Plus 128GB Jet Black")) {
            log.debug("searching iPhone 7 Plus 128GB Jet Black");

            // pageobjects.Agent_DealBuilderPage.prepayDeviceTableFilter.click();
            Agent_DealBuilderPage.SearchTextBox_PrepayDevice.sendKeys(Device);

            Thread.sleep(6000);
            Agent_DealBuilderPage.SelectInStockPAYGDevice.click();
            log.debug("searched iPhone 7 Plus 128GB Jet Black");
            log.debug("Clicked on SearchTextBox to enter" + Device);
            Thread.sleep(3000);
        }
        else if (Device.contains("iPhone 6s 32GB Gold")) {
            log.debug("searching iPhone 6s 32GB Gold");

            // pageobjects.Agent_DealBuilderPage.prepayDeviceTableFilter.click();
            Agent_DealBuilderPage.SearchTextBox_PrepayDevice.sendKeys(Device);

            Thread.sleep(6000);
            Agent_DealBuilderPage.SelectInStockPAYGDevice.click();
            log.debug("searched iPhone 6s 32GB Gold");
            log.debug("Clicked on SearchTextBox to enter" + Device);
            Thread.sleep(3000);
        }else if(Device.contains("Galaxy Tab S3 9.7")){
            log.debug("searching Galaxy Tab S3 9.7");

            // pageobjects.Agent_DealBuilderPage.prepayDeviceTableFilter.click();
            Agent_DealBuilderPage.SearchTextBox_PrepayDevice.sendKeys(Device);

            Thread.sleep(6000);
            Agent_DealBuilderPage.SelectInStockPAYGDevice.click();
            log.debug("searched iPhone 6s 32GB Gold");
            log.debug("Clicked on SearchTextBox to enter" + Device);
            Thread.sleep(3000);
        }else{
            log.debug("searching " +Device);

            // pageobjects.Agent_DealBuilderPage.prepayDeviceTableFilter.click();
            Agent_DealBuilderPage.SearchTextBox_PrepayDevice.sendKeys(Device);

            Thread.sleep(6000);
            Agent_DealBuilderPage.SelectInStockPAYGDevice.click();
            log.debug("searched iPhone 6s 32GB Gold");
            log.debug("Clicked on SearchTextBox to enter" + Device);
            Thread.sleep(3000);
        }
        Screenshots.captureScreenshot();
    }

    public static void SelectAccessoryDevice(String Device) throws InterruptedException, IOException {

        Agent_DealBuilderPage.AccessoriesTab.click();

        if (Device.contains("iPhone 7 Evo Elite Brushed Black")) {
            log.debug("searched iPhone 7 Evo Elite Brushed Black");

            // pageobjects.Agent_DealBuilderPage.prepayDeviceTableFilter.click();
            Agent_DealBuilderPage.SearchTextBox_Accessories.sendKeys(Device);
            log.debug("searching iPhone 7 Evo Elite Brushed Black");
            Thread.sleep(3000);

            List<WebElement> menuOuter = driver.findElements(By.xpath("//*[@id='accessoryTable']/tbody/tr"));
            log.debug("The size of the table is :" + menuOuter.size());

            if (menuOuter.get(0).getText().contains("No matching records for given search criteria")) {
                driver.findElement(By.xpath("//*[@id='accessoryTable_filter']/label/a")).click();
                log.debug("Cannot find iPhone 7 Evo Elite Brushed Black. Clearing the search and selecting random In Stock Accessory");
                Thread.sleep(6000);

                log.debug("searching In Stock Accessory");
                Agent_DealBuilderPage.SearchTextBox_Accessories.sendKeys("In Stock");
                log.debug("searched In Stock Accessory");
                Thread.sleep(6000);
                Agent_DealBuilderPage.SelectSearchedaccessory.click();
                log.debug("Selected a random In stock accessory");
                Thread.sleep(3000);

            } else {

                Agent_DealBuilderPage.SelectSearchedaccessory.click();
                log.debug("Found Clicked on + symbol next to " + Device);
                log.debug("Clicked on + symbol next to " + Device);
            }
            Thread.sleep(3000);

        } else {
            log.debug("searching In Stock Accessory");
            Agent_DealBuilderPage.SearchTextBox_Accessories.sendKeys("screen protector");
            log.debug("searched In Stock Accessory");
            Thread.sleep(6000);
            Agent_DealBuilderPage.SelectSearchedaccessory.click();
            log.debug("Selected a random In stock accessory");
            Thread.sleep(3000);
        }
        Screenshots.captureScreenshot();
    }

    public static void SelectPayGTariff(String Tariff) throws InterruptedException, IOException {

        Thread.sleep(3000);
        Agent_DealBuilderPage.prepayPlansTab.click();
        log.debug("Clicked on prepayPlansTab ");
        log.debug("Clicked on prepayPlansTab ");

        if (Tariff.contains("Random")) {

            // pageobjects.Agent_DealBuilderPage.prepayDeviceTableFilter.click();
            Agent_DealBuilderPage.SelectingFirstAvailablePrePayTariff.click();
            Thread.sleep(5000);
            log.debug("Selected Random Tariff ");
            log.debug("Selected Random Tariff ");

        }
        Screenshots.captureScreenshot();
    }

    public static void eMailBasket() throws InterruptedException, IOException {

        // Selecting an eMail Link
        Agent_DealBuilderPage.eMailBasket.click();
        log.debug("Clicked on eMail Basket");
        log.debug("Clicked on eMail Basket");
        Thread.sleep(3000);
        Screenshots.captureScreenshot();

    }

    public static void ValdiateBasket() throws InterruptedException, IOException {
        Thread.sleep(3000);
        //String str1 = Agent_DealBuilderPage.dealBuilderContent.getText();
        log.debug("Validated Basket page");
                Screenshots.captureScreenshot();
    }

    public static void checkout() throws InterruptedException, IOException {
        Thread.sleep(3000);
        Agent_DealBuilderPage.Checkout.click();
        log.debug("Clicked on Checkout ");

        Screenshots.captureScreenshot();
    }

    public static void validateCheckout() throws InterruptedException, IOException {
        Thread.sleep(3000);
        if(Agent_DealBuilderPage.Checkout.isEnabled()) {
            log.debug("Checkout is enabled");
        }else{
            log.debug("Checkout is disabled");
        }

        Screenshots.captureScreenshot();
    }

    public static void checkoutEnabledDisabled() throws InterruptedException, IOException {
        Thread.sleep(3000);
        if(Agent_DealBuilderPage.Checkout.isEnabled()){
            log.debug("Checkout CTA is enabled");
        }else {
            log.debug("Checkout CTA is disabled");
        }
        Screenshots.captureScreenshot();
    }

    public static void eMailConfirmation() throws InterruptedException, IOException {
        // TODO Auto-generated method stub

        String Mainwindow = driver.getWindowHandle();
        // getting all the popup windows , hence using getwindowhandles instead
        // of getwindowhandle
        Set<String> s1 = driver.getWindowHandles();
        Iterator<String> i1 = s1.iterator();
        while (i1.hasNext()) {
            String ChildWindow = i1.next();
            if (!Mainwindow.equalsIgnoreCase(ChildWindow)) {
                // Switching to Child window
                driver.switchTo().window(ChildWindow);
                Thread.sleep(3000);
                Agent_DealBuilderPage.ChooseBasketToSend.click();
                Thread.sleep(2000);
                Agent_DealBuilderPage.sendBasketEmailAddress.sendKeys("vinudeep.malalur@o2.com");
                Thread.sleep(3000);
                Agent_DealBuilderPage.sendBasketPopupSubmit.click();
                Thread.sleep(3000);
                // eMailConfirmation();
                // Closing the Child Window.
                String text = Agent_DealBuilderPage.emailConfirmation.getText();
                Assert.assertEquals(text, "Email sent successfully");
                //assertEquals(text, "Email sent successfully");
                Screenshots.captureScreenshot();

                driver.close();
            }
        }

        // Switching to Parent window i.e Main Window.
        driver.switchTo().window(Mainwindow);
        Screenshots.captureScreenshot();

		/*
         * String text = Agent_DealBuilderPage.emailConfirmation.getText();
		 * Assert.assertEquals(text, "Email sent successfully");
		 */
        // driver.close();

    }

    public static void SearchDevice(String Status) throws InterruptedException, IOException {

        // Reporter.log("Selected the dropdown Mrs");
        log.debug("Entering Search device method");
        log.debug("The device search criteria is " + Status);

        Thread.sleep(8000);
        Agent_DealBuilderPage.DevicesTab.click();
        log.debug("Clicked on Devices tab");
        Thread.sleep(4000);

        Agent_DealBuilderPage.DeviceSearchFilter.click();
        log.debug("Clicked on Device Search field");
        Thread.sleep(3000);

        if (Status.contains("Delayed")) {

            Agent_DealBuilderPage.SearchDevice.sendKeys(Status);
            Thread.sleep(3000);
            log.debug("Sent search as - " + Status);
            /*Agent_DealBuilderPage.firstDevice.click();
            log.debug("Selected Delayed device");*/
        }

        if (Status.contains("preorder")) {

            Agent_DealBuilderPage.SearchDevice.sendKeys(Status);
            Thread.sleep(3000);
            log.debug("Sent search as - " + Status);
            Agent_DealBuilderPage.firstDevice.click();
            log.debug("Selected pre order device");
        }

        Screenshots.captureScreenshot();
    }

    public static void CCAHandsetTariffCombination() throws IOException {
        try {
            Select dropdown = new Select(pageobjects.Agent_DealBuilderPage.HandsetTariffCombination);
            dropdown.selectByIndex(1);
            log.debug("Selecting combination of handset and talkplan for CCA");
            log.debug(
                    "Selected combination is" + pageobjects.Agent_DealBuilderPage.HandsetTariffCombination.getText());
            Screenshots.captureScreenshot();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug("handset and CCA tariff dropdown is not displayed");
            Screenshots.captureScreenshot();
        }
    }

    public static void verifyIncompatibleErrror(String strError) throws IOException, InterruptedException {
        Thread.sleep(3000);
        try {
            if(driver.findElements(By.xpath("//*[@id='incomaptibleError']")).size()>0) {
                String errorMessage = pageobjects.Agent_DealBuilderPage.incomaptibleError.getText();
                log.debug("Error Message after adding Bill Spend cap bolton is: "+errorMessage);
            }else{
                log.debug("There is no incompatible error Message after adding Bill Spend cap bolton is");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug("Unable to validate Incompatible error message");
        }
        Screenshots.captureScreenshot();
    }


    public static void AgentTradeInQuestionair() throws InterruptedException, IOException {
        Thread.sleep(7000);
        if (Agent_DealBuilderPage.AgentTradeInBtn.isDisplayed()) {
            log.debug("The trade in button is displayed");
            //Agent_DealBuilderPage.AgentTradeInBtn.click();
            JavascriptExecutor executor = (JavascriptExecutor) driver;
            executor.executeScript("arguments[0].click();", Agent_DealBuilderPage.AgentTradeInBtn);

            log.debug("The Trade In button is clicked");
            Thread.sleep(6000);
            String Mainwindow1 = driver.getWindowHandle();
            // getting all the popup windows , hence using getwindowhandles
            // instead of
            // getwindowhandle
            Set<String> s1 = driver.getWindowHandles();
            Iterator<String> i1 = s1.iterator();
            while (i1.hasNext()) {
                String ChildWindow1 = i1.next();
                if (!Mainwindow1.equalsIgnoreCase(ChildWindow1)) {
                    // Switching to Child window
                    driver.switchTo().window(ChildWindow1);
                    Thread.sleep(3000);
                    // Agent_DealBuilderPage.AgentTradeAns1.click();

                    Select Question1 = new Select(pageobjects.Agent_DealBuilderPage.AgentTradeAns1);
                    Question1.selectByIndex(1);

                    Select Question2 = new Select(pageobjects.Agent_DealBuilderPage.AgentTradeAns2);
                    Question2.selectByIndex(1);

                    Select Question3 = new Select(pageobjects.Agent_DealBuilderPage.AgentTradeAns3);
                    Question3.selectByIndex(1);

                    Select Question4 = new Select(pageobjects.Agent_DealBuilderPage.AgentTradeAns4);
                    Question4.selectByIndex(1);

                    Thread.sleep(3000);

                    pageobjects.Agent_DealBuilderPage.AgentTradeAccept.click();


                }
                //Screenshots.captureScreenshot();
            }
            // Switching to Parent window i.e Main Window.
            driver.switchTo().window(Mainwindow1);
            Thread.sleep(5000);

            //JavascriptExecutor executor = (JavascriptExecutor) driver;
            executor.executeScript("arguments[0].click();", Agent_DealBuilderPage.TradeInCheckBox);
            Screenshots.captureScreenshot();

            // Agent_DealBuilderPage.TradeInCheckboxText.click();

            // Agent_DealBuilderPage.TradeInCheckBox.click();

        } else
            log.debug("The Trade in Button is not displayed");
        Screenshots.captureScreenshot();

    }

    public static void AgentTradeInQuestionairAns() throws IOException {

        if (Agent_DealBuilderPage.TradeInQuestions.isDisplayed()) {
            log.debug("The trade in Qustionair is displayed");
            Agent_DealBuilderPage.AgentTradeAns1.click();
            Agent_DealBuilderPage.AgentTradeAnsSelect1.click();
        }
        Screenshots.captureScreenshot();

    }

    public static void AgentBuyOut() throws InterruptedException, IOException {
        Thread.sleep(3000);
        Screenshots.captureScreenshot();
        if(Agent_DealBuilderPage.AgentBuyOut_Button.isDisplayed()) {
            log.debug("The Buy Out Questionair is displayed");
            Agent_DealBuilderPage.AgentBuyOut_Button.click();
            Screenshots.captureScreenshot();
        }
        Thread.sleep(7000);
        if(Agent_DealBuilderPage.Checkout.isDisplayed()) {
            log.debug("Deal Builder is displayed");
            Agent_DealBuilderPage.Checkout.click();
            Screenshots.captureScreenshot();
        }
    }

    public static void selectStore() throws InterruptedException {

        // Selecting an Extra
        Agent_DealBuilderPage.CheckStore.click();
        log.debug("Clicked on Check store stock Tab");
        log.debug("Clicked on Check store stock Tab");
        Thread.sleep(4000);

        String Mainwindow = driver.getWindowHandle();
        // getting all the popup windows , hence using getwindowhandles instead of
        // getwindowhandle
        Set<String> s1 = driver.getWindowHandles();
        Iterator<String> i1 = s1.iterator();
        while (i1.hasNext()) {
            String ChildWindow = i1.next();
            if (!Mainwindow.equalsIgnoreCase(ChildWindow)) {
                // Switching to Child window
                driver.switchTo().window(ChildWindow);
                Thread.sleep(3000);
                Agent_DealBuilderPage.Postcode.sendKeys("G2");

                Agent_DealBuilderPage.searchStore.click();

                JavascriptExecutor jse = (JavascriptExecutor) driver;
                jse.executeScript("window.scrollBy(0,200)", "");
                JavascriptExecutor executor = (JavascriptExecutor) driver;
                executor.executeScript("arguments[0].click();", Agent_DealBuilderPage.selectStore);

            }
        }
        // Switching to Parent window i.e Main Window.
        driver.switchTo().window(Mainwindow);
        log.debug("Selected store is" + pageobjects.Agent_DealBuilderPage.Storedetails.getText());

    }

    public static void HandsetTariffCombinationforPhones() {
        try {
            if (Agent_DealBuilderPage.deviceAdded_DealBuilder.isDisplayed()) {
                log.debug(" Device is added into the builder ");
                log.debug(" Device is added into the builder ");
                if (Agent_DealBuilderPage.promotions_DealBuilder.isDisplayed()) {
                    log.debug(" Promotions is added into the builder ");
                    log.debug(" Promotions is added into the builder ");
                } else {
                    log.debug("Failed to added the Promotions into the builder ");
                    log.debug("Failed to added the Promotions into the builder ");
                }
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug("handset and tariff dropdown is not displayed, should be fine");
        }
    }

    //Remove Bolton
    public static void removeBolton() {
        try {

                Agent_DealBuilderPage.removeBolton.isDisplayed();
                log.debug(" Bolton is removed from the the builder ");
                Screenshots.captureScreenshot();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug("Bolton removing is not done");
        }
    }

    //select remove the device

    public static void verifyPromotionsDisplayed() {
        try {
            if (Agent_DealBuilderPage.deviceAdded_DealBuilder.isDisplayed()) {
                log.debug(" Device is added into the builder ");
                log.debug(" Device is added into the builder ");
                if (Agent_DealBuilderPage.promotions_DealBuilder.isDisplayed()) {
                    log.debug(" Promotions is added into the builder ");
                    log.debug(" Promotions is added into the builder ");
                    Agent_DealBuilderPage.removeDevice_DealBuilder.click();
                    driver.manage().timeouts().implicitlyWait(1, TimeUnit.MINUTES);
                    log.debug(" Remove the Device from the builder ");
                    log.debug(" Remove the Device from the builder ");
                    Thread.sleep(5000);
                    Agent_DealBuilderPage.deviceTab.click();
                    Thread.sleep(2000);
                    Agent_DealBuilderPage.selectDevive2_formInstock.click();
                    driver.manage().timeouts().implicitlyWait(1, TimeUnit.MINUTES);
                    log.debug(" added the device2 into the builder ");
                    log.debug(" added the device2 into the builder ");
                    Thread.sleep(5000);
                    if (!Agent_DealBuilderPage.promotions_DealBuilder.isDisplayed()) {
                        log.debug(" Successfylly validated the Promotions are not displayed when add the deviece into the deail builder ");
                        log.debug(" Successfylly validated the Promotions are not displayed when added the add into the deail builder ");
                    } else {
                        log.debug(" Failed to validated the Promotions are not displayed when add the deviece into the deail builder ");
                        log.debug(" Failed to validated the Promotions are not displayed when added the add into the deail builder ");
                    }
                } else {
                    log.debug("Failed to added the Promotions into the builder ");
                    log.debug("Failed to added the Promotions into the builder ");
                }
            }
        } catch (Exception e) {
            log.debug(" Failed to validate the Promotions " + e.getStackTrace());
            log.debug(" Failed to validate the Promotions " + e.getStackTrace());
        }
    }

    //verify the targeted promitons tab

    public static void verifyTargetedPromotionsTab() {
        try {
            int sizeofElements = driver.findElements(By.xpath("//*[normalize-space(.)='Promotion Description']")).size();
            if (sizeofElements > 0) {
                Agent_DealBuilderPage.targetPromtionsTab.click();
                Thread.sleep(4000);
                log.debug(" Verified the targeted Promotions Tab Displayed at End ");
                log.debug(" Verified the targeted Promotions Tab Displayed at End ");
            }
        } catch (Exception e) {
            log.debug(" Failed to Displays the targetedPromotions tab at the end " + e.getStackTrace());
            log.debug(" Failed to Displays the targetedPromotions tab at the end " + e.getStackTrace());
        }
    }

//verify the targeted promitons tab

    public static void verifyPromotionsDescriotnDisplayed() {
        try {
            Thread.sleep(1000);
            log.debug(" Verified the targeted Promotions Tab Displayed at End ");
            log.debug(" Verified the targeted Promotions Tab Displayed at End ");
            String targetedDescri = "";
            targetedDescri = Agent_DealBuilderPage.promotionDescription.getText();
            if (targetedDescri.length() > 1) {
                log.debug("The promotions bolt on are displayed in targeted promotion tab");
                log.debug("The promotions bolt on are displayed in targeted promotion tab");
            } else {
                log.debug("The promotions bolt on are not displayed in targeted promotion tab");
                log.debug("The promotions bolt on are not displayed in targeted promotion tab");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug(" Failed to display's  the targeted Promotions Description " + e.getStackTrace());
            log.debug(" Failed to display's  the targeted Promotions Description " + e.getStackTrace());
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////    EMPTY_basket_validate_promotion      //////////////////////

    public static void Emptyabove() throws IOException, InterruptedException {

        Thread.sleep(3000);
        Agent_DealBuilderPage.Emptyabove.click();
        log.debug("Clicked on Empty Above ");
        log.debug("Clicked on Empty Above ");
        Screenshots.captureScreenshot();
    }
    //////////////////////Standard_or_CCA_targeted_bolton_promotion_tab_Agent_upgrade_options_page_Order_placement//////

    public static void SelectPromotion() throws InterruptedException, IOException {

        Agent_DealBuilderPage.SelectPromotion.click();
        log.debug("Clicked on Select Button");
        log.debug("Clicked on Select Button");
        Thread.sleep(3000);
        Screenshots.captureScreenshot();

    }

    public static void Copytobasket() throws InterruptedException, IOException {

        Agent_DealBuilderPage.Copytobasket.click();
        log.debug("Clicked on copy toBasket");
        log.debug("Clicked on copy to Basket");
        Thread.sleep(3000);
        Screenshots.captureScreenshot();

    }
    public static void ClickPlusaccordion() throws InterruptedException, IOException {
        Agent_DealBuilderPage.PlusButton.click();
        System.out.println("Clicked on Plus button");
        log.debug("Clicked on Plus Button");
        Thread.sleep(3000);
        Screenshots.captureScreenshot();
    }
    
    
     /********************************************************
     * Shubhashree
     */

    public static void SelectSmartTechDevice(String Device) throws InterruptedException, IOException {

        Boolean flag = false;
        Agent_DealBuilderPage.SmartTechDevicesTab.click();

        if (Device.contains("Fitbit Flex 2")) {
            System.out.println("searched Fitbit Flex 2");

            // pageobjects.Agent_DealBuilderPage.prepayDeviceTableFilter.click();
            Agent_DealBuilderPage.SearchTextBox_SmartTechDevice.sendKeys(Device);
            log.debug("searching Fitbit Flex 2");
            Thread.sleep(3000);

            List<WebElement> menuOuter = driver.findElements(By.xpath("//*[@id='smartTechDeviceTable']/tbody/tr"));
            System.out.println("The size of the table is :" + menuOuter.size());

            if (menuOuter.get(0).getText().contains("No matching records for given search criteria")) {
                driver.findElement(By.xpath("//*[@id='smartTechDeviceTable_filter']/label/a")).click();
                log.debug("Cannot find Fitbit Flex 2 device. Clearing the search and selecting random In Stock Smart Tech Device");
                Thread.sleep(6000);

                System.out.println("searching In Stock Smart Tech Device");
                Agent_DealBuilderPage.SearchTextBox_SmartTechDevice.sendKeys("In Stock");
                log.debug("searched In Stock Smart Tech Device");
                Thread.sleep(6000);
                Agent_DealBuilderPage.SelectSearchedSmartTechDevice.click();
                flag = true;
                log.debug("Selected a random In stock Smart Tech Device");
                Thread.sleep(3000);

            } else {

                List<WebElement> stockStatus = driver.findElements(By.xpath("//table[@id='smartTechDeviceTable']/tbody/tr/td[5]"));
                int i;

                outerloop:
                for (i = 0; i < stockStatus.size()-1; i++){
                    if (stockStatus.get(i).getText().trim().contains("Out of stock")) {

                        i++;
                        break;
                    }
                    else if (stockStatus.get(i).getText().trim().contains("In stock")){
                        driver.findElement(By.xpath("//table[@id='smartTechDeviceTable']/tbody/tr["+i+"]/td/a/img")).click();
                        flag = true;
                        break outerloop;
                    }
                }

            /*Agent_DealBuilderPage.SelectSearchedSmartTechDevice.click();
            System.out.println("Found Clicked on + symbol next to " + Device);
            log.debug("Clicked on + symbol next to " + Device);*/
            }
            Thread.sleep(3000);

        }
        if(flag == false){
            driver.findElement(By.xpath("//*[@id='smartTechDeviceTable_filter']/label/a")).click();
            System.out.println("searching In Stock Smart Tech Device");
            Agent_DealBuilderPage.SearchTextBox_SmartTechDevice.sendKeys("In Stock");
            log.debug("searched In Stock Smart Tech Device");
            Thread.sleep(6000);
            Agent_DealBuilderPage.SelectSearchedSmartTechDevice.click();
            log.debug("Selected a random In stock Smart Tech Device");
            Thread.sleep(3000);
        }
        Screenshots.captureScreenshot();
    }



    public static Hashtable getSelectedProducts() throws InterruptedException {
        Hashtable selectedElements = new Hashtable();
        deviceNames = new ArrayList();
        DevicesAndTariffs = new ArrayList();
        lstOfDeviceAdded_DB = new ArrayList();
        List<WebElement> elementsList = driver.findElements(By.xpath("//a[@class='basketHeading']"));
        for (int i = 0, j = 1; i < elementsList.size() - 1; i++, j++) {
            // elementsList.get(i).click();
            WebElement addedDeviveName = driver.findElement(By.xpath("(//a[@class='basketHeading'])[" + j + "]"));
            if(addedDeviveName.getText().contains("empty")) {
                System.out.println("the device is added as empty");
            }else{
                lstOfDeviceAdded_DB.add(addedDeviveName.getText());
            }


            JavascriptExecutor executor = (JavascriptExecutor) driver;
            executor.executeScript("arguments[0].click();", addedDeviveName);
            Thread.sleep(5000);
            if (driver.findElements(By.xpath("(//div[@class='lineItemContainer']//span[@class='content'])[1]")).size() >= 1) {
                String dNaame = driver.findElement(By.xpath("(//div[@class='lineItemContainer']//span[@class='content'])[1]")).getText();
                deviceNames.add(dNaame);
                System.out.println("The Device Name :: " + dNaame);
                log.info("The Device Name :: " + dNaame);
                Thread.sleep(2000);

                String tariffName = driver.findElement(By.xpath("(//div[@class='lineItemContainer']//span[@class='content'])[3]")).getText();
                DevicesAndTariffs.add(tariffName);
                System.out.println("The Tariff Name :: " + tariffName);
                log.info("The Device Name :: " + tariffName);
                Thread.sleep(2000);

                selectedElements.put(dNaame, tariffName);
            } else{

                continue;
            }
        }
        return selectedElements;

    }



    public static void validateEmailBasketPopupDeviceList (Hashtable DeviceList){

        ArrayList DealBuilderDeviceList = new ArrayList<String>();
        DealBuilderDeviceList = (ArrayList) DeviceList.get("DEVICES");

        List<WebElement> emailBasketPopupDevicelist = driver.findElements(By.xpath("//h3[contains(text(),'Choose baskets to share with customer:')]/../table[1]/tbody/tr"));

        for (WebElement elm : emailBasketPopupDevicelist) {

            if (DealBuilderDeviceList.contains(elm.findElement(By.xpath("//td[2]")).getAttribute("textContent"))) {

                log.debug(elm.findElement(By.xpath("//td[2]")).getAttribute("textContent") + " device is listed");

                if (elm.findElement(By.xpath("//td[3]")).isDisplayed() && elm.findElement(By.xpath("//td[3]")).getText().equalsIgnoreCase("GetBasketLink")) {

                    log.debug(elm.findElement(By.xpath("//td[2]")).getAttribute("textContent") + " device is listed and Basket Link is present");
                } else {

                    log.debug(elm.findElement(By.xpath("//td[2]")).getAttribute("textContent") + " device is listed but Basket Link is not present");
                }
            } else {
                log.debug("Unselected device is present in Email Basket pop up.");
            }

        }
    }

    public static void verifyDevive_and_CopyClipboard_Btn () {
        try {
            //list of the devices which are selected at the deal builder page
            //int lstOfDeviceAddedInBuilder = lstOfDeviceAdded_DB.size();
            //CommonActions.switchToWindow();
            String mainWindowHandle = driver.getWindowHandle ();

            String childWindowpopUp="";
            try {
                //String mainWindowHandle = driver.getWindowHandle ();
                //Switch to child window and close it
                for (String childWindowHandle : driver.getWindowHandles ()) {
                    //If window handle is not main window handle then close it
                    if (!childWindowHandle.equals (mainWindowHandle)) {
                        driver.switchTo ().window (childWindowHandle);

                        childWindowpopUp=driver.getWindowHandle ();

                        System.out.println(" Driver is Switch to Child Window");
                        log.info(" Driver is Switch to Child Window");
                    } else {
                        //switch back to main window
                        driver.switchTo ().window (mainWindowHandle);
                        System.out.println(" Driver is still stands in Main Window");
                        log.info(" Driver is still stands in Main Window");
                    }
                }
            } catch (Exception e){
                System.out.println ("Failed to switch to window :: " + e.getStackTrace ());
                log.info("Failed to switch to window :: " + e.getStackTrace ());

            }

            Thread.sleep(5000);

            List<WebElement> listOfDevicesAddedToBilder = driver.findElements(By.xpath("//div[@class='emailBasketWidget']//table[1]//tr"));
            int sizeOfAddedDevice = listOfDevicesAddedToBilder.size();
            int selectedDeviceList = lstOfDeviceAdded_DB.size();
            System.out.println("List of Device which are added to Deal Builder (" + selectedDeviceList + ")");

            for (int i = 1, j = 0; i <= sizeOfAddedDevice; i++, j++) {

                // String deviceNameFromBuilder = (String) lstOfDeviceAdded_DB.get(j);

                Thread.sleep(3000);
                String deviceName = driver.findElement(By.xpath("//div[@class='emailBasketWidget']//table[1]//tr[" + i + "]/td[2]/label")).getText();
                System.out.println("Device Name :: " + deviceName);
                log.info("Device Name :: " + deviceName);
/*
                    if (deviceNameFromBuilder.contains(deviceName)) {
                        System.out.println("Successfully selected Device from the Deail builder is same as same in the Email Builder");
                        log.info("Successfully selected Device from the Deail builder is same as same in the Email Builder");
                    } else {
                        System.out.println("List of Selected devices from the deail builder and Email basket page are varying");
                        log.info("List of Selected devices from the deail builder and Email basket page are varying");
                    }*/
                Thread.sleep(6000);
                WebElement getBasketLink = driver.findElement(By.xpath("//div[@class='emailBasketWidget']//table[1]//tr[" + i + "]/td[3]/input"));
                getBasketLink.click();

                Thread.sleep(6000);
                WebElement generatedLink = driver.findElement(By.xpath("//div[@class='emailBasketWidget']//table[1]//tr[" + i + "]/td[3]/label"));
                String genratedLnk = generatedLink.getText();

                WebElement copyToClipboardBtn = driver.findElement(By.xpath("//div[@class='emailBasketWidget']//table[1]//tr[" + i + "]/td[4]/input"));
                copyToClipboardBtn.click();
                Thread.sleep(3000);


                //CommonActions.switchToWindow();


                driver.switchTo().window(mainWindowHandle);
                Thread.sleep(5000);


                JavascriptExecutor executor = (JavascriptExecutor) driver;
                executor.executeScript("window.open()");

                Set<String> handles = driver.getWindowHandles();
                List<String> handlesList = new ArrayList<String>(handles);
                String newWindow = handlesList.get(handlesList.size() - 1);
                driver.switchTo().window(newWindow);
                driver.navigate().to(genratedLnk);


                   /*
                    driver.findElement(By.cssSelector("body")).sendKeys(Keys.CONTROL + "w");
                    Thread.sleep(3000);

                     driver.findElement(By.cssSelector("body")).sendKeys(Keys.CONTROL + "v");
                    Thread.sleep(3000);
                    */


                /*
                    Robot robot = new Robot();
                    robot.keyPress(KeyEvent.VK_CONTROL);
                    robot.keyPress(KeyEvent.VK_T);

                    Set<String> handles = driver.getWindowHandles();
                    List<String> handlesList = new ArrayList<String>(handles);
                    String newTab = handlesList.get(handlesList.size() - 1);

                    // switch to new tab
                    driver.switchTo().window(newTab);
                    driver.get(genratedLnk);

                    */

                String getTheLaunchedURL = driver.getCurrentUrl();

                if (!getTheLaunchedURL.isEmpty()) {
                    if (getTheLaunchedURL.contains(genratedLnk)) {
                        System.out.println("Successfully verify the Both links which are displayed on the Email Basket window");
                        log.info("Successfully verify the Both links which are displayed on the Email Basket window");
                        System.out.println("Basket Link : (" + getTheLaunchedURL + ")");
                        System.out.println("Basket Link : (" + genratedLnk + ")");

                        //Basket validation should done here

                        driver.close();
                        Thread.sleep(3000);
                    } else {
                        driver.close();
                    }
                    Thread.sleep(5000);
                    //CommonActions.switchToWindow();
                    driver.switchTo ().window (childWindowpopUp);
                }
            }
            driver.close();

            driver.switchTo().window(mainWindowHandle);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    //Jamal----Agent Bill Spend Cap validation-----
    public static void ValidateBillSpendCap_AgentDealBuilder(String BSCstatus) throws IOException {
        try {

            if(BSCstatus.equalsIgnoreCase("Enabled")) {
                if (driver.findElements(By.xpath("//*[contains(text(),'Spend cap')]")).size() > 0) {

                    log.debug("Bill spend cap section is enabled");

                    String capHeader = pageobjects.Agent_DealBuilderPage.BillSpendCapHeader.getText();
                    log.debug("Bill Spend Cap header is displayed in DealBuilder page ie :: " + capHeader);

                    //Bill cap header validation
                    if (capHeader.equalsIgnoreCase("Bill spend cap")) {
                        log.debug("Bill Spend Cap header is displayed as expected");
                    } else {
                        log.debug("Bill Spend Cap header is not matching");
                        Assert.fail("Bill Spend Cap header is not matching");
                    }

                    //Listing all the cap amounts
                    List<WebElement> menuOuter = driver.findElements(By.xpath("//*[@class='capSelection']/select/option"));
                    log.debug("The size of the table is :" + menuOuter.size());
                    log.debug("Bill Spend Cap Options are: \n");

                    for (int i = 0; i < menuOuter.size(); i++) {
                        log.debug("Cap Option " + i + " is: " + menuOuter.get(i).getText());
                    }

                    String BillCapStatus = pageobjects.Agent_DealBuilderPage.BillSpendCapMessage.getText();
                    log.debug("Bill Spend Status message before selecting bill cap:: " + BillCapStatus);

                    //Checkout CTA status before selecting BSC bolton
                    if(Agent_DealBuilderPage.Checkout.isEnabled()) {
                        log.debug("Checkout is enabled before selecting BSC bolton");
                        Assert.fail("Checkout is enabled before selecting BSC bolton");
                    }else{
                        log.debug("As expected Checkout is disabled before selecting BSC bolton");
                    }

                    //Spend cap overlay icon
                    if(driver.findElements(By.xpath("//*[normalize-space()='BSCoverlayIcon']")).size()>0) {
                        log.debug("BSC overlay icon is present and clicking on it");
                        Agent_DealBuilderPage.BSCoverlayIcon.click();
                        log.debug("BSC overlay icon is clicked");
                        Thread.sleep(3000);
                        String overlayText =Agent_DealBuilderPage.BSCoverlayText.getText();
                        Thread.sleep(3000);
                        log.debug("BSC overlay text is: "+overlayText);
                        log.debug("\n BSC overlay is closing now");
                        Agent_DealBuilderPage.BSCoverlayClosed.click();
                        log.debug("\n BSC overlay is closed");
                    }else{
                        log.debug("BSC overlay icon is not present");
                        Assert.fail("BSC overlay icon is not present");
                    }

                    Screenshots.captureScreenshot();
                } else {
                    log.debug("Bill Spend Cap section is not displayed under deal builder section");
                    Assert.fail("Bill Spend Cap section is not displayed under deal builder section");
                    Screenshots.captureScreenshot();
                }
            }else if(BSCstatus.equalsIgnoreCase("Disabled")){
                if (driver.findElements(By.xpath("//*[contains(text(),'Spend cap')]")).size() > 0) {
                    log.debug("Bill spend cap section is enabled it suppose to be in disabled status");
                    Assert.fail("Bill spend cap section is enabled it suppose to be in disabled status");
                }else{
                    log.debug("As expected, Bill spend cap section is disabled");
                }
            }else {
                System.out.println("Unable to validate bill spend cap section \n");
                log.debug("Unable to validate bill spend cap section \n");
                Assert.fail("Unable to validate bill spend cap section \n");
            }

        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug("Unable to find Bill Spend Cap section");
            Screenshots.captureScreenshot();
        }
    }

    //Jamal----choose a valid Bill Cap Amount in agent-----
    public static void addBillSpendCap_AgentDealBuilder(String BillCapAmount, String BSCstatus) throws IOException {
        try {
            String BillCap = "";
            int cnt=0;

            if(BSCstatus.equalsIgnoreCase("Enabled")) {
                if (driver.findElements(By.xpath("//*[contains(text(),'Spend cap')]")).size() > 0) {

                    log.debug("Bill spend cap section is enabled");

                    List<WebElement> menuOuter = driver.findElements(By.xpath("//*[@class='capSelection']/select/option"));

                    String BillCapStatus = pageobjects.Agent_DealBuilderPage.BillSpendCapMessage.getText();

                    //Selecting specified bill cap
                    log.debug("Selecting your Bill Cap:");
                    for (int i = 0; i < menuOuter.size(); i++) {
                        BillCap = driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option[" + i + "])")).getText();
                        if (BillCap.contains(BillCapAmount)) {
                            driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option[" + i + "])")).click();
                            log.debug("Your Bill cap is selected ie:: " + BillCapAmount);
                            cnt++;
                            break;
                        }
                    }
                    Thread.sleep(4000);
                    if (cnt == 0) {
                        log.debug("Bill Spend Cap list does not contain specified cap amount and your Bill cap is not selected ie:: " + BillCapAmount);
                        Assert.fail("Bill Spend Cap list does not contain specified cap amount and your Bill cap is not selected ie:: " + BillCapAmount);
                    }

                    //status message validation
                    if (BillCapStatus.contains(BillCapAmount)) {
                        log.debug("Bill Spend Status message after selecting bill cap:: " + BillCapStatus);
                        log.debug("Status message after selecting bill cap contain your bill cap amount :: " + BillCapStatus);
                    }else {
                        log.debug("Status message after selecting bill cap does not contain your bill cap amount :: " + BillCapStatus);
                        Assert.fail("Status message after selecting bill cap does not contain your bill cap amount :: " + BillCapStatus);
                    }

                   /* //Checkout CTA status after selecting BSC bolton
                    if(Agent_DealBuilderPage.Checkout.isEnabled()) {
                        log.debug("As expected Checkout is enabled after selecting BSC bolton");
                    }else{
                        log.debug("Checkout is disabled after selecting BSC bolton");
                        Assert.fail("Checkout is disabled after selecting BSC bolton");
                    }*/

                    Screenshots.captureScreenshot();
                } else {
                    log.debug("Not able to select your Bill Spend Cap");
                    Assert.fail("Not able to select your Bill Spend Cap");
                    Screenshots.captureScreenshot();
                }
            }else if(BSCstatus.equalsIgnoreCase("Disabled")){
                if (driver.findElements(By.xpath("//*[contains(text(),'Spend cap')]")).size() > 0) {
                    log.debug("Bill spend cap section is enabled it suppose to be disabled for disable status");
                    Assert.fail("Bill spend cap section is enabled it suppose to be disabled for disable status");
                }else{
                    log.debug("As expected, Bill spend cap section is disabled");
                }
            }else {
                System.out.println("Unable to validate bill spend cap section \n");
                log.debug("Unable to validate bill spend cap section \n");
                Assert.fail("Unable to validate bill spend cap section \n");
            }

        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug("Not able to select your Bill Spend Cap");
            Screenshots.captureScreenshot();
        }
    }

    public static void verify_BSC_Bolton_PresentOrNotInAgentExtraTab() throws InterruptedException, IOException {

        Thread.sleep(3000);
        if(driver.findElements(By.xpath("//*[normalize-space()='Spend cap']")).size()>0){
            log.debug("Bill Spend Cap Bolton is available in extra tab");
            Assert.fail("Bill Spend Cap Bolton is available in extra tab");
        }else{
            log.debug("As expected Bill Spend Cap Bolton is not available in extra tab");
        }
        Screenshots.captureScreenshot();
        Thread.sleep(4000);
    }

    //Validating your bill cap in Basket page
    public static void ValidateAppliedBillSpendCapInAgentDealSummary(String BillCapAmount, String BSCstatus) throws InterruptedException {
        Thread.sleep(4000);
        String AppliedBillCap="";
        String pageTitle = driver.getTitle();
        try {
            if(BSCstatus.equalsIgnoreCase("Enabled")) {
                if (driver.findElements(By.xpath("//h3[normalize-space()='Spend Cap']")).size() > 0) {

                    log.debug("Bill spend cap section is displayed");
                    scrollToAnElement.scrollToElement(pageobjects.Agent_DealBuilderPage.BillSpendCapHeader);
                    Screenshots.captureScreenshot();
                    log.debug("Bill Spend Cap header is displayed in " + pageTitle + " page ie :: " + pageobjects.Agent_DealBuilderPage.BillSpendCapHeader.getText());

                    AppliedBillCap = pageobjects.Agent_DealBuilderPage.appliedBillCap.getText();

                    if (AppliedBillCap.contains(BillCapAmount)) {
                        log.debug("Applied bill cap is validated successfully in " + pageTitle + " page ie :: " + AppliedBillCap);
                    }else {
                            log.debug("Failed to validate applied bill cap:: " + AppliedBillCap);
                            Assert.fail("Failed to validate applied bill cap :: " + AppliedBillCap);
                    }

                } else {
                    log.debug("Bill cap section is not present under deal summary section in " + pageTitle + " page");
                    Assert.fail("Bill cap section is not present under deal summary section in " + pageTitle + " page");
                }
            }else if(BSCstatus.equalsIgnoreCase("Disabled")){
                if (driver.findElements(By.xpath("//h3[normalize-space()='Spend Cap']")).size() > 0) {
                    log.debug("Bill spend cap section is enabled it suppose to be in disabled status in " + pageTitle + " page");
                    Assert.fail("Bill spend cap section is enabled it suppose to be in disabled status in " + pageTitle + " page");
                }else{
                    log.debug("As expected, Bill spend cap section is disabled in " + pageTitle + " page");
                }
            }else {
                System.out.println("Unable to validate bill spend cap section in " + pageTitle + " page for invalid status\n");
                log.debug("Unable to validate bill spend cap section in " + pageTitle + " page for invalid status\n");
                Assert.fail("Unable to validate bill spend cap section in " + pageTitle + " page for invalid status\n");
            }
        }catch(Exception e){
            log.debug("Unable to validate Bill cap section in " + pageTitle + " page is:: " + e);
            Assert.fail("Unable to validate Bill cap section in " + pageTitle + " page is:: " + e);
        }
    }
    
    /*********************************************************************************************************************************************************************
       * validation    : To validate the flexible refresh (ITFD - 466)                                                                                                 *
       * Created by    : Venkata                                                                                                                                       *
       * Created date  : 02/08/18     - August Release                                                                                                                 *
       * Modified by/date :                                                                                                                                            *
       * Reason to change:                                                                                                                                             *
     **********************************************************************************************************************************************************************/
    public static void buildTariff_DealBuilder_Agent(String buildTariff){
        try{
        log.info("Entered int to method - buildTariff_DealBuilder_Agent");
        //CommonActions.clickWebElement(Agent_DealBuilderPage.priceSection);
        //CommonActions.selectValueFromDropDown(Agent_DealBuilderPage.priceSection,null,null,buildTariff);



        log.info("From pricing section Selected Tariff - " + buildTariff);
        CommonActions.driverWait(3000);


        }catch (Exception e){

        }
    }


}


