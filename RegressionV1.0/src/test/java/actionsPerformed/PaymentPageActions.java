package actionsPerformed;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.HashMap;
import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


import helpers.*;
import helpers.Environment;
import pageobjects.PaymentPage;
import steps.Hooks;

public class PaymentPageActions extends Environment {
	
	static Logger log = Logger.getLogger("devpinoyLogger");

	  public static void Set_Bank_details()
	  {
		
		  
		  pageobjects.PaymentPage.Name_On_Account.sendKeys("Test Accepta");
		  log.debug("Entered name is Test Accepta");

		  pageobjects.PaymentPage.Account_Number.sendKeys("10207136");
		  log.debug("Entered Account number - 10207136");
		  
		  pageobjects.PaymentPage.Sort_Code1.sendKeys("20");
		  log.debug("Entered sort code - 20");
		  
		  pageobjects.PaymentPage.Sort_Code2.sendKeys("15");
		  log.debug("Entered sort code - 15");
		  
		  pageobjects.PaymentPage.Sort_Code3.sendKeys("96");
		  log.debug("Entered sort code - 96");
		  
		  pageobjects.PaymentPage.Accept_Terms_Checkbox.click();
		  log.debug("Clicked on the Accept Terms checkbox");
		  
		   }
	  
	  
	  public static void Time_At_Address()
	  {
		  
		  pageobjects.PaymentPage.Stay_Address_Years.sendKeys("9");
		  log.debug("Entered the stayed at address - 9");
		  
		  pageobjects.PaymentPage.Stay_Address_months.sendKeys("9");
		  log.debug("Entered the stayed at months - 9");
		  
		  pageobjects.PaymentPage.Confirm_Address_Checkbox.click();
		  log.debug("Clicked on the Confirm Address checkbox");
	  }
	  
	  public static void Card_Details() throws InterruptedException, AWTException
	  {
		  /*
		
		WebElement fr = driver.findElement(By.id("payment-iframe"));

		  driver.switchTo().frame(fr);
		  Thread.sleep(5000);
		  
		  pageobjects.PaymentPage.Name_On_Card.sendKeys("Test Accepta");
		  Thread.sleep(5000);
		  Robot r = new Robot();
		  r.keyPress(KeyEvent.VK_ENTER);
		  r.keyRelease(KeyEvent.VK_ENTER);
		  pageobjects.PaymentPage.Card_Number.sendKeys("4539791001730106");
		  Thread.sleep(5000);
		  Robot r1 = new Robot();
		  r1.keyPress(KeyEvent.VK_ENTER);
		  r1.keyRelease(KeyEvent.VK_ENTER);
		  pageobjects.PaymentPage.Expiry_Month.sendKeys("01");
		  Thread.sleep(5000);
		  Robot r2 = new Robot();
		  r2.keyPress(KeyEvent.VK_ENTER);
		  r2.keyRelease(KeyEvent.VK_ENTER);
		  pageobjects.PaymentPage.Expiry_Year.sendKeys("2018");
		  Thread.sleep(5000);
		  Robot r3 = new Robot();
		  r3.keyPress(KeyEvent.VK_ENTER);
		  r3.keyRelease(KeyEvent.VK_ENTER);
		  pageobjects.PaymentPage.CVV_Security_Code.sendKeys("123");
		  Thread.sleep(5000);
		  Robot r4 = new Robot();
		  r4.keyPress(KeyEvent.VK_ENTER);
		  r4.keyRelease(KeyEvent.VK_ENTER);
		  pageobjects.PaymentPage.Continue_Next_Step.sendKeys(Keys.ENTER);
		  
		  driver.switchTo().defaultContent(); */
		  
		  driver.switchTo().frame("payment-iframe"); //switching the frame by ID

			System.out.println("********We are switch to the iframe*******");
			  log.debug("Entering the Payments section");

			PaymentPage.Name_On_Card.sendKeys("Test Accepta");
			log.debug("Entering name of the card as Test Accepta");
			
			PaymentPage.Card_Number.sendKeys("4539791001730106");
			log.debug("Entered Card number as 4539xxxxxxxxxx06");
			
			PaymentPage.Expiry_Month.sendKeys("01");
			log.debug("Entered Expiry Month");
			
			PaymentPage.Expiry_Year.sendKeys("2020");
			log.debug("Entered Expiry Year");
			
			PaymentPage.CVV_Security_Code.sendKeys("123");
			log.debug("Entered CVV security code");
			
			PaymentPage.Continue_Next_Step.sendKeys(Keys.ENTER);
			log.debug("Clicking on continue to next step");
			
		   System.out.println("*********We are done***************");
		   log.debug("Exiting the Payments section");
		   driver.switchTo().defaultContent();
		   Thread.sleep(3000);
		  // System.out.println(driver.getTitle());
		   	   
		   
	  }
	  
	  
	  
	  
	  
}
