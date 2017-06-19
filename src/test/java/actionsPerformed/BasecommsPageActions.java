package actionsPerformed;

import org.apache.log4j.Logger;

public class BasecommsPageActions
{
	
	static Logger log = Logger.getLogger("devpinoyLogger");
	
	
	
	
	public static void BasecommsPageValidations(String Tabname)	
	{
		
	System.out.println(" ");
	
	System.out.println("Basecomms page _Page_Validation");
	
	if(Tabname!=null)
	{
		switch (Tabname.toLowerCase())
		{
		case "Header_Carousal":
			if(pageobjects.BasecommsPage.HeaderCarousal.isDisplayed())
			{
		
				System.out.println("The Header Carousal is displayed on the Basecomms Page and the Text is :" + pageobjects.BasecommsPage.HeaderCarousal.getText() );
				log.debug("The Header Carousal is Present on the BasecommsPage and the Text is :" + pageobjects.BasecommsPage.HeaderCarousal.getText() );

			 }else{
			   System.out.println("The  Header Carousal is not Present on the BasecommsPage and the Text is :" + pageobjects.BasecommsPage.HeaderCarousal.getText());
			   log.debug("The  Header Carousal is not Present on the BasecommsPage and the Text is :" + pageobjects.BasecommsPage.HeaderCarousal.getText());

			 }
			
			break;
		case "Static_Sub_Nav":
			if(pageobjects.BasecommsPage.StaticSubNav.isDisplayed())
			 {
				System.out.println("The Static Sub Navigation is Present on the BasecommsPage and the Text is :" + pageobjects.BasecommsPage.StaticSubNav.getText() );
				 log.debug("The Static Sub Navigation is Present on the BasecommsPage and the Text is :" + pageobjects.BasecommsPage.StaticSubNav.getText() );
			 }else{
				  System.out.println("The Static Sub Navigation is not Present on the BasecommsPage and the Text is :" + pageobjects.BasecommsPage.StaticSubNav.getText());
				  log.debug("The Static Sub Navigation is not Present on the BasecommsPage and the Text is :" + pageobjects.BasecommsPage.StaticSubNav.getText());
			 }
			break;
		case "Sub_Banner":
			if(pageobjects.BasecommsPage.SubBanner.isDisplayed())
			 {
				System.out.println("The Sub Banner is Present on the BasecommsPage below the header Carousal and the Text is :" + pageobjects.BasecommsPage.SubBanner.getText() );
				 log.debug("The Static Sub Banner  is Present on the BasecommsPage below the header Carousal  and the Text is :" + pageobjects.BasecommsPage.SubBanner.getText() );
			 }else{
				  System.out.println("The Sub Banner is not Present on the BasecommsPage below the header Carousal e and the Text is :" + pageobjects.BasecommsPage.SubBanner.getText());
				  log.debug("The Sub Banner is not Present on the BasecommsPage below the header Carousal  and the Text is :" + pageobjects.BasecommsPage.SubBanner.getText());
			 }
			break;
		case "Footer_Banner":
			if(pageobjects.BasecommsPage.FooterBanner.isDisplayed())
			 {
				System.out.println("The Footer Banner is Present below the tariff tiles on the BasecommsPage below the header Carousal and the Text is :" + pageobjects.BasecommsPage.FooterBanner.getText() );
				 log.debug("The Footer Banner  is Present below the tariff tiles on the BasecommsPage below the header Carousal  and the Text is :" + pageobjects.BasecommsPage.FooterBanner.getText() );
			 }else{
				  System.out.println("The Sub Banner is not Present below the tariff tiles on the BasecommsPage below the header Carousal e and the Text is :" + pageobjects.BasecommsPage.FooterBanner.getText());
				  log.debug("The Footer Banner is not Present below the tariff tiles on the BasecommsPage below the header Carousal  and the Text is :" + pageobjects.BasecommsPage.FooterBanner.getText());
			 }
			break;
		
		
		
		}


}

}


	
	
	
	
}

