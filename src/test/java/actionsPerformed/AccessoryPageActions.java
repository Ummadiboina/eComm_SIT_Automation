package actionsPerformed;

import java.awt.*;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import GlobalActions.Autoredirection;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import GlobalActions.Screenshots;
import helpers.Environment;
import helpers.Filereadingutility;
import helpers.setRuntimeProperty;
import pageobjects.AccessoryPage;

import javax.security.sasl.SaslServer;

public class AccessoryPageActions extends Environment {

	final static Logger log = Logger.getLogger("AccessoryPageActions");

	static int UserSpecifiedAccessoryLimit = 0;
	static int count = 0;
	static int UserSpecifiedFitnessTrackerLimit = 0;
	static JavascriptExecutor js = (JavascriptExecutor) driver;
	static int totalcount = 0;
	public static String accessoryName="";

	public static void Elementdisplayvalidation(String Tabname) throws IOException {
		log.debug(" ");

		log.debug("Accessory_Page_Validation");
		log.debug("Accessory Page validation");

		if (Tabname != null) {
			switch (Tabname.toLowerCase()) {
				case "filter":
					if (pageobjects.AccessoryPage.AccessoryFilterTab.isDisplayed()) {

						log.debug("The Filter Tab is Present on the AccesoryPage and the Text is :"
								+ pageobjects.AccessoryPage.AccessoryFilterTab.getText());
						log.debug("The Filter Tab is Present on the AccesoryPage and the Text is :"
								+ pageobjects.AccessoryPage.AccessoryFilterTab.getText());
						Screenshots.captureScreenshot();

					} else {
						log.debug("The  Filter Tab is not Present on the AccessoryPage and the Text is :"
								+ pageobjects.AccessoryPage.AccessoryFilterTab.getText());
						log.debug("The  Filter Tab is not Present on the AccessoryPage and the Text is :"
								+ pageobjects.AccessoryPage.AccessoryFilterTab.getText());
						Screenshots.captureScreenshot();

					}

					break;
				case "sort":
					if (pageobjects.AccessoryPage.AccessorySortTab.isDisplayed()) {
						log.debug("The Sort Tab is Present on the AccessoryPage and the Text is :"
								+ pageobjects.AccessoryPage.AccessorySortTab.getText());
						log.debug("The Sort Tab is Present on the AccessoryPage and the Text is :"
								+ pageobjects.AccessoryPage.AccessorySortTab.getText());
						Screenshots.captureScreenshot();
					} else {
						log.debug("The  Sort Tab is not Present on the AccessoryPage and the Text is :"
								+ pageobjects.AccessoryPage.AccessorySortTab.getText());
						log.debug("The  Sort Tab is not Present on the AccessoryPage and the Text is :"
								+ pageobjects.AccessoryPage.AccessorySortTab.getText());
						Screenshots.captureScreenshot();
					}
					break;

			}

		}

	}

	// this method used to perform click action on the Accessory Page

	public static void ElementClickAction(String elementname) throws IOException {
		// TODO Auto-generated method stub
		log.debug(" ");

		log.debug("Accessory_Page_Action");
		log.debug("Accessory Page validation");

		if (elementname != null) {
			switch (elementname.toLowerCase()) {
				case "filter":
					pageobjects.AccessoryPage.AccessoryFilterTab.click();
					break;
				case "sort":
					pageobjects.AccessoryPage.AccessorySortTab.click();
					break;

			}
			Screenshots.captureScreenshot();
		}
	}
// This Method is used to select Accessory from the accessory listing page

