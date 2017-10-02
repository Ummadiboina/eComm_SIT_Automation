package actionsPerformed;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;

import GlobalActions.RandomEmailAddressCreation;
import GlobalActions.Screenshots;
import helpers.Environment;
import pageobjects.Agent_RegisterCustomerPage;

public class Agent_RegisterCustomerActions extends Environment {

	static Logger log = Logger.getLogger("devpinoyLogger");

	public static void PayGRegistration(String Firstname, String Surname) throws InterruptedException, IOException {
		try {
			Select dropdown = new Select(pageobjects.Agent_RegisterCustomerPage.Title);
			dropdown.selectByIndex(1);
			log.debug("Selected the dropdown Mr");
			Reporter.log("Selected the dropdown Mr");

			Agent_RegisterCustomerPage.FirstName.sendKeys(Firstname);
			log.debug("Entered First name");
			Agent_RegisterCustomerPage.LastName.sendKeys(Surname);
			log.debug("Entered Last name");

			Agent_RegisterCustomerPage.Email.clear();
			Agent_RegisterCustomerPage.Email.sendKeys(RandomEmailAddressCreation.RandomEmail());
			Agent_RegisterCustomerPage.DOB.sendKeys("10-10-1981");
			log.debug("Entered date of birth");
			Thread.sleep(2000);
			Agent_RegisterCustomerPage.ContactNumber.sendKeys("07888594958");
			log.debug("Entered contact number");
			Thread.sleep(2000);
			Screenshots.captureScreenshot();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.getMessage();
			Screenshots.captureScreenshot();
		}

		Agent_RegisterCustomerPage.intialPassword.sendKeys("SitTester123");
		Agent_RegisterCustomerPage.confirmPassword.sendKeys("SitTester123");
		Thread.sleep(2000);

		try {
			Agent_RegisterCustomerPage.HouseNumber.sendKeys("Flat 01");
			Thread.sleep(2000);
			Agent_RegisterCustomerPage.Postcode.sendKeys("SL1 1EL");
			log.debug("Entered House Postcode  as SL1 1EL");

			Thread.sleep(2000);
			pageobjects.Agent_RegisterCustomerPage.FindAddress.click();
			Thread.sleep(3000);
			log.debug("Clicked on the Find address button");

			pageobjects.Agent_RegisterCustomerPage.Selectedaddress.click();
			log.debug("Selected an address");
			Screenshots.captureScreenshot();
		} catch (Exception e) {
			e.getMessage();
			Screenshots.captureScreenshot();
		}

		Select dropdown2 = new Select(pageobjects.Agent_RegisterCustomerPage.securityQuestion);
		dropdown2.selectByIndex(2);
		pageobjects.Agent_RegisterCustomerPage.securityAnswer.sendKeys("Rotary");
		Thread.sleep(2000);
		Agent_RegisterCustomerPage.registerCustomer.click();
		Thread.sleep(3000);
		log.debug("Clicked on Register customer");
		Screenshots.captureScreenshot();
	}

