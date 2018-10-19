Feature: 83_ Reg_Jan_Existing_OOSForHomeDeliveryandCnC

  This scenario ensures that when an existing customer has selected a device which is out of stock for both Home delivery and click and collect then the updated
  error messages should be displayed

  @Web

  Scenario Outline:  Existing_OOSForHomeDeliveryandCnC

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Navigate to device details page
    #And select <color> color of the connected device
    And the Delivery information section should show the 'OOS message'
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And the Delivery section should show 'OOS message'
    And I Land on the basket page by clicking on Add to Basket button
    And the Delivery section should show 'OOS message'


    Examples:
      | handset            | color  | username                     | password | BSCstatus | BillCap   | CapAmount |
      | iPhone 5s Like New | Silver | inl_feb4914@stf.ref.o2.co.uk | test123  | Enabled   | CapMyBill | £10       |