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

public class DeviceListing_Steps {
	
	
	public WebDriver driver;
    public List<HashMap<String, String>> datamap;
    

	    public DeviceListing_Steps() 
	    {
	        driver = Hooks.driver;
	        //datamap = DataReader.data();
      
	    }
	    
	   
	    @Given("^I choose PayM \"([^\"]*)\"$")
	    public void i_choose_PayM(String arg1) throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, PhonesListingPage.class);
	    	PhonesListingPageAction.PhoneSelect("GalaxyS7");
	    
	    }
	    
	    
	  
	  
}