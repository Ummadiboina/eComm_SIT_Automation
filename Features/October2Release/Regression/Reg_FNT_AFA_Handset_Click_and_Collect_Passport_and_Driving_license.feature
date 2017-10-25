Feature: Reg_FNT_AFA_Handset_Click_and_Collect_Passport_and_Driving_license

  #launch hooks and get browser
  @FNTRegression @Web
  Scenario Outline: This test scenario ensures that a CC order is successful which accepts additional information like Passport details Driver License details and additional card details but is finally in Referred status
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Select a valid store using <PostCode> for Click and Collect
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And input additional card details Driving license <License_postcode> and <License_Number>
    And input additional card details passport details <country>, <Passport_number>
    And Register customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed
    
    Examples: 
      | Device              | Tariffs | Extras | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode |
      | S7 edge black 32 GB | Random  | Base   | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA |           14 | SL11UP   |
