Feature: CFA_Basket page cross sell insurance

  @Web
  Scenario Outline: CFA_Basket page cross sell insurance
  This scenario ensures that when the customer
  has selected a PayM phone having one associated tariffs which had free insurance and has selected that  tariff
  in the tariff and extras page without selecting the free insurance then free insurance is displayed as cross sell on basket page

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And select a <tariff> which has free insurance
    And deselect if any insurance is autoselected
    And verify that the insurance is in a sorted order
    And I Land on the basket page by clicking on Add to Basket button
    And verify that the cheapest insurance is shown to crossell in the basket page
    And verify if the 'Add Now' button is displayed for the cheapest insurance shown in basket page
    And click on the 'Add now' button and verify Insurance gets added successfully

    Examples:
      | handset | tariff                 |
      | Apple8  | 9.99upfront68.00amonth |
