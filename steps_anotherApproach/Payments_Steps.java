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

public class Payments_Steps {
	
	
	public WebDriver driver;
    public List<HashMap<String, String>> datamap;
    

	    public Payments_Steps() {
	        driver = Hooks.driver;
	        //datamap = DataReader.data();

	       
	    }
	    	   
	    @Given("^I land on the payment page and input all the details and click 'Continue on next step'$")
		public void i_land_on_the_payment_page_and_input_all_the_details_and_click_Continue_on_next_step() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			PageFactory.initElements(driver,PaymentPage.class);
	    	PaymentPageActions.Set_Bank_details();
	    	 PaymentPageActions.Time_At_Address();
	    	 PaymentPageActions.Card_Details();
	    	 driver.switchTo().defaultContent();
			}
	    

	    @Given("^I land on the Non Credit check payment page and input all the details and click 'Continue on next step'$")
	    public void i_land_on_the_Non_Credit_check_payment_page_and_input_all_the_details_and_click_Continue_on_next_step() throws Throwable 
	    	{
	    	
	    	}
	  
}