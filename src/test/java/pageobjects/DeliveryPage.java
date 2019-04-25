package pageobjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;



public class DeliveryPage {

    @FindBy(how = How.ID, using = "housenumber")
    public static WebElement Housenumber;

    @FindBy(how = How.XPATH, using = "//label[@for='housenumber']")
    public static WebElement HouseNumberLabel;

    @FindBy(how = How.XPATH, using = "//input[@name='houseNum']")
    public static WebElement HouseNum;

    @FindBy(how = How.XPATH, using = "//div[@id='creditCheckContent']")
    public static WebElement crdeitCheckContent;

    @FindBy(how = How.XPATH, using = "//input[@id='ccaEmail']")
    public static WebElement EmailId_CCAcontinue;

    @FindBy(how = How.XPATH, using = "//a[@title='Click and collect']")
    public static WebElement clickAndCollect;

    @FindBy(how = How.ID, using = "postcode")
    public static WebElement Postcode;

    @FindBy(how = How.XPATH, using = "//label[@for='postcode']")
    public static WebElement PostcodeLabel;

    @FindBy(how = How.XPATH, using = "//label[@id='housenumber-error']")
    public static WebElement houseNumberNameError;

    @FindBy(how = How.XPATH, using = "//label[@id='postcode-error']")
    public static WebElement postCodeError;

    @FindBy(how = How.XPATH, using = "//*[@name='postcode']")
    public static WebElement Post;


    @FindBy(how = How.ID, using = "storePostcode")
    public static WebElement storePostcode;

    @FindBy(how = How.ID, using = "postcode-submit")
    public static WebElement Find_Address;

    @FindBy(how = How.XPATH, using = "//*[@class='findAddressBtn']")
    public static WebElement FindAddress;

    @FindBy(how = How.ID, using = "store-postcode-submit")
    public static WebElement Find_Store;

    @FindBy(how = How.XPATH, using = "(//a[contains(normalize-space(),'Collect from this store')])[1]")
    public static WebElement Select_Store;


    @FindBy(how = How.XPATH, using = "//*[@id='delivery-address-selection' or @id='address-selection']/li[1]")
    public static WebElement SelectAddress1;

    @FindBy(how = How.XPATH, using = "//ul[@id='selectedAddressItem']/li")
    public static WebElement autoSelectedAddress;

    @FindBy(how = How.XPATH, using = "(//*[@class='selectAddrBtn'])[1]")
    public static WebElement SelectAdd1;


    @FindBy(how = How.XPATH, using = "//*[@id='delivery-address-selector']")
    public static WebElement SelectAddressDropdown;

    @FindBy(how = How.ID, using = "email")
    public static WebElement Email_Address;

    @FindBy(how = How.ID, using = "title")
    public static WebElement Title;


    @FindBy(how = How.ID, using = "first-name")
    public static WebElement First_Name;

    @FindBy(how = How.ID, using = "last-name")
    public static WebElement Last_Name;

    @FindBy(how = How.ID, using = "contact-number")
    public static WebElement Contact_Number;

    @FindBy(how = How.XPATH, using = "//*[@id='contact-number-error']")
    public static WebElement Contact_Error;



    @FindBy(how = How.ID, using = "password")
    public static WebElement Password;

    @FindBy(how = How.ID, using = "security-questions")
    public static WebElement Security_Question;

    @FindBy(how = How.ID, using = "security-answer")
    public static WebElement security_answer;

    @FindBy(how = How.ID, using = "date-dd")
    public static WebElement date;

    @FindBy(how = How.ID, using = "date-mm")
    public static WebElement Month;

    @FindBy(how = How.ID, using = "date-yy")
    public static WebElement year;


    @FindBy(how = How.XPATH, using = "//button[@id='btn-continue']")
    public static WebElement Continue;

    @FindBy(how = How.ID, using = "deliver-to-store-tab")
    public static WebElement Click_And_Collect;

