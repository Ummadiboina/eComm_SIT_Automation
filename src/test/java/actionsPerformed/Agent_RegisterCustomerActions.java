package actionsPerformed;

import java.io.IOException;
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
import helpers.Environment;
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

		if (driver.findElements(By.xpath("CardHolderName")).size() >= 1) {
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

			String mainWindowHandle = driver.getWindowHandle ();

			try {
				//String mainWindowHandle = driver.getWindowHandle ();
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
		/*
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
			*/

			driver.switchTo().window(mainWindowHandle);
			Thread.sleep(5000);

			((JavascriptExecutor) driver).executeScript("arguments[0].click();", Agent_RegisterCustomerPage.licenceDetailsCheckbox);
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
			Thread.sleep(2000);
			((JavascriptExecutor) driver).executeScript("arguments[0].click();", Agent_RegisterCustomerPage.performCredidCheckBtn);
			log.debug("Filled the driving lisences and passport details and clicked on the perfrom credit check button");

		}
	}

//GDPR Preferences Section --- JamalKhan

	public static void PreferencesSection_AFA(String BP1, String BP2, String BP3, String BP4, String Chn1, String Chn2, String Chn3, String Chn4, String customer) throws InterruptedException, IOException {

		try {
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

			if(driver.findElements(By.xpath("//*[normalize-space(.)='Me']/preceding-sibling::input")).size()>0) {
				System.out.println("GDPR is not disabled");
				log.debug("GDPR is not disabled");

				//Is this order for you or someone else validation
				String thisOrderHeader = Agent_RegisterCustomerPage.thisOrderTxt.getText();

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
						if (driver.findElements(By.xpath("//span[normalize-space()='Save my preferences']")).size()<=0) {
							System.out.println("As expected Save My Preference Button is disabled before selecting Business Preferences");
							log.debug("As expected Save My Preference Button is disabled before selecting Business Preferences");
						} else {
							System.out.println("Save My Preference Button is displayed before selecting business/channel preferences");
							log.debug("Save My Preference Button is displayed before selecting business/channel preferences");
							Assert.fail("Save My Preference Button is displayed before selecting business/channel preferences");
						}

						//O2 Products
						if (driver.findElements(By.xpath("//div[@data-label='Hotspot - O2 products']")).size() > 0) {

							//O2 Products Tile Text validation
							String contentText = Agent_RegisterCustomerPage.O2Products_Text.getText();

							if (contentText.contains("I'm happy for O2 to let me know about offers relating to my service(upgrades, new tariffs, roaming, O2 Wifi etc.)")) {
								System.out.println("O2 Tile Content text has as expected:: " + contentText);
								log.debug("O2 Tile Content text has as expected:: " + contentText);
							} else {
								System.out.println("O2 Tile Content text is not matching:: " + contentText);
								log.debug("O2 Tile Content text is not matching:: " + contentText);
								Assert.fail("O2 Tile Content text is not matching:: " + contentText);
							}

							//O2 Products Link clicking
							Agent_RegisterCustomerPage.O2Products_Link.click();
							System.out.println("Clicked on Learn more about O2 products");
							log.debug("Clicked on Learn more about O2 products");
							driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

							//O2 Products Overlay Text validation
							String overlayText = Agent_RegisterCustomerPage.O2Products_OverlayText.getText();
							if (overlayText.contains("")) {
								System.out.println("O2 products overlay text has as expected::" + overlayText);
								log.debug("O2 products overlay text has as expected::" + overlayText);
							} else {
								System.out.println("O2 products overlay text is not matching:: " + overlayText);
								log.debug("O2 products overlay text is not matching:: " + overlayText);
								Assert.fail("O2 products overlay text is not matching:: " + overlayText);
							}

							//O2 Products Close Button clicking
							Agent_RegisterCustomerPage.O2ProductsClose_CloseButton.click();
							System.out.println("Clicked on O2 products overlay close button");
							log.debug("Clicked on O2 products overlay close button");

						}

						//O2 Perks And Extras
						if (driver.findElements(By.xpath("//div[@data-label='Hotspot - O2 perks and extras']")).size() > 0) {

							//O2 Perks And Extra Tile Text validation
							String contentText = Agent_RegisterCustomerPage.O2PerksAndExtras_Text.getText();

							if (contentText.contains("I'm happy for O2 to let me know about offers, perks and services that are relevant to me, like Priority.")) {
								System.out.println("O2 perks and extras Tile Content text has as expected:: " + contentText);
								log.debug("O2 perks and extras Tile Content text has as expected:: " + contentText);
							} else {
								System.out.println("O2 perks and extras Tile Content text is not matching:: " + contentText);
								log.debug("O2 perks and extras Tile Content text is not matching:: " + contentText);
								Assert.fail("O2 perks and extras Tile Content text is not matching:: " + contentText);
							}

							//O2 Perks And Extras Link clicking
							Agent_RegisterCustomerPage.O2PerksAndExtras_Link.click();
							System.out.println("Clicked on Learn more about O2 perks and extras");
							log.debug("Clicked on Learn more about O2 perks and extras");
							driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

							//O2 Perks And Extras Overlay Text validation
							String overlayText = Agent_RegisterCustomerPage.O2PerksAndExtras_OverlayText.getText();
							if (overlayText.contains("")) {
								System.out.println("O2 Perks And Extras overlay text has as expected::" + overlayText);
								log.debug("O2 Perks And Extras overlay text has as expected::" + overlayText);
							} else {
								System.out.println("O2 Perks And Extras overlay text is not matching:: " + overlayText);
								log.debug("O2 Perks And Extras overlay text is not matching:: " + overlayText);
								Assert.fail("O2 Perks And Extras overlay text is not matching:: " + overlayText);
							}

							//O2 Perks And Extras Close Button clicking
							Agent_RegisterCustomerPage.O2PerksAndExtras_CloseButton.click();
							System.out.println("Clicked on O2 perks and extras overlay close button");
							log.debug("Clicked on O2 perks and extras overlay close button");

						}

						//Offers From O2 Partner
						if (driver.findElements(By.xpath("//div[@data-label='Hotspot - offers from o2 partners brands']")).size() > 0) {

							//Offers From O2 Partner Text validation
							String contentText = Agent_RegisterCustomerPage.OffersFromO2Partner_Text.getText();

							if (contentText.contains("I'm happy for O2 to let me know about selected offers from leading brands, knowing my details won't be shared.")) {
								System.out.println("Offers from o2 partners brands Tile Content text has as expected:: " + contentText);
								log.debug("Offers from o2 partners brands Tile Content text has as expected:: " + contentText);
							} else {
								System.out.println("Offers from o2 partners brands Tile Content text is not matching:: " + contentText);
								log.debug("Offers from o2 partners brands Tile Content text is not matching:: " + contentText);
								Assert.fail("Offers from o2 partners brands Tile Content text is not matching:: " + contentText);
							}

							//Offers From O2 Partner Link clicking
							Agent_RegisterCustomerPage.OffersFromO2Partner_Link.click();
							System.out.println("Clicked on Learn more about partner offers");
							log.debug("Clicked on Learn more about partner offers");
							driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

							//Offers From O2 Partner Overlay Text validation
							String overlayText = Agent_RegisterCustomerPage.OffersFromO2Partner_OverlayText.getText();
							if (overlayText.contains("")) {
								System.out.println("Offers From O2 Partner overlay text has as expected::" + overlayText);
								log.debug("Offers From O2 Partner overlay text has as expected::" + overlayText);
							} else {
								System.out.println("Offers From O2 Partner overlay text is not matching:: " + overlayText);
								log.debug("Offers From O2 Partner overlay text is not matching:: " + overlayText);
								Assert.fail("Offers From O2 Partner overlay text is not matching:: " + overlayText);
							}

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
								Assert.fail("Partners contacting me directly Content text is not matching:: " + contentText);

							}

							//Partners Contacting Link clicking
							Agent_RegisterCustomerPage.PartnersContacting_Link.click();
							System.out.println("Clicked on Learn more about direct brand offers");
							log.debug("Clicked on Learn more about direct brand offers");
							driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

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

							//Partners Contacting Close Button cklicking
							Agent_RegisterCustomerPage.PartnersContacting_CloseButton.click();
							System.out.println("Clicked on partners contacting me directly overlay close button");
							log.debug("Clicked onpartners contacting me directly overlay close button");

						}

						//checking Channel preference is displaying/not
						if (driver.findElements(By.xpath("//div[@data-label='checkcontact1']/input")).size() > 0) {
							System.out.println("Channel preferences is displaying before selecting business preferences");
							log.debug("Channel preferences is displaying before selecting business preferences");
						}

						//Selecting Business preferences
						if (BP1.equalsIgnoreCase("Select")) {

							if (driver.findElements(By.xpath("//div[@data-label='check1']/input")).size() <= 0) {
								System.out.println("O2Products business preference is not displayed");
								log.debug("O2Products business preference is not displayed");
							}
							Agent_RegisterCustomerPage.O2Products.click();
							System.out.println("O2Products business preference selected");
							log.debug("O2Products business preference selected");
						}

						if (BP2.equalsIgnoreCase("Select")) {
							if (driver.findElements(By.xpath("//div[@data-label='check2']/input")).size() <= 0) {
								System.out.println("O2 Perks And Extras business preference is not displayed");
								log.debug("O2 Perks And Extras business preference is not displayed");
							}
							Agent_RegisterCustomerPage.O2PerksAndExtras.click();
							System.out.println("O2 Perks And Extras business preference selected");
							log.debug("O2 Perks And Extras business preference selected");
						}

						if (BP3.equalsIgnoreCase("Select")) {
							if (driver.findElements(By.xpath("//div[@data-label='check3']/input")).size() <= 0) {
								System.out.println("Offers From O2 Partner business preference is not displayed");
								log.debug("Offers From O2 Partner business preference is not displayed");
							}
							Agent_RegisterCustomerPage.OffersFromO2Partner.click();
							System.out.println("Offers From O2 Partner business preference selected");
							log.debug("Offers From O2 Partner business preference selected");
						}

						if (BP4.equalsIgnoreCase("Select")) {
							if (driver.findElements(By.xpath("//div[@data-label='check4']/input")).size() <= 0) {
								System.out.println("Partners Contacting business preference is not displayed");
								log.debug("Partners Contacting business preference is not displayed");
							}
							Agent_RegisterCustomerPage.PartnersContacting.click();
							System.out.println("Partners Contacting business preference selected");
							log.debug("Partners Contacting business preference selected");
						}

						Thread.sleep(4000);

						// SaveMyPreferences button status after selecting business preferences
						if (driver.findElements(By.xpath("//span[normalize-space()='Save my preferences']")).size()>0) {
							System.out.println("Save MY Preference Button:: is enabled after selecting business preferences");
							log.debug("Save My Preference Button:: is enabled after selecting business preferences");

						} else {
							System.out.println("Save My Preference Button:: is disabled after selecting business preferences");
							log.debug("Save My Preference Button:: is disabled after selecting business preferences");
							Assert.fail("Save My Preference Button:: is disabled after selecting business preferences");
						}

						//Selecting Channel preferences
						if (Chn1.equalsIgnoreCase("Select")) {
							Agent_RegisterCustomerPage.Contact_Text.click();
							System.out.println("Contact_Text preference selected");
							log.debug("Contact_Text business preference selected");
						}
						if (Chn2.equalsIgnoreCase("Select")) {
							Agent_RegisterCustomerPage.Contact_Email.click();
							System.out.println("Contact_Email preference selected");
							log.debug("Contact_Email preference selected");
						}
						if (Chn3.equalsIgnoreCase("Select")) {
							Agent_RegisterCustomerPage.Contact_Phone.click();
							System.out.println("Contact_Phone preference selected");
							log.debug("Contact_Phone preference selected");
						}
						if (Chn4.equalsIgnoreCase("Select")) {
							Agent_RegisterCustomerPage.Contact_Post.click();
							System.out.println("Contact_Post preference selected");
							log.debug("Contact_Post preference selected");
						}

						driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

						if (driver.findElements(By.xpath("//span[normalize-space()='Save my preferences']")).size()>0) {
							Agent_RegisterCustomerPage.SaveMyPreferences.click();
							System.out.println("Save My Preference clicked");
							log.debug("Save My Preference clicked");
						} else {
							System.out.println("Save My Preference button is not clicked after Business and Channel Preferences");
							log.debug("Save My Preference button is not clicked after Business and Channel Preferences");
							Assert.fail("Save My Preference button is not clicked after Business and Channel Preferences");
						}

						//Save My Preference Text Message
						if (driver.findElements(By.xpath("//img[@id='u1306_img']")).size() > 0) {

							String saveText = Agent_RegisterCustomerPage.SavedPreferenceMessage.getText();
							System.out.println("Saved your preferences:: " + saveText);
							log.debug("Saved your preferences:: " + saveText);
						} else {
							System.out.println("Saved your preferences text message is not showing");
							log.debug("Saved your preferences text message is not showing");
							Assert.fail("Saved your preferences text message is not showing");
						}

					} else if (customer.contains("Someone")) {

						boolean defaultSelect = Agent_RegisterCustomerPage.someoneElse_radioBtn.isSelected();
						if (!defaultSelect) {
							Agent_RegisterCustomerPage.someoneElse_radioBtn.click();
							Thread.sleep(2000);
							System.out.println("order for this customer : Me is selected by Default, as Requirement we have clicked Someone else");
							log.debug("order for this customer : Me is selected by Default, as Requirement we have clicked Someone else");

							//checking business preference is displaying/not for someone else order selection
							if (driver.findElements(By.xpath("//div[@data-label='check1']/input")).size() < 1) {
								System.out.println("As expected business preferences is disabled for someone else order selection");
								log.debug("As expected business preferences is disabled for someone else order selection");
							}

							//checking Channel preferences is displaying/not for someone else order selection
							if (driver.findElements(By.xpath("//div[@data-label='checkcontact1']/input")).size() < 1) {
								System.out.println("As expected Channel preferences is disabled for someone else order selection");
								log.debug("As expected Channel preferences is disabled for someone else order selection");
							}

						}

						//Skip and Continue button
						if (driver.findElements(By.xpath("//*[normalize-space(.)='SkipAndContinue']")).size() > 0) {
							Agent_RegisterCustomerPage.SkipAndContinue.click();
							System.out.println("Order is for Someone else:: so, clicked on Skip and Continue button");
							log.debug("Order is for Someone else:: so, clicked on Skip and Continue button");
						} else {
							System.out.println("Skip and Continue:: button is not displayed");
							log.debug("Skip and Continue:: button is not displayed");
							Assert.fail("Skip and Continue:: button is not displayed");
						}

					}
				}else{
					System.out.println("Text:: " + thisOrderHeader + " is displayed");
					log.debug("Text:: " + thisOrderHeader + " is displayed");
				}
			}else{
				System.out.println("GDPR is Disabled");
				log.debug("GDPR is Disabled");
			}
		} catch (Exception e) {
			System.out.println("Unable to select customer preferences");
			log.debug("Unable to select customer preferences");
			Screenshots.captureScreenshot();
		}
		Screenshots.captureScreenshot();
	}

}