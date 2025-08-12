# ------ Exercise 1




# ------ Exercise 2
mot= input("Entrez un mot : ")

y=''
while 'A' not in y and len(mot) > len(y):
    print("félicitations", end=" ")
    y=mot
    x = input("Entrez un mot : ")

# ------ Exercise 3
x='''L’intelligence artificielle (IA) transforme la manière dont les humains interagissent avec la technologie. Des assistants vocaux aux voitures autonomes, en passant par les diagnostics médicaux avancés, l’IA est désormais présente dans presque tous les aspects de la vie moderne. Elle permet aux machines d’apprendre à partir de données, de reconnaître des motifs et de prendre des décisions avec une intervention humaine minimale. À mesure que l’IA continue d’évoluer, elle apporte à la fois des opportunités et des défis, soulevant d’importantes questions sur l’éthique, la vie privée et l’avenir du travail.'''

i=0
while y in x and y=='.':
    i+=1
print(i, end=" ")

split = x.split()
print("Nombre de mots :", len(x))

y = set(x)
print("Nombre de mots :", len(y))
# ------ Exercise 4

# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
