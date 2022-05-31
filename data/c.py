import csv
import json
from operator import indexOf

words = csv.reader(open("CREA_total.csv"), delimiter="\t")
final = []
count = 0
soloPalabras = []
for i in words:

    fila = []
    for j in i:
        fila.append(j.strip())
    #print(fila)

    final.append(fila)

    # if count == 100:
    #     break
    # count += 1

for word in final:
    if word[1][0] == 's' and len(word[1]) <= 5:
        soloPalabras.append(word[1])
        print(word[1])

dict = json.load(open("dict-es5.json"))


archivo = open("frecuencias.json", 'w')
archivo.write("{\n")

for Sword in dict:

    try:
        print(soloPalabras.index(Sword))
        numero = float(final[soloPalabras.index(Sword)][2].replace(",", ""))
        print(f"['{Sword}', '{round(numero/2_022_513, 10):.10f}']")
        archivo.write(f"\t\"{Sword}\": {round(numero/2_022_513, 10):.10f},\n")
    
    except:
        print(Sword)
        archivo.write(f"\t\"{Sword}\": {0},\n")


""" for word in dict:
        try:
            final.indexOf(word)
        except:
            archivo.write(f"\t\"{word}\": {0},\n") """

archivo.write("}")
