import numpy as np
import cv2 

from imageToNumpy import *

def main():
    print("______________________________________________________________")
    #______________LOAD FILE_________________
    # file paths, right now, this only runs on Jonathan's machine
    imgFileName = "/Users/jonathan/Documents/Desktop/GT Master Files/Fall 2023/AI Hack/ScribbleTex/scribbletex/Example.png" 

    img = cv2.imread(imgFileName) #convert into a numpy array
    
    print("Loaded image shape: " + str(img.shape))   
    print()
    print("______________________________________________________________")

    #________________GRAYSCALE_______________________
    gray = toGrayscale(img)
    
    print("Export gray image to grayscale for testing purposes")
    # For testing purposes, export to txt
    np.savetxt("gray.txt", gray, fmt='%d')
    print()
    print("______________________________________________________________")
    #________________UNDERLYING ROWS AND COLS__________________

    rows = underlyingRows(gray) #Get the 1D array of rows collapsed
    cols = underlyingCols(gray) #DEPRECATED: get 1D array of columns collapsed
 
    print("Rows: " + str(rows))
    print("Cols: " + str(cols))
    print()
    print("______________________________________________________________")

    #_____________GROUPINGS_________________
    testExampleRow = np.array([0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0])
    testExampleCol = np.array([[0], [0], [1], [1], [1], [0], [0], [1], [1], [1], [1], [0], [0]])
    groups = groupOnes1xD(rows)
    
    #_____________GET SUBARRAY______________
    subarray = getSubarrays(gray, groups)
    np.savetxt("subarray.txt", subarray[0], fmt='%d') # Subarray is 3D array that every layer, holds a letter that is bounded perfectly
    

main()


