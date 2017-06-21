package actionsPerformed;

import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;

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
		pageobjects.ConnectedDeviceDetailsPage.ViewOurTariffs.click();
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
		System.out.println("Selecting" +color);
	}

	public static void checkDevStatusAsDelayedDelivery() {
		// TODO Auto-generated method stub
		if(pageobjects.ConnectedDeviceDetailsPage.DevStatusMsg.getText().contains("Home delivery"))
		{
			System.out.println("Device is Delayed Delivery Device");
			log.debug("Device is Delayed Delivery Device");
		}
		else
		{
			System.out.println("Device is not Delayed Delivery Device");
			Assert.fail("Device is not Delayed Delivery Device");
		}
	}
	
	public static void checkDevStatusAsInStock() {
		// TODO Auto-generated method stub
		if(pageobjects.ConnectedDeviceDetailsPage.DevStatusMsg.getText().contains("In Stock"))
		{
			System.out.println("Device is in stock");
			log.debug("Device is in stock");
		}
		else
		{
			System.out.println("Device is not in stock");
			//Assert.fail("Device is not in stock");
		}
	}
	public static void checkDevStatusAsPreOrder() {
		// TODO Auto-generated method stub
		//Have to change the below text
		if(pageobjects.ConnectedDeviceDetailsPage.DevStatusMsg.getText().contains("Pre"))
		{
			System.out.println("Device is Pre Order Device");
			log.debug("Device is Pre Order Device");
		}
		else
		{
			System.out.println("Device is not Pre Order Device");
			Assert.fail("Device is not Pre Order Device");
		}
	}
	
}
