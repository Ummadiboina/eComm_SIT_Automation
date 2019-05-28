package actionsPerformed;

import java.awt.*;
import java.io.IOException;
import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import GlobalActions.Screenshots;
import helpers.Environment;
import pageobjects.NonConnectedDeviceDetailsPage;

public class SmartwatchesPageActions extends Environment {

	final static Logger log = Logger.getLogger("SmartwatchesPageActions");

	public static void Elementdisplayvalidation(String Tabname) throws IOException {
		log.debug(" ");

		log.debug("Smartwatches_Page_Validation");

		if (Tabname != null) {
			switch (Tabname.toLowerCase()) {
				case "filter":
					if (pageobjects.SmartwatchesPage.SmartwatchesFilterTab.isDisplayed()) {
						log.debug("The Filter Tab is Present on the FitnessPage and the Text is :"
								+ pageobjects.SmartwatchesPage.SmartwatchesFilterTab.getText());
					} else {
						log.debug("The  Filter Tab is not Present on the FitnessPage and the Text is :"
								+ pageobjects.SmartwatchesPage.SmartwatchesFilterTab.getText());
					}
					break;
				case "sort":
					if (pageobjects.SmartwatchesPage.SmartwatchesSortTab.isDisplayed()) {
						log.debug("The Sort Tab is Present on the FitnessPage and the Text is :"
								+ pageobjects.SmartwatchesPage.SmartwatchesSortTab.getText());
					} else {
						log.debug("The  Sort  Tab is not Present on the FitnessPage and the Text is :"
								+ pageobjects.SmartwatchesPage.SmartwatchesSortTab.getText());
					}
					break;

			}

		}
		Screenshots.captureScreenshot();

	}

	public static void ElementClickAction(String elementname) throws IOException {
		// TODO Auto-generated method stub
		log.debug(" ");

		log.debug("Smartwatches_Page_Action");

		if (elementname != null) {
			switch (elementname.toLowerCase()) {
				case "filter":
					pageobjects.SmartwatchesPage.SmartwatchesFilterTab.click();
					break;
				case "sort":
					pageobjects.SmartwatchesPage.SmartwatchesSortTab.click();
					break;

			}

		}
		Screenshots.captureScreenshot();
	}

	public static void DeviceSelect(String elementName) throws IOException {
		try {

			log.debug("Selecting Device only tab\n");
			driver.findElement(By.xpath("//div[@class='contract-type-tabs']/ul/li[2]")).click();
			log.debug("Device only tab selected\n");
			Thread.sleep(6000);

			if (elementName.contains("Random Device")) {
				log.debug("Going to select Random Device");
				Thread.sleep(2000);
				JavascriptExecutor executor = (JavascriptExecutor) driver;
				executor.executeScript("arguments[0].click();", pageobjects.SmartwatchesPage.RandomSmartWatch);
				//pageobjects.SmartwatchesPage.RandomSmartWatch.click();
				Thread.sleep(2000);
				log.debug("Clicked Random Device");

			}else if (elementName.contains("Samsung Galaxy Gear")) {
				log.debug("Going to select SamsungGalaxyGear");

				pageobjects.SmartwatchesPage.SamsungGalaxyGear.click();
				Thread.sleep(15000);

				log.debug("Clicked SamsungGalaxyGear");
			} else if (elementName.contains("Samsung Gear S2")) {
				pageobjects.SmartwatchesPage.SamsungGearS2.click();
				Thread.sleep(15000);
				log.debug("Selected SamsungGearS2");

			} else if (elementName.contains("Pebble Original")) {
				pageobjects.SmartwatchesPage.PebbleOriginal.click();
				Thread.sleep(15000);
				log.debug("Selected PebbleOriginal");

			}
			Screenshots.captureScreenshot();

		} catch (Exception e) {
			// TODO Auto-generated catch block
			log.debug("Unable to select " + elementName + " device");
			// Assert.fail("Unable to select "+elementName+" device");
			Screenshots.captureScreenshot();

		}
	}

