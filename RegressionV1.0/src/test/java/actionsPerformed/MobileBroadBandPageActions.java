package actionsPerformed;

import helpers.Environment;
import org.apache.log4j.Logger;

public class MobileBroadBandPageActions extends Environment{
	
	static Logger log = Logger.getLogger("devpinoyLogger");
	
	
	public static void DeviceSelect(String elementName) {
		
		if(elementName.contains("Random Device"))
		{
			System.out.println("Random Device Selected");

			pageobjects.MobileBroadBandPage.RandomPayGDeviceSelect.click();
			//Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Random Device Selected");
		}

		if(elementName.contains("Huawei 4G in Car Wifi"))
		{
			System.out.println("Huawei 4G in Car Wifi Device Selected");

			pageobjects.MobileBroadBandPage.Huawei4GinCarWifi.click();
			//Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Huawei 4G in Car Wifi Device Selected");
		}
		
		if(elementName.contains("Huawei 4G Dongle"))
		{
			System.out.println("Huawei 4G Dongle Device Selected");

			pageobjects.MobileBroadBandPage.Huawei4GDongle.click();
			//Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Huawei 4G Dongle Device Selected");
		}
		
		if(elementName.contains("Huawei 4g Pocket Hotspot Plus"))
		{
			System.out.println("Huawei 4g Pocket Hotspot Plus Device Selected");

			pageobjects.MobileBroadBandPage.Huawei4gPocketHotspotPlus.click();
			//Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Huawei 4g Pocket Hotspot Plus Device Selected");
			
		}
		
		if(elementName.contains("Huawei 4g Pocket Hotspot"))
		{
			System.out.println("Huawei 4g Pocket Hotspot Device Selected");

			pageobjects.MobileBroadBandPage.Huawei4gPocketHotspot.click();
			//Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Huawei 4g Pocket Hotspot Device Selected");
			
		}
		
		if(elementName.contains("Huawei 4G Dongle With Wifi"))
		{
			System.out.println("Huawei 4G Dongle With Wifi Device Selected");

			pageobjects.MobileBroadBandPage.Huawei4GDongleWithWifi.click();
			//Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Huawei 4G Dongle With Wifi Device Selected");
			
		}
		
		
		}

	
	
//this  method used to perform click action on the Accessory Page	
	
	public static void ElementClickAction(String elementname) {
		// TODO Auto-generated method stub
         System.out.println(" ");
		
		System.out.println("Accessory_Page_Action");
		log.debug("Accessory Page validation");
		
		if(elementname!=null)
		{
			switch (elementname.toLowerCase())
			{
			case "filter":
				pageobjects.AccessoryPage.AccessoryFilterTab.click();
				break;
			case "sort":
				pageobjects.AccessoryPage.AccessorySortTab.click();		
				break;	
			
			}
	
		}
	}
	
	
	
	//This Method is used to select Accessory from the accessory listing page 
	
	public static void SelectAnyAccessory() {
			
			System.out.println("Selecting Any Accessory");
			log.debug("Selecting Any Accessory");
			log.debug("Selected an accessory -  "+pageobjects.AccessoryPage.RandomAccessory.getText());
			pageobjects.AccessoryPage.RandomAccessory.click();

		}

	public static void selectAnyAccessoryLimit() throws InterruptedException {
		// TODO Auto-generated method stub
		
		try
		{
			System.out.println("Adding Accesories to basket");
			log.debug("Adding Accesories to basket");
			//log.debug("The text of the button is  - "+pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.getText());
				for(int i=0; i<2; i++)
						{
						pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.click();
				//		System.out.println("Value of i is "+i );
						}
						
		}
		catch(org.openqa.selenium.StaleElementReferenceException ex)
		{
		    log.debug("Exception in finding value");
			System.out.println("Adding Accesories to basket");
			log.debug("Adding Accesories to basket");
			//log.debug("The text of the button is  - "+pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.getText());
				for(int i=0; i<2; i++)
						{
						pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.click();
						Thread.sleep(2000);
						}
						}
		    
		}
	
}

