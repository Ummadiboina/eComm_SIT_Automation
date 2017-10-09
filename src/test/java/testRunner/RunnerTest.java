package testRunner;

import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;
import com.github.mkolisnyk.cucumber.runner.ExtendedTestNGRunner;
import cucumber.api.CucumberOptions;
import org.junit.BeforeClass;

import java.text.SimpleDateFormat;
import java.util.Date;

//Below is newly added on 08102017 - vinu


@ExtendedCucumberOptions
		(
				jsonReport = "testResult/cucumber.json",
				retryCount = 0,
				detailedReport = true,
				detailedAggregatedReport = true,
				overviewReport = false,
				//coverageReport = true,

				jsonUsageReport = "testResult/cucumber-usage.json",
				usageReport = true,
				toPDF = true,
				excludeCoverageTags = {"@flaky" },
				includeCoverageTags = {"@passed" },
				outputFolder = "testResult/cucumber_detailed_result/DATE(yyyy-MM-dd HH-mm-ss)"

				//		outputFolder = "${user.dir}/DATE(yyyy-MM-dd HH:mm:ss.S)"
				//reportPrefix = "results-${user}"
		)



//Above is newly added


@CucumberOptions(plugin = { "html:testResult/cucumber-html-report",
		"json:testResult/cucumber.json", "pretty:testResult/cucumber-pretty.txt",
		"usage:testResult/cucumber-usage.json", "junit:testResult/cucumber-results.xml" },
		features = { "Features//RegressionPack_Master//" },
		glue = { "steps" },
		tags = {"@Web"})


//@RunWith(CucumberRunner.class)
public class RunnerTest extends ExtendedTestNGRunner  {
/*	@BeforeClass
	public static void setUp() {

	*//*	ExtentCucumberFormatter.initiateExtentCucumberFormatter(new File("Telefonica_Execution_Report.html"), true);
		ExtentCucumberFormatter.loadConfig(new File("src/test/resources/extent-config.xml"));

		ExtentCucumberFormatter.addSystemInfo("Browser Name", "Chrome");
		ExtentCucumberFormatter.addSystemInfo("Browser version", "v31.0");
		ExtentCucumberFormatter.addSystemInfo("Selenium version", "v2.53.0");

		Map systemInfo = new HashMap();
		systemInfo.put("Cucumber version", "v1.2.3");
		systemInfo.put("Environment", "QA");
		ExtentCucumberFormatter.addSystemInfo(systemInfo);
*//*
	}

	@AfterSuite
	public static void tearDown() throws Exception {
		try {

		*//*	// Creates the Detailed Result
			CucumberDetailedResults results = new CucumberDetailedResults();
			results.setOutputDirectory("testResult\\cucumber_detailed_result\\");
			results.setOutputName("cucumber-results" + timestamp());
			results.setSourceFile("testResult\\cucumber.json");
			results.executeDetailedResultsReport(true, true);
			// Creates the Overview Result involves chart representation
			CucumberResultsOverview result = new CucumberResultsOverview();
			result.setOutputDirectory("testResult\\cucumber_result_overview\\");
			result.setOutputName("cucumber-results" + timestamp());
			result.setSourceFile("testResult\\cucumber.json");
			result.executeFeaturesOverviewReport();*//*
		} catch (Exception e) {
			throw e;
		}
	}

	public static String timestamp() {
		return new SimpleDateFormat("yyyy-MM-dd HH-mm-ss").format(new Date());
	}*/
}