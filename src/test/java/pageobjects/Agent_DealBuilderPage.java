package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Agent_DealBuilderPage {

    @FindBy(how = How.ID, using = "plansTab")
    public static WebElement TariffsTab;

    @FindBy(how = How.ID, using = "devicesTab")
    public static WebElement DevicesTab;

    @FindBy(how = How.ID, using = "extrasTab")
    public static WebElement ExtrasTab;

    @FindBy(how = How.ID, using = "(//span[@class='boltonName'])[2]")
    public static WebElement SelectBolton;

    @FindBy(how = How.ID, using = "accessoriesTab")
    public static WebElement AccessoriesTab;

    @FindBy(how = How.ID, using = "prepayDevicesTab")
    public static WebElement prepayDevicesTab;

    @FindBy(how = How.ID, using = "prepayPlansTab")
    public static WebElement prepayPlansTab;

    @FindBy(how = How.XPATH, using = ".//*[@id='prepayPlanTable']//th[contains(text(),'Cost')]")
    public static WebElement payG_TariffCost_SortOption;

    @FindBy(how = How.ID, using = "checkStoreStock")
    public static WebElement StoreCheck;

    @FindBy(how = How.ID, using = "startCheckoutFromPrivateBasketButton")
    public static WebElement Checkout;

    @FindBy(how = How.ID, using = "dealBuilderContent")
    public static WebElement dealBuilderContent;

    @FindBy(how = How.XPATH, using = "//*[@id='deviceTable_filter']/label/input")
    public static WebElement SearchTextBox_PayMDevice;

    @FindBy(how = How.XPATH, using = "//*[@id='planTable_filter']/label/input")
    public static WebElement SearchTextBox_Tariff;

    @FindBy(how = How.XPATH, using = "//*[@id='accessoryTable_filter']/label/input")
    public static WebElement SearchTextBox_Accessories;

    @FindBy(how = How.XPATH, using = "//*[@id='prepayDeviceTable_filter']/label/input")
    public static WebElement SearchTextBox_PrepayDevice;

    @FindBy(how = How.XPATH, using = "//table[@id='deviceTable']/tbody/tr/td/a/img")
    public static WebElement SelectInStockPAYMDevice;

    @FindBy(how = How.XPATH, using = "//*[@id='planTable']/tbody/tr[1]/td[1]")
    public static WebElement SelectingFirstAvailableTariff;

    @FindBy(how = How.XPATH, using = "//*[@id='prepayPlanTable']/tbody/tr[1]/td[1]")
    public static WebElement SelectingFirstAvailablePrePayTariff;

    @FindBy(how = How.XPATH, using = "//table[@id='prepayDeviceTable']/tbody/tr/td/a/img")
    public static WebElement SelectInStockPAYGDevice;

    @FindBy(how = How.XPATH, using = "(//table[@id='accessoryTable']/tbody/tr/td/a/img)[1]")
    public static WebElement SelectSearchedaccessory;

    @FindBy(how = How.XPATH, using = "//*[@id='dataAllowances']/table/tbody/tr/td[1]/a")
    public static WebElement SelectingAvailableDataAllowance;

    @FindBy(how = How.XPATH, using = "//a[contains(text(),'Email Basket')]")
    public static WebElement eMailBasket;


    @FindBy(how = How.ID, using = "sendBasketEmailAddress")
    public static WebElement sendBasketEmailAddress;

    @FindBy(how = How.XPATH, using = "//input[@value='Send']")
    public static WebElement sendBasketPopupSubmit;

    @FindBy(how = How.XPATH, using = "//*[@id='prepayDeviceTable']/tbody/tr/td[4]")
    public static WebElement Instock;

    @FindBy(how = How.XPATH, using = "//*[@class='priceSelection']/select")
    public static WebElement HandsetTariffCombination;

    @FindBy(how = How.XPATH, using = "//*[@id=\"emptyDealButton\"]")
    public static WebElement Emptyabove;

    @FindBy(how = How.XPATH, using = "//*[@id='buy-09c627bc-5e88-4d5d-a46d-4ad2e0b3dc22']/img ")
    public static WebElement SelectPromotion;

    @FindBy(how = How.XPATH, using = "//*[@id=\"saveToBasketButton\"]")
    public static WebElement Copytobasket;

    @FindBy(how = How.XPATH, using = "//*[@class='priceSelection']/select/option[4]")
    public static WebElement Copytobasket_opt3;

    @FindBy(how = How.XPATH, using = "//*[@id=\"packageTabs\"]/li[2]/a")
    public static WebElement PlusButton;

    ///////////////////////////// Basecomms//////////////////////////////

    // *[@id="buy-4a05eacb-a057-40fc-9ada-8b8c59c43c4e"]/img

    @FindBy(how = How.XPATH, using = "//*[@class='priceSelection']/select")
    public static WebElement basecommstariff;

    @FindBy(how = How.XPATH, using = "html/body/div[1]/div/div[2]/div[1]/table/tbody/tr[2]/td[1]/a/img")
    public static WebElement firstAvailableDevice;

    @FindBy(how = How.XPATH, using = "//input[@type='checkbox']")
    public static WebElement ChooseBasketToSend;

    @FindBy(how = How.XPATH, using = "//*[@class='emailBasketMessage']")
    public static WebElement emailConfirmation;

    @FindBy(how = How.XPATH, using = "//*[@id='deviceTable_filter']/label/input")
    public static WebElement DeviceSearchFilter;

    @FindBy(how = How.XPATH, using = "//div[@id='deviceTable_filter']/label/input")
    public static WebElement SearchDevice;

    ///////////////////////////// Trade In////////////////////////

    @FindBy(how = How.ID, using = "tradeInButton")
    public static WebElement AgentTradeInBtn;

    @FindBy(how = How.ID, using = "select_answers_1")
    public static WebElement AgentTradeAns1;

    @FindBy(how = How.ID, using = "select_answers_2")
    public static WebElement AgentTradeAns2;

    @FindBy(how = How.ID, using = "select_answers_3")
    public static WebElement AgentTradeAns3;

    @FindBy(how = How.ID, using = "select_answers_4")
    public static WebElement AgentTradeAns4;

    @FindBy(how = How.ID, using = "questions")
    public static WebElement TradeInQuestions;

    @FindBy(how = How.XPATH, using = "//*[@id='select_answers_1']/option[@value='Success']")
    public static WebElement AgentTradeAnsSelect1;

    @FindBy(how = How.XPATH, using = "//*[@id='select_answers_2']/option[@value='Success']")
    public static WebElement AgentTradeAnsSelect2;

    @FindBy(how = How.XPATH, using = "//*[@id='select_answers_3']/option[@value='Success']")
    public static WebElement AgentTradeAnsSelect3;

    @FindBy(how = How.XPATH, using = "//*[@id='select_answers_4']/option[@value='Success']")
    public static WebElement AgentTradeAnsSelect4;

    @FindBy(how = How.ID, using = "okButton")
    public static WebElement AgentTradeAccept;

    @FindBy(how = How.XPATH, using = "//*[@id='TRADEIN_']/td[1]/p[3]/label")
    public static WebElement TradeInCheckboxText;

    @FindBy(how = How.XPATH, using = "//*[@id='dealBuilderContent']/div[@class='basketContents']/div[@class='lineItemContainer']/table[@class='lineItemTable discounts']/tbody/tr[@id='TRADEIN_']/td[@class='lineItemDescription']/p[3]/input[@id='tradeInHomeDeliveryCheckbox']")
    public static WebElement TradeInCheckBox;

    // input[@name='tradeInHomeDeliveryAllowed']

    // *[@id='dealBuilderContent']/div[@class='basketContents']/div[@class='lineItemContainer']/table[@class='lineItemTable
    // discounts']/tbody/tr[@id='TRADEIN_']/td[@class='lineItemDescription']/p[3]/input[@id='tradeInHomeDeliveryCheckbox']

    ///////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Agent_BuyOut///////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    @FindBy(how = How.XPATH, using = "//*[@id='buyOutButton']")
    public static WebElement AgentBuyOut_Button;
    @FindBy(how = How.ID, using = "checkStoreStock")
    public static WebElement CheckStore;

    @FindBy(how = How.ID, using = "postcode")
    public static WebElement Postcode;

    @FindBy(how = How.ID, using = "findStores")
    public static WebElement searchStore;

    @FindBy(how = How.XPATH, using = "(//*[@class='selectStore'])[1]")
    public static WebElement selectStore;

    @FindBy(how = How.ID, using = "chosen-store-details")
    public static WebElement Storedetails;

    //check the device weather added into the Deal Builder
    @FindBy(how = How.XPATH, using = "//table[@class='lineItemTable device']//th")
    public static WebElement deviceAdded_DealBuilder;

    @FindBy(how = How.XPATH, using = "(//table[@class='lineItemTable boltons']//tr[2]/td/p/a)[1]")
    public static WebElement removeBolton;


    //check the Tariff weather added into the Deal Builder
    @FindBy(how = How.XPATH, using = "//table[@class='lineItemTable tariff']//th")
    public static WebElement tariffAdded_DealBuilder;

/* venkata ********************
   ***********************************************/

    //target promotions tab
    @FindBy(how = How.XPATH, using = "//a[@id='targetedPromotionsTab']")
    public static WebElement targetPromtionsTab;

    //target promotions tab
    @FindBy(how = How.XPATH, using = "//*[normalize-space(.)='Promotion Description']")
    public static WebElement promotionDescription;

    //deviceTab
    @FindBy(how = How.XPATH, using = "//a[@id='devicesTab']")
    public static WebElement deviceTab;

    //remove the added device from deal builder
    @FindBy(how = How.XPATH, using = "//table[@class='lineItemTable device']//a[@class='removeItem']")
    public static WebElement removeDevice_DealBuilder;

    //check check weather the promotions are displayed in Deal builder or not
    @FindBy(how = How.XPATH, using = "//table[@class='lineItemTable Promotions']")
    public static WebElement promotions_DealBuilder;

    //select the second device from stock
    @FindBy(how = How.XPATH, using = "//table[@id='deviceTable']//th[normalize-space(.)='Stock']//..//..//../tbody//tr[2]/td[1]/a")
    public static WebElement selectDevive2_formInstock;

    //selecting smartTech device Tab
    @FindBy(how = How.ID, using = "smartTechDevicesTab")
    public static WebElement SmartTechDevicesTab;

    @FindBy(how = How.XPATH, using = "//*[@id='smartTechDeviceTable_filter']/label/input")
    public static WebElement SearchTextBox_SmartTechDevice;

    @FindBy(how = How.XPATH, using = "(//table[@id='smartTechDeviceTable']/tbody/tr/td/a/img)[1]")
    public static WebElement SelectSearchedSmartTechDevice;




}
