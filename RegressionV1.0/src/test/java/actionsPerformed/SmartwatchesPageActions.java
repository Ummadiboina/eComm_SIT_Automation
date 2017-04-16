package actionsPerformed;

import org.apache.log4j.Logger;

import helpers.Environment;

public class SmartwatchesPageActions extends Environment
{
	static Logger log = Logger.getLogger("devpinoyLogger");

	public static void Elementdisplayvalidation(String Tabname)
	{
		System.out.println(" ");
		
		System.out.println("Smartwatches_Page_Validation");
		
		
		
		if(Tabname!=null)
		{
			switch (Tabname.toLowerCase())
			{
			case "filter":
				if(pageobjects.SmartwatchesPage.SmartwatchesFilterTab.isDisplayed())
				 {
					System.out.println("The Filter Tab is Present on the FitnessPage and the Text is :" + pageobjects.SmartwatchesPage.SmartwatchesFilterTab.getText() );
				 }else{
				   System.out.println("The  Filter Tab is not Present on the FitnessPage and the Text is :" + pageobjects.SmartwatchesPage.SmartwatchesFilterTab.getText());
				 }
				break;
			case "sort":
				if(pageobjects.SmartwatchesPage.SmartwatchesSortTab.isDisplayed())
				 {
					System.out.println("The Sort Tab is Present on the FitnessPage and the Text is :" + pageobjects.SmartwatchesPage.SmartwatchesSortTab.getText() );
				 }else{
				  System.out.println("The  Sort  Tab is not Present on the FitnessPage and the Text is :" + pageobjects.SmartwatchesPage.SmartwatchesSortTab.getText());
				 }
				break;
			
			
			}
	
		
	}
	
 }
	public static void ElementClickAction(String elementname) {
		// TODO Auto-generated method stub
         System.out.println(" ");
		
		System.out.println("Smartwatches_Page_Action");
		
		if(elementname!=null)
		{
			switch (elementname.toLowerCase())
			{
			case "filter":
				pageobjects.SmartwatchesPage.SmartwatchesFilterTab.click();
				break;
			case "sort":
				pageobjects.SmartwatchesPage.SmartwatchesSortTab.click();		
				break;	
			
			}
	
	}
}
	

	
	
public static void DeviceSelect(String elementName) {
		
		if(elementName.contains("Random Device"))
		{
			System.out.println("Random SmartWatch Device Selected");

			pageobjects.SmartwatchesPage.RandomSmartWatch.click();
			//Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Random SmartWatch Device Selected");
		}
		
		
		
			
}

/*
public static void AddtoBasketFitnessTracker() throws InterruptedException {
	// TODO Auto-generated method stub
	
		System.out.println("Adding Fitness trackers to basket");
		log.debug("Adding Fitness trackers to basket in device details page");
		pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.click();
		
}
*/


public static void AddtoBasketSmartwatchTracker() throws InterruptedException {
	// TODO Auto-generated method stub
	
	try
	{
		System.out.println("Adding SmartWatch to basket");
		log.debug("Adding Smartwatch to basket in device details page");
		//log.debug("The text of the button is  - "+pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.getText());
			
					pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.click();
			
					
	}
	catch(org.openqa.selenium.StaleElementReferenceException ex)
	{
	    log.debug("Exception in finding value");
	    System.out.println("Adding Smartwatches to basket");
		log.debug("Adding Smartwatches to basket in device details page");
		
					pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.click();			}
	    
	}



}
