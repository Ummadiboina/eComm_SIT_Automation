package actionsPerformed;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import GlobalActions.scrollToAnElement;
import helpers.Environment;

import GlobalActions.scrollToAnElement;
import helpers.Environment;

@SuppressWarnings("unused")
public class PhonesListingPageAction extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");

	public static void PAYMPhoneSelect(String elementName) throws Throwable {
		// pageobjects.PhonesListingPage.ViewAllPhones.sendKeys(Key.ENTER);
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", pageobjects.PhonesListingPage.ViewAllPhones);

		if (elementName.contains("GalaxyS7")) {
			pageobjects.PhonesListingPage.GalaxyS7.click();
			System.out.println("Selected GalaxyS7");
			log.debug("Selected GalaxyS7");
		}
		if (elementName.contains("BlackBerry Classic")) {
			pageobjects.PhonesListingPage.BlackberryClassic.click();
			System.out.println("Blackberry Classic");
			log.debug("Blackberry Classic");

		}

		if (elementName.contains("AquarisM45")) {
			pageobjects.PhonesListingPage.AquarisM45.click();
			System.out.println("Selected AquarisM45");
			log.debug("Selected AquarisM45");
		}
		if (elementName.contains("GalaxyS8")) {
			pageobjects.PhonesListingPage.GalaxyS8.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Selected GalaxyS8");

		}

		if (elementName.contains("GalaxyS8Plus")) {
			pageobjects.PhonesListingPage.GalaxyS8Plus.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Selected GalaxyS8Plus");

		}
		if (elementName.contains("Iphone5S")) {
			pageobjects.PhonesListingPage.Iphone5S.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Selected Iphone7");

		}

		if (elementName.contains("Iphone7")) {
			pageobjects.PhonesListingPage.Iphone7.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Selected Iphone7");

		}

		if (elementName.contains("Iphone7Plus")) {
			pageobjects.PhonesListingPage.Iphone7Plus.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Selected Iphone7Plus");

		}

		if (elementName.contains("IphoneSE")) {
			pageobjects.PhonesListingPage.IphoneSE.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Selected IphoneSE");

		}

		if (elementName.contains("HuaweiP10")) {
			pageobjects.PhonesListingPage.HuaweiP10.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Selected HuaweiP10");

		}

		if (elementName.contains("GalaxyS7Edge")) {
			pageobjects.PhonesListingPage.GalaxyS7Edge.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Selected GalaxyS7Edge");
		}

		if (elementName.contains("Oneplus3T")) {
			pageobjects.PhonesListingPage.Oneplus3T.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Selected Oneplus3T");

		}

	}

	// Below is for PAYG phones
	public static void PAYGPhoneSelect(String elementName) {

		if (elementName.contains("Random Device")) {
			System.out.println("Selected Random Device");

			pageobjects.PhonesListingPage.RandomDevice.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Selected Random Device");

		}

		if (elementName.contains("MotoG5")) {
			System.out.println("Selected MotoG5");

			pageobjects.PhonesListingPage.MotoG5.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Selected MotoG5");

		}

	}

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

	
	public static void isPayAsUGoTabDisplayed() {
		log.debug("checking whether Pay As U Go tab is displayed");
		if (pageobjects.BaseCommPage.PayAsUGo.isDisplayed()) {
			Assert.fail("Pay As U Go tab is displayed");
		}
	}

	public static void clickOnSortTab() {
		try {
			log.debug("Entering clickOnSortTab function");

			JavascriptExecutor js = (JavascriptExecutor) driver;
			js.executeScript("arguments[0].click();", pageobjects.BaseCommPage.SortTab);

			Thread.sleep(3000);

			System.out.println("Clicked on the Sort Tab successfully");
		} catch (Exception e) {
			System.out.println("Failed: Cannot click on the Sort tab" + e.getMessage());
		}
	}

	public static void selectSortOption(String Sort) throws InterruptedException {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		System.out.println("Selecting Sort option : " + Sort);
		if (Sort.equals("MonthlyHighToLow")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.MonthlyHighToLow);
			Thread.sleep(2000);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);

		}
		if (Sort.equals("MonthlyLowToHigh")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.MonthlyLowToHigh);
			Thread.sleep(2000);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			Thread.sleep(1000);
		}
		if (Sort.equals("UpfrontHighToLow")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.UpfrontHighToLow);
			Thread.sleep(2000);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("UpfrontLowToHigh")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.UpfrontLowToHigh);
			Thread.sleep(2000);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("ScreenSize")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.ScreenSize);
			Thread.sleep(2000);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("Weight")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Weight);
			Thread.sleep(2000);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("BatteryLife")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.BatteryLife);
			Thread.sleep(2000);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("CameraResolution")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.CameraResolution);
			Thread.sleep(2000);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("UserRatingHighToLow")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.UserRatingHighToLow);
			Thread.sleep(2000);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("UserRatingLowToHigh")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.UserRatingLowToHigh);
			Thread.sleep(2000);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);

		}
		if (Sort.equals("BrandAToZ")) {
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.BrandAToZ);
			Thread.sleep(2000);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("BrandZToA")) {
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.BrandZToA);
			Thread.sleep(2000);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);

		}

	}

	public static void clickOnResetSort() {
		log.debug("Entering clickOnResetSort function");
		System.out.println("Entering clickOnResetSort function");

		try {

			JavascriptExecutor js = (JavascriptExecutor) driver;
			log.debug("clicking on Reset Sort");
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.ResetSort);
			// pageobjects.SortingAndFilter.ResetSort.click();
			Thread.sleep(5000);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
			Thread.sleep(5000);
			System.out.println("Clicked on the Reset Sort Option successfully");
		} catch (Exception e) {
			System.out.println("Failed: Cannot click on the Reset Sort Option" + e.getMessage());
		}
	}

	public static void verifyDeviceGetsDisplayedBasedOnBrandFilterApplied(String FilterOption) {
		try {
			log.debug("Entering verifyDeviceGetsDisplayedBasedOnBrandFilterApplied function");
			System.out.println("Entering verifyDeviceGetsDisplayedBasedOnBrandFilterApplied function");

			LinkedList<String> ListAfterFilter = getCurrentSortOrderUsingDeviceName();
			System.out.println(ListAfterFilter);

			for (int i = 0; i < ListAfterFilter.size(); i++) {

				Assert.assertTrue("Assertion Failed: Devices displayed are not as per the filter applied",
						ListAfterFilter.get(i).contains(FilterOption));

			}

			System.out.println("Assert Success:  Devices displayed are as per the Brand filter applied");

		} catch (Exception e) {
			System.out.println(
					"Assertion Failed: Devices displayed are not as per the Brand filter applied" + e.getMessage());
		}
	}

	public static void verifyDeviceGetsDisplayedBasedOnColourFilterApplied(String FilterOption) {
		try {
			log.debug("Entering verifyDeviceGetsDisplayedBasedOnColourFilterApplied function");
			System.out.println("Entering verifyDeviceGetsDisplayedBasedOnColourFilterApplied function");

			LinkedList<String> ListAfterFilter = getCurrentSortOrderUsingDeviceColour();
			System.out.println(ListAfterFilter);

			for (int i = 0; i < ListAfterFilter.size(); i++) {

				Assert.assertTrue("Assertion Failed: Devices displayed are not as per the filter applied",
						ListAfterFilter.get(i).contains(FilterOption));

			}

			System.out.println("Assert Success:  Devices displayed are as per the Brand filter applied");

		} catch (Exception e) {
			System.out.println(
					"Assertion Failed: Devices displayed are not as per the Brand filter applied" + e.getMessage());
		}
	}

	public static void clickOnFilterTab() {
		try {
			log.debug("Entering clickOnFilterTab function");

			JavascriptExecutor js = (JavascriptExecutor) driver;
			js.executeScript("arguments[0].click();", pageobjects.BaseCommPage.FilterTab);
			Thread.sleep(2000);

			System.out.println("Clicked on the FilterTab successfully");
		} catch (Exception e) {
			System.out.println("Failed: Cannot click on the FilterTab: " + e.getMessage());
		}
	}

	public static void selectFilterOption(String Filter, String Option) {
		try {
			log.debug("Entering selectFilterOption function");
			System.out.println("Selecting Filter option: " + Filter + " :With: " + Option);

			JavascriptExecutor js = (JavascriptExecutor) driver;

			if (Filter.equals("Brand")) {

				js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand);
				Thread.sleep(2000);

				if (Option.equals("Alcatel")) {

					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand_Alcatel);
					// pageobjects.SortingAndFilter.Brand_Alcatel.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);

				}
				if (Option.equals("Apple")) {

					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand_Apple);
					// pageobjects.SortingAndFilter.Brand_Apple.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);

				}
				if (Option.equals("Doro")) {

					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand_Doro);
					// pageobjects.SortingAndFilter.Brand_Doro.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);

				}
				if (Option.equals("HTC")) {

					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand_HTC);
					// pageobjects.SortingAndFilter.Brand_HTC.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);

				}
				if (Option.equals("Huawei")) {

					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand_Huawei);
					// pageobjects.SortingAndFilter.Brand_Huawei.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);

				}
				if (Option.equals("LG")) {

					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand_LG);
					// pageobjects.SortingAndFilter.Brand_LG.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);

				}
				if (Option.equals("Moto")) {

					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand_Moto);
					// pageobjects.SortingAndFilter.Brand_Moto.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);

				}
				if (Option.equals("OnePlus")) {

					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand_OnePlus);
					// pageobjects.SortingAndFilter.Brand_OnePlus.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);

				}
				if (Option.equals("Samsung")) {

					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand_Samsung);
					// pageobjects.SortingAndFilter.Brand_Samsung.click();
					Thread.sleep(2000);
					js.executeScript("arg" + "uments[0].click();", pageobjects.SortingAndFilter.Brand);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
				}
				if (Option.equals("Sony")) {

					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand_Sony);
					// pageobjects.SortingAndFilter.Brand_Sony.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
				}
			} else if (Filter.equals("Colour")) {

				js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour);
				Thread.sleep(1000);

				if (Option.equals("Black")) {

					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour_Black);
					// pageobjects.SortingAndFilter.Colour_Black.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
				}

				if (Option.equals("Grey")) {

					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour_Grey);
					// pageobjects.SortingAndFilter.Colour_Grey.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
				}

				if (Option.equals("Yellow")) {

					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour_Yellow);
					// pageobjects.SortingAndFilter.Colour_Yellow.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
				}

				if (Option.equals("Blue")) {

					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour_Blue);
					// pageobjects.SortingAndFilter.Colour_Blue.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
				}

				if (Option.equals("White")) {

					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour_White);
					// pageobjects.SortingAndFilter.Colour_White.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);

				}

				if (Option.equals("Green")) {

					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour_Green);
					// pageobjects.SortingAndFilter.Colour_Green.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);

				}

				if (Option.equals("Red")) {

					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour_Red);
					// pageobjects.SortingAndFilter.Colour_Red.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);

				}
			}
		}

		catch (

		Exception e) {
			System.out.println("Failed: Cannot select a filter option : " + e.getMessage());
		}

	}

	public static void clickOnViewAllProductsOnOnePage() {
		try {
			log.debug("Entering clickOnViewAllProductsOnOnePage function");
			System.out.println("Entering clickOnViewAllProductsOnOnePage function");
			if (driver.findElement(By.xpath("//*[@id='o2-page-wrapper']/div[3]/div[4]/a")).isDisplayed()) {
				WebElement viewAllProductsOnOnePage_link = driver
						.findElement(By.xpath("//*[@id='o2-page-wrapper']/div[3]/div[4]/a"));
				scrollToAnElement.scrollToElement(viewAllProductsOnOnePage_link);
				viewAllProductsOnOnePage_link.click();
				System.out.println("Clicked on the ViewAllProductsOnOnePagesuccessfully");
			} else {
				System.out.println("ViewAllProductsOnOnePage link is not visible in the page");
				log.debug("ViewAllProductsOnOnePage link is not visible in the page");
			}
		} catch (Exception e) {
			System.out.println("Failed: Cannot click on the Sort tab" + e.getMessage());
		}
	}

	public static LinkedList<String> getCurrentSortOrderUsingDeviceName() throws InterruptedException {

		log.debug("Opening function getCurrentSortOrderUsingDeviceName");

		Thread.sleep(10000);

		// boolean NextBtndVisible;
		// NextBtndVisible = true;
		LinkedList<String> deviceCurrentOrder = new LinkedList<>();
		// WebElement NextBtn =
		// driver.findElement(By.xpath("//*[@id='o2-page-wrapper']/div[3]/div[4]/div/p[3]/a"));

		// while (NextBtndVisible != false) {

		// *****************This xpath is for AWS
		// environment*******************//

		List<WebElement> deviceName = driver.findElement(By.xpath("//*[@id='o2-page-wrapper']/div[4]/div[5]/div"))
				.findElements(By.xpath(
						"//div[@class='device-tile my-offer ng-scope tile-one-by-two']/div/p[@class='details']"));

		// ********************This xpath is for Production
		// Environment********************************//

		/*
		 * List<WebElement> deviceName = driver.findElement(By.xpath(
		 * "//*[@id='o2-page-wrapper']/div[3]/div[3]")) .findElements(By.xpath(
		 * "//div[@class='device-tile__top']/p[@class='details']"));
		 */

		for (WebElement temp : deviceName) {

			String sTemp = temp.getText();
			deviceCurrentOrder.add(sTemp);
		}

		/*
		 * if (NextBtn.isDisplayed()) {
		 * scrollToAnElement.scrollToElement(NextBtn); NextBtn.click();
		 * Thread.sleep(5000);
		 * 
		 * } else { NextBtndVisible = false; break; }
		 * 
		 * }
		 */

		return deviceCurrentOrder;

	}

	public static LinkedList<String> getCurrentSortOrderUsingDevicePrice() throws InterruptedException {

		log.debug("Opening function getCurrentSortOrderUsingDevicePrice");
		System.out.println("Opening function getCurrentSortOrderUsingDevicePrice");

		Thread.sleep(10000);

		LinkedList<String> deviceCurrentOrder = new LinkedList<>();
		// LinkedList<String> devicenamecurrentorder = new LinkedList<>();
		LinkedList<String> devicepricecurrentorder = new LinkedList<>();

		// *********************************This xpath is for Production
		// Environment************************************//
		/*
		 * List<WebElement> deviceName = driver.findElement(By.xpath(
		 * "//*[@id='o2-page-wrapper']/div[3]/div[3]")) .findElements(By.xpath(
		 * "//div[@class='device-tile__top']/p[@class='details']"));
		 * 
		 * 
		 * List<WebElement> devicePrice = driver.findElement(By.xpath(
		 * "//*[@id='o2-page-wrapper']/div[3]/div[3]")) .findElements(By.xpath(
		 * "//div[@class='device-tile__bottom ng-scope']/p[@class='costs ng-binding ng-scope']/span[@class='headline ng-binding']"
		 * ));
		 * 
		 * /* for (WebElement temp1 : deviceName) {
		 * 
		 * String sTemp = temp1.getText(); devicenamecurrentorder.add(sTemp); }
		 */

		// *********************************This xpath is for Production
		// Environment************************************//

		List<WebElement> devicePrice = driver.findElement(By.xpath("//*[@id='o2-page-wrapper']/div[4]/div[5]/div"))
				.findElements(By.xpath(
						"//div[@class='device-tile__bottom ng-scope']/p[@class='costs ng-binding ng-scope']/span[@class='headline ng-binding']"));

		for (WebElement temp2 : devicePrice) {

			String sTemp = StringUtils.substringBetween(temp2.getText(), "£", ".00");
			devicepricecurrentorder.add(sTemp);

		}
		// System.out.println("Device Name List: " + devicenamecurrentorder);
		System.out.println("Device Price List: " + devicepricecurrentorder);

		// *********************************This xpath is for AWS
		// Environment************************************//

		/*
		 * List<WebElement> deviceName = driver.findElement(By.xpath(
		 * "//*[@id='o2-page-wrapper']/div[4]/div[5]/div"))
		 * .findElements(By.xpath(
		 * "//div[@class='device-tile my-offer ng-scope tile-one-by-two']/div/p[@class='details']"
		 * ));
		 */
		/*
		 * List<WebElement> devicePrice = driver.findElement(By.xpath(
		 * "//*[@id='o2-page-wrapper']/div[4]/div[5]/div"))
		 * .findElements(By.xpath(
		 * "//div[@class='device-tile__bottom ng-scope']/p[@class='costsng-binding ng-scope']/span[@class='headline ng-binding']"
		 * ));
		 */

		for (int i = 0; i < devicepricecurrentorder.size(); i++) {
			deviceCurrentOrder.add(devicepricecurrentorder.get(i));
		}

		return deviceCurrentOrder;

	}

	public static LinkedList<String> getCurrentSortOrderUsingDeviceColour() throws InterruptedException {

		log.debug("Opening function getCurrentSortOrderUsingDeviceColour");
		System.out.println("Opening function getCurrentSortOrderUsingDeviceColour");

		Thread.sleep(10000);

		LinkedList<String> deviceCurrentOrder = new LinkedList<>();
		LinkedList<String> devicenamecurrentorder = new LinkedList<>();
		LinkedList<String> devicecolourcurrentorder = new LinkedList<>();

		// *********************************This xpath is for Production
		// Environment************************************//
		/*
		 * List<WebElement> deviceName = driver.findElement(By.xpath(
		 * "//*[@id='o2-page-wrapper']/div[3]/div[3]")) .findElements(By.xpath(
		 * "//div[@class='device-tile__top']/p[@class='details']"));
		 * 
		 * 
		 * List<WebElement> deviceColour = driver.findElement(By.xpath(
		 * "//*[@id='o2-page-wrapper']/div[3]/div[3]")) .findElements(By.xpath(
		 * "//div[@class='device-tile__bottom ng-scope']/p[@class='costs ng-binding ng-scope']/span[@class='headline ng-binding']"
		 * ));
		 */

		// *********************************This xpath is for AWS
		// Environment************************************//

		List<WebElement> deviceName = driver.findElement(By.xpath("//*[@id='o2-page-wrapper']/div[4]/div[5]/div"))
				.findElements(By.xpath(
						"//div[@class='device-tile my-offer ng-scope tile-one-by-two']/div/p[@class='details']"));

		List<WebElement> deviceColour = driver.findElement(By.xpath("//*[@id='o2-page-wrapper']/div[4]/div[5]/div"))
				.findElements(By.xpath(
						"//div[@class='device-details ng-scope']/div/div/label[@class='selected-colour ng-binding']"));

		for (WebElement temp1 : deviceName) {

			String sTemp1 = temp1.getText();
			devicenamecurrentorder.add(sTemp1);
		}

		for (WebElement temp2 : deviceColour) {

			String sTemp2 = temp2.getText();
			devicecolourcurrentorder.add(sTemp2);

		}
		System.out.println("Device Name List: " + devicenamecurrentorder);
		System.out.println("Device Colour List: " + devicecolourcurrentorder);

		for (int i = 0; i < devicenamecurrentorder.size(); i++) {
			deviceCurrentOrder.add(devicenamecurrentorder.get(i) + devicecolourcurrentorder.get(i));
		}

		return deviceCurrentOrder;

	}

	public static LinkedList<String> reArrangeListInAcendingBeforeApplyingSort(LinkedList<String> OriginalList)
			throws InterruptedException {

		LinkedList<String> ListBeforeApplyingSort = OriginalList;
		// listSortEx(ListBeforeApplyingSort, false);

		Collections.sort(ListBeforeApplyingSort);
		System.out.println("-List arranged in ascending Order-");
		System.out.println(ListBeforeApplyingSort);
		return ListBeforeApplyingSort;

	}

	public static LinkedList<String> reArrangeListInDescendingBeforeApplyingSort(LinkedList<String> OriginalList)
			throws InterruptedException {

		LinkedList<String> ListBeforeApplyingSort = OriginalList;
		listSortEx(ListBeforeApplyingSort, true);
		return ListBeforeApplyingSort;

	}

	public static void verifyDeviceSortedOnBrand(LinkedList<String> ListBeforeApplyingSort,
			LinkedList<String> ListAfterApplyingSort) {

		try {

			LinkedList<String> TempListBeforeApplyingSort = ListBeforeApplyingSort;
			LinkedList<String> TempListAfterApplyingSort = ListAfterApplyingSort;

			for (int i = 0; i < TempListBeforeApplyingSort.size(); i++) {
				Assert.assertTrue("Assert Failed: Device list is not sorted as expected",
						TempListBeforeApplyingSort.get(i).contains(TempListAfterApplyingSort.get(i)));
				log.debug("Assertion Success: Devices have been sorted successfully based on Brand");
			}

			// Check SortedOr NOt?

			/*
			 * ( Boolean num = checkAscendingOrder(ListAfterApplyingSort);
			 * System.out.println("boolean value" + num); if (num == true) {
			 * 
			 * System.out.println("Products names are Sorted in ascending Order"
			 * ); } else { System.out.
			 * println("Products names are not Sorted in ascending Order"); }
			 */

			System.out.println("Assertion Success: Devices have been sorted successfully based on Brand");
		} catch (AssertionError e) {
			log.debug("Assertion Failed: Devices are not sorted based on Brand ");
			log.debug("Fail" + " - " + e.getMessage());
		}

	}

	public static void verifyOriginalSortOrderRetainedAfterSortReset(LinkedList<String> ListBeforeApplyingSort,
			LinkedList<String> ListAfterApplyingSort) {

		try {

			LinkedList<String> TempOriginalList = ListBeforeApplyingSort;
			LinkedList<String> TempListAfterSortReset = ListAfterApplyingSort;

			for (int i = 0; i < TempOriginalList.size(); i++) {
				if (TempOriginalList.get(i).equalsIgnoreCase(TempListAfterSortReset.get(i))) {
					System.out.println(TempOriginalList.get(i) + " matches " + TempListAfterSortReset.get(i));
				} else {
					Assert.fail("Devices did not reset to the Original sort order after sort reset");
				}

			}

			System.out.println(
					"Assertion Success: Devices got resorted successfully to the Original Order after sort reset");
		} catch (AssertionError e) {
			log.debug("Assertion Failed: Devices did not reset to the Original sort order after sort reset ");
			log.debug("Fail" + " - " + e.getMessage());
		}

	}

	public static boolean checkAscendingOrder(LinkedList<String> Names) {
		String previous = ""; // empty string

		for (final String cur : Names) {
			if (cur.compareTo(previous) < 0) {
				return false;
			}
			previous = cur;
		}
		return true;
	}

	public static void listSortEx(LinkedList<String> list, final Boolean descOrder) {
		Collections.sort(list, new Comparator<String>() {

			@Override
			public int compare(String o1, String o2) {
				if (descOrder) {
					return o2.compareTo(o1);
				} else {
					return o1.compareTo(o2);
				}
			}
		});
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
		if (pageobjects.BaseCommPage.BackToOffers.isDisplayed()) {
			pageobjects.BaseCommPage.BackToOffers.click();
		} else
			Assert.fail("not able to click on 'Back To iPad Offers' link");
	}

	public static void clickBackToTabletOffers() {
		log.debug("clicking on Back to Tablet Offers link");
		if (pageobjects.BaseCommPage.BackToOffers.isDisplayed()) {
			pageobjects.BaseCommPage.BackToOffers.click();
		} else
			Assert.fail("not able to click on 'Back To Tablet Offers' link");
	}

	/*
	 * public static void checkExpDevAndDetails(String device, String color,
	 * String capacity, String stockmessage) {
	 * 
	 * int k = 0;
	 * 
	 * List<WebElement> iPadDevicesName = driver .findElements(By.
	 * xpath("//div[@class='multi-size-tile clearfix cube']//p[@class='details']"
	 * ));
	 * 
	 * for (int i = 0; i < iPadDevicesName.size(); i++) {
	 * 
	 * if (iPadDevicesName.get(i).getText().equals(device)) { k = i + 1; String
	 * c = "(//select[@id='colour'])[" + k + "]";
	 * 
	 * WebElement colordropdown = driver.findElement(By.xpath(c));
	 * JavascriptExecutor js = (JavascriptExecutor) driver;
	 * js.executeScript("arguments[0].setAttribute('style', 'display:block;')",
	 * colordropdown); if (colordropdown.isDisplayed()) { WebElement firstcolor
	 * = new Select(colordropdown).getFirstSelectedOption(); if
	 * (color.equals(firstcolor.getText())) {
	 * System.out.println("Expected color selected :" + firstcolor.getText()); }
	 * }
	 * 
	 * String d = "(//select[@id='memory'])[" + k + "]";
	 * 
	 * WebElement capacitydropdown = driver.findElement(By.xpath(d));
	 * js.executeScript("arguments[0].setAttribute('style', 'display:block;')",
	 * capacitydropdown); if (capacitydropdown.isDisplayed()) { WebElement
	 * firstcapacity = new Select(capacitydropdown).getFirstSelectedOption(); if
	 * (capacity.equals(firstcapacity.getText())) {
	 * System.out.println("Expected capacity selected :" +
	 * firstcapacity.getText()); } } String e =
	 * "(//p[@class='delivery-information ng-scope'])[" + k + "]"; WebElement
	 * stockmsg = driver.findElement(By.xpath(e));
	 * System.out.println(stockmsg.getText()); if
	 * (stockmsg.getText().contains(stockmessage)) {
	 * System.out.println("Expected stockmsg displayed :" + stockmsg.getText());
	 * } } } }
	 */
}
