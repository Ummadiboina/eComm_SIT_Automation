package actionsPerformed;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import GlobalActions.Screenshots;
import helpers.Environment;
import pageobjects.OrderConfirmationPage;

public class OrderConfirmationPageActions extends Environment {
	final static Logger log = Logger.getLogger("OrderConfirmationPageActions");

	public static void OrderConfirmationPageSections() throws IOException, InterruptedException {
		log.debug("Below are order confirmation page details");
		log.debug("The details are " + pageobjects.OrderConfirmationPage.OrderconfirmationMessage.getText());
		log.debug("...................................");
		log.debug("The details are " + pageobjects.OrderConfirmationPage.deliverySection.getText());
		log.debug("...................................");
		log.debug("The details are " + pageobjects.OrderConfirmationPage.imsMessage.getText());
		log.debug("The details are " + pageobjects.OrderConfirmationPage.OrderconfirmationMessage.getText());
		log.debug("...................................");
		log.debug(pageobjects.OrderConfirmationPage.deliverySection.getText());
		log.debug("...................................");
		log.debug(pageobjects.OrderConfirmationPage.imsMessage.getText());
		Screenshots.captureScreenshot();
	}

	public static void gettitlepage() throws IOException, InterruptedException {

		log.debug(driver.getTitle());
		log.info("The Page Title is " + driver.getTitle());
		Screenshots.captureScreenshot();

	}

	public static void MessageDisplayed() throws IOException, InterruptedException {
		log.debug("This is order confirmation page and the message in this page is as below......");
		log.info("This is order confirmation/information page and the message in this page is as above......");

		try {
			List<WebElement> outercontainer = driver.findElements(By.xpath("//*[@id='order-number']"));
			log.debug("Trying to find the Element for order number using element identifier");

			List<WebElement> DataContainer = outercontainer.get(0).findElements(By.xpath("//*[@id='order-number']"));

			for (int i = 0; i <= DataContainer.size(); i++) {

				log.debug(DataContainer.get(i).getText());
				log.info(DataContainer.get(i).getText());
			}
			Screenshots.captureScreenshot();
		} catch (IndexOutOfBoundsException e) {
			Screenshots.captureScreenshot();
		}
	}

