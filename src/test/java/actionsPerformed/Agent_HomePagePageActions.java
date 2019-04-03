package actionsPerformed;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.testng.Reporter;

import GlobalActions.Screenshots;
import helpers.Environment;
import junit.framework.Assert;
import pageobjects.Agent_HomePage;

public class Agent_HomePagePageActions extends Environment {

	final static Logger log = Logger.getLogger("Agent_HomePagePageActions");

	/*
	 * //this method used to perform click action on the Agent Home Page
	 */
	public static void ElementClickAction(String elementname) throws IOException {
		// TODO Auto-generated method stub

		log.debug("Agent_Home_Page_Action");
		log.debug("Agent Home Page validation");

		if (elementname != null) {
			switch (elementname.toLowerCase()) {
				case "NewCustomer":
					pageobjects.Agent_HomePage.NewCustomer.click();
					break;
			}

		}
		Screenshots.captureScreenshot();
	}

	// This method will take care of Entering msisdn as per cucumber file and
	// also for logging in
	public static void FindUser(String msisdn) throws InterruptedException, IOException {

		driver.manage().deleteAllCookies();
		Agent_HomePage.MPN.sendKeys(msisdn);
		log.debug("Entering Valid MPN");

		Thread.sleep(3000);
		Agent_HomePage.Search.click();
		log.debug("Clicked on Search button");

		Thread.sleep(3000);
		/*
		 * if (Agent_HomePage.notfound.isDisplayed()) { System.out.
		 * println("MPN entered is wrong, please check back your test case");
		 * Assert.fail("MPN entered is wrong, please check back your test case" ); }
		 */
		Screenshots.captureScreenshot();
	}

	public static void upgradeUser() throws InterruptedException, IOException {
		// try {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		log.debug("Verifying if Upgrade link is enabled");
		Agent_HomePage.UpgradeLink.click();
		log.debug("Clicking on upgrade link");
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		Screenshots.captureScreenshot();
		Thread.sleep(4000);

		if(driver.findElements(By.xpath("//a[@id='abandonCheckout']")).size()>0)
		{
			driver.findElement(By.xpath("//a[@id='abandonCheckout']")).click();
			Thread.sleep(10000);
			if(driver.findElements(By.className("tradeInMessage")).size()>0) {
				String TradeInUpgradeOptions = driver.findElement(By.className("tradeInMessage")).getText();
				log.debug("Displaying Trade-in Upgrade Options Message");
				log.debug(TradeInUpgradeOptions);
			}

		}

		if(driver.findElements(By.className("tradeInMessage")).size()>0) {
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,300)", "");
			Thread.sleep(2000);
			Screenshots.captureScreenshot();

			String TradeInUpgradeOptions = driver.findElement(By.className("tradeInMessage")).getText();
			log.debug("Displaying Trade-in Upgrade Options Message: ");
			log.debug(TradeInUpgradeOptions);
		}

		if(driver.findElements(By.xpath("//div[@id='buyout']")).size()>0) {
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("window.scrollBy(0,300)", "");
			Thread.sleep(2000);
			Screenshots.captureScreenshot();
			String BuyOutUpgradeOptionsTxt = driver.findElement(By.xpath("//div[@id='buyout']")).getText();
			log.debug("Displaying BuyOut Upgrade Options Message: ");
			log.debug(BuyOutUpgradeOptionsTxt);
		}
		Thread.sleep(5000);

		try {
			if (driver.findElement(By.xpath("//*[@id='cca']/div[2]/a[1]")).isDisplayed()) {
				if (driver.findElement(By.xpath("//*[@id='cca']/div[2]/a[1]")).isEnabled()) {
					driver.findElement(By.xpath("//*[@id='cca']/div[2]/a[1]")).click();
				}
				log.debug("new overlay is displayed");
			} else {
				log.debug("new overlay is not displayed");
			}
			Thread.sleep(5000);

			if (driver.findElements(By.id("abandonCheckout")).size() > 0) {
				driver.findElement(By.id("abandonCheckout")).click();
				log.debug("This agent was in progress so we are abanded and proceed with newly");
			}
			Screenshots.captureScreenshot();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			log.debug("new overlay is not displayed");
			Screenshots.captureScreenshot();
		}

		Thread.sleep(5000);

		List<WebElement> PayAsYouGo = driver.findElements(By.id("emptyDealButton"));
		if (PayAsYouGo.size() > 0) {

			if (Agent_HomePage.emptyDealButton.isDisplayed()) {
				log.debug("The Upgrade options need not be selected");
				if (Agent_HomePage.emptyDealButton.isEnabled()) {
					log.debug("The Empty Deal button is enabled hence Emptying the basket");
					Agent_HomePage.emptyDealButton.click();
					log.debug("Clicking on emptyDealButton button");

				} else {
					System.out.print("Deal builder is not enables which is ok  ");
				}
			}
		} else {

			log.debug("Need to choose an upgrade option");
			if(Agent_HomePage.UpgradeOpsAgent.isDisplayed()) {
				String UpgradeOptionsAgent = Agent_HomePage.UpgradeOpsAgent.getText();
				log.debug(UpgradeOptionsAgent);
				if (UpgradeOptionsAgent.contains("Upgrade Options for MSISDN"))
					if (Agent_HomePage.AgentSimoUpgradeOptions.isDisplayed()) {
						Agent_HomePage.AgentSimoUpgradeOptions.click();
					} else {
						Agent_HomePage.AgentHandsetUpgradeOptions.click();
					}
			}
		}
		/*
		 * } catch (Exception e) { // TODO Auto-generated catch block
		 * Assert.fail("There is no Upgrade link available in page");
		 * log.debug("The current message is " +
		 * Agent_HomePage.notfound.getText()); }
		 */
		Screenshots.captureScreenshot();

	}

	public static void NewUser() throws IOException {
		driver.manage().deleteAllCookies();

		try {
			Assert.assertTrue(pageobjects.Agent_HomePage.NewCustomer.isDisplayed());
			pageobjects.Agent_HomePage.NewCustomer.click();
			Thread.sleep(3000);
			log.debug("Performing new user new connection");
			Reporter.log("Performing new user new connection");
			Screenshots.captureScreenshot();
		} catch (Exception e) {
			Assert.fail();
			Screenshots.captureScreenshot();
		}
		if (Agent_HomePage.emptyDealButton.isEnabled()) {
			log.debug("The Empty Deal button is enabled hence Emptying the basket");
			Agent_HomePage.emptyDealButton.click();
			log.debug("Clicking on emptyDealButton button");
		} else {
			log.debug("The Empty Deal button is not present hence it should be alright");
		}
		Screenshots.captureScreenshot();

	}

	public static void NewConnection() throws IOException {
		driver.manage().deleteAllCookies();

		try {
			Assert.assertTrue(pageobjects.Agent_HomePage.NewConnection.isDisplayed());
			pageobjects.Agent_HomePage.NewConnection.click();
			Thread.sleep(3000);
			log.debug("Performing existing user new connection");
			Reporter.log("Performing existing user new connection");
			Screenshots.captureScreenshot();
		} catch (Exception e) {
			Assert.fail();
			Screenshots.captureScreenshot();
		}

		Screenshots.captureScreenshot();

	}


	public static void ValidateAgentHomepage() throws IOException {

		log.debug("Agent Home page Validation" + driver.getTitle());
		log.debug("Agent Home Page validation" + driver.getTitle());

		// Assert.assertEquals("Your basket",
		// pageobjects.BasketPage.BasketHeaderXXL.getText());
		Screenshots.captureScreenshot();
	}

}
