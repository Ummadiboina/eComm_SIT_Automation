package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class personalDetailsPage {
	
	//select a title in personal page
	@FindBy(how=How.ID,using="ccTitle")
	public static WebElement title_personalInfo;
	
	
	//enter a firstName in personal page
	@FindBy(how=How.ID,using="ccFirstName")
	public static WebElement firstName_personalInfo;
	
	//enter a last name in personal page
	@FindBy(how=How.ID,using="ccLastname")
	public static WebElement lastName_personalInfo;
		
	//enter a mailID in personal page
	@FindBy(how=How.ID,using="ccEmail")
	public static WebElement email_personalInfo;
	
	//enter a date of birth in personal page
	@FindBy(how=How.ID,using="ccDob")
	public static WebElement dob_personalInfo;
	
	//enter a contact number in personal page
	@FindBy(how=How.ID,using="ccContactNumber")
	public static WebElement contactNumber_personalInfo;
	
	//enter a HOUSE number in personal page
	@FindBy(how=How.XPATH,using="//div[@id='creditCheckCurrentAddress']//input[@name='houseNum']")
	public static WebElement houseNum_personalInfo;
	
	//enter a post code in personal page
	@FindBy(how=How.XPATH,using="//div[@id='creditCheckCurrentAddress']//input[@name='postcode']")
	public static WebElement postCode_personalInfo;
	
	//enter select a first address in personal page
	@FindBy(how=How.XPATH,using="(//div[@id='creditCheckCurrentAddress']//input[@value='Select address'])[1]")
	public static WebElement selectFirstAddress;
	
	//enter a year in personal page
	@FindBy(how=How.ID,using="yearsAtCurrentAddress")
	public static WebElement year_personalInfo;
	
	//enter month in personal page
	@FindBy(how=How.ID,using="monthsAtCurrentAddress")
	public static WebElement month_personalInfo;
		
	//enter month in personal page
	@FindBy(how=How.XPATH,using="//div[@id='creditCheckCurrentAddress']//input[@title='Find address']")
	public static WebElement findAddressBtn;
	
	//enter account name in personal page
	@FindBy(how=How.ID,using="accountName")
	public static WebElement accountNameTxt;
	
	//enter sortCode in personal page
	@FindBy(how=How.ID,using="sortCode")
	public static WebElement sortCodeTxt;
	
	//enter account Number in personal page
	@FindBy(how=How.ID,using="accountNumber")
	public static WebElement accountNumbr;
		
	//enter agree credit check check in personal page
	@FindBy(how=How.ID,using="agreeToCreditCheck")
	public static WebElement agreeToCreditCheck;
	
	//enter agree credit check check in personal page
	@FindBy(how=How.XPATH,using="//input[@value='Perform credit check']")
	public static WebElement performCreditCheckBtn;
	
	
	
	
	

}
