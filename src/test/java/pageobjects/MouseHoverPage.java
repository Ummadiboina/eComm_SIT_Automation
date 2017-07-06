package pageobjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import helpers.Environment;


public class MouseHoverPage extends Environment
{
	
   	 
   	//Below will click on the Header Just to move mouse
  	@FindBy(how=How.ID,using=("shop-simplicity-header-xxl"))
  	public static WebElement MoveMouseOnShopHeader;
  	
  	
   	//Below will click on the Shop Tab
   	@FindBy(how=How.ID,using="pn1") 
	public static WebElement MoveMouseOnShopTab;
   	
   	//Below will click on the Phones Link	
	@FindBy(how=How.XPATH,using=("//a[contains(text(), 'Phones')]"))
	public static WebElement MoveMouseOnPhones;

	@FindBy(how=How.XPATH,using=("//a[contains(text(), 'Pay Monthly phones')]"))
	public static WebElement MoveMouseOnPAYMPhones;
	
	@FindBy(how=How.XPATH,using=("//a[contains(text(), 'Pay As You Go phones')]"))
	public static WebElement MoveMouseOnPAYGPhones;
	
	@FindBy(how=How.XPATH,using=("//a[contains(text(), 'Browse Phones')]"))
	public static WebElement MoveMouseOnBrowsePhones;
	
	
	//Below will click on the Phone -- > Like New 
	@FindBy(how=How.XPATH,using=("//a[contains(text(), 'Like New')]"))
	public static WebElement MoveMouseOnLikeNew;
	
	//Below will click on the Sims 
	@FindBy(how=How.XPATH,using=("//*[@id='pn1']/ul/li/a[contains(text(), 'Sims')]"))
	public static WebElement MoveMouseOnSims;
	
	//Below will click on the Sims -- > Ipad 
	@FindBy(how=How.XPATH,using=("//a[contains(text(), 'iPad sims')]"))
	public static WebElement MoveMouseOnIpadSims;
	
	
	//Below will click on the Sims -- > Tablet 
		@FindBy(how=How.XPATH,using=("//a[contains(text(), 'Tablet sims')]"))
		public static WebElement MoveMouseOnTabletSims;
		
		
	//Below will click on the Sims -- > PayM 
	@FindBy(how=How.XPATH,using=("//a[contains(text(), 'Pay Monthly sims')]"))
	public static WebElement MoveMouseOnPayMSims;
		
	@FindBy(how=How.XPATH,using=("//a[contains(text(), 'Upgrades')]"))
	public static WebElement MouseMoveonUpgrade;
	
	@FindBy(how=How.XPATH,using=("//a[contains(text(), 'Upgrade now')]"))
	public static WebElement MouseMoveonUpgradeAndUpgradeNow;
	
	
	//Below will click on the Tablets Tab
	
	@FindBy(how=How.XPATH,using=("//a[contains(text(), 'Browse Tablets')]"))
	public static WebElement MoveMouseOnBrowseTablets;
	
	@FindBy(how=How.XPATH,using=("//a[contains(text(), 'Tablets')]"))
	public static WebElement MoveMouseOnTablets;
	
	//Below is the link on the Accessory
	@FindBy(how=How.XPATH,using=("//a[contains(text(), 'Accessories')]"))
	public static WebElement MoveMouseOnAccessoriesTab;
	
	@FindBy(how=How.XPATH,using=("//a[contains(text(), 'All accessories')]"))
	public static WebElement MoveMouseOnAllAccessories;
	
	
	//Below is the link on the Smart Tech
	
	@FindBy(how=How.XPATH,using="//a[contains(@href, 'https://www.o2.co.uk/shop/smart-tech/')]")
	public static WebElement MoveMouseOnSmarttechTab;
	
	
	
	//Below is the link on the Smartwatches
	@FindBy(how=How.XPATH,using=("//a[contains(text(), 'Smartwatches')]"))
	public static WebElement MoveMouseOnSmartwatches;

	
	//Below is the link on the Fitness
	
	@FindBy(how=How.XPATH,using=("//a[contains(text(), 'Fitness trackers')]"))
	public static WebElement MoveMouseOnFitnessTrackers;

	//Below will click on the MobileBroadband Link in Shop Drop down
	@FindBy(how=How.XPATH,using=("//a[contains(text(), 'Mobile broadband')]"))
	public static WebElement MoveMouseOnMobileBroadband;
		
	//Below will click on the Pay as you Go Link under MobileBroadband tab
	@FindBy(how=How.XPATH,using=("//a[contains(@href, 'https://www.o2.co.uk/shop/mobile-broadband/?contractType=payasyougo')]"))
	public static WebElement MoveMouseOnPayGMBB;

	@FindBy(how = How.XPATH, using = ("//a[contains(@href, 'https://www.o2.co.uk/shop/mobile-broadband/?contractType=paymonthly')]"))
	public static WebElement MoveMouseOnPayMMBB;
	

}


