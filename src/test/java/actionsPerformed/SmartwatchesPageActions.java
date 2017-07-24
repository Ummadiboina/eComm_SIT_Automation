package actionsPerformed;

import static org.testng.Assert.fail;

import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import helpers.Environment;

public class SmartwatchesPageActions extends Environment {
	public static void Elementdisplayvalidation(String Tabname) {
		System.out.println(" ");

		System.out.println("Smartwatches_Page_Validation");

		if (Tabname != null) {
			switch (Tabname.toLowerCase()) {
			case "filter":
				if (pageobjects.SmartwatchesPage.SmartwatchesFilterTab.isDisplayed()) {
					System.out.println("The Filter Tab is Present on the FitnessPage and the Text is :"
							+ pageobjects.SmartwatchesPage.SmartwatchesFilterTab.getText());
				} else {
					System.out.println("The  Filter Tab is not Present on the FitnessPage and the Text is :"
							+ pageobjects.SmartwatchesPage.SmartwatchesFilterTab.getText());
				}
				break;
			case "sort":
				if (pageobjects.SmartwatchesPage.SmartwatchesSortTab.isDisplayed()) {
					System.out.println("The Sort Tab is Present on the FitnessPage and the Text is :"
							+ pageobjects.SmartwatchesPage.SmartwatchesSortTab.getText());
				} else {
					System.out.println("The  Sort  Tab is not Present on the FitnessPage and the Text is :"
							+ pageobjects.SmartwatchesPage.SmartwatchesSortTab.getText());
				}
				break;

			}

		}

	}

	public static void ElementClickAction(String elementname) {
		// TODO Auto-generated method stub
		System.out.println(" ");

		System.out.println("Smartwatches_Page_Action");

		if (elementname != null) {
			switch (elementname.toLowerCase()) {
			case "filter":
				pageobjects.SmartwatchesPage.SmartwatchesFilterTab.click();
				break;
			case "sort":
				pageobjects.SmartwatchesPage.SmartwatchesSortTab.click();
				break;

			}

		}
	}

	public static void DeviceSelect(String elementName) throws InterruptedException {
		try {

			if (elementName.contains("Random Device")) {
				System.out.println("Going to select Random Device");

				pageobjects.SmartwatchesPage.RandomSmartWatch.click();
				Thread.sleep(15000);

				System.out.println("Clicked Random Device");

			}

			// The following has to be added in deviceSelect function –
			else if (elementName.contains("Samsung Gear S2")) {
				pageobjects.SmartwatchesPage.SamsungGearS2.click();
				Thread.sleep(15000);
				System.out.println("Selected SamsungGearS2");
				log.debug("Selected SamsungGearS2");
			}
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Unable to select "+elementName+" device");
		//	Assert.fail("Unable to select "+elementName+" device");

		}
	}

	/**
	 * @throws InterruptedException
	 */
	public static void AddtoBasketSmartwatchTracker() throws InterruptedException {

		try {
			// Below will give status like in stock / out of stock etc
			Thread.sleep(5000);

			String status = driver.findElement(By.className("status-info")).getText();
			System.out.println(status);

			if (status.contains("In Stock")) {
				WebElement element = driver
						.findElement(By.xpath("//select[@class='accessory-option ng-pristine ng-valid']"));
				JavascriptExecutor js = (JavascriptExecutor) driver;
				js.executeScript("arguments[0].setAttribute('style', 'display:block;')", element);
				new Select(element).selectByValue("4");

				WebElement DeviceDetailsQuantity = driver.findElement(
						By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
				String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
				System.out.println("DeviceDetailsQuantityValue is " + DeviceDetailsQuantityValue);

				driver.findElement(By.id("deviceDetailsSubmit")).click();

				Thread.sleep(3000);

				/*
				 * WebElement BasketQuantity =
				 * driver.findElement(By.id("accessory-quantitySelectBoxIt"));
				 * String BasketQuantityvalue = BasketQuantity.getText();
				 * System.out.println("Basket value is "+BasketQuantityvalue);
				 * Assert.assertEquals("4", BasketQuantityvalue);
				 * System.out.println( "Values are correct , Basket quantity = "
				 * + BasketQuantityvalue + "Device added value = 4");
				 */
			} else {
				driver.navigate().back();
			}

		} catch (Exception e) {
			WebElement DeviceDetailsQuantity = driver.findElement(
					By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
			String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
			System.out.println(DeviceDetailsQuantityValue);
			Assert.assertEquals("4", DeviceDetailsQuantityValue);

			driver.findElement(By.id("deviceDetailsSubmit")).click();

			Thread.sleep(3000);
			WebElement BasketQuantity = driver.findElement(By.id("accessory-quantitySelectBoxIt"));
			String BasketQuantityvalue = BasketQuantity.getText();
			// Assert.assertEquals(DeviceDetailsQuantityValue,
			// BasketQuantityvalue);
			Assert.assertEquals("4", BasketQuantityvalue);

		}

	}

}