	public static void PayGRegistration(String Firstname, String Surname, String HouseNumber, String PostCode)
			throws InterruptedException, IOException {
		try {
			Select dropdown = new Select(pageobjects.Agent_RegisterCustomerPage.Title);
			dropdown.selectByIndex(1);
			log.debug("Selected the dropdown Mr");
			Reporter.log("Selected the dropdown Mr");

			Agent_RegisterCustomerPage.FirstName.sendKeys(Firstname);
			log.debug("Entered First name");
			Agent_RegisterCustomerPage.LastName.sendKeys(Surname);
			log.debug("Entered Last name");

			Agent_RegisterCustomerPage.Email.clear();
			Agent_RegisterCustomerPage.Email.sendKeys(RandomEmailAddressCreation.RandomEmail());
			Agent_RegisterCustomerPage.DOB.sendKeys("10-10-1981");
			log.debug("Entered date of birth");
			Thread.sleep(2000);
			Agent_RegisterCustomerPage.ContactNumber.sendKeys("07888594958");
			log.debug("Entered contact number");
			Thread.sleep(2000);
			Screenshots.captureScreenshot();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.getMessage();
			Screenshots.captureScreenshot();
		}

		Agent_RegisterCustomerPage.intialPassword.sendKeys("SitTester123");
		Agent_RegisterCustomerPage.confirmPassword.sendKeys("SitTester123");
		Thread.sleep(2000);

		try {
			Agent_RegisterCustomerPage.HouseNumber.sendKeys(HouseNumber);
			Thread.sleep(2000);
			Agent_RegisterCustomerPage.Postcode.sendKeys(PostCode);
			log.debug("Entered House Postcode  as SL1 1EL");

			Thread.sleep(2000);
			pageobjects.Agent_RegisterCustomerPage.FindAddress.click();
			Thread.sleep(3000);
			log.debug("Clicked on the Find address button");

			pageobjects.Agent_RegisterCustomerPage.Selectedaddress.click();
			log.debug("Selected an address");
			Screenshots.captureScreenshot();
		} catch (Exception e) {
			e.getMessage();
			System.out.println("Try catch block exception in Agent register cutomer actions page, nothing to worry :)");
			Screenshots.captureScreenshot();
		}

		Select dropdown2 = new Select(pageobjects.Agent_RegisterCustomerPage.securityQuestion);
		dropdown2.selectByIndex(2);
		pageobjects.Agent_RegisterCustomerPage.securityAnswer.sendKeys("Rotary");
		Thread.sleep(2000);
		Agent_RegisterCustomerPage.registerCustomer.click();
		Thread.sleep(6000);
		log.debug("Clicked on Register customer");
		System.out.println("Clicked on Register customer");
		Screenshots.captureScreenshot();
	}

	public static void PaybyCard() throws InterruptedException, IOException {
		String OneOff = Agent_RegisterCustomerPage.ZeroOneOff.getText();
		System.out.println(OneOff);
		if (OneOff.contains("�0.00")) {
			Agent_RegisterCustomerPage.SubmitBtn.click();
		}

		else {

			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
			Thread.sleep(5000);
			System.out.println("Pay by card button is enabled ");
			Agent_RegisterCustomerPage.PayByCard.click();
			System.out.println("Clicked on pay by card ");

		}
		Thread.sleep(2000);
		Screenshots.captureScreenshot();
	}

	public static void CardDetails() throws InterruptedException, IOException {
		Thread.sleep(2000);
		System.out.println("Mipay bit :) ");
		String PaybyCardCVV2 = Agent_RegisterCustomerPage.PayByCard_2.getText();

		if (PaybyCardCVV2.contains("Card ending with: XXXXXXXXXXXX")) {
			System.out.print("The text is :" + PaybyCardCVV2);
			Agent_RegisterCustomerPage.SecurityCode.sendKeys("123");
			log.debug("Security card is entered as 123");
			Agent_RegisterCustomerPage.UsethisCard.click();
			log.debug("The Pay Now button is clicked");
			System.out.println("completed  Mypay bit");
			Thread.sleep(6000);
			Screenshots.captureScreenshot();

		}

		else {
			Agent_RegisterCustomerPage.CardHolderName.sendKeys("TEST ACCEPTA");
			System.out.println("Card holder name ");
			Select CardTypeDropDown = new Select(pageobjects.Agent_RegisterCustomerPage.CardType);
			CardTypeDropDown.selectByIndex(3);
			Agent_RegisterCustomerPage.CardNumber.sendKeys("4539791001730106");
			Thread.sleep(2000);
			Select CardMonthDropdown = new Select(pageobjects.Agent_RegisterCustomerPage.CardMonth);
			CardMonthDropdown.selectByIndex(2);
			Thread.sleep(2000);
			Select CardYearDropdown = new Select(pageobjects.Agent_RegisterCustomerPage.CardYear);
			CardYearDropdown.selectByIndex(3);
			Thread.sleep(2000);
			Agent_RegisterCustomerPage.SecurityCode.sendKeys("123");
			Thread.sleep(2000);
			Screenshots.captureScreenshot();
			Agent_RegisterCustomerPage.UsethisCard.click();
			System.out.println("completed  Mypay bit");
			Thread.sleep(6000);
		}

	}

	public static void CardDetails_PayM() throws InterruptedException, IOException {
		Thread.sleep(7000);

		System.out.println("Going to validate pay by card page displayed from mipay");
		Agent_RegisterCustomerPage.SecurityCode.sendKeys("123");
		Thread.sleep(2000);
		Agent_RegisterCustomerPage.UsethisCard.click();
		Screenshots.captureScreenshot();
	}
}
