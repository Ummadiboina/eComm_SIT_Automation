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

public class Accessories_Steps {
	
	
	public WebDriver driver;
    public List<HashMap<String, String>> datamap;
    

	    public Accessories_Steps() 
	    {
	        driver = Hooks.driver;
	        //datamap = DataReader.data();
      
	    }
	    
	   
  

@Given("^add valid Accessories to basket within the limit and navigate to basket$")
public void add_valid_Accessories_to_basket_within_the_limit_and_navigate_to_basket() throws Throwable {
	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);    
	PageFactory.initElements(driver, AccessoryPage.class);
	AccessoryPageActions.selectAnyAccessoryLimit();
}

	  
}