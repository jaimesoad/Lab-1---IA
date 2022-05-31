import csv

inputFile  = csv.reader(open("palabras.csv"))
outputFile = open("dict-es5.json", 'w')

outputFile.write("[")
for word in inputFile:
    if len(word[0]) <= 5 and word[0][0] == "s":
        outputFile.write(f"\t\"{word[0]}\",\n")

outputFile.write("]")