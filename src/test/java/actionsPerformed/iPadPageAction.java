package actionsPerformed;

import java.io.IOException;

import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;


import GlobalActions.Screenshots;
import helpers.Environment;

public class iPadPageAction extends Environment {
    final static Logger log = Logger.getLogger("iPadPageActions");

    public static void validateiPadElements(String elementName) throws IOException, InterruptedException {

        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,150)", "");
        if (elementName.contains("RandomIpadDevice")) {
            log.debug("Random iPad is selected");
            pageobjects.iPadPage.RandomIpadDevice.click();
            Thread.sleep(7000);
            log.debug("Random iPad is selected");
        }

        if (elementName.contains("IPadPro12point9")) {
            log.debug("IPad Pro 12.9 is selected");

            pageobjects.iPadPage.IPadPro12point9.click();
            Thread.sleep(7000);

            log.debug("IPad Pro 12.9 is selected");
        }
        if (elementName.contains("Apple iPad Pro 9.7")) {
            pageobjects.iPadPage.IPadPro9point7.click();
            Thread.sleep(10000);
            log.debug("iPad Pro 9.7 is selected");
        }

        if (elementName.contains("IPadPro10point5")) {

            pageobjects.iPadPage.IPadPro10point5.click();
            Thread.sleep(7000);
            log.debug("IPad Pro 10.5 is selected");
        }

        if (elementName.contains("Apple iPad 9.7")) {
            WebElement element = pageobjects.iPadPage.IPad9point71;
            JavascriptExecutor executor = (JavascriptExecutor)driver;
            executor.executeScript("arguments[0].click();", element);
            // pageobjects.iPadPage.IPad9point7.click();
            Thread.sleep(7000);
            log.debug("Apple iPad 9.7 is selected");
        }

        Screenshots.captureScreenshot();




    }

}
