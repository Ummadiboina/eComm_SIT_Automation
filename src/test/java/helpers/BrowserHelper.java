package helpers;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.gargoylesoftware.htmlunit.javascript.host.file.File;

public class BrowserHelper {
	
	public WebDriver driver;
	
		
	public static void Invoke_browser(String BrowserType)
	{	 
		if(BrowserType.equalsIgnoreCase("ie"))
		{
			
			String OSArchitecture = System.getProperty("os.arch");
			System.out.println(OSArchitecture);
			if (OSArchitecture.equalsIgnoreCase("x86"))
			{
				System.setProperty("webdriver.ie.driver", "src\\test\\java\\InternalLibraries\\BrowserDrivers\\Internet_Explorer\\IEDriverServer_Win32_3.1.0\\IEDriverServer.exe"); 
			}else
			{
				System.setProperty("webdriver.ie.driver", "src\\test\\java\\InternalLibraries\\BrowserDrivers\\Internet_Explorer\\IEDriverServer_x64_3.1.0\\IEDriverServer.exe") ;
			}
			
			DesiredCapabilities capability = DesiredCapabilities.internetExplorer();			
			capability.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS,true);
			capability.setCapability("useLegacyInternalServer", true);
			Environment.driver = new InternetExplorerDriver(capability);
			Environment.driver.manage().deleteAllCookies();
            
			Environment.driver.navigate().refresh();      

			
		}
		else if (BrowserType.equalsIgnoreCase("chrome"))
		{
			System.setProperty("webdriver.chrome.driver","src\\test\\java\\InternalLibraries\\BrowserDrivers\\ChromeDriver\\chromedriver.exe");
			//Environment.driver = new ChromeDriver();			
			
			DesiredCapabilities handlSSLErr = DesiredCapabilities.chrome();       
			handlSSLErr.setCapability (CapabilityType.ACCEPT_SSL_CERTS, true);
			Environment.driver = new ChromeDriver(handlSSLErr);

			//WebDriver driver = new ChromeDriver (handlSSLErr);
		}
		else if ((BrowserType.equalsIgnoreCase("Mozilla")))
		{
		    //System.setProperty("webdriver.gecko.driver","<C:(\\Program Files\\Mozilla Firefox\\geckodriver.exe>>");
			//DesiredCapabilities handlSSLErr_1 = DesiredCapabilities.firefox();
			//Environment.driver = new FirefoxDriver();
			//WebDriver driver = new FirefoxDriver();
			
			String driverPath = "<C:(\\Program Files\\Mozilla Firefox\\geckodriver.exe>";
			System.out.println("launching firefox browser"); 
			System.setProperty("webdriver.gecko.driver", driverPath+"geckodriver.exe");
			Environment.driver = new FirefoxDriver();
			
		}
		
		Environment.driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		Environment.driver.manage().window().maximize();
	}

}
