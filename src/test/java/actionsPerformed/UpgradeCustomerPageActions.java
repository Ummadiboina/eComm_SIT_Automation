package actionsPerformed;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import GlobalActions.CommonUtilities;
import GlobalActions.scrollToAnElement;
import junit.framework.AssertionFailedError;
import org.apache.commons.lang3.math.NumberUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import org.apache.commons.lang.StringUtils;
import com.google.common.base.Function;

import GlobalActions.Screenshots;
import helpers.Environment;
import helpers.Filereadingutility;
import helpers.setRuntimeProperty;
import pageobjects.*;
import steps.Hooks;

import static actionsPerformed.PaymentPageActions.Set_Bank_details;
import static actionsPerformed.PaymentPageActions.Time_At_Address;

public class UpgradeCustomerPageActions extends Environment {

    static String RunTimeFilePath = System.getProperty("user.dir") + "\\Configurations\\Properties\\Run.properties";
    final static Logger log = Logger.getLogger("UpgradeCustomerPageActions");
    static JavascriptExecutor executor = (JavascriptExecutor) driver;
    static ArrayList<Integer> datalistafter = new ArrayList<Integer>();
    static int position = 0;
    static int PositionUpgrade = 0;

    public static void Login(String username, String password) throws InterruptedException, IOException {
        driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
        pageobjects.UpgradeCustomerPage.username.sendKeys(username);
        pageobjects.UpgradeCustomerPage.password.sendKeys(password);

        Screenshots.captureScreenshot();
        //Screenshots.captureScreenshot(Hooks.directoryName);

        Thread.sleep(5000);
        if (pageobjects.UpgradeCustomerPage.signInButton.isDisplayed()) {
            pageobjects.UpgradeCustomerPage.signInButton.click();
            log.debug("Clicked on Signin button");
        }
        Thread.sleep(10000);

        log.debug("Title of the page is " + driver.getTitle());
        /*
         * if ((!driver.getTitle().
		 * contains("O2 | Accounts | Please verify your email address") ||
		 * !driver.getTitle().contains("O2 | Accounts | Update username"))) {
		 *
		 * Assert.fail("Login failed");
		 *
		 * } else {
		 *
		 * log.debug("Logged in successfully"); }
		 */
        /*
         * try { log.debug("Going to click on Continue link");
		 * pageobjects.UpgradeCustomerPage.Continue.click();
		 *
		 * } catch (Exception e) { // TODO Auto-generated catch block
		 * log.debug("Continue button is not there, it should be fine" );
		 *
		 * }
		 */


    }

    public static void CCALogin(String password1) throws InterruptedException, IOException {

        String CCALoginEmailID = Filereadingutility.getPropertyValue(
                System.getProperty("user.dir") + "\\Configurations\\Properties\\Run.properties", "emailid");
        pageobjects.UpgradeCustomerPage.username.sendKeys(CCALoginEmailID);
        pageobjects.UpgradeCustomerPage.password.sendKeys(password1);
        Screenshots.captureScreenshot();

    }

    public static void Signin() throws InterruptedException, IOException {
        log.debug("in signin function");
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("arguments[0].click()", pageobjects.UpgradeCustomerPage.Signinlink2);
        //pageobjects.UpgradeCustomerPage.Signinlink2.click();
        log.debug("Sign in button clicked");
        Screenshots.captureScreenshot();
        //Screenshots.captureScreenshot(Hooks.directoryName);
    }

    public static void PickSimOTariff() throws InterruptedException, IOException {
        if (pageobjects.UpgradeCustomerPage.SimOLink.isDisplayed()) {
            pageobjects.UpgradeCustomerPage.SimOLink.click();
        }
        Thread.sleep(5000);
        Screenshots.captureScreenshot();

    }

    public static void upgradePAYMPhoneSelect(String elementName) throws Throwable {
        // Below is to view all phones in the same page
        if (pageobjects.PhonesListingPage.ViewAllPhones.isDisplayed()) {
            executor.executeScript("arguments[0].click();", pageobjects.PhonesListingPage.ViewAllPhones);
            Thread.sleep(3000);
        }
        executor.executeScript("arguments[0].click();", pageobjects.PhonesListingPage.choosedefaultDevice);
        // Thread.sleep(3000);
        /*if (elementName.contains("GalaxyS7")) {
            pageobjects.UpgradePhonesListingPage.GalaxyS7.click();
            log.debug("Selected GalaxyS7");
            log.debug("Selected GalaxyS7");
        }

        if (elementName.contains("GalaxyS8")) {
            pageobjects.UpgradePhonesListingPage.GalaxyS8.click();
            // Assert.assertEquals(elementName,"Galaxy S7 is not found");
            log.debug("Selected GalaxyS8");

        }

        if (elementName.contains("GalaxyS8Plus")) {
            pageobjects.UpgradePhonesListingPage.GalaxyS8Plus.click();
            // Assert.assertEquals(elementName,"Galaxy S7 is not found");
            log.debug("Selected GalaxyS8Plus");

        }

        if (elementName.contains("Iphone7")) {
            pageobjects.UpgradePhonesListingPage.Iphone7.click();
            // Assert.assertEquals(elementName,"Galaxy S7 is not found");
            log.debug("Selected Iphone7");

        }
        if (elementName.contains("Iphone6")) {
            pageobjects.UpgradePhonesListingPage.Iphone6.click();
            // Assert.assertEquals(elementName,"Galaxy S7 is not found");
            log.debug("Selected Iphone6");

        }

        if (elementName.contains("Iphone7Plus")) {
            pageobjects.UpgradePhonesListingPage.Iphone7Plus.click();
            // Assert.assertEquals(elementName,"Galaxy S7 is not found");
            log.debug("Selected Iphone7Plus");

        }

        if (elementName.contains("IphoneSE")) {
            pageobjects.UpgradePhonesListingPage.IphoneSE.click();
            // Assert.assertEquals(elementName,"Galaxy S7 is not found");
            log.debug("Selected IphoneSE");

        }

        if (elementName.contains("HuaweiP10")) {
            pageobjects.UpgradePhonesListingPage.HuaweiP10.click();
            // Assert.assertEquals(elementName,"Galaxy S7 is not found");
            log.debug("Selected HuaweiP10");

        }

        if (elementName.contains("GalaxyS7Edge")) {
            pageobjects.UpgradePhonesListingPage.GalaxyS7Edge.click();
            // Assert.assertEquals(elementName,"Galaxy S7 is not found");
            log.debug("Selected GalaxyS7Edge");
        }

        if (elementName.contains("Oneplus3T")) {
            pageobjects.UpgradePhonesListingPage.Oneplus3T.click();
            // Assert.assertEquals(elementName,"Galaxy S7 is not found");
            log.debug("Selected Oneplus3T");

        }

        if (elementName.contains("Samsung Galaxy J3 2016 Like New")) {
            pageobjects.UpgradePhonesListingPage.SamsungGalaxyJ32016LikeNew.click();
            log.debug("Selected Samsung Galaxy J3 2016 Like New");

        }*/
        Screenshots.captureScreenshot();

    }

    public static void viewAllPhones() throws InterruptedException, IOException {
        Thread.sleep(3000);
        if (pageobjects.UpgradePhonesListingPage.ViewAllPhones.isDisplayed()) {
            executor.executeScript("arguments[0].click();", pageobjects.UpgradePhonesListingPage.ViewAllPhones);
            Thread.sleep(3000);
        }
        Screenshots.captureScreenshot();
    }

    //////////////////////////// Customer not eligible for
    //////////////////////////// upgrade//////////////////////////

    public static void UpgradeUpsellPromoModule_Validation() throws InterruptedException, IOException {
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,150)", "");

        if (pageobjects.UpgradeCustomerPage.Promomodule_iPadsims.isDisplayed()) {
            log.debug("The iPad sims promo module is displayed and the text is : "
                    + pageobjects.UpgradeCustomerPage.Promomodule_iPadsims.getText());

        } else

            log.debug("iPad Sims promo module is not displayed");

        if (pageobjects.UpgradeCustomerPage.Promomodule_Tabletsims.isDisplayed()) {
            log.debug("The Tablet sims promo module is displayed and the text is : "
                    + pageobjects.UpgradeCustomerPage.Promomodule_Tabletsims.getText());

        } else

            log.debug("Tablet Sims promo module is not displayed");

        if (pageobjects.UpgradeCustomerPage.Promomodule_Donglesims.isDisplayed()) {
            log.debug("The Dongle sims promo module is displayed and the text is : "
                    + pageobjects.UpgradeCustomerPage.Promomodule_Donglesims.getText());

        } else

            log.debug("Dongle Sims promo module is not displayed");

        if (pageobjects.UpgradeCustomerPage.GoToMyO2_CTA.isDisplayed()) {
            log.debug("The Go To My O2 CTA is displayed and the text is : "
                    + pageobjects.UpgradeCustomerPage.GoToMyO2_CTA.getText());

        } else

            log.debug("Go To My O2 CTA is not displayed");

        log.debug(pageobjects.UpgradeCustomerPage.NotEligible_message.getText());

