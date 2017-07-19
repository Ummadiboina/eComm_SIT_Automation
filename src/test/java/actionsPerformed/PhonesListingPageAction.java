package actionsPerformed;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.sikuli.script.Key;
import org.testng.Assert;


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
import org.sikuli.script.Key;

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
		System.out.println("Selecting Sort option" + Sort);
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
			Thread.sleep(3000);
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

				Assert.assertTrue(ListAfterFilter.get(i).contains(FilterOption),
						"Assertion Failed: Devices displayed are not as per the filter applied");

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

				Assert.assertTrue(ListAfterFilter.get(i).contains(FilterOption),
						"Assertion Failed: Devices displayed are not as per the filter applied");

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
			System.out.println("Selecting Sort option" + Filter + "With " + Option);

			JavascriptExecutor js = (JavascriptExecutor) driver;

			if (Filter.equals("Brand")) {

				js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand);
				Thread.sleep(1000);

				if (Option.equals("Alcatel")) {

					pageobjects.SortingAndFilter.Brand_Alcatel.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);

				}
				if (Option.equals("Apple")) {

					pageobjects.SortingAndFilter.Brand_Apple.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
				}
				if (Option.equals("Doro")) {

					pageobjects.SortingAndFilter.Brand_Doro.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
				}
				if (Option.equals("HTC")) {

					pageobjects.SortingAndFilter.Brand_HTC.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
				}
				if (Option.equals("Huawei")) {

					pageobjects.SortingAndFilter.Brand_Huawei.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
				}
				if (Option.equals("LG")) {

					pageobjects.SortingAndFilter.Brand_LG.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
				}
				if (Option.equals("Moto")) {

					pageobjects.SortingAndFilter.Brand_Moto.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
				}
				if (Option.equals("OnePlus")) {

					pageobjects.SortingAndFilter.Brand_OnePlus.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
				}
				if (Option.equals("Samsung")) {

					pageobjects.SortingAndFilter.Brand_Samsung.click();
					Thread.sleep(2000);
					js.executeScript("arg" + "uments[0].click();", pageobjects.SortingAndFilter.Brand);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
				}
				if (Option.equals("Sony")) {

					pageobjects.SortingAndFilter.Brand_Sony.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Brand);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);

				}
			} else if (Filter.equals("Colour")) {

				js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour);
				Thread.sleep(1000);

				if (Option.equals("Black")) {

					pageobjects.SortingAndFilter.Colour_Black.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);

				}

				if (Option.equals("Grey")) {

					pageobjects.SortingAndFilter.Colour_Grey.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);

				}

				if (Option.equals("Yellow")) {

					pageobjects.SortingAndFilter.Colour_Yellow.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);

				}

				if (Option.equals("Blue")) {

					pageobjects.SortingAndFilter.Colour_Blue.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);

				}

				if (Option.equals("White")) {

					pageobjects.SortingAndFilter.Colour_White.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);

				}

				if (Option.equals("Green")) {

					pageobjects.SortingAndFilter.Colour_Green.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);

				}

				if (Option.equals("Red")) {

					pageobjects.SortingAndFilter.Colour_Red.click();
					Thread.sleep(2000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Colour);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
					Thread.sleep(1000);
					js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);

				}
			}
		}

		catch (

		Exception e) {
			System.out.println("Failed: Cannot select a filter option : " + e.getMessage());
		}

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
		List<WebElement> panellist = driver.findElements(By.xpath("//div[@id='panel']//div"));
		WebElement BannerDescription = driver.findElement(By.xpath("//div[@class='default-content-container']"));

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

			System.out.println("First string is " + strings.get(0));
			System.out.println("Second string is " + strings.get(1));
			System.out.println("Last string is " + strings.get(stringsize - 1));

			if (strings.get(0).startsWith("Click & Collect")) {
				System.out.println("static sub navigation is at the correct position");
			}
			if (strings.get(stringsize - 1).startsWith("Free delivery working next working day")) {
				System.out.println("Footer is at the correct position");
			}
			if (strings.get(1).startsWith("Tablet offers" + '\n' + "Especially for you")) {
				System.out.println("Header carousel is at the correct position");
			}
		}
	}

	public static void checkExpDevAndDetails(String device, String color, String capacity, String stockmessage) {

		int k = 0;

		List<WebElement> iPadDevicesName = driver
				.findElements(By.xpath("//div[@class='multi-size-tile clearfix cube']//p[@class='details']"));

		for (int i = 0; i < iPadDevicesName.size(); i++) {

			if (iPadDevicesName.get(i).getText().equals(device)) {
				k = i + 1;
				String c = "(//select[@class='ng-pristine ng-valid colour-select'])[" + k + "]";

				WebElement colordropdown = driver.findElement(By.xpath(c));
				JavascriptExecutor js = (JavascriptExecutor) driver;
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", colordropdown);
				if (colordropdown.isDisplayed()) {
					WebElement firstcolor = new Select(colordropdown).getFirstSelectedOption();
					if (color.equals(firstcolor.getText())) {
						System.out.println("Expected color selected :" + firstcolor.getText());
					}
				}

				String d = "(//select[@class='memory-select ng-pristine ng-valid'])[" + k + "]";

				WebElement capacitydropdown = driver.findElement(By.xpath(d));
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", capacitydropdown);
				if (capacitydropdown.isDisplayed()) {
					WebElement firstcapacity = new Select(capacitydropdown).getFirstSelectedOption();
					if (capacity.equals(firstcapacity.getText())) {
						System.out.println("Expected capacity selected :" + firstcapacity.getText());
					}
				}
				String e = "(//p[@class='delivery-information ng-scope'])[" + k + "]";
				WebElement stockmsg = driver.findElement(By.xpath(e));
				System.out.println(stockmsg.getText());
				if (stockmsg.getText().contains(stockmessage)) {
					System.out.println("Expected stockmsg displayed :" + stockmsg.getText());
				}
			}
		}
	}

	public static void checkSeeDeviceDetailsPopUp(String device) throws InterruptedException {
		List<WebElement> iPadDevicesName = pageobjects.BaseCommPage.iPadDevicesName;

		WebElement SeeDeviceDetailsLink;
		WebElement PoundsElement;
		WebElement PenseElement;
		JavascriptExecutor js = (JavascriptExecutor) driver;
		String popupdevicenametext = null;
		String poundselementtext = null;
		String penseelementtext = null;
		String c = null, d = null, e = null;
		int k = 0;

		for (int i = 0; i < iPadDevicesName.size(); i++) {

			if (iPadDevicesName.get(i).getText().equals(device)) {
				k = i + 1;
				c = "(//a[contains(text(),'See device details')])[" + k + "]";
				d = "(//span[@class='headline ng-binding'])[" + k + "]";
				e = "(//span[@class='pence ng-binding'])[" + k + "]";
			}

		}
		PoundsElement = driver.findElement(By.xpath(d));
		PenseElement = driver.findElement(By.xpath(e));

		SeeDeviceDetailsLink = driver.findElement(By.xpath(c));
		js.executeScript("arguments[0].click();", SeeDeviceDetailsLink);
		log.debug("Clicked on See Device Details Link");
		Thread.sleep(5000);

		for (String winHandle : driver.getWindowHandles()) {
			driver.switchTo().window(winHandle);
			log.debug("Control is in pop up");
		}

		WebElement PopupdevicenametextElement = driver.findElement(By.xpath("//*[@id='device-details']/div[1]/h3"));
		if (PopupdevicenametextElement.isDisplayed()) {
			popupdevicenametext = PopupdevicenametextElement.getText();
			if (popupdevicenametext.equals(device)) {
				log.debug("Device name in pop up is " + popupdevicenametext + "and matches the device selected");
			}
		} else {
			Assert.fail("Device name in pop up is not present");
		}

		if (PoundsElement.isDisplayed()) {
			poundselementtext = PoundsElement.getText();
			if (poundselementtext.equals(PoundsElement.getText())) {
				log.debug("Pounds in pop up - " + poundselementtext + ", pounds value displayed for device - "
						+ PoundsElement.getText() + "and they are the same");
			}
		}

		if (PenseElement.isDisplayed()) {
			penseelementtext = PenseElement.getText();
			if (penseelementtext.equals(PenseElement.getText())) {
				log.debug("Pense in pop up - " + penseelementtext + ", pense value displayed for device - "
						+ PenseElement.getText() + "and they are the same");
			}
		}

		WebElement SpecificationsElement = driver.findElement(By.xpath("//div[@class='accordion-content']"));
		if (!SpecificationsElement.isDisplayed()) {
			System.out.println("specifications not displayed");
		} else
			System.out.println("specifications displayed");

		WebElement FullSpecificationElement = driver
				.findElement(By.xpath("//a[contains(text(),'See full technical specification')]"));
		if (FullSpecificationElement.isDisplayed()) {
			FullSpecificationElement.click();
			System.out.println("Full specification link is present");
		}
	}
	
	
	/*public static void checkSeeDeviceDetailsPopUp(String device) throws InterruptedException {
		List<WebElement> iPadDevicesName = pageobjects.BaseCommPage.iPadDevicesName;

		WebElement SeeDeviceDetailsLink;
		WebElement PoundsElement;
		WebElement PenseElement;
		JavascriptExecutor js = (JavascriptExecutor) driver;
		String popupdevicenametext = null;
		String poundselementtext = null;
		String penseelementtext = null;
		String c = null, d = null, e = null;
		int k = 0;

		for (int i = 0; i < iPadDevicesName.size(); i++) {

			if (iPadDevicesName.get(i).getText().equals(device)) {
				k = i + 1;
				c = "(//a[contains(text(),'See device details')])[" + k + "]";
				d = "(//span[@class='headline ng-binding'])[" + k + "]";
				e = "(//span[@class='pence ng-binding'])[" + k + "]";
			}

		}
		PoundsElement = driver.findElement(By.xpath(d));
		PenseElement = driver.findElement(By.xpath(e));

		SeeDeviceDetailsLink = driver.findElement(By.xpath(c));
		js.executeScript("arguments[0].click();", SeeDeviceDetailsLink);
		log.debug("Clicked on See Device Details Link");
		Thread.sleep(5000);

		for (String winHandle : driver.getWindowHandles()) {
			driver.switchTo().window(winHandle);
			log.debug("Control is in pop up");
		}

		WebElement PopupdevicenametextElement = driver.findElement(By.xpath("//*[@id='device-details']/div[1]/h3"));
		if (PopupdevicenametextElement.isDisplayed()) {
			popupdevicenametext = PopupdevicenametextElement.getText();
			if (popupdevicenametext.equals(device)) {
				log.debug("Device name in pop up is " + popupdevicenametext + "and matches the device selected");
			}
		} else {
			Assert.fail("Device name in pop up is not present");
		}

		if (PoundsElement.isDisplayed()) {
			poundselementtext = PoundsElement.getText();
			if (poundselementtext.equals(PoundsElement.getText())) {
				log.debug("Pounds in pop up - " + poundselementtext + ", pounds value displayed for device - "
						+ PoundsElement.getText() + "and they are the same");
			}
		}

		if (PenseElement.isDisplayed()) {
			penseelementtext = PenseElement.getText();
			if (penseelementtext.equals(PenseElement.getText())) {
				log.debug("Pense in pop up - " + penseelementtext + ", pense value displayed for device - "
						+ PenseElement.getText() + "and they are the same");
			}
		}

		WebElement SpecificationsElement = driver.findElement(By.xpath("//div[@class='accordion-content']"));
		if (!SpecificationsElement.isDisplayed()) {
			System.out.println("specifications not displayed");
		} else
			System.out.println("specifications displayed");

		WebElement FullSpecificationElement = driver
				.findElement(By.xpath("//a[contains(text(),'See full technical specification')]"));
		if (FullSpecificationElement.isDisplayed()) {
			FullSpecificationElement.click();
			System.out.println("Full specification link is present");
		}
	}*/
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

		/*
		 * List<WebElement> deviceName = driver.findElement(By.xpath(
		 * "//*[@id='o2-page-wrapper']/div[4]/div[5]/div"))
		 * .findElements(By.xpath(
		 * "//div[@class='device-tile my-offer ng-scope tile-one-by-two']/div/p[@class='details']"
		 * ));
		 */

		// ********************This xpath is for Production
		// Environment********************************//

		List<WebElement> deviceName = driver.findElement(By.xpath("//*[@id='o2-page-wrapper']/div[3]/div[3]"))
				.findElements(By.xpath("//div[@class='device-tile__top']/p[@class='details']"));

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
		 */

		List<WebElement> devicePrice = driver.findElement(By.xpath("//*[@id='o2-page-wrapper']/div[3]/div[3]"))
				.findElements(By.xpath(
						"//div[@class='device-tile__bottom ng-scope']/p[@class='costs ng-binding ng-scope']/span[@class='headline ng-binding']"));

		/*
		 * for (WebElement temp1 : deviceName) {
		 * 
		 * String sTemp = temp1.getText(); devicenamecurrentorder.add(sTemp); }
		 */

		// *********************************This xpath is for Production
		// Environment************************************//

		for (WebElement temp2 : devicePrice) {

			String sTemp = StringUtils.substringBetween(temp2.getText(), "", ".00");
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
				Assert.assertTrue(TempListBeforeApplyingSort.get(i).contains(TempListAfterApplyingSort.get(i)),
						"Assert Failed: Device list is not sorted as expected");
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
}
