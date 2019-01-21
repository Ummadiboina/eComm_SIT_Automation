package GlobalActions;

import java.io.IOException;
import java.util.Random;
import java.util.UUID;

import org.apache.log4j.Logger;

import helpers.Environment;
import org.testng.Converter;


public class RandomEmailAddressCreation extends Environment {

	final static Logger log = Logger.getLogger("RandomEmailAddressCreation");

	public static String RandomEmail() {

		String RandomEmail = "STester11" + UUID.randomUUID().toString() + "@gmail.com";
		log.debug("Random Email Address is "+RandomEmail);
		return RandomEmail;

	}

	public static String RandomPhoneNum() {

		Random ranNum = new Random();
		int num = ranNum.nextInt((9999-1000)+1)+1000;

		String RandomNum = "0712345" + Integer.toString(num);
		log.debug("Random phone number is: "+RandomNum);
		return RandomNum;

	}


}