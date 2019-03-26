Feature: 01_AFA_PAYG_ClassicTariff_Basketpage_Disable_CNCnow

    This story ensures that user is performing AFA Phone PAYG journey, verify the behaviour of click and collect now
    option for selected plan or device based on flag values
  #launch hooks and get browser
  @Web
  Scenario Outline: AFA_PAYG_ClassicTariff_Basketpage_disable_CNCnow
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a PAYG <Device> in stock which is less than 50 GBP
   # And Select a valid PAYG <Device>
    And Select valid tariff from PAYG tariffs tab which is less than <Tariff> GBP
    And Confirm Device and Tariff are added in Deal Builder
    And choose and check valid store for click and collect Now
   # And Select a valid store using <PostCode> for Click and Collect
    And Verify that the error <errorMessage> is displayed
    And Click on Empty above button in agent basket page
    And Select a valid PAYG <Device>
    And Select valid <Tariffs> from PAYG tariffs tab
    And Confirm Device and Tariff are added in Deal Builder
    And Choose a valid store for Click and Collect Now
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed

    Examples:
      | Device                               | Device   | Tariff |Tariffs| errorMessage | Firstname | Surname | HouseNumber | PostCode | B1     | B2  | B3     | B4  | Text | Email  | Phone  | Post | Consumer | status  | Password | confirmPassword | SecurityAnswer | MBBStatus | DeviceType | DeviceModule |
      | Galaxy Trend 2 Lite Perfect Like New | In stock | 50      |Random |              | TEST      | ACCEPTA | 4           | sl11er   | Select | Not | Select | Not | Not  | Select | Select | Not  | Me       | Enabled | test123  | test123         | Jkhan          | No        | Connected  | Phone        |
