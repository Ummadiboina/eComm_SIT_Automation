package actionsPerformed;

import java.io.IOException;

import GlobalActions.scrollToAnElement;
import org.apache.log4j.Logger;

import GlobalActions.Screenshots;
import helpers.Environment;
import org.openqa.selenium.JavascriptExecutor;

public class DrupalConfigurationPageActions extends Environment {

    final static Logger log = Logger.getLogger("DrupalConfigurationPageActions");

    public static void drupalConfigSubLinkAction(String configSubLink) {
        try {
            Screenshots.captureScreenshot();
            if(configSubLink.equalsIgnoreCase("O2General")) {
                log.debug("Clicking on configuration O2 Genral link\n");
                pageobjects.DrupalConfigurationPageObjects.o2GeneralLink.click();
                log.debug("Clicked on configuration O2 Genral link\n");
                Thread.sleep(10000);
                Screenshots.captureScreenshot();
            }else if(configSubLink.equalsIgnoreCase("O2SoaAG")){

            }else if(configSubLink.equalsIgnoreCase("O2APIGateway")){

            }else if(configSubLink.equalsIgnoreCase("O2OtherAPI")){

            }else if(configSubLink.equalsIgnoreCase("O2ClearPageCache")){

            }else if(configSubLink.equalsIgnoreCase("O2ManageCountry")){

            }else if(configSubLink.equalsIgnoreCase("O2KanbanProductAPI")){

            }else if(configSubLink.equalsIgnoreCase("MyO2LoginForm")){

            }else if(configSubLink.equalsIgnoreCase("O2FunctionConfig")){

            }
        }catch(Exception e){
            log.debug("Not able to perform drupal Config Sub Link Action, Found exception ie :"+e);
        }
    }

    public static void enableOrDisableDecoupleCFACFUTariff(String decoupalCFACFUStatus) {
        try{
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        scrollToAnElement.scrollToElement(pageobjects.DrupalConfigurationPageObjects.ENABLEDISABLEFEATURES);
        Thread.sleep(3000);
        Screenshots.captureScreenshot();
        if(decoupalCFACFUStatus.equalsIgnoreCase("Enable")) {

            if(pageobjects.DrupalConfigurationPageObjects.decoupleCFACFU.isSelected()){
                log.debug("Currently Decouple CFA/CFU Tariffs is in enabled state\n");
                Screenshots.captureScreenshot();
            }else {
                log.debug("Clicking on Decouple CFA/CFU Tariffs checkbox to enable\n");
                pageobjects.DrupalConfigurationPageObjects.decoupleCFACFU.click();
                log.debug("Clicked on Decouple CFA/CFU Tariffs checkbox and it is enabled now\n");
                Screenshots.captureScreenshot();
            }
        }else if(decoupalCFACFUStatus.equalsIgnoreCase("Disable")) {

            if(pageobjects.DrupalConfigurationPageObjects.decoupleCFACFU.isSelected()){
                log.debug("Clicking on Decouple CFA/CFU Tariffs checkbox to disable\n");
                pageobjects.DrupalConfigurationPageObjects.decoupleCFACFU.click();
                log.debug("Clicked on Decouple CFA/CFU Tariffs checkbox and it is disaled now\n");
                Screenshots.captureScreenshot();
            }else {
                log.debug("Currently Decouple CFA/CFU Tariffs is in disabled state\n");
                Screenshots.captureScreenshot();
            }
        }

        jse.executeScript("window.scrollTo(0,document.body.scrollHeight)", "");
        Thread.sleep(3000);
        Screenshots.captureScreenshot();

        }catch(Exception e){
            log.debug("Not able to perform enable Decouple CFA/CFU Tariff Action, Found exception ie :"+e);
        }
    }

    public static void saveDecoupleCFACFUConfig() {
        try {
            log.debug("Clicking on Save Configuration CTA\n");
            pageobjects.DrupalConfigurationPageObjects.saveConfigCTA.click();
            log.debug("Clicked on Save Configuration CTA\n");

            Thread.sleep(3000);
            Screenshots.captureScreenshot();

            //log.debug("Configuration Save message is disaplyed ie: "+pageobjects.DrupalConfigurationPageObjects.saveConfigMessage+"\n");
        } catch (Exception e) {
            log.debug("Not able to perform enable Decouple CFA/CFU Tariff Action, Found exception ie :" + e);
        }
    }
}
