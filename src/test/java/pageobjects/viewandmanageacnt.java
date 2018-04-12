package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class viewandmanageacnt {
    @FindBy(how= How.ID,using="myAccount")

    public static WebElement Myaccntlnk;

    @FindBy(how=How.ID,using="popup-shop-down-button")

    public static WebElement sugstlnk;

}

