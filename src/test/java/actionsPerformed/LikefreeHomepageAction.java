package actionsPerformed;

import java.io.IOException;

import org.apache.log4j.Logger;

import GlobalActions.Screenshots;
import helpers.Environment;

public class LikefreeHomepageAction extends Environment {
	static Logger log = Logger.getLogger("devpinoyLogger");

	public static void ElementClick(String elementName) throws IOException, InterruptedException {

		if (elementName.contains("simfree")) {
			pageobjects.LikeFreePage.simfree1.click();
			log.debug("Clicked a Sim free device");

		}
		if (elementName.contains("Paym")) {
			pageobjects.LikeFreePage.Paym.click();
			log.debug("Clicked PayM with Sim free device");
		}
		if (elementName.contains("PayG")) {
			pageobjects.LikeFreePage.PayG.click();
			log.debug("Clicked PayG with Sim free device");
		}
		Screenshots.captureScreenshot();

	}
	/*
	 * public class VerifyAddressProceed {
	 * 
	 * @SuppressWarnings("deprecation") public static void Execute(WebDriver
	 * driver,List<HashMap<String,String>> map) throws Exception{
	 * assertEquals("ADDRESSES", AddressPage.page_heading.getText());
	 * AddressPage.message.sendKeys(map.get(0).get("message"));
	 * AddressPage.proceed_to_checkout.click();
	 * Reporter.log("Address page verify and proceed successful"); }
	 */

}
