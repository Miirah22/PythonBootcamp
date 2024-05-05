words = []

i = 0
while i < 7:
    word = input("Enter a word: ")
    words.append(word)
    i += 1

letter = input("Enter a single character: ")

i = 0
while i < len(words):
    word = words[i]
    if letter in word:
        index = word.index(letter)
        print(f"{letter} appears at index {index} in {word}")
    else:
        print(f"{letter} is not in {word}")
    i += 1