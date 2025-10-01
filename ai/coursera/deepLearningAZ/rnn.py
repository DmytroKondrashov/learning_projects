import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# Part 1 - Data Preprocessing

# Importing the training set
dataset_train = pd.read_csv('datasets/Part 3 - Recurrent Neural Networks (RNN)/Google_Stock_Price_Train.csv')
training_set = dataset_train.iloc[:, 1:2].values

