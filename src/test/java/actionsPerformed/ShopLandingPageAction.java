package actionsPerformed;


import org.apache.log4j.Logger;

import helpers.Environment;


public class ShopLandingPageAction extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");

	
public static void GetTitle()
{
	System.out.println("Currently in Shop Home page");
	String Ele1= driver.getTitle();
	System.out.println("The Page title is "+Ele1);
	log.debug("We are in the Shop Home page");
	log.debug("The Page title is "+Ele1);

}

}

	

