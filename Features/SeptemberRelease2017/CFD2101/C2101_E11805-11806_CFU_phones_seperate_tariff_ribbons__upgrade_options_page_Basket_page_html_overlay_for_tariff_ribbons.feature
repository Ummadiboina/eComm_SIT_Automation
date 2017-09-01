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
	And Verify 'Overlay icon' is displayed on the promotional ribbons in the Upgrade Option page 
	And Verify that the tariff ribbons are displayed in tariff upsell config of 'Your package' section 
	And Click on the 'Overlay icon' in tariff upsell config of 'Your package' section and verify pop up gets displayed in the Tariff and Extras Page 
	And I Land on the basket page by clicking on Add to Basket button 
	And Verify Promotional ribbons are displayed under Tariff section in the Basket page 
	And Verify 'Overlay icon' is displayed on the promotional ribbons in the Basket page 
	And Click on the 'Overlay icon' in the Basket page and verify pop gets displayed 
	And LogOut from the Upgrade Journey 
	Given I am an CFA user and Lands on shop page 
	And navigate to PAYM Phones page 
	And I choose PayM <handset> 
	And Navigate to device details page 
	And Select a <Tariff> with ribbons
	Then Verify Promotional ribbons displayed are not same as the one displayed in Upgrade Journey
		
	
	Examples: 
		|username|password|Tariff|handset|
		|in07193k_351534@o2.com|test123|Samsung Galaxy S8|