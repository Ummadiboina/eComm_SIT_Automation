package actionsPerformed;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import GlobalActions.Screenshots;
import helpers.Environment;

public class BaseCommPageActions extends Environment {
	final static Logger log = Logger.getLogger("BaseCommPageActions");

	static List<String> NormalCost = new ArrayList<>();
	static List<String> BasecommCost = new ArrayList<>();

	public static void SelectBaseCommTariff(String elementName) throws IOException, InterruptedException {

		if (elementName.contains("Random")) {
			log.debug("Selected Random Tariff");

			//pageobjects.BaseCommPage.RandomDevice.click();
			JavascriptExecutor executor = (JavascriptExecutor)driver;
			executor.executeScript("arguments[0].click();",pageobjects.BaseCommPage.RandomDevice);

			log.debug("Selected Random Device");
		}
		Screenshots.captureScreenshot();
	}

	public static void checkIfiPadDevicesArePresent() throws IOException, InterruptedException {

		// List<WebElement> iPadDevices =
		// pageobjects.BaseCommPage.iPadDevicesName;
		List<WebElement> iPadDevices = driver.findElement(By.xpath("//*[@id='o2-page-wrapper']/div[4]/div[5]/div"))
				.findElements(By.xpath("//div/p[@class='details']"));

		for (int i = 0; i < iPadDevices.size(); i++) {
			if (iPadDevices.get(i).getText().contains("iPad")) {
				log.debug("" + iPadDevices.get(i).getText() + "");
			} else {
				log.debug("Devices other than iPad are also displayed");
				Assert.fail("Devices other than iPad are also displayed");
			}
		}
		Screenshots.captureScreenshot();
	}

	public static void clickOnOtherTablets() throws InterruptedException, IOException {
		log.debug("clicking on Other Tablets Tab");
		pageobjects.BaseCommPage.OtherTablets.click();
		log.debug("clicking on Other Tablets Tab");
		Thread.sleep(20000);
		Screenshots.captureScreenshot();
	}

	public static void clickOniPadTab() throws IOException, InterruptedException {
		try {
			log.debug("clicking on iPad Tab");
			pageobjects.BaseCommPage.iPad.click();
			Thread.sleep(20000);
			Screenshots.captureScreenshot();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			Assert.fail("Unable to click on ipad tab");
			Screenshots.captureScreenshot();
		}

	}

	public static void clickOnSortTab() throws IOException, InterruptedException {
		log.debug("clicking on Sort Tab");
		pageobjects.BaseCommPage.SortTab.click();
		Screenshots.captureScreenshot();
	}

	public static void selectSortOption(String Sort) throws IOException, InterruptedException {
		log.debug("Selecting Sort option" + Sort);
		if (Sort.equals("MonthlyHighToLow")) {
			pageobjects.SortingAndFilter.MonthlyHighToLow.click();
		}
		if (Sort.equals("MonthlyLowToHigh")) {
			pageobjects.SortingAndFilter.MonthlyLowToHigh.click();
		}
		if (Sort.equals("UpfrontHighToLow")) {
			pageobjects.SortingAndFilter.UpfrontHighToLow.click();
		}
		if (Sort.equals("UpfrontLowToHigh")) {
			pageobjects.SortingAndFilter.UpfrontLowToHigh.click();
		}
		if (Sort.equals("ScreenSize")) {
			pageobjects.SortingAndFilter.ScreenSize.click();
		}
		if (Sort.equals("Weight")) {
			pageobjects.SortingAndFilter.Weight.click();
		}
		if (Sort.equals("BatteryLife")) {
			pageobjects.SortingAndFilter.BatteryLife.click();
		}
		if (Sort.equals("CameraResolution")) {
			pageobjects.SortingAndFilter.CameraResolution.click();
		}
		if (Sort.equals("UserRatingHighToLow")) {
			pageobjects.SortingAndFilter.UserRatingHighToLow.click();
		}
		if (Sort.equals("UserRatingLowToHigh")) {
			pageobjects.SortingAndFilter.UserRatingLowToHigh.click();
		}
		if (Sort.equals("BrandAToZ")) {
			pageobjects.SortingAndFilter.BrandAToZ.click();
		}
		if (Sort.equals("BrandZToA")) {
			pageobjects.SortingAndFilter.BrandZToA.click();
		}
		Screenshots.captureScreenshot();

	}

	public static void clickOnResetSort() throws IOException, InterruptedException {
		log.debug("clicking on Reset Sort");
		pageobjects.SortingAndFilter.ResetSort.click();
		Screenshots.captureScreenshot();
	}

	public static void CompareURL(String NewURL) throws IOException, InterruptedException {
		log.debug("Comparing URL");
		// URL is reference , some instance which needs to be initialsed for

		String URL = driver.getCurrentUrl();
		log.debug("URL is " + URL);
		String FeatureURL = NewURL;
		log.debug("Feature url to compare is " + FeatureURL);
		Assert.assertEquals(FeatureURL, URL);
		Screenshots.captureScreenshot();
	}

	public static void VerifyIpadURL() throws IOException, InterruptedException {

		log.debug("Going to Verify content inside URL");
		String currenturl = driver.getCurrentUrl();
		log.debug(currenturl);
		final URI uri = URI.create(currenturl);
		String queryString = uri.getQuery();
		log.debug("got final querystring  " + queryString);

		// String subString = queryString.substring(queryString.);
		String subString = queryString.substring(queryString.lastIndexOf('=') + 1);
		log.debug("EXTRACTED " + subString);
		if (subString.equals("ipad")) {
			log.debug("url is correct");
		} else {
			Assert.fail("url is improper and doesnot have ipad appended in it");
		}
		Assert.assertEquals("ipad", subString);
		Screenshots.captureScreenshot();
	}

	public static void VerifyTabletURL() throws IOException, InterruptedException {
		log.debug("Going to Verify content inside URL");
		String currenturl = driver.getCurrentUrl();
		log.debug(currenturl);
		final URI uri = URI.create(currenturl);
		String queryString = uri.getQuery();
		log.debug("got final querystring  " + queryString);

		// String subString = queryString.substring(queryString.);
		String subString = queryString.substring(queryString.lastIndexOf('=') + 1);
		log.debug("EXTRACTED " + subString);
		if (subString.contains("tablet")) {
			log.debug("url is correct");
		} else {
			Assert.fail("url is improper and doesnot have tablet appended in it");
		}
		Assert.assertEquals("tablet", subString);
		Screenshots.captureScreenshot();
	}

