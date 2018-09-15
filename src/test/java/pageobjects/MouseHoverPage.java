package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import helpers.Environment;

public class MouseHoverPage extends Environment {

	// Below will click on the Header Just to move mouse
	@FindBy(how = How.ID, using = ("shop-simplicity-header-xxl"))
	public static WebElement MoveMouseOnShopHeader;

	@FindBy(how = How.XPATH, using = ("//div[@class='nav-consumer']/ul/li/a[contains(@href, '/shop')]"))
	public static WebElement MoveMouseOnShopTab;

	@FindBy(how = How.XPATH, using = ("//div[@class='navContainer']/ul/li[@name='Shop']/a[contains(@href,'/shop')] | //div[@class='navContainer']/div/ul/li[@name='Shop']/a[contains(@href,'/shop')]"))
	public static WebElement MoveMouseOnShopTab_Drupal;

	@FindBy(how = How.XPATH, using = ("(//li[contains(@class,'tier-menu-wrapper')]//li/a[text()='Upgrades'])[1]"))
	public static WebElement MouseMoveonUpgrade_Drupal;

	@FindBy(how = How.XPATH, using = ("//li[contains(@class,'tier-menu-wrapper')]//li/a[text()='iPad']"))
	public static WebElement MoveMouseOniPad_Drupal;

	// Below will click on the Phones Link
	@FindBy(how = How.XPATH, using = ("//li[@class='has-submenu']//a[normalize-space()='Phones']"))
	public static WebElement MoveMouseOnPhones;

	@FindBy(how = How.XPATH, using = ("//li[contains(@class,'tier-menu-wrapper')]//li/a[text()='Browse phones']"))
	public static WebElement MoveMouseOnPhones_Drupal;

	@FindBy(how = How.XPATH, using = ("//a[normalize-space()='Pay As You Go']"))
	public static WebElement PayGPhones_Drupal;



	@FindBy(how = How.XPATH, using = ("//li[contains(@class,'tier-menu-wrapper')]//li/a[text()='Browse sims']"))
	public static WebElement MoveMouseOnSimo_Drupal;

	@FindBy(how = How.XPATH, using = ("//h3[normalize-space()='Pay Monthly sims']"))
	public static WebElement Sims_paym_Drupal;



	@FindBy(how = How.XPATH, using = ("//li/a[normalize-space()='Pay Monthly phones']"))
	public static WebElement MoveMouseOnPAYMPhones;

	//@FindBy(how = How.XPATH, using = ("//a[contains(text(), 'Pay As You Go phones')]"))
	@FindBy(how = How.XPATH, using = ("//a[contains(text(), 'Pay as you go phones')] | //a[contains(text(), 'Pay As You Go phones')]"))
	public static WebElement MoveMouseOnPAYGPhones;

	@FindBy(how = How.XPATH, using = ("//a[contains(@manual_cm_re, 'meganav_Shop-_-Tablets-_-iPad')]"))
	public static WebElement MoveMouseOniPad;

	// Below will click on the Phone -- > Like New
	@FindBy(how = How.XPATH, using = ("//a[contains(@text(), 'Like New')]"))
	public static WebElement MoveMouseOnLikeNew;

	// Below will click on the Sims
	// @FindBy(how = How.XPATH, using = ("//*[@id='pn1']/ul/li/a[contains(text(),
	// 'Sims')]"))
	@FindBy(how = How.XPATH, using = ("//li[@class='has-submenu']//a[normalize-space()='Sims']"))
	public static WebElement MoveMouseOnSims;

	@FindBy(how = How.XPATH, using = ("//li[contains(@class,'tier-menu-wrapper')]//li/a[text()='Pay Monthly sims']"))
	public static WebElement MoveMouseOnSims_paym_Drupal;

	@FindBy(how = How.XPATH, using = ("//li[contains(@class,'tier-menu-wrapper')]//a[normalize-space()='Pay As You Go sims' or normalize-space()='Browse sims']"))
	public static WebElement MoveMouseOnSims_Drupal;

	// Below will click on the Sims -- > Ipad
	// @FindBy(how = How.XPATH, using = ("//a[contains(text(), 'iPad Sims')][1]"))
	@FindBy(how = How.XPATH, using = ("//a[contains(@href, 'http://www.o2.co.uk/broadband/ipad-sim')]"))
	public static WebElement MoveMouseOnIpadSims;

