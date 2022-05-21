import csv

inputFile  = csv.reader(open("palabras.csv"))
outputFile = open("dict-es.js", 'w')

outputFile.write("data = [")
for word in inputFile:
    outputFile.write(f"\t\"{word[0]}\",\n")

outputFile.write("]")