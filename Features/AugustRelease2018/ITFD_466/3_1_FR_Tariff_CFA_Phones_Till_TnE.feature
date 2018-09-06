Feature: 3_1_FR_Tariff_CFA_Phones_Till_TnE.feature

  @Web
  Scenario Outline: 3_1_FR_Tariff_CFA_Phones_Till_TnE
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Build your plan with <upFront> <term> and <data>
    #And Navigate to device details page
    #And Land on the 'Tariffs and extra' page

    Examples:
      | handset       | tariffAmt | dataValue | color      | Firstname | Surname | consumer | B1     | B2  | B3  | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType | upFront | term | data |
      | iPhone 8 Plus | £39       | 8GB       | Space Grey | Test      | Accepta | Me       | Select | Not | Not | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  | min     | min  | max  |

