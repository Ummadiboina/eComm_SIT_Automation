package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class o2idloginpage {
    @FindBy(how= How.ID,using="username")

    public static WebElement username;

    @FindBy(how=How.ID,using="modalClose")

    public static WebElement alertclose;

    @FindBy(how=How.ID,using="password")

    public static WebElement password;

    @FindBy(how=How.ID,using="signInButton")

    public static WebElement Loginbtn;
}
