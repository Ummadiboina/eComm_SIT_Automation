package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Selecvaliduser {

    @FindBy(how= How.XPATH,using="//*[@id=\"manageUserPage:MyO2Template:editUser:UserManagementEdit:editForm:idSubmitSearch\"]")

    public static WebElement searchbtn;

    @FindBy(how=How.XPATH,using="//*[@id=\"manageUserPage:MyO2Template:editUser:UserManagementEdit:editForm:idEditUserList:0:idClickEdit\"]")

    public static WebElement userlnk;
}
