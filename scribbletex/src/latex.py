category_index = {
    "0" : "$0$" , "1" :"$1$", "2" : "$2$" , "3" : "$3$" , "4" : "$4$", "5" : "$5$", "6" : "$6$", "7" : "$7$", "8" : "$8$", "9" : "$9$",
    "=" : "$=$", "(" : "$($", ")" : "$)$", "forall" : "$\forall$",
    "int" : "$\int$", "log" : "$\log$",
    "x" : "$\x$", "y" : "$\y$", "z" : "$z$", "+" : "$+$", "-" : "$-$", "pi" : "$\pi$"
}
string = ""
def check(string, newChar):
    """ returns the latex version of the text """
    string += category_index[newChar]
    return string