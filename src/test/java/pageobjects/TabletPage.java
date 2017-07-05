package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class TabletPage {

	@FindBy(how = How.XPATH, using = "//h2[contains(text(),'Filter')]")
	public static WebElement TabletFilterTab;

	@FindBy(how = How.XPATH, using = "//h2[contains(text(),'Sort')]")
	public static WebElement TabletSortTab;

	// change the values for the below
	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/iPad")
	public static WebElement iPad;

	@FindBy(how = How.XPATH, using = "//*[@data-qa-device-contract-type='nonconnected'][1]")
	public static WebElement RandomTablet;

}
