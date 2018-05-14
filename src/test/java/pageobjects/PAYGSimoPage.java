package pageobjects;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class PAYGSimoPage {

    //Classic Pay As You Go tab
    @FindBy(how=How.XPATH,using=("//li[@data-qa-sub-tab-name='Big Bundles']"))
    public static WebElement bigBundlesTab;

    //Classic Pay As You Go tab
    @FindBy(how=How.XPATH,using=("//li[@data-qa-sub-tab-name='Classic Pay As You Go']"))
    public static WebElement classicPayAsYouGoTab;

    //International tab
    @FindBy(how=How.XPATH,using=("//li[@data-qa-sub-tab-name='International']"))
    public static WebElement internationalTab;

}