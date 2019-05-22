Feature: 36_Reg_CFA_Basket_page_cross_sell_insurance_no_free_insurance

  @Web
  Scenario Outline:
  This scenario ensures that when the customer has selected a PayM phone having no free insurance and selecting cheapest insurance in basket page

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Choose your bill cap <BillCap> <CapAmount> when BSC is <BSCstatus>
    And verify that the insurance is in a sorted order
    And I Land on the basket page by clicking on Add to Basket button
    And verify that the cheapest insurance is shown to crossell in the basket page
    And verify if the 'Add Now' button is displayed for the cheapest insurance shown in basket page
    And click on the 'Add now' button and verify Insurance gets added successfully

    Examples:
      | handset       | BSCstatus | BillCap   | CapAmount |
      | iPhone 7 Plus | Enabled   | CapMyBill | £30       |
