---
id: doc2
title: Luftdaten
---

## Luftdaten tools

### Map

http://maps.luftdaten.info

## Luftdaten endpoints

### Current data

We have some 'API' endpoints to access the sensor data. The data is saved once per minute due to performance reasons:  
http://api.luftdaten.info/static/v1/data.json - all measurements of the last 5 minutes for all sensors  
http://api.luftdaten.info/v1/sensor/{apiID}/ - all measurements of the last 5 minutes for one sensor  
http://api.luftdaten.info/v1/filter/{query} - all measurements of the last 5 minutes filtered by query
* type={sensor type} : comma separated list of sensor types, i.e. 'SDS011,BME280'  
* area={lat,lon,distance} : all sensors within a max. radius  
* box={lat1,lon1,lat2,lon2} : all sensors in a 'box' with the given coordinates
* country={country code} : i.e. 'BE, DE, NL, ...'
  
http://api.luftdaten.info/static/v2/data.json - average of all measurements per sensor of the last 5 minutes for all sensors  
http://api.luftdaten.info/static/v2/data.1h.json - average of all measurements per sensor of the last hour  
http://api.luftdaten.info/static/v2/data.24h.json - average of all measurements per sensor of the 24 hours  
http://api.luftdaten.info/static/v2/data.dust.min.json - same as data.json but dust sensors only  
http://api.luftdaten.info/static/v2/data.temp.min.json - same as data.json but temp./humidity/air pressure sensors only

### Historical data

http://archive.luftdaten.info/ - historical data archive per day/month

*source:* https://github.com/opendata-stuttgart/meta/wiki/APIs