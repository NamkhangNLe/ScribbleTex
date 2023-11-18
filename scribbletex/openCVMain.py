import numpy as np
import cv2 

from imageToNumpy import *

def main():
    #______________LOAD FILE_________________
    # file paths, right now, this only runs on Jonathan's machine
    imgFileName = "/Users/jonathan/Documents/Desktop/GT Master Files/Fall 2023/AI Hack/ScribbleTex/scribbletex/Example.png" 

    img = cv2.imread(imgFileName) #convert into a numpy array
    
    print("Loaded image shape: " + str(img.shape))   
    print()
    print()

    #________________GRAYSCALE_______________________
    gray = toGrayscale(img)
    
    print("Export gray image to grayscale for testing purposes")
    # For testing purposes, export to txt
    np.savetxt("gray.txt", gray, fmt='%d')
    print()
    print()
    #________________UNDERLYING ROWS AND COLS__________________

    rows = underlyingRows(gray)
    cols = underlyingCols(gray)

    print("Rows: " + str(rows))
    print("Cols: " + str(cols))
    print()
    print()

    #_____________GROUPINGS_______________
    testExample = np.array([0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0])
    print("Groupings: " + str(groupOnes(rows)))

main()


