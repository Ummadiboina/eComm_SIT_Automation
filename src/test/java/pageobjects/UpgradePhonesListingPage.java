package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class UpgradePhonesListingPage {

	// @FindBy(how = How.XPATH, using = "//a[contains(@href,
	// '/upgrade/phones/']")
	@FindBy(how = How.XPATH, using = "//a[contains(., 'View all phones')]")
	public static WebElement ViewAllPhones;

	// Below Are list of all the phones in first page of the PayM phones landing
	// page
	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/upgrade/phones/samsung/galaxy-j3-2016-like-new/#contractType=paymonthly')]")
	public static WebElement SamsungGalaxyJ32016LikeNew;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/upgrade/phones/samsung/galaxy-s7/#contractType=paymonthly')]")
	public static WebElement GalaxyS7;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/upgrade/phones/samsung/galaxy-s8/#contractType=paymonthly')]")
	public static WebElement GalaxyS8;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/upgrade/phones/samsung/galaxy-s8-plus/#contractType=paymonthly')]")
	public static WebElement GalaxyS8Plus;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/upgrade/phones/apple/iphone-7/#contractType=paymonthly')]")
	public static WebElement Iphone7;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/upgrade/phones/apple/iphone-6/#contractType=paymonthly')]")
	public static WebElement Iphone6;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/upgrade/phones/apple/iphone-7-plus/#contractType=paymonthly')]")
	public static WebElement Iphone7Plus;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/upgrade/phones/apple/iphone-se/#contractType=paymonthly')]")
	public static WebElement IphoneSE;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/upgrade/phones/huawei/p10/#contractType=paymonthly')]")
	public static WebElement HuaweiP10;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/upgrade/phones/samsung/galaxy-s7-edge/#contractType=paymonthly')]")
	public static WebElement GalaxyS7Edge;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/upgrade/phones/oneplus/3t/#contractType=paymonthly')]")
	public static WebElement Oneplus3T;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/upgrade/phones/sony/xperia-xz-premium/#contractType=paymonthly')]")
	public static WebElement XperiaZ5Premium;

}