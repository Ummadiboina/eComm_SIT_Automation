Feature: Reg_FNT_AFA_Handset_Click_and_Collect_Passport_and_Driving_license

  #launch hooks and get browser
  @FNTRegression
  Scenario Outline: This test scenario ensures that a CC order is successful which accepts additional information like Passport details Driver License details and additional card details but is finally in Referred status
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And select a valid store for Click and Collect
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And input additional card details <Username>
    And input Driving license details <License_Postcode> and <License_Number>
    And input Passport details <Country>, <Passport_Number1>,<Passport_Number2>,<Passport_Number3>,<Passport_Gender>, <Passport_Expirydate>,<Passport_Checkdigit>
    And Register customer with valid <Password>, <Confirm_Password>, <Security_Question>, <Security_Answer> in delivery page
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    Examples: 
      | Device | Tariffs | Firstname | Surname | Username | License_postcode | License_Number | HouseNumber |PostCode|
      |        |         |           |         |          |                  |                |         |         |

      |Country | Passport_Number1 | Passport_Number2 | Passport_Number3 | Passport_Gender | Passport_Expirydate | Passport_Checkdigit|
      |        |          |                  |                   |                        |                     ||
      
      |Password | Confirm_Password | Security_Question | Security_Answer |
      |         ||||