package actionsPerformed;

import java.io.IOException;

import GlobalActions.Screenshots;
import helpers.Environment;
import helpers.setRuntimeProperty;
import org.apache.log4j.Logger;
import pageobjects.Agent_UpdateCCAEmailPage;

public class UpdateDevicePlanLinkEmailAddressActions extends Environment {

	final static Logger log = Logger.getLogger("UpdateDevicePlanLinkEmailAddressActions");

	public static void EnterCCAEmail() throws InterruptedException, IOException {
		if (Agent_UpdateCCAEmailPage.CCAEmailID.isDisplayed()) {
			Agent_UpdateCCAEmailPage.CCAEmailID.click();
			Thread.sleep(3000);
			String CCAemailID = Agent_UpdateCCAEmailPage.CCAEmailID.getAttribute("value");
			log.debug("The CCA email id is " + CCAemailID);
			Agent_UpdateCCAEmailPage.ProceedwitheMailYes.click();
			setRuntimeProperty.setProperty("emailid", Agent_UpdateCCAEmailPage.CCAEmailID.getAttribute("value"));
		}

		else {
			log.debug("The Text box to enter CCA email id is not displayed");
		}
		Screenshots.captureScreenshot();
	}

}
