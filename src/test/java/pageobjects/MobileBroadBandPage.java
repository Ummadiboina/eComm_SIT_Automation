package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class MobileBroadBandPage {
	
	  
		@FindBy(how=How.XPATH,using="//a[contains(@href, '/shop/mobile-broadband/huawei/4g-in-car-wifi/#contractType=payasyougo')]")
		public static WebElement Huawei4GinCarWifi;
		////a[@data-qa-device-model-family="4G In-Car wifi"]		

	////a[contains(@href, '/shop/mobile-broadband/huawei/4g-dongle')] | //span[normalize-space()='4G Dongle']

		@FindBy(how=How.XPATH,using="//span[normalize-space()='4G Dongle']")
		public static WebElement Huawei4GDongle;
		
		@FindBy(how=How.XPATH,using="//a[contains(@href, '/shop/mobile-broadband/huawei/4g-pocket-hotspot-plus/#contractType=payasyougo')]")
		public static WebElement Huawei4gPocketHotspotPlus;
		
		@FindBy(how=How.XPATH,using="//a[contains(@href, '/shop/mobile-broadband/huawei/4g-pocket-hotspot/#contractType=payasyougo')]")
		public static WebElement Huawei4gPocketHotspot;
		
		@FindBy(how=How.XPATH,using="//a[contains(@href, '/shop/mobile-broadband/huawei/4g-dongle-with-wifi/#contractType=payasyougo')]")
		public static WebElement Huawei4GDongleWithWifi;
		
		@FindBy(how=How.XPATH,using="(//img[@class='device-image'])[3] | (//img[@class='device-image lazyload'])[3] | (//img[@class='device-image lazyPD'])[3]")
		public static WebElement RandomPayGDeviceSelect;

		@FindBy(how=How.XPATH,using="//h2[contains(text(),'Sort')]")
		public static WebElement AccessorySortTab;
		
		@FindBy(how=How.XPATH,using="//a[contains(@data-qa-device-model-family, 'AirPods')]")
		public static WebElement AppleAirpods;
		
		@FindBy(how=How.XPATH,using="//a[contains(@data-qa-device-model-family, 'Onyx Studio 3 Bluetooth Speaker')]")
		public static WebElement HarmanKardonOnyxStudio3;
		
		@FindBy(how=How.XPATH,using="//a[contains(@data-qa-device-model-family, 'Pencil for iPad Pro')]")
		public static WebElement PencilforiPadPro;
		
		@FindBy(how=How.XPATH,using="//a[contains(@data-qa-device-model-family, 'Clip 2')]")
		public static WebElement Clip2;
		
		
		@FindBy(how=How.XPATH,using="//a[contains(@data-qa-device-model-family, 'Xtreme')]")
		public static WebElement JBLXtreme;
		
		@FindBy(how=How.XPATH,using="//*[@id='o2-page-wrapper']/div[2]/div[3]/div[1]/div[1]/div/div/div/div/a")
		public static WebElement RandomAccessory;
		
		//Below is for clicking on the Basket icon in Accessories page
		
		@FindBy(how=How.ID,using="basketIcon")
		public static WebElement Basket;
		
		
		
}
