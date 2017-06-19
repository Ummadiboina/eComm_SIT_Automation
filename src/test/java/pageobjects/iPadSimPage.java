package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class iPadSimPage {



@FindBy(how=How.CLASS_NAME,using="//*[@id='o2-page-wrapper']/div[1]")
public static WebElement iPadSims_Page;

@FindBy(how=How.CLASS_NAME,using="//*[@id='o2-page-wrapper']/div[2]/div[1]/div/div")
public static WebElement iPadSims_PageDescription;
                      
@FindBy(how=How.CLASS_NAME,using="//*[@id='ipad-sim-promo-m-1']/a")
public static WebElement iPadSims_TariffTile_1;

@FindBy(how=How.CLASS_NAME,using="//*[@id='ipad-sim-promo-m-2']/a")
public static WebElement iPadSims_TariffTile_2;

@FindBy(how=How.CLASS_NAME,using="//*[@id='ipad-sim-promo-m-3']/a")
public static WebElement iPadSims_TariffTile_3;

@FindBy(how=How.CLASS_NAME,using="//*[@id='ipad-sim-promo-m-4']/a")
public static WebElement iPadSims_TariffTile_4;

@FindBy(how=How.CLASS_NAME,using="//*[@id='ipad-sim-promo-s-short-1']/a")
public static WebElement iPadSims_RecycleTile;

@FindBy(how=How.CLASS_NAME,using="//*[@id='ipad-sim-promo-s-short-2']/a")
public static WebElement iPadSims_O2GuruTile;

@FindBy(how=How.CLASS_NAME,using="//*[@id='ipad-sim-promo-s-short-3']/a")
public static WebElement iPadSims_O2WifiTile;


@FindBy(how=How.CLASS_NAME,using="//*[@id='o2-page-wrapper']/div[2]/div[4]/div[1]/div")
public static WebElement iPadSims_Tarifftable;




//Pattern Promomodule_iPadsims = new Pattern("C:\\Trinity\\June 2017\\Automation\\CFD-1941\\iPadSimsPromoModule.PNG");

//Pattern Promomodule_Tabletsims = new Pattern("C:\\Trinity\\June 2017\\Automation\\CFD-1941\\TabletSimsPromoModule.PNG");

//Pattern Promomodule_Donglesims = new Pattern("C:\\Trinity\\June 2017\\Automation\\CFD-1941\\DongleSimPromoModule.PNG");

//Pattern GoToMyO2_CTA = new Pattern("C:\\Trinity\\June 2017\\Automation\\CFD-1941\\GoToMyO2CTA.PNG");

}
	

