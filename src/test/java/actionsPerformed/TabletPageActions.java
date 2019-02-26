package actionsPerformed;

import java.io.IOException;

import GlobalActions.scrollToAnElement;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import java.util.concurrent.TimeUnit;

import GlobalActions.Screenshots;
import helpers.Environment;

public class TabletPageActions extends Environment {

	final static Logger log = Logger.getLogger("TabletPageActions");

	public static void validateElements(String Tabname) throws IOException {
		log.debug(" ");

		log.debug("Tablet_Page_Validation");

		if (Tabname != null) {
			switch (Tabname.toLowerCase()) {
				case "filter":
					if (pageobjects.TabletPage.TabletFilterTab.isDisplayed()) {
						log.debug("The Filter Tab is Present on the TabletPage and the Text is :"
								+ pageobjects.TabletPage.TabletFilterTab.getText());
					} else {
						log.debug("The  Filter Tab is not Present on the TabletPage and the Text is :"
								+ pageobjects.TabletPage.TabletFilterTab.getText());
					}
					break;
				case "sort":
					if (pageobjects.TabletPage.TabletSortTab.isDisplayed()) {
						log.debug("The  Sort Tab is Present on the TabletPage and the Text is :"
								+ pageobjects.TabletPage.TabletSortTab.getText());
					} else {
						log.debug("The   Sort Tab is not Present on the TabletPage and the Text is :"
								+ pageobjects.TabletPage.TabletSortTab.getText());
					}
					break;

			}

		}
		Screenshots.captureScreenshot();

	}

	public static void ElementClickAction(String elementname) throws IOException {
		// TODO Auto-generated method stub
		WebElement w1 = null;
		log.debug(" ");

		log.debug("Tablet_Page_Action");

		if (elementname != null) {
			switch (elementname.toLowerCase()) {
				case "filter":
					w1 = pageobjects.TabletPage.TabletFilterTab;
					break;
				case "sort":
					w1 = pageobjects.TabletPage.TabletSortTab;
					break;

			}

		}
		Screenshots.captureScreenshot();
	}

