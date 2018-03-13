package actionsPerformed;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

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

public class BasketPageActions extends Environment {

	final static Logger log = Logger.getLogger("BasketPageActions");

	public static void validatelabel() throws InterruptedException, IOException {
		System.out.println(" ");
		System.out.println("Verifying Shop basket pages");
		log.debug("Verifying Shop basket pages");

		if (pageobjects.BasketPage.DeviceRemovebtn.getText().contains("Remove")) {
			System.out.println("The Device_Remove_Link is Present and the Text is :"
					+ pageobjects.BasketPage.DeviceRemovebtn.getText());
			log.debug("The Device_Remove_Link is Present and the Text is :"
					+ pageobjects.BasketPage.DeviceRemovebtn.getText());

		} else {
			System.out.println("The Device_Remove_Link is Absent and the Text is :"
					+ pageobjects.BasketPage.DeviceRemovebtn.getText());
			log.debug("The Device_Remove_Link is Absent and the Text is :"
					+ pageobjects.BasketPage.DeviceRemovebtn.getText());

		}
		Thread.sleep(5000);

		if (pageobjects.BasketPage.tariffRemovebtn.getText().contains("Remove")) {
			System.out.println("The Tarrif_Remove_link is Present and the Text is :"
					+ pageobjects.BasketPage.tariffRemovebtn.getText());
			log.debug("The Tarrif_Remove_link is Present and the Text is :"
					+ pageobjects.BasketPage.tariffRemovebtn.getText());

		} else {
			System.out.println("The Tarrif_Remove_link is Absent and the Text is :"
					+ pageobjects.BasketPage.tariffRemovebtn.getText());

			log.debug("The Tarrif_Remove_link is Absent and the Text is :"
					+ pageobjects.BasketPage.tariffRemovebtn.getText());

		}
		Screenshots.captureScreenshot();

	}

	public static void labelvaluedisplay() throws InterruptedException, IOException {

		System.out.println("The upfront cost display :"
				+ pageobjects.BasketPage.upfrontcost.getAttribute("data-qa-upfront-total"));

		log.debug("The upfront cost display :"
				+ pageobjects.BasketPage.upfrontcost.getAttribute("data-qa-upfront-total"));

		Thread.sleep(5000);

		System.out.println("The monthly cost display :"
				+ pageobjects.BasketPage.monthlycost.getAttribute("data-qa-monthly-total"));
		log.debug("The monthly cost display :"
				+ pageobjects.BasketPage.monthlycost.getAttribute("data-qa-monthly-total"));
		Screenshots.captureScreenshot();

	}

