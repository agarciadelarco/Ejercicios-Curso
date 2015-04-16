class Blog
	def initialize
		@miBlog = []
	end

	def incluirPosts(post1, post2, post3)
		@miBlog.push(post1, post2, post3)
	end

	def ordenarPosts
		@miBlog.sort!{|a,b| b.date<=>a.date}
	end

	def imprimirBlog
		@miBlog.each{ |x| x.contenidoPost }
	end
end

class Post
	attr_accessor :title, :date, :text
	def initialize(title, date, text)
		@title = title
		@date = date
		@text = text
	end

	def contenidoPost
		puts "#{@title} \n------------- \n#{@text} \n*************"
		puts ""
	end
end

post1 = Post.new("Título 1", Time.now, "Texto 1")
post2 = Post.new("Título 2", Time.now, "Texto 2")
post3 = Post.new("Título 3", Time.now, "Texto 3")

blog1 = Blog.new
blog1.incluirPosts(post1, post2, post3)
blog1.ordenarPosts
blog1.imprimirBlog