---
id: doc_badges
title: Luftdaten ranking badges
---

## Luftdaten ranking badges

Badges are created for the multiple local organisations, so they could show the amount of censors they have in their city or country.
We opted for an image based counter so it could be implemented on every possible website.
The only thing the user needs to do is to add an image to his html code.

The shown number is always the amount of sensors seen for that area during the last 24 hours.

The data is available at our [data api](https://docs.influencair.be/docs/doc_api_data)

### City badge

```
<img src="https://data.influencair.be/badge/amount/city/brussels.png" />
```
*Creates:* ![alt text](https://data.influencair.be/badge/amount/city/brussels.png "Amount of sensors in Brussels")

#### Options

The styling of the badge can be altered by adding a couple of search paramaters to the url of the image

| parameter | description | value | default|
| --- | --- | --- | --- |
| *pre* | add some text infront of the amount number | `text` | / |
| *post* | add some text after of the amount number | `text` | / |
| *color* | change font color | `green` | `black` |
| *bgColor* | change background color | `white` | `transparent` |
| *fontSize* | change font size | `30` | `20` |
| *font* | change the font | `Futura` | `Gill Sans` |

> **Warning** Font options need to be tested, a limited amount of font's are supported.

> **Warning** The searchparameters in the url needs to be URL encoded

##### Examples

###### Pre and post text

```
<img src="https://data.influencair.be/badge/amount/city/Brussels.png?pre=Brussels%20has%20currently&post=sensors" />
```
*Creates:* ![alt text](https://data.influencair.be/badge/amount/city/Brussels.png?pre=Brussels%20has%20currently&post=sensors "Amount of sensors in Brussels")

###### Color and background color
```
<img src="https://data.influencair.be/badge/amount/city/Brussels.png?color=red&bgColor=black" />
```
*Creates:* ![alt text](https://data.influencair.be/badge/amount/city/Brussels.png?color=red&bgColor=black" "Amount of sensors in Brussels")

###### Font

Change font type and size
```
<img src="https://data.influencair.be/badge/amount/city/Brussels.png?fontSize=40&font=Serif" />
```
*Creates:* ![alt text](https://data.influencair.be/badge/amount/city/Brussels.png?fontSize=40&font=Serif" "Amount of sensors in Brussels")

###### Custom

Change font type and size
```
<img src="https://data.influencair.be/badge/amount/city/Brussels.png?post=sensors&color=red&font=Courier&fontSize=30" />
```
*Creates:* ![alt text](https://data.influencair.be/badge/amount/city/Brussels.png?post=sensors&color=red&font=Courier&fontSize=30 "Amount of sensors in Brussels")

### Country badge

```
<img src="https://data.influencair.be/badge/amount/country/belgium.png" />
```
*Creates:* ![alt text](https://data.influencair.be/badge/amount/country/belgium.png "Amount of sensors in Belgium")

## Add your badge to Wordpress

In wordpress you can add these images to a post or a page

1. To add an image from a URL to a post or page in WordPress, click into the post or page where you would like the image to appear.
2. Click the “Add Media” button to open the “Insert Media” dialog box.
3. Click the “Insert from URL” link at the left side of the dialog box.
4. Input the URL address for the image into the top text box where the “http:” text is shown.
5. Use the text boxes that then appear below the image to add a caption and alt text.
6. Choose how to align the image, and to where the image links, by clicking the desired button choices.
7. Click the “Insert into post” button in the lower-right corner of the “Insert from URL” dialog box.

Here you can find a [video tutorial](https://www.youtube.com/watch?v=5o6-DKQuQ_4) on how to add an image via URL

> This image cannot be set as a featured image.