	// Below will click on the Sims -- > Tablet
	// @FindBy(how = How.XPATH, using = ("//a[contains(text(), 'Tablet Sim')]"))
	@FindBy(how = How.XPATH, using = ("//a[contains(@href, 'http://www.o2.co.uk/tablet-sims')]"))
	public static WebElement MoveMouseOnTabletSims;

	// Below will click on the Sims -- > PayM
	// @FindBy(how = How.XPATH, using = ("//a[contains(text(), 'Pay Monthly
	// Sims')]"))

	@FindBy(how = How.XPATH, using = ("//a[contains(text(),'Pay Monthly sims')]|//a[contains(text(),'Pay Monthly Sims')]"))
	public static WebElement MoveMouseOnPayMSims;

	@FindBy(how = How.XPATH, using = ("(//a[normalize-space()='Upgrades'])[1]"))
	public static WebElement MouseMoveonUpgrade;

	/*
	 * @FindBy(how = How.XPATH, using = ("//a[contains(text(), 'Upgrade now')]"))
	 * public static WebElement MouseMoveonUpgradeAndUpgradeNow;
	 */

	//// a[@manual_cm_re='meganav_Shop-_-Upgrades-_-Upgrade Now']
	@FindBy(how = How.XPATH, using = ("(//a[normalize-space()='Upgrade now'])[1]"))
	public static WebElement MouseMoveonUpgradeAndUpgradeNow;

	// Below will click on the Tablets Tab

	@FindBy(how = How.XPATH, using = ("//a[contains(text(), 'Browse Tablets')]"))
	public static WebElement MoveMouseOnBrowseTablets;

	@FindBy(how = How.XPATH, using = ("//li[contains(@class,'tier-menu-wrapper')]//li/a[text()='Browse tablets']"))
	public static WebElement MoveMouseOnBrowseTablets_Drupal;

	@FindBy(how = How.XPATH, using = ("//a[normalize-space()='Pay As You Go']"))
	public static WebElement PayGBrowseTablets_Drupal;



	@FindBy(how = How.XPATH, using = ("(//a[contains(text(), 'Tablets')])[1]"))
	public static WebElement MoveMouseOnTablets;

	// Below is the link on the Accessory
	@FindBy(how = How.XPATH, using = ("(//a[normalize-space(.)='Accessories'])[1]"))
	public static WebElement MoveMouseOnAccessoriesTab;

	@FindBy(how = How.XPATH, using = ("//ul[@name='Shop']//span[normalize-space()='Accessories and more']"))
	public static WebElement MoveMouseOnAccessoriesAndMoreTab;

	@FindBy(how = How.XPATH, using = ("//li[contains(@class,'tier-menu-wrapper')]//a[normalize-space()='Browse accessories']"))
	public static WebElement MoveMouseOnAccessoriesAndMoreTab_Drupal;

	@FindBy(how = How.XPATH, using = ("//a[normalize-space(.)='All accessories']"))
	public static WebElement MoveMouseOnAllAccessories;

	// Below is the link on the Smart Tech

	// @FindBy(how = How.XPATH, using = "//a[contains(@href,
	// 'https://www.ref.o2.co.uk/shop/smart-tech/')]")
	// @FindBy(how = How.XPATH, using = ("//*[@id='pn1']/ul/li[10]/a"))
	// @FindBy(how = How.XPATH, using = ("//a[contains(text(), 'Smart Tech')]"))
	@FindBy(how = How.XPATH, using = ("//a[contains(@href, '/shop/smart-tech')]"))
	public static WebElement MoveMouseOnSmarttechTab;

	@FindBy(how = How.XPATH, using = ("//h3[normalize-space()='More fitness trackers']/following-sibling::p[@class='product-cta']"))
	public static WebElement moreSmrtWatches;

	@FindBy(how = How.XPATH, using = ("//li[contains(@class,'tier-menu-wrapper')]//li/a[text()='Browse smart tech']"))
	public static WebElement MoveMouseOnSmarttechTab_gdpr;

	// Below is the link on the Smartwatches
	@FindBy(how = How.XPATH, using = ("//a[contains(text(), 'Smartwatches')]"))
	public static WebElement MoveMouseOnSmartwatches;

	@FindBy(how = How.XPATH, using = ("//li[contains(@class,'tier-menu-wrapper')]//a[normalize-space()='Browse smart tech']"))
	public static WebElement MoveMouseOnSmarttechTab_Drupal;

	@FindBy(how = How.XPATH, using = ("//h3[normalize-space()='Smartwatches']//following-sibling::p[normalize-space()='See the range']"))
	public static WebElement MoveMouseOnSmarttechWatches_Drupal;

