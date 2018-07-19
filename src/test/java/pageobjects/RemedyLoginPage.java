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


    //summary field
    @FindBy(how = How.XPATH, using = "(//label[normalize-space()='Summary*']/following-sibling::textarea)[1]")
    public static WebElement summaryField;


    //status type select arrow
    @FindBy(how = How.XPATH, using = "//div[@ardbn='Status']//img")
    public static WebElement statusTypeSelArrow;

    //Note Text Area
    @FindBy(how = How.XPATH, using = "//label[text()='Notes:']/following-sibling::textarea")
    public static WebElement noteTextArea;

    //More Details Arrow
    @FindBy(how = How.XPATH, using = "//span[contains(text(),'More Details')]/../a/span")
    public static WebElement moreDetailsArrow;

    //Public radio button
    @FindBy(how = How.XPATH, using = "//label[text()='Public']/preceding-sibling::input")
    public static WebElement radioBtn_public;

    //add button to update query
    @FindBy(how = How.XPATH, using = "//a[@ardbn='z3Btn_AddWorkInfoLessMode']/div/div")
    public static WebElement add_updateRequest;


    //work info type arrow
    @FindBy(how = How.XPATH, using = "//label[text()='Work Info Type']/..//a")
    public static WebElement workInfotyepArow;


    //Cancellation information
    @FindBy(how = How.XPATH, using = "//tr/td[text()='Cancellation Information']")
    public static WebElement cancelInfo;

    //Logout Button
    @FindBy(how = How.XPATH, using = "(//a[@ardbn='Logout_btn'])[1]")
    public static WebElement logOut;


}


