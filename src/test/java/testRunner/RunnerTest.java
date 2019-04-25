/*
 * Added by Vinudeep for Mobile Automation Testing
 */

package testRunner;

import com.github.mkolisnyk.cucumber.runner.AfterSuite;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;
import com.github.mkolisnyk.cucumber.runner.ExtendedTestNGRunner;
import cucumber.api.CucumberOptions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.LinkedHashMap;
import java.util.List;

//Below is newly added on 08102017 - vinu


@ExtendedCucumberOptions
        (
                jsonReport = "testResult/cucumber.json",
                retryCount = 0,
                detailedReport = true,
                detailedAggregatedReport = true,
                overviewReport = true,
                coverageReport = true,

                jsonUsageReport = "testResult/cucumber-usage.json",
                usageReport = true,
                toPDF = true,
                excludeCoverageTags = {"@flaky"},
                includeCoverageTags = {"@passed"},
                outputFolder = "testResult/cucumber_detailed_result/DATE(yyyy-MM-dd HH)"

        )

@CucumberOptions(plugin = {"html:testResult/cucumber-html-report",
        "json:testResult/cucumber.json", "pretty:testResult/cucumber-pretty.txt",
        "usage:testResult/cucumber-usage.json", "junit:testResult/cucumber-results.xml"},
        features = {"Features//AprilRelease2019//CFA_Reg_FailedScenarios"},
        glue = {"steps"},
        tags = {"@Web"})


public class RunnerTest extends ExtendedTestNGRunner {

}