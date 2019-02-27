package actionsPerformed;

import java.awt.*;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;
import java.util.concurrent.TimeUnit;

import GlobalActions.CommonActions;
import GlobalActions.scrollToAnElement;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.Point;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import GlobalActions.Screenshots;
import helpers.Environment;
import org.testng.asserts.Assertion;
import pageobjects.BasketPage;
import pageobjects.ConnectedDeviceDetailsPage;
import pageobjects.MouseHoverPage;

//This page will have details on the individual device

public class ConnectedDeviceDetailsPageAction extends Environment {

    final static Logger log = Logger.getLogger("ConnectedDeviceDetailsPageAction");
    public static String upFrontCost;
    public static String totalCostPerMonth;

    public static void GetTitle() throws InterruptedException, IOException {
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        log.debug("Currently in Device details page");
        String Ele1 = driver.getTitle();
        log.debug("The Page title is " + Ele1);
        log.debug("Currently in Device details page");
        log.debug("The Page title is " + Ele1);
        Thread.sleep(5000);
        Screenshots.captureScreenshot();
    }

    public static void colorSelect(String color) throws IOException {
        JavascriptExecutor executor = (JavascriptExecutor) driver;
        if (color.contains("pink")) {
            executor.executeScript("arguments[0].click();", pageobjects.ConnectedDeviceDetailsPage.Pink);
        }

        if (color.contains("goldplatinum")) {
            executor.executeScript("arguments[0].click();", pageobjects.ConnectedDeviceDetailsPage.GoldPlatinum);
        }

        if (color.contains("blackobyx")) {
            executor.executeScript("arguments[0].click();", pageobjects.ConnectedDeviceDetailsPage.BlackOnyx);
        }
        if (color.contains("black")) {
            executor.executeScript("arguments[0].click();", pageobjects.ConnectedDeviceDetailsPage.Black);
        }
        Screenshots.captureScreenshot();
    }

    public static void ClickAndCollectNow() throws IOException, InterruptedException {

        log.debug("In click And Collect now function");
        pageobjects.BasketPage.clickAndCollect.click();
        Thread.sleep(6000);
        Screenshots.captureScreenshot();
        pageobjects.BasketPage.StorePostcode.sendKeys("g13hf");
        log.debug("PostCode Entered for Search");
        Thread.sleep(2000);
        Screenshots.captureScreenshot();
        Thread.sleep(2000);
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("arguments[0].click();", pageobjects.BasketPage.PostcodeSubmit);
        //pageobjects.BasketPage.PostcodeSubmit.click();
        Thread.sleep(8000);
        log.debug("Postcode Submitted for Search");

        scrollToAnElement.scrollToElement(BasketPage.firstStore);
        Thread.sleep(2000);
        Screenshots.captureScreenshot();

        /*pageobjects.BasketPage.WhenToCollect.click();
        Thread.sleep(6000);
        Screenshots.captureScreenshot();*/

        List<WebElement> collectionDetails = driver.findElements(By.xpath("//div[@class='collectFrom']"));
        int cnt = 0;

        for(int i=1;i<=collectionDetails.size();i++){
            String collectionDate = driver.findElement(By.xpath("(//div[@class='collectFrom']["+i+"])/p")).getText();
            Thread.sleep(3000);
            log.debug("Collection Date: "+collectionDate);
            if (collectionDate.equalsIgnoreCase("Today")) {
                log.debug("Device is available for click and collect now in provided store, status is:: " + collectionDate + "\n");
                driver.findElement(By.xpath("(//a[normalize-space()='Collect from this store'])["+i+"]")).click();
                log.debug("Store selected for collection Today\n");
                cnt++;
                break;
            }
        }

        if(cnt==0) {
            log.debug("Device is not available for click and collect now in provided store\n");
            Assert.fail("Device is not available for click and collect now in provided store\n");
        }

        Thread.sleep(5000);
        Screenshots.captureScreenshot();
        String collectionDetailsPDpage = pageobjects.BasketPage.CollectionDetailsPDpage.getText();
        Thread.sleep(2000);
        if(collectionDetailsPDpage.contains("Today")){
            log.debug("Delivery details - collection today/now:: is updated in PD page: " +collectionDetailsPDpage);
        }else{
            log.debug("Delivery details - collection today/now status is not matching in PD page: " +collectionDetailsPDpage);
            Assert.fail("Delivery details - collection today/now status is not matching in PD page: " +collectionDetailsPDpage);
        }
    }


    public static void ViewAllTariffs() throws InterruptedException, IOException {
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        log.debug("Entering ViewAllTariffs() function ");

        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,400)", "");
        Thread.sleep(2000);

        Screenshots.captureScreenshot();
        /*WebElement ele1 = pageobjects.ConnectedDeviceDetailsPage.ViewOurTariffs;
        jse.executeScript("arguments[0].click();", ele1);*/

