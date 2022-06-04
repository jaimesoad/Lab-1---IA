import csv
import json

dct   = json.load(open("dict-es5.json"))
words = csv.reader(open("CREA_total.csv"), delimiter="\t")
archivo = json.load(open("frecuencias-a-estrella.json", 'w'))
final = []
count = 0
soloPalabras = []
soloNumeros  = {}

for i in words:

    fila = []
    for j in i:
        fila.append(j.strip())

    #final.append(fila)

mayor = int

for word in final:
    if word[1][0] == 's' and len(word[1]) <= 5:
        mayor = word[3]
        break

# https://github.com/JorgeDuenasLerin/diccionario-espanol-txt
#print(final)

for word in final:
    if word[1][0] == 's' and len(word[1]) <= 5:
        soloPalabras.append(word[1])
        
        soloNumeros[word[1]] = mayor - word[3]

        print(f"{word[1]}: {soloNumeros[word[1]]}")
        print(word[3] in soloNumeros.values())

""" ordenado = []

for word in soloNumeros.keys():
    if word in dct:
        ordenado.append(word)

        pass
    pass """

for word in dct:
    if word not in soloNumeros.keys():
        soloNumeros[word] = mayor

cinco_letras = [x for x in soloNumeros.keys() if len(x) == 5]

def Promedio( Padres, Numeros):

  Hijos = []

  for word in Padres:
    newword = word.slice(0, len(word) - 1, 1)
    if newword not in Hijos:

      suma = 0
      count = 0

      for palabra in Padres:
        if newword in palabra:
          suma += Numeros[palabra]
          count += 1

      promedio = suma / count

      Hijos.append(newword)
      Numeros[newword] = promedio

  return Hijos

cuatro_letras = Promedio(cinco_letras, soloNumeros)
tres_letras = Promedio(cuatro_letras, soloNumeros)
dos_letras = Promedio(tres_letras, soloNumeros)
una_letra = Promedio(dos_letras, soloNumeros)