    @FindBy(how = How.ID, using = "storePostcode")
    public static WebElement Town_And_PostCode;

    @FindBy(how = How.ID, using = "store-postcode-submit")
    public static WebElement Find_PostCode;

    @FindBy(how = How.ID, using = "store-postcode-submit")
    public static WebElement Use_my_Location;

    @FindBy(how = How.XPATH, using = "//input[@id='checkbox-terms-agreement-required']")
    public static WebElement FreeSimTC;

    @FindBy(how = How.XPATH, using = "//button[@id='btn-continue']")
    public static WebElement SendMeMySim;

    @FindBy(how = How.XPATH, using = "//input[@id='optin']")
    public static WebElement marketCheckBox;

    @FindBy(how = How.XPATH, using = "//input[@name='marketingInfo']")
    public static WebElement Iagree;

    @FindBy(how = How.XPATH, using = "//span[@class='terms' or contains(text(),'I agree to the')]")
    public static WebElement IagreeTermsCondition;

    @FindBy(how = How.XPATH, using = "//p[@class='longMsg']")
    public static WebElement NoMarkettingMessage;

    @FindBy(how = How.XPATH, using = "//a[normalize-space()='Privacy Policy']")
    public static WebElement PrivacyPolicy;

    @FindBy(how = How.XPATH, using = "//div[@class='text']//p[1]")
    public static WebElement PrivacyPolicyMessage;


    @FindBy(how = How.XPATH, using = "//*[@id='btn-continue']")
    public static WebElement SendMeMySim2;

    @FindBy(how = How.XPATH, using = "//*[@id='stock-extended-message-single']")
    public static WebElement StockExtMessageDDPODP;

    @FindBy(how = How.XPATH, using = "(//div[@id='account-tiles']/div[@class='account'])[1] | (//div[@id='account-tiles']/div[1])[1]")
    public static WebElement SelectAcct;

    @FindBy(how = How.XPATH, using = "//p[normalize-space()='Get a new number']")
    public static WebElement getNewNumberTab;

    @FindBy(how = How.XPATH, using = "//button[@id='btn-continue-1']")
    public static WebElement FastCheckOut;

    @FindBy(how = How.XPATH, using = "//button[contains(@class,'button primary ')]")
    public static WebElement ContinueCTA;


    @FindBy(how = How.XPATH, using = "//tr[@id='basket-insurance']")
    public static WebElement InsuranceSection;

    //Below if for text headings

    @FindBy(how = How.XPATH, using = "//*[@id='delivery-page']//*[@id='deliveryForm']//*[@id='input-housenumber']/div/label")
    public static WebElement HouseNumberText;

    @FindBy(how = How.XPATH, using = "//*[@id='delivery-page']//*[@id='deliveryForm']//*[@id='input-postcode']/div/label")
    public static WebElement PostcodeText;

    @FindBy(how = How.XPATH, using = "//*[@id='delivery-page']//*[@id='aboutYouForm']//*[@id='input-email']/div/label")
    public static WebElement emailAddressText;

    @FindBy(how = How.XPATH, using = "//*[@id='delivery-page']//*[@id='aboutYouForm']//*[@class='form-element selector']/div/label")
    public static WebElement titleText;

    @FindBy(how = How.XPATH, using = "//*[@id='delivery-page']//*[@id='aboutYouForm']//*[@id='input-name']/fieldset/legend")
    public static WebElement nameText;

    @FindBy(how = How.XPATH, using = "//*[@id='delivery-page']//*[@id='aboutYouForm']//*[@id='input-contact-number']/div/label")
    public static WebElement ContactNumberText;

    @FindBy(how = How.XPATH, using = "//*[@id='delivery-page']//*[@id='aboutYouForm']//*[@id='input-password']/label")
    public static WebElement PasswordText;

