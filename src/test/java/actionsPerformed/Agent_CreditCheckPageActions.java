package actionsPerformed;

import helpers.Environment;

import pageobjects.Agent_CreditCheckDetailsPage;

import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;

import GlobalActions.RandomEmailAddressCreation;

public class Agent_CreditCheckPageActions extends Environment{
	
	static Logger log = Logger.getLogger("devpinoyLogger");
	
	
	public static void Creditcheck(String Firstname, String Surname) throws InterruptedException
	{
				Select dropdown = new Select(pageobjects.Agent_CreditCheckDetailsPage.Title);
				dropdown.selectByIndex(1);
				log.debug("Selected the dropdown Mr");
				Reporter.log("Selected the dropdown Mr");
				
				Agent_CreditCheckDetailsPage.FirstName.sendKeys(Firstname);
				log.debug("Entered First name");
				Agent_CreditCheckDetailsPage.LastName.sendKeys(Surname);
				log.debug("Entered Last name");
								
				Agent_CreditCheckDetailsPage.Email.sendKeys(RandomEmailAddressCreation.RandomEmail());
				
				log.debug("Entered email address");
				Agent_CreditCheckDetailsPage.DOB.sendKeys("10-10-1981");
				log.debug("Entered date of birth");
				Thread.sleep(2000);
				Agent_CreditCheckDetailsPage.ContactNumber.sendKeys("07888594958");
				log.debug("Entered contact number");
				Thread.sleep(2000);
				
				Agent_CreditCheckDetailsPage.HouseNumber.sendKeys("Flat 2");
				Thread.sleep(2000);
				Agent_CreditCheckDetailsPage.Postcode.sendKeys("SL1 1EL");
				log.debug("Entered House Postcode  as SL1 1EL");

				Thread.sleep(2000);
				try {
					driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
					pageobjects.Agent_CreditCheckDetailsPage.FindAddress.click();
					log.debug("Clicked on the Find address button");
					pageobjects.Agent_CreditCheckDetailsPage.Selectedaddress.click();
					log.debug("Selected an address");
				} catch (Exception e) {
					// TODO Auto-generated catch block
					Assert.fail("Unable to select Post code address");				
				}
							

				Agent_CreditCheckDetailsPage.YearsatAddress.sendKeys("09");
				log.debug("Entered Number of Years at address");
				
				Agent_CreditCheckDetailsPage.monthsatAddress.sendKeys("05");
				log.debug("Entered Number of Months at address");
				
			}
	
	public static void Creditcheck(String Firstname, String Surname, String HouseNumber, String PostCode) throws InterruptedException
	{
				Select dropdown = new Select(pageobjects.Agent_CreditCheckDetailsPage.Title);
				dropdown.selectByIndex(1);
				log.debug("Selected the dropdown Mr");
				Reporter.log("Selected the dropdown Mr");
				
				Agent_CreditCheckDetailsPage.FirstName.sendKeys(Firstname);
				log.debug("Entered First name");
				Agent_CreditCheckDetailsPage.LastName.sendKeys(Surname);
				log.debug("Entered Last name");
								
				Agent_CreditCheckDetailsPage.Email.sendKeys(RandomEmailAddressCreation.RandomEmail());
				
				log.debug("Entered email address");
				Agent_CreditCheckDetailsPage.DOB.sendKeys("10-10-1981");
				log.debug("Entered date of birth");
				Thread.sleep(2000);
				Agent_CreditCheckDetailsPage.ContactNumber.sendKeys("07888594958");
				log.debug("Entered contact number");
				Thread.sleep(2000);
				try {
					Agent_CreditCheckDetailsPage.HouseNumber.sendKeys(HouseNumber);
					Thread.sleep(2000);
					Agent_CreditCheckDetailsPage.Postcode.sendKeys(PostCode);
					log.debug("Entered House Postcode  as -"+PostCode);
					Thread.sleep(2000);

					pageobjects.Agent_CreditCheckDetailsPage.FindAddress.click();
					log.debug("Clicked on the Find address button");
					pageobjects.Agent_CreditCheckDetailsPage.Selectedaddress.click();
					log.debug("Selected an address");
				} catch (Exception e) {
					// TODO Auto-generated catch block
					Assert.fail("Unable to select Post code address");				
				}
							

				Agent_CreditCheckDetailsPage.YearsatAddress.sendKeys("09");
				log.debug("Entered Number of Years at address");
				
				Agent_CreditCheckDetailsPage.monthsatAddress.sendKeys("05");
				log.debug("Entered Number of Months at address");
				
			}
	
