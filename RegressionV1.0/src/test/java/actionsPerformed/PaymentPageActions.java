package actionsPerformed;

import java.awt.AWTException;

import org.apache.log4j.Logger;

import org.openqa.selenium.Keys;



import helpers.Environment;
import pageobjects.PaymentPage;


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
	  
	  public static void Time_At_Address_CC()
	  {
		  pageobjects.PaymentPage.housenumber.sendKeys("41");
		  log.debug("Entered the House Number - 41");
		  
		  pageobjects.PaymentPage.postcode.sendKeys("WA27JQ");
		  log.debug("Entered the Postcode - WA27JQ");
		  
		  pageobjects.PaymentPage.postcodesubmit.click();
		  log.debug("Clicked on Find address");
		  		  
		  pageobjects.PaymentPage.Selectaddress.click();
		  log.debug("Home Address Selected");
		  
		  
		  pageobjects.PaymentPage.Stay_Address_Years.sendKeys("9");
		  log.debug("Entered the stayed at address - 9");
		  
		  pageobjects.PaymentPage.Stay_Address_months.sendKeys("9");
		  log.debug("Entered the stayed at months - 9");
		  
		  pageobjects.PaymentPage.Confirm_Address_Checkbox.click();
		  log.debug("Clicked on the Confirm Address checkbox");
		  
		  
	  }
	  public static void Card_Details() throws InterruptedException, AWTException
	  {
		 
		  
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
		  // System.out.println(driver.getTitle());
		   	   
		   
	  }
	  
	  public static void Card_Details_hv() throws InterruptedException, AWTException
	  {  driver.switchTo().frame("payment-iframe"); //switching the frame by ID

		System.out.println("********We are switch to the iframe*******");
		  log.debug("Entering the Payments section");

		PaymentPage.Name_On_Card.sendKeys("Test Nine");
		log.debug("Entering name of the card as Test Nine");
		
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
	  // System.out.println(driver.getTitle());
	  }
	  
	  
	  public static void ValidateNonCreditPaymentPage()
	  {
			//Below will display contents of the section

		  log.debug("Payment pages validations"+driver.getTitle());

			log.debug("The Main Headercontents are : " +pageobjects.PaymentPage.UpfrontPaymentAmount.getText());
			
			
			log.debug("The Basket contents are : " +pageobjects.PaymentPage.BasketContent.getText());

			
		
		  

		
	  }
	  
	  //upfront-payment-amount
	  
}
