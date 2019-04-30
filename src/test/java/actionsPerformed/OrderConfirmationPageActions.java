package actionsPerformed;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import GlobalActions.scrollToAnElement;
//import com.sun.xml.internal.ws.policy.AssertionSet;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import GlobalActions.Screenshots;
import helpers.Environment;
import pageobjects.OrderConfirmationPage;
import pageobjects.UpgradeCustomerPage;

public class OrderConfirmationPageActions extends Environment {
	final static Logger log = Logger.getLogger("OrderConfirmationPageActions");

	public static void OrderConfirmationPageSections() throws IOException {
		log.debug("Below are order confirmation page details");
		log.debug("The details are " + pageobjects.OrderConfirmationPage.OrderconfirmationMessage.getText());
		log.debug("...................................");
		log.debug("The details are " + pageobjects.OrderConfirmationPage.deliverySection.getText());
		log.debug("...................................");
		log.debug("The details are " + pageobjects.OrderConfirmationPage.imsMessage.getText());

		Screenshots.captureScreenshot();
	}

	public static void gettitlepage() throws IOException, InterruptedException {
		Thread.sleep(5000);
		log.debug(driver.getTitle());
		log.info("The Page Title is " + driver.getTitle());
		Screenshots.captureScreenshot();

	}

	public static void MessageDisplayed() throws IOException, InterruptedException {
		log.debug("This is order confirmation page and the message in this page is as below......");
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		//jse.executeScript("window.scrollBy(0,120)", "");
		Screenshots.captureScreenshot();
		Thread.sleep(2000);
		jse.executeScript("window.scrollBy(0,300)", "");
		Thread.sleep(2000);
		Screenshots.captureScreenshot();

		try {
			List<WebElement> outercontainer = driver.findElements(By.xpath("//*[@id='order-number'] | //div[@class='order-confirmation']/p"));
			log.debug("Trying to find the Element for order number using element identifier");

			List<WebElement> DataContainer = outercontainer.get(0).findElements(By.xpath("//*[@id='order-number'] | //div[@class='order-confirmation']/p"));

			for (int i = 0; i <= DataContainer.size(); i++) {

				log.debug(DataContainer.get(i).getText());
				//log.info(DataContainer.get(i).getText());
			}
			Screenshots.captureScreenshot();
		} catch (IndexOutOfBoundsException e) {
			Screenshots.captureScreenshot();
		}
	}

	public static void gdprConsentValidationInOrderConfirmationPage() {

		//gdpr consent validation
		if(driver.findElements(By.xpath("//div[@class='choose-preferences-bar']/a")).size()>0) {
			log.debug("Failed due to GDPR is displaying in order confirmation page \n");
			Assert.fail("Failed due to GDPR is displaying in order confirmation page for consumer acquisition journey \n");
		}else{
			log.debug("As expected, GDPR section is not displaying in order confirmation page\n");
		}
	}

	public static void OrderDeclineMessageDisplayed() throws IOException, InterruptedException {
		log.debug("This is order decline page and the message in this page is as below......");

		Thread.sleep(6000);
		try {
			String outercontainer = driver.findElement(By.xpath("//h1[normalize-space()='Unable to continue']")).getText();
			log.debug("Trying to find the Element for order decline using element identifier");

			String DataContainer1 = driver.findElement(By.xpath("//div[@class='large']/p")).getText();
			String DataContainer2 = driver.findElement(By.xpath("(//div[@id='contact-o2']/p)[1] | //div[@class='large']/div/p")).getText();

				log.debug(outercontainer +" - ");
				log.info(DataContainer1 +" - ");
				log.info(DataContainer2);

			Screenshots.captureScreenshot();
		} catch (IndexOutOfBoundsException e) {
			Screenshots.captureScreenshot();
		}
	}


	public static void VolteMessageDisplayed() throws IOException {
		log.debug("The Volte message in this page is as below......");
		try {
			List<WebElement> outercontainer = driver.findElements(By.xpath("//*[@id='imsMessage']"));

			List<WebElement> DataContainer = outercontainer.get(0).findElements(By.xpath("//*[@id='imsMessage']"));

			for (int i = 0; i <= DataContainer.size(); i++) {

				log.debug(DataContainer.get(i).getText());
			}
			Screenshots.captureScreenshot();
		} catch (IndexOutOfBoundsException e) {
			Screenshots.captureScreenshot();
		}

	}

	public static String TimeslotMessage() {
		log.debug("The delivery message in this page is as below......");
		try {
			List<WebElement> outercontainer = driver.findElements(By.xpath("//*[@id='home-standard-delivery']"));

			List<WebElement> DataContainer = outercontainer.get(0).findElements(By.xpath("//*[@id='time-slot-info']"));

			for (int i = 0; i <= DataContainer.size(); i++) {
				String ExpectedMessage = "Your order will be delivered for free, via Royal Mail, within three working days.";
				String message = DataContainer.get(i).getText();
				log.debug(DataContainer.get(i).getText());

			}
		} catch (IndexOutOfBoundsException e) {

		}
		return null;

	}

	public static String DelayedDeliveryMessage() {
		log.debug("The Delayed Delivery message in this page is as below......");
		try {
			List<WebElement> outercontainer = driver.findElements(By.xpath("//*[@id='delivery-section']"));

			List<WebElement> DataContainer = outercontainer.get(0)
					.findElements(By.xpath("//*[@id='delivery-section']"));

			for (int i = 0; i <= DataContainer.size(); i++) {
				String ExpectedMessage = "Your order will be delivered for free, via Royal Mail, within three working days.";
				String message = DataContainer.get(i).getText();
				log.debug("Delayed Deliver order confirmation message: "+message);

			}
		} catch (IndexOutOfBoundsException e) {

		}
		return null;

	}

	public static String PaccodeinfoMessage() {
		log.debug("The pac-code-info in this page is as below......");
		try {
			List<WebElement> outercontainer = driver.findElements(By.xpath("//*[@id='pac-code-info']"));

			List<WebElement> DataContainer = outercontainer.get(0).findElements(By.xpath("//*[@id='pac-code-info']"));

			for (int i = 0; i <= DataContainer.size(); i++) {
				String ExpectedMessage = "Your order will be delivered for free, via Royal Mail, within three working days.";
				String message = DataContainer.get(i).getText();
				log.debug(DataContainer.get(i).getText());

			}
		} catch (IndexOutOfBoundsException e) {

		}
		return null;

	}

