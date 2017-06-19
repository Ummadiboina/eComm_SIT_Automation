package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Agent_DeliveryDetailsPage {
	
	  
			
		@FindBy(how=How.ID,using="customerDetailsProceedButton")
		public static WebElement AgreeAdvsioryCheck;
		
		@FindBy(how=How.ID,using="ccTitle")
		public static WebElement Title;
		
		@FindBy(how=How.ID,using="ccFirstName")
		public static WebElement FirstName;
		
		@FindBy(how=How.ID,using="ccLastName")
		public static WebElement LastName;
		
		@FindBy(how=How.ID,using="ccEmail")
		public static WebElement Email;
		
		@FindBy(how=How.ID,using="ccDob")
		public static WebElement DOB;
		
		@FindBy(how=How.ID,using="ccContactNumber")
		public static WebElement ContactNumber;
		
		@FindBy(how=How.XPATH,using="//*[@id='creditCheckCurrentAddress']/div/div[1]/div[1]/input")
		public static WebElement HouseNumber;
		
		@FindBy(how=How.XPATH,using="//*[@id='creditCheckCurrentAddress']/div/div[1]/div[2]/input")
		public static WebElement Postcode;
		
		@FindBy(how=How.XPATH,using="//*[@id='creditCheckCurrentAddress']/div/div[1]/input")
		public static WebElement FindAddress;
		
		@FindBy(how=How.XPATH,using="//*[@id='creditCheckCurrentAddress']/div/div[2]/div[1]/div[1]/input")
		public static WebElement Selectedaddress1;		
			
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
		
		@FindBy(how=How.ID,using="ddYr")
		public static WebElement CardYear;
		
		@FindBy(how=How.ID,using="lblCardSecurityCode")
		public static WebElement SecurityCode;
		
		@FindBy(how=How.ID,using="btnPayNow")
		public static WebElement UsethisCard;
		
		
		
		@FindBy(how=How.XPATH,using="//*[@id='creditCheckAndAgreementAndStatus']/input[3]")
		public static WebElement PerformCreditCheck;
		
		

	
	
		
		
		
}
