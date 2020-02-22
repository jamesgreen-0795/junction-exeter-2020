import numpy as np
import matplotlib.pyplot as plt

# global
def year_fuzz(temp):
	magnitude_sign = 1 if np.random.rand() < 0.5 else -1
	rnd = np.random.rand()
	offset = (32**(rnd) - 1)/(32 * 4) # range over 0.3 of a degree
	offset = offset * magnitude_sign
	return temp + offset

# per region
# year_avgs = avg_prev, avg_cur, avg_next
# +ve season_var = northern,  -ve = southern,   0 = equator
def week_fuzz(year_avgs,week,season_var,week_var):
	
	year_percent = (week / 52)
	
	# winter -1 to 0 to summer 1 to 0 etc


	season_fade = (season_var/2) * np.sin(2 * np.pi * year_percent)



	# This smoothes the year transition
	yr_fade = 0.25 * (1 + np.cos(2*np.pi * year_percent))
	prev_yr,curr_yr,next_yr = year_avgs
	if year_percent < 0.5:
		weighted_yr = yr_fade * prev_yr + (1-yr_fade) * curr_yr
	else:
		weighted_yr = yr_fade * next_yr + (1-yr_fade) * curr_yr

	week_rand = week_var * (np.random.rand() - 0.5)
	return weighted_yr + season_fade + week_rand





fig,ax = plt.subplots(1,2,figsize=[16,6])


year_points = 70 # 1970 - 2040
x = np.arange(0,year_points)
y = np.zeros(year_points)
for i in range(len(y)):
	y[i] = year_fuzz(0)

plt.sca(ax[0])
plt.grid(True,'major','y')
plt.title("Temperature over years")
plt.plot(x,y,"r--")
plt.ylim(-1,1)
plt.ylabel(r"Change from mean temperature ($^\circ$C)")
plt.xlabel("Year Number")


wks = 52 * 2
x_wk = np.arange(0,wks)
y_wk = np.zeros(wks)
for i in range(wks // 52):
	year_avgs = y[i:i+3]
for i in range(len(y_wk)):
	y_wk[i] = week_fuzz(year_avgs,i,15,10)

plt.sca(ax[1])
plt.grid(True,'major','y')
plt.title("Temperature over two years")
plt.plot(x_wk,y_wk,"r--")
plt.xticks(np.arange(0,wks + 1, 13))
plt.xlabel("Week Number")
plt.show()


#def test(x):
#    return (128**(x) - 1)/128
#test_x = np.linspace(0,1)
#plt.plot(test_x,test(test_x))

