package actionsPerformed;


import org.apache.log4j.Logger;
import org.junit.Assert;

import helpers.Environment;

public class PhonesListingPageAction extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");

	

	
public static void PhoneSelect(String elementName) {
	
	if(elementName.contains("GalaxyS7"))
	{
		System.out.println("Selected GalaxyS7");

		pageobjects.PhonesListingPage.GalaxyS7.click();
		//Assert.assertEquals(elementName,"Galaxy S7 is not found");
		log.debug("Selected GalaxyS7");

	}
	if(elementName.contains("GalaxyS8"))
	{
		pageobjects.PhonesListingPage.GalaxyS8.click();
		//Assert.assertEquals(elementName,"Galaxy S7 is not found");
		log.debug("Selected GalaxyS8");

	}
	
	if(elementName.contains("GalaxyS8Plus"))
	{
		pageobjects.PhonesListingPage.GalaxyS8Plus.click();
		//Assert.assertEquals(elementName,"Galaxy S7 is not found");
		log.debug("Selected GalaxyS8Plus");

	}
	
	if(elementName.contains("Iphone7"))
	{
		pageobjects.PhonesListingPage.Iphone7.click();
		//Assert.assertEquals(elementName,"Galaxy S7 is not found");
		log.debug("Selected Iphone7");

	}
	
	
	if(elementName.contains("Iphone7Plus"))
	{
		pageobjects.PhonesListingPage.Iphone7Plus.click();
		//Assert.assertEquals(elementName,"Galaxy S7 is not found");
		log.debug("Selected Iphone7Plus");

	}
	
	
	if(elementName.contains("IphoneSE"))
	{
		pageobjects.PhonesListingPage.IphoneSE.click();
		//Assert.assertEquals(elementName,"Galaxy S7 is not found");
		log.debug("Selected IphoneSE");

	}
	
	
	if(elementName.contains("HuaweiP10"))
	{
		pageobjects.PhonesListingPage.HuaweiP10.click();
		//Assert.assertEquals(elementName,"Galaxy S7 is not found");
		log.debug("Selected HuaweiP10");

	}
	
	
	if(elementName.contains("GalaxyS7Edge"))
	{
		pageobjects.PhonesListingPage.GalaxyS7Edge.click();
		//Assert.assertEquals(elementName,"Galaxy S7 is not found");
		log.debug("Selected GalaxyS7Edge");
	}
	
	
	if(elementName.contains("Oneplus3T"))
	{
		pageobjects.PhonesListingPage.Oneplus3T.click();
		//Assert.assertEquals(elementName,"Galaxy S7 is not found");
		  log.debug("Selected Oneplus3T");

	}
	
	
	}
}



