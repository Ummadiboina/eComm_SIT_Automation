package actionsPerformed;

import helpers.Environment;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

public class AccessoryPageActions extends Environment{
	
	static Logger log = Logger.getLogger("devpinoyLogger");
	
	public static void Elementdisplayvalidation(String Tabname)
	{
		System.out.println(" ");
		
		System.out.println("Accessory_Page_Validation");
		  log.debug("Accessory Page validation");

			
		if(Tabname!=null)
		{
			switch (Tabname.toLowerCase())
			{
			case "filter":
				if(pageobjects.AccessoryPage.AccessoryFilterTab.isDisplayed())
				{
			
					System.out.println("The Filter Tab is Present on the AccesoryPage and the Text is :" + pageobjects.AccessoryPage.AccessoryFilterTab.getText() );
					log.debug("The Filter Tab is Present on the AccesoryPage and the Text is :" + pageobjects.AccessoryPage.AccessoryFilterTab.getText() );

				 }else{
				   System.out.println("The  Filter Tab is not Present on the AccessoryPage and the Text is :" + pageobjects.AccessoryPage.AccessoryFilterTab.getText());
				   log.debug("The  Filter Tab is not Present on the AccessoryPage and the Text is :" + pageobjects.AccessoryPage.AccessoryFilterTab.getText());

				 }
				
				break;
			case "sort":
				if(pageobjects.AccessoryPage.AccessorySortTab.isDisplayed())
				 {
					System.out.println("The Sort Tab is Present on the AccessoryPage and the Text is :" + pageobjects.AccessoryPage.AccessorySortTab.getText() );
					 log.debug("The Sort Tab is Present on the AccessoryPage and the Text is :" + pageobjects.AccessoryPage.AccessorySortTab.getText() );
				 }else{
					  System.out.println("The  Sort Tab is not Present on the AccessoryPage and the Text is :" + pageobjects.AccessoryPage.AccessorySortTab.getText());
					  log.debug("The  Sort Tab is not Present on the AccessoryPage and the Text is :" + pageobjects.AccessoryPage.AccessorySortTab.getText());
				 }
				break;
			
			
			}
	
	
	}
	
 }
	
	
//this  method used to perform click action on the Accessory Page	
	
	public static void ElementClickAction(String elementname) {
		// TODO Auto-generated method stub
         System.out.println(" ");
		
		System.out.println("Accessory_Page_Action");
		log.debug("Accessory Page validation");
		
		if(elementname!=null)
		{
			switch (elementname.toLowerCase())
			{
			case "filter":
				pageobjects.AccessoryPage.AccessoryFilterTab.click();
				break;
			case "sort":
				pageobjects.AccessoryPage.AccessorySortTab.click();		
				break;	
			
			}
	
		}
	}
	
	
	
	//This Method is used to select Accessory from the accessory listing page 
	
	public static void SelectAnyAccessory(String elementName) {
			
		if(elementName.contains("Random"))
		{
			System.out.println("Selecting Any Accessory");
			log.debug("Selecting Any Accessory");
			log.debug("Selected an accessory -  "+pageobjects.AccessoryPage.RandomAccessory.getText());
			pageobjects.AccessoryPage.RandomAccessory.click();
			log.debug("Random Accessory Selected");
		}
		if(elementName.contains("HarmanKardonOnxyxStudio3"))

		{
			System.out.println("Selecting HarmanKardonOnxyxStudio3 Accessory");
			log.debug("Selecting HarmanKardonOnxyxStudio3 Accessory");
			log.debug("Selected an accessory -  "+pageobjects.AccessoryPage.RandomAccessory.getText());
			pageobjects.AccessoryPage.HarmanKardonOnxyxStudio3.click();
			log.debug("HarmanKardonOnxyxStudio3 Accessory Selected");
		}
		
		if(elementName.contains("PencilforiPadPro"))

		{
			System.out.println("Selecting PencilforiPadPro Accessory");
			log.debug("Selecting PencilforiPadPro Accessory");
			log.debug("Selected an accessory -  "+pageobjects.AccessoryPage.RandomAccessory.getText());
			pageobjects.AccessoryPage.PencilforiPadPro.click();
			log.debug("PencilforiPadPro Accessory Selected");
		}
		
		if(elementName.contains("Clip2"))

		{
			System.out.println("Selecting Clip2 Accessory");
			log.debug("Selecting Clip2 Accessory");
			log.debug("Selected an accessory -  "+pageobjects.AccessoryPage.RandomAccessory.getText());
			pageobjects.AccessoryPage.Clip2.click();
			log.debug("Clip2 Accessory Selected");
		}
		
		if(elementName.contains("JBLXtreme"))

		{
			System.out.println("Selecting JBLXtreme Accessory");
			log.debug("Selecting JBLXtreme Accessory");
			log.debug("Selected an accessory -  "+pageobjects.AccessoryPage.RandomAccessory.getText());
			pageobjects.AccessoryPage.JBLXtreme.click();
			log.debug("JBLXtreme Accessory Selected");
		}
		
		}
	/*Below has been modified as per the new ui layout, new function has been written which is below,
	so please refer to this only if its necessary else follow "selectAnyAccessoryLimit()" instead of
	"selectAnyAccessoryLimit_old"*/
	
	public static void selectAnyAccessoryLimit_old() throws InterruptedException {
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
						}
						}
		    
		}
	
public static void selectAnyAccessoryLimit() throws InterruptedException {

		
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
				new Select(element).selectByValue("2");

				WebElement DeviceDetailsQuantity = driver.findElement(
						By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
				String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
				System.out.println("DeviceDetailsQuantityValue is "+DeviceDetailsQuantityValue);

				driver.findElement(By.id("deviceDetailsSubmit")).click();

				Thread.sleep(7000);

	
			} else {
				driver.navigate().back();
			}

		} catch (Exception e) {
			WebElement DeviceDetailsQuantity = driver.findElement(
					By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
			String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
			System.out.println(DeviceDetailsQuantityValue);
			Assert.assertEquals("2", DeviceDetailsQuantityValue);

			driver.findElement(By.id("deviceDetailsSubmit")).click();

			Thread.sleep(3000);
			WebElement BasketQuantity = driver.findElement(By.id("accessory-quantitySelectBoxIt"));
			String BasketQuantityvalue = BasketQuantity.getText();
			// Assert.assertEquals(DeviceDetailsQuantityValue,
			// BasketQuantityvalue);
			Assert.assertEquals("2", BasketQuantityvalue);

		}
		}
	
}

