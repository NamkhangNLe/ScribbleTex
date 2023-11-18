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

#DEPRECATED
def underlyingCols(grayImage):
    """ DEPRECATED: Same as above but for columns"""

    compressed = np.any(grayImage == 1, axis=1).astype(int)

    return compressed

def groupOnes1xD(rowImage):
    """ Input a 1 x D array, create a list that has all of start and end indices of every groupings of ones in a tuple
    Return an array of size 2 begin/end indices
    """

    groupings = [] # main array that will hold [begin, end] of contigous 1s 
    numElements = rowImage.shape[0]
    sameString = False # state machine, baby
    temp = []

    for index in range(numElements):
        if (rowImage[index] == 1):
            if not sameString:
                sameString = True
                temp.append(index)
        else:
            if (sameString and index != 0):
                temp.append(index - 1)
                groupings.append(temp)
                temp = []
            sameString = False
    
    return groupings
    
    #groupOnesVertically
def groupOnesVert(img):
    """ Given a 2D array, find where the 1s begin and end from top down
    This is a helper method for getSubarrays and the goal is for a segment of the full array to be plugged in. 
    """
    oneRows = np.any(img, axis=1)
    oneIndices = np.where(oneRows)[0]
    firstOccurrance = oneIndices[0] if oneIndices.size > 0 else None
    lastOccurance = oneIndices[-1] if oneIndices.size > 0 else None
    return firstOccurrance, lastOccurance


def getSubarrays(img, row):
    """ Given the big picture (2D array), be able to split letter by letter and return a 3D array"""
    subArrays = [] # holds all of the subArrays/subPicture
    for grouping in row:
        arr = img[:, grouping[0] : grouping[1]] #Captures the rows for one group
        firstOccurrance, lastOccurance = groupOnesVert(arr) #Captures the first and last heights
        arr = arr[firstOccurrance:lastOccurance, :]
        subArrays.append(arr)
    
    return subArrays

def SINGLEresizeSmaller(img, padding):
    """ Given any size large image (2D Array), minimize and add a specified amount of padding
    The resulting image must always be 45x45 based on the specifications of the ML model
    """
    if (padding > 23):
        print("REDUCE THE PADDING.")
    else:
        subtract = padding * 2 #T his is how big the canvas must be because the padding will be added in last
        canvassize = 45 - subtract # This is both the height and the width
        reducedImg = cv2.resize(img, (canvassize, canvassize)) # Reduce image size
        padded = np.pad(reducedImg, padding, mode = "constant", constant_values=0) # Do some padding
        return padded

def MULTIresizeSmaller(imgs, padding):
    """ Takes in a 3D array, calls SINGLEresizeSmaller on every layer and returns a 3D array """
    imgs = np.array(imgs)
    numLayers = imgs.shape[0]
    resizedImgs = []

    for index in range(numLayers):
        resized = SINGLEresizeSmaller(imgs[index], padding)
        resizedImgs.append(resized)
    
    return resizedImgs

def convertAll2D(imgs):
    """Takes in a 3D array, convert to 2D array where each 1D array is a dataPoint """
    imgs = np.array(imgs)
    numLayers, height, width = imgs.shape
    return imgs.reshape(numLayers, height * width)




            

