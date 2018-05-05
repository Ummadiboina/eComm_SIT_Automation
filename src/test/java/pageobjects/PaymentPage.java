package pageobjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class PaymentPage {


    @FindBy(how = How.ID, using = "accountName")
    public static WebElement Name_On_Account;

    @FindBy(how = How.ID, using = "accountNumber")
    public static WebElement Account_Number;

    @FindBy(how = How.ID, using = "sortCodePart1")
    public static WebElement Sort_Code1;

    @FindBy(how = How.ID, using = "sortCodePart2")
    public static WebElement Sort_Code2;

    @FindBy(how = How.ID, using = "sortCodePart3")
    public static WebElement Sort_Code3;

    @FindBy(how = How.ID, using = "accept-terms")
    public static WebElement Accept_Terms_Checkbox;

    //@FindBy(how = How.ID, using = "years")
    @FindBy(how = How.XPATH, using = "//*[@id='input-address-time']//*[@id='years']")
    public static WebElement Stay_Address_Years;

    @FindBy(how = How.XPATH, using = "//*[@id='input-address-time']//*[@id='months']")
    public static WebElement Stay_Address_months;

    @FindBy(how = How.ID, using = "confirm-address")
    public static WebElement Confirm_Address_Checkbox;

/*

        @FindBy(how = How.ID, using = "txtCardHolderName")
        public static WebElement CardHolderName;

        @FindBy(how = How.ID, using = "txtCardNumber")
        public static WebElement CardNumber;

        @FindBy(how = How.ID, using = "txtMonth")
        public static WebElement CardMonth;

        @FindBy(how = How.ID, using = "txtYr")
        public static WebElement CardYear;

        @FindBy(how = How.ID, using = "txtSecurityCode")
        public static WebElement SecurityCode;
*/

    @FindBy(how = How.XPATH, using = "//*[@id='CardHolderName' or @id='txtCardHolderName']")
    public static WebElement CardHolderName;

    @FindBy(how = How.XPATH, using = "//*[@id='ddlCardType' or @id='CardType']")
    public static WebElement CardType;

    @FindBy(how = How.XPATH, using = "//*[@id='txtCardNumber' or @id='CardNumber']")
    public static WebElement CardNumber;

    @FindBy(how = How.XPATH, using = "//*[@id='ddlMonth' or @id='txtMonth']")
    public static WebElement CardMonth;

    @FindBy(how = How.XPATH, using = "//*[@id='ddlYear' or @id='txtYr']")
    public static WebElement CardYear;

    @FindBy(how = How.XPATH, using = "//*[@id='txtSecurityCode' or @id='CardCvv']")
    public static WebElement SecurityCode;

    @FindBy(how = How.ID, using = "btnPayNow")
    public static WebElement Continue_Next_Step;

    @FindBy(how = How.XPATH, using = "//tbody/tr[2]/td[2]/b/input[1]")
    public static WebElement checkoutPassword;

    @FindBy(how = How.XPATH, using = "//tbody/tr[4]/td[2]/b/input")
    public static WebElement CheckoutSubmitbutton;

    @FindBy(how = How.ID, using = "upfront-payment-amount")
    public static WebElement UpfrontPaymentAmount;

    @FindBy(how = How.XPATH, using = "//table[@class='basket-table']")
    public static WebElement BasketContent;


    @FindBy(how = How.ID, using = "housenumber")
    public static WebElement housenumber;


    @FindBy(how = How.ID, using = "postcode")
    public static WebElement postcode;

    @FindBy(how = How.ID, using = "postcode-submit")
    public static WebElement postcodesubmit;

    @FindBy(how = How.XPATH, using = "//*[@id='delivery-address-selection']/li/div/p/a")
    public static WebElement Selectaddress;

    @FindBy(how = How.ID, using = ("basket-total"))
    public static WebElement BasketTotal;

    @FindBy(how = How.XPATH, using = "//*[@id='payment-page']//*[@id='bank-details-form']//*[@id='input-accountNumber']/div/label")
    public static WebElement AccountnumberText;

    @FindBy(how = How.XPATH, using = "//*[@id='payment-page']//*[@id='bank-details-form']//*[@id='input-accountName']/div/label")
    public static WebElement NameonAccountText;

    @FindBy(how = How.XPATH, using = "//*[@id='payment-page']//*[@id='time-at-address-form']//*[@id='time-at-address-label']/p")
    public static WebElement TimeAtAddressText;

    @FindBy(how = How.XPATH, using = "//*[@id='payment-page']//*[@id='bank-details-form']//*[@class='form-element input-microcopy-treble   form-spacing ']/fieldset/legend")
    public static WebElement SortcodeText;

    @FindBy(how = How.XPATH, using = "//span[contains(text(),'iPad Pro 9.7 inch')]")
    public static WebElement NameOnCardText;

    @FindBy(how = How.XPATH, using = "//span[contains(text(),'iPad Pro 9.7 inch')]")
    public static WebElement CardNumberText;

    @FindBy(how = How.XPATH, using = "//span[contains(text(),'iPad Pro 9.7 inch')]")
    public static WebElement ExpiryDateText;

    @FindBy(how = How.XPATH, using = "//span[contains(text(),'iPad Pro 9.7 inch')]")
    public static WebElement CVVSecurityCodeText;

    @FindBy(how = How.XPATH, using = "//*[@id='address-heading']/p")
    public static WebElement HomeAddress;

}
