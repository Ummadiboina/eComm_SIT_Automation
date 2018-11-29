package actionsPerformed;

import java.awt.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Hashtable;
import java.util.List;
import java.util.concurrent.TimeUnit;

import GlobalActions.scrollToAnElement;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.Point;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import GlobalActions.Screenshots;
import helpers.Environment;
import helpers.setRuntimeProperty;
import pageobjects.PAYMandPAYGTariffAndExtrasPage;
import steps.Hooks;

public class PAYMandPAYGTariffAndExtrasPageActions extends Environment {
	final static Logger log = Logger.getLogger("PAYMandPAYGTariffAndExtrasPageActions");
	static int AccessoryContainerSize = 0;
	static int SelectedAccessoryCount = 0;
	static String FirstInsurancePrice = null;
	static JavascriptExecutor js = (JavascriptExecutor) driver;
	static ArrayList<Integer> datafilterlist = new ArrayList<Integer>();
	static int HighFilterGreater = 0;
	static ArrayList<Integer> datalistafter = new ArrayList<Integer>();
	static ArrayList<Integer> start = new ArrayList<Integer>();
	static ArrayList<Integer> end = new ArrayList<Integer>();
	public static String plan = "", actPlnList = "", planAmnt = "";

	static Hashtable plnDetails = new Hashtable();
	static Hashtable actPlnDetails = new Hashtable();
	public static Boolean BSCRetainedFlag = false;

	public static void GetPageName() throws IOException {

		log.debug("Tariff and Extras page");
		log.debug("Tariff and Extras page Validations");
		log.debug("The Page title is" + driver.getTitle());
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		Screenshots.captureScreenshot();

	}

	public static void SelectPayMTariffTab() throws IOException, InterruptedException {

		Thread.sleep(7000);
		log.debug("Selecting Pay Monthly Tariff Tab");
		pageobjects.PAYMandPAYGTariffAndExtrasPage.SelectPayMTariffTab.click();
		log.debug("Clicked Pay Monthly Tariff Tab");
		Thread.sleep(3000);
		Screenshots.captureScreenshot();

	}


