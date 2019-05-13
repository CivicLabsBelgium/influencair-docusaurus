---
id: doc4
title: History API
---

## History api https://history.influencair.be/

Data origin: http://archive.luftdaten.info/

This service is made to make the data more consumable by a web viewers.
Data is parsed from the csv files into json files per phenomenom, location per lat/lng, day

```
http://archive.luftdaten.info/{phenomenom}/{lat-lng}/{day}/data.json
```

### phenomenom

- **PM10:** Measurements for particulate matter of 10 micron size
- **PM25:** Measurements for particulate matter of 2.5 micron size

### lat-lng

- **lat:** Numbers ranging from -180° to 180°
- **lng:** Numbers ranging from -180° to 180°
Latitude (lat) and longitude (lng) needs to be combined with a `-`

### day

Day needs to formated in the `YYYY-MM-DD` format
*Example:* `2019-05-04` 

> **Warning:** Not all days are pre-generated, check /availableDays and /generate/{day} endpoint

## History API helper endpoints

### /availableDays

https://history.influencair.be/availableDays returns a JSON Array of all available days that are already generated on the platform

