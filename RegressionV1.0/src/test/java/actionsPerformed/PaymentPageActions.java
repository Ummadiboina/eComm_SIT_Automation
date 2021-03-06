package actionsPerformed;

import java.awt.AWTException;

import org.apache.log4j.Logger;

import org.openqa.selenium.Keys;



import helpers.Environment;
import pageobjects.PaymentPage;


public class PaymentPageActions extends Environment {
	
	static Logger log = Logger.getLogger("devpinoyLogger");

	  public static void Set_Bank_details(String Username)
	  {
			  
		
		  
		  pageobjects.PaymentPage.Name_On_Account.sendKeys(Username);
		  log.debug("Entered name is "+Username);

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
	 

	public static void Set_Bank_details_hv()
	  {
		
		  
		  pageobjects.PaymentPage.Name_On_Account.sendKeys("Test Nine");
		  log.debug("Entered name is Test Nine");

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
	  
	  public static void Time_At_Address_CC() throws InterruptedException
	  {
		  pageobjects.PaymentPage.housenumber.sendKeys("41");
		  log.debug("Entered the House Number - 41");
		  
		  pageobjects.PaymentPage.postcode.sendKeys("WA27JQ");
		  log.debug("Entered the Postcode - WA27JQ");
		  
		  pageobjects.PaymentPage.postcodesubmit.click();
		  log.debug("Clicked on Find address");
		  		  
		  pageobjects.PaymentPage.Selectaddress.click();
		  log.debug("Home Address Selected");
		  Thread.sleep(3000);
		  
		  pageobjects.PaymentPage.Stay_Address_Years.sendKeys("9");
		  log.debug("Entered the stayed at address - 9");
		  
		  pageobjects.PaymentPage.Stay_Address_months.sendKeys("9");
		  log.debug("Entered the stayed at months - 9");
		  
		  Thread.sleep(3000);
		  pageobjects.PaymentPage.Confirm_Address_Checkbox.click();
		  log.debug("Clicked on the Confirm Address checkbox");
		  
		  
	  }
	  public static void Card_Details(String Username) throws InterruptedException, AWTException
	  {
		 
		  
		  driver.switchTo().frame("payment-iframe"); //switching the frame by ID

			System.out.println("********We are switch to the iframe*******");
			  log.debug("Entering the Payments section");
			  Thread.sleep(2000);
			PaymentPage.Name_On_Card.sendKeys(Username);
			log.debug("Entering name of the card as "+Username);
			
			Thread.sleep(2000);
			PaymentPage.Card_Number.sendKeys("4539791001730106");
			log.debug("Entered Card number as 4539xxxxxxxxxx06");
			Thread.sleep(2000);
			PaymentPage.Expiry_Month.sendKeys("01");
			log.debug("Entered Expiry Month");
			Thread.sleep(2000);
			PaymentPage.Expiry_Year.sendKeys("2020");
			log.debug("Entered Expiry Year");
			Thread.sleep(2000);
			PaymentPage.CVV_Security_Code.sendKeys("123");
			log.debug("Entered CVV security code");
			Thread.sleep(2000);
			PaymentPage.Continue_Next_Step.sendKeys(Keys.ENTER);
			log.debug("Clicking on continue to next step");
			Thread.sleep(2000);
		   System.out.println("*********We are done***************");
		   log.debug("Exiting the Payments section");
		   driver.switchTo().defaultContent();
		  // System.out.println(driver.getTitle());
		   	   
		   
	  }
	  
	  public static void Card_Details_hv() throws InterruptedException, AWTException
	  {  driver.switchTo().frame("payment-iframe"); //switching the frame by ID

		System.out.println("********We are switch to the iframe*******");
		  log.debug("Entering the Payments section");
		  Thread.sleep(2000);
		PaymentPage.Name_On_Card.sendKeys("Test Nine");
		log.debug("Entering name of the card as Test Nine");
		Thread.sleep(2000);
		PaymentPage.Card_Number.sendKeys("4539791001730106");
		log.debug("Entered Card number as 4539xxxxxxxxxx06");
		Thread.sleep(2000);
		PaymentPage.Expiry_Month.sendKeys("01");
		log.debug("Entered Expiry Month");
		Thread.sleep(2000);
		PaymentPage.Expiry_Year.sendKeys("2020");
		log.debug("Entered Expiry Year");
		Thread.sleep(2000);
		PaymentPage.CVV_Security_Code.sendKeys("123");
		log.debug("Entered CVV security code");
		Thread.sleep(2000);
		PaymentPage.Continue_Next_Step.sendKeys(Keys.ENTER);
		log.debug("Clicking on continue to next step");
		Thread.sleep(2000);
	   System.out.println("*********We are done***************");
	   log.debug("Exiting the Payments section");
	   driver.switchTo().defaultContent();
	  // System.out.println(driver.getTitle());
	  }
	  
	  
	  public static void ValidateNonCreditPaymentPage()
	  {
			//Below will display contents of the section

		  log.debug("Payment pages validations"+driver.getTitle());

			log.debug("The Main Total are : " +pageobjects.PaymentPage.BasketTotal.getText());
			
			
		//	log.debug("The Basket contents are : " +pageobjects.PaymentPage.BasketContent.getText());

			
		
		  

		
	  }
	  
	  //upfront-payment-amount
	  
}
