package actionsPerformed;

import java.util.HashMap;
import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

import helpers.Environment;



public class Actions_FreeSimPage extends Environment  
  {
	
	public static WebDriver driver;
	public List<HashMap<String, String>> datamap;
	static Logger log = Logger.getLogger("devpinoyLogger");
	static JavascriptExecutor js = (JavascriptExecutor) driver;
	

	



		

		
		public static void SendMeMySim() throws InterruptedException
           {
			  
			System.out.println("Clicking on Send me  my Free Sim page");
			Thread.sleep(3000);
			pageobjects.DeliveryPage.SendMeMySim.click();
			log.debug("Clicking on the Send me my Sim Button");
		   }
		    
		}
		

