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

for word in dct:
    if word not in soloNumeros.keys():
        soloNumeros[word] = mayor

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

def preparar( A_preparar ):
  for word in A_preparar:
    soloNumeros[word] = mayor
  return A_preparar

cinco_letras = [x for x in soloNumeros.keys() if len(x) == 5]

pre_cuatro = [x for x in soloNumeros.keys() if len(x) == 4]
cuatro_letras = Promedio(cinco_letras) + preparar(pre_cuatro)

pre_tres = [x for x in soloNumeros.keys() if len(x) == 3]
tres_letras = Promedio(cuatro_letras) + preparar(pre_tres)

pre_dos = [x for x in soloNumeros.keys() if len(x) == 2]
dos_letras = Promedio(tres_letras) + preparar(pre_dos)

una_letra = Promedio(dos_letras)

archivo.write("{\n")

for i in soloNumeros.keys():
    archivo.write(f"\t\"{i}\": {soloNumeros[i]},\n")

archivo.write("}")
