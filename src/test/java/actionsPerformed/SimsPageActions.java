package actionsPerformed;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import GlobalActions.scrollToAnElement;
import org.apache.log4j.Logger;

import GlobalActions.Screenshots;
import helpers.Environment;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import pageobjects.PAYMandPAYGTariffAndExtrasPage;
import pageobjects.UpgradeCustomerPage;

public class SimsPageActions extends Environment {

    final static Logger log = Logger.getLogger("SimsPageActions");

    public static void SelectRandomIpadSim(String elementname) throws InterruptedException, IOException {
        if (elementname.contains("Random Tariff"))

        {
            log.debug("Entering method for Selecting Any Ipad Sim");
            log.debug("Selecting Any Ipad Sim");
            log.debug("Selected an IpadSim -  " + pageobjects.SimsPage.IpadPromo1.getText());
            pageobjects.SimsPage.IpadPromo1.click();
            log.debug("Clicked on 1st tile in Ipad sims page");
            Thread.sleep(2000);
        }
        Screenshots.captureScreenshot();

    }

    public static void SelectRandomTabletSim(String elementname) throws InterruptedException, IOException {

        if (elementname.contains("Random Tariff"))

        {
            log.debug("Selecting Any Tablet Sim");
            log.debug("Selecting Any Tablet Sim");
            log.debug("Selected an Tablet Sim -  " + pageobjects.SimsPage.TabletPromo1.getText());
            pageobjects.SimsPage.TabletPromo1.click();
            log.debug("Clicked on 1st tile in Tablet sims page");
            Thread.sleep(2000);
        }

        Screenshots.captureScreenshot();
    }

    public static void clickonTabletsButton() {
        try {
            Thread.sleep(3000);
            JavascriptExecutor jse = (JavascriptExecutor) driver;
            jse.executeScript("window.scrollBy(0,-300)", "");
            Screenshots.captureScreenshot();
            if (driver.findElements(By.xpath("//input[@value='Tablets']")).size() > 0) {
                if (driver.findElement(By.xpath("//input[@value='Tablets']")).isDisplayed()) {
                    driver.findElement(By.xpath("//input[@value='Tablets']")).click();
                    log.debug(" Clicked on the 'Tablets' button");
                    log.debug(" Clicked on the 'Tablets' button");
                } else {
                    log.debug(" Failed to click on the 'Tablets' button");
                    Assert.fail(" Failed to click on the 'Tablets' button");
                }
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug(" Failed to click on the 'Tablets' button" + e.getStackTrace());
            Assert.fail(" Failed to click on the 'Tablets' button");
        }
    }


    public static void clickOnMBB_Button() {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);

            if (driver.findElements(By.xpath("//input[@value='Mobile broadband']")).size() > 0) {
                //scrollToAnElement.scrollToElement(driver.findElement(By.xpath("//input[@value='Mobile broadband']")));

                Screenshots.captureScreenshot();
                WebElement element = driver.findElement(By.xpath("//input[@value='Mobile broadband']"));
                Thread.sleep(3000);
                JavascriptExecutor executor = (JavascriptExecutor) driver;
                executor.executeScript("arguments[0].click();", element);
                log.debug(" Clicked on the 'MBB' button");
                Screenshots.captureScreenshot();
            } else {
                log.debug(" Failed to  Clicked on the 'MBB' button");
                Assert.fail(" Failed to  Clicked on the 'MBB' button");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug(" Failed to  Clicked on the 'MBB' button" + e.getStackTrace());
            Assert.fail(" Failed to  Clicked on the 'MBB' button");
        }
    }

