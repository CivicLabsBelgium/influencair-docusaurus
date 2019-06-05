---
id: doc_api_history
title: History API
---

## History api 

```
https://history.influencair.be/
```

Data origin: http://archive.luftdaten.info/

This service is made to make the data more consumable by a web viewers.
Data is parsed from the csv files into json files per phenomenom, location per lat/lng, day

```
https://history.influencair.be/{phenomenom}/{lat-lng}/{day}/data.json
```

*Example:* https://history.influencair.be/PM10/51-3/2019-05-04/data.json

### {phenomenom}

- **PM10:** Measurements for particulate matter of 10 micron size
- **PM25:** Measurements for particulate matter of 2.5 micron size

### {lat-lng}

- **lat:** Numbers ranging from -180° to 180°
- **lng:** Numbers ranging from -180° to 180°<br/>Latitude (lat) and longitude (lng) needs to be combined with a `-`

### {day}

Day needs to formated in the `YYYY-MM-DD` format
*Example:* `2019-05-04` 

> **Warning:** Not all days are pre-generated, check /availableDays and /generate/{day} endpoint

## History API helper endpoints

### AvailableDays

```
https://history.influencair.be/availableDays
```
*returns* a JSON Array of all available days that are already generated on the platform

### AvailableLocations/{YYYY-MM-DD}

```
https://history.influencair.be/availableLocations/{YYYY-MM-DD}
```
*returns* a JSON Array of all available lat-lng tiles for this day

### GenerateHistory/{YYYY-MM-DD}

```
https://history.influencair.be/generateHistory/{YYYY-MM-DD}
```
This call will start generating the history files for this day (YYYY-MM-DD). It will check the availability in the luftdaten archive, and download all the csv files for every SDS011 sensor.

This call will also put the request in a queu if more requests for a certain date are made. 

> It may take up to 2 hours to download all the csv file and process them into json files

## Concept

The idea to create a static file server is because running a full fledged queryable database has his operational limits. Queries will needs te be limited in order to keep the server alive with a minimal effort.
Preprocessing data into a manageble format, chopped up in smaller piece makes is more easy for front-end applications to consume partial data.

A side effect of this choice is that part of the processing cost (in resources) is moved to the client or consumer of this data. 
