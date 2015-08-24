#Advocacy marketing example

This task was challenging as I was presented with an unfamiliar scenario and an SDK which I'd never 
used. I also didn't fully understand the advocacy marketing process; I wrote an 
[explanation document](./explanation.txt) which I hoped would clarify it in my own mind, but I'm not 
sure if it explains the process correctly.

I read the company's [SDK README file on Github](https://github.com/digitalanimal/amigo-js-sdk) along 
with [information for developers](http://digitalanimal.com/developers/).

I decided not to use jQuery for this exercise as I wasn't going to be doing much DOM manipulation. 
The Amigo init 'debug' property was set to 'true' to trace the calls to the SDK in the console.

First of all, I set up the basic implementation which creates a shareToken and appends it to the url 
as a querystring. I took this code snippet from the README and added it to the head of my Sharepoint 
page, but one line of it needed amending:

    js.src = "//d22stxronnwc65.cloudfront.net/sdk-latest.js";

I had to add the protocol "https:" to the start of this to make it work, maybe because it's been moved 
to a secure server in the last week.

At this point I was still getting a "400 bad request error" when the SDK tried to post to the 
touchpoint data, or post the shareToken (not sure why, as the data object autosend property was set 
to 'true').

I am still slightly confused between the token (which is associated with a share channel) and the data 
object (I'm not sure what this is associated with - the Advocate?).

From the debugging information, it seems that there is an Amigo.Events.Ready event that you can attach 
an event listener to, but I can't find out about it in the documentation so I've put the 'add 
eventlistener to button' in a conventional function.

I thought that a token was created on pageload but the createToken function appears to be used after 
the page loads. Is this only to create additional tokens?

I originally split the JavaScript into two files with a module namespace but I had problems getting 
Amigo to be seen after loading the Touchpoint page. However, I've now made the two files into one and 
this hasn't helped - I'm still getting "Amigo not defined" when loading the Touchpoint page. It's not 
clear if I need to put the same code snippet on the Touchpoint page, but if you reinitialise Amigo 
in the head it clears the existing data so that wouldn't be wanted.

A [live online version is here](http://gimaju.net/digitalanimal/sharepoint.htm), but this is far 
from a working version!