Feature: CFA_Budgetled

  @Web
  Scenario Outline: CFA_Budgetled
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Navigate to View tariff page
    And Navigate to BudgetLed and click on See your Budget
    And Configure the Budgetled <monthlyCalc> <monthlyData>



    Examples:
      | handset       | tariffAmt | dataValue | color      | monthlyCalc | monthlyData | Firstname | Surname | consumer | BSCstatus | B1     | B2  | B3  | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType | upFront | term | data |
      | iPhone 8 Plus | £39       | 8GB       | Space Grey | avg         | avg         | Test      | Accepta | Me       | Enabled   | Select | Not | Not | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  | avg     | min  | avg  |

