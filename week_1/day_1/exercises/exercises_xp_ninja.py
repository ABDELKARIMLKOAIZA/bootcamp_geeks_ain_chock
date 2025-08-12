# ------ Exercise 1

#la valeur predit des sorties est :
#x is True#
#y is False#
#a: 5#
#b: 10#


# ------ Exercise 2
mot= input("Entrez un mot : ")
x=mot
y=''
while  'a' not in x.lower( ) and len(x) > len(y):
    print("félicitations", end=" ")
    y=x
    x = input("Entrez un mot : ")
    print()

# ------ Exercise 3
x="""L\’intelligence artificielle (IA) transforme la manière dont les humains interagissent avec la technologie. Des assistants vocaux aux voitures autonomes, en passant par les diagnostics médicaux avancés, l’IA est désormais présente dans presque tous les aspects de la vie moderne. Elle permet aux machines d’apprendre à partir de données, de reconnaître des motifs et de prendre des décisions avec une intervention humaine minimale. À mesure que l’IA continue d’évoluer, elle apporte à la fois des opportunités et des défis, soulevant d’importantes questions sur l’éthique, la vie privée et l’avenir du travail."""
i=0
for l in x:
    if l in [' ',  '.', ',', ';', ':']:
        continue
    else:
        i+=1
print("Nombre de caractères :", i)




#nombre de les phrases
paragraph = x.split('.')
print("Nombre de phrases :", len(paragraph)-1)



#nombre de mots
split = x.split()
print("Nombre de mots :", len(x))



paragraph = x.split('.')
print("Nombre de phrases :", (paragraph))
print("Nombre de mots :", len(x))

y = set(split)
print("Nombre de mots :", len(y))
