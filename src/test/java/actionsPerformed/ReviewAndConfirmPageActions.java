package actionsPerformed;

import java.io.IOException;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;

import GlobalActions.CommonActions;
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
import pageobjects.BasketPage;
import pageobjects.ReviewAndConfirmPage;

import static helpers.Environment.driver;

public class ReviewAndConfirmPageActions extends Environment {

    final static Logger log = Logger.getLogger("ReviewAndConfimPageAction");

    public static void ReviewConfirmPageHeader() throws Throwable {
        Thread.sleep(4000);
        String HeaderText = ReviewAndConfirmPage.RevConfHeading.getText();
        Screenshots.captureScreenshot();
        if (HeaderText.contains("Review & confirm")) {
            log.debug("The Review and confirmation page for simo is displayed. The sections in this page are::\n");

            log.debug("First Section:: " + ReviewAndConfirmPage.firstSection.getText() + "\n");
            Thread.sleep(1000);
            log.debug("Second Section:: " + ReviewAndConfirmPage.secondSection.getText() + "\n");
            Thread.sleep(1000);
            log.debug("Third Section:: " + ReviewAndConfirmPage.thirdSection.getText() + "\n");
            Thread.sleep(1000);
            log.debug("Forth Section:: " + ReviewAndConfirmPage.forthSection.getText() + "\n");
            Thread.sleep(1000);
            log.debug("Fifth Section:: " + ReviewAndConfirmPage.fifthSection.getText() + "\n");
        } else
            Assert.fail("The Review and confirmation page is not displayed for upgrade simo");

    }

    public static void PrimaryNavNotDisplayed() {

        List<WebElement> PrimeHEad = driver.findElements(By.xpath("//*[@class='region region-header']"));
        if (PrimeHEad.size() > 0) {
            Assert.fail("The Primary header is displayed which is not correct");
        } else
            log.debug("The Primary header is not displayed which is correct");
    }

    public static void ProgressBarNotDisplayed() {

        List<WebElement> ProgBar = driver.findElements(By.xpath("//*[@id='checkout-progress-bar-xxl']"));
        if (ProgBar.size() > 0) {
            Assert.fail("The Progress bar is displayed which is not correct");
        } else
            log.debug("The Progress bar is not displayed which is correct");
    }

    public static void OrderSummaryNotDisplayed() {

        List<WebElement> OrdrSummary = driver.findElements(By.xpath("//*[@class='basket-container']"));
        if (OrdrSummary.size() > 0) {
            Assert.fail("The Order Summary is displayed which is not correct");
        } else
            log.debug("The Order Summary is not displayed which is correct");
    }

    public static void MsisdnLabel() {

        List<WebElement> numblabel = driver.findElements(By.xpath("//*[@class='msdin-selector']/p[2]"));
        if (numblabel.size() > 0) {
            log.debug("The MSISDN is displayed as a label");

        } else
            Assert.fail("The MSISDN is not displayed as a label");
    }

    public static void AboutYouNotDisplayed() {

        List<WebElement> AbtULabel = driver.findElements(By.xpath("//*[@class='default-content-container about-you-title']"));
        List<WebElement> AbtUSection = driver.findElements(By.xpath("//*[@class='form-element-container error-section']"));
        if ((AbtULabel.size() > 0) && (AbtUSection.size() > 0)) {
            Assert.fail("The About you section is displayed which is not correct");
        } else
            log.debug("The About you section is not displayed");
    }

    public static void CurvedBannermesage() {
        String CurvedBanner1 = ReviewAndConfirmPage.CurvedBannerGoodnews.getText();
        String CurvedBanner = CurvedBanner1.substring(0, CurvedBanner1.length() - 5);
        String Yourorderconfirmation = ReviewAndConfirmPage.CurvedBannerYourordercomplete.getText();
//Your order's complete
        if (CurvedBanner.equals("Good news,")) {
            System.out.println(CurvedBanner + "Message exists inside curved banner in confirmation page");
            log.debug(CurvedBanner + "Message exists inside curved banner in confirmation page");
        } else {

            System.out.println("Curved Banner Message does not exist");
            Assert.fail("Curved Banner Message does not exist");
        }

        if (Yourorderconfirmation.equals("Your order's complete")) {
            System.out.println(Yourorderconfirmation + "message is didsplayed in curved banner");
            log.debug(Yourorderconfirmation + "message is displayed in curved banner");

        } else {
            System.out.println("Your Order's complete message not displayed");
            Assert.fail("Your order confirmation message is displayed in curved banner");
        }
    }

