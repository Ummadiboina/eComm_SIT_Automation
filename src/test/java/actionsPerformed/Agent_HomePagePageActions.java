package actionsPerformed;

import helpers.Environment;
import junit.framework.Assert;
import pageobjects.Agent_HomePage;
import pageobjects.DeliveryPage;

import static org.testng.Assert.assertEquals;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;

import GlobalActions.RandomEmailAddressCreation;

public class Agent_HomePagePageActions extends Environment{
	
	static Logger log = Logger.getLogger("devpinoyLogger");
	
	
//this  method used to perform click action on the Agent Home Page	
	
	public static void ElementClickAction(String elementname) {
		// TODO Auto-generated method stub
	
		System.out.println("Agent_Home_Page_Action");
		log.debug("Agent Home Page validation");
		
		if(elementname!=null)
		{
			switch (elementname.toLowerCase())
			{
			case "NewCustomer":
				pageobjects.Agent_HomePage.NewCustomer.click();
				break;
			}
	
		}
	}
	
	//This method will take care of Entering msisdn as per cucumber file and also for logging in 
	public static void FindUser(String msisdn) throws InterruptedException
	{
		
		
			driver.manage().deleteAllCookies();
			Agent_HomePage.MPN.sendKeys(msisdn);
			log.debug("Entering Valid MPN");
			System.out.println("Entering Valid MPN");
			Thread.sleep(3000);		
			Agent_HomePage.Search.click();
			log.debug("Clicking on Search button");
			System.out.println("Clicking on Search button");
			Thread.sleep(3000);
			if(driver.findElement(By.id("notfound")).isDisplayed())
					{
				Assert.fail("MPN entered is wrong, please check back your test case");
					}
			try
			{
				//Assert.assertEquals("Upgrade", Agent_HomePage.results.getText().contains("Upgrade"));
				Agent_HomePage.UpgradeLink.click();
				log.debug("Clicking on upgrade link");
				System.out.println("Clicking on upgrade link");
				Thread.sleep(3000);	
			}
			catch (Exception e)
			{
				Assert.fail("There is no Upgrade link available in page");
				System.out.println("The current message is "+Agent_HomePage.notfound.getText());
				
			}
			if(Agent_HomePage.emptyDealButton.isEnabled())
			{
				System.out.println("The Empty Deal button is enabled hence Emptying the basket");		
				Agent_HomePage.emptyDealButton.click();
				log.debug("Clicking on emptyDealButton button");

			}
			else
			{
				System.out.println("The Empty Deal button is not present hence it should be alright");		
			}

	}
	
	
	public static void NewUser() throws InterruptedException
	{
		driver.manage().deleteAllCookies();
		
		try
		{
		Assert.assertTrue(pageobjects.Agent_HomePage.NewCustomer.isDisplayed());
		pageobjects.Agent_HomePage.NewCustomer.click();
		Thread.sleep(3000);
		log.debug("Performing new user new connection");
		System.out.println("Performing new user new connection");
		Reporter.log("Performing new user new connection");
	}
		catch (Exception e)
		{
			Assert.fail();
		}
		if(Agent_HomePage.emptyDealButton.isEnabled())
		{
			System.out.println("The Empty Deal button is enabled hence Emptying the basket");		
			Agent_HomePage.emptyDealButton.click();
			log.debug("Clicking on emptyDealButton button");
		}
		else
		{
			System.out.println("The Empty Deal button is not present hence it should be alright");	
			log.debug("The Empty Deal button is not present hence it should be alright");

		}
		
	}
	
	
	
	public static void ValidateAgentHomepage() 
	{
		
		System.out.println("Agent Home page Validation"+driver.getTitle());
		log.debug("Agent Home Page validation"+driver.getTitle());
		
		
		//Assert.assertEquals("Your basket", pageobjects.BasketPage.BasketHeaderXXL.getText());
	}
		
		
	}
	
	
	


