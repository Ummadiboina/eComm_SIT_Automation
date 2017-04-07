package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class PhonesDetailsPage {
	
	//The below webelement is not right need to edit this
	@FindBy(how=How.ID,using=("//*[@id='deviceDetailsSubmit']"))
	public static WebElement ViewOurTariffs;
	
}
