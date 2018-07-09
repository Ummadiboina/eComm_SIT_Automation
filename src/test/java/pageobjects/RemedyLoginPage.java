package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;



public class RemedyLoginPage {

    //Remedy Login user name field
    @FindBy(how = How.ID, using = "username-id")
    public static WebElement userName_field;

    //Remedy Login password field
    @FindBy(how = How.ID, using = "pwd-id")
    public static WebElement password_field;

    //Remedy Login CTA
    @FindBy(how = How.XPATH, using = "//input[@type='button' and @value='Log In']")
    public static WebElement loginCta;

    //Applications
    @FindBy(how = How.XPATH, using = "//img[@title='Show Application List']")
    public static WebElement applicationsTab;

    //service request management
    @FindBy(how = How.XPATH, using = "//a/span[normalize-space(.)='Service Request Management']")
    public static WebElement servReqMangmtTab;

    //search work order
    @FindBy(how = How.XPATH, using = "//a/span[normalize-space(.)='Search Work Order']")
    public static WebElement searchWorkOrder;

    //new search
    @FindBy(how = How.XPATH, using = "(//div[@id='TBnewsearch']/img[@alt='New search'])[2]")
    public static WebElement newSearch;

    //Advanced search
    @FindBy(how = How.XPATH, using = "(//div[normalize-space()='Advanced search'])[2]")
    public static WebElement advancedSearch;

    //Query search at bottom
    @FindBy(how = How.XPATH, using = "//div[@class='btntextdiv']/div[normalize-space()='Search']")
    public static WebElement serchBtnAtBottom;

    //query bar search input
    @FindBy(how = How.XPATH, using = "(//div[@id='QueryBar']//table[@class='SearchBarInput'])[2]")
    public static WebElement querySerchBarTextField;




}


