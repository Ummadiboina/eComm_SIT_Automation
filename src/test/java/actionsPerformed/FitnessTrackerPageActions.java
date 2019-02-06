package actionsPerformed;

import GlobalActions.Screenshots;
import helpers.Environment;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import pageobjects.MouseHoverPage;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class FitnessTrackerPageActions extends Environment {
    final static Logger log = Logger.getLogger("FitnessTrackerPageActions");
    public static String fitnessTarckerName="";
    static int UserSpecifiedFitnessTrackerLimit = 0;
    static int count = 0;

    public static void Elementdisplayvalidation(String Tabname) throws IOException {
        log.debug(" ");

        log.debug("FitnessTracker_Page_Validation");

        if (Tabname != null) {
            switch (Tabname.toLowerCase()) {
                case "filter":
                    if (pageobjects.FitnessTrackerPage.FitnessFilterTab.isDisplayed()) {
                        log.debug("The Filter Tab is Present on the FitnessPage and the Text is :"
                                + pageobjects.FitnessTrackerPage.FitnessFilterTab.getText());
                    } else {
                        log.debug("The  Filter Tab is not Present on the FitnessPage and the Text is :"
                                + pageobjects.FitnessTrackerPage.FitnessFilterTab.getText());
                    }
                    break;
                case "sort":
                    if (pageobjects.FitnessTrackerPage.FitnessSortTab.isDisplayed()) {
                        log.debug("The Sort Tab is Present on the FitnessPage and the Text is :"
                                + pageobjects.FitnessTrackerPage.FitnessSortTab.getText());
                    } else {
                        log.debug("The  Sort  Tab is not Present on the FitnessPage and the Text is :"
                                + pageobjects.FitnessTrackerPage.FitnessSortTab.getText());
                    }
                    break;

            }

        }
        Screenshots.captureScreenshot();

    }

    public static void ElementClickAction(String elementname) throws IOException {
        // TODO Auto-generated method stub
        log.debug(" ");

        log.debug("Fitness_Tracker_Page_Action");

        if (elementname != null) {
            switch (elementname.toLowerCase()) {
                case "filter":
                    pageobjects.FitnessTrackerPage.FitnessFilterTab.click();
                    break;
                case "sort":
                    pageobjects.FitnessTrackerPage.FitnessSortTab.click();
                    break;

            }

        }
        Screenshots.captureScreenshot();

    }

    public static void DeviceSelect(String elementName) throws InterruptedException, IOException {

        /*Thread.sleep(5000);
        MouseHoverPage.moreSmrtWatches.click();*/
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        if (elementName.contains("Random Device")) {
            log.debug("Random Fitness tracker Device Selected");
            Thread.sleep(5000);
            //pageobjects.FitnessTrackerPage.RandomFitnesstracker.click();
            WebElement element = pageobjects.FitnessTrackerPage.RandomFitnesstracker;
            fitnessTarckerName = pageobjects.FitnessTrackerPage.RandomFitnesstracker.getText();
            JavascriptExecutor executor = (JavascriptExecutor) driver;
            executor.executeScript("arguments[0].click();", element);
            Thread.sleep(5000);
            // Assert.assertEquals(elementName,"Galaxy S7 is not found");
            log.debug("Random Fitness tracker Device Selected");
        }

        if (elementName.contains("Fitbit Alta")) {
            log.debug("FitbitAlta Fitness tracker Device Selected");

            pageobjects.FitnessTrackerPage.FitbitAlta.click();
            Thread.sleep(5000);
            // Assert.assertEquals(elementName,"Galaxy S7 is not found");
            log.debug("FitbitAlta Fitness tracker Device Selected");
        }

        if (elementName.contains("Fitbit Charge 2")) {
            log.debug("FitbitCharge2 Fitness tracker Device Selected");

            pageobjects.FitnessTrackerPage.FitbitCharge2.click();
            Thread.sleep(5000);
            // Assert.assertEquals(elementName,"Galaxy S7 is not found");
            log.debug("FitbitCharge2 Fitness tracker Device Selected");
        }

        if (elementName.contains("Jawbone UP2")) {
            log.debug("Jawbone UP2 Device Selected");

            pageobjects.FitnessTrackerPage.JawboneUP2.click();
            Thread.sleep(5000);
            // Assert.assertEquals(elementName,"Galaxy S7 is not found");
            log.debug("Jawbone UP2 Fitness tracker Device Selected");
        }

        if (elementName.contains("Fitbit Ionic")) {
            log.debug("Selecting Fitbit Ionic Device");

            //	pageobjects.FitnessTrackerPage.FitbitIonic.click();
            WebElement element = pageobjects.FitnessTrackerPage.FitbitIonic;
            JavascriptExecutor executor = (JavascriptExecutor) driver;
            executor.executeScript("arguments[0].click();", element);
            Thread.sleep(5000);
            log.debug("Fitbit Ionic Fitness tracker Device Selected");
        }
        Screenshots.captureScreenshot();

    }

    public static void AddtoBasketFitnessTracker() throws InterruptedException, IOException {
        // TODO Auto-generated method stub
        {
            // TODO Auto-generated method stub
            try {
                // Below will give status like in stock / out of stock etc
                Thread.sleep(6000);
                UserSpecifiedFitnessTrackerLimit = Integer.parseInt("1");
                String status = driver.findElement(By.className("status-info")).getText();
                log.debug(status);

                if (status.contains("In Stock")) {

                    WebElement element = driver
                            .findElement(By.xpath("//div[@on-dimension-select='selectQuantityDimension']/select"));
                    JavascriptExecutor js = (JavascriptExecutor) driver;
                    js.executeScript("arguments[0].setAttribute('style', 'display:block;')", element);
                    new Select(element).selectByValue("1");

                    Thread.sleep(3000);

                    WebElement DeviceDetailsQuantity = driver.findElement(
                            By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span"));
                    String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
                    log.debug("DeviceDetailsQuantityValue is " + DeviceDetailsQuantityValue);
                    count = count + Integer.parseInt("1");
                    Thread.sleep(2000);
                    driver.findElement(By.xpath("//button[@id='deviceDetailsSubmit']")).click();

                    Thread.sleep(3000);

                } else {
                    driver.navigate().back();
                    Thread.sleep(3000);
                    FitnessTrackerPageActions.DeviceSelect("Random Device");
                    Screenshots.captureScreenshot();
                }
                Screenshots.captureScreenshot();

            } catch (Exception e) {
                WebElement DeviceDetailsQuantity = driver.findElement(
                        By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
                String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
                log.debug(DeviceDetailsQuantityValue);
                Assert.assertEquals("1", DeviceDetailsQuantityValue);

                driver.findElement(By.id("deviceDetailsSubmit")).click();

                Thread.sleep(3000);
                WebElement BasketQuantity = driver.findElement(By.id("accessory-quantitySelectBoxIt"));
                String BasketQuantityvalue = BasketQuantity.getText();

                Assert.assertEquals("1", BasketQuantityvalue);
                Screenshots.captureScreenshot();

            }

        }
    }

}