	public static String TariffSelect(String ElementName) throws IOException, InterruptedException {


		if (driver.findElements(By.xpath("(//input[@type='button' and @value='Go to basket'])[1]")).size() >= 0) {

			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

			if (ElementName.equalsIgnoreCase("Randomtariff")) {
				scrollToAnElement.scrollToElement(PAYMandPAYGTariffAndExtrasPage.RandomTariff1);
				Screenshots.captureScreenshot();
				Thread.sleep(4000);
				pageobjects.PAYMandPAYGTariffAndExtrasPage.RandomTariff1.sendKeys(Keys.ENTER);
				//pageobjects.PAYMandPAYGTariffAndExtrasPage.RandomTariff1.click();
				log.debug("Selected a Random Tariff");

			} else if (ElementName.contains("SelectPromotedTariff")) {
				pageobjects.PAYMandPAYGTariffAndExtrasPage.SelectPromotedTariff.sendKeys(Keys.ENTER);
				log.debug("Selected a Promoted Tariff");
			} else if (ElementName.contains("fullpaymenttariff1")) {

				JavascriptExecutor executor = (JavascriptExecutor) driver;
				executor.executeScript("window.scrollBy(0,-200)", "");
				Thread.sleep(5000);
				Screenshots.captureScreenshot();
				//pageobjects.PAYMandPAYGTariffAndExtrasPage.paydevicefulllink.click();

				executor.executeScript("arguments[0].click();", pageobjects.PAYMandPAYGTariffAndExtrasPage.paydevicefulllink);

				log.debug("Expanded the Full payment Tariff Section");
				Thread.sleep(7000);
				Screenshots.captureScreenshot();
				//pageobjects.PAYMandPAYGTariffAndExtrasPage.RandomfullTariff1.sendKeys(Keys.ENTER);

				executor.executeScript("arguments[0].click();", pageobjects.PAYMandPAYGTariffAndExtrasPage.RandomfullTariff1);
				log.debug("Selected a full payment Tariff");
			} else if (ElementName.contains("|")) {

				//Validation for Data Roll Over Text
				String tariffAmt = ElementName.split("\\|")[0];
				String dataRolloverValue = ElementName.split("\\|")[1];

				planAmnt = tariffAmt;

				System.out.println("tariffAmt: " + tariffAmt + " data: " + dataRolloverValue + "\n");
				Screenshots.captureScreenshot();
				JavascriptExecutor jse = (JavascriptExecutor) driver;
				jse.executeScript("window.scrollBy(0,100)", "");
				Screenshots.captureScreenshot();
				Thread.sleep(3000);

				if (driver.findElements(By.xpath("//span[text()='" + tariffAmt + "']")).size() >= 1) {

					String textStr1 = driver.findElement(By.xpath("//span[normalize-space()='" + tariffAmt + "']/../../../div/h3")).getText();

					Thread.sleep(3000);
					if (textStr1.contains(dataRolloverValue)) {

						log.debug("Data value " + dataRolloverValue + " for " + tariffAmt + " is displayed");
					} else {

						log.debug("Data value " + dataRolloverValue + " for " + tariffAmt + " is not displayed");
					}

					String textStr2 = driver.findElement(By.xpath("//span[normalize-space()='" + tariffAmt + "']/../../../ul/li[1]/p")).getText();
					Thread.sleep(3000);
					if (textStr2.contains("Includes data rollover")) {

						log.debug("Data Roll over copy text 'Includes data rollover' is displayed");
					} else {

						log.debug("Data Roll over copy text 'Includes data rollover' is not displayed");
					}

					String textStr3 = driver.findElement(By.xpath("//span[normalize-space()='" + tariffAmt + "']/../../../div[2]/div/p")).getText();

					String expectedTxt = "Includes data rollover of up to " + dataRolloverValue;
					Thread.sleep(3000);
					if (textStr3.contains(expectedTxt)) {

						log.debug("Tariff tile included Data Roll over ribbon Includes data rollover of up to " + dataRolloverValue);
					} else {

						log.debug("Tariff tile included Data Roll over ribbon 'Includes data rollover of up to'");
					}

					List<WebElement> plnList = driver.findElements(By.xpath("//span[text()='" + tariffAmt + "']/../../../ul/li"));

					for (WebElement elm : plnList) {
						plan = elm.getText().replaceAll("\"", "").trim() + "|";

					}
					Thread.sleep(3000);
					log.debug("Clicking on More details link");
					JavascriptExecutor js = (JavascriptExecutor) driver;

					//driver.findElement(By.xpath("//span[text()='" + tariffAmt + "']/../../../a")).click();
					js.executeScript("arguments[0].click();", driver.findElement(By.xpath("//span[text()='" + tariffAmt + "']/../../../a")));
					log.debug("Clicked on More details link");
					Thread.sleep(5000);
					Screenshots.captureScreenshot();

					//String dataRollOvrPopupTxt = driver.findElement(By.xpath("//div[@id='o2BundleCharges']/div[@class='box-content scroll-bar']/p[3]")).getAttribute("textContent");
					String dataRollOvrPopupTxt = driver.findElement(By.xpath("(//div[@class='payg-overlay big-bundles']/div[@class='box-content scroll-bar'])[1]")).getText();
					Thread.sleep(4000);
					if (dataRollOvrPopupTxt.contains("With data rollover, you can roll over your unused data into your next month‘s Big Bundle, subject to bundle caps. Terms apply.")) {
						log.debug("Data Roll over copy text is present in the popup");

					} else {
						log.debug("Data Roll over copy text is not matching in the popup");
					}
					//driver.findElement(By.xpath("//h3[text()='Big Bundles']/following-sibling::a")).click();

					//driver.findElement(By.xpath("//div[@id='tariffOverlay']/div/button")).click();
					js.executeScript("arguments[0].click();", driver.findElement(By.xpath("//div[@id='tariffOverlay']/div/button")));
					log.debug("Clicked on More details popup close button");
					Thread.sleep(5000);

					//driver.findElement(By.xpath("//span[text()='" + tariffAmt + "']/../../../button")).click();
					js.executeScript("arguments[0].click();", driver.findElement(By.xpath("//span[text()='" + tariffAmt + "']/../../../button")));
					log.debug("Selected the specified Big Bundle Tariff");

					Thread.sleep(4000);
					Screenshots.captureScreenshot();

					/*List<WebElement> actPlnListElm = driver.findElement(By.xpath("//span[text()='" + tariffAmt + "']/../../../ul/li"));

					for (int i = 3; i <= actPlnListElm.size(); i++) {
						actPlnList = actPlnListElm.get(i).getText().replaceAll("\"", "").trim() + "|";
					}

					if (plan.equals(actPlnList)) {
						log.debug("Selected Big Bundle Data Roll over plan details is displayed in your package section");

					} else {
						log.debug("Selected Big Bundle Data Roll over plan details is not displayed in your package section");

					}
					*/
					if (driver.findElements(By.xpath("//ul[@class='orders']/li/section[3]/h3")).size() > 0) {
						String strTariff = driver.findElement(By.xpath("//ul[@class='orders']/li/section[3]/h3")).getText();
						Thread.sleep(2000);
						if (strTariff.contains(tariffAmt + " data Big Bundles")) {
							log.debug("Selected Big Bundle Data Roll over plan details is displayed in your package section");
						} else {
							log.debug("Selected Big Bundle Data Roll over plan details is not displayed in your package section");
						}
					}
				}
			}
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,100)", "");
			Screenshots.captureScreenshot();
			return plan;
		} else {
			driver.findElement(By.xpath("(//input[@type='button' and @value='Go to basket'])[1]")).click();
			return plan;
		}
	}


	public static void addAccessory() throws InterruptedException, IOException {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		if (driver.findElements(By.xpath("(//*[@id='accessoryTile_']/div[5]/input)[2] | (//*[@class='accessory-button-container']/input[@value='Add'])[2]")).size() > 0) {
			log.debug("The Accessory which will be added is  - "
					+ pageobjects.PAYMandPAYGTariffAndExtrasPage.AddRandomAccessory.getText());
			pageobjects.PAYMandPAYGTariffAndExtrasPage.AddRandomAccessory.sendKeys(Keys.ENTER);
			Thread.sleep(2000);
			log.debug("Added a random accessory to basket");
		}
		Screenshots.captureScreenshot();

	}

	public static void addInsurance() throws InterruptedException, IOException {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		log.debug("Entering add insurance function");

		pageobjects.PAYMandPAYGTariffAndExtrasPage.AddRandomInsurance.click();
		Thread.sleep(2000);
		log.debug("Completed add insurance function");

		Screenshots.captureScreenshot();

	}

	public static void PayDeviceFullLink() throws IOException {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		pageobjects.PAYMandPAYGTariffAndExtrasPage.addToBasketLive.sendKeys(Keys.ENTER);
		log.debug("Clicked on Add to Basket in Tariff and Extras page");
		Screenshots.captureScreenshot();
	}

	public static void addToBasketLive() throws InterruptedException, IOException {

		if (driver.findElements(By.xpath("(//input[@value='Go to basket'])[1]")).size() > 0) {
			//driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			Thread.sleep(4000);
        	log.debug("Click on the Add To Basket/Go To Basket CTA");

			Screenshots.captureScreenshot();
			((JavascriptExecutor) driver).executeScript("arguments[0].click();", pageobjects.PAYMandPAYGTariffAndExtrasPage.addToBasketLive);
			// pageobjects.PAYMandPAYGTariffAndExtrasPage.addToBasketLive.sendKeys(Keys.ENTER);
			log.debug("Clicked on Add to Basket in Tariff and Extras page");
			Thread.sleep(10000);
			Screenshots.captureScreenshot();
			//Screenshots.captureScreenshot(Hooks.directoryName);
		} else {
			//driver.findElement(By.xpath("(//input[@type='submit' and @value='Go to checkout'])[1]")).click();
		}
	}

	public static void addToBasket_BoyOut_Journey() throws InterruptedException, IOException {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

		JavascriptExecutor jse = (JavascriptExecutor) driver;
		Screenshots.captureScreenshot();
		jse.executeScript("window.scrollBy(0,500)", "");
		Thread.sleep(3000);
		Screenshots.captureScreenshot();
		pageobjects.PAYMandPAYGTariffAndExtrasPage.addToBasketBuyOutJourney.sendKeys(Keys.ENTER);
		log.debug("Clicked on Add to Basket in Tariff and Extras page");

		Thread.sleep(12000);


	}

	public static void addToBasketDockHeader() throws IOException {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		pageobjects.PAYMandPAYGTariffAndExtrasPage.addToBasketDockHeader.sendKeys(Keys.ENTER);
		log.debug("Clicked on Add to Basket in Tariff and Extras page");
		Screenshots.captureScreenshot();

	}

	public static void addMoreAccessory() throws InterruptedException, IOException {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		log.debug("addMoreAccessory() method");
		//log.debug("The Accessory which will be added is  - "+ pageobjects.PAYMandPAYGTariffAndExtrasPage.AddRandomAccessory.getText());
		try {
			Thread.sleep(4000);
			WebElement ele0 = pageobjects.PAYMandPAYGTariffAndExtrasPage.AccessoryContainer;
			log.debug("The element is " + ele0.getText());
			if (ele0 != null) {
				log.debug("selecting accessories");
				List<WebElement> DataContainer = pageobjects.PAYMandPAYGTariffAndExtrasPage.Add_AccessoryContainer;

				for (int i = 0; i < DataContainer.size(); i++)

				{
					log.debug(DataContainer.get(i).getText());
					DataContainer.get(i).click();
					Thread.sleep(4000);
					log.debug("Selected accessories");
				}
				String size = Integer.toString(DataContainer.size());
				setRuntimeProperty.setProperty("DeviceAccessoryCount", size);

			}
			Screenshots.captureScreenshot();
		} catch (Exception e) {
			log.debug("No accessories found");
			Assert.fail("No accessories found");
			Screenshots.captureScreenshot();
		}
		Thread.sleep(2000);
		log.debug("Added a random accessory to basket");
	}

	public static void verifyBasecommTariffAndExtrasPageHeaderDetails() throws IOException {
		log.debug("Running verifyBasecommTariffAndExtrasPageHeaderDetails function");

		try {

			Assert.assertTrue("Assertion Failed: Header does not contain Tariff and extras",
					pageobjects.PhonesListingPage.HeaderBanner.getText().contains("Tariff and extras"));
			log.debug("Assertion Success: Header contains label as Tariff and extras");
			log.debug("Assertion Success: Header contains label as Tariff and extras");
			Screenshots.captureScreenshot();
		} catch (AssertionError e) {
			log.debug("Unable to Verify header details in the Tariff and Extras Page. " + e.getMessage());
			Assert.fail("Unable to Verify header details in the Tariff and Extras Page." + e.getMessage());
			Screenshots.captureScreenshot();
		}
	}

	public static void verifyBasecommTariffAndExtrasDockHeaderDetails() throws IOException {
		log.debug("Running verifyBasecommTariffAndExtrasDockHeaderDetails function");

		try {
			Assert.assertTrue("Assertion Failed: Dock header does not contain Back to offers link",
					pageobjects.PhonesListingPage.DockHeader_BackToOfferLink.getText().contains("Back to offers"));
			log.debug("Assertion Success: Dock header contains Back to offers link");
			log.debug("Assertion Success: Dock header contains Back to offers link");

			Assert.assertTrue("Assertion Failed: Dock header does not contain Choose your tariff link",
					pageobjects.PhonesListingPage.DockHeader_ChooseYourTariffLink.getText()
							.contains("Choose your tariff"));
			log.debug("Assertion Success: Header contains Choose your tariff link");
			log.debug("Assertion Success: Header contains Choose your tariff link");

			Assert.assertTrue("Assertion Failed: Dock header does not contain Accessories link",
					pageobjects.PhonesListingPage.DockHeader_AccessoriesLink.getText().contains("Accessories"));
			log.debug("Assertion Success: Header contains Accessories link");
			log.debug("Assertion Success: Header contains Accessories link");
			Screenshots.captureScreenshot();
		} catch (AssertionError e) {
			log.debug("Unable to Verify dock header details in the Tariff and Extras Page. " + e.getMessage());
			Assert.fail("Unable to Verify dock header details in the Tariff and Extras Page." + e.getMessage());
			Screenshots.captureScreenshot();
		}
	}

	public static void verifyAnchoringOfDockHeaderOptions() throws InterruptedException, IOException {
		log.debug("Running verifyAnchoringOfDockHeaderOptions function");

		try {
			pageobjects.PhonesListingPage.DockHeader_ChooseYourTariffLink.click();
			Thread.sleep(1000);
			Assert.assertTrue("Assertion Failed: Choose your tariff section is not displayed",
					pageobjects.PhonesListingPage.ChooseYourTariffSection.getText().contains("1. Choose your tariff"));
			log.debug("Assertion Success: Navigated to Choose your tariff section");
			log.debug("Assertion Success: Navigated to Choose your tariff section");

			pageobjects.PhonesListingPage.DockHeader_AccessoriesLink.click();
			Thread.sleep(1000);
			Assert.assertTrue("Assertion Failed: Choose your extras section is not displayed",
					pageobjects.PhonesListingPage.AccessoriesSection.getText().contains("Accessories"));
			log.debug("Assertion Success: Navigated to Accessories section");
			log.debug("Assertion Success: Navigated to Accessories section");

			pageobjects.PhonesListingPage.DockHeader_TopLink.click();
			Thread.sleep(1000);
			log.debug("Clicked on the Dock header Top Link successfully");
			Screenshots.captureScreenshot();
		} catch (AssertionError e) {
			log.debug("Unable to Verify dock header details in the Tariff and Extras Page. " + e.getMessage());
			Assert.fail("Unable to Verify dock header details in the Tariff and Extras Page." + e.getMessage());
			Screenshots.captureScreenshot();
		}

	}

	public static void verifyBasecommPromotionalElementsAreDisplayedInTariffsAndExtrasPage()
			throws InterruptedException, IOException {
		log.debug("Running verifyBasecommPromotionalElementsAreDisplayedInTariffsAndExtrasPage function");

		try {
			pageobjects.PhonesListingPage.DockHeader_AccessoriesLink.click();
			Thread.sleep(1000);
			pageobjects.PhonesListingPage.DockHeader_ChooseYourTariffLink.click();
			Thread.sleep(1000);

			if (pageobjects.PhonesListingPage.BaseComm_RecommendedTariff_Section.getAttribute("class")
					.contains("tariff ng-scope promoted-tariff promoted-at-first no-promotion-exists")) {

				log.debug("Recommended Tariff section is enabled");
				if (pageobjects.PhonesListingPage.BaseComm_RecommendedTariff_PromotionLabel.getText()
						.contains("Our recommended tariff")) {
					log.debug("Recommended Tariff Promotion is getting displayed");
				} else {
					log.debug("Recommended Tariff Promotion is not displayed");
				}
			} else {
				log.debug("Recommended Tariff section is not enabled");
			}
			Screenshots.captureScreenshot();
		} catch (AssertionError e) {
			log.debug("Unable to Verify dock header details in the Tariff and Extras Page. " + e.getMessage());
			Assert.fail("Unable to Verify dock header details in the Tariff and Extras Page." + e.getMessage());
			Screenshots.captureScreenshot();
		}

	}

	public static void verifyViewAllTariffsLinkEnabled() throws IOException {
		log.debug("Running verifyViewAllTariffsLinkEnabled function");

		try {
			if (pageobjects.PhonesListingPage.BaseComm_TariffsAndExtras_ViewAllTariffLink.isEnabled()) {
				log.debug("View All Tariffs Link is enabled in the Tariffs and Extras Page");
			} else {
				log.debug("View All Tarifss Link is not enabled in the Tariffs and Extras Page");
			}
			Screenshots.captureScreenshot();
		} catch (AssertionError e) {
			log.debug("Unable to find View All Tariffs link in the Tariff and Extras Page. " + e.getMessage());
			Assert.fail("Unable to find View All Tariffs link in the Tariff and Extras Page." + e.getMessage());
			Screenshots.captureScreenshot();
		}
	}

	public static void verifyPayForYourDeviceInFullLinkEnabled() throws IOException {
		log.debug("Running verifyPayForYourDeviceInFullLinkEnabled function");

		try {
			if (pageobjects.PhonesListingPage.BaseComm_PayForYourDeviceInFull_Link.isEnabled()) {
				log.debug("Pay For Your device in full Link is enabled in the Tariffs and Extras Page");
				JavascriptExecutor js = (JavascriptExecutor) driver;
				js.executeScript("arguments[0].click();",
						pageobjects.PhonesListingPage.BaseComm_PayForYourDeviceInFull_Link);
				Thread.sleep(5000);
				if (pageobjects.PhonesListingPage.BaseComm_PayForYourDeviceInFull_Section.isDisplayed()) {
					log.debug("Pay for your device in full section is getting displayed successfully");
				} else {
					log.debug("Pay for your device in full section is not getting displayed");
				}
			} else {
				log.debug(
						"Pay for your device in full Link and corresponding section is not enabled in the Tariffs and Extras Page");
			}
			Screenshots.captureScreenshot();
		} catch (Exception e) {
			log.debug(
					"Pay for your device in full Link and corresponding section is not enabled in the Tariff and Extras Page. "
							+ e.getMessage());
			Assert.fail(
					"Pay for your device in full Link and corresponding section is not enabled in the Tariff and Extras Page"
							+ e.getMessage());
			Screenshots.captureScreenshot();
		}
	}

	public static void verifyAllSectionsDisplayedInTariffsAndExtrasPage() throws IOException {
		log.debug("Running verifyAllSectionsDisplayedInTariffsAndExtrasPage function");

		try {
			if (pageobjects.PhonesListingPage.BaseComm_ChosseYourTariff_Section.isDisplayed()) {
				log.debug("Choose Your Tariff section is displayed in the Tariffs and Extras Page");
			}

			if (pageobjects.PhonesListingPage.BaseComm_ChooseYourExtras_Section.isDisplayed()) {
				log.debug("Choose Your Extras section is displayed in the Tariffs and Extras Page");
			}
			if (pageobjects.PhonesListingPage.BaseComm_YourPackage_Section.isDisplayed()) {
				log.debug("Choose Your Package section is displayed in the Tariffs and Extras Page");
			} else {
				log.debug("Expected sections are not displayed in the Tariffs and Extras Page");
			}
			Screenshots.captureScreenshot();
		} catch (Exception e) {
			log.debug("Expected sections are not displayed in the Tariffs and Extras Page. " + e.getMessage());
			Assert.fail("Expected sections are not displayed in the Tariffs and Extras Page" + e.getMessage());
			Screenshots.captureScreenshot();
		}
	}

	public static void verifyClickAndCollectDeliveryWorks() throws IOException {
		log.debug("Running verifyClickAndCollectDeliveryWorks function");

		try {
			pageobjects.PhonesListingPage.BaseComm_ClickAndCollect_Delivery_Option.click();
			log.debug("clickAndCollect is Selected");
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
			log.debug("Click and Collect Delivery Option works as expected");
			Screenshots.captureScreenshot();
		} catch (Exception e) {
			log.debug("Click and Collect Delivery Option is not working as expected " + e.getMessage());
			Assert.fail("Click and Collect Delivery Option is not working as expected" + e.getMessage());
			Screenshots.captureScreenshot();
		}
	}

	public static void addGivenAccessory() throws InterruptedException, IOException {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		log.debug("addGivenAccessory() method");
		log.debug("The Accessory which will be added is  - "
				+ pageobjects.PAYMandPAYGTariffAndExtrasPage.AddRandomAccessory.getText());
		try {
			int loop = 0;
			WebElement ele0 = pageobjects.PAYMandPAYGTariffAndExtrasPage.AccessoryContainer;
			log.debug("The element is " + ele0.getText());
			if (ele0 != null) {
				log.debug("selecting accessories");
				List<WebElement> DataContainer = pageobjects.PAYMandPAYGTariffAndExtrasPage.Add_AccessoryContainer;
				int size = DataContainer.size();
				AccessoryContainerSize = size;
				log.debug("DAtacontainer size : " + AccessoryContainerSize);
				int u = 0;
				if (AccessoryContainerSize < 6) {
					log.debug("Datacontainer size less than 6");
					SelectedAccessoryCount = AccessoryContainerSize;
					for (int i = 0; i < AccessoryContainerSize; i++) {
						// log.debug(driver.findElements(By.xpath("//*[@id='accessoryTile_']")).get(i).getText());
						Thread.sleep(2000);
						DataContainer.get(0).click();
						Thread.sleep(3000);
						log.debug("Selected accessories");
					}
				} else if (AccessoryContainerSize > 6) {
					SelectedAccessoryCount = 6;
					log.debug("DAtacontainer size greater than 6");
					for (int i = 0; i < 6; i++) {
						DataContainer.get(0).click();
						Thread.sleep(3000);
						log.debug("Selected accessories");
					}
				}
			}
			Screenshots.captureScreenshot();
		} catch (Exception e) {
			log.debug("No accessories found");
			Assert.fail("No accessories found");
			Screenshots.captureScreenshot();
		}
		Thread.sleep(2000);
		log.debug("Added a random accessory to basket");
	}

	public static void verifySortOrderInsurance() throws Exception {
		log.debug("getCurrentSortOrderInsurance");
		Thread.sleep(4000);

		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,80)", "");
		Thread.sleep(2000);
		Screenshots.captureScreenshot();

		List<Double> AfterSort = new ArrayList<Double>();
		List<Double> BeforeSort = new ArrayList<Double>();
		String sTemp = null;
		double iTemp = 0;

		List<WebElement> InsurancePriceElement = driver
				.findElements(By.xpath("(//div[@id='insuranceContainer']/div/div[3]/p[@class='price'])[1]"));
		FirstInsurancePrice = InsurancePriceElement.get(0).getText();

		for (WebElement temp : InsurancePriceElement) {
			sTemp = temp.getText().replace("£", "");
			iTemp = Double.parseDouble(sTemp);
			BeforeSort.add(iTemp);
		}

		log.debug("before sort");
		log.debug(BeforeSort);

		Collections.sort(BeforeSort);
		for (int i = 0; i < BeforeSort.size(); i++) {
			AfterSort.add(BeforeSort.get(i));
		}

		log.debug("After sort");
		log.debug(AfterSort);
		for (int i = 0; i < BeforeSort.size(); i++) {
			if (BeforeSort.get(i).equals(AfterSort.get(i))) {
				log.debug("Insurance is sorted correctly in ascending order");
			} else {
				Assert.fail("Insurance displayed is not in correct order");
			}

		}
		log.debug("FirstInsurancePrice " + FirstInsurancePrice);
		Screenshots.captureScreenshot();
	}

	public static void verifyFreeInsuranceAutoSelected() throws Exception {
		log.debug("verifyFreeInsuranceAutoSelected");

		WebElement FirstInsurancePrice = driver.findElement(By.xpath("(//div[@id='insuranceContainer']/div/div[3]/p[@class='price'])[1]"));
		if (FirstInsurancePrice.getText().contains("0.00")) {
			log.debug("Free insurance is present");
		}
		WebElement FirstInsuranceText = driver.findElement(By.xpath("//h4[contains(@class, 'insuranceName')][1]"));
		if (FirstInsuranceText.getText().equals("Free Insurance")) {
			log.debug("Free insurance is present");
		}
		List<WebElement> RemovebtnFirstTile = driver
				.findElement(By.xpath("(//div[@id='insuranceContainer']/div[@id])[1]"))
				.findElements(By.xpath("//input[@value='Remove'][@type='button']"));
		if (RemovebtnFirstTile.size() > 0) {

			log.debug("Free Insurance is autoselected");
		} else {
			//Assert.fail("Free Insurance not autoselected");
			log.debug("Remove button is not present");
		}
		/*
		 * log.debug("Going to select first insurance");
		 *
		 * driver.findElement( By.xpath(
		 * "(//div[@id='insuranceContainer']/div[@id])[1]//input[@value='Select'][@type='button']"
		 * )) .click(); log.debug("Selected first insurance");
		 *
		 * Thread.sleep(3000); log.debug("First insurance price text is " +
		 * FirstInsurancePrice.getText());
		 */
		Thread.sleep(3000);
		Screenshots.captureScreenshot();

	}

	public static void deselectAutoSelectedInsurance() throws Exception {
		log.debug("deselectAutoSelectedInsurance");

		List<WebElement> RemovebtnFirstTile = driver.findElements(
				By.xpath("(//div[@id='insuranceContainer']/div[@id])[1]//input[@value='Remove'][@type='button']"));
		if (RemovebtnFirstTile.size() > 0) {
			log.debug("First tile is selected");
			js.executeScript("arguments[0].click();", RemovebtnFirstTile.get(0));
			log.debug("deselected free insurance");
		} else {
			log.debug("No remove button");
		}
		Screenshots.captureScreenshot();
	}

	public static void verifyCheapestInsurance() throws Exception {
		String TempCheapInsurance = null, ExpAddInsuranceText = null;
		TempCheapInsurance = FirstInsurancePrice;
		String ActualAddInsuranceText = null;

		if (TempCheapInsurance.equals("£0.00")) {
			ExpAddInsuranceText = "Add now";
			ActualAddInsuranceText = driver.findElement(By.xpath("//input[@class='button secondary']"))
					.getAttribute("value");
			log.debug("ActualAddInsuranceText " + ActualAddInsuranceText);
		} else {
			//TempCheapInsurance = StringUtils.substringBefore(FirstInsurancePrice, ".");
			ExpAddInsuranceText = "Add for " + TempCheapInsurance + "a month";
			ExpAddInsuranceText = ExpAddInsuranceText.replace(" ", "");
			ActualAddInsuranceText = driver.findElement(By.xpath("//input[@class='button secondary']"))
					.getAttribute("value").replace(" ", "").trim().replace("\n", "");
			log.debug("ActualAddInsuranceText " + ActualAddInsuranceText);
		}

		log.debug("ExpAddInsuranceText" + ExpAddInsuranceText);
		if (ActualAddInsuranceText.equals(ExpAddInsuranceText)) {
			log.debug("cheapeast insurance is displayed in add button");
		} else {
			//Assert.fail("cheapeast insurance is not displayed in add button");
		}
		Screenshots.captureScreenshot();
	}

	public static void verifyAddNowButtonDisplayed() throws IOException {
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,200)", "");
		Screenshots.captureScreenshot();
		List<WebElement> AddInsuranceButton = driver.findElements(By.xpath("//input[@class='button secondary']"));
		if (AddInsuranceButton.size() > 0) {
			log.debug("Add insurance button is present");
			if (AddInsuranceButton.get(0).getText().contains(FirstInsurancePrice)) {
				log.debug("Text inside Add button is " + AddInsuranceButton.get(0).getText());
			}
		} else {
			log.debug("Add now button is not present");
		}
		Screenshots.captureScreenshot();
	}

	public static void clickOnAddNow() throws Exception {
		List<WebElement> AddInsuranceButton = driver.findElements(By.xpath("//input[@class='button secondary']"));
		if (AddInsuranceButton.size() > 0) {
			driver.findElement(By.xpath("//input[@class='button secondary']")).click();
			Thread.sleep(6000);
			log.debug("Clicked on Add Insurance button");
		} else {
			Assert.fail("Add now button is not present");
		}
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,600)", "");
		Screenshots.captureScreenshot();
	}

	public static void SortFilterPosition() throws InterruptedException, IOException {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		log.debug("Entering SortFilterPosition method");

		Screenshots.captureScreenshot();

		if (pageobjects.PAYMandPAYGTariffAndExtrasPage.FilterandSortLabel.isDisplayed()) {
			log.debug("Filter label is displayed");
			Thread.sleep(4000);
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,100)", "");
			Screenshots.captureScreenshot();
			jse.executeScript("window.scrollBy(0,-200)", "");
			String text1 = pageobjects.PAYMandPAYGTariffAndExtrasPage.FilterandSortLabel.getText();

			log.debug("Validating Tariff is : " + text1);
			if (text1.contains("Sort")) {
				log.debug("Section is containing both Sort tariff and Filter");
			} else {
				log.debug("Section doesnot contains both Sort tariff and Filter");
				Assert.fail("Section doesnot contains both Sort tariff and Filter");
			}
		}

		Thread.sleep(2000);
		log.debug("Sort filter position validation worked fine");
		//scrollToAnElement.scrollToElement(pageobjects.PAYMandPAYGTariffAndExtrasPage.FilterandSortLabel);
		//Screenshots.captureScreenshot();
	}

	public static void selectFilter(String range) throws IOException, InterruptedException {
		Thread.sleep(4000);

		List<WebElement> filtersCount = driver.findElements(By.xpath("//div[@class='filter-options']/button | //div[@class='filter-options tariff-page']/button"));
		Thread.sleep(2000);
		log.debug("There are " + filtersCount.size() + " filter ranges \n");
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		//jse.executeScript("window.scrollBy(0,-200)", "");
		Thread.sleep(2000);
		Screenshots.captureScreenshot();


		if (range.equals("low")) {
			jse.executeScript("arguments[0].click();", pageobjects.PAYMandPAYGTariffAndExtrasPage.lowfilter);
			log.debug("Clicked on low range filter");
			/*JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,200)", "");*/
			Screenshots.captureScreenshot();
		}
		if (range.equals("medium")) {
			jse.executeScript("arguments[0].click();", pageobjects.PAYMandPAYGTariffAndExtrasPage.mediumfilter);
			log.debug("Clicked on medium range filter");
			/*JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,200)", "");*/
			Screenshots.captureScreenshot();
		}
		if (range.equals("high")) {
			jse.executeScript("arguments[0].click();", driver.findElement(By.xpath("//div[@class='filter-options']/button[" + filtersCount.size() + "] | //div[@class='filter-options tariff-page']/button[" + filtersCount.size() + "]")));
			log.debug("Clicked on high range filter");
			/*js.executeScript("arguments[0].click();", pageobjects.PAYMandPAYGTariffAndExtrasPage.highfilter);
			scrollToAnElement.scrollToElement(PAYMandPAYGTariffAndExtrasPage.highfilter);*//*
			JavascriptExecutor jse = (JavascriptExecutor) driver;*/
			//jse.executeScript("window.scrollBy(0,100)", "");
			Screenshots.captureScreenshot();
		}
		jse.executeScript("window.scrollBy(0,120)", "");
		Thread.sleep(2000);
		Screenshots.captureScreenshot();
		jse.executeScript("window.scrollBy(0,-200)", "");
	}

	public static ArrayList<Integer> getDataListBeforeSelectingFilter() throws IOException, InterruptedException {
		Thread.sleep(4000);
		List<WebElement> DataTextElement = PAYMandPAYGTariffAndExtrasPage.DataTextElement;
		//scrollToAnElement.scrollToElement(driver.findElement(By.xpath("//div[@id='tariff-tile']//ul/li[1]/h2 | //div[@class='col-xs-6 col-sm-3 dmt-container info-container']//ul/li[1]/h2 | //div[@class='box clearfix']/div[1]/div[2]/div/span")));
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,200)", "");
		Thread.sleep(4000);
		Screenshots.captureScreenshot();


		ArrayList<Integer> datalist = new ArrayList<Integer>();
		String data = null, tempdata = null;
		int a = 0;
		log.debug("size " + DataTextElement.size());
		for (int i = 0; i < DataTextElement.size(); i++) {
			data = DataTextElement.get(i).getText();
			log.debug("data " + data);
			if (data.contains("MB")) {
				tempdata = StringUtils.substringBetween(data, "", "MB");
				a = NumberUtils.toInt(tempdata);
				log.debug("a " + a);
				datalist.add(a);
			}
			if (data.contains("GB")) {
				tempdata = StringUtils.substringBetween(data, "", "GB");
				log.debug("tempdata " + tempdata);
				a = NumberUtils.toInt(tempdata);
				a = a * 1024;
				log.debug("a " + a);
				datalist.add(a);
			}

		}
		Thread.sleep(4000);
		log.debug('\n');

		log.debug("----------------------Data List before selecting filter--------------");
		for (int i = 0; i < datalist.size(); i++) {
			log.debug(datalist.get(i));

		}
		log.debug("---------------------------------------------");

		jse.executeScript("window.scrollBy(0,-200)", "");
		Screenshots.captureScreenshot();
		return datalist;
	}

	public static ArrayList<Integer> getDataListAfterSelectingFilter() throws IOException, InterruptedException {
		Thread.sleep(5000);
		List<WebElement> DataTextElement = PAYMandPAYGTariffAndExtrasPage.DataTextElement;

		String data = null, tempdata = null;
		int a = 0;

		for (int i = 0; i < DataTextElement.size(); i++) {
			data = DataTextElement.get(i).getText();
			log.debug("data " + data);
			if (data.contains("MB")) {
				tempdata = StringUtils.substringBetween(data, "", "MB");
				a = NumberUtils.toInt(tempdata);
				log.debug("a " + a);
				datalistafter.add(a);
			}
			if (data.contains("GB")) {
				tempdata = StringUtils.substringBetween(data, "", "GB");
				// log.debug("tempdata " + tempdata);
				a = NumberUtils.toInt(tempdata);
				a = a * 1024;
				log.debug("a " + a);
				if (a != 0) {
					datalistafter.add(a);
				}
			}
		}

		log.debug('\n');
		log.debug("----------------------Data List after selecting filter--------------");
		for (int i = 0; i < datalistafter.size(); i++) {
			log.debug(datalistafter.get(i));

		}
		log.debug("---------------------------------------------");
		Screenshots.captureScreenshot();
		return datalistafter;
	}

	public static ArrayList<Integer> getMonthlyCostListAfterSelectingFilter() throws IOException {
		List<WebElement> MonthlyCostTextElement = pageobjects.PAYMandPAYGTariffAndExtrasPage.MonthlyCostTextElement;
		ArrayList<Integer> MonthlyCostlist = new ArrayList<Integer>();
		String data = null;
		int a = 0;

		for (int i = 0; i < MonthlyCostTextElement.size(); i++) {
			data = MonthlyCostTextElement.get(i).getText();
			data = StringUtils.substringBetween(data, "£", ".");
			a = NumberUtils.toInt(data);
			MonthlyCostlist.add(a);
		}

		log.debug('\n');

		log.debug("----------------------Monthly Cost List after selecting filter--------------");
		for (int i = 0; i < MonthlyCostlist.size(); i++) {
			log.debug(MonthlyCostlist.get(i));

		}
		log.debug("---------------------------------------------");
		Screenshots.captureScreenshot();
		return MonthlyCostlist;
	}

	public static ArrayList<Integer> getUpfrontCostListAfterSelectingFilter() throws IOException {
		List<WebElement> UpfrontCostTextElement = pageobjects.PAYMandPAYGTariffAndExtrasPage.UpfrontTextElement;
		ArrayList<Integer> UpfrontCostlist = new ArrayList<Integer>();
		String data = null;
		int a = 0;

		for (int i = 0; i < UpfrontCostTextElement.size(); i++) {
			data = UpfrontCostTextElement.get(i).getText();
			data = StringUtils.substringBetween(data, "£", ".");
			a = NumberUtils.toInt(data);
			UpfrontCostlist.add(a);
		}

		log.debug('\n');

		log.debug("----------------------Upfront Cost List after selecting filter--------------");
		for (int i = 0; i < UpfrontCostlist.size(); i++) {
			log.debug(UpfrontCostlist.get(i));

		}
		log.debug("---------------------------------------------");
		Screenshots.captureScreenshot();
		return UpfrontCostlist;
	}

	public static void getRange() throws IOException {
		String datafiltertext = null;
		String a = null;
		int part = 0;
		datafiltertext = PAYMandPAYGTariffAndExtrasPage.DataFilterSelectedXpath.getText();

		if (datafiltertext.contains("-")) {
			String[] parts = datafiltertext.split("-");

			for (int e = 0; e < parts.length; e++) {
				if (parts[e].contains("MB")) {
					a = StringUtils.substringBetween(parts[e], "", "MB");
					log.debug("a " + a);
					part = NumberUtils.toInt(a);
					log.debug("part[ " + e + "]" + part);
				} else if (parts[e].contains("GB")) {
					a = StringUtils.substringBetween(parts[e], "", "GB");
					log.debug("a " + a);
					part = NumberUtils.toInt(a);
					part = part * 1024;
					log.debug("part[ " + e + "]" + part);
				}
				datafilterlist.add(part);
			}
		} else if (datafiltertext.contains("+")) {

			datafiltertext = datafiltertext.replace("+", "");
			if (datafiltertext.contains("MB")) {
				a = StringUtils.substringBetween(datafiltertext, "", "MB");

				HighFilterGreater = NumberUtils.toInt(a);
				log.debug("HighFilterGreater " + HighFilterGreater);

			} else if (datafiltertext.contains("GB")) {
				a = StringUtils.substringBetween(datafiltertext, "", "GB");

				HighFilterGreater = NumberUtils.toInt(a);
				HighFilterGreater = HighFilterGreater * 1024;
				log.debug("HighFilterGreater " + HighFilterGreater);
			}
		}
		Screenshots.captureScreenshot();
	}

	public static void getValuesToCompare() throws IOException {

		log.debug("---------------------------");
		int j = 0;
		for (int i = 0; i < datafilterlist.size(); i = i + 2) {
			j = i + 1;

			start.add(datafilterlist.get(i));
			end.add(datafilterlist.get(j));
		}
		for (int i = 0; i < start.size(); i++) {
			log.debug("start " + start.get(i));
			log.debug("end " + end.get(i));
		}

		log.debug("---------------------------");
		Screenshots.captureScreenshot();

	}

	public static void getValuesToCompareWhenGreaterIsSelected() throws IOException {
		start.add(HighFilterGreater);
		Screenshots.captureScreenshot();

	}

	public static void verifyListWhenGreaterIsSelected() throws IOException {
		boolean flag = false;
		for (int s = 0; s < datalistafter.size(); s++) {
			flag = datalistafter.get(s) >= start.get(0);
		}
		if (flag == false) {
			log.debug("Failed");
		} else {
			log.debug("Works fine");
		}
		Screenshots.captureScreenshot();
	}

	public static void verifyList() throws IOException {
		log.debug("verifyList");
		boolean flag = false;
		for (int s = 0; s < datalistafter.size(); s++) {
			flag = datalistafter.get(s) >= start.get(0) && datalistafter.get(s) <= end.get(0);
		}
		if (flag == false) {
			log.debug("Failed");
		} else {
			log.debug("Works fine");
		}
		Screenshots.captureScreenshot();
	}

	public static void selectTariffSort(String tariffSortDropDown) throws Exception {
		// TODO Auto-generated method stub
		Thread.sleep(5000);
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		//jse.executeScript("window.scrollBy(0,200)", "");
		Screenshots.captureScreenshot();
		WebElement element = pageobjects.PAYMandPAYGTariffAndExtrasPage.TariffSortDropDown;

		jse.executeScript("arguments[0].setAttribute('style', 'display:block;')", element);
		if (element.isDisplayed()) {
			new Select(element).selectByVisibleText(tariffSortDropDown);
			log.debug("Sorted: " + tariffSortDropDown);
		}
		Thread.sleep(2000);
		jse.executeScript("window.scrollBy(0,120)", "");
		Thread.sleep(3000);
		Screenshots.captureScreenshot();
		jse.executeScript("window.scrollBy(0,-200)", "");

		Thread.sleep(5000);
	}

	public static void clickViewAllTariffs() throws IOException, InterruptedException {
		Thread.sleep(5000);
		List<WebElement> ViewAllTariffs = pageobjects.PAYMandPAYGTariffAndExtrasPage.ViewAllTariffs;
		if (ViewAllTariffs.size() > 0) {
			Thread.sleep(5000);
			if (driver.findElement(By.xpath("(//div[@class='viewAllTariffs'])[1]")).isDisplayed()) {
				//js.executeScript("arguments[0].click();", ViewAllTariffs.get(0));
				js.executeScript("arguments[0].click();", driver.findElement(By.xpath("(//div[@class='viewAllTariffs'])[1]")));

				log.debug("Clicked on View All Tariffs link in Tariffs and Extras page");
			} /*else if (driver.findElement(By.xpath("//div[@class='viewAllTariffs'])[2]")).isDisplayed()) {
				//js.executeScript("arguments[0].click();", ViewAllTariffs.get(0));
				js.executeScript("arguments[0].click();", driver.findElement(By.xpath("//div[@class='viewAllTariffs'])[2]")));

				log.debug("Clicked on View All Tariffs link in Tariffs and Extras page");
			}*/ else {
				log.debug("View All Tariffs link is not present");
			}
		}
		Screenshots.captureScreenshot();
	}

	////////////////////////////////////////////////////////////////////////////////////////
	/////////////// FilterDataAllowance
	//////////////////////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////

	public static void FilterDataAllowance(String Filteroption) throws IOException {

		if (Filteroption.contains("low")) {

			log.debug("Clicking on 1st Filter Data Allowance");
			PAYMandPAYGTariffAndExtrasPage.DataTariff_One.click();
			log.debug("Clicking on 1st  Filter Data Allowance");
		} else if (Filteroption.contains("medium")) {
			log.debug("Clicking on 2nd Filter Data Allowance");
			PAYMandPAYGTariffAndExtrasPage.DataTariff_Two.click();
			log.debug("Clicking on 2nd Filter Data Allowance");
		} else if (Filteroption.contains("high")) {
			log.debug("Clicking on 3rd Filter Data Allowance");
			PAYMandPAYGTariffAndExtrasPage.DataTariff_Three.click();
			log.debug("Clicking on 3rd Filter Data Allowance");
		} else {
			log.debug("No filter options displayed");
		}
		Screenshots.captureScreenshot();

	}

	public static void VerifyFilterDataTabPresent() throws IOException {

		List<WebElement> DataFilterTab = driver
				.findElements(By.xpath("//*[@class='choose-tariff-section section']/div[4]"));

		if (DataFilterTab.size() < 0) {
			log.debug("The data filter is displyed next to the sort option" + DataFilterTab);

		}
		Assert.fail("Data filter Tab is not displayed");
		Screenshots.captureScreenshot();

	}

	public static void SelectedState(String Filteroption) throws InterruptedException, IOException {
		Thread.sleep(4000);
		Screenshots.captureScreenshot();
		String DatafilterText = pageobjects.PAYMandPAYGTariffAndExtrasPage.DataFilterSelectedXpath.getText();
		log.debug("DatafilterText " + DatafilterText);

		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,120)", "");
		Screenshots.captureScreenshot();
		Thread.sleep(2000);


		List<WebElement> filtersCount = driver.findElements(By.xpath("//div[@class='filter-options']/button | //div[@class='filter-options tariff-page']/button"));

		if (Filteroption.contains("low")) {
			// PAYMandPAYGTariffAndExtrasPage.DataTariff_One.getText();
			String DataFilterLowText = PAYMandPAYGTariffAndExtrasPage.lowfilter.getText();
			log.debug("DataFilterLowText " + DataFilterLowText);
			if (DataFilterLowText.equals(DatafilterText)) {
				log.debug("Data filter option is selected");
			} else {
				Assert.fail("Data filter is not selected");
			}
		}

		if (Filteroption.contains("medium")) {
			// PAYMandPAYGTariffAndExtrasPage.DataTariff_Two.getText();
			String DataFilterMediumText = PAYMandPAYGTariffAndExtrasPage.mediumfilter.getText();
			log.debug("DataFilterMediumText " + DataFilterMediumText);

			if (DataFilterMediumText.equals(DatafilterText)) {
				log.debug("Data filter option is selected");
			} else {
				Assert.fail("Data filter is not selected");
			}
		}

		if (Filteroption.contains("high")) {
			// PAYMandPAYGTariffAndExtrasPage.DataTariff_Three.getText();
			//String DataFilterHighText = PAYMandPAYGTariffAndExtrasPage.highfilter.getText();

			String DataFilterHighText = driver.findElement(By.xpath("//div[@class='filter-options']/button[" + filtersCount.size() + "] | //div[@class='filter-options tariff-page']/button[" + filtersCount.size() + "]")).getText();
			log.debug("DataFilterHighText " + DataFilterHighText);

			if (DataFilterHighText.equals(DatafilterText)) {
				log.debug("Data filter option is selected");
			} else {
				Assert.fail("Data filter is not selected");
			}
		} else {

			log.debug("Data Filter not Selected");
		}
		Screenshots.captureScreenshot();
		jse.executeScript("window.scrollBy(0,-200)", "");

	}

	public static void DeSelectedState() throws InterruptedException, IOException {
		Thread.sleep(5000);

		//pageobjects.PAYMandPAYGTariffAndExtrasPage.DataFilterSelectedXpath.click();
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", pageobjects.PAYMandPAYGTariffAndExtrasPage.DataFilterSelectedXpath);
		Thread.sleep(3000);
		Screenshots.captureScreenshot();

		log.debug("Deselected the selected data filter tab");
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,120)", "");
		Thread.sleep(3000);
		Screenshots.captureScreenshot();
		jse.executeScript("window.scrollBy(0,-200)", "");

	}

	public static ArrayList<Integer> getCurrentSortOrderUsingMonthlyData() throws IOException, InterruptedException {
		log.debug("Executing getCurrentSortOrderUsingMonthlyData ()");

		List<WebElement> DataTextElement = pageobjects.PAYMandPAYGTariffAndExtrasPage.DataTextElement;
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,200)", "");
		Thread.sleep(3000);
		Screenshots.captureScreenshot();
		jse.executeScript("window.scrollBy(0,-250)", "");
		ArrayList<Integer> tariffListUsingMonthlyData = new ArrayList<Integer>();
		String data = null, tempdata = null;
		int a = 0;
		log.debug("size " + DataTextElement.size());
		for (int i = 0; i < DataTextElement.size(); i++) {
			data = DataTextElement.get(i).getText();
			log.debug("data " + data);
			if (data.contains("MB")) {
				tempdata = StringUtils.substringBetween(data, "", "MB");
				a = NumberUtils.toInt(tempdata);
				log.debug("a " + a);
				tariffListUsingMonthlyData.add(a);
			}
			if (data.contains("GB")) {
				tempdata = StringUtils.substringBetween(data, "", "GB");
				log.debug("tempdata " + tempdata);
				a = NumberUtils.toInt(tempdata);
				a = a * 1024;
				log.debug("a " + a);
				if (a != 0) {
					tariffListUsingMonthlyData.add(a);
				}
			}

		}

		log.debug('\n');

		log.debug("----------------------Original List--------------");
		for (int i = 0; i < tariffListUsingMonthlyData.size(); i++) {
			log.debug(tariffListUsingMonthlyData.get(i));

		}
		log.debug("---------------------------------------------");
		//Screenshots.captureScreenshot();
		return tariffListUsingMonthlyData;
	}

	public static ArrayList<Integer> getCurrentSortOrderUsingMonthlyCost() throws IOException {
		List<WebElement> DataTextElement = pageobjects.PAYMandPAYGTariffAndExtrasPage.MonthlyCostTextElement;
		//scrollToAnElement.scrollToElement(driver.findElement(By.xpath("//div[@id='tariff-tile' or @class='col-xs-6 col-sm-3 info-container price-block-container']//div[@class='price-block']/div[@class='col-xs-6 monthly']/h2/span[1]")));
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,200)", "");
		Screenshots.captureScreenshot();

		ArrayList<Integer> tariffListUsingMonthlyCost = new ArrayList<Integer>();
		String data = null;
		int a = 0;

		for (int i = 0; i < DataTextElement.size(); i++) {
			data = DataTextElement.get(i).getText();
			data = StringUtils.substringBetween(data, "£", ".");
			a = NumberUtils.toInt(data);
			if (a != 0) {
				tariffListUsingMonthlyCost.add(a);
			}

		}
		//Screenshots.captureScreenshot();
		return tariffListUsingMonthlyCost;
	}

	public static ArrayList<Integer> getCurrentSortOrderUsingUpfrontCost() throws IOException {
		List<WebElement> DataTextElement = pageobjects.PAYMandPAYGTariffAndExtrasPage.UpfrontTextElement;
		//scrollToAnElement.scrollToElement(driver.findElement(By.xpath("//div[@id='tariff-tile']//div[@class='price-block']/div[@class='col-xs-6 upfront']/h2/span[2]")));
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,200)", "");
		Screenshots.captureScreenshot();
		ArrayList<Integer> tariffListUsingMonthlyUpfront = new ArrayList<Integer>();
		String data = null;
		int a = 0;

		for (int i = 0; i < DataTextElement.size(); i++) {
			data = DataTextElement.get(i).getText();
			data = StringUtils.substringBetween(data, "£", ".");
			a = NumberUtils.toInt(data);
			if (a != 0) {
				tariffListUsingMonthlyUpfront.add(a);
			}

		}
		//Screenshots.captureScreenshot();
		return tariffListUsingMonthlyUpfront;
	}

	public static ArrayList<Integer> reArrangeListInAcendingBeforeApplyingSort(ArrayList<Integer> OriginalList)
			throws IOException, InterruptedException {

		ArrayList<Integer> ListBeforeApplyingSort = OriginalList;
		// listSortEx(ListBeforeApplyingSort, false);

		Collections.sort(ListBeforeApplyingSort);
		log.debug("-List arranged in ascending Order-\n");
		log.debug(ListBeforeApplyingSort);
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,-200)", "");
		Thread.sleep(4000);
		Screenshots.captureScreenshot();
		return ListBeforeApplyingSort;

	}

	public static ArrayList<Integer> reArrangeListInDescendingBeforeApplyingSort(ArrayList<Integer> OriginalList) throws IOException, InterruptedException {

		ArrayList<Integer> ListBeforeApplyingSort = OriginalList;
		Collections.sort(ListBeforeApplyingSort, Collections.reverseOrder());
		/*JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,-200)", "");*/
		Thread.sleep(3000);
		Screenshots.captureScreenshot();
		return ListBeforeApplyingSort;

		// Collections.sort(list);
		// Collections.reverse(list);
	}

	public static void verifyTariffSortedAsPerSortOption(ArrayList<Integer> ListBeforeApplyingSort,
														 ArrayList<Integer> ListAfterApplyingSort) throws IOException {

		try {

			ArrayList<Integer> TempListBeforeApplyingSort = ListBeforeApplyingSort;
			ArrayList<Integer> TempListAfterApplyingSort = ListAfterApplyingSort;

			for (int i = 0; i < TempListBeforeApplyingSort.size(); i++) {
				Assert.assertTrue("Assert Failed: Tariff list is not sorted as expected",
						TempListBeforeApplyingSort.get(i).equals(TempListAfterApplyingSort.get(i)));
				log.debug("Assertion Success: Tariffs have been sorted successfully based on Sort Option");
			}

			log.debug("Assertion Success: Tariffs have been sorted successfully based on Sort Option");
			Screenshots.captureScreenshot();
		} catch (AssertionError e) {
			log.debug("Assertion Failed: Tariffs are not sorted based on Sort Option ");
			log.debug("Fail" + " - " + e.getMessage());
			Screenshots.captureScreenshot();
		}

	}

	//Jamal----- Bill Spend Caps section----

	public static void Validate_BillSpendCap(String BSCstatus) {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,-100)", "");
			Screenshots.captureScreenshot();

			if (BSCstatus.equalsIgnoreCase("Enabled")) {
				Thread.sleep(4000);
				if (driver.findElements(By.xpath("//div[contains(text(),'Your Spend Cap')] | //div/p/span[contains(text(),'Your Spend Cap')] | (//div/h2[contains(normalize-space(),'Your Spend Cap')])[1]")).size() > 0) {
					log.debug("Bill spend cap section is enabled");
					jse.executeScript("window.scrollBy(0,200)", "");
					Screenshots.captureScreenshot();

					log.debug("Bill spend cap section is enabled ie:" + PAYMandPAYGTariffAndExtrasPage.SpendCapSection.getText());
					Thread.sleep(4000);
					//Spend cap header text validation
					String sepenCapHeaderTxt = PAYMandPAYGTariffAndExtrasPage.SpendCapHeader.getText();
					Thread.sleep(4000);
					if (sepenCapHeaderTxt.contains("Would you like to add a Spend Cap")) {
						System.out.println("Would you like to add a spend cap ? -header text is displayed");
						log.debug("Would you like to add a spend cap ? - header text is displayed");
					} else {
						log.debug("Would you like to add a spend cap ? - header text is not displayed");
						Assert.fail("Would you like to add a spend cap ? - header text is not displayed");
					}
					Thread.sleep(2000);

					//scrollToAnElement.scrollToElement(PAYMandPAYGTariffAndExtrasPage.SpendCapHeader);
					//Screenshots.captureScreenshot();

					//Info Text
					if (pageobjects.PAYMandPAYGTariffAndExtrasPage.Info1Text.isDisplayed()) {
						log.debug("Info text is displayed after selecting your bill cap: " + pageobjects.PAYMandPAYGTariffAndExtrasPage.Info1Text.getText());
					}
					Thread.sleep(3000);
					//Bill Cap overlay
					PAYMandPAYGTariffAndExtrasPage.CapMyBillOverlay.click();
					log.debug("BSC overlay icon is clicked");
					Thread.sleep(4000);
					Screenshots.captureScreenshot();

					if (driver.findElements(By.xpath("//div[@class='bscOverlay']")).size() > 0) {
						String CapMyBillOverlayTxt = PAYMandPAYGTariffAndExtrasPage.CapMyBillOverlayTxt.getText();
						Thread.sleep(3000);

						System.out.println("Bill Spend Cap OverLay Icon Text is displayed and ie : " + CapMyBillOverlayTxt);
						log.debug("Bill Spend Cap OverLay Icon Text is displayed and ie : " + CapMyBillOverlayTxt);
						Thread.sleep(2000);
						//closing overlay
						JavascriptExecutor executor = (JavascriptExecutor) driver;
						executor.executeScript("arguments[0].click();", PAYMandPAYGTariffAndExtrasPage.CapMyBillOverlayPopupClose);
						Thread.sleep(3000);
					}

					if (pageobjects.PAYMandPAYGTariffAndExtrasPage.CapMyBillButton.isEnabled()) {
						log.debug("Cap My Bill button is Displayed/Enabled :: " + PAYMandPAYGTariffAndExtrasPage.CapMyBillButton.getText());
					} else {
						log.debug("Cap My Bill button is not Displayed/Enabled");
						Assert.fail("Cap My Bill button is not Displayed/Enabled");
					}

					if (pageobjects.PAYMandPAYGTariffAndExtrasPage.DontCapMyBillButton.isEnabled()) {
						log.debug("Don't Cap My Bill button is Displayed/Enabled :: " + PAYMandPAYGTariffAndExtrasPage.DontCapMyBillButton.getText());
					} else {
						log.debug("Don't Cap My Bill button is not Displayed/Enabled");
						Assert.fail("Don't Cap My Bill button is not Displayed/Enabled");
					}

				} else {
					System.out.println("Bill Spend Cap section is not displayed.\n");
					log.debug("Bill Spend Cap section is not displayed.\n");
					Assert.fail("Bill Spend Cap section is not displayed.\n");
				}
			} else if (BSCstatus.equalsIgnoreCase("Disabled")) {
				jse.executeScript("window.scrollBy(0,200)", "");
				Screenshots.captureScreenshot();
				if (driver.findElements(By.xpath("//div[contains(text(),'Your Spend Cap')] | //div/p/span[contains(text(),'Your Spend Cap')] | (//div/h2[contains(normalize-space(),'Your Spend Cap')])[1]")).size() > 0) {
					log.debug("Bill spend cap section is enabled it suppose to be in disabled mode for disabled status");
					Assert.fail("Bill spend cap section is enabled it suppose to be in disabled mode for disabled status");
				} else {
					log.debug("As expected, Bill spend cap section is disabled");
				}
			} else {
				System.out.println("Unable to validate bill spend cap section \n");
				log.debug("Unable to validate bill spend cap section \n");
				Assert.fail("Unable to validate bill spend cap section \n");
			}

			Thread.sleep(4000);

		} catch (Exception e) {
			log.debug("Unable to validate bill spend cap section :: " + e);
			Assert.fail("Unable to validate bill spend cap section :: " + e);
		}

	}

	public static void add_BillSpendCap(String BillCap, String CapAmount, String BSCstatus) {

		String BillCapStatus = "";
		int cnt = 0;
		try {
			Thread.sleep(6000);
			if (BSCstatus.equalsIgnoreCase("Enabled")) {
				if (driver.findElements(By.xpath("//div[contains(text(),'Your Spend Cap')] | //div/p/span[contains(text(),'Your Spend Cap')] | (//div/h2[contains(normalize-space(),'Your Spend Cap')])[1]")).size() > 0) {
					log.debug("Bill spend cap section is enabled");
					if (BillCap.equalsIgnoreCase("CapMyBill")) {
						Thread.sleep(2000);
						if (pageobjects.PAYMandPAYGTariffAndExtrasPage.CapMyBillButton.isDisplayed()) {
							pageobjects.PAYMandPAYGTariffAndExtrasPage.CapMyBillButton.click();
							log.debug("Clicked on 'Cap My Bill Option'");
						}

						Thread.sleep(3000);
						JavascriptExecutor jse = (JavascriptExecutor) driver;
						jse.executeScript("window.scrollBy(0,300)", "");
						Screenshots.captureScreenshot();
						if (pageobjects.PAYMandPAYGTariffAndExtrasPage.capProsTop.isDisplayed()) {
							log.debug("Info text of cap pros-cons is displayed after clicking on your bill cap CTA : \n");
							log.debug("------------------------------------------------------------------------------\n");
							log.debug("Info text of cap pros-cons top : " + pageobjects.PAYMandPAYGTariffAndExtrasPage.capProsTop.getText() + "\n");
							Thread.sleep(2000);
							log.debug("Info text of cap pros : " + pageobjects.PAYMandPAYGTariffAndExtrasPage.capPros.getText() + "\n");
							Thread.sleep(2000);
							log.debug("Info text of cap Cons : " + PAYMandPAYGTariffAndExtrasPage.capCons.getText() + "\n");
							Thread.sleep(2000);
							log.debug("Info text of cap Cons : " + PAYMandPAYGTariffAndExtrasPage.capProsBottom.getText() + "\n");
						}

						Thread.sleep(2000);

						/*//CapAmountHeader- Select cap:
						scrollToAnElement.scrollToElement(pageobjects.PAYMandPAYGTariffAndExtrasPage.capProsTop);
						Thread.sleep(2000);
						Screenshots.captureScreenshot();*/

						//Finding all cap amounts and listing them
						List<WebElement> capAmountslist = driver.findElements(By.xpath("//div[@class='caps-holder']/div/a"));
						log.debug("Cap amount list is displayed and it's size is: " + capAmountslist.size() + "\n");
						if (capAmountslist.size() > 0) {
							log.debug("Cap Bolton header is ::" + PAYMandPAYGTariffAndExtrasPage.capBoltonHeader.getText());
							log.debug("Cap Bolton list Contains following bolton values::\n");
							log.debug("--------------------------------------------------\n");
							for (WebElement ele : capAmountslist) {
								log.debug("\n" + ele.getText());
							}
						} else {
							log.debug("Cap amount list is not displayed");
							Assert.fail("Cap amount list is not displayed");
						}

						//Cap My bill Continue button under Bill spend cap section Before selecting cap amount
						if (BSCRetainedFlag == true) {
							log.debug("Cap My Bill button is Enabled as it already selected cap amount and trying to change BSC cap option by clicking edit link");
						} else if (pageobjects.PAYMandPAYGTariffAndExtrasPage.CapMyBillContinueButton.isEnabled() && BSCRetainedFlag == false) {
							log.debug("Cap My Bill button is Enabled before selecting cap amount");
							Assert.fail("Cap My Bill button is Enabled before selecting cap amount");
						} else {
							log.debug("As expected Cap My Bill button is disabled before selecting Cap Amount");
						}

						//Selecting specified cap amount or clicking on Dont Cap My Bill Link
						if (CapAmount.equalsIgnoreCase("DontCapMyBillLink")) {
							pageobjects.PAYMandPAYGTariffAndExtrasPage.DontCapMyBillLink.click();
							log.debug("Dont cap my bill link is clicked");
							Thread.sleep(3000);
							/*JavascriptExecutor jse = (JavascriptExecutor) driver;
							jse.executeScript("window.scrollBy(0,100)", "");*/
							Screenshots.captureScreenshot();
							Thread.sleep(5000);
							String consumerStatusMsg = "", upgradeStatusMsg = "";
							if (driver.findElements(By.xpath("//div[@class='largeTitle']/p | //div[@class='build-spend-caps-container']/p | //div[@class='build-spend-caps-container main-container']/p")).size() > 0) {
								if (pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapStatusMsg.isDisplayed()) {
									consumerStatusMsg = pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapStatusMsg.getText();
									Thread.sleep(3000);
									log.debug("Status Message: " + consumerStatusMsg + "\n");
								}
							}

							if (driver.findElements(By.xpath("//div[@class='build-spend-caps-container']/p[2] | (//div[@class='selection-details'])[1]/p | //div[@class='build-spend-caps-container main-container']/p")).size() > 0) {
								if (pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapUpgradeStatusMsg.isDisplayed()) {
									upgradeStatusMsg = pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapUpgradeStatusMsg.getText();
									Thread.sleep(3000);
									log.debug("Status Message: " + upgradeStatusMsg + "\n");
								}
							}
							if (consumerStatusMsg.contains("not to add a Spend Cap") || upgradeStatusMsg.contains("not to add a Spend Cap")) {
								log.debug("Status message is validated successfully for Don't Cap My Bill option");
							} else {
								log.debug("Status message is not matching for Don't Cap My Bill option ");
							}

						} else {
							//Selecting specified cap amount
							JavascriptExecutor executor = (JavascriptExecutor) driver;
							log.debug("Specified Cap amount is selecting");
							for (WebElement ele : capAmountslist) {
								if (ele.getText().contains(CapAmount)) {
									executor.executeScript("arguments[0].click();", ele);
									log.debug("Specified Cap amount is selected, ie:" + CapAmount);
									cnt++;
									break;
								}
							}

							Thread.sleep(4000);
							if (cnt == 0) {
								log.debug("Bill Spend Cap list does not contain specified cap amount and your Bill cap is not selected ie:: " + CapAmount);
								Assert.fail("Bill Spend Cap list does not contain specified cap amount and your Bill cap is not selected ie:: " + CapAmount);
							}
							//Selected cap Info
							jse.executeScript("window.scrollBy(0,100)", "");
							Screenshots.captureScreenshot();

							String SelectedBillCapInfo = pageobjects.PAYMandPAYGTariffAndExtrasPage.InforAfterCapAmount.getText();
							Thread.sleep(2000);
							log.debug("Your selected Cap is :: " + SelectedBillCapInfo);

							//Cap My bill Continue button under Bill spend cap section After selecting cap amount
							if (pageobjects.PAYMandPAYGTariffAndExtrasPage.CapMyBillContinueButton.isEnabled()) {
								log.debug("As expected Cap My Bill Continue button is disabled before selecting Cap Amount \n");
								pageobjects.PAYMandPAYGTariffAndExtrasPage.CapMyBillContinueButton.click();
								log.debug("Cap My Bill Continue button is clicked \n");
							} else {
								log.debug("Cap My Bill Continue button is Enabled before selecting cap amount");
								Assert.fail("Cap My Bill Continue button is Enabled before selecting cap amount");
							}

							Thread.sleep(5000);

							//Selected BillCap Status Message
							Screenshots.captureScreenshot();
							Thread.sleep(4000);
							String consumerStatusMsg = "", upgradeStatusMsg = "";

							if (driver.findElements(By.xpath("//div[@class='largeTitle']/p | //div[@class='build-spend-caps-container']/p | //div[@class='build-spend-caps-container main-container']/p")).size() > 0) {
								if (pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapStatusMsg.isDisplayed()) {
									consumerStatusMsg = pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapStatusMsg.getText();
									Thread.sleep(3000);
									log.debug("Status Message: " + consumerStatusMsg + "\n");
								}
							}
							if (driver.findElements(By.xpath("//div[@class='build-spend-caps-container']/p[2] | (//div[@class='selection-details'])[1]/p | //div[@class='build-spend-caps-container main-container']/p")).size() > 0) {
								if (pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapUpgradeStatusMsg.isDisplayed()) {
									upgradeStatusMsg = pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapUpgradeStatusMsg.getText();
									Thread.sleep(3000);
									log.debug("Status Message: " + upgradeStatusMsg + "\n");
								}
							}
							Thread.sleep(2000);
							if (consumerStatusMsg.contains("You’ve got a Spend Cap set at") || consumerStatusMsg.contains("Your bill has been capped at") || upgradeStatusMsg.contains("You’ve got a Spend Cap set at") || upgradeStatusMsg.contains("Your bill has been capped at")) {
								log.debug("Status message is validated successfully for your Bill Cap");
							} else {
								log.debug("Status message is not matching for your Bill Cap \n");
							}
						}
					} else if (BillCap.equalsIgnoreCase("DontCapMyBill")) {

						if (CapAmount.equalsIgnoreCase("DontCapMyBillLink")) {
							pageobjects.PAYMandPAYGTariffAndExtrasPage.DontCapMyBillLink.click();
							log.debug("Dont cap my bill link is clicked");
							Thread.sleep(4000);
						} else {
							pageobjects.PAYMandPAYGTariffAndExtrasPage.DontCapMyBillButton.click();
							log.debug("Clicked on Don't Cap My Bill Option/CTA");
							Thread.sleep(4000);
						}
						Screenshots.captureScreenshot();
						String consumerStatusMsg = "", upgradeStatusMsg = "";

						if (driver.findElements(By.xpath("//div[@class='largeTitle']/p | //div[@class='build-spend-caps-container']/p | //div[@class='build-spend-caps-container main-container']/p")).size() > 0) {
							if (pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapStatusMsg.isDisplayed()) {
								consumerStatusMsg = pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapStatusMsg.getText();
								Thread.sleep(2000);
								log.debug("Status Message: " + consumerStatusMsg + "\n");
							}
						}
						if (driver.findElements(By.xpath("//div[@class='build-spend-caps-container']/p[2] | (//div[@class='selection-details'])[1]/p | //div[@class='build-spend-caps-container main-container']/p")).size() > 0) {
							if (pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapUpgradeStatusMsg.isDisplayed()) {
								upgradeStatusMsg = pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapUpgradeStatusMsg.getText();
								Thread.sleep(2000);
								log.debug("Status Message: " + upgradeStatusMsg + "\n");
							}
						}
						if (consumerStatusMsg.contains("not to add a Spend Cap") || upgradeStatusMsg.contains("not to add a Spend Cap")) {
							log.debug("Status message is validated successfully for Don't Cap My Bill option");
						} else {
							log.debug("Status message is not matching for Don't Cap My Bill option ");
						}
					}
					Thread.sleep(2000);
				}
			} else if (BSCstatus.equalsIgnoreCase("Disabled")) {
				if (driver.findElements(By.xpath("//div[contains(text(),'Your Spend Cap')] | //div/p/span[contains(text(),'Your Spend Cap')] | (//div/h2[contains(normalize-space(),'Your Spend Cap')])[1]")).size() > 0) {
					log.debug("Bill spend cap section is enabled it suppose to be in disabled mode for disabled status");
					Assert.fail("Bill spend cap section is enabled it suppose to be in disabled mode for disabled status");
				} else {
					log.debug("As expected, Bill spend cap section is disabled");
				}
			} else {
				System.out.println("Unable to validate bill spend cap section \n");
				log.debug("Unable to validate bill spend cap section \n");
				Assert.fail("Unable to validate bill spend cap section \n");
			}
			/*JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,150)", "");*/
			Screenshots.captureScreenshot();
		} catch (Exception e) {
			log.debug("Unable to cap the bill :: " + e);
			Assert.fail("Unable to cap the bill :: " + e);
		}
	}

	//Jamal----- ValidateAndClickEditLink----

	public static void validateBSCEditLink() {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			log.debug("We are at page :" + driver.getTitle() + "\n");

			scrollToAnElement.scrollToElement(PAYMandPAYGTariffAndExtrasPage.BillCapEditLink);
			Screenshots.captureScreenshot();

			if (driver.findElements(By.xpath("//div[@class='largeTitle']/h2/a | //section[@id='billSpendCapSection']/a[normalize-space()='Edit Spend Cap'] | //span[contains(text(),'2. Your Spend Cap')]/../a | (//div[contains(text(),'3. Your Spend Cap')])[3]/../div[@class='edit-link']")).size() > 0) {
				log.debug("BSC Edit option is displayed at Bill Spend Cap section: " + pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapEditLink.getText());

			} else {
				log.debug("BSC Edit option is not displayed Bill Spend Cap section\n");
			}
			Thread.sleep(2000);

		} catch (Exception e) {
			log.debug("Unable to validate BSC edit link :: " + e);
			Assert.fail("Unable to validate BSC edit link :: " + e);
		}

	}

	public static void validateTariffEditLink() {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

			if (driver.findElements(By.xpath("//a[normalize-space()='Change tariff'] | //div[@class='spentstariff']/div[2]/a | //a[@class='edit-your-plan']")).size() > 0) {
				log.debug("Tariff Edit option is displayed after selecting tariff \n");

			} else {
				log.debug("Tariff Edit option is not displayed after selecting tariff \n");
			}
			Thread.sleep(2000);

		} catch (Exception e) {
			log.debug("Unable to validate Tariff edit link :: " + e);
			Assert.fail("Unable to validate Tariff edit link :: " + e);
		}

	}

	//Jamal----- ClickEditLink----

	public static void clickBSCEditLink() {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

			if (driver.findElements(By.xpath("//div[@class='largeTitle']/h2/a | //section[@id='billSpendCapSection']/a[normalize-space()='Edit Spend Cap'] | //span[contains(text(),'2. Your Spend Cap')]/../a | (//div[contains(text(),'3. Your Spend Cap')])[3]/../div[@class='edit-link']")).size() > 0) {
				JavascriptExecutor jse = (JavascriptExecutor) driver;
				jse.executeScript("window.scrollBy(0,-200)", "");
				Thread.sleep(2000);
				Screenshots.captureScreenshot();

				log.debug("Clicking on BSC Edit link");
				PAYMandPAYGTariffAndExtrasPage.BillCapEditLink.click();
				log.debug("BSC Edit link is clicked \n");
			}

		} catch (Exception e) {
			log.debug("Unable to click on BSC edit link :: " + e);
			Assert.fail("Unable to click on BSC edit link :: " + e);
		}
	}

	public static void clickTariffEditLink() {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			if (driver.findElements(By.xpath("//a[normalize-space()='Change tariff'] | //div[@class='spentstariff']/div[2]/a | //a[@class='edit-your-plan']")).size() > 0) {
				log.debug("We are at the page: " + driver.getTitle() + "\n");
				log.debug("Clicking on Tariff Edit link");
				PAYMandPAYGTariffAndExtrasPage.TariffEditLink.click();
				log.debug("Tariff Edit link is clicked \n");
				BSCRetainedFlag = false;
			}

		} catch (Exception e) {
			log.debug("Unable to click on Tariff edit link :: " + e);
			Assert.fail("Unable to click on Tariff edit link :: " + e);
		}
	}

	//Jamal----- statusAfterEditClicked----

	public static void statusAfterBSCEditClicked(String BillCap, String CapAmount) throws InterruptedException {
		Thread.sleep(7000);
		try {
			driver.manage().timeouts().implicitlyWait(12, TimeUnit.SECONDS);

			//Previous tariff selection status should not be retained
			if (BillCap.equalsIgnoreCase("CapMyBill")) {
				if (CapAmount.equalsIgnoreCase("DontCapMyBillLink")) {
					String consumerStatusMsg = "", upgradeStatusMsg = "";

					if (driver.findElements(By.xpath("//div[@class='largeTitle']/p | //div[@class='build-spend-caps-container']/p")).size() > 0) {
						if (pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapStatusMsg.isDisplayed()) {
							consumerStatusMsg = pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapStatusMsg.getText();
							Thread.sleep(2000);
							log.debug("Status Message: " + consumerStatusMsg + "\n");
						}else{
							log.debug("Status Message after edit link clicked is not displayed \n");
						}
					}

					if (driver.findElements(By.xpath("//div[@class='build-spend-caps-container']/p[1] | (//div[@class='selection-details'])[1]/p")).size() > 0) {
						if (pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapUpgradeStatusMsg.isDisplayed()) {
							upgradeStatusMsg = pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapUpgradeStatusMsg.getText();
							Thread.sleep(2000);
							log.debug("Status Message: " + upgradeStatusMsg + "\n");
						}else{
							log.debug("Status Message after edit link clicked is not displayed \n");
						}
					}

					if (consumerStatusMsg.contains("not to add a Spend Cap") || upgradeStatusMsg.contains("not to add a Spend Cap")) {
						log.debug("Status message for DontCapMyBill link option is present after clicking on BSC Edit link \n");
						Assert.fail("Status message for DontCapMyBill link option is present after clicking on BSC Edit link \n");
					} else {
						log.debug("Status message for DontCapMyBill link option has been removed after clicking on BSC Edit link \n");
					}

				} else {
					JavascriptExecutor jse = (JavascriptExecutor) driver;
					jse.executeScript("window.scrollBy(0,100)", "");
					Screenshots.captureScreenshot();
					BSCRetainedFlag = driver.findElement(By.xpath("//div[@class='caps-holder']/div/a[contains(text(),'" + CapAmount + "')]")).isSelected();
					Thread.sleep(2000);
					String selectedCap = driver.findElement(By.xpath("//div[@class='caps-holder']/div/a[@class='capButton selected']")).getText();
					Thread.sleep(3000);
					if (BSCRetainedFlag == true || selectedCap.contains(CapAmount)) {
						log.debug("Status message for CapMyBill option is present/retained after clicking on BSC Edit link\n");
						BSCRetainedFlag = true;
					} else {
						log.debug("Status message for CapMyBill option has been removed after clicking on BSC Edit link \n");
						//Assert.fail("Status message for CapMyBill option has been removed after clicking on BSC Edit link \n");
					}
				}
			} else if (BillCap.equalsIgnoreCase("DontCapMyBill")) {
				String consumerStatusMsg = "", upgradeStatusMsg = "";

				if (driver.findElements(By.xpath("//div[@class='largeTitle']/p | //div[@class='build-spend-caps-container']/p")).size() > 0) {
					if (pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapStatusMsg.isDisplayed()) {
						consumerStatusMsg = pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapStatusMsg.getText();
						Thread.sleep(2000);
						log.debug("Status Message: " + consumerStatusMsg + "\n");
					}
				}

				if (driver.findElements(By.xpath("//div[@class='build-spend-caps-container']/p[2] | (//div[@class='selection-details'])[1]/p")).size() > 0) {
					if (pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapUpgradeStatusMsg.isDisplayed()) {
						upgradeStatusMsg = pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapUpgradeStatusMsg.getText();
						Thread.sleep(2000);
						log.debug("Status Message: " + upgradeStatusMsg + "\n");
					}
				}

				if (consumerStatusMsg.contains("not to add a Spend Cap") || upgradeStatusMsg.contains("not to add a Spend Cap")) {
					log.debug("Status message for DontCapMyBill link option is present after clicking on BSC Edit link ie,: " + pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapStatusMsg.getText() + "\n");
					Assert.fail("Status message for DontCapMyBill link option is present after clicking on BSC Edit link ie,: " + pageobjects.PAYMandPAYGTariffAndExtrasPage.BillCapStatusMsg.getText() + "\n");
				} else {
					log.debug("Status message for DontCapMyBill link option has been removed after clicking on BSC Edit link \n");
				}
			}
		} catch (Exception e) {
			log.debug("Unable to validate status after clicking on BSC edit link :: " + e);
			Assert.fail("Unable to validate status after clicking on BSC edit link :: " + e);
		}

	}

	public static void packageOptionsPage() throws InterruptedException, IOException {
		Thread.sleep(8000);
		Screenshots.captureScreenshot();
		log.debug("We are at :"+driver.getTitle()+" Page \n");
		Thread.sleep(2000);
		log.debug("The current URL is: "+driver.getCurrentUrl());

	}

}
