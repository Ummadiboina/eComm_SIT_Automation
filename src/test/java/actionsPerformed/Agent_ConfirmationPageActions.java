package actionsPerformed;

import static org.testng.Assert.fail;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;

import GlobalActions.Screenshots;
import helpers.Environment;
import pageobjects.Agent_ConfirmationPage;

public class Agent_ConfirmationPageActions extends Environment {

	final static Logger log = Logger.getLogger("Agent_ConfirmationPageActions");

	public static void Confirmationdetails() throws Exception {

		driver.getTitle();
		// final String confirmation = confirmation();
		Thread.sleep(5000);
		try {
			String basketcontents = Agent_ConfirmationPage.sharedBasketContents.getText();
			log.debug(basketcontents);
			log.debug("The basket contents are as below " + basketcontents);

			String orderContents = Agent_ConfirmationPage.orderContent.getText();
			log.debug(orderContents);
			log.debug("The orderContents contents are as below " + orderContents);


			String orderNum = Agent_ConfirmationPage.orderNumber.getText();
			log.debug(orderNum);
			log.debug("The Order Confirmation  @ ::  " + orderNum);


			String orderContentRefer = Agent_ConfirmationPage.orderContentRefer.getText();
			log.debug(orderContentRefer);
			log.debug("The orderContentRefer contents are as below " + orderContentRefer);

			String customerPaymentdetails = Agent_ConfirmationPage.customerPaymentdetails.getText();
			log.debug(customerPaymentdetails);
			log.debug("The basket customerPaymentdetails are as below " + customerPaymentdetails);
			Screenshots.captureScreenshot();

		}

		catch (Exception e) {
			if (driver.findElement(By.id("payDecline")).getText().contains("unsuccessful")) {
				String message = driver.findElement(By.id("payDecline")).getText();
				log.debug(message);

				// return message;

				if (message.contains("Try again")) {
					confirmation();

				}

			}
			Screenshots.captureScreenshot();

		}

	}

	private static void confirmation() throws Exception {
		String message = driver.findElement(By.id("payDecline")).getText();
		log.debug(message);

		fail("Payment didnt go through, and the text in the screen is " + message);
		Screenshots.captureScreenshot();

	}

	public static void SubmitOrder() throws Exception {
		// TODO Auto-generated method stub
		log.debug("Entered submit order method");
		Agent_ConfirmationPage.SubmitOrder.click();
		log.debug("Order submitted");
		log.debug("Order submitted");
		Screenshots.captureScreenshot();

	}
}
