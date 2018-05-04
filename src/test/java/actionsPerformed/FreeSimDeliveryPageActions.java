package actionsPerformed;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.TimeUnit;

import GlobalActions.CommonUtilities;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;

import GlobalActions.RandomEmailAddressCreation;
import GlobalActions.Screenshots;
import helpers.Environment;
import pageobjects.DeliveryPage;

public class FreeSimDeliveryPageActions extends Environment {

	public static WebDriver driver;
	public List<HashMap<String, String>> datamap;
	final static Logger log = Logger.getLogger("FreeSimDeliveryPageActions");
	private static CharSequence Firstname;
	private static CharSequence Surname;

	public static void FreeSimAboutYou(String Firstname, String Surname) throws InterruptedException, IOException

	{

		log.debug("Entering an Random email id");
		DeliveryPage.Email_Address.sendKeys(RandomEmailAddressCreation.RandomEmail());
		log.debug("Setting the About you options");
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
		Screenshots.captureScreenshot();
	}

	public static void marketingMessageCheckBox(String CheckBox) throws InterruptedException, IOException {
		//Marketing Message validation

		log.debug("Clicking on I agree check box");
		Thread.sleep(3000);
		pageobjects.DeliveryPage.Iagree.click();
		//pageobjects.DeliveryPage.IagreeTermsCondition.click();

		String NoMarkettingMessage = pageobjects.DeliveryPage.NoMarkettingMessage.getText();
		log.debug("No Marketting Message :: "+ NoMarkettingMessage);

		log.debug("Clicking on Privacy Policy");
		pageobjects.DeliveryPage.PrivacyPolicy.click();
		CommonUtilities.switchToWindow(driver);

		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

		String PrivacyPolicyMessage = pageobjects.DeliveryPage.PrivacyPolicyMessage.getText();
		log.debug("Privacy Policy Message :: "+PrivacyPolicyMessage);

		CommonUtilities.switchToWindow(driver);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		log.debug("Clicking on Marketing check box");
		pageobjects.DeliveryPage.marketCheckBox.click();

		Screenshots.captureScreenshot();
	}


	public static void ClickSendMeMySim() throws InterruptedException, IOException {

		log.debug("Clicking on Send me  my Free Sim page");
		Thread.sleep(3000);
		pageobjects.DeliveryPage.FreeSimTC.click();
		pageobjects.DeliveryPage.SendMeMySim.click();
		log.debug("Clicking on the Send me my Sim Button");
		Screenshots.captureScreenshot();

	}

}
