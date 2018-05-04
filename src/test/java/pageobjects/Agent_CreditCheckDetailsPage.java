package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Agent_CreditCheckDetailsPage {


    @FindBy(how = How.ID, using = "ccTitle")
    public static WebElement Title;

    @FindBy(how = How.ID, using = "ccFirstName")
    public static WebElement FirstName;

    @FindBy(how = How.ID, using = "ccLastname")
    public static WebElement LastName;

    @FindBy(how = How.ID, using = "ccEmail")
    public static WebElement Email;

    @FindBy(how = How.ID, using = "ccDob")
    public static WebElement DOB;

    @FindBy(how = How.ID, using = "ccContactNumber")
    public static WebElement ContactNumber;

    @FindBy(how = How.ID, using = "ccPassword")
    public static WebElement intialPassword;

    @FindBy(how = How.ID, using = "ccConfirmPswd")
    public static WebElement confirmPassword;

    @FindBy(how = How.XPATH, using = "//*[@for='ccContactNumber'][2]")
    public static WebElement Contact_errorAgent;

    @FindBy(how = How.XPATH, using = "//input[@name='houseNum']")
    public static WebElement HouseNumber;

    @FindBy(how = How.XPATH, using = "//input[@name='postcode']")
    public static WebElement Postcode;

    @FindBy(how = How.XPATH, using = "//input[@value='Find address']")
    public static WebElement FindAddress;

    //@FindBy(how=How.XPATH,using="//input[@value='Select address']")
    @FindBy(how = How.XPATH, using = "//*[@id='creditCheckCurrentAddress']/div/div[2]/div[1]/div[1]/input")
    public static WebElement Selectedaddress;

    @FindBy(how = How.ID, using = "securityQuestion")
    public static WebElement securityQuestion;

    @FindBy(how = How.ID, using = "securityAnswer")
    public static WebElement securityAnswer;

    @FindBy(how = How.ID, using = "yearsAtCurrentAddress")
    public static WebElement YearsatAddress;

    @FindBy(how = How.ID, using = "")
    public static WebElement Address;



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

    /*	@FindBy(how=How.ID,using="txtCardHolderName")
        public static WebElement CardHolderName;



        ////*[@id='CardHolderName' or @id='CardHolderName']

        @FindBy(how=How.ID,using="ddlCardType")
        public static WebElement CardType;

        @FindBy(how=How.ID,using="txtCardNumber")
        public static WebElement CardNumber;

        @FindBy(how=How.ID,using="ddlMonth")
        public static WebElement CardMonth;

        @FindBy(how=How.ID,using="ddlYr")
        public static WebElement CardYear;


        @FindBy(how=How.ID,using="txtSecurityCode")
        public static WebElement SecurityCode;

    */
    @FindBy(how = How.XPATH, using = "//*[@id='CardHolderName' or @id='txtCardHolderName']")
    public static WebElement CardHolderName;

    @FindBy(how = How.XPATH, using = "//*[@id='ddlCardType' or @id='CardType']")
    public static WebElement CardType;

    @FindBy(how = How.XPATH, using = "//*[@id='txtCardNumber' or @id='CardNumber']")
    public static WebElement CardNumber;

    @FindBy(how = How.XPATH, using = "//*[@id='ddlMonth' or @id='Month']")
    public static WebElement CardMonth;

    @FindBy(how = How.XPATH, using = "//*[@id='ddlYear' or @id='Year' or @id='ddlYr']")
    public static WebElement CardYear;

    @FindBy(how = How.XPATH, using = "//*[@id='txtSecurityCode' or @id='CardCvv']")
    public static WebElement SecurityCode;


    @FindBy(how = How.ID, using = "btnPayNow")
    public static WebElement UsethisCard;

    @FindBy(how = How.XPATH, using = "//*[@id='creditCheckAndAgreementAndStatus']/input[3]")
    public static WebElement PerformCreditCheck;

    @FindBy(how = How.XPATH, using = "//h2[@id='creditCheckHeader']")
    public static WebElement CreditCheckReferStatus;

    @FindBy(how = How.XPATH, using = "//span[@id='creditCheckStatus']")
    public static WebElement CreditCheckAbandoneStatus;



}
