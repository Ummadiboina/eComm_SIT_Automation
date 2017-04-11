package GlobalActions;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import helpers.Environment;

public class Screenshots extends Environment{
	
//public static void main(String[] args) throws IOException {
	
	//To Take screenshot

 
		//WebDriver driver = new ChromeDriver();
	public static void screennewPics() throws IOException, InterruptedException
	{
	    File scr=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
	    File dest= new File("RegressionV1.0\\ScreenshotsForSteps\\Screenshot_"+timestamp()+".jpeg");
	    FileUtils.copyFile(scr, dest);
	    //C:\Automation\Git Repositories New\RegressionV1.0\ScreenshotsForSteps
	}

	public static String timestamp() {
	    return new SimpleDateFormat("yyyy-MM-dd HH-mm-ss").format(new Date());
	}
		
}
	