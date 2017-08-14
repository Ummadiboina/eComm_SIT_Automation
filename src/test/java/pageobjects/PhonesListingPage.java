package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

@SuppressWarnings("unused")
public class PhonesListingPage {

	@FindBy(how = How.XPATH, using = "//a[contains(., 'View all products on one page')]")
	public static WebElement ViewAllPhones;

	// Below Are list of all the phones in first page of the PayM phones landing
	// page
	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/blackberry/classic/#contractType=paymonthly')]")
	public static WebElement BlackberryClassic;
	
	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/bq/aquaris-m4-5/#contractType=paymonthly')]")
	public static WebElement AquarisM45;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/samsung/galaxy-s7/#contractType=paymonthly')]")
	public static WebElement GalaxyS7;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/samsung/galaxy-s8/#contractType=paymonthly')]")
	public static WebElement GalaxyS8;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/samsung/galaxy-s8-plus/#contractType=paymonthly')]")
	public static WebElement GalaxyS8Plus;
	
	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/apple/iphone-5s/#contractType=paymonthly')]")
	public static WebElement Iphone5S;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/apple/iphone-7/#contractType=paymonthly')]")
	public static WebElement Iphone7;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/apple/iphone-7-plus/#contractType=paymonthly')]")
	public static WebElement Iphone7Plus;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/apple/iphone-se/#contractType=paymonthly')]")
	public static WebElement IphoneSE;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/huawei/p10/#contractType=paymonthly')]")
	public static WebElement HuaweiP10;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/samsung/galaxy-s7-edge/#contractType=paymonthly')]")
	public static WebElement GalaxyS7Edge;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/oneplus/3t/#contractType=paymonthly')]")
	public static WebElement Oneplus3T;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/sony/xperia-xz-premium/#contractType=paymonthly')]")
	public static WebElement XperiaZ5Premium;
	
	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/apple/iphone-7-like-new/#contractType=paymonthly')]")
	public static WebElement AppleiPhone7LikeNew;
	
	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/apple/iphone-6s-plus-like-new/#contractType=paymonthly')]")
	public static WebElement AppleiPhone6sPlusLikeNew;
	
	// Below are for PAYG device


	@FindBy(how = How.XPATH, using = "//*[@class='device-tile__top'][1]")
	public static WebElement RandomDevice;

	@FindBy(how = How.XPATH, using = "//a[contains(@href, '/shop/phones/moto/g5/#contractType=payasyougo')]")
	public static WebElement MotoG5;

	@FindBy(how = How.XPATH, using = ("//*[@id='header-primary']/span"))
	public static WebElement HeaderBanner;

	@FindBy(how = How.XPATH, using = ("//*[@id='dock-header']/ul/li[1]/p/a"))
	public static WebElement DockHeader_BackToOfferLink;

	@FindBy(how = How.XPATH, using = ("//*[@id='dock-header']/ul/li[2]/p/a"))
	public static WebElement DockHeader_ChooseYourTariffLink;

	@FindBy(how = How.XPATH, using = ("//*[@id='dock-header']/ul/li[3]/p/a"))
	public static WebElement DockHeader_AccessoriesLink;

	@FindBy(how = How.XPATH, using = ("//*[@id='dock-header']/ul/li[4]/p/a"))
	public static WebElement DockHeader_TopLink;

	@FindBy(how = How.XPATH, using = ("//*[@id='choose-tariff']"))
	public static WebElement ChooseYourTariffSection;

	@FindBy(how = How.XPATH, using = ("//*[@id='chooseAccessories']"))
	public static WebElement AccessoriesSection;

	@FindBy(how = How.XPATH, using = ("//*[@class='viewAllTariffs']"))
	public static WebElement BaseComm_TariffsAndExtras_ViewAllTariffLink;

	@FindBy(how = How.XPATH, using = ("//div[@id='tariff-tile']/div[2]"))
	public static WebElement BaseComm_RecommendedTariff_Section;

	@FindBy(how = How.XPATH, using = ("//div[@id='tariff-tile']/div[2]/div[1]"))
	public static WebElement BaseComm_RecommendedTariff_PromotionLabel;

	@FindBy(how = How.XPATH, using = ("//*[@id='link-pay-for-your-device']"))
	public static WebElement BaseComm_PayForYourDeviceInFull_Link;

	@FindBy(how = How.XPATH, using = ("//*[@id='pay-full-device-tariff-tile']"))
	public static WebElement BaseComm_PayForYourDeviceInFull_Section;

	@FindBy(how = How.XPATH, using = ("//*[@id='panel']/div[1]/div/div[4]/div[1]"))
	public static WebElement BaseComm_ChosseYourTariff_Section;

	@FindBy(how = How.XPATH, using = ("//*[@id='panel']/div[1]/div/div[4]/div[3]/div"))
	public static WebElement BaseComm_ChooseYourExtras_Section;

	@FindBy(how = How.XPATH, using = ("//*[@id='choose-package']/div/div/div"))
	public static WebElement BaseComm_YourPackage_Section;

	@FindBy(how = How.XPATH, using = ("//*[@id='deliveryOption_storeCollection']"))
	public static WebElement BaseComm_ClickAndCollect_Delivery_Option;
}
