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

public class Basket_Steps {
	
	
	public WebDriver driver;
    public List<HashMap<String, String>> datamap;
    

	    public Basket_Steps() {
	        driver = Hooks.driver;
	        //datamap = DataReader.data();

	    }
	    
	   
		@Given("^I Land on the basket page and choose home delivery option$")
		public void i_Land_on_the_basket_page_and_choose_home_delivery_option() throws Throwable {
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);    
			PageFactory.initElements(driver, BasketPage.class);
			BasketPageActions.ValidateBasketPageContents() ;
			BasketPageActions.CollectionorDelivery("homeDelivery");
				

		}

		@Given("^click on \"([^\"]*)\" button$")
		public void click_on_button(String arg1) throws Throwable {
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			BasketPageActions.gotoCheckout();
		}


	    
	    
	  
	  
}