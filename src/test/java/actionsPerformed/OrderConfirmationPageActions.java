package actionsPerformed;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
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

	//GDPR Preferences Section

	public static void PreferencesSection(String BP1, String BP2, String BP3, String BP4, String Chn1, String Chn2, String Chn3, String Chn4) throws IOException, InterruptedException {

		try{

			if(OrderConfirmationPage.ChooseYourPreferences.isDisplayed()) {

				log.debug("Clicking Choose Your Preferences ");
				driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

				OrderConfirmationPage.ChooseYourPreferences.click();
				Thread.sleep(5000);

				if(driver.findElements(By.xpath("//div[@data-label='Hotspot - O2 products']")).size()>0) {

					String text1 = driver.findElement(By.xpath("//div[@data-label='check1']//p/span")).getText();
					System.out.println(text1);
					log.debug(text1);
					driver.findElement(By.xpath("//div[@data-label='Hotspot - O2 products']")).click();
					System.out.println("Clicked on Learn more about O2 products");
					log.debug("Clicked on Learn more about O2 products");
					driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
					Screenshots.captureScreenshot();
					driver.findElement(By.xpath("//div[@data-label='Close button - O2 products']")).click();
					System.out.println("Clicked on O2 products overlay close button");
					log.debug("Clicked on O2 products overlay close button");

				}

				if(driver.findElements(By.xpath("//div[@data-label='Hotspot - O2 perks and extras']")).size()>0) {

					String text2 = driver.findElement(By.xpath("//div[@data-label='check2']//p/span")).getText();
					System.out.println(text2);
					log.debug(text2);
					driver.findElement(By.xpath("//div[@data-label='Hotspot - O2 perks and extras']")).click();
					System.out.println("Clicked on Learn more about O2 perks and extras");
					log.debug("Clicked on Learn more about O2 perks and extras");
					driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
					Screenshots.captureScreenshot();
					driver.findElement(By.xpath("//div[@data-label='Close button - O2 perks and extras']")).click();
					System.out.println("Clicked on O2 perks and extras overlay close button");
					log.debug("Clicked on O2 perks and extras overlay close button");

				}

				if(driver.findElements(By.xpath("//div[@data-label='Hotspot - offers from o2 partners brands']")).size()>0) {

					String text3 = driver.findElement(By.xpath("//div[@data-label='check3']//p/span")).getText();
					System.out.println(text3);
					log.debug(text3);
					driver.findElement(By.xpath("//div[@data-label='Hotspot - offers from o2 partners brands']")).click();
					System.out.println("Clicked on Learn more about partner offers");
					log.debug("Clicked on Learn more about partner offers");
					driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
					Screenshots.captureScreenshot();
					driver.findElement(By.xpath("//div[@data-label='Close button - offers from partners and brands']")).click();
					System.out.println("Clicked on offers from partners and brands overlay close button");
					log.debug("Clicked on offers from partners and brands overlay close button");

				}

				if(driver.findElements(By.xpath("//div[@data-label='Hotspot - partners contacting me directly']")).size()>0) {

					String text4 = driver.findElement(By.xpath("//div[@data-label='check4']//p/span")).getText();
					System.out.println(text4);
					log.debug(text4);
					driver.findElement(By.xpath("//div[@data-label='Hotspot - partners contacting me directly']")).click();
					System.out.println("Clicked on Learn more about direct brand offers");
					log.debug("Clicked on Learn more about direct brand offers");
					driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
					Screenshots.captureScreenshot();
					driver.findElement(By.xpath("//div[@data-label='Close button - partners contacting me directly']")).click();
					System.out.println("Clicked on partners contacting me directly overlay close button");
					log.debug("Clicked onpartners contacting me directly overlay close button");

				}

				//Selecting Business preferences
				if (BP1.equalsIgnoreCase("Select")) {
					OrderConfirmationPage.O2Products.click();
					System.out.println("O2Products business preference selected");
					log.debug("O2Products business preference selected");
				}
				if (BP2.equalsIgnoreCase("Select")) {
					OrderConfirmationPage.O2PerksAndExtras.click();
					System.out.println("O2PerksAndExtras business preference selected");
					log.debug("O2PerksAndExtras business preference selected");
				}
				if (BP3.equalsIgnoreCase("Select")) {
					OrderConfirmationPage.OffersFromO2Partner.click();
					System.out.println("OffersFromO2Partner business preference selected");
					log.debug("OffersFromO2Partner business preference selected");
				}
				if (BP4.equalsIgnoreCase("Select")) {
					OrderConfirmationPage.PartnersContacting.click();
					System.out.println("PartnersContacting business preference selected");
					log.debug("PartnersContacting business preference selected");
				}

				Thread.sleep(4000);

				if(!OrderConfirmationPage.SaveMyPreferences.isDisplayed()) {
					System.out.println("Preference Button is dissable before selcting channel preferences");
					log.debug("Preference Button is dissable before selcting channel preferences");
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

				if(OrderConfirmationPage.SaveMyPreferences.isDisplayed()) {
					OrderConfirmationPage.SaveMyPreferences.click();
					System.out.println("Save My Preference clicked");
					log.debug("Save My Preference clicked");
				}

				if (driver.findElements(By.xpath("//img[@id='u1306_img']")).size() > 0) {
					System.out.println("Saved your preferences");
					log.debug("Saved your preferences");
				}
			}else
			{
				System.out.println("Unable to find Choose your preferences link header");
				log.debug("Unable to find Choose your preferences link header");
			}

	}catch(Exception e){

			log.debug("Unable to save your preferences");
		}

		Screenshots.captureScreenshot();
	}

}
