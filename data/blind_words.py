import csv
import json
from operator import indexOf

words = csv.reader(open("CREA_total.csv"), delimiter="\t")
final = []
count = 0
soloPalabras = []
soloNumeros  = {}
for i in words:

    fila = []
    for j in i:
        fila.append(j.strip())
    #print(fila)

    final.append(fila)

    #if fila[1] == 
    # if count == 100:
    #     break
    # count += 1

for word in final:
    if word[1][0] == 's' and len(word[1]) <= 5:
        soloPalabras.append(word[1])
        if float(word[3]) > 0:
            soloNumeros[word[3]] = word[1]

            print(f"{word[3]}: {soloNumeros[word[3]]}")
            print(word[1] in soloNumeros.values())

        #print(word[1], word[3])

dict = json.load(open("dict-es5.json"))

archivo = open("frecuencias_ciega.json", 'w')

ordenado = []

for word in soloNumeros.values():
    if word in dict:
        ordenado.append(word)
        pass
    pass

for word in dict:
    if word not in soloNumeros.values():
        ordenado.append(word)

archivo.write("[\n")

for i in ordenado:
    archivo.write(f"\t\"{i}\",\n")

archivo.write("]")
