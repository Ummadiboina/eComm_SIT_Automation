package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SimsPage {
	
	  
	
		//Below is for selecting an Ipad sims from Sims --- > ipad Sims
		@FindBy(how=How.XPATH,using="//*[@id='ipad-sim-promo-m-1']")
		public static WebElement IpadPromo1;
		
		@FindBy(how=How.XPATH,using="//*[@id='tablet-sims-index-promo-s-short-1']")
		public static WebElement TabletPromo1;
		
		
}
