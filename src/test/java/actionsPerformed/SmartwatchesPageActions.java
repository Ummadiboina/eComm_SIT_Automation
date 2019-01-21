package actionsPerformed;

import java.io.IOException;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import GlobalActions.Screenshots;
import helpers.Environment;

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

			//String status = driver.findElement(By.className("status-info")).getText();
			String status = driver.findElement(By.xpath("//p[@class='delivery-information']/span[1]")).getText();

			log.debug("Delivery Information status:"+status);
			Thread.sleep(3000);
			if (status.contains("In Stock")) {


				WebElement element = driver.findElement(By.xpath("//div[@on-dimension-select='selectQuantityDimension']/select"));
				JavascriptExecutor js = (JavascriptExecutor) driver;
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", element);
				Thread.sleep(3000);
				new Select(element).selectByValue("1");
				Thread.sleep(2000);

				//WebElement DeviceDetailsQuantity = driver.findElement(By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
				WebElement DeviceDetailsQuantity = driver.findElement(By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span"));
				String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
				Thread.sleep(2000);
				log.debug("DeviceDetailsQuantityValue is " + DeviceDetailsQuantityValue);


				driver.findElement(By.id("deviceDetailsSubmit")).click();

				Thread.sleep(3000);
			} else {
				driver.navigate().back();
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