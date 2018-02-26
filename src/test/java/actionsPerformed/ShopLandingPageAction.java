package actionsPerformed;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import GlobalActions.CommonUtilities;
import GlobalActions.Screenshots;
import helpers.Environment;
import org.openqa.selenium.interactions.Actions;
import pageobjects.ShopLandingPage;

public class ShopLandingPageAction extends Environment {
	final static Logger log = Logger.getLogger("ShopLandingPageAction");
	static JavascriptExecutor js = (JavascriptExecutor)driver;



	public static void GetTitle_ref() throws IOException, InterruptedException {
		//later on need to comment the code
		try {

			driver.manage().timeouts().implicitlyWait(5, TimeUnit.MINUTES);

			WebElement ele = driver.findElement(By.xpath("//li[@name='Shop']/a"));
			Actions act = new Actions(driver);
			act.moveToElement(ele).build().perform();
			Thread.sleep(1000);
			driver.findElement(By.xpath("//a[@data-parent='Shop' and text()='Pay Monthly sims']")).click();
			System.out.println("clicked on pay monthly sims link");
			Thread.sleep(3000);
			System.out.println(" Current URL is : " + driver.getCurrentUrl());
			driver.manage().timeouts().implicitlyWait(5, TimeUnit.MINUTES);
			Screenshots.captureScreenshot();

		} catch (Exception e) {
		System.out.println("While navigating the with new updated ref Env , getting error as :: " + e.getMessage());
		}
	}
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

	public static void CookiesPopUpDisplayed() throws IOException, InterruptedException {
		List<WebElement> Cookies = driver.findElements(By.xpath("//*[@class='heading']"));
		if (Cookies.size() > 0) {
			System.out.println("Cookies pop up is displayed and the cookie is dropped in the page");
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
			System.out.println("The cookie pop is not displayed");

		}
		Screenshots.captureScreenshot();

	}
/*Below added by vinu */

	public static void cookiePolicySelect() throws IOException, InterruptedException {
	//Below will click on the cookie policy
		CommonUtilities.clickWebElement(ShopLandingPage.CookiesPolicyClick);
		Screenshots.captureScreenshot();

	}

	public static void cookiePolicyValidate() throws IOException, InterruptedException {
		System.out.println(driver.getTitle());
		String oldTab = driver.getWindowHandle();
		ArrayList<String> newTab = new ArrayList(driver.getWindowHandles());
		newTab.remove(oldTab);
		//Change focus to newTab
		driver.switchTo().window(newTab.get(0));
		System.out.println("The new tab title is "+driver.getTitle());
		System.out.println(driver.getCurrentUrl());
		String url = driver.getCurrentUrl();
		System.out.println("url contains cookies - > "+url.contains("cookie"));
		Thread.sleep(5000);
		driver.close();
		driver.switchTo().window(oldTab);
		System.out.println("The current URL is: "+driver.getCurrentUrl());
		Screenshots.captureScreenshot();

	}
	public static void clickManageCookies() throws IOException, InterruptedException {
		//Below will click on the cookie policy
		CommonUtilities.clickWebElement(ShopLandingPage.ManageCookiesClick);
		Screenshots.captureScreenshot();

	}

	public static void manageCookieyValidate() throws IOException, InterruptedException {
		System.out.println(driver.getTitle());
		String oldTab = driver.getWindowHandle();
		ArrayList<String> newTab = new ArrayList(driver.getWindowHandles());
		newTab.remove(oldTab);
		//Change focus to newTab
		driver.switchTo().window(newTab.get(0));
		System.out.println("The new tab title is "+driver.getTitle());
		System.out.println(driver.getCurrentUrl());
		String url = driver.getCurrentUrl();
		System.out.println("url contains cookies - > "+url.contains("managing"));
		Thread.sleep(5000);
		driver.close();
		driver.switchTo().window(oldTab);
		System.out.println(driver.getCurrentUrl());
		Screenshots.captureScreenshot();

	}

	public static void closeCookie() throws IOException, InterruptedException {
		//Below will click on the cookie policy
		CommonUtilities.clickWebElement(ShopLandingPage.CookieClose);
		Thread.sleep(5000);
		int test = driver.findElements(By.xpath("//p[contains(text(),'Cookies on O2')]")).size();
		System.out.println(test);
		if(test>0)
		{
			System.out.println("cookies popup is present");
		}
		else
		{
			System.out.println("Cookies popup is not present");
		}


		Screenshots.captureScreenshot();

	}

	public static void CookiepopupValidation() throws IOException, InterruptedException {
		//Below will click on the cookie policy
		CommonUtilities.VerifyElementExist_withoutAssert(ShopLandingPage.CookieSection);
		log.debug("Cookie section validation is completed");
		Screenshots.captureScreenshot();

	}


	}



