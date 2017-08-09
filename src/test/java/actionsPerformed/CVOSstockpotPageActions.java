package actionsPerformed;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import helpers.Environment;

public class CVOSstockpotPageActions extends Environment {

	static Logger log = Logger.getLogger("devpinoyLogger");

	public static void CVOSSupplyChainAct(String SKUID) throws InterruptedException {

		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
		/*
		 * if
		 * (pageobjects.CVOS_PageObjects.skuDescriptionDropDown.isDisplayed()) {
		 * System.out.println( "The SKU Dropdown is displayed : " +
		 * pageobjects.CVOS_PageObjects.skuDescriptionDropDown.getText());
		 * log.debug( "The SKU Dropdown is displayed : " +
		 * pageobjects.CVOS_PageObjects.skuDescriptionDropDown.getText());
		 * 
		 * System.out.println( "The SKU Dropdown is displayed : " +
		 * pageobjects.CVOS_PageObjects.skuDescriptionDropDown.getText());
		 * 
		 * } else System.out.println("The SKU Dropdown is not displayed");
		 * log.debug("The SKU Dropdown is not displayed");
		 * System.out.println("The SKU Dropdown is not displayed");
		 */

		Select dropdown = new Select(pageobjects.CVOS_PageObjects.skuDescriptionDropDown);
		dropdown.selectByValue("SKUID");
		log.debug("The SKUID is Selected");
		System.out.println("The SKUID is Selected");

		/*
		 * pageobjects.CVOS_PageObjects.skuDescriptionDropDown.click();
		 * log.debug("The SKU Dropdown is clicked");
		 * System.out.println("The SKU Dropdown is clicked");
		 * 
		 * pageobjects.CVOS_PageObjects.skuIdDropDown.click();
		 * log.debug("The SKU ID is selected from the drop down is clicked");
		 * System.out.
		 * println("The SKU ID is selected from the drop down is clicked");
		 */

		pageobjects.CVOS_PageObjects.skuInput.sendKeys(SKUID);
		log.debug("The SKU ID entered is " + SKUID);
		System.out.println("The SKU ID is entered" + SKUID);

	}

	public static void CVOSSupplyChainSearch() throws InterruptedException {

		pageobjects.CVOS_PageObjects.searchButton.click();
		log.debug("The search button is clicked");
		System.out.println("The search button is clicked");
	}

	public static void CVOSSupplyChainStockPot() throws InterruptedException {
		System.out.println("pageobjects.CVOS_PageObjects.onlineStockpot.getText()");
		if (pageobjects.CVOS_PageObjects.onlineStockpot.isDisplayed()) {
			System.out.println(
					"The Online stockpot is displayed : " + pageobjects.CVOS_PageObjects.onlineStockpot.getText());
			log.debug("The Online stockpot is displayed : " + pageobjects.CVOS_PageObjects.onlineStockpot.getText());
		} else
			System.out.println("The Online stockpot is not displayed");
		log.debug("The Online stockpot is not displayed");

		if (pageobjects.CVOS_PageObjects.allShopStockpot.isDisplayed()) {
			System.out.println(
					"The All Shops stockpot is displayed : " + pageobjects.CVOS_PageObjects.allShopStockpot.getText());
			log.debug(
					"The All Shops stockpot is displayed : " + pageobjects.CVOS_PageObjects.allShopStockpot.getText());
		} else
			System.out.println("The All Shops stockpot is not displayed");
		log.debug("The All Shops stockpot is not displayed");

	}

