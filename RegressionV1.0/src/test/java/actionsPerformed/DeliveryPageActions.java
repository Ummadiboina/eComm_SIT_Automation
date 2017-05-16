package actionsPerformed;


import java.util.HashMap;
import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;

import GlobalActions.RandomEmailAddressCreation;
import pageobjects.DeliveryPage;




public class DeliveryPageActions {
	  
	public WebDriver driver;
	public List<HashMap<String, String>> datamap;
	static Logger log = Logger.getLogger("devpinoyLogger");


	  		

		public static void SetDelivery() throws InterruptedException
		{
			pageobjects.DeliveryPage.Housenumber.sendKeys("12");
			  log.debug("Entered House number");

			pageobjects.DeliveryPage.Postcode.sendKeys("B15 2LG");
			log.debug("Entered Post code");
			pageobjects.DeliveryPage.Find_Address.click();
			log.debug("Clicked on the Find address button");
			Thread.sleep(5000);
			if(pageobjects.DeliveryPage.SelectAddress1.isDisplayed())
			{
				pageobjects.DeliveryPage.SelectAddress1.click();
				log.debug("Selected an address");

			}
		}
	
		
		public static void AboutYou(String Firstname, String Surname)
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
			//DeliveryPage.First_Name.sendKeys(map.get(0).get("FirstName"));
			DeliveryPage.Last_Name.sendKeys(Surname);
			log.debug("Entered first name and last name as "+Firstname+" "+Surname);
			DeliveryPage.Contact_Number.sendKeys("07829483426");
			DeliveryPage.Password.sendKeys("NTTDATA123");
			DeliveryPage.security_answer.sendKeys("SitTester");
			DeliveryPage.date.sendKeys("01");
			DeliveryPage.Month.sendKeys("08");
			DeliveryPage.year.sendKeys("1991");
			log.debug("Entered all the other relavant details");

		}
		
		public static void ClickContinue() throws InterruptedException
		{
			System.out.println("Continuing to next page");
			Thread.sleep(3000);
			pageobjects.DeliveryPage.Continue.click();	
			log.debug("Clicking on the continue link");

		
		}
		
		
		
		
		
}