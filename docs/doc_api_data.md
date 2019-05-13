---
id: doc_api_data
title: Data Api
---

## Data api https://data.influencair.be/

- This service consumes the the current luftdaten api.
- It keeps track of all sensor locations
- It enriches the sensor locations with a city name
- It calculates the ranking for each country and city for the amount of sensors

### /ranking

#### /ranking/cityRanking

A sorted list of all the sensors seen for the last 24 hours grouped by city
https://data.influencair.be/ranking/cityRanking.json

#### /ranking/countryRanking

A sorted list of all the sensors seen for the last 24 hours grouped by country
https://data.influencair.be/ranking/countryRanking.json

### /now

Same data as http://api.luftdaten.info/static/v2/data.json but ordered by sensorlocation
https://data.influencair.be/now/data.json

### /now/:countryCode

A subset per country of http://api.luftdaten.info/static/v2/data.json

### /cityList

A list of sensorLocation id's per city
https://data.influencair.be/cityList.json

#### Usage
Might be useful to grab a subset from http://api.luftdaten.info/static/v2/data.json

### /countryList

A list of sensorLocation id's per country
https://data.influencair.be/countryList.json

#### Usage
Totally useless because countryCode is already within the dataset of luftdaten