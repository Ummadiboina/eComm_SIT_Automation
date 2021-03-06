package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AccessoryPage {
	
	  
		@FindBy(how=How.XPATH,using="//h2[contains(text(),'Filter')]")
		public static WebElement AccessoryFilterTab;
		
		@FindBy(how=How.XPATH,using="//h2[contains(text(),'Sort')]")
		public static WebElement AccessorySortTab;
		
		@FindBy(how=How.XPATH,using="//a[contains(@data-qa-device-model-family, 'AirPods')]")
		public static WebElement AppleAirpods;
		
		@FindBy(how=How.XPATH,using="//a[contains(@data-qa-device-model-family, 'Onyx Studio 3 Bluetooth Speaker')]")
		public static WebElement HarmanKardonOnxyxStudio3;
		
		@FindBy(how=How.XPATH,using="//a[contains(@data-qa-device-model-family, 'Pencil for iPad Pro')]")
		public static WebElement PencilforiPadPro;
		
		@FindBy(how=How.XPATH,using="//a[contains(@data-qa-device-model-family, 'Clip 2')]")
		public static WebElement Clip2;
		
		
		@FindBy(how=How.XPATH,using="//a[contains(@data-qa-device-model-family, 'Xtreme')]")
		public static WebElement JBLXtreme;
		
		@FindBy(how=How.XPATH,using="//*[@data-qa-subtypegroup='accessories'][1]")
		public static WebElement RandomAccessory;
		
		//Below is for clicking on the Basket icon in Accessories page
		
		@FindBy(how=How.ID,using="basketIcon")
		public static WebElement Basket;
		
		
		
}
