package pageobjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class SmartwatchesPage{
	  
	  
		@FindBy(how=How.XPATH,using="//h2[contains(text(),'Filter')]")
		public static WebElement SmartwatchesFilterTab;
		
		@FindBy(how=How.XPATH,using="//h2[contains(text(),'Sort')]")
		public static WebElement SmartwatchesSortTab;
		
		@FindBy(how=How.XPATH,using="//*[@data-qa-device-contract-type='nonconnected'][1]")
		public static WebElement RandomSmartWatch;
}
