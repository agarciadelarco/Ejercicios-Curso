class Fruits
	attr_accessor :name, :price
	def initialize(name, price)
		@name = name
		@price = price
	end
end



apple = Fruits.new("Apple",10)
orange = Fruits.new("Orange",5)
grapes = Fruits.new("Grapes",15)
banana = Fruits.new("Banana",20)
watermelon = Fruits.new("Watermelon",50)


class ShoppingCart
	def initialize
		@my_cart = []
	end

	def meterEnCarrito(apple, orange, grapes)
		@my_cart.push(apple, orange, grapes)
	end

	def imprimirCarrito
		@my_cart.each{ |name, price| puts price }
	end
end

cart1 = ShoppingCart.new
cart1.meterEnCarrito(apple, orange, grapes)
cart1.imprimirCarrito