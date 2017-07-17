package actionsPerformed;

import java.net.MalformedURLException;
import java.net.URI;
import java.net.URL;
import java.util.List;
import java.util.logging.Logger;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
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
	
	public static void checkIfTabletDevicesArePresent() {

	//Archana to update this code
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
	
		String URL = driver.getCurrentUrl();
		System.out.println("URL is " + URL);
		String FeatureURL = NewURL;
		System.out.println("Feature url to compare is " + FeatureURL);
		Assert.assertEquals(FeatureURL, URL);
	}
	
	public static void VerifyIpadURL() throws MalformedURLException {
		System.out.println("Going to Verify content inside URL");
		String currenturl=driver.getCurrentUrl();
		final URI uri = URI.create(currenturl);
		String queryString = uri.getQuery();
		//String subString = queryString.substring(queryString.);
		String subString = queryString.substring(queryString.lastIndexOf('-') + 1);
		System.out.println("EXTRACTED " + subString);
		Assert.assertEquals("iPad",subString);
	}
	
	public static void VerifyTabletURL() throws MalformedURLException {
		System.out.println("Going to Verify content inside URL");
		String currenturl=driver.getCurrentUrl();
		final URI uri = URI.create(currenturl);
		String queryString = uri.getQuery();
		//String subString = queryString.substring(queryString.);
		String subString = queryString.substring(queryString.lastIndexOf('-') + 1);
		System.out.println("EXTRACTED " + subString);
		Assert.assertEquals("tablet",subString);
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

	
}
