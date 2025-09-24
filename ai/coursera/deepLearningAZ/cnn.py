import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# ===============================
# Part 1 - Data Preprocessing
# ===============================
train_datagen = ImageDataGenerator(rescale = 1./255, shear_range = 0.2, zoom_range = 0.2, horizontal_flip = True)
