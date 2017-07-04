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

		String ActOrderContractMsgOrderSummary = "";
		String ExpOrderContractMsgOrderSummary = "";

		try {
			// TODO Auto-generated method stub

			ActOrderContractMsg = pageobjects.ReviewPage.OrderContractMessageRP.getText();
			ExpOrderContractMsg = "Your contract will not start until the order is on its way.";

			log.debug("Act Del MSg" + ActOrderContractMsg);
			log.debug("Exp Del MSg" + ExpOrderContractMsg);

			ActOrderContractMsgOrderSummary = pageobjects.ReviewPage.OrderContractMessageRPOrderSummary.getText();
			ExpOrderContractMsgOrderSummary = "Your contract will not start until the order is on its way.";

			Assert.assertTrue("Assertion Failed: Order Contract Text in Review Page does not match",
					ExpOrderContractMsg.equals(ActOrderContractMsg));

			System.out.println("Assertion Passed: ActOrderContractMsg matches ExpOrderContractMsg in Review Page");

			Assert.assertTrue("Assertion Failed: Order Contract Text in the Order Summary Section does not match",
					ExpOrderContractMsgOrderSummary.equals(ActOrderContractMsgOrderSummary));

			System.out.println(
					"Assertion Passed: ActOrderContractMsgOrderSummary matches ExpOrderContractMsgOrderSummary in the Order Summary Section");

		} catch (AssertionError e) {
			System.out.println("ActOrderContractMsg: " + ActOrderContractMsg
					+ " does not match the ExpOrderContractMsg: " + ExpOrderContractMsg + " in Review Page");

		}
	}

		public static void checkStockExtMsgRP() {
			// TODO Auto-generated method stub
			String ActualStockExtMsg = pageobjects.ReviewPage.StockExtMessageDDPORP.getText();
			String ExpStockExtMsg = "You'll pay for your phone now. We�ll send you an email or text to let you know when it will be delivered";
			System.out.println("Act Del MSg" + ActualStockExtMsg);
			System.out.println("Exp Del MSg" + ExpStockExtMsg);

			if (ActualStockExtMsg.matches(ExpStockExtMsg)) {
				System.out.println("ActualStockExtMsg matches ExpStockExtMsg");
			} else {
				Assert.fail("Stock extended message for stock limited DD/Pre order phone does not match");

			}
		}
		
		
	public static void checkStockExtMsgRP(String product) {
		// TODO Auto-generated method stub
		String ActualStockExtMsg = pageobjects.ReviewPage.StockExtMessageDDPORP.getText();

		String ExpStockExtMsg = null;
		if (product.contains("GalaxyS7")) {

			ExpStockExtMsg = "Your new Samsung Galaxy S7 32gb Gold may take up to 2 to 3 days. You'll pay for the new Phone now, but won't start paying for your contract until your iPhone is on its way.";
		}

		if (ActualStockExtMsg.matches(ExpStockExtMsg)) {
			System.out.println("ActualStockExtMsg in Review Page matches ExpStockExtMsg");
		} else {
			Assert.fail("Stock extended message in Review Page is not present");

		}
	}

	public static void checkDelTextRP() {
		String ExpStockExtMsgDelText = "We will deliver the rest of your order as soon as possible.";
		if (pageobjects.ReviewPage.DeliveryTextRP.getText().matches(ExpStockExtMsgDelText)) {
			System.out.println("Delivery Text in Review Page is present");
		} else {
			Assert.fail("Delivery Text in Review Page is not present");
		}
	}

		
			
}
