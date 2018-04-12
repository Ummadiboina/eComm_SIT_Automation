package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ActivateorDeactivateusr {
    @FindBy(how=How.XPATH,using="//*[@id=\"deactiveBtn\"]")

    public static WebElement actDeactbtn;

    @FindBy(how= How.XPATH,using="//*[@id=\"manageUserPage:MyO2Template:editUser:UserManagementEdit:editForm:idSaveBtn\"]")

    public static WebElement submtbtn;

}
