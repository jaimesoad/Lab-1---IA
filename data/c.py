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

    #if fila[1] == 
    # if count == 100:
    #     break
    # count += 1

for word in final:
    if word[1][0] == 's' and len(word[1]) <= 5:
        soloPalabras.append(word[1])
        print(word[1])

dict = json.load(open("dict-es5.json"))

archivo = open("frecuencias_ciega.json", 'w')
archivo.write("[\n")

ordenado = []
for Sword in dict:

    try:
        print(soloPalabras.index(Sword))
        numero = float(final[soloPalabras.index(Sword)][3].replace(",", ""))
        print(f"['{Sword}', '{round(numero)}']")
        #archivo.write(f"{round(numero)},\n")
        ordenado.append(numero)
    
    except:
        print(Sword)
        ordenado.append(0)
        #archivo.write(f"{0},\n")

ordenado.sort(reverse=True)

for i in ordenado:
    archivo.write(f"\t{i},\n")

""" for word in dict:
        try:
            final.indexOf(word)
        except:
            #archivo.write(f"\t\"{word}\": {0},\n")
            ordenado.append(0) """

archivo.write("]")
