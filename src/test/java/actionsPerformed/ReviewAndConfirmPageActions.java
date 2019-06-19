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
            log.debug("The Review and confirmation page for simo is displayed. The sections in this page are::\n");

            log.debug("First Section:: "+ReviewAndConfirmPage.firstSection.getText()+"\n");
            Thread.sleep(1000);
            log.debug("Second Section:: "+ReviewAndConfirmPage.secondSection.getText()+"\n");
            Thread.sleep(1000);
            log.debug("Third Section:: "+ReviewAndConfirmPage.thirdSection.getText()+"\n");
            Thread.sleep(1000);
            log.debug("Forth Section:: "+ReviewAndConfirmPage.forthSection.getText()+"\n");
            Thread.sleep(1000);
            log.debug("Fifth Section:: "+ReviewAndConfirmPage.fifthSection.getText()+"\n");
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

    public static void validateBSCEditLinkInReviewPage() {
        try {
            Screenshots.captureScreenshot();

            if (driver.findElements(By.xpath("//div[@class='largeTitle']/a | //div[@class='largeTitle']/h2/a | //section[@id='billSpendCapSection']/a[normalize-space()='Edit Spend Cap'] | //span[contains(text(),'2. Your Spend Cap')]/../a | (//div[contains(text(),'3. Your Spend Cap')])[3]/../div[@class='edit-link'] | //div[@class='edit-link']/../div/h2[contains(text(),'Spend Cap')]/../../div[2]/a | //a[@class='edit-bsc']")).size() > 0) {
                log.debug("BSC Edit option is displayed at Bill Spend Cap section in Review Page: " + pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapEditLink.getText());
                Assert.fail("BSC Edit option is displayed at Bill Spend Cap section in Review Page: ");
            } else {
                log.debug("As expected, BSC Edit option is not displayed in Bill Spend Cap section in Review Page\n");
            }
            Thread.sleep(2000);

        } catch (Exception e) {
            log.debug("Unable to validate BSC edit link in Review page:: " + e);
            Assert.fail("Unable to validate BSC edit link in Review page:: " + e);
        }

    }
}