		/*
         * Assert.assertEquals(pageobjects.UpgradeCustomerPage.
		 * NotEligible_message.getText(), "You are not eligible to upgrade"); // bound
		 * to change log.debug( "The error message is displayed as" +
		 * pageobjects.UpgradeCustomerPage.NotEligible_message.getText());
		 */
        Screenshots.captureScreenshot();
    }

    public static void UpgradeUpsellPromoModule_MyO2Action() throws InterruptedException, IOException {

        if (pageobjects.UpgradeCustomerPage.GoToMyO2_CTA.isDisplayed()) {
            log.debug("The Go To My O2 CTA is displayed and the text is : "
                    + pageobjects.UpgradeCustomerPage.GoToMyO2_CTA.getText());
            pageobjects.UpgradeCustomerPage.GoToMyO2_CTA.click();

            if (pageobjects.UpgradeCustomerPage.MyO2_Page.isDisplayed()) {

                log.debug("My O2 Page is displayed");
            } else
                log.debug("My O2 page is not displayed");
        }
        Screenshots.captureScreenshot();

    }

    public static void UpgradeUpsellPromoModule_iPadAction() throws InterruptedException, IOException {

        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,300)", "");

        if (pageobjects.UpgradeCustomerPage.Promomodule_iPadsims.isDisplayed()) {
            log.debug("The  is displayed and the text is : "
                    + pageobjects.UpgradeCustomerPage.Promomodule_iPadsims.getText());
            pageobjects.UpgradeCustomerPage.Promomodule_iPadsims.click();

        } else {

            log.debug("The iPad sims promo module is not displayed");
        }
        Screenshots.captureScreenshot();

    }

    public static void UpgradeUpsellPromoModule_TabletAction() throws InterruptedException, IOException {

        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,300)", "");

        if (pageobjects.UpgradeCustomerPage.Promomodule_Tabletsims.isDisplayed()) {
            log.debug("The  is displayed and the text is : "
                    + pageobjects.UpgradeCustomerPage.Promomodule_Tabletsims.getText());
            pageobjects.UpgradeCustomerPage.Promomodule_Tabletsims.click();

        } else {

            log.debug("The Tablets sims promo module is not displayed");
        }
        Screenshots.captureScreenshot();

    }

    public static void UpgradeUpsellPromoModule_DongleAction() throws InterruptedException, IOException {

        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,300)", "");

        if (pageobjects.UpgradeCustomerPage.Promomodule_Donglesims.isDisplayed()) {
            log.debug("The  is displayed and the text is : "
                    + pageobjects.UpgradeCustomerPage.Promomodule_Donglesims.getText());
            pageobjects.UpgradeCustomerPage.Promomodule_Donglesims.click();

        } else {

            log.debug("The Dongle sims promo module is not displayed");
        }
        Screenshots.captureScreenshot();

    }

    public static void upgradePAYMTabletSelect(String elementName) throws Throwable {
        // Below is to view all phones in the same page

        pageobjects.UpgradeTabletListingPage.TabletTab.click();

        if (pageobjects.UpgradeTabletListingPage.ViewAllTablets.isDisplayed()) {
            executor.executeScript("arguments[0].click();", pageobjects.UpgradeTabletListingPage.ViewAllTablets);
        }
        if (elementName.contains("Apple iPad 9.7")) {
            pageobjects.UpgradeTabletListingPage.iPad97.click();

            log.debug("Selected Apple iPad 9.7");
        }
        if (elementName.contains("Apple iPad Pro 10.5 inch")) {
            pageobjects.UpgradeTabletListingPage.AppleiPadPro105inch.click();

            log.debug("Selected Apple iPad Pro 10.5 inch");
        }
        Screenshots.captureScreenshot();
    }

    public static void clickOnContinueButton() throws Throwable {

        List<WebElement> MissingElement = driver.findElements(By.xpath("//*[@class='rounded-button']"));
        if (MissingElement.size() > 0) {

            pageobjects.UpgradeCustomerPage.Continue.click();
            log.debug("Clicked on Continue button in Upgrade page");

        } else {
            log.debug("The Security checks page is displayed");
            pageobjects.UpgradeCustomerPage.SecurityOtac.sendKeys("999999");
            pageobjects.UpgradeCustomerPage.SecurityContinue.click();
            Thread.sleep(2000);
            pageobjects.UpgradeCustomerPage.Continue.click();
            log.debug("Clicked on Continue button in Upgrade page");


        }
        Screenshots.captureScreenshot();
    }

    public static void selectDeviceInRecommendedDevicesSection(String devicename) throws Exception {
        log.debug("Select a device in recommended devices section");
        log.debug("Select a device in recommended devices section");
        List<WebElement> DevicesName = pageobjects.UpgradeCustomerPage.DeviceNameRecommendedSection;
        WebElement SelectButton;
        JavascriptExecutor js = (JavascriptExecutor) driver;
        String c = null;
        int k = 0;
        List<String> Devices = new ArrayList<String>();
        for (WebElement f : DevicesName) {
            Devices.add(f.getText());
            // log.debug(Devices.add(f.getText()));
        }
        log.debug("passing device" + devicename);
        log.debug("passing device " + devicename);
        for (int i = 0; i < DevicesName.size(); i++) {
            if (DevicesName.get(i).getText().equals(devicename)) {
                log.debug("Device name matches");
                log.debug("Device name matches");
                k = i + 1;
                log.debug("k :" + k);
                // log.debug("k :" + k);
                c = "(//div[@id='qa-recommendedDevicesTile']/a//div/button)[" + k + "]";
                log.debug("xpath of button is" + c);
                // log.debug("xpath of button is" + c);
                SelectButton = driver.findElement(By.xpath(c));
                js.executeScript("arguments[0].click();", SelectButton);
            }
        }
        Thread.sleep(5000);
        Screenshots.captureScreenshot();
    }

    public static void selectTariff(String Tariff) throws IOException, InterruptedException {
        log.debug("selectTariff");
        Thread.sleep(8000);

        //driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        //WebElement selectBtnEle = driver.findElement(By.xpath("(//button[@type='button']//*[normalize-space()='Select'])[2]"));
        WebElement selectBtnEle = driver.findElement(By.xpath("(//button[@id='callToAction'])[1]"));
        Screenshots.captureScreenshot();
        if(selectBtnEle.isDisplayed()){
            ((JavascriptExecutor) driver).executeScript("arguments[0].click();", selectBtnEle);
            log.debug("Tariff has been selected");
        }else{

            log.debug("Failed to select the Tariff in the Extras&Tariff page");
            Assert.fail("Failed to select the Tariff in the Extras&Tariff page");
        }
        // executor.executeScript("arguments[0].click();",
        // pageobjects.PAYMandPAYGTariffAndExtrasPage.ViewAllTariffs);
/*        List<WebElement> TariffList = driver.findElements(By.xpath("//*[@class='tariff-grids tiles row']/li[@class='liTariffPlan col-sm-6 col-md-4 col-lg-3 ng-scope']"));
        boolean flag = false;
        String TariffXpath = null;
        String TextOfTariffTile = null;
        String SelectBtnXpath = null;
        int i = 0;
        for (int j = 0; j < TariffList.size(); j++) {
            i = j ++;
            TariffXpath = "(//*[@class='price-block'])[" + i + "]";
            TextOfTariffTile = driver.findElement(By.xpath(TariffXpath)).getText();
            TextOfTariffTile = TextOfTariffTile.replace("£", "");
            TextOfTariffTile = TextOfTariffTile.replace("\n", "");
            TextOfTariffTile = TextOfTariffTile.replace(" ", "");
            log.debug("TextOfTariffTile  " + TextOfTariffTile);
            log.debug("Tariff  " + Tariff);
            if (TextOfTariffTile.contains(Tariff)) {
                log.debug("Given tariff is present in the list of tariffs");
                position = i;
                SelectBtnXpath = "(//button[@id='callToAction'])[" + i + "]";
                driver.findElement(By.xpath(SelectBtnXpath)).click();
                flag = true;
                break;
            }

        }
        if (flag == false) {
            Assert.fail("Provided tariff is not present in the list of tariffs");
        }*/



        //Screenshots.captureScreenshot(Hooks.directoryName);
    }

    public static void selectTariffWithRibbonAndOverlayUpgradeJourney(String Tariff)
            throws IOException, InterruptedException {
        log.debug('\n' + "To select Tariff With Ribbon And Overlay in upgrade journey");
        List<WebElement> TariffList = driver
                .findElements(By.xpath("(//div[contains(@class, 'grid-tile')]/div/button[@id='callToAction'])[1]"));
        String UpfrontPoundXPath = null, UpfrontPenceXPath = null, MonthlyPoundXPath = null, MonthlyPenceXPath = null;
        String UpfrontPound = null, UpfrontPence = null, MonthlyPound = null, MonthlyPence = null;
        String UpfrontCost = null, MonthlyCost = null;
        String TextOfTariffTile = null, SelectBtnXpath = null;
        boolean flag = false;
        int j = 0;

        log.debug("Tariff List size is " + TariffList.size());

        for (int i = 0; i < TariffList.size(); i++) {
            log.debug("inside for loop");
            log.debug("inside for loop");
            j = i + 1;
            UpfrontPoundXPath = "(//*[@id='qa-upfront-pound'])[" + j + "]";
            UpfrontPenceXPath = "(//*[@id='qa-upfront-pence'])[" + j + "]";
            MonthlyPoundXPath = "(//*[@id='qa-month-pound'])[" + j + "]";
            MonthlyPenceXPath = "(//*[@id='qa-month-pence'])[" + j + "]";

            UpfrontPound = driver.findElement(By.xpath(UpfrontPoundXPath)).getText();
            UpfrontPence = driver.findElement(By.xpath(UpfrontPenceXPath)).getText();
            MonthlyPound = driver.findElement(By.xpath(MonthlyPoundXPath)).getText();
            MonthlyPence = driver.findElement(By.xpath(MonthlyPenceXPath)).getText();

            log.debug("UpfrontPound " + UpfrontPound);
            log.debug("UpfrontPence " + UpfrontPence);
            log.debug("MonthlyPound " + MonthlyPound);
            log.debug("MonthlyPence " + MonthlyPence);

            UpfrontPound = UpfrontPound.replace("£", "");
            MonthlyPound = MonthlyPound.replace("£", "");

            log.debug("UpfrontPound " + UpfrontPound);
            log.debug("UpfrontPence " + UpfrontPence);
            log.debug("MonthlyPound " + MonthlyPound);
            log.debug("MonthlyPence " + MonthlyPence);

            UpfrontCost = UpfrontPound + UpfrontPence + " upfront";
            MonthlyCost = MonthlyPound + MonthlyPence + " a month";

            TextOfTariffTile = UpfrontCost + MonthlyCost;
            log.debug("UpfrontCost is " + UpfrontCost);
            log.debug("MonthlyCost is " + MonthlyCost);
            log.debug("TextOfTariffTile is " + TextOfTariffTile);
            Screenshots.captureScreenshot();
            if (TextOfTariffTile.contains(Tariff)) {
                PositionUpgrade = j;
                log.debug("Provided tariff is present in the list of tariffs");
                SelectBtnXpath = "(//button[@id='callToAction'])[" + j + "]";
                log.debug("Going to select the given tariff :" + Tariff);
                driver.findElement(By.xpath(SelectBtnXpath)).click();
                flag = true;
            }
        }

        if (flag == false) {
            Screenshots.captureScreenshot();
            driver.findElement(By.xpath("(//div[contains(@class, 'grid-tile')]/div/button[@id='callToAction'])[1]")).click();
            // Assert.fail("Provided tariff is not present in the list of tariffs");
        }

    }

    public static void verifyPromotionalRibbonDisplayedTEpage(String Tariff) throws IOException, InterruptedException {

        WebElement selectBtnEle = driver.findElement(By.xpath("(//button[@type='button']//*[normalize-space()='Select'])[2]"));

        if(driver.findElements(By.xpath("(//button[@type='button']//*[normalize-space()='Select'])[2]")).size()>=1){
            driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
            ((JavascriptExecutor) driver).executeScript("arguments[0].click();", selectBtnEle);
            log.debug("Tariff has selected");
            log.info("Tariff has selected");
        }else{
            log.debug("Failed to select the Tariff in the Extras&Tariff page");
            Assert.fail("Failed to select the Tariff in the Extras&Tariff page");
        }

        //WebElement blueRibben = driver.findElement(By.xpath("(//div[@class='blue-promotion']//span[@class='promotion-text ng-binding'])[2]"));

        //if(blueRibben.isEnabled()){

        if(driver.findElements(By.xpath("(//div[@class='blue-promotion']//span[@class='promotion-text ng-binding'])[2]")).size()>=1){
            log.debug("Blue ribben is displaayed on the Tariff tile in the Tariff and Extras page: @ ");
        }else{
            log.debug("Blue Ribben's are not Displayed on the Tariff tile in the Tariff and Extras page");
        }

        if(driver.findElements(By.xpath("(//div[@class='green-promotion']//span[@class='promotion-text ng-binding'])[2]")).size() >= 1){
            WebElement greenRibben = driver.findElement(By.xpath("(//div[@class='green-promotion']//span[@class='promotion-text ng-binding'])[2]"));

            log.debug("Green ribben is displaayed  on the Tariff tile in the Tariff and Extras page: @ " + greenRibben.getText());
        }else{
            log.debug("Green Ribben's are not Displayed on the Tariff tile in the Tariff and Extras page");
        }

        /*log.debug('\n' + "Verify Promotional Ribbon is displayed in TE page");
        String BluePromotionXpath = null;
        String GreenPromotionXpath = null;
        WebElement GreenPromotion = null;
        WebElement BluePromotion = null;
        List<WebElement> TariffList = driver.findElements(By.xpath("//div[@id='tariff-tile']/div[@id]"));
        log.debug("TariffList size is " + TariffList.size());

        String PrimaryPromotionRibbon = Filereadingutility.getPropertyValue(RunTimeFilePath,
                "PrimaryPromotionRibbon");
        String SecondaryPromotionRibbon = Filereadingutility.getPropertyValue(RunTimeFilePath,
                "SecondaryPromotionRibbon");

        BluePromotionXpath = "(//div[@id='tariff-tile']/div[@id]//div[@class='blue-promotion'])[" + position + "]";

        if (PrimaryPromotionRibbon.equals("Y")) {
            BluePromotion = driver.findElement(By.xpath(BluePromotionXpath));
            if (BluePromotion.getText().isEmpty()) {
                Assert.fail("Promotion text not present for the selected tariff");
            } else {
                setRuntimeProperty.setProperty("PrimaryPromotionText", BluePromotion.getText());
                log.debug("Promotion text is " + BluePromotion.getText());
            }
        } else if (PrimaryPromotionRibbon.equals("N")) {
            log.debug("No Primary ribbon is configured");
        }

        if (SecondaryPromotionRibbon.equals("Y")) {
            GreenPromotionXpath = "(//div[@id='tariff-tile']/div[@id]//div[@class='green-promotion'])[" + position
                    + "]";
            GreenPromotion = driver.findElement(By.xpath(GreenPromotionXpath));
            if (GreenPromotion.isDisplayed()) {
                setRuntimeProperty.setProperty("SecondaryPromotionText", GreenPromotion.getText());
                log.debug("Secondary Promotion text is " + GreenPromotion.getText());
            } else {
                Assert.fail("Secondary ribbon not present");
            }
        } else if (SecondaryPromotionRibbon.equals("N")) {
            log.debug("No Secondary ribbon is configured");
        }*/
        Screenshots.captureScreenshot();
    }

    public static void verifyPromotionalRibbonDisplayedUpgradePage(String Tariff)
            throws IOException, InterruptedException {
        log.debug("To verify Promotional Ribbon Displayed in Upgrade Page");

        String PrimaryPromotionXpath = null, SecondaryPromotionXpath = null;
        String PrimaryPromotionText = null, SecondaryPromotionText = null;
        int i = 0;

        String PrimaryPromotionRibbonRecommendedSection = Filereadingutility.getPropertyValue(RunTimeFilePath,
                "PrimaryPromotionRibbonRecommendedSection");
        String SecondaryPromotionRibbonRecommendedSection = Filereadingutility
                .getPropertyValue(RunTimeFilePath, "SecondaryPromotionRibbonRecommendedSection");

        i = PositionUpgrade;

        PrimaryPromotionXpath = "(//div[@class='offer-wrapper'])[" + i + "]";
        SecondaryPromotionXpath = "(//div[@id='qa-promotion']/div[2])[" + i + "]";

        List<WebElement> PrimaryPromotionList = driver.findElements(By.xpath(PrimaryPromotionXpath));
        List<WebElement> SecondaryPromotionList = driver.findElements(By.xpath(SecondaryPromotionXpath));

        if (PrimaryPromotionRibbonRecommendedSection.equals("Y")) {
            if (PrimaryPromotionList.size() > 0) {
                if (driver.findElement(By.xpath(PrimaryPromotionXpath)).isDisplayed()) {
                    PrimaryPromotionText = driver.findElement(By.xpath(PrimaryPromotionXpath)).getText();
                    setRuntimeProperty.setProperty("PrimaryPromotionTextRecommendedSection", PrimaryPromotionText);
                    log.debug("PrimaryPromotionText is " + PrimaryPromotionText);
                }
            } else {
                Assert.fail("Primary Promotion Ribbon is not present");
            }
        } else if (PrimaryPromotionRibbonRecommendedSection.equals("N")) {
            if (PrimaryPromotionList.size() == 0) {
                log.debug("Primary promotion ribbon in recommended section is not configured");
            } else {
                Assert.fail("Primary promotion ribbon is present though it is not configured");
            }
        }

        if (SecondaryPromotionRibbonRecommendedSection.equals("Y")) {
            if (SecondaryPromotionList.size() > 0) {
                if (driver.findElement(By.xpath(SecondaryPromotionXpath)).isDisplayed()) {
                    SecondaryPromotionText = driver.findElement(By.xpath(SecondaryPromotionXpath)).getText();
                    setRuntimeProperty.setProperty("SecondaryPromotionTextRecommendedSection", SecondaryPromotionText);
                    log.debug("SecondaryPromotionText is " + SecondaryPromotionText);
                }
            } else {
                Assert.fail("Secondary Promotion Ribbon is not present");
            }
        } else if (SecondaryPromotionRibbonRecommendedSection.equals("N")) {
            if (SecondaryPromotionList.size() == 0) {
                log.debug("Secondary promotion ribbon in recommended section is not configured");
            } else {
                Assert.fail("Secondary promotion ribbon is present though it is not configured");
            }
        }
        Screenshots.captureScreenshot();
    }

    public static void checkIfPromotionalRibbonTextsNotSame() throws IOException, InterruptedException {
        String PrimaryPromotionTextRecommendedSection = Filereadingutility.getPropertyValue(RunTimeFilePath,
                "PrimaryPromotionTextRecommendedSection");
        String SecondaryPromotionTextRecommendedSection = Filereadingutility.getPropertyValue(RunTimeFilePath,
                "SecondaryPromotionTextRecommendedSection");
        String PrimaryPromotionText = Filereadingutility.getPropertyValue(RunTimeFilePath,
                "PrimaryPromotionText");
        String SecondaryPromotionText = Filereadingutility.getPropertyValue(RunTimeFilePath,
                "SecondaryPromotionText");
        if (PrimaryPromotionTextRecommendedSection.equals(PrimaryPromotionText)) {
            log.debug("Primary promotion text matches");
        } else {
            log.debug("Primary promotion text does not match");
        }
        if (SecondaryPromotionTextRecommendedSection.equals(SecondaryPromotionText)) {
            log.debug("Secondary promotion text matches");
        } else {
            log.debug("Secondary promotion text does not match");
        }
        Screenshots.captureScreenshot();
    }

    public static void verifyOverlayIconIsDisplayedTEpage(String Tariff) throws IOException, InterruptedException {
        log.debug('\n' + "Verify Overlay Icon Is Displayed in TE page");
        log.debug("Tariff for verifying overlay icon is " + Tariff);

        WebElement overlayIcon = driver.findElement(By.xpath("(//div[@class='blue-promotion']//span[@class='promotion-text ng-binding'])[2]/following-sibling::a"));

        if (driver.findElements(By.xpath("(//div[@class='blue-promotion']//span[@class='promotion-text ng-binding'])[2]/following-sibling::a)")).size()>=1) {
            log.debug("Overlay is present for the selected tariff in the tariff tile as expected in the Tariff and Extras page");
            log.debug("Overlay is present for the selected tariff in the tariff tile as expected in the Tariff and Extras page");
        } else {
            log.debug("No overlay is present for the selected tariff in the tariff tile, in the Tariff and Extras page");
            log.debug("No overlay is present for the selected tariff in the tariff tile in the Tariff and Extras page");
        }
/*


        TariffTile = "(//div[@id='tariff-tile']/div[@id])[" + position + "]";
        List<WebElement> TariffTileOverlay = driver.findElement(By.xpath(TariffTile))
                .findElements(By.xpath("//div/div/a[@class='tariff-information-overlay-icon ng-scope']"));
        if (TariffTileOverlay.size() < 0) {
            Assert.fail("No overlay is present for the selected tariff in the tariff tile");
        } else {
            log.debug("Overlay is present for the selected tariff in the tariff tile as expected");
        }
*/
        Screenshots.captureScreenshot();
    }

    public static void verifyOverlayIconIsDisplayedUpgradePage(String Tariff) throws IOException, InterruptedException {
        log.debug('\n' + "Verify Overlay Icon Is Displayed in upgrade page");
        log.debug("Tariff for verifying overlay icon is " + Tariff);
        String TariffTile = null;
        TariffTile = "(//div[contains(@class, 'grid-tile')])[" + PositionUpgrade + "]";
        List<WebElement> TariffTileOverlay = driver.findElement(By.xpath(TariffTile))
                .findElements(By.xpath("//*[@id='qa-promotion']"));
        if (TariffTileOverlay.size() < 0) {
            Assert.fail("No overlay is present for the selected tariff in the tariff tile");
        } else {
            log.debug("Overlay is present for the selected tariff in the tariff tile as expected");
        }
        Screenshots.captureScreenshot();
    }

    public static void clickOnOverlayIconTEpage(String Tariff) throws Exception {
        log.debug("In Click on Overlay TE function");
        log.debug('\n' + "To Click On Overlay Icon TE page");
        log.debug("Tariff for verifying overlay icon is " + Tariff);

        WebElement overlayIcon = driver.findElement(By.xpath("(//div[@class='blue-promotion']//span[@class='promotion-text ng-binding'])[2]/following-sibling::a"));

        if (overlayIcon.isEnabled()) {
            ((JavascriptExecutor) driver).executeScript("arguments[0].click();", overlayIcon);
            log.debug("Clicked on the Overlay Icon");
            log.debug("Clicked on the Overlay Icon");
            Thread.sleep(3000);
        /*List<WebElement> ele = driver.findElements(By.xpath("(//h3[contains(text(),'Sony Xperia')]/following-sibling::a/../following-sibling::div)[1]/p"));
        for(int i=1;i<ele.size();i++){
          String str = driver.findElement(By.xpath("(//h3[contains(text(),'Sony Xperia')]/following-sibling::a/../following-sibling::div)[1]/p["+i+"]")).getText();
          log.debug(str);
          log.debug(str);
      }*/
        }else{
            log.debug("Failed to Click on Overlay TE function");
            log.debug("Failed to Click on Overlay TE function");
        }
        WebElement eleofClose = driver.findElement(By.xpath("(//h3[contains(text(),'Sony Xperia')]/following-sibling::a/../following-sibling::div)[1]//..//a[@class='boxclose']"));
        if(eleofClose.isEnabled()){
            ((JavascriptExecutor) driver).executeScript("arguments[0].click();", eleofClose);
        }
        /*String TariffTile = null;
        TariffTile = "(//div[@id='tariff-tile']/div[@id])[" + position + "]";
        List<WebElement> PrimaryOverlayIcon = driver.findElement(By.xpath(TariffTile))
                // .findElements(By.xpath("//div[@class='blue-promotion']/div/a[2]"));
                .findElements(By.xpath("//div[@class='blue-promotion']/div"));
        List<WebElement> SecondaryOverlayIcon = driver.findElement(By.xpath(TariffTile))
                // .findElements(By.xpath("//div[@class='blue-promotion']/div/a[2]"));
                .findElements(By.xpath("//div[@class='blue-promotion']/div"));

        String PrimaryOverlay = Filereadingutility.getPropertyValue(RunTimeFilePath, "PrimaryOverlay");
        String SecondaryOverlay = Filereadingutility.getPropertyValue(RunTimeFilePath, "SecondaryOverlay");

        if (PrimaryOverlay.equals("Y")) {
            if (PrimaryOverlayIcon.size() > 0) {
                executor.executeScript("arguments[0].click();", PrimaryOverlayIcon.get(0));
                log.debug("Clicked on primary OverlayIcon");

                Thread.sleep(5000);

                for (String winHandle : driver.getWindowHandles()) {
                    driver.switchTo().window(winHandle);
                    log.debug("Inside the overlay for the selected tariff");
                }
                Thread.sleep(5000);
				*//*
				 * log.debug("Text inside the primary overlay is :" + '\n' +
				 * driver.findElement(By
				 * .xpath("//div[contains(@class, 'overlay-box tariff-tile-info-promo-overlay')]/div/h3"
				 * )) .getText());
				 *//*
                closeOverlayIconTEpage();
            } else {
                Assert.fail("Primary Overlay Icon not present");
            }
        } else if (PrimaryOverlay.equals("N")) {
            if (PrimaryOverlayIcon.size() == 0) {
                log.debug("No Primary overlay is configured");
            } else {
                Assert.fail("Primary overlay is present though it is not configured");
            }
        }

        if (SecondaryOverlay.equals("Y")) {
            if (SecondaryOverlayIcon.size() > 0) {
                executor.executeScript("arguments[0].click();", SecondaryOverlayIcon.get(0));
                log.debug("Clicked on Secondary OverlayIcon");

                Thread.sleep(5000);

                for (String winHandle : driver.getWindowHandles()) {
                    driver.switchTo().window(winHandle);
                    log.debug("Inside the overlay for the selected tariff");
                }
				*//*
				 * log.debug("Text inside the secondary overlay is :" + '\n' +
				 * driver.findElement(By
				 * .xpath("//div[contains(@class, 'overlay-box tariff-tile-info-promo-overlay')]/div/h3"
				 * )) .getText());
				 *//*
                closeOverlayIconTEpage();
            } else {
                Assert.fail("Secondary Overlay Icon not present");
            }
        } else if (SecondaryOverlay.equals("N")) {
            if (SecondaryOverlayIcon.size() == 0) {
                log.debug("No Secondary overlay is configured");
            } else {
                Assert.fail("Secondary overlay is present though it is not configured");
            }
        }*/
        log.debug("Completed Click on Overlay TE function");
        Screenshots.captureScreenshot();
    }

    public static void clickOnOverlayIconUpgradePage(String Tariff) throws Exception {
        log.debug('\n' + "To Click On Overlay Icon in Upgrade page");
        log.debug("Tariff for verifying overlay icon is " + Tariff);

        String TariffTile = null;
        TariffTile = "(//div[contains(@class, 'grid-tile')])[" + PositionUpgrade + "]";
        List<WebElement> PrimaryOverlayIcon = driver.findElement(By.xpath(TariffTile))
                .findElements(By.xpath("//div[@id='qa-promotion']/div[1]/a"));
        List<WebElement> SecondaryOverlayIcon = driver.findElement(By.xpath(TariffTile))
                .findElements(By.xpath("//div[@id='qa-promotion']/div[2]/a"));

        String PrimaryOverlayRecommendedSection = Filereadingutility.getPropertyValue(RunTimeFilePath,
                "PrimaryOverlayRecommendedSection");
        String SecondaryOverlayRecommendedSection = Filereadingutility.getPropertyValue(RunTimeFilePath,
                "SecondaryOverlayRecommendedSection");

        if (PrimaryOverlayRecommendedSection.equals("Y")) {
            if (PrimaryOverlayIcon.size() > 0) {
                executor.executeScript("arguments[0].click();", PrimaryOverlayIcon.get(0));
                log.debug("Clicked on primary OverlayIcon");
                Thread.sleep(5000);
                for (String winHandle : driver.getWindowHandles()) {
                    driver.switchTo().window(winHandle);
                    log.debug("Inside the overlay for the selected tariff");
                }
                Thread.sleep(5000);
				/*
				 * log.debug("Text inside the primary overlay is :" + '\n' +
				 * driver.findElement(By
				 * .xpath("//div[contains(@class, 'overlay-box tariff-tile-info-promo-overlay')]/div/h3"
				 * )) .getText());
				 */
                closeOverlayIconTEpage();
            } else {
                Assert.fail("Primary Overlay Icon not present");
            }
        } else if (PrimaryOverlayRecommendedSection.equals("N")) {
            if (PrimaryOverlayIcon.size() == 0) {
                log.debug("No Primary overlay is configured");
            } else {
                Assert.fail("Primary overlay is present though it is not configured");
            }
        }

        if (SecondaryOverlayRecommendedSection.equals("Y")) {
            if (SecondaryOverlayIcon.size() > 0) {
                executor.executeScript("arguments[0].click();", SecondaryOverlayIcon.get(0));
                log.debug("Clicked on Secondary OverlayIcon");
                Thread.sleep(5000);
                for (String winHandle : driver.getWindowHandles()) {
                    driver.switchTo().window(winHandle);
                    log.debug("Inside the overlay for the selected tariff");

                }
				/*
				 * log.debug("Text inside the secondary overlay is :" + '\n' +
				 * driver.findElement(By
				 * .xpath("//div[contains(@class, 'overlay-box tariff-tile-info-promo-overlay')]/div/h3"
				 * )) .getText());
				 */
                closeOverlayIconTEpage();
            } else {
                Assert.fail("Secondary Overlay Icon not present");
            }
        } else if (SecondaryOverlayRecommendedSection.equals("N")) {
            if (SecondaryOverlayIcon.size() == 0) {
                log.debug("No Secondary overlay is configured");
            } else {
                Assert.fail("Secondary overlay is present though it is not configured");
            }
        }
        Screenshots.captureScreenshot();
    }

    public static void closeOverlayIconTEpage() throws IOException, InterruptedException {
        log.debug('\n' + "To close Overlay Icon TE page");
        List<WebElement> close = driver.findElements(By.xpath(
                "//div[contains(@class, 'overlay-box tariff-tile-info-promo-overlay')]/div/a[@class='boxclose']"));
        if (close.size() > 0) {
            executor.executeScript("arguments[0].click();", close.get(0));
            log.debug("Clicked on close button in the overlay");
        } else {
            Assert.fail("No close button present");
        }
        Screenshots.captureScreenshot();
    }

    public static void closeOverlayIconBasketpage() throws IOException, InterruptedException {
        log.debug('\n' + "To close Overlay Icon Basket page ");
        List<WebElement> closeP = driver.findElements(
                By.xpath("//div[contains(@class, 'overlay-box primary-promo-overlay')]/div/a[@class='boxclose']"));

        List<WebElement> closeS = driver.findElements(
                By.xpath("//div[contains(@class, 'overlay-box additional-promo-overlay')]/div/a[@class='boxclose']"));

        if (closeP.size() > 0) {
            executor.executeScript("arguments[0].click();", closeP.get(0));
            log.debug("Clicked on close button in the overlay");
        } else if (closeS.size() > 0) {
            executor.executeScript("arguments[0].click();", closeS.get(0));
            log.debug("Clicked on close button in the overlay");
        } else {
            Assert.fail("No close button present");
        }
        Screenshots.captureScreenshot();
    }

    public static void verifyPromotionalRibbonDisplayedBasketpage() throws IOException, InterruptedException {
        log.debug('\n' + "Verify Promotional Ribbon is Displayed in Basket page");

        WebElement primaryPramotion = driver.findElement(By.xpath("//div[@class='primary promotion']"));

        if(primaryPramotion.isDisplayed()){
            log.debug("Pramotions are displayed in the Basket page :: @ " +primaryPramotion.getText());
            log.info("Pramotions are displayed in the Basket page :: @ " +primaryPramotion.getText());
        }else{
            log.debug(" Failed t Pramotions are displayed in the Basket page");
            log.info("Failed to Pramotions are displayed in the Basket page");
            Assert.fail("Failed to Pramotions are displayed in the Basket page");
        }

        if( driver.findElements(By.xpath("//div[@class='promotion secondary']")).size() >= 1){
            WebElement secendaryPromo = driver.findElement(By.xpath("//div[@class='promotion secondary']"));
            log.debug("Pramotions are displayed in the Basket page for secondarary ::: " + secendaryPromo.getText());
            log.info("Pramotions are displayed in the Basket page for secondarary" + secendaryPromo.getText());
        }else{
            log.debug(" Failed t Pramotions are displayed in the Basket page for secondarary");
            log.info("Failed to Pramotions are displayed in the Basket pagef or secondarary");
        }



        /*String PrimaryPromotionRibbon = Filereadingutility.getPropertyValue(RunTimeFilePath,
                "PrimaryPromotionRibbon");
        String SecondaryPromotionRibbon = Filereadingutility.getPropertyValue(RunTimeFilePath,
                "SecondaryPromotionRibbon");

        if (PrimaryPromotionRibbon.equals("Y")) {
            if (pageobjects.BasketPage.PrimaryPromotion.isDisplayed()) {
                log.debug("Primary Promotion ribbon is present");
                log.debug("Text in Primary promotion ribbon is " + pageobjects.BasketPage.PrimaryPromotion.getText());
            } else {
                Assert.fail("Primary Promotion ribbon is not present");
            }
        } else if (PrimaryPromotionRibbon.equals("N")) {
            log.debug("No Primary ribbon is configured");
        }

        if (SecondaryPromotionRibbon.equals("Y")) {
            if (pageobjects.BasketPage.SecondaryPromotion.isDisplayed()) {
                log.debug("Secondary Promotion ribbon is present");
                log.debug(
                        "Text in secondary promotion ribbon is " + pageobjects.BasketPage.SecondaryPromotion.getText());
            } else {
                Assert.fail("Secondary Promotion ribbon is not present");
            }
        } else if (SecondaryPromotionRibbon.equals("N")) {
            log.debug("No Secondary ribbon is configured");
        }*/
        Screenshots.captureScreenshot();
    }

    public static void verifyOverlayIconIsDisplayedBasketpage() throws IOException, InterruptedException {
        log.debug('\n' + "Verify Overlay Icon Is Displayed in Basket page");
        if (pageobjects.BasketPage.PrimaryPromotionOverlay.isDisplayed()) {
            log.debug("Overlay icon is present in primary promotion");
        } else {
            Assert.fail("Overlay icon is not present in primary promotion");
        }
        Screenshots.captureScreenshot();
    }

    public static void clickOnOverlayIconBasketpage() throws Exception {
        log.debug('\n' + "To click On Overlay Icon in Basket page");
        verifyOverlayIconIsDisplayedBasketpage();
       /* List<WebElement> PrimaryPromotionalWrapperList = driver
                .findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]"));
        List<WebElement> SecondaryPromotionalWrapperList = driver
                .findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]"));
        List<WebElement> PrimaryPromotionOverlayList = driver
                .findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]/a"));
        List<WebElement> SecondaryPromotionOverlayList = driver
                .findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]/a"));

        String PrimaryOverlay = Filereadingutility.getPropertyValue(RunTimeFilePath, "PrimaryOverlay");
        String SecondaryOverlay = Filereadingutility.getPropertyValue(RunTimeFilePath, "SecondaryOverlay");

        if (PrimaryOverlay.equals("Y")) {
            if (PrimaryPromotionalWrapperList.size() > 0) {
                if (PrimaryPromotionalWrapperList.get(0).getAttribute("class").contains("primary promotion")) {
                    if (PrimaryPromotionOverlayList.size() > 0) {
                        executor.executeScript("arguments[0].click();", PrimaryPromotionOverlayList.get(0));
                        log.debug("Clicked on overlay icon present in primary promotion in basket page");
                        Thread.sleep(5000);
                        for (String winHandle : driver.getWindowHandles()) {
                            driver.switchTo().window(winHandle);
                            log.debug("Inside the overlay for the selected tariff");
                            log.debug("Text inside overlay is :" + '\n'
                                    + driver.findElement(By.xpath(
                                    "//div[contains(@class, 'overlay-box primary-promo-overlay')]/div/h3"))
                                    .getText());
                        }
                        Thread.sleep(5000);
                        closeOverlayIconBasketpage();
                    }
                }
            } else {
                Assert.fail("Primary Promotion ribbon is not present in basket page");
            }
        } else if (PrimaryOverlay.equals("N")) {
            if (PrimaryPromotionOverlayList.size() == 0) {
                log.debug("No Primary overlay is configured");
            } else {
                Assert.fail("Primary overlay is present though it is not configured");
            }
        }

        if (SecondaryOverlay.equals("Y")) {
            if (SecondaryPromotionalWrapperList.size() > 0 && SecondaryPromotionOverlayList.size() > 0) {
                if (SecondaryPromotionalWrapperList.get(0).getAttribute("class").contains("promotion secondary")) {
                    executor.executeScript("arguments[0].click();", SecondaryPromotionOverlayList.get(0));
                    log.debug("Clicked on overlay icon present in secondary promotion in Basket page");
                    for (String winHandle : driver.getWindowHandles()) {
                        driver.switchTo().window(winHandle);
                        log.debug("Inside the overlay for the selected tariff");
                        log.debug("Text inside overlay is :" + '\n'
                                + driver.findElement(By.xpath("//div[@class='box-header']/h3")).getText());
                    }
                    closeOverlayIconBasketpage();
                }
            } else {
                Assert.fail("Secondary Promotion ribbon is not present in basket page");
            }
        } else if (SecondaryOverlay.equals("N")) {
            if (SecondaryPromotionOverlayList.size() == 0) {
                log.debug("No Secondary overlay is configured");
            } else {
                Assert.fail("Secondary overlay is present though it is not configured");
            }
        }*/
        Screenshots.captureScreenshot();
    }

    public static void verifyPromotionalRibbonDisplayedMyPackageSection() throws IOException, InterruptedException {
        log.debug('\n' + "Verify Promotional Ribbon Displayed in MyPackage Section");
        List<WebElement> PrimaryPromotionalWrapperList = driver
                .findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]"));
        List<WebElement> SecondaryPromotionalWrapperList = driver
                .findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]"));

        String PrimaryPromotionRibbon = Filereadingutility.getPropertyValue(RunTimeFilePath,
                "PrimaryPromotionRibbon");
        String SecondaryPromotionRibbon = Filereadingutility.getPropertyValue(RunTimeFilePath,
                "SecondaryPromotionRibbon");

        if (PrimaryPromotionRibbon.equals("Y")) {
            if (PrimaryPromotionalWrapperList.size() > 0) {
                if (PrimaryPromotionalWrapperList.get(0).getAttribute("class").contains("primary promotion")) {
                    log.debug("Primary Promotion ribbon is present in My package section");
                    log.debug("Text in Primary promotion ribbon is " + PrimaryPromotionalWrapperList.get(0).getText());
                }
            } else {
                Assert.fail("Primary Promotion ribbon is not present");
            }
        } else if (PrimaryPromotionRibbon.equals("N")) {
            if (PrimaryPromotionalWrapperList.size() == 0) {
                log.debug("No primary ribbon is configured");
            } else {
                Assert.fail("Primary ribbon is present though it is not configured");
            }
        }

        if (SecondaryPromotionRibbon.equals("Y")) {
            if (SecondaryPromotionalWrapperList.size() > 0) {
                if (SecondaryPromotionalWrapperList.get(0).getAttribute("class").contains("promotion secondary")) {
                    log.debug("Secondary Promotion ribbon is present in My package section");
                    log.debug("Text in Secondary promotion ribbon is "
                            + SecondaryPromotionalWrapperList.get(0).getText());
                }
            } else {
                Assert.fail("Secondary Promotion ribbon is not present");
            }
        } else if (SecondaryPromotionRibbon.equals("N")) {
            if (SecondaryPromotionalWrapperList.size() == 0) {
                log.debug("No Secondary ribbon is configured");
            } else {
                Assert.fail("Secondary ribbon is present though it is not configured");
            }
        }
        Screenshots.captureScreenshot();
    }

    public static void verifyPromotionalRibbonDisplayedMyPackageSectionInUpgrade()
            throws IOException, InterruptedException {
        log.debug('\n' + "Verify Promotional Ribbon Displayed in MyPackage Section in upgrade");
        List<WebElement> PrimaryPromotionalWrapperList = driver
                .findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]"));
        List<WebElement> SecondaryPromotionalWrapperList = driver
                .findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]"));

        String PrimaryPromotionRibbonRecommendedSection = Filereadingutility.getPropertyValue(RunTimeFilePath,
                "PrimaryPromotionRibbonRecommendedSection");
        String SecondaryPromotionRibbonRecommendedSection = Filereadingutility
                .getPropertyValue(RunTimeFilePath, "SecondaryPromotionRibbonRecommendedSection");

        if (PrimaryPromotionRibbonRecommendedSection.equals("Y")) {
            if (PrimaryPromotionalWrapperList.size() > 0) {
                if (PrimaryPromotionalWrapperList.get(0).getAttribute("class").contains("primary promotion")) {
                    log.debug("Primary Promotion ribbon is present in My package section");
                    log.debug("Text in Primary promotion ribbon is " + PrimaryPromotionalWrapperList.get(0).getText());
                }
            } else {
                Assert.fail("Primary Promotion ribbon is not present");
            }
        } else if (PrimaryPromotionRibbonRecommendedSection.equals("N")) {
            if (PrimaryPromotionalWrapperList.size() == 0) {
                log.debug("No primary ribbon is configured");
            } else {
                Assert.fail("Primary ribbon is present though it is not configured");
            }
        }

        if (SecondaryPromotionRibbonRecommendedSection.equals("Y")) {
            if (SecondaryPromotionalWrapperList.size() > 0) {
                if (SecondaryPromotionalWrapperList.get(0).getAttribute("class").contains("promotion secondary")) {
                    log.debug("Secondary Promotion ribbon is present in My package section");
                    log.debug("Text in Secondary promotion ribbon is "
                            + SecondaryPromotionalWrapperList.get(0).getText());
                }
            } else {
                Assert.fail("Secondary Promotion ribbon is not present");
            }
        } else if (SecondaryPromotionRibbonRecommendedSection.equals("N")) {
            if (SecondaryPromotionalWrapperList.size() == 0) {
                log.debug("No Secondary ribbon is configured");
            } else {
                Assert.fail("Secondary ribbon is present though it is not configured");
            }
        }
        Screenshots.captureScreenshot();
    }

    public static void clickOnOverlayIconMyPackageSection() throws Exception {
        log.debug('\n' + "To click On Overlay Icon in MyPackage Section");
        log.debug("Successfully we are clicking the Overylay Icon");

       /* List<WebElement> PrimaryPromotionalWrapperList = driver
                .findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]"));
        List<WebElement> SecondaryPromotionalWrapperList = driver
                .findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]"));
        List<WebElement> PrimaryPromotionOverlayList = driver
                .findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]/a"));
        List<WebElement> SecondaryPromotionOverlayList = driver
                .findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]/a"));

        String PrimaryOverlay = Filereadingutility.getPropertyValue(RunTimeFilePath, "PrimaryOverlay");
        String SecondaryOverlay = Filereadingutility.getPropertyValue(RunTimeFilePath, "SecondaryOverlay");

        if (PrimaryOverlay.equals("Y")) {
            if (PrimaryPromotionalWrapperList.size() > 0) {
                if (PrimaryPromotionOverlayList.size() > 0) {
                    executor.executeScript("arguments[0].click();", PrimaryPromotionOverlayList.get(0));
                    log.debug("Clicked on overlay icon present in primary promotion in My package section");
                    Thread.sleep(5000);
                    for (String winHandle : driver.getWindowHandles()) {
                        driver.switchTo().window(winHandle);
                        log.debug("Inside the overlay for the selected tariff");
                        log.debug("Text inside overlay is :" + '\n'
                                + driver.findElement(
                                By.xpath("//div[contains(@class, 'overlay-box primary-promo-overlay')]/div/h3"))
                                .getText());
                    }
                    Thread.sleep(5000);
                    closeOverlayIconBasketpage();
                }
            } else {
                Assert.fail("Primary Promotion ribbon is not present");
            }
        } else if (PrimaryOverlay.equals("N")) {
            if (PrimaryPromotionOverlayList.size() == 0) {
                log.debug("No Primary overlay is configured");
                log.debug("No Primary overlay is configured");
            } else {
                Assert.fail("Primary overlay is present though it is not configured");
            }
        }

        if (SecondaryOverlay.equals("Y")) {
            if (SecondaryPromotionalWrapperList.size() > 0 && SecondaryPromotionOverlayList.size() > 0) {
                if (SecondaryPromotionalWrapperList.get(0).getAttribute("class").contains("promotion secondary")) {
                    executor.executeScript("arguments[0].click();", SecondaryPromotionOverlayList.get(0));
                    log.debug("Clicked on overlay icon present in secondary promotion in My package section");
                    Thread.sleep(5000);
                    for (String winHandle : driver.getWindowHandles()) {
                        driver.switchTo().window(winHandle);
                        log.debug("Inside the overlay for the selected tariff");
                        log.debug("Text inside overlay is :" + '\n'
                                + driver.findElement(By.xpath("//div[@class='box-header']/h3")).getText());
                    }
                    Thread.sleep(5000);
                    closeOverlayIconBasketpage();
                }
            } else {
                Assert.fail("Secondary Promotion ribbon is not present");
            }
        } else if (SecondaryOverlay.equals("N")) {
            if (SecondaryPromotionOverlayList.size() == 0) {
                log.debug("No Secondary overlay is configured");
            } else {
                Assert.fail("Secondary overlay is present though it is not configured");
            }

        }*/
        Screenshots.captureScreenshot();
    }

    public static void clickOnOverlayIconMyPackageSectionUpgrade() throws Exception {
        log.debug('\n' + "To click On Overlay Icon in MyPackage Section");

        List<WebElement> PrimaryPromotionalWrapperList = driver
                .findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]"));
        List<WebElement> SecondaryPromotionalWrapperList = driver
                .findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]"));
        List<WebElement> PrimaryPromotionOverlayList = driver
                .findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[1]/a"));
        List<WebElement> SecondaryPromotionOverlayList = driver
                .findElements(By.xpath("//div[@class='data-qa-promotion promotion-wrapper']/div[2]/a"));

        String PrimaryOverlayRecommendedSection = Filereadingutility.getPropertyValue(RunTimeFilePath,
                "PrimaryOverlayRecommendedSection");
        String SecondaryOverlayRecommendedSection = Filereadingutility.getPropertyValue(RunTimeFilePath,
                "SecondaryOverlayRecommendedSection");

        if (PrimaryOverlayRecommendedSection.equals("Y")) {
            if (PrimaryPromotionalWrapperList.size() > 0) {
                if (PrimaryPromotionOverlayList.size() > 0) {
                    executor.executeScript("arguments[0].click();", PrimaryPromotionOverlayList.get(0));
                    log.debug("Clicked on overlay icon present in primary promotion in My package section");
                    Thread.sleep(5000);
                    for (String winHandle : driver.getWindowHandles()) {
                        driver.switchTo().window(winHandle);
                        log.debug("Inside the overlay for the selected tariff");
                        log.debug("Text inside overlay is :" + '\n'
                                + driver.findElement(
                                By.xpath("//div[contains(@class, 'overlay-box primary-promo-overlay')]/div/h3"))
                                .getText());
                    }
                    Thread.sleep(5000);
                    closeOverlayIconBasketpage();
                }
            } else {
                Assert.fail("Primary Promotion ribbon is not present");
            }
        } else if (PrimaryOverlayRecommendedSection.equals("N")) {
            if (PrimaryPromotionOverlayList.size() == 0) {
                log.debug("No Primary overlay is configured");
            } else {
                Assert.fail("Primary overlay is present though it is not configured");
            }
        }

        if (SecondaryOverlayRecommendedSection.equals("Y")) {
            if (SecondaryPromotionalWrapperList.size() > 0 && SecondaryPromotionOverlayList.size() > 0) {
                if (SecondaryPromotionalWrapperList.get(0).getAttribute("class").contains("promotion secondary")) {
                    executor.executeScript("arguments[0].click();", SecondaryPromotionOverlayList.get(0));
                    log.debug("Clicked on overlay icon present in secondary promotion in My package section");
                    Thread.sleep(10000);
                    for (String winHandle : driver.getWindowHandles()) {
                        driver.switchTo().window(winHandle);
                        log.debug("Inside the overlay for the selected tariff");
                        Thread.sleep(3000);
                        log.debug("Text inside overlay is :" + '\n'
                                + driver.findElement(By.xpath(
                                "//div[contains(@class, 'overlay-box additional-promo-overlay')]/div/h3"))
                                .getText());
                    }
                    Thread.sleep(5000);
                    closeOverlayIconBasketpage();
                }
            } else {
                Assert.fail("Secondary Promotion ribbon is not present");
            }
        } else if (SecondaryOverlayRecommendedSection.equals("N")) {
            if (SecondaryPromotionOverlayList.size() == 0) {
                log.debug("No Secondary overlay is configured");
            } else {
                Assert.fail("Secondary overlay is present though it is not configured");
            }

        }
        Screenshots.captureScreenshot();
    }

    public static void RecyclesectionDisplayed() throws InterruptedException, IOException {
        // pageobjects.UpgradeCustomerPage.RecycleWidget.click();
        Thread.sleep(8000);
        if (driver.findElement(By.xpath("//*[@id='newRecycleOptionsTile']")).isDisplayed()) {
            log.debug("Upgrade and Recycle options is displayed");
            Thread.sleep(4000);
            scrollToAnElement.scrollToElement(driver.findElement(By.xpath("//*[@id='newRecycleOptionsTile']")));
            Screenshots.captureScreenshot();
            // driver.findElement(By.xpath("//*[@id='newRecycleOptionsTile']//*[@ng-click='selectRecycleDevice();']/span")).click();
            JavascriptExecutor executor = (JavascriptExecutor) driver;
            executor.executeScript("arguments[0].click();", driver.findElement(By.xpath("//div[@class='recycle-device not-your-device-box']/a/span")));

            log.debug("Clicked on the choose your device link");
        } else {
            Assert.fail("Unable to verify recycle options");
        }
        Screenshots.captureScreenshot();
    }

    public static void SelectRecycleContinueToUpgrade() throws IOException, InterruptedException {
        // Clicking on Recycle and get up to £54.00 credit
        log.debug("in Select recycle an continue to upgrade function");
        driver.findElement(By.id("recycleCredit")).click();
        log.debug("Clicked on Radio button next to Recycle and get up to XXXX credit");
        Thread.sleep(3000);
        //driver.findElement(By.xpath("//button[contains(text(),'upgrade now')]")).click();
        JavascriptExecutor executor = (JavascriptExecutor) driver;
        executor.executeScript("arguments[0].click();", driver.findElement(By.xpath("//button[contains(text(),'upgrade now')] | //button[contains(text(),'Continue to upgrade')]")));
        Thread.sleep(3000);

        log.debug("Clicked on upgrade now button");
        Screenshots.captureScreenshot();
    }

    public static void SelectRecycleAndCClickAccurateQuote() throws IOException, InterruptedException {

        log.debug("in Select recycle an continue to upgrade function");
        driver.findElement(By.id("recycleCredit")).click();
        log.debug("Clicked on Radio button next to Recycle and get up to XXXX credit");
        scrollToAnElement.scrollToElement(driver.findElement(By.id("recycleCredit")));
        Screenshots.captureScreenshot();
        Thread.sleep(5000);
        //driver.findElement(By.xpath("//button[contains(text(),'upgrade now')]")).click();
        JavascriptExecutor executor = (JavascriptExecutor) driver;
        executor.executeScript("arguments[0].click();", pageobjects.UpgradeCustomerPage.GetAccurateQuote);
        Thread.sleep(3000);

        log.debug("Clicked on 'Yes, get an accurate quote' button");

    }

    public static void selectTariff() throws IOException, InterruptedException {
        log.debug("In Select Tariff function");
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();",
                driver.findElement(By.xpath("(//button[@id='callToAction'])[2]")));

        log.debug("Completed Select Tariff function");
        Screenshots.captureScreenshot();
    }

    public static void yourSim() {
        try {
            log.debug("In your Sim Section");
            log.debug("Choosing need new sim");
            WebElement needNewSimRadio = driver.findElement(By.xpath("//input[@id='needNewSim']"));
            ((JavascriptExecutor) driver).executeScript("arguments[0].click();", needNewSimRadio);
            log.debug("Selected need new sim radio button");
            Screenshots.captureScreenshot();
            driver.findElement(By.xpath("//*[@id='confirmSim']")).click();
            log.debug("Completed your sim  function");
            Thread.sleep(3000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug("Unable to click on element " + e.getStackTrace());
        }

    }

    public static void addAndGoToBasket() throws IOException, InterruptedException {
        log.debug("In addAndGoToBasket Section");

        WebElement simNotRequire = driver.findElement(By.xpath("//input[@id='noNeedNewSim']"));
        WebElement clickonCofirmSim = driver.findElement(By.xpath("//button[@id='confirmSim']"));

        if(simNotRequire.isEnabled()){
            ((JavascriptExecutor) driver).executeScript("arguments[0].click();", simNotRequire);
            Thread.sleep(2000);
            ((JavascriptExecutor) driver).executeScript("arguments[0].click();", clickonCofirmSim);
            Screenshots.captureScreenshot();
        }

        Thread.sleep(3000 );

        // driver.findElement(By.xpath("//*[@id='qa-proceed-to-basket']")).click();
        WebElement BasketButton = driver.findElement(By.xpath("//*[@id='qa-proceed-to-basket']"));
        scrollToAnElement.scrollToElement(BasketButton);
        Screenshots.captureScreenshot();
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", BasketButton);
        log.debug("Completed AddandGotoBasket Section");
        Thread.sleep(3000);
        Screenshots.captureScreenshot();

    }

    public static void Otac(String arg) throws IOException, InterruptedException {
        Thread.sleep(4000);
        log.debug("In OTAC page");
        if (arg.contains("skip")) {
            log.debug("Skipping OTAC entry to verify account");
            Thread.sleep(3000);
            WebElement element = UpgradeCustomerPage.skipThisStep_OTAC;
            JavascriptExecutor executor = (JavascriptExecutor)driver;
            executor.executeScript("arguments[0].click();", element);
            Thread.sleep(2000);

            log.debug("Clicked on skip this step");
            log.debug("Skipped OTAC entry step to verify account");
        }
        if (arg.contains("enterCode")) {
            log.debug("Entering OTAC to verify account");
            Thread.sleep(3000);
            WebElement element = UpgradeCustomerPage.sendCode_OTAC;
            JavascriptExecutor executor = (JavascriptExecutor)driver;
            executor.executeScript("arguments[0].click();", element);
            Thread.sleep(4000);
            log.debug("Clicked on Send Code button");

            pageobjects.UpgradeCustomerPage.enterCode_OTAC.sendKeys("999999");
            Thread.sleep(2000);
            log.debug("Entered OTAC code 999999 successfully");

            WebElement element1 = UpgradeCustomerPage. submitCode_OTAC;
            executor.executeScript("arguments[0].click();", element1);
            Thread.sleep(5000);

        } else
            log.debug("The Delivery page is displayed");
        Screenshots.captureScreenshot();
    }

    public static void NotYourDevice() throws InterruptedException, IOException {
        // pageobjects.UpgradeCustomerPage.RecycleWidget.click();
        Thread.sleep(8000);
        log.debug("in not your device function");
        FluentWait<WebDriver> wait = new FluentWait<WebDriver>(driver);
        wait.pollingEvery(250, TimeUnit.MILLISECONDS);
        wait.withTimeout(2, TimeUnit.SECONDS);
        Function<WebDriver, Boolean> function = new Function<WebDriver, Boolean>() {
            public Boolean apply(WebDriver arg0) {

                JavascriptExecutor js = (JavascriptExecutor) driver;
                WebElement notMyDevice = arg0
                        .findElement(By.xpath("//div[@class='recycle-device not-your-device-box']/a"));
                js.executeScript("arguments[0].click();", notMyDevice);

                return notMyDevice.isEnabled();
            }
        };
        wait.until(function);
        Thread.sleep(5000);
        log.debug("Clicked on the Not your device link");
        Screenshots.captureScreenshot();

    }

    public static void SelectMakeModelandNetwork(String Make, String Model, String Network)
            throws InterruptedException, IOException {
        JavascriptExecutor js = (JavascriptExecutor) driver;

        if (Make.contains("Apple")) {
            WebElement Make1 = pageobjects.UpgradeCustomerPage.Make;
            js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Make1);
            new Select(Make1).selectByVisibleText("Apple");
            Thread.sleep(6000);
            log.debug("Selected Apple as Make");
            log.debug("Selected Apple as Make");

            // Validating for models
            if (Model.contains("Iphone7")) {
                log.debug("in selecting model");
                WebElement Model1 = pageobjects.UpgradeCustomerPage.Model;
                js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Model1);
                new Select(Model1).selectByVisibleText("iPhone 7 32GB");
                Thread.sleep(6000);
                log.debug("Selected model completed");

                // Validating for Network
                if (Network.contains("Orange")) {
                    log.debug("in selecting Network");
                    WebElement Network1 = pageobjects.UpgradeCustomerPage.Network;
                    js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Network1);
                    new Select(Network1).selectByVisibleText("Orange");
                    log.debug("Selected Orange completed");
                } else if (Network.contains("EE")) {
                    WebElement Network1 = pageobjects.UpgradeCustomerPage.Network;
                    js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Network1);
                    new Select(Network1).selectByVisibleText("EE");
                }

            }
            if (Model.contains("Iphone6S")) {
                WebElement Model1 = pageobjects.UpgradeCustomerPage.Model;
                js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Model1);
                new Select(Model1).selectByVisibleText("iPhone 6S 32GB");
                Thread.sleep(3000);

                // Validating for Network
                if (Network.contains("Orange")) {
                    WebElement Network1 = pageobjects.UpgradeCustomerPage.Network;
                    js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Network1);
                    new Select(Network1).selectByVisibleText("Orange");
                } else if (Network.contains("EE")) {
                    WebElement Network1 = pageobjects.UpgradeCustomerPage.Network;
                    js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Network1);
                    new Select(Network1).selectByVisibleText("EE");
                }

            }
        }
        Screenshots.captureScreenshot();
    }

    public static void updateDeviceButton() throws InterruptedException, IOException {
        log.debug("Going to click updateDeviceButton button");
        pageobjects.UpgradeCustomerPage.UpdateDevice.click();
        Thread.sleep(4000);
        log.debug("Completed updateDeviceButton function");
        Screenshots.captureScreenshot();
    }

    public static void refundableOptionSelect() throws InterruptedException, IOException {
        log.debug("Going to click refundableOptionSelect button");
        pageobjects.UpgradeCustomerPage.RefundableOptionbyCredit.click();
        Thread.sleep(4000);
        log.debug("Selected refundable by credit option");
		/*
		 * pageobjects.UpgradeCustomerPage.ContinuetoUpgrade.click();
		 * log.debug("Selected continue to upgrade button");
		 */
        log.debug("Completed refundableOptionSelect function");
        Screenshots.captureScreenshot();

    }

    public static boolean VerifyAccurateQuotedisplay() throws InterruptedException, IOException {
        log.debug("Going to verify VerifyAccurateQuotedisplay function");
        String accurateText=pageobjects.UpgradeCustomerPage.GetAccurateQuoteSectionDisplay.getText();
        log.debug("Completed verify VerifyAccurateQuotedisplay function :: "+accurateText);
        Thread.sleep(4000);
        Screenshots.captureScreenshot();
        return true;

    }

    public static void getAccurateQuote() throws InterruptedException, IOException {
        log.debug("Going to enter getAccurateQuote function");
        Thread.sleep(4000);
        pageobjects.UpgradeCustomerPage.GetAccurateQuote.click();
        log.debug("Clicked on 'yes, get accurate quote' under 'is your damaged section?' ");
        Thread.sleep(4000);
        Screenshots.captureScreenshot();
    }

    public static void questionnaire() throws InterruptedException, IOException {
        JavascriptExecutor js = (JavascriptExecutor) driver;

        // Set<String> handle= driver.getWindowHandles();//Return a set of
        // window handle.swi
        for (String handle : driver.getWindowHandles()) {

            driver.switchTo().window(handle);
        }
        Thread.sleep(4000);
        log.debug(driver.findElement(By.xpath("//*[@id='redeem-questionnaire']/p[@class='info']")).getText());

        // Select first questionnaire - Is your phone fully functional
        WebElement Question0 = driver
                .findElement(By.xpath("//select[@id='question0'][@class='select-questionnaire ng-pristine ng-valid']"));
        js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Question0);
        new Select(Question0).selectByValue("0");
        Thread.sleep(8000);

        // Select Second questionaire - Does your phone have any damage
        WebElement Question1 = driver
                .findElement(By.xpath("//select[@id='question1'][@class='select-questionnaire ng-pristine ng-valid']"));
        js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Question1);
        new Select(Question1).selectByValue("0");

        // Select Third questionaire - Could your phone be water damaged
        WebElement Question2 = driver
                .findElement(By.xpath("//select[@id='question2'][@class='select-questionnaire ng-pristine ng-valid']"));
        js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Question2);
        new Select(Question2).selectByValue("0");

        // Select Second questionaire - Remove icloud from device
        WebElement Question3 = driver
                .findElement(By.xpath("//select[@id='question3'][@class='select-questionnaire ng-pristine ng-valid']"));
        js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Question3);
        new Select(Question3).selectByValue("0");

        driver.findElement(By.id("continue-with-accurate-quote")).click();
        log.debug("Completed questionaire");

        Thread.sleep(8000);
        Screenshots.captureScreenshot();
    }

    //////////////////////////////////// September
    //////////////////////////////////// Release///////////////////////////////////////////////

    public static void DisplayYourSimCardSection() throws Exception {

        log.debug('\n' + "Validate Your Sim section is displayed");

        if (pageobjects.UpgradeCustomerPage.YourSimHeading.isDisplayed()) {
            log.debug(
                    "The Your sim section is displayed" + pageobjects.UpgradeCustomerPage.YourSimHeading.getText());
            log.debug("The Your sim section is displayed");
        } else
            log.debug("The Your sim section us not diplayed");

        Screenshots.captureScreenshot();

    }

    public static void RadioButtonNotSelectedByDefault() throws Exception {

        log.debug('\n' + "Validate Your No option is selected by default");

        boolean actualValue = UpgradeCustomerPage.NeedNewSimRadioButton.isSelected();
        boolean actualValue1 = UpgradeCustomerPage.DontNeedNewSimRadioButton.isSelected();
        if ((actualValue && actualValue1) != true) {
            log.debug("Radio button is not selected");
            log.debug("Radio button is not selected by default");
        } else {
            log.debug("Radio button is selected by default");
        }
        Screenshots.captureScreenshot();
    }

    public static void ConfirmButtonNotDisplayed() throws Exception {

        log.debug('\n' + "Validate Confirm button not displayed");

        String YourSimSectionContainer = UpgradeCustomerPage.YourSimSection.getText();
        log.debug(YourSimSectionContainer);
        boolean ConfimNotDisplayed = YourSimSectionContainer.contains("Confirm");
        if (ConfimNotDisplayed == false) {
            log.debug("Confirm button is not displayed");

        } else {
            log.debug("Confirm button is displayed");

        }
        Screenshots.captureScreenshot();
    }

    public static void YourSimSectionCopyText() throws Exception {

        String YouSimCopyText = UpgradeCustomerPage.YourSimSectionCopyText.getText();
        log.debug(YouSimCopyText);
        String ActualCopy = ("You'll need a nano sim to use your new device." + System.lineSeparator()
                + "Your current sim might already be a nano sim. If it is, you can just pop it straight into your new device. It's the quickest and easiest way to get set up."
                + System.lineSeparator()
                + "If your current sim isn't a nano sim, you'll need a new one. Tick 'I need a new sim' and we'll send you one with your device. Then just fill out the sim swap form when it arrives.");
        log.debug(ActualCopy);
        if (YouSimCopyText.equals(ActualCopy))

        {
            log.debug("The valid copytext is displayed" + YouSimCopyText);
            log.debug("The valid copytext is displayed");
        } else {
            log.debug("The valid copytext is not displayed");
        }
        Screenshots.captureScreenshot();

    }

    public static void TwoOptionsDisplayed() throws Exception {

        String OptOne = UpgradeCustomerPage.YourSimOptionsOne.getText();
        String OptTwo = UpgradeCustomerPage.YourSimOptionsTwo.getText();
        if (UpgradeCustomerPage.YourSimOptionsOne.isDisplayed()
                && UpgradeCustomerPage.YourSimOptionsTwo.isDisplayed()) {
            System.out.printf("The Two Options are displayed" + '\n', OptOne);
            log.debug(OptTwo);
        } else {
            log.debug("The two options are not displayed");
        }
        Screenshots.captureScreenshot();

    }

    public static void SimSwapLinkDisplayed() throws Exception {

        if (UpgradeCustomerPage.SimSwaplink.isDisplayed()) {
            log.debug("The Sim Swap link is displayed");
            log.debug("The Sim Swap link is displayed");
        } else {
            log.debug("The Sim Swap form link is displayed");
            log.debug("The Sim Swap form link is displayed");
        }
        Screenshots.captureScreenshot();

    }

    public static void ClickOnSimSwapLink() throws Exception {

        UpgradeCustomerPage.SimSwaplink.click();
        Thread.sleep(2000);

        // driver.close();
        for (String winHandle : driver.getWindowHandles()) {
            driver.switchTo().window(winHandle);
        }

        String simswapurl = driver.getCurrentUrl();
        log.debug(simswapurl);
        if (simswapurl.contains("swapmysim")) {
            log.debug("The Swap you sim page is displayed");

        } else {

            log.debug("The Swap my sim page is not displayed");
        }
        driver.close();
        Thread.sleep(2000);
        for (String winHandle : driver.getWindowHandles()) {
            driver.switchTo().window(winHandle);
        }
        log.debug(driver.getCurrentUrl());
        Screenshots.captureScreenshot();

    }

    public static void ClickIneedAsim() throws Exception {

        if (UpgradeCustomerPage.IneedAsimRadio.isDisplayed()) {
            Thread.sleep(6000);
            UpgradeCustomerPage.IneedAsimRadio.click();
            log.debug("The I need a sim radio button is clicked");
        }
        Screenshots.captureScreenshot();
       // Screenshots.captureScreenshot(Hooks.directoryName);
    }


    public static void ConfirmCTADisplayed() throws Exception {

        if (UpgradeCustomerPage.ConfirmCTA.isDisplayed()) {
            log.debug("The Confirm CTA is displayed");
        } else {
            log.debug("The Confirm CTA is not displayed");
        }
        Screenshots.captureScreenshot();
        //Screenshots.captureScreenshot(Hooks.directoryName);
    }

    public static void ClickConfirmCTADisplayed() throws Exception {

        if (UpgradeCustomerPage.ConfirmCTA.isDisplayed()) {
            UpgradeCustomerPage.ConfirmCTA.click();
            log.debug("The Confirm CTA is clicked");
        }
        Thread.sleep(3000);
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,150)", "");
        Screenshots.captureScreenshot();
       // Screenshots.captureScreenshot(Hooks.directoryName);
    }

    public static void ClickIdontneedAsim() throws Exception {

        if (UpgradeCustomerPage.IdontNeedSimRadio.isDisplayed()) {
            WebElement element = pageobjects.UpgradeCustomerPage.IdontNeedSimRadio;
            JavascriptExecutor executor = (JavascriptExecutor) driver;
            executor.executeScript("arguments[0].click();", element);
            //UpgradeCustomerPage.IdontNeedSimRadio.click();
            log.debug("The I need a sim radio button is clicked");
        }
        Screenshots.captureScreenshot();

    }

    public static void clickTakeOfferAndUpgrade() throws IOException, InterruptedException {
        log.debug("Going to click on Take Offer and Upgrade");
        Screenshots.captureScreenshot();
        if (UpgradeCustomerPage.TakeOfferAndUpgrade.size() > 0) {

            UpgradeCustomerPage.TakeOfferAndUpgrade.get(0).click();
        } else {
            log.debug("Take offer and upgrade button is not present or enabled");
        }

    }

    public static void selectTariffFromRecommendedSection() throws IOException, InterruptedException {
        log.debug("Going to select tariff from recommended section");
        Screenshots.captureScreenshot();
        executor.executeScript("arguments[0].click();", UpgradeCustomerPage.RandomTariffUpgrade);

    }

    public static int verifyBuyOutDisplayedInMyPackage() throws IOException, InterruptedException {
        log.debug("verifyBuyOutDisplayedInMyPackage");

        String AcText = null, Actcost1 = null, Actcost2 = null, tmpcost1 = null, tmpcost2 = null;
        int a = 0;
        int b = 0;

        AcText = UpgradeCustomerPage.BuyoutTextMyPkg.getText();
        Actcost1 = UpgradeCustomerPage.BuyoutCost1MyPkg.getText();
        Actcost2 = UpgradeCustomerPage.BuyoutCost2MyPkg.getText();
        log.debug("Left to Pay Value: " + Actcost1);
        log.debug("Buy out Amount: " + Actcost2);

        Screenshots.captureScreenshot();

        tmpcost1 = org.apache.commons.lang3.StringUtils.substringBetween(Actcost1, "£", ".");
        a = NumberUtils.toInt(tmpcost1);
        tmpcost2 = org.apache.commons.lang3.StringUtils.substringBetween(Actcost2, "£", ".");
        b = NumberUtils.toInt(tmpcost2);

        if (AcText.contains("Upgrade on us")) {
            log.debug("Buy out offer text is displayed as expected: " + AcText);
        } else {
            log.debug("Buy out offer text is not displayed as expected: " + AcText);
            Assert.fail("Buy out offer text is not displayed as expected");
        }
        if (a == b) {
            log.debug("Buy out values are matching: " + ", Left To Pay: " + a + ", Buy Out Amount: " + b);
        } else {
            log.debug("Buy out values are not matching: " + ", Left To Pay: " + a + ", Buy Out Amount: " + b);
            Assert.fail("Buy out values are not matching");
        }
        if (Actcost2.contains("-")) {
            log.debug("Buy Out Amount contains negative value: " + Actcost2);

        } else {
            log.debug("Buy Out Amount does not contain negative value: " + Actcost2);
            Assert.fail("Buy Out Amount does not contain negative value");
        }
        Screenshots.captureScreenshot();
        return a;
    }

    public static int verifyTradeInDisplayedInMyPackage() throws IOException, InterruptedException {
        log.debug("verifyTradeInDisplayedInMyPackage");

        String AcText = null, Actcost1 = null, Actcost2 = null, tmpcost1 = null, tmpcost2 = null;
        int a = 0;
        int b = 0;

        AcText = UpgradeCustomerPage.TradeInTextMyPkg.getText();
        Actcost1 = UpgradeCustomerPage.TradeInCost1MyPkg.getText();
        Actcost2 = UpgradeCustomerPage.TradeInCost2MyPkg.getText();
        log.debug("Left to Pay Value: " + Actcost1);
        log.debug("TradeIn Amount: " + Actcost2);
        Screenshots.captureScreenshot();

        tmpcost1 = org.apache.commons.lang3.StringUtils.substringBetween(Actcost1, "£", ".");
        a = NumberUtils.toInt(tmpcost1);
        tmpcost2 = org.apache.commons.lang3.StringUtils.substringBetween(Actcost2, "£", ".");
        b = NumberUtils.toInt(tmpcost2);

        if (AcText.contains("Upgrade on us")) {
            log.debug("TradeIn offer text is displayed as expected: " + AcText);
        } else {
            log.debug("TradeIn offer text is not displayed as expected: " + AcText);
            Assert.fail("TradeIn offer text is not displayed as expected");
        }
        if (a == b) {
            log.debug("TradeIn values are matching: " + ", Left To Pay: " + a + ", TradeIn Amount: " + b);
        } else {
            log.debug("TradeIn values are not matching: " + ", Left To Pay: " + a + ", TradeIn Amount: " + b);
            Assert.fail("TradeIn values are not matching");
        }
        if (Actcost2.contains("-")) {
            log.debug("TradeIn Amount contains negative value: " + Actcost2);

        } else {
            log.debug("TradeIn Amount does not contain negative value: " + Actcost2);
            Assert.fail("TradeIn Amount does not contain negative value");
        }
        Screenshots.captureScreenshot();
        return a;
    }

    public static void verifyBuyOutDisplayedInBasketPage(int BouOutValueFromMyPackageSection) throws IOException, InterruptedException {
        log.debug("verifyBuyOutDisplayedInBasketPage");
        String AcText = null, Actcost1 = null, Actcost2 = null, tmpcost1 = null, tmpcost2 = null;
        int a = 0;
        int b = 0;
        int BouOutValue_FromMyPackageSection = BouOutValueFromMyPackageSection;

        scrollToAnElement.scrollToElement(UpgradeCustomerPage.BuyOutTextBasketPage);
        Screenshots.captureScreenshot();
        AcText = UpgradeCustomerPage.BuyOutTextBasketPage.getText();
        Actcost1 = UpgradeCustomerPage.BuyOutCost1BasketPage.getText();
        Actcost2 = UpgradeCustomerPage.BuyOutCost2BasketPage.getText();

        log.debug("Left to Pay Value: " + Actcost1);
        log.debug("Buy out Amount: " + Actcost2);

        tmpcost1 = org.apache.commons.lang3.StringUtils.substringBetween(Actcost1, "£", ".");
        a = NumberUtils.toInt(tmpcost1);
        tmpcost2 = org.apache.commons.lang3.StringUtils.substringBetween(Actcost2, "£", ".");
        b = NumberUtils.toInt(tmpcost2);

        if (AcText.contains("Upgrade on us")) {
            log.debug("Buy out offer text is displayed as expected: " + AcText);
        } else {
            log.debug("Buy out offer text is not displayed as expected: " + AcText);
            Assert.fail("Buy out offer text is not displayed as expected");
        }
        if (a == b) {
            log.debug("Buy out values are matching: " + ", Left To Pay: " + a + ", Buy Out Amount: " + b);
        } else {
            log.debug("Buy out values are not matching: " + ", Left To Pay: " + a + ", Buy Out Amount: " + b);
            Assert.fail("Buy out values are not matching");
        }
        if (Actcost2.contains("-")) {
            log.debug("Buy Out Amount contains negative value: " + Actcost2);

        } else {
            log.debug("Buy Out Amount does not contain negative value: " + Actcost2);
            Assert.fail("Buy Out Amount does not contain negative value");
        }
        if (b == BouOutValue_FromMyPackageSection) {
            log.debug("Buy out value from Basket Page is matching with the BoyOut value from MyPackage Section: " + ", Boy Out Value from My Package Section: " + BouOutValue_FromMyPackageSection + ", Buy Out Amount from Basket Page: " + b);
        } else {
            log.debug("Buy out value from Basket Page is not matching with the BoyOut value from MyPackage Section: " + ", Boy Out Value from My Package Section: " + BouOutValue_FromMyPackageSection + ", Buy Out Amount from Basket Page: " + b);
            Assert.fail("Buy out values from MyPackage Section and Basket Page are not matching");
        }

        Screenshots.captureScreenshot();
    }

    public static void verifyTradeInDisplayedInBasketPage(int TradeInValueFromMyPackageSection) throws IOException, InterruptedException {
        log.debug("verifyTradeInDisplayedInBasketPage");
        String AcText = null, Actcost1 = null, Actcost2 = null, tmpcost1 = null, tmpcost2 = null;
        int a = 0;
        int b = 0;
        int TradeInValue_FromMyPackageSection = TradeInValueFromMyPackageSection;

        scrollToAnElement.scrollToElement(UpgradeCustomerPage.TradeInTextBasketPage);

        Screenshots.captureScreenshot();
        AcText = UpgradeCustomerPage.TradeInTextBasketPage.getText();
        Actcost1 = UpgradeCustomerPage.TradeInCost1BasketPage.getText();
        Actcost2 = UpgradeCustomerPage.TradeInCost2BasketPage.getText();

        log.debug("Left to Pay Value: " + Actcost1);
        log.debug("TradeIn Amount: " + Actcost2);

        tmpcost1 = org.apache.commons.lang3.StringUtils.substringBetween(Actcost1, "£", ".");
        a = NumberUtils.toInt(tmpcost1);
        tmpcost2 = org.apache.commons.lang3.StringUtils.substringBetween(Actcost2, "£", ".");
        b = NumberUtils.toInt(tmpcost2);

        if (AcText.contains("Upgrade on us")) {
            log.debug("TradeIn offer text is displayed as expected: " + AcText);
        } else {
            log.debug("TradeIn offer text is not displayed as expected: " + AcText);
            Assert.fail("TradeIn offer text is not displayed as expected");
        }
        if (a == b) {
            log.debug("TradeIn values are matching: " + ", Left To Pay: " + a + ", TradeIn Amount: " + b);
        } else {
            log.debug("TradeIn values are not matching: " + ", Left To Pay: " + a + ", TradeIn Amount: " + b);
            Assert.fail("TradeIn values are not matching");
        }
        if (Actcost2.contains("-")) {
            log.debug("TradeIn Amount contains negative value: " + Actcost2);

        } else {
            log.debug("TradeIn Amount does not contain negative value: " + Actcost2);
            Assert.fail("TradeIn Amount does not contain negative value");
        }
        if (b == TradeInValue_FromMyPackageSection) {
            log.debug("TradeIn value from Basket Page is matching with the TradeIn value from MyPackage Section: " + ", TradeIn Value from My Package Section: " + TradeInValue_FromMyPackageSection + ", TradeIn Amount from Basket Page: " + b);
        } else {
            log.debug("TradeIn value from Basket Page is not matching with the TradeIn value from MyPackage Section: " + ", TradeIn Value from My Package Section: " + TradeInValue_FromMyPackageSection + ", TradeIn Amount from Basket Page: " + b);
            Assert.fail("TradeIn values from MyPackage Section and Basket Page are not matching");
        }

        Screenshots.captureScreenshot();
    }

    public static void verifyBuyOutDisplayed_OrderSummarySection(int BouOutValueFromMyPackageSection, String pageName) throws IOException, InterruptedException {
        log.debug("verify Buy Out is displayed");

        String AcText = null, Actcost1 = null, tmpcost1 = null, Title = null;
        int a = 0;
        int BouOutValue_FromMyPackageSection = BouOutValueFromMyPackageSection;

        AcText = UpgradeCustomerPage.BuyOutText_OrderSummarySection.getText();
        Actcost1 = UpgradeCustomerPage.BuyOutCost_OrderSummarySection.getText();
        Title = driver.getTitle();

        log.debug("Buy out Amount: " + Actcost1);

        tmpcost1 = org.apache.commons.lang3.StringUtils.substringBetween(Actcost1, "£", ".");
        a = NumberUtils.toInt(tmpcost1);

        if (AcText.contains("Upgrade on us")) {
            log.debug("Buy out offer text is displayed as expected: " + AcText);
        } else {
            log.debug("Buy out offer text is not displayed as expected: " + AcText);
            Assert.fail("Buy out offer text is not displayed as expected");
        }
        if (Actcost1.contains("-")) {
            log.debug("Buy Out Amount contains negative value: " + Actcost1);

        } else {
            log.debug("Buy Out Amount does not contain negative value: " + Actcost1);
            Assert.fail("Buy Out Amount does not contain negative value");
        }
        if (a == BouOutValue_FromMyPackageSection) {
            log.debug("Buy out value from " + pageName + " Page is matching with the BoyOut value from MyPackage Section: " + ", Boy Out Value from My Package Section: " + BouOutValue_FromMyPackageSection + ", Buy Out Amount from " + pageName + " Page: " + a);
        } else {
            log.debug("Buy out value from " + pageName + " Page is not matching with the BoyOut value from MyPackage Section: " + ", Boy Out Value from My Package Section: " + BouOutValue_FromMyPackageSection + ", Buy Out Amount from " + pageName + " Page: " + a);
            Assert.fail("Buy out values from MyPackage Section and " + pageName + " Page are not matching");
        }
        Screenshots.captureScreenshot();
    }

    public static void verifyTradeInDisplayed_OrderSummarySection(int TradeInValueFromMyPackageSection, String pageName) throws IOException, InterruptedException {
        log.debug("verify TradeIn is displayed");

        String AcText = null, Actcost1 = null, tmpcost1 = null, Title = null;
        int a = 0;
        int TradeInValue_FromMyPackageSection = TradeInValueFromMyPackageSection;

        AcText = UpgradeCustomerPage.TradeInText_OrderSummarySection.getText();
        Actcost1 = UpgradeCustomerPage.TradeInCost_OrderSummarySection.getText();
        Title = driver.getTitle();

        log.debug("TradeIn Amount: " + Actcost1);

        tmpcost1 = org.apache.commons.lang3.StringUtils.substringBetween(Actcost1, "£", ".");
        a = NumberUtils.toInt(tmpcost1);

        if (AcText.contains("Upgrade on us")) {
            log.debug("TradeIn offer text is displayed as expected: " + AcText);
        } else {
            log.debug("TradeIn offer text is not displayed as expected: " + AcText);
            Assert.fail("TradeIn offer text is not displayed as expected");
        }
        if (Actcost1.contains("-")) {
            log.debug("TradeIn Amount contains negative value: " + Actcost1);

        } else {
            log.debug("TradeIn Amount does not contain negative value: " + Actcost1);
            Assert.fail("TradeIn Amount does not contain negative value");
        }
        if (a == TradeInValue_FromMyPackageSection) {
            log.debug("TradeIn value from " + pageName + " Page is matching with the TradeIn value from MyPackage Section: " + ", TradeIn Value from My Package Section: " + TradeInValue_FromMyPackageSection + ", TradeIn Amount from " + pageName + " Page: " + a);
        } else {
            log.debug("TradeIn value from " + pageName + " Page is not matching with the TradeIn value from MyPackage Section: " + ", TradeIn Value from My Package Section: " + TradeInValue_FromMyPackageSection + ", TradeIn Amount from " + pageName + " Page: " + a);
            Assert.fail("TradeIn values from MyPackage Section and " + pageName + " Page are not matching");
        }
        Screenshots.captureScreenshot();
    }

    public static void VerifyTradeinMessage() throws IOException, InterruptedException {
        log.debug("in verify tradein message function");
        driver.findElement(By.xpath("//div[@class='ng-scope trade-in-offer']")).getText();
        String text = driver.findElement(By.xpath("//div[@class='ng-scope trade-in-offer']")).getText();
        if (text.contains("Trade in")) {
            log.debug("Working fine");
            log.debug("The Text is: " + text);
        } else {
            Assert.fail("Trade in not displayed, hence failed");
        }
        // driver.findElement(By.xpath("//button[contains(text(),'Take this offer and upgrade')]")).click();
        // JavascriptExecutor js = (JavascriptExecutor) driver;
        Screenshots.captureScreenshot();
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();",
                driver.findElement(By.xpath("//button[contains(text(),'Take this offer and upgrade')]")));


    }

    public static void verifyBuyOutMessage() {
        log.debug("in verify BuyOut message function");

        String text = driver.findElement(By.xpath("//div[@class='trade-in-offer']/p")).getText();
        if (text.contains("We'll buy you out of your contract, so you can choose a brand new phone")) {
            log.debug("The Text is: " + text);
        } else {
            log.debug("BuyOut is not displayed, hence failed");
            //Assert.fail("BuyOut is not displayed, hence failed");
        }
    }

    public static void verifyPoundLeftToPay() {
        log.debug("in verify BuyOut message function");

        String text = driver.findElement(By.xpath("//div[@id='o2RecycleModule']/h2")).getText();
        if (text.contains("left to pay on your current Device Plan")) {
            log.debug("Verified successfully, The Text is: " + text);
        } else {
            Assert.fail("Verified left to pay on your current Device Plan");
        }
    }


    public static void AnswerTradeinQuestion() throws InterruptedException, IOException {
        Thread.sleep(5000);
        log.debug("in AnswerTradeinQuestion function");
        JavascriptExecutor js = (JavascriptExecutor) driver;

        /*if(driver.findElement(By.xpath("//a[normalize-space()='Answer questions again']")).isDisplayed()) {
            WebElement QuestionLink = driver.findElement(By.xpath("//a[normalize-space()='Answer questions again']"));
            js.executeScript("arguments[0].setAttribute('style', 'display:block;')", QuestionLink);
        }*/

        Thread.sleep(8000);
        if(driver.findElement(By.xpath("//div[@class='selectboxit-container questionnair']")).isDisplayed()) {
            WebElement Question0 = driver.findElement(By.xpath("//select[@id='question0']"));
            js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Question0);
            new Select(Question0).selectByValue("0");

            // Select Second questionaire - Does your phone have any damage
            WebElement Question1 = driver.findElement(By.xpath("//select[@id='question1']"));
            js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Question1);
            new Select(Question1).selectByValue("0");

            // Select Third questionaire - Could your phone be water damaged
            WebElement Question2 = driver.findElement(By.xpath("//select[@id='question2']"));
            js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Question2);
            new Select(Question2).selectByValue("0");

            // Select Second questionaire - Remove icloud from device
            WebElement Question3 = driver.findElement(By.xpath("//select[@id='question3']"));
            js.executeScript("arguments[0].setAttribute('style', 'display:block;')", Question3);
            new Select(Question3).selectByValue("0");

            // driver.findElement(By.id("continue-with-accurate-quote")).click();
            log.debug("Completed questionaire");
        }
        Screenshots.captureScreenshot();

    }

    public static void UpgradeNowButton() throws InterruptedException, IOException {
        log.debug("in UpgradeNowButton function");
        Thread.sleep(8000);
        Screenshots.captureScreenshot();
        //driver.findElement(By.xpath("//button[contains(text(),'Upgrade now')]")).click();
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();",
                driver.findElement(By.xpath("//button[contains(text(),'Upgrade now')]")));

        Thread.sleep(8000);


    }

    public static void VerifyUpgradeonUs() throws IOException, InterruptedException {
        log.debug("in VerifyUpgradeonUs function");

        ((JavascriptExecutor) driver).executeScript("arguments[0].click();",
                pageobjects.UpgradeCustomerPage.SignoutLink);

        Screenshots.captureScreenshot();

    }

    public static void clickOnTabletstab() throws InterruptedException, IOException {
        log.debug("In tablets clicking function");
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();",
                pageobjects.UpgradeCustomerPage.TabletsTab);
        Thread.sleep(3000);
        Screenshots.captureScreenshot();
    }

    public static void verifyUpgradepageDisplay() throws InterruptedException, IOException {

        Thread.sleep(3000);
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();",
                pageobjects.UpgradeCustomerPage.ViewAllTariffs);
        Screenshots.captureScreenshot();
    }

    public static void clickOnViewAllTariffslink() throws InterruptedException, IOException {

        Thread.sleep(5000);

        ((JavascriptExecutor) driver).executeScript("arguments[0].click();",
                pageobjects.UpgradeCustomerPage.ViewAllTariffs);
        Screenshots.captureScreenshot();
    }

    public static void Logout() throws InterruptedException, IOException {

        Thread.sleep(3000);

        ((JavascriptExecutor) driver).executeScript("arguments[0].click();",
                pageobjects.UpgradeCustomerPage.SignoutLink);
        Screenshots.captureScreenshot();
    }

    public static void verifyUpgradeShop() throws InterruptedException, IOException {

        Thread.sleep(3000);

        String upgradetext = driver.findElement(By.xpath("//h1")).getText();
        if (upgradetext.contains("upgrade")) {
            log.debug("Upgrade page is displayed");
        } else {
            log.debug("Upgrade page is not displayed");
        }
        Screenshots.captureScreenshot();
    }

    public static void clickOnViewAllTablets() throws InterruptedException, IOException {

        Thread.sleep(3000);

        ((JavascriptExecutor) driver).executeScript("arguments[0].click();",
                pageobjects.UpgradeCustomerPage.ViewAllTablets);
        Screenshots.captureScreenshot();
    }

    public static void VerifyMarketingMessage(String section) throws Exception {
        if (section.contains("Tariff and Extras")) {
            Assert.assertEquals("Sample Text", pageobjects.UpgradeCustomerPage.ViewAllTablets.getText());
            Screenshots.captureScreenshot();
        } else if (section.contains("Your Package")) {
            Assert.assertEquals("Sample Text", pageobjects.UpgradeCustomerPage.ViewAllTablets.getText());
            Screenshots.captureScreenshot();
        } else if (section.contains("Your Basket")) {
            Assert.assertEquals("Sample Text", pageobjects.UpgradeCustomerPage.ViewAllTablets.getText());
            Screenshots.captureScreenshot();
        } else if (section.contains("Delivery Page")) {
            Assert.assertEquals("Sample Text", pageobjects.UpgradeCustomerPage.ViewAllTablets.getText());
            Screenshots.captureScreenshot();
        } else if (section.contains("Payment Page")) {
            Assert.assertEquals("Sample Text", pageobjects.UpgradeCustomerPage.ViewAllTablets.getText());
            Screenshots.captureScreenshot();
        } else if (section.contains("Order Summary")) {
            Assert.assertEquals("Sample Text", pageobjects.UpgradeCustomerPage.ViewAllTablets.getText());
            Screenshots.captureScreenshot();
        } else if (section.contains("Order Confirmation")) {
            Assert.assertEquals("Sample Text", pageobjects.UpgradeCustomerPage.ViewAllTablets.getText());
            Screenshots.captureScreenshot();
        }
    }

    public static void upgradeTablet(String handset) throws IOException, InterruptedException {
        JavascriptExecutor executor = (JavascriptExecutor) driver;
        executor.executeScript("arguments[0].click();", pageobjects.PhonesListingPage.ViewAllPhones);

        if (handset.contains("Random")) {
            pageobjects.UpgradeCustomerPage.RandomTabletClick.click();
            // Assert.assertEquals(elementName,"Galaxy S7 is not found");
            log.debug("Selected Random Device");
        }
        if (handset.contains("Samsung Galaxy Tab")) {
            pageobjects.UpgradeCustomerPage.GalaxyTab10.click();
            log.debug("Seelcted Samsung galaxy tab");
            log.debug("Seelcted Samsung galaxy tab");
        }

        if (handset.contains("GalaxyTabA")) {
            pageobjects.UpgradeCustomerPage.GalaxyTabA.click();
            log.debug("Seelcted Samsung galaxy tab A");
            log.debug("Selcted Samsung galaxy tab A");
        }

        if (handset.contains("Apple ipad pro 9.7")) {
            pageobjects.UpgradeCustomerPage.AppleipadPro.click();
            log.debug("Seelcted ipad pro tablet");
            log.debug("Seelcted ipad pro tablet");
        }
        Screenshots.captureScreenshot();

    }


    public static void reviewTariff() throws InterruptedException, IOException {
        log.debug("Trying to verify first section is review tariff");

//Give function with position so that review tariff is at first section like 1. Review your tariff

        pageobjects.UpgradeCustomerPage.reviewTariff.getSize();

        Screenshots.captureScreenshot();
    }

    public static void contentDisplayedFirstTariff() throws InterruptedException, IOException {
        log.debug("Trying to verify first section is review tariff");
        //Below tariff validations should be in such a way that this should be first tile text
        pageobjects.UpgradeCustomerPage.moveFromTariff.getText();

        Screenshots.captureScreenshot();
    }

    public static void contentDisplayedSecondTariff() throws InterruptedException, IOException {
        log.debug("Trying to verify first section is review tariff");
        //Below tariff validations should be in such a way that this should be second tile text
        pageobjects.UpgradeCustomerPage.toThisTariff.getText();

        Screenshots.captureScreenshot();
    }

    public static void clickonnoSurelink() throws InterruptedException, IOException {
        log.debug("Trying to verify first section is review tariff");
        //Below tariff validations should be in such a way that this should be second tile text
        pageobjects.UpgradeCustomerPage.clickonNotsureSimType.click();

        Screenshots.captureScreenshot();
    }

    public static void nonDisplayDeliverySection() throws InterruptedException, IOException {
        log.debug("Trying to verify delivery section is present or not");
        //Below get the delivery section size
        int deliverySection = driver.findElements(By.xpath("")).size();
        if (deliverySection >= 0) {
            Assert.fail("Delivery section present");
        } else {
            log.debug("No delivery section is present, thus fine");
        }
        pageobjects.UpgradeCustomerPage.clickonNotsureSimType.click();
        Screenshots.captureScreenshot();
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////Promotions/////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    public static void HeadingMessagePanel() {

        log.debug("Validating the Heading message for promotions");

        WebElement HeaderPromo = pageobjects.UpgradeCustomerPage.PromotionsHeader;
        JavascriptExecutor executor = (JavascriptExecutor) driver;
        executor.executeScript("arguments[0].click();", HeaderPromo);
        String HeaderText = HeaderPromo.getText();
        if (HeaderText.contains("This is a deal we think you’ll like")) {
            log.debug("The Promotions Tile is displayed correctly");
            log.debug(HeaderText);
        } else {
            log.debug("The Promotions title is incorrect");
            Assert.fail("The copy text is not correct");
        }

    }

    public static void BodyMessagePanel() {
        WebElement BodyPromo = pageobjects.UpgradeCustomerPage.PromotionsBody;
        JavascriptExecutor executor = (JavascriptExecutor) driver;
        executor.executeScript("arguments[0].click();", BodyPromo);
        String BodyText = BodyPromo.getText();
        if (BodyText.contains("‘Your offer is:")) {
            log.debug("‘Your offer is:");
            log.debug(BodyText);
        } else {
            log.debug("The Body Message is incorrect");
            Assert.fail("The Body Message is incorrect");
        }

    }

    public static void SimoPromotionsCheckboxNotDisplayed() {

        WebElement element = pageobjects.UpgradeCustomerPage.CheckBoxNotDisplayed;
        JavascriptExecutor executor = (JavascriptExecutor) driver;
        executor.executeScript("arguments[0].click();", element);
        log.debug("Verifying that the checkboxes are not displayed");
        if (element.isDisplayed()) {
            log.debug("The checkboxes for simo are dipsplayed which is not right");
            Assert.fail("The checkboxes for simo are dipsplayed which is not right\"");
        } else
            log.debug("The checkboxes for simo are not displayed");

    }


    public static void copyTextAdditionalDepositPage() {

        log.debug("in copy text additional deposit verification page");
        String actualText = pageobjects.UpgradeCustomerPage.copyTextAdditonalDeposit.getText();
        String expectedText = "If you make all your payments for 6 months this will be automatically refunded";
        if (actualText.contains(expectedText)) {
            log.debug("copy Text is displayed and its as expected");
        } else {
            Assert.fail("Not correct, the text donot match");
        }

    }

    public static void SIMOLinkIsDisplayed() throws Exception {

        if (UpgradeCustomerPage.SIMOLink.isDisplayed()) {
            UpgradeCustomerPage.SIMOLink.click();
            log.debug("Pick a sim only tariff link is clicked");
        }
        Screenshots.captureScreenshot();
    }

    public static void data_filtersIsDdisplayed() {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            if (driver.findElements(By.xpath("//div[@class='filter-options']/button")).size() > 0) {
                List<WebElement> filtes = driver.findElements(By.xpath("//div[@class='filter-options']/button"));
                scrollToAnElement.scrollToElement(driver.findElement(By.xpath("(//div[@class='filter-options']/button)[1]")));
                Screenshots.captureScreenshot();
                for (int i = 1; i <= filtes.size(); i++) {
                    if (driver.findElement(By.xpath("(//div[@class='filter-options']/button)[" + i + "]")).isDisplayed()) {
                        String fltr = driver.findElement(By.xpath("(//div[@class='filter-options']/button)[" + i + "]")).getText();
                        log.debug(" the data filters is displayed" + fltr);
                        log.debug("the data filters is displayed" + fltr);
                    }
                }
            } else {
                log.debug(" Failed to displayed the Data Filter ");
                Assert.fail(" Failed to displayed the Data Filter ");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug(" Failed to displayed the Data Filter " + e.getStackTrace());
            Assert.fail(" Failed to displayed the Data Filter ");
        }
    }

    public static void twoContractLengthShouldDisplayed() {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            if (driver.findElements(By.xpath("//div[@class='button-tabs']//a")).size() > 0) {
                List<WebElement> contractLength = driver.findElements(By.xpath("//div[@class='button-tabs']//a"));

                Screenshots.captureScreenshot();
                for (int i = 1; i <= contractLength.size(); i++) {
                    if (driver.findElement(By.xpath("(//div[@class='button-tabs']//a)[" + i + "]")).isDisplayed()) {
                        String contrctLent = driver.findElement(By.xpath("(//div[@class='button-tabs']//a)[" + i + "]")).getText();
                        log.debug(" the data filters is displayed: " + contrctLent);
                        log.debug("the data filters is displayed: " + contrctLent);
                    }
                }
            } else {
                log.debug(" Failed to displayed the Data Filter ");
                Assert.fail(" Failed to displayed the Data Filter ");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug(" Failed to displayed the Data Filter " + e.getStackTrace());
            Assert.fail(" Failed to displayed the Data Filter ");
        }
    }

    public static void whyChooseAn_O2_may_Monthly_sim_is_not_displayed() {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            if (driver.findElements(By.xpath("//*[contains(text(),'hy choose an O2 Pay Monthly sim?')]")).size() <= 0) {
                log.debug(" text 'Why choose an O2 Pay Monthly sim?' is Displayed ");
                log.debug(" text 'Why choose an O2 Pay Monthly sim?' is Displayed ");
            } else {
                log.debug("  'Why choose an O2 Pay Monthly sim?' is Displayed ");
                Assert.fail("  'Why choose an O2 Pay Monthly sim?' is Displayed ");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug("  'Why choose an O2 Pay Monthly sim?' is Displayed " + e.getStackTrace());
            Assert.fail("  'Why choose an O2 Pay Monthly sim?' is Displayed ");
        }
    }

    public static void OOS_MsgShouldDisplayed_inUpgradeOptionsPage() {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            if (driver.findElements(By.xpath("//*[contains(text(),'Out of stock')]")).size() > 0) {
                if (driver.findElement(By.xpath("//*[contains(text(),'Out of stock')]")).isDisplayed()) {
                    log.debug(" The Out of stock message is Displayed in the Upgrade Options page");
                    log.debug(" The Out of stock message is Displayed in the Upgrade Options page");
                }
            } else {
                log.debug(" Failed to displayed  OOS message in the Upgrade Page");
                Assert.fail(" Failed to displayed  OOS message in the Upgrade Page");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug(" Failed to displayed  OOS message in the Upgrade Page" + e.getStackTrace());
            Assert.fail(" Failed to displayed  OOS message in the Upgrade Page");
        }
    }

    public static void verifyOOS_MessageIsDisplayedInUpgradesBasketPage() {
        try {
            driver.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
            if (driver.findElements(By.xpath("//*[contains(text(),'You can't continue with checking out if there are any out of stock items in your basket,')]")).size() > 0) {
                if (driver.findElement(By.xpath("(//*[contains(text(),'You can't continue with checking out if there are any out of stock items in your basket,')])[1]")).isDisplayed()) {
                    log.debug(" The 'OOS message' is displayed in the upgrades basket page is Verified");
                    log.debug(" The 'OOS message' is displayed in the upgrades basket page is Verified");
                }
            } else {
                log.debug(" Failed to Displayed The 'OOS message' in the upgrades basket page");
                Assert.fail(" Failed to Displayed The 'OOS message' in the upgrades basket page");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug(" Failed to Displayed The 'OOS message' in the upgrades basket page" + e.getStackTrace());
            Assert.fail(" Failed to Displayed The 'OOS message' in the upgrades basket page");
        }
    }

    public static void upfront_sort_options_is_not_present_in_sortingDropdown() {
        try {
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.MINUTES);
            if (UpgradeCustomerPage.dataFilter.isDisplayed()) {
                UpgradeCustomerPage.dataFilter.click();

                List<WebElement> lst = driver.findElements(By.xpath("//select[@id='dataFilterSelect']//option"));
                Select sel = new Select(UpgradeCustomerPage.dataFilter);

                for (int i = 1; i <= lst.size(); i++) {
                    String str = driver.findElement(By.xpath("(//select[@id='dataFilterSelect']//option)[" + i + "]"));

                    if (str.contains("Upfront cost")) {
                        log.debug(" Upfront Cost is availabe ");
                        Assert.fail(" Upfront Cost is availabe ");
                        break;
                    }
                }
            } else {
                log.debug(" verify that the upfront sort options is not present in the 'sorting dropdown'");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            log.debug(" FAILED ::::: Upfront Cost is availabe ");
            Assert.fail(" FAILED ::::: Upfront Cost is availabe ");
        }
    }

    public static ArrayList<Integer> getDataListAfterSelectingFilter_UpgradeSIMO_MBBTablet() throws IOException, InterruptedException {

        List<WebElement> DataTextElement=null;

        if (driver.findElements(By.xpath("//li[@id='id-12-months' and @class=' active ']")).size() > 0) {
            DataTextElement = pageobjects.UpgradeCustomerPage.DataTextElement_12Months;
        } else if (driver.findElements(By.xpath("//li[@id='id-30-days' and @class=' active ']")).size() > 0) {
            DataTextElement = pageobjects.UpgradeCustomerPage.DataTextElement_30Days;
        }
        String data = null, tempdata = null;
        int a = 0;

        for (int i = 0; i < DataTextElement.size(); i++) {
            data = DataTextElement.get(i).getText();
            log.debug("data " + data);
            if (data.contains("MB")) {
                tempdata = org.apache.commons.lang3.StringUtils.substringBetween(data, "", "MB");
                a = NumberUtils.toInt(tempdata);
                log.debug("a " + a);
                datalistafter.add(a);
            }
            if (data.contains("GB")) {
                tempdata = org.apache.commons.lang3.StringUtils.substringBetween(data, "", "GB");
                // log.debug("tempdata " + tempdata);
                a = NumberUtils.toInt(tempdata);
                a = a * 1024;
                log.debug("a " + a);
                if (a != 0) {
                    datalistafter.add(a);
                }
            }
        }

        log.debug('\n');
        log.debug("----------------------Data List after selecting filter--------------");
        for (int i = 0; i < datalistafter.size(); i++) {
            log.debug(datalistafter.get(i));

        }
        log.debug("---------------------------------------------");
        Screenshots.captureScreenshot();
        return datalistafter;
    }

    public static ArrayList<Integer> getDataListAfterSelectingFilter_UpgradeSIMO_Phone() throws IOException, InterruptedException {

        List<WebElement> DataTextElement = pageobjects.UpgradeCustomerPage.DataTextElement_Phones;

        String data = null, tempdata = null;
        int a = 0;

        for (int i = 0; i < DataTextElement.size(); i++) {
            data = DataTextElement.get(i).getText();
            log.debug("data " + data);
            if (data.contains("MB")) {
                tempdata = org.apache.commons.lang3.StringUtils.substringBetween(data, "", "MB");
                a = NumberUtils.toInt(tempdata);
                log.debug("a " + a);
                datalistafter.add(a);
            }
            if (data.contains("GB")) {
                tempdata = org.apache.commons.lang3.StringUtils.substringBetween(data, "", "GB");
                // log.debug("tempdata " + tempdata);
                a = NumberUtils.toInt(tempdata);
                a = a * 1024;
                log.debug("a " + a);
                if (a != 0) {
                    datalistafter.add(a);
                }
            }
        }

        log.debug('\n');
        log.debug("----------------------Data List after selecting filter--------------");
        for (int i = 0; i < datalistafter.size(); i++) {
            log.debug(datalistafter.get(i));

        }
        log.debug("---------------------------------------------");
        Screenshots.captureScreenshot();
        return datalistafter;
    }

    public static ArrayList<Integer> getMonthlyCostListAfterSelectingFilter_UpgradeSIMO_MBBTablet() throws IOException, InterruptedException {
        List<WebElement> MonthlyCostTextElement = null;

        if (driver.findElements(By.xpath("//li[@id='id-12-months' and @class=' active ']")).size() > 0) {
            MonthlyCostTextElement = pageobjects.UpgradeCustomerPage.MonthlyTextElement_12Months;
        } else if (driver.findElements(By.xpath("//li[@id='id-30-days' and @class=' active ']")).size() > 0) {
            MonthlyCostTextElement = pageobjects.UpgradeCustomerPage.MonthlyTextElement_30Days;
        }

        ArrayList<Integer> MonthlyCostlist = new ArrayList<Integer>();
        String data = null;
        int a = 0;

        for (int i = 0; i < MonthlyCostTextElement.size(); i++) {
            data = MonthlyCostTextElement.get(i).getText();
            data = org.apache.commons.lang3.StringUtils.substringBetween(data, "£", ".");
            a = NumberUtils.toInt(data);
            MonthlyCostlist.add(a);
        }

        log.debug('\n');

        log.debug("----------------------Monthly Cost List after selecting filter--------------");
        for (int i = 0; i < MonthlyCostlist.size(); i++) {
            log.debug(MonthlyCostlist.get(i));

        }
        log.debug("---------------------------------------------");
        Screenshots.captureScreenshot();
        return MonthlyCostlist;
    }

    public static ArrayList<Integer> getMonthlyCostListAfterSelectingFilter_UpgradeSIMO_Phone() throws IOException, InterruptedException {

        List<WebElement> MonthlyCostTextElement = pageobjects.UpgradeCustomerPage.MonthlyTextElement_Phones;

        ArrayList<Integer> MonthlyCostlist = new ArrayList<Integer>();
        String data = null;
        int a = 0;

        for (int i = 0; i < MonthlyCostTextElement.size(); i++) {
            data = MonthlyCostTextElement.get(i).getText();
            data = org.apache.commons.lang3.StringUtils.substringBetween(data, "£", ".");
            a = NumberUtils.toInt(data);
            MonthlyCostlist.add(a);
        }

        log.debug('\n');

        log.debug("----------------------Monthly Cost List after selecting filter--------------");
        for (int i = 0; i < MonthlyCostlist.size(); i++) {
            log.debug(MonthlyCostlist.get(i));

        }
        log.debug("---------------------------------------------");
        Screenshots.captureScreenshot();
        return MonthlyCostlist;
    }

    public static ArrayList<Integer> getDataListBeforeSelectingFilter_UpgradeSIMO_MBBTablet() throws IOException, InterruptedException {
        List<WebElement> DataTextElement = null;

        if (driver.findElements(By.xpath("//li[@id='id-12-months' and @class=' active ']")).size() > 0) {
            DataTextElement = pageobjects.UpgradeCustomerPage.DataTextElement_12Months;
        } else if (driver.findElements(By.xpath("//li[@id='id-30-days' and @class=' active ']")).size() > 0) {
            DataTextElement = pageobjects.UpgradeCustomerPage.DataTextElement_30Days;
        }

        ArrayList<Integer> datalist = new ArrayList<Integer>();
        String data = null, tempdata = null;
        int a = 0;
        log.debug("size " + DataTextElement.size());
        for (int i = 0; i < DataTextElement.size(); i++) {
            data = DataTextElement.get(i).getText();
            log.debug("data " + data);
            if (data.contains("MB")) {
                tempdata = org.apache.commons.lang3.StringUtils.substringBetween(data, "", "MB");
                a = NumberUtils.toInt(tempdata);
                log.debug("a " + a);
                datalist.add(a);
            }
            if (data.contains("GB")) {
                tempdata = org.apache.commons.lang3.StringUtils.substringBetween(data, "", "GB");
                log.debug("tempdata " + tempdata);
                a = NumberUtils.toInt(tempdata);
                a = a * 1024;
                log.debug("a " + a);
                datalist.add(a);
            }

        }

        log.debug('\n');

        log.debug("----------------------Data List before selecting filter--------------");
        for (int i = 0; i < datalist.size(); i++) {
            log.debug(datalist.get(i));

        }
        log.debug("---------------------------------------------");
        Screenshots.captureScreenshot();
        return datalist;
    }

    public static ArrayList<Integer> getDataListBeforeSelectingFilter_UpgradeSIMO_Phone() throws IOException, InterruptedException {

        List<WebElement> DataTextElement = pageobjects.UpgradeCustomerPage.DataTextElement_Phones;

        ArrayList<Integer> datalist = new ArrayList<Integer>();
        String data = null, tempdata = null;
        int a = 0;
        log.debug("size " + DataTextElement.size());
        for (int i = 0; i < DataTextElement.size(); i++) {
            data = DataTextElement.get(i).getText();
            log.debug("data " + data);
            if (data.contains("MB")) {
                tempdata = org.apache.commons.lang3.StringUtils.substringBetween(data, "", "MB");
                a = NumberUtils.toInt(tempdata);
                log.debug("a " + a);
                datalist.add(a);
            }
            if (data.contains("GB")) {
                tempdata = org.apache.commons.lang3.StringUtils.substringBetween(data, "", "GB");
                log.debug("tempdata " + tempdata);
                a = NumberUtils.toInt(tempdata);
                a = a * 1024;
                log.debug("a " + a);
                datalist.add(a);
            }

        }

        log.debug('\n');

        log.debug("----------------------Data List before selecting filter--------------");
        for (int i = 0; i < datalist.size(); i++) {
            log.debug(datalist.get(i));

        }
        log.debug("---------------------------------------------");
        Screenshots.captureScreenshot();
        return datalist;
    }

    public static ArrayList<Integer> getCurrentSortOrderUsingMonthlyData_UpgradeSIMO_MBBTablet() throws IOException, InterruptedException {
        log.debug("Executing getCurrentSortOrderUsingMonthlyData_UpgradeSIMO_MBBTablet ()");

        List<WebElement> DataTextElement = null;

        if (driver.findElements(By.xpath("//li[@id='id-12-months' and @class=' active ']")).size() > 0) {
            DataTextElement = pageobjects.UpgradeCustomerPage.DataTextElement_12Months;
        } else if (driver.findElements(By.xpath("//li[@id='id-30-days' and @class=' active ']")).size() > 0) {
            DataTextElement = pageobjects.UpgradeCustomerPage.DataTextElement_30Days;
        }

        ArrayList<Integer> tariffListUsingMonthlyData = new ArrayList<Integer>();
        String data = null, tempdata = null;
        int a = 0;
        log.debug("size " + DataTextElement.size());
        for (int i = 0; i < DataTextElement.size(); i++) {
            data = DataTextElement.get(i).getText();
            log.debug("data " + data);
            if (data.contains("MB")) {
                tempdata = org.apache.commons.lang3.StringUtils.substringBetween(data, "", "MB");
                a = NumberUtils.toInt(tempdata);
                log.debug("a " + a);
                tariffListUsingMonthlyData.add(a);
            }
            if (data.contains("GB")) {
                tempdata = org.apache.commons.lang3.StringUtils.substringBetween(data, "", "GB");
                log.debug("tempdata " + tempdata);
                a = NumberUtils.toInt(tempdata);
                a = a * 1024;
                log.debug("a " + a);
                if (a != 0) {
                    tariffListUsingMonthlyData.add(a);
                }
            }

        }

        log.debug('\n');

        log.debug("----------------------Original List--------------");
        for (int i = 0; i < tariffListUsingMonthlyData.size(); i++) {
            log.debug(tariffListUsingMonthlyData.get(i));

        }
        log.debug("---------------------------------------------");
        Screenshots.captureScreenshot();
        return tariffListUsingMonthlyData;
    }

    public static ArrayList<Integer> getCurrentSortOrderUsingMonthlyCost_UpgradeSIMO_MBBTablet() throws IOException, InterruptedException {

        List<WebElement> DataTextElement = null;

        if (driver.findElements(By.xpath("//li[@id='id-12-months' and @class=' active ']")).size() > 0) {
            DataTextElement = pageobjects.UpgradeCustomerPage.MonthlyTextElement_12Months;
        } else if (driver.findElements(By.xpath("//li[@id='id-30-days' and @class=' active ']")).size() > 0) {
            DataTextElement = pageobjects.UpgradeCustomerPage.MonthlyTextElement_30Days;
        }

        ArrayList<Integer> tariffListUsingMonthlyCost = new ArrayList<Integer>();
        String data = null;
        int a = 0;

        for (int i = 0; i < DataTextElement.size(); i++) {
            data = DataTextElement.get(i).getText();
            data = org.apache.commons.lang3.StringUtils.substringBetween(data, "£", ".");
            a = NumberUtils.toInt(data);
            if (a != 0) {
                tariffListUsingMonthlyCost.add(a);
            }

        }
        Screenshots.captureScreenshot();
        return tariffListUsingMonthlyCost;
    }

    public static ArrayList<Integer> getCurrentSortOrderUsingMonthlyData_UpgradeSIMO_Phone() throws IOException, InterruptedException {
        log.debug("Executing getCurrentSortOrderUsingMonthlyData_UpgradeSIMO_Phone ()");

        List<WebElement> DataTextElement = pageobjects.UpgradeCustomerPage.DataTextElement_Phones;

        ArrayList<Integer> tariffListUsingMonthlyData = new ArrayList<Integer>();
        String data = null, tempdata = null;
        int a = 0;
        log.debug("size " + DataTextElement.size());
        for (int i = 0; i < DataTextElement.size(); i++) {
            data = DataTextElement.get(i).getText();
            log.debug("data " + data);
            if (data.contains("MB")) {
                tempdata = org.apache.commons.lang3.StringUtils.substringBetween(data, "", "MB");
                a = NumberUtils.toInt(tempdata);
                log.debug("a " + a);
                tariffListUsingMonthlyData.add(a);
            }
            if (data.contains("GB")) {
                tempdata = org.apache.commons.lang3.StringUtils.substringBetween(data, "", "GB");
                log.debug("tempdata " + tempdata);
                a = NumberUtils.toInt(tempdata);
                a = a * 1024;
                log.debug("a " + a);
                if (a != 0) {
                    tariffListUsingMonthlyData.add(a);
                }
            }

        }

        log.debug('\n');

        log.debug("----------------------Original List--------------");
        for (int i = 0; i < tariffListUsingMonthlyData.size(); i++) {
            log.debug(tariffListUsingMonthlyData.get(i));

        }
        log.debug("---------------------------------------------");
        Screenshots.captureScreenshot();
        return tariffListUsingMonthlyData;
    }

    public static ArrayList<Integer> getCurrentSortOrderUsingMonthlyCost_UpgradeSIMO_Phone() throws IOException, InterruptedException {

        List<WebElement> DataTextElement = pageobjects.UpgradeCustomerPage.MonthlyTextElement_Phones;
        ArrayList<Integer> tariffListUsingMonthlyCost = new ArrayList<Integer>();
        String data = null;
        int a = 0;

        for (int i = 0; i < DataTextElement.size(); i++) {
            data = DataTextElement.get(i).getText();
            data = org.apache.commons.lang3.StringUtils.substringBetween(data, "£", ".");
            a = NumberUtils.toInt(data);
            if (a != 0) {
                tariffListUsingMonthlyCost.add(a);
            }

        }
        Screenshots.captureScreenshot();
        return tariffListUsingMonthlyCost;
    }
}
