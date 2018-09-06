package pageobjects;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ConnectedDeviceDetailsPage {

    // The below webelement is not right need to edit this
   // @FindBy(how = How.ID, using = "deviceDetailsSubmit")
    @FindBy(how = How.XPATH, using = "//button[@id='deviceDetailsSubmit']")
    public static WebElement ViewOurTariffs;

    @FindBy(how = How.XPATH, using = "(//a[normalize-space()='See our plans'])[1]")
    public static WebElement SeeOurplansLink;

    @FindBy(how = How.XPATH, using = "(//button[normalize-space()='See our plans'])[1]")
    public static WebElement SeeOurplansCTA;

    @FindBy(how = How.XPATH, using = "(//button[normalize-space()='Add to basket'])[1]")
    public static WebElement AddtoBasket;


    // the element not found issue was mainly because not giving proper element
    // idenfier, had declared ID in xpath defining format

    // The below webelement is for selecting pink color of the device
    @FindBy(how = How.XPATH, using = "//a[@ng-click='colourClick()'][@title='Pink']")
    public static WebElement Pink;

    // The below webelement is for selecting gold platinum color of the device
    @FindBy(how = How.XPATH, using = "//a[@ng-click='colourClick()'][@title='Gold Platinum']")
    public static WebElement GoldPlatinum;

    // The below webelement is for selecting black onyx color of the device
    @FindBy(how = How.XPATH, using = "//a[@ng-click='colourClick()'][@title='Black Onyx']")
    public static WebElement BlackOnyx;

    // The below webelement is for selecting black color of the device
    @FindBy(how = How.XPATH, using = "//a[@ng-click='colourClick()'][@title='Black']")
    public static WebElement Black;

    @FindBy(how = How.ID, using = "deviceBackground")
    public static WebElement clickanywhere;

    @FindBy(how = How.XPATH, using = "//p[@class='delivery-information']/span[1]")
    public static WebElement PreDevStatusMsg;

    @FindBy(how = How.XPATH, using = "//p[@class='delivery-information']/span[2]")
    public static WebElement DevStatusMsg;
    // have to change the below xpath after getting the environment

//**********************************88
    //colour

    @FindBy(how = How.XPATH, using = "//span[@class='selectboxit-colour-name']")
    public static WebElement defaut_Selectd_Colour;

    @FindBy(how = How.ID, using = "memorySelectBoxItArrow")
    public static WebElement Arrow_deviceCapacity;


    @FindBy(how = How.ID, using = "memorySelectBoxItText")
    public static WebElement default_deviceCapacity;



//============================FR - Flexible Refresh


    @FindBy(how = How.XPATH, using = "//span/i[@id='colourSelectBoxItArrow']")
    public static WebElement ColorDropDown;

    @FindBy(how = How.XPATH, using = "//span/i[@id='memorySelectBoxItArrow']")
    public static WebElement CapacityDropDown;

    @FindAll({@FindBy(how = How.XPATH, using = "//ul[@class='styled-group device-capacity']/label/span")})
    public static List<WebElement> CapacityLabel;

    @FindAll({@FindBy(how = How.XPATH, using = "//ul[@class='styled-group device-color']/label/span")})
    public static List<WebElement> ColorLabel;

    @FindAll({@FindBy(how = How.XPATH, using = "//span[@class='selectboxit-colour-name']")})
    public static WebElement UpdatedColorLabel;

    @FindAll({@FindBy(how = How.XPATH, using = "//span[@id='colourSelectBoxItArrowContainer' or @id='colorSelectBoxItArrowContainer']")})
    public static WebElement colorselectBoxArow;

    //Arrow - color drop down
    @FindAll({@FindBy(how = How.XPATH, using = "//span[@id='colourSelectBoxItArrowContainer']")})
    public static WebElement selectColour;

    @FindAll({@FindBy(how = How.XPATH, using = "//*[@id='colourSelectBoxIt' or @id='colorSelectBoxIt']")})
    public static WebElement Colourdropdownbox;

    @FindAll({@FindBy(how = How.XPATH, using = "//*[@id='color']/option")})
    public static WebElement ColourText;


//Flexible Refresh
    //toggle-360-spin
    @FindBy(how = How.XPATH, using = "//a[normalize-space()='360 spin']")
    public static WebElement toggle_360_spin;

    //toggle-gallery
    @FindBy(how = How.XPATH, using = "//a[@class='icon-link  toggle-gallery']")
    public static WebElement toggle_gallery;

    //toggle-play video
    @FindBy(how = How.XPATH, using = "//a[@class='icon-link  toggle-play video']")
    public static WebElement toggle_play_video;

    //pay-monthly TabName
    @FindBy(how = How.XPATH, using = "//li[@data-tabname='pay-monthly']/a")
    public static WebElement pay_monthly_TabName;

    //pay-monthly flexible refresh section
    @FindBy(how = How.XPATH, using = "//div[@class='fr-calc-sec col-md-6 col-sm-6']")
    public static WebElement pay_monthly_flexible_refresh_section;

    //min-icon Upfrent
    @FindBy(how = How.XPATH, using = "//div[contains(@data-calc,'upfront')]/..//div[contains(@class,'min-icon')]")
    public static WebElement minIcon_Upfrent;

    @FindBy(how = How.XPATH, using = "//div[contains(@data-calc,'upfront')]/..//div[contains(@class,'min-icon')]/..//div[contains(@class,'min-icon calc-track-element disable')]")
    public static WebElement minIcon_Upfrent_disiabled;



    @FindAll({@FindBy(how = How.XPATH, using = "//div[contains(@data-calc,'upfront')]/..//div[contains(@class,'min-icon')]")})
    public static List<WebElement> minIcon_Upfrent_1;


    //min - Val of Upfrent
    @FindBy(how = How.XPATH, using = "//div[contains(@data-calc,'upfront')]/..//div[contains(@class,'min-icon')]/following-sibling::div")
    public static WebElement minVal_Upfrent;

    //max - con Upfrent
    @FindBy(how = How.XPATH, using = "//div[contains(@data-calc,'upfront')]/..//div[contains(@class,'max-icon')]")
    public static WebElement maxIcon_Upfrent;

    @FindBy(how = How.XPATH, using = "//div[contains(@data-calc,'upfront')]/..//div[contains(@class,'max-icon')]/..//div[contains(@class,'max-icon calc-track-element disable')]")
    public static WebElement maxIcon_Upfrent_disiabled;

    //max - Value Upfrent
    @FindBy(how = How.XPATH, using = "//div[contains(@data-calc,'upfront')]/..//div[contains(@class,'max-icon')]/following-sibling::div")
    public static WebElement maxVal_Upfrent;

    //fr-defaultUpfront value
    @FindBy(how = How.XPATH, using = "//div[contains(@class,'fr-defaultUpfront value')]")
    public static WebElement upfrentVal;

    //min-icon term/month
    @FindBy(how = How.XPATH, using = "//div[contains(@data-calc,'term')]/..//div[contains(@class,'min-icon')]")
    public static WebElement minIcon_term;

    @FindBy(how = How.XPATH, using = "//div[contains(@data-calc,'term')]/..//div[contains(@class,'min-icon')]/..//div[contains(@class,'min-icon calc-track-element disable')]")
    public static WebElement minIcon_term_disable;


    //min - Val of term
    @FindBy(how = How.XPATH, using = "//div[contains(@data-calc,'term')]/..//div[contains(@class,'min-icon')]/following-sibling::div")
    public static WebElement minVal_term;

    //max - icon term
    @FindBy(how = How.XPATH, using = "//div[contains(@data-calc,'term')]/..//div[contains(@class,'max-icon')]")
    public static WebElement maxIcon_term;

    @FindBy(how = How.XPATH, using = "//div[contains(@data-calc,'term')]/..//div[contains(@class,'max-icon')]/..//div[contains(@class,'max-icon calc-track-element disable')]")
    public static WebElement maxIcon_term_Disable;

    //max - Value term
    @FindBy(how = How.XPATH, using = "//div[contains(@data-calc,'term')]/..//div[contains(@class,'max-icon')]/following-sibling::div")
    public static WebElement maxVal_term;

    //fr-defaultTermMonth value
    @FindBy(how = How.XPATH, using = "//div[contains(@class,'fr-defaultTermMonth value')]")
    public static WebElement termVal;

    //min-icon tariff
    @FindBy(how = How.XPATH, using = "//div[contains(@data-calc,'tariff')]/..//div[contains(@class,'min-icon')]")
    public static WebElement minIcon_data;

    @FindBy(how = How.XPATH, using = "//div[contains(@data-calc,'tariff')]/..//div[contains(@class,'min-icon')]/..//div[contains(@class,'min-icon calc-track-element disable')]")
    public static WebElement minIcon_data_disable;

    //min - Val of tariff
    @FindBy(how = How.XPATH, using = "//div[contains(@data-calc,'tariff')]/..//div[contains(@class,'min-icon')]/following-sibling::div")
    public static WebElement minVal_data;

    //max - icon tariff
    @FindBy(how = How.XPATH, using = "//div[contains(@data-calc,'tariff')]/..//div[contains(@class,'max-icon')]")
    public static WebElement maxIcon_data;

    @FindBy(how = How.XPATH, using = "//div[contains(@data-calc,'tariff')]/..//div[contains(@class,'max-icon')]/..//div[contains(@class,'max-icon calc-track-element disable')]")
    public static WebElement maxIcon_data_Disable;

    //max - Value tariff
    @FindBy(how = How.XPATH, using = "//div[contains(@data-calc,'tariff')]/..//div[contains(@class,'max-icon')]/following-sibling::div")
    public static WebElement maxVal_data;

    //fr-default term data
    @FindBy(how = How.XPATH, using = "//div[contains(@class,'value fr-default-term-data')]")
    public static WebElement dataVal;

    //refresh - Build your plan
    @FindBy(how = How.XPATH, using = "//span[contains(@class,'fr-refresh-text')]")
    public static WebElement reSet_BuildYourPlan;

    //clac message | You'll also get unlimited minutes and texts.
    @FindBy(how = How.XPATH, using = "//div[@class='fr-calc-msg']")
    public static WebElement calc_msg;

    //Total price
    @FindBy(how = How.XPATH, using = "//div[@class='fr-total-price value']")
    public static WebElement totalPrice;

    //total price over lay
    @FindBy(how = How.XPATH, using = "//a[@data-overlay='overlay-cal-info']")
    public static WebElement totalPriceOverLay;

    //total price downArrow
    @FindBy(how = How.XPATH, using = "//span[@class='fr-calc-down-arrow']")
    public static WebElement downArrow;

    //total price up arrow
   @FindBy(how = How.XPATH, using = "//span[@class='fr-calc-down-arrow up-arrow']")
    public static WebElement upArrow;

    //calc-title
    @FindBy(how = How.XPATH, using = "//div[@class='fr-calc-title']")
    public static WebElement totalPriceDetails_calcTitle;

    // Business Customers link
    @FindBy(how = How.XPATH, using = " //a[@title='Business Customers']")
    public static WebElement business_Customers;

    // Existing Customers
    @FindBy(how = How.XPATH, using = "//a[@title='Existing Customers']")
    public static WebElement existing_Customers;

    //list of Promo codes description
    @FindAll({@FindBy(how = How.XPATH, using = "//*[@class='promo-description']")})
    public static WebElement your_phone_yourWay_list;

    //Promo codes description - Right arrow
    @FindBy(how = How.XPATH, using = "(//div[@class='owl-next']/../div[contains(@style,'display: block;')])[2]")
    public static WebElement rightArrow_PromoCodeDesc;

    //Promo codes description - Left arrow
    @FindBy(how = How.XPATH, using = "(//div[@class='owl-next']/../div[contains(@style,'display: block;')])[1]")
    public static WebElement leftArrow_PromoCodeDesc;

    //See out plans link
    @FindBy(how = How.XPATH, using = "//a[normalize-space()='See our plans']")
    public static WebElement seeOurPlans;

    //Offers included
    @FindBy(how = How.XPATH, using = "(//span[normalize-space()='Offers included'])[1]")
    public static WebElement offersIncluded;

    //Choose this plan
    @FindBy(how = How.XPATH, using = "//a[contains(text(),'Choose this plan')]")
    public static WebElement chooseThisPlan;



    // TnE page


    //total cost
    @FindBy(how = How.XPATH, using = "//li[@class='totals']/section")
    public static WebElement totalCost_BasketPage;

    //product-details
    @FindBy(how = How.XPATH, using = "//section[@class='product-details']")
    public static WebElement prodctDetails_TnE;

    //Air time plan details
    @FindBy(how = How.XPATH, using = "//section[@class='airtime-plan pay-monthly-plan']")
    public static WebElement airTimePlan_TnE;


    //Click link for CFU
    @FindBy(how = How.XPATH, using = "(//a[normalize-space()='View phone details'])[2]")
    public static WebElement clickLink4CFU;



















}
