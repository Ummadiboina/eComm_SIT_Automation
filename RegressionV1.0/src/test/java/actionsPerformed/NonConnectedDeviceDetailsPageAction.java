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

public static void AddtoBasket()
{
	pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.click();
	//driver.findElement(By.id("deviceDetailsSubmit")).click();
	pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.getText();
	log.debug("The text of the button is  - "+pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.getText());
	log.debug("Clicked on AddtoBasket");
}	

//This method is used to select any 6 Valid accessory
	public static void selectAnyAccessoryLimit() throws InterruptedException {
		// TODO Auto-generated method stub
		
		try
		{
			System.out.println("Adding Accesories to basket");
			log.debug("Adding Accesories to basket");
			//log.debug("The text of the button is  - "+pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.getText());
				for(int i=0; i<2; i++)
						{
						pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.click();
				//		System.out.println("Value of i is "+i );
						}
						
		}
		catch(org.openqa.selenium.StaleElementReferenceException ex)
		{
		    log.debug("Exception in finding value");
			System.out.println("Adding Accesories to basket");
			log.debug("Adding Accesories to basket");
			//log.debug("The text of the button is  - "+pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.getText());
				for(int i=0; i<2; i++)
						{
						pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.click();
						Thread.sleep(2000);
				//		System.out.println("Value of i is "+i );
						}
						}
		    //WebElement date = driver.findElement(By.xpath("/html/body/table/tbody/tr/td/table/tbody/tr[6]/td[4]/a/font"));
		    
		}
	/*	
		System.out.println("Adding Accesories to basket");
		log.debug("Adding Accesories to basket");
		//log.debug("The text of the button is  - "+pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.getText());
			for(int i=0; i<8; i++)
					{
					pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.click();
			//		System.out.println("Value of i is "+i );
					}
					}
	*/
	public static void ClickonBasketIcon() {
		// TODO Auto-generated method stub
		
		System.out.println("Clicking on basket icon");
		
		pageobjects.AccessoryPage.Basket.click();
		log.debug("Clicked on basket icon");	
	}
	
}




