# Dictionary of LaTeX symbols and their corresponding characters.
category_index = {
    "0": "$0$",
    "1": "$1$",
    "2": "$2$",
    "3": "$3$",
    "4": "$4$",
    "5": "$5$",
    "6": "$6$",
    "7": "$7$",
    "8": "$8$",
    "9": "$9$",
    "=": "$=$",
    "(": "$($",
    ")": "$)$",
    "forall": "$\forall$",
    "int": "$\int$",
    "log": "$\log$",
    "X": "$\x$",
    "y": "$\y$",
    "z": "$z$",
    "+": "$+$",
    "-": "$-$",
    "pi": "$\pi$"
}

def check(string, newChar):
    # Returns the LaTeX version of the text.

    # Parameters:
    # string (str): The original text.
    # newChar (str): The character to be added to the text.

    # Returns:
    # str: The LaTeX version of the text with the new character added.
    
    string += category_index[newChar]
    return string