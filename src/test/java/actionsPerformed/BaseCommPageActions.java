package actionsPerformed;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;
import java.util.logging.Logger;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import helpers.Environment;

public class BaseCommPageActions extends Environment {

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
				System.out.println("iPadDevices.get(i).getText()");
			} else {
				System.out.println("Devices other than iPad are also displayed");
				Assert.fail("Devices other than iPad are also displayed");
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
		log.debug("clicking on Sort Tab");
		pageobjects.BaseCommPage.SortTab.click();
	}

	public static void selectSortOption(String Sort) {
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

	}

	public static void clickOnResetSort() {
		log.debug("clicking on Reset Sort");
		pageobjects.SortingAndFilter.ResetSort.click();
	}

	public static void CompareURL(String NewURL) throws MalformedURLException {
		System.out.println("Comparing URL");
		// URL is reference , some instance which needs to be initialsed for
		// comparing urls

		/*
		 * URL urlone= new URL(NewURL); URL urlRedirected= new
		 * URL(driver.getCurrentUrl());
		 */
		// String Newurl=driver.getCurrentUrl();
		/*
		 * System.out.println("The current url is "+urlRedirected);
		 * log.debug("The current url is "+urlRedirected);
		 */

		String URL = driver.getCurrentUrl();
		System.out.println("URL is " + URL);
		String FeatureURL = NewURL;
		System.out.println("Feature url to compare is " + FeatureURL);
		Assert.assertEquals(FeatureURL, URL);

		/*
		 * 
		 * if (urlone.equals(urlRedirected)) {
		 * System.out.println("URLs are same"); Assert.fail("URL are same"); }
		 * else { System.out.println("URLs are different"); }
		 */
	}

}
