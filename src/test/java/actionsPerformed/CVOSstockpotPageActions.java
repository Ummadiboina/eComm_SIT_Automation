package actionsPerformed;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.support.ui.Select;

import GlobalActions.Screenshots;
import helpers.Environment;

public class CVOSstockpotPageActions extends Environment {

	final static Logger log = Logger.getLogger("CVOSstockpotPageActions");

	public static void CVOSSupplyChainAct(String SKUID) throws InterruptedException, IOException {

		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

		/*
		 * if (pageobjects.CVOS_PageObjects.skuDescriptionDropDown.isDisplayed()) {
		 * log.debug( "The SKU Dropdown is displayed : " +
		 * pageobjects.CVOS_PageObjects.skuDescriptionDropDown.getText()); log.debug(
		 * "The SKU Dropdown is displayed : " +
		 * pageobjects.CVOS_PageObjects.skuDescriptionDropDown.getText());
		 *
		 * log.debug( "The SKU Dropdown is displayed : " +
		 * pageobjects.CVOS_PageObjects.skuDescriptionDropDown.getText());
		 *
		 * } else log.debug("The SKU Dropdown is not displayed");
		 * log.debug("The SKU Dropdown is not displayed");
		 * log.debug("The SKU Dropdown is not displayed");
		 */

		Select dropdown = new Select(pageobjects.CVOS_PageObjects.skuDescriptionDropDown);
		dropdown.selectByValue("SKUID");
		log.debug("The SKUID is Selected");
		log.debug("The SKUID is Selected");

		/*
		 * pageobjects.CVOS_PageObjects.skuDescriptionDropDown.click();
		 * log.debug("The SKU Dropdown is clicked");
		 * log.debug("The SKU Dropdown is clicked");
		 *
		 * pageobjects.CVOS_PageObjects.skuIdDropDown.click();
		 * log.debug("The SKU ID is selected from the drop down is clicked");
		 * System.out. println("The SKU ID is selected from the drop down is clicked");
		 */

		pageobjects.CVOS_PageObjects.skuInput.sendKeys(SKUID);
		log.debug("The SKU ID entered is " + SKUID);
		log.debug("The SKU ID is entered" + SKUID);
		Screenshots.captureScreenshot();

	}

	public static void CVOSSupplyChainSearch() throws InterruptedException, IOException {

		pageobjects.CVOS_PageObjects.searchButton.click();
		log.debug("The search button is clicked");
		log.debug("The search button is clicked");
		Screenshots.captureScreenshot();
	}

	public static void CVOSSupplyChainStockPot() throws InterruptedException, IOException {
		log.debug("pageobjects.CVOS_PageObjects.onlineStockpot.getText()");
		if (pageobjects.CVOS_PageObjects.onlineStockpot.isDisplayed()) {
			log.debug(
					"The Online stockpot is displayed : " + pageobjects.CVOS_PageObjects.onlineStockpot.getText());
			log.debug("The Online stockpot is displayed : " + pageobjects.CVOS_PageObjects.onlineStockpot.getText());
		} else
			log.debug("The Online stockpot is not displayed");
		log.debug("The Online stockpot is not displayed");

		if (pageobjects.CVOS_PageObjects.allShopStockpot.isDisplayed()) {
			log.debug(
					"The All Shops stockpot is displayed : " + pageobjects.CVOS_PageObjects.allShopStockpot.getText());
			log.debug(
					"The All Shops stockpot is displayed : " + pageobjects.CVOS_PageObjects.allShopStockpot.getText());
		} else
			log.debug("The All Shops stockpot is not displayed");
		log.debug("The All Shops stockpot is not displayed");
		Screenshots.captureScreenshot();

	}

	public static void CVOSSupplyChainMoveDelivery() throws InterruptedException, IOException {

		pageobjects.CVOS_PageObjects.onlineStockpot.click();
		log.debug("The Online Stockpot tab is clicked");
		log.debug("The Online Stockpot tab is clicked");

		Thread.sleep(3000);

		pageobjects.CVOS_PageObjects.toMoveDeliverydate.click();
		log.debug("The Move Delivery Option is clicked");
		log.debug("The Move Delivery Option is clicked");

		Thread.sleep(3000);
		pageobjects.CVOS_PageObjects.toMoveDate.click();
		log.debug("The Move to next month Option is clicked");
		log.debug("The Move to next month Option is clicked");

		Thread.sleep(5000);

		pageobjects.CVOS_PageObjects.deliverySelectDate.click();

		log.debug("The Delivery date is selected");
		log.debug("The Delivery date is selected");

		Thread.sleep(5000);

		pageobjects.CVOS_PageObjects.deliveryDateApply.click();
		log.debug("The Delivery date Apply button is Clicked");
		log.debug("The Delivery date Apply button is Clicked");

		Thread.sleep(5000);

		pageobjects.CVOS_PageObjects.confirmDeliveryDate.click();
		log.debug("The Confirm button is Clicked");
		log.debug("The Confirm button is Clicked");

		Thread.sleep(5000);
		Screenshots.captureScreenshot();

	}

