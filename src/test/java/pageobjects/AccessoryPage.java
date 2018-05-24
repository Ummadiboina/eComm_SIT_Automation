package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AccessoryPage {

	@FindBy(how = How.XPATH, using = "//h2[contains(text(),'Filter')]")
	public static WebElement AccessoryFilterTab;

	@FindBy(how = How.XPATH, using = "//h2[contains(text(),'Sort')]")
	public static WebElement AccessorySortTab;

	//@FindBy(how = How.XPATH, using = "//a[contains(@data-qa-device-model-family, 'AirPods')]")
	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/accessories/apple/airpods#contractType=nonconnected')]")
	public static WebElement AppleAirpods;

	//@FindBy(how = How.XPATH, using = "//a[contains(@data-qa-device-model-family, 'Onyx Studio 3 Bluetooth Speaker')]")
	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/accessories/harman-kardon/aura-studio-2#contractType=nonconnected')]")
	public static WebElement HarmanKardonOnxyxStudio2;

	@FindBy(how = How.XPATH, using = "//a[contains(@data-qa-device-model-family, 'Pencil for iPad Pro')]")
	public static WebElement PencilforiPadPro;

	//@FindBy(how = How.XPATH, using = "//a[contains(@data-qa-device-model-family, 'Clip 2')]")
	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/accessories/jbl/flip-4#contractType=nonconnected')]")
	public static WebElement Clip4;

	//@FindBy(how = How.XPATH, using = "//a[contains(@data-qa-device-model-family, 'Xtreme')]")
	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/accessories/jbl/xtreme#contractType=nonconnected')]")
	public static WebElement JBLXtreme;

	@FindBy(how = How.XPATH, using = "(//div[@component-name='productTile'])[1]//a")
	public static WebElement RandomAccessory;

	@FindBy(how = How.XPATH, using = "(//h3[normalize-space()='All accessories']//following-sibling::p)[2]")
	public static WebElement SeeAllAccessories;



	// Below is for clicking on the Basket icon in Accessories page

	@FindBy(how = How.XPATH, using = "//*[@id='deviceDetailsSubmit']")
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
	
	@FindBy(how = How.XPATH, using = "//a[contains(@data-qa-device-model-family, 'S8 Plus Original LED Cover')]")
	public static WebElement SamsungS8PlusOriginalLEDCover;
	
}
