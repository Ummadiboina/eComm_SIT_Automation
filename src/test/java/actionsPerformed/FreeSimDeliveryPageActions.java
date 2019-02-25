package actionsPerformed;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.TimeUnit;

import GlobalActions.*;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;

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

	public static void FreeSimAboutYou(String Firstname, String Surname) throws IOException

	{

		log.debug("Entering an Random email id");
		String email = RandomEmailAddressCreation.RandomEmail();
		System.out.println("Email Id entered::" +email);
		log.debug("Email Id entered:: " +email);
		DeliveryPage.Email_Address.sendKeys(email);
		log.debug("Setting the About you options");

		Select dropdown = new Select(DeliveryPage.Title);
		dropdown.selectByIndex(2);
		log.debug("Selected the dropdown Mrs");
		Reporter.log("Selected the dropdown Mrs");
		DeliveryPage.First_Name.sendKeys(Firstname);
		// DeliveryPage.First_Name.sendKeys(map.get(0).get("FirstName"));
		DeliveryPage.Last_Name.sendKeys(Surname);
		log.debug("Entered first name and last name as " + Firstname + " " + Surname);
		DeliveryPage.Contact_Number.sendKeys("07829483426");
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		//jse.executeScript("window.scrollBy(0,-200)", "");
		//Thread.sleep(3000);
		Screenshots.captureScreenshot();

	}

	public static void marketingMessageCheckBox(String CheckBox) throws IOException {
		//Marketing Message validation


		//Thread.sleep(3000);

		/*
		log.debug("Validating marketing message check box exist or not \n");
		if(driver.findElements(By.xpath("//input[@id='optin']")).size()>0) {
			String NoMarkettingMessage = DeliveryPage.NoMarkettingMessage.getText();
			log.debug("No Marketting Message :: " + NoMarkettingMessage);

			if (NoMarkettingMessage.contains("If you check this box, we’ll send you information about your order, but no marketing")) {
				log.debug("Marketting Message Successfully validated:: ");
			}

			Thread.sleep(2000);
			if(CheckBox.equalsIgnoreCase("Yes")){

				log.debug("Clicking on Marketing check box because customer should not be contacted for Marketing Preferences");
				DeliveryPage.marketCheckBox.click();
				log.debug("Clicked on Marketing check box because customer should not be contacted for Marketing Preferences");
			}else{
				log.debug("Not Clicked on Marketing check box because customer doesnt want to be contacted for Marketing Preferences");
			}

		}*/

		String NoMarkettingMessage = DeliveryPage.NoMarkettingMessage.getText();
		log.debug("Marketting Message :: " + NoMarkettingMessage+"\n");

		/*log.debug("Clicking on Privacy Policy");
		pageobjects.DeliveryPage.PrivacyPolicy.click();
		log.debug("Clicked the Privacy Policy link");*/


		/*String mainWindowHandle = driver.getWindowHandle();
		Set<String> mainWindowHandle1 = driver.getWindowHandles();
		System.out.println("Main window :: " +mainWindowHandle);
		System.out.println("Number of windows :: " +mainWindowHandle1.size());
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
		Thread.sleep(20000);
		String PrivacyPolicyMessage = pageobjects.DeliveryPage.PrivacyPolicyMessage.getText();
		log.debug("Privacy Policy Message :: "+PrivacyPolicyMessage);

		//driver.switchTo ().window (mainWindowHandle);

		*/

		Screenshots.captureScreenshot();
	}


	public static void ClickSendMeMySim() throws InterruptedException, IOException {

		log.debug("Clicking on I agree to the terms and condition check box\n");
		//Thread.sleep(3000);
		DeliveryPage.FreeSimTC.click();
		Thread.sleep(2000);
		Screenshots.captureScreenshot();
		log.debug("Clicking on the Send me my Sim Button\n");
		DeliveryPage.SendMeMySim.click();
		log.debug("Clicked on the Send me my Sim Button\n");
	}

}
