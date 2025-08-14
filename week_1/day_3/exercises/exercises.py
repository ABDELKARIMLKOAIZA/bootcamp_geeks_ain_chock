# ------ Exercise 1
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

def find_oldest(cat1, cat2, cat3):
    age1, age2, age3 = cat1.age, cat2.age, cat3.age

    if age1 == age2 == age3:
        print(f"Les chats {cat1.name}, {cat2.name} et {cat3.name} ont le même âge : {age1} ans.")
    elif age1 == age2 and age1 > age3:
        print(f"Les chats {cat1.name} et {cat2.name} ont le même âge : {age1} ans, et sont les plus âgés.")
    elif age1 == age3 and age1 > age2:
        print(f"Les chats {cat1.name} et {cat3.name} ont le même âge : {age1} ans, et sont les plus âgés.")
    elif age2 == age3 and age2 > age1:
        print(f"Les chats {cat2.name} et {cat3.name} ont le même âge : {age2} ans, et sont les plus âgés.")
    elif age1 > age2 and age1 > age3:
        print(f"Le chat le plus âgé est {cat1.name} avec {age1} ans.")
    elif age2 > age1 and age2 > age3:
        print(f"Le chat le plus âgé est {cat2.name} avec {age2} ans.")
    elif age3 > age1 and age3 > age2:
        print(f"Le chat le plus âgé est {cat3.name} avec {age3} ans.")

# --- Exemple ---
chat1 = Cat("Mimi", 1)
chat2 = Cat("Tom", 5)
chat3 = Cat("Luna", 4)

find_oldest(chat1, chat2, chat3)

# ------ Exercise 2
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
        
    def bark(self):
        print(f'{self.name} aboie woof!')
        
    def jump(self):
        x = self.height * 2
        print(f'{self.name} saute {x} cm de haut ! ')
        
davids_dog = Dog('rex', 50)
print(davids_dog.name)
print(davids_dog.height)
davids_dog.bark()
davids_dog.jump()    
    
    
sarahs_dog=Dog('Teacup', 20)
print(sarahs_dog.name)
print(sarahs_dog.height)
sarahs_dog.bark()
sarahs_dog.jump()    


def verify(dog1,dog2):
    h1,h2=dog1.height ,dog2.height
    if h1>h2:
        print(f'{dog1.name} est plus grand que {dog2.name}')
    elif h1 == h2:
        print(f'{dog1.name} et {dog2.name} de meme hauteur')
              
d1=Dog('rex',50)
d2=Dog('rocky',20)
              
verify(d1,d2)

        
# ------ Exercise 3
class song :
    def __init__(self,lyrics):
        self.lyrics=lyrics
        
    def singme(self):
        for l in  (self.lyrics):
            print(l)
       
        
stairway = song([
    "There’s a lady who's sure",
    "all that glitters is gold",
    "and she’s buying a stairway to heaven"
])

stairway.singme()
    
# ------ Exercise 4
class zoo:
    def __init__(self,zoo_name):
        self.animals=[]
        self.zoo_name=zoo_name
        
    def add_animal(self,new):
        l=self.animals
        if new not in l:
            l.append(new)
        return l
            
    def get_animals(self):
        print(self.animals)
    def sell_animal(self,animal_sold):
        l=self.animals
        if animal_sold in l :
            l.remove(animal_sold)
        return l
    def sort_animals(self):
        h=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        l=self.animals
        sort=l.sort()
        x = {}

        for i in l:
            if i[0].upper() in h:
                if i[0].upper() not in x:
                    x[i[0].upper()] = []
                x[i[0].upper()].append(i)

        return x
    def get_groups(self):
        l=list(self.sort_animals().keys())
        for x in l:
            print(f'les annimaux sui  commence par {x}sont{self.sort_animals()[x]}')

new_york_zoo= zoo('zoo ain chok')

#ajout de animale Giraffe
print(new_york_zoo.add_animal('Giraffe'))


        
# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