	/*
	 * public static void BuynowwithDevice(String elementName) throws
	 * MalformedURLException {
	 * log.debug("Going to click on the buy now button on device"); if
	 * (elementName.contains("Apple iPad mini 3")) {
	 * log.debug("Going to select Ipad mini 3 device");
	 *
	 * pageobjects.BaseCommPage.IpadMini3Buynow.click();
	 *
	 * log.debug("Selected iPad mini 3 device");
	 *
	 * log.debug("Selected iPad mini 3 device");
	 *
	 * } if (elementName.contains("Appleï¿½iPad Pro 9.7 inch")) {
	 * log.debug("Going to select Appleï¿½iPad Pro 9.7 inch device");
	 *
	 * pageobjects.BaseCommPage.IpadPro97Buynow.click();
	 *
	 * log.debug("Selected Appleï¿½iPad Pro 9.7 inch device");
	 *
	 * log.debug("Selected Appleï¿½iPad Pro 9.7 inch device");
	 *
	 * } if (elementName.contains("Apple iPad mini 2")) {
	 * log.debug("Going to select iPad mini 2 device");
	 *
	 * pageobjects.BaseCommPage.IpadMini2Buynow.click();
	 *
	 * log.debug("Selected iPad mini 2 device");
	 *
	 * log.debug("Selected iPad mini 2 device");
	 *
	 * } if (elementName.contains("Apple iPad Air")) {
	 * log.debug("Going to select iPad Air device");
	 *
	 * pageobjects.BaseCommPage.IpadAirBuynow.click();
	 *
	 * log.debug("Selected iPad Air device");
	 *
	 * log.debug("Selected iPad Air device"); } if
	 * (elementName.contains("Samsung Galaxy Tab Active")) {
	 * log.debug("Going to select Galaxy Tab device");
	 *
	 * pageobjects.BaseCommPage.GalaxyTabActiveBuynow.click();
	 *
	 * log.debug("Selected Galaxy Tab device");
	 *
	 * log.debug("Selected Galaxy Tab device"); } if
	 * (elementName.contains("Samsung Galaxy Tab A 2016 10.1")) {
	 * log.debug("Going to Samsung Galaxy Tab A 2016 10.1 device");
	 *
	 * pageobjects.BaseCommPage.GalaxyTabActive2016101Buynow.click();
	 *
	 * log.debug("Selected Samsung Galaxy Tab A 2016 10.1 device");
	 *
	 * log.debug("Selected Samsung Galaxy Tab A 2016 10.1 device"); } if
	 * (elementName.contains("Sony Xperia Z2 Tablet")) {
	 * log.debug("Going to select XperiaZ2Tablet device");
	 *
	 * pageobjects.BaseCommPage.XperiaZ2TabletBuynow.click();
	 *
	 * log.debug("Selected XperiaZ2Tablet device");
	 *
	 * log.debug("Selected XperiaZ2Tablet device"); } }
	 */

	public static void VerifyPage() throws Exception {
		log.debug("Going to verify page");
		Thread.sleep(3000);
		String title = pageobjects.BaseCommPage.headerofTariffandExtrasPage.getText();
		// log.debug("title is "+driver.getTitle());
		// String title=driver.findElement(By.id("header-primary")).getText();

		Assert.assertEquals(title, "Tariff and extras");
		log.debug("End of Verify Page function");
		Screenshots.captureScreenshot();

	}

	public static void VerifyRibbon(String device) throws IOException, InterruptedException {
		// TODO Auto-generated method stub
		log.debug("Going to Verify promotion ribbon");
		int k = 0;

		List<WebElement> iPadDevicesName = pageobjects.BaseCommPage.iPadDevicesName;
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,900)", "");

