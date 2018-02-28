package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class verificationsPage {

	@FindBy(how = How.XPATH, using = "//h2[contains(text(),'Filter')]")
	public static WebElement AccessoryFilterTab;

	@FindBy(how = How.ID, using = "error-heading")
	public static WebElement ErrorHeading;

	@FindBy(how = How.XPATH, using = "//*[@id='error-404-header-error-xxl']/div/div/div/ul/li")
	public static WebElement BodyContentText;

	@FindBy(how = How.XPATH, using = "(//*[@class='form-element input-microcopy  '])[1]")
	public static WebElement AsteriskText;

	@FindBy(how = How.XPATH, using = "(//*[@class='form-element input-microcopy'])[1]")
	public static WebElement AsteriskText_PAYGSim_Journey;

}
