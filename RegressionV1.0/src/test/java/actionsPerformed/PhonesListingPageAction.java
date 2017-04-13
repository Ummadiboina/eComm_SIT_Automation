package actionsPerformed;


import org.apache.log4j.Logger;

import helpers.Environment;

public class PhonesListingPageAction extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");

	

	
public static void PAYMPhoneSelect(String elementName) 
{
	
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


//Below is for PAYG phones
public static void PAYGPhoneSelect(String elementName) {
	
	if(elementName.contains("Random Device"))
	{
		System.out.println("Selected Random Device");

		pageobjects.PhonesListingPage.RandomDevice.click();
		//Assert.assertEquals(elementName,"Galaxy S7 is not found");
		log.debug("Selected Random Device");

	}

	
	if(elementName.contains("MotoG5"))
	{
		System.out.println("Selected MotoG5");

		pageobjects.PhonesListingPage.MotoG5.click();
		//Assert.assertEquals(elementName,"Galaxy S7 is not found");
		log.debug("Selected MotoG5");

	}

	
	

	
	
	}

}



