package actionsPerformed;

import helpers.Environment;
import org.apache.log4j.Logger;

public class AccessoryPageActions extends Environment{
	
	static Logger log = Logger.getLogger("devpinoyLogger");
	public static void Elementdisplayvalidation(String Tabname)
	{
		System.out.println(" ");
		
		System.out.println("Accessory_Page_Validation");
		  log.debug("Accessory Page validation");

			
		if(Tabname!=null)
		{
			switch (Tabname.toLowerCase())
			{
			case "filter":
				if(pageobjects.AccessoryPage.AccessoryFilterTab.isDisplayed())
				{
			
					System.out.println("The Filter Tab is Present on the AccesoryPage and the Text is :" + pageobjects.AccessoryPage.AccessoryFilterTab.getText() );
					log.debug("The Filter Tab is Present on the AccesoryPage and the Text is :" + pageobjects.AccessoryPage.AccessoryFilterTab.getText() );

				 }else{
				   System.out.println("The  Filter Tab is not Present on the AccessoryPage and the Text is :" + pageobjects.AccessoryPage.AccessoryFilterTab.getText());
				   log.debug("The  Filter Tab is not Present on the AccessoryPage and the Text is :" + pageobjects.AccessoryPage.AccessoryFilterTab.getText());

				 }
				
				break;
			case "sort":
				if(pageobjects.AccessoryPage.AccessorySortTab.isDisplayed())
				 {
					System.out.println("The Sort Tab is Present on the AccessoryPage and the Text is :" + pageobjects.AccessoryPage.AccessorySortTab.getText() );
					 log.debug("The Sort Tab is Present on the AccessoryPage and the Text is :" + pageobjects.AccessoryPage.AccessorySortTab.getText() );
				 }else{
					  System.out.println("The  Sort Tab is not Present on the AccessoryPage and the Text is :" + pageobjects.AccessoryPage.AccessorySortTab.getText());
					  log.debug("The  Sort Tab is not Present on the AccessoryPage and the Text is :" + pageobjects.AccessoryPage.AccessorySortTab.getText());
				 }
				break;
			
			
			}
	
	
	}
	
 }
//this  method used to perform click action on the Accessory Page	
	
	public static void ElementClickAction(String elementname) {
		// TODO Auto-generated method stub
         System.out.println(" ");
		
		System.out.println("Accessory_Page_Action");
		log.debug("Accessory Page validation");
		
		if(elementname!=null)
		{
			switch (elementname.toLowerCase())
			{
			case "filter":
				pageobjects.AccessoryPage.AccessoryFilterTab.click();
				break;
			case "sort":
				pageobjects.AccessoryPage.AccessorySortTab.click();		
				break;	
			
			}
	
		}
	}
	
	
	
	//This Method is used to select Accessory from the accessory listing page 
	
	public static void SelectAnyAccessory() {
			
			System.out.println("Selecting Any Accessory");
			log.debug("Selecting Any Accessory");
			log.debug("Selected an accessory -  "+pageobjects.AccessoryPage.RandomAccessory.getText());
			pageobjects.AccessoryPage.RandomAccessory.click();

		}

}

