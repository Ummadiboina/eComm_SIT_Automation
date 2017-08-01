package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SortingAndFilter {

	@FindBy(how = How.XPATH, using = "(//ul[@class='filter-sort-list']/li/label/div)[1]")
	public static WebElement MonthlyHighToLow;

	@FindBy(how = How.XPATH, using = "(//ul[@class='filter-sort-list']/li/label/div)[2]")
	public static WebElement MonthlyLowToHigh;

	@FindBy(how = How.XPATH, using = "(//ul[@class='filter-sort-list']/li/label/div)[3]")
	public static WebElement UpfrontHighToLow;

	@FindBy(how = How.XPATH, using = "(//ul[@class='filter-sort-list']/li/label/div)[3]")
	public static WebElement UpfrontLowToHigh;

	@FindBy(how = How.XPATH, using = "((//div[@ng-show='showSortByFeatures']/ul/li/label/div)[1]")
	public static WebElement ScreenSize;

	@FindBy(how = How.XPATH, using = "(//div[@ng-show='showSortByFeatures']/ul/li/label/div)[2]")
	public static WebElement Weight;

	@FindBy(how = How.XPATH, using = "(//div[@ng-show='showSortByFeatures']/ul/li/label/div)[3]")
	public static WebElement BatteryLife;

	@FindBy(how = How.XPATH, using = "(//div[@ng-show='showSortByFeatures']/ul/li/label/div)[4]")
	public static WebElement CameraResolution;

	@FindBy(how = How.XPATH, using = "(//ul[@ng-show='showSortByUserRating']/li/label/div)[1]")
	public static WebElement UserRatingHighToLow;

	@FindBy(how = How.XPATH, using = "(//ul[@ng-show='showSortByUserRating']/li/label/div)[2]")
	public static WebElement UserRatingLowToHigh;

	@FindBy(how = How.XPATH, using = "(//ul[@class='filter-sort-list']/li/label/div)[11]")
	public static WebElement BrandAToZ;
	
	@FindBy(how = How.XPATH, using = "(//ul[@class='filter-sort-list']/li/label/div)[12]")
	public static WebElement BrandZToA;
	
	//@FindBy(how = How.XPATH, using = "//a[@class='reset-link']")
	@FindBy(how = How.XPATH, using = "//*[@id='o2-page-wrapper']/div[4]/div[1]/div[2]/div[2]/div[2]/a")
	public static WebElement ResetSort;

	@FindBy(how = How.XPATH, using = "//button[@value='Done']")
	public static WebElement Done;	


/*

@FindBy(how = How.XPATH, using = "(//ul[@class='filter-sort-list']/li/label/input)[1]")
public static WebElement MonthlyHighToLow;

@FindBy(how = How.XPATH, using = "(//ul[@class='filter-sort-list']/li/label/input)[2]")
public static WebElement MonthlyLowToHigh;

@FindBy(how = How.XPATH, using = "(//ul[@class='filter-sort-list']/li/label/input)[3]")
public static WebElement UpfrontHighToLow;

@FindBy(how = How.XPATH, using = "(//ul[@class='filter-sort-list']/li/label/input)[3]")
public static WebElement UpfrontLowToHigh;

@FindBy(how = How.XPATH, using = "((//div[@ng-show='showSortByFeatures']/ul/li/label/input)[1]")
public static WebElement ScreenSize;

@FindBy(how = How.XPATH, using = "(//div[@ng-show='showSortByFeatures']/ul/li/label/input)[2]")
public static WebElement Weight;

@FindBy(how = How.XPATH, using = "(//div[@ng-show='showSortByFeatures']/ul/li/label/input)[3]")
public static WebElement BatteryLife;

@FindBy(how = How.XPATH, using = "(//div[@ng-show='showSortByFeatures']/ul/li/label/input)[4]")
public static WebElement CameraResolution;

@FindBy(how = How.XPATH, using = "(//ul[@ng-show='showSortByUserRating']/li/label/input)[1]")
public static WebElement UserRatingHighToLow;

@FindBy(how = How.XPATH, using = "(//ul[@ng-show='showSortByUserRating']/li/label/input)[2]")
public static WebElement UserRatingLowToHigh;

@FindBy(how = How.XPATH, using = "(//ul[@class='filter-sort-list']/li/label/input)[9]")
public static WebElement BrandAToZ;

@FindBy(how = How.XPATH, using = "(//ul[@class='filter-sort-list']/li/label/input)[10]")
public static WebElement BrandZToA;

@FindBy(how = How.XPATH, using = "//*[@id='o2-page-wrapper']/div[3]/div[1]/div[2]/div[2]/div[2]/a")
public static WebElement ResetSort;

@FindBy(how = How.XPATH, using = "//button[@value='Done']")
public static WebElement Done;*/

@FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[3]/h3")
public static WebElement Brand;

@FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[4]/h3")
public static WebElement Colour;

@FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[3]/ul/li[1]/div/label[1]")
public static WebElement Brand_Alcatel;

@FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[3]/ul/li[2]/div/label[1]")
public static WebElement Brand_Apple;

@FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[3]/ul/li[3]/div/label[1]")
public static WebElement Brand_Doro;

@FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[3]/ul/li[4]/div/label[1]")
public static WebElement Brand_HTC;

@FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[3]/ul/li[5]/div/label[1]")
public static WebElement Brand_Huawei;

@FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[3]/ul/li[6]/div/label[1]")
public static WebElement Brand_LG;

@FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[3]/ul/li[7]/div/label[1]")
public static WebElement Brand_Moto;

@FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[3]/ul/li[8]/div/label[1]")
public static WebElement Brand_OnePlus;

@FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[3]/ul/li[3]/div/label[1]")
public static WebElement Brand_Samsung;

@FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[3]/ul/li[10]/div/label[1]")
public static WebElement Brand_Sony;

@FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[4]/ul/li[1]/div/label[1]")
public static WebElement Colour_Black;

@FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[4]/ul/li[2]/div/label[1]")
public static WebElement Colour_Grey;

 @FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[4]/ul/li[3]/div/label[1]")
public static WebElement Colour_Yellow;

 @FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[4]/ul/li[4]/div/label[1]")
public static WebElement Colour_Blue;

 @FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[4]/ul/li[5]/div/label[1]")
public static WebElement Colour_White;

 @FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[4]/ul/li[6]/div/label[1]")
public static WebElement Colour_Green;

 @FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[4]/ul/li[7]/div/label[1]")
public static WebElement Colour_Red;

@FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[5]/h3")
public static WebElement OperatingSystems;

@FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[7]/h3")
public static WebElement Feature;

@FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[8]/h3")
public static WebElement Offer;

@FindBy(how = How.XPATH, using = "//*[@id='filter-phones-form']/div[9]/h3")
public static WebElement Condition_Availability;

@FindBy(how=How.XPATH,using=("//*[@id='header-primary']/span"))
public static WebElement HeaderBanner;

@FindBy(how=How.XPATH,using=("//*[@id='dock-header']/ul/li[1]/p/a"))
	public static WebElement DockHeader_BackToOfferLink;

@FindBy(how=How.XPATH,using=("//*[@id='dock-header']/ul/li[2]/p/a"))
	public static WebElement DockHeader_ChooseYourTariffLink;

@FindBy(how=How.XPATH,using=("//*[@id='dock-header']/ul/li[3]/p/a"))
	public static WebElement DockHeader_AccessoriesLink;

@FindBy(how=How.XPATH,using=("//*[@id='dock-header']/ul/li[4]/p/a"))
	public static WebElement DockHeader_TopLink;

@FindBy(how=How.XPATH,using=("//*[@id='choose-tariff']"))
	public static WebElement ChooseYourTariffSection;

@FindBy(how=How.XPATH,using=("//*[@id='chooseAccessories']"))
	public static WebElement AccessoriesSection;

@FindBy(how=How.XPATH,using=("//*[@id='tariff-tile']/div[6]"))
	public static WebElement BaseComm_TariffsAndExtras_ViewAllTariffLink;

@FindBy(how=How.XPATH,using=("//*[@id='4a05eacb-a057-40fc-9ada-8b8c59c43c4d:34.99:15.00:']"))
	public static WebElement BaseComm_RecommendedTariff_Section;

@FindBy(how=How.XPATH,using=("//*[@id='4a05eacb-a057-40fc-9ada-8b8c59c43c4d:34.99:15.00:']/div[1]"))
	public static WebElement BaseComm_RecommendedTariff_PromotionLabel;

@FindBy(how=How.XPATH,using=("//*[@id='link-pay-for-your-device']"))
	public static WebElement BaseComm_PayForYourDeviceInFull_Link;

@FindBy(how=How.XPATH,using=("//*[@id='pay-full-device-tariff-tile']"))
	public static WebElement BaseComm_PayForYourDeviceInFull_Section;

@FindBy(how=How.XPATH,using=("//*[@id='panel']/div[1]/div/div[4]/div[1]"))
	public static WebElement BaseComm_ChosseYourTariff_Section;

@FindBy(how=How.XPATH,using=("//*[@id='panel']/div[1]/div/div[4]/div[3]/div"))
	public static WebElement BaseComm_ChooseYourExtras_Section;

@FindBy(how=How.XPATH,using=("//*[@id='choose-package']/div/div/div"))
	public static WebElement BaseComm_YourPackage_Section;

@FindBy(how=How.XPATH,using=("//*[@id='deliveryOption_storeCollection']"))
	public static WebElement BaseComm_ClickAndCollect_Delivery_Option;


}
