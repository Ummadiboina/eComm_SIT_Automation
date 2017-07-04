package helpers;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.internal.ProfilesIni;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

public class BrowserHelper {
	
		
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
			System.setProperty("webdriver.chrome.driver","Browsers\\ChromeDriver\\chromedriver.exe");
			//Environment.driver = new ChromeDriver();			
			DesiredCapabilities handlSSLErr = DesiredCapabilities.chrome();       
			handlSSLErr.setCapability (CapabilityType.ACCEPT_SSL_CERTS, true);
			Environment.driver = new ChromeDriver(handlSSLErr);

			//WebDriver driver = new ChromeDriver (handlSSLErr);
		}
		else
		{
			System.setProperty("webdriver.gecko.driver","Browsers\\GeckoDriver\\geckodriver.exe");
			ProfilesIni prof = new ProfilesIni();				
			FirefoxProfile ffProfile= prof.getProfile ("myProfile");
			ffProfile.setAcceptUntrustedCertificates(true);
			ffProfile.setAssumeUntrustedCertificateIssuer(false);
			Environment.driver = new FirefoxDriver(ffProfile);
		}
		
		Environment.driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		Environment.driver.manage().window().maximize();
	}

}
