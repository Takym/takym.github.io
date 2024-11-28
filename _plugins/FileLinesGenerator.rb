module TakymGitHubIO
	class FileLinesGenerator < Jekyll::Generator
		safe true
		def generate(site)
			site.posts.each do |post|
				post.data['file_lines'] = File.readlines(post.name).size
			end
		end
	end
end
