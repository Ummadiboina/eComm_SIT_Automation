package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class OTAC_PageObjects {

    @FindBy(how = How.XPATH, using = "//input[@id='msisdn']")
    public static WebElement UserMsisdn;

    @FindBy(how = How.XPATH, using= "//input[@id='sendOTAC'] | //input[@id='continue']")
    public static WebElement Continue;

    @FindBy(how = How.XPATH, using= "//input[@id='otac']")
    public static WebElement UserMsisdnSixDigitCode;

    @FindBy(how = How.XPATH, using= "//div[@class='stacText']/h3")
    public static WebElement headerTxt;

    @FindBy(how = How.XPATH, using= "//div[@class='stacText']/div/p[1]")
    public static WebElement mandatoryFieldInstruction;

    @FindBy(how = How.XPATH, using= "//input[@id='mobilenumber']/../label")
    public static WebElement actualNonO2FieldText;

    @FindBy(how = How.XPATH, using= "//input[@id='stacnumber']/../label")
    public static WebElement actualSTACCodeFieldText;

    @FindBy(how = How.XPATH, using= "//div[@class='form-group tariffType ']/label")
    public static WebElement actualTariffFieldText;

    @FindBy(how = How.XPATH, using= "//label[contains(text(),'Your number will be disconnected within 1 business day')]")
    public static WebElement actualTariffInstructionText;

    @FindBy(how = How.XPATH, using= "//input[@id='firstname']/../label")
    public static WebElement actualFirstNameFieldText;

    @FindBy(how = How.XPATH, using= "//input[@id='lastname']/../label")
    public static WebElement actualLastNameFieldText;

    @FindBy(how = How.XPATH, using= "//input[@id='email']/../label")
    public static WebElement actualEmailFieldText;

    @FindBy(how = How.XPATH, using= "//input[@id='confirmemail']/../label")
    public static WebElement actualConfirmEmailNameFieldText;

    @FindBy(how = How.XPATH, using= "//div[@class='stacText']/div/p[2]")
    public static WebElement yourNumber;

    @FindBy(how = How.XPATH, using= "//div[@class='stacText']/div/p[3]")
    public static WebElement notYourNumber;

    @FindBy(how = How.XPATH, using= "//div[@class='stacText']/div/p[3]/a")
    public static WebElement changeNumber;

    @FindBy(how = How.XPATH, using= "//input[@id='alternatecontactnumber']/../label")
    public static WebElement alternateContactNumFieldTxt;

    @FindBy(how = How.XPATH, using= "//input[@id='mobilenumber']")
    public static WebElement actualNonO2Num;

    @FindBy(how = How.XPATH, using= "//input[@id='stacnumber']")
    public static WebElement actualSTACCode;

    @FindBy(how = How.XPATH, using= "//select[@id='tarifftype']")
    public static WebElement actualTariff;

    @FindBy(how = How.XPATH, using= "//input[@id='alternatecontactnumber']")
    public static WebElement alternateContactNum;

    @FindBy(how = How.XPATH, using= "//input[@id='firstname']")
    public static WebElement actualFirstName;

    @FindBy(how = How.XPATH, using= "//input[@id='lastname']")
    public static WebElement actualLastName;

    @FindBy(how = How.XPATH, using= "//input[@id='email']")
    public static WebElement actualEmail;

    @FindBy(how = How.XPATH, using= "//input[@id='confirmemail']")
    public static WebElement actualConfirmEmail;

    @FindBy(how = How.XPATH, using= "//input[@id='terminationdate']")
    public static WebElement selectTerminationDate;

    @FindBy(how = How.XPATH, using= "//div[contains(@class,'terminationdate')]/div/label")
    public static WebElement actualBusinessDateFieldText;


    @FindBy(how = How.XPATH, using= "//button[@id='submit_stac_form']")
    public static WebElement submitCTA;

}
