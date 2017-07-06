package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ConnectedDeviceDetailsPage {

	
	// The below webelement is not right need to edit this
	@FindBy(how = How.ID, using = "deviceDetailsSubmit")
	public static WebElement ViewOurTariffs;
	// the element not found issue was mainly because not giving proper element
	// idenfier, had declared ID in xpath defining format

	// The below webelement is for selecting pink color of the device
	@FindBy(how = How.XPATH, using = "//a[@ng-click='colourClick()'][@title='Pink']")
	public static WebElement Pink;

	// The below webelement is for selecting gold platinum color of the device
	@FindBy(how = How.XPATH, using = "//a[@ng-click='colourClick()'][@title='Gold Platinum']")
	public static WebElement GoldPlatinum;

	// The below webelement is for selecting black onyx color of the device
	@FindBy(how = How.XPATH, using = "//a[@ng-click='colourClick()'][@title='Black Onyx']")
	public static WebElement BlackOnyx;

	// The below webelement is for selecting black color of the device
	@FindBy(how = How.XPATH, using = "//a[@ng-click='colourClick()'][@title='Black']")
	public static WebElement Black;

	@FindBy(how = How.ID, using = "deviceBackground")
	public static WebElement clickanywhere;

	@FindBy(how = How.XPATH, using = "//p[@class='delivery-information']/span[1]")
	public static WebElement DevStatusMsg;
	//have to change the below xpath after getting the environment

	@FindBy(how = How.XPATH, using = "//select[@class='ng-pristine ng-valid accessory-option']")
		public static WebElement ColorDropDown;
		
		@FindBy(how = How.XPATH, using = "//select[@class='ng-pristine ng-valid accessory-option']")
		public static WebElement CapacityDropDown;

		
}
