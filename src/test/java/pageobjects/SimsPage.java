package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SimsPage {
	
	  
	
		//Below is for selecting an Ipad sims from Sims --- > ipad Sims
//		@FindBy(how=How.XPATH,using="//*[@id='ipad-sim-promo-m-1']")
		
		
		@FindBy(how=How.XPATH,using="//*[@title='Buy now'][1]")
		public static WebElement IpadPromo1;
		
		//@FindBy(how=How.XPATH,using="//*[@id='tablet-sims-index-promo-s-short-1']")
		@FindBy(how=How.XPATH,using="//p[contains(text(),'Buy now')][1]")
		public static WebElement TabletPromo1;
		
		////h3[contains(text(),'1GB data – preloaded sim')] -- use it for 1GB sim
		//Below will click on the Sims -- > iPadsandTablets
		
		@FindBy(how = How.XPATH, using = ("//a[@href='#tablets']"))
		public static WebElement iPadsandTablets;	
}

