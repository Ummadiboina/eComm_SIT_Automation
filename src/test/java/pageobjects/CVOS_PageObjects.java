package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import helpers.Environment;

public class CVOS_PageObjects extends Environment {
	
	@FindBy(how=How.XPATH,using="//*[@id='username']")
	public static WebElement Username;
	
	@FindBy(how=How.XPATH, using="//*[@id='password']")
	public static WebElement Password;
	
	@FindBy(how = How.ID, using = "login")
	public static WebElement Login;
	
	@FindBy(how = How.ID, using = "stockpots")
	public static WebElement stockpotTab;
	
	@FindBy(how = How.ID, using = "template")
	public static WebElement templateTab;
	
	@FindBy(how = How.ID, using = "registration")
	public static WebElement registrationTab;
	
	@FindBy(how = How.ID, using = "stockUpload")
	public static WebElement stockUploadTab;
	
	@FindBy(how = How.ID, using = "launchDate")
	public static WebElement stockMerchandiseTab;
	
	@FindBy(how = How.ID, using = "skuMasterUpdate")
	public static WebElement skuMasterTab;
	
	@FindBy(how = How.ID, using = "skuSelect")
	public static WebElement skuDescriptionDropDown;
	
	@FindBy(how = How.ID, using = "SKUID")
	public static WebElement skuIdDropDown;
	
	@FindBy(how = How.ID, using = "skuInput")
	public static WebElement skuInput;
	
	@FindBy(how = How.ID, using = "stockpot-search")
	public static WebElement searchButton;
	
	@FindBy(how=How.XPATH,using="//*[@id='stockpotTable']/div[2]/div/div[10]/div[3]/div[2]/div/div/span/span[1]")
	public static WebElement onlineStockpot;

	@FindBy(how=How.XPATH,using="//*[@id='stockpotTable']/div[2]/div/div[5]/div[3]")
	public static WebElement allShopStockpot;
	
	@FindBy(how=How.XPATH,using="//*[@id='modelSearchInput']")
	public static WebElement searchByModel;
	
	@FindBy(how=How.XPATH,using="//*[@id='arrivalDateB']")
	public static WebElement toMoveDeliverydate;
	
	@FindBy(how=How.XPATH,using="//*[@id='stockpots-result-area']/div/div[2]/form/fieldset/div[1]/div[2]/div/ul/li[1]/div/table/thead/tr[1]/th[3]/button")
	public static WebElement toMoveDate;
	
	@FindBy(how=How.XPATH,using="//*[@id='datepicker-00O-7156-17']/button/span")
	public static WebElement deliverySelectDate;
	
	@FindBy(how=How.XPATH,using="//*[@id='changeArrivalDate']")
	public static WebElement deliveryDateApply;
	
	@FindBy(how=How.XPATH,using="//*[@id='confirmDDMBtn']")
	public static WebElement confirmDeliveryDate;
	
	@FindBy(how=How.XPATH,using="//*[@id='model-search']")
	public static WebElement stockMerchSearch;
	
	@FindBy(how=How.XPATH,using="//*[@id='productTable']/div[1]/div[2]/div/div[1]/div[2]/input")
	public static WebElement checkBoxDevice;
	
	@FindBy(how=How.XPATH,using="//*[@id='datePickerBox']/span/button")
	public static WebElement dateForLaunchDate;
	
	
	
	@FindBy(how=How.XPATH,using="//*[@id='datePickerBox']/ul/li[1]/div/table/thead/tr[1]/th[3]/button")
	public static WebElement launchDateToFuture;
	
	
	
	@FindBy(how=How.XPATH,using="//*[@id='datePickerBox']/ul/li[1]/div/table/thead/tr[1]/th[1]/button")
	public static WebElement launchDateToPast;
	
	@FindBy(how=How.XPATH,using="//*[@id='datepicker-2J9-1163-17']/button")
	public static WebElement launchDate;
	
	@FindBy(how=How.XPATH,using="//*[@id='applyDateTime']")
	public static WebElement applyLaunchDateButton;
	
	@FindBy(how=How.XPATH,using="//*[@id='preOrderExtendedMessage']")
	public static WebElement preOrderextendedtextbox;
	
	@FindBy(how=How.XPATH,using="//*[@id='mainNav']/div/ul[2]/li[2]/a")
	public static WebElement logOut;
	
	@FindBy(how=How.XPATH,using="//*[@id='stockpotTable']/div[2]/div/div[1]/div[4]/div[2]/div/div/span/a")
	public static WebElement deviceLink;
	
	@FindBy(how=How.XPATH,using="//*[@id='btnEditStockPot']")
	public static WebElement editAllocation;
	
	@FindBy(how=How.XPATH,using="//*[@id='allocationTable0']/table/tbody/tr[10]/td[7]/input")
	public static WebElement allShopAllocation;
	
	@FindBy(how=How.XPATH,using="//*[@id='allocationTable0']/table/tbody/tr[1]/td[7]/input")
	public static WebElement cfaAllocation;
	
	@FindBy(how=How.XPATH,using="//*[@id='allocationTable0']/table/tbody/tr[2]/td[7]/input")
	public static WebElement cfuAllocation;
	
	@FindBy(how=How.XPATH,using="//*[@id='allocationTable0']/table/tbody/tr[3]/td[7]/input")
	public static WebElement afaAllocation;
	
	@FindBy(how=How.XPATH,using="//*[@id='allocationTable0']/table/tbody/tr[4]/td[7]/input")
	public static WebElement afuAllocation;
	
	@FindBy(how=How.XPATH,using="//*[@id='btnSaveStockPot']")
	public static WebElement saveAllocation;
	
	@FindBy(how=How.XPATH,using="//*[@id='stockpotTable']/div[2]/div/div[1]/div[6]/div[2]/div/span")
	public static WebElement preOrderStockStatus;
	
	@FindBy(how=How.XPATH,using="//*[@id='stockpotTable']/div[2]/div/div[1]/div[6]/div[2]/div/span")
	public static WebElement DDStockStatus;
}