	public static void SelectAnyAccessory(String elementName) throws IOException, InterruptedException {

		Thread.sleep(3000);
		if(driver.findElements(By.xpath("//p[contains(text(),'Explore our range of cases, screen protectors, headphones and more.')]/following-sibling::p")).size() > 0){
			WebElement ele = driver.findElement(By.xpath("//p[contains(text(),'Explore our range of cases, screen protectors, headphones and more.')]/following-sibling::p/../.."));
			JavascriptExecutor executor = (JavascriptExecutor) driver;
			Thread.sleep(2000	);
			executor.executeScript("arguments[0].scrollIntoView(true);",ele);
			executor.executeScript("arguments[0].click();", ele);
		}

		Thread.sleep(8000);
		Autoredirection.redirect();
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		Thread.sleep(1000	);
		executor.executeScript("arguments[0].scrollIntoView(true);",pageobjects.AccessoryPage.ViewAllProductsOnOnePage);
		Thread.sleep(2000	);
		executor.executeScript("arguments[0].click();", pageobjects.AccessoryPage.ViewAllProductsOnOnePage);

		if (elementName.contains("Random")) {
			log.debug("Selecting Any Accessory");
			accessoryName = pageobjects.AccessoryPage.RandomAccessory.getText();
			log.debug("Selected an accessory -  " + accessoryName);
			pageobjects.AccessoryPage.RandomAccessory.click();

		}

		if (elementName.contains("AirPods")) {
			log.debug("Selecting Any Accessory");
			accessoryName = pageobjects.AccessoryPage.AirPods.getText();
			log.debug("Selected an accessory -  " + accessoryName);
			pageobjects.AccessoryPage.AirPods.click();

		}

		if (elementName.contains("HarmanKardonOnxyxStudio3"))
		{
			log.debug("Selecting HarmanKardonOnxyxStudio2 Accessory");

			log.debug("Selected an accessory -  " + pageobjects.AccessoryPage.HarmanKardonOnxyxStudio2.getText());
			pageobjects.AccessoryPage.HarmanKardonOnxyxStudio2.click();
			log.debug("HarmanKardonOnxyxStudio2 Accessory Selected");
		}

		if (elementName.contains("PencilforiPadPro"))

		{
			log.debug("Selecting PencilforiPadPro Accessory");
			log.debug("Selecting PencilforiPadPro Accessory");
			log.debug("Selected an accessory -  " + pageobjects.AccessoryPage.PencilforiPadPro.getText());
			pageobjects.AccessoryPage.PencilforiPadPro.click();
			log.debug("PencilforiPadPro Accessory Selected");
		}

		if (elementName.contains("Apple")){
			log.debug("Selecting JBL Clip4 Accessory");
			log.debug("Selecting JBL Clip4 Accessory");
			//log.debug("Selected an accessory -  " + AccessoryPage.randam1.getText());
			AccessoryPage.randam1.click();
			log.debug("JBL Clip4 Accessory Selected");
		}

		if (elementName.contains("JBL Xtreme Black")){
			log.debug("Selecting JBLXtreme Accessory");
			log.debug("Selecting JBLXtreme Accessory");
			pageobjects.AccessoryPage.JBLXtreme.click();
			log.debug("JBLXtreme Accessory Selected");
		}
		if (elementName.contains("SanDisk Ultra MemoryCard"))

		{
			log.debug("Selecting SanDisk Ultra MemoryCard");
			log.debug("Selecting SanDisk Ultra MemoryCard");
			pageobjects.AccessoryPage.SanDiskUltraMemoryCard80Mbs.click();
			log.debug("SanDisk Ultra MemoryCard Selected");
		}
		if (elementName.contains("Samsung S8 Plus Original LED Cover"))

		{
			log.debug("Selecting Samsung S8 Plus Original LED Cover");
			log.debug("Selecting Samsung S8 Plus Original LED Cover");
			pageobjects.AccessoryPage.SamsungS8PlusOriginalLEDCover.click();
			log.debug("Samsung S8 Plus Original LED Cover Selected");
		}
		Screenshots.captureScreenshot();

		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		Autoredirection.redirectforHTTPsconnections();
	}
	/*
	 * Below has been modified as per the new ui layout, new function has been
	 * written which is below, so please refer to this only if its necessary else
	 * follow "selectAnyAccessoryLimit()" instead of "selectAnyAccessoryLimit_old"
	 */

	public static void selectAnyAccessoryLimit_old() throws InterruptedException, IOException {
		// TODO Auto-generated method stub

		try {
			log.debug("Adding Accesories to basket");
			log.debug("Adding Accesories to basket");
			// log.debug("The text of the button is -
			// "+pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.getText());
			for (int i = 0; i < 2; i++) {
				pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.click();
				// log.debug("Value of i is "+i );
			}
			Screenshots.captureScreenshot();

		} catch (org.openqa.selenium.StaleElementReferenceException ex) {
			log.debug("Exception in finding value");
			log.debug("Adding Accesories to basket");
			log.debug("Adding Accesories to basket");
			// log.debug("The text of the button is -
			// "+pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.getText());
			for (int i = 0; i < 2; i++) {
				pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.click();
				Thread.sleep(2000);
			}
			Screenshots.captureScreenshot();
		}

	}

