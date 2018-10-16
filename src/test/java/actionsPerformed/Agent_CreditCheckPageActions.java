package actionsPerformed;

import java.io.IOException;
import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;

import GlobalActions.RandomEmailAddressCreation;
import GlobalActions.Screenshots;
import helpers.Environment;
import pageobjects.Agent_CreditCheckDetailsPage;
import pageobjects.DeliveryPage;


public class Agent_CreditCheckPageActions extends Environment {
	public static String emailAdd;

	final static Logger log = Logger.getLogger("Agent_CreditCheckPageActions");

	public static void Creditcheck(String Firstname, String Surname) throws InterruptedException, IOException {
		Select dropdown = new Select(pageobjects.Agent_CreditCheckDetailsPage.Title);
		dropdown.selectByIndex(1);
		log.debug("Selected the dropdown Mr");
		Reporter.log("Selected the dropdown Mr");

		Agent_CreditCheckDetailsPage.FirstName.sendKeys(Firstname);
		log.debug("Entered First name");
		Agent_CreditCheckDetailsPage.LastName.sendKeys(Surname);
		log.debug("Entered Last name");

		emailAdd=RandomEmailAddressCreation.RandomEmail();
		Agent_CreditCheckDetailsPage.Email.sendKeys(emailAdd);
		log.debug("Entered email address is :: " + emailAdd);
		Reporter.log("Entered email address is :: " + emailAdd);

		log.debug("Entered email address");
		Agent_CreditCheckDetailsPage.DOB.sendKeys("10-10-1981");
		log.debug("Entered date of birth");
		Thread.sleep(2000);
		Agent_CreditCheckDetailsPage.ContactNumber.sendKeys("07888594958");
		log.debug("Entered contact number");
		Thread.sleep(2000);

		Agent_CreditCheckDetailsPage.HouseNumber.sendKeys("Flat 2");
		Thread.sleep(2000);
		Agent_CreditCheckDetailsPage.Postcode.sendKeys("SL1 1EL");
		log.debug("Entered House Postcode  as SL1 1EL");

		Thread.sleep(2000);
		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			pageobjects.Agent_CreditCheckDetailsPage.FindAddress.click();
			log.debug("Clicked on the Find address button");
			pageobjects.Agent_CreditCheckDetailsPage.Selectedaddress.click();
			log.debug("Selected an address");
			Screenshots.captureScreenshot();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			Assert.fail("Unable to select Post code address");
			Screenshots.captureScreenshot();
		}

		Agent_CreditCheckDetailsPage.YearsatAddress.sendKeys("09");
		log.debug("Entered Number of Years at address");

