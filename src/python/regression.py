import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn import linear_model
from sklearn.preprocessing import PolynomialFeatures

data = pd.read_csv("data.csv")
co2 = data.values[0:,1]
methane = data.values[0:,2]
temp = data.values[0:,3]

poly = PolynomialFeatures(2)
poly_fit = poly.fit_transform(data.values[0:,1:3])




#X is the independent variable (bivariate in this case)
X = data.values[0:,1:3]

#vector is the dependent data
vector = temp

#predict is an independent variable for which we'd like to predict the value
predict= [[400, 1819]]

#generate a model of polynomial features
poly = PolynomialFeatures(degree=2)

#transform the x data for proper fitting (for single variable type it returns,[1,x,x**2])
X_ = poly.fit_transform(X)

#transform the prediction to fit the model type
predict_ = poly.fit_transform(predict)

#here we can remove polynomial orders we don't want
#for instance I'm removing the `x` component
#X_ = np.delete(X_,(1),axis=1)
#predict_ = np.delete(predict_,(1),axis=1)

#generate the regression object
clf = sk.linear_model.LinearRegression()
#preform the actual regression
clf.fit(X_, vector)

print("X_ = ",X_)
print("predict_ = ",predict_)
print("Prediction = ",clf.predict(predict_))


#plt.plot(co2,poly_fit(co2))
#plt.show()




