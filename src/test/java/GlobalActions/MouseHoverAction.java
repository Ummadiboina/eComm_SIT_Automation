package GlobalActions;

import helpers.Environment;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Point;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;
import pageobjects.MouseHoverPage;

import java.awt.*;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

public class MouseHoverAction extends Environment {

    final static Logger log = Logger.getLogger("MouseHoverAction");

    // Below will navigate to PayM Phones Page

    public static void ByPassDroopalPage() throws Exception {
        driver.manage().timeouts().implicitlyWait(150, TimeUnit.SECONDS);
        try {
            log.debug("Performing workaround to navigate away from Droopal pages");
            log.debug("Performing workaround to navigate away from Droopal pages");
            Thread.sleep(5000);

            Point coordinates = pageobjects.MouseHoverPage.MoveMouseonShopDroopal.getLocation();
            Robot robot = new Robot();
            robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
            log.debug("Moving Mouse the Drooapal - Shop Tab");
            Thread.sleep(2000);

            Actions action = new Actions(driver);
            action.moveToElement(pageobjects.MouseHoverPage.MoveMouseonShopDroopal).perform();
            log.debug("Mouse over on the Droopal-Shop Header ");
            Thread.sleep(3000);

            Actions action1 = new Actions(driver);
            action1.moveToElement(pageobjects.MouseHoverPage.MoveMouseonPayMSimsDroopal).perform();
            log.debug("Mouse over on the Droopal-PayMonthlySimsLink");
            Thread.sleep(2000);

            pageobjects.MouseHoverPage.MoveMouseonPayMSimsDroopal.click();
            Thread.sleep(5000);
            log.debug("Clicked on the Droopal-PayMonthlySimsLink");

            Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
            Robot robot2 = new Robot();
            robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
            log.debug("Moved Mouse to somewhere side of page");

        } catch (ElementNotVisibleException e) {
            log.debug("Unable to perform workaround to navigate away from Droopal pages");
            Thread.sleep(2000);
        }
    }

    public static void PayMPhonesLandingPage() throws Exception {
        //driver.manage().timeouts().implicitlyWait(150, TimeUnit.SECONDS);
        Thread.sleep(8000);
        try {
            /*********************************************************************
             normal execution flow in ref Env....        ************************/
            if (driver.findElements(By.xpath("//div[@class='nav-consumer']/ul/li/a[contains(@href, '/shop')]")).size() >= 1) {
                log.debug("Performing PAYM Phones landing page navigations");
                log.debug("Performing PAYM Phones landing page navigations");
                Thread.sleep(3000);

                Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
                log.debug("Moving Mouse onThread.sleep(2000); the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnShopTab).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(3000);

                Actions action1 = new Actions(driver);
                action1.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnPhones).perform();
                log.debug("Mouse over Shop---> Phones ");
                log.debug("Moving Mouse on the Phones dropdown");
                Thread.sleep(3000);

                pageobjects.MouseHoverPage.MoveMouseOnPAYMPhones.click();
                log.debug("Mouse over Shop---> Phones--> Pay monthly phones ");
                Thread.sleep(5000);
                log.debug("Moving Mouse on the Paymonthly link");

                Screenshots.captureScreenshot();

                log.debug("Clicking on PayM Phones");

                // Move mouse pointer away from location
                Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
                Robot robot2 = new Robot();
                robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
                log.debug("Moved Mouse to somewhere side of page");
            } else {
                System.out.println("Drupal's are Enabled");
                log.debug("Drupal's are Enabled");
            }

            /*********************************************************************
             Drupal navigation change           ************************/
            if (driver.findElements(By.xpath("//div[@class='navContainer']/ul/li[@name='Shop']/a[contains(@href,'/shop')]")).size() >= 1) {

                Point coordinates = MouseHoverPage.MoveMouseOnShopTab_Drupal.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 100);
                log.debug("Moving Mouse on the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(MouseHoverPage.MoveMouseOnShopTab_Drupal).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(4000);

                Actions action1 = new Actions(driver);
                action1.moveToElement(MouseHoverPage.MoveMouseOnPhones_Drupal).perform();
                log.debug("Moving Mouse on the Browse Phones option");
                Thread.sleep(2000);

               // MouseHoverPage.MoveMouseOnPhones_Drupal.click();
                JavascriptExecutor executor = (JavascriptExecutor)driver;
                executor.executeScript("arguments[0].click();", MouseHoverPage.MoveMouseOnPhones_Drupal);
                Thread.sleep(2000);
                Screenshots.captureScreenshot();

                log.debug("Clicking on PayG Phones");
                // Move mouse pointer away from location
                Point coordinates2 = driver.findElement(By.xpath("(//div[@class='navContainer']/ul)[1]")).getLocation();
                Robot robot2 = new Robot();
                robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
                log.debug("Moved Mouse to somewhere side of page");
            } else {
                System.out.println("Drupal's are Disiabled");
                log.debug("Drupal's are Disiabled");
            }
        } catch (ElementNotVisibleException e) {
            log.debug("Failed to mouse over, &  Error as : " + e.getStackTrace());
            Assert.fail("Failed to Navigate to the Shop mouse over");
            Thread.sleep(2000);
        }
    }

    // Below will navigate to PayG Phones Page

    public static void SimIpadSimsPage() throws Exception {
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

        try {
            log.debug("Navigating to Sims --> Ipad Sims landing page navigations");
            log.debug("Navigating to Sims --> Ipad Sims landing page navigations");

            Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
            Robot robot = new Robot();
            robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
            log.debug("Moving Mouse on the Shop Tab");
            log.debug("Moving Mouse on the Shop Tab");

            Actions action = new Actions(driver);
            action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnShopTab).perform();
            log.debug("Mouse over on the Shop Header ");
            Thread.sleep(2000);

            Actions action1 = new Actions(driver);
            action1.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnSims).build().perform();
            log.debug("Moving Mouse on the Sims in Shop Dropdown");
            log.debug("Moved Mouse on Sims");
            Thread.sleep(2000);

            pageobjects.MouseHoverPage.MoveMouseOnIpadSims.click();
            log.debug("Clicking on ipad sims link");
            Thread.sleep(5000);
            Screenshots.captureScreenshot();

            log.debug("Trying to take screenshots of page");

