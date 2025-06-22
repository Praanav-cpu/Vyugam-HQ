function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "VALORANT Championship Series 2024: Everything You Need to Know",
      excerpt: "Get ready for the biggest VALORANT tournament of the year with our comprehensive guide to VCS 2024.",
      image: "https://images.pexels.com/photos/7915435/pexels-photo-7915435.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Tournament"
    },
    {
      id: 2,
      title: "Top 10 Gaming Setups That Will Elevate Your Performance",
      excerpt: "Discover the gaming setups used by professional esports players and how you can optimize your own.",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "Guide"
    },
    {
      id: 3,
      title: "The Rise of Campus Gaming: Building Tomorrow's Esports Stars",
      excerpt: "How university gaming programs are shaping the future of competitive esports and creating new opportunities.",
      image: "https://images.pexels.com/photos/7915318/pexels-photo-7915318.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Industry"
    },
    {
      id: 4,
      title: "Mastering Game Strategy: Tips from Pro Players",
      excerpt: "Learn advanced strategies and tactics from professional gamers to improve your competitive gameplay.",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Strategy"
    }
  ]

  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Gaming Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest gaming news, strategies, and tournament insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center text-sm text-gray-500 border-t border-gray-100 pt-4">
                  <span className="font-medium">{post.date}</span>
                  <span className="font-medium">{post.readTime}</span>
                </div>
                
                <button className="btn btn-secondary w-full">Read More</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog