Feature: C2101_E11805-11806_CFA_seperate_tariff_ribbons_Tariff_page_Basket_page_html_overlay_for_tariff_ribbons 

Scenario Outline: 
	This scenario ensures that when the customer on Acquisition journey selects tariff for a device with ribbons, then the tariff ribbon should be displayed with html overlay on the following pages,
	1.Tariff and Extras page
	2.Basket page

	Given I am an CFA user and Lands on shop page 
	And navigate to PAYM Phones page 
	And I choose PayM <handset> 
	And Navigate to device details page 
	And Select a tariff <tariff> with ribbons 
	And Verify whether promotional ribbons are displayed for <tariff> on the Tariff tile in the Tariff and Extras page 
	And Verify 'Overlay icon' is displayed on the promotional ribbons for <tariff> in the Tariff and Extras page 
	And Click on the 'Overlay icon' for <tariff> in the Tariff and Extras page and verify pop up gets displayed 
	And Verify that the tariff ribbons are displayed in tariff upsell config of 'Your package' section 
	And Click on the 'Overlay icon' in tariff upsell config of 'Your package' section and verify pop up gets displayed in the Tariff and Extras Page 
	And I Land on the basket page by clicking on Add to Basket button 
	And Verify Promotional ribbons are displayed under Tariff section in the Basket page 
	And Verify 'Overlay icon' is displayed on the promotional ribbons in the Basket page 
	And Click on the 'Overlay icon' in the Basket page and verify pop gets displayed 
	And click on "go to checkout" button 
	And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button' 
	And land on the payment page and input <Username> and other details and click 'Continue on next step' 
	And Continue to Agreements page and confirm all the agreement checks 
	And Continue to Review page and review the order 
	Then order confirmation is displayed 
	
	
	Examples: 
		|handset|tariff|Firstname|Surname|
		|Apple iPhone 7|129.99upfront37.00amonth|TEST|ACCEPTA|