            // Move mouse pointer away from location
            Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
            Robot robot2 = new Robot();
            robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
            log.debug("Moved Mouse to somewhere side of page");

        } catch (ElementNotVisibleException e) {
            // check if popup is present, if yes, handle it.
            Environment.driver.switchTo().frame("edr_l_first");
            log.debug("********We are switch to the iframe*******");
            log.debug("Popup has appeared on the screen, Hence trying to close the survey");
            Screenshots.captureScreenshot();
            // Saying no to survey
            driver.findElement(By.xpath("//a[@id='no']/span")).click();
            log.debug("Closing the popup by saying No to Survey");
            log.debug("*******Saying no to survey*******");
            log.debug("*********Existing the popups present in iframe***************");
            log.debug("Exiting the Survey");
            Environment.driver.switchTo().defaultContent();
            Thread.sleep(2000);

        }
    }

    // The Below will navigate to Sims --- > Tablet sims page
    public static void SimTabletsSimsPage() throws Exception {
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

        try {
            log.debug("Navigating to Sims --> Tablet Sims landing page navigations");
            log.debug("Navigating to Sims --> Tablet Sims landing page navigations");

            Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
            Robot robot = new Robot();
            robot.mouseMove(coordinates.getX(), coordinates.getY() + 110);
            log.debug("Moving Mouse on the Shop Tab");

            Actions action = new Actions(driver);
            action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnShopTab).perform();
            log.debug("Mouse over on the Shop Header ");
            Thread.sleep(2000);

            Actions action1 = new Actions(driver);
            action1.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnSims).build().perform();
            log.debug("Moving Mouse on the Sims in Shop Dropdown");
            Thread.sleep(3000);

            pageobjects.MouseHoverPage.MoveMouseOnTabletSims.click();
            Thread.sleep(5000);
            Screenshots.captureScreenshot();

            log.debug("Trying to take screenshots of page");

            // Move mouse pointer away from location
            Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
            Robot robot2 = new Robot();
            robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
            log.debug("Moved Mouse to somewhere side of page");

        } catch (ElementNotVisibleException e) {
            // check if popup is present, if yes, handle it.
            Environment.driver.switchTo().frame("edr_l_first");
            log.debug("********We are switch to the iframe*******");
            log.debug("Popup has appeared on the screen, Hence trying to close the survey");
            Screenshots.captureScreenshot();
            // Saying no to survey
            driver.findElement(By.xpath("//a[@id='no']/span")).click();
            log.debug("Closing the popup by saying No to Survey");
            log.debug("*******Saying no to survey*******");
            log.debug("*********Existing the popups present in iframe***************");
            log.debug("Exiting the Survey");
            Environment.driver.switchTo().defaultContent();
            Thread.sleep(3000);

        }
    }

    // Below will navigate to PayM Phones Page

   public static void PayGPhonesLandingPage() throws Exception {
        //driver.manage().timeouts().implicitlyWait(150, TimeUnit.SECONDS);
        Thread.sleep(10000);
        try {
            /*********************************************************************
             normal execution flow in ref Env....        ************************/
            if (driver.findElements(By.xpath("//div[@class='nav-consumer']/ul/li/a[contains(@href, '/shop')]")).size() >= 1) {
                log.debug("Performing PAYG Phones landing page navigations");
                log.debug("Performing PAYG Phones landing page navigations");

                Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
                log.debug("Moving Mouse on the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnShopTab).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(2000);

                Actions action1 = new Actions(driver);
                action1.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnPhones).perform();
                log.debug("Moving Mouse on the Phones dropdown");
                Thread.sleep(2000);

                pageobjects.MouseHoverPage.MoveMouseOnPAYGPhones.click();
                Thread.sleep(5000);
                Screenshots.captureScreenshot();

                log.debug("Clicking on PayG Phones");

                // Move mouse pointer away from location
           /* Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
            Robot robot2 = new Robot();
            robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
            log.debug("Moved Mouse to somewhere side of page");*/
            } else {
                System.out.println("Drupal's are Enabled");
                log.debug("Drupal's are Enabled");
            }

            /*********************************************************************
             Drupal navigation change           ************************/
            if (driver.findElements(By.xpath("//div[@class='navContainer']/ul/li[@name='Shop']/a[contains(@href,'/shop')]")).size() >= 1) {

                Point coordinates = MouseHoverPage.MoveMouseOnShopTab_Drupal.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 100);
                log.debug("Moving Mouse on the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(MouseHoverPage.MoveMouseOnShopTab_Drupal).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(4000);

                Actions action1 = new Actions(driver);
                action1.moveToElement(MouseHoverPage.MoveMouseOnPhones_Drupal).perform();
                log.debug("Moving Mouse on the Browse Phones option");
                Thread.sleep(2000);

                // MouseHoverPage.MoveMouseOnPhones_Drupal.click();
                JavascriptExecutor executor = (JavascriptExecutor) driver;
                executor.executeScript("arguments[0].click();", MouseHoverPage.MoveMouseOnPhones_Drupal);
                Thread.sleep(2000);


                driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
                MouseHoverPage.PayGPhones_Drupal.click();

                log.debug("Clicking on PayG Phones");

                Thread.sleep(6000);
                Screenshots.captureScreenshot();

                /*// Move mouse pointer away from location
                Point coordinates2 = driver.findElement(By.xpath("(//div[@class='navContainer']/ul)[1]")).getLocation();
                Robot robot2 = new Robot();
                robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
                log.debug("Moved Mouse to somewhere side of page");*/
            } else {
                System.out.println("Drupal's are Disiabled");
                log.debug("Drupal's are Disiabled");
            }
        } catch (ElementNotVisibleException e) {
            log.debug("Failed to mouse over, &  Error as : " + e.getStackTrace());
            Assert.fail("Failed to Navigate to the Shop mouse over");
            Thread.sleep(2000);
        }
    }

    //Temporary Shop navigation method

    public static void shopNav() throws Exception {

        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

        try {
            log.debug("Performing PAYG Phones landing page navigations");

            Point coordinates = driver.findElement(By.xpath("//div[@class='navContainer']/ul/li/a[contains(@href,'/shop')]")).getLocation();
            Robot robot = new Robot();
            robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
            log.debug("Moving Mouse on the Shop Tab");

            Actions action = new Actions(driver);
            action.moveToElement(driver.findElement(By.xpath("//div[@class='navContainer']/ul/li/a[contains(@href,'/shop')]"))).perform();
            log.debug("Mouse over on the Shop Header ");
            Thread.sleep(2000);

            Actions action1 = new Actions(driver);
            action1.moveToElement(driver.findElement(By.xpath("//ul[@name='shop']/li/ul/li/a[text()='Browse phones']"))).perform();
            log.debug("Moving Mouse on the Browse Phones option");
            Thread.sleep(2000);

            driver.findElement(By.xpath("//ul[@name='shop']/li/ul/li/a[text()='Browse phones']")).click();
            Thread.sleep(5000);
            Screenshots.captureScreenshot();

            log.debug("Clicking on PayG Phones");

            // Move mouse pointer away from location
            Point coordinates2 = driver.findElement(By.xpath("//div[@class='navContainer']/ul")).getLocation();
            Robot robot2 = new Robot();
            robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
            log.debug("Moved Mouse to somewhere side of page");

            /*driver.findElement(By.xpath("//ul[@class='tabs']/li[contains(text(),'Pay As You Go')]")).click();
            Thread.sleep(5000);*/

            PayGPhonesLandingPage();

        } catch (ElementNotVisibleException e) {

            Thread.sleep(3000);

        }


    }

    // Below will navigate to Like New Phones Page

    /*
     * public static void likeNewHomepageNavigation() throws Exception {
     * driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS); boolean
     * Worksfine = false; while(!Worksfine) try {
     * log.debug("Performing Like New navigations");
     * log.debug("Performing Like New navigations");
     *
     * Point coordinates =
     * pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation(); Robot robot =
     * new Robot(); robot.mouseMove(coordinates.getX(),coordinates.getY()+120);
     *
     * Actions action = new Actions(driver);
     * action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnPhones).build(
     * ).perform(); Thread.sleep(2000);
     * action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnLikeNew).build
     * ().perform(); Thread.sleep(2000);
     *
     * pageobjects.MouseHoverPage.MoveMouseOnLikeNew.click();
     * Screenshots.captureScreenshot();
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
     * } catch(ElementNotVisibleException e) { //check if popup is present, if yes,
     * handle it. Environment.driver.switchTo().frame("edr_l_first");
     * log.debug("********We are switch to the iframe*******"); log.
     * debug("Popup has appeared on the screen, Hence trying to close the survey" );
     * Screenshots.captureScreenshot(); //Saying no to survey
     * driver.findElement(By.xpath("//a[@id='no']/span")).click();
     * log.debug("Closing the popup by saying No to Survey");
     * log.debug("*******Saying no to survey*******"); System.out.
     * println("*********Existing the popups present in iframe***************");
     * log.debug("Exiting the Survey");
     * Environment.driver.switchTo().defaultContent(); Thread.sleep(3000);
     *
     * }
     *
     * }
     */

    // Below will navigate to Like New Phones Page

    // Below will navigate to Tablets PayM Page

    public static void PayMTabletsLandingPage() throws Exception {
        //driver.manage().timeouts().implicitlyWait(45, TimeUnit.SECONDS);
            Thread.sleep(10000);
        try {
            /*********************************************************************
             normal execution flow in ref Env....        ************************/
            if (driver.findElements(By.xpath("//div[@class='nav-consumer']/ul/li/a[contains(@href, '/shop')]")).size() >= 1) {
                log.debug("Performing PAYM Tablets landing page navigations");
                log.debug("Performing PAYM Tablets landing page navigations");
                Thread.sleep(3000);

                Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
                log.debug("Moving Mouse onThread.sleep(2000); the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnShopTab).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(2000);

                Actions action1 = new Actions(driver);
                action1.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnBrowseTablets).perform();
                log.debug("Mouse over Shop---> Tablets ");
                log.debug("Moving Mouse on the Tablets dropdown");
                Thread.sleep(2000);

                pageobjects.MouseHoverPage.MoveMouseOnBrowseTablets.click();
                log.debug("Mouse over Shop---> Tablets--> Pay monthly phones ");
                Thread.sleep(5000);
                log.debug("Moving Mouse on the Paymonthly link");

                Screenshots.captureScreenshot();

                log.debug("Clicking on PayM Tablets");

                // Move mouse pointer away from location
                Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
                Robot robot2 = new Robot();
                robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
                log.debug("Moved Mouse to somewhere side of page");
            } else {
                System.out.println("Drupal's are Enabled");
                log.debug("Drupal's are Enabled");
            }

            /*********************************************************************
             Drupal navigation change           ************************/
            if (driver.findElements(By.xpath("//div[@class='navContainer']/ul/li[@name='Shop']/a[contains(@href,'/shop')]")).size() >= 1) {

                Point coordinates = MouseHoverPage.MoveMouseOnShopTab_Drupal.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 100);
                log.debug("Moving Mouse on the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(MouseHoverPage.MoveMouseOnShopTab_Drupal).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(2000);

                Actions action1 = new Actions(driver);
                action1.moveToElement(MouseHoverPage.MoveMouseOnBrowseTablets_Drupal).perform();
                log.debug("Moving Mouse on the Browse Tablets option");
                Thread.sleep(2000);

                // MouseHoverPage.MoveMouseOnPhones_Drupal.click();
                JavascriptExecutor executor = (JavascriptExecutor)driver;
                executor.executeScript("arguments[0].click();", MouseHoverPage.MoveMouseOnBrowseTablets_Drupal);
                Thread.sleep(5000);
                Screenshots.captureScreenshot();

                log.debug("Clicking on PayG Tablets");
                // Move mouse pointer away from location
                Point coordinates2 = driver.findElement(By.xpath("(//div[@class='navContainer']/ul)[1]")).getLocation();
                Robot robot2 = new Robot();
                robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
                log.debug("Moved Mouse to somewhere side of page");
            } else {
                System.out.println("Drupal's are Disiabled");
                log.debug("Drupal's are Disiabled");
            }
        } catch (ElementNotVisibleException e) {
            log.debug("Failed to mouse over, &  Error as : " + e.getStackTrace());
            Assert.fail("Failed to Navigate to the Shop mouse over");
            Thread.sleep(2000);
        }
    }

    // Below will navigate to PAYM SIMO Page
    public static void PayMSimoNavigation() throws Exception {
        //driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

        Thread.sleep(12000);

        try {
            /*********************************************************************
             normal execution flow in ref Env....        ************************/
            if (driver.findElements(By.xpath("//div[@class='nav-consumer']/ul/li/a[contains(@href, '/shop')]")).size() >= 1) {
                log.debug("Performing PAYM SimO navigations");
                log.debug("Performing PAYM SimO navigations");
                Thread.sleep(7000);

                Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
                log.debug("Moving mouse on the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnShopTab).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(2000);

                Actions action1 = new Actions(driver);
                action1.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnSims_paym_Drupal).perform();
                log.debug("Moving mouse on the Sims in Shop Dropdown");
                Thread.sleep(3000);



                pageobjects.MouseHoverPage.MoveMouseOnSims_paym_Drupal.click();
                Thread.sleep(5000);
                log.debug("Clicking on Pay M Sims");
                // Move mouse pointer away from location
                Point coordinates2 = driver.findElement(By.xpath("/[@id='header-consumer']/div")).getLocation();
                Robot robot2 = new Robot();
                robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
                log.debug("Moved Mouse to somewhere side of page");

                Thread.sleep(5000);

            } else {
                System.out.println("Drupal's are Enabled");
                log.debug("Drupal's are Enabled");
            }

            /*********************************************************************
             Drupal navigation change           ************************/
            if (driver.findElements(By.xpath("//div[@class='navContainer']/ul/li[@name='Shop']/a[contains(@href,'/shop')]")).size() >= 1) {

                Point coordinates = MouseHoverPage.MoveMouseOnShopTab_Drupal.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 100);
                log.debug("Moving Mouse on the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(MouseHoverPage.MoveMouseOnShopTab_Drupal).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(2000);

                Actions action1 = new Actions(driver);
                action1.moveToElement(MouseHoverPage.MoveMouseOnSimo_Drupal).perform();
                log.debug("Moving Mouse on the Browse Phones option");
                Thread.sleep(2000);

                // MouseHoverPage.MoveMouseOnPhones_Drupal.click();
                JavascriptExecutor executor = (JavascriptExecutor) driver;
                executor.executeScript("arguments[0].click();", MouseHoverPage.MoveMouseOnSimo_Drupal);
                //Thread.sleep(8000);
                log.debug("Clicking on Browse sims");

                driver.manage().timeouts().implicitlyWait(12,TimeUnit.SECONDS);
                pageobjects.MouseHoverPage.Sims_paym_Drupal.click();
                log.debug("Clicking on PayM Sims");
                Screenshots.captureScreenshot();


                // Move mouse pointer away from location
                /*Point coordinates2 = driver.findElement(By.xpath("(//div[@class='navContainer']/ul)[1]")).getLocation();
                Robot robot2 = new Robot();
                robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
                log.debug("Moved Mouse to somewhere side of page");*/
            } else {
                System.out.println("Drupal's are Disiabled");
                log.debug("Drupal's are Disiabled");
            }
        } catch (ElementNotVisibleException e) {
            log.debug("Failed to mouse over, &  Error as : " + e.getStackTrace());
            Assert.fail("Failed to Navigate to the Shop mouse over");
            Thread.sleep(2000);
        }
    }
    
    public static void likeNewHomepageNavigation() throws Exception {
        log.debug("Opening likeNewHomepageNavigation function");
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

        try {
            log.debug("Performing Like New navigations");
            log.debug("Performing Like New navigations");

            Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
            Robot robot = new Robot();
            robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);

            Actions action = new Actions(driver);
            action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnShopTab).perform();
            log.debug("Mouse over on the Shop Header ");
            Thread.sleep(2000);

            Actions action1 = new Actions(driver);
            action1.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnPhones).build().perform();
            Thread.sleep(2000);

            pageobjects.MouseHoverPage.MoveMouseOnLikeNew.click();
            Thread.sleep(5000);
            Screenshots.captureScreenshot();

            // Move mouse pointer away from location
            Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
            Robot robot2 = new Robot();
            robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);

            log.debug("Moved Mouse to somewhere side of page");

            log.debug("Hovered mouse successfully to Like New Phones option");

        } catch (ElementNotVisibleException e) {
            // check if popup is present, if yes, handle it.
            Environment.driver.switchTo().frame("edr_l_first");
            log.debug("********We are switch to the iframe*******");
            log.debug("Popup has appeared on the screen, Hence trying to close the survey");
            Screenshots.captureScreenshot();
            // Saying no to survey
            driver.findElement(By.xpath("//a[@id='no']/span")).click();
            log.debug("Closing the popup by saying No to Survey");
            log.debug("*******Saying no to survey*******");
            log.debug("*********Existing the popups present in iframe***************");
            log.debug("Exiting the Survey");
            Environment.driver.switchTo().defaultContent();
            Thread.sleep(3000);

        }

    }

    // Below will navigate to SMART TECH > SMART WATCHES Page
    public static void SmartwatchesLandingPage() throws Exception {
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

        try {

            log.debug("Performing Smartwatches navigations");
            log.debug("Performing Smartwatches navigations");

            driver.navigate().refresh();
            Thread.sleep(10000);

            Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
            Robot robot = new Robot();
            robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);

            Actions action = new Actions(driver);
            action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnShopTab).perform();
            log.debug("Mouse over on the Shop Header ");
            Thread.sleep(2000);

            Actions action1 = new Actions(driver);
            action1.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnSmarttechTab).perform();
            Thread.sleep(2000);

            pageobjects.MouseHoverPage.MoveMouseOnSmartwatches.click();
            Thread.sleep(5000);

            // Move mouse pointer away from location
            Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
            Robot robot2 = new Robot();
            robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
            log.debug("Moved Mouse to somewhere side of page");

            Screenshots.captureScreenshot();

        } catch (NoSuchElementException e) {
            // check if popup is present, if yes, handle it.
            Environment.driver.switchTo().frame("edr_l_first");
            log.debug("********We are switch to the iframe*******");
            log.debug("Popup has appeared on the screen, Hence trying to close the survey");
            Screenshots.captureScreenshot();
            // Saying no to survey
            driver.findElement(By.xpath("//a[@id='no']/span")).click();
            log.debug("Closing the popup by saying No to Survey");
            log.debug("*******Saying no to survey*******");
            log.debug("*********Existing the popups present in iframe***************");
            log.debug("Exiting the Survey");
            Environment.driver.switchTo().defaultContent();
            Thread.sleep(3000);
        }
    }

    // Below will navigate to SMART TECH > FITNESS TRACKERS Page
    public static void FitnessLandingPage() throws Exception {

        try {
            /*********************************************************************
             normal execution flow in ref Env....        ************************/
            if (driver.findElements(By.xpath("//div[@class='nav-consumer']/ul/li/a[contains(@href, '/shop')]")).size() >= 1) {
            log.debug("Performing Fitness tracker navigations");
            log.debug("Performing Fitness navigations");

           driver.navigate().refresh();
           Thread.sleep(5000);

            Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
            log.debug("Getting coordinates for shop tab");
            Robot robot = new Robot();
            robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);

            Actions action = new Actions(driver);
            action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnShopTab).perform();
            log.debug("Mouse over on the Shop Header ");
            Thread.sleep(2000);

            Actions action1 = new Actions(driver);
            action1.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnSmarttechTab).perform();
            log.debug("Moving mouse on SmartTech section");
            Thread.sleep(3000);

            pageobjects.MouseHoverPage.MoveMouseOnFitnessTrackers.click();
            log.debug("Moving mouse on SmartTech section -- > Clicking on Fitness Tracker");
            Thread.sleep(5000);

            // Move mouse pointer away from location
            Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
            Robot robot2 = new Robot();
            robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
            log.debug("Moved Mouse to somewhere side of page");

            } else {
                System.out.println("Drupal's are Enabled");
                log.debug("Drupal's are Enabled");
            }

            /*********************************************************************
             Drupal navigation change           ************************/
            if (driver.findElements(By.xpath("//div[@class='navContainer']/ul/li[@name='Shop']/a[contains(@href,'/shop')]")).size() >= 1) {

                Point coordinates = MouseHoverPage.MoveMouseOnShopTab_Drupal.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 100);
                log.debug("Moving Mouse on the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(MouseHoverPage.MoveMouseOnShopTab_Drupal).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(2000);

                Actions action1 = new Actions(driver);
                action1.moveToElement(MouseHoverPage.MoveMouseOnSmarttechTab_gdpr).perform();
                log.debug("Moving Mouse on the Browse Phones option");
                Thread.sleep(2000);

                // MouseHoverPage.MoveMouseOnPhones_Drupal.click();
                JavascriptExecutor executor = (JavascriptExecutor)driver;
                executor.executeScript("arguments[0].click();", MouseHoverPage.MoveMouseOnSmarttechTab_gdpr);
                Thread.sleep(5000);
                Screenshots.captureScreenshot();

                log.debug("Clicking on PayG Phones");
                // Move mouse pointer away from location
                Point coordinates2 = driver.findElement(By.xpath("(//div[@class='navContainer']/ul)[1]")).getLocation();
                Robot robot2 = new Robot();
                robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
                log.debug("Moved Mouse to somewhere side of page");
            } else {
                System.out.println("Drupal's are Disiabled");
                log.debug("Drupal's are Disiabled");
            }
        } catch (ElementNotVisibleException e) {
            log.debug("Failed to mouse over, &  Error as : " + e.getStackTrace());
            Assert.fail("Failed to Navigate to the Shop mouse over");
            Thread.sleep(2000);
        }
    }

    // Below will navigate to ACCESSORIES Page
    public static void AccessoriesLandingPage() throws Exception {
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

        try {
            /*********************************************************************
             normal execution flow in ref Env....        ************************/
            if (driver.findElements(By.xpath("//div[@class='nav-consumer']/ul/li/a[contains(@href, '/shop')]")).size() >= 1) {
                log.debug("Performing Accessories landing page navigations");
                Thread.sleep(3000);

                Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
                log.debug("Moving Mouse onThread.sleep(2000); the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnShopTab).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(2000);

                Actions action1 = new Actions(driver);
                action1.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnAccessoriesAndMoreTab).perform();
                log.debug("Mouse over Shop---> Accessories ");
                log.debug("Moving Mouse on the Accessories dropdown");
                Thread.sleep(2000);

                pageobjects.MouseHoverPage.MoveMouseOnAccessoriesAndMoreTab.click();
                log.debug("Mouse over Shop---> Accessories");
                Thread.sleep(5000);
                log.debug("Moving Mouse on the Paymonthly link");

                Screenshots.captureScreenshot();

                log.debug("Clicking on PayM Phones");

                // Move mouse pointer away from location
                Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
                Robot robot2 = new Robot();
                robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
                log.debug("Moved Mouse to somewhere side of page");
            } else {
                System.out.println("Drupal's are Enabled");
                log.debug("Drupal's are Enabled");
            }

            /*********************************************************************
             Drupal navigation change           ************************/
            if (driver.findElements(By.xpath("//div[@class='navContainer']/ul/li[@name='Shop']/a[contains(@href,'/shop')]")).size() >= 1) {

                Point coordinates = MouseHoverPage.MoveMouseOnShopTab_Drupal.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 100);
                log.debug("Moving Mouse on the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(MouseHoverPage.MoveMouseOnShopTab_Drupal).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(2000);

                Actions action1 = new Actions(driver);
                action1.moveToElement(MouseHoverPage.MoveMouseOnAccessoriesAndMoreTab_Drupal).perform();
                log.debug("Moving Mouse on the Browse Phones option");
                Thread.sleep(2000);

                // MouseHoverPage.MoveMouseOnPhones_Drupal.click();
                JavascriptExecutor executor = (JavascriptExecutor)driver;
                executor.executeScript("arguments[0].click();", MouseHoverPage.MoveMouseOnAccessoriesAndMoreTab_Drupal);
                Thread.sleep(5000);
                Screenshots.captureScreenshot();

                log.debug("Clicking on PayG Phones");
                // Move mouse pointer away from location
                Point coordinates2 = driver.findElement(By.xpath("(//div[@class='navContainer']/ul)[1]")).getLocation();
                Robot robot2 = new Robot();
                robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
                log.debug("Moved Mouse to somewhere side of page");
            } else {
                System.out.println("Drupal's are Disiabled");
                log.debug("Drupal's are Disiabled");
            }
        } catch (ElementNotVisibleException e) {
            log.debug("Failed to mouse over, &  Error as : " + e.getStackTrace());
            Assert.fail("Failed to Navigate to the Shop mouse over");
            Thread.sleep(2000);
        }
    }

	// Below will navigate to PAYG MBB page
    public static void PayGMBBPage() throws Exception {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

        try {
            /*********************************************************************
             normal execution flow in ref Env....        ************************/
            if (driver.findElements(By.xpath("//div[@class='nav-consumer']/ul/li/a[contains(@href, '/shop')]")).size() >= 1) {
                log.debug("Performing MBB landing page navigations");
                log.debug("Performing MBB Phones landing page navigations");
                Thread.sleep(3000);

                Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
                log.debug("Moving Mouse onThread.sleep(2000); the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnShopTab).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(2000);

                Actions action1 = new Actions(driver);
                action1.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnMobileBroadband).perform();
                log.debug("Mouse over Shop---> MBB ");
                log.debug("Moving Mouse on the MBB dropdown");
                Thread.sleep(2000);

                pageobjects.MouseHoverPage.MoveMouseOnMobileBroadband.click();
                log.debug("Mouse over Shop---> MBB");
                Thread.sleep(5000);
                log.debug("Moving Mouse on the MBB link");

                Screenshots.captureScreenshot();

                log.debug("Clicking on MBB");

                // Move mouse pointer away from location
                Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
                Robot robot2 = new Robot();
                robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
                log.debug("Moved Mouse to somewhere side of page");
            } else {
                System.out.println("Drupal's are Enabled");
                log.debug("Drupal's are Enabled");
            }

            /*********************************************************************
             Drupal navigation change           ************************/
            if (driver.findElements(By.xpath("//div[@class='navContainer']/ul/li[@name='Shop']/a[contains(@href,'/shop')]")).size() >= 1) {

                Point coordinates = MouseHoverPage.MoveMouseOnShopTab_Drupal.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 100);
                log.debug("Moving Mouse on the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(MouseHoverPage.MoveMouseOnShopTab_Drupal).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(2000);

                Actions action1 = new Actions(driver);
                action1.moveToElement(MouseHoverPage.MoveMouseOnMobileBroadband_Drupal).perform();
                log.debug("Moving Mouse on the MBB");
                Thread.sleep(2000);

                // MouseHoverPage.MoveMouseOnPhones_Drupal.click();
                JavascriptExecutor executor = (JavascriptExecutor) driver;
                executor.executeScript("arguments[0].click();", MouseHoverPage.MoveMouseOnMobileBroadband_Drupal);
                Thread.sleep(5000);
                Screenshots.captureScreenshot();

                log.debug("Clicking on MBB");

                driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
                pageobjects.MouseHoverPage.PayGMobileBroadband.click();

                log.debug("Clicking on PayG MBB");
                Thread.sleep(6000);

                /*// Move mouse pointer away from location
                Point coordinates2 = driver.findElement(By.xpath("(//div[@class='navContainer']/ul)[1]")).getLocation();
                Robot robot2 = new Robot();
                robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
                log.debug("Moved Mouse to somewhere side of page");*/
            } else {
                System.out.println("Drupal's are Disiabled");
                log.debug("Drupal's are Disiabled");
            }
        } catch (ElementNotVisibleException e) {
            log.debug("Failed to mouse over, &  Error as : " + e.getStackTrace());
            Assert.fail("Failed to Navigate to the Shop mouse over");
            Thread.sleep(2000);
        }
    }


    /*
     * ############## All the Below are for the CFU customer journey
     * ###################
     */

    // Below will navigate to upgrade --- > upgrade now page

    public static void UpgradeandUpgradeNow() throws Exception {
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

        try {

            log.debug("Performing Upgrade -- > upgrade now navigations");
            log.debug("Performing PAYG MBB navigations");
            Thread.sleep(3000);

            Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
            Robot robot = new Robot();
            robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);

            Actions action = new Actions(driver);
            action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnShopTab).perform();
            log.debug("Mouse over on the Shop Header ");
            Thread.sleep(2000);

            Actions action1 = new Actions(driver);
            action1.moveToElement(pageobjects.MouseHoverPage.MouseMoveonUpgrade).perform();
            log.debug("Moved mouse on upgrades");
            Thread.sleep(2000);

            pageobjects.MouseHoverPage.MouseMoveonUpgradeAndUpgradeNow.click();
            log.debug("Moved mouse on upgrades -- > upgradenow and clicked");
            Thread.sleep(5000);
            // Move mouse pointer away from location
            /*Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
            Robot robot2 = new Robot();
            robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
            log.debug("Moved Mouse to somewhere side of page");*/

            Screenshots.captureScreenshot();

        } catch (ElementNotVisibleException e) {
            // check if popup is present, if yes, handle it.
            Environment.driver.switchTo().frame("edr_l_first");
            log.debug("********We are switch to the iframe*******");
            // Saying no to survey
            driver.findElement(By.xpath("//a[@id='no']/span")).click();
            log.debug("*******Saying no to survey*******");
            log.debug("*********Existing the popups present in iframe***************");
            Environment.driver.switchTo().defaultContent();
            Screenshots.captureScreenshot();

        }

    }

    // Below will navigate to PAYM MBB page
    public static void PayMMBBPage() throws Exception {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

        try {
            /*********************************************************************
             normal execution flow in ref Env....        ************************/
            if (driver.findElements(By.xpath("//div[@class='nav-consumer']/ul/li/a[contains(@href, '/shop')]")).size() >= 1) {
                log.debug("Performing MBB landing page navigations");
                log.debug("Performing MBB Phones landing page navigations");
                Thread.sleep(3000);

                Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
                log.debug("Moving Mouse onThread.sleep(2000); the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnShopTab).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(2000);

                Actions action1 = new Actions(driver);
                action1.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnMobileBroadband).perform();
                log.debug("Mouse over Shop---> MBB ");
                log.debug("Moving Mouse on the MBB dropdown");
                Thread.sleep(2000);

                pageobjects.MouseHoverPage.MoveMouseOnMobileBroadband.click();
                log.debug("Mouse over Shop---> MBB");
                Thread.sleep(5000);
                log.debug("Moving Mouse on the MBB link");

                Screenshots.captureScreenshot();

                log.debug("Clicking on MBB");

                // Move mouse pointer away from location
                Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
                Robot robot2 = new Robot();
                robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
                log.debug("Moved Mouse to somewhere side of page");
            } else {
                System.out.println("Drupal's are Enabled");
                log.debug("Drupal's are Enabled");
            }

            /*********************************************************************
             Drupal navigation change           ************************/
            if (driver.findElements(By.xpath("//div[@class='navContainer']/ul/li[@name='Shop']/a[contains(@href,'/shop')]")).size() >= 1) {

                Point coordinates = MouseHoverPage.MoveMouseOnShopTab_Drupal.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 100);
                log.debug("Moving Mouse on the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(MouseHoverPage.MoveMouseOnShopTab_Drupal).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(2000);

                Actions action1 = new Actions(driver);
                action1.moveToElement(MouseHoverPage.MoveMouseOnMobileBroadband_Drupal).perform();
                log.debug("Moving Mouse on the MBB");
                Thread.sleep(2000);

                // MouseHoverPage.MoveMouseOnPhones_Drupal.click();
                JavascriptExecutor executor = (JavascriptExecutor)driver;
                executor.executeScript("arguments[0].click();", MouseHoverPage.MoveMouseOnMobileBroadband_Drupal);
                Thread.sleep(5000);
                Screenshots.captureScreenshot();

                log.debug("Clicking on MBB");
                // Move mouse pointer away from location
                Point coordinates2 = driver.findElement(By.xpath("(//div[@class='navContainer']/ul)[1]")).getLocation();
                Robot robot2 = new Robot();
                robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
                log.debug("Moved Mouse to somewhere side of page");
            } else {
                System.out.println("Drupal's are Disiabled");
                log.debug("Drupal's are Disiabled");
            }
        } catch (ElementNotVisibleException e) {
            log.debug("Failed to mouse over, &  Error as : " + e.getStackTrace());
            Assert.fail("Failed to Navigate to the Shop mouse over");
            Thread.sleep(2000);
        }
    }

    public static void iPadPage() throws Exception {
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

        try {
            log.debug("Performing navigations to iPad page");
            log.debug("Performing navigations to iPad page");

            Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
            Robot robot = new Robot();
            robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
            log.debug("Moving Mouse on the Shop Tab");

            Actions action = new Actions(driver);
            action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnShopTab).perform();
            log.debug("Mouse over on the Shop Header ");
            Thread.sleep(2000);

            Actions action1 = new Actions(driver);
            action1.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnTablets).perform();
            log.debug("Hovered over tablets option");
            Thread.sleep(4000);

            pageobjects.MouseHoverPage.MoveMouseOniPad.click();
            log.debug("Clicked on the iPad tab");
            Thread.sleep(5000);

            // Move mouse pointer away from location
            Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
            Robot robot2 = new Robot();
            robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
            log.debug("Moved Mouse to somewhere side of page");

            Screenshots.captureScreenshot();

        } catch (ElementNotVisibleException e) {
            // check if popup is present, if yes, handle it.
            Environment.driver.switchTo().frame("edr_l_first");
            log.debug("********We are switch to the iframe*******");
            log.debug("Popup has appeared on the screen, Hence trying to close the survey");
            Screenshots.captureScreenshot();
            // Saying no to survey
            driver.findElement(By.xpath("//a[@id='no']/span")).click();
            log.debug("Closing the popup by saying No to Survey");
            log.debug("*******Saying no to survey*******");
            log.debug("*********Existing the popups present in iframe***************");
            log.debug("Exiting the Survey");
            Environment.driver.switchTo().defaultContent();
            Thread.sleep(3000);
            Screenshots.captureScreenshot();

        }

    }
    // mousehover action

    // Below will navigate to PAYG FreeSim Page

    public static void PayGFreeSimNavigation() throws Exception {
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

        try {
            /*********************************************************************
             normal execution flow in ref Env....        ************************/
            if (driver.findElements(By.xpath("//div[@class='nav-consumer']/ul/li/a[contains(@href, '/shop')]")).size() >= 1) {
                log.debug("Performing PayGFreeSim Navigations");
                log.debug("Performing PayGFreeSim Navigations");

                Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
                log.debug("Moving mouse on the Shop Tab");
                log.debug("Moving Mouse on the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnShopTab).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(2000);

                Actions action1 = new Actions(driver);
                action1.moveToElement(pageobjects.MouseHoverPage.MouseOnSims).perform();
                log.debug("Moving mouse on the Sims in Shop Dropdown");
                log.debug("Moving mouse on the Sims in Shop Dropdown");
                Thread.sleep(2000);

                pageobjects.MouseHoverPage.MoveMouseOnPayGSims.click();
                log.debug("Clicked on PayG Sims");
                log.debug("Clicked on PayG Sims");
                Thread.sleep(5000);

                // Move mouse pointer away from location
                Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
                Robot robot2 = new Robot();
                robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
                log.debug("Moved Mouse to somewhere side of page");

                Screenshots.captureScreenshot();
            } else {
                System.out.println("Drupal's are Enabled");
                log.debug("Drupal's are Enabled");
            }
            /*********************************************************************
             Drupal navigation change           ************************/
            if (driver.findElements(By.xpath("//div[@class='navContainer']/ul/li[@name='Shop']/a[contains(@href,'/shop')]")).size() >= 1) {

                Point coordinates = MouseHoverPage.MoveMouseOnShopTab_Drupal.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 100);
                log.debug("Moving Mouse on the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(MouseHoverPage.MoveMouseOnShopTab_Drupal).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(2000);

                Actions action1 = new Actions(driver);
                action1.moveToElement(MouseHoverPage.MoveMouseOnPayGSims_Drupal).perform();
                log.debug("Moving Mouse on the Pay As You Go sims");
                Thread.sleep(2000);

                // MouseHoverPage.MoveMouseOnPhones_Drupal.click();
                JavascriptExecutor executor = (JavascriptExecutor) driver;
                executor.executeScript("arguments[0].click();", MouseHoverPage.MoveMouseOnPayGSims_Drupal);
                Thread.sleep(5000);
                Screenshots.captureScreenshot();

                log.debug("Clicking on Pay As You Go sims");
                // Move mouse pointer away from location
                Point coordinates2 = driver.findElement(By.xpath("(//div[@class='navContainer']/ul)[1]")).getLocation();
                Robot robot2 = new Robot();
                robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
                log.debug("Moved Mouse to somewhere side of page");
            } else {
                System.out.println("Drupal's are Disiabled");
                log.debug("Drupal's are Disiabled");
            }
        } catch (ElementNotVisibleException e) {
            log.debug("Failed to mouse over, &  Error as : " + e.getStackTrace());
            Assert.fail("Failed to Navigate to the Shop mouse over");
            Thread.sleep(2000);
        }
    }
    // Below will navigate to PAYG SIMO Page
    public static void PayGSimoNavigation() throws Exception {
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

        try {
            /*********************************************************************
             normal execution flow in ref Env....        ************************************************/
            Thread.sleep(3000);
            if (driver.findElements(By.xpath("//div[@class='nav-consumer']/ul/li/a[contains(@href, '/shop')]")).size() >= 1) {
                log.debug("Performing Pay As You go Sim landing page navigations");
                Thread.sleep(3000);

                Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
                log.debug("Moving Mouse onThread.sleep(2000); the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnShopTab).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(2000);


                Actions action1 = new Actions(driver);
                action1.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnSims).perform();
                log.debug("Moving mouse on the PayG Sims");
                Thread.sleep(2000);

                pageobjects.MouseHoverPage.MoveMouseOnSims.click();
                log.debug("Clicking on Sims");
                // Move mouse pointer away from location
                //Thread.sleep(5000);

                /*driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);

                pageobjects.MouseHoverPage.MoveMouseOnPayGSims.click();
                log.debug("Clicking on Pay G Sims");*/

                Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
                Robot robot2 = new Robot();
                robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
                log.debug("Moved Mouse to somewhere side of page");
            } else {
                System.out.println("Drupal's are Enabled");
                log.debug("Drupal's are Enabled");
            }

            /*********************************************************************
             Drupal navigation change           ************************/
            if (driver.findElements(By.xpath("//div[@class='navContainer']/ul/li[@name='Shop']/a[contains(@href,'/shop')]")).size() >= 1) {

                Point coordinates = MouseHoverPage.MoveMouseOnShopTab_Drupal.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 100);
                log.debug("Moving Mouse on the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(MouseHoverPage.MoveMouseOnShopTab_Drupal).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(2000);

                Actions action1 = new Actions(driver);
                action1.moveToElement(MouseHoverPage.MoveMouseOnSims_Drupal).perform();
                log.debug("Moving mouse on the PayG Sims");
                Thread.sleep(5000);

                // MouseHoverPage.MoveMouseOnPhones_Drupal.click();
                JavascriptExecutor executor = (JavascriptExecutor) driver;
                executor.executeScript("arguments[0].click();", MouseHoverPage.MoveMouseOnSims_Drupal);
                //Thread.sleep(5000);

                driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);

                pageobjects.MouseHoverPage.MoveMouseOnPayGSims.click();
                log.debug("Clicking on Pay G Sims");
                Screenshots.captureScreenshot();


                /*// Move mouse pointer away from location
                Point coordinates2 = driver.findElement(By.xpath("(//div[@class='navContainer']/ul)[1]")).getLocation();
                Robot robot2 = new Robot();
                robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
                log.debug("Moved Mouse to somewhere side of page");*/
            } else {
                System.out.println("Drupal's are Disiabled");
                log.debug("Drupal's are Disiabled");
            }
        } catch (Exception e) {
            log.debug("Failed to mouse over, &  Error as : " + e.getStackTrace());
            Assert.fail("Failed to Navigate to the Shop mouse over");
            Thread.sleep(2000);
        }
    }


    public static void MobilePayGSimLandingPage() throws Exception {
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

        try {

            log.debug("Performing PayGFreeSim Navigations");
            driver.findElement(By.xpath("//div[@class='mobile-nav-toggle is-mobile']/a")).click();
            log.debug("Clicked on --- icon at the end of the screen");
            driver.findElement(By.id("pn1")).click();
            log.debug("Clicked on shop tab");
            driver.findElement(By.xpath("//a[@href='https://www.o2.co.uk/shop/sim-cards'][@manual_cm_re='meganav_Shop-_-Sims-_-na']")).click();
            log.debug("Clicked on sims link");
            driver.findElement(By.xpath("//a[@href='https://www.o2.co.uk/shop/sim-cards/pay-as-you-go/'][@manual_cm_re='meganav_Shop-_-Sims-_-Pay & Go sims']")).click();
            log.debug("Clicking on PayG Sims");
            String ExpectedText = "Pay As You Go sims";
            String ActualText = driver.findElement(By.xpath("//div[@class='info']/h1")).getText();
            Assert.assertTrue(ActualText.contains(ExpectedText),
                    "Assertion Failed: Expected Message: " + ExpectedText + " is not present in the page");
            log.debug("Assertion Worked");


        } catch (Exception e) {
            // check if popup is present, if yes, handle it.
            log.debug("Exception caught");

            driver.findElement(By.xpath("//*[@id='no']/span")).click();
            log.debug("Completed Exception caught");

            Thread.sleep(3000);

        }

    }

    public static void PayasyouGoTablets() throws Exception {
        //driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

        Thread.sleep(10000);
        try {
            /*********************************************************************
             normal execution flow in ref Env....        ************************/
            if (driver.findElements(By.xpath("//div[@class='nav-consumer']/ul/li/a[contains(@href, '/shop')]")).size() >= 1) {

                log.debug("Performing Pay as you go Tablets navigations");
                log.debug("Performing Pay as you go Tablets navigations");
                Thread.sleep(3000);

                Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 120);
                log.debug("Moving Mouse onThread.sleep(2000); the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnShopTab).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(2000);

                Actions action1 = new Actions(driver);
                action1.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnTablets).perform();
                log.debug("Mouse over Shop---> Tablets ");
                log.debug("Moving Mouse on the Tablets dropdown");
                Thread.sleep(2000);

			/*	action.moveToElement(pageobjects.MouseHoverPage.MoveMouseonPayGTablets).build().perform();
				log.debug("Moving Mouse on the PAYG Tablets link");
				Screenshots.captureScreenshot();*/

                pageobjects.MouseHoverPage.MoveMouseonPayGTablets.click();
                log.debug("Mouse over Shop---> Tablets--> Pay as you go Tablets ");
                Screenshots.captureScreenshot();
                Thread.sleep(5000);

                log.debug("Clicking on Pay as you go Tablets");

                Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
                Robot robot2 = new Robot();
                robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
                log.debug("Moved Mouse to somewhere side of page");


            } else {
                System.out.println("Drupal's are Enabled");
                log.debug("Drupal's are Enabled");
            }

            /*********************************************************************
             Drupal navigation change           ************************/
            if (driver.findElements(By.xpath("//div[@class='navContainer']/ul/li[@name='Shop']/a[contains(@href,'/shop')]")).size() >= 1) {

                Point coordinates = MouseHoverPage.MoveMouseOnShopTab_Drupal.getLocation();
                Robot robot = new Robot();
                robot.mouseMove(coordinates.getX(), coordinates.getY() + 100);
                log.debug("Moving Mouse on the Shop Tab");

                Actions action = new Actions(driver);
                action.moveToElement(MouseHoverPage.MoveMouseOnShopTab_Drupal).perform();
                log.debug("Mouse over on the Shop Header ");
                Thread.sleep(2000);

                Actions action1 = new Actions(driver);
                action1.moveToElement(MouseHoverPage.MoveMouseOnBrowseTablets_Drupal).perform();
                log.debug("Moving Mouse on the Browse Tablets option");
                Thread.sleep(2000);

                // MouseHoverPage.MoveMouseOnPhones_Drupal.click();
                JavascriptExecutor executor = (JavascriptExecutor)driver;
                executor.executeScript("arguments[0].click();", MouseHoverPage.MoveMouseOnBrowseTablets_Drupal);
                Thread.sleep(5000);
                Screenshots.captureScreenshot();

                JavascriptExecutor executor1 = (JavascriptExecutor)driver;
                executor1.executeScript("arguments[0].click();", MouseHoverPage.PayGBrowseTablets_Drupal);
                Thread.sleep(5000);

                log.debug("Clicking on PayG Tablets");
                // Move mouse pointer away from location
                /*Point coordinates2 = driver.findElement(By.xpath("(//div[@class='navContainer']/ul)[1]")).getLocation();
                Robot robot2 = new Robot();
                robot2.mouseMove(coordinates2.getX(), coordinates.getY() + 300);
                log.debug("Moved Mouse to somewhere side of page");*/
            } else {
                System.out.println("Drupal's are Disiabled");
                log.debug("Drupal's are Disiabled");
            }
        } catch (ElementNotVisibleException e) {
            log.debug("Failed to mouse over, &  Error as : " + e.getStackTrace());
            Assert.fail("Failed to Navigate to the Shop mouse over");
            Thread.sleep(2000);
        }

    }
}
