package actionsPerformed;

import helpers.Environment;
import helpers.setRuntimeProperty;
import pageobjects.Agent_UpdateCCAEmailPage;

public class UpdateDevicePlanLinkEmailAddressActions extends Environment {

	public static void EnterCCAEmail() throws InterruptedException {
		if (Agent_UpdateCCAEmailPage.CCAEmailID.isDisplayed())
		{
			Agent_UpdateCCAEmailPage.CCAEmailID.click();
			Thread.sleep(3000);
			String CCAemailID = Agent_UpdateCCAEmailPage.CCAEmailID.getAttribute("value");
			System.out.println("The CCA email id is "+CCAemailID);
			Agent_UpdateCCAEmailPage.ProceedwitheMailYes.click();
			setRuntimeProperty.setProperty("emailid",Agent_UpdateCCAEmailPage.CCAEmailID.getAttribute("value"));
		}
			
		else
			System.out.println("The Text box to enter CCA email id is not displayed");
	}

}
