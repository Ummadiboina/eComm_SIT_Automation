package actionsPerformed;

import java.io.IOException;

import org.apache.log4j.Logger;

import GlobalActions.Screenshots;
import helpers.Environment;
import pageobjects.Agent_AdvisoryPage;

public class Agent_AdvisoryChecksActions extends Environment {

	final static Logger log = Logger.getLogger("Agent_AdvisoryChecksActions");


	// this method used to perform click action on the Agent Home Page

	public static void AgreeAdvsioryCheck() throws InterruptedException, IOException {

		System.out.println("Going to Click on Advisory checks");
		Thread.sleep(4000);

		Agent_AdvisoryPage.AgreeAdvsioryCheckYes.click();
		log.debug("Clicked on Advisory checks");
		System.out.println("Clicked on Advisory checks");
		Thread.sleep(3000);
		Screenshots.captureScreenshot();
	}

}
