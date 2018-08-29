package actionsPerformed;

import java.io.IOException;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;

import GlobalActions.Screenshots;
import helpers.Environment;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

public class AgreementPageActions extends Environment {
	final static Logger log = Logger.getLogger("AgreementPageActions");

	public static void gettitlepage() throws IOException {

		log.debug("Now Entering Agreement Page...");
		log.debug(driver.getTitle());
		log.debug("Entered Agreements page");
		Screenshots.captureScreenshot();
	}

	public static void Affordability() throws IOException {

		log.debug("Selecting 'I agree that with my current financial commitments...'checkbox");
		if (pageobjects.AgreementPage.affordabilityCheck1.isDisplayed()) {
			pageobjects.AgreementPage.affordabilityCheck1.click();
			log.debug("Selecting affordability Checks # 1");
			log.debug("Selecting ' I agree there are no future changes to my ...'checkbox");
		}
		if (pageobjects.AgreementPage.affordabilityCheck2.isDisplayed()) {
			pageobjects.AgreementPage.affordabilityCheck2.click();
			log.debug("Selecting affordability Checks # 2");
			log.debug("Clicking on the affordabilityButton ");
		}

		if (pageobjects.AgreementPage.affordabilityButton.isDisplayed()) {
			pageobjects.AgreementPage.affordabilityButton.click();
			log.debug("Selecting affordability button");
			Screenshots.captureScreenshot();
		}
	}

	public static void KeyInformation() throws IOException {
		Screenshots.captureScreenshot();
		log.debug("Verifying Key Information");
		WebElement element = pageobjects.AgreementPage.keyInfoSection;
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", element);
		//pageobjects.AgreementPage.keyInfoSection.click();
		log.debug("Clicking on the key information");
		Screenshots.captureScreenshot();
	}

	public static void secciSection() throws IOException {
		log.debug("Verifying Key Information");
		WebElement element = pageobjects.AgreementPage.secciSection;
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", element);
		//pageobjects.AgreementPage.secciSection.click();
		log.debug("Clicking on the key information");
		Screenshots.captureScreenshot();
	}

	public static void PayMMobileAgreement() throws IOException {
		log.debug("Verifying Mobile Agreement section");
		WebElement element = pageobjects.AgreementPage.PayMMobileAgreement;
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", element);
		//pageobjects.AgreementPage.PayMMobileAgreement.click();
		log.debug("Clicking on the Mobile agreement section");
		Screenshots.captureScreenshot();
	}

	public static void TermsDeclarationCheckbox() throws IOException {
		log.debug("Verifying Consumner Credit Agreement");
		WebElement element = pageobjects.AgreementPage.TermsDeclarationCheckbox;
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", element);
		//pageobjects.AgreementPage.TermsDeclarationCheckbox.click();
		log.debug("Clicking on the terms declaration");
		WebElement element1 = pageobjects.AgreementPage.ccaSection;
		JavascriptExecutor executor1 = (JavascriptExecutor)driver;
		executor1.executeScript("arguments[0].click();", element1);
		//pageobjects.AgreementPage.ccaSection.click();
		log.debug("Clicking on the ccaSection");
		Screenshots.captureScreenshot();

	}

	public static void InsuranceSectionAgreementPage() throws InterruptedException, IOException {
		log.debug("Entering InsuranceSectionAgreementPage Method");

		Thread.sleep(3000);

		if (driver.findElement(By.xpath("//tr[@id='basket-insurance']")).isDisplayed()) {
			log.debug("Insurance is displayed in Agreement page and text is  - "
					+ driver.findElement(By.xpath("//tr[@id='basket-insurance']")).getText());

		} else {
			log.debug("Insurance is not displayed");
		}

		Thread.sleep(2000);
		log.debug("Completed InsuranceSectionAgreementPage function");
		log.debug("Completed InsuranceSectionAgreementPage function");
		Screenshots.captureScreenshot();
	}

}
