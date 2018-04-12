package actionsPerformed;

import GlobalActions.Screenshots;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;
import pageobjects.Validuser;

import java.io.IOException;

import static helpers.Environment.driver;

public class Validuser_pageactions {

    final static Logger log = Logger.getLogger("Select a valid user pageactions");
    static JavascriptExecutor js = (JavascriptExecutor) driver;
    public static void myacntlink(String fstname,String lastname, String email,String mble) throws InterruptedException, IOException

    {
        PageFactory.initElements(driver, Validuser.class);
        Validuser.Firstname.sendKeys(fstname);
        Validuser.Lastname.sendKeys(lastname);
        Validuser.Emailid.sendKeys(email);
        Validuser.Mbleno.sendKeys(mble);
        Validuser.Submitbtn.click();
        Thread.sleep(5000);
        Screenshots.captureScreenshot();
        log.debug("Valid user is selected :");



    }
}
