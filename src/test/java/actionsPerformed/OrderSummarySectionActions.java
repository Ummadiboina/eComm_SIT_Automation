package actionsPerformed;

import org.apache.log4j.Logger;

import junit.framework.Assert;

public class OrderSummarySectionActions {

	static Logger log = Logger.getLogger("devpinoyLogger");
	public static String ProductNameDisplay;
	
	public static void checkStockExtMessage(String product) {

		if(product.contains("AquarisM45")) {
			ProductNameDisplay = "BQ Aquaris M4 5";
		}
		
		if(product.contains("Iphone7")) {
			ProductNameDisplay = "iPhone";
		}
		if(product.contains("GalaxyS7")) {
			ProductNameDisplay = "Galaxy S7";
		}
		
		
		String ActStockExtMsg = pageobjects.OrderSummarySection.StockExtMessage.getText();
		String ExpStockExtMsg = "You'll pay for your "+ProductNameDisplay+" now. We’ll send you an email or text to let you know when it will be delivered";
		System.out.println("Act Del MSg" + ActStockExtMsg);
		System.out.println("Exp Del MSg" + ExpStockExtMsg);

		if (ActStockExtMsg.contains(ExpStockExtMsg)) {
			System.out.println("ActStockExtMsg contains ExpStockExtMsg");
		} else {
			Assert.fail("Stock Extended Message does not match");

		}
	}
}
