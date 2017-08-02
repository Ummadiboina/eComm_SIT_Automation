package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AccessoryPage {

	@FindBy(how = How.XPATH, using = "//h2[contains(text(),'Filter')]")
	public static WebElement AccessoryFilterTab;

	@FindBy(how = How.XPATH, using = "//h2[contains(text(),'Sort')]")
	public static WebElement AccessorySortTab;

	@FindBy(how = How.XPATH, using = "//a[contains(@data-qa-device-model-family, 'AirPods')]")
	public static WebElement AppleAirpods;

	@FindBy(how = How.XPATH, using = "//a[contains(@data-qa-device-model-family, 'Onyx Studio 3 Bluetooth Speaker')]")
	public static WebElement HarmanKardonOnxyxStudio3;

	@FindBy(how = How.XPATH, using = "//a[contains(@data-qa-device-model-family, 'Pencil for iPad Pro')]")
	public static WebElement PencilforiPadPro;

	@FindBy(how = How.XPATH, using = "//a[contains(@data-qa-device-model-family, 'Clip 2')]")
	public static WebElement Clip2;

	@FindBy(how = How.XPATH, using = "//a[contains(@data-qa-device-model-family, 'Xtreme')]")
	public static WebElement JBLXtreme;

	@FindBy(how = How.XPATH, using = "//*[@data-qa-subtypegroup='accessories'][1]")
	public static WebElement RandomAccessory;

	// Below is for clicking on the Basket icon in Accessories page

	@FindBy(how = How.ID, using = "basketIcon")
	public static WebElement Basket;

	@FindBy(how = How.XPATH, using = " ")
	public static WebElement ContinueShoppingLink;
	
	
	@FindBy(how = How.XPATH, using = "//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[1]/section/h3/span")
	public static WebElement FitnessTrackerBeforePhoneSelection;

	@FindBy(how = How.XPATH, using = "//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[2]/section/h3/span")
	public static WebElement SmartWatchBeforePhoneSelection;
	
	@FindBy(how = How.XPATH, using = "//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[3]/section/h3/span")
	public static WebElement AccesoryBeforePhoneSelection;
	

	@FindBy(how = How.XPATH, using = "//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[2]/section/h3/span")
	public static WebElement FitnessTrackerAfterPhoneSelection;

	@FindBy(how = How.XPATH, using = "//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[3]/section/h3/span")
	public static WebElement SmartWatchAfterPhoneSelection;
	
	@FindBy(how = How.XPATH, using = "//*[@id='shopApp']/div[4]/div/div/div[1]/div[2]/ul/li[4]/section/h3/span")
	public static WebElement AccesoryAfterPhoneSelection;

	@FindBy(how = How.XPATH, using = "//a[contains(@data-qa-device-model-family, 'Ultra Memory Card 80Mbs')]")
	public static WebElement SanDiskUltraMemoryCard80Mbs;
	
	@FindBy(how = How.XPATH, using = "//a[contains(., 'View all products on one page')]")
	public static WebElement ViewAllProductsOnOnePage;
}