	public static void AdditionalCardDetails() throws InterruptedException
	{
		Agent_CreditCheckDetailsPage.AdditionalCardDetailstickbox.click();
		Thread.sleep(1000);
		
		Agent_CreditCheckDetailsPage.AdditionalCaptureCardDetails.isEnabled();
		log.debug("AdditionalCaptureCardDetails Hyperlink is enabled");
		
		Agent_CreditCheckDetailsPage.AdditionalCaptureCardDetails.click();
		log.debug("AdditionalCaptureCardDetails page is clicked");
	}
	
	public static void DrivingLicenseDetails(String License_Postcode, String License_Number) throws InterruptedException
	{
		Agent_CreditCheckDetailsPage.LicenseDetailstickbox.click();
		Thread.sleep(1000);
		
		Agent_CreditCheckDetailsPage.LicensePostcode.sendKeys(License_Postcode);
		log.debug("License Postcode details entered");
		
		String License1 = License_Number.substring(0,5);
		String License2 = License_Number.substring(5,11);
		String License3 = License_Number.substring(11,14);
		String License4 = License_Number.substring(14,16);
		Agent_CreditCheckDetailsPage.LicenceNumberSeg1.sendKeys(License1);
		Agent_CreditCheckDetailsPage.LicenceNumberSeg2.sendKeys(License2);
		Agent_CreditCheckDetailsPage.LicenceNumberSeg3.sendKeys(License3);
		Agent_CreditCheckDetailsPage.LicenceNumberSeg4.sendKeys(License4);
		log.debug("License Number details entered");
	}
	
	
	public static void PassportDetails(String Country, String Passport_Number1, String Passport_Number2, String Passport_Number3, String Passport_Gender, String Passport_Expirydate, String Passport_Checkdigit ) throws InterruptedException
	{
		Agent_CreditCheckDetailsPage.PassportDetailstickbox.click();
		Thread.sleep(1000);
		
		Agent_CreditCheckDetailsPage.CountryofIssue.sendKeys(Country);
		log.debug("Passport Country details entered");
		
		Agent_CreditCheckDetailsPage.PassportNumberSeg1.sendKeys(Passport_Number1);
		Agent_CreditCheckDetailsPage.PassportNumberSeg2.sendKeys(Country);
		Agent_CreditCheckDetailsPage.PassportNumberSeg3.sendKeys(Passport_Number2);
		Agent_CreditCheckDetailsPage.PassportNumberSeg4.sendKeys(Passport_Gender);
		Agent_CreditCheckDetailsPage.PassportNumberSeg5.sendKeys(Passport_Expirydate);
		Agent_CreditCheckDetailsPage.PassportNumberSeg6.sendKeys(Passport_Number3);
		Agent_CreditCheckDetailsPage.PassportNumberSeg7.sendKeys(Passport_Checkdigit);
		log.debug("Passport Number details entered");
		
	}
	
