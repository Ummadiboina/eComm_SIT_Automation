package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SeeDetails {
    @FindBy(how= How.ID,using="smbSearchPageId:MyO2Template:subscriptionSelection:idTableBody:0:idContinue")

    public static WebElement seedetails_link;
}
