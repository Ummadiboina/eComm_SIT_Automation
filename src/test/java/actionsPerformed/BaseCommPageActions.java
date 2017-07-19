package actionsPerformed;

import java.net.MalformedURLException;
import java.net.URI;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import helpers.Environment;

public class BaseCommPageActions extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");
	static List<String> NormalCost = new ArrayList<>();
	static List<String> BasecommCost = new ArrayList<>();

	public static void SelectBaseCommTariff(String elementName) {

		if (elementName.contains("Random")) {
			System.out.println("Selected Random Tariff");
			pageobjects.BaseCommPage.RandomDevice.click();
			log.debug("Selected Random Device");
		}
	}

	public static void checkIfiPadDevicesArePresent() {

		List<WebElement> iPadDevices = pageobjects.BaseCommPage.iPadDevicesName;

		for (int i = 0; i < iPadDevices.size(); i++) {
			if (iPadDevices.get(i).getText().contains("iPad")) {
				int j = i + 1;
				System.out.println(
						"Tile position (" + j + ")" + " and the device name is " + iPadDevices.get(i).getText());
			} else {
				System.out.println("Devices other than iPad are also displayed");
			}
		}
	}

	public static void checkIfTabletDevicesArePresent() {

		List<WebElement> OtherTabletDevices = pageobjects.BaseCommPage.TabletDevicesName;

		for (int i = 0; i < OtherTabletDevices.size(); i++) {
			if (OtherTabletDevices.get(i).getText().contains("iPad")) {
				System.out.println("Devices specific to iPad are also displayed");
			} else {
				int j = i + 1;
				System.out.println(
						"Tile position (" + j + ")" + " and the device name is " + OtherTabletDevices.get(i).getText());
			}
		}
	}

	public static void clickOnOtherTablets() {
		log.debug("clicking on Other Tablets Tab");
		pageobjects.BaseCommPage.OtherTablets.click();
	}

	public static void clickOniPadTab() {
		log.debug("clicking on iPad Tab");
		pageobjects.BaseCommPage.iPad.click();
	}

	public static void isPayAsUGoTabDisplayed() {
		log.debug("checking whether Pay As U Go tab is displayed");
		System.out.println("checking whether Pay As U Go tab is displayed");
		List<WebElement> ContractLengthTabs = pageobjects.BaseCommPage.ContractLengthTabs;
		for (WebElement h : ContractLengthTabs) {
			if (h.getText().equals("Pay As You Go")) {
				Assert.fail("Pay As U Go tab is displayed");
			}
		}

		/*
		 * if (pageobjects.BaseCommPage.PayAsUGo.isDisplayed()) {
		 * Assert.fail("Pay As U Go tab is displayed"); }
		 */
	}

	public static void clickOnSortTab() {
		log.debug("clicking on Sort Tab");
		pageobjects.BaseCommPage.SortTab.click();
	}

	public static void selectSortOption(String Sort) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		log.debug("Selecting Sort option" + Sort);
		if (Sort.equals("MonthlyHighToLow")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.MonthlyHighToLow);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("MonthlyLowToHigh")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.MonthlyLowToHigh);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("UpfrontHighToLow")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.UpfrontHighToLow);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("UpfrontLowToHigh")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.UpfrontLowToHigh);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("ScreenSize")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.ScreenSize);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("Weight")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Weight);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("BatteryLife")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.BatteryLife);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("CameraResolution")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.CameraResolution);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("UserRatingHighToLow")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.UserRatingHighToLow);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("UserRatingLowToHigh")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.UserRatingLowToHigh);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);

		}
		if (Sort.equals("BrandAToZ")) {
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.BrandAToZ);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("BrandZToA")) {
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.BrandZToA);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);

		}

	}

	public static void clickOnResetSort() {
		log.debug("clicking on Reset Sort");
		pageobjects.SortingAndFilter.ResetSort.click();
	}

	public static void isChooseADifferentTariffDisplayed() {
		log.debug("checking if the Choose a Different Tariff link is displayed");
		if (pageobjects.BaseCommPage.ChooseADifferentTariff.isDisplayed()) {
			log.debug("Choose a different tariff link is displayed");
		} else
			Assert.fail("Choose a different tariff link is not displayed");
	}

	public static void clickChooseADifferentTariff() {
		log.debug("clicking on Choose a Different Tariff link");
		if (pageobjects.BaseCommPage.ChooseADifferentTariff.isDisplayed()) {
			pageobjects.BaseCommPage.ChooseADifferentTariff.click();
		} else
			Assert.fail("not able to click on 'choose different tariff link'");
	}

	public static void clickBackToiPadOffers() {
		log.debug("clicking on Back to iPad Offers link");
		if (pageobjects.BaseCommPage.BackToiPad.isDisplayed()) {
			pageobjects.BaseCommPage.BackToiPad.click();
		} else
			Assert.fail("not able to click on 'Back To iPad Offers' link");
	}

	public static void checkUserNavigatedTEPage() {

		if (driver.getTitle().contains("Tariffs And Extras")) {
			log.debug("user is navigated back to Tariffs And Extras page");
		} else
			Assert.fail("User is not at Tariffs And Extras page");

	}

	public static void checkUserNavigatedBasecommPage() {

		if (driver.getTitle().contains("O2 | MyOffers")) {
			log.debug("user is navigated back to Basecomm Page");
		} else
			Assert.fail("User is not at Basecomm page");

	}

	public static void checkImgSrcBasecommPage(String devicename) {
		log.debug("checking whether new image is as per the selected color");
		String color1 = null, color2 = null, colorname = null;
		List<WebElement> images = pageobjects.BaseCommPage.ImgSrc;
		WebElement colornameelement = null;
		WebElement element = null;

		element = pageobjects.ConnectedDeviceDetailsPage.ColorDropDown;
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", element);
		if (element.isDisplayed()) {
			colornameelement = new Select(element).getFirstSelectedOption();
		}

		colorname = colornameelement.getText().toLowerCase();

		if (colorname.contains(" ")) {
			String parts[] = colorname.split(" ");
			color1 = parts[0] + "_" + parts[1];
			color2 = parts[0] + "-" + parts[1];
		}

		for (int i = 0; i < images.size(); i++) {
			if (images.get(i).getAttribute("title").equals(devicename)) {
				if (images.get(i).getAttribute("src").contains(color1)
						|| images.get(i).getAttribute("src").contains(color2)
						|| images.get(i).getAttribute("src").contains(colorname)) {
					System.out.println("Image is as per selected color");
				}
			}
		}
	}

	public static void checkImgSrcTEPage(String devicename) {
		String color1 = null, color2 = null, colorname = null;
		WebElement image = pageobjects.BaseCommPage.ImgSrcTEpages;
		WebElement colornameelement = null;
		WebElement element = null;

		element = pageobjects.ConnectedDeviceDetailsPage.ColorDropDown;
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", element);
		if (element.isDisplayed()) {
			colornameelement = new Select(element).getFirstSelectedOption();
		}

		colorname = colornameelement.getText().toLowerCase();

		if (colorname.contains(" ")) {
			String parts[] = colorname.split(" ");
			color1 = parts[0] + "_" + parts[1];
			color2 = parts[0] + "-" + parts[1];
		}

		if (image.getAttribute("title").equals(devicename)) {
			if (image.getAttribute("src").contains(color1) || image.getAttribute("src").contains(color2)
					|| image.getAttribute("src").contains(colorname)) {
				System.out.println("Image is as per selected color");
			}
		}
	}

	public static void checkRecommendedTariffIsAtFirstTile() {

		List<WebElement> tariffs = pageobjects.BaseCommPage.TariffTile;

		if (tariffs.size() != 0) {
			if (tariffs.get(0).getText().startsWith("Our recommended tariff")) {
				log.debug("'Our recommended tariff' is at the first tile");
			}
		} else
			log.debug("Tariff Tile is not present");
	}

	public static void checkContentsOfBaseCommPage() {
		List<WebElement> panellist = pageobjects.BaseCommPage.PanelList;
		WebElement BannerDescription = pageobjects.BaseCommPage.BannerDescription;

		String text1 = "Save on your Airtime Plan";
		String text2 = "Already on O2 Pay Monthly? Then you’ll be able to save 20% on your Airtime Plan for the whole of your contract. So you can chat, text and tweet, for less.";
		String text3 = "You can get this discount with any iPad you want, on 2GB and above tariffs. But you won’t be able to use it with any other Airtime Plan discount. See terms.";
		String text4 = "Looking for an Android or Windows tablet? Take a look at our exclusive deals.";
		String text5 = "New to O2? See our iPad offers.";
		String BannerDescriptionText = null;

		BannerDescriptionText = text1 + '\n' + text2 + '\n' + text3 + '\n' + '\n' + text4 + '\n' + '\n' + text5;

		if (BannerDescription.isDisplayed() && BannerDescription.getText().contains(BannerDescriptionText)) {
			System.out.println("Banner description text is verified");
		}

		List<String> strings = new ArrayList<String>();
		for (WebElement e : panellist) {
			if (!e.getText().equals("")) {
				strings.add(e.getText());
			}
		}
		int stringsize = strings.size();
		if (strings.size() != 0) {

			if (strings.get(0).startsWith("Click & Collect")) {
				System.out.println("static sub navigation is at the correct position");
				log.debug("static sub navigation is at the correct position");
			}
			if (strings.get(stringsize - 1).startsWith("Free delivery working next working day")) {
				System.out.println("Footer is at the correct position");
				log.debug("Footer is at the correct position");
			}
			if (strings.get(1).startsWith("Tablet offers" + '\n' + "Especially for you")) {
				System.out.println("Header carousel is at the correct position");
				log.debug("Header carousel is at the correct position");
			}
		}
	}

	public static void checkExpDevAndDetails(String device, String color, String capacity, String stockmessage) {
		System.out.println("passing device" + device);
		int k = 0;

		List<WebElement> TabletDevicesName = pageobjects.BaseCommPage.TabletDevicesName;
		device = trimEnd(device);
		List<String> Devices = new ArrayList<String>();
		for (WebElement e : TabletDevicesName) {
			Devices.add(e.getText());
		}

		if (!Devices.contains(device)) {
			Assert.fail("Expected device is not present");
		} else {
			for (int i = 0; i < TabletDevicesName.size(); i++) {
				if (TabletDevicesName.get(i).getText().equals(device)) {
					k = i + 1;
					String c = "(//select[@class='ng-pristine ng-valid colour-select'])[" + k + "]";

					WebElement colordropdown = driver.findElement(By.xpath(c));
					JavascriptExecutor js = (JavascriptExecutor) driver;
					js.executeScript("arguments[0].setAttribute('style', 'display:block;')", colordropdown);
					if (colordropdown.isDisplayed()) {
						WebElement firstcolor = new Select(colordropdown).getFirstSelectedOption();
						if (color.equals(firstcolor.getText())) {
							System.out.println("Expected color selected :" + firstcolor.getText());
						} else {
							Assert.fail("Expected color does not match");
						}
					}

					String d = "(//select[@class='memory-select ng-pristine ng-valid'])[" + k + "]";

					WebElement capacitydropdown = driver.findElement(By.xpath(d));
					js.executeScript("arguments[0].setAttribute('style', 'display:block;')", capacitydropdown);
					if (capacitydropdown.isDisplayed()) {
						WebElement firstcapacity = new Select(capacitydropdown).getFirstSelectedOption();
						if (capacity.equals(firstcapacity.getText())) {
							System.out.println("Expected capacity selected :" + firstcapacity.getText());
						} else {
							Assert.fail("Expected capacity does not match");
						}
					}
					String e = "(//p[@class='delivery-information ng-scope'])[" + k + "]";
					WebElement stockmsg = driver.findElement(By.xpath(e));
					if (stockmsg.getText().contains(stockmessage)) {
						System.out.println("Expected stockmsg displayed :" + stockmsg.getText());
					}
					String f = "(//p[@class='costs ng-binding ng-scope'])[" + k + "]";
					WebElement price = driver.findElement(By.xpath(f));
					if (price.getText() != null) {
						System.out.println("Price -" + price.getText());
					} else {
						Assert.fail("No price details available");
					}
				}
			}
		}
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

	public static void checkSeeDeviceDetailsPopUp(String device) throws InterruptedException {
		device = trimEnd(device);

		List<WebElement> TabletDevicesName = pageobjects.BaseCommPage.TabletDevicesName;

		WebElement SeeDeviceDetailsLink;
		WebElement PoundsElement;
		WebElement PenseElement;
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
			System.out.println(Devices.get(y));
		}
		System.out.println("passing device" + device);

		if (!Devices.contains(device)) {
			Assert.fail("Expected device is not present");
		} else {

			for (int i = 0; i < TabletDevicesName.size(); i++) {
				if (TabletDevicesName.get(i).getText().equals(device)) {
					System.out.println("Device name matches");
					k = i + 1;
					c = "(//a[contains(text(),'See device details')])[" + k + "]";
					d = "(//span[@class='headline ng-binding'])[" + k + "]";
					e = "(//span[@class='pence ng-binding'])[" + k + "]";
					PoundsElement = driver.findElement(By.xpath(d));
					PenseElement = driver.findElement(By.xpath(e));

					SeeDeviceDetailsLink = driver.findElement(By.xpath(c));
					if (SeeDeviceDetailsLink.isDisplayed()) {
						js.executeScript("arguments[0].click();", SeeDeviceDetailsLink);
						System.out.println("Clicked on See Device Details Link");
						log.debug("Clicked on See Device Details Link");
					} else {
						Assert.fail("Device Details link not present");
					}
					Thread.sleep(5000);

					for (String winHandle : driver.getWindowHandles()) {
						driver.switchTo().window(winHandle);
						log.debug("Control is in pop up");
						System.out.println("Control is in pop up");
					}

					WebElement PopupdevicenametextElement = pageobjects.BaseCommPage.PopupdevicenametextElement;
					if (PopupdevicenametextElement.isDisplayed()) {
						popupdevicenametext = PopupdevicenametextElement.getText();
						if (popupdevicenametext.equals(device)) {
							log.debug("Device name in pop up is " + popupdevicenametext
									+ "and matches the device selected");
							System.out.println("Device name in pop up is " + popupdevicenametext
									+ "and matches the device selected");
						}
					} else {
						Assert.fail("Device name in pop up is not present");
					}

					if (PoundsElement.isDisplayed()) {
						poundselementtext = PoundsElement.getText();
						if (poundselementtext.equals(PoundsElement.getText())) {
							log.debug(
									"Pounds in pop up - " + poundselementtext + ", pounds value displayed for device - "
											+ PoundsElement.getText() + "and they are the same");
							System.out.println(
									"Pounds in pop up - " + poundselementtext + ", pounds value displayed for device - "
											+ PoundsElement.getText() + "and they are the same");
						}
					}

					if (PenseElement.isDisplayed()) {
						penseelementtext = PenseElement.getText();
						if (penseelementtext.equals(PenseElement.getText())) {
							log.debug("Pense in pop up - " + penseelementtext + ", pense value displayed for device - "
									+ PenseElement.getText() + "and they are the same");
							System.out.println(
									"Pense in pop up - " + penseelementtext + ", pense value displayed for device - "
											+ PenseElement.getText() + "and they are the same");
						}
					}
					WebElement SpecificationsElement = pageobjects.BaseCommPage.SpecificationsElement;
					if (!SpecificationsElement.isDisplayed()) {
						System.out.println("specifications not displayed");
					} else
						System.out.println("specifications displayed");

					WebElement FullSpecificationElement = pageobjects.BaseCommPage.FullSpecificationElement;
					if (FullSpecificationElement.isDisplayed()) {
						FullSpecificationElement.click();
						System.out.println("Full specification link is present");
					}
					if (pageobjects.BaseCommPage.BoxClose.isDisplayed()) {
						pageobjects.BaseCommPage.BoxClose.click();
					} else {
						Assert.fail("Not able to close the pop up");
					}
				}

			}
		}
	}

	public static void CompareURL(String NewURL) throws MalformedURLException {
		System.out.println("Comparing URL");
		// URL is reference , some instance which needs to be initialsed for

		String URL = driver.getCurrentUrl();
		System.out.println("URL is " + URL);
		String FeatureURL = NewURL;
		System.out.println("Feature url to compare is " + FeatureURL);
		Assert.assertEquals(FeatureURL, URL);
	}

	public static void VerifyIpadURL() throws MalformedURLException {
		System.out.println("Going to Verify content inside URL");
		String currenturl = driver.getCurrentUrl();
		final URI uri = URI.create(currenturl);
		String queryString = uri.getQuery();
		// String subString = queryString.substring(queryString.);
		String subString = queryString.substring(queryString.lastIndexOf('-') + 1);
		System.out.println("EXTRACTED " + subString);
		Assert.assertEquals("ipad", subString);
	}

	public static void VerifyTabletURL() throws MalformedURLException {
		System.out.println("Going to Verify content inside URL");
		String currenturl = driver.getCurrentUrl();
		final URI uri = URI.create(currenturl);
		String queryString = uri.getQuery();
		// String subString = queryString.substring(queryString.);
		String subString = queryString.substring(queryString.lastIndexOf('-') + 1);
		System.out.println("EXTRACTED " + subString);
		Assert.assertEquals("tablet", subString);
	}

	public static void BuynowwithDevice(String elementName) throws MalformedURLException {
		System.out.println("Going to click on the buy now button on device");
		if (elementName.contains("Apple iPad mini 3")) {
			System.out.println("Going to select Ipad mini 3 device");

			pageobjects.BaseCommPage.IpadMini3Buynow.click();

			System.out.println("Selected iPad mini 3 device");

			log.debug("Selected iPad mini 3 device");

		}
		if (elementName.contains("Apple iPad mini 2")) {
			System.out.println("Going to select iPad mini 2 device");

			pageobjects.BaseCommPage.IpadMini2Buynow.click();

			System.out.println("Selected iPad mini 2 device");

			log.debug("Selected iPad mini 2 device");

		}
		if (elementName.contains("iPad Air")) {
			System.out.println("Going to select iPad Air device");

			pageobjects.BaseCommPage.IpadAirBuynow.click();

			System.out.println("Selected iPad Air device");

			log.debug("Selected iPad Air device");
		}
		if (elementName.contains("Galaxy Tab Active")) {
			System.out.println("Going to select Galaxy Tab device");

			pageobjects.BaseCommPage.GalaxyTabActiveBuynow.click();

			System.out.println("Selected Galaxy Tab device");

			log.debug("Selected Galaxy Tab device");
		}
		if (elementName.contains("Xperia Z2 Tablet")) {
			System.out.println("Going to select XperiaZ2Tablet device");

			pageobjects.BaseCommPage.XperiaZ2TabletBuynow.click();

			System.out.println("Selected XperiaZ2Tablet device");

			log.debug("Selected XperiaZ2Tablet device");
		}
	}

	public static void VerifyPage() throws MalformedURLException {
		System.out.println("Going to verify page");
		String title = pageobjects.BaseCommPage.headerofTariffandExtrasPage.getText();
		// String title=driver.findElement(By.id("header-primary")).getText();
		Assert.assertEquals(title, "Tariff and extras");

	}

	public static void VerifyRibbon() {
		// TODO Auto-generated method stub
		System.out.println("Going to Verify promotion ribbon");

		boolean str1 = pageobjects.BaseCommPage.DeviceRibbon != null;
		Assert.assertTrue(str1);
		String str2 = pageobjects.BaseCommPage.DeviceRibbon.getText();
		System.out.println("the promotion text is " + str2);
		System.out.println("Verified promotion ribbon");

	}

	public static void VerifyPriceChangeuponCapacity() {
		// TODO Auto-generated method stub
		System.out.println("Going to Verify promotion ribbon");
		// WebElement capacity =
		// driver.findElement(By.xpath("//*[@data-qa-device-model-family='iPad
		// mini 3']/div[1]/div[2]/div[1]/div[2]/div[2]/select[@id='memory']"));
		WebElement capacity = pageobjects.BaseCommPage.CapacityipadAir2;

		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", capacity);
		if (capacity.isDisplayed()) {
			List<WebElement> elementCount = new Select(capacity).getOptions();
			// System.out.println("elementCount"+elementCount);
			if (elementCount.size() <= 1) {
				Assert.fail("There are no more than 1 option available for capacity dropdown");
			}
		}
		new Select(capacity).selectByVisibleText("128GB");
		String price1 = pageobjects.BaseCommPage.PriceiPadAir2.getText();
		System.out.println(price1);
		System.out.println("Now the second line is ..... ");
		new Select(capacity).selectByVisibleText("16GB");
		String price2 = pageobjects.BaseCommPage.PriceiPadAir2.getText();
		System.out.println(price2);
		Assert.assertNotSame(price2, price1);

	}

	public static void verifyTariffType(String flow) {
		JavascriptExecutor js = (JavascriptExecutor) driver;

		WebElement PayInFull = pageobjects.PAYMandPAYGTariffAndExtrasPage.paydevicefulllink;

		List<String> NormalUpfrontCost = new ArrayList<>();
		List<String> NormalMonthlyCost = new ArrayList<>();

		List<String> BasecommUpfrontCost = new ArrayList<>();
		List<String> BasecommMonthlyCost = new ArrayList<>();

		if (flow.equals("Normal")) {
			List<WebElement> UpfrontCostElement = pageobjects.PAYMandPAYGTariffAndExtrasPage.UpfrontCost;
			List<WebElement> MonthlyCostElement = pageobjects.PAYMandPAYGTariffAndExtrasPage.MonthlyCost;
			int k = 0;

			if (PayInFull.isDisplayed()) {
				js.executeScript("arguments[0].click();", PayInFull);
			} else {
				System.out.println("No PayInFull");
			}

			if (UpfrontCostElement.size() != 0) {
				for (int i = 0; i < UpfrontCostElement.size(); i++) {
					k = i + 1;
					NormalUpfrontCost.add(UpfrontCostElement.get(i).getText());
					System.out.println(
							"Upfront cost of position :" + k + " in tariffs is" + UpfrontCostElement.get(i).getText());
				}
			}

			if (MonthlyCostElement.size() != 0) {
				for (int i = 0; i < MonthlyCostElement.size(); i++) {
					k = i + 1;
					NormalMonthlyCost.add(MonthlyCostElement.get(i).getText());
					System.out.println(
							"Monthly cost of position :" + k + " in tariffs is" + MonthlyCostElement.get(i).getText());
				}
			}
			for (int i = 0; i < NormalUpfrontCost.size(); i++) {
				NormalCost.add(NormalUpfrontCost.get(i).concat(NormalMonthlyCost.get(i)));
				System.out.println("Normal cost " + NormalCost.get(i));
			}

		}

		if (flow.equals("Basecomm")) {
			WebElement ViewAllTariffs = driver.findElement(By.xpath("//div[@class='viewAllTariffs']"));
			List<WebElement> UpfrontCostElement = pageobjects.PAYMandPAYGTariffAndExtrasPage.UpfrontCost;
			List<WebElement> MonthlyCostElement = pageobjects.PAYMandPAYGTariffAndExtrasPage.MonthlyCost;
			int k = 0;

			if (ViewAllTariffs.isDisplayed()) {
				js.executeScript("arguments[0].click();", ViewAllTariffs);
			} else {
				System.out.println("No ViewAllTariffs");
			}
			if (PayInFull.isDisplayed()) {
				js.executeScript("arguments[0].click();", PayInFull);
			} else {
				System.out.println("No PayInFull");
			}

			if (UpfrontCostElement.size() != 0) {
				for (int i = 0; i < UpfrontCostElement.size(); i++) {
					k = i + 1;
					BasecommUpfrontCost.add(UpfrontCostElement.get(i).getText());
					System.out.println(
							"Upfront cost of position :" + k + " in tariffs is" + UpfrontCostElement.get(i).getText());
				}
			}

			if (MonthlyCostElement.size() != 0) {
				for (int i = 0; i < MonthlyCostElement.size(); i++) {
					k = i + 1;
					BasecommMonthlyCost.add(MonthlyCostElement.get(i).getText());
					System.out.println(
							"Monthly cost of position :" + k + " in tariffs is" + MonthlyCostElement.get(i).getText());
				}
			}
			for (int i = 0; i < BasecommUpfrontCost.size(); i++) {
				BasecommCost.add(BasecommUpfrontCost.get(i).concat(BasecommMonthlyCost.get(i)));
				System.out.println("Basecomm cost " + BasecommCost.get(i));
			}

		}
		if (flow.equals("Check")) {
			System.out.println("Size  " + NormalCost.size() + '\n' + BasecommCost.size());
			if (NormalCost.size() != 0 && BasecommCost.size() != 0) {

				for (int z = 0; z < BasecommCost.size(); z++) {
					if (NormalCost.contains(BasecommCost.get(z))) {
						System.out.println("Failed - Basecomm tariffs are present in normal flow");
					} else {
						System.out.println("Basecomm tariffs are not present in normal tariffs section as expected");
					}
				}
			}
		}
	}

	public static void verifyTariffTypeMBB(String device, String flow) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		List<String> NormalUpfrontCost = new ArrayList<>();
		List<String> NormalMonthlyCost = new ArrayList<>();

		if (flow.equals("Normal")) {

			List<WebElement> UpfrontCostElement = pageobjects.PAYMandPAYGTariffAndExtrasPage.UpfrontCost;
			List<WebElement> MonthlyCostElement = pageobjects.PAYMandPAYGTariffAndExtrasPage.MonthlyCost;
			int k = 0;
			WebElement PayInFull = pageobjects.PAYMandPAYGTariffAndExtrasPage.paydevicefulllink;
			if (PayInFull.isDisplayed()) {
				js.executeScript("arguments[0].click();", PayInFull);
			} else {
				System.out.println("No PayInFull");
			}
			if (UpfrontCostElement.size() != 0) {
				for (int i = 0; i < UpfrontCostElement.size(); i++) {
					k = i + 1;
					NormalUpfrontCost.add(UpfrontCostElement.get(i).getText());
					System.out.println(
							"Upfront cost of position :" + k + " in tariffs is" + UpfrontCostElement.get(i).getText());
				}
			}

			if (MonthlyCostElement.size() != 0) {
				for (int i = 0; i < MonthlyCostElement.size(); i++) {
					k = i + 1;
					NormalMonthlyCost.add(MonthlyCostElement.get(i).getText());
					System.out.println(
							"Monthly cost of position :" + k + " in tariffs is" + MonthlyCostElement.get(i).getText());
				}
			}
			for (int i = 0; i < NormalUpfrontCost.size(); i++) {
				NormalCost.add(NormalUpfrontCost.get(i).concat(NormalMonthlyCost.get(i)));
				System.out.println("Normal cost " + NormalCost.get(i));
			}

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
		}
		if (flow.equals("Check")) {
			System.out.println("Size  " + NormalCost.size() + '\n' + BasecommCost.size());
			if (NormalCost.size() != 0 && BasecommCost.size() != 0) {

				for (int z = 0; z < BasecommCost.size(); z++) {
					if (NormalCost.contains(BasecommCost.get(z))) {
						System.out.println("Failed - Basecomm tariffs are present in normal flow");
					} else {
						System.out.println("Basecomm tariffs are not present in normal tariffs section as expected");
					}
				}
			}
		}
	}
}