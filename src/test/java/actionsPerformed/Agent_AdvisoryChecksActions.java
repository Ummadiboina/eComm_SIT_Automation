package actionsPerformed;

import helpers.Environment;

import pageobjects.Agent_AdvisoryPage;


import org.apache.log4j.Logger;


public class Agent_AdvisoryChecksActions extends Environment{
	
	static Logger log = Logger.getLogger("devpinoyLogger");
	
	
//this  method used to perform click action on the Agent Home Page	
	

	public static void AgreeAdvsioryCheck() throws InterruptedException 
	{
	
		System.out.println("Going to Click on Advisory checks");	
		Thread.sleep(4000);

		Agent_AdvisoryPage.AgreeAdvsioryCheckYes.click();
				log.debug("Clicked on Advisory checks");
				System.out.println("Clicked on Advisory checks");	
				Thread.sleep(3000);
			}
		

	}
	
	
	


