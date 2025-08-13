# ------ Exercise 1
# Chaîne initiale
cars_str = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"


cars_list = cars_str.split(", ")


print(f"Il y a {len(cars_list)} fabricants dans la liste.")


print("Liste en ordre décroissant :", sorted(cars_list, reverse=True))


count_o = len([car for car in cars_list if 'o' in car.lower()])
print(f"{count_o} fabricants ont la lettre 'o' dans leur nom.")


count_no_i = len([car for car in cars_list if 'i' not in car.lower()])
print(f"{count_no_i} fabricants n'ont pas la lettre 'i' dans leur nom.")

# ------ Exercise 2
def get_full_name(first_name, last_name, middle_name=None):
    if middle_name:  
        return f"{first_name.capitalize()} {middle_name.capitalize()} {last_name.capitalize()}"
    else:  
        return f"{first_name.capitalize()} {last_name.capitalize()}"

print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))

print(get_full_name(first_name="bruce", last_name="lee"))

# ------ Exercise 3

# ------ Exercise 4

# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
