package actionsPerformed;

import java.util.Set;
import java.util.concurrent.TimeUnit;

import GlobalActions.CommonActions;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;

import GlobalActions.RandomEmailAddressCreation;
import helpers.Environment;
import pageobjects.Agent_RegisterCustomerPage;

public class Agent_RegisterCustomerActions extends Environment {

	final static Logger log = Logger.getLogger("Agent_RegisterCustomerActions");

	public static void PayGRegistration(String Firstname, String Surname) throws InterruptedException {
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
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.getMessage();
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
		} catch (Exception e) {
			e.getMessage();
		}

		Select dropdown2 = new Select(pageobjects.Agent_RegisterCustomerPage.securityQuestion);
		dropdown2.selectByIndex(2);
		pageobjects.Agent_RegisterCustomerPage.securityAnswer.sendKeys("Rotary");
		Thread.sleep(2000);
		Agent_RegisterCustomerPage.registerCustomer.click();
		Thread.sleep(3000);
		log.debug("Clicked on Register customer");
	}


	public static void PayGRegistration_new(String Firstname, String Surname, String houseNumber, String postCode) throws InterruptedException {

		Thread.sleep(2000);
		Agent_RegisterCustomerPage.intialPassword.sendKeys("SitTester123");
		Agent_RegisterCustomerPage.confirmPassword.sendKeys("SitTester123");
		Thread.sleep(2000);
		Select dropdown2 = new Select(pageobjects.Agent_RegisterCustomerPage.securityQuestion);
		dropdown2.selectByIndex(2);
		pageobjects.Agent_RegisterCustomerPage.securityAnswer.sendKeys("Rotary");
		Thread.sleep(2000);
		Agent_RegisterCustomerPage.registerCustomer.click();
		Thread.sleep(3000);
		log.debug("Clicked on Register customer");
	}

	public static void PayGRegistration(String Firstname, String Surname, String HouseNumber, String PostCode)
			throws InterruptedException {
		try {
			Select dropdown = new Select(pageobjects.Agent_RegisterCustomerPage.Title);
			dropdown.selectByIndex(1);
			log.debug("Selected the dropdown Mr");
			Reporter.log("Selected the dropdown Mr");
			Thread.sleep(5000);
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
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.getMessage();
		}

		Agent_RegisterCustomerPage.intialPassword.sendKeys("SitTester123");
		Agent_RegisterCustomerPage.confirmPassword.sendKeys("SitTester123");
		Thread.sleep(2000);

		try {
			Agent_RegisterCustomerPage.HouseNumber.sendKeys(HouseNumber);
			Thread.sleep(2000);
			Agent_RegisterCustomerPage.Postcode.sendKeys(PostCode);
			log.debug("Entered House Postcode  as: " + PostCode);

			Thread.sleep(2000);
			pageobjects.Agent_RegisterCustomerPage.FindAddress.click();
			Thread.sleep(3000);
			log.debug("Clicked on the Find address button");

			pageobjects.Agent_RegisterCustomerPage.Selectedaddress.click();
			log.debug("Selected an address");
		} catch (Exception e) {
			e.getMessage();
			log.debug("Try catch block exception in Agent register cutomer actions page, nothing to worry :)");
		}

		Select dropdown2 = new Select(pageobjects.Agent_RegisterCustomerPage.securityQuestion);
		dropdown2.selectByIndex(2);
		pageobjects.Agent_RegisterCustomerPage.securityAnswer.sendKeys("Rotary");
		Thread.sleep(2000);
		//Agent_RegisterCustomerPage.registerCustomer.click();
		WebElement element = pageobjects.Agent_RegisterCustomerPage.registerCustomer;
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", element);

		Thread.sleep(6000);
		log.debug("Clicked on Register customer");
		log.debug("Clicked on Register customer");
	}

	public static void PaybyCard() throws InterruptedException {
		String OneOff = Agent_RegisterCustomerPage.ZeroOneOff.getText();
		log.debug(OneOff);
		if (OneOff.contains("�0.00")) {
			Agent_RegisterCustomerPage.SubmitBtn.click();
		} else {

			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
			Thread.sleep(5000);
			log.debug("Pay by card button is enabled ");
			Agent_RegisterCustomerPage.PayByCard.click();
			log.debug("Clicked on pay by card ");

		}
		Thread.sleep(2000);
	}

	public static void CardDetails_PayM() throws InterruptedException {
		Thread.sleep(2000);
		log.debug("Mipay bit : ");
		//driver.findElements(By.xpath("//label[contains(text(),'Card ending with:')]")).size();
		if (driver.findElements(By.xpath("//label[contains(text(),'Card ending with:')]")).size() > 0) {
			String PaybyCardCVV2 = Agent_RegisterCustomerPage.PayByCard_2.getText();
			Thread.sleep(2000);
			//if (PaybyCardCVV2.contains("Card ending with:")) {
			System.out.print("The text is :" + PaybyCardCVV2);
			Agent_RegisterCustomerPage.SecurityCode.sendKeys("123");
			log.debug("Security card is entered as 123");
			Agent_RegisterCustomerPage.UsethisCard.click();
			log.debug("The Pay Now button is clicked");
			log.debug("completed  Mypay bit");
			Thread.sleep(6000);
			//}
		} else {
			Agent_RegisterCustomerPage.CardHolderName.sendKeys("TEST ACCEPTA");
			log.debug("Card holder name ");
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
			Agent_RegisterCustomerPage.UsethisCard.click();
			log.debug("completed  Mypay bit");
			Thread.sleep(6000);
		}

	}

	public static void CardDetails() throws InterruptedException {
		Thread.sleep(7000);

		if (driver.findElements(By.xpath("//input[@id='CardHolderName']")).size() >= 1) {
			Thread.sleep(2000);
			Agent_RegisterCustomerPage.CardHolderName.sendKeys("TEST ACCEPTA");
			System.out.println("Card holder name ");
			Thread.sleep(2000);
			Select CardTypeDropDown = new Select(pageobjects.Agent_RegisterCustomerPage.CardType);
			Thread.sleep(2000);
			CardTypeDropDown.selectByIndex(3);
			Thread.sleep(2000);
			Agent_RegisterCustomerPage.CardNumber.sendKeys("4539791001730106");
			Thread.sleep(2000);
			Select CardMonthDropdown = new Select(pageobjects.Agent_RegisterCustomerPage.CardMonth);
			CardMonthDropdown.selectByIndex(2);
			Thread.sleep(2000);
			Select CardYearDropdown = new Select(pageobjects.Agent_RegisterCustomerPage.CardYear);
			CardYearDropdown.selectByIndex(3);
			Thread.sleep(8000);
			System.out.println("Going to validate pay by card page displayed from mipay");
			Agent_RegisterCustomerPage.SecurityCode.sendKeys("123");
			Thread.sleep(2000);
			Agent_RegisterCustomerPage.UsethisCard.click();
		} else {
			Thread.sleep(8000);
			System.out.println("Going to validate pay by card page displayed from mipay");
			Agent_RegisterCustomerPage.SecurityCode.sendKeys("123");
			Thread.sleep(2000);
			Agent_RegisterCustomerPage.UsethisCard.click();
		}
	}


	public static void RegisterCustomer(String Password, String Confirm_Password, String Security_Answer)
			throws InterruptedException {

		Thread.sleep(15000);

		Agent_RegisterCustomerPage.Password.sendKeys(Password);
		log.debug("Entered Password");
		Thread.sleep(2000);
		Agent_RegisterCustomerPage.Confirm_Password.sendKeys(Confirm_Password);
		log.debug("Entered Confirm Password");
		Thread.sleep(2000);
		Select dropdown2 = new Select(pageobjects.Agent_RegisterCustomerPage.securityQuestion);
		dropdown2.selectByIndex(1);
		log.debug("Selected the security question");

		Agent_RegisterCustomerPage.Security_Answer.sendKeys(Security_Answer);
		log.debug("Entered Security Answer");

		Agent_RegisterCustomerPage.Check_box.click();
		log.debug("Selected the TC checkbox");

		Agent_RegisterCustomerPage.registerCustomer.click();
		Thread.sleep(6000);
		log.debug("Clicked on Register customer");
		log.debug("Clicked on Register customer");

	}

	public static void provideDrivingLicence() throws InterruptedException {

		if (driver.findElements(By.id("additionalCardDetailsCheckbox")).size() > 0) {
			((JavascriptExecutor) driver).executeScript("arguments[0].click();", Agent_RegisterCustomerPage.additionalCardDetailsCheckbox);
			Thread.sleep(5000);
			((JavascriptExecutor) driver).executeScript("arguments[0].click();", Agent_RegisterCustomerPage.additionalCaptureCardDetails);
			Thread.sleep(15000);

			CommonActions.switchToWindow();

			Agent_RegisterCustomerPage.CardHolderName.sendKeys("TEST ACCEPTA");
			log.debug("Card holder name ");
			Select CardTypeDropDown = new Select(Agent_RegisterCustomerPage.CardType);
			CardTypeDropDown.selectByIndex(3);
			Agent_RegisterCustomerPage.CardNumber.sendKeys("4539791001730106");
			Thread.sleep(2000);
			Select CardMonthDropdown = new Select(Agent_RegisterCustomerPage.CardMonth);
			CardMonthDropdown.selectByIndex(2);
			Thread.sleep(2000);
			Select CardYearDropdown = new Select(Agent_RegisterCustomerPage.CardYear);
			CardYearDropdown.selectByIndex(3);
			Thread.sleep(2000);
			Agent_RegisterCustomerPage.SecurityCode.sendKeys("123");
			Thread.sleep(2000);
			Agent_RegisterCustomerPage.UsethisCard.click();
			log.debug("completed  Mypay bit");
			Thread.sleep(6000);
			Set<String> noOfWindows = driver.getWindowHandles();
			System.out.println(" noOfWindows : " + noOfWindows );

			if(noOfWindows.size() == 0) {
				((JavascriptExecutor) driver).executeScript("arguments[0].click();", Agent_RegisterCustomerPage.licenceDetailsCheckbox);
			}else{



				try {
					String mainWindowHandle = driver.getWindowHandle ();
					//Switch to child window and close it
					for (String childWindowHandle : driver.getWindowHandles ()) {
						//If window handle is not main window handle then close it
						if (!childWindowHandle.equals (mainWindowHandle)) {
							driver.switchTo ().window (childWindowHandle);
							System.out.println(" Driver is Switch to Child Window");
							log.info(" Driver is Switch to Child Window");
						} else {
							//switch back to main window
							driver.switchTo ().window (mainWindowHandle);
							System.out.println(" Driver is still stands in Main Window");
							log.info(" Driver is still stands in Main Window");
						}
					}
				} catch (Exception e){
					System.out.println ("Failed to switch to window :: " + e.getStackTrace ());
					log.info("Failed to switch to window :: " + e.getStackTrace ());

				}


				((JavascriptExecutor) driver).executeScript("arguments[0].click();", Agent_RegisterCustomerPage.licenceDetailsCheckbox);
			}

			Agent_RegisterCustomerPage.licencePostCode.sendKeys("SL14Dx");
			Agent_RegisterCustomerPage.licenceNumberSeg1.sendKeys("HOMES");
			Agent_RegisterCustomerPage.licenceNumberSeg2.sendKeys("901550");
			Agent_RegisterCustomerPage.licenceNumberSeg3.sendKeys("NDB");
			Agent_RegisterCustomerPage.licenceNumberSeg4.sendKeys("23");
			Thread.sleep(3000);

			((JavascriptExecutor) driver).executeScript("arguments[0].click();", Agent_RegisterCustomerPage.passportDetailsCheckbox);
			Thread.sleep(3000);
			Agent_RegisterCustomerPage.passportIssueCountry.sendKeys("RTY");
			Agent_RegisterCustomerPage.passportNumberSeg1.sendKeys("9865632131");
			Agent_RegisterCustomerPage.passportNumberSeg2.sendKeys("RTY");
			Agent_RegisterCustomerPage.passportNumberSeg3.sendKeys("9912301");
			Agent_RegisterCustomerPage.passportNumberSeg4.sendKeys("M");
			Agent_RegisterCustomerPage.passportNumberSeg5.sendKeys("2011089");
			Agent_RegisterCustomerPage.passportNumberSeg6.sendKeys("12345678965441");
			Agent_RegisterCustomerPage.passportNumberSeg7.sendKeys("09");
			Thread.sleep(1000);
			((JavascriptExecutor) driver).executeScript("arguments[0].click();", Agent_RegisterCustomerPage.performCredidCheckBtn);
			log.debug("Filled the driving lisences and passport details and clicked on the perfrom credit check button");

		}
	}



}