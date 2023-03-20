# Client

It is a simple application that can be run locally for using the Server's API for currency exchange. 

## Supported OS Platforms

MacOS, Windows and Linux Browsers

## Required OS Software

Please install [nodejs](https://nodejs.org/en/) first on your local machine

## Programming Language Used

NodeJS using Typescript framework

## Installation

On the root directory, open a command prompt or shell and enter the commands:
```bash
npm install
```
and
```bash
npm install --save-dev
```
## Usage

To run the application, using the same command prompt or shell, enter the commands:
```bash
npm start
```
a message will display that the application is now running at PORT 5000. Open a browser and type in [http://localhost:5000](http://localhost:5000). Seeing a message on the browser page means that it ran successfully.

## UI Components
1. Currency From drop-down
* default value=EUR
>When clicked, will show a drop-down where user selects base currency

2. Currency To drop-down
* default value=EUR
>When clicked, will show a drop-down of currencies where the base currency will be converted to

3. Input Amount Field
* default value=1
> When clicked, will let user input the amount that will be converted

4. Date Picker
[default value=Current Date]
> When clicked, will let user pick the historical date of the conversion rate that would be used for the selected currencies

5. Convert Button
> When clicked, will submit the currently selected values from the **Currency From Drop-down**, **Currency To Drop-down**, **Input Amount Field** and **Date Picker** and process the conversion

6. Refresh Button
* can only be triggered when a process fails in the API or there is no internet connection
>> when clicked, will refresh browser page