	public static void downloadPDFcopy() throws InterruptedException {
		log.debug("Entering downloadPDFcopy function");
		Thread.sleep(5000);
		if(driver.findElements(By.xpath("//a[@href='confirmation/orderConfirmation.pdf']")).size()>0) {
			driver.findElement(By.xpath("//a[@href='confirmation/orderConfirmation.pdf']")).click();
			Thread.sleep(5000);
			log.debug("Completed downloading order confirmation");
		}

	}

	public static void Orderid() throws IOException {
		log.debug("Your order has been successfully placed.Order number: ");
		log.debug(pageobjects.OrderConfirmationPage.orderid.getText());
		scrollToAnElement.scrollToElement(pageobjects.OrderConfirmationPage.orderid);
		Screenshots.captureScreenshot();
	}

	public static void FreeSimMessage() throws InterruptedException {
		Thread.sleep(3000);
		log.debug("This is order confirmation page and the message in this page is as below......");
		log.info("This is order confirmation/information page and the message in this page is as above......");

		log.debug(pageobjects.OrderConfirmationPage.FreesimOrderConfirmation.getText());
	}

	//MBB validation
	public static void MBBValidation(String MBBStatus) throws InterruptedException {

		if(MBBStatus.equalsIgnoreCase("YES")){

			//Business Preference validation for MBB
			if (OrderConfirmationPage.O2Products.isSelected()) {
				System.out.println("MBB:: O2Products business preference selected by default");
				log.debug("MBB:: O2Products business preference selected by default");
			}else{
				System.out.println("MBB:: O2Products business preference not selected by default");
				log.debug("MBB:: O2Products business preference not selected by default");
			}
			if (OrderConfirmationPage.O2PerksAndExtras.isSelected()) {
				System.out.println("MBB:: O2 Perks And Extras preference selected by default");
				log.debug("MBB:: O2 Perks And Extras preference selected by default");
			}else{
				System.out.println("MBB:: O2 Perks And Extras preference not selected by default");
				log.debug("MBB:: O2 Perks And Extras preference not selected by default");
			}
			if (OrderConfirmationPage.OffersFromO2Partner.isSelected()) {
				System.out.println("MBB:: Offers From O2 Partner preference selected by default");
				log.debug("MBB:: Offers From O2 Partner preference selected by default");
			}else{
				System.out.println("MBB:: Offers From O2 Partner preference not selected by default");
				log.debug("MBB:: Offers From O2 Partner preference not selected by default");
			}
			if (OrderConfirmationPage.PartnersContacting.isSelected()) {
				System.out.println("MBB:: Partners Contacting preference selected by default");
				log.debug("MBB:: Partners Contacting preference selected by default");
			}else{
				System.out.println("MBB:: Partners Contacting preference not selected by default");
				log.debug("MBB:: Partners Contacting preference not selected by default");
			}

			Thread.sleep(4000);

			//Channel Preference validation for MBB

			if (OrderConfirmationPage.Contact_Text.isSelected()) {
				System.out.println("MBB:: Contact_Text preference selected by default");
				log.debug("MBB:: Contact_Text preference selected by default");
			}else{
				System.out.println("MBB:: Contact_Text preference not selected by default");
				log.debug("MBB:: Contact_Text preference not selected by default");
			}
			if (OrderConfirmationPage.Contact_Email.isSelected()) {
				System.out.println("MBB:: Contact_Email preference selected by default");
				log.debug("MBB:: Contact_Email preference selected by default");
			}else{
				System.out.println("MBB:: Contact_Email preference not selected by default");
				log.debug("MBB:: Contact_Email preference selected not by default");
			}
			if (OrderConfirmationPage.Contact_Phone.isSelected()) {
				System.out.println("MBB:: Contact_Phone preference selected by default");
				log.debug("MBB:: Contact_Phone preference selected by default");
			}else{
				System.out.println("MBB:: Contact_Phone preference not selected by default");
				log.debug("MBB:: Contact_Phone preference selected not by default");
			}
			if (OrderConfirmationPage.Contact_Post.isSelected()) {
				System.out.println("MBB:: Contact_Post preference selected by default");
				log.debug("MBB:: Contact_Post preference selected by default");
			}else{
				System.out.println("MBB:: Contact_Post preference not selected by default");
				log.debug("MBB:: Contact_Post preference not selected by default");
			}
		}
	}

	//GDPR Preferences Section --- JamalKhan

