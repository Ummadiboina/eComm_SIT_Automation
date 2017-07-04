package actionsPerformed;

import org.apache.log4j.Logger;

import junit.framework.Assert;

public class OrderSummarySectionActions {

	static Logger log = Logger.getLogger("devpinoyLogger");
	
	
	public static void checkStockExtMessage(String product) {

		String ExpStockExtMsg = null;

		if (product.contains("AquarisM45")) {
			ExpStockExtMsg = "Your new BQ Aquaris M4 5 is in pre order status.";
		}
		if (product.contains("Iphone7")) {
			ExpStockExtMsg = "iPhone";
		}
		if (product.contains("GalaxyS7")) {

			ExpStockExtMsg = "Your new Samsung Galaxy S7 32gb Gold may take up to 2 to 3 days. You'll pay for the new Phone now, but won't start paying for your contract until your iPhone is on its way.";
		}
		String ActStockExtMsg = pageobjects.OrderSummarySection.StockExtMessage.getText();

		if (ActStockExtMsg.matches(ExpStockExtMsg)) {
			System.out.println("ActStockExtMsg contains ExpStockExtMsg");
		} else {
			Assert.fail("Stock Extended Message does not match");
		}
	}

	public static void checkStockExtMessageDelText() {
		String ExpStockExtMsgDelText = "We will deliver the rest of your order as soon as possible.";
		if (pageobjects.OrderSummarySection.StockExtMessageDelText.getText().matches(ExpStockExtMsgDelText)) {
			System.out.println("Delivery Text in Order Summary is present");
		} else {
			Assert.fail("Delivery Text in Order Summary is not present");
		}
	}
	
}
