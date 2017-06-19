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

public class TariffandExtras_Steps {
	
	
	public WebDriver driver;
    public List<HashMap<String, String>> datamap;
    

	    public TariffandExtras_Steps() {
	        driver = Hooks.driver;
	        //datamap = DataReader.data();

	       
	    }
	    
	   
	    @Given("^Land on the 'Tariffs and extra' page$")
		public void land_on_the_Tariffs_and_extra_page() throws Throwable {
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			PageFactory.initElements(driver, PAYMandPAYGTariffAndExtrasPage.class);
			PAYMandPAYGTariffAndExtrasPageActions.TariffSelect("Randomtariff");
			PAYMandPAYGTariffAndExtrasPageActions.addToBasketLive();
		
		}
	    
	  
	  
}