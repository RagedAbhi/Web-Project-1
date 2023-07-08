import numpy as np
import math as math
# import matplotlib.pyplot as plt

x1 = np.array([92,56,88,70,80,49,65,35,66,67])
y1 = np.array([98,68,81,80,83,52,66,30,68,73])

def gradient_descent(p,x=x1,y=y1):
    m_curr = b_curr = 0
    iterations = 100
    n = len(x)
    learning_rate = 0.0002
    cost1 = cost2 = 0
    

    for i in range(iterations):
        y_predicted = m_curr * x + b_curr
        cost2 = (1/n) * sum([val**2 for val in (y-y_predicted)])
        md = (2/n)*sum(x*(y_predicted-y))
        bd = (2/n)*sum(y_predicted-y)
        m_curr = m_curr - learning_rate * md
        b_curr = b_curr - learning_rate * bd
        if(math.isclose(cost1,cost2,rel_tol=1e-6,abs_tol=0.0)):
          y1 = m_curr*p+b_curr
          print("output: ",y1)
          return y_predicted
          
          
        cost1 = cost2
        # print ("m: {}, b: {}, cost: {}, iteration: {}".format(m_curr,b_curr,cost2,i))
        
      
# p = 100
# a=gradient_descent(p,x=x1,y=y1)
# print(a)

