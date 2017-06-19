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

public class Delivery_Steps {
	
	
	public WebDriver driver;
    public List<HashMap<String, String>> datamap;
    

	    public Delivery_Steps() {
	        driver = Hooks.driver;
	        //datamap = DataReader.data();

	       
	    }
	    
	   
		@Given("^input all the fields on the Delivery page and Click on the 'Continue button'$")
		public void input_all_the_fields_on_the_Delivery_page_and_Click_on_the_Continue_button() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			 PageFactory.initElements(driver, DeliveryPage.class);
		     DeliveryPageActions.SetDelivery();
		     DeliveryPageActions.AboutYou(datamap);
		     DeliveryPageActions.ClickContinue();
		}

	    
	  
	  
}