import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# ===============================
# Part 1 - Data Preprocessing
# ===============================
train_datagen = ImageDataGenerator(rescale = 1./255, shear_range = 0.2, zoom_range = 0.2, horizontal_flip = True)
training_set = train_datagen.flow_from_directory('/datasets/Part 2 - Convolutional Neural Networks (CNN)/dataset/training_set', target_size = (64, 64), batch_size = 32, lass_mode = 'binary')

test_datagen = ImageDataGenerator(rescale = 1./255)
test_set = test_datagen.flow_from_directory('/datasets/Part 2 - Convolutional Neural Networks (CNN)/dataset/test_set',
                                            target_size = (64, 64),
                                            batch_size = 32,
                                            class_mode = 'binary')
