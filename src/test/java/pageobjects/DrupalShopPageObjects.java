package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DrupalShopPageObjects {

    @FindBy(how = How.XPATH, using = "//ul[@class='admin-list']/li[2]/a/span[normalize-space()='Tariffs']")
    public static WebElement shopTariffLink;

    @FindBy(how = How.XPATH, using = "//ul[@class='admin-list']/li[1]/a/span[normalize-space()='Campaigns']")
    public static WebElement shopCampaignsLink;

    @FindBy(how = How.XPATH, using = "//select[@id='brand-list-element']")
    public static WebElement tariffBrand;

    @FindBy(how = How.XPATH, using = "//select[@id='model-list-element']")
    public static WebElement tariffModel;

    @FindBy(how = How.XPATH, using = "//select[@id='variantListID']")
    public static WebElement tariffVariant;

    @FindBy(how = How.XPATH, using = "//input[@id='get-normal-acq-tariffs']")
    public static WebElement GETCFATariffCTA;

    @FindBy(how = How.XPATH, using = "//input[@id='get-upgrade-tariffs']")
    public static WebElement GETCFUTariffCTA;

    @FindBy(how = How.XPATH, using = "//input[@id='get-basecomms-acq-tariffs']")
    public static WebElement GETBasecommsTariffCTA;

    @FindBy(how = How.XPATH, using = "//input[@id='get-normal-acq-tariffs']")
    public static WebElement GETTariffCTA;

    @FindBy(how = How.XPATH, using = "//input[@id='update-tariff-data']")
    public static WebElement saveTariffCTA;

    @FindBy(how = How.XPATH, using = "(//table[@id='modelListTable']/tfoot/tr/td/select)[1]")
    public static WebElement tariffDataFilter;

}
