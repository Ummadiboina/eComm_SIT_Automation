package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ViewContractDate {
    @FindBy(how= How.XPATH,using="//*[@id=\"ContractDates\"]/a")

    public static WebElement contactdatelnk;
}
