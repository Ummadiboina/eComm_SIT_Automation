package actionsPerformed;

import java.io.IOException;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import java.util.concurrent.TimeUnit;

import GlobalActions.Screenshots;
import helpers.Environment;

public class TabletPageActions extends Environment {

	final static Logger log = Logger.getLogger("TabletPageActions");

	public static void validateElements(String Tabname) throws IOException, InterruptedException {
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

	public static void ElementClickAction(String elementname) throws IOException, InterruptedException {
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

		if (elementName.contains("Random Device")) {

			JavascriptExecutor js = ((JavascriptExecutor) driver);
			js.executeScript("arguments[0].scrollIntoView(true);",driver.findElement(By.xpath("(//a[contains(., 'View all products on one page')])[2]")));

			if(driver.findElements(By.xpath("(//a[contains(., 'View all products on one page')])[2]")).size() > 0) {
				driver.findElement(By.xpath("(//a[contains(., 'View all products on one page')])[2]")).click();
				log.debug(" Clicked on View all products on one page(2) ");
			}
			driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
			log.debug("Random Tablet is selected");

			pageobjects.TabletPage.RandomTablet.click();
			Thread.sleep(7000);

			log.debug("Random Tablet is selected");
		}

		if (elementName.contains("SamsungGalaxy10")) {
			log.debug("SamsungGalaxy10 is selected");

			pageobjects.TabletPage.SamsungGalaxy10.click();
			Thread.sleep(7000);

			log.debug("SamsungGalaxy10 is selected");
		}
		if (elementName.contains("Apple iPad 9.7")) {
			pageobjects.TabletPage.iPad97.click();
			Thread.sleep(10000);
			log.debug("iPad is selected");
		}

		if (elementName.contains("Apple iPad Pro 10.5 inch")) {

			pageobjects.TabletPage.AppleiPadPro105inch.click();
			Thread.sleep(7000);
			log.debug("Apple iPad Pro 10.5 inch is selected");
		}

		if (elementName.contains("AppleiPad 9.7")) {

			pageobjects.TabletPage.AppleiPad97.click();
			Thread.sleep(7000);
			log.debug("AppleiPad 9.7 is selected");
		}
		if (elementName.contains("Apple iPad Pro 12.9 inch")) {
			pageobjects.TabletPage.iPadPro129.click();
			Thread.sleep(10000);
			log.debug("iPad is selected");
		}
		if (elementName.contains("Apple iPad Pro 9.7 inch")) {
			pageobjects.TabletPage.AppleiPadPro97inch.click();
			Thread.sleep(10000);
			log.debug("Apple iPad Pro 9.7 inch is selected");
		}

		if (elementName.contains("Samsung Galaxy Tab A 2016 10.1")) {
			pageobjects.TabletPage.SamsungGalaxyTabA201610point1.click();
			Thread.sleep(10000);
			log.debug("Samsung Galaxy Tab A 2016 10.1 is selected");
		}
		Screenshots.captureScreenshot();
	}

}
