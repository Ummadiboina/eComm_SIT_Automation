package actionsPerformed;

import java.io.IOException;

import org.apache.log4j.Logger;

import GlobalActions.Screenshots;
import helpers.Environment;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import pageobjects.Agent_AdvisoryPage;

public class Agent_AdvisoryChecksActions extends Environment {

	final static Logger log = Logger.getLogger("Agent_AdvisoryChecksActions");


	// this method used to perform click action on the Agent Home Page

	public static void AgreeAdvsioryCheck() throws InterruptedException, IOException {

		log.debug("Going to Click on Advisory checks");
		Thread.sleep(4000);

		//Agent_AdvisoryPage.AgreeAdvsioryCheckYes.click();
		WebElement element = pageobjects.Agent_AdvisoryPage.AgreeAdvsioryCheckYes;
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", element);
		log.debug("Clicked on Advisory checks");
		Screenshots.captureScreenshot();
		Thread.sleep(3000);

	}


	public static void AgreeAdvsioryCheck_new() throws InterruptedException, IOException {

		System.out.println("Going to Click on Advisory checks");
		log.debug("Going to Click on Advisory checks");
		Thread.sleep(4000);
		if (Agent_AdvisoryPage.ccaEmail.isDisplayed()) {
			//Agent_AdvisoryPage.ccaEmail.sendKeys(Keys.CLEAR);
			Thread.sleep(2000);
			//Agent_AdvisoryPage.ccaEmail.sendKeys(Keys.CONTROL,"a",Keys.DELETE);
			//Thread.sleep(2000);
			//Agent_AdvisoryPage.ccaEmail.sendKeys("ramjkljldklld@gmail.com");
			//log.debug("Entered email is at Advisory checks page");
			Agent_AdvisoryPage.houseNum.sendKeys("4");
			log.debug("Entered house number at Advisory checks");
			Agent_AdvisoryPage.postalCode.sendKeys("sl11er");
			log.debug("Entered postal code Advisory checks page");
			Agent_AdvisoryPage.findAddressBtn.click();
			log.debug("Find address CTA clicked at Advisory checks page");
			Thread.sleep(6000);
			Agent_AdvisoryPage.slectAddress1.click();
			log.debug("Selected address at Advisory checks page");
			Thread.sleep(3000);
			Screenshots.captureScreenshot();
			Agent_AdvisoryPage.yesBtn.click();
			log.debug("Clicked Yes CTA at Advisory checks page");
		} else {
			System.out.println("Failed in the Advisery Checks page");
		}


		/*//Agent_AdvisoryPage.AgreeAdvsioryCheckYes.click();
		WebElement element = pageobjects.Agent_AdvisoryPage.AgreeAdvsioryCheckYes;
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", element);
		log.debug("Clicked on Advisory checks");
		System.out.println("Clicked on Advisory checks");
		Thread.sleep(3000);
		//Screenshots.captureScreenshot();
	}*/

		}
}