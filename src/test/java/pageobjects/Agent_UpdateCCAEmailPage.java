package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import helpers.Environment;

public class Agent_UpdateCCAEmailPage extends Environment {
	
	@FindBy(how=How.XPATH,using="//*[@id='ccaEmailAddress']")
	public static WebElement CCAEmailID;
	
	@FindBy(how=How.XPATH,using="//*[@id='updateEmailAddressProceedButton']")
	public static WebElement ProceedwitheMailYes;
	

}
