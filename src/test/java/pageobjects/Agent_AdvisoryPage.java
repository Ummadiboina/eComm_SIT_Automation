package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Agent_AdvisoryPage {
	
	  
			
	//	@FindBy(how=How.ID,using="customerDetailsProceedButton")
	//	public static WebElement AgreeAdvsioryCheck;
		
		@FindBy(how=How.XPATH,using="//*[@id='customerDetailsProceedButton']")
		public static WebElement AgreeAdvsioryCheckYes;
				
		////////////////////////////////////Trade In/////////////////////////////////
	
		
		
}
