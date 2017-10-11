package actionsPerformed;

import java.io.IOException;

import org.apache.log4j.Logger;

import GlobalActions.Screenshots;
import helpers.Environment;

public class CVOS_StockMerchandiseActions extends Environment {

	final static Logger log = Logger.getLogger("CVOS_StockMerchandiseActions");

	public static void CVOSSupplyChainStockMerch(String Search_by_model) throws InterruptedException, IOException {

		if (pageobjects.CVOS_PageObjects.searchByModel.isDisplayed()) {
			System.out.println("The Search by model textbox is displayed");
			log.debug("The Search by model textbox is displayed");
		} else
			System.out.println("The Search by model textbox is not displayed");
		log.debug("The Search by model textbox is not displayed");

		pageobjects.CVOS_PageObjects.skuInput.sendKeys(Search_by_model);
		log.debug("The model description is entered");
		System.out.println("The model description is entered");

		pageobjects.CVOS_PageObjects.stockMerchSearch.click();
		log.debug("The Stock Merchandise Search button is clicked");
		System.out.println("The Stock Merchandise Search button is clicked");

		pageobjects.CVOS_PageObjects.checkBoxDevice.click();
		log.debug("The Check box for Launch date is clicked");
		System.out.println("The Check box for Launch date is clicked");

		pageobjects.CVOS_PageObjects.dateForLaunchDate.click();
		log.debug("The Calendar option for Launch date is clicked");
		System.out.println("The Calendar option for Launch date is clicked");

		pageobjects.CVOS_PageObjects.launchDateToFuture.click();
		log.debug("The forward arrow is clicked to move the launch date to a future date");
		System.out.println("The forward arrow is clicked to move the launch date to a future date");

		pageobjects.CVOS_PageObjects.launchDateToFuture.click();
		log.debug("The forward arrow is clicked to move the launch date to a future date");
		System.out.println("The forward arrow is clicked to move the launch date to a future date");

		pageobjects.CVOS_PageObjects.launchDateToFuture.click();
		log.debug("The forward arrow is clicked to move the launch date to a future date");
		System.out.println("The forward arrow is clicked to move the launch date to a future date");

		pageobjects.CVOS_PageObjects.launchDate.click();
		log.debug("The launch date is selected");
		System.out.println("The launch date is selected");

		pageobjects.CVOS_PageObjects.applyLaunchDateButton.click();
		log.debug("The Apply button to set the launch date is selected");
		System.out.println("The Apply button to set the launch date is selected");
		Thread.sleep(5000);

		pageobjects.CVOS_PageObjects.checkBoxDevice.click();
		log.debug("The Check box for Launch date is clicked");
		System.out.println("The Check box for Launch date is clicked");

		pageobjects.CVOS_PageObjects.checkBoxDevice.click();
		log.debug("The Check box for Launch date is clicked");
		System.out.println("The Check box for Launch date is clicked");

		// Pre Order Message
		pageobjects.CVOS_PageObjects.preOrderextendedtextbox.sendKeys("Coming Soon!");
		log.debug("The Pre Order message is entered is entered");
		System.out.println("The Pre Order message is entered is entered");
		Screenshots.captureScreenshot();

	}

	public static void CVOSSupplyChainStockMerchDD(String Search_by_model) throws InterruptedException, IOException {

		if (pageobjects.CVOS_PageObjects.searchByModel.isDisplayed()) {
			System.out.println("The Search by model textbox is displayed");
			log.debug("The Search by model textbox is displayed");
		} else
			System.out.println("The Search by model textbox is not displayed");
		log.debug("The Search by model textbox is not displayed");

		pageobjects.CVOS_PageObjects.modelSearchInput.sendKeys(Search_by_model);
		log.debug("The model description is entered");
		System.out.println("The model description is entered");

		Thread.sleep(4000);
		pageobjects.CVOS_PageObjects.stockMerchSearch.click();
		log.debug("The Stock Merchandise Search button is clicked");
		System.out.println("The Stock Merchandise Search button is clicked");

		Thread.sleep(4000);
		pageobjects.CVOS_PageObjects.checkBoxDevice.click();
		log.debug("The Check box for Launch date is clicked");
		System.out.println("The Check box for Launch date is clicked");

		Thread.sleep(4000);
		pageobjects.CVOS_PageObjects.dateForLaunchDate.click();
		log.debug("The Calendar option for Launch date is clicked");
		System.out.println("The Calendar option for Launch date is clicked");

		Thread.sleep(4000);
		pageobjects.CVOS_PageObjects.launchDateToPast.click();
		log.debug("The forward arrow is clicked to move the launch date to a future date");
		System.out.println("The forward arrow is clicked to move the launch date to a future date");

		Thread.sleep(4000);
		pageobjects.CVOS_PageObjects.launchDateToPast.click();
		log.debug("The forward arrow is clicked to move the launch date to a future date");
		System.out.println("The forward arrow is clicked to move the launch date to a future date");

		Thread.sleep(4000);
		pageobjects.CVOS_PageObjects.launchDateToPast.click();
		log.debug("The forward arrow is clicked to move the launch date to a future date");
		System.out.println("The forward arrow is clicked to move the launch date to a future date");

		pageobjects.CVOS_PageObjects.launchDateToPast.click();
		log.debug("The forward arrow is clicked to move the launch date to a future date");
		System.out.println("The forward arrow is clicked to move the launch date to a future date");

		pageobjects.CVOS_PageObjects.launchDateToPast.click();
		log.debug("The forward arrow is clicked to move the launch date to a future date");
		System.out.println("The forward arrow is clicked to move the launch date to a future date");

		pageobjects.CVOS_PageObjects.launchDate.click();
		log.debug("The launch date is selected");
		System.out.println("The launch date is selected");

		pageobjects.CVOS_PageObjects.applyLaunchDateButton.click();
		log.debug("The Apply button to set the launch date is selected");
		System.out.println("The Apply button to set the launch date is selected");

		Thread.sleep(10000);

		pageobjects.CVOS_PageObjects.checkBoxDevice.click();
		log.debug("The Check box for Launch date is clicked");
		System.out.println("The Check box for Launch date is clicked");

		pageobjects.CVOS_PageObjects.checkBoxDevice.click();
		log.debug("The Check box for Launch date is clicked");
		System.out.println("The Check box for Launch date is clicked");

		// Pre Order Message
		pageobjects.CVOS_PageObjects.preOrderextendedtextbox.sendKeys("Coming Soon!");
		log.debug("The Pre Order message is entered is entered");
		System.out.println("The Pre Order message is entered is entered");
		Screenshots.captureScreenshot();

	}

	public static void CVOSSupplyChainlogout() throws InterruptedException, IOException {

		pageobjects.CVOS_PageObjects.logOut.click();
		log.debug("The Logout button is clicked");
		Screenshots.captureScreenshot();
	}

}
