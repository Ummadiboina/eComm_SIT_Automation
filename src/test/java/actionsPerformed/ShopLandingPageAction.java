package actionsPerformed;

import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;

import helpers.Environment;
import pageobjects.ShopLandingPage;

public class ShopLandingPageAction extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");

	public static void GetTitle() {
		System.out.println("Currently in Shop Home page");
		String Ele1 = driver.getTitle();
		System.out.println("The Page title is " + Ele1);
		log.debug("We are in the Shop Home page");
		log.debug("The Page title is " + Ele1);

	}

	public static void clickSignIn() {
		System.out.println("Clicking on Sign in button");
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", ShopLandingPage.SignInLink);

	}

	public static void clickSignOut() {
		log.debug("Clicking on Sign out button");
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", ShopLandingPage.SignOutLink);
	}
}
