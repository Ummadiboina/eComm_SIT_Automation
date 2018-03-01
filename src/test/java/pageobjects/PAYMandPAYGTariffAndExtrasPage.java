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

	@FindBy(how = How.XPATH, using = ("(//*[@id='callToAction'])[2]"))
	public static WebElement RandomTariff1;

	// Below is for Selecting Any Tariff
	@FindBy(how = How.XPATH, using = ("(//*[@id='callToAction'])[3]"))
	public static WebElement RandomTariff2;

	@FindBy(how = How.XPATH, using = ("//*[@id='pay-full-device-tariff-tile']"))
	public static WebElement PayYourdDeviceInFullContainer;

	// Below is for Selecting Any Tariff
	@FindBy(how = How.XPATH, using = ("(//div[@id='pay-full-device-tariff-tile']/div[@class='tariff ng-scope no-promotion-exists']/div[6]/div/button)[1]"))
	public static WebElement RandomfullTariff1;

	// Below is for Selecting Any Tariff
	@FindBy(how = How.XPATH, using = ("(//*[@id='callToAction'])[8]"))
	public static WebElement RandomfullTariff2;

	// Below is to add an accessory in TandE page
	@FindBy(how = How.XPATH, using = ("(//*[@id='accessoryTile_']/div[5]/input)[2]"))
	public static WebElement AddRandomAccessory;

	// Below is to add an accessory in TandE page
	@FindBy(how = How.XPATH, using = ("(//div[@class='accessory-details-container']/p)[2]"))
	public static WebElement AddRandomAccessoryName;

	// Below is for Selecting Any Tariff
	@FindBy(id = "link-pay-for-your-device")
	public static WebElement paydevicefulllink;

	// Below is for Clicking on the Add to basket option which is at the bottom of
	// the tariff and extras page
	@FindBy(how = How.XPATH, using = ("(//input[@value='Go to basket' and @type='button'])[1]"))
	public static WebElement addToBasketLive;

	@FindBy(how = How.XPATH, using = ("(//input[@value='Add and go to basket'])[1]"))
	public static WebElement addToBasketBuyOutJourney;

	// Below is for Clicking on the Add to basket option which is at the top of the
	// tariff and extras page
	@FindBy(id = "qa-proceed-to-basket-dock-header")
	public static WebElement addToBasketDockHeader;

	@FindBy(how = How.XPATH, using = ("//*[@class='accessory-button-container']"))
	public static WebElement AccessoryContainer;

	/*
	 * @FindBy(how=How.XPATH,using=(
	 * "//*[@class='accessory-button-container']/input[@value='Add']")) public
	 * static WebElement Add_AccessoryContainer;
	 */

	@FindBys({ @FindBy(how = How.XPATH, using = ("//*[@class='accessory-button-container']/input[@value='Add']")) })
	public static List<WebElement> Add_AccessoryContainer;

	@FindAll({ @FindBy(how = How.XPATH, using = "//div[@class='col-xs-6 upfront']//span[@class='pound ng-binding']") })
	public static List<WebElement> UpfrontCost;

	@FindAll({ @FindBy(how = How.XPATH, using = "//div[@class='col-xs-6 monthly']//span[@class='pound ng-binding']") })
	public static List<WebElement> MonthlyCost;

	@FindAll({ @FindBy(how = How.XPATH, using = "//div[@class=' insurance-button-container '][1]") })
	public static WebElement AddRandomInsurance;

	@FindAll({ @FindBy(how = How.XPATH, using = "(//div[@class='filter-label'])[1]//span") })
	public static WebElement FilterandSortLabel;

	@FindBy(how = How.XPATH, using = "//select[@id='dataFilterSelect']")
	public static WebElement TariffSortDropDown;

	@FindAll({ @FindBy(how = How.XPATH, using = "//div[@id='tariff-tile']//ul/li[1]/h2") })
	public static List<WebElement> DataTextElement;

	@FindAll({
			@FindBy(how = How.XPATH, using = "//div[@id='tariff-tile']//div[@class='price-block']/div[@class='col-xs-6 upfront']/h2/span[2]") })
	public static List<WebElement> UpfrontTextElement;

	@FindAll({
			@FindBy(how = How.XPATH, using = "//div[@id='tariff-tile']//div[@class='price-block']/div[@class='col-xs-6 monthly']/h2/span[2]") })
	public static List<WebElement> MonthlyCostTextElement;

	// @FindBy(how = How.XPATH, using =
	// ("//a[@manual_cm_re='DR346B_low']/button[contains(@class,'secondary
	// sortGrpBtn')]"))
	@FindBy(how = How.XPATH, using = ("//div[@class='filter-options']/button[1]"))
	public static WebElement lowfilter;

	// @FindBy(how = How.XPATH, using =
	// ("//a[@manual_cm_re='DR346B_medium']/button[contains(@class,'secondary
	// sortGrpBtn')]"))
	@FindBy(how = How.XPATH, using = ("//div[@class='filter-options']/button[2]"))
	public static WebElement mediumfilter;

	// @FindBy(how = How.XPATH, using =
	// ("//a[@manual_cm_re='DR346B_high']/button[contains(@class,'secondary
	// sortGrpBtn')]"))
	@FindBy(how = How.XPATH, using = ("//div[@class='filter-options']/button[3]"))
	public static WebElement highfilter;

	//@FindBy(how = How.XPATH, using = ("//button[@class='secondary sortGrpBtn btnToggle']"))
	@FindBy(how = How.XPATH, using = "//div[@class='filter-options']/button[contains(@class,'active')]")
	public static WebElement DataFilterSelectedXpath;

	@FindAll({ @FindBy(how = How.XPATH, using = ("(//div[@class='viewAllTariffs'])[1]")) })
	public static List<WebElement> ViewAllTariffs;

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
}