	public static void VolteMessageDisplayed() throws IOException, InterruptedException {
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
				log.debug(DataContainer.get(i).getText());

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

	public static void downloadPDFcopy() {
		log.debug("Entering downloadPDFcopy function");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//a[@href='confirmation/orderConfirmation.pdf']")).click();
		log.debug("Completed downloading order confirmation");

	}

	public static void Orderid() {
		log.debug("Your order has been successfully placed.Order number: ");
		log.info("Your order has been successfully placed.Order number: ");
		log.debug(pageobjects.OrderConfirmationPage.orderid.getText());
	}

	public static void FreeSimMessage() {
		log.debug("This is order confirmation page and the message in this page is as below......");
		log.info("This is order confirmation/information page and the message in this page is as above......");

		log.debug(pageobjects.OrderConfirmationPage.FreesimOrderConfirmation.getText());
	}

	//GDPR Preferences Section --- JamalKhan

	public static void PreferencesSection(String customer,String BP1, String BP2, String BP3, String BP4, String Chn1, String Chn2, String Chn3, String Chn4) throws IOException, InterruptedException {

				try {

					if (!customer.contains("Disabled") && driver.findElements(By.xpath("(//span[normalize-space()='Choose your preferences'])[1]")).size() > 0) {
						System.out.println("GDPR is Enabled and we are proceeding");
						log.debug("GDPR is Enabled and we are proceeding");

						if (customer.contains("Me")) {
							driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

							//Choose your preferences link
							if (driver.findElements(By.xpath("(//span[normalize-space()='Choose your preferences'])[1]")).size() > 0) {

								log.debug("Clicking Choose Your Preferences ");
								OrderConfirmationPage.ChooseYourPreferences.click();
								Thread.sleep(5000);

								// SaveMyPreferences button status before selecting business preferences
								if (driver.findElements(By.xpath("//span[normalize-space()='Save my preferences")).size()<=0) {
									System.out.println("Preference Button is disabled before selecting business preferences");
									log.debug("Preference Button is disabled before selecting business preferences");
								}

								//O2 Products
								if (driver.findElements(By.xpath("//div[@data-label='Hotspot - O2 products']")).size() > 0) {

									//O2Products Tile Text validation
									String contentText = OrderConfirmationPage.O2Products_Text.getText();
									if (contentText.contains("I'm happy for O2 to let me know about offers relating to my service(upgrades, new tariffs, roaming, O2 Wifi etc.)")) {
										System.out.println("O2 Tile Content text has as expected:: " + contentText);
										log.debug("O2 Tile Content text has as expected:: " + contentText);
									} else {
										System.out.println("O2 Tile Content text is not matching:: " + contentText);
										log.debug("O2 Tile Content text is not matching:: " + contentText);
										Assert.fail("O2 Tile Content text is not matching" + contentText);
									}

									//O2Products Link
									OrderConfirmationPage.O2Products_Link.click();
									System.out.println("Clicked on Learn more about O2 products");
									log.debug("Clicked on Learn more about O2 products");
									//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
									Thread.sleep(2000);

									//O2Products Overlay Text Validation
									String overlayText = OrderConfirmationPage.O2Products_OverlayText.getText();
									if (overlayText.contains("")) {
										System.out.println("O2 products overlay text has as expected:: " + overlayText);
										log.debug("O2 products overlay text has as expected:: " + overlayText);
									} else {
										System.out.println("O2 products overlay text is not matching:: " + overlayText);
										log.debug("O2 products overlay text is not matching:: " + overlayText);
										Assert.fail("O2 products overlay text is not matching:: " + overlayText);
									}

									//O2Products Close Button clicking
									OrderConfirmationPage.O2ProductsClose_CloseButton.click();
									System.out.println("Clicked on O2 products overlay close button");
									log.debug("Clicked on O2 products overlay close button");

								}

								//O2 Perks And Extras
								if (driver.findElements(By.xpath("//div[@data-label='Hotspot - O2 perks and extras']")).size() > 0) {

									//O2 Perks And Extras Tile Text Validation
									String contentText = OrderConfirmationPage.O2PerksAndExtras_Text.getText();
									if (contentText.contains("I'm happy for O2 to let me know about offers, perks and services that are relevant to me, like Priority.")) {
										System.out.println("O2 perks and extras Tile Content text has as expected:: " + contentText);
										log.debug("O2 perks and extras Tile Content text has as expected:: " + contentText);
									} else {
										System.out.println("O2 perks and extras Tile Content text is not matching:: " + contentText);
										log.debug("O2 perks and extras Tile Content text is not matching:: " + contentText);
										Assert.fail("O2 perks and extras Tile Content text is not matching:: " + contentText);
									}

									//O2 Perks And Extras Link clicking
									OrderConfirmationPage.O2PerksAndExtras_Link.click();
									System.out.println("Clicked on Learn more about O2 perks and extras");
									log.debug("Clicked on Learn more about O2 perks and extras");
									driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

									//O2 Perks And Extras Overlay Text validation
									String overlayText = OrderConfirmationPage.O2PerksAndExtras_OverlayText.getText();
									if (overlayText.contains("")) {
										System.out.println("O2 perks and extras overlay text has as expected:: " + overlayText);
										log.debug("O2 perks and extras overlay text has as expected:: " + overlayText);
									} else {
										System.out.println("O2 perks and extras overlay text is not matching:: " + overlayText);
										log.debug("O2 perks and extras overlay text is not matching:: " + overlayText);
										Assert.fail("O2 perks and extras overlay text is not matching:: " + overlayText);
									}

									//O2 Perks And Extras Close Button clicking
									OrderConfirmationPage.O2PerksAndExtras_CloseButton.click();
									System.out.println("Clicked on O2 perks and extras overlay close button");
									log.debug("Clicked on O2 perks and extras overlay close button");

								}

								//Offers From O2 Partner Text
								if (driver.findElements(By.xpath("//div[@data-label='Hotspot - offers from o2 partners brands']")).size() > 0) {

									//Offers From O2 Partner Tile Text validation
									String contentText = OrderConfirmationPage.OffersFromO2Partner_Text.getText();
									if (contentText.contains("I'm happy for O2 to let me know about selected offers from leading brands, knowing my details won't be shared.")) {
										System.out.println("Offers from o2 partners brands Tile Content text has as expected:: " + contentText);
										log.debug("Offers from o2 partners brands Tile Content text has as expected:: " + contentText);
									} else {
										System.out.println("Offers from o2 partners brands Tile Content text is not matching:: " + contentText);
										log.debug("Offers from o2 partners brands Tile Content text is not matching:: " + contentText);
										Assert.fail("Offers from o2 partners brands Tile Content text is not matching:: " + contentText);
									}

									//Offers From O2 Partner Link clicking
									OrderConfirmationPage.OffersFromO2Partner_Link.click();
									System.out.println("Clicked on Learn more about partner offers");
									log.debug("Clicked on Learn more about partner offers");
									driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

									//Offers From O2 Partner Overlay Text validation
									String overlayText = OrderConfirmationPage.OffersFromO2Partner_OverlayText.getText();
									if (overlayText.contains("")) {
										System.out.println("Offers from o2 overlay text has as expected:: " + overlayText);
										log.debug("Offers from o2 overlay text has as expected:: " + overlayText);
									} else {
										System.out.println("Offers from o2 overlay text is not matching:: " + overlayText);
										log.debug("Offers from o2 overlay text is not matching:: " + overlayText);
										Assert.fail("Offers from o2 overlay text is not matching:: " + overlayText);
									}

									//OffersFromO2Partner_CloseButton
									OrderConfirmationPage.OffersFromO2Partner_CloseButton.click();
									System.out.println("Clicked on offers from partners and brands overlay close button");
									log.debug("Clicked on offers from partners and brands overlay close button");

								}

								//Partners Contacting
								if (driver.findElements(By.xpath("//div[@data-label='Hotspot - partners contacting me directly']")).size() > 0) {

									//Partners Contacting Tile Text validation
									String contentText = OrderConfirmationPage.PartnersContacting_Text.getText();
									if (contentText.contains("I'm happy for O2 to share my data with partner brands and for those brands to contact me directly.")) {
										System.out.println("Partners contacting me directly Tile Content text has as expected:: " + contentText);
										log.debug("Partners contacting me directly Tile Content text has as expected:: " + contentText);
									} else {
										System.out.println("Partners contacting me directly Tile Content text is not matching:: " + contentText);
										log.debug("Partners contacting me directly Content text is not matching:: " + contentText);
										Assert.fail("Partners contacting me directly Content text is not matching:: " + contentText);
									}
									//Partners Contacting Link clicking
									OrderConfirmationPage.PartnersContacting_Link.click();
									System.out.println("Clicked on Learn more about direct brand offers");
									log.debug("Clicked on Learn more about direct brand offers");
									driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

									//Partners Contacting Overlay Text validation
									String overlayText = OrderConfirmationPage.PartnersContacting_OverlayText.getText();
									if (overlayText.contains("")) {
										System.out.println("Partners contacting me directly overlay text has as expected:: " + overlayText);
										log.debug("Partners contacting me directly overlay text has as expected:: " + overlayText);
									} else {
										System.out.println("Partners contacting me directly overlay text is not matching:: " + overlayText);
										log.debug("Partners contacting me directly overlay text is not matching:: " + overlayText);
										Assert.fail("Partners contacting me directly overlay text is not matching:: " + overlayText);
									}

									//Partners Contacting Close Button clicking
									OrderConfirmationPage.PartnersContacting_CloseButton.click();
									System.out.println("Clicked on partners contacting me directly overlay close button");
									log.debug("Clicked onpartners contacting me directly overlay close button");

								}

								//Channel preference is not displaying before business preference selection
								if (driver.findElements(By.xpath("//div[@data-label='checkcontact1']/input")).size() < 1) {
									System.out.println("As expected Channel preference Contact_Text is disabled before selecting business preferences");
									log.debug("As expected Channel preference Contact_Text is disabled before selecting business preferences");
								}

								//Selecting O2 Products Business preferences
								if (BP1.equalsIgnoreCase("Select")) {

									if (driver.findElements(By.xpath("//div[@data-label='check1']/input")).size() <= 0) {
										System.out.println("O2Products business preference is not displayed");
										log.debug("O2Products business preference is not displayed");
									}
									OrderConfirmationPage.O2Products.click();
									System.out.println("O2Products business preference selected");
									log.debug("O2Products business preference selected");
								}

								if (BP2.equalsIgnoreCase("Select")) {
									if (driver.findElements(By.xpath("//div[@data-label='check2']/input")).size() <= 0) {
										System.out.println("O2 Perks And Extras business preference is not displayed");
										log.debug("O2 Perks And Extras business preference is not displayed");
									}
									OrderConfirmationPage.O2PerksAndExtras.click();
									System.out.println("O2 Perks And Extras business preference selected");
									log.debug("O2 Perks And Extras business preference selected");
								}

								if (BP3.equalsIgnoreCase("Select")) {
									if (driver.findElements(By.xpath("//div[@data-label='check3']/input")).size() <= 0) {
										System.out.println("Offers From O2 Partner business preference is not displayed");
										log.debug("Offers From O2 Partner business preference is not displayed");
									}
									OrderConfirmationPage.OffersFromO2Partner.click();
									System.out.println("Offers From O2 Partner business preference selected");
									log.debug("Offers From O2 Partner business preference selected");
								}

								if (BP4.equalsIgnoreCase("Select")) {
									if (driver.findElements(By.xpath("//div[@data-label='check4']/input")).size() <= 0) {
										System.out.println("Partners Contacting business preference is not displayed");
										log.debug("Partners Contacting business preference is not displayed");
									}
									OrderConfirmationPage.PartnersContacting.click();
									System.out.println("Partners Contacting business preference selected");
									log.debug("Partners Contacting business preference selected");
								}

								Thread.sleep(4000);

								// SaveMyPreferences button status before selecting channels preferences
								if (driver.findElements(By.xpath("//span[normalize-space()='Save my preferences")).size()<=0) {
									System.out.println("Preference Button is disabled before selecting channels preferences");
									log.debug("Preference Button is disabled before selecting channel preferences");
								}

								//Selecting Channel preferences
								if (Chn1.equalsIgnoreCase("Select")) {
									OrderConfirmationPage.Contact_Text.click();
									System.out.println("Contact_Text preference selected");
									log.debug("Contact_Text business preference selected");
								}
								if (Chn2.equalsIgnoreCase("Select")) {
									OrderConfirmationPage.Contact_Email.click();
									System.out.println("Contact_Email preference selected");
									log.debug("Contact_Email preference selected");
								}
								if (Chn3.equalsIgnoreCase("Select")) {
									OrderConfirmationPage.Contact_Phone.click();
									System.out.println("Contact_Phone preference selected");
									log.debug("Contact_Phone preference selected");
								}
								if (Chn4.equalsIgnoreCase("Select")) {
									OrderConfirmationPage.Contact_Post.click();
									System.out.println("Contact_Post preference selected");
									log.debug("Contact_Post preference selected");
								}

								driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

								// SaveMyPreferences button status after selecting channels preferences
								if (driver.findElements(By.xpath("//span[normalize-space()='Save my preferences")).size()>0) {
									OrderConfirmationPage.SaveMyPreferences.click();
									System.out.println("Save My Preference clicked");
									log.debug("Save My Preference clicked");
								} else {
									System.out.println("Save My Preference button is not clicked");
									log.debug("Save My Preference button is not clicked");
									Assert.fail("Save My Preference button is not clicked");
								}

								if (driver.findElements(By.xpath("//img[@id='u1306_img']")).size() > 0) {
									System.out.println("Saved your preferences");
									log.debug("Saved your preferences");
								}
							} else {
								System.out.println("Unable to find Choose your preferences link header");
								log.debug("Unable to find Choose your preferences link header");
								Assert.fail("Unable to find Choose your preferences link header");
							}
						} else {

							//This order is for someone else
							if (customer.contains("Someone")) {
								System.out.println("This order is for some one else");
								log.debug("This order is for some one else");
							}
						}
					}else{
						System.out.println("GDPR is Disabled");
						log.debug("GDPR is Disabled");
					}

				}catch (Exception e) {
					System.out.println("Unable to find Choose your preferences link header");
					log.debug("Unable to find Choose your preferences link header");
					Screenshots.captureScreenshot();
				}
		Screenshots.captureScreenshot();
	}

}
