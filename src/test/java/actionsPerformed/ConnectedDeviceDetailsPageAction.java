package actionsPerformed;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import helpers.Environment;

//This page will have details on the individual device

public class ConnectedDeviceDetailsPageAction extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");

	public static void GetTitle() throws InterruptedException {
		System.out.println("Currently in Device details page");
		String Ele1 = driver.getTitle();
		System.out.println("The Page title is " + Ele1);
		log.debug("Currently in Device details page");
		log.debug("The Page title is " + Ele1);
		Thread.sleep(5000);
	}

	public static void colorSelect(String color) {
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		if (color.contains("pink")) {
			executor.executeScript("arguments[0].click();", pageobjects.ConnectedDeviceDetailsPage.Pink);
		}

		if (color.contains("goldplatinum")) {
			executor.executeScript("arguments[0].click();", pageobjects.ConnectedDeviceDetailsPage.GoldPlatinum);
		}

		if (color.contains("blackobyx")) {
			executor.executeScript("arguments[0].click();", pageobjects.ConnectedDeviceDetailsPage.BlackOnyx);
		}
		if (color.contains("black")) {
			executor.executeScript("arguments[0].click();", pageobjects.ConnectedDeviceDetailsPage.Black);
		}
	}

	public static void ViewAllTariffs() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,600)", "");

		// pageobjects.ConnectedDeviceDetailsPage.ViewOurTariffs.click();

		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", pageobjects.ConnectedDeviceDetailsPage.ViewOurTariffs);

		Thread.sleep(5000);
		// driver.findElement(By.id("deviceDetailsSubmit")).click();
		log.debug("Clicked on ViewOurTariffs");

	}

	public static void clickAnywhere() {
		// TODO Auto-generated method stub
		pageobjects.ConnectedDeviceDetailsPage.clickanywhere.click();
	}

	public static void colorSelectOfDevice(String color) {
		// TODO Auto-generated method stub
		JavascriptExecutor executor = (JavascriptExecutor) driver;

		if (color.contains("pink")) {
			executor.executeScript("arguments[0].click();", pageobjects.ConnectedDeviceDetailsPage.Pink);
		}

		if (color.contains("goldplatinum")) {
			executor.executeScript("arguments[0].click();", pageobjects.ConnectedDeviceDetailsPage.GoldPlatinum);
		}

		if (color.contains("blackobyx")) {
			executor.executeScript("arguments[0].click();", pageobjects.ConnectedDeviceDetailsPage.BlackOnyx);
		}
		if (color.contains("black")) {
			executor.executeScript("arguments[0].click();", pageobjects.ConnectedDeviceDetailsPage.Black);
		}
		System.out.println("Selecting" + color);
	}

	public static void checkDevStatusAsDelayedDelivery() {
		// TODO Auto-generated method stub
		if (pageobjects.ConnectedDeviceDetailsPage.DevStatusMsg.getText().contains("Home delivery")) {
			System.out.println("Device is Delayed Delivery Device");
			log.debug("Device is Delayed Delivery Device");
		} else {
			System.out.println("Device is not Delayed Delivery Device");
			Assert.fail("Device is not Delayed Delivery Device");
		}
	}

	public static void checkDevStatusAsInStock() {
		// TODO Auto-generated method stub
		if (pageobjects.ConnectedDeviceDetailsPage.DevStatusMsg.getText().contains("In Stock")) {
			System.out.println("Device is in stock");
			log.debug("Device is in stock");
		} else {
			System.out.println("Device is not in stock");
			// Assert.fail("Device is not in stock");
		}
	}

	public static void checkDevStatusAsPreOrder() {
		// TODO Auto-generated method stub
		// Have to change the below text
		System.out.println("checkDevStatusAsPreOrder");
		System.out.println("Stock status is " + pageobjects.ConnectedDeviceDetailsPage.DevStatusMsg.getText());
		if (pageobjects.ConnectedDeviceDetailsPage.DevStatusMsg.getText().contains("Pre")) {
			System.out.println("Device is Pre Order Device");
			log.debug("Device is Pre Order Device");
		} else {
			System.out.println("Device is not Pre Order Device");
			Assert.fail("Device is not Pre Order Device");
		}
	}

	public static void checkIfMoreThanOneOptionAvailable() throws Exception {
		// TODO Auto-generated method stub
		Thread.sleep(5000);
		WebElement capacity = pageobjects.ConnectedDeviceDetailsPage.CapacityDropDown;
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", capacity);
		if (capacity.isDisplayed()) {
			List<WebElement> elementCount = new Select(capacity).getOptions();

			if (elementCount.size() <= 1) {
				Assert.fail("There are no more than 1 option available for capacity dropdown");
			}
		}
		WebElement color = pageobjects.ConnectedDeviceDetailsPage.ColorDropDown;

		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", color);
		if (color.isDisplayed()) {
			List<WebElement> elementCount = new Select(color).getOptions();

			if (elementCount.size() <= 1) {
				Assert.fail("There are no more than 1 option available for color dropdown");
			}
		}
	}

	/*
	 * public static void checkOnlyOneOptionAvailable() throws Exception { //
	 * TODO Auto-generated method stub Thread.sleep(5000); WebElement capacity =
	 * pageobjects.ConnectedDeviceDetailsPage.CapacityDropDown;
	 * JavascriptExecutor js = (JavascriptExecutor) driver;
	 * js.executeScript("arguments[0].setAttribute('style', 'display:block;')",
	 * capacity);
	 * 
	 * WebElement color = pageobjects.ConnectedDeviceDetailsPage.ColorDropDown;
	 * 
	 * js.executeScript("arguments[0].setAttribute('style', 'display:block;')",
	 * color);
	 * 
	 * if (capacity.isDisplayed()) {
	 * 
	 * Assert.fail("Capacity has more than 1 dropdown"); }
	 * 
	 * if (color.isDisplayed()) {
	 * Assert.fail("There are more than 1 option available for color dropdown");
	 * 
	 * }
	 * 
	 * 
	 * List<org.openqa.selenium.WebElement> capacityLabel =
	 * pageobjects.ConnectedDeviceDetailsPage.CapacityLabel; if
	 * (capacityLabel.size() > 1) {
	 * Assert.fail("There are more than 1 capacity variant displayed as a label"
	 * ); }
	 * 
	 * List<org.openqa.selenium.WebElement> colorLabel =
	 * pageobjects.ConnectedDeviceDetailsPage.ColorLabel; if (colorLabel.size()
	 * > 1) {
	 * Assert.fail("There are more than 1 capacity variant displayed as a label"
	 * ); }
	 * 
	 * 
	 * 
	 * }
	 */

	public static void checkOnlyOneOptionAvailable() throws Exception {
		Thread.sleep(2000);
		List<WebElement> CapacityDropDown = driver.findElements(By.xpath("//select[@id='memory']"));
		List<WebElement> ColorDropDown = driver.findElements(By.xpath("//select[@id='colour']"));

		if (CapacityDropDown.size() > 0) {
			Assert.fail("Capacity dropdown is present even when there is only single variant");
		}

		if (ColorDropDown.size() > 0) {
			Assert.fail("Colour dropdown is present even when there is only single variant");
		}

		List<org.openqa.selenium.WebElement> capacityLabel = pageobjects.ConnectedDeviceDetailsPage.CapacityLabel;
		if (capacityLabel.size() > 1) {
			Assert.fail("There are more than 1 capacity variant displayed as a label");
		}

		List<org.openqa.selenium.WebElement> colorLabel = pageobjects.ConnectedDeviceDetailsPage.ColorLabel;
		if (colorLabel.size() > 1) {
			Assert.fail("There are more than 1 capacity variant displayed as a label");
		}

	}

	public static void checkOnlyOneCapacityAvailable() throws Exception {
		// TODO Auto-generated method stub
		Thread.sleep(5000);
		List<org.openqa.selenium.WebElement> capacityLabel = pageobjects.ConnectedDeviceDetailsPage.CapacityLabel;
		if (capacityLabel.size() > 1) {
			Assert.fail("There are more than 1 capacity variant displayed as a label");
		}

		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement color = pageobjects.ConnectedDeviceDetailsPage.ColorDropDown;
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", color);

		if (color.isDisplayed()) {
			List<WebElement> elementCount = new Select(color).getOptions();

			if (elementCount.size() <= 1) {
				Assert.fail("There are no more than 1 option available for color dropdown");
			}
		}
	}

	public static void checkOnlyOneColourAvailable() throws Exception {
		// TODO Auto-generated method stub
		Thread.sleep(5000);
		WebElement capacity = pageobjects.ConnectedDeviceDetailsPage.CapacityDropDown;
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", capacity);
		if (capacity.isDisplayed()) {
			List<WebElement> elementCount = new Select(capacity).getOptions();

			if (elementCount.size() >= 1) {
				Assert.fail("There are more than 1 option available for capacity dropdown");
			}
		}
		WebElement color = pageobjects.ConnectedDeviceDetailsPage.ColorDropDown;

		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", color);

		if (color.isDisplayed()) {
			List<WebElement> elementCount = new Select(color).getOptions();

			if (elementCount.size() >= 1) {
				Assert.fail("There are more than 1 option available for color dropdown");
			}
		}
	}

	public static void colorSelectOfDeviceDropDown(String color) throws Exception {
		// TODO Auto-generated method stub
		Thread.sleep(5000);

		WebElement element = pageobjects.ConnectedDeviceDetailsPage.ColorDropDown;
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", element);
		if (element.isDisplayed()) {
			new Select(element).selectByVisibleText(color);
			System.out.println("Selected" + color);
		}

	}

	public static void capacitySelectOfDeviceDropDown(String capacity) throws Exception {
		// TODO Auto-generated method stub
		Thread.sleep(5000);

		WebElement element = pageobjects.ConnectedDeviceDetailsPage.CapacityDropDown;
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", element);
		if (element.isDisplayed()) {
			new Select(element).selectByVisibleText(capacity);
			System.out.println("Selected" + capacity);
		}
	}

}
