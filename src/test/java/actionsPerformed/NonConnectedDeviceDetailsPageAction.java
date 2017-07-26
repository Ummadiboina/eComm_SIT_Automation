package actionsPerformed;


import java.util.List;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import helpers.Environment;


//This page will have details on the individual device

public class NonConnectedDeviceDetailsPageAction extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");
	static JavascriptExecutor executor = (JavascriptExecutor) driver;

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
	
	public static void clickCloseBtn() {
		System.out.println("Closing small pop up");
		executor.executeScript("arguments[0].click();", pageobjects.NonConnectedDeviceDetailsPage.CloseBtn);

	}

	public static void colorSelectOfDevice(String color) throws Exception {
		// TODO Auto-generated method stub
		Thread.sleep(5000);

		WebElement element = driver.findElement(By.xpath("//select[@class='ng-pristine ng-valid accessory-option']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", element);
		new Select(element).selectByVisibleText(color);
		System.out.println("Selected" + color);

	}
	
	public static void AddtoBasket() throws InterruptedException {
		
		// driver.findElement(By.id("deviceDetailsSubmit")).click();
		pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.getText();
		log.debug("The text of the button is  - " + pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.getText());
		System.out.println("The text of the button is  - " + pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.getText());
		
		pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.click();
		Thread.sleep(5000);
		
		log.debug("Clicked on AddtoBasket");
		System.out.println("Clicked on AddtoBasket");
	}
	

	public static void colorSelectOfDeviceDropDown(String color) throws Exception {
		// TODO Auto-generated method stub
		Thread.sleep(5000);

		WebElement element = pageobjects.ConnectedDeviceDetailsPage.ColorDropDown;
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", element);
		if(element.isDisplayed()) {
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
		if(element.isDisplayed()) {
		new Select(element).selectByVisibleText(capacity);
		System.out.println("Selected" + capacity);
		}
	}
	
	public static void isCapacityDropDownDisplayed() throws Exception {
		// TODO Auto-generated method stub
		Thread.sleep(5000);
		WebElement element = pageobjects.ConnectedDeviceDetailsPage.ColorDropDown;
		if(!element.isDisplayed()) {
		Assert.fail("capacity drop down is not present");	
		}
	}
	
	public static void isColorDropDownDisplayed() throws Exception {
		// TODO Auto-generated method stub
		Thread.sleep(5000);
		WebElement element = pageobjects.ConnectedDeviceDetailsPage.CapacityDropDown;
		if(!element.isDisplayed()) {
		Assert.fail("color drop down is not present");	
		}
	}

public static void checkIfMoreThanOneOptionAvailable() throws Exception {
		// TODO Auto-generated method stub
		Thread.sleep(5000);
		WebElement capacity = pageobjects.NonConnectedDeviceDetailsPage.CapacityDropDown;
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", capacity);
		if (capacity.isDisplayed()) {
			List<WebElement> elementCount = new Select(capacity).getOptions();

			if (elementCount.size() <= 1) {
				Assert.fail("There are no more than 1 option available for capacity dropdown");
			}
		}
		WebElement color = pageobjects.NonConnectedDeviceDetailsPage.ColorDropDown;
		
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", color);
		if (color.isDisplayed()) {
			List<WebElement> elementCount = new Select(color).getOptions();

			if (elementCount.size() <= 1) {
				Assert.fail("There are no more than 1 option available for color dropdown");
			}
		}
	}

public static void checkOnlyOneCapacityAvailable() throws Exception {
		// TODO Auto-generated method stub
		Thread.sleep(5000);
		List<org.openqa.selenium.WebElement> capacityLabel = pageobjects.NonConnectedDeviceDetailsPage.CapacityLabel;
		System.out.println("capacity label size :" + capacityLabel.size());
		if (capacityLabel.size() > 1) {
			Assert.fail("There are more than 1 capacity variant displayed as a label");
		}

		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement color = pageobjects.NonConnectedDeviceDetailsPage.ColorDropDown;
		js.executeScript("arguments[0].setAttribute('style', 'display:block;')", color);

		if (color.isDisplayed()) {
			List<WebElement> elementCount = new Select(color).getOptions();

			if (elementCount.size() <= 1) {
				Assert.fail("There are no more than 1 option available for color dropdown");
			}
		}
	}

public static void checkOnlyOneColourAndOneCapacityAsDropdownAvailable() throws Exception {
    Thread.sleep(7000);
    JavascriptExecutor js = (JavascriptExecutor) driver;
    
    System.out.println("check 1");
    WebElement color = pageobjects.NonConnectedDeviceDetailsPage.ColorDropDownAccessory;
    js.executeScript("arguments[0].setAttribute('style', 'display:block;')", color);
    WebElement capacity = pageobjects.NonConnectedDeviceDetailsPage.CapacityDropDown;
    js.executeScript("arguments[0].setAttribute('style', 'display:block;')", capacity);
    
    System.out.println("check 2");
    List<WebElement> ColorElementCount = new Select(color).getOptions();
    List<WebElement> CapacityElementCount = new Select(capacity).getOptions();

    System.out.println("color size" +ColorElementCount.size());
    System.out.println("capacity size" +CapacityElementCount.size());

    if ((ColorElementCount.size() > 1) || (CapacityElementCount.size() > 1)) {
          Assert.fail("The device has more than one option displayed in a dropdown");
    } else {
          System.out.println(
                      "Selected accessory has single variant for color and capacity and displayed as dropdown as expected");
          log.debug(
                      "Selected accessory has single variant for color and capacity and displayed as dropdown as expected");
    }

}

	

	
	
}




