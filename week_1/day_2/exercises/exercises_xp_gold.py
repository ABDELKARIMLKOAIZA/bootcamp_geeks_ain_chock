# ------ Exercise 1
def date(a,b,c):
    return f"{a}/{b}/{c}"





def util():
    birthdays={'karim':date(12,6,2000)  ,
           'zakaria': date(28,8,2005)  ,
           'youness':date(11,4,2002)   ,
           'ahmed':date(6,7,2003)  ,
           'yassine': date(6,7,2004) 
          }
    print('Vous pouvez rechercher les dates d’anniversaire des personnes de la liste !')
    nom= input('donner le nom d’une personne')
    x=birthdays[nom]
    return f"La date d'anniv de {nom} est {x}"

print(util())
# ------ Exercise 2
def util1():
    birthdays={'karim':date(12,6,2000)  ,
           'zakaria': date(28,8,2005)  ,
           'youness':date(11,4,2002)   ,
           'ahmed':date(6,7,2003)  ,
           'yassine': date(6,7,2004) 
          }
    print('Vous pouvez rechercher les dates d’anniversaire des personnes de la liste !')
    print(list( birthdays.keys()))
        
    nom= input('donner le nom d’une personne')
    if nom not in birthdays.keys():
        print(f"Désolé, nous n’avons pas les informations d’anniversaire pour {nom}")
    else:
        x=birthdays[nom]
        return f"La date d'anniv de {nom} est {x}"

print(util1())
# ------ Exercise 3
def throw_dice ():
    nombre = random.randint(1, 6)
    return nombre
def throw_until_doubles(a=throw_dice (),b=throw_dice ()):
    l=[]
    i=0
    while a!=b :
        a=throw_dice ()
        b=throw_dice ()
        l.append((a,b))
        i+=1
    return l , i

def main():
    l=[]
    for i in range(100):
        l.append(throw_until_doubles())
    return l 




