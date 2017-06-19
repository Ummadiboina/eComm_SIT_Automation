package actionsPerformed;


import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;

import helpers.Environment;


//This page will have details on the individual device

public class NonConnectedDeviceDetailsPageAction extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");

	public static void GetTitle() throws InterruptedException
	{
		System.out.println("Currently in Device details page");
		String Ele1= driver.getTitle();
		System.out.println("The Page title is "+Ele1);
		log.debug("Currently in Device details page");
		log.debug("The Page title is "+Ele1);
		Thread.sleep(5000);

	}
	
	/*

public static void AddtoBasket()
{
	pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.click();
	//driver.findElement(By.id("deviceDetailsSubmit")).click();
	pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.getText();
	log.debug("The text of the button is  - "+pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.getText());
	log.debug("Clicked on AddtoBasket");
}	
*/



//This method is used to select any 6 Valid accessory
	
	public static void ClickonBasketIcon() {
		// TODO Auto-generated method stub
		
		System.out.println("Clicking on basket icon");
		
		pageobjects.AccessoryPage.Basket.click();
		log.debug("Clicked on basket icon");	
	}
	
}




