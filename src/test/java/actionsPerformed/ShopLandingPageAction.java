package actionsPerformed;

import java.awt.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.*;

import GlobalActions.CommonUtilities;
import GlobalActions.Screenshots;
import helpers.Environment;
import org.openqa.selenium.Point;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pageobjects.ShopLandingPage;

public class ShopLandingPageAction extends Environment {
	final static Logger log = Logger.getLogger("ShopLandingPageAction");
	static JavascriptExecutor js = (JavascriptExecutor)driver;

	public static void GetTitle_ref() {
		//later on need to comment the code
		try {
			//driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			Thread.sleep(10000);
			WebElement ele1111 = driver.findElement(By.xpath("//ul[@class='linksDesktop']/li[@name='Shop']"));
			Actions act = new Actions(driver);
			//new WebDriverWait(driver, 60).until(ExpectedConditions.visibilityOf(ele));
			act.moveToElement(ele1111).build().perform();
			//driver.findElement(By.xpath("//ul[@class='linksDesktop']/li[@name='Shop']")).click();
			Thread.sleep(3000);
			Actions act1 = new Actions(driver);
			WebElement ele2 = driver.findElement(By.xpath("//a[@data-parent='Shop' and text()='Pay Monthly sims']"));
			//act1.moveToElement(ele2).build().perform();
			ele2.click();
			Thread.sleep(3000);
			log.debug(" Current URL is : " + driver.getCurrentUrl());
			driver.manage().timeouts().implicitlyWait(1, TimeUnit.MINUTES);
			Screenshots.captureScreenshot();

		} catch (Exception e) {
			log.debug("While navigating the with new updated ref Env , getting error as :: " + e.getMessage());
		}
	}


	public static void GetTitle() throws IOException {
		log.debug("Currently in Shop Home page");
		String Ele1 = driver.getTitle();
		log.debug("The Page title is " + Ele1);
		log.debug("We are in the Shop Home page");
		log.debug("The Page title is " + Ele1);
		Screenshots.captureScreenshot();

	}

	public static void clickSignIn() throws IOException {
		log.debug("Clicking on Sign in button");
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", ShopLandingPage.SignInLink);
		Screenshots.captureScreenshot();

	}

	public static void clickSignOut() throws IOException {
		log.debug("Clicking on Sign out button");
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", ShopLandingPage.SignOutLink);
		Screenshots.captureScreenshot();
	}

	public static void closePopUpIfDisplayed() throws IOException {
		List<WebElement> PopUpClose = driver.findElements((By) pageobjects.ShopLandingPage.ClosePopUp);
		if (PopUpClose.size() > 0) {
			log.debug("Pop up is displayed - hence closing it");
			PopUpClose.get(0).click();
		} else {
			log.debug("Pop up is not displayed");
		}
		Screenshots.captureScreenshot();
	}

	public static void CookiesPopUpDisplayed() throws IOException {
		List<WebElement> Cookies = driver.findElements(By.xpath("//*[@class='heading']"));
		if (Cookies.size() > 0) {
			log.debug("Cookies pop up is displayed and the cookie is dropped in the page");
			log.debug("Cookies pop up is displayed and the cookie is dropped in the page");
			/*
			log.debug("Clicking on the cookie pop up");
			WebElement element = ShopLandingPage.CookieClose;
			JavascriptExecutor executor = (JavascriptExecutor)driver;
			executor.executeScript("arguments[0].click();", element);
			log.debug("Clicking on the cookie pop up");
			//ShopLandingPage.CookiePopUp.click();
			*/
		} else {
			log.debug("The cookie pop is not displayed");

		}
		Screenshots.captureScreenshot();

	}
/*Below added by vinu */

	public static void cookiePolicySelect() throws IOException {
		//Below will click on the cookie policy
		CommonUtilities.clickWebElement(ShopLandingPage.CookiesPolicyClick);
		Screenshots.captureScreenshot();

	}

	public static void cookiePolicyValidate() throws IOException, InterruptedException {
		log.debug(driver.getTitle());
		String oldTab = driver.getWindowHandle();
		ArrayList<String> newTab = new ArrayList(driver.getWindowHandles());
		newTab.remove(oldTab);
		//Change focus to newTab
		driver.switchTo().window(newTab.get(0));
		log.debug("The new tab title is "+driver.getTitle());
		log.debug(driver.getCurrentUrl());
		String url = driver.getCurrentUrl();
		log.debug("url contains cookies - > "+url.contains("cookie"));
		Thread.sleep(5000);
		driver.close();
		driver.switchTo().window(oldTab);
		log.debug(driver.getCurrentUrl());
		Screenshots.captureScreenshot();

	}
	public static void clickManageCookies() throws IOException {
		//Below will click on the cookie policy
		CommonUtilities.clickWebElement(ShopLandingPage.ManageCookiesClick);
		Screenshots.captureScreenshot();

	}

	public static void manageCookieyValidate() throws IOException, InterruptedException {
		log.debug(driver.getTitle());
		String oldTab = driver.getWindowHandle();
		ArrayList<String> newTab = new ArrayList(driver.getWindowHandles());
		newTab.remove(oldTab);
		//Change focus to newTab
		driver.switchTo().window(newTab.get(0));
		log.debug("The new tab title is "+driver.getTitle());
		log.debug(driver.getCurrentUrl());
		String url = driver.getCurrentUrl();
		log.debug("url contains cookies - > "+url.contains("managing"));
		Thread.sleep(5000);
		driver.close();
		driver.switchTo().window(oldTab);
		log.debug(driver.getCurrentUrl());
		Screenshots.captureScreenshot();

	}

	public static void closeCookie() throws IOException, InterruptedException {
		//Below will click on the cookie policy
		CommonUtilities.clickWebElement(ShopLandingPage.CookieClose);
		Thread.sleep(5000);
		int test = driver.findElements(By.xpath("//p[contains(text(),'Cookies on O2')]")).size();
		log.debug(test);
		if(test>0)
		{
			log.debug("cookies popup is present");
		}
		else
		{
			log.debug("Cookies popup is not present");
		}


		Screenshots.captureScreenshot();

	}

	public static void CookiepopupValidation() throws IOException {
		//Below will click on the cookie policy
		CommonUtilities.VerifyElementExist_withoutAssert(ShopLandingPage.CookieSection);
		log.debug("Cookie section validation is completed");
		Screenshots.captureScreenshot();

	}


}



