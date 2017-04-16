package actionsPerformed;

import org.apache.log4j.Logger;

import helpers.Environment;

public class FitnessTrackerPageActions extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");

	public static void Elementdisplayvalidation(String Tabname)
	{
		System.out.println(" ");
		
		System.out.println("FitnessTracker_Page_Validation");
		
		
		
		if(Tabname!=null)
		{
			switch (Tabname.toLowerCase())
			{
			case "filter":
				if(pageobjects.FitnessTrackerPage.FitnessFilterTab.isDisplayed())
				 {
					System.out.println("The Filter Tab is Present on the FitnessPage and the Text is :" + pageobjects.FitnessTrackerPage.FitnessFilterTab.getText() );
				 }else{
				   System.out.println("The  Filter Tab is not Present on the FitnessPage and the Text is :" + pageobjects.FitnessTrackerPage.FitnessFilterTab.getText());
				 }
				break;
			case "sort":
				if(pageobjects.FitnessTrackerPage.FitnessSortTab.isDisplayed())
				 {
					System.out.println("The Sort Tab is Present on the FitnessPage and the Text is :" + pageobjects.FitnessTrackerPage.FitnessSortTab.getText() );
				 }else{
				  System.out.println("The  Sort  Tab is not Present on the FitnessPage and the Text is :" + pageobjects.FitnessTrackerPage.FitnessSortTab.getText());
				 }
				break;
			
			
			}
	
		
	}
	
 }
	
	
	public static void ElementClickAction(String elementname) {
		// TODO Auto-generated method stub
         System.out.println(" ");
		
		System.out.println("Fitness_Tracker_Page_Action");
		
		if(elementname!=null)
		{
			switch (elementname.toLowerCase())
			{
			case "filter":
				pageobjects.FitnessTrackerPage.FitnessFilterTab.click();
				break;
			case "sort":
				pageobjects.FitnessTrackerPage.FitnessSortTab.click();		
				break;	
			
			}
	
	}
		
}
public static void DeviceSelect(String elementName) {
		
		if(elementName.contains("Random Device"))
		{
			System.out.println("Random Fitness tracker Device Selected");

			pageobjects.FitnessTrackerPage.RandomFitnesstracker.click();
			//Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("Random Fitness tracker Device Selected");
		}
		
		if(elementName.contains("FitbitAlta"))
		{
			System.out.println("FitbitAlta Fitness tracker Device Selected");

			pageobjects.FitnessTrackerPage.FitbitAlta.click();
			//Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("FitbitAlta Fitness tracker Device Selected");
		}
		
		if(elementName.contains("FitbitCharge2"))
		{
			System.out.println("FitbitCharge2 Fitness tracker Device Selected");

			pageobjects.FitnessTrackerPage.FitbitCharge2.click();
			//Assert.assertEquals(elementName,"Galaxy S7 is not found");
			log.debug("FitbitCharge2 Fitness tracker Device Selected");
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


public static void AddtoBasketFitnessTracker() throws InterruptedException {
	// TODO Auto-generated method stub
	
	try
	{
		System.out.println("Adding Fitness trackers to basket");
		log.debug("Adding Fitness trackers to basket in device details page");
		//log.debug("The text of the button is  - "+pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.getText());
			
					pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.click();
			
					
	}
	catch(org.openqa.selenium.StaleElementReferenceException ex)
	{
	    log.debug("Exception in finding value");
	    System.out.println("Adding Fitness trackers to basket");
		log.debug("Adding Fitness trackers to basket in device details page");
		
					pageobjects.NonConnectedDeviceDetailsPage.AddtoBasket.click();			}
	    
	}


}
