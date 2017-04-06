package actionsPerformed;

import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import helpers.Environment;




public class OrderConfirmationPageActions extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");

	  
	  public static void gettitlepage()
	  {
		  
		   System.out.println(driver.getTitle());
			  log.info("The Page Title is "+driver.getTitle());

		   
	  
	   }
	  
	
	  public static void MessageDisplayed() 
	  {
		  System.out.println("This is order confirmation page and the message in this page is as below......");
		  log.info("This is order confirmation page and the message in this page is as below......");

		  try{
		  List<WebElement> outercontainer = driver.findElements(By.xpath("//*[@id='order-number']"));
		  log.debug("Trying to find the Element for order number using element identifier");


			List<WebElement> DataContainer = outercontainer.get(0).findElements(By.xpath("//*[@id='order-number']"));
				        
				      
				        for (int i=0; i<=DataContainer.size();i++)
				        {
				        			            
				        	System.out.println(DataContainer.get(i).getText());		
				  		  log.info(DataContainer.get(i).getText());
				        }
		  }
			catch (IndexOutOfBoundsException e) {
				
			}
						}
		        	
	  public static void VolteMessageDisplayed() 
	  {
		  System.out.println("The Volte message in this page is as below......");
		  try{
		  List<WebElement> outercontainer = driver.findElements(By.xpath("//*[@id='imsMessage']"));

			List<WebElement> DataContainer = outercontainer.get(0).findElements(By.xpath("//*[@id='imsMessage]"));
				        
				      
				        for (int i=0; i<=DataContainer.size();i++)
				        {
				        			            
				        	System.out.println(DataContainer.get(i).getText());			        
				        }
		  }
			catch (IndexOutOfBoundsException e) {
				
			}
						}
		        	
          	
		          	


	  }
	 
	  

