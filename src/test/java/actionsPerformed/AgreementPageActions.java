package actionsPerformed;

import org.apache.log4j.Logger;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import helpers.Environment;

public class AgreementPageActions extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");

	  
	  public static void gettitlepage()
	  {
		  
		  System.out.println("Now Entering Agreement Page..."); 
		  System.out.println(driver.getTitle());
		  log.debug("Entered Agreements page");
	   }
	  

	  public static void Affordability()
	  {
		  
		  System.out.println("Selecting 'I agree that with my current financial commitments...'checkbox");
		  pageobjects.AgreementPage.affordabilityCheck1.click();
		  log.debug("Selecting affordability Checks # 1");
		  System.out.println("Selecting ' I agree there are no future changes to my ...'checkbox");
		  pageobjects.AgreementPage.affordabilityCheck2.click();
		  log.debug("Selecting affordability Checks # 2");
		  System.out.println("Clicking on the affordabilityButton ");
		  pageobjects.AgreementPage.affordabilityButton.click();
		  log.debug("Selecting affordability button");
	  }
	  
	  public static void KeyInformation() 
	  {
		  System.out.println("Verifying Key Information");
		  pageobjects.AgreementPage.keyInfoSection.click();
		  log.debug("Clicking on the key information");
	  }
	  
	  public static void secciSection() 
	  {
		  System.out.println("Verifying Key Information");
		  pageobjects.AgreementPage.secciSection.click();
		  log.debug("Clicking on the key information");
	  }
	  
	  public static void PayMMobileAgreement() 
	  {
		  System.out.println("Verifying Mobile Agreement section");
		  pageobjects.AgreementPage.PayMMobileAgreement.click();
		  log.debug("Clicking on the Mobile agreement section");
	  }
	  
	  
	  
	  public static void TermsDeclarationCheckbox() 
	  {
		  System.out.println("Verifying Consumner Credit Agreement");
		  pageobjects.AgreementPage.TermsDeclarationCheckbox.click();
		  log.debug("Clicking on the terms declaration");

		  pageobjects.AgreementPage.ccaSection.click();
		  log.debug("Clicking on the ccaSection");

	  }
}
