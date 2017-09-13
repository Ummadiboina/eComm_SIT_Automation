package pageobjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class UpgradeCustomerPage {

	public static final String RecycleWidget = null;

	@FindBy(how = How.ID, using = "username")
	public static WebElement username;

	@FindBy(how = How.ID, using = "password")
	public static WebElement password;

	@FindBy(how = How.ID, using = "signInButton")
	public static WebElement signInButton;

	@FindBy(how = How.CLASS_NAME, using = "simo-link")
	public static WebElement SimOLink;

	@FindBy(how = How.XPATH, using = "//a[@id='cancel']")
	public static WebElement Continue;

	//////////////////////// When customer not////////////////////////////
	//////////////////////// eligible/////////////////////////////////////

	@FindBy(how = How.XPATH, using = "//*[@id='upgrade-message']")
	public static WebElement NotEligible_message;

	@FindBy(how = How.XPATH, using = "//*[@id='contentFull']/div[1]/div[3]/div/div/div[1]/a")
	public static WebElement Promomodule_iPadsims;

	@FindBy(how = How.XPATH, using = "//*[@id='contentFull']/div[1]/div[3]/div/div/div[2]/a")
	public static WebElement Promomodule_Tabletsims;

	@FindBy(how = How.XPATH, using = "//*[@id='contentFull']/div[1]/div[3]/div/div/div[3]/a")
	public static WebElement Promomodule_Donglesims;

	@FindBy(how = How.XPATH, using = "//*[@id='o2RecycleModule']/p/form/button")
	public static WebElement GoToMyO2_CTA;

	@FindBy(how = How.XPATH, using = "//*[@id='o2-page-wrapper']")
	public static WebElement MyO2_Page;

	@FindAll({ @FindBy(how = How.XPATH, using = "//div[@id='qa-recommendedDevicesTile']/a//div/p[@class='details']") })
	public static List<WebElement> DeviceNameRecommendedSection;

	@FindBy(how = How.XPATH, using = "//a[@href='https://accounts.o2.co.uk/signin']")
	public static WebElement Signinlink;

	@FindBy(how = How.XPATH, using = "//select[@class='recycle-make ng-pristine ng-valid']")
	public static WebElement Make;

	@FindBy(how = How.XPATH, using = "//select[@class='recycle-model ng-pristine ng-valid']")
	public static WebElement Model;

	@FindBy(how = How.XPATH, using = "//select[@class='recycle-network ng-scope ng-pristine ng-valid']")
	public static WebElement Network;

	@FindBy(how = How.XPATH, using = "//button[contains(text(),'Update device')]")
	public static WebElement UpdateDevice;

	// driver.findElement(By.id("recycleCredit")).click();

	@FindBy(how = How.ID, using = "recycleCredit")
	public static WebElement RefundableOptionbyCredit;

	@FindBy(how = How.XPATH, using = "//button[contains(text(),'upgrade now')]")
	public static WebElement ContinuetoUpgrade;

	@FindBy(how = How.XPATH, using = "//button[contains(text(),'Yes, get an accurate quote')]")
	public static WebElement GetAccurateQuote;
	
	@FindBy(how = How.XPATH, using = "//div[@data-qa-device-damaged='']/h2")
	public static WebElement GetAccurateQuoteSectionDisplay;
}