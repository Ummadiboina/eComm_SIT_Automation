package GlobalActions;

import java.io.IOException;
import java.util.UUID;

import org.apache.log4j.Logger;

import helpers.Environment;



public class RandomEmailAddressCreation extends Environment {

	final static Logger log = Logger.getLogger("RandomEmailAddressCreation");

/*
public static String RandomEmail()
{
           // Find the link to email id field
       WebElement link1 = driver.findElement(By.id("email"));
        
	// Click the link
        
       link1.click();
        
        
        // Generate a random email
        final String randomEmail = randomEmail();
        
        // Find the email form field
        WebElement email = driver.findElement(By.id("email"));
        
        // Type the random email to the form
        email.sendKeys(randomEmail);
		return "SITTester-" + UUID.randomUUID().toString() + "@gmail.com";
             
   }



*/




    public static String RandomEmail() throws IOException, InterruptedException {
    	
    	String RandomEmail = "STester11" + UUID.randomUUID().toString() + "@gmail.com";
    			System.out.println("Random Email Address is "+RandomEmail);
				log.debug("Random Email Address is "+RandomEmail);
				

          return RandomEmail;
          
    }
    
    


}