	public static void ValidateBasketPage() throws InterruptedException, IOException {

		log.debug("Shop basket pages validations");

		if (pageobjects.BasketPage.checkoutbtn.getText().contains("Go to checkout")) {
			System.out.println(
					"Go To Checkout is Present and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());

			log.debug("Go To Checkout is Present and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());

			pageobjects.BasketPage.checkoutbtn.sendKeys(Keys.ENTER);
        } else {
			System.out.println(
					"Go To Checkout is Absent and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());
			log.debug("Go To Checkout is Absent and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());

		}
		Thread.sleep(5000);
		Screenshots.captureScreenshot();

	}

	// Below is for checking the order contract text

	public static void checkOrderContractTextBP() throws IOException, InterruptedException {
		String ActOrderContractMsg = pageobjects.BasketPage.OrderContractMessageBP.getText();
		String ExpOrderContractMsg = "Your contract will not start until the order is on its way.";
		System.out.println("Act Del MSg" + ActOrderContractMsg);
		System.out.println("Exp Del MSg" + ExpOrderContractMsg);

		if (ActOrderContractMsg.matches(ExpOrderContractMsg)) {
			System.out.println("ActOrderContractMsg matches ExpOrderContractMsg");
		} else {
			Assert.fail("Order Contract Text does not match");

		}
		Screenshots.captureScreenshot();
	}

	public static void checkOrderContractTextDDPOBP() throws IOException, InterruptedException {
		String ActOrderContractMsg = pageobjects.BasketPage.OrderContractMessageDDPOBP1.getText() + '\n'
				+ pageobjects.BasketPage.OrderContractMessageDDPOBP2.getText();
		String ExpOrderContractMsg = "We will deliver the rest of your order as soon as possible." + '\n'
				+ "Your contract will not start until the order is on its way.";
		System.out.println("Act Del MSg" + ActOrderContractMsg);
		System.out.println("Exp Del MSg" + ExpOrderContractMsg);

		if (ActOrderContractMsg.matches(ExpOrderContractMsg)) {
			System.out.println("ActOrderContractMsg matches ExpOrderContractMsg");
		} else {
			Assert.fail("Order Contract Text for DD phone does not match");

		}
		Screenshots.captureScreenshot();
	}

	// Below is for Clicking on the goto Checkout button
	public static void gotoCheckout() throws IOException, InterruptedException {

		String title = driver.getTitle();
		if (title.contains("Thanks for waiting")) {
			System.out.println("Queue page is displayed");

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
			if(!pageobjects.BasketPage.checkoutbtn.isEnabled()){
				driver.findElement(By.xpath("//input[@id='noNeedNewSim']")).click();
				Thread.sleep(2000);
			}
			System.out.println("Queue page is not displayed");
			WebElement element = pageobjects.BasketPage.checkoutbtn;
			JavascriptExecutor executor = (JavascriptExecutor)driver;
			executor.executeScript("arguments[0].click();", element);

			//pageobjects.BasketPage.checkoutbtn.click();
			log.debug("Clicked on Checkout button");
			Thread.sleep(4000);
		}
		Screenshots.captureScreenshot();

	}

	public static void ValidateBasketPageContents() throws InterruptedException, IOException {
		boolean fname = false;
		log.debug("Shop basket pages validations" + driver.getTitle());
		System.out.println("Shop basket pages validations" + driver.getTitle());

		// boolean fname = pageobjects.BasketPage.checkoutbtn.isEnabled();
		if (pageobjects.BasketPage.checkoutbtn.isDisplayed()) {
			if (pageobjects.BasketPage.checkoutbtn.isEnabled()) {
				fname = true;
			}
		}
		System.out.print(fname);

		if (fname != false) {
			System.out.println(
					"Checkout is Enabled and Present and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());

			log.debug("Checkout is Present and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());
			System.out.println("Checkout is Enabled and Present and the Text is :"
					+ pageobjects.BasketPage.DeviceDetailsDisplay.getText());

		} else {
			System.out.println(
					"Go To Checkout is Absent and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());
			log.debug("Go To Checkout is Absent and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());

		}
		// Below will display contents of the phone section

		log.debug("The Main Headercontents are : " + pageobjects.BasketPage.MainHeaders.getText());
		System.out.println("The Main Headercontents are : " + pageobjects.BasketPage.MainHeaders.getText());
		log.debug("The Phone contents are : " + pageobjects.BasketPage.DeviceDetailsDisplay.getText());
		System.out.println("The Phone contents are : " + pageobjects.BasketPage.DeviceDetailsDisplay.getText());
		log.debug("The Basket Totals are : " + pageobjects.BasketPage.totals.getText());
		System.out.println("The Basket Totals are : " + pageobjects.BasketPage.totals.getText());
		log.debug("The Home Delivery Text is : " + pageobjects.BasketPage.HomeDeliveryText.getText());
		System.out.println("The Home Delivery Text is : " + pageobjects.BasketPage.HomeDeliveryText.getText());
		Screenshots.captureScreenshot();
	}

	public static void BasketContentsforNonConnected() throws InterruptedException, IOException {

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
			System.out.println("Stock is not available, perhaps out of stock");
			Assert.fail("Stock is not available, perhaps out of stock");

		}

		log.debug("The Main Headercontents are : " + pageobjects.BasketPage.MainHeaders.getText());
		System.out.println("The Main Headercontents are : " + pageobjects.BasketPage.MainHeaders.getText());

		log.debug("The Device names is/are : " + pageobjects.BasketPage.AccessoryDetails.getText());
		System.out.println("The Device names is/are : " + pageobjects.BasketPage.AccessoryDetails.getText());

		log.debug("The Device names is/are : " + pageobjects.BasketPage.DeviceHeadingNonConnected.getText());
		System.out.println("The Device names is/are : " + pageobjects.BasketPage.DeviceHeadingNonConnected.getText());

		// Taking element name and storing it
		String devicename1 = "Text111";

		log.debug("The Device names is/are : " + pageobjects.BasketPage.DeviceQuantityNonConnected.getText());
		System.out.println("The Device names is/are : " + pageobjects.BasketPage.DeviceQuantityNonConnected.getText());

		System.out.println("The Device names is/are : " + pageobjects.BasketPage.DeviceQuantityNonConnected.getText());

		log.debug("The Basket Totals are : " + pageobjects.BasketPage.totals.getText());
		System.out.println("The Basket Totals are : " + pageobjects.BasketPage.totals.getText());
		Screenshots.captureScreenshot();

	}

	public static void PlanOnlyPageContents() throws InterruptedException, IOException {

		log.debug("Shop basket pages validations" + driver.getTitle());

		boolean fname = pageobjects.BasketPage.checkoutbtn.isEnabled();

		if (fname != false) {
			System.out.println("Checkout is Enabled and Present");

			log.debug("Checkout is Enabled and Present");

		} else {
			System.out.println(
					"Go To Checkout is Absent and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());
			log.debug("Go To Checkout is Absent and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());

		}
		// Below will display contents of the section

		log.debug("The Main Headercontents are : " + pageobjects.BasketPage.MainHeaders.getText());

		log.debug("The Plan contents are : " + pageobjects.BasketPage.NonAirtimeDetails.getText());

		log.debug("The Basket Totals are : " + pageobjects.BasketPage.totals.getText());

		log.debug("The Basket Totals are : " + pageobjects.BasketPage.HomeDeliveryText.getText());
		Screenshots.captureScreenshot();
	}

	public static void PromoCode(String PromoCode) throws IOException, InterruptedException {
		log.debug("Clicking promocode");
		pageobjects.BasketPage.GotaPromoCode.click();
		pageobjects.BasketPage.voucherCode.sendKeys(PromoCode);
		pageobjects.BasketPage.applyVoucher.click();
		Screenshots.captureScreenshot();

	}

	public static void CollectionorDelivery(String elementName) throws InterruptedException, IOException {


		if(!BasketPage.checkoutbtn.isDisplayed()){
		if (elementName.contains("homeDelivery")) {
			pageobjects.BasketPage.HomeDeliverySelect.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("HomeDelivery is Selected");
			System.out.println("HomeDelivery is Selected");
			Screenshots.captureScreenshot();

		}
		if (elementName.contains("clickAndCollect")) {
			pageobjects.BasketPage.clickAndCollectSelect.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("click And Collect is Selected");
			System.out.println("clickAndCollect radio button is Selected");

			pageobjects.BasketPage.StorePostcode.sendKeys("G2");
			log.debug("PostCode Entered for Search");
			System.out.println("PostCode Entered for Search");
			Thread.sleep(4000);
			pageobjects.BasketPage.PostcodeSubmit.click();
			Thread.sleep(5000);
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Postcode Submitted for Search");
			System.out.println("Postcode Submitted for Search");
			Thread.sleep(5000);
			pageobjects.BasketPage.Collectfromthisstore.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Store Selected for Colletion");
			System.out.println("Store Selected for Colletion");
			Thread.sleep(5000);
			Screenshots.captureScreenshot();
		}
		}

	}

	public static void JuneReleaseBasketContent() throws InterruptedException, IOException {

		try {
			Assert.assertEquals("Your basket", pageobjects.BasketPage.BasketHeaderXXL.getText());
			System.out.println("Shop basket page header - " + driver.getTitle());
			System.out.println("Basket header is - " + pageobjects.BasketPage.BasketHeaderXXL.getText());

		} catch (Exception e) {
			Assert.fail("Unable to find BasketHeaderXXL element in Reference shop Basket page");
		}
		Screenshots.captureScreenshot();
	}

	public static void ValidatePromoCode() throws IOException, InterruptedException {
		log.debug("Clicking promocode");
		/*
		 * pageobjects.BasketPage.GotaPromoCode.click();
		 * pageobjects.BasketPage.voucherCode.sendKeys(voucher);
		 * pageobjects.BasketPage.applyVoucher.click();
		 */
		String Ele1 = pageobjects.BasketPage.VoucherMessage.getText();
		if (Ele1.contains("This promo code is invalid")) {
			System.out.println("This promo code is invalid");
		} else {
			Assert.fail("Expected message is not displayed for invalid promo code");
		}
		Screenshots.captureScreenshot();

	}

	public static void continueShopping() throws InterruptedException, IOException {
		log.debug("Verifying if the devices selected are in basket");
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,600)", "");

		pageobjects.BasketPage.ContinueShopping.sendKeys(Keys.ENTER);
		log.debug("Clicked on Continue Shopping in Basket Page");

		Thread.sleep(5000);
		Screenshots.captureScreenshot();
	}

	public static void ValidateContentEcomm11522() throws InterruptedException, IOException {

		boolean fname = pageobjects.BasketPage.checkoutbtn.isEnabled();
		if (fname != false) {
			System.out.println("Checkout is Enabled and Present");
			log.debug("Checkout is Enabled and Present");

		} else {
			System.out.println("Checkout is not Enabled and Present");
			log.debug("Checkout is Not Enabled and Present");
		}

		// Below will display contents of the phone section

		log.debug("The Main Headercontents are : " + pageobjects.BasketPage.MainHeaders.getText());

		log.debug("The device contents are : " + pageobjects.BasketPage.DeviceDetailsDisplay.getText());

		log.debug("The Basket Totals are : " + pageobjects.BasketPage.totals.getText());

		log.debug("The Basket Totals are : " + pageobjects.BasketPage.HomeDeliveryText.getText());
		Screenshots.captureScreenshot();

	}

	public static void verifyNCDRemovedinBasketPageAfterCDSelection() throws InterruptedException, IOException {
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
		}

		catch (AssertionError e) {

			log.debug(
					"Assertion failed: Previously selected Non Connected device is present in the Basket section after phone selection"
							+ e.getMessage() + "");
			Screenshots.captureScreenshot();
		}
	}

	public static void verifyDevicesInBasket(String dev1, String dev2, String dev3)
			throws IOException, InterruptedException {
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

		System.out.println("Conn size" + MyConnDevices.size());
		System.out.println("Non Conn size" + MyNonConnDevices.size());
		System.out.println("Tariffs size" + MyTariffs.size());

		if (MyNonConnDevices.size() != 0) {
			for (int i = 0; i < MyNonConnDevices.size(); i++) {
				DisplayedDevices.add(MyNonConnDevices.get(i).getText());
				System.out.println("Non Conn added: " + MyNonConnDevices.get(i).getText() + "");
			}
		}
		if (MyConnDevices.size() != 0) {
			for (int i = 0; i < MyConnDevices.size(); i++) {
				DisplayedDevices.add(MyConnDevices.get(i).getText());
				System.out.println("Conn dev added: " + MyConnDevices.get(i).getText() + "");
			}
		}

		if (MyTariffs.size() != 0) {
			for (int i = 0; i < MyTariffs.size(); i++) {
				DisplayedDevices.add(MyTariffs.get(i).getText());
				System.out.println("Tariff added: " + MyTariffs.get(i).getText() + "");
			}
		}
		if (DisplayedDevices.containsAll(SelectedDevices)) {
			log.debug("Selected devices are in basket");
			System.out.println("Selected devices are in basket");

		} else {
			for (int k = 0; k > DisplayedDevices.size(); k++) {
				System.out.println("Devices in basket are : " + '\n' + DisplayedDevices.get(k) + '\n');
				log.debug("Devices in basket are : " + '\n' + DisplayedDevices.get(k) + '\n');
			}
			Assert.fail("Selected devices are not in basket");
		}
		Screenshots.captureScreenshot();
	}

	public static void verifyDevicesInBasket(String dev1, String dev2) throws IOException, InterruptedException {

		// List<WebElement> MyDevices = pageobjects.BasketPage.DevicesList;

		List<WebElement> MyConnDevices = pageobjects.BasketPage.MyConnDevices;
		List<WebElement> MyNonConnDevices = pageobjects.BasketPage.MyNonConnDevices;
		List<WebElement> MyTariffs = pageobjects.BasketPage.MyTariffs;

		List<String> DisplayedDevices = new ArrayList<>();
		List<String> SelectedDevices = new ArrayList<>();

		SelectedDevices.add(dev1);
		SelectedDevices.add(dev2);
		System.out.println("1" + SelectedDevices.get(0));
		System.out.println("2" + SelectedDevices.get(1));

		System.out.println("Conn size: " + MyConnDevices.size());
		System.out.println("Non Conn size: " + MyNonConnDevices.size());
		System.out.println("Tariffs size: " + MyTariffs.size());

		if (MyNonConnDevices.size() != 0) {
			for (int i = 0; i < MyNonConnDevices.size(); i++) {
				DisplayedDevices.add(MyNonConnDevices.get(i).getText());
				System.out.println("Non Conn added: " + MyNonConnDevices.get(i).getText());
			}
		}
		if (MyConnDevices.size() != 0) {
			for (int i = 0; i < MyConnDevices.size(); i++) {
				DisplayedDevices.add(MyConnDevices.get(i).getText());
				System.out.println("Conn dev added: " + MyConnDevices.get(i).getText());
			}
		}
		if (MyTariffs.size() != 0) {
			for (int i = 0; i < MyTariffs.size(); i++) {
				DisplayedDevices.add(MyTariffs.get(i).getText());
				System.out.println("Tariff added: " + MyTariffs.get(i).getText() + "");
			}
		}
		if (DisplayedDevices.containsAll(SelectedDevices)) {
			log.debug("Selected devices are in basket");
			System.out.println("Selected devices are in basket");
		} else {
			for (int k = 0; k > DisplayedDevices.size(); k++) {
				System.out.println("Devices in basket are : " + '\n' + DisplayedDevices.get(k) + '\n');
				log.debug("Devices in basket are : " + '\n' + DisplayedDevices.get(k) + '\n');
			}
			Assert.fail("Selected devices are not in basket");
		}
		Screenshots.captureScreenshot();
	}

	public static void verifyDevicesInBasket(String dev1) throws IOException, InterruptedException {

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
				System.out.println("Non Conn added: " + MyNonConnDevices.get(i).getText());
			}
		}
		if (MyConnDevices.size() != 0) {
			for (int i = 0; i < MyConnDevices.size(); i++) {
				DisplayedDevices.add(MyConnDevices.get(i).getText());
				System.out.println("Conn dev added: " + MyConnDevices.get(i).getText());
			}
		}
		if (MyTariffs.size() != 0) {
			for (int i = 0; i < MyTariffs.size(); i++) {
				DisplayedDevices.add(MyTariffs.get(i).getText());
				System.out.println("Tariff added: " + MyTariffs.get(i).getText() + "");
			}
		}
		if (DisplayedDevices.containsAll(SelectedDevices)) {
			log.debug("Selected device is in basket");
			System.out.println("Selected device is in basket");
		} else {
			for (int k = 0; k > DisplayedDevices.size(); k++) {
				System.out.println("Devices in basket are : " + '\n' + DisplayedDevices.get(k) + '\n');
				log.debug("Devices in basket are : " + '\n' + DisplayedDevices.get(k) + '\n');
			}
			Assert.fail("Selected devices are not in basket");
		}
		Screenshots.captureScreenshot();

	}

	public static void InsuranceSectionBasket() throws InterruptedException, IOException {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		System.out.println("Entering add InsuranceSectionBasket Method");

		// pageobjects.BasketPage.InsuranceSection.sendKeys(Keys.ENTER);

		if (pageobjects.BasketPage.InsuranceSection.isDisplayed()) {
			System.out.println("Insurance is displayed in Basket page and text is  - "
					+ pageobjects.BasketPage.InsuranceSection.getText());

		}

		Thread.sleep(2000);
		System.out.println("Completed InsuranceSectionBasket function");
		log.debug("Completed InsuranceSectionBasket function");
		Screenshots.captureScreenshot();

	}

	public static void InsuranceSectionDeliveryPage() throws InterruptedException, IOException {
		System.out.println("Entering InsuranceSectionDeliveryPage Method");

		Thread.sleep(3000);

		if (driver.findElement(By.xpath("//tr[@id='basket-insurance']")).isDisplayed()) {
			System.out.println("Insurance is displayed in Delivery page and text is  - "
					+ driver.findElement(By.xpath("//tr[@id='basket-insurance']")).getText());

		} else {
			System.out.println("Insurance is not displayed");
		}

		/*
		 * if(pageobjects.DeliveryPage.InsuranceSection.isDisplayed()) {
		 * System.out.println("Insurance is displayed in Delivery page and text is  - "
		 * +pageobjects.DeliveryPage.InsuranceSection.getText());
		 * 
		 * }
		 */

		Thread.sleep(2000);
		System.out.println("Completed InsuranceSectionDeliveryPage function");
		log.debug("Completed InsuranceSectionDeliveryPage function");
		Screenshots.captureScreenshot();

	}

	////////////////////////////// Upgrade Basket
	////////////////////////////// Page///////////////////////////////////////////////

	public static void UpgradeBasketPageYourSim() throws IOException, InterruptedException {

		if (pageobjects.BasketPage.EnabledCheckout.isDisplayed()) {
			System.out.println("The Checkout button is enabled");
			log.debug("The checkout button is enabled");
		} else if (pageobjects.BasketPage.DisabledCheckout.isDisplayed()) {
			System.out.println("The checkout button is not enabled");
			log.debug("The checkout button is not enabled");
		}
		Screenshots.captureScreenshot();

	}

	public static void UpgradeBasketYourSim() throws IOException, InterruptedException {

		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,450)", "");

		if (pageobjects.UpgradeCustomerPage.YourSimSection.isDisplayed()) {
			System.out.println("The Your sim section is displayed");
		} else {
			System.out.println("The Your sim section is not displayed");
		}

		boolean SelectedY = UpgradeCustomerPage.NeedNewSimRadioButton.isSelected();
		if (SelectedY == true) {
			System.out.println("The I need a sim is preselected");
		} else {
			System.out.println("I dont need a sim is pre selected");
		}
		Screenshots.captureScreenshot();

	}

	public static void CheckoutNotDisplayed() throws InterruptedException, IOException {

		log.debug("Verifying if checkout page is displayed or not");
		String ActualText = BasketPage.checkoutinProgress.getText();

		System.out.println(ActualText);

		String Expected = "You order is in progress";


		if(ActualText.contains(Expected))
		{
			Assert.fail("Order in progress page is displayed");
		}
		else
		{
			System.out.println("Order in progress is not displayed");
		}
		Thread.sleep(5000);
		Screenshots.captureScreenshot();

	}

}
