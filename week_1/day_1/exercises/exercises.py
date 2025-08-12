# ------ Exercise 1

print(("Hello World\n") * 4, end="")

# ------ Exercise 2
x = 9 ** 3 * 8
print(f"le produit de 9 puissance 3 fois 8 est{x}")   
# ------ Exercise 3
nom=input("Quel est votre nom ? ")
if nom == "karim":
    print("Incroyable ! On a le même nom")
else:
    print("Ce n'est pas le même nom que moi !")
# ------ Exercise 4
hauteur = float(input("Quelle est votre taille en centimètres ? "))
if hauteur > 145:
    print("assez grand pour monter")
else:
    print("il doit encore grandir un peu pour pouvoir monter.")
# ------ Exercise 5
my_fav_numbers = {3,7,11,13,17,19,23,29,31}
my_fav_numbers.add( 41)
print(my_fav_numbers)
friend_fav_numbers = {2,4,6,8,10}
our_fav_numbers= my_fav_numbers.union(friend_fav_numbers)
print(f"Voici la liste de mes nombres préférés : {our_fav_numbers}")
# ------ Exercise 6
x= (3,4,5,6)
# ------ Exercise 7
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.count("Apples")
basket.clear()
print(basket)

# ------ Exercise 8
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
 
while  "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
print(sandwich_orders)
      
finished_sandwiches = []
for i in range (len(sandwich_orders)):
    finished_sandwiches.append(sandwich_orders[i])
    print(f"I made your {sandwich_orders[i]} sandwich.")
