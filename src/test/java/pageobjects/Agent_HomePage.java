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
	
		@FindBy(how=How.XPATH,using="//h2")
		public static WebElement sectionHeading;
		
		//@FindBy(how=How.XPATH,using="//*[@class='upgradeLink']/a")
		@FindBy(how=How.LINK_TEXT,using="Upgrade")
		public static WebElement UpgradeLink;		
		
		@FindBy(how=How.ID, using = "emptyDealButton")
		public static WebElement emptyDealButton;		
		
		
		@FindBy(how=How.ID,using="notfound")
		public static WebElement notfound;		
		
		@FindBy(how=How.ID,using="results")
		public static WebElement results;	
		
		
}