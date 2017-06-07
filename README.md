# _Pig Latin_

#### _JS Exercise for Epicodus, 06.07.2017_

#### By _**Calla Rudolph (<callarudolph@gmail.com>) & Michelle Poterek (<poterekm@gmail.com>)**_

## Description

_This webpage allows the user to enter any word and JS will return the word into Pig Latin. JS utilizes  specifications to determine the answer._

## Setup/Installation Requirements

* _Open GitHub site on your browser: https://github.com/CallaRudolph/leap-year_
* _Select the dropdown (green box) "Clone or download"_
* _Copy the link for the GitHub repository_
* _Open Terminal on your computer_
* _In Terminal, perform the following steps:_
  * _type 'git clone' then copy the repository link and press enter_
  * _type 'cd leap-year' to access the path on your computer_
  * _type 'open index.html' to view the Leap Year webpage on your browser_

## List of Specs:

* The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
Example Input: 3
Example Output: 3

The program recognizes a single vowel.
Input Example: a
Output Example: a

The program recognizes a single vowel, regardless of case.
Input Example: A
Output Example: A

The program adds "ay" to single-letter words beginning with a vowel.
Example Input: i
Example Output: iay

The program adds "ay" to multiple-letter words beginning with a vowel.
Example Input: apple
Example Output: appleway

The program recognizes a single consonant because it is not a vowel.
Input Example: b
Output Example: b

The program recognizes a single consonant, regardless of case.
Input Example: B
Output Example: B

The program recognizes a consonant at the beginning of the word.
Input Example: snacks
Output Example: S

The program moves the first consonant in word to the end.
Input Example: blueberry
Output Example: lueberryb

The program repeats moving consonants to end of word until it hits a vowel.
Input Example: blueberry
Output Example: ueberrybl

The program repeats moving consonants to end of word until it hits a vowel and then adds "ay".
Input Example: blueberry
Output Example: ueberryblay

The program recognizes words beginning with "qu" and treats that "u" as a consonant.
Input Example: queen
Output Example: eenquay

The program recognizes that words beginning with a "y" will treat the "y" as a consonant.
Input Example: yellow
Output Example: ellowyay



## Support and contact details

_Please feel free to contact us through e-mail if you have any questions, comments, or feedback._

## Technologies Used

_This project uses jQuery primarily as well as minor styling in Bootstrap._

### License

*This project is under the MIT License*

Copyright (c) 2017 **Calla Rudolph and Michelle Poterek**
