package actionsPerformed;

import java.io.IOException;

import GlobalActions.scrollToAnElement;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;

import GlobalActions.Screenshots;
import helpers.Environment;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

public class ReviewPageActions extends Environment {
	final static Logger log = Logger.getLogger("ReviewPageActions");

	public static void gettitlepage() throws IOException {

		log.debug(driver.getTitle());
		Screenshots.captureScreenshot();

	}

	public static void TermsCheckBox() throws IOException, InterruptedException {
		log.debug("Clicking on the checkbox");
		if (pageobjects.ReviewPage.TermsCheckBox.isSelected()) {

		} else {
			Thread.sleep(2000);
			Screenshots.captureScreenshot();

			scrollToAnElement.scrollToElement(pageobjects.ReviewPage.TermsCheckBox);
			Screenshots.captureScreenshot();
			WebElement element = pageobjects.ReviewPage.TermsCheckBox;
			JavascriptExecutor executor = (JavascriptExecutor) driver;
			executor.executeScript("arguments[0].click();", element);

			Thread.sleep(2000);
			log.debug("Clicked the Checkbox in Terms");

			if(driver.findElements(By.xpath("//input[@id='insurance-terms']")).size()>0){
				WebElement element1 = pageobjects.ReviewPage.TermsInsumrance;
				JavascriptExecutor exe = (JavascriptExecutor) driver;
				exe.executeScript("arguments[0].click();", element1);
				log.debug("Clicked the Insurance Checkbox in Terms");
				Thread.sleep(2000);
				String insuranceTxt = pageobjects.ReviewPage.TermsInsumranceTxt.getText();
				Thread.sleep(2000);
				log.debug("Insurance Text: "+insuranceTxt);

			}
			//pageobjects.ReviewPage.TermsCheckBox.click();
			Screenshots.captureScreenshot();
		}
	}
	public static void PayNow() throws InterruptedException, IOException {
		log.debug("Clicking on Pay now");
		WebElement element = pageobjects.ReviewPage.PayNow;
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", element);
		//pageobjects.ReviewPage.PayNow.click();
		log.debug("Completing on Review page");
		Screenshots.captureScreenshot();
		Thread.sleep(5000);
		Screenshots.captureScreenshot();

	}

	public static void checktrustev() throws IOException {
		String Source = driver.getPageSource();
		String Trustev = "trustev";

		if (containsIgnoreCase(Source, Trustev)) {
			log.debug("Trustev is enabled");
		} else {
			log.debug("Trustev is NOT enabled");
		}
		Screenshots.captureScreenshot();
	}

	private static boolean containsIgnoreCase(String source, String trustev) {

		return false;
	}

	public static void checkOrderContractTextRP() throws IOException {
		String ActOrderContractMsg = "";
		String ExpOrderContractMsg = "";

		String ActOrderContractMsgOrderSummary = "";
		String ExpOrderContractMsgOrderSummary = "";

		try {
			// TODO Auto-generated method stub

			ActOrderContractMsg = pageobjects.ReviewPage.OrderContractMessageRP.getText();
			ExpOrderContractMsg = "Your contract will not start until the order is on its way.";

			log.debug("Act Del MSg" + ActOrderContractMsg);
			log.debug("Exp Del MSg" + ExpOrderContractMsg);

			ActOrderContractMsgOrderSummary = pageobjects.ReviewPage.OrderContractMessageRPOrderSummary.getText();
			ExpOrderContractMsgOrderSummary = "Your contract will not start until the order is on its way.";

			Assert.assertTrue("Assertion Failed: Order Contract Text in Review Page does not match",
					ExpOrderContractMsg.equals(ActOrderContractMsg));

			log.debug("Assertion Passed: ActOrderContractMsg matches ExpOrderContractMsg in Review Page");

			Assert.assertTrue("Assertion Failed: Order Contract Text in the Order Summary Section does not match",
					ExpOrderContractMsgOrderSummary.equals(ActOrderContractMsgOrderSummary));

			log.debug(
					"Assertion Passed: ActOrderContractMsgOrderSummary matches ExpOrderContractMsgOrderSummary in the Order Summary Section");
			Screenshots.captureScreenshot();

		} catch (AssertionError e) {
			log.debug("ActOrderContractMsg: " + ActOrderContractMsg
					+ " does not match the ExpOrderContractMsg: " + ExpOrderContractMsg + " in Review Page");
			Screenshots.captureScreenshot();

		}
	}

	public static void checkStockExtMsgRP() throws IOException {
		// TODO Auto-generated method stub
		String ActualStockExtMsg = pageobjects.ReviewPage.StockExtMessageDDPORP.getText();
		String ExpStockExtMsg = "You'll pay for your phone now. We'll send you an email or text to let you know when it will be delivered";
		log.debug("Act Del MSg" + ActualStockExtMsg);
		log.debug("Exp Del MSg" + ExpStockExtMsg);

		if (ActualStockExtMsg.matches(ExpStockExtMsg)) {
			log.debug("ActualStockExtMsg matches ExpStockExtMsg");
		} else {
			Assert.fail("Stock extended message for stock limited DD/Pre order phone does not match");

		}
		Screenshots.captureScreenshot();
	}

	public static void checkStockExtMsgRP(String product) throws IOException {
		// TODO Auto-generated method stub
		String ActualStockExtMsg = pageobjects.ReviewPage.StockExtMessageDDPORP.getText();

		String ExpStockExtMsg = null;
		if (product.contains("GalaxyS7")) {

			ExpStockExtMsg = "Your new Samsung Galaxy S7 32gb Gold may take up to 2 to 3 days. You'll pay for the new Phone now, but won't start paying for your contract until your iPhone is on its way.";
		}

		if (ActualStockExtMsg.matches(ExpStockExtMsg)) {
			log.debug("ActualStockExtMsg in Review Page matches ExpStockExtMsg");
		} else {
			Assert.fail("Stock extended message in Review Page is not present");

		}
		Screenshots.captureScreenshot();
	}

	public static void checkDelTextRP() throws IOException {
		String ExpStockExtMsgDelText = "We will deliver the rest of your order as soon as possible.";
		if (pageobjects.ReviewPage.DeliveryTextRP.getText().matches(ExpStockExtMsgDelText)) {
			log.debug("Delivery Text in Review Page is present");
		} else {
			Assert.fail("Delivery Text in Review Page is not present");
		}
		Screenshots.captureScreenshot();
	}

	public static void InsuranceSectionReviewPage() throws InterruptedException, IOException {
		log.debug("Entering InsuranceSectionReviewPage Method");

		Thread.sleep(3000);

		if (driver.findElement(By.xpath("//tr[@id='basket-insurance']")).isDisplayed()) {
			log.debug("Insurance is displayed in Review page and text is  - "
					+ driver.findElement(By.xpath("//tr[@id='basket-insurance']")).getText());

		} else {
			log.debug("Insurance is not displayed");
		}

		Thread.sleep(2000);
		log.debug("Completed InsuranceSectionReviewPage function");
		log.debug("Completed InsuranceSectionReviewPage function");
		Screenshots.captureScreenshot();
	}

}
