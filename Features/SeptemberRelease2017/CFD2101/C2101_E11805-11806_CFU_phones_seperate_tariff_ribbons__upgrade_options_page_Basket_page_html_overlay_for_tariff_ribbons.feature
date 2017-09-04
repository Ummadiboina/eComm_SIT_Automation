Feature: C2101_E11805-11806_CFU_phones_seperate_tariff_ribbons__upgrade_options_page_Basket_page_html_overlay_for_tariff_ribbons 

Scenario Outline: 
	This scenario ensures that when the customer on upgrade journey selects tariff for a device with ribbons, then the tariff ribbon should be displayed with html overlay on the following pages, 
	1.Upgrade options page
	2.Basket page

	Given I am existing user and I click on Signin button 
	And Signin using valid <username> and <password> credentials 
	And Navigate to upgrade phone 
	And Select a <handset> device from Recommended devices section 
	And Select a tariff <tariff> with ribbons in upgrade journey 
	And Verify whether promotional ribbons are displayed for <tariff> on the Tariff tile in the upgrade journey 
	And Verify 'Overlay icon' is displayed on the promotional ribbons for <tariff> in the Upgrade Option page 
	And Click on the 'Overlay icon' for <tariff> in the upgrade page and verify pop up gets displayed 
	And Verify that the tariff ribbons are displayed in tariff upsell config of 'Your package' section in upgrade journey 
	And Click on the 'Overlay icon' in tariff upsell config of 'Your package' section and verify pop up gets displayed in upgrade journey 
	
	And Verify Promotional ribbons are displayed under Tariff section in the Basket page 
	And Verify 'Overlay icon' is displayed on the promotional ribbons in the Basket page 
	And Click on the 'Overlay icon' in the Basket page and verify pop gets displayed 
	And I Land on the basket page by clicking on Add to Basket button
	And LogOut from the Upgrade Journey
	Given I am an CFA user and Lands on shop page 
	And navigate to PAYM Phones page 
	And I choose PayM <handset> 
	And Navigate to device details page 
	And Select a tariff <tariff> with ribbons 
	And Verify whether promotional ribbons are displayed for <tariff> on the Tariff tile in the Tariff and Extras page 
	Then Verify Promotional ribbons displayed are not same as the one displayed in Upgrade Journey 
	
	Examples: 
		|username|password|handset|tariff|
		|in913563_129893@o2.com|test123|Apple iPhone 7|19.99upfront42.00amonth|