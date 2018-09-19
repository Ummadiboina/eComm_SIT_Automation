package pageobjects;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.How;

public class PAYMandPAYGTariffAndExtrasPage {

	// Below is for finding the PAYM Tab which is opened by default
	@FindBy(how = How.XPATH, using = ("//a[contains(@href, '#PayMonthlyTariffsTab')]"))
	public static WebElement PayMTab;

	// Below is for finding the PayG Tab which is opened by default
	@FindBy(how = How.XPATH, using = ("//a[contains(@href, '#PayAsYouGoTariffsTab')]"))
	public static WebElement PayGTab;

	// Below is for selecting promoted tariff
	@FindBy(how = How.XPATH, using = ("//div[@class='tariff ng-scope promoted-tariff promoted-at-first']/div[7]"))
	public static WebElement SelectPromotedTariff;

	// Below is for Selecting Any Tariff

	@FindBy(how = How.XPATH, using = ("(//button[@class='btn buyNowBtn ng-binding ng-pristine ng-valid'])[1] | (//button[@class='secondary selectButton tst-select ng-binding ng-pristine ng-valid'])[1] | (//button[@class='secondary selectButton tariff-select buyNowBtn'])[1]"))
	public static WebElement SelectAnyTariff;

	@FindBy(how = How.XPATH, using = ("(//button[@id='callToAction'])[1]"))
	public static WebElement SelectAnyPayGTariff;


	@FindBy(how = How.XPATH, using = ("(//*[@id='callToAction'] | //button[@class='secondary selectButton tariff-select buyNowBtn'] | //button[@class='btn buyNowBtn secondary selectButton tariff-select'] | //button[@class='secondary tst-select  selectButton  '])[1]"))
	public static WebElement RandomTariff1;

	@FindBy(how = How.XPATH, using = ("(//button[@class='secondary tst-select  selectButton  '])[1]"))
	public static WebElement BigBundleRandomTariff;

	@FindBy(how = How.XPATH, using = ("//a[contains(text(),'Pay Monthly')]"))
	public static WebElement SelectPayMTariffTab;

	@FindBy(how = How.XPATH, using = ("(//span[normalize-space()='Sim only tariff'])[1]"))
	public static WebElement SimOnlyTariffsTab;

	@FindBy(how = How.XPATH, using = ("//button[@id='currentSim']"))
	public static WebElement KeepMySim;

	@FindBy(how = How.XPATH, using = ("//*[@id='terms']"))
	public static WebElement AgreeTerms;

	@FindBy(how = How.XPATH, using = ("(//*[@id='callToAction'])[2] | (//button[@class='secondary selectButton tariff-select'])[2]"))
	public static WebElement SelectingAnyAvailableTariff;

	// Below is for Selecting Any Tariff
	@FindBy(how = How.XPATH, using = ("(//*[@id='callToAction'])[3] | (//button[@class='secondary selectButton tariff-select'])[3]"))
	public static WebElement RandomTariff2;

	@FindBy(how = How.XPATH, using = ("//*[@id='pay-full-device-tariff-tile']"))
	public static WebElement PayYourdDeviceInFullContainer;

	// Below is for Selecting Any Tariff
	@FindBy(how = How.XPATH, using = ("(//div[@class='dataAllowance clearfix tariff no-promotion-exists']/div/div/div/div[7]/div[2]/button)[1]"))
	public static WebElement RandomfullTariff1;

	// Below is for Selecting Any Tariff
	@FindBy(how = How.XPATH, using = ("(//*[@id='callToAction'])[8] | (//button[@class='secondary selectButton tariff-select'])[8]"))
	public static WebElement RandomfullTariff2;

	// Below is to add an accessory in TandE page
	@FindBy(how = How.XPATH, using = ("(//*[@id='accessoryTile_']/div[5]/input)[1]"))
	public static WebElement AddRandomAccessory;

	// Below is to add an accessory in TandE page
	@FindBy(how = How.XPATH, using = ("(//div[@class='accessory-details-container']/p)[2]"))
	public static WebElement AddRandomAccessoryName;

	// Below is for Selecting Any Tariff
	@FindBy(id = "link-pay-for-your-device")
	public static WebElement paydevicefulllink;

	// Below is for Clicking on the Add to basket option which is at the bottom of
	// the tariff and extras page
	@FindBy(how = How.XPATH, using = ("(//input[@value='Go to basket'])[1]"))
	public static WebElement addToBasketLive;

	@FindBy(how = How.XPATH, using = ("(//input[@value='Add and go to basket'])[1] | (//input[@value='Go to basket'])[1]"))
	public static WebElement addToBasketBuyOutJourney;

	// Below is for Clicking on the Add to basket option which is at the top of the
	// tariff and extras page
	@FindBy(id = "qa-proceed-to-basket-dock-header")
	public static WebElement addToBasketDockHeader;

	@FindBy(how = How.XPATH, using = ("//*[@class='accessory-button-container']"))
	public static WebElement AccessoryContainer;

