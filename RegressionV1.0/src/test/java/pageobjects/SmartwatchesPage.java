package pageobjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class SmartwatchesPage{
	  
	  
		@FindBy(how=How.XPATH,using="//h2[contains(text(),'Filter')]")
		public static WebElement SmartwatchesFilterTab;
		
		@FindBy(how=How.XPATH,using="//h2[contains(text(),'Sort')]")
		public static WebElement SmartwatchesSortTab;
		
		@FindBy(how=How.XPATH,using="//*[@id='o2-page-wrapper']/div[2]/div[3]/div[1]/div[1]/div/div/div/div/a")
		public static WebElement RandomSmartWatch;
}
