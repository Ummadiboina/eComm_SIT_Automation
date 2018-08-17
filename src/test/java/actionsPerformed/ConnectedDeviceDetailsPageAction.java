package actionsPerformed;

import java.awt.*;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import GlobalActions.scrollToAnElement;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.Point;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import GlobalActions.Screenshots;
import helpers.Environment;
import pageobjects.ConnectedDeviceDetailsPage;
import pageobjects.MouseHoverPage;

//This page will have details on the individual device

public class ConnectedDeviceDetailsPageAction extends Environment {

    final static Logger log = Logger.getLogger("ConnectedDeviceDetailsPageAction");

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

    public static void ViewAllTariffs() throws InterruptedException, IOException {
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        log.debug("Entering ViewAllTariffs() function ");

        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,600)", "");
        Thread.sleep(2000);
        // pageobjects.ConnectedDeviceDetailsPage.ViewOurTariffs.click();

        //scrollToAnElement.scrollToElement(pageobjects.ConnectedDeviceDetailsPage.ViewOurTariffs);
        Screenshots.captureScreenshot();
        /*WebElement ele1 = pageobjects.ConnectedDeviceDetailsPage.ViewOurTariffs;
        jse.executeScript("arguments[0].click();", ele1);*/

        if(driver.findElements(By.xpath("(//a[normalize-space()='See our plans'])[1]")).size()>0) {
            if(pageobjects.ConnectedDeviceDetailsPage.SeeOurplans.isDisplayed()) {
                WebElement ele1 = pageobjects.ConnectedDeviceDetailsPage.SeeOurplans;
                jse.executeScript("arguments[0].click();", ele1);
                log.debug("Clicked on ViewOurTariffs/ See our plans");
            }else{
                WebElement ele1 = pageobjects.ConnectedDeviceDetailsPage.AddtoBasket;
                jse.executeScript("arguments[0].click();", ele1);
                log.debug("Clicked on Add to basket CTA at device details page to land on T&E page");
            }
        }
        Thread.sleep(7000);
        // driver.findElement(By.id("deviceDetailsSubmit")).click();

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
        Thread.sleep(5000);

        //ConnectedDeviceDetailsPage.ColorDropDown.click();
         //WebElement ele = driver.findElement(By.xpath("(//span[@class='selectboxit-option-icon-container']/following-sibling::span[normalize-space()='" + color + "'])[1]"));

         //WebElement eleColor = driver.findElement(By.xpath("//ul[@id='colourSelectBoxItOptions']/li[1]"));
             WebElement elementColor=null;
             String colorName="";
             List<WebElement> eleColor = driver.findElements(By.xpath("//ul[@id='colourSelectBoxItOptions' or @id='colorSelectBoxItOptions']/li"));

