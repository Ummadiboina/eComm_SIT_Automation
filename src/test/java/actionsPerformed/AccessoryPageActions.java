package actionsPerformed;

import helpers.Environment;
import helpers.Filereadingutility;
import helpers.setRuntimeProperty;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

public class AccessoryPageActions extends Environment {

	static Logger log = Logger.getLogger("devpinoyLogger");
	static int UserSpecifiedAccessoryLimit = 0;
	static int count = 0;
	static int UserSpecifiedFitnessTrackerLimit = 0;
	static JavascriptExecutor js = (JavascriptExecutor) driver;
	static int totalcount = 0;

	public static void Elementdisplayvalidation(String Tabname) {
		System.out.println(" ");

		System.out.println("Accessory_Page_Validation");
		log.debug("Accessory Page validation");

		if (Tabname != null) {
			switch (Tabname.toLowerCase()) {
			case "filter":
				if (pageobjects.AccessoryPage.AccessoryFilterTab.isDisplayed()) {

					System.out.println("The Filter Tab is Present on the AccesoryPage and the Text is :"
							+ pageobjects.AccessoryPage.AccessoryFilterTab.getText());
					log.debug("The Filter Tab is Present on the AccesoryPage and the Text is :"
							+ pageobjects.AccessoryPage.AccessoryFilterTab.getText());

				} else {
					System.out.println("The  Filter Tab is not Present on the AccessoryPage and the Text is :"
							+ pageobjects.AccessoryPage.AccessoryFilterTab.getText());
					log.debug("The  Filter Tab is not Present on the AccessoryPage and the Text is :"
							+ pageobjects.AccessoryPage.AccessoryFilterTab.getText());

				}

				break;
			case "sort":
				if (pageobjects.AccessoryPage.AccessorySortTab.isDisplayed()) {
					System.out.println("The Sort Tab is Present on the AccessoryPage and the Text is :"
							+ pageobjects.AccessoryPage.AccessorySortTab.getText());
					log.debug("The Sort Tab is Present on the AccessoryPage and the Text is :"
							+ pageobjects.AccessoryPage.AccessorySortTab.getText());
				} else {
					System.out.println("The  Sort Tab is not Present on the AccessoryPage and the Text is :"
							+ pageobjects.AccessoryPage.AccessorySortTab.getText());
					log.debug("The  Sort Tab is not Present on the AccessoryPage and the Text is :"
							+ pageobjects.AccessoryPage.AccessorySortTab.getText());
				}
				break;

			}

		}

	}

	// this method used to perform click action on the Accessory Page