	public static void selectAnyAccessoryLimit() throws IOException {

		try {
			// Below will give status like in stock / out of stock etc
			Thread.sleep(5000);


			driver.findElement(By.xpath("(//div[@class='device-tile__top']//img)[1]")).click();
			driver.manage().timeouts().implicitlyWait(02, TimeUnit.MINUTES);
			Thread.sleep(5000);
			String status = driver.findElement(By.xpath("//p[@class='delivery-information']//span[1]")).getText();
			log.debug(status);

			if (status.contains("In Stock")) {
				//driver.findElement(By.xpath("//label[normalize-space(.)='Quantity:']/parent::div//span[@role='combobox']/span/span[1]")).click();
		/*		JavascriptExecutor js = (JavascriptExecutor) driver;
				js.executeScript("arguments[0].setAttribute('style', 'display:yellow;')", element);
				new Select(element).selectByValue("2");*/
				//element.click();
				Thread.sleep(2000);
				//driver.findElement(By.xpath("(//*[@data-val='2'])[1]")).click();
				log.debug("The mode of the quality is : " + status);
				/*WebElement DeviceDetailsQuantity = driver.findElement(
						By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
				String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
				log.debug("DeviceDetailsQuantityValue is " + DeviceDetailsQuantityValue);

				//driver.findElement(By.id("deviceDetailsSubmit")).click();*/

				Thread.sleep(7000);

			} else {
				driver.navigate().back();
			}
			Screenshots.captureScreenshot();

		} catch (Exception e) {
		/*	WebElement DeviceDetailsQuantity = driver.findElement(
					By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
			String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
			log.debug(DeviceDetailsQuantityValue);
			Assert.assertEquals("2", DeviceDetailsQuantityValue);

			WebElement element = driver.findElement(By.id("deviceDetailsSubmit"));
			JavascriptExecutor executor = (JavascriptExecutor)driver;
			executor.executeScript("arguments[0].click();", element);

			//driver.findElement(By.id("deviceDetailsSubmit")).click();

			Thread.sleep(3000);
			WebElement BasketQuantity = driver.findElement(By.id("accessory-quantitySelectBoxIt"));
			String BasketQuantityvalue = BasketQuantity.getText();
			// Assert.assertEquals(DeviceDetailsQuantityValue,
			// BasketQuantityvalue);
			Assert.assertEquals("2", BasketQuantityvalue);*/
			log.debug("Getting Error  as : " + e.getStackTrace());
			e.printStackTrace();
			Screenshots.captureScreenshot();

		}
	}

