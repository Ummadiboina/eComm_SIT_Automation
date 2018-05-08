package actionsPerformed;

import GlobalActions.Screenshots;
import helpers.Environment;
import org.apache.log4j.Logger;
import org.openqa.selenium.*;
import pageobjects.PAYGSimoPage;

import java.awt.*;
import java.io.IOException;
import java.util.List;

public class PAYGSimOPageActions extends Environment {
    final static Logger log = Logger.getLogger("PAYMSimOPageActions");

    static String plan = "", actPlnList = "";

    // Below will Select the element under Phones Tab under 12 months and 30
    // days contract

    public static String selectTariff(String tariffType, String ElementName, String value)
            throws InterruptedException, AWTException, IOException {
        // Assert.assertTrue(driver.getTitle().contains("30 Days");

        String tariffAmt = "", dataRolloverValue = "", dataRolloverTxtAppend;

        if (tariffType.equalsIgnoreCase("BigBundle")) {

            log.debug("Selecting a big bundle tariff");

            if (ElementName.equalsIgnoreCase("DataRollOver")) {

                tariffAmt = value.split("\\|")[0];
                dataRolloverValue = value.split("\\|")[1];

                WebElement bigBundleSection = driver.findElement(By.xpath("//span[normalize-space()='" + tariffAmt + "']/../../../div/div/h3"));
                ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", bigBundleSection);
                log.debug("Scrolling page to Big Bundle section");

                if (driver.findElements(By.xpath("//span[text()='" + tariffAmt + "']")).size() >= 1) {

                   /* if (driver.findElement(By.xpath("//span[normalize-space()='" + tariffAmt + "']/../../../div/div/h3")).getText().contains(dataRolloverValue)) {
                        log.debug("Data value " + dataRolloverValue + " for " + tariffAmt + " is displayed");
                    } else {
                        log.debug("Data value " + dataRolloverValue + " for " + tariffAmt + " is not displayed");
                    }*/

                    if (driver.findElement(By.xpath("//span[normalize-space()='" + tariffAmt + "']/../../preceding-sibling::div/p")).getText().equals("Includes data rollover of up to " + dataRolloverValue+".")) {

                        log.debug("Data Roll over copy text is displayed");
                    } else {

                        log.debug("Data Roll over copy text is not displayed");
                    }

                    List<WebElement> plnList = driver.findElement(By.xpath("//span[normalize-space()='" + tariffAmt + "']/../../../div/div[@class='plan-info']/div"));

                    for (WebElement elm : plnList) {
                        if(elm.getAttribute("textContent").replaceAll("\"","").trim().contains("Includes data rollover")){

                            dataRolloverTxtAppend = elm.getAttribute("textContent").replaceAll("\"","").trim() + " of up to "+ dataRolloverValue;
                            plan = plan + dataRolloverTxtAppend + "|";
                        }
                        else {
                            plan = plan + elm.getAttribute("textContent").replaceAll("\"", "").trim() + "|";
                        }

                    }

                    if (plan.contains("Includes data rollover")) {
                        log.debug("Selected Big Bundle has Data Roll over plan");

                    } else {
                        log.debug("Selected Big Bundle do not have Data Roll over plan");

                    }

                    driver.findElement(By.xpath("//span[text()='" + tariffAmt + "']/../../../../../following-sibling::div/div/div[@class='tile-button']")).click();
                    log.debug("Selected the Big Bundle Tariff");
                    Thread.sleep(5000);
                }
            }
        } else if (tariffType.equalsIgnoreCase("ClassicPayAsYouGo")) {

            PAYGSimoPage.classicPayAsYouGoTab.click();
            Thread.sleep(3000);

            log.debug("Selecting a Classic Pay As You Go tariff");

            if (ElementName.equalsIgnoreCase("DataRollOver")) {

                tariffAmt = value.split("\\|")[0];
                dataRolloverValue = value.split("\\|")[1];

                List<WebElement> plnList = driver.findElement(By.xpath("//div[contains(@ng-if,'big-talker')]/p/span[normalize-space()='"+tariffAmt+"']/../../../div/div/div"));

                for (WebElement elm : plnList) {
                    if(elm.getAttribute("textContent").replaceAll("\"","").trim().contains("Includes data rollover")){

                        dataRolloverTxtAppend = elm.getAttribute("textContent").replaceAll("\"","").trim() + " of up to "+ dataRolloverValue;
                        plan = plan + dataRolloverTxtAppend + "|";
                    }
                    else {
                        plan = elm.getAttribute("textContent").replaceAll("\"", "").trim() + "|";
                    }

                }

                if (plan.contains("Includes data rollover")) {
                    log.debug("Selected Classic PAYG has Data Roll over plan");

                } else {
                    log.debug("Selected Classic PAYG do not have Data Roll over plan");

                }


                driver.findElement(By.xpath("//div[contains(@ng-if,'big-talker')]/p/span[text()='" + tariffAmt + "']/../../../../../following-sibling::div/div/div[@class='tile-button']")).click();
                log.debug("Selected the Classic Pay As You Go Tariff");
                Thread.sleep(5000);
            }



        }else if (tariffType.equalsIgnoreCase("International")) {

            PAYGSimoPage.internationalTab.click();
            Thread.sleep(3000);

            log.debug("Selecting a International tariff");

            if (ElementName.equalsIgnoreCase("DataRollOver")) {

                tariffAmt = value.split("\\|")[0];
                dataRolloverValue = value.split("\\|")[1];

                List<WebElement> plnList = driver.findElement(By.xpath("//div[contains(@ng-if,'international')]/p/span[normalize-space()='"+tariffAmt+""+"']/../../../div/div/div"));

                for (WebElement elm : plnList) {
                    if(elm.getAttribute("textContent").replaceAll("\"","").trim().contains("Includes data rollover")){

                        dataRolloverTxtAppend = elm.getAttribute("textContent").replaceAll("\"","").trim() + " of up to "+ dataRolloverValue;
                        plan = plan + dataRolloverTxtAppend + "|";
                    }
                    else {
                        plan = elm.getAttribute("textContent").replaceAll("\"", "").trim() + "|";
                    }
                }

                if (plan.contains("Includes data rollover")) {
                    log.debug("Selected International PAYG has Data Roll over plan");

                } else {
                    log.debug("Selected International PAYG do not have Data Roll over plan");

                }

                driver.findElement(By.xpath("//div[contains(@ng-if,'international')]/p/span[text()='" + tariffAmt + "']/../../../../../following-sibling::div/div/div[@class='tile-button']")).click();
                log.debug("Selected the International Tariff");
                Thread.sleep(5000);
            }

        }
        Screenshots.captureScreenshot();
        return plan;
    }
}