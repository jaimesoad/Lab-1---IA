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
        #ordenado.append(word)
        soloNumeros[word] = mayor

cienco_letras = []

ablo.    a  ala.h arate  a b Ihra  hblo.   Iora  hablo.    Ihor
hablo.   Ia er or  hala.h I or aab   Ihoa  halo.   Ihora  hablo.    Ihor
 hablo.   a eoaIhrteaaalho  Ih o ho    Iora  abl.    Ihora  hablo.    Ihor
e hablo.a er
a  Ihaaatheb o.  orehablo    Iora hablo.    Ihora  hablo.    Ihor
e habla eI
ra a aIh ao habo   rate halo.   Ihora  hablo.    Ihora  hablo.    Ihor
te haba e aoraa o. aIhhe hbl  hor tehablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e a
ho ra a h ra e bl   hor te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aaoa h ha e hl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aaoa h ha e hl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aaoa h ha e hl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aaoa h ha e hl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aaoa h ha e hl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aaoa h ha e hl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aaoa h ha e hl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aaoa h ha e hl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aaoa h ha e hl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aaoa h ha e hl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aaoa h ha e hl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aaoa h ha e hl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aaoa h ha e hl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aaoa h ha e hl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te haa e   I 
raa.a h ra e bl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aaaa.h Irate b   Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I 
raa.a h ra e bl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e.   r 
raaa.h Irate b   Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I 
raa.a h ra e bl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aaoa h ha e hl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aaoa h ha e hl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aala.h Irate b   Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te h e.   r 
raaa.h Irate b   Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I 
raa.a h ra e bl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aaoa h ha e hl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aaoa h ha e hl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
te ha e   I
 
aaoa h ha e hl  Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 te h e.   r 
rabaoh. or tea.   Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
a t eal .  I
haahhl   Iha hblo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
   e     hor
hhoal.  hote hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 
a   ea. Iho
hoahal   Ihra hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
   t a   hor
horal.  hote hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 
 te hb Ihor
horalo.  hor tablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 te hbo Iho
horblo.  ho tablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 te hbo Iho
horblo.  ho tablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 te hbo Iho
horblo.  ho tablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 te hbo Iho
horblo.  ho tablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 te hbo Iho
horblo.  ho tablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 te hbo Iho
horblo.  ho tablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 te hbo Iho
horblo.  ho tablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 te hbo Iho
horblo.  ho tablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 te hbo Iho
horblo.  ho tablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 te hbo Iho
horblo.  ho tablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 te hbo Iho
horblo.  ho tablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 te hbo Iho
horblo.  ho tablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 te hbo Iho
horblo.  ho tablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 te hbo Iho
horblo.  ho tablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 te hbo Iho
horblo.  ho tablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 te hbo Iho
horblo.  ho tablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 te hbo Iho
horblo.  ho tablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
 te hbo Iho
horblo.  ho tablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
a te al. Ihr
hohabl.  Ira hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
ra t a.   Ihor
hoe alo  ora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
oratablo    Ior
h te ab    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
hote halo.   Ihor
ra hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
ra t hablo.    Ihor
 te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
ra te hablo.    Ihor
ra te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
hora te hablo.    Ihor
hora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
hora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
hora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
hora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
hora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
#Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
#Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
#Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
#Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
#Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
#Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
hora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
hora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
ora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
ra te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
ra te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
ra te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
ra te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
ra te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
ra te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
ra te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
ra te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
ra te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
ra te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
ra te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
ra te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
ora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
ora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
ora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
ora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
hora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
hora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
hora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
#Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
#Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
#Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
#Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
#Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
#Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
#Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
#Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
#Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
#Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
#Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
#Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora  hablo.    Ihora  hablo.    Ihor
#Ahora te hablo.    Ihor
#Ahora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora te hablo.    Ihora te hablo.    