	public static void CVOSSupplyChainStockMerchandise() throws InterruptedException, IOException {

		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		Thread.sleep(8000);
		pageobjects.CVOS_PageObjects.stockMerchandiseTab.click();
		log.debug("The Stock Merchandise tab is clicked");
		log.debug("The Stock Merchandise tab is clicked");
		Screenshots.captureScreenshot();
	}

	public static void CVOSTradingAdminAct(String SKUID) throws InterruptedException, IOException {

		Select dropdown = new Select(pageobjects.CVOS_PageObjects.skuDescriptionDropDown);
		dropdown.selectByValue("SKUID");
		log.debug("The SKUID is Selected");
		log.debug("The SKUID is Selected");

		pageobjects.CVOS_PageObjects.skuInput.sendKeys(SKUID);
		log.debug("The SKU ID is entered");
		log.debug("The SKU ID is entered");

		pageobjects.CVOS_PageObjects.searchButton.click();
		log.debug("The search button is clicked");
		log.debug("The search button is clicked");

		Thread.sleep(4000);
        pageobjects.CVOS_PageObjects.deviceLink.click();
		log.debug("The Device link for all shops is clicked");
		log.debug("The Device link for all shops is clicked");
		Screenshots.captureScreenshot();

	}

	public static void CVOSTradingAdminPreOrderVerf(String SKUID) throws InterruptedException, IOException {

		if (pageobjects.CVOS_PageObjects.skuDescriptionDropDown.isDisplayed()) {
			log.debug(
					"The SKU Dropdown is displayed : " + pageobjects.CVOS_PageObjects.skuDescriptionDropDown.getText());
			log.debug(
					"The SKU Dropdown is displayed : " + pageobjects.CVOS_PageObjects.skuDescriptionDropDown.getText());
		} else {
			log.debug("The SKU Dropdown is not displayed");
			log.debug("The SKU Dropdown is not displayed");
		}
		pageobjects.CVOS_PageObjects.skuDescriptionDropDown.click();
		log.debug("The SKU Dropdown is clicked");

		pageobjects.CVOS_PageObjects.skuIdDropDown.click();
		log.debug("The SKU ID is selected from the drop down is clicked");

		pageobjects.CVOS_PageObjects.skuInput.sendKeys(SKUID);
		log.debug("The SKU ID is entered");

		pageobjects.CVOS_PageObjects.searchButton.click();
		log.debug("The search button is clicked");

		pageobjects.CVOS_PageObjects.deviceLink.click();
		log.debug("The search button is clicked");

		String PreOrder = pageobjects.CVOS_PageObjects.preOrderStockStatus.getText();

		if (PreOrder.contains("Pre-Order")) {
			log.debug("The SKU has been set to Pre Order");
			log.debug("Stock status has been verified to be Pre Order");
		}

		else {
			log.debug("Stock status has not been set to Pre Order");
			log.debug("Stock status has not been set to Pre Order");
		}
		Screenshots.captureScreenshot();
	}

	public static void CVOSTradingAdminDDVerf(String SKUID) throws InterruptedException, IOException {

		if (pageobjects.CVOS_PageObjects.skuDescriptionDropDown.isDisplayed()) {
			log.debug(
					"The SKU Dropdown is displayed : " + pageobjects.CVOS_PageObjects.skuDescriptionDropDown.getText());
			log.debug(
					"The SKU Dropdown is displayed : " + pageobjects.CVOS_PageObjects.skuDescriptionDropDown.getText());
		} else {
			log.debug("The SKU Dropdown is not displayed");
			log.debug("The SKU Dropdown is not displayed");
		}
		pageobjects.CVOS_PageObjects.skuDescriptionDropDown.click();
		log.debug("The SKU Dropdown is clicked");

		pageobjects.CVOS_PageObjects.skuIdDropDown.click();
		log.debug("The SKU ID is selected from the drop down is clicked");

		pageobjects.CVOS_PageObjects.skuInput.sendKeys(SKUID);
		log.debug("The SKU ID is entered");

		pageobjects.CVOS_PageObjects.searchButton.click();
		log.debug("The search button is clicked");

		pageobjects.CVOS_PageObjects.deviceLink.click();
		log.debug("The search button is clicked");

		String PreOrder = pageobjects.CVOS_PageObjects.DDStockStatus.getText();

		if (PreOrder.contains("Delayed Delivery")) {
			log.debug("The SKU has been set to Delayed Delivery");
			log.debug("Stock status has been verified to be Delayed Delivery");
		}

		else {
			log.debug("Stock status has not been set to Delayed Delivery");
			log.debug("Stock status has not been set to Delayed Delivery");
		}
		Screenshots.captureScreenshot();
	}
}
