package actionsPerformed;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import helpers.Environment;
import pageobjects.BasketPage.*;
import org.apache.log4j.Logger;


@SuppressWarnings("unused")
public class BasketPageActions extends Environment 

{

	static Logger log = Logger.getLogger("devpinoyLogger");

	public static void validatelabel() throws InterruptedException
	{   
		System.out.println(" ");
		System.out.println("Verifying Shop basket pages");
		  log.debug("Verifying Shop basket pages");

		
		
		if(pageobjects.BasketPage.DeviceRemovebtn.getText().contains("Remove"))
		 {
			System.out.println("The Device_Remove_Link is Present and the Text is :" +pageobjects.BasketPage.DeviceRemovebtn.getText() );
			  log.debug("The Device_Remove_Link is Present and the Text is :" +pageobjects.BasketPage.DeviceRemovebtn.getText() );

		 }else{
		  System.out.println("The Device_Remove_Link is Absent and the Text is :" +pageobjects.BasketPage.DeviceRemovebtn.getText());
		  log.debug("The Device_Remove_Link is Absent and the Text is :" +pageobjects.BasketPage.DeviceRemovebtn.getText());

		 }
		Thread.sleep(5000);
		 
			if(pageobjects.BasketPage.tariffRemovebtn.getText().contains("Remove"))
			 {
				System.out.println("The Tarrif_Remove_link is Present and the Text is :" +pageobjects.BasketPage.tariffRemovebtn.getText());
				  log.debug("The Tarrif_Remove_link is Present and the Text is :" +pageobjects.BasketPage.tariffRemovebtn.getText());

				
			 }else{
			  System.out.println("The Tarrif_Remove_link is Absent and the Text is :" +pageobjects.BasketPage.tariffRemovebtn.getText());
			  
			  log.debug("The Tarrif_Remove_link is Absent and the Text is :" +pageobjects.BasketPage.tariffRemovebtn.getText());

			 }

		
	}
	public static void labelvaluedisplay() throws InterruptedException	
	{
		
		System.out.println("The upfront cost display :" +pageobjects.BasketPage.upfrontcost.getAttribute("data-qa-upfront-total"));
		  
		log.debug("The upfront cost display :" +pageobjects.BasketPage.upfrontcost.getAttribute("data-qa-upfront-total"));

		
		Thread.sleep(5000);
		
		System.out.println("The monthly cost display :" +pageobjects.BasketPage.monthlycost.getAttribute("data-qa-monthly-total"));	
		  log.debug("The monthly cost display :" +pageobjects.BasketPage.monthlycost.getAttribute("data-qa-monthly-total"));

	}
	

	public static void ValidateBasketPage() throws InterruptedException
	{   
	
		  log.debug("Shop basket pages validations");

		
		if(pageobjects.BasketPage.checkoutbtn.getText().contains("Go to checkout"))
		 {
			System.out.println("Go To Checkout is Present and the Text is :" +pageobjects.BasketPage.checkoutbtn.getText() );
			
			  log.debug("Go To Checkout is Present and the Text is :" +pageobjects.BasketPage.checkoutbtn.getText());

			  
			pageobjects.BasketPage.checkoutbtn.sendKeys(Keys.ENTER);;
		 }
		else
		 {
		  System.out.println("Go To Checkout is Absent and the Text is :" +pageobjects.BasketPage.checkoutbtn.getText());
		  log.debug("Go To Checkout is Absent and the Text is :" +pageobjects.BasketPage.checkoutbtn.getText());

		 }
		Thread.sleep(5000);
	 		
	}
	
	//Below is for Clicking on the goto Checkout button
	public static void gotoCheckout()
	{
		pageobjects.BasketPage.checkoutbtn.click();
		log.debug("Clicking on Checkout button");
	}

