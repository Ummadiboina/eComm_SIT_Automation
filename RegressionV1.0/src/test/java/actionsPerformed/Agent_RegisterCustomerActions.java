package actionsPerformed;

import helpers.Environment;
import pageobjects.Agent_RegisterCustomerPage;
import org.apache.log4j.Logger;
import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;

import GlobalActions.RandomEmailAddressCreation;

public class Agent_RegisterCustomerActions extends Environment{
	
	static Logger log = Logger.getLogger("devpinoyLogger");
	
	
//this  method used to perform click action on the Agent Home Page	
	/*
	public static void Personaldetails(String Firstname, String Surname) throws InterruptedException
	{

		Select dropdown = new Select(pageobjects.Agent_RegisterCustomerPage.Title);
		dropdown.selectByIndex(2);
		log.debug("Selected the dropdown Mrs");
		Agent_RegisterCustomerPage.FirstName.sendKeys(Firstname);
		//DeliveryPage.First_Name.sendKeys(map.get(0).get("FirstName"));
		Agent_RegisterCustomerPage.LastName.sendKeys(Surname);
		log.debug("Entered first name and last name as "+Firstname+" "+Surname);	
		
		
		Agent_RegisterCustomerPage.DOB.sendKeys("01/01/1985");
		log.debug("Entered Date of Birth as 01/01/1985");
		Agent_RegisterCustomerPage.ContactNumber.sendKeys("07829483426");
		log.debug("Entered Contact Number as 07829483426");
		Agent_RegisterCustomerPage.HouseNumber.sendKeys("12");
		log.debug("Entered House Number as 12");
		Agent_RegisterCustomerPage.Postcode.sendKeys("B15 2LG");
		log.debug("Entered House Postcode  as B15 2LG");
		pageobjects.Agent_RegisterCustomerPage.FindAddress.click();
		log.debug("Clicked on the Find address button");
		Thread.sleep(5000);
		if(pageobjects.Agent_RegisterCustomerPage.Selectedaddress1.isDisplayed())
		{
			pageobjects.Agent_RegisterCustomerPage.Selectedaddress1.click();
			log.debug("Selected an address");

		}
		Agent_RegisterCustomerPage.YearsatAddress.sendKeys("09");
		log.debug("Entered Number of Years at address");
		Agent_RegisterCustomerPage.monthsatAddress.sendKeys("05");
		log.debug("Entered Number of Months at address");


	}
	
	*/
	
	
	public static void PayGRegistration(String Firstname, String Surname) throws InterruptedException
	{
				Select dropdown = new Select(pageobjects.Agent_RegisterCustomerPage.Title);
				dropdown.selectByIndex(2);
				log.debug("Selected the dropdown Mrs");
				Reporter.log("Selected the dropdown Mrs");
				
				Agent_RegisterCustomerPage.FirstName.sendKeys(Firstname);
				log.debug("Entered First name");
				Agent_RegisterCustomerPage.LastName.sendKeys(Surname);
				log.debug("Entered Last name");
				System.out.println(RandomEmailAddressCreation.RandomAgentEmail());

				//Agent_RegisterCustomerPage.Email.sendKeys("vinudeep.malalur@o2.com");
				log.debug("Entered email address");
				Agent_RegisterCustomerPage.DOB.sendKeys("10-10-1981");
				log.debug("Entered date of birth");
				Thread.sleep(2000);
				Agent_RegisterCustomerPage.ContactNumber.sendKeys("07888594958");
				log.debug("Entered contact number");
				Thread.sleep(2000);
				
				Agent_RegisterCustomerPage.intialPassword.sendKeys("SitTester123");
				Agent_RegisterCustomerPage.confirmPassword.sendKeys("SitTester123");
				Thread.sleep(2000);
				Agent_RegisterCustomerPage.HouseNumber.sendKeys("Flat 2");
				Thread.sleep(2000);
				Agent_RegisterCustomerPage.Postcode.sendKeys("SL1 1EL");
				log.debug("Entered House Postcode  as SL1 1EL");

				Thread.sleep(2000);
				pageobjects.Agent_RegisterCustomerPage.FindAddress.click();
				Thread.sleep(2000);
				log.debug("Clicked on the Find address button");
				
				pageobjects.Agent_RegisterCustomerPage.Selectedaddress.click();
				log.debug("Selected an address");

				Select dropdown2 = new Select(pageobjects.Agent_RegisterCustomerPage.securityQuestion);
				dropdown2.selectByIndex(2);
				pageobjects.Agent_RegisterCustomerPage.securityAnswer.sendKeys("Rotary");
				Thread.sleep(2000);
				Agent_RegisterCustomerPage.registerCustomer.click();
				Thread.sleep(3000);
				log.debug("Clicked on Register customer");
			}
	
	public static void PaybyCard() throws InterruptedException
	{
		Agent_RegisterCustomerPage.PayByCard.click();
		Thread.sleep(2000);

	}

	public static void CardDetails() throws InterruptedException
	{
		Agent_RegisterCustomerPage.CardHolderName.sendKeys("TEST ACCEPTA");
		
		Select CardTypeDropDown = new Select(pageobjects.Agent_RegisterCustomerPage.CardType);
		CardTypeDropDown.selectByIndex(2);
		
		Agent_RegisterCustomerPage.CardHolderName.sendKeys("TEST ACCEPTA");

		
		Select CardMonthDropdown = new Select(pageobjects.Agent_RegisterCustomerPage.CardMonth);
		CardMonthDropdown.selectByIndex(2);
		
		Select CardYearDropdown = new Select(pageobjects.Agent_RegisterCustomerPage.CardYear);
		CardYearDropdown.selectByIndex(3);
		
		
	}
	
	}
	
	
	


