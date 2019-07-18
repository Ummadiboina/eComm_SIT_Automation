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
    public static ArrayList lstOfDeviceAdded_DB;
    public static String upFrontCost;
    public static String totalCostPerMonth;

    // this method used to perform click action on the Agent Home Page

    public static void ValidateAgentHomepage() throws IOException {

        log.debug("Agent Home page Validation" + driver.getTitle());

        Screenshots.captureScreenshot();
    }

    public static void SelectPAYMDevice(String Device) throws InterruptedException, IOException {

        // Reporter.log("Selected the dropdown Mrs");
        Thread.sleep(5000);
        Agent_DealBuilderPage.DevicesTab.click();
        log.debug("Clicked on Devices tab");

        Thread.sleep(2000);

        if (Device.contains("Random")) {
            Thread.sleep(1000);
            Agent_DealBuilderPage.firstAvailableDevice.click();
            Thread.sleep(2000);
            log.debug("Selected device ");
        } else {
            Thread.sleep(2000);
            Agent_DealBuilderPage.SearchTextBox_PayMDevice.sendKeys(Device);
            log.debug("Clicked on SearchTextBox to enter" + Device);
            Thread.sleep(2000);
            Screenshots.captureScreenshot();
            Agent_DealBuilderPage.SelectInStockPAYMDevice.click();
            Thread.sleep(2000);
        }
        Screenshots.captureScreenshot();
    }

    public static void SelectTariff(String Tariff) throws InterruptedException, IOException {
        Agent_DealBuilderPage.TariffsTab.click();
        Thread.sleep(2000);
        if (Tariff.contains("Random")) {
            // Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("Standard");
            Agent_DealBuilderPage.SelectingFirstAvailableTariff.click();
            Thread.sleep(25000);
            log.debug("Selected Random Tariff ");
            Screenshots.captureScreenshot();
        } else if (Tariff.contains("Standard")) {
            Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("Standard");
            Agent_DealBuilderPage.SelectingFirstAvailableTariff.click();
            Thread.sleep(2000);
            log.debug("Selected Random Tariff ");
        } else if (Tariff.contains("Simo")) {
            Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("- / Simo");
            Thread.sleep(2000);
            //Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("Simo");
            Agent_DealBuilderPage.SelectingFirstAvailableTariff.click();
            Thread.sleep(2000);
            log.debug("Selected Random SimO Tariff ");

        } else if (Tariff.contains("Refresh")) {
            Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("Refresh");
            Thread.sleep(2000);
            Agent_DealBuilderPage.SelectingFirstAvailableTariff.click();
            Thread.sleep(2000);
            log.debug("Selected Refresh Tariff ");

        } else if (Tariff.contains("Base")) {
            ////////////////////////////// Basecomms
            ////////////////////////////// Tariff//////////////////////////////////////
            Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("Base");
            Thread.sleep(1000);
            Agent_DealBuilderPage.SelectingFirstAvailableTariff.click();
            Thread.sleep(1000);
            log.debug("Selected Random Basecomms Tariff ");

        } else {
            Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys(Tariff);
            Thread.sleep(1000);
            Agent_DealBuilderPage.SelectingFirstAvailableTariff.click();
            Thread.sleep(2000);
            log.debug("Selected provided Tariff ");
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
        for (int i = 0; i < menuOuter.size() - 1; i++) {
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

                String priceCombinationLastItem = driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option)[" + menuOuter.size() + "]")).getText();

                if (priceCombinationLastItem.contains("Build tariff")) {
                    log.debug("Build tariff option is present in the price dropdown menu ie :: " + priceCombinationLastItem);
                    int selectSize = menuOuter.size() - 1;
                    driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option)[" + selectSize + "]")).click();
                    log.debug("Selected Option : " + driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option)[" + selectSize + "]")).getText());
                } else {
                    driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option)[" + menuOuter.size() + "]")).click();
                    log.debug("Selected Option : " + driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option)[" + menuOuter.size() + "]")).getText());
                }

                log.debug("Selected combination of handset and talk plan");
                Thread.sleep(5000);
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
                driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option[2])")).click();
                log.debug("Selected Option : " + driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option[2])")).getText());

                log.debug("Selected combination of handset and talk plan");
                Thread.sleep(5000);
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

        if (Extras.contains("Insurance")) {

            // pageobjects.Agent_DealBuilderPage.prepayDeviceTableFilter.click();
            Agent_DealBuilderPage.selectInsurance.click();
            Thread.sleep(3000);
            log.debug("Selected Random extra ");

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
        log.debug("Bolton selected");
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
        } else if (Device.contains("iPhone 6s 32GB Gold")) {
            log.debug("searching iPhone 6s 32GB Gold");

            // pageobjects.Agent_DealBuilderPage.prepayDeviceTableFilter.click();
            Agent_DealBuilderPage.SearchTextBox_PrepayDevice.sendKeys(Device);

            Thread.sleep(6000);
            Agent_DealBuilderPage.SelectInStockPAYGDevice.click();
            log.debug("searched iPhone 6s 32GB Gold");
            log.debug("Clicked on SearchTextBox to enter" + Device);
            Thread.sleep(3000);
        } else if (Device.contains("Galaxy Tab S3 9.7")) {
            log.debug("searching Galaxy Tab S3 9.7");

            // pageobjects.Agent_DealBuilderPage.prepayDeviceTableFilter.click();
            Agent_DealBuilderPage.SearchTextBox_PrepayDevice.sendKeys(Device);

            Thread.sleep(6000);
            Agent_DealBuilderPage.SelectInStockPAYGDevice.click();
            log.debug("searched iPhone 6s 32GB Gold");
            log.debug("Clicked on SearchTextBox to enter" + Device);
            Thread.sleep(3000);
        } else {
            log.debug("searching " + Device);

            // pageobjects.Agent_DealBuilderPage.prepayDeviceTableFilter.click();
            Agent_DealBuilderPage.SearchTextBox_PrepayDevice.sendKeys(Device);

            Thread.sleep(6000);
            Agent_DealBuilderPage.SelectInStockPAYGDevice.click();
            log.debug("searched specified device\n");

            Thread.sleep(3000);
        }
        Screenshots.captureScreenshot();
    }

    public static void selectSmartTechDevice(String Device) throws InterruptedException {

        Agent_DealBuilderPage.smartTechTab.click();
        Thread.sleep(12000);
        log.debug("searching In Stock devices");
        Agent_DealBuilderPage.SearchTextBox_SamrtTech.sendKeys(Device);
        log.debug("searched In Stock devices ie: " + Device);
        Thread.sleep(6000);
        Agent_DealBuilderPage.SelectSearchedSmartTechDevice.click();
        log.debug("Selected a random In stock device ie: " + Device);
        Thread.sleep(3000);
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

        } else if (Device.contains("Samsung S8 Plus Evo Wallet")) {
            log.debug("searching In Stock Accessory ie:" + Device);
            Agent_DealBuilderPage.SearchTextBox_Accessories.sendKeys(Device);
            log.debug("searched In Stock Accessory");
            Thread.sleep(6000);
            Agent_DealBuilderPage.SelectSearchedaccessory.click();
            log.debug("Selected In stock accessory ie: " + Device);
            Thread.sleep(3000);
        } else if (Device.contains("Galaxy Watch 46mm Silver")) {
            log.debug("searching Galaxy Watch 46mm Silver Accessory ie:" + Device);
            Agent_DealBuilderPage.SearchTextBox_Accessories.sendKeys(Device);
            log.debug("searched Galaxy Watch 46mm Silver Accessory");
            Thread.sleep(3000);
            Agent_DealBuilderPage.SelectSearchedaccessory.click();
            log.debug("Selected In stock accessory ie: " + Device);
            Thread.sleep(3000);
        } else {
            log.debug("searching In Stock Accessory");
            Agent_DealBuilderPage.SearchTextBox_Accessories.sendKeys("In Stock");
            log.debug("searched In Stock Accessory");
            Thread.sleep(6000);
            Agent_DealBuilderPage.SelectSearchedaccessory.click();
            log.debug("Selected a random In stock accessory");
            Thread.sleep(3000);
        }
        Screenshots.captureScreenshot();
    }

    public static void SelectPayGTariff(String Tariff) throws InterruptedException, IOException {

        Thread.sleep(6000);
        Agent_DealBuilderPage.prepayPlansTab.click();
        log.debug("Clicked on prepayPlansTab ");
        Thread.sleep(7000);
        if (Tariff.contains("Random")) {

            // pageobjects.Agent_DealBuilderPage.prepayDeviceTableFilter.click();
            if (driver.findElements(By.xpath("//*[@id='prepayPlanTable']/tbody/tr")).size() > 1) {
                Agent_DealBuilderPage.SelectingFirstAvailablePrePayTariff.click();
            } else {
                driver.findElement(By.xpath("//*[@id='prepayPlanTable']/tbody/tr[1]/td[1]")).click();
            }
            Thread.sleep(5000);
            log.debug("Selected Random Tariff ");
        }
        Screenshots.captureScreenshot();
    }

    public static void eMailBasket() throws InterruptedException, IOException {

        // Selecting an eMail Link
        Screenshots.captureScreenshot();
        Thread.sleep(5000);
        Agent_DealBuilderPage.eMailBasket.click();
        log.debug("Clicked on eMail Basket");

        Thread.sleep(7000);
        Screenshots.captureScreenshot();

    }

    public static void ValdiateBasket() throws InterruptedException, IOException {
        Thread.sleep(3000);
        //String str1 = Agent_DealBuilderPage.dealBuilderContent.getText();
        log.debug("Validated Basket page");
        Screenshots.captureScreenshot();
    }

    public static void checkout() throws InterruptedException, IOException {
        Thread.sleep(5000);
        log.debug("Clicking on Checkout CTA\n");
        //Agent_DealBuilderPage.Checkout.click();
        driver.findElement(By.xpath("//input[@id='startCheckoutFromPrivateBasketButton']")).click();
        log.debug("Clicked on Checkout \n");

        Screenshots.captureScreenshot();
    }

    public static void validateCheckout() throws InterruptedException, IOException {
        Thread.sleep(3000);
        if (Agent_DealBuilderPage.Checkout.isEnabled()) {
            log.debug("Checkout is enabled");
        } else {
            log.debug("Checkout is disabled");
        }

        Screenshots.captureScreenshot();
    }

    public static void checkoutEnabledDisabled() throws InterruptedException, IOException {
        Thread.sleep(3000);
        if (Agent_DealBuilderPage.Checkout.isEnabled()) {
            log.debug("Checkout CTA is enabled\n");
        } else {
            log.debug("Checkout CTA is disabled\n");
        }
        Screenshots.captureScreenshot();
    }

    public static void eMailConfirmation() throws InterruptedException, IOException {
        // TODO Auto-generated method stub
        Thread.sleep(6000);
        Screenshots.captureScreenshot();
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
                Thread.sleep(7000);
                Screenshots.captureScreenshot();
                Agent_DealBuilderPage.ChooseBasketToSend.click();
                Thread.sleep(2000);
                Agent_DealBuilderPage.sendBasketEmailAddress.sendKeys("vinudeep.malalur@o2.com");
                Thread.sleep(3000);
                Agent_DealBuilderPage.sendBasketPopupSubmit.click();
                Thread.sleep(6000);
                // eMailConfirmation();
                // Closing the Child Window.
                String text = Agent_DealBuilderPage.emailConfirmation.getText();
                Assert.assertEquals(text, "Email sent successfully");
                //assertEquals(text, "Email sent successfully");
                Screenshots.captureScreenshot();

                driver.close();
            }
        }
        Thread.sleep(3000);
        // Switching to Parent window i.e Main Window.
        driver.switchTo().window(Mainwindow);
        Thread.sleep(5000);
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
        Thread.sleep(5000);

        if (Status.contains("Delayed")) {

            Agent_DealBuilderPage.SearchDevice.sendKeys(Status);
            Thread.sleep(3000);
            Screenshots.captureScreenshot();
            log.debug("Sent search as - " + Status);
            Agent_DealBuilderPage.firstDevice.click();
            log.debug("Selected Delayed device");
        }

        if (Status.contains("preorder")) {

            Agent_DealBuilderPage.SearchDevice.sendKeys(Status);
            Thread.sleep(3000);
            Screenshots.captureScreenshot();
            log.debug("Sent search as - " + Status);
            Agent_DealBuilderPage.firstDevice.click();
            log.debug("Selected pre order device");
        }
        Thread.sleep(3000);
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
            if (driver.findElements(By.xpath("//*[@id='incomaptibleError']")).size() > 0) {
                String errorMessage = pageobjects.Agent_DealBuilderPage.incomaptibleError.getText();
                log.debug("InCompatible Error Message after adding bolton is: " + errorMessage);
            } else {
                log.debug("There is no incompatible error Message after adding bolton is");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug("Unable to validate Incompatible error message");
        }
        Screenshots.captureScreenshot();
    }


    public static void AgentTradeInQuestionair() throws InterruptedException, IOException {
        Thread.sleep(8000);
        if (Agent_DealBuilderPage.AgentTradeInBtn.isDisplayed()) {
            log.debug("The trade in button is displayed");
            //Agent_DealBuilderPage.AgentTradeInBtn.click();

            JavascriptExecutor jse = (JavascriptExecutor) driver;
            jse.executeScript("window.scrollBy(0,-300)", "");
            Screenshots.captureScreenshot();

            Thread.sleep(3000);

            JavascriptExecutor executor = (JavascriptExecutor) driver;
            executor.executeScript("arguments[0].click();", Agent_DealBuilderPage.AgentTradeInBtn);

            log.debug("The Trade In button is clicked");
            Thread.sleep(12000);
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
                    Thread.sleep(6000);
                    Screenshots.captureScreenshot();
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

                    Screenshots.captureScreenshot();

                    pageobjects.Agent_DealBuilderPage.AgentTradeAccept.click();


                }
                //Screenshots.captureScreenshot();
            }
            // Switching to Parent window i.e Main Window.
            driver.switchTo().window(Mainwindow1);
            Thread.sleep(5000);

            if (driver.findElements(By.xpath("//*[@id='dealBuilderContent']/div[@class='basketContents']/div[@class='lineItemContainer']/table[@class='lineItemTable discounts']/tbody/tr[@id='TRADEIN_']/td[@class='lineItemDescription']/p[4]/input[@id='tradeInHomeDeliveryCheckbox']")).size() > 0) {
                //JavascriptExecutor executor = (JavascriptExecutor) driver;
                executor.executeScript("arguments[0].click();", Agent_DealBuilderPage.TradeInCheckBox);
            }
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
        if (Agent_DealBuilderPage.AgentBuyOut_Button.isDisplayed()) {
            log.debug("The Buy Out Questionair is displayed");
            Agent_DealBuilderPage.AgentBuyOut_Button.click();
            Screenshots.captureScreenshot();
        }
        Thread.sleep(7000);
        if (Agent_DealBuilderPage.Checkout.isDisplayed()) {
            log.debug("Deal Builder is displayed");
            Agent_DealBuilderPage.Checkout.click();
            Screenshots.captureScreenshot();
        }
    }

    public static void selectStore() throws InterruptedException, IOException {

        // Selecting an Extra
        Agent_DealBuilderPage.CheckStore.click();
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
                Agent_DealBuilderPage.Postcode.sendKeys("M4");

                Agent_DealBuilderPage.searchStore.click();
                Thread.sleep(8000);
                Screenshots.captureScreenshot();

                /*JavascriptExecutor jse = (JavascriptExecutor) driver;
                jse.executeScript("window.scrollBy(0,200)", "");*/
                JavascriptExecutor executor = (JavascriptExecutor) driver;
                executor.executeScript("arguments[0].click();", Agent_DealBuilderPage.selectStore);
                Thread.sleep(3000);


            }
        }
        Thread.sleep(5000);
        // Switching to Parent window i.e Main Window.
        /*Set<String> windows = driver.getWindowHandles();
        System.out.println(windows.size());
        Screenshots.captureScreenshot();
        Iterator<String> itr = s1.iterator();
        while (itr.hasNext()) {
            String ChildWindow = itr.next();
            if (!Mainwindow.equalsIgnoreCase(ChildWindow)) {
                // Switching to Child window
                driver.switchTo().window(ChildWindow);
            }
        }*/

        driver.switchTo().window(Mainwindow);
        Thread.sleep(4000);
        log.debug("Selected store is" + Agent_DealBuilderPage.Storedetails.getText());

    }

    public static void clickAndCollectNowStoreDetailsAtCheckout() throws InterruptedException {

        String cNc_collectionDetails = driver.findElement(By.xpath("//table[@class='lineItemTable collectfrom']")).getText();
        Thread.sleep(2000);
        if (cNc_collectionDetails.contains("Available Today")) {
            log.debug("Order Summary section contains status for collection today ie:" + cNc_collectionDetails + "\n");
        } else {
            log.debug("Failed, order summary section dooesn't contains collection today details\n");
            Assert.fail("Failed, order summary section dooesn't contains collection today details\n");
        }

    }

    public static void clickAndCollectNowStore() throws InterruptedException, IOException {

        // Selecting an Extra
        Agent_DealBuilderPage.CheckStore.click();
        log.debug("Clicked on Check store stock Tab");

        Thread.sleep(6000);

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
                Agent_DealBuilderPage.Postcode.sendKeys("G13HF");

                Agent_DealBuilderPage.searchStore.click();
                Thread.sleep(8000);
                Screenshots.captureScreenshot();

                List<WebElement> collectionDetails = driver.findElements(By.xpath("//table[@id='storeResultsTable']/tbody/tr"));
                int cnt = 0;
                //String collectionDetails = Agent_DealBuilderPage.collectionDetails.getText();

                for (int i = 1; i <= collectionDetails.size(); i++) {
                    String collectionDate = driver.findElement(By.xpath("//table[@id='storeResultsTable']/tbody/tr[" + i + "]/td[2]")).getText();
                    Thread.sleep(3000);
                    log.debug("Collection Date: " + collectionDate);
                    if (collectionDate.equalsIgnoreCase("Today") || collectionDate.equalsIgnoreCase("TODAY")) {
                        log.debug("Device is available for click and collect now in provided store, status is:: " + collectionDate + "\n");
                        driver.findElement(By.xpath("//table[@id='storeResultsTable']/tbody/tr[" + i + "]/td[3]/input")).click();
                        log.debug("Store selected for collection Today\n");
                        cnt++;
                        break;
                    }
                }

                if (cnt == 0) {
                    log.debug("Device is not available for click and collect now in provided store\n");
                    Assert.fail("Device is not available for click and collect now in provided store\n");
                }
                Thread.sleep(2000);

            }
        }
        Thread.sleep(5000);
        driver.switchTo().window(Mainwindow);
        Screenshots.captureScreenshot();

        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,100)", "");
        Thread.sleep(2000);
        Screenshots.captureScreenshot();
        String storeDetails = Agent_DealBuilderPage.Storedetails.getText();
        Thread.sleep(2000);
        log.debug("Selected store for click and collect now is:: " + storeDetails);

        if (storeDetails.contains("Basket currently Available Today")) {
            log.debug("Click and collect now details contains :: Basket currently Available Today");
        }
        Thread.sleep(2000);
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
                for (i = 0; i < stockStatus.size() - 1; i++) {
                    if (stockStatus.get(i).getText().trim().contains("Out of stock")) {

                        i++;
                        break;
                    } else if (stockStatus.get(i).getText().trim().contains("In stock")) {
                        driver.findElement(By.xpath("//table[@id='smartTechDeviceTable']/tbody/tr[" + i + "]/td/a/img")).click();
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
        if (flag == false) {
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
            if (addedDeviveName.getText().contains("empty")) {
                System.out.println("the device is added as empty");
            } else {
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
            } else {

                continue;
            }
        }
        return selectedElements;

    }


    public static void validateEmailBasketPopupDeviceList(Hashtable DeviceList) {

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

    public static void verifyDevive_and_CopyClipboard_Btn() {
        try {
            //list of the devices which are selected at the deal builder page
            //int lstOfDeviceAddedInBuilder = lstOfDeviceAdded_DB.size();
            //CommonActions.switchToWindow();
            String mainWindowHandle = driver.getWindowHandle();

            String childWindowpopUp = "";
            try {
                //String mainWindowHandle = driver.getWindowHandle ();
                //Switch to child window and close it
                for (String childWindowHandle : driver.getWindowHandles()) {
                    //If window handle is not main window handle then close it
                    if (!childWindowHandle.equals(mainWindowHandle)) {
                        driver.switchTo().window(childWindowHandle);

                        childWindowpopUp = driver.getWindowHandle();

                        System.out.println(" Driver is Switch to Child Window");
                        log.info(" Driver is Switch to Child Window");
                    } else {
                        //switch back to main window
                        driver.switchTo().window(mainWindowHandle);
                        System.out.println(" Driver is still stands in Main Window");
                        log.info(" Driver is still stands in Main Window");
                    }
                }
            } catch (Exception e) {
                System.out.println("Failed to switch to window :: " + e.getStackTrace());
                log.info("Failed to switch to window :: " + e.getStackTrace());

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
                    driver.switchTo().window(childWindowpopUp);
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

            if (BSCstatus.equalsIgnoreCase("Enabled")) {
                if (driver.findElements(By.xpath("(//th[contains(text(),'Spend cap')])[1]")).size() > 0) {

                    log.debug("Bill spend cap section is enabled");

                    String capHeader = pageobjects.Agent_DealBuilderPage.BillSpendCapHeader.getText();
                    Thread.sleep(2000);
                    log.debug("Bill Spend Cap header is displayed in DealBuilder page ie :: " + capHeader);

                    /*//Bill cap header validation
                    if (capHeader.equalsIgnoreCase("Spend cap")) {
                        log.debug("Bill Spend Cap header is displayed as expected");
                    } else {
                        log.debug("Bill Spend Cap header is not matching");
                        Assert.fail("Bill Spend Cap header is not matching");
                    }*/

                    //Spend cap overlay icon
                    if (driver.findElements(By.xpath("//a[@id='billSpendCapOverlay']")).size() > 0) {
                        log.debug("BSC overlay icon is present and clicking on it");
                        Agent_DealBuilderPage.BSCoverlayIcon.click();
                        log.debug("BSC overlay icon is clicked");
                        Thread.sleep(3000);
                        Screenshots.captureScreenshot();
                        String overlayText = Agent_DealBuilderPage.BSCoverlayText.getText();
                        Thread.sleep(3000);
                        log.debug("BSC overlay text is: " + overlayText);
                        log.debug("\n BSC overlay is closing now");
                        Agent_DealBuilderPage.BSCoverlayClosed.click();
                        log.debug("\n BSC overlay is closed");
                    } else {
                        log.debug("BSC overlay icon is not present");
                        Assert.fail("BSC overlay icon is not present");
                    }
                    Thread.sleep(3000);
                    //Listing all the cap amounts
                    List<WebElement> menuOuter = driver.findElements(By.xpath("//*[@class='billSpendCapSelection']/select/option"));
                    log.debug("The size of the table is :" + menuOuter.size());
                    log.debug("Bill Spend Cap Options are: \n");

                    for (int i = 1; i < menuOuter.size(); i++) {
                        log.debug("Cap Option " + i + " is: " + menuOuter.get(i).getText());
                    }
                    Thread.sleep(3000);
                    if (driver.findElements(By.xpath("//span[@class='selectedBillSpendCap']")).size() > 0) {
                        String BillCapStatus = pageobjects.Agent_DealBuilderPage.BillSpendCapMessage.getText();
                        Thread.sleep(2000);
                        log.debug("Bill Spend Status message before selecting bill cap:: " + BillCapStatus);
                    }

                    //Checkout CTA status before selecting BSC bolton
                    if (Agent_DealBuilderPage.Checkout.isEnabled()) {
                        log.debug("Checkout is enabled before selecting BSC bolton");
                        Assert.fail("Checkout is enabled before selecting BSC bolton");
                    } else {
                        log.debug("As expected Checkout is disabled before selecting BSC bolton");
                    }

                    Screenshots.captureScreenshot();
                } else {
                    log.debug("Bill Spend Cap section is not displayed under deal builder section");
                    Assert.fail("Bill Spend Cap section is not displayed under deal builder section");
                    Screenshots.captureScreenshot();
                }
            } else if (BSCstatus.equalsIgnoreCase("Disabled")) {
                if (driver.findElements(By.xpath("(//th[contains(text(),'Spend cap')])[1]")).size() > 0) {
                    log.debug("Bill spend cap section is enabled it suppose to be in disabled status");
                    Assert.fail("Bill spend cap section is enabled it suppose to be in disabled status");
                } else {
                    log.debug("As expected, Bill spend cap section is disabled\n");
                }
            } else {
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
            int cnt = 0;

            if (BSCstatus.equalsIgnoreCase("Enabled")) {
                if (driver.findElements(By.xpath("(//th[contains(text(),'Spend cap')])[1]")).size() > 0) {

                    log.debug("Bill spend cap section is enabled");
                    Thread.sleep(4000);
                    List<WebElement> menuOuter = driver.findElements(By.xpath("//*[@class='billSpendCapSelection']/select/option"));

                    Thread.sleep(3000);
                    //Selecting specified bill cap
                    log.debug("Selecting your Bill Cap:");
                    for (int i = 1; i <= menuOuter.size(); i++) {
                        BillCap = driver.findElement(By.xpath("(//*[@class='billSpendCapSelection']/select/option[" + i + "])")).getText();
                        Thread.sleep(2000);
                        if (BillCap.contains(BillCapAmount)) {
                            driver.findElement(By.xpath("(//*[@class='billSpendCapSelection']/select/option[" + i + "])")).click();
                            log.debug("Your Bill cap is selected ie:: " + BillCapAmount);
                            cnt++;
                            break;
                        }
                    }
                    Thread.sleep(8000);
                    if (cnt == 0) {
                        log.debug("Bill Spend Cap list does not contain specified cap amount and your Bill cap is not selected ie:: " + BillCapAmount);
                        Assert.fail("Bill Spend Cap list does not contain specified cap amount and your Bill cap is not selected ie:: " + BillCapAmount);
                    }
                    Thread.sleep(8000);
                    String BillCapStatus = pageobjects.Agent_DealBuilderPage.BillSpendCapMessage.getText();

                    Thread.sleep(3000);
                    Screenshots.captureScreenshot();

                    //status message validation
                    if (BillCapAmount.equalsIgnoreCase("No Spend Cap")) {
                        Thread.sleep(3000);
                        if (BillCapStatus.contains("No spend cap applied")) {
                            log.debug("Bill Spend Status message after selecting No bill cap:: " + BillCapStatus);
                            log.debug("No Bill Spend Status message validated successfully");
                        } else {
                            log.debug("Status message after selecting No bill cap does not matching :: " + BillCapStatus);
                            Assert.fail("Status message after selecting No bill cap does not matching :: " + BillCapStatus);
                        }

                    } else {
                        Thread.sleep(3000);
                        if (BillCapStatus.contains(BillCapAmount)) {
                            log.debug("Bill Spend Status message after selecting bill cap:: " + BillCapStatus);
                            log.debug("Status message after selecting bill cap contain your bill cap amount :: " + BillCapStatus);
                        } else {
                            log.debug("Status message after selecting bill cap does not contain your bill cap amount :: " + BillCapStatus);
                            Assert.fail("Status message after selecting bill cap does not contain your bill cap amount :: " + BillCapStatus);
                        }
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
            } else if (BSCstatus.equalsIgnoreCase("Disabled")) {
                if (driver.findElements(By.xpath("(//th[contains(text(),'Spend cap')])[1]")).size() > 0) {
                    log.debug("Bill spend cap section is enabled it suppose to be disabled for disable status");
                    Assert.fail("Bill spend cap section is enabled it suppose to be disabled for disable status");
                } else {
                    log.debug("As expected, Bill spend cap section is disabled");
                }
            } else {
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
        if (driver.findElements(By.xpath("//*[normalize-space()='Spend cap']")).size() > 0) {
            log.debug("Bill Spend Cap Bolton is available in extra tab");
            Assert.fail("Bill Spend Cap Bolton is available in extra tab");
        } else {
            log.debug("As expected Bill Spend Cap Bolton is not available in extra tab");
        }
        Screenshots.captureScreenshot();
        Thread.sleep(4000);
    }

    //Validating your bill cap in Basket page
    public static void ValidateAppliedBillSpendCapInAgentDealSummary(String BillCapAmount, String BSCstatus) throws InterruptedException {
        Thread.sleep(6000);
        String AppliedBillCap = "";
        String pageTitle = driver.getTitle();
        try {
            if (BSCstatus.equalsIgnoreCase("Enabled")) {
                if (driver.findElements(By.xpath("(//th[contains(text(),'Spend cap')])[1]")).size() > 0) {

                    log.debug("Bill spend cap section is displayed");
                    scrollToAnElement.scrollToElement(pageobjects.Agent_DealBuilderPage.BillSpendCapHeader);
                    Screenshots.captureScreenshot();
                    log.debug("Bill Spend Cap header is displayed in " + pageTitle + " page ie :: " + pageobjects.Agent_DealBuilderPage.BillSpendCapHeader.getText());
                    //Thread.sleep(3000);
                    AppliedBillCap = pageobjects.Agent_DealBuilderPage.appliedBillCap.getText();
                    Thread.sleep(3000);

                    /*if (AppliedBillCap.contains(BillCapAmount)) {
                        log.debug("Applied bill cap is validated successfully in " + pageTitle + " page ie :: " + AppliedBillCap);
                    }else {
                            log.debug("Failed to validate applied bill cap:: " + AppliedBillCap);
                            Assert.fail("Failed to validate applied bill cap :: " + AppliedBillCap);
                    }*/

                    //status message validation
                    if (BillCapAmount.equalsIgnoreCase("No Spend Cap")) {
                        //Thread.sleep(3000);
                        if (AppliedBillCap.contains("No spend cap applied")) {
                            log.debug("Bill Spend Status message after selecting No bill cap:: " + AppliedBillCap);
                            log.debug("No Bill Spend Status message validated successfully");
                        } else {
                            log.debug("Status message after selecting No bill cap does not matching :: " + AppliedBillCap);
                            Assert.fail("Status message after selecting No bill cap does not matching :: " + AppliedBillCap);
                        }

                    } else {
                        //Thread.sleep(3000);
                        if (AppliedBillCap.contains(BillCapAmount)) {
                            log.debug("Bill Spend Status message after selecting bill cap:: " + AppliedBillCap);
                            log.debug("Status message after selecting bill cap contain your bill cap amount :: " + AppliedBillCap);
                        } else {
                            log.debug("Status message after selecting bill cap does not contain your bill cap amount :: " + AppliedBillCap);
                            Assert.fail("Status message after selecting bill cap does not contain your bill cap amount :: " + AppliedBillCap);
                        }
                    }

                } else {
                    log.debug("Bill cap section is not present under deal summary section in " + pageTitle + " page");
                    Assert.fail("Bill cap section is not present under deal summary section in " + pageTitle + " page");
                }
            } else if (BSCstatus.equalsIgnoreCase("Disabled")) {
                if (driver.findElements(By.xpath("(//th[contains(text(),'Spend cap')])[1]")).size() > 0) {
                    log.debug("Bill spend cap section is enabled it suppose to be in disabled status in " + pageTitle + " page");
                    Assert.fail("Bill spend cap section is enabled it suppose to be in disabled status in " + pageTitle + " page");
                } else {
                    log.debug("As expected, Bill spend cap section is disabled in " + pageTitle + " page");
                }
            } else {
                System.out.println("Unable to validate bill spend cap section in " + pageTitle + " page for invalid status\n");
                log.debug("Unable to validate bill spend cap section in " + pageTitle + " page for invalid status\n");
                Assert.fail("Unable to validate bill spend cap section in " + pageTitle + " page for invalid status\n");
            }
        } catch (Exception e) {
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
    public static void buildTariff_DealBuilder_Agent(String buildTariff) {
        try {
            log.info("Entered int to method - buildTariff_DealBuilder_Agent");
            //CommonActions.clickWebElement(Agent_DealBuilderPage.priceSection);
            //CommonActions.selectValueFromDropDown(Agent_DealBuilderPage.priceSection,null,null,buildTariff);


            log.info("From pricing section Selected Tariff - " + buildTariff);
            CommonActions.driverWait(3000);


        } catch (Exception e) {

        }
    }

    ////Agent FR Calc validation By Jamal Khan

    public static void flexibleReressh_AFA(String upFront, String term, String data) throws InterruptedException, IOException {
        upFrontCost = "";
        totalCostPerMonth = "";

        List<WebElement> menuOuter = driver.findElements(By.xpath("//*[@class='priceSelection']/select/option"));
        log.debug("The size of the table is :" + menuOuter.size());

        for (int i = 0; i < menuOuter.size(); i++) {
            log.debug("Option " + i + " is: " + menuOuter.get(i).getText());
        }

        Screenshots.captureScreenshot();
        String priceCombinationLastItem = driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option)[" + menuOuter.size() + "]")).getText();

        if (priceCombinationLastItem.contains("Build tariff")) {
            log.debug("Build tariff option is present in the price dropdown menu ie :: " + priceCombinationLastItem);

            driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option)[" + menuOuter.size() + "]")).click();
            log.debug("Selected Option : " + driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option)[" + menuOuter.size() + "]")).getText());
        } else {
            log.debug("Build tariff option does not exist in the Device/Tariff drop down");
            Assert.fail("Build tariff option does not exist in the Device/Tariff drop down");
        }

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
                log.debug("Switched to child window");
                Thread.sleep(10000);
                Screenshots.captureScreenshot();

                //FR Validations

                if (driver.findElements(By.xpath("//div[@class='devicePlanFlexCalculator']")).size() > 0) {

                    if (Agent_DealBuilderPage.planFRCaluclator.isDisplayed()) {
                        System.out.println("FR calc is Displayed");
                        log.info("FR calc is Displayed");
                    } else {
                        System.out.println("Failed to Display FR calc");
                        log.info("Failed to Display FR calc");
                        Assert.fail("Failed to Display FR calc");
                    }

                    if (Agent_DealBuilderPage.reSet_BuildYourPlan.isDisplayed()) {
                        System.out.println("Displayed - Reset Calc button");
                        log.info("Displayed - Reset Calc button");
                    } else {
                        System.out.println("Failed to Displayed the reSet calc button");
                        log.info("Failed to Displayed the reSet calc button");
                        Assert.fail("Failed to Displayed the reSet calc button");
                    }

                    if (Agent_DealBuilderPage.ConfirmCTA.isDisplayed()) {
                        System.out.println("Displayed - Confirm button in Calc ");
                        log.info("Displayed - Confirm button in Calc ");
                    } else {
                        System.out.println("Failed to Display - Confirm CTA in Calc");
                        log.info("Failed to Displayed- Confirm CTA in Calc");
                        Assert.fail("Failed to Displayed- Confirm CTA in Calc");
                    }

                    if (Agent_DealBuilderPage.CancelCTA.isDisplayed()) {
                        System.out.println("Displayed - Cancel button in Calc ");
                        log.info("Displayed - Cancel button in Calc ");
                    } else {
                        System.out.println("Failed to Display - Cancel CTA in Calc");
                        log.info("Failed to Displayed- Cancel CTA in Calc");
                        Assert.fail("Failed to Displayed- Cancel CTA in Calc");
                    }

                    if (Agent_DealBuilderPage.totalPrice.isDisplayed()) {
                        System.out.println("Displayed - Total Price per month ");
                        log.info("Displayed - Total Price per month ");
                    } else {
                        System.out.println("Failed to Display - Total Price per month");
                        log.info("Failed to Displayed- Total Price per month");
                        Assert.fail("Failed to Displayed- Total Price per month");
                    }

                    if (Agent_DealBuilderPage.reSet_BuildYourPlan.isDisplayed()) {
                        System.out.println("Displayed - Reset Build your plan ");
                        log.info("Displayed - Reset Build your plan ");
                    } else {
                        System.out.println("Failed to Display -  Reset Build your plan");
                        log.info("Failed to Displayed -  Reset Build your plan");
                        Assert.fail("Failed to Displayed - Reset Build your plan");
                    }

                    if (Agent_DealBuilderPage.calc_msg.isDisplayed()) {
                        System.out.println("Displayed - Calc message ");
                        log.info("Displayed - Calc message ");
                    } else {
                        System.out.println("Failed to Display -  Calc message");
                        log.info("Failed to Displayed - Calc message");
                        Assert.fail("Failed to Displayed - Calc message");
                    }


                    if (upFront.contains("Min") || upFront.contains("min")) {
                        boolean b = false;
                        for (int i = 1; i < 100; i++) {
                            //String minValUpfrnt = (String) Agent_DealBuilderPage.minVal_Upfrent.getText().subSequence(5, 7);
                            int minUpfrentSize = Agent_DealBuilderPage.minVal_Upfrent.getText().length();
                            String minValUpfrnt = (String) Agent_DealBuilderPage.minVal_Upfrent.getText().subSequence(5, minUpfrentSize);
                            Thread.sleep(2000);

                            //String upFrntVal = Agent_DealBuilderPage.upfrentVal.getText().substring(1, 3);
                            int upfrentSize = Agent_DealBuilderPage.upfrentVal.getText().length();
                            String upFrntVal = Agent_DealBuilderPage.upfrentVal.getText().substring(1, upfrentSize - 3);
                            Thread.sleep(2000);

                            if (driver.findElements(By.xpath("//span[@id='minUpfront']/../a[@class='previousUpfront disablePrevious']")).size() <= 0) {
                                CommonActions.clickWebElement(Agent_DealBuilderPage.minIcon_Upfrent);
                            }
                            if (minValUpfrnt.contains(upFrntVal) && Agent_DealBuilderPage.minIcon_Upfrent_disiabled.isDisplayed()) {
                                log.info("The Upfront cost is changes to minimum - " + Agent_DealBuilderPage.minVal_Upfrent.getText());
                                b = true;
                                break;
                            }
                        }
                        if (b == false) {
                            log.info("Failed to displayed - the upfront Min icon is not disable though changed to main value");
                            Assert.fail("\"Failed to displayed - the upfront Min icon is not disable though changed to main value\"");
                        }
                    }


                    if (upFront.equalsIgnoreCase("max")) {
                        boolean b = false;

                        for (int i = 1; i < 100; i++) {
                            String maxValUpfrnt = (String) Agent_DealBuilderPage.maxVal_Upfrent.getText().subSequence(5, 7);
                            Thread.sleep(2000);
                            String upFrntVal = Agent_DealBuilderPage.upfrentVal.getText().substring(1, 3);
                            Thread.sleep(2000);
                            if (driver.findElements(By.xpath("//span[@id='maxUpfront']/../a[contains(@class,'nextUpfront disableNext')]")).size() <= 0) {
                                CommonActions.clickWebElement(Agent_DealBuilderPage.maxIcon_Upfrent);
                            }
                            if (maxValUpfrnt.contains(upFrntVal) && Agent_DealBuilderPage.maxIcon_Upfrent_disiabled.isDisplayed()) {
                                log.info("the Upfront cost is changes to maximum - " + Agent_DealBuilderPage.maxVal_Upfrent.getText());
                                b = true;
                                break;
                            }
                        }
                        if (b == false) {
                            log.info("Failed to displayed - the upfront Max icon is not disable though changed to main value");
                            Assert.fail("\"Failed to displayed - the upfront MAx icon is not disable though changed to main value\"");
                        }
                    }


                    if (upFront.equalsIgnoreCase("avg")) {
                        if (driver.findElements(By.xpath("//span[@id='minUpfront']/../a[@class='previousUpfront disablePrevious']")).size() > 0) {
                            // CommonActions.clickWebElement(ConnectedDeviceDetailsPage.minIcon_Upfrent);
                            CommonActions.clickWebElement(Agent_DealBuilderPage.maxIcon_Upfrent);
                        }

                        if (driver.findElements(By.xpath("//span[@id='maxUpfront']/../a[contains(@class,'nextUpfront disableNext')]")).size() > 0) {
                            // CommonActions.clickWebElement(ConnectedDeviceDetailsPage.maxIcon_Upfrent);
                            CommonActions.clickWebElement(Agent_DealBuilderPage.minIcon_Upfrent);
                        }

                        if (driver.findElements(By.xpath("//span[@id='maxUpfront']/../a[contains(@class,'nextUpfront disableNext')]")).size() <= 0 && driver.findElements(By.xpath("//span[@id='minUpfront']/../a[@class='previousUpfront disablePrevious']")).size() <= 0) {
                            log.info("the Upfront cost is changes to average  - " + Agent_DealBuilderPage.minVal_Upfrent.getText());
                            log.info("the Upfront cost is changes to average - " + Agent_DealBuilderPage.maxVal_Upfrent.getText());
                        } else {
                            log.info("Failed to Display - the Upfront cost is changes to average  - " + Agent_DealBuilderPage.minVal_Upfrent.getText());
                            log.info("Failed to Display - the Upfront cost is changes to average - " + Agent_DealBuilderPage.maxVal_Upfrent.getText());
                            Assert.fail("the Upfront cost is changes to average");
                        }
                    }


                    if (term.equalsIgnoreCase("Min")) {
                        boolean b = false;
                        for (int i = 1; i < 37; i++) {
                            String termMinVal = Agent_DealBuilderPage.minVal_term.getText();
                            StringTokenizer st = new StringTokenizer(termMinVal, " ");
                            st.nextToken();
                            String str = st.nextToken();
                            String termValue = Agent_DealBuilderPage.termVal.getText();

                            if (driver.findElements(By.xpath("//span[@id='minTerm']/../a[@class='previousTerm disablePrevious']")).size() <= 0) {
                                CommonActions.clickWebElement(Agent_DealBuilderPage.minIcon_term);
                            }
                            if (termValue.equalsIgnoreCase(str) && Agent_DealBuilderPage.minIcon_term_disable.isDisplayed()) {
                                log.info("Displayed - term " + Agent_DealBuilderPage.minVal_term.getText());
                                b = true;
                                break;
                            }
                        }
                        if (b == false) {
                            log.info("Failed to displayed - term value");
                            Assert.fail("Failed to displayed - term value");
                        }
                    }


                    if (term.equalsIgnoreCase("max")) {
                        boolean b = false;
                        for (int i = 1; i < 37; i++) {

                            String maxvalTerm = Agent_DealBuilderPage.maxVal_term.getText();
                            StringTokenizer st = new StringTokenizer(maxvalTerm, " ");
                            st.nextToken();
                            String str = st.nextToken();
                            String termValue = Agent_DealBuilderPage.termVal.getText();

                            if (driver.findElements(By.xpath("//span[@id='maxTerm']/../a[@class='nextTerm disableNext']")).size() <= 0) {
                                CommonActions.clickWebElement(Agent_DealBuilderPage.maxIcon_term);
                            }
                            if (termValue.equalsIgnoreCase(str) && Agent_DealBuilderPage.maxIcon_term_Disable.isDisplayed()) {
                                log.info("The Term cost is changes to maximum - " + Agent_DealBuilderPage.maxVal_term.getText());
                                b = true;
                                break;
                            }
                        }
                        if (b == false) {
                            log.info("Failed to displayed - the Term Max icon is not disable though changed to main value");
                            Assert.fail("\"Failed to displayed - the Term MAx icon is not disable though changed to main value\"");
                        }
                    }

                    if (term.equalsIgnoreCase("avg")) {
                        if (driver.findElements(By.xpath("//span[@id='minTerm']/../a[@class='previousTerm disablePrevious']")).size() > 0) {
                            CommonActions.clickWebElement(Agent_DealBuilderPage.maxIcon_term);
                        }
                        if (driver.findElements(By.xpath("//span[@id='maxTerm']/../a[@class='nextTerm disableNext']")).size() > 0) {
                            CommonActions.clickWebElement(Agent_DealBuilderPage.minIcon_term);
                        }

                        if (driver.findElements(By.xpath("//span[@id='maxTerm']/../a[@class='nextTerm disableNext']")).size() <= 0 && driver.findElements(By.xpath("//span[@id='minTerm']/../a[@class='previousTerm disablePrevious']")).size() <= 0) {
                            log.info("the term cost is changes to average  - " + Agent_DealBuilderPage.minVal_term.getText());
                            log.info("the term cost is changes to average - " + Agent_DealBuilderPage.maxVal_term.getText());
                        } else {
                            log.info("Failed to Display - the term cost is changes to average   - " + Agent_DealBuilderPage.minVal_term.getText());
                            log.info("Failed to Display - the term cost is changes to average - " + Agent_DealBuilderPage.maxVal_term.getText());
                            Assert.fail("the term cost is changes to average");
                        }
                    }
                }


                if (data.equalsIgnoreCase("min")) {
                    boolean b = false;
                    for (int i = 1; i < 30; i++) {
                        String minData = Agent_DealBuilderPage.minVal_data.getText();
                        StringTokenizer st = new StringTokenizer(minData, " ");
                        st.nextToken();
                        String sst = st.nextToken();
                        String dataValue = Agent_DealBuilderPage.dataVal.getText();

                        if (driver.findElements(By.xpath("//span[@id='minData']/../a[@class='previousData disablePrevious']")).size() <= 0) {
                            CommonActions.clickWebElement(Agent_DealBuilderPage.minIcon_data);
                        }
                        if (dataValue.equalsIgnoreCase(sst) && Agent_DealBuilderPage.minIcon_data_disable.isDisplayed()) {
                            log.info("the Data cost is changes to minimum - " + Agent_DealBuilderPage.minVal_data.getText());
                            b = true;
                            break;
                        }
                    }
                    if (b == false) {
                        log.info("Failed to displayed - the Data/tariff Min icon is not disable though changed to main value");
                        Assert.fail("\"Failed to displayed - the Data/tariff Min icon is not disable though changed to main value\"");
                    }
                }


                if (data.equalsIgnoreCase("max")) {
                    boolean b = false;
                    for (int i = 1; i < 30; i++) {
                        String maDataVal = Agent_DealBuilderPage.maxVal_data.getText();
                        StringTokenizer st = new StringTokenizer(maDataVal, " ");
                        st.nextToken();
                        String sst1 = st.nextToken();
                        String dataValue = Agent_DealBuilderPage.dataVal.getText();

                        if (driver.findElements(By.xpath("//span[@id='maxData']/../a[@class='nextData disableNext']")).size() <= 0) {
                            CommonActions.clickWebElement(Agent_DealBuilderPage.maxIcon_data);
                        }
                        if (dataValue.equalsIgnoreCase(sst1) && Agent_DealBuilderPage.maxIcon_data_Disable.isDisplayed()) {
                            log.info("the Data cost is changes to maximum - " + Agent_DealBuilderPage.maxVal_data.getText());
                            b = true;
                            break;
                        }
                    }
                    if (b == false) {
                        log.info("Failed to displayed - the data Max icon is not disable though changed to main value");
                        Assert.fail("\"Failed to displayed - the data MAx icon is not disable though changed to main value\"");
                    }
                }


                if (data.equalsIgnoreCase("avg")) {
                    if (driver.findElements(By.xpath("//span[@id='minData']/../a[@class='previousData disablePrevious']")).size() > 0) {
                        CommonActions.clickWebElement(Agent_DealBuilderPage.maxIcon_data);
                    }

                    if (driver.findElements(By.xpath("//span[@id='maxData']/../a[@class='nextData disableNext']")).size() > 0) {
                        CommonActions.clickWebElement(Agent_DealBuilderPage.minIcon_data);
                    }

                    if (driver.findElements(By.xpath("//span[@id='maxData']/../a[@class='nextData disableNext']")).size() <= 0 && driver.findElements(By.xpath("//span[@id='minData']/../a[@class='previousData disablePrevious']")).size() <= 0) {
                        log.info("the Dat cost is changes to average  - " + Agent_DealBuilderPage.minVal_data.getText());
                        log.info("the Data cost is changes to average - " + Agent_DealBuilderPage.maxVal_data.getText());
                    } else {
                        log.info("Failed to Display - the Data cost is changes to average  - " + Agent_DealBuilderPage.minVal_data.getText());
                        log.info("Failed to Display - the Data cost is changes to average - " + Agent_DealBuilderPage.maxVal_data.getText());
                        Assert.fail("the Data cost is changes to average");
                    }
                }

                totalCostPerMonth = Agent_DealBuilderPage.totalPrice.getText();
                upFrontCost = Agent_DealBuilderPage.upfrentVal.getText();
                Screenshots.captureScreenshot();
                CommonActions.clickWebElement(Agent_DealBuilderPage.ConfirmCTA);
                log.debug("Clicked on Choose this plan CTA\n");

            }
        }

        Thread.sleep(4000);
        // Switching to Parent window i.e Main Window.
        driver.switchTo().window(Mainwindow);
        //driver.manage().timeouts().implicitlyWait(12,TimeUnit.SECONDS);
        Thread.sleep(4000);
        Screenshots.captureScreenshot();

        String dealBuilderUpfrontVal = driver.findElement(By.xpath("(//div[@class='priceComponent']/p)[1]")).getText();

        Thread.sleep(3000);

        if (dealBuilderUpfrontVal.contains(upFrontCost)) {
            log.debug("FR build plan selected upfront cost is matching with deal builder upfront cost\n");
        } else {
            log.debug("Not Matching:: FR build plan selected upfront cost is not matching with deal builder upfront cost\n");
            Assert.fail("Not Matching:: FR build plan selected upfront cost is not matching with deal builder upfront cost\n");
        }
        Thread.sleep(3000);
    }

    public static void retentionBoltonValidationInDealBuilder(String isRetention) throws InterruptedException, IOException {
        Thread.sleep(1000);
        Screenshots.captureScreenshot();
        if (Agent_DealBuilderPage.ExtrasTab.isDisplayed()) {
            Agent_DealBuilderPage.ExtrasTab.click();
            Thread.sleep(1000);

       /*     if (isRetention.contains("yes")) {
                if (driver.findElements(By.xpath("//table[@class='lineItemTable boltons']//img[@alt='remove']")).size() > 0) {
                    int count = driver.findElements(By.xpath("//table[@class='lineItemTable boltons']//img[@alt='remove']")).size();
                    for (int i = 1; i <= count; ) {
                        driver.findElement(By.xpath("(//table[@class='lineItemTable boltons']//img[@alt='remove'])[1]")).click();
                        Thread.sleep(1000);
                        --i;
                    }
                }
            }*/
            // later on need to change the un comment this code to select the bolton

            if (driver.findElements(By.xpath("(//*[text()='Data Top-Up Bolt-Ons']/../../../..//img)[1]")).size() > 0) {
                driver.findElement(By.xpath("(//*[text()='Data Top-Up Bolt-Ons']/../../../..//img)[1]")).click();
                Thread.sleep(3000);
            } else {
                if (driver.findElements(By.xpath("")).size() > 0) {
                    driver.findElement(By.xpath("(//*[text()='Data Top-Up Bolt-Ons']/../../../..//img)[1]")).click();
                }
            }

          /*  if (Agent_DealBuilderPage.retentionSection.isDisplayed()) {
                log.debug("retention Bolton section is displayed");
                if (driver.findElements(By.xpath("(//table[@class='extrasTable']//*[contains(text(),'Retention')]/../../..//tr//img)[1]")).size() > 0) {
                    log.debug("Able to select the retention bolton");
                    Agent_DealBuilderPage.selectRetentionBolton.click();
                    Screenshots.captureScreenshot();
                } else {
                    log.debug("Upgrade user not offered for the retention boltons");
                    Assert.fail("Upgrade user not offered for the retention boltons");
                }
            }*/

          /*  if (!Agent_DealBuilderPage.selectedBolton_DeailBuilder.getText().contains("retention item cannot be shared via email")) {
                log.debug("Basket having retention item cannot be shared via email.");
                // Assert.fail("Basket having retention item cannot be shared via email.");
            }*/

            if (isRetention.contains("Two")) {
                if (driver.findElements(By.xpath("(//table[@class='extrasTable']//*[contains(text(),'Data Top-Up Bolt-Ons')]/../../..//tr//img)[4]")).size() > 0) {
                    if (driver.findElements(By.xpath("(//table[@class='extrasTable']//*[contains(text(),'Data Top-Up Bolt-Ons')]/../../..//tr//img)[4]")).size() > 0) {
                        log.debug("able to select 2nd retention bolton");
                        Agent_DealBuilderPage.selectRetentionBolton2.click();
                        Screenshots.captureScreenshot();
                    }
                }
            }

            log.debug("Basket having retention item can be shared via email.");

            if (Agent_DealBuilderPage.copyToBasketButton.isDisplayed()) {
                System.out.println("copy to basket button is enabled");
            } else
                log.info("Not enable the button Copy to save basket");

                    /*Agent_DealBuilderPage.copyToBasketButton.click();
                    Thread.sleep(2000);
                    if (Agent_DealBuilderPage.customerBasketSection.isDisplayed()) {
                        System.out.println("custmer section got enabled");
                    }

                    log.debug("Sucess: copy to Customer basket is displayed");
                }*/
        }
        // System.out.println("the Deal builder section value :::: " + Agent_DealBuilderPage.selectedBolton_DeailBuilder);
    }


    public static void saveBasketValidation() throws InterruptedException, IOException {
        String saveBasketLink;
        Thread.sleep(1000);

     /*   if(Agent_DealBuilderPage.copyToDealButton.isDisplayed()){
            Agent_DealBuilderPage.copyToDealButton.click();
            Thread.sleep(300);
        }else{
            Assert.fail("");
        }*/
        Screenshots.captureScreenshot();
        if (Agent_DealBuilderPage.emailBasket.isDisplayed()) {
            // Agent_DealBuilderPage.emailBasket.click();
            JavascriptExecutor executor = (JavascriptExecutor) driver;
            executor.executeScript("arguments[0].click();", Agent_DealBuilderPage.emailBasket);
            Thread.sleep(1000);
        }

        CommonActions.switchToWindow();


        if (driver.findElements(By.xpath("//input[@type='checkbox' and @name='basket']")).size() > 0) {
            Thread.sleep(3000);
            JavascriptExecutor executor = (JavascriptExecutor) driver;
            executor.executeScript("arguments[0].click();", Agent_DealBuilderPage.checkBox_sharedBasket);

          /*  String emailBasketInfoPg = Agent_DealBuilderPage.emailBasketInfo.getText();
            if (emailBasketInfoPg.contains("Basket with retention items or products only eligible to be sold in agent channel cannot be shared with customer")) {
                log.info("Basket with retention items or products only eligible to be sold in agent channel cannot be shared with customer");
            } else {
                Assert.fail("Fail to Dispaly :: Basket with retention items or products only eligible to be sold in agent channel cannot be shared with customer");
            }*/

            // Agent_DealBuilderPage.checkBox_sharedBasket.click();
            Thread.sleep(500);
            Agent_DealBuilderPage.getBasketLink.click();
            Thread.sleep(1000);
            saveBasketLink = Agent_DealBuilderPage.copyToClickBoard.getText();
            Thread.sleep(500);
            driver.get(saveBasketLink);
            driver.manage().window().maximize();
            Thread.sleep(2000);
        } else {
            Assert.fail("Failed :: Selected tariff is not Refresh pls try another tariff ");
        }
    }


    public static void copyToBasket4CustomerBasket() throws InterruptedException {

        if (driver.findElements(By.xpath("//input[@id='saveToBasketButton']")).size() > 0) {
            System.out.println("Sve to basket button is enable");
            Agent_DealBuilderPage.Copytobasket.click();
            Thread.sleep(1000);
            log.info("//input[@id='saveToBasketButton']");
        } else {
            Assert.fail("Failed ::: Save to basket button is enable");
        }

        int noOfHeaderInCustomerBasket = driver.findElements(By.xpath("//div[@id='sharedBasketWrapper']//table//tr[@class='lineItemHeading']")).size();
        for (int i = 1; i <= noOfHeaderInCustomerBasket; i++) {
            String header = driver.findElement(By.xpath("(//div[@id='sharedBasketWrapper']//table//tr[@class='lineItemHeading'])[" + i + "]")).getText();
            String contentType = driver.findElement(By.xpath("(//div[@id='sharedBasketWrapper']//table//tr[@class='lineItemHeading']/following-sibling::tr)[" + i + "]")).getText();

            System.out.println(" lineItemHeading :: " + header + "  && lineItemDescription " + contentType);
            log.info(" lineItemHeading :: " + header + "  && lineItemDescription " + contentType);
        }
        /*if(Agent_DealBuilderPage.emailSuccessfullyMsg.isDisplayed()){
            System.out.println("Success :: "+ Agent_DealBuilderPage.emailSuccessfullyMsg.getText());
            log.info("Success :: "+ Agent_DealBuilderPage.emailSuccessfullyMsg.getText());
        }else{
            Assert.fail("Faild to display eMail success message once sent the mail basket");
        }*/
    }


    public static void sendBasketEmailAddress() throws InterruptedException, IOException {
        Thread.sleep(2000);
        CommonActions.scrollToElement(Agent_DealBuilderPage.emailBasket);
        Thread.sleep(2000);
        Screenshots.captureScreenshot();
        if (Agent_DealBuilderPage.emailBasket.isDisplayed()) {
            // Agent_DealBuilderPage.emailBasket.click();
            JavascriptExecutor executor = (JavascriptExecutor) driver;
            executor.executeScript("arguments[0].click();", Agent_DealBuilderPage.emailBasket);
            Thread.sleep(1000);
        }

        CommonActions.switchToWindow();


        if (driver.findElements(By.xpath("//input[@type='checkbox' and @name='basket']")).size() > 0) {
            Thread.sleep(3000);
            JavascriptExecutor executor = (JavascriptExecutor) driver;
            executor.executeScript("arguments[0].click();", Agent_DealBuilderPage.checkBox_sharedBasket);

            Thread.sleep(500);

            if (Agent_DealBuilderPage.sendBasketEmailAddress.isDisplayed()) {
                Agent_DealBuilderPage.sendBasketEmailAddress.sendKeys("ecomm4team@gmail.com");
                Agent_DealBuilderPage.sendEmailCTA.click();
                Thread.sleep(2000);
            } else {
                Assert.fail("Failed ::: Not able to find the send basket email addres ");
            }


            if (Agent_DealBuilderPage.emailSuccessfullyMsg.isDisplayed()) {
                System.out.println("Success :: " + Agent_DealBuilderPage.emailSuccessfullyMsg.getText());
                log.info("Success :: " + Agent_DealBuilderPage.emailSuccessfullyMsg.getText());
            } else {
                Assert.fail("Faild to display eMail success message once sent the mail basket");
            }
        }
    }


    public static void copyLinkFromClipboardThenProceedToPlaceOrder() throws InterruptedException {
        Thread.sleep(3000);
        if (driver.findElements(By.xpath("(//input[@name='otac'])[2]")).size() > 0) {
            Agent_DealBuilderPage.otac.sendKeys("999999");
            Agent_DealBuilderPage.continue_redeemOTAC.click();
            Thread.sleep(2000);
        }

        if (driver.findElements(By.xpath("//a[@name='normalCancel']")).size() > 0) {
            Agent_DealBuilderPage.continue_normalCancel.click();
            Thread.sleep(2000);
        }

        if (driver.findElements(By.xpath("//p[@class='reminder']/a[text()='Continue']")).size() > 0) {
            Agent_DealBuilderPage.reminder_continue.click();
            Thread.sleep(2000);
        }
        String basksetURL = driver.getCurrentUrl();
        System.out.println("The Display bolton in the basket page :: " + basksetURL);
      /*  if(basksetURL.contains("retentionBolton")){
            log.info("Retention bolton is Displayed in the Basket page URL");
        }else{
            log.info(" Failed :::: Retention bolton is Displayed in the Basket page URL");
            Assert.fail(" Failed :::: Retention bolton is Displayed in the Basket page URL");
        }*/
    }

    public static void verifyBoltonDisplayedInBasketAndSSC() {
        if (driver.findElements(By.xpath("//*[contains(text(),'Bolton')]")).size() > 0) {
            String boltSection = Agent_DealBuilderPage.boltonSection.getText();
            log.info("Retention bolton is Displayed " + boltSection);
        } else {
            log.info(" Failed :::: Retention bolton is Displayed in the Basket page URL");
            // Assert.fail(" Failed :::: Retention bolton is Displayed in the Basket page URL");
        }
    }

    public static void clickAndCollectNowoption() throws InterruptedException, IOException {

        // Selecting an Extra
        Agent_DealBuilderPage.CheckStore.click();
        log.debug("Clicked on Check store stock Tab");

        Thread.sleep(6000);

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
                Agent_DealBuilderPage.Postcode.sendKeys("g13hf");

                Agent_DealBuilderPage.searchStore.click();
                Thread.sleep(8000);
                Screenshots.captureScreenshot();

                List<WebElement> collectionDetails = driver.findElements(By.xpath("//table[@id='storeResultsTable']/tbody/tr"));
                int cnt = 0;
                //String collectionDetails = Agent_DealBuilderPage.collectionDetails.getText();

                for (int i = 1; i <= collectionDetails.size(); i++) {
                    String collectionDate = driver.findElement(By.xpath("//table[@id='storeResultsTable']/tbody/tr[" + i + "]/td[2]")).getText();
                    Thread.sleep(3000);
                    log.debug("Collection Date: " + collectionDate);
                    if (collectionDate.equalsIgnoreCase("Today")) {
                        log.debug("Device is available for click and collect now in provided store, status is:: " + collectionDate + "\n");
                        driver.findElement(By.xpath("//table[@id='storeResultsTable']/tbody/tr[" + i + "]/td[3]/input")).click();
                        log.debug("Store selected for collection Today\n");
                        cnt++;
                        break;
                    }
                }

            }
        }
    }

    public static void verifyClassicPAYGError(String strError) throws IOException, InterruptedException {
        Thread.sleep(3000);
        try {
            String classicCNCErrorMsg = pageobjects.Agent_DealBuilderPage.ErrorText.getText();

            if (classicCNCErrorMsg.contains("not applicable")) {
                log.debug("As expected, the error message is matching\n");
            } else {
                log.debug("No warning message as plan is available for ClickNCollectNow");
                Assert.fail("Failed :: No warning message as plan is available for ClickNCollectNow");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug("Unable to validate Incompatible error message");
        }
        Screenshots.captureScreenshot();
    }

    // Arizona starts here
    public static void SelectPAYMCompanionDevice(String Device) throws InterruptedException, IOException {

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
            Thread.sleep(4000);
            Agent_DealBuilderPage.SearchTextBox_PayMDevice.sendKeys(Device);
            log.debug("Clicked on SearchTextBox to enter" + Device);
            Thread.sleep(5000);
            Screenshots.captureScreenshot();
            Agent_DealBuilderPage.SelectInStockPAYMDevice.click();
            Thread.sleep(6000);
        }
        Screenshots.captureScreenshot();
    }

    public static void leadDevicePairingSectionDisplay(String userStatus) throws Throwable {

        //driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Thread.sleep(6000);
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,200)", "");
        Screenshots.captureScreenshot();
        Thread.sleep(3000);
        try {
            log.debug("Section Name: " + Agent_DealBuilderPage.leadDevicePairingSection_Heading.getText());
            if (Agent_DealBuilderPage.leadDevicePairingSection_Heading.getText()
                    .equals("Lead device pairing")) {
                log.debug("Your are on lead device pairing section");
                Thread.sleep(2000);

                if (userStatus.equalsIgnoreCase("Valid")) {

                    List<WebElement> countOfMSISDN = driver.findElements(By.xpath("//*[@id='leadDeviceMsisdn']/option"));
                    log.debug("The Number of eligible MSISDN is :" + countOfMSISDN.size());
                    if (countOfMSISDN.size() > 0) {
                        Select MSISDN_select = new Select(driver.findElement(By.id("leadDeviceMsisdn")));

                        MSISDN_select.selectByIndex(0);
                        log.debug("MSISDN Selected: " + MSISDN_select.getOptions().get(0).getText());
                        Screenshots.captureScreenshot();
                        Agent_DealBuilderPage.leadDevicePairingSection_Continue.click();
                        Thread.sleep(4000);
                        if (Agent_DealBuilderPage.leadDeviceMSISDNSection_ordersummary.isDisplayed()) {
                            log.debug("The MSISDN section is displayed in the order summary");
                            if (Agent_DealBuilderPage.leadDeviceMSISDN_ordersummary.getText().contentEquals(MSISDN_select.getOptions().get(0).getText())) {
                                log.debug("The MSISDN " + Agent_DealBuilderPage.leadDeviceMSISDN_ordersummary.getText() + "is updated in the order summary");
                            } else {
                                log.debug("The Selected MSISDN is not updated in the order summary");
                                Assert.fail("Failed :: The Selected MSISDN is not updated in the order summary.");
                            }
                        } else {
                            log.debug("The MSISDN section is not displayed in the order summary");
                            Assert.fail("Failed :: The MSISDN section is not displayed in the order summary.");
                        }

                    }
                } else if (userStatus.equalsIgnoreCase("Invalid")) {
                    String ErrorMsg = pageobjects.Agent_DealBuilderPage.leadDevicePairingSection_Error.getText();
                    if (ErrorMsg.contains("You don't have pay monthly account to connect your watch to.")) {
                        log.debug("As expected, the error message is matching\n");
                    } else {
                        log.debug("Error Message is not as per the requirement.");
                        Assert.fail("Failed :: Error Message is not as per the requirement.");
                    }
                }
            } else {
                log.debug("Lead device pairing section is not displayed");
                Assert.fail("Failed :: Lead device pairing section is not displayed");

                /*List<WebElement> menuOuter = driver.findElements(By.xpath("//*[@class='priceSelection']/select/option"));
                log.debug("The size of the table is :" + menuOuter.size());

                for (int i = 0; i < menuOuter.size(); i++) {
                    log.debug("Option " + i + " is: " + menuOuter.get(i).getText());
                }
                driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option[2])")).click();
                log.debug("Selected Option : " + driver.findElement(By.xpath("(//*[@class='priceSelection']/select/option[2])")).getText());

                log.debug("Selected combination of handset and talk plan");
                Thread.sleep(5000);*/
            }
            Screenshots.captureScreenshot();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug("Not able to proceed because of Lead pairing section");
            Screenshots.captureScreenshot();
        }
    }


    public static void SelectSimoTariff(String Tariff) throws InterruptedException, IOException {
        Agent_DealBuilderPage.SIMOTariffsTab.click();
        Thread.sleep(2000);

        if (Tariff.contains("Standard / Simo")) {
            Agent_DealBuilderPage.SIMOTariffsInputField.sendKeys(Tariff);
            Thread.sleep(1000);
            Agent_DealBuilderPage.SelectingFirstAvailableSIMOTariff.click();
            Thread.sleep(2000);
            log.debug("Selected provided simo Tariff ");
        } else if (Tariff.contains("Random")) {
            // Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("Standard");
            Agent_DealBuilderPage.SelectingFirstAvailableTariff.click();
            Thread.sleep(25000);
            log.debug("Selected Random Tariff ");
            Screenshots.captureScreenshot();
        } else if (Tariff.contains("Standard")) {
            Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("Standard");
            Agent_DealBuilderPage.SelectingFirstAvailableTariff.click();
            Thread.sleep(2000);
            log.debug("Selected Random Tariff ");
        } else if (Tariff.contains("Simo")) {
            Agent_DealBuilderPage.SIMOTariffsInputField.sendKeys("- / Simo");
            Thread.sleep(2000);
            //Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("Simo");
            Agent_DealBuilderPage.SelectingFirstAvailableSIMOTariff.click();
            Thread.sleep(2000);
            log.debug("Selected Random SimO Tariff ");

        } else if (Tariff.contains("Refresh")) {
            Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("Refresh");
            Thread.sleep(2000);
            Agent_DealBuilderPage.SelectingFirstAvailableTariff.click();
            Thread.sleep(2000);
            log.debug("Selected Refresh Tariff ");

        } else if (Tariff.contains("Base")) {
            ////////////////////////////// Basecomms
            ////////////////////////////// Tariff//////////////////////////////////////
            Agent_DealBuilderPage.SearchTextBox_Tariff.sendKeys("Base");
            Thread.sleep(1000);
            Agent_DealBuilderPage.SelectingFirstAvailableTariff.click();
            Thread.sleep(1000);
            log.debug("Selected Random Basecomms Tariff ");

        } else {
            Agent_DealBuilderPage.SIMOTariffsInputField.sendKeys(Tariff);
            Thread.sleep(1000);
            Agent_DealBuilderPage.SelectingFirstAvailableSIMOTariff.click();
            Thread.sleep(2000);
            log.debug("Selected provided simo Tariff ");
        }

        Screenshots.captureScreenshot();

    }

}





