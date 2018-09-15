Feature: 81_Reg_Jan_CFA_OOSForHomeDeliveryandCnC

  This scenario ensures that when customer on aquisition journey has selected a device which is out of stock for both Home delivery and click and collect then the updated
  error messages should be displayed

  @Web

  Scenario Outline:  Aquisition_OOSForHomeDeliveryandCnC

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Navigate to device details page
    And the Delivery information section should show the 'OOS message'
    And Land on the 'Tariffs and extra' page
    #And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Click on Dont Select Cap My Bill CTA
    And the Delivery section should show 'OOS message'
    And I Land on the basket page by clicking on Add to Basket button
    And the Delivery section should show 'OOS message'


    Examples:
      | handset            | color  | username               | password | BSCstatus |
      | iPhone 5s Like New | Silver | dasdasdkjaskd@sdsd.com | test123  | Enabled   |