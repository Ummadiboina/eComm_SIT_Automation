package actionsPerformed;

import helpers.Environment;
import org.apache.log4j.Logger;

public class Agent_HomePagePageActions extends Environment{
	
	static Logger log = Logger.getLogger("devpinoyLogger");
	
	
//this  method used to perform click action on the Agent Home Page	
	
	public static void ElementClickAction(String elementname) {
		// TODO Auto-generated method stub
	
		System.out.println("Agent_Home_Page_Action");
		log.debug("Agent Home Page validation");
		
		if(elementname!=null)
		{
			switch (elementname.toLowerCase())
			{
			case "NewCustomer":
				pageobjects.Agent_HomePage.NewCustomer.click();
				break;
						
			}
	
		}
	}
	
	
	
}

