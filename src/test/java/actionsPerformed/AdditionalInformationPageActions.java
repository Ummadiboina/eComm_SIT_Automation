package actionsPerformed;

import java.awt.AWTException;
import java.io.IOException;

import org.apache.log4j.Logger;
import org.openqa.selenium.Keys;

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

	public static void AdditionalCardDetails(String Username2) throws InterruptedException, AWTException, IOException {

		driver.switchTo().frame("additional-card-iframe"); // switching the frame by ID

		System.out.println("********We are switch to the iframe*******");
		log.debug("Entering the Payments section");
		Thread.sleep(2000);
		PaymentPage.Name_On_Card.sendKeys(Username2);
		log.debug("Entering name of the card as " + Username2);

		Thread.sleep(2000);
		PaymentPage.Card_Number.sendKeys("4539791001730106");
		log.debug("Entered Card number as 4539xxxxxxxxxx06");
		Thread.sleep(2000);
		PaymentPage.Expiry_Month.sendKeys("01");
		log.debug("Entered Expiry Month");
		Thread.sleep(2000);
		PaymentPage.Expiry_Year.sendKeys("2020");
		log.debug("Entered Expiry Year");
		Thread.sleep(2000);
		PaymentPage.CVV_Security_Code.sendKeys("123");
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

}
