module TakymGitHubIO
	class FileLinesGenerator < Jekyll::Generator
		safe true
		def generate(site)
			site.pages.each do |page|
				page.data['file_lines'] = File.read(page.name).lines.count
			end
			site.posts.each do |post|
				post.data['file_lines'] = File.read(post.name).lines.count
			end
		end
	end
end
