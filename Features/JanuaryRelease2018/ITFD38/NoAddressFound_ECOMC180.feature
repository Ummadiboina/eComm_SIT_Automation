Feature: NoAddressFound_ECOM180

  This scenario ensures that when the customer searches for a commercial address and no address is returned then an error message should be displayed

  @Web
  Scenario Outline: NoAddressFound_ECOM180

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    #In this scenario postcode to be invalid
    And enter a house number and an <Postcode>
    Then the respective <error> message should be displayed

    Examples:
    |handset|Postcode |error    |
    |       | Invalid | Invalid |