	@FindBy(how = How.XPATH, using = ("//h2[contains(text(),'Your package')]"))
	public static WebElement yourPackageSection;

	/*
	 * @FindBy(how=How.XPATH,using=(
	 * "//*[@class='accessory-button-container']/input[@value='Add']")) public
	 * static WebElement Add_AccessoryContainer;
	 */

	@FindBys({ @FindBy(how = How.XPATH, using = ("//*[@class='accessory-button-container']/input[@value='Add']")) })
	public static List<WebElement> Add_AccessoryContainer;

	@FindAll({ @FindBy(how = How.XPATH, using = "//div[@class='tariffs-container pay-monthly-tariffs']//div[@class='col-xs-6 upfront']//span[@class='pound']") })
	public static List<WebElement> NormalUpfrontCost;

	@FindAll({ @FindBy(how = How.XPATH, using = "//div[@class='tariffs-container pay-monthly-tariffs']//div[@class='col-xs-6 monthly']//span[@class='pound']") })
	public static List<WebElement> NormalMonthlyCost;

	@FindAll({ @FindBy(how = How.XPATH, using = "//div[@class='tariff-with-device-cost-zero sim-only-user']//div[@class='col-xs-6 upfront']//span[@class='pound']") })
	public static List<WebElement> BasecommUpfrontCost;

	@FindAll({ @FindBy(how = How.XPATH, using = "//div[@class='tariff-with-device-cost-zero sim-only-user']//div[@class='col-xs-6 monthly']//span[@class='pound']") })
	public static List<WebElement> BasecommMonthlyCost;

	@FindAll({ @FindBy(how = How.XPATH, using = "(//div[@class='insurance-button-container'])[1]") })
	public static WebElement AddRandomInsurance;

	@FindAll({ @FindBy(how = How.XPATH, using = "(//div[@class='filter-label'])[1]//span") })
	public static WebElement FilterandSortLabel;

	@FindBy(how = How.XPATH, using = "//select[@id='dataFilterSelect']")
	public static WebElement TariffSortDropDown;

	@FindAll({ @FindBy(how = How.XPATH, using = "//div[@id='tariff-tile']//ul/li[1]/h2 | //div[@class='col-xs-6 col-sm-3 dmt-container info-container']//ul/li[1]/h2 | //div[@class='box clearfix']/div[1]/div[2]/div/span") })
	public static List<WebElement> DataTextElement;



	@FindAll({
			@FindBy(how = How.XPATH, using = "//div[@id='tariff-tile']//div[@class='price-block']/div[@class='col-xs-6 upfront']/h2/span[2]") })
	public static List<WebElement> UpfrontTextElement;

	@FindAll({
			@FindBy(how = How.XPATH, using = "//div[@id='tariff-tile' or @class='col-xs-6 col-sm-3 info-container price-block-container']//div[@class='price-block']/div[@class='col-xs-6 monthly']/h2/span[1]") })
	public static List<WebElement> MonthlyCostTextElement;

	// @FindBy(how = How.XPATH, using =
	// ("//a[@manual_cm_re='DR346B_low']/button[contains(@class,'secondary
	// sortGrpBtn')]"))
	@FindBy(how = How.XPATH, using = ("//div[@class='filter-options']/button[1] | //div[@class='filter-options tariff-page']/button[1]"))
	public static WebElement lowfilter;

	// @FindBy(how = How.XPATH, using =
	// ("//a[@manual_cm_re='DR346B_medium']/button[contains(@class,'secondary
	// sortGrpBtn')]"))
	@FindBy(how = How.XPATH, using = ("//div[@class='filter-options']/button[2] | //div[@class='filter-options tariff-page']/button[2]"))
	public static WebElement mediumfilter;

	// @FindBy(how = How.XPATH, using =
	// ("//a[@manual_cm_re='DR346B_high']/button[contains(@class,'secondary
	// sortGrpBtn')]"))
	@FindBy(how = How.XPATH, using = ("//div[@class='filter-options']/button[3] | //div[@class='filter-options tariff-page']/button[3]"))
	public static WebElement highfilter;

	//@FindBy(how = How.XPATH, using = ("//button[@class='secondary sortGrpBtn btnToggle']"))
	@FindBy(how = How.XPATH, using = "//div[@class='filter-options']/button[contains(@class,'active')] | //div[@class='filter-options tariff-page']/button[contains(@class,'active')]")
	public static WebElement DataFilterSelectedXpath;

	@FindAll({ @FindBy(how = How.XPATH, using = ("(//div[@class='viewAllTariffs'])[1]")) })
	public static List<WebElement> ViewAllTariffs;

	@FindBy(how = How.XPATH, using = "//*[@id=\"DR346\"]/a[1]/button(//div[@class='viewAllTariffs'])[1]")
	public static WebElement ViewAllTariffs_new;

	@FindBy(how = How.XPATH, using = "//*[@id=\"DR346\"]/a[1]/button")
	public static WebElement DataTariff_One;

