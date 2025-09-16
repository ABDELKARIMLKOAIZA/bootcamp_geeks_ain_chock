# birthday_cake.py
import sys
import datetime as dt
import calendar

def parse_ddmmyyyy(s: str) -> dt.date:
    try:
        return dt.datetime.strptime(s.strip(), "%d/%m/%Y").date()
    except ValueError:
        print("Format invalide. Utilisez DD/MM/YYYY.", file=sys.stderr)
        sys.exit(1)

def compute_age(born: dt.date, today: dt.date) -> int:
    return today.year - born.year - ((today.month, today.day) < (born.month, born.day))

def make_cake(candles: int) -> str:
    top = "___" + "i" * candles + "___"
    lines = [
        "      " + top,
        "     |:H:a:p:p:y:|",
        "   __|___________|__",
        "  |^^^^^^^^^^^^^^^^^|",
        "  |:B:i:r:t:h:d:a:y:|",
        "  |                 |",
        "  ~~~~~~~~~~~~~~~~~~~",
    ]
    return "\n".join(lines)

def main():
    s = input("Entrez votre date de naissance (DD/MM/YYYY) : ")
    born = parse_ddmmyyyy(s)
    today = dt.date.today()
    age = compute_age(born, today)
    candles = age % 10 if age >= 0 else 0

    cake = make_cake(candles)
    print(cake)
    if calendar.isleap(born.year):  # Bonus : année bissextile → deux gâteaux
        print(cake)

if __name__ == "__main__":
    main()
