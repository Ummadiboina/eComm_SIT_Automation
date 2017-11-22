package pageobjects;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
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
	// have to change the below xpath after getting the environment
	

//============================

@FindBy(how = How.XPATH, using = "//select[@id='colour']")
public static WebElement ColorDropDown;

@FindBy(how = How.XPATH, using = "//select[@id='memory']")
public static WebElement CapacityDropDown;

@FindAll({ @FindBy(how = How.XPATH, using = "//ul[@class='styled-group device-capacity']/label/span") })
public static List<WebElement> CapacityLabel;

@FindAll({ @FindBy(how = How.XPATH, using = "//ul[@class='styled-group device-color']/label/span") })
public static List<WebElement> ColorLabel;

@FindAll({ @FindBy(how = How.XPATH, using = "//span[@class='selectboxit-colour-name']") })
public static WebElement UpdatedColorLabel;

	@FindAll({ @FindBy(how = How.ID, using = "colourSelectBoxItArrowContainer") })
	public static WebElement colorselectBoxArow;

@FindAll({ @FindBy(how = How.XPATH, using = "//*[@id='colourSelectBoxIt']") })
public static WebElement Colourdropdownbox;

@FindAll({ @FindBy(how = How.XPATH, using = "//*[@id='colour']/option") })
public static WebElement ColourText;



//*[@id='colourSelectBoxItText']

}
