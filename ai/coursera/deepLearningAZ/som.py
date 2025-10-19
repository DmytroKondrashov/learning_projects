import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

dataset = pd.read_csv('datasets/Part 4 - Self Organizing Maps (SOM)/Credit_Card_Applications.csv')
X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, -1].values