	public static void ValidateBasketPageContents() throws InterruptedException
	{   
	
		  log.debug("Shop basket pages validations"+driver.getTitle());

		  boolean fname=pageobjects.BasketPage.checkoutbtn.isEnabled(); 
		  System.out.print(fname);


		if(fname!=false)
		 {
			System.out.println("Checkout is Enabled and Present and the Text is :" +pageobjects.BasketPage.checkoutbtn.getText() );
			
			  log.debug("Checkout is Present and the Text is :" +pageobjects.BasketPage.checkoutbtn.getText());
			  System.out.println("Checkout is Enabled and Present and the Text is :" +pageobjects.BasketPage.DeviceDetailsDisplay.getText() );
			 
			 }
		else
		 {
		  System.out.println("Go To Checkout is Absent and the Text is :" +pageobjects.BasketPage.checkoutbtn.getText());
		  log.debug("Go To Checkout is Absent and the Text is :" +pageobjects.BasketPage.checkoutbtn.getText());

		 }
		//Below will display contents of the phone section
		  
		log.debug("The Main Headercontents are : " +pageobjects.BasketPage.MainHeaders.getText());
		log.debug("The Phone contents are : " +pageobjects.BasketPage.DeviceDetailsDisplay.getText());

		//log.debug("The Airtime details are :" +pageobjects.BasketPage.AirtimeDetails.getText());
		String Stf1=driver.findElement(By.cssSelector("section.airtime-plan.is-refresh")).getText();
		System.out.println("The String is "+Stf1);
		
		log.debug("The Airtime contents are : " +pageobjects.BasketPage.AirtimeDetails.getText());

		log.debug("The Basket Totals are : " +pageobjects.BasketPage.totals.getText());
		
		log.debug("The Basket Totals are : " +pageobjects.BasketPage.HomeDeliveryText.getText());

	}
	
	public static void AccessoryBasketPageContents() throws InterruptedException
	{   
	
		  log.debug("Shop basket pages validations"+driver.getTitle());

		  boolean fname=pageobjects.BasketPage.checkoutbtn.isEnabled(); 
		  System.out.print(fname);


		if(fname!=false)
		 {
			System.out.println("Checkout is Enabled and Present and the Text is :" +pageobjects.BasketPage.checkoutbtn.getText() );
			
			  log.debug("Checkout is Present and the Text is :" +pageobjects.BasketPage.checkoutbtn.getText());
			
			 
			 }
		else
		 {
		  System.out.println("Go To Checkout is Absent and the Text is :" +pageobjects.BasketPage.checkoutbtn.getText());
		  log.debug("Go To Checkout is Absent and the Text is :" +pageobjects.BasketPage.checkoutbtn.getText());

		 }
		//Below will display contents of the section
		  
		log.debug("The Main Headercontents are : " +pageobjects.BasketPage.MainHeaders.getText());
		
		
		log.debug("The Phone contents are : " +pageobjects.BasketPage.AccessoryDetails.getText());

		
		
	

		log.debug("The Basket Totals are : " +pageobjects.BasketPage.totals.getText());
		
		log.debug("The Basket Totals are : " +pageobjects.BasketPage.HomeDeliveryText.getText());

	}
	
	public static void CollectionorDelivery(String elementName) throws InterruptedException
	{   
		
		if(elementName.contains("homeDelivery"))
			{
				System.out.println("HomeDelivery is Selected");

				pageobjects.BasketPage.HomeDeliverySelect.click();
				//Assert.assertEquals(elementName,"Galaxy S7 is not found");
				log.debug("HomeDelivery is Selected");

			}
		if(elementName.contains("clickAndCollect"))
		{
			System.out.println("clickAndCollect is Selected");

			pageobjects.BasketPage.clickAndCollectSelect.click();
			//Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("click And Collect is Selected");
			pageobjects.BasketPage.StorePostcode.sendKeys("G2");
			log.debug("PostCode Entered for Search");
			Thread.sleep(5000);
			pageobjects.BasketPage.PostcodeSubmit.click();
			//Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Postcode Submitted for Search");
			pageobjects.BasketPage.Collectfromthisstore.click();
			//Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Store Selected for Colletion");
			Thread.sleep(5000);
		
		
		}
			
			
		
	}
}
