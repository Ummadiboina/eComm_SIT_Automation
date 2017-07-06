package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class UpgradeTabletListingPage {

	@FindBy(how = How.ID, using = "tab-switch-to-a-tablet")
	public static WebElement TabletTab;
	
	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/upgrade/tablets/apple/ipad-9.7/#contractType=paymonthly')]")
	public static WebElement iPad97;
	
	@FindBy(how = How.XPATH, using = "//a[contains(., 'View all Tablets')]")
	public static WebElement ViewAllTablets;
}
