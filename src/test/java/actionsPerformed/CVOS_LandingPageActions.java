package actionsPerformed;

import org.apache.log4j.Logger;

import helpers.Environment;

public class CVOS_LandingPageActions extends Environment {

	static Logger log = Logger.getLogger("devpinoyLogger");

	public static void CVOSSupplyChainLogin(String username,String password) throws InterruptedException
	{
		pageobjects.CVOS_PageObjects.Username.sendKeys(username);
		log.debug("The SupplyChain Username is entered");
		
		pageobjects.CVOS_PageObjects.Password.sendKeys(password);
		log.debug("The SupplyChain Password is entered");
		
		Thread.sleep(5000);
		if(pageobjects.CVOS_PageObjects.Login.isDisplayed())
		{
			pageobjects.CVOS_PageObjects.Login.click();
			log.debug("The SupplyChain Admin clicks on Login");
		}
		Thread.sleep(5000);
	
	
	}
	
	public static void CVOSTradingAdminLogin(String Username,String Password) throws InterruptedException
	{
		pageobjects.CVOS_PageObjects.Username.sendKeys(Username);
		log.debug("The TradingAdmin Username is entered");
		
		pageobjects.CVOS_PageObjects.Password.sendKeys(Password);
		log.debug("The TradingAdmin Password is entered");
		
		Thread.sleep(5000);
		if(pageobjects.CVOS_PageObjects.Login.isDisplayed())
		{
			pageobjects.CVOS_PageObjects.Login.click();
			log.debug("The Trading Admin clicks on Login");

		}
		Thread.sleep(5000);
	
	
	}
	
}
