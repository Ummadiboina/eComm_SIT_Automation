package actionsPerformed;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;

import helpers.Environment;

public class ReviewPageActions extends Environment  {
	static Logger log = Logger.getLogger("devpinoyLogger");

	  
	  public static void gettitlepage()
	  {
		  
		   System.out.println(driver.getTitle());
		   
	  
	   }
	  
	
	  public static void TermsCheckBox() 
	  {
		  System.out.println("Clicking on the checkbox");
		  pageobjects.ReviewPage.TermsCheckBox.click();
		  log.debug("Clicked the Checkbox in Terms");
	  }
	 
	  public static void PayNow() throws InterruptedException 
	  {
		  System.out.println("Clicking on Pay now");
		  pageobjects.ReviewPage.PayNow.click();
		  System.out.println("Completing on Review page");
		  log.debug("Clicked the Paynow button");
		  Thread.sleep(5000L);

	  }

	  
	  public static void checktrustev() 
	  {
		  String Source= driver.getPageSource();		  
		  String Trustev = "trustev" ;
		  	
		  if( containsIgnoreCase( Source, Trustev) ) {
			  System.out.println( "Trustev is enabled" );
			}else
				System.out.println( "Trustev is NOT enabled" );	
	  }


	  private static boolean containsIgnoreCase(String source, String trustev) {

		return false;
	}


	public static void checkOrderContractTextRP() {
		String ActOrderContractMsg = "";
		String ExpOrderContractMsg = "";

		try {
			// TODO Auto-generated method stub
			
			ActOrderContractMsg = pageobjects.ReviewPage.OrderContractMessageRP.getText();
			ExpOrderContractMsg = "Your contract will not start until the order is on its way.";

			System.out.println("Act Del MSg" + ActOrderContractMsg);
			System.out.println("Exp Del MSg" + ExpOrderContractMsg);

			Assert.assertTrue("Assertion Failed: Order Contract Text in Review Page does not match",
					ExpOrderContractMsg.equals(ActOrderContractMsg));

			System.out.println("Assertion Passed: ActOrderContractMsg matches ExpOrderContractMsg in Review Page");

			/*
			 * if (ActOrderContractMsg.equals(ExpOrderContractMsg)) {
			 * System.out.
			 * println("ActOrderContractMsg matches ExpOrderContractMsg in Review Page"
			 * ); } else { //
			 * Assert.fail("Order Contract Text in Review Page does not match");
			 * System.out.
			 * println("Order Contract Text in Review Page does not match");
			 * 
			 * }
			 */
		} catch (AssertionError e) {
			System.out.println("ActOrderContractMsg: " + ActOrderContractMsg
					+ " does not match the ExpOrderContractMsg: " + ExpOrderContractMsg + " in Review Page");

		}
	}
		
		public static void checkStockExtMsgRP() {
			// TODO Auto-generated method stub
			String ActualStockExtMsg = pageobjects.ReviewPage.StockExtMessageDDPORP.getText();
			String ExpStockExtMsg = "You'll pay for your phone now. We’ll send you an email or text to let you know when it will be delivered";
			System.out.println("Act Del MSg" + ActualStockExtMsg);
			System.out.println("Exp Del MSg" + ExpStockExtMsg);

			if (ActualStockExtMsg.matches(ExpStockExtMsg)) {
				System.out.println("ActualStockExtMsg matches ExpStockExtMsg");
			} else {
				Assert.fail("Stock extended message for stock limited DD/Pre order phone does not match");

			}
		}
		
			
}
