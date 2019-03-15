package actionsPerformed;

import GlobalActions.Screenshots;
import GlobalActions.scrollToAnElement;
import helpers.Environment;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.NumberUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class DrupalShopPageActions extends Environment {

    final static Logger log = Logger.getLogger("DrupalShopPageActions");

    public static void drupalShopSubLinkAction(String shopSubLink) {
        try {
            Screenshots.captureScreenshot();
            if(shopSubLink.equalsIgnoreCase("Tariff")) {
                log.debug("Clicking on shop Tariff link\n");
                pageobjects.DrupalShopPageObjects.shopTariffLink.click();
                log.debug("Clicked on shop Tariff link\n");
                Thread.sleep(5000);
                Screenshots.captureScreenshot();
            }else if(shopSubLink.equalsIgnoreCase("Campaigns")){
                log.debug("Clicking on shop Campaigns link\n");
                pageobjects.DrupalShopPageObjects.shopCampaignsLink.click();
                log.debug("Clicked on shop Campaigns link\n");
                Thread.sleep(5000);
                Screenshots.captureScreenshot();
            }
        }catch(Exception e){
            log.debug("Not able to perform drupal Shop Sub Link Action, Found exception ie :"+e);
        }
    }

    public static void select_BrandModelVariant(String Brand, String Model, String Variant) {
        try {
            log.debug("Selecting Brand\n");
            WebElement brandEle = pageobjects.DrupalShopPageObjects.tariffBrand;
            Select dropdownBrand = new Select(brandEle);
            dropdownBrand.selectByVisibleText(Brand);
            log.debug("Selected Brand\n");
            Thread.sleep(5000);
            log.debug("Selecting Model\n");
            WebElement modelEle = pageobjects.DrupalShopPageObjects.tariffModel;
            Select dropdownModel = new Select(modelEle);
            dropdownModel.selectByVisibleText(Model);
            log.debug("Selected Model\n");
            Thread.sleep(5000);
            log.debug("Selecting Variant\n");
            WebElement variantEle = pageobjects.DrupalShopPageObjects.tariffVariant;
            Select dropdownVariant = new Select(variantEle);
            dropdownVariant.selectByVisibleText(Variant);
            log.debug("Selected Variant\n");
            Screenshots.captureScreenshot();
            Thread.sleep(5000);
        } catch (Exception e) {
            log.debug("Unable to select Brand, Model and Variant, Found exception ie :" + e);
            Assert.fail("Unable to select Brand, Model and Variant, Found exception ie :" + e);
        }
    }

    public static void verifyGetCfaCfuCTA(String GetTariffCTA, String decoupleStatus) {
        try {
            log.debug("Verifying GET CFA Tariff and GET CFU Tariff CTA\n");

            Screenshots.captureScreenshot();

            if(decoupleStatus.equalsIgnoreCase("Enabled")) {
                if (pageobjects.DrupalShopPageObjects.GETCFATariffCTA.isDisplayed()) {
                    log.debug("As expected, GET CFA Tariff CTA is displaying\n");
                } else {
                    log.debug("GET CFA Tariff CTA is not displaying\n");
                    Assert.fail("GET CFA Tariff CTA is not displaying\n");
                }

                if (pageobjects.DrupalShopPageObjects.GETCFUTariffCTA.isDisplayed()) {
                    log.debug("As expected, GET CFU Tariff CTA is displaying\n");
                } else {
                    log.debug("GET CFU Tariff CTA is not displaying\n");
                    Assert.fail("GET CFU Tariff CTA is not displaying\n");
                }

                if (GetTariffCTA.equalsIgnoreCase("GETCFATariffCTA")) {
                    log.debug("Clicking on Get CFA Tariff CTA\n");
                    pageobjects.DrupalShopPageObjects.GETCFATariffCTA.click();
                    log.debug("Clicked on Get CFA Tariff CTA\n");

                } else if (GetTariffCTA.equalsIgnoreCase("GETCFUTariffCTA")) {
                    log.debug("Clicking on Get CFU Tariff CTA\n");
                    pageobjects.DrupalShopPageObjects.GETCFUTariffCTA.click();
                    log.debug("Clicked on Get CFU Tariff CTA\n");
                } else if (GetTariffCTA.equalsIgnoreCase("GETBaseCommsTariffCTA")) {
                    log.debug("Clicking on GET Base Comms Tariff CTA\n");
                    pageobjects.DrupalShopPageObjects.GETBasecommsTariffCTA.click();
                    log.debug("Clicked on GET Base Comms Tariff CTA\n");
                }
            }else if(decoupleStatus.equalsIgnoreCase("Disabled")){
                /*if (pageobjects.DrupalShopPageObjects.GETCFATariffCTA.isDisplayed()) {
                    log.debug("GET CFA Tariff CTA is displaying for decouple CFA/CFU disabled status\n");
                    Assert.fail("GET CFA Tariff CTA is displaying for decouple CFA/CFU disabled status\n");
                } else {
                    log.debug("As expected, GET CFA Tariff CTA is not displaying for decouple CFA/CFU disabled status\n");
                }

                if (pageobjects.DrupalShopPageObjects.GETCFUTariffCTA.isDisplayed()) {
                    log.debug("GET CFU Tariff CTA is displaying for decouple CFA/CFU disabled status\n");
                    Assert.fail("GET CFU Tariff CTA is displaying for decouple CFA/CFU disabled status\n");
                } else {
                    log.debug("As expected, GET CFU Tariff CTA is not displaying for decouple CFA/CFU disabled status\n");
                }
                */
                log.debug("Clicking on Get Tariff CTA\n");
                pageobjects.DrupalShopPageObjects.GETTariffCTA.click();
                log.debug("Clicked on Get Tariff CTA\n");
            }

            Thread.sleep(10000);
            Screenshots.captureScreenshot();

            JavascriptExecutor jse = (JavascriptExecutor) driver;
            jse.executeScript("window.scrollBy(0,120)", "");
            Thread.sleep(2000);
            Screenshots.captureScreenshot();

            jse.executeScript("window.scrollBy(0,420)", "");
            Thread.sleep(2000);
            Screenshots.captureScreenshot();

        } catch (Exception e) {
            log.debug("Unable to select Get Tariff CTA, Found exception ie :" + e);
            Assert.fail("Unable to select Get Tariff CTA, Found exception ie :" + e);
        }
    }

    public static ArrayList<Integer> getCurrentSortOrderUsingMonthlyData() {

        List<WebElement> DataTextElement = driver.findElements(By.xpath("//table[@id='modelListTable']/tbody/tr/td[1]"));

        ArrayList<Integer> tariffListUsingMonthlyData = new ArrayList<Integer>();
        String data = null, tempdata = null;
        int a = 0;
        log.debug("size " + DataTextElement.size());
        for (int i = 0; i < DataTextElement.size(); i++) {
            data = DataTextElement.get(i).getText();
            log.debug("data :" + data);
            if (data.contains("MB")) {
                tempdata = StringUtils.substringBetween(data, "", "MB");
                a = NumberUtils.toInt(tempdata);
                log.debug("a :" + a);
                tariffListUsingMonthlyData.add(a);
            }
            if (data.contains("GB")) {
                tempdata = StringUtils.substringBetween(data, "", "GB");
                //log.debug("tempdata :" + tempdata);
                a = NumberUtils.toInt(tempdata);
                a = a * 1024;
                log.debug("a :" + a);
                if (a != 0) {
                    tariffListUsingMonthlyData.add(a);
                }
            }
        }

        log.debug("\n");

        //log.debug("-------------------Original Data List-----------------\n");
        for (int i = 0; i < tariffListUsingMonthlyData.size(); i++) {
            log.debug(tariffListUsingMonthlyData.get(i));
            log.debug("\n");
        }
        log.debug("------------------------------------------------------\n");
        return tariffListUsingMonthlyData;
    }

    public static ArrayList<Integer> getCurrentSortOrderUsingMonthlyCost() {

        List<WebElement> DataTextElement = driver.findElements(By.xpath("//table[@id='modelListTable']/tbody/tr/td[4]"));

        ArrayList<Integer> tariffListUsingMonthlyCost = new ArrayList<Integer>();
        String data = null;
        int a = 0;

        for (int i = 0; i < DataTextElement.size(); i++) {
            data = DataTextElement.get(i).getText();
            data = StringUtils.substringBetween(data, "£", ".");
            a = NumberUtils.toInt(data);
            if (a != 0) {
                tariffListUsingMonthlyCost.add(a);
            }
        }
        return tariffListUsingMonthlyCost;
    }

    public static ArrayList<Integer> reArrangeListInAcendingBeforeApplyingSort(ArrayList<Integer> OriginalList) {

        ArrayList<Integer> ListBeforeApplyingSort = OriginalList;
        Collections.sort(ListBeforeApplyingSort);

        return ListBeforeApplyingSort;

    }

    public static void verifyTariffSortedAsPerSortOption(ArrayList<Integer> ListBeforeApplyingSort,ArrayList<Integer> ListAfterApplyingSort) throws IOException {

        try {
            int cnt=0;
            ArrayList<Integer> TempListBeforeApplyingSort = ListBeforeApplyingSort;
            ArrayList<Integer> TempListAfterApplyingSort = ListAfterApplyingSort;

            for (int i = 0; i < TempListBeforeApplyingSort.size(); i++) {
                if(!TempListBeforeApplyingSort.get(i).equals(TempListAfterApplyingSort.get(i))){
                cnt++;
                }
            }
            if(cnt==0) {
                log.debug("Assertion Success: Tariffs have been sorted successfully based on Sort Option\n");
            }else{
                log.debug("Assertion Failed: Tariffs are not sorted based on Sort Option\n");
                Assert.fail("Assertion Failed: Tariffs are not sorted based on Sort Option\n");
            }
            Screenshots.captureScreenshot();
        } catch (AssertionError e) {
            log.debug("Assertion Failed: Tariffs are not sorted based on Sort Option \n");
            Assert.fail("Fail - " + e.getMessage());
            Screenshots.captureScreenshot();
        }
    }

    public static void verifyTariffsFilterOptions() {
        try {

            List<WebElement> tariffFilterOptions = driver.findElements(By.xpath("//table[@id='modelListTable']/tfoot/tr/td/select"));

            if(tariffFilterOptions.size()>0) {
                log.debug("Tariffs filter options are present below the result table\n");
                for (int i = 1; i <= tariffFilterOptions.size(); i++) {
                    log.debug("------------Filter :" + i + " available options are------------\n");
                    List<WebElement> tariffFilterOptionsVariants = driver.findElements(By.xpath("(//table[@id='modelListTable']/tfoot/tr/td/select)[" + i + "]/option"));
                    for (int j = 1; j < tariffFilterOptionsVariants.size(); j++) {
                        log.debug(tariffFilterOptionsVariants.get(j).getText() + "\n");
                    }
                }
            }else{
                log.debug("Failed: Tariffs filter options are not present below the result table\n");
                Assert.fail("Failed: Tariffs filter options are not present below the result table\n");
            }
        } catch (Exception e) {
            log.debug("Unable to verify tariffs filter options, Found exception ie :" + e);
            Assert.fail("Unable to verify tariffs filter options, Found exception ie :" + e);
        }
    }

    public static void selectTariffsFilterOptions(String filter) {
        try {
            if (filter.equalsIgnoreCase("dataFilter")) {
                List<WebElement> tariffFilterOptionsVariants = driver.findElements(By.xpath("(//table[@id='modelListTable']/tfoot/tr/td/select)[1]/option"));

                log.debug("-----------Data Filter options are :-----------\n");
                for (int i = 1; i < tariffFilterOptionsVariants.size(); i++) {
                    log.debug(tariffFilterOptionsVariants.get(i).getText() + "\n");
                }
                log.debug("-----------------------------------------------\n");

                log.debug("Applying first data filter option to filter the tariffs\n");
                WebElement tariffDataFilter = pageobjects.DrupalShopPageObjects.tariffDataFilter;
                Select dropdownBrand = new Select(tariffDataFilter);
                String firstFilterOption = driver.findElement(By.xpath("(//table[@id='modelListTable']/tfoot/tr/td/select)[1]/option[2]")).getText();
                Screenshots.captureScreenshot();
                dropdownBrand.selectByVisibleText(firstFilterOption);
                log.debug("First data filter option is applied\n");
                Thread.sleep(3000);
                Screenshots.captureScreenshot();
                log.debug("Verifying appropriate tariffs are listed or not as per the selected filter options\n");

                ArrayList<Integer> firstFilterOptionTotalData =  new ArrayList<Integer>();
                String data = null, tempdata = null;
                int a = 0;

                if (firstFilterOption.contains("MB")) {
                    tempdata = StringUtils.substringBetween(firstFilterOption, "", "MB");
                    a = NumberUtils.toInt(tempdata);
                    log.debug("a :" + a);
                    firstFilterOptionTotalData.add(a);
                }
                if (firstFilterOption.contains("GB")) {
                    tempdata = StringUtils.substringBetween(firstFilterOption, "", "GB");
                    //log.debug("tempdata :" + tempdata);
                    a = NumberUtils.toInt(tempdata);
                    a = a * 1024;
                    log.debug("a :" + a);
                    if (a != 0) {
                        firstFilterOptionTotalData.add(a);
                    }
                }

                log.debug("-------------------Tariffs list after applying first data filter option-----------------\n");
                ArrayList<Integer> filterDataTariffList = DrupalShopPageActions.getCurrentSortOrderUsingMonthlyData();

                int match=0;
                for(int i=0;i<filterDataTariffList.size();i++){
                    if(!filterDataTariffList.get(i).equals(firstFilterOptionTotalData.get(0))){
                        match++;
                    }
                }

                if(match==0){
                    log.debug("Tariffs are filtered as per the applied data filter option\n");
                }else{
                    log.debug("Failed:Tariffs are not filtered as per the applied data filter option\n");
                    Assert.fail("Failed:Tariffs are not filtered as per the applied data filter option\n");
                }
            } else if (filter.equalsIgnoreCase("upFrontFilter")) {

            }
        } catch (Exception e) {
            log.debug("Unable to select tariffs " + filter + " options, Found exception ie :" + e);
            Assert.fail("Unable to select tariffs " + filter + " options, Found exception ie :" + e);
        }
    }
}