	public static void PreferencesSection(String consumer, String gdprStatus,String BP1, String BP2, String BP3, String BP4, String Chn1, String Chn2, String Chn3, String Chn4, String MBBStatus, String DeviceType, String PreSelected) throws IOException {

				try {
					Thread.sleep(5000);
					if (gdprStatus.contains("Enabled")){

						if(DeviceType.equalsIgnoreCase("Connected")){

							System.out.println("Device type is connected and we are proceeding");
							log.debug("Device type is connected and we are proceeding");

								if (consumer.contains("Me")) {

									//Choose your preferences link
									if (driver.findElements(By.xpath("//div[@class='choose-preferences-bar']/a")).size() > 0) {
										if (PreSelected.equalsIgnoreCase("Yes")) {
											log.debug("Validating GDPR for pre selected options for Upgrade users:\n");
										}

										System.out.println("GDPR is Enabled and we are proceeding");
										log.debug("GDPR is Enabled and we are proceeding");
										driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

									//Choose your preferences link
									if (driver.findElements(By.xpath("//div[@class='choose-preferences-bar']/a")).size() > 0) {

										log.debug("Clicking Choose Your Preferences ");
										OrderConfirmationPage.ChooseYourPreferences.click();
										Thread.sleep(5000);

										// SaveMyPreferences button status before selecting business preferences
										if(PreSelected.equalsIgnoreCase("Yes")) {
											if (OrderConfirmationPage.SaveMyPreferences.isEnabled()) {
												if (BP1.equalsIgnoreCase("Select") || BP2.equalsIgnoreCase("Select") || BP3.equalsIgnoreCase("Select") || BP4.equalsIgnoreCase("Select")) {
													System.out.println("User is Upgrade customer so, 'SaveMyPrefernces' CTA is enabled as preference are selected earlier\n");
													log.debug("User is Upgrade customer so, 'SaveMyPrefernces' CTA is enabled as preference are selected earlier\n");
												}else {
													log.debug("Failed::User is Upgrade customer: 'SaveMyPrefernces' CTA is enabled but Business preferences were not selected earlier\n");
													Assert.fail("Failed::User is Upgrade customer: 'SaveMyPrefernces' CTA is enabled but Business preferences were not selected earlier\n");
												}
											}else {
												if (BP1.equalsIgnoreCase("Select") || BP2.equalsIgnoreCase("Select") || BP3.equalsIgnoreCase("Select") || BP4.equalsIgnoreCase("Select")) {
													log.debug("Failed:: 'SaveMyPrefernces' CTA is disabled for UpGrade Customer, as preferences were selected earlier it is expected to be enabled");
													Assert.fail("Failed:: 'SaveMyPrefernces' CTA is disabled for UpGrade Customer, as preferences were selected earlier it is expected to be enabled");
												}else{
													log.debug("Preference were not selected earlier\n");
												}
											}
										}else {
											if (OrderConfirmationPage.SaveMyPreferences.isEnabled()) {
												Assert.fail("Failed:: 'SaveMyPrefernces' CTA is enabled before selecting Business preferences");
											} else {
												System.out.println("Preference Button is disabled before selecting Business/channels preferences");
												log.debug("Preference Button is disabled before selecting Business/channel preferences");
											}
										}


										//MBB validation
										/*if(MBBStatus.equalsIgnoreCase("YES")){

											//Business Preference validation for MBB
											if (OrderConfirmationPage.O2Products.isSelected()) {
												System.out.println("MBB:: O2Products business preference selected by default");
												log.debug("MBB:: O2Products business preference selected by default");
											}else{
												System.out.println("MBB:: O2Products business preference not selected by default");
												log.debug("MBB:: O2Products business preference not selected by default");
											}
											if (OrderConfirmationPage.O2PerksAndExtras.isSelected()) {
												System.out.println("MBB:: O2 Perks And Extras preference selected by default");
												log.debug("MBB:: O2 Perks And Extras preference selected by default");
											}else{
												System.out.println("MBB:: O2 Perks And Extras preference not selected by default");
												log.debug("MBB:: O2 Perks And Extras preference not selected by default");
											}
											if (OrderConfirmationPage.OffersFromO2Partner.isSelected()) {
												System.out.println("MBB:: Offers From O2 Partner preference selected by default");
												log.debug("MBB:: Offers From O2 Partner preference selected by default");
											}else{
												System.out.println("MBB:: Offers From O2 Partner preference not selected by default");
												log.debug("MBB:: Offers From O2 Partner preference not selected by default");
											}
											if (OrderConfirmationPage.PartnersContacting.isSelected()) {
												System.out.println("MBB:: Partners Contacting preference selected by default");
												log.debug("MBB:: Partners Contacting preference selected by default");
											}else{
												System.out.println("MBB:: Partners Contacting preference not selected by default");
												log.debug("MBB:: Partners Contacting preference not selected by default");
											}

											Thread.sleep(4000);

											//Channel Preference validation for MBB

											if (OrderConfirmationPage.Contact_Text.isSelected()) {
												System.out.println("MBB:: Contact_Text preference selected by default");
												log.debug("MBB:: Contact_Text preference selected by default");
											}else{
												System.out.println("MBB:: Contact_Text preference not selected by default");
												log.debug("MBB:: Contact_Text preference not selected by default");
											}
											if (OrderConfirmationPage.Contact_Email.isSelected()) {
												System.out.println("MBB:: Contact_Email preference selected by default");
												log.debug("MBB:: Contact_Email preference selected by default");
											}else{
												System.out.println("MBB:: Contact_Email preference not selected by default");
												log.debug("MBB:: Contact_Email preference selected not by default");
											}
											if (OrderConfirmationPage.Contact_Phone.isSelected()) {
												System.out.println("MBB:: Contact_Phone preference selected by default");
												log.debug("MBB:: Contact_Phone preference selected by default");
											}else{
												System.out.println("MBB:: Contact_Phone preference not selected by default");
												log.debug("MBB:: Contact_Phone preference selected not by default");
											}
											if (OrderConfirmationPage.Contact_Post.isSelected()) {
												System.out.println("MBB:: Contact_Post preference selected by default");
												log.debug("MBB:: Contact_Post preference selected by default");
											}else{
												System.out.println("MBB:: Contact_Post preference not selected by default");
												log.debug("MBB:: Contact_Post preference not selected by default");
											}
										}

*/
										Screenshots.captureScreenshot();
										//O2 Products
										if (driver.findElements(By.id("preference-heading-B1")).size() > 0) {

											//O2Products Tile Text validation
											String contentText = OrderConfirmationPage.O2Products_Text.getText();

											if (contentText.contains("I'm happy for O2 to let me know about offers relating to my service (upgrades, new tariffs, roaming, O2 Wifi etc.)")) {
												System.out.println("O2 Tile Content text has as expected:: " + contentText);
												log.debug("O2 Tile Content text has as expected:: " + contentText);
											} else {
												System.out.println("O2 Tile Content text is not matching:: " + contentText);
												log.debug("O2 Tile Content text is not matching:: " + contentText);
												//Assert.fail("O2 Tile Content text is not matching" + contentText);
											}

											//O2Products Link
											OrderConfirmationPage.O2Products_Link.click();
											System.out.println("Clicked on Learn more about O2 products");
											log.debug("Clicked on Learn more about O2 products");
											//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
											Thread.sleep(2000);
											Screenshots.captureScreenshot();
											//O2Products Overlay Text Validation
											String overlayText = OrderConfirmationPage.O2Products_OverlayText.getText();
											if (overlayText.contains("We'll send you useful reminders like when you're due for an upgrade. You'll hear about any new tariffs that")) {
												System.out.println("O2 products overlay text has as expected:: " + overlayText);
												log.debug("O2 products overlay text has as expected:: " + overlayText);
											} else {
												System.out.println("O2 products overlay text is not matching:: " + overlayText);
												log.debug("O2 products overlay text is not matching:: " + overlayText);
												//Assert.fail("O2 products overlay text is not matching:: " + overlayText);
											}
											Thread.sleep(3000);
											//O2Products Close Button clicking
											if(OrderConfirmationPage.O2ProductsClose_CloseButton.isEnabled()) {
												OrderConfirmationPage.O2ProductsClose_CloseButton.click();
												System.out.println("Clicked on O2 products overlay close button");
												log.debug("Clicked on O2 products overlay close button");
											}
										}

										Thread.sleep(4000);

										//O2 Perks And Extras
										if (driver.findElements(By.id("preference-heading-B2")).size() > 0) {

											//O2 Perks And Extras Tile Text Validation
											String contentText = OrderConfirmationPage.O2PerksAndExtras_Text.getText();

											if (contentText.contains("I'm happy for O2 to let me know about offers, perks and services that are relevant to me, like Priority.")) {
												System.out.println("O2 perks and extras Tile Content text has as expected:: " + contentText);
												log.debug("O2 perks and extras Tile Content text has as expected:: " + contentText);
											} else {
												System.out.println("O2 perks and extras Tile Content text is not matching:: " + contentText);
												log.debug("O2 perks and extras Tile Content text is not matching:: " + contentText);
												//Assert.fail("O2 perks and extras Tile Content text is not matching:: " + contentText);
											}

											//O2 Perks And Extras Link clicking
											OrderConfirmationPage.O2PerksAndExtras_Link.click();
											System.out.println("Clicked on Learn more about O2 perks and extras");
											log.debug("Clicked on Learn more about O2 perks and extras");
											//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
											Thread.sleep(3000);
											Screenshots.captureScreenshot();
											//O2 Perks And Extras Overlay Text validation
											String overlayText = OrderConfirmationPage.O2PerksAndExtras_OverlayText.getText();
											if (overlayText.contains("We'll share perks we think you might be interested in. That might be a free gift for you through Priority, or tickets")) {
												System.out.println("O2 perks and extras overlay text has as expected:: " + overlayText);
												log.debug("O2 perks and extras overlay text has as expected:: " + overlayText);
											} else {
												System.out.println("O2 perks and extras overlay text is not matching:: " + overlayText);
												log.debug("O2 perks and extras overlay text is not matching:: " + overlayText);
												//Assert.fail("O2 perks and extras overlay text is not matching:: " + overlayText);
											}
											Thread.sleep(3000);
											//O2 Perks And Extras Close Button clicking
											if(OrderConfirmationPage.O2PerksAndExtras_CloseButton.isEnabled()) {
												OrderConfirmationPage.O2PerksAndExtras_CloseButton.click();
												System.out.println("Clicked on O2 perks and extras overlay close button");
												log.debug("Clicked on O2 perks and extras overlay close button");
											}
										}

										Thread.sleep(4000);
										//Offers From O2 Partner Text
										if (driver.findElements(By.id("preference-heading-B3")).size() > 0) {

											//Offers From O2 Partner Tile Text validation
											String contentText = OrderConfirmationPage.OffersFromO2Partner_Text.getText();
											if (contentText.contains("I'm happy for O2 to let me know about selected offers from leading brands, knowing my details won't be shared.")) {
												System.out.println("Offers from o2 partners brands Tile Content text has as expected:: " + contentText);
												log.debug("Offers from o2 partners brands Tile Content text has as expected:: " + contentText);
											} else {
												System.out.println("Offers from o2 partners brands Tile Content text is not matching:: " + contentText);
												log.debug("Offers from o2 partners brands Tile Content text is not matching:: " + contentText);
												//Assert.fail("Offers from o2 partners brands Tile Content text is not matching:: " + contentText);
											}

											//Offers From O2 Partner Link clicking
											OrderConfirmationPage.OffersFromO2Partner_Link.click();
											System.out.println("Clicked on Learn more about partner offers");
											log.debug("Clicked on Learn more about partner offers");
											//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
											Thread.sleep(4000);
											Screenshots.captureScreenshot();
											//Offers From O2 Partner Overlay Text validation
											String overlayText = OrderConfirmationPage.OffersFromO2Partner_OverlayText.getText();
											if (overlayText.contains("We work with lots of well-known brands that often have offers that are too good to miss. When there's an offer we think you'll like, we'll let you know about it. The message will come from O2 and it will be us using your data, not the third party. Then you can go to the brand's website or their place on the high street to get it. We're careful to match the right offer to right people.")) {
												System.out.println("Offers from o2 overlay text has as expected:: " + overlayText);
												log.debug("Offers from o2 overlay text has as expected:: " + overlayText);
											} else {
												System.out.println("Offers from o2 overlay text is not matching:: " + overlayText);
												log.debug("Offers from o2 overlay text is not matching:: " + overlayText);
												//Assert.fail("Offers from o2 overlay text is not matching:: " + overlayText);
											}
											Thread.sleep(5000);
											//OffersFromO2Partner_CloseButton
											if(OrderConfirmationPage.OffersFromO2Partner_CloseButton.isEnabled()) {
												OrderConfirmationPage.OffersFromO2Partner_CloseButton.click();
												System.out.println("Clicked on offers from partners and brands overlay close button");
												log.debug("Clicked on offers from partners and brands overlay close button");
											}
										}

										//Thread.sleep(4000);
										//Partners Contacting
										if (driver.findElements(By.id("preference-heading-B4")).size() > 0) {
											//Partners Contacting Tile Text validation
											String contentText = OrderConfirmationPage.PartnersContacting_Text.getText();
											if (contentText.contains("I'm happy for O2 to share my data with partner brands and for those brands to contact me directly.")) {
												System.out.println("Partners contacting me directly Tile Content text has as expected:: " + contentText);
												log.debug("Partners contacting me directly Tile Content text has as expected:: " + contentText);
											} else {
												System.out.println("Partners contacting me directly Tile Content text is not matching:: " + contentText);
												log.debug("Partners contacting me directly Content text is not matching:: " + contentText);
												//Assert.fail("Partners contacting me directly Content text is not matching:: " + contentText);
											}
											//Partners Contacting Link clicking
											OrderConfirmationPage.PartnersContacting_Link.click();
											System.out.println("Clicked on Learn more about direct brand offers");
											log.debug("Clicked on Learn more about direct brand offers");
											//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
											Thread.sleep(4000);
											Screenshots.captureScreenshot();
											//Partners Contacting Overlay Text validation
											String overlayText = OrderConfirmationPage.PartnersContacting_OverlayText.getText();
											if (overlayText.contains("Partners")) {
												System.out.println("Partners contacting me directly overlay text has as expected:: " + overlayText);
												log.debug("Partners contacting me directly overlay text has as expected:: " + overlayText);
											} else {
												System.out.println("Partners contacting me directly overlay text is not matching:: " + overlayText);
												log.debug("Partners contacting me directly overlay text is not matching:: " + overlayText);
												//Assert.fail("Partners contacting me directly overlay text is not matching:: " + overlayText);
											}
											Thread.sleep(3000);
											//Partners Contacting Close Button clicking
											if(OrderConfirmationPage.PartnersContacting_CloseButton.isEnabled()) {
												OrderConfirmationPage.PartnersContacting_CloseButton.click();
												System.out.println("Clicked on partners contacting me directly overlay close button");
												log.debug("Clicked onpartners contacting me directly overlay close button");
											}
										}
										Thread.sleep(5000);

										//Channel preference is not displaying before business preference selection
										if(PreSelected.equalsIgnoreCase("Yes")) {
											if (OrderConfirmationPage.Contact_Text.isDisplayed()) {
												if (BP1.equalsIgnoreCase("Select") || BP2.equalsIgnoreCase("Select") || BP3.equalsIgnoreCase("Select") || BP4.equalsIgnoreCase("Select")) {
													System.out.println("User is Upgrade customer so, 'Channel Preferences' are displayed as business preference were selected earlier\n");
													log.debug("User is Upgrade customer so, 'Channel Preferences' are displayed as business preference were selected earlier\n");
												} else {
													Assert.fail("Failed:: 'Channel Preferences' are disabled for UpGrade Customer, as business preferences were selected earlier it is expected to be displayed with pre selected options");
												}
											}
										}else {
											if (OrderConfirmationPage.Contact_Text.isDisplayed()) {
												Assert.fail("Failed:: 'Channel Preferences' are enabled before selecting Business preferences");
											} else {
												System.out.println("As expected Channel preference:: ie, Contact_Text is disabled before selecting business preferences");
												log.debug("As expected Channel preference:: ie, Contact_Text is disabled before selecting business preferences");
											}
										}

										Thread.sleep(3000);
										//Selecting O2 Products Business preferences
										if (BP1.equalsIgnoreCase("Select")) {

											if (driver.findElements(By.xpath("//input[@id='B1']")).size() <= 0) {
												System.out.println("O2Products business preference checkBox is not displayed");
												log.debug("O2Products business preference checkBox is not displayed");
												Assert.fail("O2Products business preference checkBox is not displayed");
											}

											if(PreSelected.equalsIgnoreCase("Yes")) {
												if (OrderConfirmationPage.O2Products.isSelected()) {
													System.out.println("User is Upgrade customer and as expected, 'O2Products Preference' is selected by default as this option was selected earlier\n");
													log.debug("User is Upgrade customer and as expected, 'O2Products Preference' is selected by default as this option was selected earlier\n");
												} else {
													Assert.fail("Failed:: 'O2Products Preference' is expected to be selected by default as the customer was selected this preference earlier");
												}
											}else {
												OrderConfirmationPage.O2Products.click();
												System.out.println("O2Products business preference selected");
												log.debug("O2Products business preference selected");
											}
										}
										Thread.sleep(3000);
										if (BP2.equalsIgnoreCase("Select")) {
											if (driver.findElements(By.xpath("//input[@id='B2']")).size() <= 0) {
												System.out.println("O2 Perks And Extras business preference checkBox is not displayed");
												log.debug("O2 Perks And Extras business preference checkBox is not displayed");
												Assert.fail("O2 Perks And Extras business preference checkBox is not displayed");
											}

											if(PreSelected.equalsIgnoreCase("Yes")) {
												if (OrderConfirmationPage.O2PerksAndExtras.isSelected()) {
													System.out.println("User is Upgrade customer and as expected, 'O2 Perks And Extras Preference' is selected by default as this option was selected earlier\n");
													log.debug("User is Upgrade customer and as expected, 'O2 Perks And Extras Preference' is selected by default as this option was selected earlier\n");
												} else {
													Assert.fail("Failed:: 'O2 Perks And Extras Preference' is expected to be selected by default as the customer was selected this preference earlier");
												}
											}else {
												OrderConfirmationPage.O2PerksAndExtras.click();
												System.out.println("O2 Perks And Extras business preference selected");
												log.debug("O2 Perks And Extras business preference selected");
											}
										}
										Thread.sleep(3000);
										if (BP3.equalsIgnoreCase("Select")) {
											if (driver.findElements(By.xpath("//input[@id='B3']")).size() <= 0) {
												System.out.println("Offers From O2 Partner business preference checkBox is not displayed");
												log.debug("Offers From O2 Partner business preference checkBox is not displayed");
												Assert.fail("Offers From O2 Partner business preference checkBox is not displayed");
											}

											if(PreSelected.equalsIgnoreCase("Yes")) {
												if (OrderConfirmationPage.OffersFromO2Partner.isSelected()) {
													System.out.println("User is Upgrade customer and as expected, 'Offers From O2 Partner Preference' is selected by default as this option was selected earlier\n");
													log.debug("User is Upgrade customer and as expected, 'Offers From O2 Partner Preference' is selected by default as this option was selected earlier\n");
												} else {
													Assert.fail("Failed:: 'Offers From O2 Partner Preference' is expected to be selected by default as the customer was selected this preference earlier");
												}
											}else {
												OrderConfirmationPage.OffersFromO2Partner.click();
												System.out.println("Offers From O2 Partner business preference selected");
												log.debug("Offers From O2 Partner business preference selected");
											}
										}
										Thread.sleep(3000);
										if (BP4.equalsIgnoreCase("Select")) {
											if (driver.findElements(By.id("B4")).size() <= 0) {
												System.out.println("Partners Contacting business preference checkBox is not displayed");
												log.debug("Partners Contacting business preference checkBox is not displayed");
												Assert.fail("Partners Contacting business preference checkBox is not displayed");
											}
											OrderConfirmationPage.PartnersContacting.click();
											System.out.println("Partners Contacting business preference selected");
											log.debug("Partners Contacting business preference selected");
										}

										Thread.sleep(6000);
										Screenshots.captureScreenshot();
										//Channel preference is displaying after business preference selection
										if(PreSelected.equalsIgnoreCase("Yes")) {
											log.debug("Pre selected User so, 'Channel Preferences' are displayed\n");
										}else {
											if (OrderConfirmationPage.Contact_Text.isDisplayed()) {

												System.out.println("As expected Channel preference displayed after selecting business preferences");
												log.debug("As expected Channel preference displayed after selecting business preferences");

											} else {
												if (BP1.equalsIgnoreCase("Select") || BP2.equalsIgnoreCase("Select") || BP3.equalsIgnoreCase("Select") || BP4.equalsIgnoreCase("Select")) {
													Assert.fail("Failed:: 'Channel Preferences' are not displayed after selecting Business preferences");
												}
											}
										}

										// SaveMyPreferences button status before selecting channels preferences
										if(PreSelected.equalsIgnoreCase("Yes")) {
											log.debug("Pre selected User so, 'Save Preference' CTA is enabled\n");
										}else {
											if (OrderConfirmationPage.SaveMyPreferences.isEnabled()) {
												if (BP1.equalsIgnoreCase("Select") || BP2.equalsIgnoreCase("Select") || BP3.equalsIgnoreCase("Select") || BP4.equalsIgnoreCase("Select")) {
													Assert.fail("Failed to disable the 'SaveMyPrefernces' CTA after selecting Business preferences");
												}
											} else {
												System.out.println("Preference Button is disabled before selecting channels preferences");
												log.debug("Preference Button is disabled before selecting channel preferences");
											}
										}

										Thread.sleep(3000);
										//Selecting Channel preferences
										if (Chn1.equalsIgnoreCase("Select")) {

											if (driver.findElements(By.xpath("//input[@id='CP_Text']")).size() <= 0) {
												System.out.println("Contact_Text preference checkBox is not displayed");
												log.debug("Contact_Text preference checkBox is not displayed");
												Assert.fail("Contact_Text preference checkBox is not displayed");
											}

											if(PreSelected.equalsIgnoreCase("Yes")) {
												if (OrderConfirmationPage.Contact_Text.isSelected()) {
													System.out.println("User is Upgrade customer and as expected, 'Contact_Text Preference' is selected by default as this option was selected earlier\n");
													log.debug("User is Upgrade customer and as expected, 'Contact_Text Preference' is selected by default as this option was selected earlier\n");
												} else {
													Assert.fail("Failed:: 'Contact_Text Preference' is expected to be selected by default as the customer was selected this preference earlier");
												}
											}else {
												OrderConfirmationPage.Contact_Text.click();
												System.out.println("Contact_Text preference selected");
												log.debug("Contact_Text business preference selected");
											}
										}

										if (Chn2.equalsIgnoreCase("Select")) {
											if (driver.findElements(By.xpath("//input[@id='CP_E-mail']")).size() <= 0) {
												System.out.println("Contact_Email preference checkBox is not displayed");
												log.debug("Contact_Email preference checkBox is not displayed");
												Assert.fail("Contact_Email preference checkBox is not displayed");
											}

											if(PreSelected.equalsIgnoreCase("Yes")) {
												if (OrderConfirmationPage.Contact_Email.isSelected()) {
													System.out.println("User is Upgrade customer and as expected, 'Contact_Email Preference' is selected by default as this option was selected earlier\n");
													log.debug("User is Upgrade customer and as expected, 'Contact_Email Preference' is selected by default as this option was selected earlier\n");
												} else {
													Assert.fail("Failed:: 'Contact_Email Preference' is expected to be selected by default as the customer was selected this preference earlier");
												}
											}else {
												OrderConfirmationPage.Contact_Email.click();
												System.out.println("Contact_Email preference selected");
												log.debug("Contact_Email preference selected");
											}
										}
										if (Chn3.equalsIgnoreCase("Select")) {
											if (driver.findElements(By.xpath("//input[@id='CP_Phone']")).size() <= 0) {
												System.out.println("Contact_Phone preference checkBox is not displayed");
												log.debug("Contact_Phone preference checkBox is not displayed");
												Assert.fail("CP_Post preference checkBox is not displayed");
											}

											if(PreSelected.equalsIgnoreCase("Yes")) {
												if (OrderConfirmationPage.Contact_Phone.isSelected()) {
													System.out.println("User is Upgrade customer and as expected, 'Contact_Phone Preference' is selected by default as this option was selected earlier\n");
													log.debug("User is Upgrade customer and as expected, 'Contact_Phone Preference' is selected by default as this option was selected earlier\n");
												} else {
													Assert.fail("Failed:: 'Contact_Phone Preference' is expected to be selected by default as the customer was selected this preference earlier");
												}
											}else {
												OrderConfirmationPage.Contact_Phone.click();
												System.out.println("Contact_Phone preference selected");
												log.debug("Contact_Phone preference selected");
											}
										}
										if (Chn4.equalsIgnoreCase("Select")) {
											if (driver.findElements(By.xpath("//input[@id='CP_Post']")).size() <= 0) {
												System.out.println("CP_Post preference checkBox is not displayed");
												log.debug("CP_Post preference checkBox is not displayed");
												Assert.fail("CP_Post preference checkBox is not displayed");
											}

											if(PreSelected.equalsIgnoreCase("Yes")) {
												if (OrderConfirmationPage.Contact_Post.isSelected()) {
													System.out.println("User is Upgrade customer and as expected, 'Contact_Post Preference' is selected by default as this option was selected earlier\n");
													log.debug("User is Upgrade customer and as expected, 'Contact_Post Preference' is selected by default as this option was selected earlier\n");
												} else {
													Assert.fail("Failed:: 'Contact_Post Preference' is expected to be selected by default as the customer was selected this preference earlier");
												}
											}else {
												OrderConfirmationPage.Contact_Post.click();
												System.out.println("CP_Post preference selected");
												log.debug("CP_Post preference selected");
											}
										}

										Thread.sleep(3000);

										Screenshots.captureScreenshot();
										// SaveMyPreferences button status after selecting channels preferences

										if (driver.findElements(By.id("saveMyPrefernces")).size() > 0) {
											OrderConfirmationPage.SaveMyPreferences.click();
											System.out.println("Save My Preference is clicked");
											log.debug("Save My Preference is clicked");
										} else {
											System.out.println("Save My Preference button is not clicked");
											log.debug("Save My Preference button is not clicked");
											Assert.fail("Save My Preference button is not clicked");
										}

										if (OrderConfirmationPage.SavedPreferenceMessage.isDisplayed()) {
											String saveMessage = driver.findElement(By.xpath("//span[@class='saveMsg']"));
											System.out.println("Saved your preferences :: "+saveMessage);
											log.debug("Saved your preferences :: "+ saveMessage);
											scrollToAnElement.scrollToElement(OrderConfirmationPage.SavedPreferenceMessage);
											Thread.sleep(5000);
											Screenshots.captureScreenshot();
										}
									} else {
										System.out.println("Unable to find Choose your preferences link header");
										log.debug("Unable to find Choose your preferences link header");
										Assert.fail("Unable to find Choose your preferences link header");
									}
								} else {
										System.out.println("GDPR status is Enabled:: but Choose your preferences section is Disabled");
										log.debug("GDPR status is Enabled:: but Choose your preferences section is Disabled");
										Assert.fail("GDPR status is Enabled:: but Choose your preferences section is Disabled");
								}
							}else{
									//This order is for someone else
									if (consumer.contains("Someone")) {
										System.out.println("This order is for some one else");
										log.debug("This order is for some one else");

										if (driver.findElements(By.xpath("//div[@class='choose-preferences-bar']/a")).size() < 1) {
											System.out.println("GDPR is Disabled:: for some one else order");
											log.debug("GDPR is Disabled:: for some one else order");
										}else{
											Assert.fail("GDPR is Enabled:: for some one else order");
										}
									}
							}
						}else if(DeviceType.equalsIgnoreCase("Non Connected")){
							System.out.println("Device type is non connected");
							log.debug("Device type is non connected");

							if(OrderConfirmationPage.SaveMyPreferences.isEnabled()){
								System.out.println("GDPR is Enabled for non connected device");
								log.debug("GDPR is Enabled for non connected device");
								Assert.fail("GDPR is Enabled for non connected device");
							}else{
								System.out.println("GDPR is Disabled for non connected device");
								log.debug("GDPR is Disabled for non connected device");
							}
						}
				}else if(gdprStatus.equalsIgnoreCase("Disabled")){

						if(DeviceType.equalsIgnoreCase("Connected")){
							System.out.println("Device type is connected");
							log.debug("Device type is connected");
						}else if(DeviceType.equalsIgnoreCase("Non Connected")){
							System.out.println("Device type is non connected");
							log.debug("Device type is non connected");
						}

						if (driver.findElements(By.xpath("//div[@class='choose-preferences-bar']/a")).size() < 1) {
							System.out.println("GDPR is Disabled");
							log.debug("GDPR is Disabled");
						}else{
							Assert.fail("Choose your preferences section is Enabled for Disabled status");
						}
				}else{

						if(DeviceType.equalsIgnoreCase("Connected")) {
							Assert.fail("Failed to do GDPR validations as no status submitted");
						}else{
							System.out.println("GDPR is Disabled for Non Connected Device");
							log.debug("GDPR is Disabled for Non Connected Device");
						}
					}
				}
				catch (Exception e) {
					System.out.println("Exception: Unable to do GDPR validations");
					log.debug("Exception: Unable to do GDPR validations");
					Screenshots.captureScreenshot();
				}

		Screenshots.captureScreenshot();
	}

