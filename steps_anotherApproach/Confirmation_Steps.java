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

public class Confirmation_Steps {
	
	
	public WebDriver driver;
    public List<HashMap<String, String>> datamap;
    

	    public Confirmation_Steps() {
	        driver = Hooks.driver;
	        //datamap = DataReader.data();

	       
	    }
	    
	   
		@Then("^order confirmation is displayed$")
		public void order_confirmation_is_displayed() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			PageFactory.initElements(driver,OrderConfirmationPage.class);
  	    	OrderConfirmationPageActions.gettitlepage();
  	    	OrderConfirmationPageActions.MessageDisplayed();
		}
	    
	  
	  
}