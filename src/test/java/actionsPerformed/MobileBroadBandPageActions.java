package actionsPerformed;

import java.io.IOException;

import org.apache.log4j.Logger;

import GlobalActions.Screenshots;
import helpers.Environment;

public class MobileBroadBandPageActions extends Environment {

	final static Logger log = Logger.getLogger("MobileBroadBandPageActions");

	public static void DeviceSelect(String elementName) throws IOException, InterruptedException {

		if (elementName.contains("Random Device")) {
			log.debug("Random Device Selected");

			pageobjects.MobileBroadBandPage.RandomPayGDeviceSelect.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Random Device Selected");
		}

		if (elementName.contains("Huawei 4G in Car Wifi")) {
			log.debug("Huawei 4G in Car Wifi Device Selected");

			pageobjects.MobileBroadBandPage.Huawei4GinCarWifi.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Huawei 4G in Car Wifi Device Selected");
		}

		if (elementName.contains("Huawei 4G Dongle")) {
			log.debug("Huawei 4G Dongle Device Selected");

			pageobjects.MobileBroadBandPage.Huawei4GDongle.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Huawei 4G Dongle Device Selected");
		}

		if (elementName.contains("Huawei 4g Pocket Hotspot Plus")) {
			log.debug("Huawei 4g Pocket Hotspot Plus Device Selected");

			pageobjects.MobileBroadBandPage.Huawei4gPocketHotspotPlus.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Huawei 4g Pocket Hotspot Plus Device Selected");

		}

		if (elementName.contains("Huawei 4g Pocket Hotspot")) {
			log.debug("Huawei 4g Pocket Hotspot Device Selected");

			pageobjects.MobileBroadBandPage.Huawei4gPocketHotspot.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Huawei 4g Pocket Hotspot Device Selected");

		}

		if (elementName.contains("Huawei 4G Dongle With Wifi")) {
			log.debug("Huawei 4G Dongle With Wifi Device Selected");

			pageobjects.MobileBroadBandPage.Huawei4GDongleWithWifi.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Huawei 4G Dongle With Wifi Device Selected");

		}
		Screenshots.captureScreenshot();

	}

}
