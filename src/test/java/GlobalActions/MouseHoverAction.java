package GlobalActions;

import java.awt.AWTException;
import java.awt.Robot;
import java.io.IOException;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.Point;
import org.openqa.selenium.interactions.Actions;
import org.apache.log4j.Logger;

import helpers.Environment;

public class MouseHoverAction extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");

	/*
	 * ############## All the Below are for the CFA customer journey
	 * ###################
	 */

	// Below will navigate to PayM Phones Page

	public static void PayMPhonesLandingPage() throws Exception {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		boolean Worksfine = false;
		while (!Worksfine) {
			try {
				System.out.println("Performing PAYM Phones landing page navigations");
				log.debug("Performing PAYM Phones landing page navigations");

				Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
				Robot robot = new Robot();
				robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
				log.debug("Moving Mouse on the Shop Tab");

				Actions action = new Actions(driver);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnPhones).build().perform();
				log.debug("Moving Mouse on the Phones dropdown");

				Thread.sleep(1000);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnPAYMPhones).build().perform();
				log.debug("Moving Mouse on the Paymonthly link");
				Screenshots.screennewPics();

				Thread.sleep(1000);
				pageobjects.MouseHoverPage.MoveMouseOnPAYMPhones.click();
				Screenshots.screennewPics();

				log.debug("Clicking on PayM Phones");

				// Move mouse pointer away from location
				Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();

				Robot robot2 = new Robot();
				robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
				log.debug("Moved Mouse to somewhere side of page");

				Worksfine = true;

			} catch (ElementNotVisibleException e) {
				// check if popup is present, if yes, handle it.
				Environment.driver.switchTo().frame("edr_l_first");
				System.out.println("********We are switch to the iframe*******");
				log.debug("Popup has appeared on the screen, Hence trying to close the survey");
				Screenshots.screennewPics();
				// Saying no to survey
				driver.findElement(By.xpath("//a[@id='no']/span")).click();
				log.debug("Closing the popup by saying No to Survey");
				System.out.println("*******Saying no to survey*******");
				System.out.println("*********Existing the popups present in iframe***************");
				log.debug("Exiting the Survey");
				Environment.driver.switchTo().defaultContent();
				Thread.sleep(2000);

			}
		}
	}

	// Below will navigate to PayG Phones Page

	public static void SimIpadSimsPage() throws Exception {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		boolean Worksfine = false;
		while (!Worksfine) {
			try {
				System.out.println("Navigating to Sims --> Ipad Sims landing page navigations");
				log.debug("Navigating to Sims --> Ipad Sims landing page navigations");

				Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
				Robot robot = new Robot();
				robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
				log.debug("Moving Mouse on the Shop Tab");

				Actions action = new Actions(driver);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnSims).build().perform();
				log.debug("Moving Mouse on the Sims in Shop Dropdown");

				Thread.sleep(1000);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnIpadSims).build().perform();
				log.debug("Moving Mouse on the Ipad Sims link");
				Screenshots.screennewPics();

				Thread.sleep(1000);
				pageobjects.MouseHoverPage.MoveMouseOnIpadSims.click();
				Screenshots.screennewPics();

				log.debug("Trying to take screenshots of page");

				// Move mouse pointer away from location
				Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();

				Robot robot2 = new Robot();
				robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
				log.debug("Moved Mouse to somewhere side of page");

				Worksfine = true;

			} catch (ElementNotVisibleException e) {
				// check if popup is present, if yes, handle it.
				Environment.driver.switchTo().frame("edr_l_first");
				System.out.println("********We are switch to the iframe*******");
				log.debug("Popup has appeared on the screen, Hence trying to close the survey");
				Screenshots.screennewPics();
				// Saying no to survey
				driver.findElement(By.xpath("//a[@id='no']/span")).click();
				log.debug("Closing the popup by saying No to Survey");
				System.out.println("*******Saying no to survey*******");
				System.out.println("*********Existing the popups present in iframe***************");
				log.debug("Exiting the Survey");
				Environment.driver.switchTo().defaultContent();
				Thread.sleep(2000);

			}
		}
	}

	// The Below will navigate to Sims --- > Tablet sims page
	public static void SimTabletsSimsPage() throws Exception {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		boolean Worksfine = false;
		while (!Worksfine) {
			try {
				System.out.println("Navigating to Sims --> Tablet Sims landing page navigations");
				log.debug("Navigating to Sims --> Tablet Sims landing page navigations");

				Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
				Robot robot = new Robot();
				robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
				log.debug("Moving Mouse on the Shop Tab");

				Actions action = new Actions(driver);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnSims).build().perform();
				log.debug("Moving Mouse on the Sims in Shop Dropdown");

				Thread.sleep(1000);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnTabletSims).build().perform();
				log.debug("Moving Mouse on the Ipad Sims link");
				Screenshots.screennewPics();

				Thread.sleep(1000);
				pageobjects.MouseHoverPage.MoveMouseOnTabletSims.click();
				Screenshots.screennewPics();

				log.debug("Trying to take screenshots of page");

				// Move mouse pointer away from location
				Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();

				Robot robot2 = new Robot();
				robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
				log.debug("Moved Mouse to somewhere side of page");

				Worksfine = true;

			} catch (ElementNotVisibleException e) {
				// check if popup is present, if yes, handle it.
				Environment.driver.switchTo().frame("edr_l_first");
				System.out.println("********We are switch to the iframe*******");
				log.debug("Popup has appeared on the screen, Hence trying to close the survey");
				Screenshots.screennewPics();
				// Saying no to survey
				driver.findElement(By.xpath("//a[@id='no']/span")).click();
				log.debug("Closing the popup by saying No to Survey");
				System.out.println("*******Saying no to survey*******");
				System.out.println("*********Existing the popups present in iframe***************");
				log.debug("Exiting the Survey");
				Environment.driver.switchTo().defaultContent();
				Thread.sleep(3000);

			}
		}
	}

	// Below will navigate to PayM Phones Page

	public static void PayGPhonesLandingPage() throws Exception {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		boolean Worksfine = false;
		while (!Worksfine) {

			try {
				System.out.println("Performing PAYG Phones landing page navigations");
				log.debug("Performing PAYG Phones landing page navigations");

				Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
				Robot robot = new Robot();
				robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
				log.debug("Moving Mouse on the Shop Tab");

				Actions action = new Actions(driver);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnPhones).build().perform();
				log.debug("Moving Mouse on the Phones dropdown");

				Thread.sleep(2000);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnPAYGPhones).build().perform();
				log.debug("Moving Mouse on the Pay as you Go link");
				Screenshots.screennewPics();

				Thread.sleep(2000);
				pageobjects.MouseHoverPage.MoveMouseOnPAYGPhones.click();
				Screenshots.screennewPics();

				log.debug("Clicking on PayG Phones");

				// Move mouse pointer away from location
				Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();

				Robot robot2 = new Robot();
				robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
				log.debug("Moved Mouse to somewhere side of page");

				Worksfine = true;

			} catch (ElementNotVisibleException e) {
				// check if popup is present, if yes, handle it.
				Environment.driver.switchTo().frame("edr_l_first");
				System.out.println("********We are switch to the iframe*******");
				log.debug("Popup has appeared on the screen, Hence trying to close the survey");
				Screenshots.screennewPics();
				// Saying no to survey
				driver.findElement(By.xpath("//a[@id='no']/span")).click();
				log.debug("Closing the popup by saying No to Survey");
				System.out.println("*******Saying no to survey*******");
				System.out.println("*********Existing the popups present in iframe***************");
				log.debug("Exiting the Survey");
				Environment.driver.switchTo().defaultContent();
				Thread.sleep(3000);

			}
		}
	}

	// Below will navigate to Like New Phones Page

	/*
	 * public static void likeNewHomepageNavigation() throws Exception {
	 * driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS); boolean
	 * Worksfine = false; while(!Worksfine) try {
	 * System.out.println("Performing Like New navigations");
	 * log.debug("Performing Like New navigations");
	 * 
	 * Point coordinates =
	 * pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation(); Robot robot
	 * = new Robot();
	 * robot.mouseMove(coordinates.getX(),coordinates.getY()+120);
	 * 
	 * Actions action = new Actions(driver);
	 * action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnPhones).build(
	 * ).perform(); Thread.sleep(2000);
	 * action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnLikeNew).build
	 * ().perform(); Thread.sleep(2000);
	 * 
	 * pageobjects.MouseHoverPage.MoveMouseOnLikeNew.click();
	 * Screenshots.screennewPics();
	 * 
	 * //Move mouse pointer away from location Point coordinates2 =
	 * driver.findElement(By.xpath("//*[@id='header-consumer']/div")).
	 * getLocation(); Robot robot2 = new Robot();
	 * robot2.mouseMove(coordinates2.getX(),coordinates.getY()+300);
	 * 
	 * log.debug("Moved Mouse to somewhere side of page");
	 * 
	 * 
	 * Worksfine = true;
	 * 
	 * } catch(ElementNotVisibleException e) { //check if popup is present, if
	 * yes, handle it. Environment.driver.switchTo().frame("edr_l_first");
	 * System.out.println("********We are switch to the iframe*******"); log.
	 * debug("Popup has appeared on the screen, Hence trying to close the survey"
	 * ); Screenshots.screennewPics(); //Saying no to survey
	 * driver.findElement(By.xpath("//a[@id='no']/span")).click();
	 * log.debug("Closing the popup by saying No to Survey");
	 * System.out.println("*******Saying no to survey*******"); System.out.
	 * println("*********Existing the popups present in iframe***************");
	 * log.debug("Exiting the Survey");
	 * Environment.driver.switchTo().defaultContent(); Thread.sleep(3000);
	 * 
	 * }
	 * 
	 * }
	 */

	// Below will navigate to Like New Phones Page

	public static void likeNewHomepageNavigation() throws Exception {
		log.debug("Opening likeNewHomepageNavigation function");
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		boolean Worksfine = false;
		while (!Worksfine)
			try {
				System.out.println("Performing Like New navigations");
				log.debug("Performing Like New navigations");

				Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
				Robot robot = new Robot();
				robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);

				Actions action = new Actions(driver);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnPhones).build().perform();
				Thread.sleep(2000);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnLikeNew).build().perform();
				Thread.sleep(2000);

				pageobjects.MouseHoverPage.MoveMouseOnLikeNew.click();
				Screenshots.screennewPics();

				// Move mouse pointer away from location
				Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
				Robot robot2 = new Robot();
				robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);

				log.debug("Moved Mouse to somewhere side of page");

				Worksfine = true;

				log.debug("Hovered mouse successfully to Like New Phones option");

			} catch (ElementNotVisibleException e) {
				// check if popup is present, if yes, handle it.
				Environment.driver.switchTo().frame("edr_l_first");
				System.out.println("********We are switch to the iframe*******");
				log.debug("Popup has appeared on the screen, Hence trying to close the survey");
				Screenshots.screennewPics();
				// Saying no to survey
				driver.findElement(By.xpath("//a[@id='no']/span")).click();
				log.debug("Closing the popup by saying No to Survey");
				System.out.println("*******Saying no to survey*******");
				System.out.println("*********Existing the popups present in iframe***************");
				log.debug("Exiting the Survey");
				Environment.driver.switchTo().defaultContent();
				Thread.sleep(3000);

			}

	}

	// Below will navigate to Tablets PayM Page
	public static void PayMTabletsLandingPage() throws Exception {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		boolean Worksfine = false;
		while (!Worksfine)
			try {
				System.out.println("Performing navigations to PAYM Tablets");
				log.debug("Performing navigations to PAYM Tablets");
				Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
				Robot robot = new Robot();
				robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
				log.debug("Moving Mouse on the Shop Tab");
				Actions action = new Actions(driver);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnTablets).build().perform();
				Thread.sleep(2000);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnBrowseTablets).build().perform();
				Thread.sleep(2000);
				pageobjects.MouseHoverPage.MoveMouseOnBrowseTablets.click();

				// Move mouse pointer away from location
				Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
				Robot robot2 = new Robot();
				robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
				log.debug("Moved Mouse to somewhere side of page");

				Worksfine = true;

			} catch (ElementNotVisibleException e) {
				// check if popup is present, if yes, handle it.
				Environment.driver.switchTo().frame("edr_l_first");
				System.out.println("********We are switch to the iframe*******");
				log.debug("Popup has appeared on the screen, Hence trying to close the survey");
				Screenshots.screennewPics();
				// Saying no to survey
				driver.findElement(By.xpath("//a[@id='no']/span")).click();
				log.debug("Closing the popup by saying No to Survey");
				System.out.println("*******Saying no to survey*******");
				System.out.println("*********Existing the popups present in iframe***************");
				log.debug("Exiting the Survey");
				Environment.driver.switchTo().defaultContent();
				Thread.sleep(3000);

			}

	}

	// Below will navigate to PAYM SIMO Page

	public static void PayMSimoNavigation() throws Exception {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		boolean Worksfine = false;
		while (!Worksfine)
			try {

				System.out.println("Performing PAYM SimO navigations");
				log.debug("Performing PAYM SimO navigations");
				Thread.sleep(1000);
				Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
				Robot robot = new Robot();
				robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
				log.debug("Moving mouse on the Shop Tab");
				Actions action = new Actions(driver);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnSims).build().perform();
				log.debug("Moving mouse on the Sims in Shop Dropdown");
				Thread.sleep(2000);

				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnPayMSims).build().perform();
				log.debug("Moving mouse on the PayM Sims");
				Thread.sleep(2000);
				pageobjects.MouseHoverPage.MoveMouseOnPayMSims.click();
				log.debug("Clicking on Pay M Sims");
				// Move mouse pointer away from location
				Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
				Robot robot2 = new Robot();
				robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
				log.debug("Moved Mouse to somewhere side of page");

				Worksfine = true;

			} catch (NoSuchElementException e) {
				// check if popup is present, if yes, handle it.
				Environment.driver.switchTo().frame("edr_l_first");
				System.out.println("********We are switch to the iframe*******");
				log.debug("Popup has appeared on the screen, Hence trying to close the survey");
				Screenshots.screennewPics();
				// Saying no to survey
				driver.findElement(By.xpath("//a[@id='no']/span")).click();
				log.debug("Closing the popup by saying No to Survey");
				System.out.println("*******Saying no to survey*******");
				System.out.println("*********Existing the popups present in iframe***************");
				log.debug("Exiting the Survey");
				Environment.driver.switchTo().defaultContent();
				Thread.sleep(3000);

			}

	}

	// Below will navigate to SMART TECH > SMART WATCHES Page
	public static void SmartwatchesLandingPage() throws Exception {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		boolean Worksfine = false;
		while (!Worksfine)
			try {

				System.out.println("Performing Smartwatches navigations");
				log.debug("Performing Smartwatches navigations");

				Thread.sleep(2000);
				Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
				Robot robot = new Robot();
				robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);

				Actions action = new Actions(driver);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnSmarttechTab).build().perform();
				Thread.sleep(2000);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnSmartwatches).build().perform();
				Thread.sleep(2000);
				pageobjects.MouseHoverPage.MoveMouseOnSmartwatches.click();

				// Move mouse pointer away from location
				Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
				Robot robot2 = new Robot();
				robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
				log.debug("Moved Mouse to somewhere side of page");

				Worksfine = true;

			} catch (NoSuchElementException e) {
				// check if popup is present, if yes, handle it.
				Environment.driver.switchTo().frame("edr_l_first");
				System.out.println("********We are switch to the iframe*******");
				log.debug("Popup has appeared on the screen, Hence trying to close the survey");
				Screenshots.screennewPics();
				// Saying no to survey
				driver.findElement(By.xpath("//a[@id='no']/span")).click();
				log.debug("Closing the popup by saying No to Survey");
				System.out.println("*******Saying no to survey*******");
				System.out.println("*********Existing the popups present in iframe***************");
				log.debug("Exiting the Survey");
				Environment.driver.switchTo().defaultContent();
				Thread.sleep(3000);
			}
	}

	// Below will navigate to SMART TECH > FITNESS TRACKERS Page
	public static void FitnessLandingPage() throws Exception {

		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		boolean Worksfine = false;
		while (!Worksfine)
			try {

				System.out.println("Performing Fitness tracker navigations");
				log.debug("Performing Accessories navigations");
				Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
				Robot robot = new Robot();
				robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);

				Actions action = new Actions(driver);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnSmarttechTab).build().perform();
				Thread.sleep(2000);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnFitnessTrackers).build().perform();
				Thread.sleep(2000);
				pageobjects.MouseHoverPage.MoveMouseOnFitnessTrackers.click();

				// Move mouse pointer away from location
				Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
				Robot robot2 = new Robot();
				robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
				log.debug("Moved Mouse to somewhere side of page");

				Worksfine = true;

			} catch (NoSuchElementException e) {
				// check if popup is present, if yes, handle it.
				Environment.driver.switchTo().frame("edr_l_first");
				System.out.println("********We are switch to the iframe*******");
				log.debug("Popup has appeared on the screen, Hence trying to close the survey");
				Screenshots.screennewPics();
				// Saying no to survey
				driver.findElement(By.xpath("//a[@id='no']/span")).click();
				log.debug("Closing the popup by saying No to Survey");
				System.out.println("*******Saying no to survey*******");
				System.out.println("*********Existing the popups present in iframe***************");
				log.debug("Exiting the Survey");
				Environment.driver.switchTo().defaultContent();
				Thread.sleep(3000);
			}
	}

	// Below will navigate to ACCESSORIES Page
	public static void AccessoriesLandingPage() throws Exception {

		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		boolean Worksfine = false;
		while (!Worksfine)
			try {

				System.out.println("Performing Accessories navigations");
				log.debug("Performing Accessories navigations");
				Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
				Robot robot = new Robot();
				robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);

				Actions action = new Actions(driver);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnAccessoriesTab).build().perform();
				Thread.sleep(2000);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnAllAccessories).build().perform();
				Thread.sleep(2000);
				pageobjects.MouseHoverPage.MoveMouseOnAllAccessories.click();

				// Move mouse pointer away from location
				Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
				Robot robot2 = new Robot();
				robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
				log.debug("Moved Mouse to somewhere side of page");

				Worksfine = true;

			} catch (NoSuchElementException e) {
				// check if popup is present, if yes, handle it.
				Environment.driver.switchTo().frame("edr_l_first");
				System.out.println("********We are switch to the iframe*******");
				log.debug("Popup has appeared on the screen, Hence trying to close the survey");
				Screenshots.screennewPics();
				// Saying no to survey
				driver.findElement(By.xpath("//a[@id='no']/span")).click();
				log.debug("Closing the popup by saying No to Survey");
				System.out.println("*******Saying no to survey*******");
				System.out.println("*********Existing the popups present in iframe***************");
				log.debug("Exiting the Survey");
				Environment.driver.switchTo().defaultContent();
				Thread.sleep(3000);
			}
	}

	// Below will navigate to PAYG MBB page
	public static void PayGMBBPage() throws Exception {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		boolean Worksfine = false;
		while (!Worksfine)
			try {
				System.out.println("Performing navigations to PAYG MBB");
				log.debug("Performing navigations to PAYG MBB");
				Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
				Robot robot = new Robot();
				robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
				log.debug("Moving Mouse on the Shop Tab");
				Actions action = new Actions(driver);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnMobileBroadband).build().perform();
				Thread.sleep(2000);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnPayGMBB).build().perform();
				Thread.sleep(2000);
				pageobjects.MouseHoverPage.MoveMouseOnPayGMBB.click();
				log.debug("Moving Mouse on the PAYG MBB tab");

				// Move mouse pointer away from location
				Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
				Robot robot2 = new Robot();
				robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
				log.debug("Moved Mouse to somewhere side of page");
				Worksfine = true;

			} catch (ElementNotVisibleException e) {
				// check if popup is present, if yes, handle it.
				Environment.driver.switchTo().frame("edr_l_first");
				System.out.println("********We are switch to the iframe*******");
				log.debug("Popup has appeared on the screen, Hence trying to close the survey");
				Screenshots.screennewPics();
				// Saying no to survey
				driver.findElement(By.xpath("//a[@id='no']/span")).click();
				log.debug("Closing the popup by saying No to Survey");
				System.out.println("*******Saying no to survey*******");
				System.out.println("*********Existing the popups present in iframe***************");
				log.debug("Exiting the Survey");
				Environment.driver.switchTo().defaultContent();
				Thread.sleep(3000);

			}

	}

	/*
	 * ############## All the Below are for the CFU customer journey
	 * ###################
	 */

	// Below will navigate to upgrade --- > upgrade now page

	public static void UpgradeandUpgradeNow() throws Exception {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		boolean Worksfine = false;
		while (!Worksfine)
			try {

				System.out.println("Performing Upgrade -- > upgrade now navigations");
				log.debug("Performing PAYG MBB navigations");
				Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
				Robot robot = new Robot();
				robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);

				Actions action = new Actions(driver);
				action.moveToElement(pageobjects.MouseHoverPage.MouseMoveonUpgrade).build().perform();
				Thread.sleep(2000);
				action.moveToElement(pageobjects.MouseHoverPage.MouseMoveonUpgradeAndUpgradeNow).build().perform();
				Thread.sleep(2000);
				pageobjects.MouseHoverPage.MouseMoveonUpgradeAndUpgradeNow.click();

				// Move mouse pointer away from location
				Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
				Robot robot2 = new Robot();
				robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
				log.debug("Moved Mouse to somewhere side of page");

				Worksfine = true;

			} catch (ElementNotVisibleException e) {
				// check if popup is present, if yes, handle it.
				Environment.driver.switchTo().frame("edr_l_first");
				System.out.println("********We are switch to the iframe*******");
				// Saying no to survey
				driver.findElement(By.xpath("//a[@id='no']/span")).click();
				System.out.println("*******Saying no to survey*******");
				System.out.println("*********Existing the popups present in iframe***************");
				Environment.driver.switchTo().defaultContent();

			}

	}

	// Below will navigate to PAYM MBB page
	public static void PayMMBBPage() throws Exception {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		boolean Worksfine = false;
		while (!Worksfine)
			try {
				System.out.println("Performing navigations to PAYM MBB");
				log.debug("Performing navigations to PAYM MBB");
				Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
				Robot robot = new Robot();
				robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
				log.debug("Moving Mouse on the Shop Tab");
				Actions action = new Actions(driver);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnMobileBroadband).build().perform();
				Thread.sleep(2000);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnPayMMBB).build().perform();
				Thread.sleep(2000);
				pageobjects.MouseHoverPage.MoveMouseOnPayMMBB.click();
				log.debug("Moving Mouse on the PAYM MBB tab");

				// Move mouse pointer away from location
				Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
				Robot robot2 = new Robot();
				robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
				log.debug("Moved Mouse to somewhere side of page");
				Worksfine = true;

			} catch (ElementNotVisibleException e) {
				// check if popup is present, if yes, handle it.
				Environment.driver.switchTo().frame("edr_l_first");
				System.out.println("********We are switch to the iframe*******");
				log.debug("Popup has appeared on the screen, Hence trying to close the survey");
				Screenshots.screennewPics();
				// Saying no to survey
				driver.findElement(By.xpath("//a[@id='no']/span")).click();
				log.debug("Closing the popup by saying No to Survey");
				System.out.println("*******Saying no to survey*******");
				System.out.println("*********Existing the popups present in iframe***************");
				log.debug("Exiting the Survey");
				Environment.driver.switchTo().defaultContent();
				Thread.sleep(3000);

			}

	}

	// Below will navigate to iPad tablets
	public static void iPadPage() throws Exception {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		boolean Worksfine = false;
		while (!Worksfine)
			try {
				System.out.println("Performing navigations to iPad page");
				log.debug("Performing navigations to iPad page");
				Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
				Robot robot = new Robot();
				robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
				log.debug("Moving Mouse on the Shop Tab");
				Actions action = new Actions(driver);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnTablets).build().perform();
				Thread.sleep(2000);
				action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOniPad).build().perform();
				Thread.sleep(2000);
				pageobjects.MouseHoverPage.MoveMouseOniPad.click();
				log.debug("Moving Mouse on the iPad tab");

				// Move mouse pointer away from location
				Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
				Robot robot2 = new Robot();
				robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
				log.debug("Moved Mouse to somewhere side of page");
				Worksfine = true;

			} catch (ElementNotVisibleException e) {
				// check if popup is present, if yes, handle it.
				Environment.driver.switchTo().frame("edr_l_first");
				System.out.println("********We are switch to the iframe*******");
				log.debug("Popup has appeared on the screen, Hence trying to close the survey");
				Screenshots.screennewPics();
				// Saying no to survey
				driver.findElement(By.xpath("//a[@id='no']/span")).click();
				log.debug("Closing the popup by saying No to Survey");
				System.out.println("*******Saying no to survey*******");
				System.out.println("*********Existing the popups present in iframe***************");
				log.debug("Exiting the Survey");
				Environment.driver.switchTo().defaultContent();
				Thread.sleep(3000);

			}

	}

}