		for (int i = 0; i < iPadDevicesName.size(); i++) {
			log.debug(iPadDevicesName.get(i).getText());
			if (iPadDevicesName.get(i).getText().equals(device)) {
				log.debug("Device matches for verifying promotion ribbon");
				k = i + 1;
				String c = "(//div[@class='ribbon-wrapper'])[" + k + "]";
				boolean str1 = driver.findElement(By.xpath(c)) != null;
				Assert.assertTrue(str1);
				String str2 = driver.findElement(By.xpath(c)).getText();
				if (str2.isEmpty()) {
					Assert.fail("No promotion ribbon present");
				}
				log.debug("the promotion text is " + str2);
				log.debug("Verified promotion ribbon");
			} else {
				log.debug("Device is not matched");
			}
		}
		Screenshots.captureScreenshot();
	}

	/*
	 * public static void VerifyPriceChangeuponCapacity() { // TODO Auto-generated
	 * method stub System.out.
	 * println("Going to Verify whether price changes w.r.t. capacity"); //
	 * WebElement capacity = //
	 * driver.findElement(By.xpath("//*[@data-qa-device-model-family='iPad // mini
	 * 3']/div[1]/div[2]/div[1]/div[2]/div[2]/select[@id='memory']")); WebElement
	 * capacity = pageobjects.BaseCommPage.CapacityipadAir2;
	 *
	 * JavascriptExecutor js = (JavascriptExecutor) driver;
	 * js.executeScript("arguments[0].setAttribute('style', 'display:block;')",
	 * capacity); if (capacity.isDisplayed()) { List<WebElement> elementCount = new
	 * Select(capacity).getOptions(); //
	 * log.debug("elementCount"+elementCount); if (elementCount.size() <=
	 * 1) { Assert.
	 * fail("There are no more than 1 option available for capacity dropdown"); } }
	 * new Select(capacity).selectByVisibleText("128GB"); String price1 =
	 * pageobjects.BaseCommPage.PriceiPadAir2.getText(); log.debug(price1);
	 * log.debug("Now the second line is ..... "); new
	 * Select(capacity).selectByVisibleText("16GB"); String price2 =
	 * pageobjects.BaseCommPage.PriceiPadAir2.getText(); log.debug(price2);
	 * Assert.assertNotSame(price2, price1);
	 *
	 * }
	 */

	public static void VerifyPriceChangeuponCapacity(String Capacity1, String Capacity2, String device)
			throws Exception {
		// TODO Auto-generated method stub
		log.debug("Going to Verify whether price changes w.r.t. capacity");
		int k = 0;
		String c = null, d = null;

		List<WebElement> iPadDevicesName = pageobjects.BaseCommPage.iPadDevicesName;
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,200)", "");

		List<WebElement> prices = pageobjects.BaseCommPage.Prices;
		if (prices.size() <= 0) {
			Assert.fail("No price is displayed for the selected device");
		}

		for (int i = 0; i < iPadDevicesName.size(); i++) {
			log.debug(iPadDevicesName.get(i).getText());
			if (iPadDevicesName.get(i).getText().equals(device)) {
				k = i + 1;
				d = "(//select[@id='memory'])[" + k + "]";
			}
		}
		WebElement capacity = driver.findElement(By.xpath(d));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", capacity);

		if (capacity.isDisplayed()) {
			List<WebElement> elementCount = new Select(capacity).getOptions();
			log.debug("size is" + elementCount.size());
			for (int j = 0; j < elementCount.size(); j++) {
				log.debug(elementCount.get(j).getText());
			}
			new Select(capacity).selectByVisibleText(Capacity1);
			Thread.sleep(3000);
		}

		for (int i = 0; i < iPadDevicesName.size(); i++) {
			log.debug(iPadDevicesName.get(i).getText());
			if (iPadDevicesName.get(i).getText().equals(device)) {
				log.debug("Device matches for verifying price change upon capacity");
				k = i + 1;
				c = "(//span[contains(text(),'£')])[" + k + "]";
			}
		}
		Thread.sleep(3000);
		String price1 = driver.findElement(By.xpath(c)).getText();
		log.debug("Price before changing capacity is " + price1);
		log.debug("Going to select new capacity ..... ");
		Thread.sleep(3000);

		if (capacity.isDisplayed()) {
			List<WebElement> elementCount = new Select(capacity).getOptions();
			log.debug("size is" + elementCount.size());
			for (int j = 0; j < elementCount.size(); j++) {
				log.debug(elementCount.get(j).getText());
			}

			new Select(capacity).selectByVisibleText(Capacity2);
			Thread.sleep(3000);
		}
		String price2 = driver.findElement(By.xpath(c)).getText();
		log.debug("Price after changing the capacity is" + price2);
		Thread.sleep(3000);
		Assert.assertNotSame(price2, price1);
		Screenshots.captureScreenshot();
	}

	public static void verifyTariffType(String flow) throws IOException, InterruptedException {
		JavascriptExecutor js = (JavascriptExecutor) driver;

		List<WebElement> PayInFull = driver.findElements(By.id("link-pay-for-your-device"));
		List<WebElement> ViewAllTariffs = driver.findElements(By.xpath("//div[@class='viewAllTariffs']"));
		List<String> NormalUpfrontCost = new ArrayList<>();
		List<String> NormalMonthlyCost = new ArrayList<>();

		List<String> BasecommUpfrontCost = new ArrayList<>();
		List<String> BasecommMonthlyCost = new ArrayList<>();

		if (flow.equals("Normal")) {
			List<WebElement> UpfrontCostElement = pageobjects.PAYMandPAYGTariffAndExtrasPage.UpfrontCost;
			List<WebElement> MonthlyCostElement = pageobjects.PAYMandPAYGTariffAndExtrasPage.MonthlyCost;
			int k = 0;

			if (ViewAllTariffs.size() > 0) {
				js.executeScript("arguments[0].click();", ViewAllTariffs.get(0));
			} else {
				log.debug("No ViewAllTariffs");
			}

			if (PayInFull.size() > 0) {
				js.executeScript("arguments[0].click();", PayInFull.get(0));
			} else {
				log.debug("No PayInFull");
			}

			if (UpfrontCostElement.size() != 0) {
				for (int i = 0; i < UpfrontCostElement.size(); i++) {
					k = i + 1;
					NormalUpfrontCost.add(UpfrontCostElement.get(i).getText());
					log.debug(
							"Upfront cost of position :" + k + " in tariffs is" + UpfrontCostElement.get(i).getText());
				}
			}

			if (MonthlyCostElement.size() != 0) {
				for (int i = 0; i < MonthlyCostElement.size(); i++) {
					k = i + 1;
					NormalMonthlyCost.add(MonthlyCostElement.get(i).getText());
					log.debug(
							"Monthly cost of position :" + k + " in tariffs is" + MonthlyCostElement.get(i).getText());
				}
			}
			for (int i = 0; i < NormalUpfrontCost.size(); i++) {
				NormalCost.add(NormalUpfrontCost.get(i).concat(NormalMonthlyCost.get(i)));
				log.debug("Normal cost " + NormalCost.get(i));
			}
			Screenshots.captureScreenshot();
		}

		if (flow.equals("Basecomm")) {

			List<WebElement> UpfrontCostElement = pageobjects.PAYMandPAYGTariffAndExtrasPage.UpfrontCost;
			List<WebElement> MonthlyCostElement = pageobjects.PAYMandPAYGTariffAndExtrasPage.MonthlyCost;
			int k = 0;

			if (ViewAllTariffs.size() > 0) {

				js.executeScript("arguments[0].click();", ViewAllTariffs.get(0));
			} else {
				log.debug("No ViewAllTariffs");
			}
			if (PayInFull.size() > 0) {
				js.executeScript("arguments[0].click();", PayInFull.get(0));
			} else {
				log.debug("No PayInFull");
			}

			if (UpfrontCostElement.size() != 0) {
				for (int i = 0; i < UpfrontCostElement.size(); i++) {
					k = i + 1;
					BasecommUpfrontCost.add(UpfrontCostElement.get(i).getText());
					log.debug(
							"Upfront cost of position :" + k + " in tariffs is" + UpfrontCostElement.get(i).getText());
				}
			}

			if (MonthlyCostElement.size() != 0) {
				for (int i = 0; i < MonthlyCostElement.size(); i++) {
					k = i + 1;
					BasecommMonthlyCost.add(MonthlyCostElement.get(i).getText());
					log.debug(
							"Monthly cost of position :" + k + " in tariffs is" + MonthlyCostElement.get(i).getText());
				}
			}
			for (int i = 0; i < BasecommUpfrontCost.size(); i++) {
				BasecommCost.add(BasecommUpfrontCost.get(i).concat(BasecommMonthlyCost.get(i)));
				log.debug("Basecomm cost " + BasecommCost.get(i));
			}
			Screenshots.captureScreenshot();

		}
		if (flow.equals("Check")) {
			log.debug("Size  " + NormalCost.size() + '\n' + BasecommCost.size());
			if (NormalCost.size() != 0 && BasecommCost.size() != 0) {

				for (int z = 0; z < BasecommCost.size(); z++) {
					if (NormalCost.contains(BasecommCost.get(z))) {
						log.debug("Failed - Basecomm tariffs are present in normal flow");
					} else {
						log.debug("Basecomm tariffs are not present in normal tariffs section as expected");
					}
				}
			}
			Screenshots.captureScreenshot();
		}
	}

	public static void verifyTariffTypeMBB(String device, String flow) throws IOException, InterruptedException {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		List<String> NormalUpfrontCost = new ArrayList<>();
		List<String> NormalMonthlyCost = new ArrayList<>();
		List<WebElement> PayInFull = driver.findElements(By.id("link-pay-for-your-device"));
		List<WebElement> ViewAllTariffs = driver.findElements(By.xpath("//div[@class='viewAllTariffs']"));

		if (flow.equals("Normal")) {

			List<WebElement> UpfrontCostElement = pageobjects.PAYMandPAYGTariffAndExtrasPage.UpfrontCost;
			List<WebElement> MonthlyCostElement = pageobjects.PAYMandPAYGTariffAndExtrasPage.MonthlyCost;
			int k = 0;

			if (ViewAllTariffs.size() > 0) {
				js.executeScript("arguments[0].click();", ViewAllTariffs.get(0));
			} else {
				log.debug("No ViewAllTariffs");
			}

			if (PayInFull.size() > 0) {
				js.executeScript("arguments[0].click();", PayInFull.get(0));
			} else {
				log.debug("No PayInFull");
			}
			if (UpfrontCostElement.size() != 0) {
				for (int i = 0; i < UpfrontCostElement.size(); i++) {
					k = i + 1;
					NormalUpfrontCost.add(UpfrontCostElement.get(i).getText());
					log.debug(
							"Upfront cost of position :" + k + " in tariffs is" + UpfrontCostElement.get(i).getText());
				}
			}

			if (MonthlyCostElement.size() != 0) {
				for (int i = 0; i < MonthlyCostElement.size(); i++) {
					k = i + 1;
					NormalMonthlyCost.add(MonthlyCostElement.get(i).getText());
					log.debug(
							"Monthly cost of position :" + k + " in tariffs is" + MonthlyCostElement.get(i).getText());
				}
			}
			for (int i = 0; i < NormalUpfrontCost.size(); i++) {
				NormalCost.add(NormalUpfrontCost.get(i).concat(NormalMonthlyCost.get(i)));
				log.debug("Normal cost " + NormalCost.get(i));
			}
			Screenshots.captureScreenshot();
		}

		if (flow.equals("Basecomm"))

		{
			int k = 0;
			WebElement UpfrontCostMBB = null;
			WebElement MonthlyCostMBB = null;
			List<WebElement> MBBDevicesName = pageobjects.BaseCommPage.MBBDevicesName;
			List<String> Devices = new ArrayList<String>();
			for (WebElement e : MBBDevicesName) {
				Devices.add(e.getText());
			}
			if (!Devices.contains(device)) {
				Assert.fail("Expected device is not present");
			} else {
				for (int i = 0; i < MBBDevicesName.size(); i++) {
					if (MBBDevicesName.get(i).getText().equals(device)) {
						k = i + 1;
						String c = "(//span[@id='qa-upfront-pound'])[" + k + "]";
						String d = "(//span[@id='qa-month-pound'])[" + k + "]";
						UpfrontCostMBB = driver.findElement(By.xpath(c));
						MonthlyCostMBB = driver.findElement(By.xpath(d));
					}
				}
				BasecommCost.add(UpfrontCostMBB.getText().concat(MonthlyCostMBB.getText()));
			}
			Screenshots.captureScreenshot();
		}
		if (flow.equals("Check")) {
			log.debug("Size  " + NormalCost.size() + '\n' + BasecommCost.size());
			if (NormalCost.size() != 0 && BasecommCost.size() != 0) {

				for (int z = 0; z < BasecommCost.size(); z++) {
					if (NormalCost.contains(BasecommCost.get(z))) {
						log.debug("Failed - Basecomm tariffs are present in normal flow");
					} else {
						log.debug("Basecomm tariffs are not present in normal tariffs section as expected");
					}
				}
			}
			Screenshots.captureScreenshot();
		}
	}

	public static void checkSeeDeviceDetailsPopUp(String device) throws InterruptedException, IOException {
		device = trimEnd(device);

		List<WebElement> TabletDevicesName = pageobjects.BaseCommPage.TabletDevicesName;

		WebElement SeeDeviceDetailsLink;
		List<WebElement> PoundsElement;
		List<WebElement> PenseElement;
		JavascriptExecutor js = (JavascriptExecutor) driver;
		String popupdevicenametext = null;
		String poundselementtext = null;
		String penseelementtext = null;
		String c = null, d = null, e = null;
		int k = 0;

		List<String> Devices = new ArrayList<String>();
		for (WebElement f : TabletDevicesName) {
			Devices.add(f.getText());
		}

		for (int y = 0; y < Devices.size(); y++) {
			log.debug(Devices.get(y));
		}
		log.debug("passing device" + device);

		if (!Devices.contains(device)) {
			Assert.fail("Expected device is not present");
		} else {

			for (int i = 0; i < TabletDevicesName.size(); i++) {
				if (TabletDevicesName.get(i).getText().equals(device)) {
					log.debug("Device name matches");
					k = i + 1;
					c = "(//a[contains(text(),'See device details')])[" + k + "]";
					d = "(//span[@class='headline ng-binding'])[" + k + "]";
					e = "(//span[@class='pence ng-binding'])[" + k + "]";
					PoundsElement = driver.findElements(By.xpath(d));
					PenseElement = driver.findElements(By.xpath(e));
					/*
					 * log.debug("Pounds List size :" + PoundsElement.size());
					 * log.debug("Pense List size :" + PenseElement.size());
					 */

					SeeDeviceDetailsLink = driver.findElement(By.xpath(c));
					if (SeeDeviceDetailsLink.isDisplayed()) {
						js.executeScript("arguments[0].click();", SeeDeviceDetailsLink);
						log.debug("Clicked on See Device Details Link");
						log.debug("Clicked on See Device Details Link");
					} else {
						Assert.fail("Device Details link not present");
					}
					Thread.sleep(5000);

					for (String winHandle : driver.getWindowHandles()) {
						driver.switchTo().window(winHandle);
						log.debug("Control is in pop up");
						log.debug("Control is in pop up");
					}
					Thread.sleep(3000);
					WebElement PopupdevicenametextElement = pageobjects.BaseCommPage.PopupdevicenametextElement;
					if (PopupdevicenametextElement.isDisplayed()) {
						popupdevicenametext = PopupdevicenametextElement.getText();
						if (popupdevicenametext.equals(device)) {
							log.debug("Device name in pop up is " + popupdevicenametext
									+ "and matches the device selected");
							log.debug("Device name in pop up is " + popupdevicenametext
									+ "and matches the device selected");
						}
					} else {
						Assert.fail("Device name in pop up is not present");
					}

					if (PoundsElement.size() > 0) {
						poundselementtext = PoundsElement.get(0).getText();
						if (poundselementtext.equals(PoundsElement.get(0).getText())) {
							log.debug(
									"Pounds in pop up - " + poundselementtext + ", pounds value displayed for device - "
											+ PoundsElement.get(0).getText() + "and they are the same");
							log.debug(
									"Pounds in pop up - " + poundselementtext + ", pounds value displayed for device - "
											+ PoundsElement.get(0).getText() + "and they are the same");
						}
					}

					if (PenseElement.size() > 0) {
						penseelementtext = PenseElement.get(0).getText();
						if (penseelementtext.equals(PenseElement.get(0).getText())) {
							log.debug("Pense in pop up - " + penseelementtext + ", pense value displayed for device - "
									+ PenseElement.get(0).getText() + "and they are the same");
							log.debug(
									"Pense in pop up - " + penseelementtext + ", pense value displayed for device - "
											+ PenseElement.get(0).getText() + "and they are the same");
						}
					}
					WebElement SpecificationsElement = pageobjects.BaseCommPage.SpecificationsElement;
					if (!SpecificationsElement.isDisplayed()) {
						log.debug("specifications not displayed");
					} else
						log.debug("specifications displayed");

					WebElement FullSpecificationElement = pageobjects.BaseCommPage.FullSpecificationElement;
					if (FullSpecificationElement.isDisplayed()) {
						FullSpecificationElement.click();
						log.debug("Full specification link is present");
					}
					if (pageobjects.BaseCommPage.BoxClose.isDisplayed()) {
						pageobjects.BaseCommPage.BoxClose.click();
					} else {
						Assert.fail("Not able to close the pop up");
					}
				}

			}
		}
		Screenshots.captureScreenshot();
	}

	public static String trimEnd(String s) {
		int i = s.length();
		if (s == null || i == 0) {
			return s;
		}
		while (i > 0 && Character.isWhitespace(s.charAt(i - 1)))
			i--;
		if (i == s.length())
			return s;
		else
			return s.substring(0, i);
	}

	public static void checkExpDevAndDetails(String device, String color, String capacity, String stockmessage)
			throws IOException, InterruptedException {
		log.debug("Inside checkExpDevAndDetails function");
		log.debug(device + color + capacity + stockmessage);
		int k = 0;

		List<WebElement> iPadDevicesName = pageobjects.BaseCommPage.iPadDevicesName;
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,400)", "");
		for (int i = 0; i < iPadDevicesName.size(); i++) {
			if (iPadDevicesName.get(i).getText().equals(device)) {

				k = i + 1;
				String r = "(//div[@class='star-rating'])[" + k + "]";
				if (driver.findElement(By.xpath(r)).getText().isEmpty()) {
					Assert.fail("No ratings present for this device");
				} else {
					log.debug("Ratings for the device is present");
				}

				String c = "(//select[@id='colour'])[" + k + "]";

				WebElement colordropdown = driver.findElement(By.xpath(c));
				JavascriptExecutor js = (JavascriptExecutor) driver;
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", colordropdown);
				if (colordropdown.isDisplayed()) {
					WebElement firstcolor = new Select(colordropdown).getFirstSelectedOption();
					log.debug("default color for this device is :" + firstcolor.getText());
					/*if (color.equals(firstcolor.getText())) {
						log.debug("Expected color selected :" + firstcolor.getText());
					} else {
						Assert.fail("Expected color not selected by default");
					}*/
				}

				String d = "(//select[@id='memory'])[" + k + "]";

				WebElement capacitydropdown = driver.findElement(By.xpath(d));
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", capacitydropdown);
				if (capacitydropdown.isDisplayed()) {
					WebElement firstcapacity = new Select(capacitydropdown).getFirstSelectedOption();
					if (capacity.equals(firstcapacity.getText())) {
						log.debug("Expected capacity selected :" + firstcapacity.getText());
					} else {
						log.debug("Expected capacity not selected by default");
						//Assert.fail("Expected capacity not selected by default");
					}
				}
				String e = "(//div[@class='device-status'])[" + k + "]";
				WebElement stockmsg = driver.findElement(By.xpath(e));
				log.debug(stockmsg.getText());
				/*if (stockmsg.getText().contains(stockmessage)) {
					log.debug("Expected stockmsg displayed :" + stockmsg.getText());
				} else {
					//Assert.fail(" Expected stockmsg not displayed by default");
					Assert.fail(" Expected stockmsg not displayed by default");
				}*/
			}
		}
		Screenshots.captureScreenshot();
	}

	public static void checkExpDevAndDetailsForComingSoonDevice(String device, String color, String capacity, String stockmessage) throws IOException, InterruptedException {
		log.debug("Inside checkExpDevAndDetails function");
		log.debug(device + color + capacity + stockmessage);
		int k = 0;

		List<WebElement> iPadDevicesName = pageobjects.BaseCommPage.iPadDevicesName;
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,400)", "");
		for (int i = 0; i < iPadDevicesName.size(); i++) {
			log.debug(iPadDevicesName.get(i).getText());
			if (iPadDevicesName.get(i).getText().equals(device)) {

				k = i + 1;
				String r = "(//div[@class='star-rating'])[" + k + "]";
				if (driver.findElement(By.xpath(r)).getText().isEmpty()) {
					Assert.fail("No ratings present for this device");
				} else {
					log.debug("Ratings for the device is present");
				}

				String c = "(//select[@id='colour'])[" + k + "]";

				WebElement colordropdown = driver.findElement(By.xpath(c));
				JavascriptExecutor js = (JavascriptExecutor) driver;
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", colordropdown);
				if (colordropdown.isDisplayed()) {
					WebElement firstcolor = new Select(colordropdown).getFirstSelectedOption();
					log.debug("default color for this device is :" + firstcolor.getText());
					if (color.equals(firstcolor.getText())) {
						log.debug("Expected color selected :" + firstcolor.getText());
					} else {
						Assert.fail("Expected color not selected by default");
					}
				}

				String d = "(//select[@id='memory'])[" + k + "]";

				WebElement capacitydropdown = driver.findElement(By.xpath(d));
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", capacitydropdown);
				if (capacitydropdown.isDisplayed()) {
					WebElement firstcapacity = new Select(capacitydropdown).getFirstSelectedOption();
					if (capacity.equals(firstcapacity.getText())) {
						log.debug("Expected capacity selected :" + firstcapacity.getText());
					} else {
						Assert.fail("Expected capacity not selected by default");
					}
				}
				String e = "(//div[@class='device-status'])[" + k + "]";
				WebElement stockmsg = driver.findElement(By.xpath(e));
				log.debug(stockmsg.getText());
				if (stockmsg.getText().contains(stockmessage)) {
					log.debug("Expected stockmsg displayed :" + stockmsg.getText());
				} else {
					Assert.fail("Expected stockmsg not displayed by default");
				}

				String f = "//div[@data-qa-device-model-family='comingSoon']//div/form/button[@id='callToAction']";
				List<WebElement> BuyNowButtonList = driver.findElements(By.xpath(f));
				if (BuyNowButtonList.size() > 0) {
					Assert.fail("Buy Now Button present for coming soon device");
				} else {
					log.debug("No buy now button for coming soon device as expected");
				}

				String g = "//div[@data-qa-device-model-family='comingSoon']//div/p/span[@class='headline ng-binding']";
				String h = "//div[@data-qa-device-model-family='comingSoon']//div/p/span[@class='pence ng-binding']";
				List<WebElement> PoundsElement = driver.findElements(By.xpath(g));
				List<WebElement> PenseElement = driver.findElements(By.xpath(h));
				log.debug("Pounds List size :" + PoundsElement.size());
				log.debug("Pense List size :" + PenseElement.size());
				if (PoundsElement.size() > 0 || PenseElement.size() > 0) {
					Assert.fail("Price details are being displayed for coming soon device");
				} else {
					log.debug("Price details are not displayed for coming soon device as expected");
				}

			}
		}
		Screenshots.captureScreenshot();
	}

	public static void selectNewDevice(String color, String capacity, String device) throws Exception {

		JavascriptExecutor js = (JavascriptExecutor) driver;
		int k = 0;
		List<WebElement> iPadDevicesName = pageobjects.BaseCommPage.iPadDevicesName;
		js.executeScript("window.scrollBy(0,400)", "");
		log.debug(color + capacity + device);

		for (int i = 0; i < iPadDevicesName.size(); i++) {
			log.debug(iPadDevicesName.get(i).getText());

			if (iPadDevicesName.get(i).getText().equals(device)) {

				k = i + 1;
				String c = "(//select[@id='colour'])[" + k + "]";

				WebElement colordropdown = driver.findElement(By.xpath(c));
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", colordropdown);
				new Select(colordropdown).selectByVisibleText(color);
				Thread.sleep(3000);
				String d = "(//select[@id='memory'])[" + k + "]";
				WebElement capacitydropdown = driver.findElement(By.xpath(d));
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", capacitydropdown);
				new Select(capacitydropdown).selectByVisibleText(capacity);

			}
		}
		Screenshots.captureScreenshot();
	}

	public static void BuynowwithDevice(String device) throws Exception {
		log.debug("Going to click on the buy now button on device");
		device = trimEnd(device);
		List<WebElement> TabletDevicesName = pageobjects.BaseCommPage.TabletDevicesName;
		WebElement BuyNowButton;
		JavascriptExecutor js = (JavascriptExecutor) driver;
		String c = null;
		int k = 0;
		List<String> Devices = new ArrayList<String>();
		for (WebElement f : TabletDevicesName) {
			Devices.add(f.getText());
		}
		log.debug("passing device" + device);

		for (int i = 0; i < TabletDevicesName.size(); i++) {
			if (TabletDevicesName.get(i).getText().equals(device)) {
				log.debug("Device name matches");
				k = i + 1;
				log.debug("k :" + k);
				c = "(//button[@id='callToAction'])[" + k + "]";
				log.debug("xpath of button is" + c);
				BuyNowButton = driver.findElement(By.xpath(c));
				// Thread.sleep(3000);
				js.executeScript("arguments[0].click();", BuyNowButton);
			}
		}
		Screenshots.captureScreenshot();
	}

	public static void isPayAsUGoTabDisplayed() throws IOException, InterruptedException {
		log.debug("checking whether Pay As U Go tab is displayed");
		List<WebElement> PayAsYouGo = driver.findElements(By.xpath("(//a[@href='?contractType=payasyougo'])"));
		if (PayAsYouGo.size() > 0) {
			Assert.fail("Pay As U Go tab is displayed");
		}
		Screenshots.captureScreenshot();
	}

	/*
	 * public static void checkImgSrcBasecommPage(String devicename, String
	 * capacity, String color) { System.out.
	 * println("checking whether new image is as per the selected color");
	 * JavascriptExecutor js = (JavascriptExecutor) driver; String color1 = null,
	 * color2 = null, colorname = null, capacity_color = null, capacityname = null;
	 * List<WebElement> images = pageobjects.BaseCommPage.ImgSrc; List<WebElement>
	 * iPadDevicesName = pageobjects.BaseCommPage.iPadDevicesName;
	 *
	 * WebElement colornameelement = null; WebElement element1 = null; WebElement
	 * element2 = null; WebElement capacitynameelement = null; String t = null, u =
	 * null; int k = 0, z = 0;
	 *
	 * for (int i = 0; i < iPadDevicesName.size(); i++) {
	 * log.debug(iPadDevicesName.get(i).getText()); if
	 * (iPadDevicesName.get(i).getText().equals(devicename)) {
	 * log.debug("device name matches for checking new image"); k = i + 1;
	 * String c = "(//select[@id='colour'])[" + k + "]";
	 *
	 * WebElement colordropdown = driver.findElement(By.xpath(c));
	 * js.executeScript("arguments[0].setAttribute('style', 'display:block;')",
	 * colordropdown); colornameelement = new
	 * Select(colordropdown).getFirstSelectedOption(); colorname =
	 * colornameelement.getText().toLowerCase(); color = color.toLowerCase(); if
	 * (!color.equalsIgnoreCase(colorname)) {
	 * Assert.fail("color displayed is not the selected color"); }
	 *
	 * String d = "(//select[@id='memory'])[" + k + "]"; WebElement capacitydropdown
	 * = driver.findElement(By.xpath(d));
	 * js.executeScript("arguments[0].setAttribute('style', 'display:block;')",
	 * capacitydropdown); capacitynameelement = new
	 * Select(capacitydropdown).getFirstSelectedOption(); capacityname =
	 * capacitynameelement.getText().toLowerCase(); capacity =
	 * capacity.toLowerCase(); log.debug("passing capacity : " + capacity);
	 * log.debug("selected capacity : " + capacityname);
	 *
	 * if (!capacity.equalsIgnoreCase(capacityname)) {
	 * Assert.fail("capacity displayed is not the selected capacity"); }
	 *
	 * if (colorname.contains(" ")) { String parts[] = colorname.split(" "); color1
	 * = parts[0] + "_" + parts[1]; color2 = parts[0] + "-" + parts[1];
	 * capacity_color = capacityname + "_" + color1; } else { capacity_color =
	 * capacityname + "_" + colorname; } log.debug("Capacity_color" +
	 * capacity_color);
	 *
	 * }
	 *
	 * }
	 *
	 * for (int i = 0; i < iPadDevicesName.size(); i++) {
	 * log.debug(iPadDevicesName.get(i).getText()); if
	 * (iPadDevicesName.get(i).getText().equals(devicename)) {
	 * log.debug("Device name matches"); if
	 * (images.get(i).getAttribute("src").contains(capacity_color)) {
	 * log.debug(images.get(z).getAttribute("src"));
	 * log.debug("Image is as per selected color and capacity"); } else {
	 * Assert.fail("New image is not as per selected color and capacity"); } } } }
	 */

	public static void checkImgSrcBasecommPage(String devicename, String capacity, String color)
			throws IOException, InterruptedException {
		log.debug("checking whether new image is as per the selected color");
		JavascriptExecutor js = (JavascriptExecutor) driver;
		String color1 = null, color2 = null, colorname = null, capacity_color = null, capacity_color1 = null,
				capacity_color2 = null, capacityname = null;
		List<WebElement> images = pageobjects.BaseCommPage.ImgSrc;
		List<WebElement> iPadDevicesName = pageobjects.BaseCommPage.iPadDevicesName;

		WebElement colornameelement = null;
		WebElement element1 = null;
		WebElement element2 = null;
		WebElement capacitynameelement = null;
		String t = null, u = null;
		int k = 0, z = 0;

		for (int i = 0; i < iPadDevicesName.size(); i++) {
			log.debug(iPadDevicesName.get(i).getText());
			if (iPadDevicesName.get(i).getText().equals(devicename)) {
				log.debug("device name matches for checking new image");
				k = i + 1;
				String c = "(//select[@id='colour'])[" + k + "]";

				WebElement colordropdown = driver.findElement(By.xpath(c));
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", colordropdown);
				colornameelement = new Select(colordropdown).getFirstSelectedOption();
				colorname = colornameelement.getText().toLowerCase();
				color = color.toLowerCase();
				if (!color.equalsIgnoreCase(colorname)) {
					Assert.fail("color displayed is not the selected color");
				}

				String d = "(//select[@id='memory'])[" + k + "]";
				WebElement capacitydropdown = driver.findElement(By.xpath(d));
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", capacitydropdown);
				capacitynameelement = new Select(capacitydropdown).getFirstSelectedOption();
				capacityname = capacitynameelement.getText().toLowerCase();
				capacity = capacity.toLowerCase();
				log.debug("passing capacity : " + capacity);
				log.debug("selected capacity : " + capacityname);

				if (!capacity.equalsIgnoreCase(capacityname)) {
					Assert.fail("capacity displayed is not the selected capacity");
				}

				if (colorname.contains(" ")) {
					String parts[] = colorname.split(" ");
					color1 = parts[0] + "_" + parts[1];
					color2 = parts[0] + "-" + parts[1];
					/*
					 * capacity_color1 = capacityname + "_" + color1; capacity_color2 = capacityname
					 * + "_" + color2;
					 */
				} else {
					capacity_color = capacityname + "_" + colorname;
				}
				/*
				 * log.debug("Capacity_color1" + capacity_color1);
				 * log.debug("Capacity_color2" + capacity_color2);
				 */
				log.debug("Capacity_color" + capacity_color);
				log.debug("color name " + colorname);

			}

		}

		for (int i = 0; i < iPadDevicesName.size(); i++) {
			log.debug(iPadDevicesName.get(i).getText());
			if (iPadDevicesName.get(i).getText().equals(devicename)) {
				log.debug("Device name matches");
				log.debug("image source is " + images.get(i).getAttribute("src"));

				if (!colorname.contains(" ")) {
					if (images.get(i).getAttribute("src").contains(capacity_color)
							|| images.get(i).getAttribute("src").contains(colorname)) {
						log.debug("image is as per the selected color/capacity");
					}
				}
				if (colorname.contains(" ")) {
					if (images.get(i).getAttribute("src").contains(color1)
							|| images.get(i).getAttribute("src").contains(color2)) {
						log.debug("image is as per the selected color/capacity");
					}
				}
			}
		}
		Screenshots.captureScreenshot();
	}

	public static void checkImgSrcTEPage(String devicename, String capacity, String color)
			throws IOException, InterruptedException {
		String color1 = null, color2 = null, colorname = null, capacity_color = null, capacity_color1 = null,
				capacity_color2 = null, capacityname = null;
		WebElement image = pageobjects.BaseCommPage.ImgSrcTEpages;
		WebElement colornameelement = null;
		WebElement element1 = null;
		WebElement element2 = null;
		WebElement capacitynameelement = null;

		element2 = pageobjects.ConnectedDeviceDetailsPage.CapacityDropDown;
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", element2);
		if (element2.isDisplayed()) {
			capacitynameelement = new Select(element2).getFirstSelectedOption();
		}

		capacityname = capacitynameelement.getText().toLowerCase();

		element1 = pageobjects.ConnectedDeviceDetailsPage.ColorDropDown;
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", element1);
		if (element1.isDisplayed()) {
			colornameelement = new Select(element1).getFirstSelectedOption();
		}

		colorname = colornameelement.getText().toLowerCase();

		if (colorname.contains(" ")) {
			String parts[] = colorname.split(" ");
			color1 = parts[0] + "_" + parts[1];
			color2 = parts[0] + "-" + parts[1];
			capacity_color1 = capacityname + "_" + color1;
			capacity_color2 = capacityname + "_" + color2;
		} else {
			capacity_color = capacityname + "_" + colorname;
		}
		log.debug("Capacity_color1" + capacity_color1);
		log.debug("Capacity_color2" + capacity_color2);
		log.debug("Capacity_color" + capacity_color);
		log.debug("color name " + colorname);

		if (image.getAttribute("title").equals(devicename)) {
			log.debug("device name matches to check for new image");
			log.debug("Device name matches");
			log.debug("image source is " + image.getAttribute("src"));

			if (!colorname.contains(" ")) {
				if (image.getAttribute("src").contains(capacity_color)
						|| image.getAttribute("src").contains(colorname)) {
					log.debug("image is as per the selected color/capacity");
				}
			}
			if (colorname.contains(" ")) {
				if (image.getAttribute("src").contains(capacity_color1)
						|| image.getAttribute("src").contains(capacity_color2)) {
					log.debug("image is as per the selected color/capacity");
				}
			}

		}
		Screenshots.captureScreenshot();

	}

	public static void checkRecommendedTariffIsAtFirstTile() throws IOException, InterruptedException {

		List<WebElement> tariffs = pageobjects.BaseCommPage.TariffTile;

		if (tariffs.size() != 0) {
			if (tariffs.get(0).getText().startsWith("Our recommended tariff")) {
				log.debug("'Our recommended tariff' is at the first tile");
			}
		} else {
			log.debug("Tariff Tile is not present");
		}
		Screenshots.captureScreenshot();
	}

	public static void checkContentsOfBaseCommPage() throws IOException, InterruptedException {
		List<WebElement> panellist = driver.findElements(By.xpath("//div[@id='panel']//div"));
		WebElement BannerDescription = driver.findElement(By.xpath("//div[@class='default-content-container']"));

		String text1 = "Save on your Airtime Plan";
		String text2 = "Already on O2 Pay Monthly? Then you'll be able to save 20% on your Airtime Plan for the whole of your contract. So you can chat, text and tweet, for less.";
		String text3 = "You can get this discount with any iPad you want, on 2GB and above tariffs. But you won't be able to use it with any other Airtime Plan discount. See terms.";
		String text4 = "Looking for an Android or Windows tablet? Take a look at our exclusive deals.";
		String text5 = "New to O2? See our iPad offers.";
		String BannerDescriptionText = null;

		BannerDescriptionText = text1 + '\n' + text2 + '\n' + text3 + '\n' + '\n' + text4 + '\n' + '\n' + text5;

		if (BannerDescription.isDisplayed() && BannerDescription.getText().contains(BannerDescriptionText)) {
			log.debug("Banner description text is verified");
		}

		List<String> strings = new ArrayList<String>();
		for (WebElement e : panellist) {
			if (!e.getText().equals("")) {
				strings.add(e.getText());
			}
		}
		int stringsize = strings.size();
		if (strings.size() != 0) {

			log.debug("First string is " + strings.get(0));
			log.debug("Second string is " + strings.get(1));
			log.debug("Last string is " + strings.get(stringsize - 1));

			if (strings.get(0).startsWith("Click & Collect")) {
				log.debug("static sub navigation is at the correct position");
			}
			if (strings.get(stringsize - 1).startsWith("Free delivery next working day")) {
				log.debug("Footer is at the correct position");
			}
			if (strings.get(1).startsWith("Tablet offers" + '\n' + "Especially for you")) {
				log.debug("Header carousel is at the correct position");
			}
		}
		Screenshots.captureScreenshot();
	}

	public static void checkUserNavigatedTEPage() throws IOException, InterruptedException {

		log.debug("Title of the page is  " + driver.getTitle());
		if (driver.getTitle().contains("Tariffs And Extras")) {
			log.debug("user is navigated back to Tariffs And Extras page");
		} else {
			Assert.fail("User is not at Tariffs And Extras page");
		}
		Screenshots.captureScreenshot();

	}

	public static void checkUserNavigatedBasecommPage() throws Exception {
		Thread.sleep(3000);
		log.debug("Title of the page is :" + driver.getTitle());
		if (driver.getTitle().contains("O2 | MyOffers")) {
			log.debug("user is navigated back to Basecomm Page");
		} else {
			Assert.fail("User is not at Basecomm page");
		}
		Screenshots.captureScreenshot();
	}

	public static void checkIfTabletDevicesArePresent() throws IOException, InterruptedException {

		List<WebElement> OtherTabletDevices = pageobjects.BaseCommPage.TabletDevicesName;

		for (int i = 0; i < OtherTabletDevices.size(); i++) {
			if (OtherTabletDevices.get(i).getText().contains("iPad")) {
				log.debug("Devices specific to iPad are also displayed");
			} else {
				int j = i + 1;
				log.debug(
						"Tile position (" + j + ")" + " and the device name is " + OtherTabletDevices.get(i).getText());
			}
		}
		Screenshots.captureScreenshot();
	}

}