    @FindBy(how = How.XPATH, using = "//*[@id='delivery-page']//*[@id='aboutYouForm']//*[@id='input-security-answer']/div/label")
    public static WebElement SecurityAnswerText;

    @FindBy(how = How.XPATH, using = "//*[@id='delivery-page']//*[@id='aboutYouForm']//*[@class='form-element input-microcopy-treble  ']/fieldset/legend")
    public static WebElement DateofBirthText;
    
    
    
    // venkat
    //verify the promotios are displayed on the Selected order
    @FindBy(how = How.XPATH, using = "//*[normalize-space(.)='Promotions']")
    public static WebElement promotions_yourOrder;

    //verify the promotios are displayed on the Selected order
    @FindBy(how = How.XPATH, using = "//*[normalize-space(.)='Promotions']/following-sibling::p")
    public static WebElement promotionVAlue_yourOrdre;

    @FindBy(how = How.XPATH, using = "//a[normalize-space()='Use a different delivery address'] | //a[normalize-space()='Use a different address']")
    public static WebElement DeliveryPageUseDiffAddressLink;


    //Commercial Address error-Address LookUp
    @FindBy(how = How.ID, using = "no-residential-address-match-error")
    public static WebElement commercialAddressErrorMsgAdressLookUp;

    //postal code error
    @FindBy(how = How.ID, using = "postcode-error")
    public static WebElement postalCodeErrorMsgAdressLookUp;

    //house number invalid error
    @FindBy(how = How.ID, using = "housenumber-error")
    public static WebElement houseNumErrorMsg;

    //postal code error
    @FindBy(how = How.XPATH, using = "//*[@id='address-postcode-error'] | //*[@id='no-address-match-error']")
    public static WebElement postalCodeErrorMsgEnterManualSection;

//newly added for GDPR

    @FindBy(how = How.XPATH, using = "//label[contains(text(),'Is this order for you or someone else?')]")
    public static WebElement thisOrderTxt;

    @FindBy(how = How.XPATH, using = "//a[@data-overlay='why-are-we-asking']")
    public static WebElement thisOrderOverlay;

    @FindBy(how = How.XPATH, using = "//*[contains(text(),' have the chance to choose to receive information on our products, offers and more. ')]")
    public static WebElement thisOrderOverlayTxt;

    @FindBy(how = How.XPATH, using = "//h3[normalize-space()='Why are we asking?']//following-sibling::a[@class='boxclose']")
    public static WebElement closeOveryPopup;

    @FindBy(how = How.XPATH, using = "//input[@id='consent-yes']")
    public static WebElement Me_radioBtn;

    @FindBy(how = How.XPATH, using = "//div[@class='GDPR-Content']/h2 | //div[@class='GDPR-Content']/div[@class='preferences-box-container']/h2")
    public static WebElement gdprHeaderTxt;

    @FindBy(how = How.XPATH, using = "//div[@class='GDPR-Content']/p[contains(text(),'still send you service messages about your account or legal notices')] | //div[@class='GDPR-Content']/div[@class='preferences-box-container']/p")
    public static WebElement gdprHeaderDescription;

    @FindBy(how = How.XPATH, using = "//div[@class='GDPR-Content']/div[1]/div[1]/div/div/div/label/span")
    public static WebElement O2Products_Text;

    @FindBy(how = How.XPATH, using = "//div[@class='GDPR-Content']/div[1]/div[1]/div/div/div/label/span/a")
    public static WebElement O2Products_MoreInfoLink;

    @FindBy(how = How.XPATH, using = "//div[contains(@class,'overlay-box B1')]/div[2]")
    public static WebElement O2Products_OverlayText;

    @FindBy(how = How.XPATH, using = "//div[contains(@class,'overlay-box B1')]/div[1]/a")
    public static WebElement O2Products_OverlayCloseButton;

