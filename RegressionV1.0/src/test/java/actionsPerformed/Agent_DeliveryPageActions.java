package actionsPerformed;

import helpers.Environment;
import pageobjects.Agent_Deliverydetails;
import pageobjects.DeliveryPage;

import org.apache.log4j.Logger;
import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;

import GlobalActions.RandomEmailAddressCreation;

public class Agent_DeliveryPageActions extends Environment{
	
	static Logger log = Logger.getLogger("devpinoyLogger");
	
	
//this  method used to perform click action on the Agent Home Page	
	
	public static void ElementClickAction(String elementname) {
		// TODO Auto-generated method stub
	
		System.out.println("Agent_Home_Page_Action");
		log.debug("Agent Delivery page validation");
		
		if(elementname!=null)
		{
			switch (elementname.toLowerCase())
			{
			case "AgreeAdvsioryCheck":
				pageobjects.Agent_Deliverydetails.AgreeAdvsioryCheck.click();
				break;
						
			}
	
		}
	}
	
	
	public static void Personaldetails(String Firstname, String Surname) throws InterruptedException
	{

		Select dropdown = new Select(pageobjects.Agent_Deliverydetails.Title);
		dropdown.selectByIndex(2);
		log.debug("Selected the dropdown Mrs");
		Reporter.log("Selected the dropdown Mrs");
		Agent_Deliverydetails.FirstName.sendKeys(Firstname);
		//DeliveryPage.First_Name.sendKeys(map.get(0).get("FirstName"));
		Agent_Deliverydetails.LastName.sendKeys(Surname);
		log.debug("Entered first name and last name as "+Firstname+" "+Surname);	
		
		//Email_Address.sendKeys("TestersitAuto9@gmail.com");
		//RandomEmailAddressCreation email = new RandomEmailAddressCreation();
		//RandomEmailAddressCreation.RandomEmail();
		Agent_Deliverydetails.DOB.sendKeys("01/01/1985");
		log.debug("Entered Date of Birth as 01/01/1985");
		Agent_Deliverydetails.ContactNumber.sendKeys("07829483426");
		log.debug("Entered Contact Number as 07829483426");
		Agent_Deliverydetails.HouseNumber.sendKeys("12");
		log.debug("Entered House Number as 12");
		Agent_Deliverydetails.Postcode.sendKeys("B15 2LG");
		log.debug("Entered House Postcode  as B15 2LG");
		pageobjects.Agent_Deliverydetails.FindAddress.click();
		log.debug("Clicked on the Find address button");
		Thread.sleep(5000);
		if(pageobjects.Agent_Deliverydetails.Selectedaddress1.isDisplayed())
		{
			pageobjects.Agent_Deliverydetails.Selectedaddress1.click();
			log.debug("Selected an address");

		}
		Agent_Deliverydetails.YearsatAddress.sendKeys("09");
		log.debug("Entered Number of Years at address");
		Agent_Deliverydetails.monthsatAddress.sendKeys("05");
		log.debug("Entered Number of Months at address");


	}
	
	
	  public static void Set_Bank_details(String Username)
	  {
			  
		
		  
		  pageobjects.Agent_Deliverydetails.AccountName.sendKeys(Username);
		  log.debug("Entered name is "+Username);

		  pageobjects.Agent_Deliverydetails.AccountNumber.sendKeys("10207136");
		  log.debug("Entered Account number - 10207136");
		  
		  pageobjects.Agent_Deliverydetails.SortCode.sendKeys("201596");
		  log.debug("Entered sort code - 201596");
		  
		  pageobjects.Agent_Deliverydetails.CardCapture.click();
		  log.debug("Card Cature Link is clicked");
		
	
		  
		  pageobjects.Agent_Deliverydetails.AgreeCreditCheck.click();
		  log.debug("Clicked on the Accept Terms checkbox");
		  
		   }
}

