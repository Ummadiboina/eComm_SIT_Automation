package pageobjects;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BaseCommPage {

	@FindAll({
		@FindBy(how=How.XPATH,using=("//div[@class='module label-xxl desktop-fragments-label-xxl-1']/h2"))
		})
	public static List<WebElement> iPadDevicesName;
	
	@FindBy(how=How.XPATH,using="")
	public static WebElement OtherTablets;
	
	@FindBy(how=How.XPATH,using="")
	public static WebElement iPad;
	
	@FindBy(how=How.XPATH,using=("(//a[@href='?contractType=payasyougo'])"))
	public static WebElement PayAsUGo;
	
	@FindBy(how=How.XPATH,using="//h2[contains(text(),'Sort')]")
	public static WebElement SortTab;
	
		@FindAll({
		@FindBy(how = How.XPATH, using = ("//div[@class='basket-list']//li[@data-qa-class='basket-item']/section/h3/span"))
		})
		public static List<WebElement> DevicesList;

	@FindBy(how = How.XPATH, using = ("//*[@id='qa-data']/a[@id='data_qa_Huawei_1']/form/button[1]"))
	public static WebElement RandomDevice;


	@FindAll({
		@FindBy(how=How.XPATH,using=("//div[@class='module label-xxl desktop-fragments-label-xxl-1']/h2"))
		})
	public static List<WebElement> TabletDevicesName;
	
//==============

/*
@FindAll({
	@FindBy(how = How.XPATH, using = ("//div[@class='multi-size-tile clearfix cube']//p[@class='details']")) })
public static List<WebElement> iPadDevicesName;

@FindAll({
	@FindBy(how = How.XPATH, using = ("//div[@class='multi-size-tile clearfix cube']//p[@class='details']")) })
public static List<WebElement> TabletDevicesName;

@FindBy(how = How.XPATH, using = "//a[@tabcanonicalname='tablet']")
public static WebElement OtherTablets;

@FindBy(how = How.XPATH, using = "//a[@tabcanonicalname='ipad']")
public static WebElement iPad;

@FindBy(how = How.XPATH, using = ("(//a[@href='?contractType=payasyougo'])"))
public static WebElement PayAsUGo;

@FindBy(how = How.XPATH, using = "//h2[contains(text(),'Sort')]")
public static WebElement SortTab;

@FindAll({
	@FindBy(how = How.XPATH, using = ("//div[@class='basket-list']//li[@data-qa-class='basket-item']/section/h3/span")) })
public static List<WebElement> DevicesList;

@FindBy(how = How.XPATH, using = ("//*[@id='qa-data']/a[@id='data_qa_Huawei_1']/form/button[1]"))
public static WebElement RandomDevice;
*/
@FindBy(how = How.XPATH, using = ("//a[@href='changeTariff/']"))
public static WebElement ChooseADifferentTariff;

@FindAll({ @FindBy(how = How.XPATH, using = "//div[@class='grid']//img") })
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


}
