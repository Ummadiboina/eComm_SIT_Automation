package helpers;
import org.openqa.selenium.Capabilities;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

public class getOperatingSystemAndBrowserDetails extends Environment {

    public static String getBrowserName() {
        String browser_version = null;
        Capabilities cap = ((RemoteWebDriver) driver).getCapabilities();
        String browserName = cap.getBrowserName();
        return browserName;
    }

    public static String getOperatingSystemName() {
        String osType="";
        String osName = System.getProperty("os.name");
        String osNameMatch = osName.toLowerCase();
        if(osNameMatch.contains("linux")) {
            osType = "OS_LINUX";
        }else if(osNameMatch.contains("windows")) {
            osType = "OS_WINDOWS";
        }else if(osNameMatch.contains("solaris") || osNameMatch.contains("sunos")) {
            osType = "OS_SOLARIS";
        }else if(osNameMatch.contains("mac os") || osNameMatch.contains("macos") || osNameMatch.contains("darwin")) {
            osType = "OS_MAC_OS_X";
        }else {
        }
        return osType;
    }

}
