package actionsPerformed;

import org.apache.log4j.Logger;

import helpers.Environment;

public class CVOS_StockMerchandiseActions extends Environment {
	
	static Logger log = Logger.getLogger("devpinoyLogger");
	
public static void CVOSSupplyChainStockMerch(String Search_by_model) throws InterruptedException {
		
		if (pageobjects.CVOS_PageObjects.searchByModel.isDisplayed()) {
			System.out.println("The Search by model textbox is displayed");
			log.debug("The Search by model textbox is displayed");
		} else
			System.out.println("The Search by model textbox is not displayed");
		log.debug("The Search by model textbox is not displayed");
		
		pageobjects.CVOS_PageObjects.skuInput.sendKeys(Search_by_model);
		log.debug("The model description is entered");
		
		pageobjects.CVOS_PageObjects.stockMerchSearch.click();
		log.debug("The Stock Merchandise Search button is clicked");
		
		pageobjects.CVOS_PageObjects.checkBoxDevice.click();
		log.debug("The Check box for Launch date is clicked");
		
		pageobjects.CVOS_PageObjects.dateForLaunchDate.click();
		log.debug("The Calendar option for Launch date is clicked");
		
		pageobjects.CVOS_PageObjects.launchDateToFuture.click();
		log.debug("The forward arrow is clicked to move the launch date to a future date");
		
		pageobjects.CVOS_PageObjects.launchDateToFuture.click();
		log.debug("The forward arrow is clicked to move the launch date to a future date");
		
		pageobjects.CVOS_PageObjects.launchDateToFuture.click();
		log.debug("The forward arrow is clicked to move the launch date to a future date");
		
		pageobjects.CVOS_PageObjects.launchDate.click();
		log.debug("The launch date is selected");
		
		pageobjects.CVOS_PageObjects.applyLaunchDateButton.click();
		log.debug("The Apply button to set the launch date is selected");
		
		Thread.sleep(5000);
		
		pageobjects.CVOS_PageObjects.checkBoxDevice.click();
		log.debug("The Check box for Launch date is clicked");
		
		pageobjects.CVOS_PageObjects.checkBoxDevice.click();
		log.debug("The Check box for Launch date is clicked");
		
		//Pre Order Message
		pageobjects.CVOS_PageObjects.preOrderextendedtextbox.sendKeys("Coming Soon!");
		log.debug("The Pre Order message is entered is entered");
		
}

public static void CVOSSupplyChainStockMerchDD(String Search_by_model) throws InterruptedException {
	
	if (pageobjects.CVOS_PageObjects.searchByModel.isDisplayed()) {
		System.out.println("The Search by model textbox is displayed");
		log.debug("The Search by model textbox is displayed");
	} else
		System.out.println("The Search by model textbox is not displayed");
	log.debug("The Search by model textbox is not displayed");
	
	pageobjects.CVOS_PageObjects.skuInput.sendKeys(Search_by_model);
	log.debug("The model description is entered");
	
	pageobjects.CVOS_PageObjects.stockMerchSearch.click();
	log.debug("The Stock Merchandise Search button is clicked");
	
	pageobjects.CVOS_PageObjects.checkBoxDevice.click();
	log.debug("The Check box for Launch date is clicked");
	
	pageobjects.CVOS_PageObjects.dateForLaunchDate.click();
	log.debug("The Calendar option for Launch date is clicked");
	
	pageobjects.CVOS_PageObjects.launchDateToPast.click();
	log.debug("The forward arrow is clicked to move the launch date to a future date");
	
	pageobjects.CVOS_PageObjects.launchDateToPast.click();
	log.debug("The forward arrow is clicked to move the launch date to a future date");
	
	pageobjects.CVOS_PageObjects.launchDateToPast.click();
	log.debug("The forward arrow is clicked to move the launch date to a future date");
	
	pageobjects.CVOS_PageObjects.launchDateToPast.click();
	log.debug("The forward arrow is clicked to move the launch date to a future date");
	
	pageobjects.CVOS_PageObjects.launchDateToPast.click();
	log.debug("The forward arrow is clicked to move the launch date to a future date");
	
	pageobjects.CVOS_PageObjects.launchDate.click();
	log.debug("The launch date is selected");
	
	pageobjects.CVOS_PageObjects.applyLaunchDateButton.click();
	log.debug("The Apply button to set the launch date is selected");
	
	Thread.sleep(5000);
	
	pageobjects.CVOS_PageObjects.checkBoxDevice.click();
	log.debug("The Check box for Launch date is clicked");
	
	pageobjects.CVOS_PageObjects.checkBoxDevice.click();
	log.debug("The Check box for Launch date is clicked");
	
	//Pre Order Message
	pageobjects.CVOS_PageObjects.preOrderextendedtextbox.sendKeys("Coming Soon!");
	log.debug("The Pre Order message is entered is entered");


}


public static void CVOSSupplyChainlogout() throws InterruptedException {
		
	pageobjects.CVOS_PageObjects.logOut.click();
		log.debug("The Logout button is clicked");
}

}
