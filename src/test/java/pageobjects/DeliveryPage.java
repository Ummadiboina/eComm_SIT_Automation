package pageobjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;



public class DeliveryPage {

    @FindBy(how = How.ID, using = "housenumber")
    public static WebElement Housenumber;

    @FindBy(how = How.XPATH, using = "//input[@name='houseNum']")
    public static WebElement HouseNum;

    @FindBy(how = How.XPATH, using = "//a[@title='Click and collect']")
    public static WebElement clickAndCollect;

    @FindBy(how = How.ID, using = "postcode")
    public static WebElement Postcode;

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

    @FindBy(how = How.XPATH, using = "//p[contains(text(),'If you check this box, we’ll send you information about your order, but no marketing')]")
    public static WebElement NoMarkettingMessage;

    @FindBy(how = How.XPATH, using = "//a[normalize-space()='Privacy Policy']")
    public static WebElement PrivacyPolicy;

    @FindBy(how = How.XPATH, using = "//div[@class='text']//p[1]")
    public static WebElement PrivacyPolicyMessage;


    @FindBy(how = How.XPATH, using = "//*[@id='btn-continue']")
    public static WebElement SendMeMySim2;

    @FindBy(how = How.XPATH, using = "//*[@id='stock-extended-message-single']")
    public static WebElement StockExtMessageDDPODP;

    @FindBy(how = How.XPATH, using = "(//div[@id='account-tiles']/div[@class='account'])[1]")
    public static WebElement SelectAcct;

    @FindBy(how = How.XPATH, using = "//button[@id='btn-continue-1']")
    public static WebElement FastCheckOut;

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

    @FindBy(how = How.XPATH, using = "//a[normalize-space()='Use a different delivery address']")
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
    @FindBy(how = How.ID, using = "address-postcode-error")
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

}


