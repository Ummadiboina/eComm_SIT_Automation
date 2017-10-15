Feature: CFA_Phones_SSCcheckoutpagesMarkMandatoryFieldsWithAsterisk

  CFA PayM phones SSC checkout validation
@Web
  Scenario Outline: CFA_Phones_SSCcheckoutpagesMarkMandatoryFieldsWithAsterisk
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And click on the color dropdown
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    #Below is delivery page
    And verify copy text ‘You'll need to give details for all fields marked with an asterisk(*).’ is displayed
    And verify asterisk is displayed against mandatory fields of "Delivery page"
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
    #Below is payment page
    And verify copy text ‘You'll need to give details for all fields marked with an asterisk(*).’ is displayed
    And verify asterisk is displayed against mandatory fields of "Payments page"
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page, click on ‘change delivery’
    And verify copy text ‘You'll need to give details for all fields marked with an asterisk(*).’ is displayed
    And verify asterisk is displayed against mandatory fields of "Review Delivery page"
    And Click on the 'Continue button'
    And Continue to Review page and review the order
    Then order confirmation is displayed

      #Close the browser
    Examples:
      | handset | Firstname | Surname | Username |         |
