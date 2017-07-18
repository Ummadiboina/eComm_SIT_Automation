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
import org.openqa.selenium.support.ui.Select;

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

	public static void BuynowwithDevice(String elementName) throws MalformedURLException {
		System.out.println("Going to click on the buy now button on device");
		if (elementName.contains("iPad mini 3")) 
		{
			System.out.println("Going to select Ipad mini 3 device");

			pageobjects.BaseCommPage.IpadMini3Buynow.click();

			System.out.println("Selected iPad mini 3 device");

			log.debug("Selected iPad mini 3 device");
			
		}
		if (elementName.contains("iPad mini 2")) 
		{
			System.out.println("Going to select iPad mini 2 device");

			pageobjects.BaseCommPage.IpadMini2Buynow.click();

			System.out.println("Selected iPad mini 2 device");

			log.debug("Selected iPad mini 2 device");
			
		}
		if (elementName.contains("iPad Air")) 
		{
			System.out.println("Going to select iPad Air device");

			pageobjects.BaseCommPage.IpadAirBuynow.click();
			
			System.out.println("Selected iPad Air device");

			log.debug("Selected iPad Air device");
		}
		if (elementName.contains("Galaxy Tab Active")) 
		{
			System.out.println("Going to select Galaxy Tab device");

			pageobjects.BaseCommPage.GalaxyTabActiveBuynow.click();
			
			System.out.println("Selected Galaxy Tab device");

			log.debug("Selected Galaxy Tab device");
		}
		if (elementName.contains("Xperia Z2 Tablet")) 
		{
			System.out.println("Going to select XperiaZ2Tablet device");

			pageobjects.BaseCommPage.XperiaZ2TabletBuynow.click();

			System.out.println("Selected XperiaZ2Tablet device");

			log.debug("Selected XperiaZ2Tablet device");
		}
	}

	public static void VerifyPage() throws MalformedURLException {
		System.out.println("Going to verify page");
		String title= pageobjects.BaseCommPage.headerofTariffandExtrasPage.getText();
	//	String title=driver.findElement(By.id("header-primary")).getText();
		Assert.assertEquals(title, "Tariff and extras");
		
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



	public static void VerifyRibbon() {
		// TODO Auto-generated method stub
		System.out.println("Going to Verify promotion ribbon");
		
		boolean str1= pageobjects.BaseCommPage.DeviceRibbon!= null;
		Assert.assertTrue(str1);
		String str2= pageobjects.BaseCommPage.DeviceRibbon.getText();
		System.out.println("the promotion text is "+str2);
		System.out.println("Verified promotion ribbon");

	}



	public static void VerifyPriceChangeuponCapacity() {
		// TODO Auto-generated method stub
		System.out.println("Going to Verify promotion ribbon");
		//WebElement capacity = driver.findElement(By.xpath("//*[@data-qa-device-model-family='iPad mini 3']/div[1]/div[2]/div[1]/div[2]/div[2]/select[@id='memory']"));
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
		String price1=pageobjects.BaseCommPage.PriceiPadAir2.getText();
		System.out.println(price1);
		System.out.println("Now the second line is ..... ");
		new Select(capacity).selectByVisibleText("16GB");
		String price2=pageobjects.BaseCommPage.PriceiPadAir2.getText();
		System.out.println(price2);
		Assert.assertNotSame(price2,price1);
		
	}

	
}