	public static void BankDetails(String Username) throws InterruptedException
	{
		
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		Agent_CreditCheckDetailsPage.AccountName.sendKeys(Username);
		Agent_CreditCheckDetailsPage.SortCode.sendKeys("201596");
		Agent_CreditCheckDetailsPage.AccountNumber.sendKeys("10207136");
		Agent_CreditCheckDetailsPage.CardCapture.click();
		Thread.sleep(7000);
	
				
		String Mainwindow= driver.getWindowHandle();
		//getting all the popup windows , hence using getwindowhandles instead of getwindowhandle
		Set<String> s1=driver.getWindowHandles();
	    Iterator<String> i1=s1.iterator();		
	    while(i1.hasNext())			
	    {
	        String ChildWindow=i1.next();		
	        if(!Mainwindow.equalsIgnoreCase(ChildWindow))			
	        {
	        	// Switching to Child window
	            driver.switchTo().window(ChildWindow);
	            Thread.sleep(3000);
	            Agent_CreditCheckDetailsPage.CardHolderName.sendKeys(Username);
	    		
	    		Select CardTypeDropDown = new Select(pageobjects.Agent_CreditCheckDetailsPage.CardType);
	    		CardTypeDropDown.selectByIndex(3);
	    		
	    		Agent_CreditCheckDetailsPage.CardNumber.sendKeys("4539791001730106");

	    		Thread.sleep(2000);
	    		Select CardMonthDropdown = new Select(pageobjects.Agent_CreditCheckDetailsPage.CardMonth);
	    		CardMonthDropdown.selectByIndex(2);
	    		Thread.sleep(2000);
	    		Select CardYearDropdown = new Select(pageobjects.Agent_CreditCheckDetailsPage.CardYear);
	    		CardYearDropdown.selectByIndex(3);
	    		
	    		Thread.sleep(2000);
	    			    		
	    		Agent_CreditCheckDetailsPage.SecurityCode.sendKeys("123");
	    		
	    		Thread.sleep(2000);
	    		
	    		Agent_CreditCheckDetailsPage.UsethisCard.click();
	    		
	    		//Need to add steps here
	    		
				// Closing the Child Window.
	           // driver.close();
	    		
	   //Above is not required as clicking on the use this card button would automatically close
	    		
	        }
	    }
	    // Switching to Parent window i.e Main Window.
	    driver.switchTo().window(Mainwindow);
	    
		Agent_CreditCheckDetailsPage.AgreeCreditCheck.click();
		Thread.sleep(2000);
		Agent_CreditCheckDetailsPage.PerformCreditCheck.click();	    
	}

public static void AdditionalBankDetails(String Username) throws InterruptedException
{
	
	driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
	Agent_CreditCheckDetailsPage.AccountName.sendKeys(Username);
	Agent_CreditCheckDetailsPage.SortCode.sendKeys("201596");
	Agent_CreditCheckDetailsPage.AccountNumber.sendKeys("10207136");
	Agent_CreditCheckDetailsPage.CardCapture.click();
	Thread.sleep(7000);

			
	String Mainwindow= driver.getWindowHandle();
	//getting all the popup windows , hence using getwindowhandles instead of getwindowhandle
	Set<String> s1=driver.getWindowHandles();
    Iterator<String> i1=s1.iterator();		
    while(i1.hasNext())			
    {
        String ChildWindow=i1.next();		
        if(!Mainwindow.equalsIgnoreCase(ChildWindow))			
        {
        	// Switching to Child window
            driver.switchTo().window(ChildWindow);
            Thread.sleep(3000);
            Agent_CreditCheckDetailsPage.CardHolderName.sendKeys(Username);
    		
    		Select CardTypeDropDown = new Select(pageobjects.Agent_CreditCheckDetailsPage.CardType);
    		CardTypeDropDown.selectByIndex(3);
    		
    		Agent_CreditCheckDetailsPage.CardNumber.sendKeys("4539791001730106");

    		Thread.sleep(2000);
    		Select CardMonthDropdown = new Select(pageobjects.Agent_CreditCheckDetailsPage.CardMonth);
    		CardMonthDropdown.selectByIndex(2);
    		Thread.sleep(2000);
    		Select CardYearDropdown = new Select(pageobjects.Agent_CreditCheckDetailsPage.CardYear);
    		CardYearDropdown.selectByIndex(3);
    		
    		Thread.sleep(2000);
    			    		
    		Agent_CreditCheckDetailsPage.SecurityCode.sendKeys("123");
    		
    		Thread.sleep(2000);
    		
    		Agent_CreditCheckDetailsPage.UsethisCard.click();
    		
    		//Need to add steps here
    		
			// Closing the Child Window.
           // driver.close();
    		
   //Above is not required as clicking on the use this card button would automatically close
    		
        }
    }
    // Switching to Parent window i.e Main Window.
    driver.switchTo().window(Mainwindow);
       
}
}
