import random

wins = 0
losses = 0

while True:
    random_number = random.randint(1, 9)
    user_guess = int(input("Guess a number from 1 to 9: "))

    if user_guess < 1 or user_guess > 9:
        print("Invalid input. Please enter a number from 1 to 9.")
        continue

    if user_guess == random_number:
        print("Winner!")
        wins += 1
    else:
        print("Better luck next time.")
        losses += 1

    play_again = input("Do you want to play again (yes/no)? ")
    if play_again.lower() != "yes":
        break

print(f"Total wins: {wins}")
print(f"Total losses: {losses}")


