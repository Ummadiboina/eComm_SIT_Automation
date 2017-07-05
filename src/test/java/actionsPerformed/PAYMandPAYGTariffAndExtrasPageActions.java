package actionsPerformed;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;

import helpers.*;

public class PAYMandPAYGTariffAndExtrasPageActions extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");

	public static void GetPageName() {

		System.out.println("Tariff and Extras page");
		log.debug("Tariff and Extras page Validations");
		log.debug("The Page title is" + driver.getTitle());
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

	}

	public static void TariffSelect(String ElementName) {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

		if (ElementName.contains("Randomtariff")) {
			pageobjects.PAYMandPAYGTariffAndExtrasPage.RandomTariff1.sendKeys(Keys.ENTER);
			log.debug("Selected a Random Tariff");
		}

		if (ElementName.contains("SelectPromotedTariff")) {
			pageobjects.PAYMandPAYGTariffAndExtrasPage.SelectPromotedTariff.sendKeys(Keys.ENTER);
			log.debug("Selected a Promoted Tariff");
		}
		if (ElementName.contains("fullpaymenttariff1")) {

			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,350)", "");
			pageobjects.PAYMandPAYGTariffAndExtrasPage.paydevicefulllink.click();
			log.debug("Expanded the Full payment Tariff Section");

			pageobjects.PAYMandPAYGTariffAndExtrasPage.RandomfullTariff1.sendKeys(Keys.ENTER);
			log.debug("Selected a full payment Tariff");
		}
	}

	public static void addAccessory() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		log.debug("The Accessory which will be added is  - "
				+ pageobjects.PAYMandPAYGTariffAndExtrasPage.AddRandomAccessory.getText());
		pageobjects.PAYMandPAYGTariffAndExtrasPage.AddRandomAccessory.sendKeys(Keys.ENTER);
		Thread.sleep(2000);
		log.debug("Added a random accessory to basket");

	}

	public static void addToBasketLive() {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		pageobjects.PAYMandPAYGTariffAndExtrasPage.addToBasketLive.sendKeys(Keys.ENTER);
		log.debug("Clicked on Add to Basket in Tariff and Extras page");

	}

	public static void addToBasketDockHeader() {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		pageobjects.PAYMandPAYGTariffAndExtrasPage.addToBasketDockHeader.sendKeys(Keys.ENTER);
		log.debug("Clicked on Add to Basket in Tariff and Extras page");

	}

	public static void addMoreAccessory() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		System.out.println("addMoreAccessory() method");
		log.debug("The Accessory which will be added is  - "
				+ pageobjects.PAYMandPAYGTariffAndExtrasPage.AddRandomAccessory.getText());
		try {
			
			WebElement ele0 = pageobjects.PAYMandPAYGTariffAndExtrasPage.AccessoryContainer;
					

			System.out.println("The element is "+ele0.getText());
			if (ele0 != null) 
			{
				System.out.println("selecting accessories");
				

				List<WebElement> DataContainer = pageobjects.PAYMandPAYGTariffAndExtrasPage.Add_AccessoryContainer;

				//for (int i = 0; i <= DataContainer.size(); i++) 
			for (int i = 0; i <= 6; i++)
			{
				
				System.out.println(DataContainer.get(i).getText());
				DataContainer.get(i).click();
				Thread.sleep(3000);
				System.out.println("Selected accessories");
				
			}
			
			}
		}
		catch (Exception e) {
			System.out.println("No accessories found");
			Assert.fail("No accessories found");

		}		
		
		Thread.sleep(2000);
		log.debug("Added a random accessory to basket");

	}

}
