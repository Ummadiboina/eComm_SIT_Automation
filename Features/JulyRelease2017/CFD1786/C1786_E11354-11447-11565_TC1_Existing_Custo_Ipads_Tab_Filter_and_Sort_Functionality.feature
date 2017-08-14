Feature: C1786_E11354-11447-11565_TC1_Existing_Custo_Ipads_Tab_Filter_and_Sort_Functionality.feature 

Scenario Outline:
This scenario ensures that when the existing customer lands on new basecomm page and selects 'iPads' tab, 
	then the customer should be able to see 'Sort' and 'Filter' tab and the customer should be able to do Sort and Filter functionality same as that of listings page

	Given I am existing user and I click on Signin button
	And Signin using valid <username> and <password> credentials
	And I navigate to the Basecomm Page 
	And Click on iPad tab
	And Verify the contents of the iPad section in the landing page
	#Verify URL is iPad specific
	And Verify the current sort order details <sort option>
	And click on the Sort tab and choose required <sort option>
	And Verify the devices gets sorted based on the sort option <sort option>
	And click on the Sort tab and reset sort
	And Verify that original sort order is retained <sort option>
	And click on the Filter tab and choose required <Filter> and option <Option>
	And Verify the devices gets displayed as per the filter applied <Filter> and option <Option> 
	
	Examples: 
		| username             | password | sort option      | Filter | Option |
		| 07770001111@o2.co.uk | test123  | MonthlyLowToHigh | Offer | Microsoft Office 365 |
		#Filter: Brand,Colour,Offer
		#BrandFilter-Options:Alcatel,Apple,Doro,HTC,Huawei,LG,Moto,OnePlus,Samsung,Sony
		#ColourFilter-Options:Grey,Black,Yellow,Blue,White,Green,Red
		#OfferFilter-Options:Free JBL headphones, Microsoft Office 365
