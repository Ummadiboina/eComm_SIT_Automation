package actionsPerformed;

import java.util.HashMap;
import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;

import GlobalActions.RandomEmailAddressCreation;
import helpers.Environment;
import pageobjects.DeliveryPage;

public class FreeSimDeliveryPageActions extends Environment {

	public WebDriver driver;
	public List<HashMap<String, String>> datamap;
	static Logger log = Logger.getLogger("devpinoyLogger");
	private static CharSequence Firstname;
	private static CharSequence Surname;

	public static void FreeSimAboutYou(String Firstname, String Surname) throws InterruptedException

	{

		

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

	}

	public static void ClickSendMeMySim() throws InterruptedException {

		System.out.println("Clicking on Send me  my Free Sim page");
		Thread.sleep(3000);
		pageobjects.DeliveryPage.FreeSimTC.click();
		pageobjects.DeliveryPage.SendMeMySim.click();
		log.debug("Clicking on the Send me my Sim Button");

	}

}
