package actionsPerformed;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import GlobalActions.scrollToAnElement;
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

public class BasketPageActions extends Environment {

	final static Logger log = Logger.getLogger("BasketPageActions");

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
		scrollToAnElement.scrollToElement(BasketPage.YourOrder);
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
			if(!pageobjects.BasketPage.checkoutbtn.isEnabled())
			{
				//Thread.sleep(4000);
				scrollToAnElement.scrollToElement(driver.findElement(By.xpath("//input[@id='noNeedNewSim']")));
				Screenshots.captureScreenshot();

				JavascriptExecutor executor = (JavascriptExecutor)driver;
				executor.executeScript("arguments[0].click();", driver.findElement(By.xpath("//input[@id='noNeedNewSim']")));
				//driver.findElement(By.xpath("//input[@id='noNeedNewSim']")).click();
			}
			Thread.sleep(5000);
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,400)", "");
			Screenshots.captureScreenshot();
			log.debug("Queue page is not displayed");
			WebElement element = pageobjects.BasketPage.checkoutbtn;
			JavascriptExecutor executor = (JavascriptExecutor)driver;
			executor.executeScript("arguments[0].click();", element);

			//pageobjects.BasketPage.checkoutbtn.click();
			log.debug("Clicked on Checkout button");
			Thread.sleep(4000);
		}

		Screenshots.captureScreenshot();

	}

	public static void ValidateBasketPageContents(String Element, String expValue) throws IOException, InterruptedException {
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		boolean fname = false;
		log.debug("Shop basket pages validations" + driver.getTitle());

		scrollToAnElement.scrollToElement(BasketPage.YourOrder);
		Screenshots.captureScreenshot();

		// boolean fname = pageobjects.BasketPage.checkoutbtn.isEnabled();
		if (driver.findElements(By.xpath("//*[@class='basket-nav']/div[@class='proceed-checkout']/form//input[@name='securecheckout']")).size() > 0) {
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

		if(driver.findElements(By.xpath("//div[@class='hasDelayedDeliveryItems']")).size()>0) {
			log.debug("The Home Delivery Text is : " + pageobjects.BasketPage.HomeDeliveryText.getText());
		}


		if(Element.equalsIgnoreCase("DataRollOver")){

			/*String actValue = "";

			List<WebElement> actPlnListElm = driver.findElements(By.xpath("//h3[@class='section-parent-header']//following-sibling::p"));

			for(int i = 3;i<=actPlnListElm.size();i++) {
				actValue = actPlnListElm.get(i).getText().replaceAll("\"","").trim() + "|";
			}*/

			String actPlnListElmTxt = driver.findElement(By.xpath("//h3[@class='section-parent-header']//following-sibling::p")).getText();
			Thread.sleep(2000);
			if(actPlnListElmTxt.contains(expValue)){
				log.debug("Selected Data Roll over plan details is displayed in Basket page");
			}
			else{
				log.debug("Selected Data Roll over plan details is not displayed in Basket page");
			}
		}

		Screenshots.captureScreenshot();
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
		Thread.sleep(4000);
		if(driver.findElements(By.xpath("//*[@id='homeDelivery']")).size()  >  0) {
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

				pageobjects.BasketPage.StorePostcode.sendKeys("M4");
				log.debug("PostCode Entered for Search");

				Thread.sleep(4000);
				Screenshots.captureScreenshot();
				Thread.sleep(2000);
				pageobjects.BasketPage.PostcodeSubmit.click();
				Thread.sleep(5000);
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



			if (elementName.contains("homeDelivery")) {
				pageobjects.BasketPage.HomeDeliverySelect.click();
				// Assert.assertEquals(elementName,"Galaxy S7 is not found");
				log.debug("HomeDelivery is Selected");
				log.debug("HomeDelivery is Selected");
				Screenshots.captureScreenshot();

			}
			if (elementName.contains("clickAndCollect")) {
				pageobjects.BasketPage.checkSoteSotck_TradeIn.click();
				// Assert.assertEquals(elementName,"Galaxy S7 is not found");
				log.debug("click And Collect is Selected");
				log.debug("clickAndCollect radio button is Selected");
				Thread.sleep(4000);
				pageobjects.BasketPage.StorePostcode.sendKeys("M4");
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
		}

		catch (AssertionError e) {

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
			if(MyNonConnDevicesSize>2) {
				MyNonConnDevicesSize = MyNonConnDevicesSize-1;
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
		int cnt= 0;

		if (DisplayedDevices.size() != 0 ) {
			String displayDeviceText="";
			String selectedDeviceText="";
			for (int i = 0; i < DisplayedDevices.size(); i++) {
				displayDeviceText= DisplayedDevices.get(i);
				for (int j = 0; j < SelectedDevices.size(); j++) {
					selectedDeviceText= SelectedDevices.get(j);
					if(displayDeviceText.contains(selectedDeviceText)){
						log.debug("Devices in basket are matching with selected device :: Displayed device is- "+ displayDeviceText+" and Selected device is -"+selectedDeviceText);
						cnt++;
					}
				}
			}
		}

		log.debug("count -"+ cnt);
		System.out.println("count -"+ cnt);

		if(cnt == SelectedDevices.size())
		{
			log.debug("Devices in basket are matching with Selected device");
		}else{
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

		if (pageobjects.BasketPage.EnabledCheckout.isDisplayed()) {
			log.debug("The Checkout button is enabled");
		} else if (pageobjects.BasketPage.DisabledCheckout.isDisplayed()) {
			log.debug("The checkout button is not enabled");

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
		pageobjects.UpgradeCustomerPage.plusAccordion.click();
		Thread.sleep(4000);
		pageobjects.UpgradeCustomerPage.promoCodeDetails.sendKeys(promoCode);
		log.debug("Promo Code Details entered");
		Thread.sleep(3000);
		Screenshots.captureScreenshot();
		pageobjects.UpgradeCustomerPage.promoCodeSubmit.click();
		log.debug("Submited the promo code");
		Thread.sleep(6000);
		if(UpgradeCustomerPage.AppliedPromoCodeValidation.isDisplayed()){
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


		if(ActualText.contains(Expected))
		{
			Assert.fail("Order in progress page is displayed");
		}
		else
		{
			log.debug("Order in progress is not displayed");
		}
		Thread.sleep(5000);
		Screenshots.captureScreenshot();

	}

	//Validating your bill cap in Basket page
	public static void ValidateAppliedBillSpendCapIn_BasketPage(String BillCap, String CapAmount, String BSCstatus) throws InterruptedException, IOException {
		Thread.sleep(5000);
		String AppliedBillCap="";
		String pageTitle = driver.getTitle();
		scrollToAnElement.scrollToElement(BasketPage.YourOrder);
		Thread.sleep(2000);
		Screenshots.captureScreenshot();
		try {
			if(BSCstatus.equalsIgnoreCase("Enabled")) {
				if (driver.findElements(By.xpath("//section[@id='billSpendCapSection']")).size() > 0) {

					log.debug("Bill spend cap section is displayed at "+pageTitle+" page \n");
					/*scrollToAnElement.scrollToElement(pageobjects.BasketPage.BillSpendCapHeader);
					Screenshots.captureScreenshot();*/
					JavascriptExecutor jse = (JavascriptExecutor) driver;
					jse.executeScript("window.scrollBy(0,200)", "");
					log.debug("Bill Spend Cap header is displayed in "+pageTitle+" page ie :: " + pageobjects.BasketPage.BillSpendCapHeader.getText());

					log.debug("Basket page Bill spend cap section overlay icon is displayed and clicking on it \n");
					pageobjects.BasketPage.BasketBSCOverlay.click();
					Thread.sleep(3000);
					Screenshots.captureScreenshot();

					String basketBSCOverlayTxt = pageobjects.BasketPage.BasketBSCOverlayTxt.getText();
					Thread.sleep(3000);
					log.debug("Basket page BSC section overlay text:: \n"+basketBSCOverlayTxt);
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
						}else{
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
			}else if(BSCstatus.equalsIgnoreCase("Disabled")){
				if (driver.findElements(By.xpath("//section[@id='billSpendCapSection']")).size() > 0) {
					log.debug("Bill spend cap section is enabled it suppose to be in disabled status in " + pageTitle + " page");
					Assert.fail("Bill spend cap section is enabled it suppose to be in disabled status in " + pageTitle + " page");
				}else{
					log.debug("As expected, Bill spend cap section is disabled in " + pageTitle + " page");
				}
			}else {
				System.out.println("Unable to validate bill spend cap section in " + pageTitle + " page\n");
				log.debug("Unable to validate bill spend cap section in " + pageTitle + " page\n");
				Assert.fail("Unable to validate bill spend cap section in " + pageTitle + " page\n");
			}

		}catch(Exception e){
			log.debug("Unable to validate Bill cap section in " + pageTitle + " page is:: " + e);
			Assert.fail("Unable to validate Bill cap section in " + pageTitle + " page is:: " + e);
		}
	}

}
