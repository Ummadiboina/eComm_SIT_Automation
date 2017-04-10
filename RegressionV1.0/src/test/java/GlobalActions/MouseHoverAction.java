package GlobalActions;

import java.awt.AWTException;
import java.awt.Robot;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.Point;
import org.openqa.selenium.interactions.Actions;
import org.apache.log4j.Logger;


import helpers.Environment;


public class MouseHoverAction extends Environment
{
static	Logger log = Logger.getLogger("devpinoyLogger");

   	 
/*##############   All the Below are for the CFA customer journey ###################*/
	  //Below will navigate to BestSelling Devices Page

	 
	  //Below will navigate to PayM Phones Page
	 
	public static void PayMPhonesLandingPage() throws Exception 
	 {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		boolean Worksfine = false;
		while(!Worksfine){

			try
	    	{
		 
		System.out.println("Performing PAYM Phones landing page navigations");
		  log.debug("Performing PAYM Phones landing page navigations");
		  
		  Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
		  Robot robot = new Robot();
		  robot.mouseMove(coordinates.getX(),coordinates.getY()+120);
			 log.debug("Moving Mouse on the Shop Tab");

		  
		  Actions action = new Actions(driver);
		  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnPhones).build().perform();
			 log.debug("Moving Mouse on the Phones dropdown");

		  Thread.sleep(2000);
		  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnPAYMPhones).build().perform();
			 log.debug("Moving Mouse on the Paymonthly link");

		  Thread.sleep(2000);
		  pageobjects.MouseHoverPage.MoveMouseOnPAYMPhones.click();
			 log.debug("Clicking on PayM Phones");

		  //Move mouse pointer away from location
		  Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
			 

   		  Robot robot2 = new Robot();
   		  robot2.mouseMove(coordinates2.getX(),coordinates.getY()+120);
   		log.debug("Moved Mouse to somewhere side of page");
   		
   		Worksfine = true;

	    	}
	    	catch(ElementNotVisibleException  e)
	    	{
	    	//check if popup is present, if yes, handle it.
	    		Environment.driver.switchTo().frame("edr_l_first"); 
	    		System.out.println("********We are switch to the iframe*******");
	       		log.debug("Popup has appeared on the screen, Hence trying to close the survey");

	    		//Saying no to survey
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
	
	  //Below will navigate to PayG Phones Page
	  
	  //Below will navigate to Like New Phones Page
		  
	

		public static void likeNewHomepageNavigation() throws InterruptedException, AWTException 
	   {
		  
			try
	    	{
		  System.out.println("Performing Like New navigations");
		  Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
		  Robot robot = new Robot();
		  robot.mouseMove(coordinates.getX(),coordinates.getY()+120);
		 		  
		  Actions action = new Actions(driver);
		  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnPhones).build().perform();
		  Thread.sleep(2000);
		  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnLikeNew).build().perform();
		  Thread.sleep(2000);
		  pageobjects.MouseHoverPage.MoveMouseOnLikeNew.click();

		  //Move mouse pointer away from location
		  Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
   		  Robot robot2 = new Robot();
   		  robot2.mouseMove(coordinates2.getX(),coordinates.getY()+120);
	    	}
	    	catch(ElementNotVisibleException e)
	    	{
	    	//check if popup is present, if yes, handle it.
	    		Environment.driver.switchTo().frame("edr_l_first"); 
	    		System.out.println("********We are switch to the iframe*******");
	    		//Saying no to survey
	    		driver.findElement(By.xpath("//a[@id='no']/span")).click();
	    		System.out.println("*******Saying no to survey*******");
	    		System.out.println("*********Existing the popups present in iframe***************");
	    		Environment.driver.switchTo().defaultContent();
	    		System.out.println("Performing Like New navigations");
	  		  Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
	  		  Robot robot = new Robot();
	  		  robot.mouseMove(coordinates.getX(),coordinates.getY()+120);
	  		 		  
	  		  Actions action = new Actions(driver);
	  		  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnPhones).build().perform();
	  		  Thread.sleep(2000);
	  		  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnLikeNew).build().perform();
	  		  Thread.sleep(2000);
	  		  pageobjects.MouseHoverPage.MoveMouseOnLikeNew.click();

	  		  //Move mouse pointer away from location
	  		  Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
	     		  Robot robot2 = new Robot();
	     		  robot2.mouseMove(coordinates2.getX(),coordinates.getY()+120);
	    	}
			
	  }
	  
      //Below will navigate to Tablets PayM Page
		public static void PayMTabletsLandingPage() throws InterruptedException, AWTException 
		 {
			  
				try
		    	{
			  System.out.println("Performing navigations to PAYM Tablets");
			  log.debug("Performing navigations to PAYM Tablets");
			  Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
			  Robot robot = new Robot();
			  robot.mouseMove(coordinates.getX(),coordinates.getY()+120);
			  log.debug("Moving Mouse on the Shop Tab");
			  Actions action = new Actions(driver);
			  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnTablets).build().perform();
			  Thread.sleep(2000);
			  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnBrowseTablets).build().perform();
			  Thread.sleep(2000);
			  pageobjects.MouseHoverPage.MoveMouseOnBrowseTablets.click();

			  //Move mouse pointer away from location
			  Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
	   		  Robot robot2 = new Robot();
	   		  robot2.mouseMove(coordinates2.getX(),coordinates.getY()+120);
		    	}
		    	catch(ElementNotVisibleException e)
		    	{
		    	//check if popup is present, if yes, handle it.
		    		Environment.driver.switchTo().frame("edr_l_first"); 
		    		System.out.println("********We are switch to the iframe*******");
		    		//Saying no to survey
		    		driver.findElement(By.xpath("//a[@id='no']/span")).click();
		    		System.out.println("*******Saying no to survey*******");
		    		System.out.println("*********Existing the popups present in iframe***************");
		    		Environment.driver.switchTo().defaultContent();
		    		System.out.println("Performing navigations to PAYM Tablets");
					  Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
					  Robot robot = new Robot();
					  robot.mouseMove(coordinates.getX(),coordinates.getY()+120);
					 		  
					  Actions action = new Actions(driver);
					  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnTablets).build().perform();
					  Thread.sleep(2000);
					  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnBrowseTablets).build().perform();
					  Thread.sleep(2000);
					  pageobjects.MouseHoverPage.MoveMouseOnBrowseTablets.click();

					  //Move mouse pointer away from location
					  Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
			   		  Robot robot2 = new Robot();
			   		  robot2.mouseMove(coordinates2.getX(),coordinates.getY()+120);
		    	}
				
		  }
		
	  //Below will navigate to Tablets PayG Page
	  
	  
	  //Below will navigate to Upgrade > Upgrade now Page
	  
	  
	  //Below will navigate to PAYM SIMO Page
		  
	  public static void PayMSimoNavigation() throws InterruptedException, AWTException 
	  {
		  try
	    	{
			  	
			  System.out.println("Performing PAYM SimO navigations");
			  log.debug("Performing PAYM SimO navigations");
			  Thread.sleep(1000);
			  Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
	   		  Robot robot = new Robot();
	   		  robot.mouseMove(coordinates.getX(),coordinates.getY()+120);
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
	   		  //Move mouse pointer away from location
			  Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
	   		  Robot robot2 = new Robot();
	   		  robot2.mouseMove(coordinates2.getX(),coordinates.getY()+120);
			  
	    	}
	    	catch(NoSuchElementException e)
	    	{
	    	//check if popup is present, if yes, handle it.
	    		Environment.driver.switchTo().frame("edr_l_first"); 
	    		System.out.println("********We are switch to the iframe*******");
	    		//Saying no to survey
	    		driver.findElement(By.xpath("//a[@id='no']/span")).click();
	    		System.out.println("*******Saying no to survey*******");
	    		System.out.println("*********Exiting the popups present in iframe***************");
	    		Environment.driver.switchTo().defaultContent();
	    		
	    		    		
	    		
	    	}
	    	
		  
		 
	  }
	  
	  //Below will navigate to PAYG SIMO Page

	  
	  //Below will navigate to INTERNATIONAL SIMO Page
	  
	  
	  //Below will navigate to IPAD SIMO Page
	  
	  
	  //Below will navigate to Tablet SIMO Page
	  
	  
	  //Below will navigate to Great Deals Page
	  
	 
	  //Below will navigate to SMART TECH Page
	  
	  
	  //Below will navigate to BROWSE SMART TECH Page
	  
	  
	  //Below will navigate to SMART TECH > SMART WATCHES Page
	  public static void SmartwatchesLandingPage() throws InterruptedException, AWTException 
	  {
		  try
	    	{
			  	
			  System.out.println("Performing Smartwatches navigations");
			  Thread.sleep(4000);
			  Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
	   		  Robot robot = new Robot();
	   		  robot.mouseMove(coordinates.getX(),coordinates.getY()+120);
	   		 		  
	   		  Actions action = new Actions(driver);
	   		  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnSmarttechTab).build().perform();
	   		  Thread.sleep(2000);
	   		  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnSmartwatches).build().perform();
	   		  Thread.sleep(2000);
	   		  pageobjects.MouseHoverPage.MoveMouseOnSmartwatches.click();

	   		  //Move mouse pointer away from location
			  Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
	   		  Robot robot2 = new Robot();
	   		  robot2.mouseMove(coordinates2.getX(),coordinates.getY()+120);
			  
	    	}
	    	catch(NoSuchElementException e)
	    	{
	    	//check if popup is present, if yes, handle it.
	    		Environment.driver.switchTo().frame("edr_l_first"); 
	    		System.out.println("********We are switch to the iframe*******");
	    		//Saying no to survey
	    		driver.findElement(By.xpath("//a[@id='no']/span")).click();
	    		System.out.println("*******Saying no to survey*******");
	    		System.out.println("*********Exiting the popups present in iframe***************");
	    		Environment.driver.switchTo().defaultContent();
	    		  System.out.println("Performing Smartwatches navigations");
				  Thread.sleep(4000);
				  Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
		   		  Robot robot = new Robot();
		   		  robot.mouseMove(coordinates.getX(),coordinates.getY()+120);
		   		 		  
		   		  Actions action = new Actions(driver);
		   		  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnSmarttechTab).build().perform();
		   		  Thread.sleep(2000);
		   		  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnSmartwatches).build().perform();
		   		  Thread.sleep(2000);
		   		  pageobjects.MouseHoverPage.MoveMouseOnSmartwatches.click();

		   		  //Move mouse pointer away from location
				  Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
		   		  Robot robot2 = new Robot();
		   		  robot2.mouseMove(coordinates2.getX(),coordinates.getY()+120);
	    		    		
	    		
	    	}
	  }
	  
	  //Below will navigate to SMART TECH > FITNESS TRACKERS Page
	  public static void FitnessLandingPage() throws InterruptedException, AWTException 
	  {
		  try
	    	{
			  	
			  System.out.println("Performing FitnessTracker navigations");
			  Thread.sleep(4000);
			  Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
	   		  Robot robot = new Robot();
	   		  robot.mouseMove(coordinates.getX(),coordinates.getY()+120);
	   		 		  
	   		  Actions action = new Actions(driver);
	   		  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnSmarttechTab).build().perform();
	   		  Thread.sleep(2000);
	   		  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnFitnesstracker).build().perform();
	   		  Thread.sleep(2000);
	   		  pageobjects.MouseHoverPage.MoveMouseOnFitnesstracker.click();

	   		  //Move mouse pointer away from location
			  Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
	   		  Robot robot2 = new Robot();
	   		  robot2.mouseMove(coordinates2.getX(),coordinates.getY()+120);
			  
	    	}
	    	catch(NoSuchElementException e)
	    	{
	    	//check if popup is present, if yes, handle it.
	    		Environment.driver.switchTo().frame("edr_l_first"); 
	    		System.out.println("********We are switch to the iframe*******");
	    		//Saying no to survey
	    		driver.findElement(By.xpath("//a[@id='no']/span")).click();
	    		System.out.println("*******Saying no to survey*******");
	    		System.out.println("*********Exiting the popups present in iframe***************");
	    		Environment.driver.switchTo().defaultContent();
	    		 System.out.println("Performing FitnessTracker navigations");
				  Thread.sleep(4000);
				  Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
		   		  Robot robot = new Robot();
		   		  robot.mouseMove(coordinates.getX(),coordinates.getY()+120);
		   		 		  
		   		  Actions action = new Actions(driver);
		   		  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnSmarttechTab).build().perform();
		   		  Thread.sleep(2000);
		   		  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnFitnesstracker).build().perform();
		   		  Thread.sleep(2000);
		   		  pageobjects.MouseHoverPage.MoveMouseOnFitnesstracker.click();

		   		  //Move mouse pointer away from location
				  Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
		   		  Robot robot2 = new Robot();
		   		  robot2.mouseMove(coordinates2.getX(),coordinates.getY()+120);
	    		
	    	}
	  }
	  	  
	  //Below will navigate to ACCESSORIES Page
	  public static void AccessoriesLandingPage() throws InterruptedException, AWTException 
	  {
		  try
	    	{
			  	
			  System.out.println("Performing Accessories navigations");
			  Thread.sleep(4000);
			  Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
	   		  Robot robot = new Robot();
	   		  robot.mouseMove(coordinates.getX(),coordinates.getY()+120);
	   		 		  
	   		  Actions action = new Actions(driver);
	   		  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnAccessoriesTab).build().perform();
	   		  Thread.sleep(2000);
	   		  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnBrowseAccessories).build().perform();
	   		  Thread.sleep(2000);
	   		  pageobjects.MouseHoverPage.MoveMouseOnBrowseAccessories.click();

	   		  //Move mouse pointer away from location
			  Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
	   		  Robot robot2 = new Robot();
	   		  robot2.mouseMove(coordinates2.getX(),coordinates.getY()+120);
			  
	    	}
	    	catch(NoSuchElementException e)
	    	{
	    	//check if popup is present, if yes, handle it.
	    		Environment.driver.switchTo().frame("edr_l_first"); 
	    		System.out.println("********We are switch to the iframe*******");
	    		//Saying no to survey
	    		driver.findElement(By.xpath("//a[@id='no']/span")).click();
	    		System.out.println("*******Saying no to survey*******");
	    		System.out.println("*********Exiting the popups present in iframe***************");
	    		Environment.driver.switchTo().defaultContent();
	    		  System.out.println("Performing Accessories navigations");
				  Thread.sleep(4000);
				  Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
		   		  Robot robot = new Robot();
		   		  robot.mouseMove(coordinates.getX(),coordinates.getY()+120);
		   		 		  
		   		  Actions action = new Actions(driver);
		   		  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnAccessoriesTab).build().perform();
		   		  Thread.sleep(2000);
		   		  action.moveToElement(pageobjects.MouseHoverPage.MoveMouseOnBrowseAccessories).build().perform();
		   		  Thread.sleep(2000);
		   		  pageobjects.MouseHoverPage.MoveMouseOnBrowseAccessories.click();

		   		  //Move mouse pointer away from location
				  Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
		   		  Robot robot2 = new Robot();
		   		  robot2.mouseMove(coordinates2.getX(),coordinates.getY()+120);
	    		    		
	    		
	    	}
	  }
	  
  
