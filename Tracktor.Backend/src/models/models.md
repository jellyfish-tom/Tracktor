- [[USER]]
	- fields?

- MEDICATIONS somehow (think how to design it)
	- user has ability to add his medications (complex objects, with notes on each, dosages etc.)
	- application will allow to mark medication as taken
	- application will PUSH messages for user to make him remember (at times configured)

- [[SUGAR_LEVEL]]
	- timestamp
	- place (geo)
	- value
	- carbohydrates
	- foodInsulin
	- correctionInsulin
	- baseInsulin
	- [[MEAL]]
	- [[ACTIVITY]]
	- [[BLOOD_PRESSURE]]

- [[MEAL]]
	- array[[FOOD]] (dropdown with autocomplete)
	- totalCarbo
	- totalCalories
	- totalFat
	- totalProtein
	- totalCHEX
	- totalFPEX
	- baseInsulinInjectinoCalculation
	- notes
	
- [[ACTIVITY]] (would be best to import from Garmin and write more integrations in time)
	- timestamp

- [[BLOOD_PRESSURE]]
	- systolic (skurczowe, to większe, ex. 120)
	- diastolic (rozkurczowe, to mniejsze, ex. 80)
	- timestamp
	- notes

- [[FOOD]] (not named like carrot or anything, just IDed. Will be named FOOD in app)
	- [[FOOD_TYPE]]
	- weight
	- carbohydrates (auto from above weight/100 * carboIn100g) 
	- fat (auto from above weight/100 * fatIn100g) 
	- calories (auto from above weight/100 * caloriesIn100g)
	- proteins (auto from above weight/100 * proteinsIn100g)
	- CHEX (for this FOOD_TYPE)
	- FPEX
	- notes

- [[FOOD_TYPE]] (carrot, cucumber, white bread, dark bread, cocacola, snickers)
	- name
	- carbo per 100g
	- fat per 100g
	- protein per 100g
	- calories per 100g
	- CHEX per 100g (CarboHydrateExchange)
	- FPEX per 100g (FatProteinExchenge)
	- GI (GlycemicIndex)


