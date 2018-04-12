package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class updatenameandcost {
    @FindBy(how= How.XPATH,using="//*[@id=\"UpdateCostCenter\"]/a")

    public static WebElement updatenameandcost_lnk;
}