	public static void DeviceSelect(String elementName) throws InterruptedException, IOException {
		Thread.sleep(7000);

		if (elementName.contains("Random Device")) {

			JavascriptExecutor js = ((JavascriptExecutor) driver);
			js.executeScript("arguments[0].scrollIntoView(true);",driver.findElement(By.xpath("(//a[contains(., 'View all products on one page')])[2]")));
			Thread.sleep(3000);
			if(driver.findElements(By.xpath("(//a[contains(., 'View all products on one page')])[2]")).size() > 0) {
				Thread.sleep(2000);
				WebElement ele = driver.findElement(By.xpath("(//a[contains(., 'View all products on one page')])[2]"));
				((JavascriptExecutor)driver).executeScript("arguments[0].click();", ele);
				Thread.sleep(8000);
				//driver.findElement(By.xpath("(//a[contains(., 'View all products on one page')])[2]")).click();
				log.debug(" Clicked on View all products on one page(2) ");
			}
			//driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);

			Thread.sleep(5000);
			scrollToAnElement.scrollToElement(pageobjects.TabletPage.RandomTablet);
			Screenshots.captureScreenshot();
			Thread.sleep(5000);
			//pageobjects.TabletPage.RandomTablet.click();
			((JavascriptExecutor)driver).executeScript("arguments[0].click();", pageobjects.TabletPage.RandomTablet);
			Thread.sleep(5000);

			log.debug("Random Tablet is selected");
		}else{

				Thread.sleep(6000);
				JavascriptExecutor jse = (JavascriptExecutor) driver;
				jse.executeScript("window.scrollBy(0,300)", "");
				Screenshots.captureScreenshot();
				Thread.sleep(3000);
				try {
					//WebElement serchBox = driver.findElement(By.xpath("//input[@ng-model='textSearch.searchText']"));
					WebElement serchBox = driver.findElement(By.xpath("//input[@id='listing-search']"));
					serchBox.sendKeys(elementName);
					Thread.sleep(10000);

					/*WebElement requestedDevice = driver.findElement(By.xpath("(//img[@class='device-image lazy']/..//*[contains(text(),'"+elementName+"')])[1]"));
					if(requestedDevice.isDisplayed()) {
						//scrollToAnElement.scrollToElement(requestedDevice);
						Screenshots.captureScreenshot();
					}*/
					if (driver.findElements(By.xpath("(//img[@class='device-image lazyPD']/..//*[contains(text(),'"+elementName+"')])[1]")).size() >= 1) {
						WebElement requestedDevice = driver.findElement(By.xpath("(//img[@class='device-image lazyPD']/..//*[contains(text(),'"+elementName+"')])[1]"));
						Thread.sleep(3000);
						((JavascriptExecutor) driver).executeScript("arguments[0].click();", requestedDevice);
						log.debug("Selected Device from Phones as Required is : " + elementName);

						Thread.sleep(3000);
					} else {
						Thread.sleep(3000);
						WebElement element = driver.findElement(By.xpath("(//img[@class='device-image lazyPD'])[1]"));
						((JavascriptExecutor) driver).executeScript("arguments[0].click();", element);
						String defaultSelDevice = driver.findElement(By.xpath("((//img[@class='device-image lazyPD'])[1]/..//span[@class='ng-binding'])[2]")).getText();
						log.debug(" As Required Device is not Availabe, We have picked default device from availabe  :: " + defaultSelDevice);

						Thread.sleep(3000);

						Screenshots.captureScreenshot();
					}
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}

			/*if (elementName.contains("SamsungGalaxy10")) {
			log.debug("SamsungGalaxy10 is selected");

			pageobjects.TabletPage.SamsungGalaxy10.click();
			Thread.sleep(7000);

			log.debug("SamsungGalaxy10 is selected");
		}else if (elementName.contains("Apple iPad 9.7")) {
			pageobjects.TabletPage.iPad97.click();
			Thread.sleep(10000);
			log.debug("iPad is selected");
		}else if (elementName.contains("Apple iPad Pro 10.5 inch")) {

			pageobjects.TabletPage.AppleiPadPro105inch.click();
			Thread.sleep(7000);
			log.debug("Apple iPad Pro 10.5 inch is selected");
		}else if (elementName.contains("AppleiPad 9.7")) {

			pageobjects.TabletPage.AppleiPad97.click();
			Thread.sleep(7000);
			log.debug("AppleiPad 9.7 is selected");
		}else if (elementName.contains("Apple iPad Pro 12.9 inch")) {
			pageobjects.TabletPage.iPadPro129.click();
			Thread.sleep(10000);
			log.debug("iPad is selected");
		}else if (elementName.contains("Apple iPad Pro 9.7 inch")) {
			pageobjects.TabletPage.AppleiPadPro97inch.click();
			Thread.sleep(10000);
			log.debug("Apple iPad Pro 9.7 inch is selected");
		}else if (elementName.contains("Samsung Galaxy Tab A 2016 10.1")) {
			Thread.sleep(3000);
			if (driver.findElements(By.xpath("//a[contains(@href, '/shop/tablets/apple/ipad-pro-12.9-inch/#contractType=paymonthly')]")).size() > 0) {

				JavascriptExecutor executor = (JavascriptExecutor) driver;
				executor.executeScript("arguments[0].click();", pageobjects.TabletPage.SamsungGalaxyTabA201610point1);
				log.debug("Samsung Galaxy Tab A 2016 10.1 is selected");
				//pageobjects.TabletPage.SamsungGalaxyTabA201610point1.click();
			} else {
				*//*pageobjects.TabletPage.RandomTablet.click();
				Thread.sleep(7000);*//*
				//}


			}	Thread.sleep(10000);
		}*/
		Screenshots.captureScreenshot();
	}

}