		Agent_CreditCheckDetailsPage.monthsatAddress.sendKeys("05");
		log.debug("Entered Number of Months at address");
		Screenshots.captureScreenshot();

	}

	public static void Creditcheck(String Firstname, String Surname, String HouseNumber, String PostCode) throws InterruptedException, IOException {
		Select dropdown = new Select(pageobjects.Agent_CreditCheckDetailsPage.Title);
		/*WebElement ele = driver.findElement(By.xpath("/*//*[@id='regTitle'] or //[@id='ccTitle']"));
		Select sel = new Select(ele);*/
		//sel.selectByVisibleText("Mr");
		//log.debug("Select a Gender");
		dropdown.selectByIndex(1);
		log.debug("Selected the dropdown Mr");
		Reporter.log("Selected the dropdown Mr");

		Agent_CreditCheckDetailsPage.FirstName.sendKeys(Firstname);
		log.debug("Entered First name");
		Agent_CreditCheckDetailsPage.LastName.sendKeys(Surname);
		log.debug("Entered Last name");

		emailAdd=RandomEmailAddressCreation.RandomEmail();
		Agent_CreditCheckDetailsPage.Email.sendKeys(emailAdd);
		log.debug("Entered email address is :: " + emailAdd);
		Reporter.log("Entered email address is :: " + emailAdd);

		log.debug("Entered email address");
		Agent_CreditCheckDetailsPage.DOB.sendKeys("10-10-1971");
		log.debug("Entered date of birth");
		Thread.sleep(2000);
		Agent_CreditCheckDetailsPage.ContactNumber.sendKeys("07888594958");
		log.debug("Entered contact number");
		Thread.sleep(2000);
		try {
			Agent_CreditCheckDetailsPage.HouseNumber.sendKeys(HouseNumber);
			Thread.sleep(2000);
			Agent_CreditCheckDetailsPage.Postcode.sendKeys(PostCode);
			log.debug("Entered House Postcode  as -" + PostCode);
			Thread.sleep(2000);

			pageobjects.Agent_CreditCheckDetailsPage.FindAddress.click();
			log.debug("Clicked on the Find address button");
			Thread.sleep(4000);
			pageobjects.Agent_CreditCheckDetailsPage.Selectedaddress.click();
			log.debug("Selected an address");
			Screenshots.captureScreenshot();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			Assert.fail("Unable to select Post code address");
			Screenshots.captureScreenshot();
		}

		Agent_CreditCheckDetailsPage.YearsatAddress.sendKeys("09");
		log.debug("Entered Number of Years at address");

		Agent_CreditCheckDetailsPage.monthsatAddress.sendKeys("05");
		log.debug("Entered Number of Months at address");
		Screenshots.captureScreenshot();

	}

	public static void CreditcheckAndTenDigitContact(String Firstname, String Surname, String HouseNumber, String PostCode)
			throws InterruptedException, IOException {
		Select dropdown = new Select(pageobjects.Agent_CreditCheckDetailsPage.Title);
		dropdown.selectByIndex(1);
		log.debug("Selected the dropdown Mr");
		Reporter.log("Selected the dropdown Mr");

		Agent_CreditCheckDetailsPage.FirstName.sendKeys(Firstname);
		log.debug("Entered First name");
		Agent_CreditCheckDetailsPage.LastName.sendKeys(Surname);
		log.debug("Entered Last name");

		emailAdd=RandomEmailAddressCreation.RandomEmail();
		Agent_CreditCheckDetailsPage.Email.sendKeys(emailAdd);
		log.debug("Entered email address is :: " + emailAdd);
		Reporter.log("Entered email address is :: " + emailAdd);

		//Agent_CreditCheckDetailsPage.Email.sendKeys(RandomEmailAddressCreation.RandomEmail());

		log.debug("Entered email address");
		Agent_CreditCheckDetailsPage.DOB.sendKeys("10-10-1981");
		log.debug("Entered date of birth");
		Thread.sleep(2000);

		//11 digit contact number validation
		Agent_CreditCheckDetailsPage.ContactNumber.sendKeys("07123456789");
		log.debug("Entered 11 digit contact number");
		Thread.sleep(2000);
		if(Agent_CreditCheckDetailsPage.Contact_errorAgent.isDisplayed()){
			log.debug("Not accepting 11 digit contact number with 0 in the beginning");
		}
		else{
			log.debug("Accepting 11 digit contact number with 0 in the beginning");
		}
		Thread.sleep(2000);
		Screenshots.captureScreenshot();
		Agent_CreditCheckDetailsPage.ContactNumber.clear();
		log.debug("Contact number cleared");
		Thread.sleep(2000);
		Screenshots.captureScreenshot();

		//10 digit contact number validation
		Agent_CreditCheckDetailsPage.ContactNumber.sendKeys("7123456789");
		log.debug("Entered 10 digit contact number");
		Thread.sleep(2000);
		if(Agent_CreditCheckDetailsPage.Contact_errorAgent.isDisplayed()){
			log.debug("Not accepting 10 digit contact number without 0 in the beginning");
		}
		else{
			log.debug("Accepting 10 digit contact number without 0 in the beginning");
		}
		Screenshots.captureScreenshot();

		try {
			Agent_CreditCheckDetailsPage.HouseNumber.sendKeys(HouseNumber);
			Thread.sleep(2000);
			Agent_CreditCheckDetailsPage.Postcode.sendKeys(PostCode);
			log.debug("Entered House Postcode  as -" + PostCode);
			Thread.sleep(2000);

			pageobjects.Agent_CreditCheckDetailsPage.FindAddress.click();
			log.debug("Clicked on the Find address button");
			pageobjects.Agent_CreditCheckDetailsPage.Selectedaddress.click();
			log.debug("Selected an address");
			Screenshots.captureScreenshot();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			Assert.fail("Unable to select Post code address");
			Screenshots.captureScreenshot();
		}

		Agent_CreditCheckDetailsPage.YearsatAddress.sendKeys("09");
		log.debug("Entered Number of Years at address");

		Agent_CreditCheckDetailsPage.monthsatAddress.sendKeys("05");
		log.debug("Entered Number of Months at address");
		Screenshots.captureScreenshot();

	}

	// by JamalKhan
	public static void CreditcheckReferStatus()throws InterruptedException, IOException {
		Thread.sleep(5000);
		try{
			if(driver.findElements(By.xpath("//h2[@id='creditCheckHeader']")).size()>0)
			{
				String refStatus = Agent_CreditCheckDetailsPage.CreditCheckReferStatus.getText();

				Thread.sleep(5000);
				if(refStatus.contains("Refer: You've been conditionally referred. You'll be able to upgrade to a new device after six months on this tariff. Are you happy to continue? If the customer agrees to the six month restriction, call the referral team before placing the order on 08001116000.")){
					System.out.println("Credit Check status for SIMO only validated successfully::  " + refStatus);
					log.debug("Credit Check status for SIMO only validated successfully::  " + refStatus);
				}else if(refStatus.contains("ReferWithSimOnly: Customer has been referred for SIMO order. Abandon checkout and create a SIMO order if customer wants SIMO. Tell customer that even SIMO order will be referred")){
					System.out.println("Credit Check status for Non SIMO  validated successfully::  " + refStatus);
					log.debug("Credit Check status for Non SIMO  validated successfully::  " + refStatus);
				}else{
					System.out.println("Credit Check:: Refer status message is not matching with expected " + refStatus);
					log.debug("Credit Check:: Refer status message is not matching with expected " + refStatus);
					Assert.fail("Credit Check:: Refer status message is not matching with expected " + refStatus);
				}
			Screenshots.captureScreenshot();
			}
		}catch (Exception e) {
			// TODO Auto-generated catch block

			System.out.println("Unable to select Credit Check status with Refer");
			log.debug("Unable to select Credit Check status with Refer");
			Screenshots.captureScreenshot();
			Assert.fail("Unable to select Credit Check status with Refer");
		}
		Screenshots.captureScreenshot();
	}

	public static void AddressDetails() {
		try{

			/*
			String address = Agent_CreditCheckDetailsPage.Address.getText();
			log.debug("Address is:: ");
*/

			Thread.sleep(2000);
			String num = Agent_CreditCheckDetailsPage.ContactNumber.getText();
			if(num.isEmpty() ) {
				Agent_CreditCheckDetailsPage.ContactNumber.sendKeys("07888594958");
				log.debug("Entered contact number");
			}



			Agent_CreditCheckDetailsPage.YearsatAddress.sendKeys("09");
			log.debug("Entered Number of Years at address");

			Agent_CreditCheckDetailsPage.monthsatAddress.sendKeys("05");
			log.debug("Entered Number of Months at address");
			Screenshots.captureScreenshot();

		}catch(Exception e){
			System.out.println("Unable to enter years and months");
			log.debug("Unable to enter years and months");
		}

	}


	public static void BankDetails(String Username) throws InterruptedException, IOException {

		driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
		Agent_CreditCheckDetailsPage.AccountName.sendKeys(Username);
		log.debug("Entered Account name");
		Agent_CreditCheckDetailsPage.SortCode.sendKeys("201596");
		log.debug("Entered Sort code");
		Agent_CreditCheckDetailsPage.AccountNumber.sendKeys("10207136");
		log.debug("Entered Account Number");
		Screenshots.captureScreenshot();
		Agent_CreditCheckDetailsPage.CardCapture.click();
		log.debug("Clicked on card capture");

		Thread.sleep(5000);
		String Mainwindow = driver.getWindowHandle();
		// getting all the popup windows , hence using getwindowhandles instead of
		// getwindowhandle
		Set<String> s1 = driver.getWindowHandles();
		Iterator<String> i1 = s1.iterator();
		while (i1.hasNext()) {
			String ChildWindow = i1.next();
			if (!Mainwindow.equalsIgnoreCase(ChildWindow)) {
				// Switching to Child window
				driver.switchTo().window(ChildWindow);
				System.out.println("Switched to child window");

				//driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
				Thread.sleep(10000);

				Agent_CreditCheckDetailsPage.CardHolderName.sendKeys(Username);
				log.debug("Entered card holder name");

				Select CardTypeDropDown = new Select(pageobjects.Agent_CreditCheckDetailsPage.CardType);
				CardTypeDropDown.selectByIndex(3);
				log.debug("Entered Card type");

				Agent_CreditCheckDetailsPage.CardNumber.sendKeys("4539791001730106");
				log.debug("Entered card number");
				Thread.sleep(2000);

				Select CardMonthDropdown = new Select(pageobjects.Agent_CreditCheckDetailsPage.CardMonth);
				log.debug("Entered card month");
				CardMonthDropdown.selectByIndex(12);
				Thread.sleep(2000);

				Select CardYearDropdown = new Select(pageobjects.Agent_CreditCheckDetailsPage.CardYear);
				CardYearDropdown.selectByIndex(2);
				log.debug("Entered card year");
				Thread.sleep(2000);

				Agent_CreditCheckDetailsPage.SecurityCode.sendKeys("123");
				log.debug("Entered security code");
				Thread.sleep(3000);

				//Agent_CreditCheckDetailsPage.UsethisCard.click();
				Screenshots.captureScreenshot();
				WebElement element = pageobjects.Agent_CreditCheckDetailsPage.UsethisCard;
				JavascriptExecutor executor = (JavascriptExecutor)driver;
				executor.executeScript("arguments[0].click();", element);
				log.debug("Clicked on use this card");

				// Need to add steps here

				// Closing the Child Window.
				// driver.close();

				// Above is not required as clicking on the use this card button would
				// automatically close

			}
		}
		// Switching to Parent window i.e Main Window.
		driver.switchTo().window(Mainwindow);
		//driver.manage().timeouts().implicitlyWait(12,TimeUnit.SECONDS);
		Thread.sleep(4000);

		//*[@id="cardCaptureError"]/ul/li[4]/label[1]
		int success = driver.findElements(By.xpath("//*[@id = 'cardCaptureStatus' and @class ='success']")).size();
		if (success > 0) {
			Agent_CreditCheckDetailsPage.AgreeCreditCheck.click();
			Thread.sleep(4000);
			Agent_CreditCheckDetailsPage.PerformCreditCheck.click();
			Screenshots.captureScreenshot();
			Thread.sleep(15000);
		}
		else
		{
			log.debug("Error is present in card capture screen, unable to capture card details, need to check once manually");
		}
		Screenshots.captureScreenshot();
	}

	public static void BankDetails_apostropheValidation(String Username) throws InterruptedException, IOException {

		driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
		Agent_CreditCheckDetailsPage.AccountName.sendKeys(Username);
		log.debug("Entered Account name");
		Agent_CreditCheckDetailsPage.SortCode.sendKeys("201596");
		log.debug("Entered Sort code");
		Agent_CreditCheckDetailsPage.AccountNumber.sendKeys("10207136");
		log.debug("Entered Account Number");
		Screenshots.captureScreenshot();
		Agent_CreditCheckDetailsPage.CardCapture.click();
		log.debug("Clicked on card capture");

		Thread.sleep(5000);
		String Mainwindow = driver.getWindowHandle();

		Set<String> s1 = driver.getWindowHandles();
		Iterator<String> i1 = s1.iterator();
		while (i1.hasNext()) {
			String ChildWindow = i1.next();
			if (!Mainwindow.equalsIgnoreCase(ChildWindow)) {
				// Switching to Child window
				driver.switchTo().window(ChildWindow);
				System.out.println("Switched to child window");

				//driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
				Thread.sleep(10000);

				Agent_CreditCheckDetailsPage.CardHolderName.sendKeys(Username);
				log.debug("Entered card holder name");

				Select CardTypeDropDown = new Select(pageobjects.Agent_CreditCheckDetailsPage.CardType);
				CardTypeDropDown.selectByIndex(3);
				log.debug("Entered Card type");

				Agent_CreditCheckDetailsPage.CardNumber.sendKeys("4539791001730106");
				log.debug("Entered card number");
				Thread.sleep(2000);

				Select CardMonthDropdown = new Select(pageobjects.Agent_CreditCheckDetailsPage.CardMonth);
				log.debug("Entered card month");
				CardMonthDropdown.selectByIndex(12);
				Thread.sleep(2000);

				Select CardYearDropdown = new Select(pageobjects.Agent_CreditCheckDetailsPage.CardYear);
				CardYearDropdown.selectByIndex(2);
				log.debug("Entered card year");
				Thread.sleep(2000);

				Agent_CreditCheckDetailsPage.SecurityCode.sendKeys("123");
				log.debug("Entered security code");
				Thread.sleep(3000);

				//Agent_CreditCheckDetailsPage.UsethisCard.click();
				Screenshots.captureScreenshot();
				WebElement element = pageobjects.Agent_CreditCheckDetailsPage.UsethisCard;
				JavascriptExecutor executor = (JavascriptExecutor)driver;
				executor.executeScript("arguments[0].click();", element);
				log.debug("Clicked on use this card");

			}
		}
		// Switching to Parent window i.e Main Window.
		driver.switchTo().window(Mainwindow);
		//driver.manage().timeouts().implicitlyWait(12,TimeUnit.SECONDS);
		Thread.sleep(4000);

		//*[@id="cardCaptureError"]/ul/li[4]/label[1]
		int success = driver.findElements(By.xpath("//*[@id = 'cardCaptureStatus' and @class ='success']")).size();
		if (success > 0) {
			Agent_CreditCheckDetailsPage.AgreeCreditCheck.click();
			Thread.sleep(15000);
			Agent_CreditCheckDetailsPage.PerformCreditCheck.click();
			Screenshots.captureScreenshot();
			Thread.sleep(25000);
		}
		else
		{
			log.debug("Error is present in card capture screen, unable to capture card details, need to check once manually");
		}
		Screenshots.captureScreenshot();
	}


}
