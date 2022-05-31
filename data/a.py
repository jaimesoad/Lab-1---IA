import csv
import json

input = json.load(open("dict-es5.json"))
freq  = json.load(open("freq.json"))
#output = open("data.js", 'w')

""" input.sort()

for word in input:
    if word[0][0] == 'm':
        print(word[0].upper()) """

def weight(value):
    out = 1
    val = 0
    for i in value:
        try:
            out *= freq[i.upper()]
            val += freq[i.upper()]

        except:
            pass
    
    return val/len(value)

input   = [x for i in input for x in i]

mLetter = [x for x in input if x == "m"]
count   = 0

for i in mLetter:
    count += weight(i)

count /= len(mLetter)

a = []

for i in mLetter:
    #if weight(i) > count:
        #print(f"{i}:\t{round(weight(i), 2)}")
    a.append(weight(i))

a.sort()

for i in a:
    print(f"{mLetter}:\t{i}")

print(count)

""" for letter in freq:
    val = freq.get(letter)
    print(f"{letter}: {val}") """

#print(mLetter)