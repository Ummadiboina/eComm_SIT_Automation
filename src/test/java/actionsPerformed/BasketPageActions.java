package actionsPerformed;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;

import com.google.common.base.Function;

import helpers.Environment;
import helpers.Filereadingutility;
import junit.framework.Assert;

public class BasketPageActions extends Environment {

	static Logger log = Logger.getLogger("devpinoyLogger");

	public static void validatelabel() throws InterruptedException {
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

	}

	public static void labelvaluedisplay() throws InterruptedException {

		System.out.println("The upfront cost display :"
				+ pageobjects.BasketPage.upfrontcost.getAttribute("data-qa-upfront-total"));

		log.debug("The upfront cost display :"
				+ pageobjects.BasketPage.upfrontcost.getAttribute("data-qa-upfront-total"));

		Thread.sleep(5000);

		System.out.println("The monthly cost display :"
				+ pageobjects.BasketPage.monthlycost.getAttribute("data-qa-monthly-total"));
		log.debug("The monthly cost display :"
				+ pageobjects.BasketPage.monthlycost.getAttribute("data-qa-monthly-total"));

	}

	public static void ValidateBasketPage() throws InterruptedException {

		log.debug("Shop basket pages validations");

		if (pageobjects.BasketPage.checkoutbtn.getText().contains("Go to checkout")) {
			System.out.println(
					"Go To Checkout is Present and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());

			log.debug("Go To Checkout is Present and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());

			pageobjects.BasketPage.checkoutbtn.sendKeys(Keys.ENTER);
			;
		} else {
			System.out.println(
					"Go To Checkout is Absent and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());
			log.debug("Go To Checkout is Absent and the Text is :" + pageobjects.BasketPage.checkoutbtn.getText());

		}
		Thread.sleep(5000);

	}

	// Below is for checking the order contract text

	public static void checkOrderContractTextBP() {
		String ActOrderContractMsg = pageobjects.BasketPage.OrderContractMessageBP.getText();
		String ExpOrderContractMsg = "Your contract will not start until the order is on its way.";
		System.out.println("Act Del MSg" + ActOrderContractMsg);
		System.out.println("Exp Del MSg" + ExpOrderContractMsg);

		if (ActOrderContractMsg.matches(ExpOrderContractMsg)) {
			System.out.println("ActOrderContractMsg matches ExpOrderContractMsg");
		} else {
			Assert.fail("Order Contract Text does not match");

		}
	}

	public static void checkOrderContractTextDDPOBP() {
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
	}

	// Below is for Clicking on the goto Checkout button
	public static void gotoCheckout() throws InterruptedException {
		Thread.sleep(2000);
		System.out.println("Going to click go to check out button");

		
		//Below is example of Fluent wait 
		Wait<WebDriver> wait = new FluentWait<WebDriver>(driver).withTimeout(60, TimeUnit.SECONDS)
				.pollingEvery(3, TimeUnit.SECONDS).ignoring(NoSuchElementException.class);

		WebElement checkOutButtonValidation = wait.until(new Function<WebDriver, WebElement>() {
			public WebElement apply(WebDriver driver) {

				
				return pageobjects.BasketPage.checkoutbtn;
			}

		});
		
		checkOutButtonValidation.click();
		log.debug("Clicking on Checkout button");
		System.out.println("Go to checkout button clicked");

	}

	public static void ValidateBasketPageContents() throws InterruptedException {
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
	}

	public static void BasketContentsforNonConnected() throws InterruptedException {

		try {
			Assert.assertEquals("Your basket", pageobjects.BasketPage.BasketHeaderXXL.getText());
			log.debug("Shop basket pages validations" + driver.getTitle());
			log.debug("BasketHeaderXXL header is " + pageobjects.BasketPage.BasketHeaderXXL.getText());

		} catch (Exception e) {
			Assert.fail("Unable to find BasketHeaderXXL element in Reference shop Basket page");
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

	}

	public static void PlanOnlyPageContents() throws InterruptedException {

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

	}

	public static void PromoCode(String PromoCode) {
		log.debug("Clicking promocode");
		pageobjects.BasketPage.GotaPromoCode.click();
		pageobjects.BasketPage.voucherCode.sendKeys(PromoCode);
		pageobjects.BasketPage.applyVoucher.click();

	}

	public static void CollectionorDelivery(String elementName) throws InterruptedException {

		if (elementName.contains("homeDelivery")) {
			pageobjects.BasketPage.HomeDeliverySelect.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("HomeDelivery is Selected");
			System.out.println("HomeDelivery is Selected");

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

		}

	}

	public static void JuneReleaseBasketContent() throws InterruptedException {

		try {
			Assert.assertEquals("Your basket", pageobjects.BasketPage.BasketHeaderXXL.getText());
			System.out.println("Shop basket page header - " + driver.getTitle());
			System.out.println("Basket header is - " + pageobjects.BasketPage.BasketHeaderXXL.getText());

		} catch (Exception e) {
			Assert.fail("Unable to find BasketHeaderXXL element in Reference shop Basket page");
		}
	}

	public static void ValidatePromoCode() {
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

	}

	public static void continueShopping() throws InterruptedException {
		log.debug("Verifying if the devices selected are in basket");
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,600)", "");

		pageobjects.BasketPage.ContinueShopping.sendKeys(Keys.ENTER);
		log.debug("Clicked on Continue Shopping in Basket Page");

		Thread.sleep(5000);
	}

	public static void ValidateContentEcomm11522() throws InterruptedException {

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

	}

	public static void verifyNCDRemovedinBasketPageAfterCDSelection() throws InterruptedException {
		log.debug("Opening verifyNCDRemovedinBasketPageAfterCDSelection function");

		String AccessoryName_Before = "";
		String FitnessTrackerName_Before = "";
		String SmartWatchName_Before = "";

		String AccessoryName_After = "";
		String FitnessTrackerName_After = "";
		String SmartWatchName_After = "";

		String RunTimeFilePath = System.getProperty("user.dir") + "\\Configurations\\Properties\\Run.properties";

		try {

			AccessoryName_Before = (String) Filereadingutility.getPropertyValue(RunTimeFilePath, "Accessory");
			FitnessTrackerName_Before = (String) Filereadingutility.getPropertyValue(RunTimeFilePath, "FitnessTracker");
			SmartWatchName_Before = (String) Filereadingutility.getPropertyValue(RunTimeFilePath, "SmartWatch");

			AccessoryName_After = pageobjects.AccessoryPage.AccesoryAfterPhoneSelection.getText();
			FitnessTrackerName_After = pageobjects.AccessoryPage.FitnessTrackerAfterPhoneSelection.getText();
			SmartWatchName_After = pageobjects.AccessoryPage.SmartWatchAfterPhoneSelection.getText();

			Assert.assertFalse("Assertion Failed: Accessory is not present in the basket page after phone selection",
					AccessoryName_Before.contains(AccessoryName_After));
			log.debug("Assertion Passed: Previous Accessory is present in the basket page after phone selection");

			Assert.assertEquals("Assertion Failed: FitnessTracker is not present in the basket after phone selection",
					FitnessTrackerName_Before.contains(FitnessTrackerName_After));
			log.debug("Assertion Passed:Previous FitnessTracker is present in the basket page after phone selection");

			Assert.assertEquals("Assertion Failed: SmartWatch is not present in the basket after phone selection",
					SmartWatchName_Before.contains(SmartWatchName_After));
			log.debug("Assertion Passed:Previous SmartWatch is present in the basket page after phone selection");

			log.debug("successfully verified the basket section after phone selection");
		}

		catch (AssertionError e) {

			log.debug(
					"Assertion failed: Previously selected Non Connected device is present in the Basket section after phone selection"
							+ e.getMessage() + "");
		}
	}

	public static void verifyDevicesInBasket(String dev1, String dev2, String dev3) {
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
				System.out.println("Non Conn added: "+ MyNonConnDevices.get(i).getText()+ "");
			}
		}
		if (MyConnDevices.size() != 0) {
			for (int i = 0; i < MyConnDevices.size(); i++) {
				DisplayedDevices.add(MyConnDevices.get(i).getText());
				System.out.println("Conn dev added: " + MyConnDevices.get(i).getText() +"");
			}
		}

		if (MyTariffs.size() != 0) {
			for (int i = 0; i < MyTariffs.size(); i++) {
				DisplayedDevices.add(MyTariffs.get(i).getText());
				System.out.println("Tariff added: " + MyTariffs.get(i).getText() +"");
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
	}

	public static void verifyDevicesInBasket(String dev1, String dev2) {

		//List<WebElement> MyDevices = pageobjects.BasketPage.DevicesList;

		List<WebElement> MyConnDevices = pageobjects.BasketPage.MyConnDevices;
		List<WebElement> MyNonConnDevices = pageobjects.BasketPage.MyNonConnDevices;
		List<WebElement> MyTariffs = pageobjects.BasketPage.MyTariffs;
		
		List<String> DisplayedDevices = new ArrayList<>();
		List<String> SelectedDevices = new ArrayList<>();

		SelectedDevices.add(dev1);
		SelectedDevices.add(dev2);
		System.out.println("1" + SelectedDevices.get(0));
		System.out.println("2" + SelectedDevices.get(1));

		System.out.println("Conn size" + MyConnDevices.size());
		System.out.println("Non Conn size" + MyNonConnDevices.size());
		System.out.println("Tariffs size" + MyTariffs.size());

		if (MyNonConnDevices.size() != 0) {
			for (int i = 0; i < MyNonConnDevices.size(); i++) {
				DisplayedDevices.add(MyNonConnDevices.get(i).getText());
				System.out.println("Non Conn added");
			}
		}
		if (MyConnDevices.size() != 0) {
			for (int i = 0; i < MyConnDevices.size(); i++) {
				DisplayedDevices.add(MyConnDevices.get(i).getText());
				System.out.println("Conn dev added");
			}
		}
		if (MyTariffs.size() != 0) {
			for (int i = 0; i < MyTariffs.size(); i++) {
				DisplayedDevices.add(MyTariffs.get(i).getText());
				System.out.println("Tariff added: " + MyTariffs.get(i).getText() +"");
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
	}

	public static void verifyDevicesInBasket(String dev1) {

		//List<WebElement> MyDevices = pageobjects.BasketPage.DevicesList;

		List<WebElement> MyConnDevices = pageobjects.BasketPage.MyConnDevices;
		List<WebElement> MyNonConnDevices = pageobjects.BasketPage.MyNonConnDevices;
		List<WebElement> MyTariffs = pageobjects.BasketPage.MyTariffs;

		List<String> DisplayedDevices = new ArrayList<>();
		List<String> SelectedDevices = new ArrayList<>();

		SelectedDevices.add(dev1);

		if (MyNonConnDevices.size() != 0) {
			for (int i = 0; i < MyNonConnDevices.size(); i++) {
				DisplayedDevices.add(MyNonConnDevices.get(i).getText());
				System.out.println("Non Conn added");
			}
		}
		if (MyConnDevices.size() != 0) {
			for (int i = 0; i < MyConnDevices.size(); i++) {
				DisplayedDevices.add(MyConnDevices.get(i).getText());
				System.out.println("Conn dev added");
			}
		}
		if (MyTariffs.size() != 0) {
			for (int i = 0; i < MyTariffs.size(); i++) {
				DisplayedDevices.add(MyTariffs.get(i).getText());
				System.out.println("Tariff added: " + MyTariffs.get(i).getText() +"");
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

	}

}
