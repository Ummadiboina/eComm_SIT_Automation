package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Validuser {
    @FindBy(how= How.ID,using="manageUserPage:MyO2Template:createUser:UserManagementCreate:createUser:idUserCreateBlock:theFirstName")

    public static WebElement Firstname;
    @FindBy(how=How.ID,using="manageUserPage:MyO2Template:createUser:UserManagementCreate:createUser:idUserCreateBlock:theLastName")

    public static WebElement Lastname;
    @FindBy(how=How.ID,using="manageUserPage:MyO2Template:createUser:UserManagementCreate:createUser:idUserCreateBlock:theEmail")

    public static WebElement Emailid;
    @FindBy(how=How.ID,using="manageUserPage:MyO2Template:createUser:UserManagementCreate:createUser:idUserCreateBlock:thephone")

    public static WebElement Mbleno;
    @FindBy(how=How.ID,using="manageUserPage:MyO2Template:createUser:UserManagementCreate:createUser:idUserCreateBlock:theSaveButton")

    public static WebElement Submitbtn;
}
