# ------ Exercise 1
import math

class Circle:
    def __init__(self, rayon=1):
        self.rayon = rayon

    def air(self):
        print(f"L'aire est {math.pi * self.rayon ** 2}")
    def perimetre (self):
        print(f"surface {math.pi * self.rayon * 2}")
    def defintion(self):
        print(' aire = rayon^2 x pi')
        print(' perimetre = rayon x 2 x pi ou diametre x pi ')
        
x=Circle(3)
x.defintion()
# ------ Exercise 2
class mylist:
    def __init__(self,l):
        self.l=l
    def invers(self):
        self.l.reverse()
        print(self.l)
    
    def trie(self):
        self.l.sort()
        print(self.l)

    
m=mylist([3, 1, 2])
m.invers()
m.trie()
    
# ------ Exercise 3

# ------ Exercise 4

# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
