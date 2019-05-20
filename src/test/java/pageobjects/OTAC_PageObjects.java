package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class OTAC_PageObjects {

    @FindBy(how = How.XPATH, using = "//input[@id='edit-name']")
    public static WebElement UserMsisdn;

    @FindBy(how = How.XPATH, using = "//input[@id='edit-pass']")
    public static WebElement Password;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement Continue;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement UserMsisdnSixDigitCode;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement headerTxt;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement mandatoryFieldInstruction;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement actualNonO2FieldText;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement actualSTACCodeFieldText;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement actualTariffFieldText;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement actualFirstNameFieldText;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement actualLastNameFieldText;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement actualEmailFieldText;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement actualConfirmEmailNameFieldText;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement yourNumber;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement notYourNumber;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement changeNumber;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement actualTariffInstructionText;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement alternateContactNumField;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement submitCTA;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement actualNonO2Num;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement actualSTACCode;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement actualTariff;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement alternateContactNum;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement actualFirstName;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement actualLastName;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement actualEmail;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement actualConfirmEmail;

    @FindBy(how = How.XPATH, using= "//button[@id='edit-submit']")
    public static WebElement selectTerminationDate;

}