	public static void ElementClickAction(String elementname) {
		// TODO Auto-generated method stub
		System.out.println(" ");

		System.out.println("Accessory_Page_Action");
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

		}
	}

	// This Method is used to select Accessory from the accessory listing page

	public static void SelectAnyAccessory(String elementName) {

		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", pageobjects.AccessoryPage.ViewAllProductsOnOnePage);

		if (elementName.contains("Random")) {
			System.out.println("Selecting Any Accessory");
			log.debug("Selecting Any Accessory");
			log.debug("Selected an accessory -  " + pageobjects.AccessoryPage.RandomAccessory.getText());
			pageobjects.AccessoryPage.RandomAccessory.click();
			log.debug("Random Accessory Selected");
		}
		if (elementName.contains("HarmanKardonOnxyxStudio3"))

		{
			System.out.println("Selecting HarmanKardonOnxyxStudio3 Accessory");
			log.debug("Selecting HarmanKardonOnxyxStudio3 Accessory");
			log.debug("Selected an accessory -  " + pageobjects.AccessoryPage.RandomAccessory.getText());
			pageobjects.AccessoryPage.HarmanKardonOnxyxStudio3.click();
			log.debug("HarmanKardonOnxyxStudio3 Accessory Selected");
		}

		if (elementName.contains("PencilforiPadPro"))

		{
			System.out.println("Selecting PencilforiPadPro Accessory");
			log.debug("Selecting PencilforiPadPro Accessory");
			log.debug("Selected an accessory -  " + pageobjects.AccessoryPage.RandomAccessory.getText());
			pageobjects.AccessoryPage.PencilforiPadPro.click();
			log.debug("PencilforiPadPro Accessory Selected");
		}

		if (elementName.contains("JBL Clip 2"))

		{
			System.out.println("Selecting Clip2 Accessory");
			log.debug("Selecting Clip2 Accessory");
			log.debug("Selected an accessory -  " + pageobjects.AccessoryPage.RandomAccessory.getText());
			pageobjects.AccessoryPage.Clip2.click();
			log.debug("Clip2 Accessory Selected");
		}

		if (elementName.contains("JBL Xtreme Black"))

		{
			System.out.println("Selecting JBLXtreme Accessory");
			log.debug("Selecting JBLXtreme Accessory");
			pageobjects.AccessoryPage.JBLXtreme.click();
			log.debug("JBLXtreme Accessory Selected");
		}
		if (elementName.contains("SanDisk Ultra MemoryCard"))

		{
			System.out.println("Selecting SanDisk Ultra MemoryCard");
			log.debug("Selecting SanDisk Ultra MemoryCard");
			pageobjects.AccessoryPage.SanDiskUltraMemoryCard80Mbs.click();
			log.debug("SanDisk Ultra MemoryCard Selected");
		}
		if (elementName.contains("Samsung S8 Plus Original LED Cover"))

		{
			System.out.println("Selecting Samsung S8 Plus Original LED Cover");
			log.debug("Selecting Samsung S8 Plus Original LED Cover");
			pageobjects.AccessoryPage.SamsungS8PlusOriginalLEDCover.click();
			log.debug("Samsung S8 Plus Original LED Cover Selected");
		}
	}
	/*
	 * Below has been modified as per the new ui layout, new function has been
	 * written which is below, so please refer to this only if its necessary
	 * else follow "selectAnyAccessoryLimit()" instead of
	 * "selectAnyAccessoryLimit_old"
	 */

	public static void selectAnyAccessoryLimit_old() throws InterruptedException {
		// TODO Auto-generated method stub

		try {
			System.out.println("Adding Accesories to basket");
			log.debug("Adding Accesories to basket");
			// log.debug("The text of the button is -
			// "+pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.getText());
			for (int i = 0; i < 2; i++) {
				pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.click();
				// System.out.println("Value of i is "+i );
			}

		} catch (org.openqa.selenium.StaleElementReferenceException ex) {
			log.debug("Exception in finding value");
			System.out.println("Adding Accesories to basket");
			log.debug("Adding Accesories to basket");
			// log.debug("The text of the button is -
			// "+pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.getText());
			for (int i = 0; i < 2; i++) {
				pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.click();
				Thread.sleep(2000);
			}
		}

	}

	public static void selectAnyAccessoryLimit() throws InterruptedException {

		try {
			// Below will give status like in stock / out of stock etc
			Thread.sleep(5000);

			String status = driver.findElement(By.className("status-info")).getText();
			System.out.println(status);

			if (status.contains("In Stock")) {
				WebElement element = driver
						.findElement(By.xpath("//select[@class='accessory-option ng-pristine ng-valid']"));
				JavascriptExecutor js = (JavascriptExecutor) driver;
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", element);
				new Select(element).selectByValue("2");

				WebElement DeviceDetailsQuantity = driver.findElement(
						By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
				String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
				System.out.println("DeviceDetailsQuantityValue is " + DeviceDetailsQuantityValue);

				driver.findElement(By.id("deviceDetailsSubmit")).click();

				Thread.sleep(7000);

			} else {
				driver.navigate().back();
			}

		} catch (Exception e) {
			WebElement DeviceDetailsQuantity = driver.findElement(
					By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
			String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
			System.out.println(DeviceDetailsQuantityValue);
			Assert.assertEquals("2", DeviceDetailsQuantityValue);

			driver.findElement(By.id("deviceDetailsSubmit")).click();

			Thread.sleep(3000);
			WebElement BasketQuantity = driver.findElement(By.id("accessory-quantitySelectBoxIt"));
			String BasketQuantityvalue = BasketQuantity.getText();
			// Assert.assertEquals(DeviceDetailsQuantityValue,
			// BasketQuantityvalue);
			Assert.assertEquals("2", BasketQuantityvalue);

		}
	}

	public static void UserSpecifiedAccessoryLimit(String Limit) throws InterruptedException {

		try {
			// Below will give status like in stock / out of stock etc
			Thread.sleep(5000);
			UserSpecifiedAccessoryLimit = Integer.parseInt(Limit);
			String status = driver.findElement(By.className("status-info")).getText();
			System.out.println(status);

			if (status.contains("In Stock")) {
				WebElement element = driver
						.findElement(By.xpath("//select[@class='accessory-option ng-pristine ng-valid']"));
				JavascriptExecutor js = (JavascriptExecutor) driver;
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", element);
				new Select(element).selectByValue(Limit);

				WebElement DeviceDetailsQuantity = driver.findElement(
						By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
				String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
				System.out.println("DeviceDetailsQuantityValue is " + DeviceDetailsQuantityValue);
				count = count + Integer.parseInt(Limit);
				driver.findElement(By.id("deviceDetailsSubmit")).click();

				Thread.sleep(7000);

			} else {
				driver.navigate().back();
			}

		} catch (Exception e) {
			WebElement DeviceDetailsQuantity = driver.findElement(
					By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
			String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
			System.out.println(DeviceDetailsQuantityValue);
			// Assert.assertEquals(Limit, DeviceDetailsQuantityValue);

			driver.findElement(By.id("deviceDetailsSubmit")).click();

			Thread.sleep(3000);
			WebElement BasketQuantity = driver.findElement(By.id("accessory-quantitySelectBoxIt"));
			String BasketQuantityvalue = BasketQuantity.getText();
			// Assert.assertEquals(DeviceDetailsQuantityValue,
			// BasketQuantityvalue);
			// Assert.assertEquals(Limit, BasketQuantityvalue);

		}
	}

	public static void continueShopping() throws InterruptedException {
		log.debug("Opening continueShopping function");
		try {

			pageobjects.AccessoryPage.ContinueShoppingLink.click();
			log.debug("Clicked on the Continue Shopping link successfully");
		}

		catch (Exception e) {
			log.debug("Failed to click on the Continue Shppoing link " + e.getMessage() + "");
		}
	}

	/*
	 * public static void verifyNonConnectedDeviceAddedToBasketBefore() throws
	 * InterruptedException {
	 * log.debug("Opening verifyNonConnectedDeviceAddedToBasketBefore function"
	 * ); String AccessoryName = ""; String FitnessTrackerName = ""; String
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
	 * ); System.out.println(
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
	 * Assert.fail("Non Connected device is not present in the Basket section");
	 * } }
	 * 
	 * public static void
	 * verifyNonConnectedDeviceRetainedInBasketAfterPhoneSelection() throws
	 * InterruptedException { log.
	 * debug("Opening verifyNonConnectedDeviceRetainedInBasketAfterPhoneSelection function"
	 * ); System.out.
	 * println("Opening verifyNonConnectedDeviceRetainedInBasketAfterPhoneSelection function"
	 * ); String AccessoryName_Before = ""; String FitnessTrackerName_Before =
	 * ""; String SmartWatchName_Before = "";
	 * 
	 * String AccessoryName_After = ""; String FitnessTrackerName_After = "";
	 * String SmartWatchName_After = "";
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
	 * log.
	 * debug("successfully verified the basket section after phone selection");
	 * System.out.
	 * println("successfully verified the basket section after phone selection"
	 * ); }
	 * 
	 * catch (AssertionError e) {
	 * 
	 * log.debug(
	 * "Assertion failed: Non Connected device is not present in the Basket section after phone selection"
	 * + e.getMessage() + ""); System.out.println(
	 * "Assertion failed: Non Connected device is not present in the Basket section after phone selection"
	 * + e.getMessage() + ""); } }
	 */

	/*
	 * public static void verifyNonConnectedDeviceAddedToBasketBefore() throws
	 * InterruptedException {
	 * log.debug("Opening verifyNonConnectedDeviceAddedToBasketBefore function"
	 * ); String AccessoryName = ""; String FitnessTrackerName = ""; String
	 * SmartWatchName = "";
	 * 
	 * try { List<WebElement> AccessoryBeofrePhoneSelection = driver
	 * .findElements(By.xpath(
	 * "//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[3]/section/h3/span"
	 * )); if (AccessoryBeofrePhoneSelection.size() > 0) {
	 * 
	 * if (pageobjects.AccessoryPage.AccesoryBeforePhoneSelection.isDisplayed())
	 * { AccessoryName =
	 * pageobjects.AccessoryPage.AccesoryBeforePhoneSelection.getText();
	 * setRuntimeProperty.setProperty("Accessory", AccessoryName);
	 * System.out.println("Accessory is: " + AccessoryName); } }
	 * 
	 * List<WebElement> FitnessTrackerBeofrePhoneSelection = driver
	 * .findElements(By.xpath(
	 * "//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[1]/section/h3/span"
	 * )); if (FitnessTrackerBeofrePhoneSelection.size() > 0) { if
	 * (pageobjects.AccessoryPage.FitnessTrackerBeforePhoneSelection.isDisplayed
	 * ()) { FitnessTrackerName =
	 * pageobjects.AccessoryPage.FitnessTrackerBeforePhoneSelection.getText();
	 * setRuntimeProperty.setProperty("FitnessTracker", FitnessTrackerName);
	 * System.out.println("FitnessTracker is: " + FitnessTrackerName); } }
	 * 
	 * List<WebElement> SmartWatchBeofrePhoneSelection = driver
	 * .findElements(By.xpath(
	 * "//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[2]/section/h3/span"
	 * )); if (SmartWatchBeofrePhoneSelection.size() > 0) { if
	 * (pageobjects.AccessoryPage.SmartWatchBeforePhoneSelection.isDisplayed())
	 * { SmartWatchName =
	 * pageobjects.AccessoryPage.SmartWatchBeforePhoneSelection.getText();
	 * setRuntimeProperty.setProperty("SmartWatch", SmartWatchName);
	 * System.out.println("SmartWatch is: " + SmartWatchName); } }
	 * 
	 * log.debug(
	 * "Successfully verified that Non connected devices are added to the basket before phone selection"
	 * ); System.out.println(
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
	 * Assert.fail("Non Connected device is not present in the Basket section");
	 * } }
	 */

	public static void verifyNonConnectedDeviceAddedToBasketBefore() throws InterruptedException {
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
					System.out.println("Accessory is: " + AccessoryName);
				}
			}

			List<WebElement> FitnessTrackerBeofrePhoneSelection = driver
					.findElements(By.xpath("//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[1]/section/h3/span"));
			if (FitnessTrackerBeofrePhoneSelection.size() > 0) {
				if (pageobjects.AccessoryPage.FitnessTrackerBeforePhoneSelection.isDisplayed()) {
					FitnessTrackerName = pageobjects.AccessoryPage.FitnessTrackerBeforePhoneSelection.getText();
					setRuntimeProperty.setProperty("FitnessTracker", FitnessTrackerName);
					System.out.println("FitnessTracker is: " + FitnessTrackerName);
				}
			}

			List<WebElement> SmartWatchBeofrePhoneSelection = driver
					.findElements(By.xpath("//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[2]/section/h3/span"));
			if (SmartWatchBeofrePhoneSelection.size() > 0) {
				if (pageobjects.AccessoryPage.SmartWatchBeforePhoneSelection.isDisplayed()) {
					SmartWatchName = pageobjects.AccessoryPage.SmartWatchBeforePhoneSelection.getText();
					setRuntimeProperty.setProperty("SmartWatch", SmartWatchName);
					System.out.println("SmartWatch is: " + SmartWatchName);
				}
			}

			log.debug(
					"Successfully verified that Non connected devices are added to the basket before phone selection");
			System.out.println(
					"Successfully verified that Non connected devices are added to the basket before phone selection");
		}

		catch (Exception e) {

			log.debug("Fail: Nonconnected device is not present in the Basket section before phone selection "
					+ e.getMessage() + "");
			System.out.println("Fail: Nonconnected device is not present in the Basket section before phone selection "
					+ e.getMessage() + "");
			Assert.fail("Non Connected device is not present in the Basket section");
		}
	}

	/*
	 * public static void removeItemsFromBasketBasedOnAdditionOfItems() {
	 * System.out.println("inside Remove items function"); int TotalQtyInBasket
	 * = 0;
	 * 
	 * TotalQtyInBasket =
	 * (FitnessTrackerPageActions.UserSpecifiedFitnessTrackerLimit +
	 * AccessoryPageActions.UserSpecifiedAccessoryLimit +
	 * PAYMandPAYGTariffAndExtrasPageActions.SelectedAccessoryCount);
	 * System.out.println("Total qty in basket is " + TotalQtyInBasket); if
	 * (TotalQtyInBasket > 12) {
	 * driver.findElement(By.xpath("(//a[contains(., 'Remove')])[1]")).click();
	 * } }
	 */

	public static void calculateTotalQtyAddedInBasket() {
		count = UserSpecifiedFitnessTrackerLimit + UserSpecifiedAccessoryLimit;
		System.out.println("Total Qty added for Fitness Tracker and Accessory is :" + count);
	}
	public static void verifyNonConnectedDeviceRetainedInBasketAfterPhoneSelection() throws InterruptedException {
		log.debug("Opening verifyNonConnectedDeviceRetainedInBasketAfterPhoneSelection function");
		System.out.println("Opening verifyNonConnectedDeviceRetainedInBasketAfterPhoneSelection function");
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
					AccessoryName_Before = (String) Filereadingutility.getPropertyValue(RunTimeFilePath, "Accessory");
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
					FitnessTrackerName_Before = (String) Filereadingutility.getPropertyValue(RunTimeFilePath,
							"FitnessTracker");
					FitnessTrackerName_After = pageobjects.AccessoryPage.FitnessTrackerAfterPhoneSelection.getText();
					/*
					 * Assert.assertEquals(
					 * "Assertion Failed: FitnessTracker is not present in the basket after phone selection"
					 * ,
					 * FitnessTrackerName_Before.equals(FitnessTrackerName_After
					 * ));
					 */
					Assert.assertTrue(FitnessTrackerName_Before.contains(FitnessTrackerName_After),
							"Assertion Failed: FitnessTracker is not present in the basket page after phone selection");
					log.debug("Assertion Passed: FitnessTracker is present in the basket page after phone selection");
					System.out.println(
							"Assertion Passed: FitnessTracker is present in the basket page after phone selection");
				}
			}

			List<WebElement> SmartWatchAfterPhoneSelection = driver
					.findElements(By.xpath("//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[3]/section/h3/span"));
			if (SmartWatchAfterPhoneSelection.size() > 0) {

				if (pageobjects.AccessoryPage.SmartWatchAfterPhoneSelection.isDisplayed()) {
					SmartWatchName_Before = (String) Filereadingutility.getPropertyValue(RunTimeFilePath, "SmartWatch");
					SmartWatchName_After = pageobjects.AccessoryPage.SmartWatchAfterPhoneSelection.getText();
					/*
					 * Assert.
					 * assertEquals("Assertion Failed: SmartWatch is not present in the basket after phone selection"
					 * , SmartWatchName_Before.equals(SmartWatchName_After));
					 */
					Assert.assertTrue(SmartWatchName_Before.contains(SmartWatchName_After),
							"Assertion Failed: SmartWatch is not present in the basket page after phone selection");
					log.debug("Assertion Passed: SmartWatch is present in the basket page after phone selection");
					System.out.println(
							"Assertion Passed: SmartWatch is present in the basket page after phone selection");

					log.debug("successfully verified the basket section after phone selection");
					System.out.println("successfully verified the basket section after phone selection");
				}
			}

		}

		catch (AssertionError e) {

			log.debug(
					"Assertion failed: Non Connected device is not present in the Basket section after phone selection"
							+ e.getMessage() + "");
			System.out.println(
					"Assertion failed: Non Connected device is not present in the Basket section after phone selection"
							+ e.getMessage() + "");
		}
	}

	public static void getTotalQtyInBasket() {

		int loop = 0;
		String XpathQty = null;
		loop = driver.findElements(By.xpath("(//select[@id='accessory-quantity'])")).size();
		System.out.println("loop count is " + loop);
		for (int w = 1; w <= loop; w++) {

			XpathQty = "(//select[@id='accessory-quantity'])[" + w + "]";

			WebElement countelement3 = driver.findElement(By.xpath(XpathQty));
			js.executeScript("arguments[0].setAttribute('style', 'display:block;')", countelement3);

			countelement3 = new Select(countelement3).getFirstSelectedOption();

			System.out.println("[" + w + "] Accessory Quantity is " + countelement3.getText());
			totalcount = totalcount + Integer.parseInt(countelement3.getText());

		}
		System.out.println("Total Qty in Basket now is" + totalcount);

	}

	public static void check() throws Exception {
		getTotalQtyInBasket();

		if (count + PAYMandPAYGTariffAndExtrasPageActions.AccessoryContainerSize > 12) {
			WebElement FirstAccessoryQuantityElement = driver
					.findElement(By.xpath("(//select[@id='accessory-quantity'])[1]"));
			js.executeScript("arguments[0].setAttribute('style', 'display:block;')", FirstAccessoryQuantityElement);
			WebElement countelement1 = new Select(FirstAccessoryQuantityElement).getFirstSelectedOption();
			String FirstCount = countelement1.getText();
			System.out.println("Qty of Accessory displayed is " + FirstCount);

			WebElement SecondAccessoryQuantityElement = driver
					.findElement(By.xpath("(//select[@id='accessory-quantity'])[2]"));
			js.executeScript("arguments[0].setAttribute('style', 'display:block;')", SecondAccessoryQuantityElement);
			WebElement countelement2 = new Select(SecondAccessoryQuantityElement).getFirstSelectedOption();
			String SecondCount = countelement2.getText();
			System.out.println("Qty of Fitness Tracker displayed is " + SecondCount);

			if (Integer.parseInt(FirstCount) + Integer.parseInt(SecondCount) == count
					- PAYMandPAYGTariffAndExtrasPageActions.AccessoryContainerSize) {
				System.out.println("Works as expected");
			}
		} else {
			System.out.println("Qty is less than 12");
		}
		if (totalcount > 6) {
			System.out.println("Total count is greater than 6");
			int checkoutbtnsize = driver.findElements(By.xpath("//*[@value='Go to checkout'][1]")).size();
			if (checkoutbtnsize != 0) {
				Assert.fail("Checkout button is present even when the total qty in basket is greater than 6");
			} else {
				System.out.println("Checkout button is not present since the total count is greater than 6 ->as expected");
			}
			clickOnRemoveButton();
			Thread.sleep(15000);
			clickOnRemoveButton();
		}
		else {
			System.out.println("Total Qty is less than 6 so we will be able to proceed to checkout");
		}

	}

	public static void clickOnRemoveButton() {

		pageobjects.BasketPage.RemoveButton.click();
		System.out.println("Clicked on Remove button");
	}

	public static void UserSpecifiedFitnessTrackerLimit(String Limit) throws InterruptedException {
		// TODO Auto-generated method stub
		try {
			// Below will give status like in stock / out of stock etc
			Thread.sleep(5000);
			UserSpecifiedFitnessTrackerLimit = Integer.parseInt(Limit);
			String status = driver.findElement(By.className("status-info")).getText();
			System.out.println(status);

			if (status.contains("In Stock")) {
				WebElement element = driver
						.findElement(By.xpath("//select[@class='accessory-option ng-pristine ng-valid']"));
				JavascriptExecutor js = (JavascriptExecutor) driver;
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", element);
				new Select(element).selectByValue(Limit);

				WebElement DeviceDetailsQuantity = driver.findElement(
						By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
				String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
				System.out.println("DeviceDetailsQuantityValue is " + DeviceDetailsQuantityValue);
				count = count + Integer.parseInt(Limit);
				driver.findElement(By.id("deviceDetailsSubmit")).click();

				Thread.sleep(3000);

			} else {
				driver.navigate().back();
			}

		} catch (Exception e) {
			WebElement DeviceDetailsQuantity = driver.findElement(
					By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
			String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
			System.out.println(DeviceDetailsQuantityValue);
			Assert.assertEquals(Limit, DeviceDetailsQuantityValue);

			driver.findElement(By.id("deviceDetailsSubmit")).click();

			Thread.sleep(3000);
			WebElement BasketQuantity = driver.findElement(By.id("accessory-quantitySelectBoxIt"));
			String BasketQuantityvalue = BasketQuantity.getText();

			Assert.assertEquals(Limit, BasketQuantityvalue);

		}

	}
}