// Below will navigate to upgrade --- > upgrade now page
	  
	  public static void UpgradeandUpgradeNow() throws InterruptedException, AWTException 
		 {
			  
				try
		    	{
			  System.out.println("Performing Upgrade upgrade now navigations");
			  Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
			  Robot robot = new Robot();
			  robot.mouseMove(coordinates.getX(),coordinates.getY()+120);
			 		  
			  Actions action = new Actions(driver);
			  action.moveToElement(pageobjects.MouseHoverPage.MouseMoveonUpgrade).build().perform();
			  Thread.sleep(2000);
			  action.moveToElement(pageobjects.MouseHoverPage.MouseMoveonUpgradeAndUpgradeNow).build().perform();
			  Thread.sleep(2000);
			  pageobjects.MouseHoverPage.MouseMoveonUpgradeAndUpgradeNow.click();

			  //Move mouse pointer away from location
			  Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
			  Robot robot2 = new Robot();
			  robot2.mouseMove(coordinates2.getX(),coordinates.getY()+120);
		    	}
		    	catch(ElementNotVisibleException e)
		    	{
		    	//check if popup is present, if yes, handle it.
		    		Environment.driver.switchTo().frame("edr_l_first"); 
		    		System.out.println("********We are switch to the iframe*******");
		    		//Saying no to survey
		    		driver.findElement(By.xpath("//a[@id='no']/span")).click();
		    		System.out.println("*******Saying no to survey*******");
		    		System.out.println("*********Existing the popups present in iframe***************");
		    		Environment.driver.switchTo().defaultContent();
		    		System.out.println("Performing Upgrade upgrade now navigations");
					  Point coordinates = pageobjects.MouseHoverPage.MoveMouseOnShopTab.getLocation();
					  Robot robot = new Robot();
					  robot.mouseMove(coordinates.getX(),coordinates.getY()+120);
					 		  
					  Actions action = new Actions(driver);
					  action.moveToElement(pageobjects.MouseHoverPage.MouseMoveonUpgrade).build().perform();
					  Thread.sleep(2000);
					  action.moveToElement(pageobjects.MouseHoverPage.MouseMoveonUpgradeAndUpgradeNow).build().perform();
					  Thread.sleep(2000);
					  pageobjects.MouseHoverPage.MouseMoveonUpgradeAndUpgradeNow.click();

					  //Move mouse pointer away from location
					  Point coordinates2 = driver.findElement(By.xpath("//*[@id='header-consumer']/div")).getLocation();
					  Robot robot2 = new Robot();
					  robot2.mouseMove(coordinates2.getX(),coordinates.getY()+120);
		    	}
				
				
		  }
	  
	 
 
}


