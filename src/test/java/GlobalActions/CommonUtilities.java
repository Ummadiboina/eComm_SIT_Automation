package GlobalActions;

import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class CommonUtilities{

	// switch to window 
	public static void switchToWindow(WebDriver driver){
		try{
			String mainWindowHandle = driver.getWindowHandle();	
			//Switch to child window and close it
			for (String childWindowHandle : driver.getWindowHandles()) {
				//If window handle is not main window handle then close it 
				if(!childWindowHandle.equals(mainWindowHandle)){
					driver.switchTo().window(childWindowHandle);
					// Close child windows
					// driver.close();
				}else{
					//switch back to main window
					driver.switchTo().window(mainWindowHandle);
				}
			}
		}catch (Exception e) {
			System.out.println("Failed to switch to window :: " + e.getStackTrace());
		}
	}


	//driver Sleep
	public static void driverWait(WebDriver driver, int waitTime) throws InterruptedException{
		try{
			Thread.sleep(waitTime);
		}catch (Exception e) {
			// TODO: handle exception
			System.out.println("Failed to wait the driver : " + e.getStackTrace());
		}
	}

	// select the value from the DropDown	
	public static void selectValueFromDropDown(WebDriver driver, WebElement locater, String byIndex, String byValue, String byVisibleText) throws InterruptedException{		
		try{
			Select select = new Select(locater);
			if(!byIndex.contains("null")){
				int indexVal = Integer.parseInt(byIndex);
				select.selectByIndex(indexVal);
				System.out.println("select the value from drop index  : " + indexVal);
			}else if(!byValue.contains("null")) {
				select.selectByValue(byValue);
				System.out.println("select the value from drop  ByValue : " + byValue);
			}else if(!byVisibleText.contains("null")){
				select.selectByVisibleText(byVisibleText);	
			} else{
				System.out.println(" please try to give valid value ");
			}
		}catch (Exception e) {
			// TODO: handle exception
			System.out.println("Failed to Select value from dropDown : " + e.getStackTrace());
		}

	}


	// set data to the text fields 
	public static void setDataForTextField(WebDriver driver, WebElement locater, String inputVal) throws InterruptedException{		
		try{
			locater.isDisplayed();
			locater.sendKeys(Keys.CLEAR);
			locater.sendKeys(inputVal);
			Thread.sleep(2000);
			locater.sendKeys(Keys.TAB);

		}catch (Exception e) {
			// TODO: handle exception
			System.out.println("Failed to Set input data to the Field : " + e.getStackTrace());
		}
	}			

	// click the web element using javaScript functions
	public static void clickWebElement(WebDriver driver, WebElement locater) throws InterruptedException{		
		try{
			//locater.isDisplayed();		
			Thread.sleep(1000);
			JavascriptExecutor executor = (JavascriptExecutor)driver;
			executor.executeScript("arguments[0].click();", locater);
			Thread.sleep(1000);

		}catch (Exception e) {
			// TODO: handle exception
			System.out.println("Failed to Click WebElement : " + e.getStackTrace());
		}

	}	


	// click the web element using javaScript functions
	public static void scrollToElement(WebDriver driver, WebElement locater) throws InterruptedException{		
		try{
			Thread.sleep(1000);
			//JavascriptExecutor executor = (JavascriptExecutor)driver;
			((JavascriptExecutor)driver).executeScript("arguments[0].scrollIntoView();", locater);
			Thread.sleep(1000);

		}catch (Exception e) {
			// TODO: handle exception
			System.out.println("Failed to Scroll to Element : " + e.getStackTrace());
		}

	}
	
	
	// mouse hour on element
		public static void mouseHousrOnElement(WebDriver driver, WebElement locater) throws InterruptedException{		
			try{
				Actions actions = new Actions(driver);
				actions.moveToElement(locater).perform();
				// actions.click();
				//actions.perform();
			}catch (Exception e) {
				// TODO: handle exception
				System.out.println("Failed to mouse Hover to Element : " + e.getStackTrace());
			}

		}

	public static void VerifyText(WebDriver driver, String verify) throws InterruptedException{
		try{
			WebElement ele = driver.findElement(By.xpath("//*[contains()='"+verify+"']"));
			if( ele.isDisplayed())
			{
				System.out.println("Element present");
			}
			else
			{
				System.out.println("Element not present");
			}
			//Assert.assertTrue("");

		}catch (Exception e) {
			// TODO: handle exception
			System.out.println("Failed to identify Element : " + e.getStackTrace());
		}

	}


}
