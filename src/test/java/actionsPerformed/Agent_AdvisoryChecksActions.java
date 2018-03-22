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

	public static void AgreeAdvsioryCheck() throws InterruptedException {

		System.out.println("Going to Click on Advisory checks");
		Thread.sleep(4000);

		//Agent_AdvisoryPage.AgreeAdvsioryCheckYes.click();
		WebElement element = pageobjects.Agent_AdvisoryPage.AgreeAdvsioryCheckYes;
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", element);
		log.debug("Clicked on Advisory checks");
		System.out.println("Clicked on Advisory checks");
		Thread.sleep(3000);
		//Screenshots.captureScreenshot();
	}


	public static void AgreeAdvsioryCheck_new() throws InterruptedException {

		System.out.println("Going to Click on Advisory checks");
		Thread.sleep(4000);
		if (Agent_AdvisoryPage.ccaEmail.isDisplayed()) {
			Agent_AdvisoryPage.ccaEmail.sendKeys(Keys.CLEAR);
			Agent_AdvisoryPage.ccaEmail.sendKeys("ramjkljldklld@gmail.com");
			Agent_AdvisoryPage.houseNum.sendKeys("4");
			Agent_AdvisoryPage.postalCode.sendKeys("sl11er");
			Agent_AdvisoryPage.findAddressBtn.click();
			Thread.sleep(6000);
			Agent_AdvisoryPage.slectAddress1.click();
			Thread.sleep(3000);
			Agent_AdvisoryPage.yesBtn.click();
		} else {
			System.out.println("Failed in the Advisery Checks");
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