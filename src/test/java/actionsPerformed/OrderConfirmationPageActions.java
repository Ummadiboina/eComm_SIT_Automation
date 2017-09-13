package actionsPerformed;

import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import helpers.Environment;

public class OrderConfirmationPageActions extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");

	public static void OrderConfirmationPageSections() {
		log.debug("Below are order confirmation page details");
		log.debug("The details are " + pageobjects.OrderConfirmationPage.OrderconfirmationMessage.getText());
		log.debug("...................................");
		log.debug("The details are " + pageobjects.OrderConfirmationPage.deliverySection.getText());
		log.debug("...................................");
		log.debug("The details are " + pageobjects.OrderConfirmationPage.imsMessage.getText());
		System.out.println("The details are " + pageobjects.OrderConfirmationPage.OrderconfirmationMessage.getText());
		System.out.println("...................................");
		System.out.println(pageobjects.OrderConfirmationPage.deliverySection.getText());
		System.out.println("...................................");
		System.out.println(pageobjects.OrderConfirmationPage.imsMessage.getText());

	}

	public static void gettitlepage() {

		System.out.println(driver.getTitle());
		log.info("The Page Title is " + driver.getTitle());

	}

	public static void MessageDisplayed() {
		System.out.println("This is order confirmation page and the message in this page is as below......");
		log.info("This is order confirmation/information page and the message in this page is as above......");

		try {
			List<WebElement> outercontainer = driver.findElements(By.xpath("//*[@id='order-number']"));
			log.debug("Trying to find the Element for order number using element identifier");

			List<WebElement> DataContainer = outercontainer.get(0).findElements(By.xpath("//*[@id='order-number']"));

			for (int i = 0; i <= DataContainer.size(); i++) {

				System.out.println(DataContainer.get(i).getText());
				log.info(DataContainer.get(i).getText());
			}
		} catch (IndexOutOfBoundsException e) {

		}
	}

	public static void VolteMessageDisplayed() {
		System.out.println("The Volte message in this page is as below......");
		try {
			List<WebElement> outercontainer = driver.findElements(By.xpath("//*[@id='imsMessage']"));

			List<WebElement> DataContainer = outercontainer.get(0).findElements(By.xpath("//*[@id='imsMessage']"));

			for (int i = 0; i <= DataContainer.size(); i++) {

				System.out.println(DataContainer.get(i).getText());
			}
		} catch (IndexOutOfBoundsException e) {

		}

	}

	public static void FreeSimMessage() {
		System.out.println("This is order confirmation page and the message in this page is as below......");
		log.info("This is order confirmation/information page and the message in this page is as above......");

		System.out.println(pageobjects.OrderConfirmationPage.FreesimOrderConfirmation.getText());
	}
	
	public static String TimeslotMessage() {
		System.out.println("The delivery message in this page is as below......");
		try {
			List<WebElement> outercontainer = driver.findElements(By.xpath("//*[@id='home-standard-delivery']"));

			List<WebElement> DataContainer = outercontainer.get(0).findElements(By.xpath("//*[@id='time-slot-info']"));

			for (int i = 0; i <= DataContainer.size(); i++) {
				String ExpectedMessage= "Your order will be delivered for free, via Royal Mail, within three working days.";
				String message=DataContainer.get(i).getText();
				System.out.println(DataContainer.get(i).getText());

				
			}
		} catch (IndexOutOfBoundsException e) {

		}
		return null;

	}

	public static String DelayedDeliveryMessage() {
		System.out.println("The Delayed Delivery message in this page is as below......");
		try {
			List<WebElement> outercontainer = driver.findElements(By.xpath("//*[@id='delivery-section']"));

			List<WebElement> DataContainer = outercontainer.get(0).findElements(By.xpath("//*[@id='delivery-section']"));

			for (int i = 0; i <= DataContainer.size(); i++) {
				String ExpectedMessage= "Your order will be delivered for free, via Royal Mail, within three working days.";
				String message=DataContainer.get(i).getText();
				System.out.println(DataContainer.get(i).getText());

				
			}
		} catch (IndexOutOfBoundsException e) {

		}
		return null;

	}
	
	public static String PaccodeinfoMessage() {
		System.out.println("The pac-code-info in this page is as below......");
		try {
			List<WebElement> outercontainer = driver.findElements(By.xpath("//*[@id='pac-code-info']"));

			List<WebElement> DataContainer = outercontainer.get(0).findElements(By.xpath("//*[@id='pac-code-info']"));

			for (int i = 0; i <= DataContainer.size(); i++) {
				String ExpectedMessage= "Your order will be delivered for free, via Royal Mail, within three working days.";
				String message=DataContainer.get(i).getText();
				System.out.println(DataContainer.get(i).getText());

				
			}
		} catch (IndexOutOfBoundsException e) {

		}
		return null;

	}
	
	public static void downloadPDFcopy() {
		System.out.println("Entering downloadPDFcopy function");
		driver.findElement(By.xpath("//a[@href='orderConfirmation.pdf']")).click();
		System.out.println("Completed downloading order confirmation");

	}
	

}
