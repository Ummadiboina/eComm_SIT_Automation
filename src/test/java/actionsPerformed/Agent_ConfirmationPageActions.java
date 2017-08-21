package actionsPerformed;

import helpers.Environment;
import helpers.Log;
import pageobjects.Agent_ConfirmationPage;
import static org.testng.Assert.fail;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;

public class Agent_ConfirmationPageActions extends Environment{
	
	static Logger log = Logger.getLogger("devpinoyLogger");
	
	
	public static void Confirmationdetails() throws Exception
	{
				
		driver.getTitle();
		// final String confirmation = confirmation();
		
		try {
			String basketcontents= Agent_ConfirmationPage.sharedBasketContents.getText();
			System.out.println(basketcontents);
			log.debug("The basket contents are as below " +basketcontents );

			String orderContents= Agent_ConfirmationPage.orderContent.getText();
			System.out.println(orderContents);
			log.debug("The orderContents contents are as below " +orderContents );
			
			String orderContentRefer= Agent_ConfirmationPage.orderContentRefer.getText();
			System.out.println(orderContentRefer);
			log.debug("The orderContentRefer contents are as below " +orderContentRefer );
			
			String customerPaymentdetails= Agent_ConfirmationPage.customerPaymentdetails.getText();
			System.out.println(customerPaymentdetails);
			log.debug("The basket customerPaymentdetails are as below " +customerPaymentdetails );
		
		} 
		
		catch (Exception e) 
		{
			if (driver.findElement(By.id("payDecline")).getText().contains("unsuccessful"))
			{
				String message = driver.findElement(By.id("payDecline")).getText();
				System.out.println(message);

				//				return message;
				
				if(message.contains("Try again"))
				{
					confirmation();
					
				}
				
			}

			
		}

		
		
	}
	
	private static void confirmation() throws Exception 
	{
		String message = driver.findElement(By.id("payDecline")).getText();
		System.out.println(message);
		
	fail("Payment didnt go through, and the text in the screen is "+message);
		
		}

	public static void SubmitOrder() throws Exception{
		// TODO Auto-generated method stub
				System.out.println("Entered submit order method");
		Agent_ConfirmationPage.SubmitOrder.click();
		System.out.println("Order submitted");
		Log.debug("Order submitted");

	}
	}
	
	
	
	
	


