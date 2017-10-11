package actionsPerformed;

import helpers.Environment;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;

import java.io.IOException;

import static GlobalActions.Screenshots.captureScreenshot;

public class SimFreeLandingActions extends Environment {

    public static void LikeNewOptions(String ElementName) throws IOException, InterruptedException {
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,500)", "");

        if (ElementName.contains("SimFree")) {
            System.out.println("The Sim free link is displayed");
            pageobjects.SimFreeLandingPage.LikeNewSimFree.click();
            captureScreenshot();
        } else if (ElementName.contains("PayAsYouGo")) {
            System.out.println("The Pay as you go link is displayed");
            pageobjects.SimFreeLandingPage.LikeNewPayAsYouGo.sendKeys(Keys.ENTER);
            captureScreenshot();


        } else if (ElementName.contains("PayMonthly")) {
            System.out.println("The Pay as you go link is displayed");
            pageobjects.SimFreeLandingPage.LikeNewPayMonthly.sendKeys(Keys.ENTER);
            captureScreenshot();
        } else {
            System.out.println("The Like new links is not displayed");
        }


    }

}