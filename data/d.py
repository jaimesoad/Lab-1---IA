import csv
import json

dct = json.load(open("dict-es5.json"))
words = csv.reader(open("CREA_total.csv"), delimiter="\t")
archivo = open("frecuencias-a-estrella.json", 'w')
final = []
count = 0
soloPalabras = []
soloNumeros = {}

for i in words:

    fila = []
    for j in i:
        fila.append(j.strip())

    final.append(fila)

# print(final)

mayor = 0

for word in final:
    if word[1][0] == 's' and len(word[1]) <= 5:
        mayor = float(word[3])
        break

# https://github.com/JorgeDuenasLerin/diccionario-espanol-txt
# print(final)

for word in final:
    if word[1][0] == 's' and len(word[1]) <= 5 and word[1] in dct:
        soloPalabras.append(word[1])

        soloNumeros[word[1]] = mayor - float(word[3])

        # print(f"{word[1]}: {soloNumeros[word[1]]}")
        # print(word[3] in soloNumeros.values())

""" ordenado = []

for word in soloNumeros.keys():
    if word in dct:
        ordenado.append(word)

        pass
    pass """

for word in dct:
    if word not in soloNumeros.keys():
        soloNumeros[word] = 0

cinco_letras = [x for x in soloNumeros.keys() if len(x) == 5]

# print(soloNumeros)

def Promedio(Padres):

    Hijos = []

    for word in Padres:
        corte = slice(0, len(word) - 1)
        newword = word[corte]

        if newword not in Hijos:

            suma = 0
            count = 0

            for palabra in Padres:
                if newword in palabra:
                    suma = suma + soloNumeros[palabra]
                    count = count + 1

            promedio = suma / count

            Hijos.append(newword)
            soloNumeros[newword] = promedio

    return Hijos


cuatro_letras = Promedio(cinco_letras)
tres_letras = Promedio(cuatro_letras)
dos_letras = Promedio(tres_letras)
una_letra = Promedio(dos_letras)

archivo.write("{\n")

for i in soloNumeros.keys():
    archivo.write(f"\t\"{i}\": {soloNumeros[i]},\n")

archivo.write("}")
