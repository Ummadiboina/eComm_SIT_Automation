package actionsPerformed;



import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.Keys;
import org.openqa.selenium.JavascriptExecutor;



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
			if(ElementName.contains("fullpaymenttariff1"))
			{
				
				JavascriptExecutor jse = (JavascriptExecutor) driver;
			    jse.executeScript("window.scrollBy(0,350)", "");
				pageobjects.PAYMandPAYGTariffAndExtrasPage.paydevicefulllink.click();
				log.debug("Expanded the Full payment Tariff Section");
				
				pageobjects.PAYMandPAYGTariffAndExtrasPage.RandomfullTariff2.sendKeys(Keys.ENTER);
				log.debug("Selected a full payment Tariff");
			}
		}
			
		
		public static void addAccessory() throws InterruptedException
		{
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			  log.debug("The Accessory which will be added is  - "+pageobjects.PAYMandPAYGTariffAndExtrasPage.AddRandomAccessory.getText());
			pageobjects.PAYMandPAYGTariffAndExtrasPage.AddRandomAccessory.sendKeys(Keys.ENTER);
			Thread.sleep(2000);
			  log.debug("Added a random accessory to basket");

			
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
