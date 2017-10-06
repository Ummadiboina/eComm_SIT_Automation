package actionsPerformed;

import java.io.IOException;

import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;

import GlobalActions.Screenshots;
import helpers.Environment;
import pageobjects.O2RefreshDealSummaryPage;

public class O2RefreshDealSummaryActions extends Environment {

	static Logger log = Logger.getLogger("devpinoyLogger");

	public static void DealSummarySectionforCCA() throws IOException, InterruptedException {
		if (O2RefreshDealSummaryPage.DealSummarySection.isDisplayed()) {
			System.out.println("The Deal summary section is displayed");
			O2RefreshDealSummaryPage.SummariseTheDealYes.click();
			log.debug("The Yes button in the deal summary is clicked");
		}

		else {
			System.out.println("The Deal summary is not present");
		}
		Screenshots.captureScreenshot();

	}

	public static void ClickGenerateCCABtn() throws IOException, InterruptedException {

		if (O2RefreshDealSummaryPage.GenerateCCABtn.isDisplayed()) {
			System.out.println("The Generate CCA button is displayed");
			O2RefreshDealSummaryPage.GenerateCCABtn.click();
		} else {
			System.out.println("The Generate CCA button is not present");
		}
		Screenshots.captureScreenshot();
	}

	public static void ClickGenerateCCALink() throws InterruptedException, IOException {

		if (O2RefreshDealSummaryPage.CCALink.isDisplayed()) {
			System.out.println("The CCA link is displayed");

			JavascriptExecutor executor = (JavascriptExecutor) driver;
			executor.executeScript("arguments[0].click();", O2RefreshDealSummaryPage.CCALink);

			// O2RefreshDealSummaryPage.CCALink.click();
			Thread.sleep(3000);
		} else {
			System.out.println("The CCA link is not displayed");
		}
		Screenshots.captureScreenshot();

	}

	public static void SwitchFocusToNewTab() throws IOException, InterruptedException {

		for (String winHandle : driver.getWindowHandles()) {
			driver.switchTo().window(winHandle);
		}

		String CCAlogin = driver.getCurrentUrl();
		System.out.println(CCAlogin);
		if (CCAlogin.contains("accounts.ref.o2.co.uk")) {
			System.out.println("The CCA login page is displayed");

		} else {

			System.out.println("The CCA login page is not displayed");

		}
		Screenshots.captureScreenshot();
	}
}
