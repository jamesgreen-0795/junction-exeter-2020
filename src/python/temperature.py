import numpy as np
import matplotlib.pyplot as plt

# global
def year_fuzz(value):
	#temp = 15 + (value/20)
	magnitude_sign = 1 if np.random.rand() < 0.5 else -1
	rnd = np.random.rand()
	offset = (32**(rnd) - 1)/(32 * 4) # range over 0.3 of a degree
	offset = offset * magnitude_sign
	return value + offset

# per region
# year_avgs = avg_prev, avg_cur, avg_next
# +ve season_var = northern,  -ve = southern,   0 = equator
def week_fuzz(curr_yr,week,season_var,week_var):
	
	year_percent = (week / 52)
	season_fade = (season_var/2) * np.sin(2 * np.pi * year_percent)

	week_rand = week_var * (np.random.rand() - 0.5)
	return curr_yr + season_fade + week_rand





fig,ax = plt.subplots(1,2,figsize=[16,6])


year_points = 70 # 1970 - 2040
x = np.arange(0,year_points)
y = np.zeros(year_points)
for i in range(len(y)):
	y[i] = year_fuzz(0)

plt.sca(ax[0])
plt.grid(True,'major','y')
plt.title("Temperature over years")
plt.plot(x,y,"r-")
plt.ylim(-1,1)
plt.ylabel(r"Change from mean temperature ($^\circ$C)")
plt.xlabel("Year Number")


wks = 52 * 2
x_wk = np.arange(0,wks)
y_wk = np.zeros(wks)
for i in range(wks // 52):
	year_avg = y[i]
for i in range(len(y_wk)):
	y_wk[i] = week_fuzz(year_avg,i,15,10)

plt.sca(ax[1])
plt.grid(True,'major','y')
plt.title("Temperature over two years")
plt.plot(x_wk,y_wk,"r-")
plt.xticks(np.arange(0,wks + 1, 13))
plt.xlabel("Week Number")
plt.show()


def temp_curve(x):
	return (128**(x/70)/128) 
y_example = temp_curve(x)
y_example_fuzz = np.zeros(year_points)
for i in range(len(y)):
	y_example_fuzz[i] = year_fuzz(y_example[i])
plt.plot(x,y_example,"k-",label="Underlying temp",c=(0,0,0,0.5))
plt.plot(x,y_example_fuzz,"r-")
plt.ylim(-0.5,1)
plt.xlabel("Year Number")
plt.grid(True,'major','y')
plt.ylabel(r"Change in Temperature ($^\circ$C)")
plt.title("Average Yearly Temperature")
plt.savefig("yearlytemp.png")
plt.show()


#def test(x):
#    return (128**(x) - 1)/128
#test_x = np.linspace(0,1)
#plt.plot(test_x,test(test_x))

