package actionsPerformed;

import static org.testng.Assert.fail;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;

import GlobalActions.Screenshots;
import helpers.Environment;
import org.testng.Assert;
import pageobjects.Agent_ConfirmationPage;
import pageobjects.OrderConfirmationPage;

import java.io.IOException;

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

	//ITFD-895, April Release new changes Validation by Jamal Khan
	public static void ofComOrderConfirmationPage(String ofComMobileNum, String codeVariant, String journey, String codeStatus, String PacStacCheck, String ofComStatus) {

		try {
			if(ofComStatus.equalsIgnoreCase("Enabled")) {

				//Device is MBB or not
				if (journey.equalsIgnoreCase("MBB") || journey.equalsIgnoreCase("AFU") || journey.equalsIgnoreCase("Accessory")) {
					//As device is MBB so ofCom should be disabled
					if (driver.findElements(By.xpath("//div[@class='ofComTextToSwitch']")).size() == 0) {
						log.debug("As expected, ofCom Switching is disabled in MBB/CFU journey\n");
					} else {
						log.debug("Failed: ofCom Switching feature supposed to be disabled in MBB/CFU journey\n");
						Assert.fail("Failed: ofCom Switching feature supposed to be disabled in MBB/CFU journey\n");
					}
				}else {
					if (driver.findElements(By.xpath("ofCommStatusDisable")).size() > 0) {
						log.debug("As expected, ofCom Switching status is enabled\n");

						if (PacStacCheck.equalsIgnoreCase("Yes")) {
							log.debug("Currently validating PAC and STAC code status in Order confirmation page\n");

							String selectedStatusMessage = Agent_ConfirmationPage.ofComStatusMsg.getText();

							if (codeVariant.equalsIgnoreCase("PAC")) {

								if (codeStatus.equalsIgnoreCase("valid")) {
									String expectedStatusMessage1 = "You’ve chosen to keep your number " + ofComMobileNum + ". Until your number has been ported, your temporary number will be";
									String expectedStatusMessage2 = "You’ve chosen to keep your number: " + ofComMobileNum + ". When your order arrives you’ll need to activate your new O2 sim. Then we can start porting your number to O2 (it usually happens within one working day). In the meantime, the sim we send you will have a temporary number.";
									Thread.sleep(2000);
									if (selectedStatusMessage.contains(expectedStatusMessage1)) {
										log.debug("OFCOM switching status is matching ie: " + selectedStatusMessage + "\n");
									} else if (selectedStatusMessage.contains(expectedStatusMessage2)) {
										log.debug("allocatedMsisdn in the orderResponse is not allocated, OFCOM switching status is: " + selectedStatusMessage + "\n");
									} else {
										log.debug("Failed: OFCOM switching status is not matching ie: " + selectedStatusMessage + "\n");
										Assert.fail("Failed: OFCOM switching status is not matching ie: " + selectedStatusMessage + "\n");
									}
								} else if (codeStatus.equalsIgnoreCase("Invalid")) {
									String expectedStatusMessage = "If you want to keep your existing number and haven’t already given us your PAC code, you can go to our";
									Thread.sleep(3000);
									if (selectedStatusMessage.contains(expectedStatusMessage)) {
										log.debug("OFCOM switching status is matching ie: " + selectedStatusMessage + "\n");
									} else {
										log.debug("Failed: OFCOM switching status is not matching ie: " + selectedStatusMessage + "\n");
										Assert.fail("Failed: OFCOM switching status is not matching ie: " + selectedStatusMessage + "\n");
									}
								}
							} else if (codeVariant.equalsIgnoreCase("STAC")) {
								String expectedStatusMessage = "You’ve chosen not to keep your existing number. When your order arrives, you’ll just need to activate your new O2 sim and your new number will be ready to go.";
								Thread.sleep(3000);
								if (selectedStatusMessage.contains(expectedStatusMessage)) {
									log.debug("OFCOM switching status is matching for STAC code ie: " + selectedStatusMessage + "\n");
								} else {
									log.debug("Failed: OFCOM switching status is not matching for STAC code ie: " + selectedStatusMessage + "\n");
									Assert.fail("Failed: OFCOM switching status is not matching for STAC code ie: " + selectedStatusMessage + "\n");
								}
							}
						}
					} else {
						log.debug("Failed: ofCom Switching feature status supposed to be Enabled but it is disabled in Order Confirmation page\n");
						org.testng.Assert.fail("Failed: ofCom Switching feature status supposed to be Enabled but it is disabled in Order Confirmation page\n");
					}
				}
			}else if(ofComStatus.equalsIgnoreCase("Disabled")){
				if (driver.findElements(By.xpath("//div[contains(text(),'ofComStatusMsg')]")).size() > 0) {
					log.debug("Failed:: ofCom Switching status is enabled, it should be disable when Feature is disabled\n");
					Assert.fail("Failed:: ofCom Switching status is enabled, it should be disable when Feature is disabled\n");
				}else{
					log.debug("As expected, ofCom Switching status is disabled\n");
				}
			}
		}catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void validateOfComErrorInAgent(String codeStatus) throws InterruptedException, IOException {

			log.debug("We are back to delivery page as the info provided is incorrect\n");

			if(driver.findElements(By.xpath("//label[@id='pacnpac-error']")).size()>0) {
				if (Agent_ConfirmationPage.emptyPACSTACcodeError.isDisplayed()) {
					String errorPACSTACCode = Agent_ConfirmationPage.emptyPACSTACcodeError.getText();
					Thread.sleep(2000);
					Screenshots.captureScreenshot();
					if(codeStatus.equalsIgnoreCase("Expired")) {
						if (errorPACSTACCode.equals("This code has expired. Request another one and try again.")) {
							log.debug("As expected, error message is generated for expired PAC/STAC code ie: " + errorPACSTACCode + "\n");
						} else {
							log.debug("Error message generated for expired PAC/STAC code is not matching ie: " + errorPACSTACCode + "\n");
							Assert.fail("Error message generated for expired PAC/STAC code is not matching ie: " + errorPACSTACCode + "\n");
						}
					}else if(codeStatus.equalsIgnoreCase("Invalid")) {
						if (errorPACSTACCode.equals("This code doesn't exist. Request another one and try again.")) {
							log.debug("As expected, error message is generated for Invalid PAC/STAC code ie: " + errorPACSTACCode + "\n");
						} else {
							log.debug("Error message generated for Invalid PAC/STAC code is not matching ie: " + errorPACSTACCode + "\n");
							Assert.fail("Error message generated for Invalid PAC/STAC code is not matching ie: " + errorPACSTACCode + "\n");
						}
					}else if(codeStatus.equalsIgnoreCase("Cancelled")) {
						if (errorPACSTACCode.equals("This code is cancelled. Request another one and try again.")) {
							log.debug("As expected, error message is generated for Cancelled PAC/STAC code ie: " + errorPACSTACCode + "\n");
						} else {
							log.debug("Error message generated for Cancelled PAC/STAC code is not matching ie: " + errorPACSTACCode + "\n");
							Assert.fail("Error message generated for Cancelled PAC/STAC code is not matching ie: " + errorPACSTACCode + "\n");
						}
					}else if(codeStatus.equalsIgnoreCase("Locked")) {
						if (errorPACSTACCode.equals("This code is locked. Request another one and try again.")) {
							log.debug("As expected, error message is generated for Locked PAC/STAC code ie: " + errorPACSTACCode + "\n");
						} else {
							log.debug("Error message generated for Locked PAC/STAC code is not matching ie: " + errorPACSTACCode + "\n");
							Assert.fail("Error message generated for Locked PAC/STAC code is not matching ie: " + errorPACSTACCode + "\n");
						}
					}else if(codeStatus.equalsIgnoreCase("Archived")) {
						if (errorPACSTACCode.contains("This code is Archived.")) {
							log.debug("As expected, error message is generated for Archived PAC/STAC code ie: " + errorPACSTACCode + "\n");
						} else {
							log.debug("Error message generated for Archived PAC/STAC code is not matching ie: " + errorPACSTACCode + "\n");
							Assert.fail("Error message generated for Archived PAC/STAC code is not matching ie: " + errorPACSTACCode + "\n");
						}
					}
				}
			}

	}

}