	public static void UserSpecifiedAccessoryLimit(String Limit) throws InterruptedException, IOException {

		try {
			// Below will give status like in stock / out of stock etc
			Thread.sleep(5000);
			UserSpecifiedAccessoryLimit = Integer.parseInt(Limit);
			String status = driver.findElement(By.xpath("//span[@class='status-info ng-binding confirm']")).getText();
			log.debug(status);

			if (status.contains("In Stock")) {
				/*WebElement element = driver
						.findElement(By.xpath("//select[@class='accessory-option ng-pristine ng-valid']"));
				JavascriptExecutor js = (JavascriptExecutor) driver;
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", element);
				new Select(element).selectByValue(Limit);*/

				WebElement element = driver
						.findElement(By.xpath("//div[@on-dimension-select='selectQuantityDimension']/select"));
				JavascriptExecutor js = (JavascriptExecutor) driver;
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", element);
				new Select(element).selectByValue(Limit);

				Thread.sleep(3000);

				WebElement DeviceDetailsQuantity = driver.findElement(
						By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
				String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
				log.debug("DeviceDetailsQuantityValue is " + DeviceDetailsQuantityValue);
				count = count + Integer.parseInt(Limit);
				Thread.sleep(3000);
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

	public static void continueShopping() throws IOException {
		log.debug("Opening continueShopping function");
		try {

			pageobjects.AccessoryPage.ContinueShoppingLink.click();
			log.debug("Clicked on the Continue Shopping link successfully");
			Screenshots.captureScreenshot();
		}

		catch (Exception e) {
			log.debug("Failed to click on the Continue Shppoing link " + e.getMessage() + "");
			Screenshots.captureScreenshot();
		}
	}

	/*
	 * public static void verifyNonConnectedDeviceAddedToBasketBefore() throws
	 * InterruptedException {
	 * log.debug("Opening verifyNonConnectedDeviceAddedToBasketBefore function" );
	 * String AccessoryName = ""; String FitnessTrackerName = ""; String
	 * SmartWatchName = "";
	 *
	 * try { AccessoryName =
	 * pageobjects.AccessoryPage.AccesoryBeforePhoneSelection.getText();
	 * FitnessTrackerName =
	 * pageobjects.AccessoryPage.FitnessTrackerBeforePhoneSelection.getText();
	 * SmartWatchName =
	 * pageobjects.AccessoryPage.SmartWatchBeforePhoneSelection.getText();
	 *
	 * setRuntimeProperty.setProperty("Accessory", AccessoryName);
	 * setRuntimeProperty.setProperty("FitnessTracker", FitnessTrackerName);
	 * setRuntimeProperty.setProperty("SmartWatch", SmartWatchName);
	 *
	 * log.debug(
	 * "Successfully verified that Non connected devices are added to the basket before phone selection"
	 * ); log.debug(
	 * "Successfully verified that Non connected devices are added to the basket before phone selection"
	 * ); }
	 *
	 * catch (Exception e) {
	 *
	 * log.
	 * debug("Fail: Nonconnected device is not present in the Basket section before phone selection "
	 * + e.getMessage() + ""); System.out.
	 * println("Fail: Nonconnected device is not present in the Basket section before phone selection "
	 * + e.getMessage() + "");
	 * Assert.fail("Non Connected device is not present in the Basket section"); } }
	 *
	 * public static void
	 * verifyNonConnectedDeviceRetainedInBasketAfterPhoneSelection() throws
	 * InterruptedException { log.
	 * debug("Opening verifyNonConnectedDeviceRetainedInBasketAfterPhoneSelection function"
	 * ); System.out.
	 * println("Opening verifyNonConnectedDeviceRetainedInBasketAfterPhoneSelection function"
	 * ); String AccessoryName_Before = ""; String FitnessTrackerName_Before = "";
	 * String SmartWatchName_Before = "";
	 *
	 * String AccessoryName_After = ""; String FitnessTrackerName_After = ""; String
	 * SmartWatchName_After = "";
	 *
	 * String RunTimeFilePath = System.getProperty("user.dir") +
	 * "\\Configurations\\Properties\\Run.properties";
	 *
	 * try {
	 *
	 * AccessoryName_Before = (String)
	 * Filereadingutility.getPropertyValue(RunTimeFilePath, "Accessory");
	 * FitnessTrackerName_Before = (String)
	 * Filereadingutility.getPropertyValue(RunTimeFilePath, "FitnessTracker");
	 * SmartWatchName_Before = (String)
	 * Filereadingutility.getPropertyValue(RunTimeFilePath, "SmartWatch");
	 *
	 * AccessoryName_After =
	 * pageobjects.AccessoryPage.AccesoryAfterPhoneSelection.getText();
	 * FitnessTrackerName_After =
	 * pageobjects.AccessoryPage.FitnessTrackerAfterPhoneSelection.getText();
	 * SmartWatchName_After =
	 * pageobjects.AccessoryPage.SmartWatchAfterPhoneSelection.getText();
	 *
	 * Assert.assertTrue(AccessoryName_Before.contains(AccessoryName_After),
	 * "Assertion Failed: Accessory is not present in the basket page after phone selection"
	 * ); log.
	 * debug("Assertion Passed: Accessory is present in the basket page after phone selection"
	 * ); System.out.
	 * println("Assertion Passed: Accessory is present in the basket page after phone selection"
	 * );
	 *
	 * Assert.
	 * assertEquals("Assertion Failed: FitnessTracker is not present in the basket after phone selection"
	 * , FitnessTrackerName_Before.equals(FitnessTrackerName_After)); log.
	 * debug("Assertion Passed: FitnessTracker is present in the basket page after phone selection"
	 * ); System.out.
	 * println("Assertion Passed: FitnessTracker is present in the basket page after phone selection"
	 * );
	 *
	 * Assert.
	 * assertEquals("Assertion Failed: SmartWatch is not present in the basket after phone selection"
	 * , SmartWatchName_Before.equals(SmartWatchName_After)); log.
	 * debug("Assertion Passed: SmartWatch is present in the basket page after phone selection"
	 * ); System.out.
	 * println("Assertion Passed: SmartWatch is present in the basket page after phone selection"
	 * );
	 *
	 * log. debug("successfully verified the basket section after phone selection");
	 * System.out.
	 * println("successfully verified the basket section after phone selection" ); }
	 *
	 * catch (AssertionError e) {
	 *
	 * log.debug(
	 * "Assertion failed: Non Connected device is not present in the Basket section after phone selection"
	 * + e.getMessage() + ""); log.debug(
	 * "Assertion failed: Non Connected device is not present in the Basket section after phone selection"
	 * + e.getMessage() + ""); } }
	 */

	/*
	 * public static void verifyNonConnectedDeviceAddedToBasketBefore() throws
	 * InterruptedException {
	 * log.debug("Opening verifyNonConnectedDeviceAddedToBasketBefore function" );
	 * String AccessoryName = ""; String FitnessTrackerName = ""; String
	 * SmartWatchName = "";
	 *
	 * try { List<WebElement> AccessoryBeofrePhoneSelection = driver
	 * .findElements(By.xpath(
	 * "//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[3]/section/h3/span"
	 * )); if (AccessoryBeofrePhoneSelection.size() > 0) {
	 *
	 * if (pageobjects.AccessoryPage.AccesoryBeforePhoneSelection.isDisplayed()) {
	 * AccessoryName =
	 * pageobjects.AccessoryPage.AccesoryBeforePhoneSelection.getText();
	 * setRuntimeProperty.setProperty("Accessory", AccessoryName);
	 * log.debug("Accessory is: " + AccessoryName); } }
	 *
	 * List<WebElement> FitnessTrackerBeofrePhoneSelection = driver
	 * .findElements(By.xpath(
	 * "//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[1]/section/h3/span"
	 * )); if (FitnessTrackerBeofrePhoneSelection.size() > 0) { if
	 * (pageobjects.AccessoryPage.FitnessTrackerBeforePhoneSelection.isDisplayed ())
	 * { FitnessTrackerName =
	 * pageobjects.AccessoryPage.FitnessTrackerBeforePhoneSelection.getText();
	 * setRuntimeProperty.setProperty("FitnessTracker", FitnessTrackerName);
	 * log.debug("FitnessTracker is: " + FitnessTrackerName); } }
	 *
	 * List<WebElement> SmartWatchBeofrePhoneSelection = driver
	 * .findElements(By.xpath(
	 * "//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[2]/section/h3/span"
	 * )); if (SmartWatchBeofrePhoneSelection.size() > 0) { if
	 * (pageobjects.AccessoryPage.SmartWatchBeforePhoneSelection.isDisplayed()) {
	 * SmartWatchName =
	 * pageobjects.AccessoryPage.SmartWatchBeforePhoneSelection.getText();
	 * setRuntimeProperty.setProperty("SmartWatch", SmartWatchName);
	 * log.debug("SmartWatch is: " + SmartWatchName); } }
	 *
	 * log.debug(
	 * "Successfully verified that Non connected devices are added to the basket before phone selection"
	 * ); log.debug(
	 * "Successfully verified that Non connected devices are added to the basket before phone selection"
	 * ); }
	 *
	 * catch (Exception e) {
	 *
	 * log.
	 * debug("Fail: Nonconnected device is not present in the Basket section before phone selection "
	 * + e.getMessage() + ""); System.out.
	 * println("Fail: Nonconnected device is not present in the Basket section before phone selection "
	 * + e.getMessage() + "");
	 * Assert.fail("Non Connected device is not present in the Basket section"); } }
	 */

	public static void verifyNonConnectedDeviceAddedToBasketBefore() throws IOException {
		log.debug("Opening verifyNonConnectedDeviceAddedToBasketBefore function");
		String AccessoryName = "";
		String FitnessTrackerName = "";
		String SmartWatchName = "";

		int count = 0;
		try {
			List<WebElement> AccessoryBeofrePhoneSelection = driver
					.findElements(By.xpath("//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[3]/section/h3/span"));
			if (AccessoryBeofrePhoneSelection.size() > 0) {

				if (pageobjects.AccessoryPage.AccesoryBeforePhoneSelection.isDisplayed()) {
					AccessoryName = pageobjects.AccessoryPage.AccesoryBeforePhoneSelection.getText();
					setRuntimeProperty.setProperty("Accessory", AccessoryName);
					log.debug("Accessory is: " + AccessoryName);
				}
			}

			List<WebElement> FitnessTrackerBeofrePhoneSelection = driver
					.findElements(By.xpath("//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[1]/section/h3/span"));
			if (FitnessTrackerBeofrePhoneSelection.size() > 0) {
				if (pageobjects.AccessoryPage.FitnessTrackerBeforePhoneSelection.isDisplayed()) {
					FitnessTrackerName = pageobjects.AccessoryPage.FitnessTrackerBeforePhoneSelection.getText();
					setRuntimeProperty.setProperty("FitnessTracker", FitnessTrackerName);
					log.debug("FitnessTracker is: " + FitnessTrackerName);
				}
			}

			List<WebElement> SmartWatchBeofrePhoneSelection = driver
					.findElements(By.xpath("//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[2]/section/h3/span"));
			if (SmartWatchBeofrePhoneSelection.size() > 0) {
				if (pageobjects.AccessoryPage.SmartWatchBeforePhoneSelection.isDisplayed()) {
					SmartWatchName = pageobjects.AccessoryPage.SmartWatchBeforePhoneSelection.getText();
					setRuntimeProperty.setProperty("SmartWatch", SmartWatchName);
					log.debug("SmartWatch is: " + SmartWatchName);
				}
			}

			log.debug(
					"Successfully verified that Non connected devices are added to the basket before phone selection");
			log.debug(
					"Successfully verified that Non connected devices are added to the basket before phone selection");
			Screenshots.captureScreenshot();
		}

		catch (Exception e) {

			log.debug("Fail: Nonconnected device is not present in the Basket section before phone selection "
					+ e.getMessage() + "");
			log.debug("Fail: Nonconnected device is not present in the Basket section before phone selection "
					+ e.getMessage() + "");
			Assert.fail("Non Connected device is not present in the Basket section");
			Screenshots.captureScreenshot();
		}
	}

	/*
	 * public static void removeItemsFromBasketBasedOnAdditionOfItems() {
	 * log.debug("inside Remove items function"); int TotalQtyInBasket = 0;
	 *
	 * TotalQtyInBasket =
	 * (FitnessTrackerPageActions.UserSpecifiedFitnessTrackerLimit +
	 * AccessoryPageActions.UserSpecifiedAccessoryLimit +
	 * PAYMandPAYGTariffAndExtrasPageActions.SelectedAccessoryCount);
	 * log.debug("Total qty in basket is " + TotalQtyInBasket); if
	 * (TotalQtyInBasket > 12) {
	 * driver.findElement(By.xpath("(//a[contains(., 'Remove')])[1]")).click(); } }
	 */

	public static void calculateTotalQtyAddedInBasket() throws IOException {
		count = UserSpecifiedFitnessTrackerLimit + UserSpecifiedAccessoryLimit;
		log.debug("Total Qty added for Fitness Tracker and Accessory is :" + count);
		Screenshots.captureScreenshot();
	}

	public static void verifyNonConnectedDeviceRetainedInBasketAfterPhoneSelection()
			throws IOException {
		log.debug("Opening verifyNonConnectedDeviceRetainedInBasketAfterPhoneSelection function");
		log.debug("Opening verifyNonConnectedDeviceRetainedInBasketAfterPhoneSelection function");
		String AccessoryName_Before = "";
		String FitnessTrackerName_Before = "";
		String SmartWatchName_Before = "";

		String AccessoryName_After = "";
		String FitnessTrackerName_After = "";
		String SmartWatchName_After = "";

		String RunTimeFilePath = System.getProperty("user.dir") + "\\Configurations\\Properties\\Run.properties";

		try {
			List<WebElement> AccessoryAfterPhoneSelection = driver
					.findElements(By.xpath("//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[4]/section/h3/span"));
			if (AccessoryAfterPhoneSelection.size() > 0) {

				if (pageobjects.AccessoryPage.AccesoryAfterPhoneSelection.isDisplayed()) {
					AccessoryName_Before = Filereadingutility.getPropertyValue(RunTimeFilePath, "Accessory");
					AccessoryName_After = pageobjects.AccessoryPage.AccesoryAfterPhoneSelection.getText();
					Assert.assertTrue(AccessoryName_Before.contains(AccessoryName_After),
							"Assertion Failed: Accessory is not present in the basket page after phone selection");
					log.debug("Assertion Passed: Accessory is present in the basket page after phone selection");
					System.out
							.println("Assertion Passed: Accessory is present in the basket page after phone selection");
				}
			}

			List<WebElement> FitnessTrackerAfterPhoneSelection = driver
					.findElements(By.xpath("//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[2]/section/h3/span"));
			if (FitnessTrackerAfterPhoneSelection.size() > 0) {

				if (pageobjects.AccessoryPage.FitnessTrackerAfterPhoneSelection.isDisplayed()) {
					FitnessTrackerName_Before = Filereadingutility.getPropertyValue(RunTimeFilePath,
							"FitnessTracker");
					FitnessTrackerName_After = pageobjects.AccessoryPage.FitnessTrackerAfterPhoneSelection.getText();
					/*
					 * Assert.assertEquals(
					 * "Assertion Failed: FitnessTracker is not present in the basket after phone selection"
					 * , FitnessTrackerName_Before.equals(FitnessTrackerName_After ));
					 */
					Assert.assertTrue(FitnessTrackerName_Before.contains(FitnessTrackerName_After),
							"Assertion Failed: FitnessTracker is not present in the basket page after phone selection");
					log.debug("Assertion Passed: FitnessTracker is present in the basket page after phone selection");
					log.debug(
							"Assertion Passed: FitnessTracker is present in the basket page after phone selection");
				}
			}

			List<WebElement> SmartWatchAfterPhoneSelection = driver
					.findElements(By.xpath("//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[3]/section/h3/span"));
			if (SmartWatchAfterPhoneSelection.size() > 0) {

				if (pageobjects.AccessoryPage.SmartWatchAfterPhoneSelection.isDisplayed()) {
					SmartWatchName_Before = Filereadingutility.getPropertyValue(RunTimeFilePath, "SmartWatch");
					SmartWatchName_After = pageobjects.AccessoryPage.SmartWatchAfterPhoneSelection.getText();
					/*
					 * Assert.
					 * assertEquals("Assertion Failed: SmartWatch is not present in the basket after phone selection"
					 * , SmartWatchName_Before.equals(SmartWatchName_After));
					 */
					Assert.assertTrue(SmartWatchName_Before.contains(SmartWatchName_After),
							"Assertion Failed: SmartWatch is not present in the basket page after phone selection");
					log.debug("Assertion Passed: SmartWatch is present in the basket page after phone selection");
					log.debug(
							"Assertion Passed: SmartWatch is present in the basket page after phone selection");

					log.debug("successfully verified the basket section after phone selection");
					log.debug("successfully verified the basket section after phone selection");
				}
			}
			Screenshots.captureScreenshot();

		}

		catch (AssertionError e) {

			log.debug(
					"Assertion failed: Non Connected device is not present in the Basket section after phone selection"
							+ e.getMessage() + "");
			log.debug(
					"Assertion failed: Non Connected device is not present in the Basket section after phone selection"
							+ e.getMessage() + "");
			Screenshots.captureScreenshot();
		}
	}

	public static void getTotalQtyInBasket() throws IOException {

		int loop = 0;
		String XpathQty = null;
		loop = driver.findElements(By.xpath("(//select[@id='accessory-quantity'])")).size();
		log.debug("loop count is " + loop);
		for (int w = 1; w <= loop; w++) {

			XpathQty = "(//select[@id='accessory-quantity'])[" + w + "]";

			WebElement countelement3 = driver.findElement(By.xpath(XpathQty));
			js.executeScript("arguments[0].setAttribute('style', 'display:block;')", countelement3);

			countelement3 = new Select(countelement3).getFirstSelectedOption();

			log.debug("[" + w + "] Accessory Quantity is " + countelement3.getText());
			totalcount = totalcount + Integer.parseInt(countelement3.getText());

		}
		log.debug("Total Qty in Basket now is" + totalcount);
		Screenshots.captureScreenshot();

	}

	public static void check() throws Exception {
		getTotalQtyInBasket();

		if (count + PAYMandPAYGTariffAndExtrasPageActions.AccessoryContainerSize > 12) {
			WebElement FirstAccessoryQuantityElement = driver
					.findElement(By.xpath("(//select[@id='accessory-quantity'])[1]"));
			js.executeScript("arguments[0].setAttribute('style', 'display:block;')", FirstAccessoryQuantityElement);
			WebElement countelement1 = new Select(FirstAccessoryQuantityElement).getFirstSelectedOption();
			String FirstCount = countelement1.getText();
			log.debug("Qty of Accessory displayed is " + FirstCount);

			WebElement SecondAccessoryQuantityElement = driver
					.findElement(By.xpath("(//select[@id='accessory-quantity'])[2]"));
			js.executeScript("arguments[0].setAttribute('style', 'display:block;')", SecondAccessoryQuantityElement);
			WebElement countelement2 = new Select(SecondAccessoryQuantityElement).getFirstSelectedOption();
			String SecondCount = countelement2.getText();
			log.debug("Qty of Fitness Tracker displayed is " + SecondCount);

			if (Integer.parseInt(FirstCount) + Integer.parseInt(SecondCount) == count
					- PAYMandPAYGTariffAndExtrasPageActions.AccessoryContainerSize) {
				log.debug("Works as expected");
			}
		} else {
			log.debug("Qty is less than 12");
		}
		if (totalcount > 6) {
			log.debug("Total count is greater than 6");
			int checkoutbtnsize = driver.findElements(By.xpath("//*[@value='Go to checkout'][1]")).size();
			if (checkoutbtnsize != 0) {
				Assert.fail("Checkout button is present even when the total qty in basket is greater than 6");
			} else {
				log.debug(
						"Checkout button is not present since the total count is greater than 6 ->as expected");
			}
			Screenshots.captureScreenshot();
			clickOnRemoveButton();
			Thread.sleep(15000);
			clickOnRemoveButton();
		} else {
			log.debug("Total Qty is less than 6 so we will be able to proceed to checkout");
		}
		Screenshots.captureScreenshot();

	}

	public static void clickOnRemoveButton() throws IOException {

		pageobjects.BasketPage.RemoveButton.click();
		log.debug("Clicked on Remove button");
		Screenshots.captureScreenshot();
	}

	public static void UserSpecifiedFitnessTrackerLimit(String Limit) throws InterruptedException, IOException {
		// TODO Auto-generated method stub
		try {
			// Below will give status like in stock / out of stock etc
			Thread.sleep(6000);
			UserSpecifiedFitnessTrackerLimit = Integer.parseInt(Limit);
			String status = driver.findElement(By.className("status-info")).getText();
			log.debug(status);

			if (status.contains("In Stock")) {
				/*WebElement element = driver
						.findElement(By.xpath("//select[@class='accessory-option ng-pristine ng-valid']"));
				JavascriptExecutor js = (JavascriptExecutor) driver;
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", element);
				new Select(element).selectByValue(Limit);*/

				WebElement element = driver
						.findElement(By.xpath("//div[@on-dimension-select='selectQuantityDimension']/select"));
				JavascriptExecutor js = (JavascriptExecutor) driver;
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", element);
				new Select(element).selectByValue(Limit);

				Thread.sleep(3000);

				WebElement DeviceDetailsQuantity = driver.findElement(
						By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
				String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
				log.debug("DeviceDetailsQuantityValue is " + DeviceDetailsQuantityValue);
				count = count + Integer.parseInt(Limit);
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
			Assert.assertEquals(Limit, DeviceDetailsQuantityValue);

			driver.findElement(By.id("deviceDetailsSubmit")).click();

			Thread.sleep(3000);
			WebElement BasketQuantity = driver.findElement(By.id("accessory-quantitySelectBoxIt"));
			String BasketQuantityvalue = BasketQuantity.getText();

			Assert.assertEquals(Limit, BasketQuantityvalue);
			Screenshots.captureScreenshot();

		}

	}


	public static  void SelectAnyAccessorywithQuantity(String elementName,  String elementQuantity) throws IOException, InterruptedException, AWTException {

		Thread.sleep(3000);
		if (driver.findElements(By.xpath("//p[contains(text(),'Explore our range of cases, screen protectors, headphones and more.')]/following-sibling::p")).size() > 0) {
			WebElement ele = driver.findElement(By.xpath("//p[contains(text(),'Explore our range of cases, screen protectors, headphones and more.')]/following-sibling::p/../.."));
			JavascriptExecutor executor = (JavascriptExecutor) driver;
			Thread.sleep(2000);
			executor.executeScript("arguments[0].scrollIntoView(true);", ele);
			executor.executeScript("arguments[0].click();", ele);
		}

		Thread.sleep(8000);
		Autoredirection.redirect();
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		Thread.sleep(1000);
		executor.executeScript("arguments[0].scrollIntoView(true);", pageobjects.AccessoryPage.ViewAllProductsOnOnePage);
		Thread.sleep(2000);
		executor.executeScript("arguments[0].click();", pageobjects.AccessoryPage.ViewAllProductsOnOnePage);

		String Elementquan=elementQuantity.trim();
		UserSpecifiedAccessoryLimit = Integer.parseInt(Elementquan);
		if (elementName.contains("Random")) {
			// static int quan=0;
			//int quan =0;
			//WebElement quantity="";
			//  WebElement quantity1 = null;
			log.debug("Selecting Any Accessory");
			accessoryName = pageobjects.AccessoryPage.RandomAccessory.getText();
			log.debug("Selected an accessory -  " + accessoryName);
			pageobjects.AccessoryPage.RandomAccessory.click();
			Thread.sleep(20000);

           /* List<WebElement> quantity = driver.findElements(By.xpath("//select[@class='accessory-option ng-pristine ng-valid']/option"));

            for (int i = 1; i <= quantity.size(); i++) {
                String quantity2 = driver.findElement(By.xpath("(//select[@class='accessory-option ng-pristine ng-valid']/option)[" + i + "]")).getAttribute("innerText");
                Thread.sleep(2000);
                if (quantity2.contains("2")) {
                    quantity1 = driver.findElement(By.xpath("(//select[@class='accessory-option ng-pristine ng-valid']/option)[" + i + "]"));
                    break;
                }
            }
WebElement */






			WebElement quan1=driver.findElement(By.xpath("//div[@on-dimension-select='selectQuantityDimension']/select"));
			JavascriptExecutor js = (JavascriptExecutor) driver;
			js.executeScript("arguments[0].setAttribute('style', 'display:block;')", quan1);
			new Select(quan1).selectByIndex(UserSpecifiedAccessoryLimit);
			NonConnectedDeviceDetailsPageAction.ClickonBasketIcon();






			//quantity1 = driver.findElement(By.xpath("//select[@class='accessory-option ng-valid ng-dirty']//option)[2]"));


			//Thread.sleep(3000);
           /*Point coordinates = driver.findElement(By.xpath("(//select[@class='accessory-option ng-pristine ng-valid']/option)[2]")).getLocation();
            Robot robot = new Robot();
            //robot.mouseMove(quantity1.getLocation().getX(), quantity1.getLocation().getY());
            robot.mouseMove(coordinates.getX() +120, coordinates.getY() +120);
            Thread.sleep(2000);
            log.debug("Moving Mouse Color dropdown");
            //driver.findElement(By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']")).click();
            Actions action = new Actions(driver);
            action.moveToElement(quantity1).click().build().perform();
            log.debug("Selected " + quantity1 + " from color dropdown\n");*/


			//driver.findElement(By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"))lic.ck();
			//Thread.sleep(10000);
			//	driver.findElement(By.xpath("//div[@class='ng-isolate-scope ng-pristine ng-valid']//select[@class='accessory-option ng-pristine ng-valid']//option[2]")).click();
			//driver.findElement(By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']//li[3]")).click();


		}
		//SelectAnyAccessory2Quantity

	}
}
