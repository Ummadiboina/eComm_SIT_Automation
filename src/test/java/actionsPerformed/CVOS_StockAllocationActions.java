package actionsPerformed;

import java.io.IOException;

import org.apache.log4j.Logger;

import GlobalActions.Screenshots;
import helpers.Environment;

public class CVOS_StockAllocationActions extends Environment {

	final static Logger log = Logger.getLogger("CVOS_StockAllocationActions");

	public static void CVOSSupplyTradeAllocate(String Search_by_model) throws InterruptedException, IOException {

		Thread.sleep(4000);
		pageobjects.CVOS_PageObjects.editlink.click();
		log.debug("Edit button clicked");
		log.debug("Edit button clicked");

		Thread.sleep(4000);

		pageobjects.CVOS_PageObjects.allShops.sendKeys("-50");
		log.debug("The 50 stock removed from All shop stockpot");
		log.debug("The 50 stock removed from All shop stockpot");

		Thread.sleep(4000);
		pageobjects.CVOS_PageObjects.cfaAllocation.sendKeys("5");
		log.debug("The 200 stock removed from All shop stockpot");
		log.debug("The 200 stock removed from All shop stockpot");

		Thread.sleep(4000);
		pageobjects.CVOS_PageObjects.cfaAllocation.sendKeys("5");
		log.debug("The 50 stock allocated to CFA_Device_Highlights_Display_When_Technical_Specification_Available_For_Device stockpot");
		log.debug("The 50 stock allocated to CFA_Device_Highlights_Display_When_Technical_Specification_Available_For_Device stockpot");

		Thread.sleep(4000);
		pageobjects.CVOS_PageObjects.cfuAllocation.sendKeys("5");
		log.debug("The 50 stock allocated to CFU stockpot");
		log.debug("The 50 stock allocated to CFU stockpot");

		Thread.sleep(4000);
		pageobjects.CVOS_PageObjects.afaAllocation.sendKeys("5");
		log.debug("The 50 stock allocated to AFA stockpot");
		log.debug("The 50 stock allocated to AFA stockpot");

		Thread.sleep(4000);
		pageobjects.CVOS_PageObjects.afuAllocation.sendKeys("5");
		log.debug("The 50 stock allocated to AFU stockpot");
		log.debug("The 50 stock allocated to AFU stockpot");

		Thread.sleep(4000);
		pageobjects.CVOS_PageObjects.saveAllocation.click();
		log.debug("The Save button is Clicked to confirm allocation");
		log.debug("The Save button is Clicked to confirm allocation");

		Thread.sleep(3000);
		pageobjects.CVOS_PageObjects.stockpotTab.click();
		log.debug("The Stockpot Tab is Clicked to confirm allocation");
		log.debug("The Stockpot Tab is Clicked to confirm allocation");
		Screenshots.captureScreenshot();

	}

}