	/**
	 * @throws InterruptedException
	 * @throws IOException
	 */
	public static void AddtoBasketSmartwatchTracker() throws InterruptedException, IOException {

		try {
			// Below will give status like in stock / out of stock etc
			Thread.sleep(5000);

			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,100)", "");
			Thread.sleep(3000);
			Screenshots.captureScreenshot();

			//String status = driver.findElement(By.className("status-info")).getText();
			String status = driver.findElement(By.xpath("//p[@class='delivery-information']/span[1] | //div[@class='stockStatus']")).getText();

			log.debug("Delivery Information status:"+status);
			Thread.sleep(3000);
			if (status.contains("In Stock") || status.contains("Home delivery in")) {

				if (driver.findElements(By.xpath("//span[@id='accyQuantitySelectBoxItArrowContainer']")).size() > 0) {
					//NonConnectedDeviceDetailsPage.QuantityDropdown.click();
					driver.findElement(By.xpath("//span[@id='accyQuantitySelectBoxItArrowContainer']")).click();
					Thread.sleep(3000);
					Screenshots.captureScreenshot();

					WebElement elementQuantity = null;
					String quantityName = "";
					List<WebElement> eleQuantity = driver.findElements(By.xpath("//ul[@id='accyQuantitySelectBoxItOptions']/li"));

					for (int i = 1; i <= eleQuantity.size(); i++) {
						quantityName = driver.findElement(By.xpath("//ul[@id='accyQuantitySelectBoxItOptions']/li[" + i + "]")).getText();
						Thread.sleep(2000);
						if (quantityName.contains("1")) {
							elementQuantity = driver.findElement(By.xpath("//ul[@id='accyQuantitySelectBoxItOptions']/li[" + i + "]"));
							break;
						}
					}

					Thread.sleep(3000);
					Point coordinates = elementQuantity.getLocation();
					Robot robot = new Robot();
					robot.mouseMove(coordinates.getX() + 80, coordinates.getY() + 100);
					Thread.sleep(2000);
					log.debug("Moving Mouse Color dropdown");

					Actions action = new Actions(driver);
					action.moveToElement(elementQuantity).click().build().perform();
					log.debug("Selected quantity from quantity dropdown");
					Thread.sleep(3000);
					Screenshots.captureScreenshot();
					Thread.sleep(2000);
					log.debug("Adding item to basket\n");
					driver.findElement(By.xpath("//button[@id='addToBasket-nonconnected-accessories']")).click();
				}

                    /*WebElement element = driver
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

                    Thread.sleep(3000);*/

			} else {
				driver.navigate().back();
				Thread.sleep(3000);
				SmartwatchesPageActions.DeviceSelect("Random Device");
				Screenshots.captureScreenshot();
			}
			Screenshots.captureScreenshot();
		} catch (Exception e) {
			WebElement DeviceDetailsQuantity = driver.findElement(
					By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
			String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
			log.debug(DeviceDetailsQuantityValue);
			Assert.assertEquals("4", DeviceDetailsQuantityValue);

			driver.findElement(By.id("deviceDetailsSubmit")).click();

			Thread.sleep(3000);
			WebElement BasketQuantity = driver.findElement(By.id("accessory-quantitySelectBoxIt"));
			String BasketQuantityvalue = BasketQuantity.getText();
			// Assert.assertEquals(DeviceDetailsQuantityValue,
			// BasketQuantityvalue);
			Assert.assertEquals("4", BasketQuantityvalue);
			Screenshots.captureScreenshot();
		}

	}

	public static void UserSpecifiedSmartwatchTrackerLimit(String Limit) throws InterruptedException, IOException {

		try {
			// Below will give status like in stock / out of stock etc
			Thread.sleep(5000);

			String status = driver.findElement(By.className("status-info")).getText();
			log.debug(status);

			if (status.contains("In Stock")) {
				WebElement element = driver
						.findElement(By.xpath("//select[@class='accessory-option ng-pristine ng-valid']"));
				JavascriptExecutor js = (JavascriptExecutor) driver;
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", element);
				new Select(element).selectByValue(Limit);

				WebElement DeviceDetailsQuantity = driver.findElement(
						By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
				String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
				log.debug("DeviceDetailsQuantityValue is " + DeviceDetailsQuantityValue);

				driver.findElement(By.id("deviceDetailsSubmit")).click();

				Thread.sleep(7000);

			} else {
				driver.navigate().back();
			}
			Screenshots.captureScreenshot();

		} catch (Exception e) {
			WebElement DeviceDetailsQuantity = driver.findElement(
					By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
			String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
			log.debug(DeviceDetailsQuantityValue);
			// Assert.assertEquals(Limit, DeviceDetailsQuantityValue);

			driver.findElement(By.id("deviceDetailsSubmit")).click();

			Thread.sleep(3000);
			WebElement BasketQuantity = driver.findElement(By.id("accessory-quantitySelectBoxIt"));
			String BasketQuantityvalue = BasketQuantity.getText();
			// Assert.assertEquals(DeviceDetailsQuantityValue,
			// BasketQuantityvalue);
			// Assert.assertEquals(Limit, BasketQuantityvalue);
			Screenshots.captureScreenshot();
		}

	}

}