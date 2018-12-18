package actionsPerformed;

import java.io.IOException;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import GlobalActions.scrollToAnElement;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;

import GlobalActions.RandomEmailAddressCreation;
import helpers.Environment;
import pageobjects.Agent_CreditCheckDetailsPage;
import pageobjects.Agent_RegisterCustomerPage;
import GlobalActions.Screenshots;

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
			throws InterruptedException, IOException {
		Thread.sleep(5000);
		try {
			Screenshots.captureScreenshot();
			Select dropdown = new Select(pageobjects.Agent_RegisterCustomerPage.Title);
			dropdown.selectByIndex(1);
			log.debug("Selected the dropdown Mr");
			Reporter.log("Selected the dropdown Mr");
			//Thread.sleep(5000);
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
		Thread.sleep(2000);
		Agent_RegisterCustomerPage.intialPassword.sendKeys("test123");
		Agent_RegisterCustomerPage.confirmPassword.sendKeys("test123");
		Thread.sleep(2000);

		try {

				Agent_RegisterCustomerPage.HouseNumber.sendKeys(HouseNumber);
				//Thread.sleep(2000);
				Agent_RegisterCustomerPage.Postcode.sendKeys(PostCode);
				log.debug("Entered House Postcode  as: " + PostCode);

				//Thread.sleep(2000);
				pageobjects.Agent_RegisterCustomerPage.FindAddress.click();
				//Thread.sleep(3000);
				log.debug("Clicked on the Find address button");
				Thread.sleep(3000);
				JavascriptExecutor executor = (JavascriptExecutor)driver;
				executor.executeScript("arguments[0].click();", pageobjects.Agent_RegisterCustomerPage.Selectedaddress);
				//pageobjects.Agent_RegisterCustomerPage.Selectedaddress.click();
				log.debug("Selected an address");

		} catch (Exception e) {
			e.getMessage();
			log.debug("Try catch block exception in Agent register customer actions page, nothing to worry :)");
		}

		Thread.sleep(2000);
		if(driver.findElements(By.id("marketingRequired")).size()>0) {

			JavascriptExecutor executor = (JavascriptExecutor)driver;
			executor.executeScript("arguments[0].click();", Agent_RegisterCustomerPage.Check_box);
			//Agent_RegisterCustomerPage.Check_box.click();
			log.debug("Selected the TC checkbox");
			Thread.sleep(2000);
		}

		Select dropdown2 = new Select(pageobjects.Agent_RegisterCustomerPage.securityQuestion);
		dropdown2.selectByIndex(2);
		pageobjects.Agent_RegisterCustomerPage.securityAnswer.sendKeys("Rotary");
		Thread.sleep(2000);
		Screenshots.captureScreenshot();
		//Agent_RegisterCustomerPage.registerCustomer.click();
		WebElement element = pageobjects.Agent_RegisterCustomerPage.registerCustomer;
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", element);

		Thread.sleep(2000);
		log.debug("Clicked on Register customer");

	}

	public static void PaybyCard() throws InterruptedException, IOException {
		String OneOff = Agent_RegisterCustomerPage.ZeroOneOff.getText();
		log.debug(OneOff);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		if (OneOff.contains("�0.00")) {
			Agent_RegisterCustomerPage.SubmitBtn.click();
		} else {
			log.debug("Pay by card button is enabled ");
			//Thread.sleep(4000);
			scrollToAnElement.scrollToElement(driver.findElement(By.xpath("//h3[normalize-space()='Order Summary']")));
			Screenshots.captureScreenshot();
			Thread.sleep(3000);
			Agent_RegisterCustomerPage.PayByCard.click();
			Thread.sleep(5000);
			log.debug("Clicked on pay by card ");
		}
		Thread.sleep(2000);
	}

	public static void PaybyCard_new() throws InterruptedException {

			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
			log.debug("Pay by card button is enabled ");
			Thread.sleep(10000);
			Agent_RegisterCustomerPage.PayByCard.click();
			log.debug("Clicked on pay by card ");
			Thread.sleep(5000);
	}

	public static void CardDetails_PayM() throws InterruptedException, IOException {

		//driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
		log.debug("Mipay bit : ");
		Thread.sleep(8000);
		Screenshots.captureScreenshot();
		//driver.findElements(By.xpath("//label[contains(text(),'Card ending with:')]")).size();
		if (driver.findElements(By.xpath("//span[@id='lblCardNumber'] | //div[@id='cardDetails']/div[2]/p/label")).size() > 0) {
			String PaybyCardCVV2 = Agent_RegisterCustomerPage.PayByCard_2.getText();
			Thread.sleep(2000);
			//if (PaybyCardCVV2.contains("Card ending with:")) {
			System.out.print("The text is :" + PaybyCardCVV2);
			Agent_RegisterCustomerPage.SecurityCode.sendKeys("123");
			log.debug("Security card is entered as 123");
			Screenshots.captureScreenshot();
			Thread.sleep(2000);
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
			Screenshots.captureScreenshot();
			log.debug("completed  Mypay bit");
			Thread.sleep(6000);
		}

	}

	public static void CardDetails() throws InterruptedException {
		//Thread.sleep(15000);
		driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
		if (driver.findElements(By.xpath("//input[@id='CardHolderName' or @id='txtCardHolderName']")).size() >= 1) {
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
			Thread.sleep(8000);
			System.out.println("Going to validate pay by card page displayed from mipay");
			Agent_RegisterCustomerPage.SecurityCode.sendKeys("123");
			Thread.sleep(2000);
			Agent_RegisterCustomerPage.UsethisCard.click();
			Thread.sleep(8000);
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
		Thread.sleep(3000);
		if(driver.findElements(By.id("marketingRequired")).size()>0) {

			JavascriptExecutor executor = (JavascriptExecutor)driver;
			executor.executeScript("arguments[0].click();", Agent_RegisterCustomerPage.Check_box);
			//Agent_RegisterCustomerPage.Check_box.click();
			log.debug("Selected the TC checkbox");
			Thread.sleep(2000);
		}

		Agent_RegisterCustomerPage.registerCustomer.click();
		Thread.sleep(8000);
		log.debug("Clicked on Register customer");
		log.debug("Clicked on Register customer");

	}

	public static void provideDrivingLicence() throws InterruptedException, IOException {
			Thread.sleep(10000);
		/*if (driver.findElements(By.id("additionalCardDetailsCheckbox")).size() > 0) {
			((JavascriptExecutor) driver).executeScript("arguments[0].click();", Agent_RegisterCustomerPage.additionalCardDetailsCheckbox);
			Thread.sleep(5000);
			((JavascriptExecutor) driver).executeScript("arguments[0].click();", Agent_RegisterCustomerPage.additionalCaptureCardDetails);
			Thread.sleep(15000);

			String mainWindowHandle = driver.getWindowHandle();

			try {
				//String mainWindowHandle = driver.getWindowHandle ();
				Set<String> openWindowSize = driver.getWindowHandles();
				log.debug(openWindowSize.size() + " windows are opend");
				//Switch to child window and close it
				for (String childWindowHandle : driver.getWindowHandles()) {
					//If window handle is not main window handle then close it
					if (!childWindowHandle.equals(mainWindowHandle)) {
						driver.switchTo().window(childWindowHandle);
						// Close child windows
						// driver.close();
					} else {
						//switch back to main window
						driver.switchTo().window(mainWindowHandle);
						log.debug("Switched window");
					}
				}
			} catch (Exception e) {
				log.debug("Failed to switch to window :: " + e.getStackTrace());

			}

			Thread.sleep(5000);
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
		*//*
			try {
				String mainWindowHandle = driver.getWindowHandle ();
				Set<String> openWindowSize = driver.getWindowHandles ();
				log.debug(openWindowSize.size() + " windows are opend");
				//Switch to child window and close it
				for (String childWindowHandle : driver.getWindowHandles ()) {
					//If window handle is not main window handle then close it
					if (!childWindowHandle.equals (mainWindowHandle)) {
						driver.switchTo ().window (childWindowHandle);
						// Close child windows
						// driver.close();
					} else {
						//switch back to main window
						driver.switchTo ().window (mainWindowHandle);
						log.debug ("Switched window");
					}
				}
			} catch (Exception e){
				log.debug ("Failed to switch to window :: " + e.getStackTrace ());

			}
			*//*

			driver.switchTo().window(mainWindowHandle);
			Thread.sleep(5000);
		}*/

			((JavascriptExecutor) driver).executeScript("arguments[0].click();", Agent_RegisterCustomerPage.licenceDetailsCheckbox);
			Agent_RegisterCustomerPage.licencePostCode.sendKeys("SL14Dx");
			Agent_RegisterCustomerPage.licenceNumberSeg1.sendKeys("HOWES");
			Agent_RegisterCustomerPage.licenceNumberSeg2.sendKeys("905110");
			Agent_RegisterCustomerPage.licenceNumberSeg3.sendKeys("MD9");
			Agent_RegisterCustomerPage.licenceNumberSeg4.sendKeys("33");
			Thread.sleep(3000);

			((JavascriptExecutor) driver).executeScript("arguments[0].click();", Agent_RegisterCustomerPage.passportDetailsCheckbox);
			Thread.sleep(3000);
			Agent_RegisterCustomerPage.passportIssueCountry.sendKeys("gbr");
			Agent_RegisterCustomerPage.passportNumberSeg1.sendKeys("9542354167");
			Agent_RegisterCustomerPage.passportNumberSeg2.sendKeys("gbr");
			Agent_RegisterCustomerPage.passportNumberSeg3.sendKeys("9905116");
				Agent_RegisterCustomerPage.passportNumberSeg4.sendKeys("M");
			Agent_RegisterCustomerPage.passportNumberSeg5.sendKeys("2011097");
			Agent_RegisterCustomerPage.passportNumberSeg6.sendKeys("12345678911111");
			Agent_RegisterCustomerPage.passportNumberSeg7.sendKeys("08");
			Thread.sleep(2000);
			Screenshots.captureScreenshot();
			Thread.sleep(2000);
			((JavascriptExecutor) driver).executeScript("arguments[0].click();", Agent_RegisterCustomerPage.performCredidCheckBtn);
			log.debug("Filled the driving lisences and passport details and clicked on the perfrom credit check button");


	}

	//MBB validation
	public static void MBBValidation(String MBBStatus) throws InterruptedException {

		if(MBBStatus.equalsIgnoreCase("YES")){

			//Business Preference validation for MBB
			if (Agent_RegisterCustomerPage.O2Products.isSelected()) {
				System.out.println("MBB:: O2Products business preference selected by default");
				log.debug("MBB:: O2Products business preference selected by default");
			}else{
				System.out.println("MBB:: O2Products business preference not selected by default");
				log.debug("MBB:: O2Products business preference not selected by default");
			}
			if (Agent_RegisterCustomerPage.O2PerksAndExtras.isSelected()) {
				System.out.println("MBB:: O2 Perks And Extras preference selected by default");
				log.debug("MBB:: O2 Perks And Extras preference selected by default");
			}else{
				System.out.println("MBB:: O2 Perks And Extras preference not selected by default");
				log.debug("MBB:: O2 Perks And Extras preference not selected by default");
			}
			if (Agent_RegisterCustomerPage.OffersFromO2Partner.isSelected()) {
				System.out.println("MBB:: Offers From O2 Partner preference selected by default");
				log.debug("MBB:: Offers From O2 Partner preference selected by default");
			}else{
				System.out.println("MBB:: Offers From O2 Partner preference not selected by default");
				log.debug("MBB:: Offers From O2 Partner preference not selected by default");
			}
			if (Agent_RegisterCustomerPage.PartnersContacting.isSelected()) {
				System.out.println("MBB:: Partners Contacting preference selected by default");
				log.debug("MBB:: Partners Contacting preference selected by default");
			}else{
				System.out.println("MBB:: Partners Contacting preference not selected by default");
				log.debug("MBB:: Partners Contacting preference not selected by default");
			}

			Thread.sleep(4000);

			//Channel Preference validation for MBB

			if (Agent_RegisterCustomerPage.Contact_Text.isSelected()) {
				System.out.println("MBB:: Contact_Text preference selected by default");
				log.debug("MBB:: Contact_Text preference selected by default");
			}else{
				System.out.println("MBB:: Contact_Text preference not selected by default");
				log.debug("MBB:: Contact_Text preference not selected by default");
			}
			if (Agent_RegisterCustomerPage.Contact_Email.isSelected()) {
				System.out.println("MBB:: Contact_Email preference selected by default");
				log.debug("MBB:: Contact_Email preference selected by default");
			}else{
				System.out.println("MBB:: Contact_Email preference not selected by default");
				log.debug("MBB:: Contact_Email preference selected not by default");
			}
			if (Agent_RegisterCustomerPage.Contact_Phone.isSelected()) {
				System.out.println("MBB:: Contact_Phone preference selected by default");
				log.debug("MBB:: Contact_Phone preference selected by default");
			}else{
				System.out.println("MBB:: Contact_Phone preference not selected by default");
				log.debug("MBB:: Contact_Phone preference selected not by default");
			}
			if (Agent_RegisterCustomerPage.Contact_Post.isSelected()) {
				System.out.println("MBB:: Contact_Post preference selected by default");
				log.debug("MBB:: Contact_Post preference selected by default");
			}else{
				System.out.println("MBB:: Contact_Post preference not selected by default");
				log.debug("MBB:: Contact_Post preference not selected by default");
			}
		}
	}

//GDPR Preferences Section AFA --- JamalKhan

	public static void PreferencesSection_AFA(String BP1, String BP2, String BP3, String BP4, String Chn1, String Chn2, String Chn3, String Chn4, String customer, String gdprStatus,String DeviceType, String Device_Module) throws IOException {

		try {

			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

			if(gdprStatus.equalsIgnoreCase("Enabled")) {

					/*
						//MBB validation
						Agent_RegisterCustomerPage.MBBValidation(MBBStatus);
					*/

				if(DeviceType.equalsIgnoreCase("Connected")){

					System.out.println("Device type is connected and we are proceeding");
					log.debug("Device type is connected and we are proceeding");

					if (driver.findElements(By.xpath("//div[@class='gdprLabel']")).size() > 0) {
						scrollToAnElement.scrollToElement(driver.findElement(By.xpath("//div[@class='gdprLabel']")));
						Screenshots.captureScreenshot();
						System.out.println("GDPR is Enabled and we are proceeding");
						log.debug("GDPR is Enabled and we are proceeding");

						//Is this order for you or someone else validation
						String thisOrderHeader = Agent_RegisterCustomerPage.thisOrderTxt.getText();

						if (thisOrderHeader.contains("Is this order for you or someone else?")) {
							System.out.println("As expected Text:: " + thisOrderHeader + " is displayed");
							log.debug("As expected Text:: " + thisOrderHeader + " is displayed");

							if (customer.contains("Me")) {
								/*Thread.sleep(3000);
								Screenshots.captureScreenshot();*/
								//Me radio Btn
								boolean defaultSelect = Agent_RegisterCustomerPage.Me_radioBtn.isSelected();

								if (defaultSelect) {
									System.out.println("Me is selected by Default");
									log.debug("Me is selected by Default");
								} else {
									//Agent_RegisterCustomerPage.Me_radioBtn.click();
									System.out.println("By Default Me radio button is not selected");
									log.debug("By Default Me radio button is not selected");
									Assert.fail("By Default Me radio button is not selected");
								}

								if(Device_Module.equalsIgnoreCase("Tablet") || Device_Module.equalsIgnoreCase("MBB") || Device_Module.equalsIgnoreCase("Simo"))
								{
									System.out.println("Device is MBB/Tablet");
									log.debug("Device is MBB/Tablet");
									// SaveMyPreferences button status before selecting business preferences
									if (Agent_RegisterCustomerPage.SaveMyPreferences.isEnabled()) {
											System.out.println("As expected for Tablet/MBB device :: Save My Preference Button is Enabled before selecting Business/Channel Preferences");
											log.debug("As expected for Tablet/MBB device :: Save My Preference Button is Enabled before selecting Business/Channel Preferences");
									} else {
										System.out.println("For Tablet/MBB devices :: Save My Preference Button is disabled before selecting business/channel preferences");
										log.debug("For Tablet/MBB devices :: Save My Preference Button is disabled before selecting business/channel preferences");
										//Assert.fail("For Tablet/MBB devices :: Save My Preference Button is disabled before selecting business/channel preferences");
									}

								}else{

									System.out.println("Device is other than MBB/Tablet");
									log.debug("Device is other than MBB/Tablet");
									// SaveMyPreferences button status before selecting business preferences
									if (Agent_RegisterCustomerPage.SaveMyPreferences.isEnabled()) {
											System.out.println("Save My Preference Button is Enabled before selecting Business/Channel Preferences");
											log.debug("Save My Preference Button is Enabled before selecting Business/Channel Preferences");
											Assert.fail("Save My Preference Button is Enabled before selecting Business/Channel Preferences");

									} else {
										System.out.println("As expected Save My Preference Button is disabled before selecting business/channel preferences");
										log.debug("As expected Save My Preference Button is disabled before selecting business/channel preferences");

										//Skip Preferences button status before selecting business preferences
										if (Agent_RegisterCustomerPage.SkipPreference.isDisplayed()) {

											System.out.println("As expected Skip Preferences is enabled before selecting Business preferences");
											log.debug("As expected Skip Preferences is enabled before selecting Business preferences");
										} else {
											System.out.println("Skip Preferences is disabled before selecting Business preferences");
											log.debug("Skip Preferences is disabled before selecting Business preferences");
											Assert.fail("Skip Preferences is disabled before selecting Business preferences");
										}
									}
								}

								//checking Channel preference is displaying/not
								if (Agent_RegisterCustomerPage.ChannelePreferences.isDisplayed()) {
									System.out.println("Channel preferences is displaying before selecting any business preferences");
									log.debug("Channel preferences is displaying before selecting any business preferences");
									Assert.fail("Channel preferences is displaying before selecting any business preferences");
									}else{
									System.out.println("Channel preferences is not displaying before selecting business preferences");
									log.debug("Channel preferences is not displaying before selecting business preferences");
								}

								//GDPR_Business_Validation

								//O2 Products
								if (driver.findElements(By.xpath("(//div[@class='checkBoxContent'])[1]")).size() > 0) {

									//O2 Products Tile Text validation
									String contentText = Agent_RegisterCustomerPage.O2Products_Text.getText();

									if (contentText.contains("I'm happy for O2 to let me know about offers relating to my service (upgrades, new tariffs, roaming, O2 Wifi etc.)")) {
										System.out.println("O2 Tile Content text has as expected:: " + contentText);
										log.debug("O2 Tile Content text has as expected:: " + contentText);
									} else {
										System.out.println("O2 Tile Content text is not matching:: " + contentText);
										log.debug("O2 Tile Content text is not matching:: " + contentText);
										//Assert.fail("O2 Tile Content text is not matching:: " + contentText);
									}

									//O2 Products Link clicking
									Agent_RegisterCustomerPage.O2Products_Link.click();
									System.out.println("Clicked on Learn more about O2 products link");
									log.debug("Clicked on Learn more about O2 products link");
									//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
									Thread.sleep(3000);
									Screenshots.captureScreenshot();

									//O2 Products Overlay Text validation
									String overlayText = Agent_RegisterCustomerPage.O2Products_OverlayText.getText();
									Thread.sleep(2000);
									if (overlayText.contains("We'll send you useful reminders like when you're due for an upgrade. You'll hear about any new tariffs that could suit you better and you'll know about services like O2 Wifi that can save you using your data. You could also get timely reminders of roaming offers if you're heading on holiday, to help you stay in control of your bills.")) {
										System.out.println("O2 products overlay text has as expected::" + overlayText);
										log.debug("O2 products overlay text has as expected::" + overlayText);
									} else {
										System.out.println("O2 products overlay text is not matching:: " + overlayText);
										log.debug("O2 products overlay text is not matching:: " + overlayText);
										//Assert.fail("O2 products overlay text is not matching:: " + overlayText);
									}
									Thread.sleep(3000);
									//O2 Products Close Button clicking
									Agent_RegisterCustomerPage.O2ProductsClose_CloseButton.click();
									System.out.println("Clicked on O2 products overlay close button");
									log.debug("Clicked on O2 products overlay close button");

								}

								//O2 Perks And Extras
								if (driver.findElements(By.xpath("(//div[@class='checkBoxContent'])[2]")).size() > 0) {

									//O2 Perks And Extra Tile Text validation
									String contentText = Agent_RegisterCustomerPage.O2PerksAndExtras_Text.getText();

									if (contentText.contains("I'm happy for O2 to let me know about offers, perks and services that are relevant to me, like Priority.")) {
										System.out.println("O2 perks and extras Tile Content text has as expected:: " + contentText);
										log.debug("O2 perks and extras Tile Content text has as expected:: " + contentText);
									} else {
										System.out.println("O2 perks and extras Tile Content text is not matching:: " + contentText);
										log.debug("O2 perks and extras Tile Content text is not matching:: " + contentText);
										//Assert.fail("O2 perks and extras Tile Content text is not matching:: " + contentText);
									}

									//O2 Perks And Extras Link clicking
									Agent_RegisterCustomerPage.O2PerksAndExtras_Link.click();
									System.out.println("Clicked on Learn more about O2 perks and extras link");
									log.debug("Clicked on Learn more about O2 perks and extras link");
									//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

									Thread.sleep(3000);
									Screenshots.captureScreenshot();
									//O2 Perks And Extras Overlay Text validation
									String overlayText = Agent_RegisterCustomerPage.O2PerksAndExtras_OverlayText.getText();
									Thread.sleep(2000);
									if (overlayText.contains("We'll share perks we think you might be interested in. That might be a free gift for you through Priority, or tickets to your favourite band 48 hours before general release through Priority Tickets. We'll only send you extras that match the things you like.")) {
										System.out.println("O2 Perks And Extras overlay text has as expected::" + overlayText);
										log.debug("O2 Perks And Extras overlay text has as expected::" + overlayText);
									} else {
										System.out.println("O2 Perks And Extras overlay text is not matching:: " + overlayText);
										log.debug("O2 Perks And Extras overlay text is not matching:: " + overlayText);
										//Assert.fail("O2 Perks And Extras overlay text is not matching:: " + overlayText);
									}
									Thread.sleep(3000);
									//O2 Perks And Extras Close Button clicking
									Agent_RegisterCustomerPage.O2PerksAndExtras_CloseButton.click();
									System.out.println("Clicked on O2 perks and extras overlay close button");
									log.debug("Clicked on O2 perks and extras overlay close button");

								}

								//Offers From O2 Partner
								if (driver.findElements(By.xpath("(//div[@class='checkBoxContent'])[3]")).size() > 0) {

									//Offers From O2 Partner Text validation
									String contentText = Agent_RegisterCustomerPage.OffersFromO2Partner_Text.getText();

									if (contentText.contains("I'm happy for O2 to let me know about selected offers from leading brands, knowing my details won't be shared.")) {
										System.out.println("Offers from o2 partners brands Tile Content text has as expected:: " + contentText);
										log.debug("Offers from o2 partners brands Tile Content text has as expected:: " + contentText);
									} else {
										System.out.println("Offers from o2 partners brands Tile Content text is not matching:: " + contentText);
										log.debug("Offers from o2 partners brands Tile Content text is not matching:: " + contentText);
										//Assert.fail("Offers from o2 partners brands Tile Content text is not matching:: " + contentText);
									}

									//Offers From O2 Partner Link clicking
									Agent_RegisterCustomerPage.OffersFromO2Partner_Link.click();
									System.out.println("Clicked on Learn more about partner offers link");
									log.debug("Clicked on Learn more about partner offers link");
									//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

									Thread.sleep(3000);
									Screenshots.captureScreenshot();
									//Offers From O2 Partner Overlay Text validation
									String overlayText = Agent_RegisterCustomerPage.OffersFromO2Partner_OverlayText.getText();
									Thread.sleep(2000);
									if (overlayText.contains("We work with lots of well-known brands that often have offers that are too good to miss. When there's an offer we think you'll like, we'll let you know about it. The message will come from O2 and it will be us using your data, not the third party. Then you can go to the brand's website or their place on the high street to get it. We're careful to match the right offer to right people.")) {
										System.out.println("Offers From O2 Partner overlay text has as expected::" + overlayText);
										log.debug("Offers From O2 Partner overlay text has as expected::" + overlayText);
									} else {
										System.out.println("Offers From O2 Partner overlay text is not matching:: " + overlayText);
										log.debug("Offers From O2 Partner overlay text is not matching:: " + overlayText);
										//Assert.fail("Offers From O2 Partner overlay text is not matching:: " + overlayText);
									}
									Thread.sleep(3000);
									//Offers From O2 Partner Close Button clicking
									Agent_RegisterCustomerPage.OffersFromO2Partner_CloseButton.click();
									System.out.println("Clicked on offers from partners and brands overlay close button");
									log.debug("Clicked on offers from partners and brands overlay close button");

								}


								//Partners Contacting
								if (driver.findElements(By.xpath("//div[@data-label='Hotspot - partners contacting me directly']")).size() > 0) {

									//Partners Contacting Text validation
									String contentText = Agent_RegisterCustomerPage.PartnersContacting_Text.getText();

									if (contentText.contains("I'm happy for O2 to share my data with partner brands and for those brands to contact me directly.")) {
										System.out.println("Partners contacting me directly Tile Content text has as expected:: " + contentText);
										log.debug("Partners contacting me directly Tile Content text has as expected:: " + contentText);
									} else {
										System.out.println("Partners contacting me directly Tile Content text is not matching:: " + contentText);
										log.debug("Partners contacting me directly Content text is not matching:: " + contentText);
										//Assert.fail("Partners contacting me directly Content text is not matching:: " + contentText);

									}

									//Partners Contacting Link clicking
									Agent_RegisterCustomerPage.PartnersContacting_Link.click();
									System.out.println("Clicked on Learn more about direct brand offers link");
									log.debug("Clicked on Learn more about direct brand offers link");
									//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
									Thread.sleep(3000);
									Screenshots.captureScreenshot();
									//Partners Contacting Overlay Text validation
									String overlayText = Agent_RegisterCustomerPage.PartnersContacting_OverlayText.getText();
									Thread.sleep(2000);
									if (overlayText.contains("")) {
										System.out.println("Partners Contacting overlay text has as expected::" + overlayText);
										log.debug("Partners Contacting overlay text has as expected::" + overlayText);
									} else {
										System.out.println("Partners Contacting overlay text is not matching:: " + overlayText);
										log.debug("Partners Contacting overlay text is not matching:: " + overlayText);
										//Assert.fail("Partners Contacting overlay text is not matching:: " + overlayText);
									}
									Thread.sleep(3000);
									//Partners Contacting Close Button cklicking
									Agent_RegisterCustomerPage.PartnersContacting_CloseButton.click();
									System.out.println("Clicked on partners contacting me directly overlay close button");
									log.debug("Clicked onpartners contacting me directly overlay close button");

								}

								//Selecting Business preferences
								if (BP1.equalsIgnoreCase("Select")) {

									if (driver.findElements(By.xpath("//input[@name='B1']")).size() <= 0) {
										System.out.println("O2Products business preference checkBox is not displayed");
										log.debug("O2Products business preference checkBox is not displayed");
										Assert.fail("Failed :: O2Products business preference checkBox is not displayed");
									}
									Agent_RegisterCustomerPage.O2Products.click();
									System.out.println("O2Products business preference selected");
									log.debug("O2Products business preference selected");
								}else{
									log.debug("O2Products business preference not selected for status NOT");
								}

								if (BP2.equalsIgnoreCase("Select")) {
									if (driver.findElements(By.xpath("//input[@name='B2']")).size() <= 0) {
										System.out.println("O2 Perks And Extras business preference checkBox is not displayed");
										log.debug("O2 Perks And Extras business preference checkBox is not displayed");
										Assert.fail("Failed :: O2 Perks And Extras business preference checkBox is not displayed");
									}
									Agent_RegisterCustomerPage.O2PerksAndExtras.click();
									System.out.println("O2 Perks And Extras business preference selected");
									log.debug("O2 Perks And Extras business preference selected");
								}else{
									log.debug("O2 Perks And Extras business preference selected for status NOT");
								}

								if (BP3.equalsIgnoreCase("Select")) {
									if (driver.findElements(By.xpath("//input[@name='B3']")).size() <= 0) {
										System.out.println("Offers From O2 Partner business preference checkBox is not displayed");
										log.debug("Offers From O2 Partner business preference checkBox is not displayed");
										Assert.fail("Failed :: Offers From O2 Partner business preference checkBox is not displayed");
									}
									Agent_RegisterCustomerPage.OffersFromO2Partner.click();
									System.out.println("Offers From O2 Partner business preference selected");
									log.debug("Offers From O2 Partner business preference selected");
								}else{
									log.debug("Offers From O2 Partner business preference selected for status NOT");
								}


								if (BP4.equalsIgnoreCase("Select")) {
									if (driver.findElements(By.xpath("//div[@data-label='check4']/input")).size() <= 0) {
										System.out.println("Partners Contacting business preference checkBox is not displayed");
										log.debug("Partners Contacting business preference checkBox is not displayed");
										Assert.fail("Failed :: Partners Contacting business preference checkBox is not displayed");
									}
									Agent_RegisterCustomerPage.PartnersContacting.click();
									System.out.println("Partners Contacting business preference selected");
									log.debug("Partners Contacting business preference selected");
								}else{
									log.debug("Partners Contacting business preference selected for status NOT");
								}

								Thread.sleep(4000);
								Screenshots.captureScreenshot();
								// SaveMyPreferences button status after selecting business preferences
								if (Agent_RegisterCustomerPage.SaveMyPreferences.isEnabled()) {

									if(BP1.equalsIgnoreCase("Select") || BP2.equalsIgnoreCase("Select") || BP3.equalsIgnoreCase("Select") || BP4.equalsIgnoreCase("Select")) {
										System.out.println("Save My Preference Button is displayed after selecting business preferences");
										log.debug("Save My Preference Button is displayed after selecting business preferences");
										Assert.fail("Save My Preference Button is displayed after selecting business preferences");
									}
								} else {
									System.out.println("As expected Save My Preference Button is disabled after selecting Business Preferences");
									log.debug("As expected Save My Preference Button is disabled after selecting Business Preferences");
								}
								Thread.sleep(3000);

								//Skip Preferences button status after selecting business preferences
								if(Device_Module.equalsIgnoreCase("Tablet") || Device_Module.equalsIgnoreCase("MBB") || Device_Module.equalsIgnoreCase("Simo")) {
									if (Agent_RegisterCustomerPage.SkipPreference.isDisplayed()) {
										System.out.println("Skip Preferences is enabled for Tablet/MBB after selecting Business preferences");
										log.debug("Skip Preferences is enabled for Tablet/MBB after selecting Business preferences");
										Assert.fail("Skip Preferences is enabled for Tablet/MBB after selecting Business preferences");
									}
								}else {

									if (Agent_RegisterCustomerPage.SkipPreference.isDisplayed()) {

										System.out.println("Skip Preferences is enabled after selecting Business preferences");
										log.debug("Skip Preferences is enabled after selecting Business preferences");
									} else {
										System.out.println("Skip Preferences is disabled after selecting Business preferences");
										log.debug("Skip Preferences is disabled after selecting Business preferences");
										Assert.fail("Skip Preferences is disabled after selecting Business preferences");
									}
								}

								//checking Channel preference is displaying/not after business preferences selection
								if(BP1.equalsIgnoreCase("Select") || BP2.equalsIgnoreCase("Select") || BP3.equalsIgnoreCase("Select") || BP4.equalsIgnoreCase("Select")) {
									if (Agent_RegisterCustomerPage.ChannelePreferences.isDisplayed()) {
										System.out.println("Channel preferences is displaying after selecting business preferences");
										log.debug("Channel preferences is displaying after selecting business preferences");
									} else {
										System.out.println("Channel preferences is not displaying after selecting business preferences");
										log.debug("Channel preferences is not displaying after selecting business preferences");
										Assert.fail("Channel preferences is not displaying after selecting business preferences");
									}
								}

								Screenshots.captureScreenshot();
								Thread.sleep(5000);
								//Selecting Channel preferences
								if (Chn1.equalsIgnoreCase("Select")) {
									if (driver.findElements(By.xpath("//input[@name='CP_Text']")).size() <= 0) {
										System.out.println("Contact_Text channel preference checkBox is not displayed");
										log.debug("Contact_Text channel preference checkBox is not displayed");
										Assert.fail("Failed :: Contact_Text channel preference checkBox is not displayed");
									}
									Agent_RegisterCustomerPage.Contact_Text.click();
									System.out.println("Contact_Text channel preference selected");
									log.debug("Contact_Text business channel preference selected");
								}
								if (Chn2.equalsIgnoreCase("Select")) {
									if (driver.findElements(By.xpath("//input[@name='CP_E-mail']")).size() <= 0) {
										System.out.println("Contact_Email channel preference checkBox is not displayed");
										log.debug("Contact_Email channel preference checkBox is not displayed");
										Assert.fail("Failed :: Contact_Email channel preference checkBox is not displayed");
									}
									Agent_RegisterCustomerPage.Contact_Email.click();
									System.out.println("Contact_Email channel preference selected");
									log.debug("Contact_Email channel preference selected");
								}
								if (Chn3.equalsIgnoreCase("Select")) {
									if (driver.findElements(By.xpath("//input[@name='CP_Phone']")).size() <= 0) {
										System.out.println("Contact_Phone channel preference checkBox is not displayed");
										log.debug("Contact_Phone channel preference checkBox is not displayed");
										Assert.fail("Failed :: Contact_Phone channel preference checkBox is not displayed");
									}
									Agent_RegisterCustomerPage.Contact_Phone.click();
									System.out.println("Contact_Phone channel preference selected");
									log.debug("Contact_Phone channel preference selected");
								}
								if (Chn4.equalsIgnoreCase("Select")) {
									if (driver.findElements(By.xpath("//input[@name='CP_Post']")).size() <= 0) {
										System.out.println("Contact_Post channel preference checkBox is not displayed");
										log.debug("Contact_Post channel preference checkBox is not displayed");
										Assert.fail("Failed :: Contact_Post channel preference checkBox is not displayed");
									}
									Agent_RegisterCustomerPage.Contact_Post.click();
									System.out.println("Contact_Post channel preference selected");
									log.debug("Contact_Post channel preference selected");
								}

								//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
								Thread.sleep(4000);
								Screenshots.captureScreenshot();

								// SaveMyPreferences button status after selecting business preferences and channel preferences
								if(Device_Module.equalsIgnoreCase("Tablet") || Device_Module.equalsIgnoreCase("MBB") || Device_Module.equalsIgnoreCase("Simo")) {

									if (Agent_RegisterCustomerPage.SaveMyPreferences.isEnabled()) {
										System.out.println("As expected Save My Preference Button is enabled after selecting Channel Preferences");
										log.debug("As expected Save My Preference Button is enabled after selecting Channel Preferences");

										Agent_RegisterCustomerPage.SaveMyPreferences.click();
										System.out.println("Save My Preference button is clicked");
										log.debug("Save My Preference button is clicked");
									} else {

										if(Chn1.equalsIgnoreCase("Select") || Chn2.equalsIgnoreCase("Select") || Chn3.equalsIgnoreCase("Select") || Chn4.equalsIgnoreCase("Select")) {
											System.out.println("Save My Preference Button is disabled after selecting Channel preferences");
											log.debug("Save My Preference Button is disabled after selecting Channel preferences");
											Assert.fail("Save My Preference Button is disabled after selecting Channel preferences");
										}
									}

								}else{

									if (Agent_RegisterCustomerPage.SaveMyPreferences.isEnabled()) {
										if(Chn1.equalsIgnoreCase("Select") || Chn2.equalsIgnoreCase("Select") || Chn3.equalsIgnoreCase("Select") || Chn4.equalsIgnoreCase("Select")) {
											System.out.println("As expected Save My Preference Button is enabled after selecting Channel Preferences");
											log.debug("As expected Save My Preference Button is enabled after selecting Channel Preferences");

											Agent_RegisterCustomerPage.SaveMyPreferences.click();
											System.out.println("Save My Preference button is clicked");
											log.debug("Save My Preference button is clicked");
										}
									} else {

										if(Chn1.equalsIgnoreCase("Select") || Chn2.equalsIgnoreCase("Select") || Chn3.equalsIgnoreCase("Select") || Chn4.equalsIgnoreCase("Select")) {
											System.out.println("Save My Preference Button is disabled after selecting Channel preferences");
											log.debug("Save My Preference Button is disabled after selecting Channel preferences");
											Assert.fail("Save My Preference Button is disabled after selecting Channel preferences");
										}else if(Agent_RegisterCustomerPage.SkipPreference.isDisplayed()) {

											System.out.println("As expected Skip Preferences is enabled after selecting Business preferences");
											log.debug("As expected Skip Preferences is enabled after selecting Business preferences");

											Agent_RegisterCustomerPage.SkipPreference.click();
											System.out.println("Skip Preferences is clicked");
											log.debug("Skip Preferences is clicked");
										} else {
											System.out.println("Skip Preferences is disabled for no MP/CP");
											log.debug("Skip Preferences is disabled for no MP/CP");
											Assert.fail("Skip Preferences is disabled for no MP/CP");
										}
									}

								}

								Screenshots.captureScreenshot();
								//Save My Preference Text Message
								if (driver.findElements(By.xpath("//img[@id='u1306_img']")).size() > 0) {

									String saveText = Agent_RegisterCustomerPage.SavedPreferenceMessage.getText();
									System.out.println("Saved your preferences:: " + saveText);
									log.debug("Saved your preferences:: " + saveText);
								} else {
									System.out.println("Saved your preferences text message is not showing");
									log.debug("Saved your preferences text message is not showing");
									//Assert.fail("Saved your preferences text message is not showing");
								}

							} else if (customer.contains("Someone")) {
								Screenshots.captureScreenshot();
								Thread.sleep(3000);
								boolean defaultSelect = Agent_RegisterCustomerPage.someoneElse_radioBtn.isSelected();
								if (!defaultSelect) {
									Agent_RegisterCustomerPage.someoneElse_radioBtn.click();
									Screenshots.captureScreenshot();
									Thread.sleep(8000);
									System.out.println("SomeOne else Order:: Me is selected by Default, as Requirement we have clicked Someone else");
									log.debug("SomeOne else Order:: Me is selected by Default, as Requirement we have clicked Someone else");
								}else
								{
									System.out.println("SomeOne else Order:: By default Someone else radio button is selected");
									log.debug("SomeOne else Order:: By default Someone else radio button is selected");
									Assert.fail("SomeOne else Order:: By default Someone else radio button is selected");
								}

								//Screenshots.captureScreenshot();
								//checking business preference is displaying/not for someone else order selection
								if (Agent_RegisterCustomerPage.CustomerBusinessPreferences.isDisplayed()) {
									Assert.fail("GDPR business preference Enabled:: for some one else order");

								}else{
									System.out.println("GDPR business preference Disabled:: business preferences is disabled for someone else order selection");
									log.debug("GDPR business preference Disabled:: business preferences is disabled for someone else order selection");
								}

								//checking Channel preferences is displaying/not for someone else order selection
								if (Agent_RegisterCustomerPage.ChannelePreferences.isDisplayed()) {
									Assert.fail("GDPR Channel preferences Enabled:: for some one else order");

								}else{
									System.out.println("GDPR business preference Disabled:: Channel preferences is disabled for someone else order selection");
									log.debug("GDPR business preference Disabled:: Channel preferences is disabled for someone else order selection");
								}

								//Continue button
								if (Agent_RegisterCustomerPage.Continue_Someone.isEnabled()) {

									Agent_RegisterCustomerPage.Continue_Someone.click();
									System.out.println("Order is for Someone else:: so, clicked on Continue button");
									log.debug("Order is for Someone else:: so, clicked on Continue button");

								} else {
									System.out.println("Failed to click Continue button for someone else order");
									log.debug("Failed to click Continue button for someone else order");
									Assert.fail("Failed to click Continue button for someone else order");
								}

							}
						} else {
							System.out.println("Text:: " + thisOrderHeader + " is not displayed");
							log.debug("Text:: " + thisOrderHeader + " is not displayed");
							Assert.fail("Text:: " + thisOrderHeader + " is not displayed");
						}
					}else{
						System.out.println("GDPR status is Enabled:: but gdpr consent section is Disabled");
						log.debug("GDPR status is Enabled:: but gdpr consent section is Disabled");
						Assert.fail("GDPR status is Enabled:: but gdpr consent section is Disabled");
					}

				}else if(DeviceType.equalsIgnoreCase("Non Connected")){

					System.out.println("Device type is non connected");
					log.debug("Device type is non connected");

					if (Agent_RegisterCustomerPage.CustomerBusinessPreferences.isDisplayed()) {
						System.out.println("GDPR is Enabled for non connected device");
						log.debug("GDPR is Enabled for non connected device");
						Assert.fail("GDPR is Enabled for non connected device");

					}else{
						System.out.println("GDPR is Disabled for non connected device");
						log.debug("GDPR is Disabled for non connected device");
					}

				}
			}else if(gdprStatus.equalsIgnoreCase("Disabled")){

				if(DeviceType.equalsIgnoreCase("Connected")){
					System.out.println("Device type is connected");
					log.debug("Device type is connected");
				}else if(DeviceType.equalsIgnoreCase("Non Connected")){
					System.out.println("Device type is non connected");
					log.debug("Device type is non connected");
				}

				if (Agent_RegisterCustomerPage.CustomerBusinessPreferences.isDisplayed()) {
					Assert.fail("GDPR is Enabled:: for disabled status (Text header is displaying)");
				}else{
					System.out.println("GDPR is Disabled:: for disabled status");
					log.debug("GDPR is Disabled:: for disabled status");
				}
			}
			else{
				Assert.fail("Failed to do GDPR validations");
			}
		}
		catch (Exception e) {
			System.out.println("Exception: Unable to do GDPR validations");
			log.debug("Exception: Unable to do GDPR validations");
			org.testng.Assert.fail("Exception: Unable to do GDPR validations");
			Screenshots.captureScreenshot();
		}
		Screenshots.captureScreenshot();
	}



	//GDPR Preferences Section AFU --- JamalKhan

	public static void PreferencesSection_AFU(String BP1, String BP2, String BP3, String BP4, String Chn1, String Chn2, String Chn3, String Chn4, String customer, String gdprStatus,String DeviceType, String PreSelected) throws IOException {

		try {
			//driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			Thread.sleep(8000);
			if(gdprStatus.equalsIgnoreCase("Enabled")) {

					/*
						//MBB validation
						Agent_RegisterCustomerPage.MBBValidation(MBBStatus);
					*/

				if(DeviceType.equalsIgnoreCase("Connected")){

					System.out.println("Device type is connected and we are proceeding");
					log.debug("Device type is connected and we are proceeding");
					Thread.sleep(3000);
					if (driver.findElements(By.xpath("//div[@class='gdprLabel']")).size() > 0) {
						System.out.println("GDPR is Enabled and we are proceeding");
						log.debug("GDPR is Enabled and we are proceeding");

						//Is this order for you or someone else validation
						String thisOrderHeader = Agent_RegisterCustomerPage.thisOrderTxt.getText();

						if (PreSelected.equalsIgnoreCase("Yes")) {
							log.debug("Validating GDPR for pre selected options for Upgrade users\n");
						}

						if (thisOrderHeader.contains("Is this order for you or someone else")) {
							System.out.println("As expected Text:: " + thisOrderHeader + " is displayed");
							log.debug("As expected Text:: " + thisOrderHeader + " is displayed");

							if (customer.contains("Me")) {

								//Me radio Btn
								boolean defaultSelect = Agent_RegisterCustomerPage.Me_radioBtn.isSelected();

								if (defaultSelect) {
									System.out.println("Me is selected by Default");
									log.debug("Me is selected by Default");
								} else {
									//Agent_RegisterCustomerPage.Me_radioBtn.click();
									System.out.println("By Default Me radio button is not selected");
									log.debug("By Default Me radio button is not selected");
									Assert.fail("By Default Me radio button is not selected");
								}

								// SaveMyPreferences button status before selecting business preferences

									if (Agent_RegisterCustomerPage.SaveMyPreferences.isEnabled()) {
										System.out.println("As expected Save My Preference Button is enabled before selecting Business Preferences");
										log.debug("As expected Save My Preference Button is enabled before selecting Business Preferences");
									} else {
										System.out.println("Save My Preference Button is disabled before selecting business/channel preferences");
										log.debug("Save My Preference Button is disabled before selecting business/channel preferences");
										Assert.fail("Save My Preference Button is disabled before selecting business/channel preferences");
									}



								//checking Channel preference is displaying/not
								if (PreSelected.equalsIgnoreCase("Yes")) {
									if(BP1.equalsIgnoreCase("Select") || BP2.equalsIgnoreCase("Select") || BP3.equalsIgnoreCase("Select")) {
										if (Agent_RegisterCustomerPage.ChannelePreferences.isDisplayed()) {
											log.debug("UpGrade Customer: Channel preferences are displaying as business preference were selected earlier\n");
										}else{
											Assert.fail("Failed:: UpGrade Customer: Channel preferences are not displaying as business preferences were selected earlier\n");
										}
									}
								} else {
									if (Agent_RegisterCustomerPage.ChannelePreferences.isDisplayed()) {
										System.out.println("Channel preferences is displaying before selecting any business preferences");
										log.debug("Channel preferences is displaying before selecting any business preferences");
										Assert.fail("Channel preferences is displaying before selecting any business preferences");
									} else {
										System.out.println("Channel preferences is not displaying before selecting business preferences");
										log.debug("Channel preferences is not displaying before selecting business preferences");
									}
								}

								//GDPR_Business_Validation

								//O2 Products
								if (driver.findElements(By.xpath("(//div[@class='checkBoxContent'])[1]")).size() > 0) {

									//O2 Products Tile Text validation
									String contentText = Agent_RegisterCustomerPage.O2Products_Text.getText();

									if (contentText.contains("I’m happy to hear about things like new tariffs, upgrades and offers.")) {
										System.out.println("O2 Tile Content text has as expected:: " + contentText);
										log.debug("O2 Tile Content text has as expected:: " + contentText);
									} else {
										System.out.println("O2 Tile Content text is not matching:: " + contentText);
										log.debug("O2 Tile Content text is not matching:: " + contentText);
										//Assert.fail("O2 Tile Content text is not matching:: " + contentText);
									}

									//O2 Products Link clicking
									Agent_RegisterCustomerPage.O2Products_Link.click();
									System.out.println("Clicked on Learn more about O2 products link");
									log.debug("Clicked on Learn more about O2 products link");
									//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
									Thread.sleep(3000);

									//O2 Products Overlay Text validation
									String overlayText = Agent_RegisterCustomerPage.O2Products_OverlayText.getText();
									if (overlayText.contains("We’ll let you know about new tariffs and upgrades that could suit you better. You’ll also hear about offers and services that you can benefit from, like O2 Wifi that helps you save your data or services that could help you stay on top of your spending.")) {
										System.out.println("O2 products overlay text has as expected::" + overlayText);
										log.debug("O2 products overlay text has as expected::" + overlayText);
									} else {
										System.out.println("O2 products overlay text is not matching:: " + overlayText);
										log.debug("O2 products overlay text is not matching:: " + overlayText);
										//Assert.fail("O2 products overlay text is not matching:: " + overlayText);
									}
									Thread.sleep(3000);
									Screenshots.captureScreenshot();
									//O2 Products Close Button clicking
									Agent_RegisterCustomerPage.O2ProductsClose_CloseButton.click();
									System.out.println("Clicked on O2 products overlay close button");
									log.debug("Clicked on O2 products overlay close button");

								}

								//O2 Perks And Extras
								if (driver.findElements(By.xpath("(//div[@class='checkBoxContent'])[2]")).size() > 0) {

									//O2 Perks And Extra Tile Text validation
									String contentText = Agent_RegisterCustomerPage.O2PerksAndExtras_Text.getText();

									if (contentText.contains("I’m happy to hear about perks, prizes and surprises from Priority and beyond.")) {
										System.out.println("O2 perks and extras Tile Content text has as expected:: " + contentText);
										log.debug("O2 perks and extras Tile Content text has as expected:: " + contentText);
									} else {
										System.out.println("O2 perks and extras Tile Content text is not matching:: " + contentText);
										log.debug("O2 perks and extras Tile Content text is not matching:: " + contentText);
										//Assert.fail("O2 perks and extras Tile Content text is not matching:: " + contentText);
									}

									//O2 Perks And Extras Link clicking
									Agent_RegisterCustomerPage.O2PerksAndExtras_Link.click();
									System.out.println("Clicked on Learn more about O2 perks and extras link");
									log.debug("Clicked on Learn more about O2 perks and extras link");
									//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

									Thread.sleep(3000);
									Screenshots.captureScreenshot();
									//O2 Perks And Extras Overlay Text validation
									String overlayText = Agent_RegisterCustomerPage.O2PerksAndExtras_OverlayText.getText();
									if (overlayText.contains("We’ll share perks, prizes and surprises we think you’ll like. This includes offers to join Priority, and if you choose to register, you’ll receive Priority offers and experiences directly. Priority messages have their own separate preferences, you can manage those preferences or turn messages on and off in the Priority app or online.")) {
										System.out.println("O2 Perks And Extras overlay text has as expected::" + overlayText);
										log.debug("O2 Perks And Extras overlay text has as expected::" + overlayText);
									} else {
										System.out.println("O2 Perks And Extras overlay text is not matching:: " + overlayText);
										log.debug("O2 Perks And Extras overlay text is not matching:: " + overlayText);
										//Assert.fail("O2 Perks And Extras overlay text is not matching:: " + overlayText);
									}
									Thread.sleep(3000);
									//O2 Perks And Extras Close Button clicking
									Agent_RegisterCustomerPage.O2PerksAndExtras_CloseButton.click();
									System.out.println("Clicked on O2 perks and extras overlay close button");
									log.debug("Clicked on O2 perks and extras overlay close button");

								}

								//Offers From O2 Partner
								if (driver.findElements(By.xpath("(//div[@class='checkBoxContent'])[3]")).size() > 0) {

									//Offers From O2 Partner Text validation
									String contentText = Agent_RegisterCustomerPage.OffersFromO2Partner_Text.getText();

									if (contentText.contains("I’m happy for O2 to text me about selected offers from leading brands across retail, dining, automotive and consumer goods, knowing my details won’t be shared.")) {
										System.out.println("Offers from o2 partners brands Tile Content text has as expected:: " + contentText);
										log.debug("Offers from o2 partners brands Tile Content text has as expected:: " + contentText);
									} else {
										System.out.println("Offers from o2 partners brands Tile Content text is not matching:: " + contentText);
										log.debug("Offers from o2 partners brands Tile Content text is not matching:: " + contentText);
										//Assert.fail("Offers from o2 partners brands Tile Content text is not matching:: " + contentText);
									}

									//Offers From O2 Partner Link clicking
									Agent_RegisterCustomerPage.OffersFromO2Partner_Link.click();
									System.out.println("Clicked on Learn more about partner offers link");
									log.debug("Clicked on Learn more about partner offers link");
									//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

									Thread.sleep(3000);
									Screenshots.captureScreenshot();
									//Offers From O2 Partner Overlay Text validation
									String overlayText = Agent_RegisterCustomerPage.OffersFromO2Partner_OverlayText.getText();
									if (overlayText.contains("We work with lots of well-known brands across retail, dining, automotive, consumer goods and loads more that often have offers you might be interested in. When there’s an offer we think you’ll like, we’ll let you know about it. The message will come from O2, not the third party. Then you can go to the brand’s website or their place on the high street to get it. We’re careful to match the right offer to the right people.")) {
										System.out.println("Offers From O2 Partner overlay text has as expected::" + overlayText);
										log.debug("Offers From O2 Partner overlay text has as expected::" + overlayText);
									} else {
										System.out.println("Offers From O2 Partner overlay text is not matching:: " + overlayText);
										log.debug("Offers From O2 Partner overlay text is not matching:: " + overlayText);
										//Assert.fail("Offers From O2 Partner overlay text is not matching:: " + overlayText);
									}
									Thread.sleep(3000);
									//Offers From O2 Partner Close Button clicking
									Agent_RegisterCustomerPage.OffersFromO2Partner_CloseButton.click();
									System.out.println("Clicked on offers from partners and brands overlay close button");
									log.debug("Clicked on offers from partners and brands overlay close button");

								}

								/*//Partners Contacting
								if (driver.findElements(By.xpath("//div[@data-label='Hotspot - partners contacting me directly']")).size() > 0) {

									//Partners Contacting Text validation
									String contentText = Agent_RegisterCustomerPage.PartnersContacting_Text.getText();

									if (contentText.contains("I'm happy for O2 to share my data with partner brands and for those brands to contact me directly.")) {
										System.out.println("Partners contacting me directly Tile Content text has as expected:: " + contentText);
										log.debug("Partners contacting me directly Tile Content text has as expected:: " + contentText);
									} else {
										System.out.println("Partners contacting me directly Tile Content text is not matching:: " + contentText);
										log.debug("Partners contacting me directly Content text is not matching:: " + contentText);
										Assert.fail("Partners contacting me directly Content text is not matching:: " + contentText);

									}

									//Partners Contacting Link clicking
									Agent_RegisterCustomerPage.PartnersContacting_Link.click();
									System.out.println("Clicked on Learn more about direct brand offers link");
									log.debug("Clicked on Learn more about direct brand offers link");
									//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
									Thread.sleep(3000);

									//Partners Contacting Overlay Text validation
									String overlayText = Agent_RegisterCustomerPage.PartnersContacting_OverlayText.getText();
									if (overlayText.contains("")) {
										System.out.println("Partners Contacting overlay text has as expected::" + overlayText);
										log.debug("Partners Contacting overlay text has as expected::" + overlayText);
									} else {
										System.out.println("Partners Contacting overlay text is not matching:: " + overlayText);
										log.debug("Partners Contacting overlay text is not matching:: " + overlayText);
										Assert.fail("Partners Contacting overlay text is not matching:: " + overlayText);
									}
									Thread.sleep(3000);
									//Partners Contacting Close Button cklicking
									Agent_RegisterCustomerPage.PartnersContacting_CloseButton.click();
									System.out.println("Clicked on partners contacting me directly overlay close button");
									log.debug("Clicked onpartners contacting me directly overlay close button");

								}*/

								Screenshots.captureScreenshot();
								Thread.sleep(4000);

								//Selecting Business preferences
								if (BP1.equalsIgnoreCase("Select")) {

									if (driver.findElements(By.xpath("//input[@name='B1']")).size() <= 0) {
										System.out.println("O2Products business preference checkBox is not displayed");
										log.debug("O2Products business preference checkBox is not displayed");
										Assert.fail("Failed :: O2Products business preference checkBox is not displayed");
									}

									if (PreSelected.equalsIgnoreCase("Yes")) {
										if(Agent_RegisterCustomerPage.O2Products.isSelected()) {
											log.debug("As expected, O2Products option is pre selected as this option was selected earlier\n");
										}else{
											Assert.fail("O2Products option is not pre selected, it supposed to be pre-selected state as this option was selected earlier\n");
										}
									} else{
										Agent_RegisterCustomerPage.O2Products.click();
										System.out.println("O2Products business preference selected");
										log.debug("O2Products business preference selected");
									}
								}

								if (BP2.equalsIgnoreCase("Select")) {
									if (driver.findElements(By.xpath("//input[@name='B2']")).size() <= 0) {
										System.out.println("O2 Perks And Extras business preference checkBox is not displayed");
										log.debug("O2 Perks And Extras business preference checkBox is not displayed");
										Assert.fail("Failed :: O2 Perks And Extras business preference checkBox is not displayed");
									}

									if (PreSelected.equalsIgnoreCase("Yes")) {
										if(Agent_RegisterCustomerPage.O2PerksAndExtras.isSelected()) {
											log.debug("As expected, O2PerksAndExtras option is pre selected as this option was selected earlier\n");
										}else{
											Assert.fail("O2PerksAndExtras option is not pre selected, it supposed to be pre-selected state as this option was selected earlier\n");
										}
									} else {
										Agent_RegisterCustomerPage.O2PerksAndExtras.click();
										System.out.println("O2 Perks And Extras business preference selected");
										log.debug("O2 Perks And Extras business preference selected");
									}
								}

								if (BP3.equalsIgnoreCase("Select")) {
									if (driver.findElements(By.xpath("//input[@name='B3']")).size() <= 0) {
										System.out.println("Offers From O2 Partner business preference checkBox is not displayed");
										log.debug("Offers From O2 Partner business preference checkBox is not displayed");
										Assert.fail("Failed :: Offers From O2 Partner business preference checkBox is not displayed");
									}

									if (PreSelected.equalsIgnoreCase("Yes")) {
										if(Agent_RegisterCustomerPage.OffersFromO2Partner.isSelected()) {
											log.debug("As expected, OffersFromO2Partner option is pre selected as this option was selected earlier\n");
										}else{
											Assert.fail("OffersFromO2Partner option is not pre selected, it supposed to be pre-selected state as this option was selected earlier\n");
										}
									} else {
										Agent_RegisterCustomerPage.OffersFromO2Partner.click();
										System.out.println("Offers From O2 Partner business preference selected\n");
										log.debug("Offers From O2 Partner business preference selected\n");
									}
								}

								if (BP4.equalsIgnoreCase("Select")) {
									if (driver.findElements(By.xpath("//div[@data-label='check4']/input")).size() <= 0) {
										System.out.println("Partners Contacting business preference checkBox is not displayed");
										log.debug("Partners Contacting business preference checkBox is not displayed");
										Assert.fail("Failed :: Partners Contacting business preference checkBox is not displayed");
									}

									if (PreSelected.equalsIgnoreCase("Yes")) {
										if(Agent_RegisterCustomerPage.PartnersContacting.isSelected()) {
											log.debug("As expected, PartnersContacting option is pre selected as this option was selected earlier\n");
										}else{
											Assert.fail("PartnersContacting option is not pre selected, it supposed to be pre-selected state as this option was selected earlier\n");
										}
									} else {
										Agent_RegisterCustomerPage.PartnersContacting.click();
										System.out.println("Partners Contacting business preference selected");
										log.debug("Partners Contacting business preference selected");
									}
								}

								Thread.sleep(4000);
								Screenshots.captureScreenshot();
								// SaveMyPreferences button status after selecting business preferences
								if (PreSelected.equalsIgnoreCase("Yes")) {
									if (Agent_RegisterCustomerPage.SaveMyPreferences.isEnabled()) {
										System.out.println("Pre-Selected preferences state:: Save My Preference Button is displayed\n");
										log.debug("Pre-Selected preferences state:: Save My Preference Button is displayed\n");
									}else{
										log.debug("Pre-Selected preferences state:: Save My Preference Button is disabled\n");
									}
								}else {
									if (BP1.equalsIgnoreCase("Select") || BP2.equalsIgnoreCase("Select") || BP3.equalsIgnoreCase("Select") || BP4.equalsIgnoreCase("Select")) {
										if (Agent_RegisterCustomerPage.SaveMyPreferences.isEnabled()) {
											System.out.println("Save My Preference Button is displayed after selecting business preferences");
											log.debug("Save My Preference Button is displayed after selecting business preferences");
											Assert.fail("Save My Preference Button is displayed after selecting business preferences");
										} else {
											System.out.println("As expected Save My Preference Button is disabled after selecting Business Preferences");
											log.debug("As expected Save My Preference Button is disabled after selecting Business Preferences");
										}
									} else {
										if (Agent_RegisterCustomerPage.SaveMyPreferences.isEnabled()) {
											System.out.println("As expected Save My Preference Button is enabled for no Business Preferences selection");
											log.debug("As expected Save My Preference Button is enabled for no Business Preferences selection");
										} else {
											System.out.println("Save My Preference Button is disabled for no Business Preferences selection");
											log.debug("As expected Save My Preference Button is disabled for no Business Preferences selection");
											Assert.fail("As expected Save My Preference Button is disabled for no Business Preferences selection");
										}
									}
								}

								//checking Channel preference is displaying/not after business preferences selection
								if (PreSelected.equalsIgnoreCase("Yes")) {
									if (Agent_RegisterCustomerPage.ChannelePreferences.isDisplayed()) {
										System.out.println("Pre-Selected preferences state:: Channel Preference are displayed\n");
										log.debug("Pre-Selected preferences state:: Channel Preference are displayed\n");
									}else{
										log.debug("Pre-Selected preferences state:: Channel Preference are not displayed\n");
									}
								}else {
									if (BP1.equalsIgnoreCase("Select") || BP2.equalsIgnoreCase("Select") || BP3.equalsIgnoreCase("Select") || BP4.equalsIgnoreCase("Select")) {
										if (Agent_RegisterCustomerPage.ChannelePreferences.isDisplayed()) {
											System.out.println("Channel preferences is displaying after selecting business preferences");
											log.debug("Channel preferences is displaying after selecting business preferences");
										} else {
											System.out.println("Channel preferences are not displaying after selecting business preferences");
											log.debug("Channel preferences are not displaying after selecting business preferences");
											Assert.fail("Channel preferences are not displaying after selecting business preferences");
										}
									} else {
										if (Agent_RegisterCustomerPage.ChannelePreferences.isDisplayed()) {
											System.out.println("Channel preferences is displaying even for no business preferences");
											log.debug("Channel preferences is displaying even for no selecting business preferences");
											Assert.fail("Channel preferences is displaying even for no selecting business preferences");
										} else {
											System.out.println("Channel preferences are not displaying for no business preferences");
											log.debug("Channel preferences are not displaying for no business preferences");
										}
									}
								}


								Thread.sleep(3000);
								//Selecting Channel preferences
								if (Chn1.equalsIgnoreCase("Select")) {
									if (driver.findElements(By.xpath("//input[@name='CP_Text']")).size() <= 0) {
										System.out.println("Contact_Text channel preference checkBox is not displayed");
										log.debug("Contact_Text channel preference checkBox is not displayed");
										Assert.fail("Failed :: Contact_Text channel preference checkBox is not displayed");
									}

									if (PreSelected.equalsIgnoreCase("Yes")) {
										if(Agent_RegisterCustomerPage.Contact_Text.isSelected()) {
											log.debug("As expected, Contact_Text option is pre selected as this option was selected earlier\n");
										}else{
											Assert.fail("Contact_Text option is not pre selected, it supposed to be pre-selected state as this option was selected earlier\n");
										}
									} else {
										Agent_RegisterCustomerPage.Contact_Text.click();
										System.out.println("Contact_Text channel preference selected");
										log.debug("Contact_Text business channel preference selected");
									}
								}
								if (Chn2.equalsIgnoreCase("Select")) {
									if (driver.findElements(By.xpath("//input[@name='CP_E-mail']")).size() <= 0) {
										System.out.println("Contact_Email channel preference checkBox is not displayed");
										log.debug("Contact_Email channel preference checkBox is not displayed");
										Assert.fail("Failed :: Contact_Email channel preference checkBox is not displayed");
									}

									if (PreSelected.equalsIgnoreCase("Yes")) {
										if(Agent_RegisterCustomerPage.Contact_Email.isSelected()) {
											log.debug("As expected, Contact_Email option is pre selected as this option was selected earlier\n");
										}else{
											Assert.fail("Contact_Email option is not pre selected, it supposed to be pre-selected state as this option was selected earlier\n");
										}
									} else {
										Agent_RegisterCustomerPage.Contact_Email.click();
										System.out.println("Contact_Email channel preference selected");
										log.debug("Contact_Email channel preference selected");
									}
								}
								if (Chn3.equalsIgnoreCase("Select")) {
									if (driver.findElements(By.xpath("//input[@name='CP_Phone']")).size() <= 0) {
										System.out.println("Contact_Phone channel preference checkBox is not displayed");
										log.debug("Contact_Phone channel preference checkBox is not displayed");
										Assert.fail("Failed :: Contact_Phone channel preference checkBox is not displayed");
									}

									if (PreSelected.equalsIgnoreCase("Yes")) {
										if(Agent_RegisterCustomerPage.Contact_Phone.isSelected()) {
											log.debug("As expected, Contact_Phone option is pre selected as this option was selected earlier\n");
										}else{
											Assert.fail("Contact_Phone option is not pre selected, it supposed to be pre-selected state as this option was selected earlier\n");
										}
									} else {
										Agent_RegisterCustomerPage.Contact_Phone.click();
										System.out.println("Contact_Phone channel preference selected");
										log.debug("Contact_Phone channel preference selected");
									}
								}
								if (Chn4.equalsIgnoreCase("Select")) {
									if (driver.findElements(By.xpath("//input[@name='CP_Post']")).size() <= 0) {
										System.out.println("Contact_Post channel preference checkBox is not displayed");
										log.debug("Contact_Post channel preference checkBox is not displayed");
										Assert.fail("Failed :: Contact_Post channel preference checkBox is not displayed");
									}

									if (PreSelected.equalsIgnoreCase("Yes")) {
										if(Agent_RegisterCustomerPage.Contact_Post.isSelected()) {
											log.debug("As expected, Contact_Post option is pre selected as this option was selected earlier\n");
										}else{
											Assert.fail("Contact_Post option is not pre selected, it supposed to be pre-selected state as this option was selected earlier\n");
										}
									} else {
										Agent_RegisterCustomerPage.Contact_Post.click();
										System.out.println("Contact_Post channel preference selected");
										log.debug("Contact_Post channel preference selected");
									}
								}

								Thread.sleep(3000);
								Screenshots.captureScreenshot();
								Thread.sleep(3000);
								// SaveMyPreferences button status after selecting business preferences and channel preferences
								if(Chn1.equalsIgnoreCase("Select") || Chn2.equalsIgnoreCase("Select") || Chn3.equalsIgnoreCase("Select") || Chn4.equalsIgnoreCase("Select")) {
									if (Agent_RegisterCustomerPage.SaveMyPreferences.isEnabled()) {
										System.out.println("As expected Save My Preference Button is displayed after selecting channel/business preferences so, clicking on Save Preference CTA");
										log.debug("As expected Save My Preference Button is displayed after selecting channel/business preferences so, clicking on Save Preference CTA");

										Agent_RegisterCustomerPage.SaveMyPreferences.click();
										System.out.println("Save My Preference button is clicked");
										log.debug("Save My Preference button is clicked");

									} else {
										System.out.println("Save My Preference Button is disabled after selecting Channel/Business Preferences");
										log.debug("Save My Preference Button is disabled after selecting Channel/Business Preferences");
										Assert.fail("Save My Preference Button is disabled after selecting Channel/Business Preferences");
									}
								}else{
									if (Agent_RegisterCustomerPage.SaveMyPreferences.isEnabled()) {
										System.out.println("As expected Save My Preference Button is enabled for no Business Preferences selection");
										log.debug("As expected Save My Preference Button is enabled for no Business Preferences selection");

										Agent_RegisterCustomerPage.SaveMyPreferences.click();
										System.out.println("Save My Preference button is clicked");
										log.debug("Save My Preference button is clicked");
									}else{
										System.out.println("Save My Preference Button is disabled for no Business Preferences selection");
										log.debug("Save My Preference Button is disabled for no Business Preferences selection");
										Assert.fail("Save My Preference Button is disabled for no Business Preferences selection");
									}
								}


								JavascriptExecutor jse = (JavascriptExecutor) driver;
								jse.executeScript("window.scrollBy(0,300)", "");
								Thread.sleep(3000);
								Screenshots.captureScreenshot();

								//Save My Preference Text Message
								if(Chn1.equalsIgnoreCase("Select") || Chn2.equalsIgnoreCase("Select") || Chn3.equalsIgnoreCase("Select") || Chn4.equalsIgnoreCase("Select")) {
									if (driver.findElements(By.xpath("//p[@id='save-preferences-message']")).size() > 0) {

										String saveText = Agent_RegisterCustomerPage.SavedPreferenceMessage.getText();
										System.out.println("Saved your preferences:: " + saveText);
										log.debug("Saved your preferences:: " + saveText);
									} else {
										System.out.println("Saved your preferences text message is not showing");
										log.debug("Saved your preferences text message is not showing");
										Assert.fail("Saved your preferences text message is not showing");
									}
								}


							} else if (customer.contains("Someone")) {
								Thread.sleep(3000);
								Screenshots.captureScreenshot();
								boolean defaultSelect = Agent_RegisterCustomerPage.someoneElse_radioBtn.isSelected();
								if (PreSelected.equalsIgnoreCase("Yes")) {
									if(Agent_RegisterCustomerPage.someoneElse_radioBtn.isSelected()){
										log.debug("As expected, SomeOne else option is selected as this was selected earlier for UpGrade Users");
									}else{
										log.debug("SomeOne else option is not pre-selected, it supposed to be pre-selected as this was selected earlier for UpGrade Users");
									}
								}else {
									if (!defaultSelect) {
										Thread.sleep(6000);
										Agent_RegisterCustomerPage.someoneElse_radioBtn.click();
										Thread.sleep(6000);
										System.out.println("SomeOne else Order:: Me is selected by Default, as Requirement we have clicked Someone else");
										log.debug("SomeOne else Order:: Me is selected by Default, as Requirement we have clicked Someone else");
									} else {
										System.out.println("SomeOne else Order:: By default Someone else radio button is selected");
										log.debug("SomeOne else Order:: By default Someone else radio button is selected");
										Assert.fail("SomeOne else Order:: By default Someone else radio button is selected");
									}
								}

								//checking business preference is displaying/not for someone else order selection
								if (Agent_RegisterCustomerPage.CustomerBusinessPreferences.isDisplayed()) {
									Assert.fail("GDPR business preference Enabled:: for some one else order");
								}else{
									System.out.println("GDPR business preference Disabled:: business preferences is disabled for someone else order selection");
									log.debug("GDPR business preference Disabled:: business preferences is disabled for someone else order selection");
								}

								//checking Channel preferences is displaying/not for someone else order selection
								if (Agent_RegisterCustomerPage.ChannelePreferences.isDisplayed()) {
									Assert.fail("GDPR Channel preferences Enabled:: for some one else order");

								}else{
									System.out.println("GDPR business preference Disabled:: Channel preferences is disabled for someone else order selection");
									log.debug("GDPR business preference Disabled:: Channel preferences is disabled for someone else order selection");
								}
								Screenshots.captureScreenshot();
							}
						} else {
							System.out.println("Text:: " + thisOrderHeader + " is not displayed");
							log.debug("Text:: " + thisOrderHeader + " is not displayed");
							Assert.fail("Text:: " + thisOrderHeader + " is not displayed");
						}
					}else{
						System.out.println("GDPR status is Enabled:: but gdpr consent section is Disabled");
						log.debug("GDPR status is Enabled:: but gdpr consent section is Disabled");
						Assert.fail("GDPR status is Enabled:: but gdpr consent section is Disabled");
					}

				}else if(DeviceType.equalsIgnoreCase("Non Connected")){

					System.out.println("Device type is non connected");
					log.debug("Device type is non connected");

					if (Agent_RegisterCustomerPage.CustomerBusinessPreferences.isDisplayed()) {

						System.out.println("GDPR is Enabled for non connected device");
						log.debug("GDPR is Enabled for non connected device");
						Assert.fail("GDPR is Enabled for non connected device");

					}else{
						System.out.println("GDPR is Disabled for non connected device");
						log.debug("GDPR is Disabled for non connected device");
					}

				}
			}else if(gdprStatus.equalsIgnoreCase("Disabled")){

				if(DeviceType.equalsIgnoreCase("Connected")){
					System.out.println("Device type is connected");
					log.debug("Device type is connected");
				}else if(DeviceType.equalsIgnoreCase("Non Connected")){
					System.out.println("Device type is non connected");
					log.debug("Device type is non connected");
				}

				if (Agent_RegisterCustomerPage.CustomerBusinessPreferences.isDisplayed()) {
					Assert.fail("GDPR is Enabled:: for disabled status (Text header is displaying)");

				}else{
					System.out.println("GDPR is Disabled:: for disabled status");
					log.debug("GDPR is Disabled:: for disabled status");
				}
			}
			else{
				Assert.fail("Failed to do GDPR validations");
			}
		}
		catch (Exception e) {
			System.out.println("Exception: Unable to do GDPR validations");
			log.debug("Exception: Unable to do GDPR validations");
			Screenshots.captureScreenshot();
		}
		Screenshots.captureScreenshot();
	}

	public static void RegisterStatus() throws InterruptedException {
		Thread.sleep(5000);
		if (driver.findElements(By.xpath("//span[@id='successStatus']")).size() > 0) {

			String registerStatus = Agent_RegisterCustomerPage.registerStatus.getText();
			Thread.sleep(3000);
			if(registerStatus.contains("Registered")) {
				System.out.println("Register Status validated :: " + registerStatus);
				log.debug("Register Status validated :: " + registerStatus);
			}else{
				System.out.println("Register Status text message is miss matching");
				log.debug("Register Status text message is miss matching");
				Assert.fail("Register Status text message is miss matching");
			}
		} else {
			System.out.println("Register Status text message is not available");
			log.debug("Register Status text message is not available");
			Assert.fail("Register Status text message is not available");
		}
	}
}