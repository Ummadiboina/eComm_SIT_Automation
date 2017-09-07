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
	@FindBy(how = How.XPATH, using = ("(//*[@id='callToAction'])[1]"))
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
	@FindBy(how = How.XPATH, using = ("(//*[@id='accessoryTile_']/div[5]/input)[1]"))
	public static WebElement AddRandomAccessory;

	// Below is for Selecting Any Tariff
	@FindBy(id = "link-pay-for-your-device")
	public static WebElement paydevicefulllink;

	// Below is for Clicking on the Add to basket option which is at the bottom of
	// the tariff and extras page
	@FindBy(id = "qa-proceed-to-basket")
	public static WebElement addToBasketLive;

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

	@FindAll({ @FindBy(how = How.XPATH, using = "//div[@class=' insurance-button-container '][1]")})
	public static WebElement AddRandomInsurance;
	

}