             for (int i = 1; i <=eleColor.size(); i++) {
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
             log.debug("Selected " + color + "from color dropdown");
             Screenshots.captureScreenshot();
             Thread.sleep(3000);

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

        ConnectedDeviceDetailsPage.CapacityDropDown.click();
        Thread.sleep(3000);
        Screenshots.captureScreenshot();
        //WebElement ele = driver.findElement(By.xpath("(//span[@class='selectboxit-option-icon-container']/following-sibling::span[normalize-space()='" + capacity + "'])[2]"));

        /*WebElement ele = driver.findElement(By.xpath("//a[@class='selectboxit-option-anchor' and normalize-space(.)='" + capacity + "']"));
        Actions act = new Actions(driver);
        act.moveToElement(ele).click().build().perform();*/

        WebElement elementCapacity=null;
        String colorName="";
        List<WebElement> eleCapacity = driver.findElements(By.xpath("//ul[@id='memorySelectBoxItOptions']/li"));

        for (int i = 1; i <=eleCapacity.size(); i++) {
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

    public static void checkDevStatusAsPreOrder() throws IOException {
        // TODO Auto-generated method stub
        // Have to change the below text
        log.debug("checkDevStatusAsPreOrder");
        String preoder = pageobjects.ConnectedDeviceDetailsPage.PreDevStatusMsg.getText();
        log.debug("Stock status is :" + preoder);
        if (preoder.contains("Pre") || preoder.contains("Pre-order") || preoder.contains("Order by midnight")) {
            log.debug("Device is Pre Order Device");

        } else {
            log.debug("Device is not Pre Order Device");
            Assert.fail("Device is not Pre Order Device");
        }
        Screenshots.captureScreenshot();
    }

    public static void checkDevStatusAsDelayedDelivery() throws IOException {
        // TODO Auto-generated method stub
        String deliveryMg = pageobjects.ConnectedDeviceDetailsPage.DevStatusMsg.getText();
        if (deliveryMg.contains("Home delivery") || deliveryMg.contains("Order by midnight")) {
            log.debug("Device is Delayed Delivery Device");

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
            JavascriptExecutor executor = (JavascriptExecutor) driver;
            executor.executeScript("arguments[0].click();", pageobjects.ConnectedDeviceDetailsPage.colorselectBoxArow);
            //pageobjects.ConnectedDeviceDetailsPage.colorselectBoxArow.click();
            log.debug("The colour dropdown is clicked");
            Screenshots.captureScreenshot();
        } else {
            log.debug("colour drop down is not displayed");
            //Assert.fail("The colour dropdown is not displayed");
            Screenshots.captureScreenshot();
        }

    }

    public static void UpdatedColordropdownText() {

        if (pageobjects.ConnectedDeviceDetailsPage.Colourdropdownbox.isDisplayed()) {
            WebElement colourDropdown = driver.findElement(By.xpath("//*[@id='colourSelectBoxItOptions' or @id='colorSelectBoxItOptions']"));
            //a[@class='selectboxit-option-anchor']//span[@class='selectboxit-option-label']
            List<WebElement> elementColor = colourDropdown.findElements(By.xpath("(//*[@class='selectboxit-option-label'])"));
            log.debug("Available colour variants are : ");
            for (int i = 0; i < elementColor.size(); i++) {
                log.debug(elementColor.get(i).getText());
            }
        } else {
            log.debug("The color labels are not displayed");
        }

    }



    /*********************************************************************************************************************************************************************
     * validation    : To validate the flexible refresh (ITFD - 466)                                                                                                 *
     * Created by    : Venkata                                                                                                                                       *
     * Created date  : 02/08/18     - August Release                                                                                                                 *
     * Modified by/date :                                                                                                                                            *
     * Reason to change:                                                                                                                                             *
     **********************************************************************************************************************************************************************/
        public static void flexibleReressh_CFA() {
            if (ConnectedDeviceDetailsPage.pay_monthly_TabName.isDisplayed()) {

                if (ConnectedDeviceDetailsPage.toggle_360_spin.isDisplayed()) {
                    System.out.println("Successfully Displayed the toggle 36o spin device");
                    log.info("Successfully Displayed the toggle 36o spin device");
                } else {
                    System.out.println("Failed to Displayed the toggle 36o spin device");
                    log.info("Failed to Displayed the toggle 36o spin device");
                    Assert.fail("Failed to Displayed the toggle 36o spin device");
                }


                if (ConnectedDeviceDetailsPage.toggle_gallery.isDisplayed()) {
                    System.out.println("Successfully Displayed the toggle gallery");
                    log.info("Successfully Displayed the toggle gallery");
                } else {
                    System.out.println("Failed to Displayed the toggle gallery");
                    log.info("Failed to Displayed the toggle gallery");
                    Assert.fail("Failed to Displayed the toggle gallery");
                }

                if (ConnectedDeviceDetailsPage.toggle_play_video.isDisplayed()) {
                    System.out.println("Successfully Displayed the toggle play video");
                    log.info("Successfully Displayed the toggle play video");
                } else {
                    System.out.println("Failed to Displayed the toggle play video");
                    log.info("Failed to Displayed the toggle play video");
                    Assert.fail("Failed to Displayed the toggle play video");
                }

                if (ConnectedDeviceDetailsPage.pay_monthly_flexible_refresh_section.isDisplayed()) {
                    System.out.println("Successfully Displayed pay monthly flexible refresh section");
                    log.info("Successfully Displayed the pay monthly flexible refresh section");
                } else {
                    System.out.println("Failed to Displayed the pay monthly flexible refresh section");
                    log.info("Failed to Displayed the pay monthly flexible refresh section");
                    Assert.fail("Failed to Displayed the pay monthly flexible refresh section");
                }

                if (ConnectedDeviceDetailsPage.reSet_BuildYourPlan.isDisplayed()) {
                    System.out.println("Successfully Displayed reSet to build your plan");
                    log.info("Successfully Displayed the reSet to build your plan");
                } else {
                    System.out.println("Failed to Displayed the reSet to build your plan");
                    log.info("Failed to Displayed the reSet to build your plan");
                    Assert.fail("Failed to Displayed the reSet to build your plan");
                }


                //Up front validati


                WebElement colourDropdown = driver.findElement(By.xpath("//*[@id='colourSelectBoxItOptions']"));
                List<WebElement> elementColor = colourDropdown.findElements(By.xpath("(//*[@class='selectboxit-option-label'])[1]"));
                for (int i = 0; i < elementColor.size(); i++) {
                    log.debug(elementColor.get(i).getText());
                }
            } else {
                log.debug("The colour labels are not displayed");
                log.debug("The colour labels are not displayed");
            }
        }


        public static  void upFrontCalc_click(){




    }







    //*[@id='colourSelectBoxItText']

}


