package steps_anotherApproach;

import java.util.HashMap;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import GlobalActions.Autoredirection;
import GlobalActions.MouseHoverAction;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helpers.*;
import pageobjects.*;
import actionsPerformed.*;

public class Review_Steps {
	
	
	public WebDriver driver;
    public List<HashMap<String, String>> datamap;
    

	    public Review_Steps() {
	        driver = Hooks.driver;
	        //datamap = DataReader.data();

	       
	    }
	    
	   

		@Given("^Continue to Review page and review the order$")
		public void continue_to_Review_page_and_review_the_order() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			PageFactory.initElements(driver,ReviewPage.class);
  	    	ReviewPageActions.gettitlepage();
  	    	ReviewPageActions.TermsCheckBox();
  	    	ReviewPageActions.PayNow();  	    	
		}
	    
	  
	  
}