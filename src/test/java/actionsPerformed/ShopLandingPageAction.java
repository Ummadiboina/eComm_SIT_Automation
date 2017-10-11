package actionsPerformed;

import java.io.IOException;
import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import GlobalActions.Screenshots;
import helpers.Environment;
import pageobjects.ShopLandingPage;

public class ShopLandingPageAction extends Environment {
	final static Logger log = Logger.getLogger("ShopLandingPageAction");

	public static void GetTitle() throws IOException, InterruptedException {
		System.out.println("Currently in Shop Home page");
		String Ele1 = driver.getTitle();
		System.out.println("The Page title is " + Ele1);
		log.debug("We are in the Shop Home page");
		log.debug("The Page title is " + Ele1);
		Screenshots.captureScreenshot();

	}

	public static void clickSignIn() throws IOException, InterruptedException {
		System.out.println("Clicking on Sign in button");
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", ShopLandingPage.SignInLink);
		Screenshots.captureScreenshot();

	}

	public static void clickSignOut() throws IOException, InterruptedException {
		log.debug("Clicking on Sign out button");
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", ShopLandingPage.SignOutLink);
		Screenshots.captureScreenshot();
	}

	public static void closePopUpIfDisplayed() throws IOException, InterruptedException {
		List<WebElement> PopUpClose = driver.findElements((By) pageobjects.ShopLandingPage.ClosePopUp);
		if (PopUpClose.size() > 0) {
			System.out.println("Pop up is displayed - hence closing it");
			PopUpClose.get(0).click();
		} else {
			System.out.println("Pop up is not displayed");
		}
		Screenshots.captureScreenshot();
	}
}