    @FindBy(how = How.XPATH, using = "//div[@class='GDPR-Content']/div[1]/div[2]/div/div/div/label/span | //div[@class='GDPR-Content']/div[1]/div[contains(@class,'prefernces-box')][2]/div/div/div/label/span")
    public static WebElement O2PerksAndExtras_Text;

    @FindBy(how = How.XPATH, using = "//div[@class='GDPR-Content']/div[1]/div[2]/div/div/div/label/span/a | //div[@class='GDPR-Content']/div[1]/div[contains(@class,'prefernces-box')][2]/div/div/div/label/span/a")
    public static WebElement O2PerksAndExtras_MoreInfoLink;

    @FindBy(how = How.XPATH, using = "//div[contains(@class,'overlay-box B2')]/div[2]")
    public static WebElement O2PerksAndExtras_OverlayText;

    @FindBy(how = How.XPATH, using = "//div[contains(@class,'overlay-box B2')]/div[1]/a")
    public static WebElement O2PerksAndExtras_OverlayCloseButton;

    @FindBy(how = How.XPATH, using = "//div[@class='GDPR-Content']/div[1]/div[contains(@class,'prefernces-box')][3]/div/div/div/label/span")
    public static WebElement OffersFromO2Partner_Text;

    @FindBy(how = How.XPATH, using = "//div[@class='GDPR-Content']/div[1]/div[contains(@class,'prefernces-box')][3]/div/div/div/label/span/a")
    public static WebElement OffersFromO2Partner_MoreInfoLink;

    @FindBy(how = How.XPATH, using = "//div[contains(@class,'overlay-box B3')]/div[2]")
    public static WebElement OffersFromO2Partner_OverlayText;

    @FindBy(how = How.XPATH, using = "//div[contains(@class,'overlay-box B3')]/div[1]/a")
    public static WebElement OffersFromO2Partner_OverlayCloseButton;

    @FindBy(how = How.XPATH, using = "//div[@class='GDPR-Content']/div[1]/div[1]/div/div/div/label/input")
    public static WebElement O2Products;

    @FindBy(how = How.XPATH, using = "//div[@class='GDPR-Content']/div[1]/div[2]/div/div/div/label/input | //div[@class='GDPR-Content']/div[1]/div[contains(@class,'prefernces-box')][2]/div/div/div/label/input")
    public static WebElement O2PerksAndExtras;

    @FindBy(how = How.XPATH, using = "//div[@class='GDPR-Content']/div[1]/div[contains(@class,'prefernces-box')][3]/div/div/div/label/input")
    public static WebElement OffersFromO2Partner;

    @FindBy(how = How.XPATH, using = "//input[@id='consent-no']")
    public static WebElement someoneElse_radioBtn;

    @FindBy(how = How.XPATH, using = "//button[@id='btn-continue' or @id='change-delivery-confirm' or @id='change-delivery-confirm-label' or @id='btn-continue-label']")
    public static WebElement continueBtn;

    @FindBy(how = How.XPATH, using = "//*[normalize-space(@class)='on']")
    public static WebElement SelectCreateNewAccount;

    @FindBy(how = How.XPATH, using = "//button[@id='btn-continue-3']")
    public static WebElement BeginCheckout;

    @FindBy(how = How.XPATH, using = "//h3[contains(text(),'Spend cap')] | //h3[contains(text(),'Spend Cap')]")
    public static WebElement BillSpendCapHeader;

    @FindBy(how = How.XPATH, using = "//tr[@class='spendcap-items']")
    public static WebElement AppliedBillCap;

    @FindBy(how = How.XPATH, using = "//h1[normalize-space()='Review your details']/../div[3]/button[text()='Confirm']")
    public static WebElement reviewConfirmCTA;

    @FindBy(how = How.XPATH, using = "//h2[normalize-space()='Are you switching to O2?']")
    public static WebElement switchingO2Question;

    @FindBy(how = How.XPATH, using = "//div[@class='ofComTextToSwitch']/p")
    public static WebElement switchingO2Intro;

