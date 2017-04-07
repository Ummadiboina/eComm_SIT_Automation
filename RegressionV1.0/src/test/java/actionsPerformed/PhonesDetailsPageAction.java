package actionsPerformed;


import org.apache.log4j.Logger;
import org.junit.Assert;

import helpers.Environment;


//This page will have details on the individual device

public class PhonesDetailsPageAction extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");

	
	public static void GetTitle()
	{
		System.out.println("Currently in Device details page");
		String Ele1= driver.getTitle();
		System.out.println("The Page title is "+Ele1);
		log.debug("Currently in Device details page");
		log.debug("The Page title is "+Ele1);

	}


public static void ViewAllTariffs() throws InterruptedException
{
	pageobjects.PhonesDetailsPage.ViewOurTariffs.click();
	Thread.sleep(5000);
	log.debug("Clicked on ViewOurTariffs");


}		
	}




