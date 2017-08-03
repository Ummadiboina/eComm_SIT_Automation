package pageobjects;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BaseCommPage {

	/*@FindAll({
			@FindBy(how = How.XPATH, using = ("//div[@class='module label-xxl desktop-fragments-label-xxl-1']/h2")) })
	public static List<WebElement> iPadDevicesName;*/

	@FindBy(how = How.XPATH, using = "//a[@tabcanonicalname='tablet']")
	public static WebElement OtherTablets;

	@FindBy(how = How.XPATH, using = "//a[@tabcanonicalname='ipad']")
	public static WebElement iPad;

	@FindBy(how = How.XPATH, using = ("(//a[@href='?contractType=payasyougo'])"))
	public static WebElement PayAsUGo;

	//@FindBy(how = How.XPATH, using = "//h2[contains(text(),'Sort')]")
	@FindBy(how = How.XPATH, using = "//*[@id='o2-page-wrapper']/div[4]/div[1]/div[1]/div[2]/ul/li[2]/a/h2")
	public static WebElement SortTab;

	@FindAll({
			@FindBy(how = How.XPATH, using = ("//div[@class='basket-list']//li[@data-qa-class='basket-item']/section/h3/span")) })
	public static List<WebElement> DevicesList;

	@FindBy(how = How.XPATH, using = ("//*[@id='qa-data']/a[@id='data_qa_Huawei_1']/form/button[1]"))
	public static WebElement RandomDevice;

	/*@FindAll({
			@FindBy(how = How.XPATH, using = ("//div[@class='module label-xxl desktop-fragments-label-xxl-1']/h2")) })
	public static List<WebElement> TabletDevicesName;*/

	//@FindBy(how = How.XPATH, using = "//h2[contains(text(),'Filter')]")
	@FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[3]")
	public static WebElement FilterTab;

	@FindBy(how = How.XPATH, using = ("//a[@href='changeTariff/']"))
	public static WebElement ChooseADifferentTariff;

	@FindAll({ @FindBy(how = How.XPATH, using = "//div[@data-qa-device-brand='apple']/div/img") })
	public static List<WebElement> ImgSrc;

	@FindAll({ @FindBy(how = How.XPATH, using = "//div[@class='device-title']/div/h2") })
	public static List<WebElement> DeviceNames;

	@FindBy(how = How.XPATH, using = ("//*[@id='deviceImage']"))
	public static WebElement ImgSrcTEpages;

	@FindAll({ @FindBy(how = How.XPATH, using = "//div[@class='tariff-container']") })
	public static List<WebElement> TariffTile;

	@FindBy(how = How.XPATH, using = ("//a[@href='/upgrade/store/existing-customer-offers/?deviceCategory=ipad']"))
	public static WebElement BackToiPad;

	@FindBy(how = How.XPATH, using = ("//div[@class='default-content-container']"))
	public static WebElement BannerDescription;

	@FindAll({ @FindBy(how = How.XPATH, using = "//div[@id='panel']//div") })
	public static List<WebElement> PanelList;

	@FindBy(how = How.XPATH, using = ("//*[@data-qa-device-model-family='iPad mini 3']/div[4]/form/button"))
	public static WebElement IpadMini3Buynow;

	@FindBy(how = How.XPATH, using = ("//*[@data-qa-device-model-family='iPad Pro 9.7 inch']/div[4]/form/button"))
	public static WebElement IpadPro97Buynow;

	@FindBy(how = How.XPATH, using = ("//*[@data-qa-device-model-family='iPad mini 2']/div[4]/form/button"))
	public static WebElement IpadMini2Buynow;

	@FindBy(how = How.XPATH, using = ("//*[@data-qa-device-model-family='iPad Air 2']/div[4]/form/button"))
	public static WebElement IpadAirBuynow;

	@FindBy(how = How.XPATH, using = ("//*[@data-qa-device-model-family='Galaxy Tab Active']/div[4]/form/button"))
	public static WebElement GalaxyTabActiveBuynow;

	@FindBy(how = How.XPATH, using = ("//*[@data-qa-device-model-family='Galaxy Tab A 2016 10.1']/div[4]/form/button"))
	public static WebElement GalaxyTabActive2016101Buynow;

	@FindBy(how = How.XPATH, using = ("//*[@data-qa-device-model-family='Xperia Z2 Tablet']/div[4]/form/button"))
	public static WebElement XperiaZ2TabletBuynow;

	@FindBy(how = How.ID, using = ("header-primary"))
	public static WebElement headerofTariffandExtrasPage;

	@FindBy(how = How.XPATH, using = ("//div[@class='ribbon-wrapper']"))
	public static WebElement DeviceRibbon;

	@FindBy(how = How.XPATH, using = ("//*[@data-qa-device-model-family='iPad mini 3']/div[1]/div[2]/div[1]/div[2]/div[2]/select[@id='memory']"))
	public static WebElement CapacityipadMini3;

	@FindBy(how = How.XPATH, using = ("//div[@data-qa-device-model-family='iPad mini 3']/div/p[@class='costs ng-binding ng-scope']"))
	public static WebElement PriceiPadmini3;

	@FindBy(how = How.XPATH, using = ("//div[@data-qa-device-model-family='iPad Air 2']/div/p[@class='costs ng-binding ng-scope']"))
	public static WebElement PriceiPadAir2;

	@FindBy(how = How.XPATH, using = ("//*[@data-qa-device-model-family='iPad Air 2']/div[1]/div[2]/div[1]/div[2]/div[2]/select[@id='memory']"))
	public static WebElement CapacityipadAir2;

	@FindAll({ @FindBy(how = How.XPATH, using = ("//div[@class='device-title']/div/h2")) })
	public static List<WebElement> MBBDevicesName;

	@FindBy(how = How.XPATH, using = ("//a[@class='boxclose']"))
	public static WebElement BoxClose;

	@FindBy(how = How.XPATH, using = ("//a[contains(text(),'See full technical specification')]"))
	public static WebElement FullSpecificationElement;

	@FindBy(how = How.XPATH, using = ("//div[@class='accordion-content']"))
	public static WebElement SpecificationsElement;

	@FindBy(how = How.XPATH, using = ("//*[@id='device-details']/div[1]/h3"))
	public static WebElement PopupdevicenametextElement;

	@FindBy(how = How.XPATH, using = ("//a[@href='/upgrade/store/existing-customer-offers/?deviceCategory=tablet']"))
	public static WebElement BackToTablet;

	@FindBy(how = How.XPATH, using = ("//*[@data-qa-device-model-family='iPad mini 4']//div/form/button"))
	public static WebElement iPadMini4BuyNow;

	@FindAll({
			@FindBy(how = How.XPATH, using = ("//div[@class='multi-size-tile clearfix cube']//p[@class='details']")) })
	public static List<WebElement> TabletDevicesName;
	@FindAll({
			@FindBy(how = How.XPATH, using = ("//div[@class='multi-size-tile clearfix cube']//p[@class='details']")) })
	public static List<WebElement> iPadDevicesName;


	@FindAll({ @FindBy(how = How.XPATH, using = ("//span[contains(text(),'£')]")) })
	public static List<WebElement> Prices;
}
