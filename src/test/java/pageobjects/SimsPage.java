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
		
		////h3[contains(text(),'1GB data - preloaded sim')] -- use it for 1GB sim

	@FindBy(how=How.XPATH,using="//a[contains(text(),'pick sim')][1]")
	public static WebElement pickSimLink;

	@FindBy(how=How.XPATH,using="//button[contains(text(),'Add To Basket')][1]")
	public static WebElement addToBasketCTA;

	@FindBy(how=How.XPATH,using="//p[contains(text(),'pickSimLinkLabel')][1]")
	public static WebElement pickSimLinkLabel;

		
}
