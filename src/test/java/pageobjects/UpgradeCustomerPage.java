package pageobjects;

import java.util.List;

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

	@FindBy(how = How.ID, using = "continue")
	public static WebElement SecurityContinue;

	//*[@id='continue']
	
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

	@FindBy(how = How.XPATH, using = "//*[@id='signInButton']")
	public static WebElement Signinlink1;
	
	@FindBy(how = How.XPATH, using = "//*[@class='signInLink signInLinkInDesktop' or @class='signInLink']")
	public static WebElement Signinlink2;
	
	@FindBy(how = How.XPATH, using = "//*[@id='header-tool-signin']")
	public static WebElement HeaderSignin;

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

	//////////////////////////// Your Sim
	//////////////////////////// Section///////////////////////////////////////////////////

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

	@FindAll({@FindBy(how = How.XPATH, using = "//div[@class='btn-container']/button[@class='primary']")})
	public static List<WebElement> TakeOfferAndUpgrade;

	@FindBy(how = How.XPATH, using = "(//button[@id='callToAction'])[1]")
	public static WebElement RandomTariffUpgrade;

	@FindBy(how = How.ID, using = "qa-immediate-upgrade-fee-message")
	public static WebElement BuyoutText1MyPkg;

	@FindBy(how = How.ID, using = "qa-basket-upgrade-fee-existing-device")
	public static WebElement BuyoutText2MyPkg;
	
	@FindBy(how = How.ID, using = "qa-basket-upgrade-promotion-discountMessageHeader")
	public static WebElement BuyoutText3MyPkg;
	
	@FindBy(how = How.ID, using = "qa-basket-upgrade-promotion-discountMessage")
	public static WebElement BuyoutText4MyPkg;

	@FindBy(how = How.XPATH, using = "//section[@id='qa-immediate-upgrade-fee']//p[@class='upfront']")
	public static WebElement BuyoutCost1MyPkg;
	
	@FindBy(how = How.XPATH, using = "//section[@id='qa-upgrade-promotion-discount']//p[@class='upfront']")
	public static WebElement BuyoutCost2MyPkg;
	
	@FindBy(how = How.XPATH, using = "(//section[@class='early-fee']/p[1])[1]")
	public static WebElement BuyOutText1BasketPage;
	
	@FindBy(how = How.XPATH, using = "(//section[@class='early-fee']/p[2])[1]")
	public static WebElement BuyOutText2BasketPage;
	
	@FindBy(how = How.XPATH, using = "(//section[@class='early-fee']/p[1])[2]")
	public static WebElement BuyOutText3BasketPage;
	
	@FindBy(how = How.XPATH, using = "(//section[@class='early-fee']/p[2])[2]")
	public static WebElement BuyOutText4BasketPage;

	@FindBy(how = How.XPATH, using = "(//section[@class='early-fee']//p[@class='upfront'])[1]")
	public static WebElement BuyOutCost1BasketPage;
	
	@FindBy(how = How.XPATH, using = "(//section[@class='early-fee']//p[@class='upfront'])[2]")
	public static WebElement BuyOutCost2BasketPage;

	@FindBy(how = How.XPATH, using = "//*[@id='buy-out-discount']/td[2]/p")
	public static WebElement BuyOutCostOTACPage;

	@FindBy(how = How.ID, using = "buy-out-discount")
	public static WebElement BuyOutTextOTACPage;
	
	@FindBy(how = How.XPATH, using = "//a[@id='tab-switch-to-a-tablet'][1]")
	public static WebElement TabletsTab;
	
	@FindBy(how = How.ID, using = "qa-view-all")
	public static WebElement ViewAllTariffs;
	
	@FindBy(how = How.ID, using = "otac")
	public static WebElement SecurityOtac;
	//*[@id='otac']
	
	@FindBy(how = How.XPATH, using = "//a[@class='signOutLink']")
	public static WebElement SignoutLink;

	//Clicking on View all Tablets
	@FindBy(how = How.XPATH, using = "//a[@href='#tablets']")
	public static WebElement ViewAllTablets;

	//Clicking on random Table
	@FindBy(how = How.XPATH, using = "//*[@id='qa-recommendedDevicesTile']/a/div[2]/button")
	public static WebElement RandomTabletClick;

	@FindBy(how = How.XPATH, using = "//span[contains(text(),'Galaxy Tab A 2016 10.1')]")
	public static WebElement GalaxyTab10;

	@FindBy(how = How.XPATH, using = "//span[contains(text(),'iPad Pro 9.7 inch')]")
	public static WebElement AppleipadPro;

	@FindBy(how = How.XPATH, using = "//span[contains(text(),'Samsung Galaxy Tab A 2016 7.0')]")
	public static WebElement GalaxyTabA;

	@FindBy(how = How.XPATH, using = "//div[@class='module-body-content']//h1/following-sibling::p")
	public static WebElement Greetings;





//Give xpath with position so that review tariff is at first section like 1. Review your tariff
    @FindBy(how = How.ID, using = "")
    public static WebElement reviewTariff;

    @FindBy(how = How.ID, using = "")
    public static WebElement moveFromTariff;

    @FindBy(how = How.ID, using = "")
    public static WebElement toThisTariff;

    @FindBy(how = How.ID, using = "")
    public static WebElement clickonNotsureSimType;

//////////////////////////////////////////////Promotions//////////////////////////////////////////////////////////////////////////

    @FindBy(how = How.ID, using = "NEEDS TO BE ADDED")
	public static WebElement PromotionsHeader;

	@FindBy(how = How.ID, using = "NEEDS TO BE ADDED")
	public static WebElement PromotionsBody;


	@FindBy(how = How.XPATH, using= "//*[@type='checkbox']")
	public static WebElement CheckBoxNotDisplayed;

    @FindBy(how = How.XPATH, using= "")
    public static WebElement copyTextAdditonalDeposit;

	@FindBy(how = How.XPATH, using = "//*[@href='/upgrade/sim-cards/sim-only-deals']")
	public static WebElement SIMOLink;

	@FindBy(how = How.XPATH, using = "//select[@id='dataFilterSelect']")
	public static WebElement dataFilter;

}

