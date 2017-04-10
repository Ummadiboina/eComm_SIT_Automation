package actionsPerformed;



import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.Keys;



import helpers.*;

public class PAYMandPAYGTariffAndExtrasPageActions extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");

	   
		public static void GetPageName()
		{  
			
			System.out.println("Tariff and Extras page");
			  log.debug("Tariff and Extras page Validations");
			  log.debug("The Page title is"+driver.getTitle());			
			  driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
     
		}
		
		
		public static void TariffSelect(String ElementName) 
		{
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			
			if(ElementName.contains("Randomtariff"))
			{
				pageobjects.PAYMandPAYGTariffAndExtrasPage.RandomTariff1.sendKeys(Keys.ENTER);
				  log.debug("Selected a Random Tariff");
			}
			
			if(ElementName.contains("SelectPromotedTariff"))
			{
				pageobjects.PAYMandPAYGTariffAndExtrasPage.SelectPromotedTariff.sendKeys(Keys.ENTER);
				log.debug("Selected a Promoted Tariff");
			}
			
		}
			
		
		public static void addToBasketLive()
		{
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			pageobjects.PAYMandPAYGTariffAndExtrasPage.addToBasketLive.sendKeys(Keys.ENTER);
			  log.debug("Clicked on Add to Basket in Tariff and Extras page");

			
		}
	
		public static void addToBasketDockHeader()
		{
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			pageobjects.PAYMandPAYGTariffAndExtrasPage.addToBasketDockHeader.sendKeys(Keys.ENTER);
			log.debug("Clicked on Add to Basket in Tariff and Extras page");
			
		}
		
		
	
}
