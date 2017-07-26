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
	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/tablets/apple/ipad-9.7/#contractType=paymonthly')]")
	public static WebElement iPad97;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/tablets/apple/ipad-pro-12.9-inch/#contractType=paymonthly')]")
	public static WebElement iPadPro129;
	
	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/tablets/apple/ipad-pro-10.5-inch/#contractType=paymonthly')]")
	public static WebElement AppleiPadPro105inch;

	@FindBy(how = How.XPATH, using = "//span[contains(text(),'Galaxy Tab A 2016 10.1')]")
	public static WebElement SamsungGalaxy10;

	@FindBy(how = How.XPATH, using = "//*[@data-qa-device-contract-type='nonconnected'][1]")
	public static WebElement RandomTablet;

	@FindBy(how = How.XPATH, using = ("//a[contains(@href, '/shop/tablets/apple/ipad-pro-10.5-inch/#contractType=paymonthly')]"))	
	public static WebElement AppleiPadPro105inch;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/tablets/apple/ipad-pro-12.9-inch/#contractType=paymonthly')]")
	public static WebElement iPadPro129;

	@FindBy(how = How.XPATH, using = ("//a[contains(@href, '/shop/tablets/apple/ipad-pro-12.9-inch/#contractType=paymonthly')]"))	
	public static WebElement AppleiPadPro129inch;
	
}