    @FindBy(how = How.XPATH, using = "//a[contains(normalize-space(),'What is a PAC or STAC code?')]")
    public static WebElement PACSTACLink;

    @FindBy(how = How.XPATH, using = "//div[@id='PACnSTACOverlayDescription']/p")
    public static WebElement PACSTACOverlayText;

    @FindBy(how = How.XPATH, using = "//div[@id='pacNpac-overlay']/div/a")
    public static WebElement PACSTACOverlayClose;

    @FindBy(how = How.XPATH, using = "//input[@id='pac-npac-checked']")
    public static WebElement PACSTACCheckBox;

    @FindBy(how = How.XPATH, using = "//div[@id='input-mnumber']/div/input")
    public static WebElement PACSTACMobileNum;

    @FindBy(how = How.XPATH, using = "//div[@id='input-pacnpac']/div/input")
    public static WebElement PACSTACcode;

    @FindBy(how = How.XPATH, using = "//div[@class='form-element-container switcho2']")
    public static WebElement PACSTACContainerEnable;

    @FindBy(how = How.XPATH, using = "//div[@class='form-element-container switcho2 hide']")
    public static WebElement PACSTACContainerDisable;

    @FindBy(how = How.XPATH, using = "//label[@id='mnumber-error']")
    public static WebElement emptyMobileNumError;

    @FindBy(how = How.XPATH, using = "//label[@id='pacnpac-error']")
    public static WebElement emptyPACSTACcodeError;

    @FindBy(how = How.XPATH, using = ("//div[@class='error-msg']"))
    public static WebElement DeliveryErrorText;

    @FindBy(how = How.XPATH, using = "//h2[text()='deliveryprefence']")
    public static WebElement Deliveyprefence;

    @FindBy(how = How.XPATH, using = "//input[@id='existing-pay']")
    public static WebElement existingPaymentOption;

    @FindBy(how = How.XPATH, using = "//input[@id='pac-npac-checked']/../label")
    public static WebElement PACSTACCheckBoxTxt;

    @FindBy(how = How.XPATH, using = "//div[contains(@class,'msgBox paypalUpfront successMsg')]")
    public static WebElement confirmMessageFromPayPal;

    @FindBy(how = How.XPATH, using = "//label[@id='pacnpac-validation-error']")
    public static WebElement PACSTACcodeError;

    @FindBy(how = How.XPATH, using = "//input[@id='housenumber']/../../div")
    public static WebElement HousenumberField;

    @FindBy(how = How.XPATH, using = "//input[@id='postcode']/../../div[1]")
    public static WebElement PostcodeField;

    @FindBy(how = How.XPATH, using = "//input[@id='email']/../../div")
    public static WebElement Email_Address_Field;

    @FindBy(how = How.XPATH, using = "//input[@id='first-name']/../../../div[1]")
    public static WebElement First_Name_Field;

    @FindBy(how = How.XPATH, using = "//input[@id='last-name']/../../div")
    public static WebElement Last_Name_Field;

    @FindBy(how = How.XPATH, using = "//input[@id='contact-number']/../.././div")
    public static WebElement Contact_Number_Field;

    @FindBy(how = How.XPATH, using = "//div[@id='input-password']")
    public static WebElement Password_Field;

    @FindBy(how = How.XPATH, using = "//input[@id='security-answer']/../.././div")
    public static WebElement Security_answer_Field;

    @FindBy(how = How.XPATH, using = "//a[@id='deliver-to-store-tab']")
    public static WebElement cncCollect;
    @FindBy(how = How.XPATH, using = "//input[@name='storePostcode']")
    public static WebElement StorePostcode;

    @FindBy(how = How.ID, using = "store-postcode-submit")
    public static WebElement PostcodeSubmit;

    @FindBy(how = How.XPATH, using = ("(//div[contains(@class,'tileContent')]/../div)[1]"))
    public static WebElement firstStore;

}


