#NYC Hipster Developer Meetup#

## Problem

NYC is home to some pretty sweet, hipster developers. Genevieve, a developer from BKLN's up-and-coming Carrol Gardens neighborhood, wants to facillitate a monthly meetup for hipster devs. She knows there is nothing more enticing to fellow developers than a hand-crafted, artisinal TCP app. She has contracted you to build it for her.


##Features##

* Program is accessible via public IP address.
```bash
  telnet publicIP port#
````
* Developers must be able to see date and topic for upcoming meetup and be able to RSVP
```bash
Meet-up
Javascript Meet-up 4/15/2015 RSVP by typing name and email
````

* The data collected will be stored via a .json
* If they don't provide name and email they cannot RSVP
```bash
I don't want to provide my name
Please provide name and email to RSVP
````
* After RSVP developers should see how many people are attending.
```bash
List
249 developers are attending
````
* Certain Users can access admin commands
```bash
admin commands password
````
*Admin can see help commands
```bash
help
you can type adminlist, meetup or clear, followed by password
````
* Admin can access list of developers
```bash
adminlist password
[{cheese, cheese@gmail.com}]
````
* Admin can set date and topic for next meetup
```bash
meetUp password Chrome 05/02/15
New meet-up Chrome 05/02/15
````
* Admin can clear the RSVPS
```bash
clear password
all RSVPs cleared
````
