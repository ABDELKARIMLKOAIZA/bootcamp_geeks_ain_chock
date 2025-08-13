# ------ Exercise 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]


my_dict = dict(zip(keys, values))

print(my_dict)
# ------ Exercise 2
def price(x):
    if x>12:
        return 15
        
    elif 3<= x <=12 :
        return 10
    else :
        return 0
    

family = {"rick": 43,
          'beth': 13, 
          'morty': 5,
          'summer': 8}
print(price(family["rick"]))
print(price(family['beth']))
print(price(family['morty']))
print(price(family['summer']))



s=0
for n in family:
    s=s+price(family[n])   
print(s)



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
brad={"name":"zara",
      "creation_date": 1975 ,
      "creator_name": "Amancio Ortega Gaona" ,
      "type_of_clothes": ["men", "women", "children", "home"],
      "international_competitors": ["Gap", "HM", "Benetton"],
      "number_stores": 7000, 
      "major_color" : {"France": "blue", 
      "Spain": "red", 
      "US": ("pink", "green")}
    }
brad['number_stores']=2
print(brad)

print(f'zara propose des vetement pour les {brad["type_of_clothes"][0]},{brad["type_of_clothes"][1]},{brad["type_of_clothes"][2]} et {brad["type_of_clothes"][3]}')

for i in brad.keys():
    if i == 'international_competitors':
        brad['international_competitors'].append('Desigual')
print(brad)

del brad["creation_date"]
print(brad)

print(brad["international_competitors"][-1])
print(brad["major_color"]["US"])
print(len(list(brad.keys())))
print(list(brad.keys()))
more_on_zara = {"creation_date" : 1975,
              "number_stores" : 10000
             }

brad['more_on_zara']=more_on_zara
print(brad)

print(brad["more_on_zara"]["number_stores"])
# ------ Exercise 4
def describe_city(nom, pays="maroc"):
    print(f"{nom} est dans le pays {pays}")
 
describe_city("casablanca", "maroc")


# ------ Exercise 5
import random
def nombre(a):
    if 1<= a <= 100:
        nombre = random.randint(1, 100)
        if a == nombre:
            print("réussite ! )")
        else:
            print("échec ! ")
    else:
        print("Le nombre doit être compris entre 1 et 100")
        


# ------ Exercise 6
def make_shirt(taille,text):
    print(f"La taille du t-shirt est {taille} et le texte est {text}") 
make_shirt('s','kzrm') 

def make_shirt1(taille="large",text="i love you python"):
    print(f"La taille du t-shirt est {taille} et le texte est {text}") 
    
make_shirt1() 

# ------ Exercise 7
def get_random_temp( ):
    nombre= random.randint(10, 40) 
    return(nombre)

print(f" le nombre est {get_random_temp( )} degres")


def main():
    temperature = get_random_temp()
    print(f"La température actuelle est de {temperature} degrés Celsius.")

main()

def main1():
    temperature = get_random_temp()
    print(f"La température actuelle est de {temperature}°C.")

   
    if temperature < 0:
        print("Brrr, il fait glacial ! Mettez plusieurs couches de vêtements aujourd'hui.")
    elif 0 <= temperature <= 16:
        print("Il fait assez frais ! N'oubliez pas votre manteau.")
    elif 17 <= temperature <= 23:
        print("Le temps est doux et agréable.")
    elif 24 <= temperature <= 32:
        print("Il fait chaud, pensez à bien vous hydrater.")
    elif 33 <= temperature <= 40:
        print("Canicule ! Évitez de sortir aux heures les plus chaudes.")


main()




def get_random_temp1( season):
    if season == "winter":
        return random.randint(-10, 16)
    elif season == "spring":
        return random.randint(10, 25)
    elif season == "summer":
        return random.randint(20, 40)
    elif season == "autumn" or season == "fall":
        return random.randint(5, 20)
    else:
        pass
    return(nombre)

print(f" le nombre est {get_random_temp1('winter' )} degres")





def season_from_month(month):
    """Détermine la saison selon le mois (1-12)."""
    if month in [12, 1, 2]:
        return "winter"
    elif month in [3, 4, 5]:
        return "spring"
    elif month in [6, 7, 8]:
        return "summer"
    elif month in [9, 10, 11]:
        return "autumn"
    else:
        raise ValueError("Mois invalide.")
def main3():
    
    month = int(input("Entrez le numéro du mois (1-12) : "))
    season = season_from_month(month)
    
    temperature = get_random_temp(season)
    print(f"La température actuelle est de {temperature}°C ({season}).")

    
    if temperature < 0:
        print("Brrr, il fait glacial ! Mettez plusieurs couches de vêtements.")
    elif 0 <= temperature <= 16:
        print("Il fait assez frais. N'oubliez pas votre manteau.")
    elif 17 <= temperature <= 23:
        print("Le temps est doux et agréable.")
    elif 24 <= temperature <= 32:
        print("Il fait chaud, pensez à bien vous hydrater.")
    elif 33 <= temperature <= 40:
        print("Canicule ! Évitez de sortir aux heures les plus chaudes.")


# ------ Exercise 8
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def poser_question():
    l = []
    m = []
    for x in data:
        question1 = input(x["question"])
        if question1 == x["answer"]:
            l.append(question1)
        else:
            m.append(question1)
    return l, m

def nombrereponse():
    result = poser_question()
    print(f"le nombre des reponse correcte est {len(result[0])} et reponse incorete est {len(result[1])}")

nombrereponse()
