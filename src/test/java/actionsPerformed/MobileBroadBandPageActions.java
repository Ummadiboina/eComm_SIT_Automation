package actionsPerformed;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;

import GlobalActions.Screenshots;
import helpers.Environment;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

public class MobileBroadBandPageActions extends Environment {

	final static Logger log = Logger.getLogger("MobileBroadBandPageActions");

	public static void DeviceSelect(String elementName) throws IOException, InterruptedException {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		//Thread.sleep(12000);

		if (elementName.contains("Random Device")) {
			log.debug("Random Device Selected");
			Thread.sleep(5000);
			JavascriptExecutor executor = (JavascriptExecutor) driver;
			Thread.sleep(3000);
			executor.executeScript("arguments[0].click();", pageobjects.MobileBroadBandPage.RandomPayGDeviceSelect);
			//pageobjects.MobileBroadBandPage.RandomPayGDeviceSelect.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Random Device Selected");
		}else if (elementName.contains("Huawei 4G in Car Wifi")) {
			log.debug("Huawei 4G in Car Wifi Device Selected");

			pageobjects.MobileBroadBandPage.Huawei4GinCarWifi.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Huawei 4G in Car Wifi Device Selected");
		}else if (elementName.contains("Huawei 4G Dongle")) {

			log.debug("Huawei 4G Dongle Device Selected");
			WebElement element = pageobjects.MobileBroadBandPage.Huawei4GDongle;
			JavascriptExecutor executor = (JavascriptExecutor) driver;
			Thread.sleep(3000);
			executor.executeScript("arguments[0].click();", element);

			//pageobjects.MobileBroadBandPage.Huawei4GDongle.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Huawei 4G Dongle Device Selected");
		}else if (elementName.contains("Huawei 4g Pocket Hotspot Plus")) {
			log.debug("Huawei 4g Pocket Hotspot Plus Device Selected");

			pageobjects.MobileBroadBandPage.Huawei4gPocketHotspotPlus.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Huawei 4g Pocket Hotspot Plus Device Selected");

		}else if (elementName.contains("Huawei 4g Pocket Hotspot")) {
			log.debug("Huawei 4g Pocket Hotspot Device Selected");

			pageobjects.MobileBroadBandPage.Huawei4gPocketHotspot.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Huawei 4g Pocket Hotspot Device Selected");

		}else if (elementName.contains("Huawei 4G Dongle With Wifi")) {
			log.debug("Huawei 4G Dongle With Wifi Device Selected");

			pageobjects.MobileBroadBandPage.Huawei4GDongleWithWifi.click();
			// Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Huawei 4G Dongle With Wifi Device Selected");

		}else{
			pageobjects.MobileBroadBandPage.RandomPayGDeviceSelect.click();
		}
		Screenshots.captureScreenshot();

	}

}
