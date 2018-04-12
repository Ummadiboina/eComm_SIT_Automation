package actionsPerformed;

import GlobalActions.Screenshots;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.PageFactory;
import pageobjects.viewTariffandBoltons;

import java.io.IOException;

import static helpers.Environment.driver;

public class viewTariffandBoltons_pageactions {

    final static Logger log = Logger.getLogger("View and Tariff Boltons pageactions");

    static JavascriptExecutor js = (JavascriptExecutor) driver;

    public static void updatenameandcost() throws InterruptedException, IOException

    {
        PageFactory.initElements(driver, viewTariffandBoltons.class);//check this
        viewTariffandBoltons.viewTariffandBolt.click();
        Thread.sleep(5000);
        Screenshots.captureScreenshot();
        log.debug("User can view tariff and boltons");
    }

}
