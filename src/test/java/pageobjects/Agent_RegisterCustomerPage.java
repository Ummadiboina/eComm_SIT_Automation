package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Agent_RegisterCustomerPage {
	
		@FindBy(how=How.ID,using="regTitle")
		public static WebElement Title;
		
		@FindBy(how=How.ID,using="regFirstName")
		public static WebElement FirstName;
		
		@FindBy(how=How.ID,using="regLastname")
		public static WebElement LastName;
		
		@FindBy(how=How.ID,using="regEmail")
		public static WebElement Email;
		
		@FindBy(how=How.ID,using="regDob")
		public static WebElement DOB;
		
		@FindBy(how=How.ID,using="regContactNumber")
		public static WebElement ContactNumber;
		
		@FindBy(how=How.ID,using="regPassword")
		public static WebElement intialPassword;
		
		@FindBy(how=How.ID,using="regConfirmPswd")
		public static WebElement confirmPassword;
		
		@FindBy(how=How.XPATH,using="//input[@name='houseNum']")
		public static WebElement HouseNumber;
		
		@FindBy(how=How.XPATH,using="//input[@name='postcode']")
		public static WebElement Postcode;
		
		@FindBy(how=How.XPATH,using="//input[@value='Find address']")
		public static WebElement FindAddress;
		
		@FindBy(how=How.XPATH,using="//input[@value='Select address']")
		public static WebElement Selectedaddress;		

		@FindBy(how=How.ID,using="securityQuestion")
		public static WebElement securityQuestion;		

		@FindBy(how=How.ID,using="securityAnswer")
		public static WebElement securityAnswer;
		
		@FindBy(how=How.ID,using="data-qa-registerCustomerBtn")
		public static WebElement registerCustomer;
		
		
		@FindBy(how=How.XPATH,using="//*[@id='packageControls']/table/tbody/tr/td[2]/input")
		public static WebElement PayByCard;
		
		@FindBy(how=How.XPATH,using="//*[@id='lblCardNumber']")
		public static WebElement PayByCard_2;
		
		//*[@id='lblCardNumber']
	
		@FindBy(how=How.ID,using="yearsAtCurrentAddress")
		public static WebElement YearsatAddress;
		
		@FindBy(how=How.ID,using="monthsAtCurrentAddress")
		public static WebElement monthsatAddress;
		
		@FindBy(how=How.ID,using="accountName")
		public static WebElement AccountName;
		
		@FindBy(how=How.ID,using="sortCode")
		public static WebElement SortCode;
		
		@FindBy(how=How.ID,using="accountNumber")
		public static WebElement AccountNumber;
		
		@FindBy(how=How.ID,using="agreeToCreditCheck")
		public static WebElement AgreeCreditCheck;
		
		@FindBy(how=How.ID,using="captureCardDetails")
		public static WebElement CardCapture;
		
		@FindBy(how=How.ID,using="txtCardHolderName")
		public static WebElement CardHolderName;
		
		@FindBy(how=How.ID,using="ddlCardType")
		public static WebElement CardType;
		
		@FindBy(how=How.ID,using="txtCardNumber")
		public static WebElement CardNumber;
		
		@FindBy(how=How.ID,using="ddlMonth")
		public static WebElement CardMonth;
		
		@FindBy(how=How.ID,using="ddlYr")
		public static WebElement CardYear;
			
		@FindBy(how=How.ID,using="//*[@id='txtCardSecurityCode']")
		public static WebElement SecurityCode;
		
		@FindBy(how=How.ID,using="//*[@id='btnPayNow']")
		public static WebElement UsethisCard;
				
		@FindBy(how=How.XPATH,using="//*[@id='creditCheckAndAgreementAndStatus']/input[3]")
		public static WebElement PerformCreditCheck;
		
				
		
}
