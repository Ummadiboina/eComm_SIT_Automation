package actionsPerformed;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.sikuli.script.Key;
import org.testng.Assert;

import helpers.Environment;

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
		log.debug("clicking on Sort Tab");
		pageobjects.BaseCommPage.SortTab.click();
	}

	public static void selectSortOption(String Sort) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		log.debug("Selecting Sort option" + Sort);
		if (Sort.equals("MonthlyHighToLow")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.MonthlyHighToLow);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("MonthlyLowToHigh")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.MonthlyLowToHigh);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("UpfrontHighToLow")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.UpfrontHighToLow);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("UpfrontLowToHigh")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.UpfrontLowToHigh);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("ScreenSize")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.ScreenSize);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("Weight")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Weight);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("BatteryLife")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.BatteryLife);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("CameraResolution")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.CameraResolution);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("UserRatingHighToLow")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.UserRatingHighToLow);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("UserRatingLowToHigh")) {

			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.UserRatingLowToHigh);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);

		}
		if (Sort.equals("BrandAToZ")) {
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.BrandAToZ);
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.Done);
		}
		if (Sort.equals("BrandZToA")) {
			js.executeScript("arguments[0].click();", pageobjects.SortingAndFilter.BrandZToA);
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


	
}
