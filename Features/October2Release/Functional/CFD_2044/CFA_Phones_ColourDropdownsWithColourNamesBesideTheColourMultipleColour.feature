Feature: CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour

  @Web @oct2release
  Scenario Outline: CFA_Phones_ColourDropdownsWithColourNamesBesideTheColourMultipleColour
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in <CFAPhoneColour>
   # And select a color
    And select <color> color of the connected device
    And Land on the 'Tariffs and extra' page
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in <CFATariffColour>
    And select <color> color of the connected device
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input the below details in Delivery page
      | HouseNumber           | 5            |
      | Post Code             | BS7 0NP      |
      | Title                 | Mr           |
      | FirstName             | Test         |
      | Surname               | Accepta      |
      | Contact Number        | 078228377333 |
      | Password              | TesterSit123 |
      | Security Question     | Random       |
      | Security Answer       | Sit Testers  |
      | Date of Birth - Date  | 22           |
      | Date of Birth - Month | 10           |
      | Date of Birth - Year  | 1990         |
    And Click on the 'Continue button'
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

    #Close the browser
    Examples:
      | handset | Username     | CFAPhoneColour | CFATariffColour |
      | Iphone7 | TEST ACCEPTA | Gold           | Gold            |