Feature: 74_Reg_FNT_AFA_Handset_Click_and_Collect_Passport_and_Driving_license

  #launch hooks and get browser
  @Web
  Scenario Outline: This test scenario ensures that a CC order is successful which accepts additional information like Passport details Driver License details and additional card details but is finally in Referred status
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Select a valid store using <postCode> for Click and Collect
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And input additional card details Driving license <License_postcode> and <License_Number>
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    #And input additional card details passport details <country> and <Passport_number>
    #And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed


    #Step number 16 and 17 need to be defined to carry out end to end journey#
    Examples:
      | Device                        | Tariffs | License_postcode | License_Number | country | Passport_number | Firstname | Surname  | Username      | HouseNumber | PostCode | postCode | B1  | B2  | B3     | B4  | Text | Email | Phone | Post | Consumer | status  | Password | confirmPassword | SecurityAnswer | MBBStatus | DeviceType | DeviceModule |
      | iPhone 8 Plus 64GB Space Grey | Random  | sl11el           | 122SS23ERT     | IND     | G02DSRE£        | TEST      | ADDINFOI | TEST ADDINFOI | 14          | SL11UP   | TQ13DG   | Not | Not | Select | Not | Not  | Not   | Not   | Post | Me       | Enabled | test123  | test123         | Jkhan          | No        | Connected  | Phone        |
