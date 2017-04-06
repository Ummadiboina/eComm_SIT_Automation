package actionsPerformed;


import org.apache.log4j.Logger;


import helpers.Environment;

public class PhonesListingPageAction extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");

	
public static void ElementClick1(String elementName) 

{
	System.out.println("Currently in Phones Listing Page");

}
	
public static void PhoneSelect(String elementName) {
	
	if(elementName.contains("simfree"))
	{
		pageobjects.LikeFreePage.simfree1.click();
		  log.debug("Clicked a Sim free device");

	}
	if(elementName.contains("Paym"))
	{
		pageobjects.LikeFreePage.Paym.click();
		log.debug("Clicked PayM with Sim free device");
	}
	if(elementName.contains("PayG"))
	{
		pageobjects.LikeFreePage.PayG.click();
		log.debug("Clicked PayG with Sim free device");
	}

	
	}
}



