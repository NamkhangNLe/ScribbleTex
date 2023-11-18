import math
import numpy as np
import cv2 


def toGrayscale(image):
    """ Converts to grayscale, 1s and 0s ONLY"""
    threshold = 0.5
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    zerosAndOnes = gray / 255
    zerosAndOnes[zerosAndOnes <= threshold] = 0
    zerosAndOnes[zerosAndOnes >= threshold] = 1

    return zerosAndOnes

def underlyingRows(grayImage):
    """ The most important concept. Squashes, as of writing, all of the rows onto itself in order to see the horizontal 
    area of each possible letter. For instance, 
    
    00100
    00100    => [0, 0, 1, 0, 0]
    00100
    
    """

    compressed = np.any(grayImage == 1, axis=0).astype(int)
    return compressed

def underlyingCols(grayImage):
    """ Same as above but for columns"""

    compressed = np.any(grayImage == 1, axis=1).astype(int)
    return compressed

def groupOnes(rowImage):
    """ Input a 1 x D array, create a list that has all of start and end indices of every groupings of ones in a tuple
    """

    groupings = [] # main array that will hold [begin, end] of contigous 1s 

    sameString = False # state machine, baby
    temp = []

    for index in range(len(rowImage)):
        if (rowImage[index] == 1):
            if not sameString:
                sameString = True
                print(index)
                temp.append(index)
        else:
            if (sameString and index != 0):
                temp.append(index - 1)
                groupings.append(temp)
                temp = []
            sameString = False
    
    return groupings
            
            

