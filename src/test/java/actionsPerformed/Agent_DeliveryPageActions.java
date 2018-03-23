package actionsPerformed;

import java.io.IOException;

import org.apache.log4j.Logger;

import GlobalActions.Screenshots;
import helpers.Environment;
import pageobjects.Agent_DeliveryDetailsPage;

public class Agent_DeliveryPageActions extends Environment {

	final static Logger log = Logger.getLogger("Agent_DeliveryPageActions");

	/*
	 * //this method used to perform click action on the Agent Home Page
	 * 
	 * public static void ElementClickAction(String elementname) { // TODO
	 * Auto-generated method stub log.debug("Agent_Home_Page_Action");
	 * log.debug("Agent Delivery page validation");
	 * 
	 * if(elementname!=null) { switch (elementname.toLowerCase()) { case
	 * "AgreeAdvsioryCheck":
	 * pageobjects.Agent_Deliverydetails.AgreeAdvsioryCheck.click(); break;
	 * 
	 * }
	 * 
	 * } }
	 * 
	 */
	/*************************
	 * Vinu Edited below
	 *
	 * @throws InterruptedException
	 * @throws IOException
	 ***********************/

	public static void Set_Bank_details(String Username) throws IOException, InterruptedException {

		Agent_DeliveryDetailsPage.AccountName.sendKeys(Username);
		log.debug("Entered name is " + Username);

		Agent_DeliveryDetailsPage.AccountNumber.sendKeys("10207136");
		log.debug("Entered Account number - 10207136");

		Agent_DeliveryDetailsPage.SortCode.sendKeys("201596");
		log.debug("Entered sort code - 201596");

		pageobjects.Agent_DeliveryDetailsPage.CardCapture.click();
		log.debug("Card Cature Link is clicked");

		pageobjects.Agent_DeliveryDetailsPage.AgreeCreditCheck.click();
		log.debug("Clicked on the Accept Terms checkbox");
		Screenshots.captureScreenshot();

	}
}
