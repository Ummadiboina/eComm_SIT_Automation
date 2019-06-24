package actionsPerformed;

import java.awt.*;
import java.io.IOException;
import java.util.List;

import GlobalActions.scrollToAnElement;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;

import GlobalActions.Screenshots;
import helpers.Environment;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

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

	public static void affordabilityValidation(String employmentStatus, String annualIncome) throws IOException, InterruptedException, AWTException {
		Screenshots.captureScreenshot();
		scrollToAnElement.scrollToElement(pageobjects.AgreementPage.affordabilityHeading);
		Thread.sleep(2000);
		Screenshots.captureScreenshot();

		//Employment Status
		if (driver.findElements(By.xpath("//span[@id='employment-statusSelectBoxIt']")).size() > 0) {
			//pageobjects.AgreementPage.employmentDropDown.click();
			WebElement element = pageobjects.AgreementPage.employmentDropDown;
			JavascriptExecutor executor = (JavascriptExecutor)driver;
			executor.executeScript("arguments[0].click();", element);
			Thread.sleep(3000);
			Screenshots.captureScreenshot();


			WebElement empStatus = null;
			String empStatusName = "";
			java.util.List<WebElement> empStatusNames = driver.findElements(By.xpath("//ul[@id='employment-statusSelectBoxItOptions']/li"));

			for (int i = 1; i <= empStatusNames.size(); i++) {
				empStatusName = driver.findElement(By.xpath("//ul[@id='employment-statusSelectBoxItOptions']/li[" + i + "]")).getText();
				Thread.sleep(2000);
				if (empStatusName.contains(employmentStatus)) {
					empStatus = driver.findElement(By.xpath("//ul[@id='employment-statusSelectBoxItOptions']/li[" + i + "]"));
					break;
				}
			}

			Thread.sleep(3000);
			org.openqa.selenium.Point coordinates = empStatus.getLocation();
			Robot robot = new Robot();
			robot.mouseMove(coordinates.getX() + 80, coordinates.getY() + 100);
			Thread.sleep(2000);
			log.debug("Moving Mouse to employment status dropdown\n");

			Actions action = new Actions(driver);
			action.moveToElement(empStatus).click().build().perform();
			log.debug("Selected " + employmentStatus + "from employment status dropdown\n");
			Thread.sleep(3000);
			Screenshots.captureScreenshot();
		}


		//Annual Income
		if (driver.findElements(By.xpath("//span[@id='annual-incomeSelectBoxIt']")).size() > 0) {
			//pageobjects.AgreementPage.annualIncomeDropDown.click();
			WebElement element1 = pageobjects.AgreementPage.annualIncomeDropDown;
			JavascriptExecutor executor = (JavascriptExecutor)driver;
			executor.executeScript("arguments[0].click();", element1);
			Thread.sleep(3000);
			Screenshots.captureScreenshot();


			WebElement annualIncomeEle = null;
			String income = "";
			List<WebElement> annualIncomeList = driver.findElements(By.xpath("//ul[@id='annual-incomeSelectBoxItOptions']/li"));

			for (int i = 1; i <= annualIncomeList.size(); i++) {
				income = driver.findElement(By.xpath("//ul[@id='annual-incomeSelectBoxItOptions']/li[" + i + "]")).getText();
				Thread.sleep(2000);
				if (income.contains(annualIncome)) {
					annualIncomeEle = driver.findElement(By.xpath("//ul[@id='annual-incomeSelectBoxItOptions']/li[" + i + "]"));
					break;
				}
			}

			Thread.sleep(3000);
			Point coordinates = annualIncomeEle.getLocation();
			Robot robot = new Robot();
			robot.mouseMove(coordinates.getX() + 80, coordinates.getY() + 100);
			Thread.sleep(2000);
			log.debug("Moving Mouse to annual income dropdown\n");

			Actions action = new Actions(driver);
			action.moveToElement(annualIncomeEle).click().build().perform();
			log.debug("Selected " + annualIncome + "from annual income dropdown\n");
			Thread.sleep(3000);
			Screenshots.captureScreenshot();
		}

		/*pageobjects.AgreementPage.affordabilityDontAgreeLink.click();
		log.debug("Clicked on affordability Dont Agree Link\n");
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,300)", "");
		Thread.sleep(3000);
		Screenshots.captureScreenshot();*/

		pageobjects.AgreementPage.agreeFinancialCommitments.click();
		log.debug("Selected agree Financial commitments check box\n");
		pageobjects.AgreementPage.agreeMyCircumstances.click();
		log.debug("Selected agree My Circumstances check box\n");
		Thread.sleep(2000);
		Screenshots.captureScreenshot();


		pageobjects.AgreementPage.affordabilityButton.click();
		log.debug("Clicked on Affordability CTA\n");
		Thread.sleep(2000);
		Screenshots.captureScreenshot();


	}

	public static void go_to_review_cta() throws IOException {
		log.debug("Click on Go to Review CTA");
		WebElement element = pageobjects.AgreementPage.Go_To_Review;
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", element);
		//pageobjects.AgreementPage.PayMMobileAgreement.click();
		log.debug("Clicked on Go to Review CTA");
		Screenshots.captureScreenshot();
	}
}
