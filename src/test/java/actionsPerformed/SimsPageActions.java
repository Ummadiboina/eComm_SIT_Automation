package actionsPerformed;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

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
            System.out.println("Entering method for Selecting Any Ipad Sim");
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
            System.out.println("Selecting Any Tablet Sim");
            log.debug("Selecting Any Tablet Sim");
            log.debug("Selected an Tablet Sim -  " + pageobjects.SimsPage.TabletPromo1.getText());
            pageobjects.SimsPage.TabletPromo1.click();
            log.debug("Clicked on 1st tile in Tablet sims page");
            Thread.sleep(2000);
        }

        Screenshots.captureScreenshot();
    }

    public static void clickonTabletsButton() throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            if (driver.findElements(By.xpath("//input[@value='Tablets']")).size() > 0) {
                if (driver.findElement(By.xpath("//input[@value='Tablets']")).isDisplayed()) {
                    driver.findElement(By.xpath("//input[@value='Tablets']")).click();
                    System.out.println(" Clicked on the 'Tablets' button");
                    log.debug(" Clicked on the 'Tablets' button");
                } else {
                    System.out.println(" Failed to click on the 'Tablets' button");
                    Assert.fail(" Failed to click on the 'Tablets' button");
                }
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(" Failed to click on the 'Tablets' button" + e.getStackTrace());
            Assert.fail(" Failed to click on the 'Tablets' button");
        }
    }


    public static void clickOnMBB_Button() throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            if (driver.findElements(By.xpath("//input[@value='Mobile broadband']")).size() > 0) {
                driver.findElement(By.xpath("//input[@value='Mobile broadband']")).click();
                System.out.println(" Clicked on the 'MBB' button");
                log.debug(" Clicked on the 'MBB' button");
            } else {
                System.out.println(" Failed to  Clicked on the 'MBB' button");
                Assert.fail(" Failed to  Clicked on the 'MBB' button");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(" Failed to  Clicked on the 'MBB' button" + e.getStackTrace());
            Assert.fail(" Failed to  Clicked on the 'MBB' button");
        }
    }

    public static void clickOn_simOnlyTariffTab() throws Exception {
        WebElement simOnlyTarirr = driver.findElement(By.xpath("//a[@id='tab-keep-your-phone']"));
        try {
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            if (driver.findElements(By.xpath("//a[@id='tab-keep-your-phone']")).size() >= 1) {
                ((JavascriptExecutor) driver).executeScript("arguments[0].click();", simOnlyTarirr);
                //simOnlyTarirr.click();
                System.out.println(" clicked on Sim only Tariff tab");
                log.debug(" Clicked on Sim only Tariff tab");
            } else {
                System.out.println("Failed to click on Sim only Tariff tab");
                Assert.fail("Failed to click on Sim only Tariff tab");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Failed to click on Sim only Tariff tab" + e.getStackTrace());
            Assert.fail("Failed to click on Sim only Tariff tab");
        }
    }

    public static void verifyThatURL_has_simo_at_end() throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            Thread.sleep(5000);
            String currentUrl = driver.getCurrentUrl();
            System.out.println("Current URL is :  " + currentUrl);
            if (currentUrl.contains("simo")) {
                System.out.println(" verifyed that the url has simo at the end");
                log.debug(" verifyed that the url has simo at the end");
            } else {
                System.out.println(" Failed to  verify that the url has simo at the end");
                Assert.fail(" Failed to  verify that the url has simo at the end");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(" Failed to  verify that the url has simo at the end" + e.getStackTrace());
            Assert.fail(" Failed to  verify that the url has simo at the end");
        }
    }


    public static void phonesButtonShouldSelectedByDefault() throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            if (driver.findElements(By.xpath("//div/input[@class='secondary phones-btn active']")).size() > 0) {
                if (driver.findElement(By.xpath("//div/input[@class='secondary phones-btn active']")).isDisplayed()) {
                    System.out.println(" The 'Phones' button is selected by default");
                    log.debug(" The 'Phones' button is selected by default");
                } else {
                    System.out.println(" Failed to The 'Phones' button is selected by default");
                    Assert.fail(" Failed to  The 'Phones' button is selected by default");
                }
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(" Failed to The 'Phones' button is selected by default" + e.getStackTrace());
            Assert.fail(" Failed to The 'Phones' button is selected by default");
        }
    }

    public static void allTariffsUnderTwelveMonthsShouldDisplayed() throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            if (driver.findElements(By.xpath("//li[@id='id-12-months' and @class=' active ']")).size() > 0) {
                List<WebElement> lstOfDataPlans = UpgradeCustomerPage.DataTextElement_12Months;
                for (int i = 0; i < lstOfDataPlans.size(); i++) {

                    String str = lstOfDataPlans.get(i).getText();
                    System.out.println(i + ": the tariffs under twelve months is : " + str);
                    log.debug(" the tariffs under twelve months is : " + str);
                }
            } else {
                System.out.println("Failed to display the tariffs under twelve months");
                Assert.fail("Failed to display the tariffs under twelve months");
            }

        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Failed to display the tariffs under twelve months" + e.getStackTrace());
            Assert.fail("Failed to display the tariffs under twelve months");
        }
    }

    public static void allTariffsUnderThirtyDaysShouldDisplayed() throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            if (driver.findElements(By.xpath("//li[@id='id-30-days' and @class=' active ']")).size() > 0) {
                List<WebElement> lstOfDataPlans = UpgradeCustomerPage.DataTextElement_30Days;
                for (int i = 0; i < lstOfDataPlans.size(); i++) {

                    String str = lstOfDataPlans.get(i).getText();
                    System.out.println(i + ": the tariffs under thrity days is : " + str);
                    log.debug(" the tariffs under thirty days is : " + str);
                }
            } else {
                System.out.println("Failed to display the tariffs under thirty days");
                Assert.fail("Failed to display the tariffs under thirty days");
            }

        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println("Failed to display the tariffs under thirty days" + e.getStackTrace());
            Assert.fail("Failed to display the tariffs under thirty days");
        }
    }


    public static void sortingDropdownIsDisplayedJstBelowToggleButtonsSections() throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            if (driver.findElements(By.xpath("//div[@class='tab-buttons-container']/following-sibling::div//span[@id='dataFilterSelectSelectBoxIt']")).size() > 0) {
                if (driver.findElement(By.xpath("//div[@class='tab-buttons-container']/following-sibling::div//span[@id='dataFilterSelectSelectBoxIt']")).isDisplayed()) {
                    System.out.println("the 'sorting dropdown' is displayed just below the toggle buttons sections");
                    log.debug("the 'sorting dropdown' is displayed just below the toggle buttons sections");
                } else {
                    System.out.println(" Failed to the 'sorting dropdown' is displayed just below the toggle buttons sections");
                    Assert.fail(" Failed to  the 'sorting dropdown' is displayed just below the toggle buttons sections");
                }
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(" Failed to the 'sorting dropdown' is displayed just below the toggle buttons sections" + e.getStackTrace());
            Assert.fail(" Failed to the 'sorting dropdown' is displayed just below the toggle buttons sections");
        }
    }


    public static void ifGiftBlockIsConfiguredThenDisplayBanner(String giftbox) throws Exception {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            if (driver.findElements(By.xpath("//div[@class='button-tabs']//a")).size() > 0) {
                String giftbock = driver.findElement(By.xpath("//div[@class='button-tabs']//a")).getText();
                System.out.println(" Configured Gift block/banner is displayed ::: " + giftbock);
                log.debug(" Configured Gift block/banner is displayed ::: " + giftbock);
            } else {
                System.out.println(" Configured Gift block/banner is not displayed");
                log.debug(" Configured Gift block/banner is not displayed");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            System.out.println(" Configured Gift block/banner is not displayed");
            log.debug(" Configured Gift block/banner is not displayed");
        }
    }

}
