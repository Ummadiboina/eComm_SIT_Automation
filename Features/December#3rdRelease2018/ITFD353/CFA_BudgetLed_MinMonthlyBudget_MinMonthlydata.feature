Feature: CFA_BudgetLed_MinMonthlyBudget_MinMonthlydata

  @Web
  Scenario Outline: CFA_BudgetLed_MinMonthlyBudget_MinMonthlydata
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Navigate to View tariff page
    And Navigate to BudgetLed and click on See your Budget
    And Configure the Budgetled <monthlyBudget> <monthlyData>
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>


    Examples:
      | handset       | tariffAmt | dataValue | color      | monthlyBudget | monthlyData | Firstname | Surname | consumer | BSCstatus | B1     | B2  | B3  | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType | upFront | term | data | Firstname | Surname |
      | iPhone 8 Plus | £39       | 8GB       | Space Grey | Min           | Min         | Test      | Accepta | Someone  | Enabled   | Select | Not | Not | Not | Select | Not   | Not   | Not  | Enabled | No        | Connected  | avg     | min  | avg  | TEST      | ACCEPTA |