	public static void CVOSSupplyChainMoveDelivery() throws InterruptedException {

		
		pageobjects.CVOS_PageObjects.onlineStockpot.click();
		log.debug("The Online Stockpot tab is clicked");
		System.out.println("The Online Stockpot tab is clicked");

		Thread.sleep(3000);

		pageobjects.CVOS_PageObjects.toMoveDeliverydate.click();
		log.debug("The Move Delivery Option is clicked");
		System.out.println("The Move Delivery Option is clicked");
		
		Thread.sleep(3000);
		pageobjects.CVOS_PageObjects.toMoveDate.click();
		log.debug("The Move to next month Option is clicked");
		System.out.println("The Move to next month Option is clicked");
		
		Thread.sleep(5000);
			   
		pageobjects.CVOS_PageObjects.deliverySelectDate.click();
		
		log.debug("The Delivery date is selected");
		System.out.println("The Delivery date is selected");
		
		Thread.sleep(5000);

		pageobjects.CVOS_PageObjects.deliveryDateApply.click();
		log.debug("The Delivery date Apply button is Clicked");
		System.out.println("The Delivery date Apply button is Clicked");
		
		Thread.sleep(5000);

		pageobjects.CVOS_PageObjects.confirmDeliveryDate.click();
		log.debug("The Confirm button is Clicked");
		System.out.println("The Confirm button is Clicked");

		Thread.sleep(5000);

	}

	public static void CVOSSupplyChainStockMerchandise() throws InterruptedException {

		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		Thread.sleep(8000);
		pageobjects.CVOS_PageObjects.stockMerchandiseTab.click();
		log.debug("The Stock Merchandise tab is clicked");
		System.out.println("The Stock Merchandise tab is clicked");
	}

	public static void CVOSTradingAdminAct(String SKUID) throws InterruptedException {

		Select dropdown = new Select(pageobjects.CVOS_PageObjects.skuDescriptionDropDown);
		dropdown.selectByValue("SKUID");
		log.debug("The SKUID is Selected");
		System.out.println("The SKUID is Selected");
		

		pageobjects.CVOS_PageObjects.skuInput.sendKeys(SKUID);
		log.debug("The SKU ID is entered");
		System.out.println("The SKU ID is entered");
				
		pageobjects.CVOS_PageObjects.searchButton.click();
		log.debug("The search button is clicked");
		System.out.println("The search button is clicked");
		
		Thread.sleep(4000);;
		pageobjects.CVOS_PageObjects.deviceLink.click();
		log.debug("The Device link for all shops is clicked");
		System.out.println("The Device link for all shops is clicked");
		
	}

	public static void CVOSTradingAdminPreOrderVerf(String SKUID) throws InterruptedException {

		if (pageobjects.CVOS_PageObjects.skuDescriptionDropDown.isDisplayed()) {
			System.out.println(
					"The SKU Dropdown is displayed : " + pageobjects.CVOS_PageObjects.skuDescriptionDropDown.getText());
			log.debug(
					"The SKU Dropdown is displayed : " + pageobjects.CVOS_PageObjects.skuDescriptionDropDown.getText());
		} else {
			System.out.println("The SKU Dropdown is not displayed");
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
			System.out.println("The SKU has been set to Pre Order");
			log.debug("Stock status has been verified to be Pre Order");
		}

		else {
			System.out.println("Stock status has not been set to Pre Order");
			log.debug("Stock status has not been set to Pre Order");
		}
	}

	public static void CVOSTradingAdminDDVerf(String SKUID) throws InterruptedException {

		if (pageobjects.CVOS_PageObjects.skuDescriptionDropDown.isDisplayed()) {
			System.out.println(
					"The SKU Dropdown is displayed : " + pageobjects.CVOS_PageObjects.skuDescriptionDropDown.getText());
			log.debug(
					"The SKU Dropdown is displayed : " + pageobjects.CVOS_PageObjects.skuDescriptionDropDown.getText());
		} else {
			System.out.println("The SKU Dropdown is not displayed");
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
			System.out.println("The SKU has been set to Delayed Delivery");
			log.debug("Stock status has been verified to be Delayed Delivery");
		}

		else {
			System.out.println("Stock status has not been set to Delayed Delivery");
			log.debug("Stock status has not been set to Delayed Delivery");
		}
	}
}
