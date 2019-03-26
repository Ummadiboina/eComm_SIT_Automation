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
    static String recommendedData = "";
    static String recommendedUpFront = "";

    public static void drupalShopSubLinkAction(String shopSubLink) {
        try {
            Thread.sleep(6000);
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

            if(decoupleStatus.equalsIgnoreCase("Enable")) {
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
            }else if(decoupleStatus.equalsIgnoreCase("Disable")){

                log.debug("Get CFA Tariff and Get CFU Tariff buttons are not showing\n");
                Screenshots.captureScreenshot();
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

    public static ArrayList<Integer> getCurrentSortOrderUsingMonthlyData() throws InterruptedException {

        List<WebElement> DataTextElement = driver.findElements(By.xpath("//table[@id='modelListTable']/tbody/tr/td[1]"));

        String noTariffsText = driver.findElement(By.xpath("//table[@id='modelListTable']/tbody/tr/td[1]")).getText();
        Thread.sleep(3000);
        if(noTariffsText.contains("There are no tariffs available")){
            log.debug("Failed: There are no tariffs available\n");
            Assert.fail("Failed: There are no tariffs available\n");
        }

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
                Select dropdownData = new Select(tariffDataFilter);
                String firstFilterOption = driver.findElement(By.xpath("(//table[@id='modelListTable']/tfoot/tr/td/select)[1]/option[2]")).getText();
                Screenshots.captureScreenshot();
                dropdownData.selectByVisibleText(firstFilterOption);
                log.debug("First data filter option is applied ie: "+firstFilterOption+"\n");
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

                List<WebElement> tariffFilterOptionsVariants = driver.findElements(By.xpath("(//table[@id='modelListTable']/tfoot/tr/td/select)[4]/option"));

                log.debug("-----------upFront Filter options are :-----------\n");
                for (int i = 1; i < tariffFilterOptionsVariants.size(); i++) {
                    log.debug(tariffFilterOptionsVariants.get(i).getText() + "\n");
                }
                log.debug("--------------------------------------------------\n");

                log.debug("Applying first upFront filter option to filter the tariffs\n");
                WebElement tariffDataFilter = pageobjects.DrupalShopPageObjects.tariffUpFrontFilter;
                Select dropdownData = new Select(tariffDataFilter);
                String firstFilterOption = driver.findElement(By.xpath("(//table[@id='modelListTable']/tfoot/tr/td/select)[4]/option[2]")).getText();
                Screenshots.captureScreenshot();
                dropdownData.selectByVisibleText(firstFilterOption);
                log.debug("First upFront filter option is applied ie: "+firstFilterOption+"\n");
                Thread.sleep(3000);
                Screenshots.captureScreenshot();
                log.debug("Verifying appropriate tariffs are listed or not as per the selected filter options\n");

                ArrayList<Integer> tariffListUsingMonthlyCost = new ArrayList<Integer>();
                String data = null;
                int a = 0;

                data = firstFilterOption;
                data = StringUtils.substringBetween(data, "£", ".");
                a = NumberUtils.toInt(data);
                if (a != 0) {
                    tariffListUsingMonthlyCost.add(a);
                }

                log.debug("-------------------Tariffs list after applying first upFront filter option-----------------\n");
                ArrayList<Integer> filterUpFrontTariffList = DrupalShopPageActions.getCurrentSortOrderUsingMonthlyCost();

                int match=0;
                for(int i=0;i<filterUpFrontTariffList.size();i++){
                    if(!filterUpFrontTariffList.get(i).equals(tariffListUsingMonthlyCost.get(0))){
                        match++;
                    }
                }

                if(match==0){
                    log.debug("Tariffs are filtered as per the applied data filter option\n");
                }else{
                    log.debug("Failed:Tariffs are not filtered as per the applied data filter option\n");
                    Assert.fail("Failed:Tariffs are not filtered as per the applied data filter option\n");
                }
            }else{
                if(filter.equalsIgnoreCase("Variant")){
                    List<WebElement> variantsFilterOptions = driver.findElements(By.xpath("(//table[@id='modelListTable']/tfoot/tr/td/select)[2]/option"));

                    log.debug("-----------Campaign variant Filter options are :-----------\n");
                    for (int i = 1; i < variantsFilterOptions.size(); i++) {
                        log.debug(variantsFilterOptions.get(i).getText() + "\n");
                    }
                    log.debug("-----------------------------------------------\n");

                    log.debug("Applying first variant filter option to filter the campaigns\n");
                    WebElement tariffVariantFilter = pageobjects.DrupalShopPageObjects.tariffVariantFilter;
                    Select dropdownData = new Select(tariffVariantFilter);
                    String firstFilterOption = driver.findElement(By.xpath("(//table[@id='modelListTable']/tfoot/tr/td/select)[2]/option[2]")).getText();
                    Screenshots.captureScreenshot();
                    dropdownData.selectByVisibleText(firstFilterOption);
                    log.debug("First variant filter option is applied ie: "+firstFilterOption+"\n");
                    Thread.sleep(3000);
                    Screenshots.captureScreenshot();
                    log.debug("Verifying appropriate campaigns are listed or not as per the selected variant filter options\n");


                    log.debug("-------------------Campaigns list after applying first variant filter option-----------------\n");
                    List<WebElement> campaignsVariantFilterOptions = driver.findElements(By.xpath("//table[@id='modelListTable']/tbody/tr/td[3]"));

                    for(int i=0;i<campaignsVariantFilterOptions.size();i++){
                        log.debug(campaignsVariantFilterOptions.get(i).getText()+"\n");
                    }

                    int match=0;
                    for(int i=0;i<campaignsVariantFilterOptions.size();i++){
                        if(!campaignsVariantFilterOptions.get(i).equals(firstFilterOption)){
                            match++;
                        }
                    }

                    if(match==0){
                        log.debug("Campaigns are filtered as per the applied variant filter option\n");
                    }else{
                        log.debug("Failed:Campaigns are not filtered as per the applied variant filter option\n");
                        Assert.fail("Failed:Campaigns are not filtered as per the applied variant filter option\n");
                    }
                }
            }
        } catch (Exception e) {
            log.debug("Unable to select tariffs " + filter + " options, Found exception ie :" + e);
            Assert.fail("Unable to select tariffs " + filter + " options, Found exception ie :" + e);
        }
    }

    public static void verifyExistingCampaigns() {
        try {

            JavascriptExecutor jse = (JavascriptExecutor) driver;
            jse.executeScript("window.scrollBy(0,400)", "");
            Thread.sleep(2000);
            Screenshots.captureScreenshot();
            List<WebElement> campaignTariffsNames = driver.findElements(By.xpath("//table[@id='campaingListTable']/tbody/tr"));

            if(campaignTariffsNames.size()>0) {
                log.debug(campaignTariffsNames.size()+" Capaigns Tariffs are present and the list is:\n");
                for (int i = 0; i < campaignTariffsNames.size(); i++) {
                    log.debug(campaignTariffsNames.get(i).getText() + "\n");
                }
            }else{
                log.debug("Failed: Campaigns does not exists\n");
                Assert.fail("Failed: Campaigns does not exists\n");
            }
        } catch (Exception e) {
            log.debug("Capaigns not found, Found exception ie :" + e);
            Assert.fail("Capaigns not found, Found exception ie :" + e);
        }
    }

    public static void campaignsOperation(String campaignOption){
        try{

            if(campaignOption.equalsIgnoreCase("Edit")){

            }else if(campaignOption.equalsIgnoreCase("Delete")){

            }else if(campaignOption.equalsIgnoreCase("Map Tariffs")){
                driver.findElement(By.xpath("//table[@id='campaingListTable']/tbody/tr[1]/td[8]/div/div/ul/li[2]/button")).click();
                Thread.sleep(2000);
                Screenshots.captureScreenshot();
                log.debug("Selecting Map Tariffs campaign option\n");
                driver.findElement(By.xpath("//table[@id='campaingListTable']/tbody/tr[1]/td[8]/div/div/ul/li[4]")).click();
                log.debug("Selected Map Tariffs campaign option\n");

            }else if(campaignOption.equalsIgnoreCase("Map Devices")){

            }else if(campaignOption.equalsIgnoreCase("Acquisition preview")){

            }else if(campaignOption.equalsIgnoreCase("Upgrade preview")){

            }
            Thread.sleep(5000);
            JavascriptExecutor jse = (JavascriptExecutor) driver;
            jse.executeScript("window.scrollBy(0,200)", "");
            Screenshots.captureScreenshot();

        }catch(Exception e){

        }
    }

    public static void campaignBrandModelVariants(String campaignBrand, String campaignModel){
        try{
            log.debug("Selecting campaign Brand, Model and Variant\n");
            int brandCount=0, modelCount=0;

            List<WebElement> campaignBrandList = driver.findElements(By.xpath("//div[@id='selectedBrand']/div/table/tbody/tr/td[1]"));
            JavascriptExecutor executor = (JavascriptExecutor) driver;


            for (int i = 0; i < campaignBrandList.size(); i++) {
                String brandList = campaignBrandList.get(i).getText();
                Thread.sleep(2000);
                if(brandList.equalsIgnoreCase(campaignBrand)){
                    WebElement ele = campaignBrandList.get(i);
                    Thread.sleep(2000);
                    executor.executeScript("arguments[0].click();", ele);
                    brandCount++;
                    Screenshots.captureScreenshot();
                    log.debug("Required brand selected ie: "+campaignBrand+"\n");
                    break;
                }
            }

            if(brandCount==0){
                log.debug("Failed: campaign brand not available\n");
                Assert.fail("Failed: campaign brand not available\n");
            }
            Thread.sleep(6000);
            JavascriptExecutor jse = (JavascriptExecutor) driver;
            jse.executeScript("window.scrollBy(0,400)", "");
            Thread.sleep(2000);
            Screenshots.captureScreenshot();

            List<WebElement> campaignModelList = driver.findElements(By.xpath("//table[@id='modelTable']/tbody/tr/td"));

            for (int i = 0; i < campaignModelList.size(); i++) {
                String modelList = campaignModelList.get(i).getText().trim();
                Thread.sleep(2000);
                if(modelList.contains(campaignModel)){

                    i=i+1;

                    WebElement ele = driver.findElement(By.xpath("//table[@id='modelTable']/tbody/tr/td["+i+"]/input"));
                    Thread.sleep(2000);

                    if(ele.isSelected()){
                        log.debug("Required model already selected ie: "+campaignModel+"\n");
                    }else {
                        executor.executeScript("arguments[0].click();", ele);
                        log.debug("Required model selected ie: "+campaignModel+"\n");
                    }
                    modelCount++;
                    Thread.sleep(3000);
                    Screenshots.captureScreenshot();
                    break;
                }
            }
            if(modelCount==0){
                log.debug("Failed: campaign model not available\n");
                Assert.fail("Failed: campaign model not available\n");
            }

            //click on Get Tariffs
            pageobjects.DrupalShopPageObjects.campaignGetTariffs.click();
            Thread.sleep(5000);
            Screenshots.captureScreenshot();

        }catch(Exception e){
            log.debug("Failed: campaign brand/model not available, Found exception: "+e+"\n");
            Assert.fail("Failed: campaign brand/model not available, Found exception: "+e+"\n");
        }
    }

    public static void campaignTariffsList(){
        try{
            JavascriptExecutor jse = (JavascriptExecutor) driver;
            jse.executeScript("window.scrollBy(0,400)", "");
            Thread.sleep(2000);
            Screenshots.captureScreenshot();

            List<WebElement> campaignTariff = driver.findElements(By.xpath("//table[@id='modelListTable']/tbody/tr"));

            if(campaignTariff.size()>0) {
                log.debug(campaignTariff.size()+" Capaigns tariffs are present and the list is:\n");
                log.debug("\nModel:\t\t Variant:\t\t\t\t Channel:\t\t Status:\t Data:\t BaseComms:\t Pre to Post:\t Start date:\t End date:\t Campaign Channel:" + "\n");
                log.debug("\n---------------------------------------------------------------------------------------------------------------------------------------\n");
                for (int i = 0; i < campaignTariff.size(); i++) {
                    log.debug("\n"+campaignTariff.get(i).getText() + "\n");
                }
                log.debug("\n-------------------------------------------------End of Campaign Tariffs list--------------------------------------------------------\n");
            }else{
                log.debug("Failed: Campaign tariffs does not exists\n");
                Assert.fail("Failed: Campaign tariffs does not exists\n");
            }

            jse.executeScript("window.scrollBy(0,400)", "");
            Thread.sleep(2000);
            Screenshots.captureScreenshot();

            jse.executeScript("window.scrollTo(0, document.body.scrollHeight)");
            Thread.sleep(3000);
            Screenshots.captureScreenshot();
        }catch(Exception e){
            log.debug("Unable to verify campaign tariffs list, found exception, "+e+"\n");
            Assert.fail("Unable to verify campaign tariffs list, found exception, "+e+"\n");
        }
    }

    public static void selectCampaignTariffsMapping(){
        try{
            JavascriptExecutor jse = (JavascriptExecutor) driver;
            //jse.executeScript("window.scrollBy(0,-1600)", "");
            jse.executeScript("window.scrollTo(0, 0)");
            Thread.sleep(3000);
            jse.executeScript("window.scrollBy(0,1000)", "");
            Thread.sleep(2000);
            Screenshots.captureScreenshot();

            List<WebElement> campaignTariff = driver.findElements(By.xpath("//table[@id='modelListTable']/tbody/tr"));
            Thread.sleep(2000);
            if(campaignTariff.size()>0) {
                log.debug("Selecting campaign tariffs for mapping\n");
                if(driver.findElement(By.xpath("//table[@id='modelListTable']/tbody/tr[1]/td[1]/input")).isSelected()){
                    log.debug("First tariff is already selected\n");
                }else {
                    driver.findElement(By.xpath("//table[@id='modelListTable']/tbody/tr[1]/td[1]/input")).click();
                    log.debug("First tariff is selected for mapping\n");
                }
                Thread.sleep(2000);
                if(driver.findElement(By.xpath("//table[@id='modelListTable']/tbody/tr[2]/td[1]/input")).isSelected()){
                    log.debug("Second tariff is already selected\n");
                }else {
                    driver.findElement(By.xpath("//table[@id='modelListTable']/tbody/tr[2]/td[1]/input")).click();
                    log.debug("Second tariff is selected for mapping\n");
                }
                log.debug("Selected campaign tariffs for mapping\n");
            }else{
                log.debug("Failed: Campaign tariffs does not exists\n");
                Assert.fail("Failed: Campaign tariffs does not exists\n");
            }
        }catch(Exception e){
            log.debug("Unable to select campaign tariffs for mapping, found exception, "+e+"\n");
            Assert.fail("Unable to select campaign tariffs for mapping, found exception, "+e+"\n");
        }
    }


    public static void verifyAndSelectCampaignChannelAndSave(String campaignChannel){
        try{

            log.debug("Verifying the campaign channels available\n");
            JavascriptExecutor jse = (JavascriptExecutor) driver;
            jse.executeScript("window.scrollBy(0,400)", "");
            Thread.sleep(2000);
            Screenshots.captureScreenshot();

            List<WebElement> campaignChannels = driver.findElements(By.xpath("//select[@id='edit-bulk-update-channel']/option"));

            if(campaignChannels.size()>0) {
                log.debug(campaignChannels.size()+" Capaigns channels are present and the list is:\n");
                for (int i = 0; i < campaignChannels.size(); i++) {
                    log.debug(campaignChannels.get(i).getText() + "\n");
                }
            }else{
                log.debug("Failed: Campaign channels does not exists\n");
                Assert.fail("Failed: Campaign channels does not exists\n");
            }

            jse.executeScript("window.scrollTo(0, document.body.scrollHeight)");
            Thread.sleep(3000);
            Screenshots.captureScreenshot();

            log.debug("Selecting campaign channel\n");
            WebElement campaignChannelEle = pageobjects.DrupalShopPageObjects.campaignChannel;
            Select dropdownBrand = new Select(campaignChannelEle);
            dropdownBrand.selectByVisibleText(campaignChannel);
            log.debug("Selected campaign channel\n");
            Screenshots.captureScreenshot();

            log.debug("Clicking on Save Mapped Tariffs CTA\n");
            pageobjects.DrupalShopPageObjects.saveMappedTariffs.click();
            Screenshots.captureScreenshot();
            log.debug("Clicked Save Mapped Tariffs CTA\n");

            Thread.sleep(5000);
            Screenshots.captureScreenshot();

        }catch(Exception e){
            log.debug("Failed: unable to verify campaign channels and save mapped tariffs\n");
            Assert.fail("Failed: unable to verify campaign channels and save mapped tariffs\n");
        }
    }

    public static void configTariffType(String preferredType){
        try{
            log.debug("Setting the tariff preference\n");
            JavascriptExecutor jse = (JavascriptExecutor) driver;
            jse.executeScript("window.scrollBy(0,-150)", "");
            Thread.sleep(3000);
            Screenshots.captureScreenshot();

            if(preferredType.equalsIgnoreCase("Recommended")){
                if(pageobjects.DrupalShopPageObjects.preferredRecommendedTariff.isSelected()){
                    log.debug("Recommended tariff is already selected by default so, no changes are applied\n");
                }else {
                    pageobjects.DrupalShopPageObjects.preferredRecommendedTariff.click();
                    Thread.sleep(2000);
                    pageobjects.DrupalShopPageObjects.recommendedTariff.click();
                    log.debug("Selected recommended option to configure tariffs as recommended tariffs\n");
                }
                recommendedUpFront = driver.findElement(By.xpath("//table[@id='modelListTable']/tbody/tr[1]/td[4]")).getText();
                recommendedData = driver.findElement(By.xpath("//table[@id='modelListTable']/tbody/tr[1]/td[1]")).getText();
                Thread.sleep(2000);


            }else if(preferredType.equalsIgnoreCase("Our Pic")){
                pageobjects.DrupalShopPageObjects.preferrredOurPicTariff.click();
                Thread.sleep(2000);
                pageobjects.DrupalShopPageObjects.ourPick.click();
                log.debug("Selected our Pick option to configure tariffs as our Pick tariffs\n");
            }else if(preferredType.equalsIgnoreCase("Minimum")){
                pageobjects.DrupalShopPageObjects.minimumTariff.click();
                log.debug("Selected recommended option to configure tariffs as recommended tariffs\n");
            }
            Thread.sleep(2000);
            Screenshots.captureScreenshot();
        }catch(Exception e){
            log.debug("Failed: unable to select tariff type\n");
            Assert.fail("Failed: unable to select tariff type\n");
        }

    }
}
