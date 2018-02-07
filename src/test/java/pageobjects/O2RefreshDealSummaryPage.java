package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import helpers.Environment;

public class O2RefreshDealSummaryPage extends Environment {
	
	@FindBy(how=How.XPATH,using="//*[@id='secci']/h2")
	public static WebElement DealSummarySection;
	
	@FindBy(how=How.XPATH,using="(//*[@id='secciYesButton' or @id='updateEmailAddressProceedButton'])[1]")
	public static WebElement SummariseTheDealYes;
	@FindBy(how=How.XPATH,using="(//*[@id='secciYesButton' or @id='updateEmailAddressProceedButton'])[2]")
	public static WebElement SummariseTheDealYes2;
	
	@FindBy(how=How.XPATH,using="//*[@id='generateCcaForm']/input[1]")
	public static WebElement GenerateCCABtn;
	
	@FindBy(how=How.XPATH,using="//*[@id='ccaId']/a")
	public static WebElement CCALink;

	

}
