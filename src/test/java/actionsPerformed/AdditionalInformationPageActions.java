package actionsPerformed;

import java.awt.AWTException;
import java.io.IOException;
import java.util.Map;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import cucumber.api.DataTable;

import GlobalActions.Screenshots;
import helpers.Environment;
import pageobjects.PaymentPage;

public class AdditionalInformationPageActions extends Environment {
	final static Logger log = Logger.getLogger("AdditionalInformationPageActions");

	public static void gettitlepage() throws IOException, InterruptedException {

		System.out.println("Below is the Additional information page...");
		System.out.println(driver.getTitle());
		log.debug("Entered Additional information page");
		Screenshots.captureScreenshot();
	}

	public static void SectionsDisplayed() throws IOException, InterruptedException {

		System.out.println("Below are the sections displayed");
		pageobjects.AdditionalInformationPage.passportInfo.getText();
		log.debug("Passport info section is displayed");
		System.out.println("Driving license section is displayed ");
		pageobjects.AdditionalInformationPage.drivingLicence.getText();
		log.debug("Driving license section is displayed ");
		System.out.println("Additional card section ");
		pageobjects.AdditionalInformationPage.additionalCard.getText();
		log.debug("Additional card section is displayed");

		Screenshots.captureScreenshot();
	}

	public static void AdditionalCardDetails(String Username2) throws InterruptedException, IOException {

		driver.switchTo().frame("additional-card-iframe"); // switching the frame by ID

		System.out.println("********We are switch to the iframe*******");
		log.debug("Entering the Payments section");
		Thread.sleep(2000);
		PaymentPage.CardHolderName.sendKeys(Username2);
		log.debug("Entering name of the card as " + Username2);

		Thread.sleep(2000);
		PaymentPage.CardNumber.sendKeys("4539791001730106");
		log.debug("Entered Card number as 4539xxxxxxxxxx06");
		Thread.sleep(2000);
		PaymentPage.CardMonth.sendKeys("01");
		log.debug("Entered Expiry Month");
		Thread.sleep(2000);
		PaymentPage.CardYear.sendKeys("2020");
		log.debug("Entered Expiry Year");
		Thread.sleep(2000);
		PaymentPage.SecurityCode.sendKeys("123");
		log.debug("Entered CVV security code");
		Thread.sleep(2000);
		PaymentPage.Continue_Next_Step.sendKeys(Keys.ENTER);
		log.debug("Clicking on continue to next step");
		Thread.sleep(2000);
		System.out.println("*********We are done***************");
		log.debug("Exiting the Payments section");
		driver.switchTo().defaultContent();
		// System.out.println(driver.getTitle());
		Screenshots.captureScreenshot();
	}

	public static void ClickOn() throws IOException, InterruptedException {

		System.out.println("Clicking on continue to next step");
		pageobjects.AdditionalInformationPage.Continue_Next_Step.click();
		log.debug("Clicking on continue to next step");
		Screenshots.captureScreenshot();

	}

	public static void passportInfo() throws IOException, InterruptedException {

		System.out.println("Below are the sections displayed");
		pageobjects.AdditionalInformationPage.passportInfo.getText();
		log.debug("Passport info section is displayed");
		System.out.println("Driving license section is displayed ");
		pageobjects.AdditionalInformationPage.drivingLicence.getText();
		log.debug("Driving license section is displayed ");
		System.out.println("Additional card section ");
		pageobjects.AdditionalInformationPage.additionalCard.getText();
		log.debug("Additional card section is displayed");

		Screenshots.captureScreenshot();
	}

	public static void enterDrivingLicenceDetails(DataTable uservalue) throws IOException, InterruptedException {

		for (Map<String, String> user : uservalue.asMaps(String.class, String.class))
		{

            pageobjects.AdditionalInformationPage.DrivingLicenceNumberText1.sendKeys(user.get("DLinfo1"));
            pageobjects.AdditionalInformationPage.DrivingLicenceNumberText2.sendKeys(user.get("DLinfo2"));
            pageobjects.AdditionalInformationPage.DrivingLicenceNumberText3.sendKeys(user.get("DLinfo3"));
            pageobjects.AdditionalInformationPage.DrivingLicenceNumberText4.sendKeys(user.get("DLinfo4"));
            pageobjects.AdditionalInformationPage.PostCode.sendKeys(user.get("PostCode"));

		}

		Screenshots.captureScreenshot();
	}

    public static void enterPassportNumber(DataTable uservalue) throws IOException, InterruptedException {

        for (Map<String, String> user : uservalue.asMaps(String.class, String.class))
        {

            pageobjects.AdditionalInformationPage.CountryCode.sendKeys(user.get("CountryCode"));
            pageobjects.AdditionalInformationPage.Passportnumber1.sendKeys(user.get("DLinfo1"));
            pageobjects.AdditionalInformationPage.Passportnumber2.sendKeys(user.get("DLinfo1"));
            pageobjects.AdditionalInformationPage.Passportnumber3.sendKeys(user.get("DLinfo1"));
            pageobjects.AdditionalInformationPage.Passportnumber4.sendKeys(user.get("DLinfo1"));
            pageobjects.AdditionalInformationPage.Passportnumber5.sendKeys(user.get("DLinfo1"));
            pageobjects.AdditionalInformationPage.Passportnumber6.sendKeys(user.get("DLinfo1"));
            pageobjects.AdditionalInformationPage.Passportnumber7.sendKeys(user.get("DLinfo1"));

        }

        Screenshots.captureScreenshot();
    }

}
