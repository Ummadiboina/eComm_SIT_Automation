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

public class Agreements_Steps {
	
	
	public WebDriver driver;
    public List<HashMap<String, String>> datamap;
    

	    public Agreements_Steps() {
	        driver = Hooks.driver;
	        //datamap = DataReader.data();

	       
	    }
	    	   
		@Given("^Continue to Agreements page and confirm all the agreement checks$")
		public void continue_to_Agreements_page_and_confirm_all_the_agreement_checks() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			PageFactory.initElements(driver,AgreementPage.class);
  	    	PageFactory.initElements(driver,ReviewPage.class);
	    	 Thread.sleep(10000);
	    	AgreementPageActions.gettitlepage();
  	    	AgreementPageActions.Affordability();
  	    	AgreementPageActions.KeyInformation();
  	    	AgreementPageActions.secciSection();
  	    	AgreementPageActions.PayMMobileAgreement(); 
  	    	AgreementPageActions.TermsDeclarationCheckbox(); 
  	    	Thread.sleep(5000);
		}

	    
	  
	  
}