#inheritance
from Chef import Chef

class ChineseChef(Chef):

	#function overriding
	def make_special_dish(self):
		print("The chef makes orange chicken.")

	def make_fried_rice(self):
		print("The chef makes fried rice.")