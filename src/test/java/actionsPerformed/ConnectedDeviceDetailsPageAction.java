package actionsPerformed;

import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;

import helpers.Environment;
import pageobjects.ConnectedDeviceDetailsPage;

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
}
