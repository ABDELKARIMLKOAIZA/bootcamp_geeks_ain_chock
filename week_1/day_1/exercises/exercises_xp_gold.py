# ------ Exercise 1
month= int(input("Quel mois de l'année ? (1-12) "))
if 3 <= month <= 5:
    print("spring")
elif 6 <= month <= 8:
    print("summer")
elif 9 <= month <= 11:
    print("autumn")
else:
    print("winter")
# ------ Exercise 2
for i in range(1, 21):
    print(i, end=" ")
print()
for i in range(1, 21,2):
    print(i+1, end=" ")
# ------ Exercise 3
name = input("Quel est votre nom ? ")
while name==karim:
    name = input("Quel est votre nom ? ")

# ------ Exercise 4
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

for i in range(len(names)):
    if names[i] in names:
        print(i)
    else:
        print("Ce nom n'est pas dans la liste.")
# ------ Exercise 5
x= int(input("Entrez un nombre entier : "))
y= int(input("Entrez un autre nombre entier : "))
z= int(input("Entrez un troisième nombre entier : "))
print(f"Le plus grand nombre est {max(x, y, z)}")
#methode 2
x= int(input("Entrez un nombre entier : "))
y= int(input("Entrez un autre nombre entier : "))
z= int(input("Entrez un troisième nombre entier : "))
if x > y and x > z:
    print(f"Le plus grand nombre est {x}")

# ------ Exercise 6
import random
x=int(input("Entrez un nombre entier  entre 1 et 9: "))
y=random.randint(1,9)
if x == y :
    print("Vous avez gagné !")
else:
    print(f"Vous avez perdu ! Le nombre était {y}")
# ------ Exercise 7

# ------ Exercise 8
