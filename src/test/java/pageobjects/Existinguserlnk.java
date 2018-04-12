package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Existinguserlnk {
    @FindBy(how=How.XPATH,using="//*[@id=\"manageUserPage:MyO2Template:editUser:UserManagementEdit:editForm:idSubmitSearch\"]")

    public static WebElement searchlnk;
}
