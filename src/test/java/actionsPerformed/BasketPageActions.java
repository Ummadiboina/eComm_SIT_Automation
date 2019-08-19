package actionsPerformed;

import java.awt.*;
import java.io.IOException;
import java.util.*;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import GlobalActions.scrollToAnElement;
import helpers.getOperatingSystemAndBrowserDetails;
import org.apache.log4j.Logger;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.google.common.base.Function;

import GlobalActions.Screenshots;
import helpers.Environment;
import helpers.Filereadingutility;
import org.testng.Assert;
import pageobjects.BasketPage;
import pageobjects.UpgradeCustomerPage;
import steps.Hooks;

import org.openqa.selenium.Point;
import org.openqa.selenium.interactions.Actions;

public class BasketPageActions extends Environment {

	final static Logger log = Logger.getLogger("BasketPageActions");
	public static String upFrontValue="";

	public static void validatelabel() throws InterruptedException, IOException {
		log.debug(" ");
		log.debug("Verifying Shop basket pages");
		log.debug("Verifying Shop basket pages");

		if (pageobjects.BasketPage.DeviceRemovebtn.getText().contains("Remove")) {
			log.debug("The Device_Remove_Link is Present and the Text is :"
					+ pageobjects.BasketPage.DeviceRemovebtn.getText());
			log.debug("The Device_Remove_Link is Present and the Text is :"
					+ pageobjects.BasketPage.DeviceRemovebtn.getText());

		} else {
			log.debug("The Device_Remove_Link is Absent and the Text is :"
					+ pageobjects.BasketPage.DeviceRemovebtn.getText());
			log.debug("The Device_Remove_Link is Absent and the Text is :"
					+ pageobjects.BasketPage.DeviceRemovebtn.getText());

		}
		Thread.sleep(5000);

		if (pageobjects.BasketPage.tariffRemovebtn.getText().contains("Remove")) {
			log.debug("The Tarrif_Remove_link is Present and the Text is :"
					+ pageobjects.BasketPage.tariffRemovebtn.getText());
			log.debug("The Tarrif_Remove_link is Present and the Text is :"
					+ pageobjects.BasketPage.tariffRemovebtn.getText());

		} else {
			log.debug("The Tarrif_Remove_link is Absent and the Text is :"
					+ pageobjects.BasketPage.tariffRemovebtn.getText());

			log.debug("The Tarrif_Remove_link is Absent and the Text is :"
					+ pageobjects.BasketPage.tariffRemovebtn.getText());

		}
		Screenshots.captureScreenshot();

	}

	public static void labelvaluedisplay() throws InterruptedException, IOException {

		log.debug("The upfront cost display :"
				+ pageobjects.BasketPage.upfrontcost.getAttribute("data-qa-upfront-total"));

		log.debug("The upfront cost display :"
				+ pageobjects.BasketPage.upfrontcost.getAttribute("data-qa-upfront-total"));

		Thread.sleep(5000);

		log.debug("The monthly cost display :"
				+ pageobjects.BasketPage.monthlycost.getAttribute("data-qa-monthly-total"));
		log.debug("The monthly cost display :"
				+ pageobjects.BasketPage.monthlycost.getAttribute("data-qa-monthly-total"));
		Screenshots.captureScreenshot();

	}

