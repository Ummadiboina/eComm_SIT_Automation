package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class ConnectedDeviceDetailsPage {
	
	//The below webelement is not right need to edit this
	@FindBy(how=How.ID,using="deviceDetailsSubmit")
	public static WebElement ViewOurTariffs;
//the element not found issue was mainly because not giving proper element idenfier, had declared ID in xpath defining format

}
