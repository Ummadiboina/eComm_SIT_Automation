package actionsPerformed;

import org.apache.log4j.Logger;

import helpers.Environment;

public class CVOS_StockAllocationActions extends Environment {
	
	static Logger log = Logger.getLogger("devpinoyLogger");
	
	public static void CVOSSupplyTradeAllocate(String Search_by_model) throws InterruptedException {
	
		pageobjects.CVOS_PageObjects.cfaAllocation.sendKeys("-200");
	log.debug("The 200 stock removed from All shop stockpot");
	
	pageobjects.CVOS_PageObjects.cfaAllocation.sendKeys("50");
	log.debug("The 50 stock allocated to CFA stockpot");
	
	pageobjects.CVOS_PageObjects.cfuAllocation.sendKeys("50");
	log.debug("The 50 stock allocated to CFU stockpot");
	
	pageobjects.CVOS_PageObjects.afaAllocation.sendKeys("50");
	log.debug("The 50 stock allocated to AFA stockpot");
	
	pageobjects.CVOS_PageObjects.afuAllocation.sendKeys("50");
	log.debug("The 50 stock allocated to AFU stockpot");
	  
	pageobjects.CVOS_PageObjects.saveAllocation.click();
	log.debug("The Save button is Clicked to confirm allocation");
	
	Thread.sleep(3000);
	
	pageobjects.CVOS_PageObjects.stockpotTab.click();
	log.debug("The Stockpot Tab is Clicked to confirm allocation");
	
	

}
	
}