    public static void Devicedetail() {
        String devicedetail = ReviewAndConfirmPage.Devicedetails.getText();
        String devicecolorcapacity = ReviewAndConfirmPage.Devicecolorcapacity.getText();

        if (devicedetail.contains(BasketPageActions.devicename) && devicecolorcapacity.contains(BasketPageActions.devicecolorcapacity)) {

            System.out.println("device detailsmatched" + devicedetail+devicecolorcapacity);
            log.debug("device detailsmatched" + devicedetail+devicecolorcapacity);

        } else {


            System.out.println("device details does not match");
            Assert.fail("device details does not match");
        }


    }

    public static void Tariffdetails() {
        if (driver.findElements(By.xpath("//div[@class='con-tariff-summary']//span[@class='get-data']")).size() > 0) {

            String Tariff = ReviewAndConfirmPage.Tariffdetails.getText();
            if (Tariff.contains(BasketPageActions.tariff)) {

                System.out.println("Tariff details are:" + Tariff);
                log.debug("Tariff details are:" + Tariff);

            } else {
                System.out.println("Tariff details are not matching");
                log.debug("Tariff details are not matching");
                Assert.fail("Tariff details are not matching");
            }


        } else {

            System.out.println("Tariff details are not present");
            log.debug("Tariff details are not present");
        }
    }


    public static void Storeopentimings() {
        if (driver.findElements(By.xpath("//p[contains(text(),'See store opening times')]")).size() > 0) {

            System.out.println("Click and collect is enabled");
            log.debug("Click and collect is enabled");
            driver.findElement(By.xpath("//p[contains(text(),'See store opening times')]")).click();
            String Storetimings= driver.findElement(By.xpath("//div[@class='store-content']//ul[@id='storeTimes']")).getText();

            System.out.println("Store timings:"+Storetimings);



        } else {
            Assert.fail("Click and collect is disabled");
            System.out.println("Click and collect is disabled");
            log.debug("Click and collect is disabled");


        }


    }

    public static void Accessories() {

        if (driver.findElements(By.xpath("//ul[@class='acc-list']")).size() > 0) {
            String Accessoriesdetails = ReviewAndConfirmPage.Accessoriesdetails.getText();
            String Basketaccessories=BasketPageActions.accessories;
            if (Accessoriesdetails.contains(Basketaccessories)) {
                System.out.println("Accessories detailsmatched" + Accessoriesdetails);
                log.debug("Accessories detailsmatched" + Accessoriesdetails);

            } else {


                System.out.println("Accessories not displayed");
                log.debug("Accessories not displayed");
                Assert.fail("Accessories not displayed");

            }


        }

        else
        {
            System.out.println("Accessories not present");
            log.debug("Accessories not present");
        }
    }



    public static void OrdernumberandPDfdownload() {

        if (driver.findElements(By.xpath("//div[@class='order-confirmation']//span[@id='order-id']")).size() > 0) {
            String ordernumber = ReviewAndConfirmPage.OrderNumber.getText();
            System.out.println("order number is" + ordernumber);
        } else {

            System.out.println("Order number not found");
            Assert.fail("Order number not found");
        }

        if(driver.findElements(By.xpath("//a[@id='download']")).size()>0){
            System.out.println("Download pdf link is enabled");
            log.debug("Download pdf link is enabled");
            ReviewAndConfirmPage.Downloadyourorderconfirmation.click();


        }
        else{
            System.out.println("Download pdf link is enabled");
            Assert.fail("Download pdf link is enabled");


        }


    }

}










