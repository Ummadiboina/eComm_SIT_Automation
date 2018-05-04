package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Agent_RegisterCustomerPage {

    @FindBy(how = How.ID, using = "regTitle")
    public static WebElement Title;

    @FindBy(how = How.ID, using = "regFirstName")
    public static WebElement FirstName;

    @FindBy(how = How.ID, using = "regLastname")
    public static WebElement LastName;

    @FindBy(how = How.ID, using = "regEmail")
    public static WebElement Email;

    @FindBy(how = How.ID, using = "regDob")
    public static WebElement DOB;

    @FindBy(how = How.ID, using = "regContactNumber")
    public static WebElement ContactNumber;

    @FindBy(how = How.XPATH, using = "//*[@for='ccContactNumber'][2]")
    public static WebElement ContactNumber_error;


    @FindBy(how = How.ID, using = "regPassword")
    public static WebElement intialPassword;

    @FindBy(how = How.ID, using = "regConfirmPswd")
    public static WebElement confirmPassword;

    @FindBy(how = How.XPATH, using = "//input[@name='houseNum']")
    public static WebElement HouseNumber;

    @FindBy(how = How.XPATH, using = "//input[@name='postcode']")
    public static WebElement Postcode;

    @FindBy(how = How.XPATH, using = "//input[@value='Find address']")
    public static WebElement FindAddress;

    @FindBy(how = How.XPATH, using = "(//input[@value='Select address'])[1]")
    public static WebElement Selectedaddress;

    @FindBy(how = How.ID, using = "securityQuestion")
    public static WebElement securityQuestion;

    @FindBy(how = How.ID, using = "securityAnswer")
    public static WebElement securityAnswer;

    @FindBy(how = How.ID, using = "data-qa-registerCustomerBtn")
    public static WebElement registerCustomer;

    @FindBy(how = How.XPATH, using = "//*[@id='packageControls']/table/tbody/tr/td[2]/input")
    public static WebElement PayByCard;

    @FindBy(how = How.XPATH, using = "//div[@class='oneOffPrice']/div[2][@class='price']")
    public static WebElement ZeroOneOff;

    @FindBy(how = How.XPATH, using = "//*[@id='placeOrderForm']/input[2]")
    public static WebElement SubmitBtn;

    //@FindBy(how = How.XPATH, using = "//*[@id='lblCardNumber' or @id='CardNumber']")
    @FindBy(how = How.XPATH, using = "//label[contains(text(),'Card ending with:')]")
    public static WebElement PayByCard_2;

    // *[@id='lblCardNumber']

    @FindBy(how = How.ID, using = "yearsAtCurrentAddress")
    public static WebElement YearsatAddress;

    @FindBy(how = How.ID, using = "monthsAtCurrentAddress")
    public static WebElement monthsatAddress;

    @FindBy(how = How.ID, using = "accountName")
    public static WebElement AccountName;

    @FindBy(how = How.ID, using = "sortCode")
    public static WebElement SortCode;

    @FindBy(how = How.ID, using = "accountNumber")
    public static WebElement AccountNumber;

    @FindBy(how = How.ID, using = "agreeToCreditCheck")
    public static WebElement AgreeCreditCheck;

    @FindBy(how = How.ID, using = "captureCardDetails")
    public static WebElement CardCapture;

	/*@FindBy(how = How.ID, using = "txtCardHolderName")
    public static WebElement CardHolderName;

	@FindBy(how = How.ID, using = "ddlCardType")
	public static WebElement CardType;

	@FindBy(how = How.ID, using = "txtCardNumber")
	public static WebElement CardNumber;

	@FindBy(how = How.ID, using = "ddlMonth")
	public static WebElement CardMonth;

	@FindBy(how = How.ID, using = "ddlYr")
	public static WebElement CardYear;

	@FindBy(how = How.XPATH, using = "//span[@class='setItem cvvWrapper']/input")
	public static WebElement SecurityCode;
*/

    @FindBy(how = How.XPATH, using = "//input[@id='CardHolderName']")
    public static WebElement CardHolderName;

    @FindBy(how = How.XPATH, using = "//*[@id='ddlCardType' or @id='CardType']")
    public static WebElement CardType;

    @FindBy(how = How.XPATH, using = "//*[@id='txtCardNumber' or @id='CardNumber']")
    public static WebElement CardNumber;

    @FindBy(how = How.XPATH, using = "//*[@id='ddlMonth' or @id='Month']")
    public static WebElement CardMonth;

    @FindBy(how = How.XPATH, using = "//*[@id='ddlYear' or @id='Year']")
    public static WebElement CardYear;

    ////label[normalize-space()='Security number']/following-sibling::input
    @FindBy(how = How.XPATH, using = "//*[@id='txtSecurityCode' or @id='CardCvv']")
    public static WebElement SecurityCode;


    @FindBy(how = How.XPATH, using = "//*[@id='btnPayNow']")
    public static WebElement UsethisCard;

    @FindBy(how = How.XPATH, using = "//*[@id='creditCheckAndAgreementAndStatus']/input[3]")
    public static WebElement PerformCreditCheck;

    @FindBy(how = How.ID, using = "regPassword")
    public static WebElement Password;

    @FindBy(how = How.ID, using = "regConfirmPswd")
    public static WebElement Confirm_Password;

    @FindBy(how = How.ID, using = "securityAnswer")
    public static WebElement Security_Answer;

    @FindBy(how = How.ID, using = "marketingRequired")
    public static WebElement Check_box;





    //driving lisences

    @FindBy(how = How.ID, using = "additionalCardDetailsCheckbox")
    public static WebElement additionalCardDetailsCheckbox;

    @FindBy(how = How.ID, using = "additionalCaptureCardDetails")
    public static WebElement additionalCaptureCardDetails;



    @FindBy(how = How.ID, using = "CardHolderName")
    public static WebElement CardHolderName1;

/*
    @FindBy(how = How.ID, using = "additionalCaptureCardDetails")
    public static WebElement additionalCaptureCardDetails;*/


    @FindBy(how = How.ID, using = "licenceDetailsCheckbox")
    public static WebElement licenceDetailsCheckbox;

    @FindBy(how = How.ID, using = "licencePostCode")
    public static WebElement licencePostCode;

    @FindBy(how = How.ID, using = "licenceNumberSeg1")
    public static WebElement licenceNumberSeg1;

    @FindBy(how = How.ID, using = "licenceNumberSeg2")
    public static WebElement licenceNumberSeg2;

    @FindBy(how = How.ID, using = "licenceNumberSeg3")
    public static WebElement licenceNumberSeg3;

    @FindBy(how = How.ID, using = "licenceNumberSeg4")
    public static WebElement licenceNumberSeg4;

    @FindBy(how = How.ID, using = "passportDetailsCheckbox")
    public static WebElement passportDetailsCheckbox;

    @FindBy(how = How.ID, using = "passportIssueCountry")
    public static WebElement passportIssueCountry;

    @FindBy(how = How.ID, using = "passportNumberSeg1")
    public static WebElement passportNumberSeg1;

    @FindBy(how = How.ID, using = "passportNumberSeg2")
    public static WebElement passportNumberSeg2;

    @FindBy(how = How.ID, using = "passportNumberSeg3")
    public static WebElement passportNumberSeg3;


    @FindBy(how = How.ID, using = "passportNumberSeg4")
    public static WebElement passportNumberSeg4;

    @FindBy(how = How.ID, using = "passportNumberSeg5")
    public static WebElement passportNumberSeg5;

    @FindBy(how = How.ID, using = "passportNumberSeg6")
    public static WebElement passportNumberSeg6;

    @FindBy(how = How.ID, using = "passportNumberSeg7")
    public static WebElement passportNumberSeg7;

    @FindBy(how = How.XPATH, using = "//input[@class='performCreditCheckBtn']")
    public static WebElement performCredidCheckBtn;

    //GDPR new consent for AFA
    @FindBy(how = How.XPATH, using = "(//span[normalize-space()='Choose your preferences'])[1]")
    public static WebElement ChooseYourPreferences;

    @FindBy(how = How.XPATH, using = "//input[@name='B1']")
    public static WebElement O2Products;

    @FindBy(how = How.XPATH, using = "(//div[@class='checkBoxContent'])[1]")
    public static WebElement O2Products_Text;

    @FindBy(how = How.XPATH, using = "//a[normalize-space()='Learn more about O2 products']")
    public static WebElement O2Products_Link;

    @FindBy(how = How.XPATH, using = "(//div[@id='learnMoreDialog']/div/span)[1]")
    public static WebElement O2ProductsClose_CloseButton;


    @FindBy(how = How.XPATH, using = "//input[@name='B2']")
    public static WebElement O2PerksAndExtras;

    @FindBy(how = How.XPATH, using = "(//div[@class='checkBoxContent'])[2]")
    public static WebElement O2PerksAndExtras_Text;

    @FindBy(how = How.XPATH, using = "//a[normalize-space()='Learn more about O2 perks and extras']")
    public static WebElement O2PerksAndExtras_Link;

    @FindBy(how = How.XPATH, using = "(//div[@id='learnMoreDialog']/div/span)[2]")
    public static WebElement O2PerksAndExtras_CloseButton;

    @FindBy(how = How.XPATH, using = "//input[@name='B3']")
    public static WebElement OffersFromO2Partner;

    @FindBy(how = How.XPATH, using = "(//div[@class='checkBoxContent'])[3]")
    public static WebElement OffersFromO2Partner_Text;

    @FindBy(how = How.XPATH, using = "//a[normalize-space()='Learn more about our partner offers']")
    public static WebElement OffersFromO2Partner_Link;

    @FindBy(how = How.XPATH, using = "(//div[@id='learnMoreDialog']/div/span)[3]")
    public static WebElement OffersFromO2Partner_CloseButton;

    @FindBy(how = How.XPATH, using = "//div[@data-label='check4']/input")
    public static WebElement PartnersContacting;

    @FindBy(how = How.XPATH, using = "//div[@data-label='check4']//p/span")
    public static WebElement PartnersContacting_Text;

    @FindBy(how = How.XPATH, using = "//div[@data-label='Hotspot - partners contacting me directly']")
    public static WebElement PartnersContacting_Link;

    @FindBy(how = How.XPATH, using = "//div[@data-label='Close button - partners contacting me directly']")
    public static WebElement PartnersContacting_CloseButton;


    @FindBy(how = How.XPATH, using = "//div[@id='savePreferencesSection']")
    public static WebElement ChannelePreferences;

    @FindBy(how = How.XPATH, using = "//div[@id='customerPreferencesDetail']")
    public static WebElement CustomerBusinessPreferences;


    @FindBy(how = How.XPATH, using = "//input[@name='CP_Text']")
    public static WebElement Contact_Text;

    @FindBy(how = How.XPATH, using = "//input[@name='CP_E-mail']")
    public static WebElement Contact_Email;

    @FindBy(how = How.XPATH, using = "//input[@name='CP_Phone']")
    public static WebElement Contact_Phone;

    @FindBy(how = How.XPATH, using = "//input[@name='CP_Post']")
    public static WebElement Contact_Post;

    @FindBy(how = How.XPATH, using = "//input[@id='save-preferences']")
    public static WebElement SaveMyPreferences;

    @FindBy(how = How.XPATH, using = "//img[@id='u1306_img']")
    public static WebElement SavedPreferenceMessage;

    @FindBy(how = How.XPATH, using = "//div[@id='registerHeader']")
    public static WebElement registerStatus;


    @FindBy(how = How.XPATH, using = "//div[@class='gdprLabel']")
    public static WebElement thisOrderTxt;

    @FindBy(how = How.XPATH, using = "//*[contains(text(),'this order for you or someone else')]/following-sibling::*")
    public static WebElement thisOrderOverlay;

    @FindBy(how = How.XPATH, using = "//*[contains(text(),'have the chance to choose to receive information on our products, offers and more")
    public static WebElement thisOrderOverlayTxt;

    @FindBy(how = How.XPATH, using = "//*[normalize-space(@class)='close']")
    public static WebElement closeOveryPopup;

    @FindBy(how = How.XPATH, using = "//input[@id='endUserConsentConfirmedYes']")
    public static WebElement Me_radioBtn;

    @FindBy(how = How.XPATH, using = "//input[@id='endUserConsentConfirmedNo']")
    public static WebElement someoneElse_radioBtn;

    @FindBy(how = How.XPATH, using = "//input[@id='skip-preferences']")
    public static WebElement SkipPreference;

    @FindBy(how = How.XPATH, using = "//input[@id='continue']")
    public static WebElement Continue_Someone;

    @FindBy(how = How.XPATH, using = "(//div[@id='learnMoreDialog']/div/p)[1]")
    public static WebElement O2Products_OverlayText;

    @FindBy(how = How.XPATH, using = "(//div[@id='learnMoreDialog']/div/p)[2]")
    public static WebElement O2PerksAndExtras_OverlayText;

    @FindBy(how = How.XPATH, using = "(//div[@id='learnMoreDialog']/div/p)[3]")
    public static WebElement OffersFromO2Partner_OverlayText;

    @FindBy(how = How.XPATH, using = "//*[normalize-space(.)='PartnersContacting_OverlayText']")
    public static WebElement PartnersContacting_OverlayText;

}
