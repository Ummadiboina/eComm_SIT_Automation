package actionsPerformed;

import java.io.IOException;

import org.apache.log4j.Logger;

import GlobalActions.Screenshots;
import helpers.Environment;
import pageobjects.Agent_UpdateCCAEmailPage;

public class AgentCCAEmailAddress extends Environment {

	final static Logger log = Logger.getLogger("AgentCCAEmailAddress");

	public static void CFACCAEmailUpdate(String emailid) throws InterruptedException, IOException {

		log.debug("Entering the CCA email for Acquisition customers");

		log.debug("Going to update the CFA CCA email");
		Thread.sleep(4000);
		Agent_UpdateCCAEmailPage.CCAEmailID.clear();
		Agent_UpdateCCAEmailPage.CCAEmailID.sendKeys(emailid);
		log.debug("Entered the CCA email id");
		Thread.sleep(3000);

		if (Agent_UpdateCCAEmailPage.ProceedwitheMailYes.isDisplayed()) {
			log.debug("The Yes button to proceed with CCA is displayed");
			Agent_UpdateCCAEmailPage.ProceedwitheMailYes.click();
		}
		Screenshots.captureScreenshot();

	}

}
