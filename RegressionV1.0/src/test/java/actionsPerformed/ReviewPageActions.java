package actionsPerformed;

import org.apache.log4j.Logger;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import helpers.Environment;

public class ReviewPageActions extends Environment  {
	static Logger log = Logger.getLogger("devpinoyLogger");

	  
	  public static void gettitlepage()
	  {
		  
		   System.out.println(driver.getTitle());
		   
	  
	   }
	  
	
	  public static void TermsCheckBox() 
	  {
		  System.out.println("Clicking on the checkbox");
		  pageobjects.ReviewPage.TermsCheckBox.click();
		  log.debug("Clicked the Checkbox in Terms");
	  }
	 
	  public static void PayNow() 
	  {
		  System.out.println("Clicking on Pay now");
		  pageobjects.ReviewPage.PayNow.click();
		  System.out.println("Completing on Review page");
		  log.debug("Clicked the Paynow button");

	  }

	  
	  public static void checktrustev() 
	  {
		  String Source= driver.getPageSource();		  
		  String Trustev = "trustev" ;
		  	
		  if( containsIgnoreCase( Source, Trustev) ) {
			  System.out.println( "Trustev is enabled" );
			}else
				System.out.println( "Trustev is NOT enabled" );	
	  }


	  private static boolean containsIgnoreCase(String source, String trustev) {

		return false;
	}


	public static void checkOrderContractText() {
		// TODO Auto-generated method stub
		
	}
}
