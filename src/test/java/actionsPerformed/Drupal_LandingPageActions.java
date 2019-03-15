package actionsPerformed;

import java.io.IOException;

import org.apache.log4j.Logger;

import GlobalActions.Screenshots;
import helpers.Environment;

public class Drupal_LandingPageActions extends Environment {

    final static Logger log = Logger.getLogger("Drupal_LandingPageActions");

    public static void drupalLogin(String username, String password) {
        try {
            pageobjects.Drupal_PageObjects.Username.sendKeys(username);
            log.debug("The Drupal Username is entered\n");

            pageobjects.Drupal_PageObjects.Password.sendKeys(password);
            log.debug("The Drupal Password is entered\n");

            Thread.sleep(3000);
            Screenshots.captureScreenshot();
            if (pageobjects.Drupal_PageObjects.Login.isDisplayed()) {
                pageobjects.Drupal_PageObjects.Login.click();
                log.debug("The Drupal Admin clicks on Login\n");
            }
            Thread.sleep(10000);
            Screenshots.captureScreenshot();
        }catch(Exception e){
            log.debug("Not able to login Drupal Home page, Found exception ie :"+e);
        }
    }

    public static void verifyDrupalLoginPage() {
        try {
            log.debug("Verifying the Drupage login/Home page");
            String pageTitle = driver.getTitle();
            String currentURL = driver.getCurrentUrl();
            log.debug("We are at " + pageTitle + " page\n");
            log.debug("Current URL is: " + currentURL + "\n");
        }catch(Exception e){
            log.debug("Not able to verify Drupal login/Home page, Found exception ie :"+e);
        }
    }

    public static void drupalTabLink(String drupalNavTab) {
        try {
            if(drupalNavTab.equalsIgnoreCase("Configuration")){
                log.debug("Clicking on configuration tab\n");
                pageobjects.Drupal_PageObjects.configurationTab.click();
                log.debug("Clicked on drupal configuration tab/link\n");
            }else if(drupalNavTab.equalsIgnoreCase("Shop")){
                log.debug("Clicking on shop tab\n");
                pageobjects.Drupal_PageObjects.shopTab.click();
                log.debug("Clicked on drupal shop tab/link\n");
            }
        }catch(Exception e){
            log.debug("Unable to Navigate to Drupal Tab ie :"+drupalNavTab+"\n");
        }
    }
}