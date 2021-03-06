package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class PAYMandPAYGTariffAndExtrasPage {

	//Below is for finding the PAYM Tab which is opened by default
	@FindBy(how=How.XPATH,using=("//a[contains(@href, '#PayMonthlyTariffsTab')]"))
	public static WebElement PayMTab;
	
	//Below is for finding the PayG Tab which is opened by default
	@FindBy(how=How.XPATH,using=("//a[contains(@href, '#PayAsYouGoTariffsTab')]"))
	public static WebElement PayGTab;		
		
	//Below is for selecting promoted tariff
	@FindBy(how=How.XPATH,using=("//div[@class='tariff ng-scope promoted-tariff promoted-at-first']/div[7]"))
	public static WebElement SelectPromotedTariff;
	
	//Below is for Selecting Any Tariff
	@FindBy(how=How.XPATH,using=("(//*[@id='callToAction'])[2]"))
	public static WebElement RandomTariff1;
	
	//Below is for Selecting Any Tariff
	@FindBy(how=How.XPATH,using=("(//*[@id='callToAction'])[3]"))
	public static WebElement RandomTariff2;

	//Below is for Selecting Any Tariff
		@FindBy(how=How.XPATH,using=("(//*[@id='callToAction'])[7]"))
		public static WebElement RandomfullTariff1;
		
		
		//Below is for Selecting Any Tariff
		@FindBy(how=How.XPATH,using=("(//*[@id='callToAction'])[8]"))
		public static WebElement RandomfullTariff2;
		
//Below is to add an accessory in TandE page
		@FindBy(how=How.XPATH,using=("(//*[@id='accessoryTile_']/div[5]/input)[1]"))
		public static WebElement AddRandomAccessory;
		
		
		//Below is for Selecting Any Tariff
		@FindBy(id="link-pay-for-your-device")
		public static WebElement paydevicefulllink;
		
	//Below is for Clicking on the Add to basket option which is at the bottom of the tariff and extras page
	@FindBy(id="qa-proceed-to-basket")
	public static WebElement addToBasketLive;

	//Below is for Clicking on the Add to basket option which is at the top of the tariff and extras page
	@FindBy(id="qa-proceed-to-basket-dock-header")
	public static WebElement addToBasketDockHeader;
	
}
