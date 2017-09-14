package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Agent_DealBuilderPage {
	  
		@FindBy(how=How.ID,using="plansTab")
		public static WebElement TariffsTab;
		
		@FindBy(how=How.ID,using="devicesTab")
		public static WebElement DevicesTab;
		
		@FindBy(how=How.ID,using="extrasTab")
		public static WebElement ExtrasTab;
		
		@FindBy(how=How.ID,using="accessoriesTab")
		public static WebElement AccessoriesTab;
		
		@FindBy(how=How.ID,using="prepayDevicesTab")
		public static WebElement prepayDevicesTab;
		
		@FindBy(how=How.ID,using="prepayPlansTab")
		public static WebElement prepayPlansTab;
		
		
		@FindBy(how=How.ID,using="checkStoreStock")
		public static WebElement StoreCheck;
	
		@FindBy(how=How.ID,using="startCheckoutFromPrivateBasketButton")
		public static WebElement Checkout;
		
		
		@FindBy(how=How.ID,using="dealBuilderContent")
		public static WebElement dealBuilderContent;
		
		@FindBy(how=How.XPATH,using="//*[@id='deviceTable_filter']/label/input")
		public static WebElement SearchTextBox_PayMDevice;		
		
		
		@FindBy(how=How.XPATH,using="//*[@id='planTable_filter']/label/input")
		public static WebElement SearchTextBox_Tariff;		
		
		
		@FindBy(how=How.XPATH,using="//*[@id='accessoryTable_filter']/label/input")
		public static WebElement SearchTextBox_Accessories;	
		
		
		@FindBy(how=How.XPATH,using="//*[@id='prepayDeviceTable_filter']/label/input")
		public static WebElement SearchTextBox_PrepayDevice;		
		
		
		@FindBy(how=How.XPATH,using="//table[@id='deviceTable']/tbody/tr/td/a/img")
		public static WebElement SelectInStockPAYMDevice;	
		
		@FindBy(how=How.XPATH,using="//*[@id='planTable']/tbody/tr[1]/td[1]")
		public static WebElement SelectingFirstAvailableTariff;	
		
		@FindBy(how=How.XPATH,using="//*[@id='prepayPlanTable']/tbody/tr[1]/td[1]")
		public static WebElement SelectingFirstAvailablePrePayTariff;	
		
		@FindBy(how=How.XPATH,using="//table[@id='prepayDeviceTable']/tbody/tr/td/a/img")
		public static WebElement SelectInStockPAYGDevice;	
		
		
		@FindBy(how=How.XPATH,using="//table[@id='accessoryTable']/tbody/tr/td/a/img")
		public static WebElement SelectSeachedaccessory;	
		
		
		@FindBy(how=How.XPATH,using="//*[@id='dataAllowances']/table/tbody/tr/td[1]/a")
		public static WebElement SelectingAvailableDataAllowance;	
		
		@FindBy(how=How.XPATH,using="//a[contains(text(),'Email Basket')]")
		public static WebElement eMailBasket;
		
		@FindBy(how=How.ID,using="sendBasketEmailAddress")
		public static WebElement sendBasketEmailAddress;
		
		@FindBy(how=How.XPATH,using="//input[@value='Send']")
		public static WebElement sendBasketPopupSubmit;
		
		@FindBy(how=How.XPATH,using="//*[@id='prepayDeviceTable']/tbody/tr/td[4]")
		public static WebElement Instock;

		@FindBy(how=How.XPATH,using="//*[@class='priceSelection']/select")
		public static WebElement HandsetTariffCombination;


		///////////////////////////// Basecomms//////////////////////////////

		// *[@id="buy-4a05eacb-a057-40fc-9ada-8b8c59c43c4e"]/img

		@FindBy(how = How.XPATH, using = "//*[@class='priceSelection']/select")
		public static WebElement basecommstariff;
		
		@FindBy(how = How.XPATH, using = "html/body/div[1]/div/div[2]/div[1]/table/tbody/tr[1]/td[1]/a/img")
		public static WebElement firstAvailableDevice;

		@FindBy(how = How.XPATH, using = "//input[@type='checkbox']")
		public static WebElement ChooseBasketToSend;

		@FindBy(how = How.XPATH, using = "//*[@class='emailBasketMessage']")
		public static WebElement emailConfirmation;


		@FindBy(how=How.XPATH,using="//*[@id='deviceTable_filter']/label/input")
		public static WebElement DeviceSearchFilter;

		@FindBy(how = How.XPATH, using = "//div[@id='deviceTable_filter']/label/input")
		public static WebElement SearchDevice;
}
