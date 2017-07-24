package actionsPerformed;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import helpers.Environment;

public class FitnessTrackerPageActions extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");

	public static void Elementdisplayvalidation(String Tabname)
	{
		System.out.println(" ");
		
		System.out.println("FitnessTracker_Page_Validation");
		
		
		
		if(Tabname!=null)
		{
			switch (Tabname.toLowerCase())
			{
			case "filter":
				if(pageobjects.FitnessTrackerPage.FitnessFilterTab.isDisplayed())
				 {
					System.out.println("The Filter Tab is Present on the FitnessPage and the Text is :" + pageobjects.FitnessTrackerPage.FitnessFilterTab.getText() );
				 }else{
				   System.out.println("The  Filter Tab is not Present on the FitnessPage and the Text is :" + pageobjects.FitnessTrackerPage.FitnessFilterTab.getText());
				 }
				break;
			case "sort":
				if(pageobjects.FitnessTrackerPage.FitnessSortTab.isDisplayed())
				 {
					System.out.println("The Sort Tab is Present on the FitnessPage and the Text is :" + pageobjects.FitnessTrackerPage.FitnessSortTab.getText() );
				 }else{
				  System.out.println("The  Sort  Tab is not Present on the FitnessPage and the Text is :" + pageobjects.FitnessTrackerPage.FitnessSortTab.getText());
				 }
				break;
			
			
			}
	
		
	}
	
 }
	
	
	public static void ElementClickAction(String elementname) {
		// TODO Auto-generated method stub
         System.out.println(" ");
		
		System.out.println("Fitness_Tracker_Page_Action");
		
		if(elementname!=null)
		{
			switch (elementname.toLowerCase())
			{
			case "filter":
				pageobjects.FitnessTrackerPage.FitnessFilterTab.click();
				break;
			case "sort":
				pageobjects.FitnessTrackerPage.FitnessSortTab.click();		
				break;	
			
			}
	
	}
		
}
public static void DeviceSelect(String elementName) throws InterruptedException {
		
		if(elementName.contains("Random Device"))
		{
			System.out.println("Random Fitness tracker Device Selected");

			pageobjects.FitnessTrackerPage.RandomFitnesstracker.click();
			Thread.sleep(5000);
			//Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Random Fitness tracker Device Selected");
		}
		
		if(elementName.contains("Fitbit Alta"))
		{
			System.out.println("FitbitAlta Fitness tracker Device Selected");

			pageobjects.FitnessTrackerPage.FitbitAlta.click();
			Thread.sleep(5000);
			//Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("FitbitAlta Fitness tracker Device Selected");
		}
		
		if(elementName.contains("Fitbit Charge 2"))
		{
			System.out.println("FitbitCharge2 Fitness tracker Device Selected");

			pageobjects.FitnessTrackerPage.FitbitCharge2.click();
			Thread.sleep(5000);
			//Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("FitbitCharge2 Fitness tracker Device Selected");
		}
		
			
}

public static void AddtoBasketFitnessTracker() throws InterruptedException {
	// TODO Auto-generated method stub
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
				new Select(element).selectByValue("3");

				WebElement DeviceDetailsQuantity = driver.findElement(
						By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
				String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
				System.out.println("DeviceDetailsQuantityValue is "+DeviceDetailsQuantityValue);

				driver.findElement(By.id("deviceDetailsSubmit")).click();

				Thread.sleep(3000);

	
			} else {
				driver.navigate().back();
			}

		} catch (Exception e) {
			WebElement DeviceDetailsQuantity = driver.findElement(
					By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
			String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
			System.out.println(DeviceDetailsQuantityValue);
			Assert.assertEquals("3", DeviceDetailsQuantityValue);

			driver.findElement(By.id("deviceDetailsSubmit")).click();

			Thread.sleep(3000);
			WebElement BasketQuantity = driver.findElement(By.id("accessory-quantitySelectBoxIt"));
			String BasketQuantityvalue = BasketQuantity.getText();
		
			Assert.assertEquals("3", BasketQuantityvalue);
	
}

}



public static void UserSpecifiedFitnessTrackerLimit(String Limit) throws InterruptedException {
	// TODO Auto-generated method stub
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
				new Select(element).selectByValue(Limit);

				WebElement DeviceDetailsQuantity = driver.findElement(
						By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
				String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
				System.out.println("DeviceDetailsQuantityValue is "+DeviceDetailsQuantityValue);

				driver.findElement(By.id("deviceDetailsSubmit")).click();

				Thread.sleep(3000);

	
			} else {
				driver.navigate().back();
			}

		} catch (Exception e) {
			WebElement DeviceDetailsQuantity = driver.findElement(
					By.xpath("//div[@on-dimension-select='selectQuantityDimension']/span[@role='combobox']"));
			String DeviceDetailsQuantityValue = DeviceDetailsQuantity.getText();
			System.out.println(DeviceDetailsQuantityValue);
			Assert.assertEquals(Limit, DeviceDetailsQuantityValue);

			driver.findElement(By.id("deviceDetailsSubmit")).click();

			Thread.sleep(3000);
			WebElement BasketQuantity = driver.findElement(By.id("accessory-quantitySelectBoxIt"));
			String BasketQuantityvalue = BasketQuantity.getText();
		
			Assert.assertEquals(Limit, BasketQuantityvalue);
	
}

}
}