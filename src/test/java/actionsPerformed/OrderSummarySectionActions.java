package actionsPerformed;

import java.io.IOException;

import helpers.Environment;
import org.apache.log4j.Logger;

import GlobalActions.Screenshots;
import junit.framework.Assert;

public class OrderSummarySectionActions extends Environment {

	final static Logger log = Logger.getLogger("Agent_AdvisoryChecksActions");

	public static void checkStockExtMessage(String product) throws IOException {

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
			log.debug("ActStockExtMsg contains ExpStockExtMsg");
		} else {
			Assert.fail("Stock Extended Message does not match");
		}
		Screenshots.captureScreenshot();
	}

	public static void checkStockExtMessageDelText() throws IOException {
		String ExpStockExtMsgDelText = "We will deliver the rest of your order as soon as possible.";
		if (pageobjects.OrderSummarySection.StockExtMessageDelText.getText().matches(ExpStockExtMsgDelText)) {
			log.debug("Delivery Text in Order Summary is present");
		} else {
			Assert.fail("Delivery Text in Order Summary is not present");
		}
		Screenshots.captureScreenshot();
	}

}
