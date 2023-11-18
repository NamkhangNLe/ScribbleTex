import math
import numpy as np
import cv2 

from imageToNumpy import *

def main():
    # file paths
    imgFileName = "ScribbleTex/scribbletex/Example.png"

    img = cv2.imread(imgFileName) #convert into a numpy array
    
    print("Loaded image shape: " + str(img.shape))   

    gray = toGrayscale(img)
    
    print("Export gray image to grayscale for testing purposes")
    # For testing purposes, export to txt
    np.savetxt("gray.txt", gray, fmt='%d')




    
main()