	public static void ValidateBasketPage() throws InterruptedException, IOException {

		log.debug("Shop basket pages validations");

		if (pageobjects.BasketPage.checkoutbtn.getText().contains("Go to checkout")) {
			log.debug(
					"Go To Checkout is Present and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());

			log.debug("Go To Checkout is Present and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());

			pageobjects.BasketPage.checkoutbtn.sendKeys(Keys.ENTER);
		} else {
			log.debug(
					"Go To Checkout is Absent and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());
			log.debug("Go To Checkout is Absent and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());

		}
		Thread.sleep(5000);
		Screenshots.captureScreenshot();

	}

	// Below is for checking the order contract text

	public static void checkOrderContractTextBP() throws IOException {
		String ActOrderContractMsg = pageobjects.BasketPage.OrderContractMessageBP.getText();
		String ExpOrderContractMsg = "Your contract will not start until the order is on its way.";
		log.debug("Act Del MSg" + ActOrderContractMsg);
		log.debug("Exp Del MSg" + ExpOrderContractMsg);

		if (ActOrderContractMsg.matches(ExpOrderContractMsg)) {
			log.debug("ActOrderContractMsg matches ExpOrderContractMsg");
		} else {
			Assert.fail("Order Contract Text does not match");

		}
		Screenshots.captureScreenshot();
	}

	public static void checkOrderContractTextDDPOBP() throws IOException {
		String ActOrderContractMsg = pageobjects.BasketPage.OrderContractMessageDDPOBP1.getText() + '\n'
				+ pageobjects.BasketPage.OrderContractMessageDDPOBP2.getText();
		String ExpOrderContractMsg = "We will deliver the rest of your order as soon as possible." + '\n'
				+ "Your contract will not start until the order is on its way.";
		log.debug("Act Del MSg" + ActOrderContractMsg);
		log.debug("Exp Del MSg" + ExpOrderContractMsg);

		if (ActOrderContractMsg.matches(ExpOrderContractMsg)) {
			log.debug("ActOrderContractMsg matches ExpOrderContractMsg");
		} else {
			Assert.fail("Order Contract Text for DD phone does not match");

		}
		Screenshots.captureScreenshot();
	}

	// Below is for Clicking on the goto Checkout button
	public static void gotoCheckout() throws IOException, InterruptedException {

		Thread.sleep(4000);
		//scrollToAnElement.scrollToElement(BasketPage.YourOrder);
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,300)", "");
		Thread.sleep(2000);
		Screenshots.captureScreenshot();

		jse.executeScript("window.scrollBy(0,300)", "");
		Thread.sleep(2000);
		Screenshots.captureScreenshot();
		String title = driver.getTitle();
		if (title.contains("Thanks for waiting")) {
			log.debug("Queue page is displayed");
			Screenshots.captureScreenshot();
			// Below is example of Fluent wait

			WebDriverWait wait = (WebDriverWait) new FluentWait<WebDriver>(driver).withTimeout(60, TimeUnit.SECONDS)
					.pollingEvery(3, TimeUnit.SECONDS).ignoring(NoSuchElementException.class);

			WebElement checkOutButtonValidation = wait.until(new Function<WebDriver, WebElement>() {
				public WebElement apply(WebDriver driver) {
					return pageobjects.BasketPage.checkoutbtn;
				}

			});

			checkOutButtonValidation.click();
		} else {
			Thread.sleep(4000);
			if (!pageobjects.BasketPage.checkoutbtn.isEnabled()) {
				//Thread.sleep(4000);
				scrollToAnElement.scrollToElement(driver.findElement(By.xpath("//label[@id='noNeedNewSim']")));
				Screenshots.captureScreenshot();

				JavascriptExecutor executor = (JavascriptExecutor) driver;
				executor.executeScript("arguments[0].click();", driver.findElement(By.xpath("//label[@id='noNeedNewSim']")));
				//driver.findElement(By.xpath("//input[@id='noNeedNewSim']")).click();
			}
			Thread.sleep(5000);
			//JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,400)", "");
			Screenshots.captureScreenshot();
			log.debug("Queue page is not displayed");
			WebElement element = pageobjects.BasketPage.checkoutbtn;
			JavascriptExecutor executor = (JavascriptExecutor) driver;
			executor.executeScript("arguments[0].click();", element);

			//pageobjects.BasketPage.checkoutbtn.click();
			log.debug("Clicked on Checkout button");
			Thread.sleep(4000);
		}

		Screenshots.captureScreenshot();

	}

	public static void ValidateBasketPageContents(String Element, String expValue) throws IOException, InterruptedException {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		boolean fname = false;
		log.debug("Shop basket pages validations" + driver.getTitle());

		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,300)", "");
		Thread.sleep(2000);
		Screenshots.captureScreenshot();
		jse.executeScript("window.scrollBy(0,300)", "");
		Thread.sleep(2000);
		Screenshots.captureScreenshot();
		jse.executeScript("window.scrollBy(0,300)", "");
		Thread.sleep(2000);
		Screenshots.captureScreenshot();
		// boolean fname = pageobjects.BasketPage.checkoutbtn.isEnabled();
		if (driver.findElements(By.xpath("(//input[@class='checkout-btn'])[2]|(//input[@name='securecheckout']) | //from[@data-qa-checkout='checkout']")).size() > 0) {
			if (pageobjects.BasketPage.checkoutbtn.isEnabled()) {
				fname = true;
			}
		}

		if (fname != false) {
			log.debug(
					"Checkout is Enabled and Present and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());

			log.debug("Checkout is Present and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());
			log.debug("Checkout is Enabled and Present and the Text is :"
					+ pageobjects.BasketPage.DeviceDetailsDisplay.getText());

		} else {
			log.debug("Go To Checkout is Absent and the Text is :");
		}
		// Below will display contents of the phone section

		log.debug("The Main Headercontents are : " + pageobjects.BasketPage.MainHeaders.getText());

		log.debug("The Phone contents are : " + pageobjects.BasketPage.DeviceDetailsDisplay.getText());

		log.debug("The Basket Totals are : " + pageobjects.BasketPage.totals.getText());

		if (driver.findElements(By.xpath("//div[@class='basket-card delivery-section']")).size() > 0) {
			log.debug("The Home Delivery Text is : " + pageobjects.BasketPage.HomeDeliveryText.getText());
		}


		//if (Element.equalsIgnoreCase("DataRollOver")) {

			/*String actValue = "";

			List<WebElement> actPlnListElm = driver.findElements(By.xpath("//h3[@class='section-parent-header']//following-sibling::p"));

			for(int i = 3;i<=actPlnListElm.size();i++) {
				actValue = actPlnListElm.get(i).getText().replaceAll("\"","").trim() + "|";
			}*/

			//String actPlnListElmTxt = driver.findElement(By.xpath("//h3[@class='section-parent-header']//following-sibling::p")).getText();
			//Thread.sleep(2000);
			//if (actPlnListElmTxt.contains(expValue)) {
				//log.debug("Selected Data Roll over plan details is displayed in Basket page");
			//} else {
				//log.debug("Selected Data Roll over plan details is not displayed in Basket page");
			//}
		//}

		//Screenshots.captureScreenshot();
	}

	public static void BasketContentsforNonConnected() throws IOException {

		try {
			Assert.assertEquals("Your basket", pageobjects.BasketPage.BasketHeaderXXL.getText());
			log.debug("Shop basket pages validations" + driver.getTitle());
			log.debug("BasketHeaderXXL header is " + pageobjects.BasketPage.BasketHeaderXXL.getText());
			Screenshots.captureScreenshot();

		} catch (Exception e) {
			Assert.fail("Unable to find BasketHeaderXXL element in Reference shop Basket page");
			Screenshots.captureScreenshot();
		}

		if (pageobjects.BasketPage.BasketErrorText.getText().contains("out of stock"))

		{
			log.debug("Stock is not available, perhaps out of stock");
			log.debug("Stock is not available, perhaps out of stock");
			Assert.fail("Stock is not available, perhaps out of stock");

		}

		log.debug("The Main Headercontents are : " + pageobjects.BasketPage.MainHeaders.getText());

		log.debug("The Device names is/are : " + pageobjects.BasketPage.AccessoryDetails.getText());

		log.debug("The Device names is/are : " + pageobjects.BasketPage.DeviceHeadingNonConnected.getText());

		// Taking element name and storing it
		String devicename1 = "Text111";

		log.debug("The Device names is/are : " + pageobjects.BasketPage.DeviceQuantityNonConnected.getText());

		log.debug("The Device names is/are : " + pageobjects.BasketPage.DeviceQuantityNonConnected.getText());

		log.debug("The Basket Totals are : " + pageobjects.BasketPage.totals.getText());
		Screenshots.captureScreenshot();

	}

	public static void PlanOnlyPageContents() throws IOException {

		log.debug("Shop basket pages validations ::" + driver.getTitle());

		boolean fname = pageobjects.BasketPage.checkoutbtn.isEnabled();

		if (fname != false) {
			log.debug("Checkout is Enabled and Present");

		} else {

			log.debug("Go To Checkout is Absent and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());

		}
		// Below will display contents of the section

		log.debug("The Main Headercontents are : " + pageobjects.BasketPage.MainHeaders.getText());

		log.debug("The Plan contents are : " + pageobjects.BasketPage.NonAirtimeDetails.getText());

		log.debug("The Basket Totals are : " + pageobjects.BasketPage.totals.getText());

		log.debug("The Basket Totals are : " + pageobjects.BasketPage.HomeDeliveryText.getText());
		Screenshots.captureScreenshot();
	}

	public static void PromoCode(String PromoCode) throws IOException {
		log.debug("Clicking promocode");
		pageobjects.BasketPage.GotaPromoCode.click();
		pageobjects.BasketPage.voucherCode.sendKeys(PromoCode);
		pageobjects.BasketPage.applyVoucher.click();
		Screenshots.captureScreenshot();

	}

	public static void CollectionorDelivery(String elementName) throws InterruptedException, IOException {
		Thread.sleep(6000);
		if (driver.findElements(By.xpath("//*[@id='homeDelivery']")).size() > 0) {
			//if(!BasketPage.checkoutbtn.isDisplayed()){
			if (elementName.contains("homeDelivery")) {
				Thread.sleep(3000);
				boolean b = driver.findElement(By.xpath("//*[@id='homeDelivery']")).isSelected();
				if (!b) {
					pageobjects.BasketPage.HomeDeliverySelect.click();
					// Assert.assertEquals(elementName,"Galaxy S7 is not found");
					log.debug("HomeDelivery is Selected");
					Screenshots.captureScreenshot();
				}
			} else if (elementName.contains("clickAndCollect")) {
				pageobjects.BasketPage.clickAndCollect.click();
				// Assert.assertEquals(elementName,"Galaxy S7 is not found");
				log.debug("click And Collect is Selected");
				log.debug("clickAndCollect radio button is Selected");

				//pageobjects.BasketPage.changestore.click();

				pageobjects.BasketPage.StorePostcode.sendKeys("M4");
				log.debug("PostCode Entered for Search");

				Thread.sleep(4000);
				Screenshots.captureScreenshot();
				Thread.sleep(2000);
				//pageobjects.BasketPage.PostcodeSubmit.click();
				//Thread.sleep(5000);

				JavascriptExecutor jsee = (JavascriptExecutor) driver;
				jsee.executeScript("arguments[0].click();", pageobjects.BasketPage.PostcodeSubmit);
				// Assert.assertEquals(elementName,"Galaxy S7 is not found");
				log.debug("Postcode Submitted for Search");

				Thread.sleep(5000);
				scrollToAnElement.scrollToElement(BasketPage.Collectfromthisstore);
				Thread.sleep(3000);
				//Screenshots.captureScreenshot();
				pageobjects.BasketPage.Collectfromthisstore.click();
				// Assert.assertEquals(elementName,"Galaxy S7 is not found");
				log.debug("Store Selected for Colletion");

				Thread.sleep(5000);

				log.debug("Click on the Add To Basket");
				JavascriptExecutor jse = (JavascriptExecutor) driver;
				jse.executeScript("window.scrollBy(0,600)", "");
				Screenshots.captureScreenshot();
			}
			//}
		}
	}

	public static void checkStoreStockForTradeIn(String elementName) throws InterruptedException, IOException {

		JavascriptExecutor jsee = (JavascriptExecutor) driver;
		if (elementName.contains("homeDelivery")) {
			pageobjects.BasketPage.HomeDeliverySelect.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("HomeDelivery is Selected");
			//log.debug("HomeDelivery is Selected");
			Screenshots.captureScreenshot();

		}
		if (elementName.contains("clickAndCollect")) {
			//pageobjects.BasketPage.checkSoteSotck_TradeIn.click();
			jsee.executeScript("arguments[0].click();", pageobjects.BasketPage.checkSoteSotck_TradeIn);
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("click And Collect is Selected");
			log.debug("clickAndCollect radio button is Selected");
			Thread.sleep(4000);
			pageobjects.BasketPage.StorePostcode.sendKeys("G2");
			log.debug("PostCode Entered for Search");
			Thread.sleep(3000);
			Screenshots.captureScreenshot();
			Thread.sleep(2000);
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("arguments[0].click();", pageobjects.BasketPage.PostcodeSubmit);
			//pageobjects.BasketPage.PostcodeSubmit.click();
			Thread.sleep(5000);
			log.debug("Postcode Submitted for Search");

			scrollToAnElement.scrollToElement(BasketPage.firstStore);
			Thread.sleep(2000);
			Screenshots.captureScreenshot();

			pageobjects.BasketPage.Collectfromthisstore.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Store Selected for Collection");

			Screenshots.captureScreenshot();
			Thread.sleep(7000);

		}
	}

	public static void JuneReleaseBasketContent() throws IOException {

		try {
			Assert.assertEquals("Your basket", pageobjects.BasketPage.BasketHeaderXXL.getText());
			log.debug("Shop basket page header - " + driver.getTitle());
			log.debug("Basket header is - " + pageobjects.BasketPage.BasketHeaderXXL.getText());

		} catch (Exception e) {
			Assert.fail("Unable to find BasketHeaderXXL element in Reference shop Basket page");
		}
		Screenshots.captureScreenshot();
	}

	public static void ValidatePromoCode() throws IOException {
		log.debug("Clicking promocode");
		/*
		 * pageobjects.BasketPage.GotaPromoCode.click();
		 * pageobjects.BasketPage.voucherCode.sendKeys(voucher);
		 * pageobjects.BasketPage.applyVoucher.click();
		 */
		String Ele1 = pageobjects.BasketPage.VoucherMessage.getText();
		if (Ele1.contains("This promo code is invalid")) {
			log.debug("This promo code is invalid");
		} else {
			Assert.fail("Expected message is not displayed for invalid promo code");
		}
		Screenshots.captureScreenshot();

	}

	public static void continueShopping() throws InterruptedException, IOException {
		log.debug("Verifying if the devices selected are in basket");
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,600)", "");
		Screenshots.captureScreenshot();
		pageobjects.BasketPage.ContinueShopping.sendKeys(Keys.ENTER);
		log.debug("Clicked on Continue Shopping in Basket Page");

		Thread.sleep(5000);
		Screenshots.captureScreenshot();
	}

	public static void ValidateContentEcomm11522() throws IOException {

		boolean fname = pageobjects.BasketPage.checkoutbtn.isEnabled();
		if (fname != false) {
			log.debug("Checkout is Enabled and Present");
			log.debug("Checkout is Enabled and Present");

		} else {
			log.debug("Checkout is not Enabled and Present");
			log.debug("Checkout is Not Enabled and Present");
		}

		// Below will display contents of the phone section

		log.debug("The Main Headercontents are : " + pageobjects.BasketPage.MainHeaders.getText());

		log.debug("The device contents are : " + pageobjects.BasketPage.DeviceDetailsDisplay.getText());

		log.debug("The Basket Totals are : " + pageobjects.BasketPage.totals.getText());

		log.debug("The Basket Totals are : " + pageobjects.BasketPage.HomeDeliveryText.getText());
		Screenshots.captureScreenshot();

	}

	public static void verifyNCDRemovedinBasketPageAfterCDSelection() throws IOException {
		log.debug("Opening verifyNCDRemovedinBasketPageAfterCDSelection function");

		String AccessoryName_Before = "";
		String FitnessTrackerName_Before = "";
		String SmartWatchName_Before = "";

		String AccessoryName_After = "";
		String FitnessTrackerName_After = "";
		String SmartWatchName_After = "";

		String RunTimeFilePath = System.getProperty("user.dir") + "\\Configurations\\Properties\\Run.properties";

		try {

			AccessoryName_Before = Filereadingutility.getPropertyValue(RunTimeFilePath, "Accessory");
			FitnessTrackerName_Before = Filereadingutility.getPropertyValue(RunTimeFilePath, "FitnessTracker");
			SmartWatchName_Before = Filereadingutility.getPropertyValue(RunTimeFilePath, "SmartWatch");

			AccessoryName_After = pageobjects.AccessoryPage.AccesoryAfterPhoneSelection.getText();
			FitnessTrackerName_After = pageobjects.AccessoryPage.FitnessTrackerAfterPhoneSelection.getText();
			SmartWatchName_After = pageobjects.AccessoryPage.SmartWatchAfterPhoneSelection.getText();

			Assert.assertFalse(AccessoryName_Before.contains(AccessoryName_After),
					"Assertion Failed: Accessory is not present in the basket page after phone selection");
			log.debug("Assertion Passed: Previous Accessory is present in the basket page after phone selection");

			Assert.assertEquals("Assertion Failed: FitnessTracker is not present in the basket after phone selection",
					FitnessTrackerName_Before.contains(FitnessTrackerName_After));
			log.debug("Assertion Passed:Previous FitnessTracker is present in the basket page after phone selection");

			Assert.assertEquals("Assertion Failed: SmartWatch is not present in the basket after phone selection",
					SmartWatchName_Before.contains(SmartWatchName_After));
			log.debug("Assertion Passed:Previous SmartWatch is present in the basket page after phone selection");

			log.debug("successfully verified the basket section after phone selection");
			Screenshots.captureScreenshot();
		} catch (AssertionError e) {

			log.debug(
					"Assertion failed: Previously selected Non Connected device is present in the Basket section after phone selection"
							+ e.getMessage() + "");
			Screenshots.captureScreenshot();
		}
	}

	public static void verifyDevicesInBasket(String dev1, String dev2, String dev3)
			throws IOException {
		log.debug("Verifying the devices in basket");
		// List<WebElement> MyDevices = pageobjects.BasketPage.DevicesList;

		List<WebElement> MyConnDevices = pageobjects.BasketPage.MyConnDevices;
		List<WebElement> MyNonConnDevices = pageobjects.BasketPage.MyNonConnDevices;
		List<WebElement> MyTariffs = pageobjects.BasketPage.MyTariffs;

		List<String> DisplayedDevices = new ArrayList<>();
		List<String> SelectedDevices = new ArrayList<>();

		SelectedDevices.add(dev1);
		SelectedDevices.add(dev2);
		SelectedDevices.add(dev3);

		log.debug("1" + SelectedDevices.get(0));
		log.debug("2" + SelectedDevices.get(1));
		log.debug("3" + SelectedDevices.get(2));

		log.debug("Conn size" + MyConnDevices.size());
		log.debug("Non Conn size" + MyNonConnDevices.size());
		log.debug("Tariffs size" + MyTariffs.size());

		if (MyNonConnDevices.size() != 0) {
			for (int i = 0; i < MyNonConnDevices.size(); i++) {
				DisplayedDevices.add(MyNonConnDevices.get(i).getText());
				log.debug("Non Conn added: " + MyNonConnDevices.get(i).getText() + "");
			}
		}
		if (MyConnDevices.size() != 0) {
			for (int i = 0; i < MyConnDevices.size(); i++) {
				DisplayedDevices.add(MyConnDevices.get(i).getText());
				log.debug("Conn dev added: " + MyConnDevices.get(i).getText() + "");
			}
		}

		if (MyTariffs.size() != 0) {
			for (int i = 0; i < MyTariffs.size(); i++) {
				DisplayedDevices.add(MyTariffs.get(i).getText());
				log.debug("Tariff added: " + MyTariffs.get(i).getText() + "");
			}
		}
		if (DisplayedDevices.containsAll(SelectedDevices)) {
			log.debug("Selected devices are in basket");
			log.debug("Selected devices are in basket");

		} else {
			for (int k = 0; k > DisplayedDevices.size(); k++) {
				log.debug("Devices in basket are : " + '\n' + DisplayedDevices.get(k) + '\n');
				log.debug("Devices in basket are : " + '\n' + DisplayedDevices.get(k) + '\n');
			}
			Assert.fail("Selected devices are not in basket");
		}
		Screenshots.captureScreenshot();
	}

	public static void verifyDevicesInBasket(String dev1, String dev2) throws IOException, InterruptedException {

		// List<WebElement> MyDevices = pageobjects.BasketPage.DevicesList;
		Thread.sleep(3000);

		List<WebElement> MyConnDevices = pageobjects.BasketPage.MyConnDevices;
		List<WebElement> MyNonConnDevices = pageobjects.BasketPage.MyNonConnDevices;
		List<WebElement> MyTariffs = pageobjects.BasketPage.MyTariffs;

		List<String> DisplayedDevices = new ArrayList<>();
		List<String> SelectedDevices = new ArrayList<>();

		SelectedDevices.add(dev1);
		SelectedDevices.add(dev2);
		log.debug("1st selected device" + SelectedDevices.get(0));
		log.debug("2nd selected device" + SelectedDevices.get(1));

		log.debug("Conn size: " + MyConnDevices.size());
		log.debug("Non Conn size: " + MyNonConnDevices.size());
		log.debug("Tariffs size: " + MyTariffs.size());

		if (MyNonConnDevices.size() != 0) {
			int MyNonConnDevicesSize = MyNonConnDevices.size();
			if (MyNonConnDevicesSize > 2) {
				MyNonConnDevicesSize = MyNonConnDevicesSize - 1;
			}

			for (int i = 0; i < MyNonConnDevicesSize; i++) {
				DisplayedDevices.add(MyNonConnDevices.get(i).getText());
				log.debug("Non Connected device added: " + MyNonConnDevices.get(i).getText());
			}
		}
		if (MyConnDevices.size() != 0) {
			for (int i = 0; i < MyConnDevices.size(); i++) {
				DisplayedDevices.add(MyConnDevices.get(i).getText());
				log.debug("Connected device added: " + MyConnDevices.get(i).getText());
			}
		}
		if (MyTariffs.size() != 0) {
			for (int i = 0; i < MyTariffs.size(); i++) {
				DisplayedDevices.add(MyTariffs.get(i).getText());
				log.debug("Tariff added: " + MyTariffs.get(i).getText() + "");
			}
		}

		//DisplayedDevices.containsAll(SelectedDevices)
		int cnt = 0;

		if (DisplayedDevices.size() != 0) {
			String displayDeviceText = "";
			String selectedDeviceText = "";
			for (int i = 0; i < DisplayedDevices.size(); i++) {
				displayDeviceText = DisplayedDevices.get(i);
				for (int j = 0; j < SelectedDevices.size(); j++) {
					selectedDeviceText = SelectedDevices.get(j);
					if (displayDeviceText.contains(selectedDeviceText)) {
						log.debug("Devices in basket are matching with selected device :: Displayed device is- " + displayDeviceText + " and Selected device is -" + selectedDeviceText);
						cnt++;
					}
				}
			}
		}

		log.debug("count -" + cnt);
		System.out.println("count -" + cnt);

		if (cnt == SelectedDevices.size()) {
			log.debug("Devices in basket are matching with Selected device");
		} else {
			log.debug("Devices in basket are not matching with selected devices");
			Assert.fail("Selected devices are not in basket");
		}

				/*if(DisplayedDevices.containsAll(SelectedDevices)) {
					log.debug("Devices in basket are ");
				}else{
					log.debug("Devices not in basket : ");
					Assert.fail("Selected devices are not in basket");
				}*/

		Screenshots.captureScreenshot();
	}

	public static void verifyDevicesInBasket(String dev1) throws IOException {

		// List<WebElement> MyDevices = pageobjects.BasketPage.DevicesList;

		List<WebElement> MyConnDevices = pageobjects.BasketPage.MyConnDevices;
		List<WebElement> MyNonConnDevices = pageobjects.BasketPage.MyNonConnDevices;
		List<WebElement> MyTariffs = pageobjects.BasketPage.MyTariffs;

		List<String> DisplayedDevices = new ArrayList<>();
		List<String> SelectedDevices = new ArrayList<>();

		SelectedDevices.add(dev1);

		if (MyNonConnDevices.size() != 0) {
			for (int i = 0; i < MyNonConnDevices.size(); i++) {
				DisplayedDevices.add(MyNonConnDevices.get(i).getText());
				log.debug("Non Conn added: " + MyNonConnDevices.get(i).getText());
			}
		}
		if (MyConnDevices.size() != 0) {
			for (int i = 0; i < MyConnDevices.size(); i++) {
				DisplayedDevices.add(MyConnDevices.get(i).getText());
				log.debug("Conn dev added: " + MyConnDevices.get(i).getText());
			}
		}
		if (MyTariffs.size() != 0) {
			for (int i = 0; i < MyTariffs.size(); i++) {
				DisplayedDevices.add(MyTariffs.get(i).getText());
				log.debug("Tariff added: " + MyTariffs.get(i).getText() + "");
			}
		}
		if (DisplayedDevices.containsAll(SelectedDevices)) {
			log.debug("Selected device is in basket");
			log.debug("Selected device is in basket");
		} else {
			for (int k = 0; k > DisplayedDevices.size(); k++) {
				log.debug("Devices in basket are : " + '\n' + DisplayedDevices.get(k) + '\n');

			}
			//Assert.fail("Selected devices are not in basket");
		}
		Screenshots.captureScreenshot();

	}

	public static void InsuranceSectionBasket() throws InterruptedException, IOException {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		log.debug("Entering add InsuranceSectionBasket Method");

		// pageobjects.BasketPage.InsuranceSection.sendKeys(Keys.ENTER);

		if (pageobjects.BasketPage.InsuranceSection.isDisplayed()) {
			log.debug("Insurance is displayed in Basket page and text is  - "
					+ pageobjects.BasketPage.InsuranceSection.getText());

		}

		Thread.sleep(2000);
		log.debug("Completed InsuranceSectionBasket function");

		Screenshots.captureScreenshot();

	}

	public static void InsuranceSectionDeliveryPage() throws InterruptedException, IOException {
		log.debug("Entering InsuranceSectionDeliveryPage Method");

		Thread.sleep(3000);

		if (driver.findElement(By.xpath("//tr[@id='basket-insurance']")).isDisplayed()) {
			log.debug("Insurance is displayed in Delivery page and text is  - "
					+ driver.findElement(By.xpath("//tr[@id='basket-insurance']")).getText());

		} else {
			log.debug("Insurance is not displayed");
		}

		/*
		 * if(pageobjects.DeliveryPage.InsuranceSection.isDisplayed()) {
		 * log.debug("Insurance is displayed in Delivery page and text is  - "
		 * +pageobjects.DeliveryPage.InsuranceSection.getText());
		 *
		 * }
		 */

		Thread.sleep(2000);
		log.debug("Completed InsuranceSectionDeliveryPage function");
		log.debug("Completed InsuranceSectionDeliveryPage function");
		Screenshots.captureScreenshot();

	}

	////////////////////////////// Upgrade Basket
	////////////////////////////// Page///////////////////////////////////////////////

	public static void UpgradeBasketPageYourSim() throws IOException {
		if (pageobjects.BasketPage.DisabledCheckout.isDisplayed()) {
			log.debug("The checkout button is not enabled");
		}else if (pageobjects.BasketPage.EnabledCheckout.isDisplayed()) {
			log.debug("The Checkout button is enabled");
		}
		Screenshots.captureScreenshot();
		//Screenshots.captureScreenshot(Hooks.directoryName);

	}

	public static void UpgradeBasketYourSim() throws IOException {

		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,450)", "");

		if (pageobjects.UpgradeCustomerPage.YourSimSection.isDisplayed()) {
			log.debug("The Your sim section is displayed");
		} else {
			log.debug("The Your sim section is not displayed");
		}

		boolean SelectedY = UpgradeCustomerPage.NeedNewSimRadioButton.isSelected();
		if (SelectedY == true) {
			log.debug("The I need a sim is preselected");
		} else {
			log.debug("I dont need a sim is pre selected");
		}
		Screenshots.captureScreenshot();
		//Screenshots.captureScreenshot(Hooks.directoryName);

	}

	public static void EnterValidPromoCodeDetails(String promoCode) throws IOException, InterruptedException {
		Thread.sleep(5000);
		Screenshots.captureScreenshot();
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,300)", "");
		Screenshots.captureScreenshot();
		//pageobjects.UpgradeCustomerPage.plusAccordion.click();
		//Thread.sleep(4000);
		pageobjects.UpgradeCustomerPage.promoCodeDetails.sendKeys(promoCode);
		log.debug("Promo Code Details entered");
		Thread.sleep(3000);
		Screenshots.captureScreenshot();
		pageobjects.UpgradeCustomerPage.promoCodeSubmit.click();
		log.debug("Submited the promo code");
		Thread.sleep(8000);
		if (UpgradeCustomerPage.AppliedPromoCodeValidation.isDisplayed()) {
			System.out.println(UpgradeCustomerPage.AppliedPromoCodeValidation.getText());
			log.info(UpgradeCustomerPage.AppliedPromoCodeValidation.getText());
		}
		Thread.sleep(2000);

		log.debug("Promo code is validated:: status is: " + pageobjects.UpgradeCustomerPage.promoCodeStatus.getText());
	}


	public static void eMailBasketCFU(String userName) throws InterruptedException {
		Thread.sleep(3000);
		// Selecting an eMail Link
		pageobjects.UpgradeCustomerPage.BasketeMail.sendKeys(userName);
		log.debug("eMail entered to save Basket");
		log.debug("eMail entered to save Basket");
		Thread.sleep(3000);

		/*pageobjects.UpgradeCustomerPage.ReadCaptcha.click();
		log.debug("clicked on captcha to save Basket");
		log.debug("clicked on captcha to save Basket");
		Thread.sleep(3000);
		Screenshots.captureScreenshot();
		pageobjects.UpgradeCustomerPage.emailSubmit.click();
		log.debug("clicked on captcha to save Basket");
		log.debug("clicked on captcha to save Basket");
		Thread.sleep(3000);
*/


	}

	public static void CheckoutNotDisplayed() throws InterruptedException, IOException {

		log.debug("Verifying if checkout page is displayed or not");
		String ActualText = BasketPage.checkoutinProgress.getText();

		log.debug(ActualText);

		String Expected = "You order is in progress";


		if (ActualText.contains(Expected)) {
			Assert.fail("Order in progress page is displayed");
		} else {
			log.debug("Order in progress is not displayed");
		}
		Thread.sleep(5000);
		Screenshots.captureScreenshot();

	}

	//Validating your bill cap in Basket page
	public static void ValidateAppliedBillSpendCapIn_BasketPage(String BillCap, String CapAmount, String BSCstatus) throws InterruptedException, IOException {
		Thread.sleep(5000);
		String AppliedBillCap = "";
		String pageTitle = driver.getTitle();
		scrollToAnElement.scrollToElement(BasketPage.YourOrder);
		Thread.sleep(2000);
		Screenshots.captureScreenshot();
		try {
			if (BSCstatus.equalsIgnoreCase("Enabled")) {
				if (driver.findElements(By.xpath("//div[@class='basket-card basket-spend-cap-wrapper']")).size() > 0) {

					log.debug("Bill spend cap section is displayed at " + pageTitle + " page \n");
					/*scrollToAnElement.scrollToElement(pageobjects.BasketPage.BillSpendCapHeader);
					Screenshots.captureScreenshot();*/
					JavascriptExecutor jse = (JavascriptExecutor) driver;
					//jse.executeScript("window.scrollBy(0,200)", "");
					log.debug("Bill Spend Cap header is displayed in " + pageTitle + " page ie :: " + pageobjects.BasketPage.BillSpendCapHeader.getText());

					log.debug("Basket page Bill spend cap section overlay icon is displayed and clicking on it \n");
					pageobjects.BasketPage.BasketBSCOverlay.click();
					Thread.sleep(3000);
					Screenshots.captureScreenshot();

					String basketBSCOverlayTxt = pageobjects.BasketPage.BasketBSCOverlayTxt.getText();
					Thread.sleep(3000);
					log.debug("Basket page BSC section overlay text:: \n" + basketBSCOverlayTxt);
					log.debug("Basket page BSC section overlay is closing");
					pageobjects.BasketPage.BasketBSCOverlayCloseBtn.click();
					log.debug("Basket page BSC section overlay is closed");
					Thread.sleep(2000);

					AppliedBillCap = pageobjects.BasketPage.AppliedBillCap.getText();
					Thread.sleep(5000);
					if (BillCap.equalsIgnoreCase("CapMyBill")) {

						if (CapAmount.equalsIgnoreCase("DontCapMyBillLink")) {
							if (AppliedBillCap.contains("You've chosen not to add a Spend Cap")) {
								log.debug("'Dont Cap My Bill' is validated successfully for DontCapMyBillLink option selected and cap text is::" + AppliedBillCap);
							} else {
								log.debug("Failed to validate 'Dont Cap My Bill' link option and cap text is::" + AppliedBillCap);
								Assert.fail("Failed to validate 'Dont Cap My Bill' link option  and cap text is::" + AppliedBillCap);
							}
						} else {
							if (AppliedBillCap.contains(CapAmount)) {
								log.debug("Applied bill cap is validated successfully in " + pageTitle + " page ie :: " + AppliedBillCap);
							} else {
								log.debug("Applied bill cap is not present in " + pageTitle + " page is:: " + AppliedBillCap);
								Assert.fail("Applied bill cap is not present in " + pageTitle + " page is:: " + AppliedBillCap);
							}
						}
					} else if (BillCap.equalsIgnoreCase("DontCapMyBill")) {
						if (AppliedBillCap.contains("You've chosen not to add a Spend Cap")) {
							log.debug("'Dont Cap My Bill' is validated successfully and cap text is::" + AppliedBillCap);
						} else {
							log.debug("Failed to validate 'Dont Cap My Bill' and cap text is::" + AppliedBillCap);
							Assert.fail("Failed to validate 'Dont Cap My Bill' and cap text is::" + AppliedBillCap);
						}
					}

				} else {
					log.debug("Bill cap section is not present under order summary section in " + pageTitle + " page");
					Assert.fail("Bill cap section is not present under order summary section in " + pageTitle + " page");
				}
			} else if (BSCstatus.equalsIgnoreCase("Disabled")) {
				if (driver.findElements(By.xpath("//div[@class='basket-card basket-spend-cap-wrapper']")).size() > 0) {
					log.debug("Bill spend cap section is enabled it suppose to be in disabled status in " + pageTitle + " page");
					Assert.fail("Bill spend cap section is enabled it suppose to be in disabled status in " + pageTitle + " page");
				} else {
					log.debug("As expected, Bill spend cap section is disabled in " + pageTitle + " page");
				}
			} else {
				System.out.println("Unable to validate bill spend cap section in " + pageTitle + " page\n");
				log.debug("Unable to validate bill spend cap section in " + pageTitle + " page\n");
				Assert.fail("Unable to validate bill spend cap section in " + pageTitle + " page\n");
			}

		} catch (Exception e) {
			log.debug("Unable to validate Bill cap section in " + pageTitle + " page is:: " + e);
			Assert.fail("Unable to validate Bill cap section in " + pageTitle + " page is:: " + e);
		}
	}

	public static void verifyError(String strError) throws IOException, InterruptedException {
		Thread.sleep(3000);
		try {

			String classicCNCErrorMsg = pageobjects.BasketPage.ErrorText.getText();

			if (classicCNCErrorMsg.contains("not applicable")) {
				log.debug("As expected, the error message is matching\n");
			} else {
				log.debug("No warning message as plan is available for ClickNCollectNow");
				Assert.fail("No warning message as plan is available for ClickNCollectNow");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			log.debug("Unable to validate Incompatible error message");
		}
		Screenshots.captureScreenshot();
	}

	public static void changetariff() throws IOException, InterruptedException {
		Thread.sleep(3000);
		if (driver.findElements(By.xpath("//a[text()='Change tariff']")).size() > 0) {

			pageobjects.BasketPage.changetariff.click();

		} else {
			Assert.fail("Not able to find the Change tarff link in Basket page");
		}

		Screenshots.captureScreenshot();
	}

	//ITFD-662, Digital payment validation By Jamal Khan, May release 2019
	public static void validateDigitalPaymentInBasketPage(String journey, String DPFlag, String DPStatus) {
		try {
			String browserName = getOperatingSystemAndBrowserDetails.getBrowserName();
			String OSName = getOperatingSystemAndBrowserDetails.getOperatingSystemName();

			String paymentCTA = BasketPage.paymentCTA.getText();
			String paymentCopyText = BasketPage.paymentCopyText.getText();
			Screenshots.captureScreenshot();
			scrollToAnElement.scrollToElement(BasketPage.YourOrder);
			Screenshots.captureScreenshot();

			String acceptedPaymentsCopy = BasketPage.acceptedPayments.getText();
			Thread.sleep(1000);
			if (acceptedPaymentsCopy.contains("Accepted payments")) {
				log.debug("As expected, accepted payments heading is displaying\n");
			} else {
				log.debug("Failed, accepted payments heading is not displaying\n");
				Assert.fail("Failed, accepted payments heading is not displaying\n");
			}

			if (OSName.contains("OS_WINDOWS") || OSName.contains("OS_LINUX") || OSName.contains("OS_SOLARIS")) {
				log.debug("We are carrying our journey in Windows/Linux/Solaris system\n");

				if (DPStatus.equalsIgnoreCase("Enabled")) {

					if (driver.findElements(By.xpath("ApplePayDP")).size() > 0) {
						log.debug("Failed: ApplePay digital payment method should be disabled as the journey is performing with Windows system\n");
						Assert.fail("Failed: ApplePay digital payment method should be disabled as the journey is performing with Windows system\n");
					}else{
						log.debug("As expected, ApplePay digital payment method is not displayed in Windows system\n");
					}

					if (DPFlag.equalsIgnoreCase("PayPal") || DPFlag.equalsIgnoreCase("Both")) {
						if (driver.findElements(By.xpath("(//div[@class='expCheckoutblock'])")).size() > 0) {
							log.debug("As expected, PayPal payment method is enabled in Windows system\n");

							//Fast checkout CTA
							if (journey.equalsIgnoreCase("Existing")) {
								if (paymentCTA.contains("Express checkout")) {
									log.debug("As expected, Express checkout copy text is displayed for payment checkout CTA for PayPal option for existing customer journey ie:: "+paymentCTA+"\n");
								} else {
									log.debug("Failed, Express checkout copy text is not displayed for payment checkout CTA for PayPal option for existing customer journey ie:: "+paymentCTA+"\n");
									Assert.fail("Failed, Express checkout copy text is not displayed for payment checkout CTA for PayPal option for existing customer journey ie:: "+paymentCTA+"\n");
								}
							} else {
								if (paymentCTA.contains("Fast checkout")) {
									log.debug("As expected, Fast checkout copy text is displayed for payment checkout CTA for PayPal option ie:: "+paymentCTA+"\n");
								} else {
									log.debug("Failed, Fast checkout copy text is not displayed for payment checkout CTA for PayPal option ie:: "+paymentCTA+"\n");
									Assert.fail("Failed, Fast checkout copy text is not displayed for payment checkout CTA for PayPal option ie:: "+paymentCTA+"\n");
								}
							}

							//Fast checkout copy text
							if (paymentCopyText.contains("Check out faster with PayPal")) {
								log.debug("As expected, Check out faster with PayPal copy is displayed for PayPal option ie:: "+paymentCopyText+"\n");
							} else {
								log.debug("Failed, Check out faster with PayPal copy is not displayed for PayPal option ie:: "+paymentCopyText+"\n");
								Assert.fail("Failed, Check out faster with PayPal copy is not displayed for PayPal option ie:: "+paymentCopyText+"\n");
							}

							//Clicking on Fast checkout CTA for paypal validation
							if (BasketPage.paymentCTA.isEnabled()) {
								BasketPage.paymentCTA.click();
								log.debug("Fast checkout CTA is clicked\n");
								Thread.sleep(35000);
								Screenshots.captureScreenshot();
								//validating fast checkout overlay
								if (BasketPage.fastCheckoutOverlay.isDisplayed()) {
									log.debug("Fast Checkout Overlay header copy is: " + BasketPage.fastCheckoutOverlay.getText());
									String fastCheckoutFirstLineCopy = BasketPage.fastCheckoutFirstLineCopy.getText();
									String fastCheckoutSecondLineCopy = BasketPage.fastCheckoutSecondLineCopy.getText();
									String fastCheckoutThirdLineCopy = BasketPage.fastCheckoutThirdLineCopy.getText();
									String fastCheckoutFourthLineCopy = BasketPage.fastCheckoutFourthLineCopy.getText();
									Thread.sleep(2000);
									if (fastCheckoutFirstLineCopy.equalsIgnoreCase("New to O2? Check out faster by using PayPal for today’s payment.")) {
										log.debug("fastCheckoutFirstLineCopy is matching ie:: "+fastCheckoutFirstLineCopy+"\n");
									} else {
										log.debug("fastCheckoutFirstLineCopy is not matching ie:: "+fastCheckoutFirstLineCopy+"\n");
										Assert.fail("fastCheckoutFirstLineCopy is not matching ie:: "+fastCheckoutFirstLineCopy+"\n");
									}

									if (fastCheckoutSecondLineCopy.equalsIgnoreCase("If your order includes monthly payments, we’ll still need your bank details.")) {
										log.debug("fastCheckoutSecondLineCopy is matching ie:: "+fastCheckoutSecondLineCopy+"\n");
									} else {
										log.debug("fastCheckoutSecondLineCopy is not matching ie:: "+fastCheckoutSecondLineCopy+"\n");
										Assert.fail("fastCheckoutSecondLineCopy is not matching ie:: "+fastCheckoutSecondLineCopy+"\n");
									}

									if (fastCheckoutThirdLineCopy.equalsIgnoreCase("Already on O2? Sign in to complete checkout.")) {
										log.debug("fastCheckoutThirdLineCopy is matching ie:: "+fastCheckoutThirdLineCopy+"\n");
									} else {
										log.debug("fastCheckoutThirdLineCopy is not matching ie:: "+fastCheckoutThirdLineCopy+"\n");
										Assert.fail("fastCheckoutThirdLineCopy is not matching ie:: "+fastCheckoutThirdLineCopy+"\n");
									}

									if (fastCheckoutFourthLineCopy.equalsIgnoreCase("You can still use PayPal for today’s payment.")) {
										log.debug("fastCheckoutFourthLineCopy is matching ie:: "+fastCheckoutFourthLineCopy+"\n");
									} else {
										log.debug("fastCheckoutFourthLineCopy is not matching ie:: "+fastCheckoutFourthLineCopy+"\n");
										Assert.fail("fastCheckoutFourthLineCopy is not matching ie:: "+fastCheckoutFourthLineCopy+"\n");
									}

									//closing Fast checkout Overlay
									log.debug("Fast checkout overlay is closing now\n");
									BasketPage.fastCheckoutOverlayClose.click();
									log.debug("Fast checkout overlay is closed\n");

								} else {
									log.debug("Fast checkout overlay is not displayed\n");
									Assert.fail("Fast checkout overlay is not displayed\n");
								}

							} else {
								log.debug("Fast checkout CTA is disabled\n");
								Assert.fail("Fast checkout CTA is disabled\n");
							}
						} else {
							log.debug("Failed: PayPal digital payment method supposed to be enabled for enable status and when the journey is performing with Windows system\n");
							Assert.fail("Failed: PayPal digital payment method supposed to be enabled for enable status and when the journey is performing with Windows system\n");
						}
					} else if (DPFlag.equalsIgnoreCase("ApplePay")) {
						if (driver.findElements(By.xpath("ApplePayDP")).size() > 0) {
							log.debug("Failed: ApplePay digital payment method should be disabled as the journey is performing with Windows system\n");
							Assert.fail("Failed: ApplePay digital payment method should be disabled as the journey is performing with Windows system\n");
						}
					} else if (DPFlag.equalsIgnoreCase("Disabled")) {
						if (driver.findElements(By.xpath("(//div[@class='expCheckoutblock'])")).size() > 0) {
							log.debug("Failed: Both digital payment methods should be disabled for disabled status\n");
							Assert.fail("Failed: Both digital payment methods should be disabled for disabled status\n");
						}
					}
				} else if (DPStatus.equalsIgnoreCase("Disabled")) {
					if (driver.findElements(By.xpath("(//div[@class='expCheckoutblock'])")).size() > 0) {
						log.debug("Failed: digital payment method should be disabled for disabled status\n");
						Assert.fail("Failed: digital payment method should be disabled for disabled status\n");
					}
				}
			} else if (OSName.contains("OS_MAC_OS_X") && browserName.contains("safari")) {
				log.debug("We are carrying our journey in MAC system\n");

				if (DPStatus.equalsIgnoreCase("Enabled")) {

					if (DPFlag.equalsIgnoreCase("Both")) {
						if (driver.findElements(By.xpath("(//div[@class='expCheckoutblock'])")).size() > 0) {

						} else {
							log.debug("Failed: ApplePay digital payment method is disabled for enabled status\n");
							Assert.fail("Failed: ApplePay digital payment method is disabled for enabled status\n");
						}

						if (driver.findElements(By.xpath("(//div[@class='expCheckoutblock'])")).size() > 0) {

						} else {
							log.debug("Failed: PayPal digital payment method supposed to be enabled for enable status\n");
							Assert.fail("Failed: PayPal digital payment method supposed to be enabled for enable status\n");
						}

						if (journey.equalsIgnoreCase("Existing")) {
							if (paymentCTA.contains("Express checkout")) {
								log.debug("As expected, checkout CTA copy text is matching in existing customer journey in MAC system ie:: "+paymentCTA+"\n");
							} else {
								log.debug("Failed, checkout CTA copy text is not matching in existing customer journey in MAC system ie:: "+paymentCTA+"\n");
								Assert.fail("Failed, checkout CTA copy text is not matching in existing customer journey in MAC system ie:: "+paymentCTA+"\n");
							}
						} else {
							if (paymentCTA.contains("Fast checkout")) {
								log.debug("As expected, checkout CTA copy text is matching when both options are enabled and when performing in MAC system ie :: "+paymentCTA+"\n");
							} else {
								log.debug("Failed, checkout CTA copy text is not matching when both options are enabled and when performing in MAC system ie:: "+paymentCTA+"\n");
								Assert.fail("Failed, checkout CTA copy text is not matching when both options are enabled and when performing in MAC system ie:: "+paymentCTA+"\n");
							}
						}

						if (paymentCopyText.contains("Check out faster with PayPal or Apple Pay")) {
							log.debug("As expected, Check out faster with PayPal or Apple Pay copy is displayed when both options are enabled and when performing in MAC systemie ie:: "+paymentCopyText+"\n");
						} else {
							log.debug("Failed, Check out faster with PayPal or Apple Pay copy is not displayed when both options are enabled and when performing in MAC system ie:: "+paymentCopyText+"\n");
							Assert.fail("Failed, Check out faster with PayPal or Apple Pay copy is not displayed when both options are enabled and when performing in MAC system ie:: "+paymentCopyText+"\n");
						}

						//Clicking on Fast checkout CTA for paypal validation
						if (BasketPage.paymentCTA.isEnabled()) {
							BasketPage.paymentCTA.click();
							log.debug("Fast checkout CTA is clicked\n");
							Thread.sleep(15000);
							Screenshots.captureScreenshot();
							//validating fast checkout overlay
							if (BasketPage.fastCheckoutOverlay.isDisplayed()) {
								log.debug("Fast Checkout Overlay header copy is: " + BasketPage.fastCheckoutOverlay.getText());
								String fastCheckoutFirstLineCopy = BasketPage.fastCheckoutFirstLineCopy.getText();
								String fastCheckoutSecondLineCopy = BasketPage.fastCheckoutSecondLineCopy.getText();
								String fastCheckoutThirdLineCopy = BasketPage.fastCheckoutThirdLineCopy.getText();
								String fastCheckoutFourthLineCopy = BasketPage.fastCheckoutFourthLineCopy.getText();

								if (fastCheckoutFirstLineCopy.equalsIgnoreCase("New to O2? Check out faster by using PayPal or Apple Pay for your upfront payment.")) {
									log.debug("fastCheckoutFirstLineCopy is matching ie:: "+fastCheckoutFirstLineCopy+"\n");
								} else {
									log.debug("fastCheckoutFirstLineCopy is not matching ie:: "+fastCheckoutFirstLineCopy+"\n");
									Assert.fail("fastCheckoutFirstLineCopy is not matching ie:: "+fastCheckoutFirstLineCopy+"\n");
								}

								if (fastCheckoutSecondLineCopy.equalsIgnoreCase("We’ll still need your bank details for your monthly payments.")) {
									log.debug("fastCheckoutSecondLineCopy is matching ie:: "+fastCheckoutSecondLineCopy+"\n");
								} else {
									log.debug("fastCheckoutSecondLineCopy is not matching ie:: "+fastCheckoutSecondLineCopy+"\n");
									Assert.fail("fastCheckoutSecondLineCopy is not matching ie:: "+fastCheckoutSecondLineCopy+"\n");
								}

								if (fastCheckoutThirdLineCopy.equalsIgnoreCase("For Existing Customers, use our Express Checkout.")) {
									log.debug("fastCheckoutThirdLineCopy is matching ie:: "+fastCheckoutThirdLineCopy+"\n");
								} else {
									log.debug("fastCheckoutThirdLineCopy is not matching ie:: "+fastCheckoutThirdLineCopy+"\n");
									Assert.fail("fastCheckoutThirdLineCopy is not matching ie:: "+fastCheckoutThirdLineCopy+"\n");
								}

								if (fastCheckoutFourthLineCopy.equalsIgnoreCase("(You may still use PayPal later to pay for any Upfront payment.)")) {
									log.debug("fastCheckoutFourthLineCopy is matching ie:: "+fastCheckoutFourthLineCopy+"\n");
								} else {
									log.debug("fastCheckoutFourthLineCopy is not matching ie:: "+fastCheckoutFourthLineCopy+"\n");
									Assert.fail("fastCheckoutFourthLineCopy is not matching ie:: "+fastCheckoutFourthLineCopy+"\n");
								}

								//closing Fast checkout Overlay
								log.debug("Fast checkout overlay is closing now\n");
								BasketPage.fastCheckoutOverlayClose.click();
								log.debug("Fast checkout overlay is closed\n");

							} else {
								log.debug("Fast checkout overlay is not displayed\n");
								Assert.fail("Fast checkout overlay is not displayed\n");
							}
						} else {
							log.debug("Fast checkout CTA is disabled\n");
							Assert.fail("Fast checkout CTA is disabled\n");
						}

					} else if (DPFlag.equalsIgnoreCase("PayPal")) {
						if (driver.findElements(By.xpath("(//div[@class='expCheckoutblock'])")).size() > 0) {

							if (journey.equalsIgnoreCase("Existing")) {
								if (paymentCTA.contains("Express checkout")) {
									log.debug("As expected, checkout CTA copy text is matching in existing customer journey in MAC system ie:: "+paymentCTA+"\n");
								} else {
									log.debug("Failed, checkout CTA copy text is not matching in existing customer journey in MAC system ie:: "+paymentCTA+"\n");
									Assert.fail("Failed, checkout CTA copy text is not matching in existing customer journey in MAC system ie:: "+paymentCTA+"\n");
								}
							} else {
								if (paymentCTA.contains("Fast checkout")) {
									log.debug("As expected, Fast checkout copy text is displayed for payment checkout CTA for PayPal option in MAC system ie:: "+paymentCTA+"\n");
								} else {
									log.debug("Failed, Fast checkout copy text is not displayed for payment checkout CTA for PayPal option in MAC system ie:: "+paymentCTA+"\n");
									Assert.fail("Failed, Fast checkout copy text is not displayed for payment checkout CTA for PayPal option in MAC system ie:: "+paymentCTA+"\n");
								}
							}

							if (paymentCopyText.contains("Check out faster with PayPal")) {
								log.debug("As expected, Check out faster with PayPal copy is displayed for PayPal option in MAC system ie:: "+paymentCopyText+"\n");
							} else {
								log.debug("Failed, Check out faster with PayPal copy is not displayed for PayPal option in MAC system ie:: "+paymentCopyText+"\n");
								Assert.fail("Failed, Check out faster with PayPal copy is not displayed for PayPal option in MAC system ie:: "+paymentCopyText+"\n");
							}

							//Clicking on Fast checkout CTA for paypal validation
							if (BasketPage.paymentCTA.isEnabled()) {
								BasketPage.paymentCTA.click();
								log.debug("Fast checkout CTA is cliked\n");
								Thread.sleep(15000);
								Screenshots.captureScreenshot();
								//validating fast checkout overlay
								if (BasketPage.fastCheckoutOverlay.isDisplayed()) {
									log.debug("Fast Checkout Overlay header copy is: " + BasketPage.fastCheckoutOverlay.getText());
									String fastCheckoutFirstLineCopy = BasketPage.fastCheckoutFirstLineCopy.getText();
									String fastCheckoutSecondLineCopy = BasketPage.fastCheckoutSecondLineCopy.getText();
									String fastCheckoutThirdLineCopy = BasketPage.fastCheckoutThirdLineCopy.getText();
									String fastCheckoutFourthLineCopy = BasketPage.fastCheckoutFourthLineCopy.getText();

									if (fastCheckoutFirstLineCopy.equalsIgnoreCase("New to O2? Check out faster by using PayPal for your upfront payment.")) {
										log.debug("fastCheckoutFirstLineCopy is matching ie:: "+fastCheckoutFirstLineCopy+"\n");
									} else {
										log.debug("fastCheckoutFirstLineCopy is not matching ie:: "+fastCheckoutFirstLineCopy+"\n");
										Assert.fail("fastCheckoutFirstLineCopy is not matching ie:: "+fastCheckoutFirstLineCopy+"\n");
									}

									if (fastCheckoutSecondLineCopy.equalsIgnoreCase("We’ll still need your bank details for your monthly payments.")) {
										log.debug("fastCheckoutSecondLineCopy is matching ie:: "+fastCheckoutSecondLineCopy+"\n");
									} else {
										log.debug("fastCheckoutSecondLineCopy is not matching ie:: "+fastCheckoutSecondLineCopy+"\n");
										Assert.fail("fastCheckoutSecondLineCopy is not matching ie:: "+fastCheckoutSecondLineCopy+"\n");
									}

									if (fastCheckoutThirdLineCopy.equalsIgnoreCase("For Existing Customers, use our Express Checkout.")) {
										log.debug("fastCheckoutThirdLineCopy is matching ie:: "+fastCheckoutThirdLineCopy+"\n");
									} else {
										log.debug("fastCheckoutThirdLineCopy is not matching ie:: "+fastCheckoutThirdLineCopy+"\n");
										Assert.fail("fastCheckoutThirdLineCopy is not matching ie:: "+fastCheckoutThirdLineCopy+"\n");
									}

									if (fastCheckoutFourthLineCopy.equalsIgnoreCase("(You may still use PayPal later to pay for any Upfront payment.)")) {
										log.debug("fastCheckoutFourthLineCopy is matching ie:: "+fastCheckoutFourthLineCopy+"\n");
									} else {
										log.debug("fastCheckoutFourthLineCopy is not matching ie:: "+fastCheckoutFourthLineCopy+"\n");
										Assert.fail("fastCheckoutFourthLineCopy is not matching ie:: "+fastCheckoutFourthLineCopy+"\n");
									}

									//closing Fast checkout Overlay
									log.debug("Fast checkout overlay is closing now\n");
									BasketPage.fastCheckoutOverlayClose.click();
									log.debug("Fast checkout overlay is closed\n");

								} else {
									log.debug("Fast checkout overlay is not displayed\n");
									Assert.fail("Fast checkout overlay is not displayed\n");
								}
							} else {
								log.debug("Fast checkout CTA is disabled\n");
								Assert.fail("Fast checkout CTA is disabled\n");
							}

						} else {
							log.debug("Failed: PayPal digital payment method supposed to be enabled for enable status\n");
							Assert.fail("Failed: PayPal digital payment method supposed to be enabled for enable status\n");
						}

						if (driver.findElements(By.xpath("ApplePayDP")).size() > 0) {
							log.debug("Failed: ApplePay digital payment method should be disabled for disable status\n");
							Assert.fail("Failed: ApplePay digital payment method should be disabled for disable status\n");
						}
					} else if (DPFlag.equalsIgnoreCase("ApplePay")) {
						if (driver.findElements(By.xpath("(//div[@class='expCheckoutblock'])")).size() > 0) {

							if (journey.equalsIgnoreCase("Existing")) {
								if (paymentCTA.contains("Express checkout")) {
									log.debug("As expected, checkout CTA copy text is matching in existing customer journey in MAC system ie:: " + paymentCTA + "\n");
								} else {
									log.debug("Failed, checkout CTA copy text is not matching in existing customer journey in MAC system ie:: " + paymentCTA + "\n");
									Assert.fail("Failed, checkout CTA copy text is not matching in existing customer journey in MAC system ie:: " + paymentCTA + "\n");
								}
							} else {
								if (paymentCTA.contains("Fast checkout")) {
									log.debug("As expected, Fast checkout copy text is displayed for payment checkout CTA for PayPal option in MAC system ie:: " + paymentCTA + "\n");
								} else {
									log.debug("Failed, Fast checkout copy text is not displayed for payment checkout CTA for PayPal option in MAC system ie:: " + paymentCTA + "\n");
									Assert.fail("Failed, Fast checkout copy text is not displayed for payment checkout CTA for PayPal option in MAC system ie:: " + paymentCTA + "\n");
								}
							}

							if (paymentCopyText.contains("Check out faster with Apple Pay")) {
								log.debug("As expected, Check out faster with Apple Pay copy is displayed for PayPal option in MAC system ie:: " + paymentCopyText + "\n");
							} else {
								log.debug("Failed, Check out faster with Apple Pay copy is not displayed for PayPal option in MAC system ie:: " + paymentCopyText + "\n");
								Assert.fail("Failed, Check out faster with Apple Pay copy is not displayed for PayPal option in MAC system ie:: " + paymentCopyText + "\n");
							}

							//Clicking on Fast checkout CTA for paypal validation
							if (BasketPage.paymentCTA.isEnabled()) {
								BasketPage.paymentCTA.click();
								log.debug("Fast checkout CTA is clicked\n");
								Thread.sleep(15000);
								Screenshots.captureScreenshot();
								//validating fast checkout overlay
								if (BasketPage.fastCheckoutOverlay.isDisplayed()) {
									log.debug("Fast Checkout Overlay header copy is: " + BasketPage.fastCheckoutOverlay.getText());
									String fastCheckoutFirstLineCopy = BasketPage.fastCheckoutFirstLineCopy.getText();
									String fastCheckoutSecondLineCopy = BasketPage.fastCheckoutSecondLineCopy.getText();
									String fastCheckoutThirdLineCopy = BasketPage.fastCheckoutThirdLineCopy.getText();
									String fastCheckoutFourthLineCopy = BasketPage.fastCheckoutFourthLineCopy.getText();

									if (fastCheckoutFirstLineCopy.equalsIgnoreCase("New to O2? Check out faster by using Apple Pay for your upfront payment.")) {
										log.debug("fastCheckoutFirstLineCopy is matching ie:: " + fastCheckoutFirstLineCopy + "\n");
									} else {
										log.debug("fastCheckoutFirstLineCopy is not matching ie:: " + fastCheckoutFirstLineCopy + "\n");
										Assert.fail("fastCheckoutFirstLineCopy is not matching ie:: " + fastCheckoutFirstLineCopy + "\n");
									}

									if (fastCheckoutSecondLineCopy.equalsIgnoreCase("We’ll still need your bank details for your monthly payments.")) {
										log.debug("fastCheckoutSecondLineCopy is matching ie:: " + fastCheckoutSecondLineCopy + "\n");
									} else {
										log.debug("fastCheckoutSecondLineCopy is not matching ie:: " + fastCheckoutSecondLineCopy + "\n");
										Assert.fail("fastCheckoutSecondLineCopy is not matching ie:: " + fastCheckoutSecondLineCopy + "\n");
									}

									if (fastCheckoutThirdLineCopy.equalsIgnoreCase("For Existing Customers, use our Express Checkout.")) {
										log.debug("fastCheckoutThirdLineCopy is matching ie:: " + fastCheckoutThirdLineCopy + "\n");
									} else {
										log.debug("fastCheckoutThirdLineCopy is not matching ie:: " + fastCheckoutThirdLineCopy + "\n");
										Assert.fail("fastCheckoutThirdLineCopy is not matching ie:: " + fastCheckoutThirdLineCopy + "\n");
									}

									if (fastCheckoutFourthLineCopy.equalsIgnoreCase("(You may still use PayPal later to pay for any Upfront payment.)")) {
										log.debug("fastCheckoutFourthLineCopy is matching ie:: " + fastCheckoutFourthLineCopy + "\n");
									} else {
										log.debug("fastCheckoutFourthLineCopy is not matching ie:: " + fastCheckoutFourthLineCopy + "\n");
										Assert.fail("fastCheckoutFourthLineCopy is not matching ie:: " + fastCheckoutFourthLineCopy + "\n");
									}

									//closing Fast checkout Overlay
									log.debug("Fast checkout overlay is closing now\n");
									BasketPage.fastCheckoutOverlayClose.click();
									log.debug("Fast checkout overlay is closed\n");

								} else {
									log.debug("Fast checkout overlay is not displayed\n");
									Assert.fail("Fast checkout overlay is not displayed\n");
								}
							}
						}else {
								log.debug("Failed: ApplePay digital payment method should be enabled for enable status\n");
								Assert.fail("Failed: ApplePay digital payment method should be enabled for enable status\n");
						}
						if (driver.findElements(By.xpath("PaypalDP")).size() > 0) {
							log.debug("Failed: PayPal digital payment method disabled for disable status\n");
							Assert.fail("Failed: PayPal digital payment method disabled for disable status\n");
						}
					} else if (DPFlag.equalsIgnoreCase("Disabled")) {
						if (driver.findElements(By.xpath("DP")).size() > 0) {
							log.debug("Failed: Both digital payment methods should be disabled for disabled status\n");
							Assert.fail("Failed: Both digital payment methods should be disabled for disabled status\n");
						}
					}
				} else if (DPStatus.equalsIgnoreCase("Disabled")) {
					if (driver.findElements(By.xpath("(//div[@class='expCheckoutblock'])")).size() > 0) {
						log.debug("Failed: digital payment method should be disabled for disabled status\n");
						Assert.fail("Failed: digital payment method should be disabled for disabled status\n");
					}
				}
			}
		} catch (Exception e) {
			log.debug("Exception found: "+e);
		}
	}

	//ITFD-662, PayPal payment from basket page
	public static void makePaymentWithPayPalInBasketPage(String payPalUser, String payPalPassword) {
		try{
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,-300)", "");
			Thread.sleep(2000);
			Screenshots.captureScreenshot();

			upFrontValue = BasketPage.upFrontValue.getText();
			if (BasketPage.paymentCTA.isEnabled()) {
				BasketPage.paymentCTA.click();
				log.debug("Fast checkout CTA is clicked\n");
				Thread.sleep(35000);
				Screenshots.captureScreenshot();
				//validating fast checkout overlay
				if (BasketPage.fastCheckoutOverlay.isDisplayed()) {
					log.debug("Fast checkout overlay is displayed\n");

					log.debug("Clicking on PayPal CTA to login\n");
					BasketPage.PayPalCTA.click();
					Thread.sleep(20000);
					Screenshots.captureScreenshot();

					String Mainwindow = driver.getWindowHandle();
					//getting all the popup windows , hence using getwindowhandles instead of

					Set<String> s1 = driver.getWindowHandles();
					Iterator<String> i1 = s1.iterator();
					while (i1.hasNext()) {
						String ChildWindow = i1.next();
						if (!Mainwindow.equalsIgnoreCase(ChildWindow)) {
							// Switching to Child window
							driver.switchTo().window(ChildWindow);
							log.debug("Switched to child window");

							//validate login header
							String loginHeader = BasketPage.PayPalLoginHeader.getText();

							if(loginHeader.contains("Pay with PayPal")) {
								log.debug("login header is matching ie:: "+loginHeader+"\n");
							}else{
								log.debug("login header is not matching ie:: "+loginHeader+"\n");
								Assert.fail("login header is not matching ie:: "+loginHeader+"\n");
							}

							log.debug("Entering details to login\n");
							BasketPage.payPalUserField.sendKeys(payPalUser);
							log.debug("Entered user name ie: "+payPalUser+"\n");

							log.debug("Clicking on Next button\n");
							BasketPage.payPalCTANext.click();
							log.debug("Clicked on Next button\n");
							Thread.sleep(5000);

							BasketPage.payPalPasswordField.sendKeys(payPalPassword);
							log.debug("Entered password ie: "+payPalPassword+"\n");
							Screenshots.captureScreenshot();
							log.debug("Clicking on Log in button\n");
							BasketPage.payPalLogInCTA.click();
							log.debug("Clicked on Log in button\n");
							Thread.sleep(20000);
							Screenshots.captureScreenshot();

							String upFrontCostInPayPalWindow = BasketPage.upFrontCostInPayPalWindow.getText();
							log.debug("Upfront value displayed in PayPal window is: "+upFrontCostInPayPalWindow+"\n");
							Thread.sleep(2000);
							if(upFrontCostInPayPalWindow.contains(BasketPageActions.upFrontValue)){
								log.debug("PayPal UpFront value is matching as shown in Basket page\n");
							}else{
								log.debug("Failed: PayPal UpFront value is not matching as shown in Basket page\n");
								Assert.fail("Failed: PayPal UpFront value is not matching as shown in Basket page\n");
							}

							log.debug("Selecting card option with ending number 106\n");
							BasketPage.cardOption.click();
							log.debug("Selected card option with ending number 106\n");
							Thread.sleep(2000);
							Screenshots.captureScreenshot();

							jse.executeScript("window.scrollBy(0,300)", "");
							Thread.sleep(2000);
							Screenshots.captureScreenshot();

							log.debug("Clicking on PayPal continue CTA\n");
							BasketPage.continuePayPalCTA.click();
							log.debug("Clicked on PayPal continue CTA\n");
							Thread.sleep(3000);
						}
					}
					// Switching to Parent window i.e Main Window.
					driver.switchTo().window(Mainwindow);

				}
			}else{
				log.debug("Fast Checkout CTA is not enabled\n");
			}

		}catch(Exception e){
			log.debug("Exception found "+e);
		}
	}

	public static void selectRecycleFromBasketPage() throws IOException, InterruptedException {
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		//jse.executeScript("window.scrollBy(0,400)", "");
		scrollToAnElement.scrollToElement(pageobjects.BasketPage.recycleHeader);
		Thread.sleep(4000);
		Screenshots.captureScreenshot();
		Thread.sleep(2000);
		try {

			List<WebElement> recycleOptions = driver.findElements(By.xpath("//div[@class='recycle-radio-wrapper']/div"));
			log.debug("Recycle available options are::\n");
			for(int i=1;i<recycleOptions.size();i++){
				String recycleText =  recycleOptions.get(i).getText();
				log.debug("Option "+i+" is: "+recycleText+"\n");
			}

			log.debug("Selecting Recycle credit option\n");
			driver.findElement(By.xpath("//div[@class='recycle-radio-wrapper']/div/div/input")).click();
			log.debug("Selected Recycle credit option ie::"+recycleOptions.get(1).getText());
			Screenshots.captureScreenshot();

			/*if (driver.findElements(By.xpath("//span[@id='recycle-optionsSelectBoxItArrowContainer']")).size() > 0) {
				driver.findElement(By.xpath("//span[@id='recycle-optionsSelectBoxItArrowContainer']")).click();
				Thread.sleep(3000);
				Screenshots.captureScreenshot();

				WebElement elementQuantity = null;
				String recycleOption = "";
				List<WebElement> eleQuantity = driver.findElements(By.xpath("//ul[@id='recycle-optionsSelectBoxItOptions']/li"));

				for (int i = 1; i <= eleQuantity.size(); i++) {
					recycleOption = driver.findElement(By.xpath("//ul[@id='recycle-optionsSelectBoxItOptions']/li[" + i + "]")).getText();
					Thread.sleep(2000);
					if (recycleOption.contains("bill credit")) {
						elementQuantity = driver.findElement(By.xpath("//ul[@id='recycle-optionsSelectBoxItOptions']/li[" + i + "]"));
						break;
					}
				}
				log.debug("Moving Mouse Recycle dropdown");
				Point coordinates = elementQuantity.getLocation();
				Robot robot = new Robot();
				robot.mouseMove(coordinates.getX() + 80, coordinates.getY() + 100);
				Thread.sleep(2000);

				Actions action = new Actions(driver);
				action.moveToElement(elementQuantity).click().build().perform();
				log.debug("Selected Bill Credit option from Recycle dropdown");
				Thread.sleep(2000);
			}*/

			jse.executeScript("window.scrollBy(0,-2000)", "");

		} catch (Exception e) {
			// TODO Auto-generated catch block
			log.debug("Unable to validate Recycle option\n");
		}
		Screenshots.captureScreenshot();
	}

}

