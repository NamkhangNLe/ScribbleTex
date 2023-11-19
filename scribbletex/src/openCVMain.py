import numpy as np
import cv2 

from imageToNumpy import *

def main(imgFileName):
    print("______________________________________________________________")
    #______________LOAD FILE_________________
    # file paths, right now, this only runs on Jonathan's machine

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

    print()
    print("______________________________________________________________")
    #_______PERFORM RESIZE AND PADDING TO 45x45________

    print("perform resize and padding to 45x45: ")
    resize = MULTIresizeSmaller(subarray, 2)
    np.savetxt("reducedSize.txt", resize[0], fmt='%d') # Subarray is 3D array that every layer, holds a letter that is bounded perfectly

    print()
    print("______________________________________________________________")

  
    # Conclusion: IN THE END, resize spits out a 3D array where each 2D array slice is a 45x45 image
    # Call StacK:
    # getImgFileName = "path to image"
    # call cv2.imread
    # call toGrayScale(img)
    # call underlyingRows(grayScaleimg)
    # call groupOnes1xd(underlyingRows)
    # call getSubarrays(gray, Groups)
    # call MULTIresizeSmaller(resize, padding)
    # call convertAll2D(resize)
    # This can now go straight into the model
    # call MULTIresizeSmaller(subarray, padding)
    # You now get 3D array
main("/Users/jonathan/Documents/Desktop/GT Master Files/Fall 2023/AI Hack/ScribbleTex/scribbletex/Example.png")


