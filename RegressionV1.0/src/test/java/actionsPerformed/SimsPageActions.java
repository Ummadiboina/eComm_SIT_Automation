package actionsPerformed;

import helpers.Environment;
import org.apache.log4j.Logger;

public class SimsPageActions extends Environment{
	
	static Logger log = Logger.getLogger("devpinoyLogger");
	

	public static void SelectRandomIpadSim() throws InterruptedException {
			
			System.out.println("Selecting Any Ipad Sim");
			log.debug("Selecting Any Ipad Sim");
			log.debug("Selected an IpadSim -  "+pageobjects.SimsPage.IpadPromo1.getText());
			pageobjects.SimsPage.IpadPromo1.click();
			log.debug("Clicked on 1st tile in Ipad sims page");
			Thread.sleep(2000);

		}

	public static void SelectRandomTabletSim() throws InterruptedException {
		
		System.out.println("Selecting Any Tablet Sim");
		log.debug("Selecting Any Tablet Sim");
		log.debug("Selected an Tablet Sim -  "+pageobjects.SimsPage.TabletPromo1.getText());
		pageobjects.SimsPage.TabletPromo1.click();
		log.debug("Clicked on 1st tile in Tablet sims page");
		Thread.sleep(2000);

	}
		
	
}

