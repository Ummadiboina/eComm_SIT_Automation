package actionsPerformed;

import GlobalActions.Screenshots;
import helpers.Environment;
import helpers.Filereadingutility;
import helpers.setRuntimeProperty;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import pageobjects.AccessoryPage;
import pageobjects.MyO2Page;
import GlobalActions.CommonActions;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class MyO2PageActions extends Environment {

	final static Logger log = Logger.getLogger("MyO2PageActions");

	public static void Login_MYO2(String username, String password) throws InterruptedException, IOException {
		driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
		Screenshots.captureScreenshot();
		if (MyO2Page.signInButton.isEnabled()) {
			log.debug("Sign-in Button is enabled before providing login credentials at MY O2 Page");
			Assert.fail("Sign-in Button is enabled before providing login credentials at MY O2 Page");
		}else{

			log.debug("As Expected:: Sign-in Button is disabled before providing login credentials at MY O2 Page");
		}

		MyO2Page.signInUserName.sendKeys(username);
		MyO2Page.signInPassword.sendKeys(password);
		MyO2Page.rememberUserName.click();
		Thread.sleep(4000);

		Screenshots.captureScreenshot();
		if (MyO2Page.signInButton.isEnabled()) {
			log.debug("As Expected:: Sign-in Button is enabled after providing login credentials at MY O2 Page");
			MyO2Page.signInButton.click();
			log.debug("Clicked on Signin button");
		}else{
			Assert.fail("Sign-in Button is disabled after providing login credentials at MY O2 Page");
		}

		driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
		String currentURL = driver.getCurrentUrl();
		log.debug("The redirected url is: " + currentURL);

		if(currentURL.contains("https://www.ref.o2.co.uk/shop?invalidAttemptCount=1&error=invalidCredentials")){
			log.debug("Logged in failed");
		}else{
			log.debug("Logged in successfully");
		}

	}

	public static void Logout_MyO2() throws InterruptedException, IOException {

		Thread.sleep(3000);

		((JavascriptExecutor) driver).executeScript("arguments[0].click();",MyO2Page.SignoutLink);
		log.debug("Clicked on Sign out link");
		Thread.sleep(3000);
		Screenshots.captureScreenshot();
	}

	public static void validateMyO2Page() {

		String pageTitle = driver.getTitle();
		try {

			log.debug("The Page title is :" + pageTitle);
			log.debug("Currently we are at "+pageTitle+" page \n");
			log.debug("Validating the "+pageTitle+" page \n");
			Thread.sleep(5000);
			Screenshots.captureScreenshot();

			//if (MyO2Page.signIn.isDisplayed()) {log.debug("My O2 page has 'Sign in' link :"+MyO2Page.signIn.getText());}

			if (MyO2Page.signInSectionHeader.isDisplayed()) {log.debug("My O2 page 'Sign in' section header :"+MyO2Page.signInSectionHeader.getText());}
			if (MyO2Page.signInSectionHintTxt.isDisplayed()) {log.debug("My O2 page 'Sign in' section hint text :"+MyO2Page.signInSectionHintTxt.getText());}
			if (MyO2Page.signInUserName.isDisplayed()) {log.debug("My O2 page 'Sign in' section has user name input field :");}
			if (MyO2Page.signInPassword.isDisplayed()) {log.debug("My O2 page 'Sign in' section has password input field :");}

			if (MyO2Page.rememberUserName.isDisplayed()) {
				String rememberTxt = driver.findElement(By.xpath("//div[normalize-space()='Remember my username']")).getText();
				Thread.sleep(2000);
				log.debug("My O2 page 'Sign in' section has 'Remember My UserName' input field :"+rememberTxt);
			}

			if (MyO2Page.signInButton.isDisplayed()) {log.debug("My O2 page 'Sign in' section has sign in button :"+MyO2Page.signInButton.getText());}
			if (MyO2Page.forgotUserName.isDisplayed()) {log.debug("My O2 page 'Sign in' section has forgotton user name link :"+MyO2Page.forgotUserName.getText());}
			if (MyO2Page.register.isDisplayed()) {log.debug("My O2 page has 'Register' link :"+MyO2Page.register.getText());}

			if (MyO2Page.signInButton.isEnabled()) {
				log.debug("Sign-in Button is enabled before providing login credentials at MY O2 Page");
				Assert.fail("Sign-in Button is enabled before providing login credentials at MY O2 Page");
			}else{
				log.debug("As Expected:: Sign-in Button is disabled before providing login credentials at MY O2 Page");
			}

		} catch (Exception e) {
			// TODO Auto-generated catch block
			log.debug("Failed to validate " + pageTitle + " page ::" + e.getStackTrace());
			Assert.fail("Failed to validate " + pageTitle + " page ::" + e.getStackTrace());
		}
	}

	//validate url for existing customer when clicks on 'My O2' link
	public static void redirectMYO2Url() throws Exception {
		Thread.sleep(5000);
		String redirectUrl = driver.getCurrentUrl();
		log.debug("Redirect URL when existing customer clicked on My O2 link:: "+ redirectUrl);
		if (redirectUrl.contains("https://mymobile.ref.o2.co.uk/")) {
			log.debug("Redirected to the valid URL");
		} else {
			log.debug("Redirected to the invalid URL when existing customer clicked on My O2 link : " +redirectUrl);
			Assert.fail("Redirected to the invalid URL when existing customer clicked on My O2 link : " +redirectUrl);
		}
		Screenshots.captureScreenshot();
	}

	//validate url for customer when clicks on register link at 'My O2' page
	public static void registerRedirectUrl() throws Exception {
		Thread.sleep(5000);
		String redirectUrl = driver.getCurrentUrl();
		log.debug("Redirect URL when customer clicked on register link at My O2 page:: "+ redirectUrl);
		if (redirectUrl.contains("https://accounts.o2.co.uk/register")) {
			log.debug("Redirected to the valid Register URL: "+redirectUrl);
		} else {
			log.debug("Redirected to the invalid URL when customer clicked on register link at My O2 : " +redirectUrl);
			Assert.fail("Redirected to the invalid URL when customer clicked on register link at My O2 : " +redirectUrl);
		}
		Screenshots.captureScreenshot();
	}


	//validate url for customer when clicks on 'Forgotten username or password' link at 'My O2' page
	public static void forgottonUserNamePasswordRedirectUrl() throws Exception {
		Thread.sleep(5000);
		String redirectUrl = driver.getCurrentUrl();
		log.debug("Redirect URL when customer clicked on 'Forgotten username or password' link at My O2 page:: "+ redirectUrl);
		if (redirectUrl.contains("https://accounts.o2.co.uk/auth?sendTo=https")) {
			log.debug("Redirected to the valid Forgotten username or password URL : "+redirectUrl);
		} else {
			log.debug("Redirected to the invalid URL when customer clicked on 'Forgotten username or password' link at My O2 : " +redirectUrl);
			Assert.fail("Redirected to the invalid URL when customer clicked on 'Forgotten username or password' link at My O2 : " +redirectUrl);
		}
		Screenshots.captureScreenshot();
	}

	public static void click_RegisterLink_MyO2() throws InterruptedException {
		Thread.sleep(5000);
		String pageTitle = driver.getTitle();
		try {

			log.debug("The Page title is " + pageTitle);
			log.debug("Currently we are at "+pageTitle+" page");
			Thread.sleep(4000);
			Screenshots.captureScreenshot();

			if (driver.findElements(By.xpath("//div[@class='register']/a")).size() > 0) {
				log.debug("Register link is present at My O2 page and clicking on it");
				MyO2Page.register.click();
				log.debug("Clicked on register link at My O2 page");
				Thread.sleep(5000);
			} else {
				log.debug("Failed to Click on register link at "+pageTitle+" page");
				Assert.fail("Failed to Click on register link at "+pageTitle+" page");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			log.debug("Failed to Click on register link at " + pageTitle + " page ::" + e.getStackTrace());
			Assert.fail("Failed to Click on register link at " + pageTitle + " page ::" + e.getStackTrace());
		}
	}

	public static void click_Forgotten_username_password_MyO2() throws InterruptedException {
		Thread.sleep(5000);
		String pageTitle = driver.getTitle();
		try {

			log.debug("The Page title is " + pageTitle);
			log.debug("Currently we are at "+pageTitle+" page");
			Thread.sleep(4000);
			Screenshots.captureScreenshot();

			if (driver.findElements(By.xpath("//a[contains(text(),'Forgotton your username and password?')] | //div[@class='forgotton-your-usern']")).size() > 0) {
				log.debug("'Forgotton your username and password?' link is present at My O2 page and clicking on it");
				MyO2Page.forgotUserName.click();
				log.debug("Clicked on 'Forgotton your username and password?' link at My O2 page");
				Thread.sleep(5000);
			} else {
				log.debug("Failed to Click on 'Forgotton your username and password?' link at "+pageTitle+" page");
				Assert.fail("Failed to Click on 'Forgotton your username and password?' link at "+pageTitle+" page");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			log.debug("Failed to Click on 'Forgotton your username and password?' link at " + pageTitle + " page ::" + e.getStackTrace());
			Assert.fail("Failed to Click on 'Forgotton your username and password?' link at " + pageTitle + " page ::" + e.getStackTrace());
		}
	}

}
