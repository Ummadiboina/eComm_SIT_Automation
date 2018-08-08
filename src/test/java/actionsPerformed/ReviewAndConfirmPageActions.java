package actionsPerformed;

import java.io.IOException;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import GlobalActions.Screenshots;
import GlobalActions.scrollToAnElement;
import helpers.Environment;
import pageobjects.ReviewAndConfirmPage;

import static helpers.Environment.driver;

public class ReviewAndConfirmPageActions extends Environment {

    final static Logger log = Logger.getLogger("ReviewAndConfimPageAction");

    public static void ReviewConfirmPageHeader() throws Throwable {
        Thread.sleep(4000);
        String HeaderText= ReviewAndConfirmPage.RevConfHeading.getText();
        Screenshots.captureScreenshot();
        if(HeaderText.contains("Review & confirm")) {
            log.debug("The Review and confirmation page for simo is displayed");
        }
        else
            Assert.fail("The Review and confirmation page is not displayed for upgrade simo");

    }

    public static void PrimaryNavNotDisplayed() {

        List<WebElement> PrimeHEad = driver.findElements(By.xpath("//*[@class='region region-header']"));
        if (PrimeHEad.size() > 0) {
            Assert.fail("The Primary header is displayed which is not correct");
        }
        else
            log.debug("The Primary header is not displayed which is correct");
    }

    public static void ProgressBarNotDisplayed() {

        List<WebElement> ProgBar = driver.findElements(By.xpath("//*[@id='checkout-progress-bar-xxl']"));
        if (ProgBar.size() > 0) {
            Assert.fail("The Progress bar is displayed which is not correct");
        }
        else
            log.debug("The Progress bar is not displayed which is correct");
    }

    public static void OrderSummaryNotDisplayed() {

        List<WebElement> OrdrSummary = driver.findElements(By.xpath("//*[@class='basket-container']"));
        if (OrdrSummary.size() > 0) {
            Assert.fail("The Order Summary is displayed which is not correct");
        }
        else
            log.debug("The Order Summary is not displayed which is correct");
    }

    public static void MsisdnLabel() {

        List<WebElement> numblabel = driver.findElements(By.xpath("//*[@class='msdin-selector']/p[2]"));
        if (numblabel.size() > 0) {
            log.debug("The MSISDN is displayed as a label");

        }
        else
            Assert.fail("The MSISDN is not displayed as a label");
    }

    public static void AboutYouNotDisplayed() {

        List<WebElement> AbtULabel = driver.findElements(By.xpath("//*[@class='default-content-container about-you-title']"));
        List<WebElement> AbtUSection = driver.findElements(By.xpath("//*[@class='form-element-container error-section']"));
        if ((AbtULabel.size() > 0)&& (AbtUSection.size() > 0)) {
            Assert.fail("The About you section is displayed which is not correct");
        }


        else
            log.debug("The About you section is not displayed");
    }
}








