# ------ Challenge 1
number = int(input("Entrez un nombre : "))
length = int(input("Entrez la longueur : "))


multiples = []
for i in range(1, length + 1):
    multiples.append(number * i)


print("Liste des multiples :", multiples)

# ------ Challenge 2
texte = input("Entrez une chaîne : ")


nouveau_texte = ""
for i in range(len(texte)):
    if i == 0 or texte[i] != texte[i - 1]:
        nouveau_texte += texte[i]


print("Chaîne sans doublons consécutifs :", nouveau_texte)

