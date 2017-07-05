package actionsPerformed;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;

import GlobalActions.RandomEmailAddressCreation;
import helpers.Environment;
import junit.framework.Assert;
import pageobjects.DeliveryPage;
import pageobjects.BasketPage.*;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.fail;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import org.apache.log4j.Logger;

@SuppressWarnings("unused")
public class BasketPageActions extends Environment

{

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
		String ActOrderContractMsg = pageobjects.BasketPage.OrderContractMessageDDPOBP1.getText()+'\n'+pageobjects.BasketPage.OrderContractMessageDDPOBP2.getText();
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
	public static void gotoCheckout() {
		pageobjects.BasketPage.checkoutbtn.click();
		log.debug("Clicking on Checkout button");
	}

	public static void ValidateBasketPageContents() throws InterruptedException {

		log.debug("Shop basket pages validations" + driver.getTitle());

		boolean fname = pageobjects.BasketPage.checkoutbtn.isEnabled();
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
		log.debug("The Phone contents are : " + pageobjects.BasketPage.DeviceDetailsDisplay.getText());

		
		log.debug("The Basket Totals are : " + pageobjects.BasketPage.totals.getText());

		log.debug("The Basket Totals are : " + pageobjects.BasketPage.HomeDeliveryText.getText());

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

		//Taking element name and storing it
		String devicename1="Text111";
		
		
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
			System.out.println("HomeDelivery is Selected");

			pageobjects.BasketPage.HomeDeliverySelect.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("HomeDelivery is Selected");

		}
		if (elementName.contains("clickAndCollect")) {
			System.out.println("clickAndCollect is Selected");
			pageobjects.BasketPage.clickAndCollectSelect.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("click And Collect is Selected");
			pageobjects.BasketPage.StorePostcode.sendKeys("G2");
			log.debug("PostCode Entered for Search");
			Thread.sleep(2000);
			pageobjects.BasketPage.PostcodeSubmit.click();
			Thread.sleep(2000);
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Postcode Submitted for Search");
			pageobjects.BasketPage.Collectfromthisstore.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Store Selected for Colletion");
			Thread.sleep(5000);

		}

	}

	public static void JuneReleaseBasketContent() throws InterruptedException
	{   
	
		try {
			Assert.assertEquals("Your basket", pageobjects.BasketPage.BasketHeaderXXL.getText());
			System.out.println("Shop basket page header - "+driver.getTitle());
			System.out.println("Basket header is - "+pageobjects.BasketPage.BasketHeaderXXL.getText());

		} catch (Exception e) 
		{
		Assert.fail("Unable to find BasketHeaderXXL element in Reference shop Basket page");
		}
	}

	public static void ValidatePromoCode() 
	{
		log.debug("Clicking promocode");
/*		pageobjects.BasketPage.GotaPromoCode.click();
		pageobjects.BasketPage.voucherCode.sendKeys(voucher);
		pageobjects.BasketPage.applyVoucher.click();*/
		String Ele1= pageobjects.BasketPage.VoucherMessage.getText();
		if (Ele1.contains("This promo code is invalid"))
		{
			System.out.println("This promo code is invalid");
		}
		else
		{
			Assert.fail("Expected message is not displayed for invalid promo code");
		}
		

	}
	
	
	public static void continueShopping() {
		log.debug("Verifying if the devices selected are in basket");	pageobjects.BasketPage.ContinueShopping.sendKeys(Keys.ENTER);
		log.debug("Clicked on Continue Shopping in Basket Page");
	}

public static void verifyDevicesInBasket(String dev1, String dev2, String dev3) {

		List<WebElement> MyDevices = driver.findElements((By) pageobjects.BasketPage.DevicesList);

		List<String> DisplayedDevices = new ArrayList<>();
		List<String> SelectedDevices = new ArrayList<>();

		if (dev1.contains("SamsungGearS2")) {
			dev1 = "Samsung Gear S2";
		}
		if (dev2.contains("FitbitAlta")) {
			dev2 = "Fitbit Alta";
		}
		if (dev3.contains("iPad97")) {
			dev3 = "Apple iPad 9.7";
		}
		
		SelectedDevices.add(dev1);
		SelectedDevices.add(dev2);
		SelectedDevices.add(dev3);
		/*
		 * SelectedDevices.add(dev1.split("(?=[A-Z])").toString());
		 * SelectedDevices.add(dev2.split("(?=[A-Z])").toString());
		 * SelectedDevices.add(dev3.split("(?=[A-Z])").toString());
		 */

		for (int i = 0; i < MyDevices.size(); i++) {
			DisplayedDevices.add(MyDevices.get(i).getText());
		}

		Assert.assertEquals(DisplayedDevices, SelectedDevices);
log.debug("Selected devices are in basket");
	}


public static void ValidateContentEcomm11522()  throws InterruptedException {

	boolean fname = pageobjects.BasketPage.checkoutbtn.isEnabled();
if (fname != false) {
		System.out.println(
				"Checkout is Enabled and Present");
		log.debug(
				"Checkout is Enabled and Present");

	} else {
		System.out.println(
				"Checkout is not Enabled and Present");
		log.debug(
				"Checkout is Not Enabled and Present");
	}

// Below will display contents of the phone section


	log.debug("The Main Headercontents are : " + pageobjects.BasketPage.MainHeaders.getText());
	
	log.debug("The device contents are : " + pageobjects.BasketPage.DeviceDetailsDisplay.getText());

	
	log.debug("The Basket Totals are : " + pageobjects.BasketPage.totals.getText());

	log.debug("The Basket Totals are : " + pageobjects.BasketPage.HomeDeliveryText.getText());

}

}
