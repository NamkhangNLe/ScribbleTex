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


