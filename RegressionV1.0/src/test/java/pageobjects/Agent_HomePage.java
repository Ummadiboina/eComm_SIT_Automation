package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Agent_HomePage {
	
	  
		@FindBy(how=How.XPATH,using="//*[@id='acquisition']/p/a")
		public static WebElement NewCustomer;
				
		@FindBy(how=How.ID,using="msisdn")
		public static WebElement MPN;
		
		@FindBy(how=How.ID,using="portalid")
		public static WebElement PortalID;
		
		@FindBy(how=How.ID,using="fun")
		public static WebElement fun;
		
		@FindBy(how=How.ID,using="searchBtn")
		public static WebElement Search;
	
		
}