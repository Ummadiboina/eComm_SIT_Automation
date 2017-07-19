package actionsPerformed;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import helpers.Environment;

public class PAYMandPAYGTariffAndExtrasPageActions extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");

	public static void GetPageName() {

		System.out.println("Tariff and Extras page");
		log.debug("Tariff and Extras page Validations");
		log.debug("The Page title is" + driver.getTitle());
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

	}

	public static void TariffSelect(String ElementName) {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

		if (ElementName.contains("Randomtariff")) {
			pageobjects.PAYMandPAYGTariffAndExtrasPage.RandomTariff1.sendKeys(Keys.ENTER);
			log.debug("Selected a Random Tariff");
		}

		if (ElementName.contains("SelectPromotedTariff")) {
			pageobjects.PAYMandPAYGTariffAndExtrasPage.SelectPromotedTariff.sendKeys(Keys.ENTER);
			log.debug("Selected a Promoted Tariff");
		}
		if (ElementName.contains("fullpaymenttariff1")) {

			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,350)", "");
			pageobjects.PAYMandPAYGTariffAndExtrasPage.paydevicefulllink.click();
			log.debug("Expanded the Full payment Tariff Section");

			pageobjects.PAYMandPAYGTariffAndExtrasPage.RandomfullTariff1.sendKeys(Keys.ENTER);
			log.debug("Selected a full payment Tariff");
		}
	}

	public static void addAccessory() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		log.debug("The Accessory which will be added is  - "
				+ pageobjects.PAYMandPAYGTariffAndExtrasPage.AddRandomAccessory.getText());
		pageobjects.PAYMandPAYGTariffAndExtrasPage.AddRandomAccessory.sendKeys(Keys.ENTER);
		Thread.sleep(2000);
		log.debug("Added a random accessory to basket");

	}
	public static void PayDeviceFullLink() {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		pageobjects.PAYMandPAYGTariffAndExtrasPage.addToBasketLive.sendKeys(Keys.ENTER);
		log.debug("Clicked on Add to Basket in Tariff and Extras page");

	}
	
	public static void addToBasketLive() {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		pageobjects.PAYMandPAYGTariffAndExtrasPage.addToBasketLive.sendKeys(Keys.ENTER);
		log.debug("Clicked on Add to Basket in Tariff and Extras page");

	}

	public static void addToBasketDockHeader() {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		pageobjects.PAYMandPAYGTariffAndExtrasPage.addToBasketDockHeader.sendKeys(Keys.ENTER);
		log.debug("Clicked on Add to Basket in Tariff and Extras page");

	}

	public static void addMoreAccessory() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		System.out.println("addMoreAccessory() method");
		log.debug("The Accessory which will be added is  - "
				+ pageobjects.PAYMandPAYGTariffAndExtrasPage.AddRandomAccessory.getText());
		try {
			
			WebElement ele0 = pageobjects.PAYMandPAYGTariffAndExtrasPage.AccessoryContainer;
					

			System.out.println("The element is "+ele0.getText());
			if (ele0 != null) 
			{
				System.out.println("selecting accessories");
				

				List<WebElement> DataContainer = pageobjects.PAYMandPAYGTariffAndExtrasPage.Add_AccessoryContainer;

		for (int i = 0; i <= DataContainer.size(); i++) 
			//for (int i = 0; i <= 5; i++)
			{
				
				System.out.println(DataContainer.get(i).getText());
				DataContainer.get(i).click();
				Thread.sleep(3000);
				System.out.println("Selected accessories");
				
			}
			
			}
		}
		catch (Exception e) {
			System.out.println("No accessories found");
			Assert.fail("No accessories found");

		}		
		
		Thread.sleep(2000);
		log.debug("Added a random accessory to basket");

	}

	
	
	public static void verifyAllSectionsDisplayedInTariffsAndExtrasPage() {
		log.debug("Running verifyAllSectionsDisplayedInTariffsAndExtrasPage function");

		try {
			if (pageobjects.PhonesListingPage.BaseComm_ChosseYourTariff_Section.isDisplayed()) {
				System.out.println("Choose Your Tariff section is displayed in the Tariffs and Extras Page");
			}

			if (pageobjects.PhonesListingPage.BaseComm_ChooseYourExtras_Section.isDisplayed()) {
				System.out.println("Choose Your Extras section is displayed in the Tariffs and Extras Page");
			}
			if (pageobjects.PhonesListingPage.BaseComm_YourPackage_Section.isDisplayed()) {
				System.out.println("Choose Your Package section is displayed in the Tariffs and Extras Page");
			} else {
				System.out.println("Expected sections are not displayed in the Tariffs and Extras Page");
			}
		} catch (Exception e) {
			System.out.println("Expected sections are not displayed in the Tariffs and Extras Page. " + e.getMessage());
			Assert.fail("Expected sections are not displayed in the Tariffs and Extras Page" + e.getMessage());

		}
	}

	public static void verifyBasecommTariffAndExtrasPageHeaderDetails() {
		log.debug("Running verifyBasecommTariffAndExtrasPageHeaderDetails function");

		try {

			Assert.assertTrue(pageobjects.PhonesListingPage.HeaderBanner.getText().contains("Tariff and extras"),
					"Assertion Failed: Header does not contain Tariff and extras");
			log.debug("Assertion Success: Header contains label as Tariff and extras");
			System.out.println("Assertion Success: Header contains label as Tariff and extras");

		} catch (AssertionError e) {
			System.out.println("Unable to Verify header details in the Tariff and Extras Page. " + e.getMessage());
			Assert.fail("Unable to Verify header details in the Tariff and Extras Page." + e.getMessage());

		}
	}
	
	public static void verifyBasecommTariffAndExtrasDockHeaderDetails(String DeviceName) {
		log.debug("Running verifyBasecommTariffAndExtrasDockHeaderDetails function");

		try {

			if (DeviceName.contains("Apple")) {
				Assert.assertTrue(pageobjects.PhonesListingPage.DockHeader_BackToOfferLink.getText()
						.contains("Back to iPad offers"),
						"Assertion Failed: Dock header does not contain Back to offers link");
			} else {
				Assert.assertTrue(pageobjects.PhonesListingPage.DockHeader_BackToOfferLink.getText()
						.contains("Back to tablet offers"),
						"Assertion Failed: Dock header does not contain Back to offers link");
			}

			log.debug("Assertion Success: Dock header contains Back to offers link");

			Assert.assertTrue(pageobjects.PhonesListingPage.DockHeader_ChooseYourTariffLink.getText()
					.contains("Choose your tariff"),
					"Assertion Failed: Dock header does not contain Choose your tariff link");
			log.debug("Assertion Success: Header contains Choose your tariff link");
			System.out.println("Assertion Success: Header contains Choose your tariff link");

			Assert.assertTrue(pageobjects.PhonesListingPage.DockHeader_AccessoriesLink.getText().contains("Accessories"),
					"Assertion Failed: Dock header does not contain Accessories link");
			log.debug("Assertion Success: Header contains Accessories link");
			System.out.println("Assertion Success: Header contains Accessories link");

		} catch (AssertionError e) {
			System.out.println("Unable to Verify dock header details in the Tariff and Extras Page. " + e.getMessage());
			Assert.fail("Unable to Verify dock header details in the Tariff and Extras Page." + e.getMessage());

		}
	}
	
	

	public static void verifyAnchoringOfDockHeaderOptions() throws InterruptedException {
		log.debug("Running verifyAnchoringOfDockHeaderOptions function");

		try {
			pageobjects.PhonesListingPage.DockHeader_ChooseYourTariffLink.click();
			Thread.sleep(1000);
			Assert.assertTrue(pageobjects.PhonesListingPage.ChooseYourTariffSection.getText().contains("1. Choose your tariff"),
					"Assertion Failed: Choose your tariff section is not displayed");
			log.debug("Assertion Success: Navigated to Choose your tariff section");
			System.out.println("Assertion Success: Navigated to Choose your tariff section");

			pageobjects.PhonesListingPage.DockHeader_AccessoriesLink.click();
			Thread.sleep(1000);
			Assert.assertTrue(pageobjects.PhonesListingPage.AccessoriesSection.getText().contains("Accessories"),
					"Assertion Failed: Choose your extras section is not displayed");
			log.debug("Assertion Success: Navigated to Accessories section");
			System.out.println("Assertion Success: Navigated to Accessories section");

			pageobjects.PhonesListingPage.DockHeader_TopLink.click();
			Thread.sleep(1000);
			System.out.println("Clicked on the Dock header Top Link successfully");

		} catch (AssertionError e) {
			System.out.println("Unable to Verify dock header details in the Tariff and Extras Page. " + e.getMessage());
			Assert.fail("Unable to Verify dock header details in the Tariff and Extras Page." + e.getMessage());

		}

	}
	
	public static void verifyBasecommPromotionalElementsAreDisplayedInTariffsAndExtrasPage()
			throws InterruptedException {
		log.debug("Running verifyBasecommPromotionalElementsAreDisplayedInTariffsAndExtrasPage function");

		try {
			if (pageobjects.PhonesListingPage.BaseComm_RecommendedTariff_Section.getAttribute("class")
					.contains("tariff ng-scope promoted-tariff promoted-at-first no-promotion-exists")) {

				System.out.println("Recommended Tariff section is enabled");
				if (pageobjects.PhonesListingPage.BaseComm_RecommendedTariff_PromotionLabel.getText()
						.contains("Our recommended tariff")) {
					System.out.println("Recommended Tariff Promotion is getting displayed");
				} else {
					System.out.println("Recommended Tariff Promotion is not displayed");
				}
			} else {
				System.out.println("Recommended Tariff section is not enabled");
			}

		} catch (AssertionError e) {
			System.out.println("Unable to Verify dock header details in the Tariff and Extras Page. " + e.getMessage());
			Assert.fail("Unable to Verify dock header details in the Tariff and Extras Page." + e.getMessage());

		}

	}
	
	public static void verifyViewAllTariffsLinkEnabled() {
		log.debug("Running verifyViewAllTariffsLinkEnabled function");

		try {
			if (pageobjects.PhonesListingPage.BaseComm_TariffsAndExtras_ViewAllTariffLink.isEnabled()) {
				System.out.println("View All Tariffs Link is enabled in the Tariffs and Extras Page");
			} else {
				System.out.println("View All Tarifss Link is not enabled in the Tariffs and Extras Page");
			}
		} catch (AssertionError e) {
			System.out.println("Unable to find View All Tariffs link in the Tariff and Extras Page. " + e.getMessage());
			Assert.fail("Unable to find View All Tariffs link in the Tariff and Extras Page." + e.getMessage());

		}
	}
	
	public static void verifyPayForYourDeviceInFullLinkEnabled() {
		log.debug("Running verifyPayForYourDeviceInFullLinkEnabled function");

		try {
			if (pageobjects.PhonesListingPage.BaseComm_PayForYourDeviceInFull_Link.isEnabled()) {
				System.out.println("Pay For Your device in full Link is enabled in the Tariffs and Extras Page");
				pageobjects.PhonesListingPage.BaseComm_PayForYourDeviceInFull_Link.click();
				if (pageobjects.PhonesListingPage.BaseComm_PayForYourDeviceInFull_Section.isDisplayed()) {
					System.out.println("Pay for your device in full section is getting displayed successfully");
				} else {
					System.out.println("Pay for your device in full section is not getting displayed");
				}
			} else {
				System.out.println(
						"Pay for your device in full Link and corresponding section is not enabled in the Tariffs and Extras Page");
			}
		} catch (Exception e) {
			System.out.println(
					"Pay for your device in full Link and corresponding section is not enabled in the Tariff and Extras Page. "
							+ e.getMessage());
			Assert.fail(
					"Pay for your device in full Link and corresponding section is not enabled in the Tariff and Extras Page"
							+ e.getMessage());

		}
	}
	

	public static void verifyClickAndCollectDeliveryWorks() throws InterruptedException {
		log.debug("Running verifyClickAndCollectDeliveryWorks function");

		try {

			pageobjects.PhonesListingPage.BaseComm_ClickAndCollect_Delivery_Option.click();
			System.out.println("clickAndCollect is Selected");
			log.debug("click And Collect is Selected");
			pageobjects.BasketPage.StorePostcode.sendKeys("G2");
			log.debug("PostCode Entered for Search");
			Thread.sleep(2000);
			pageobjects.BasketPage.PostcodeSubmit.click();
			Thread.sleep(2000);
			log.debug("Postcode Submitted for Search");
			pageobjects.BasketPage.Collectfromthisstore.click();
			log.debug("Store Selected for Colletion");
			Thread.sleep(5000);
			System.out.println("Click and Collect Delivery Option works as expected");
		} catch (Exception e) {
			System.out.println("Click and Collect Delivery Option is not working as expected " + e.getMessage());
			Assert.fail("Click and Collect Delivery Option is not working as expected" + e.getMessage());

		}
	}
}
