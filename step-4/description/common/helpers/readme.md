BDD: Given a list, I want to order a bunch of things without affecting the position of neighbours

#Goal
Using lexicographic ordering, generate a string that will be smaller, bigger or in-between
a set of strings that will allow javascripts String.localeCompare to do its thing

##Ideas
- There are 26 letters in the english alphabet and for the sake of simplicity, we will only be using lowercase letters
(although we could extend this out to the entire unicode char set).
- Due to the lower case restriction, lowercase 'a' will be the smallest possible value so we lets try not to return 'a'
- The center point is either 'm' or 'n'. We will pick 'n' just because

###Positioning before
If we are given a position to start from (lets say 'n') and we want a position that is smaller then we should maximise the letter spacing by picking the center point between the start position and the smallest position 'a'

Start position = 'n'
End position = 'a'

With the variables, the point between these 2 positions which would be 'g'. 
We could of course pick any of the 12 characters that come before 'n' (such as 'm') but if we wanted to insert between 'm' and 'n' then we would need to pop into the next tier of strings

If our start position is 'b' then we would be at the end (as setting to 'a' would result in a hard stuck position)
The solution here would be to append another character so lets move to 'an'.
'an' is perfect as we can still append before it e.g 'ag', 'ab', it reuses the same algorithm and it wont hard stick us to 'a'

###Positioning after
Same as Positioning before but this time instead of taking the smallest char, we will take 'z' as the greatest char.

If the start position is 'y' and we need something after it then we will need to append a char to 'z' and return as 'zn'

###Position between
Same as before and after but instead of a hard set start and end value of 'a' and 'z' it will be set by the requester

##Basic algorithm
newCharPosition = startPosition + ceil((positionDifference - 1) / 2)

if the difference is 1 then the above algorithm wont work but thats ok, when the difference is 1 then
we will need to append a new char to the 'startPosition' value

##Char layout and splitting of characters (handy for testing)
0  A -  0/2
1  B - 			    1/16
2  C - 				    3/26
3  D - 		    1/8
4  E - 			    3/16
5  F - 				    6/26
6  G -      1/4
7  H - 			    5/16
8  I - 				    9/26
9  J - 		    3/8
10 K - 		            11/26
11 L - 			    7/16	
12 M - 			        13/26
13 N -  1/2
14 O - 			    9/16
15 P - 			        16/26
16 Q - 		    5/8
17 R - 			    11/16
18 S - 			        19/26
19 T - 	    3/4
20 U - 			    13/16
21 V - 			        22/26
22 W - 		    7/8
23 X - 			    15/16
24 Y - 			        25/26
25 Z -  2/2