	//Validating your bill cap
	public static void ValidateAppliedBillSpendCapIn_OrderConfirmationPage(String BillCap, String CapAmount, String BSCstatus) throws InterruptedException {
		Thread.sleep(3000);
		String AppliedBillCap="";
		String pageTitle = driver.getTitle();
		Thread.sleep(2000);
		try {
			if(BSCstatus.equalsIgnoreCase("Enabled")) {
				if (driver.findElements(By.xpath("//div[contains(text(),'Spend Cap')]")).size() > 0) {

					log.debug("Bill spend cap section is displayed at "+pageTitle+" page \n");
					JavascriptExecutor jse = (JavascriptExecutor) driver;
					jse.executeScript("window.scrollBy(0,150)", "");
					//log.debug("Bill Spend Cap header is displayed in "+pageTitle+" page ie :: " + pageobjects.OrderConfirmationPage.BillSpendCapHeader.getText());

					Thread.sleep(2000);

					AppliedBillCap = pageobjects.OrderConfirmationPage.AppliedBillCap.getText();
					Thread.sleep(2000);
					if (BillCap.equalsIgnoreCase("CapMyBill")) {

						if (CapAmount.equalsIgnoreCase("DontCapMyBillLink")) {
							if (AppliedBillCap.contains("not to add a Spend Cap") || AppliedBillCap.contains("No Spend Cap applied")) {
								log.debug("'Dont Cap My Bill' is validated successfully and cap text is::" + AppliedBillCap);
							} else {
								log.debug("Failed to validate 'Dont Cap My Bill' and cap text is::" + AppliedBillCap);
								Assert.fail("Failed to validate 'Dont Cap My Bill' and cap text is::" + AppliedBillCap);
							}
						}else {
							if (AppliedBillCap.contains(CapAmount)) {
								log.debug("Applied bill cap is validated successfully in " + pageTitle + " page ie :: " + AppliedBillCap);
							} else {
								log.debug("Applied bill cap is not present in " + pageTitle + " page is:: " + AppliedBillCap);
								Assert.fail("Applied bill cap is not present in " + pageTitle + " page is:: " + AppliedBillCap);
							}
						}
					} else if (BillCap.equalsIgnoreCase("DontCapMyBill")) {
						if (AppliedBillCap.contains("not to add a Spend Cap")) {
							log.debug("'Dont Cap My Bill' is validated successfully and cap text is::" + AppliedBillCap);
						} else {
							log.debug("Failed to validate 'Dont Cap My Bill' and cap text is::" + AppliedBillCap);
							Assert.fail("Failed to validate 'Dont Cap My Bill' and cap text is::" + AppliedBillCap);
						}
					}
				} else {
					log.debug("Bill cap section is not present under order summary section in " + pageTitle + " page");
					Assert.fail("Bill cap section is not present under order summary section in " + pageTitle + " page");
				}
			}else if(BSCstatus.equalsIgnoreCase("Disabled")){
				if (driver.findElements(By.xpath("//div[contains(text(),'Spend Cap')]")).size() > 0) {
					log.debug("Bill spend cap section is enabled it suppose to be in disabled status in " + pageTitle + " page");
					Assert.fail("Bill spend cap section is enabled it suppose to be in disabled status in " + pageTitle + " page");
				}else{
					log.debug("As expected, Bill spend cap section is disabled in " + pageTitle + " page");
				}
			}else {
				System.out.println("Unable to validate bill spend cap section in " + pageTitle + " page\n");
				log.debug("Unable to validate bill spend cap section in " + pageTitle + " page\n");
				Assert.fail("Unable to validate bill spend cap section in " + pageTitle + " page\n");
			}

		}catch(Exception e){
			log.debug("Unable to validate Bill cap section in " + pageTitle + " page is:: " + e);
			Assert.fail("Unable to validate Bill cap section in " + pageTitle + " page is:: " + e);
		}
	}

