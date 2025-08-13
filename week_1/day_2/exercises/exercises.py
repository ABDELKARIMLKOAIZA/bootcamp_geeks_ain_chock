# ------ Exercise 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]


my_dict = dict(zip(keys, values))

print(my_dict)
# ------ Exercise 2
def price(x):
    if x>12:
        return 15
        
    elif 3<=x <=12 :
        return 10
    elif x <3 :
        return 0
    

family = {"rick": 43,
          'beth': 13, 
          'morty': 5,
          'summer': 8}
print(price(family["rick"]))
print(price(family['beth']))
print(price(family['morty']))
print(price(family['summer']))


famille = {}
x = int(input("Le nombre de membres de la famille : "))

for i in range(x):
    nom = input("Entrez votre nom : ")
    age = int(input("Entrez votre âge : "))
    famille[nom] = age

print("\nDétails de la famille :", famille)

# Afficher combien chaque membre doit payer
somme=0
for nom in famille:
    print(f"{nom} doit payer {price(famille[nom])} $")
    somme=somme+price(famille[nom])   
print(somme)


# ------ Exercise 3

# ------ Exercise 4

# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
