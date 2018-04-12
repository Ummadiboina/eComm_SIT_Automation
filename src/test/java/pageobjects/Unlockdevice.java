package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Unlockdevice {


    @FindBy(how= How.XPATH,using="//*[@id=\"ContractDates\"]/a")

    public static WebElement unlocklnk;


}