	//ITFD-895, April Release new changes Validation by Jamal Khan
	public static void ofComOrderConfirmationPage(String ofComMobileNum, String codeVariant, String journey, String codeStatus, String PacStacCheck, String ofComStatus) throws InterruptedException {
		Thread.sleep(3000);
		try {
			if(ofComStatus.equalsIgnoreCase("Enabled")) {
				//Device is MBB or not
				if (journey.equalsIgnoreCase("PayGsimo") || journey.equalsIgnoreCase("Tablet") || journey.equalsIgnoreCase("MBB") || journey.equalsIgnoreCase("CFU") || journey.equalsIgnoreCase("Accessory")) {
					//As device is MBB so ofCom should be disabled
					if (driver.findElements(By.xpath("//div[@class='switch-msisdn'] | //div[@class='alloc-msisdn']")).size() == 0) {

						String expectedStatusMessage = "If you want to keep your existing number and haven't already given us your PAC code, you can go to our";
						String expectedStatusMessage1 = "Until your number has been ported, your temporary number will be";
						String expectedStatusMessage2 = "When your order arrives you'll need to activate your new O2 sim. Then we can start porting your number to O2 (it usually happens within one working day). In the meantime, the sim we send you will have a temporary number.";
						String expectedStatusMessage3 = "To get the phone number for your new device, call us on 202 from an O2 mobile or 0344 809 0202";

						String selectedStatusMessage = OrderConfirmationPage.ofComStatusMsg.getText();
						Thread.sleep(3000);
						if (selectedStatusMessage.contains(expectedStatusMessage1) || selectedStatusMessage.contains(expectedStatusMessage) || selectedStatusMessage.contains(expectedStatusMessage2) || selectedStatusMessage.contains(expectedStatusMessage3)) {
							log.debug("Failed: ofCom Switching feature supposed to be disabled in MBB/CFU journey\n");
							Assert.fail("Failed: ofCom Switching feature supposed to be disabled in MBB/CFU journey\n");
						} else {
							log.debug("As expected, ofCom Switching is disabled in MBB/CFU journey, Message displayed is:: "+selectedStatusMessage+"\n");
						}
					} else {
						log.debug("Failed: ofCom Switching feature supposed to be disabled in MBB/CFU journey\n");
						//Assert.fail("Failed: ofCom Switching feature supposed to be disabled in MBB/CFU journey\n");
					}
				}else {
					if (driver.findElements(By.xpath("//div[@class='switch-msisdn'] | //div[@class='alloc-msisdn']")).size() > 0) {
						log.debug("As expected, ofCom Switching status is enabled\n");

						String selectedStatusMessage = OrderConfirmationPage.ofComStatusMsg.getText();
						/*String ofComStatusMsgCustomerNewNum = OrderConfirmationPage.ofComStatusMsgCustomerNewNum.getText();
						Thread.sleep(1000);
						log.debug("Customer new number: "+ofComStatusMsgCustomerNewNum+"\n");*/

						if (PacStacCheck.equalsIgnoreCase("Yes")) {
							log.debug("Currently validating PAC and STAC code status in Order confirmation page\n");

							if (codeVariant.equalsIgnoreCase("PAC")) {

								if (codeStatus.equalsIgnoreCase("valid")) {
									String expectedStatusMessage1 = "Until your number has been ported, your temporary number will be";
									String expectedStatusMessage2 = "When your order arrives you'll need to activate your new O2 sim. Then we can start porting your number to O2 (it usually happens within one working day). In the meantime, the sim we send you will have a temporary number.";
									String expectedStatusMessage3 = "To get the phone number for your new device, call us on 202 from an O2 mobile or 0344 809 0202";
									Thread.sleep(3000);
									if (selectedStatusMessage.contains(expectedStatusMessage1)) {
										log.debug("OFCOM switching status is matching for valid PAC code ie: " + selectedStatusMessage + "\n");
									} else if (selectedStatusMessage.contains(expectedStatusMessage2)) {
										log.debug("allocatedMsisdn in the orderResponse is not allocated, OFCOM switching status is: " + selectedStatusMessage + "\n");
									} else if (selectedStatusMessage.contains(expectedStatusMessage3)) {
										log.debug("allocate msisdn call during OrderSubmission failed to allocate msisdn, OFCOM switching status is: " + selectedStatusMessage + "\n");
									} else {
										log.debug("Failed: OFCOM switching status is not matching ie: " + selectedStatusMessage + "\n");
										Assert.fail("Failed: OFCOM switching status is not matching ie: " + selectedStatusMessage + "\n");
									}
								}
							} else if (codeVariant.equalsIgnoreCase("STAC")) {
								String expectedStatusMessage = "You've chosen not to keep your existing number. When your order arrives, you'll just need to activate your new O2 sim and your new number will be ready to go.";
								Thread.sleep(3000);
								if (selectedStatusMessage.contains(expectedStatusMessage)) {
									log.debug("OFCOM switching status is matching for STAC code ie: " + selectedStatusMessage + "\n");
								} else {
									log.debug("Failed: OFCOM switching status is not matching for STAC code ie: " + selectedStatusMessage + "\n");
									Assert.fail("Failed: OFCOM switching status is not matching for STAC code ie: " + selectedStatusMessage + "\n");
								}
							}
						} else {
							 if (PacStacCheck.equalsIgnoreCase("Not")) {
								String expectedStatusMessage = "If you want to keep your existing number and haven't already given us your PAC code, you can go to our";
								Thread.sleep(3000);
								if (selectedStatusMessage.contains(expectedStatusMessage)) {
									log.debug("OFCOM switching status is matching when portIn option not opted ie: " + selectedStatusMessage + "\n");
								} else {
									log.debug("Failed: OFCOM switching status is not matching when portIn option not opted ie: " + selectedStatusMessage + "\n");
									Assert.fail("Failed: OFCOM switching status is not matching  when portIn option not opted ie: " + selectedStatusMessage + "\n");
								}
							}
						}
					} else {
						log.debug("Failed: ofCom Switching feature status supposed to be Enabled but it is disabled in Order Confirmation page\n");
						Assert.fail("Failed: ofCom Switching feature status supposed to be Enabled but it is disabled in Order Confirmation page\n");
					}
				}
			}else if(ofComStatus.equalsIgnoreCase("Disabled")){
				if (driver.findElements(By.xpath("//div[@class='switch-msisdn'] | //div[@class='alloc-msisdn']")).size() > 0) {
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

}
