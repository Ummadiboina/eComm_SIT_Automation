package actionsPerformed;

import java.io.IOException;

import org.openqa.selenium.Keys;

import GlobalActions.Screenshots;
import helpers.Environment;

public class SimFreeExtrasPageActions extends Environment {

	public static void validateElements() throws IOException, InterruptedException {
		System.out.println(" ");
		System.out.println("SIM_FREE_TARIFF_EXTRAS_PAGE_VALIDATION");

		if (pageobjects.SimFreeExtrasPage.PayMTab.getText().contains("Pay Monthly")) {
			System.out.println(
					"The Paym_Tab is Present and the Text is :" + pageobjects.SimFreeExtrasPage.PayMTab.getText());
		} else {
			System.out.println(
					"The  Paym_Tab is Absent and the Text is :" + pageobjects.SimFreeExtrasPage.PayMTab.getText());
		}

		if (pageobjects.SimFreeExtrasPage.PayGTab.getText().contains("Pay As You Go")) {
			System.out.println(
					"The PayG_Tab is Present and the Text is :" + pageobjects.SimFreeExtrasPage.PayGTab.getText());
		} else {
			System.out.println(
					"The  PayG_Tab is Absent and the Text is :" + pageobjects.SimFreeExtrasPage.PayGTab.getText());
		}
		/*
		 * if(pageobjects.ExtrasPage.GotoBasket.getText().contains("Go to basket")) {
		 * System.out.println("The GoToBasket_Tab is Present and the Text is :"
		 * +pageobjects.ExtrasPage.GotoBasket.getText()); }else{
		 * System.out.println("The  GoToBasket_Tab is Absent and the Text is :"
		 * +pageobjects.ExtrasPage.GotoBasket.getText());
		 * 
		 * }
		 */
		if (pageobjects.SimFreeExtrasPage.Contractlength.getText().contains("Contract length")) {
			System.out.println("The Contractlength_label is Present and the Text is :"
					+ pageobjects.SimFreeExtrasPage.Contractlength.getText());
		} else {
			System.out.println("The  Contractlength_label is Absent and the Text is :"
					+ pageobjects.SimFreeExtrasPage.Contractlength.getText());

		}
		if (pageobjects.SimFreeExtrasPage.months12tab.getText().contains("12 months")) {
			System.out.println("The 12 months_Tab is Present and the Text is :"
					+ pageobjects.SimFreeExtrasPage.months12tab.getText());
		} else {
			System.out.println("The  12 months_Tab is Absent and the Text is :"
					+ pageobjects.SimFreeExtrasPage.months12tab.getText());

		}

		if (pageobjects.SimFreeExtrasPage.days30tab.getText().contains("30 days")) {
			System.out.println(
					"The 30 days_Tab is Present and the Text is :" + pageobjects.SimFreeExtrasPage.days30tab.getText());
		} else {
			System.out.println(
					"The  30 days_Tab is Absent and the Text is :" + pageobjects.SimFreeExtrasPage.days30tab.getText());

		}
		Screenshots.captureScreenshot();

	}

	public static void tariff_select(String ElementName) throws IOException, InterruptedException {
		if (ElementName.contains("tariff")) {
			pageobjects.SimFreeExtrasPage.month12tarrif500mb.sendKeys(Keys.ENTER);
		}
		Screenshots.captureScreenshot();

	}

	public static void basket_select() throws IOException, InterruptedException {
		pageobjects.SimFreeExtrasPage.addToBasketLive.sendKeys(Keys.ENTER);
		Screenshots.captureScreenshot();

	}

	public static void Tab_Select(String elementName) throws IOException, InterruptedException {
		if (elementName.equalsIgnoreCase("12months")) {
			pageobjects.SimFreeExtrasPage.months12tab.sendKeys(Keys.ENTER);
		}

		if (elementName.equalsIgnoreCase("30days")) {
			pageobjects.SimFreeExtrasPage.days30tab.sendKeys(Keys.ENTER);
		}
		Screenshots.captureScreenshot();

	}

	public static void tariffvalidation(String ElementName) throws IOException, InterruptedException {
		if (ElementName.equalsIgnoreCase(pageobjects.SimFreeExtrasPage.Tariffvaladity.getText())) {

			System.out.println("The Tariff detail is Present and the Text is :"
					+ pageobjects.SimFreeExtrasPage.Tariffvaladity.getText());
		} else {
			System.out.println("The Tariff detail is  Absent and the Text is :"
					+ pageobjects.SimFreeExtrasPage.Tariffvaladity.getText());

		}
		Screenshots.captureScreenshot();
	}

	public static void elementvisibility() throws IOException, InterruptedException {
		if (pageobjects.SimFreeExtrasPage.Contract_length.isDisplayed()) {
			System.out.println();
			System.out.println("The Element" + '\u0022' + " Contract length is 12 months" + '\u0022'
					+ "is not Displaying on the Screen");
		} else {
			System.out.println("The Element" + '\u0022' + "Contract length is 12 months" + '\u0022'
					+ "is not displaying on the Screen");
		}
		Screenshots.captureScreenshot();
	}

}
