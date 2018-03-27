package actionsPerformed;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import GlobalActions.Screenshots;
import helpers.Environment;

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

}
