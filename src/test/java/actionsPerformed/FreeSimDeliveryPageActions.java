package actionsPerformed;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.TimeUnit;

import GlobalActions.CommonActions;
import GlobalActions.CommonUtilities;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;

import GlobalActions.RandomEmailAddressCreation;
import GlobalActions.Screenshots;
import helpers.Environment;
import pageobjects.DeliveryPage;
import java.util.Iterator;
import java.util.Set;

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

		String NoMarkettingMessage = pageobjects.DeliveryPage.NoMarkettingMessage.getText();
		log.debug("No Marketting Message :: "+ NoMarkettingMessage);

		log.debug("Clicking on Privacy Policy");
		pageobjects.DeliveryPage.PrivacyPolicy.click();

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

				driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
				//Thread.sleep(10000);

				String PrivacyPolicyMessage = pageobjects.DeliveryPage.PrivacyPolicyMessage.getText();
				log.debug("Privacy Policy Message :: "+PrivacyPolicyMessage);
			}
		}

		// Switching to Parent window i.e Main Window.
		driver.switchTo().window(Mainwindow);
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

		log.debug("Clicking on Marketing check box");
		pageobjects.DeliveryPage.marketCheckBox.click();

		Screenshots.captureScreenshot();
	}


	public static void ClickSendMeMySim() throws InterruptedException, IOException {

		log.debug("Clicking on Send me  my Free Sim page");
		Thread.sleep(3000);
		pageobjects.DeliveryPage.FreeSimTC.click();
		Thread.sleep(3000);
		pageobjects.DeliveryPage.SendMeMySim.click();
		log.debug("Clicking on the Send me my Sim Button");
		Screenshots.captureScreenshot();

	}

}
