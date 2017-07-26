package pageobjects;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class NonConnectedDeviceDetailsPage {

	// The below webelement is not right need to edit this
	@FindBy(how = How.ID, using = "deviceDetailsSubmit")
	public static WebElement AddtoBasket;
	// the element not found issue was mainly because not giving proper element
	// idenfier, had declared ID in xpath defining format

	@FindBy(how = How.XPATH, using = "//select[@class='accessory-option ng-pristine ng-valid']")
	public static WebElement QuantityDropdown;

	@FindBy(how = How.XPATH, using = "//a[@class='close-btn']")
	public static WebElement CloseBtn;

	@FindAll({ @FindBy(how = How.XPATH, using = "//ul[@class='styled-group device-capacity']/label/span") })
	public static List<WebElement> CapacityLabel;

	@FindAll({ @FindBy(how = How.XPATH, using = "//ul[@class='styled-group device-color']/label/span") })
	public static List<WebElement> ColorLabel;

	@FindBy(how = How.XPATH, using = "//select[@id='colour']")
	public static WebElement ColorDropDown;

	@FindBy(how = How.XPATH, using = "//select[@id='memory']")
	public static WebElement CapacityDropDown;

}
