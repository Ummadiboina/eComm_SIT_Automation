package pageobjects;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class UpgradeCustomerPage {

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
	
	////////////////////////////Your Sim Section///////////////////////////////////////////////////
	
	@FindBy(how = How.XPATH, using = "//*[@id='yourSim']")
	public static WebElement YourSimHeading;
	
	@FindBy(how = How.XPATH, using = "//*[@id='needNewSim']")
	public static WebElement NeedNewSimRadioButton;
	
	@FindBy(how = How.XPATH, using = "//*[@id='noNeedNewSim']")
	public static WebElement DontNeedNewSimRadioButton;
	
	@FindBy(how = How.XPATH, using = "//*[@id='sim-section']")
	public static WebElement YourSimSection;
	
	@FindBy(how = How.XPATH, using = "//*[@id='sim-section']/div/div[2]/div[1]/div[@class='sim-info-left']")
	public static WebElement YourSimSectionCopyText;
	
	@FindBy(how = How.XPATH, using = "//*[@id='sim-section']/div/div[2]/div[2]/form/p[1]")
	public static WebElement YourSimOptionsOne;
	
	@FindBy(how = How.XPATH, using = "//*[@id='sim-section']/div/div[2]/div[2]/form/p[2]")
	public static WebElement YourSimOptionsTwo;
	
	@FindBy(how = How.XPATH, using = "//*[@id='sim-section']/div/div[2]/div[1]/div[1]/p[3]/a")
	public static WebElement SimSwaplink;
	
	@FindBy(how = How.XPATH, using = "//*[@id='sim-section']/div/div[2]/div[2]/form/p[1]/label")
	public static WebElement IneedAsimRadio;
	
	@FindBy(how = How.XPATH, using = "//*[@id='sim-section']/div/div[2]/div[2]/form/p[2]/label")
	public static WebElement IdontNeedSimRadio;
	
	@FindBy(how = How.XPATH, using = "//*[@id='confirmSim']")
	public static WebElement ConfirmCTA;
	
	
	
	
	
	
	
	
	
	
	
	
}