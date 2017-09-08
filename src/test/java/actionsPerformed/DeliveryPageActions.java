package actionsPerformed;

import java.util.HashMap;
import java.util.List;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;
import helpers.Environment;
import GlobalActions.RandomEmailAddressCreation;
import pageobjects.DeliveryPage;

public class DeliveryPageActions extends Environment {

	// public static WebDriver driver;
	public List<HashMap<String, String>> datamap;
	static Logger log = Logger.getLogger("devpinoyLogger");
	static JavascriptExecutor js = (JavascriptExecutor) driver;

	public static void SetDelivery() throws InterruptedException {
		pageobjects.DeliveryPage.Housenumber.sendKeys("12");
		log.debug("Entered House number");

		pageobjects.DeliveryPage.Postcode.sendKeys("B15 2LG");
		log.debug("Entered Post code");
		pageobjects.DeliveryPage.Find_Address.click();
		log.debug("Clicked on the Find address button");
		Thread.sleep(5000);
		if (pageobjects.DeliveryPage.SelectAddress1.isDisplayed()) {
			pageobjects.DeliveryPage.SelectAddress1.click();
			log.debug("Selected an address");

		}
	}

	public static void AboutYou(String Firstname, String Surname) {
		log.debug("Entering an Random email id");
		DeliveryPage.Email_Address.sendKeys(RandomEmailAddressCreation.RandomEmail());
		System.out.println("Setting the About you options");
		log.debug("Setting the About you options");
		Select dropdown = new Select(pageobjects.DeliveryPage.Title);
		dropdown.selectByIndex(2);
		log.debug("Selected the dropdown Mrs");
		Reporter.log("Selected the dropdown Mrs");
		DeliveryPage.First_Name.sendKeys(Firstname);
		// DeliveryPage.First_Name.sendKeys(map.get(0).get("FirstName"));
		DeliveryPage.Last_Name.sendKeys(Surname);
		log.debug("Entered first name and last name as " + Firstname + " " + Surname);
		DeliveryPage.Contact_Number.sendKeys("07829483426");
		DeliveryPage.Password.sendKeys("NTTDATA123");
		DeliveryPage.security_answer.sendKeys("SitTester");
		DeliveryPage.date.sendKeys("25");
		DeliveryPage.Month.sendKeys("01");
		DeliveryPage.year.sendKeys("1957");
		log.debug("Entered all the other relavant details");

	}

	public static void ClickContinue() throws InterruptedException {
		System.out.println("Continuing to next page");
		Thread.sleep(3000);
		pageobjects.DeliveryPage.Continue.click();
		log.debug("Clicking on the continue link");

	}

	public static void selectExistingAcctAndFastCheckOut() throws InterruptedException {
		Thread.sleep(10000);

		System.out.println("going to click on existing account");

		pageobjects.DeliveryPage.SelectAcct.click();
		Thread.sleep(3000);
		js.executeScript("arguments[0].click();", pageobjects.DeliveryPage.FastCheckOut);
		System.out.println("FastCheckout button is selected");

	}

	public static void checkStockExtMsgDP() {
		// TODO Auto-generated method stub
		String ActualStockExtMsg = pageobjects.DeliveryPage.StockExtMessageDDPODP.getText();
		String ExpStockExtMsg = "You'll pay for your phone now. We’ll send you an email or text to let you know when it will be delivered";
		System.out.println("Act Del MSg" + ActualStockExtMsg);
		System.out.println("Exp Del MSg" + ExpStockExtMsg);

		if (ActualStockExtMsg.matches(ExpStockExtMsg)) {
			System.out.println("ActualStockExtMsg matches ExpStockExtMsg");
		} else {
			Assert.fail("Stock extended message for stock limited DD/Pre order phone does not match");

		}
	}

}