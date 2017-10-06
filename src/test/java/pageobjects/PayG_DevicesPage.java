package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class PayG_DevicesPage {
	
	
	// ipadsandtablets

		@FindBy(how = How.XPATH, using = ".//*[@id='prepayDevicesTab']")
		public static WebElement payGdeviceTab;

		
}
