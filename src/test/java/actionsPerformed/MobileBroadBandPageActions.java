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

	
	
}

