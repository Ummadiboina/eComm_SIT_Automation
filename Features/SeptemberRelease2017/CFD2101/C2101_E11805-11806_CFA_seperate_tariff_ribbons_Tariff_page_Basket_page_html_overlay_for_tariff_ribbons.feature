Feature: CFA_seperate_tariff_ribbons_Tariff_page_Basket_page_html_overlay_for_tariff_ribbons 

Scenario Outline: 
	This scenario ensures that when the customer on Acquisition journey selects tariff for a device with ribbons, then the tariff ribbon should be displayed with html overlay on the following pages,
	1.Tariff and Extras page
	2.Basket page

	Given I am an CFA user and Lands on shop page 
	And navigate to PAYM Phones page 
	And I choose PayM <handset> 
	And Navigate to device details page 
    And Select a <Tariff> with ribbons
	And Verify whether promotional ribbons are displayed on the Tariff tile in the Tariff and Extras page
	And Verify 'Overlay icon' is displayed on the promotional ribbons  in the Tariff and Extras page
	And Click on the 'Overlay icon' in the Tariff and Extras page and verify pop up gets displayed
	And Close the Overlay popup
	And I Land on the basket page by clicking on Add to Basket button 
	And Verify Promotional ribbons are displayed under Tariff section in the Basket page 
	And Verify 'Overlay icon' is displayed on the promotional ribbons in the Basket page 
	And Click on the 'Overlay icon' in the Basket page and verify pop gets displayed 
	And Close the Overlay popup
	
	
	
	
	Examples: 
		|handset|Tariff|
		|||