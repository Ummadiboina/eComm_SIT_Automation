package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Agent_Deliverydetails {
	
	  
		@FindBy(how=How.XPATH,using="//*[@id='acquisition']/p/a")
		public static WebElement NewCustomer;
				
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
		
	;
		
		
		
}