    public static void clickOn_simOnlyTariffTab() throws Exception {
        log.debug("We are at page :"+driver.getCurrentUrl()+"\n");
        WebElement simOnlyTarirr = driver.findElement(By.xpath("//a[@id='tab-keep-your-phone']"));
        scrollToAnElement.scrollToElement(simOnlyTarirr);
        Thread.sleep(4000);
        Screenshots.captureScreenshot();
        try {
            if (driver.findElements(By.xpath("//a[@id='tab-keep-your-phone']")).size() >= 1) {
                ((JavascriptExecutor) driver).executeScript("arguments[0].click();", simOnlyTarirr);
                //simOnlyTarirr.click();
                log.debug(" clicked on Sim only Tariff tab");

            } else {
                log.debug("Failed to click on Sim only Tariff tab");
                Assert.fail("Failed to click on Sim only Tariff tab");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug("Failed to click on Sim only Tariff tab" + e.getStackTrace());
            Assert.fail("Failed to click on Sim only Tariff tab");
        }
    }

    public static void verifyThatURL_has_simo_at_end() {
        try {
            driver.manage().timeouts().implicitlyWait(1, TimeUnit.MINUTES);
            Thread.sleep(5000);
            String currentUrl = driver.getCurrentUrl();
            Screenshots.captureScreenshot();
            log.debug("Current URL is :  " + currentUrl);
            if (currentUrl.contains("simo")) {
                log.debug(" verifyed that the url has simo at the end");

            } else {
                log.debug(" Failed to  verify that the url has simo at the end");
                Assert.fail(" Failed to  verify that the url has simo at the end");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug(" Failed to  verify that the url has simo at the end" + e.getStackTrace());
            Assert.fail(" Failed to  verify that the url has simo at the end");
        }
    }


    public static void phonesButtonShouldSelectedByDefault() {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);

            Screenshots.captureScreenshot();
            if (driver.findElements(By.xpath("//div/input[@class='secondary phones-btn active']")).size() > 0) {
                if (driver.findElement(By.xpath("//div/input[@class='secondary phones-btn active']")).isDisplayed()) {
                    log.debug(" The 'Phones' button is selected by default");

                } else {
                    log.debug(" Failed to The 'Phones' button is selected by default");
                    Assert.fail(" Failed to  The 'Phones' button is selected by default");
                }
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug(" Failed to The 'Phones' button is selected by default" + e.getStackTrace());
            Assert.fail(" Failed to The 'Phones' button is selected by default");
        }
    }

    public static void allTariffsUnderTwelveMonthsShouldDisplayed() throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            if (driver.findElements(By.xpath("//li[@id='id-12-months' and @class='active']")).size() > 0) {
                List<WebElement> lstOfDataPlans = UpgradeCustomerPage.DataTextElement_12Months;
                for (int i = 0; i < lstOfDataPlans.size(); i++) {

                    String str = lstOfDataPlans.get(i).getText();
                    log.debug(i + ": the tariffs under twelve months is : " + str);
                    log.debug(" the tariffs under twelve months is : " + str);
                }
            } else {
                log.debug("Failed to display the tariffs under twelve months");
                Assert.fail("Failed to display the tariffs under twelve months");
            }

        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug("Failed to display the tariffs under twelve months" + e.getStackTrace());
            Assert.fail("Failed to display the tariffs under twelve months");
        }
        Screenshots.captureScreenshot();
    }

    public static void allTariffsUnderThirtyDaysShouldDisplayed() {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            if (driver.findElements(By.xpath("//li[@id='id-30-days' and @class=' active ']")).size() > 0) {
                List<WebElement> lstOfDataPlans = UpgradeCustomerPage.DataTextElement_30Days;
                for (int i = 0; i < lstOfDataPlans.size(); i++) {

                    String str = lstOfDataPlans.get(i).getText();
                    log.debug(i + ": the tariffs under thrity days is : " + str);
                    log.debug(" the tariffs under thirty days is : " + str);
                }
            } else {
                log.debug("Failed to display the tariffs under thirty days");
                Assert.fail("Failed to display the tariffs under thirty days");
            }

        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug("Failed to display the tariffs under thirty days" + e.getStackTrace());
            Assert.fail("Failed to display the tariffs under thirty days");
        }
    }


    public static void sortingDropdownIsDisplayedJstBelowToggleButtonsSections() {
        try {
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.MINUTES);
            if (driver.findElements(By.xpath("//div[@class='tab-buttons-container']/following-sibling::div//span[@id='dataFilterSelectSelectBoxIt']")).size() > 0) {
                if (driver.findElement(By.xpath("//div[@class='tab-buttons-container']/following-sibling::div//span[@id='dataFilterSelectSelectBoxIt']")).isDisplayed()) {
                    scrollToAnElement.scrollToElement(driver.findElement(By.xpath("//div[@class='tab-buttons-container']/following-sibling::div//span[@id='dataFilterSelectSelectBoxIt']")));
                    Screenshots.captureScreenshot();
                    log.debug("the 'sorting dropdown' is displayed just below the toggle buttons sections");
                    log.debug("the 'sorting dropdown' is displayed just below the toggle buttons sections");
                } else {
                    log.debug(" Failed to the 'sorting dropdown' is displayed just below the toggle buttons sections");
                    Assert.fail(" Failed to  the 'sorting dropdown' is displayed just below the toggle buttons sections");
                }
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug(" Failed to the 'sorting dropdown' is displayed just below the toggle buttons sections" + e.getStackTrace());
            Assert.fail(" Failed to the 'sorting dropdown' is displayed just below the toggle buttons sections");
        }
    }


    public static void ifGiftBlockIsConfiguredThenDisplayBanner(String giftbox) {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            if (driver.findElements(By.xpath("//div[@class='button-tabs']//a")).size() > 0) {
                String giftbock = driver.findElement(By.xpath("//div[@class='button-tabs']//a")).getText();
                log.debug(" Configured Gift block/banner is displayed ::: " + giftbock);

            } else {
                log.debug(" Configured Gift block/banner is not displayed");

            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug(" Configured Gift block/banner is not displayed");

        }
    }

    public static void clickOn_pickSimLink() throws Exception {

        Screenshots.captureScreenshot();
        try {
            ((JavascriptExecutor) driver).executeScript("arguments[0].click();", pageobjects.SimsPage.pickSimLink);
            log.debug("Clicked on Pick Sim link\n");

        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug("Failed to click on Pick Sim link" + e.getStackTrace());
            Assert.fail("Failed to click on Pick Sim link");
        }
    }

    public static void VerifyCustomerLandedOnSimoListingPage() {
        try {
            Thread.sleep(8000);
            String currentUrl = driver.getCurrentUrl();
            Screenshots.captureScreenshot();
            log.debug("Current URL is :  " + currentUrl);
            if (currentUrl.contains("simo")) {
                log.debug(" verified that the url has simo at the end\n");
            } else {
                log.debug(" Failed to  verify that the url has simo at the end");
                Assert.fail(" Failed to  verify that the url has simo at the end");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug(" Failed to verify that the url has simo at the end" + e.getStackTrace());
            Assert.fail(" Failed to verify that the url has simo at the end");
        }
    }

    public static void clickOnAddToBasketCTAInSimoListingPage() throws Exception {

        Screenshots.captureScreenshot();
        try {
            ((JavascriptExecutor) driver).executeScript("arguments[0].click();", pageobjects.SimsPage.addToBasketCTA);
            log.debug("Clicked on Add to basket in Simo listing page\n");

        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug("Failed to click on Add to Basket CTA in Simo listing page" + e.getStackTrace());
            Assert.fail("Failed to click on Add to Basket CTA in Simo listing page");
        }
    }

    public static void verticalSimoUpgradeJourneyRemovedOrNot(){
        try{

            //Simo Phones/Tablets/MBB tariff buttons should not display
            if (driver.findElements(By.xpath("//div/input[@class='secondary phones-btn active']")).size() > 0 || driver.findElements(By.xpath("//input[@value='Tablets']")).size() > 0 || driver.findElements(By.xpath("//input[@value='Mobile broadband']")).size() > 0){
                log.debug("Failed:: Simo Phones/Tablet/Mobile Broadband buttons displaying\n");
                Assert.fail("Failed:: Simo Phones/Tablet/Mobile Broadband buttons displaying\n");
            }else{
                log.debug("As expected, Simo Phones/Tablet/Mobile Broadband buttons are not displaying\n");
            }

            /*Under simo tab show link text as 'upgrade simo' and navigate to  listing page
              verify that Text copy to be "Choose a sim only plan with all the data you need." and Link name to be "Pick a sim"*/

            String pickSimLinkLabel = pageobjects.SimsPage.pickSimLinkLabel.getText();
            Thread.sleep(2000);
            if(pickSimLinkLabel.equalsIgnoreCase("Choose a sim only plan with all the data you need.")){
                log.debug("As expected, Pick Sim Link label is displaying, ie: "+pickSimLinkLabel+"\n");
            }else{
                log.debug("Failed:: Pick Sim Link label text is not matching\n");
                Assert.fail("Failed:: Pick Sim Link label text is not matching\n");
            }

            if(pageobjects.SimsPage.pickSimLink.isDisplayed()){
                log.debug("As expected, pick sim link is displaying\n");
            }else{
                log.debug("Failed:: pick sim link is not displaying\n");
                Assert.fail("Failed:: pick sim link is not displaying\n");
            }

        }catch(Exception e){
            log.debug("Unable to validate vertical journey removed or not in upgrade option page for Sim only Tariff" + e.getStackTrace());
            Assert.fail("Unable to validate vertical journey removed or not in upgrade option page for Sim only Tariff");
        }
    }

}