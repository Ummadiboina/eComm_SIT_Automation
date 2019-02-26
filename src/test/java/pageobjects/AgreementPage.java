package pageobjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AgreementPage {

    @FindBy(how = How.XPATH, using = "//*[@id='affordabilityInformationSection']//*[@id='affordability-terms-declaration1']")
    public static WebElement affordabilityCheck1;

    @FindBy(how = How.XPATH, using = "//*[@id='affordabilityInformationSection']//*[@id='affordability-terms-declaration2']")
    public static WebElement affordabilityCheck2;

    @FindBy(how = How.XPATH, using = "//*[@id='affordabilityInformationSection']//*[@id='affordabilityButton']")
    public static WebElement affordabilityButton;

    @FindBy(how = How.XPATH, using = "//*[@id='keyInfoSection']/div[1]/div/button")
    public static WebElement keyInfoSection;

    //  .//*[@id='secciSection']/div[1]/div/button

    @FindBy(how = How.XPATH, using = "//*[@id='secciSection']/div[1]/div/button")
    public static WebElement secciSection;

    @FindBy(how = How.XPATH, using = "//*[@id='payMonthlySection']/div[1]/div/button")
    public static WebElement PayMMobileAgreement;

    @FindBy(how = How.XPATH, using = "//*[@id='terms-declaration']")
    public static WebElement TermsDeclarationCheckbox;
    ////*[@id='ccaSection']/div[1]/div/button
    //
    @FindBy(how = How.XPATH, using = "(//span[normalize-space()='Accept, agree and continue'])[2]")
    public static WebElement ccaSection;


}
