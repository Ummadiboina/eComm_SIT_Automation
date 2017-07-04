package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

@SuppressWarnings("unused")
public class PhonesListingPage {

	@FindBy(how = How.XPATH, using = "//a[contains(., 'View all products on one page')]")
	public static WebElement ViewAllPhones;

	// Below Are list of all the phones in first page of the PayM phones landing
	// page
	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/bq/aquaris-m4-5/#contractType=paymonthly')]")
	public static WebElement AquarisM45;
	
	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/samsung/galaxy-s7/#contractType=paymonthly')]")
	public static WebElement GalaxyS7;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/samsung/galaxy-s8/#contractType=paymonthly')]")
	public static WebElement GalaxyS8;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/samsung/galaxy-s8-plus/#contractType=paymonthly')]")
	public static WebElement GalaxyS8Plus;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/apple/iphone-7/#contractType=paymonthly')]")
	public static WebElement Iphone7;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/apple/iphone-7-plus/#contractType=paymonthly')]")
	public static WebElement Iphone7Plus;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/apple/iphone-se/#contractType=paymonthly')]")
	public static WebElement IphoneSE;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/huawei/p10/#contractType=paymonthly')]")
	public static WebElement HuaweiP10;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/samsung/galaxy-s7-edge/#contractType=paymonthly')]")
	public static WebElement GalaxyS7Edge;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/oneplus/3t/#contractType=paymonthly')]")
	public static WebElement Oneplus3T;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/sony/xperia-xz-premium/#contractType=paymonthly')]")
	public static WebElement XperiaZ5Premium;

	// Below are for PAYG device

	//@FindBy(how = How.XPATH, using = "//*[@data-qa-device-contract-type='payasyougo']")
	//updated the xpath from Sony Experia to Alcatel since we are getting error message "You've reached the limit for the number of Pay As You Go devices you can order" after entering the card details
	@FindBy(how = How.XPATH, using = "//*[@data-qa-canonical-modelfamily='20.45x']")
	public static WebElement RandomDevice;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/moto/g5/#contractType=payasyougo')]")
	public static WebElement MotoG5;
}