        if (driver.findElements(By.xpath("(//a[normalize-space()='See our plans'])[1]")).size() > 0) {
            //When FR is ON
            if (pageobjects.ConnectedDeviceDetailsPage.SeeOurplansLink.isDisplayed()) {
                WebElement ele1 = pageobjects.ConnectedDeviceDetailsPage.SeeOurplansLink;
                jse.executeScript("arguments[0].click();", ele1);
                log.debug("Clicked on ViewOurTariffs/ See our plans Link \n");
            } else {
                // For PayG Devices
                Thread.sleep(2000);
                WebElement ele1 = pageobjects.ConnectedDeviceDetailsPage.AddtoBasket;
                jse.executeScript("arguments[0].click();", ele1);
                log.debug("Clicked on Add to basket CTA at PayG device details page to land on T&E page \n");
            }
        } else if (driver.findElements(By.xpath("(//button[normalize-space()='See our plans'])[1]")).size() > 0) {
            //When FR is off
            if (pageobjects.ConnectedDeviceDetailsPage.SeeOurplansCTA.isDisplayed()) {
                WebElement ele1 = pageobjects.ConnectedDeviceDetailsPage.SeeOurplansCTA;
                jse.executeScript("arguments[0].click();", ele1);
                log.debug("Clicked on ViewOurTariffs/ See our plans CTA \n");
            } else {
                // For PayG Devices
                Thread.sleep(2000);
                WebElement ele1 = pageobjects.ConnectedDeviceDetailsPage.AddtoBasket;
                jse.executeScript("arguments[0].click();", ele1);
                log.debug("Clicked on Add to basket CTA at PayG device details page to land on T&E page \n");
            }
        } else {
            // For PayG Devices
            Thread.sleep(2000);
            WebElement ele1 = pageobjects.ConnectedDeviceDetailsPage.AddtoBasket;
            jse.executeScript("arguments[0].click();", ele1);
            log.debug("Clicked on Add to basket CTA at PayG device details page to land on T&E page \n");
        }
        Thread.sleep(8000);
        Screenshots.captureScreenshot();
        // driver.findElement(By.id("deviceDetailsSubmit")).click();
        //JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,300)", "");
        Screenshots.captureScreenshot();

    }

    public static void clickAnywhere() throws IOException {
        // TODO Auto-generated method stub
        pageobjects.ConnectedDeviceDetailsPage.clickanywhere.click();
        Screenshots.captureScreenshot();
    }

    public static void colorSelectOfDevice(String color) throws IOException {
        // TODO Auto-generated method stub
        JavascriptExecutor executor = (JavascriptExecutor) driver;

        if (color.contains("pink")) {
            executor.executeScript("arguments[0].click();", pageobjects.ConnectedDeviceDetailsPage.Pink);
        }

        if (color.contains("goldplatinum")) {
            executor.executeScript("arguments[0].click();", pageobjects.ConnectedDeviceDetailsPage.GoldPlatinum);
        }

        if (color.contains("blackobyx")) {
            executor.executeScript("arguments[0].click();", pageobjects.ConnectedDeviceDetailsPage.BlackOnyx);
        }
        if (color.contains("black")) {
            executor.executeScript("arguments[0].click();", pageobjects.ConnectedDeviceDetailsPage.Black);
        }
        log.debug("Selecting" + color);
        Screenshots.captureScreenshot();
    }

    public static void checkIfMoreThanOneOptionAvailable() throws Exception {
        // TODO Auto-generated method stub
        Thread.sleep(5000);
        WebElement capacity = pageobjects.ConnectedDeviceDetailsPage.CapacityDropDown;
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].setAttribute('style', 'display:block;')", capacity);
        if (capacity.isDisplayed()) {
            List<WebElement> elementCount = new Select(capacity).getOptions();

            if (elementCount.size() <= 1) {
                Assert.fail("There are no more than 1 option available for capacity dropdown");
            }
        }
        WebElement color = pageobjects.ConnectedDeviceDetailsPage.ColorDropDown;

        js.executeScript("arguments[0].setAttribute('style', 'display:block;')", color);
        if (color.isDisplayed()) {
            List<WebElement> elementCount = new Select(color).getOptions();

            if (elementCount.size() <= 1) {
                Assert.fail("There are no more than 1 option available for color dropdown");
            }
        }
        Screenshots.captureScreenshot();
    }

    /*
     * public static void checkOnlyOneOptionAvailable() throws Exception { // TODO
     * Auto-generated method stub Thread.sleep(5000); WebElement capacity =
     * pageobjects.ConnectedDeviceDetailsPage.CapacityDropDown; JavascriptExecutor
     * js = (JavascriptExecutor) driver;
     * js.executeScript("arguments[0].setAttribute('style', 'display:block;')",
     * capacity);
     *
     * WebElement color = pageobjects.ConnectedDeviceDetailsPage.ColorDropDown;
     *
     * js.executeScript("arguments[0].setAttribute('style', 'display:block;')",
     * color);
     *
     * if (capacity.isDisplayed()) {
     *
     * Assert.fail("Capacity has more than 1 dropdown"); }
     *
     * if (color.isDisplayed()) {
     * Assert.fail("There are more than 1 option available for color dropdown");
     *
     * }
     *
     *
     * List<org.openqa.selenium.WebElement> capacityLabel =
     * pageobjects.ConnectedDeviceDetailsPage.CapacityLabel; if
     * (capacityLabel.size() > 1) {
     * Assert.fail("There are more than 1 capacity variant displayed as a label"); }
     *
     * List<org.openqa.selenium.WebElement> colorLabel =
     * pageobjects.ConnectedDeviceDetailsPage.ColorLabel; if (colorLabel.size() > 1)
     * { Assert.fail("There are more than 1 capacity variant displayed as a label");
     * }
     *
     *
     *
     * }
     */

    public static void checkOnlyOneOptionAvailable() throws Exception {
        Thread.sleep(2000);
        List<WebElement> CapacityDropDown = driver.findElements(By.xpath("//select[@id='memory']"));
        List<WebElement> ColorDropDown = driver.findElements(By.xpath("//select[@id='colour']"));

        if (CapacityDropDown.size() > 0) {
            Assert.fail("Capacity dropdown is present even when there is only single variant");
        }

        if (ColorDropDown.size() > 0) {
            Assert.fail("Colour dropdown is present even when there is only single variant");
        }

        List<org.openqa.selenium.WebElement> capacityLabel = pageobjects.ConnectedDeviceDetailsPage.CapacityLabel;
        if (capacityLabel.size() > 1) {
            Assert.fail("There are more than 1 capacity variant displayed as a label");
        }

        List<org.openqa.selenium.WebElement> colorLabel = pageobjects.ConnectedDeviceDetailsPage.ColorLabel;
        if (colorLabel.size() > 1) {
            Assert.fail("There are more than 1 capacity variant displayed as a label");
        }
        Screenshots.captureScreenshot();

    }

    public static void checkOnlyOneCapacityAvailable() throws Exception {
        // TODO Auto-generated method stub
        Thread.sleep(5000);
        List<org.openqa.selenium.WebElement> capacityLabel = pageobjects.ConnectedDeviceDetailsPage.CapacityLabel;
        if (capacityLabel.size() > 1) {
            Assert.fail("There are more than 1 capacity variant displayed as a label");
        }

        JavascriptExecutor js = (JavascriptExecutor) driver;
        WebElement color = pageobjects.ConnectedDeviceDetailsPage.ColorDropDown;
        js.executeScript("arguments[0].setAttribute('style', 'display:block;')", color);

        if (color.isDisplayed()) {
            List<WebElement> elementCount = new Select(color).getOptions();

            if (elementCount.size() <= 1) {
                Assert.fail("There are no more than 1 option available for color dropdown");
            }
        }
        Screenshots.captureScreenshot();
    }

    public static void checkOnlyOneColourAvailable() throws Exception {
        // TODO Auto-generated method stub
        Thread.sleep(5000);
        WebElement capacity = pageobjects.ConnectedDeviceDetailsPage.CapacityDropDown;
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].setAttribute('style', 'display:block;')", capacity);
        if (capacity.isDisplayed()) {
            List<WebElement> elementCount = new Select(capacity).getOptions();

            if (elementCount.size() >= 1) {
                Assert.fail("There are more than 1 option available for capacity dropdown");
            }
        }
        WebElement color = pageobjects.ConnectedDeviceDetailsPage.ColorDropDown;

        js.executeScript("arguments[0].setAttribute('style', 'display:block;')", color);

        if (color.isDisplayed()) {
            List<WebElement> elementCount = new Select(color).getOptions();

            if (elementCount.size() >= 1) {
                Assert.fail("There are more than 1 option available for color dropdown");
            }
        }
        Screenshots.captureScreenshot();
    }

    public static void colorSelectOfDeviceDropDown(String color) throws Exception {
        // TODO Auto-generated method stub
        //Thread.sleep(5000);

        //ConnectedDeviceDetailsPage.ColorDropDown.click();
        //WebElement ele = driver.findElement(By.xpath("(//span[@class='selectboxit-option-icon-container']/following-sibling::span[normalize-space()='" + color + "'])[1]"));

        //WebElement eleColor = driver.findElement(By.xpath("//ul[@id='colourSelectBoxItOptions']/li[1]"));
        if (driver.findElements(By.xpath("//ul[@id='colourSelectBoxItOptions' or @id='colorSelectBoxItOptions']/li")).size() > 0) {
            WebElement elementColor = null;
            String colorName = "";
            List<WebElement> eleColor = driver.findElements(By.xpath("//ul[@id='colourSelectBoxItOptions' or @id='colorSelectBoxItOptions']/li"));

            for (int i = 1; i <= eleColor.size(); i++) {
                colorName = driver.findElement(By.xpath("//ul[@id='colourSelectBoxItOptions' or @id='colorSelectBoxItOptions']/li[" + i + "]")).getText();
                Thread.sleep(2000);
                if (colorName.contains(color)) {
                    elementColor = driver.findElement(By.xpath("//ul[@id='colourSelectBoxItOptions' or @id='colorSelectBoxItOptions']/li[" + i + "]"));
                    break;
                }
            }

            Thread.sleep(3000);
            Point coordinates = elementColor.getLocation();
            Robot robot = new Robot();
            robot.mouseMove(coordinates.getX() + 120, coordinates.getY() + 120);
            Thread.sleep(2000);
            log.debug("Moving Mouse Color dropdown");

            Actions action = new Actions(driver);
            action.moveToElement(elementColor).click().build().perform();
            log.debug("Selected " + color + " from color dropdown\n");
            Thread.sleep(3000);
            Screenshots.captureScreenshot();

        }

         /*Actions act = new Actions(driver);
         Thread.sleep(3000);
        if(ele.isDisplayed()){
            System.out.println("Successfully selected the color: " + color);
        }else {
            //act.moveToElement(ele).click().build().perform();
            act.moveToElement(ele).build().perform();
            Thread.sleep(3000);
            JavascriptExecutor executor = (JavascriptExecutor)driver;
            executor.executeScript("arguments[0].click();", ele);
        }*/
        // ele.click();
        /*JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", element);*/
		/*if (element.isDisplayed()) {
			new Select(element).selectByVisibleText(color);
			log.debug("Selected" + color);
		}*/
    }

    public static void capacitySelectOfDeviceDropDown(String capacity) throws Exception {
        // TODO Auto-generated method stub
        Thread.sleep(5000);

        if (driver.findElements(By.xpath("//span/i[@id='memorySelectBoxItArrow']")).size() > 0) {
            ConnectedDeviceDetailsPage.CapacityDropDown.click();
            Thread.sleep(3000);
            Screenshots.captureScreenshot();
            //WebElement ele = driver.findElement(By.xpath("(//span[@class='selectboxit-option-icon-container']/following-sibling::span[normalize-space()='" + capacity + "'])[2]"));

        /*WebElement ele = driver.findElement(By.xpath("//a[@class='selectboxit-option-anchor' and normalize-space(.)='" + capacity + "']"));
        Actions act = new Actions(driver);
        act.moveToElement(ele).click().build().perform();*/

            WebElement elementCapacity = null;
            String colorName = "";
            List<WebElement> eleCapacity = driver.findElements(By.xpath("//ul[@id='memorySelectBoxItOptions']/li"));

            for (int i = 1; i <= eleCapacity.size(); i++) {
                colorName = driver.findElement(By.xpath("//ul[@id='memorySelectBoxItOptions']/li[" + i + "]")).getText();
                Thread.sleep(2000);
                if (colorName.contains(capacity)) {
                    elementCapacity = driver.findElement(By.xpath("//ul[@id='memorySelectBoxItOptions']/li[" + i + "]"));
                    break;
                }
            }

            Thread.sleep(3000);
            Point coordinates = elementCapacity.getLocation();
            Robot robot = new Robot();
            robot.mouseMove(coordinates.getX() + 80, coordinates.getY() + 100);
            Thread.sleep(2000);
            log.debug("Moving Mouse Color dropdown");

            Actions action = new Actions(driver);
            action.moveToElement(elementCapacity).click().build().perform();
            log.debug("Selected " + capacity + "from capacity dropdown");
            Thread.sleep(3000);
            Screenshots.captureScreenshot();
        }


        /*WebElement element = pageobjects.ConnectedDeviceDetailsPage.CapacityDropDown;
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("documents", element);
		WebElement capacitySel = driver.findElement(By.xpath("/*//*[@id='memorySelectBoxItArrowContainer']"));

		Actions act = new Actions(driver);
		act.moveToElement(capacitySel).click().build().perform();

		Select sel = new Select(capacitySel);
		sel.selectByValue(capacity);



		if (capacitySel.isDisplayed()) {
			capacitySel.click();
			log.debug("Selected" + capacity);
		}*/

    }

    public static void checkDevStatusAsPreOrder() throws IOException, InterruptedException {
        // TODO Auto-generated method stub
        // Have to change the below text
        log.debug("checkDevStatusAsPreOrder");
        String preoder = pageobjects.ConnectedDeviceDetailsPage.PreDevStatusMsg.getText();
        Thread.sleep(3000);
        log.debug("Stock status is :" + preoder);
        if (preoder.contains("Pre") || preoder.contains("Pre-order") || preoder.contains("Order by midnight")) {
            log.debug("Device is Pre Order Device");

        } else {
            log.debug("Device is not Pre Order Device");
            Assert.fail("Device is not Pre Order Device");
        }
        Screenshots.captureScreenshot();
    }

    public static void checkDevStatusAsDelayedDelivery() throws IOException, InterruptedException {
        // TODO Auto-generated method stub
        String deliveryMg = pageobjects.ConnectedDeviceDetailsPage.DevStatusMsg.getText();
        Thread.sleep(3000);
        if (deliveryMg.contains("Home delivery") || deliveryMg.contains("Order by midnight")) {
            log.debug("Device is Delayed Delivery Device: " + deliveryMg);

        } else {
            log.debug("Device is not Delayed Delivery Device");
            Assert.fail("Device is not Delayed Delivery Device");
        }
        Screenshots.captureScreenshot();
    }

    public static void checkDevStatusAsInStock() throws IOException {
        // TODO Auto-generated method stub
        if (pageobjects.ConnectedDeviceDetailsPage.DevStatusMsg.getText().contains("In Stock")) {
            log.debug("Device is in stock");

        } else {
            log.debug("Device is not in stock");
            Assert.fail("Device is not in stock");
        }
        Screenshots.captureScreenshot();
    }


    public static void UpdatedColordropdown() throws IOException, InterruptedException {
        // TODO Auto-generated method stub
        Thread.sleep(3000);
        if (pageobjects.ConnectedDeviceDetailsPage.UpdatedColorLabel.isDisplayed()) {
            log.debug("The color dropdown is displayed");
            Thread.sleep(3000);
           /* pageobjects.ConnectedDeviceDetailsPage.colorselectBoxArow.click();
            Thread.sleep(2000);*/
            if (driver.findElements(By.xpath("//span[@id='colourSelectBoxItArrowContainer' or @id='colorSelectBoxItArrowContainer']")).size() > 0) {
                JavascriptExecutor executor = (JavascriptExecutor) driver;
                executor.executeScript("arguments[0].click();", pageobjects.ConnectedDeviceDetailsPage.colorselectBoxArow);
                //pageobjects.ConnectedDeviceDetailsPage.colorselectBoxArow.click();
                log.debug("The colour dropdown is clicked");
                Screenshots.captureScreenshot();
            }
        } else {
            log.debug("colour drop down is not displayed");
            //Assert.fail("The colour dropdown is not displayed");
            Screenshots.captureScreenshot();
        }
    }


    public static void UpdatedColordropdownText() {

        if (pageobjects.ConnectedDeviceDetailsPage.Colourdropdownbox.isDisplayed()) {
            if (driver.findElements(By.xpath("//*[@id='colourSelectBoxItOptions' or @id='colorSelectBoxItOptions']")).size() > 0) {
                WebElement colourDropdown = driver.findElement(By.xpath("//*[@id='colourSelectBoxItOptions' or @id='colorSelectBoxItOptions']"));
                //a[@class='selectboxit-option-anchor']//span[@class='selectboxit-option-label']
                List<WebElement> elementColor = colourDropdown.findElements(By.xpath("(//*[@class='selectboxit-option-label'])"));
                log.debug("Available colour variants are : ");
                for (int i = 0; i < elementColor.size(); i++) {
                    log.debug(elementColor.get(i).getText());
                }
            }
        } else {
            log.debug("The color labels are not displayed");
        }

    }


    public static void chooseColourOfDevice(String colourOfDevice) throws IOException, InterruptedException {
        // TODO Auto-generated method stub
        Thread.sleep(3000);
        boolean isAvailabeRequiredColor = false;
        if (ConnectedDeviceDetailsPage.defaut_Selectd_Colour.getText().contains(colourOfDevice)) {
            log.debug("The Default selected colour is + " + colourOfDevice);
            Screenshots.captureScreenshot();
        } else if (driver.findElements(By.xpath("//span[@id='colourSelectBoxItArrowContainer']")).size() > 0) {
            WebElement colourDropdown = driver.findElement(By.xpath("//*[@id='colourSelectBoxItOptions' or @id='colorSelectBoxItOptions']"));
            List<WebElement> elementColor = colourDropdown.findElements(By.xpath("(//*[@class='selectboxit-option-label'])"));
            log.debug("Available colour variants are : ");
            driver.findElement(By.xpath("//span[@id='colourSelectBoxItArrowContainer']")).click();
            for (int i = 1; i <= elementColor.size(); i++) {
                String colourFromist = driver.findElement(By.xpath("(//*[@class='selectboxit-option-label'])[" + i + "]")).getText();

                if (colourFromist.contains(colourOfDevice)) {
                    driver.findElement(By.xpath("((//*[@class='selectboxit-option-label']))[" + i + "]")).click();
                    log.debug("Selected Device colour from the list is  + " + colourOfDevice);
                    isAvailabeRequiredColor = true;
                }
            }
        } else {
            log.debug("Selected Device colour from the list is not availabe so picking availabe one + " + ConnectedDeviceDetailsPage.defaut_Selectd_Colour.getText());

        }

        Screenshots.captureScreenshot();
    }


    public static void chooseCapacityOfDevice(String capacityOfDevice) throws IOException, InterruptedException {
        // TODO Auto-generated method stub
        Thread.sleep(3000);
        boolean isAvailabeRequiredCapacity = false;
        if (ConnectedDeviceDetailsPage.default_deviceCapacity.getText().contains(capacityOfDevice)) {
            log.debug("The Default selected Capacity is + " + capacityOfDevice);
            Screenshots.captureScreenshot();
        } else if (driver.findElements(By.xpath("//span[@id='memorySelectBoxItArrow']")).size() > 0) {

            List<WebElement> eleCapacity = driver.findElements(By.xpath("//select[@id='memory']//option"));
            log.debug("Available colour variants are : ");

            for (int i = 0; i < eleCapacity.size(); i++) {
                String colourFromist = eleCapacity.get(i).getText();
                if (colourFromist.contains(capacityOfDevice)) {
                    eleCapacity.get(i).click();
                    log.debug("Selected Device colour from the list is  + " + capacityOfDevice);
                }
            }
        } else {
            log.debug("Selected Device colour from the list is not availabe so picking availabe one + " + ConnectedDeviceDetailsPage.default_deviceCapacity.getText());

        }

        Screenshots.captureScreenshot();
    }

    /*********************************************************************************************************************************************************************
     * validation    : To validate the flexible refresh (ITFD - 466)                                                                                                 *
     * Created by    : Venkata                                                                                                                                       *
     * Created date  : 03/09/18     - August Release                                                                                                                 *
     * Modified by/date :                                                                                                                                            *
     * Reason to change:                                                                                                                                             *
     **********************************************************************************************************************************************************************/

    public static void flexibleReressh_CFA(String upFront, String term, String data) throws InterruptedException, IOException {
        upFrontCost = "";
        totalCostPerMonth = "";

        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,400)", "");
        Screenshots.captureScreenshot();
        Thread.sleep(2000);
        if (ConnectedDeviceDetailsPage.pay_monthly_TabName.isDisplayed()) {

            /*if (ConnectedDeviceDetailsPage.toggle_360_spin.isDisplayed()) {
                System.out.println("Successfully Displayed the toggle 36o spin device");
                log.info("Successfully Displayed the toggle 36o spin device");
            } else {
                System.out.println("Failed to Displayed the toggle 36o spin device");
                log.info("Failed to Displayed the toggle 36o spin device");
                //Assert.fail("Failed to Displayed the toggle 36o spin device");
            }*/
            /*if (ConnectedDeviceDetailsPage.toggle_gallery.isDisplayed()) {
                System.out.println("Successfully Displayed the toggle gallery");
                log.info("Successfully Displayed the toggle gallery");
            } else {
                System.out.println("Failed to Displayed the toggle gallery");
                log.info("Failed to Displayed the toggle gallery");
                //Assert.fail("Failed to Displayed the toggle gallery");
            }*/

            // not yet implemented from the dev team
                /*if (ConnectedDeviceDetailsPage.toggle_play_video.isDisplayed()) {
                    System.out.println("Successfully Displayed the toggle play video");
                    log.info("Successfully Displayed the toggle play video");
                } else {
                    System.out.println("Failed to Displayed the toggle play video");
                    log.info("Failed to Displayed the toggle play video");
                    Assert.fail("Failed to Displayed the toggle play video");
                }*/

            if (ConnectedDeviceDetailsPage.pay_monthly_flexible_refresh_section.isDisplayed()) {
                System.out.println("FR calc is Displayed");
                log.info("FR calc is Displayed");
            } else {
                System.out.println("Failed to Display FR calc");
                log.info("Failed to Display FR calc");
                Assert.fail("Failed to Display FR calc");
            }

            if (ConnectedDeviceDetailsPage.reSet_BuildYourPlan.isDisplayed()) {
                System.out.println("Displayed - Reset Calc link");
                log.info("Displayed - Reset Calc link");
            } else {
                System.out.println("Failed to Displayed the reSet calc link");
                log.info("Failed to Displayed the reSet calc link");
                Assert.fail("Failed to Displayed the reSet calc link");
            }

            if (ConnectedDeviceDetailsPage.offersIncluded.isDisplayed()) {
                System.out.println("Displayed - Offers Included header in Calc");
                log.info("Displayed - Offers Included header in Calc");
            } else {
                System.out.println("Failed to Display - Offers Included header in Calc");
                log.info("Failed to Displayed the reSet calc");
                Assert.fail("Failed to Displayed the reSet calc");
            }

            if (ConnectedDeviceDetailsPage.totalPrice.isDisplayed()) {
                System.out.println("Displayed - Total Price per month ");
                log.info("Displayed - Total Price per month ");
            } else {
                System.out.println("Failed to Display - Total Price per month");
                log.info("Failed to Displayed- Total Price per month");
                Assert.fail("Failed to Displayed- Total Price per month");
            }


            if (ConnectedDeviceDetailsPage.chooseThisPlan.isDisplayed()) {
                System.out.println("Displayed - Choose This plan in Calc ");
                log.info("Displayed - Choose This plan in Calc ");
            } else {
                System.out.println("Failed to Display - Choose This plan in Calc");
                log.info("Failed to Displayed- Choose This plan in Calc");
                Assert.fail("Failed to Displayed- Choose This plan in Calc");
            }

            if (ConnectedDeviceDetailsPage.seeOurPlans.isDisplayed()) {
                System.out.println("Displayed - See our plans link ");
                log.info("Displayed - See our plans link ");
            } else {
                System.out.println("Failed to Display -  See our plans link");
                log.info("Failed to Displayed -  See our plans link");
                Assert.fail("Failed to Displayed -  See our plans link");
            }


            if (ConnectedDeviceDetailsPage.reSet_BuildYourPlan.isDisplayed()) {
                System.out.println("Displayed - Reset Build your plan ");
                log.info("Displayed - Reset Build your plan ");
            } else {
                System.out.println("Failed to Display -  Reset Build your plan");
                log.info("Failed to Displayed -  Reset Build your plan");
                Assert.fail("Failed to Displayed - Reset Build your plan");
            }

            if (ConnectedDeviceDetailsPage.calc_msg.isDisplayed()) {
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
                    //String minValUpfrnt = (String) ConnectedDeviceDetailsPage.minVal_Upfrent.getText().subSequence(5, 7);
                    //String upFrntVal = ConnectedDeviceDetailsPage.upfrentVal.getText().substring(1, 3);

                    int minUpfrentSize = ConnectedDeviceDetailsPage.minVal_Upfrent.getText().length();
                    String minValUpfrnt = (String) ConnectedDeviceDetailsPage.minVal_Upfrent.getText().subSequence(5, minUpfrentSize);
                    Thread.sleep(2000);

                    int upfrentSize = ConnectedDeviceDetailsPage.upfrentVal.getText().length();
                    String upFrntVal = ConnectedDeviceDetailsPage.upfrentVal.getText().substring(1, upfrentSize-3);
                    Thread.sleep(2000);

                    if (driver.findElements(By.xpath("//div[contains(@data-calc,'upfront')]/..//div[contains(@class,'min-icon')]/..//div[contains(@class,'min-icon disable')]")).size() <= 0) {
                        CommonActions.clickWebElement(ConnectedDeviceDetailsPage.minIcon_Upfrent);
                    }

                    if (minValUpfrnt.contains(upFrntVal) && ConnectedDeviceDetailsPage.minIcon_Upfrent_disiabled.isDisplayed()) {
                        log.info("The Upfront cost is changes to minimum - " + ConnectedDeviceDetailsPage.minVal_Upfrent.getText());
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
                    //String maxValUpfrnt = (String) ConnectedDeviceDetailsPage.maxVal_Upfrent.getText().subSequence(5, 7);
                    //String upFrntVal = ConnectedDeviceDetailsPage.upfrentVal.getText().substring(1, 3);

                    int maxUpfrentSize = ConnectedDeviceDetailsPage.maxVal_Upfrent.getText().length();
                    String maxValUpfrnt = (String) ConnectedDeviceDetailsPage.maxVal_Upfrent.getText().subSequence(5, maxUpfrentSize);
                    Thread.sleep(2000);

                    int upfrentSize = ConnectedDeviceDetailsPage.upfrentVal.getText().length();
                    String upFrntVal = ConnectedDeviceDetailsPage.upfrentVal.getText().substring(1, upfrentSize-3);
                    Thread.sleep(2000);

                    //if (driver.findElements(By.xpath("//div[contains(@data-calc,'upfront')]/..//div[contains(@class,'max-icon')]/..//div[contains(@class,'max-icon calc-track-element disable')]")).size() <= 0) {
                    if (driver.findElements(By.xpath("//div[contains(@data-calc,'upfront')]/..//div[contains(@class,'max-icon')]/..//div[contains(@class,'max-icon disable')]")).size() <= 0) {
                        CommonActions.clickWebElement(ConnectedDeviceDetailsPage.maxIcon_Upfrent);
                    }

                    //if (maxValUpfrnt.contains(upFrntVal) && ConnectedDeviceDetailsPage.maxIcon_Upfrent_disiabled.isDisplayed()) {

                    if (maxValUpfrnt.contains(upFrntVal) && (driver.findElements(By.xpath("//div[contains(@data-calc,'upfront')]/..//div[contains(@class,'max-icon')]/..//div[contains(@class,'max-icon disable')]")).size() >0)) {
                        log.info("the Upfront cost is changes to maximum - " + ConnectedDeviceDetailsPage.maxVal_Upfrent.getText());
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
                if (driver.findElements(By.xpath("//div[contains(@data-calc,'upfront')]/..//div[contains(@class,'min-icon')]/..//div[contains(@class,'min-icon disable')]")).size() > 0) {
                    // CommonActions.clickWebElement(ConnectedDeviceDetailsPage.minIcon_Upfrent);
                    CommonActions.clickWebElement(ConnectedDeviceDetailsPage.maxIcon_Upfrent);
                }

                if (driver.findElements(By.xpath("//div[contains(@data-calc,'upfront')]/..//div[contains(@class,'max-icon')]/..//div[contains(@class,'max-icon disable')]")).size() > 0) {
                    // CommonActions.clickWebElement(ConnectedDeviceDetailsPage.maxIcon_Upfrent);
                    CommonActions.clickWebElement(ConnectedDeviceDetailsPage.minIcon_Upfrent);
                }

                if (driver.findElements(By.xpath("//div[contains(@data-calc,'upfront')]/..//div[contains(@class,'max-icon')]/..//div[contains(@class,'min-icon disable')]")).size() <= 0 && driver.findElements(By.xpath("//div[contains(@data-calc,'upfront')]/..//div[contains(@class,'min-icon')]/..//div[contains(@class,'min-icon disable')]")).size() <= 0) {
                    log.info("the Upfront cost is changes to average  - " + ConnectedDeviceDetailsPage.minVal_Upfrent.getText());
                    log.info("the Upfront cost is changes to average - " + ConnectedDeviceDetailsPage.minVal_Upfrent.getText());
                } else {
                    log.info("Failed to Display - the Upfront cost is changes to average  - " + ConnectedDeviceDetailsPage.minVal_Upfrent.getText());
                    log.info("Failed to Display - the Upfront cost is changes to average - " + ConnectedDeviceDetailsPage.minVal_Upfrent.getText());
                    Assert.fail("the Upfront cost is changes to average");
                }
            }


            if (term.equalsIgnoreCase("Min")) {
                boolean b = false;
                for (int i = 1; i < 37; i++) {
                    String termMinVal = ConnectedDeviceDetailsPage.minVal_term.getText();
                    StringTokenizer st = new StringTokenizer(termMinVal, " ");
                    st.nextToken();
                    String str = st.nextToken();
                    String termValue = ConnectedDeviceDetailsPage.termVal.getText();

                    if (driver.findElements(By.xpath("//div[contains(@data-calc,'term')]/..//div[contains(@class,'min-icon')]/..//div[contains(@class,'min-icon disable')]")).size() <= 0) {
                        CommonActions.clickWebElement(ConnectedDeviceDetailsPage.minIcon_term);
                    }
                    if (termValue.equalsIgnoreCase(str) && ConnectedDeviceDetailsPage.minIcon_term_disable.isDisplayed()) {
                        log.info("Displayed - term " + ConnectedDeviceDetailsPage.minVal_term.getText());
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

                    String maxvalTerm = ConnectedDeviceDetailsPage.maxVal_term.getText();
                    StringTokenizer st = new StringTokenizer(maxvalTerm, " ");
                    st.nextToken();
                    String str = st.nextToken();
                    String termValue = ConnectedDeviceDetailsPage.termVal.getText();

                    if (driver.findElements(By.xpath("//div[contains(@data-calc,'term')]/..//div[contains(@class,'max-icon')]/..//div[contains(@class,'max-icon disable')]")).size() <= 0) {
                        CommonActions.clickWebElement(ConnectedDeviceDetailsPage.maxIcon_term);
                    }
                    if (termValue.equalsIgnoreCase(str) && ConnectedDeviceDetailsPage.maxIcon_term_Disable.isDisplayed()) {
                        log.info("The Term cost is changes to maximum - " + ConnectedDeviceDetailsPage.maxVal_term.getText());
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
                if (driver.findElements(By.xpath("//div[contains(@data-calc,'term')]/..//div[contains(@class,'min-icon')]/..//div[contains(@class,'min-icon disable')]")).size() > 0) {
                    CommonActions.clickWebElement(ConnectedDeviceDetailsPage.maxIcon_term);
                }
                if (driver.findElements(By.xpath("//div[contains(@data-calc,'term')]/..//div[contains(@class,'max-icon')]/..//div[contains(@class,'max-icon disable')]")).size() > 0) {
                    CommonActions.clickWebElement(ConnectedDeviceDetailsPage.minIcon_term);
                }

                if (driver.findElements(By.xpath("//div[contains(@data-calc,'term')]/..//div[contains(@class,'max-icon')]/..//div[contains(@class,'max-icon disable')]")).size() <= 0 && driver.findElements(By.xpath("//div[contains(@data-calc,'term')]/..//div[contains(@class,'min-icon')]/..//div[contains(@class,'min-icon disable')]")).size() <= 0) {
                    log.info("the term cost is changes to average  - " + ConnectedDeviceDetailsPage.minVal_term.getText());
                    log.info("the term cost is changes to average - " + ConnectedDeviceDetailsPage.maxVal_term.getText());
                } else {
                    log.info("Failed to Display - the term cost is changes to average   - " + ConnectedDeviceDetailsPage.minVal_term.getText());
                    log.info("Failed to Display - the term cost is changes to average - " + ConnectedDeviceDetailsPage.maxVal_term.getText());
                    Assert.fail("the term cost is changes to average");
                }
            }
        }


        if (data.equalsIgnoreCase("min")) {
            boolean b = false;
            for (int i = 1; i < 30; i++) {
                String minData = ConnectedDeviceDetailsPage.minVal_data.getText();
                StringTokenizer st = new StringTokenizer(minData, " ");
                st.nextToken();
                String sst = st.nextToken();
                String dataValue = ConnectedDeviceDetailsPage.dataVal.getText();

                if (driver.findElements(By.xpath("//div[contains(@data-calc,'tariff')]/..//div[contains(@class,'min-icon')]/..//div[contains(@class,'min-icon disable')]")).size() <= 0) {
                    CommonActions.clickWebElement(ConnectedDeviceDetailsPage.minIcon_data);
                }
                if (dataValue.equalsIgnoreCase(sst) && ConnectedDeviceDetailsPage.minIcon_data_disable.isDisplayed()) {
                    log.info("the Data cost is changes to minimum - " + ConnectedDeviceDetailsPage.minVal_data.getText());
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
                String maDataVal = ConnectedDeviceDetailsPage.maxVal_data.getText();
                StringTokenizer st = new StringTokenizer(maDataVal, " ");
                st.nextToken();
                String sst1 = st.nextToken();
                String dataValue = ConnectedDeviceDetailsPage.dataVal.getText();

                if (driver.findElements(By.xpath("//div[contains(@data-calc,'tariff')]/..//div[contains(@class,'max-icon')]/..//div[contains(@class,'max-icon disable')]")).size() <= 0) {
                    CommonActions.clickWebElement(ConnectedDeviceDetailsPage.maxIcon_data);
                }
                if (dataValue.equalsIgnoreCase(sst1) && ConnectedDeviceDetailsPage.maxIcon_data_Disable.isDisplayed()) {
                    log.info("the Data cost is changes to maximum - " + ConnectedDeviceDetailsPage.maxVal_data.getText());
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
            if (driver.findElements(By.xpath("//div[contains(@data-calc,'tariff')]/..//div[contains(@class,'min-icon')]/..//div[contains(@class,'min-icon disable')]")).size() > 0) {
                CommonActions.clickWebElement(ConnectedDeviceDetailsPage.maxIcon_data);
            }

            if (driver.findElements(By.xpath("//div[contains(@data-calc,'tariff')]/..//div[contains(@class,'max-icon')]/..//div[contains(@class,'max-icon disable')]")).size() > 0) {
                CommonActions.clickWebElement(ConnectedDeviceDetailsPage.minIcon_data);
            }

            if (driver.findElements(By.xpath("//div[contains(@data-calc,'tariff')]/..//div[contains(@class,'max-icon')]/..//div[contains(@class,'max-icon disable')]")).size() <= 0 && driver.findElements(By.xpath("//div[contains(@data-calc,'tariff')]/..//div[contains(@class,'min-icon')]/..//div[contains(@class,'max-icon disable')]")).size() <= 0) {
                log.info("the Dat cost is changes to average  - " + ConnectedDeviceDetailsPage.minVal_Upfrent.getText());
                log.info("the Data cost is changes to average - " + ConnectedDeviceDetailsPage.minVal_Upfrent.getText());
            } else {
                log.info("Failed to Display - the Data cost is changes to average  - " + ConnectedDeviceDetailsPage.minVal_Upfrent.getText());
                log.info("Failed to Display - the Data cost is changes to average - " + ConnectedDeviceDetailsPage.minVal_Upfrent.getText());
                Assert.fail("the Data cost is changes to average");
            }
        }

        totalCostPerMonth = ConnectedDeviceDetailsPage.totalPrice.getText();
        upFrontCost = ConnectedDeviceDetailsPage.upfrentVal.getText();
        Screenshots.captureScreenshot();
        Thread.sleep(3000);
        CommonActions.clickWebElement(ConnectedDeviceDetailsPage.chooseThisPlan);
        log.debug("Clicked on Choose this plan CTA\n");
        Thread.sleep(15000);
        log.debug("We are at TnE page\n");
        Screenshots.captureScreenshot();

        jse.executeScript("window.scrollBy(0,-200)", "");
        Thread.sleep(2000);
        Screenshots.captureScreenshot();

        String TnEPageFRCalcupFrontCost = ConnectedDeviceDetailsPage.upfrentVal.getText();
        Thread.sleep(3000);
        String TnEPageNewLayoutupFrontCost = ConnectedDeviceDetailsPage.upfrentVal_NewLayout.getText();
        Thread.sleep(4000);

        if (TnEPageFRCalcupFrontCost.contains(upFrontCost) || TnEPageNewLayoutupFrontCost.contains(upFrontCost)) {
            System.out.println("The Monthly upfront price from the PD page and TnE FR Calc Upfront value are matched  + ie, ::: " + upFrontCost);
            log.debug("The Monthly upfront price from the PD page and TnE FR Calc Upfront value are matched  + ie, ::: " + upFrontCost);
        } else {
            System.out.println(" Not Matched = ==The Monthly upfront price from the PD page and TnE FR Calc Upfront value are not matched  + ie, ::: " + upFrontCost);
            log.debug(" Not Matched = ==The Monthly upfront price from the PD page and TnE FR Calc Upfront value are not matched  + ie, ::: " + upFrontCost);
            Assert.fail(" Not Matched = ==The Monthly upfront price from the PD page and TnE FR Calc Upfront value are not matched  + ie, ::: " + upFrontCost);
        }

        scrollToAnElement.scrollToElement(driver.findElement(By.xpath("//div[contains(text(),'Your Spend Cap')] | //div/p/span[contains(text(),'Your Spend Cap')] | (//div/h2[contains(normalize-space(),'Your Spend Cap')])[1]")));
        Thread.sleep(3000);
        Screenshots.captureScreenshot();

       //Bill Spend Cap section
       WebElement dontCapMyBill = driver.findElement(By.xpath("//button[@id='dontcap']"));

       if(dontCapMyBill.isDisplayed()){
           CommonActions.clickWebElement(dontCapMyBill);
           log.debug("Dont Cap My Bill CTA is clicked\n");
       }
        Thread.sleep(3000);
        Screenshots.captureScreenshot();

        /*
        //Mini Basket Validation
        if(driver.findElements(By.xpath("//section[@class='product-details']")).size()>0) {
            if (ConnectedDeviceDetailsPage.prodctDetails_TnE.isDisplayed()) {

                CommonActions.scrollToElement(ConnectedDeviceDetailsPage.totalCost_BasketPage);
                Thread.sleep(3000);
                Screenshots.captureScreenshot();
                String totalCost_TnE = ConnectedDeviceDetailsPage.totalCost_BasketPage.getText();
                System.out.println("The Total price is + ::: " + totalCost_TnE);
                log.debug("The Total price is + ::: " + totalCost_TnE);

                if (totalCost_TnE.contains(totalCostPerMonth)) {
                    System.out.println(" Matched = == The Upfront price from the PD page and TnE page are matched  + ::: " + totalCost_TnE + " & " + totalCostPerMonth);
                    log.debug(" Matched = == The Upfront price from the PD page and TnE page are matched  + ::: " + totalCost_TnE + " & " + totalCostPerMonth);
                } else {
                    System.out.println(" Not Matched = == The Upfront price from the PD page and TnE page are matched  + ::: " + totalCost_TnE + " & " + totalCostPerMonth);
                    log.debug(" Not Matched = == The Upfront price from the PD page and TnE page are matched  + ::: " + totalCost_TnE + " & " + totalCostPerMonth);
                }

                if (totalCost_TnE.contains(upFrontCost)) {
                    System.out.println(" Matched = == The Monthly price from the PD page and TnE page are matched  + ::: " + totalCost_TnE + " & " + upFrontCost);
                    log.debug(" Matched = == The Monthly price from the PD page and TnE page are matched  + ::: " + totalCost_TnE + " & " + upFrontCost);
                } else {
                    System.out.println(" Not Matched = == The Monthly price from the PD page and TnE page are matched  + ::: " + totalCost_TnE + " & " + upFrontCost);
                    log.debug(" Not Matched = == The Monthly price from the PD page and TnE page are matched  + ::: " + totalCost_TnE + " & " + upFrontCost);

                }
                if (ConnectedDeviceDetailsPage.prodctDetails_TnE.isDisplayed()) {
                    String ProductDeatails_TnE = ConnectedDeviceDetailsPage.prodctDetails_TnE.getText();
                    System.out.println("The Product details in TnE are  + ::: " + ProductDeatails_TnE);
                    log.debug("The Product details in TnE are  + ::: " + ProductDeatails_TnE);
                }
            }
        }*/
    }


    public static void clickLink() throws InterruptedException {
        //Thread.sleep(3000);
        if (driver.findElements(By.xpath("(//a[normalize-space()='View phone details'])[2]")).size() > 0) {
            CommonActions.clickWebElement(ConnectedDeviceDetailsPage.clickLink4CFU);
        }

        if (driver.findElements(By.xpath("(//a[normalize-space()='View phone details'])[1]")).size() > 0) {
            driver.findElement(By.xpath("(//a[normalize-space()='View phone details'])[1]")).click();
        }

        Thread.sleep(6000);
    }

    //*[@id='colourSelectBoxItText']

}