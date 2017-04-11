package steps_anotherApproach;

import java.util.HashMap;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import GlobalActions.Autoredirection;
import GlobalActions.MouseHoverAction;
import GlobalActions.Screenshots;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helpers.*;
import pageobjects.*;
import actionsPerformed.*;

public class ShopMouseNavigations_Steps {
	
	
	public WebDriver driver;
    public List<HashMap<String, String>> datamap;
    

	    public ShopMouseNavigations_Steps() {
	        driver = Hooks.driver;
	        //datamap = DataReader.data();

	       
	    }
	    
	   
	    @Given("^navigate to PAYM Phones page$")
	    public void navigate_to_PAYM_Phones_page() throws Throwable 
	    {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, MouseHoverPage.class);
	    	MouseHoverAction.PayMPhonesLandingPage();
			//Autoredirection.redirect();
	    }
	  
	    
	    @Given("^Navigate to Accessories$")
	    public void navigate_to_Accessories() throws Throwable {
	    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    	PageFactory.initElements(driver, MouseHoverPage.class);
	    	MouseHoverAction.AccessoriesLandingPage();
	    }

	    
	    
	  
	  
}