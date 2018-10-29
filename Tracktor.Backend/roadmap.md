### Technicalities
*** FUTURE TODO ***
- testcafe 
- coding guide
- docker
- add continous integration
    https://hackernoon.com/continuous-integration-using-travis-on-github-1f7f2314b6b7

*** TODO ***
- add basic crud for sugars
- add simple visualization charts
- add firebase auth
- add CRUD snippet for express firebase operations (one for all? or C/R/U/D - separetely - one snippet per each?)
- separate Frontend/Backend into different projects
  (modularity, can reside on different servers etc.)
  microservices architecture

- Medium articles out of TIL github wiki
- create your page online - FASTEST POSSIBLE WAY, style it visually later

*** DONE ***
- setup initial babel, webpack, typescript, react app
- configure PWA required elements for offline first
- add firebase support
- enable image caching (webpack plugin [https://github.com/NekR/offline-plugin] caching all assets)
- enable css caching (webpack plugin [https://github.com/NekR/offline-plugin] caching all assets)
- add home icon for iOS
- add splash screen for iOS
- split development and production configs in webpack
- add gitignore
- add typestyle
- add storybook
- add linter
- add test env (jest, enzyme)
- add some predesigned elements library
- fork this to boilerplate on github and add nice description and instructions (check it s working also)

### Functionalities
*** TODO ***
- add sugar (etc) adder
- add charts

- add ability to add food_type (so user can add his food_types)
- add ability to set how many carbos is on CHEX (10, 12, 15?)
- add ability to add how many insulin units per 1CHEX at breakfast, dinner, supper, snacks
- make users VERY AWARE that this are just BASE calculations that would work in perfect world. If you excercised or sat in place for years, or ate a lot without giving insulin 1h ago, etc - IT MIGHT BE DIFFERENT. 
- calculate how many CHEX is for meal and hence how many insulin should be injected per that meal
- add info that popups may be disabled (have few levels of importance) in settings


*** DONE ***



### Notes

Meals:
	Organized in extendable sections (one section is one food - foodType/foodWeight + additional info)  
	Below all sections there s summarization
	Free notes (which sections should allow them - every?)

Wymiennik węglowodanowy (jednostka chlebowa, [ww]) - to jednostka używana w diabetologii, określająca 10 gramów (lub - w zależności od kraju - 12 gramów) węglowodanów przyswajalnych. Równoważna definicja wymiennika węglowodanowego, stosowana w Polsce, określa 1 wymiennik węglowodanowy jako 40 kcal/167 kJ.