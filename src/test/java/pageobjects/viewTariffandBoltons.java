package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class viewTariffandBoltons {
    @FindBy(how= How.XPATH,using="//*[@id=\"Tariff\"]/a")
    //*[@id="Tariff"]/a
    public static WebElement viewTariffandBolt;
}