	@FindBy(how = How.XPATH, using = "//*[@id=\"DR346\"]/a[2]/button")
	public static WebElement DataTariff_Two;

	@FindBy(how = How.XPATH, using = "//*[@id=\"DR346\"]/a[3]/button")
	public static WebElement DataTariff_Three;

	//@FindBy(how = How.XPATH, using = "//*[@class='choose-tariff-section section']/div[4]/div[2]/a[1]/button[@class='secondary sortGrpBtn btnToggle']")
	@FindBy(how = How.XPATH, using = "//div[@class='filter-options']/button[contains(@class,'active')]")
	public static WebElement SelectedState;

	@FindBy(how = How.XPATH, using = "//*[@class='choose-tariff-section section']/div[4]/div[2]/a[1]/button[@class='secondary sortGrpBtn']")
	public static WebElement DeSelectedState;

	// Bill Spend Caps section----

	@FindBy(how = How.XPATH, using = "//div[contains(text(),'Your Spend Cap')] | //div/p/span[contains(text(),'Your Spend Cap')]")
	public static WebElement SpendCapSection;

	@FindBy(how = How.XPATH, using = "//div/p/span[contains(text(),'Would you like to add a Spend Cap')] | //div/p[contains(text(),'Would you like to add a Spend Cap')]")
	public static WebElement SpendCapHeader;

	@FindBy(how = How.XPATH, using = "//button[@id='cap']")
	public static WebElement CapMyBillButton;

	@FindBy(how = How.XPATH, using = "//button[@id='sendCapDetails']")
	public static WebElement CapMyBillContinueButton;

	@FindBy(how = How.XPATH, using = "//div[@class='selected-cap-msg']")
	public static WebElement InforAfterCapAmount;

	@FindBy(how = How.XPATH, using = "//*[@id='BlueTickMark']")
	public static WebElement BlueTickMark;

	@FindBy(how = How.XPATH, using = "//div[@class='select-caps-container']/div/div/div[1]")
	public static WebElement capProsTop;

	@FindBy(how = How.XPATH, using = "//div[@class='select-caps-container']/div/div/ul[1]")
	public static WebElement capPros;

	@FindBy(how = How.XPATH, using = "//div[@class='select-caps-container']/div/div/ul[2]")
	public static WebElement capCons;

	@FindBy(how = How.XPATH, using = "//div[@class='select-caps-container']/div/div/div[2]")
	public static WebElement capProsBottom;

	@FindBy(how = How.XPATH, using = "//div[@class='caps-holder']/h3")
	public static WebElement capBoltonHeader;

	@FindBy(how = How.XPATH, using = "//div[@class='spend-cap-desc']/p | //div/p[contains(text(),'Would you like to add a Spend Cap? ')]/../p[2]")
	public static WebElement Info1Text;

	@FindBy(how = How.XPATH, using = "//button[@id='dontcap']")
	public static WebElement DontCapMyBillButton;

	@FindBy(how = How.XPATH, using = "//a[@class='dont-cap-link']")
	public static WebElement DontCapMyBillLink;

	@FindBy(how = How.XPATH, using = "//div/p/span[contains(text(),'Would you like to add a Spend Cap')]/../a | //div/p[contains(text(),'Would you like to add a Spend Cap? ')]/a")
	public static WebElement CapMyBillOverlay;

	@FindBy(how = How.XPATH, using = "//div[@class='bscOverlay']")
	public static WebElement CapMyBillOverlayTxt;

	@FindBy(how = How.XPATH, using = "//button[@class='close boxclose']")
	public static WebElement CapMyBillOverlayPopupClose;

	@FindBy(how = How.XPATH, using = "//div[@class='largeTitle']/p | //div[@class='build-spend-caps-container']/p")
	public static WebElement BillCapStatusMsg;

	@FindBy(how = How.XPATH, using = "//div[@class='largeTitle']/p | //div[@class='build-spend-caps-container']/p[2]")
	public static WebElement BillCapUpgradeStatusMsg;

	@FindBy(how = How.XPATH, using = "//div[@class='selected-cap-msg']")
	public static WebElement BillCapStatusInfo;


	@FindBy(how = How.XPATH, using = "//div[@class='largeTitle']/h2/a | //section[@id='billSpendCapSection']/a[normalize-space()='Edit Spend Cap'] | //span[contains(text(),'2. Your Spend Cap')]/../a")
	public static WebElement BillCapEditLink;

	@FindBy(how = How.XPATH, using = "//a[normalize-space()='Change tariff'] | //div[@class='spentstariff']/div[2]/a")
	public static WebElement TariffEditLink;

	//Bill Spend cap
	@FindBy(how = How.XPATH, using = "//h3[normalize-space()='Spend Cap']//following-sibling::h3/span")
	public static WebElement AppliedBillCap_YourPackage;

	@FindBy(how = How.XPATH, using = "//h3[normalize-space()='Spend Cap']")
	public static WebElement BillSpendCapHeader_YourPackage;

}
