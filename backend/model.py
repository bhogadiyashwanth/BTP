import sys
import numpy as np
import tensorflow
from tensorflow.keras.preprocessing.image import load_img, img_to_array, array_to_img
new_model = tensorflow.keras.models.load_model('path/backend/train0.h5')
train_imgs = []
train_imgs.append(img_to_array(load_img(sys.argv[1], target_size=(224,224))))
train_imgs = np.array(train_imgs)
label = new_model.predict(train_imgs)
label1 = np.argmax(label, axis=1)[0]
print(label1,flush=True,end='')