	@FindBy(how = How.XPATH, using = ("//h3[contains(text(), 'Fitness trackers')]"))
	public static WebElement MoveMouseOnFitnessTrackers_Drupal;


	// Below is the link on the Fitness

	// @FindBy(how = How.XPATH, using = ("//a[contains(text(), 'Fitness
	// Trackers')]"))

	@FindBy(how = How.XPATH, using = ("//a[contains(@href, '/shop/fitness-trackers')]"))
	public static WebElement MoveMouseOnFitnessTrackers;

	// Below will click on the MobileBroadband Link in Shop Drop down
	@FindBy(how = How.XPATH, using = ("//a[contains(text(), 'Mobile broadband')]"))
	public static WebElement MoveMouseOnMobileBroadband;

	@FindBy(how = How.XPATH, using = ("//a[normalize-space()='Pay As You Go']"))
	public static WebElement PayGMobileBroadband;

	@FindBy(how = How.XPATH, using = ("//li[contains(@class,'tier-menu-wrapper')]//li/a[text()='Browse dongles']"))
	public static WebElement MoveMouseOnMobileBroadband_Drupal;

	// Below will click on the Pay as you Go Link under MobileBroadband tab
	/*
	 * @FindBy(how = How.XPATH, using = ("//a[contains(text(), 'Pay As You Go')]"))
	 * public static WebElement MoveMouseOnPayGMBB;
	 */
	@FindBy(how = How.XPATH, using = ("//*[@manual_cm_re='meganav_Shop-_-Mobile broadband-_-Pay As you Go']"))
	public static WebElement MoveMouseOnPayGMBB;

	// @FindBy(how = How.XPATH, using = ("//a[contains(@href,
	// 'https://www.o2.co.uk/shop/mobile-broadband/?contractType=paymonthly')]"))

	@FindBy(how = How.XPATH, using = ("//*[@manual_cm_re='meganav_Shop-_-Mobile broadband-_-Pay monthly']"))
	public static WebElement MoveMouseOnPayMMBB;
	// a[@href='https://www.o2.co.uk/shop/mobile-broadband/?contractType=paymonthly']
	// Below will click on the Sims
	// @FindBy(how = How.XPATH, using = ("//a[contains(text(), 'iPad Sims')][1]"))
	@FindBy(how = How.XPATH, using = ("//a[contains(@href, '/shop/sim-cards')]"))
	public static WebElement MouseOnSims;

	/*@FindBy(how = How.XPATH, using = ("(//a[normalize-space()='Pay As You Go sims'])[1]"))
	public static WebElement MouseOnSims_Drupal;*/

	// Below will click on the Sims -- > PayG

	// @FindBy(how = How.XPATH, using =
	// ("//a[@manual_cm_re='meganav_Shop-_-Sims-_-Pay & Go sims']"))
	@FindBy(how = How.XPATH, using = ("//*[normalize-space()='Pay As You Go sims'] | //a[contains(text(), 'Pay As You Go sims')]"))
	public static WebElement MoveMouseOnPayGSims;



	@FindBy(how = How.XPATH, using = ("//li[contains(@class,'tier-menu-wrapper')]//li/a[text()='Pay As You Go sims'] | //li[contains(@class,'tier-menu-wrapper')]//li/a[text()='Browse sims']"))
	public static WebElement MoveMouseOnPayGSims_Drupal;

	// @FindBy(how = How.XPATH, using = ("//a[contains(text(), 'Pay As You Go
	// sims')]"))
	@FindBy(how = How.XPATH, using = ("//a[@manual_cm_re='meganav_Shop-_-Sims-_-Pay as you go sims'] | //a[@manual_cm_re='meganav_Shop-_-Sims-_-Pay & Go sims']"))
	public static WebElement MoveMouseOnPayGSimo;

	//Below will click on the PAYG Tablets link
	@FindBy(how = How.XPATH, using = ("//li/a[normalize-space()='Pay As You Go']"))
	public static WebElement MoveMouseonPayGTablets;
	//a[@manual_cm_re='meganav_Shop-_-Tablets-_-Pay and Go']


	//Below will click on the Shop link in the droopal page
	@FindBy(how = How.XPATH, using = ("//li[@name='Shop']"))
	public static WebElement MoveMouseonShopDroopal;

	//Below will click on the Pay Monthly Sims link in the droopal page
	@FindBy(how = How.XPATH, using = ("//a[@data-parent='Shop' and text()='Pay Monthly sims']"))
	public static WebElement MoveMouseonPayMSimsDroopal;



}
