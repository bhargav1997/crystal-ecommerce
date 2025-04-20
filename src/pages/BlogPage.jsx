import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCalendarAlt, faUser, faTag } from "@fortawesome/free-solid-svg-icons";
import { blogPosts } from "../data/blogData";
import "./BlogPage.css";

// Get unique categories

const categories = [...new Set(blogPosts.map((post) => post.category))];

// Get unique tags
const allTags = blogPosts.reduce((tags, post) => {
   return [...tags, ...post.tags];
}, []);
const uniqueTags = [...new Set(allTags)];

const BlogPage = () => {
   const [searchQuery, setSearchQuery] = useState("");
   const [selectedCategory, setSelectedCategory] = useState("All");
   const [selectedTag, setSelectedTag] = useState("All");

   // Filter posts based on search, category, and tag
   const filteredPosts = blogPosts.filter((post) => {
      const matchesSearch =
         post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

      const matchesTag = selectedTag === "All" || post.tags.includes(selectedTag);

      return matchesSearch && matchesCategory && matchesTag;
   });

   const handleSearch = (e) => {
      e.preventDefault();
      // Search is already handled by the filter function
   };

   return (
      <div className='blog-page'>
         <div className='blog-hero'>
            <div className='container'>
               <h1>Crystal Haven Blog</h1>
               <p>Insights, guides, and wisdom about crystals and their healing properties</p>
            </div>
         </div>

         <div className='blog-content'>
            <div className='container'>
               <div className='blog-grid'>
                  <div className='blog-main'>
                     {filteredPosts.length === 0 ? (
                        <div className='no-posts'>
                           <h2>No posts found</h2>
                           <p>Try adjusting your search or filter criteria.</p>
                        </div>
                     ) : (
                        <div className='posts-grid'>
                           {filteredPosts.map((post) => (
                              <div className='blog-post' key={post.id}>
                                 <div className='post-image'>
                                    <img src={post.image} alt={post.title} />
                                    <div className='post-category'>{post.category}</div>
                                 </div>

                                 <div className='post-content'>
                                    <h2 className='post-title'>
                                       <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                    </h2>

                                    <div className='post-meta'>
                                       <span className='post-date'>
                                          <FontAwesomeIcon icon={faCalendarAlt} /> {post.date}
                                       </span>
                                       <span className='post-author'>
                                          <FontAwesomeIcon icon={faUser} /> {post.author}
                                       </span>
                                    </div>

                                    <p className='post-excerpt'>{post.excerpt}</p>

                                    <Link to={`/blog/${post.id}`} className='read-more'>
                                       Read More
                                    </Link>
                                 </div>
                              </div>
                           ))}
                        </div>
                     )}
                  </div>

                  <div className='blog-sidebar'>
                     <div className='sidebar-widget search-widget'>
                        <h3>Search</h3>
                        <form onSubmit={handleSearch}>
                           <div className='search-input'>
                              <input
                                 type='text'
                                 placeholder='Search blog posts...'
                                 value={searchQuery}
                                 onChange={(e) => setSearchQuery(e.target.value)}
                              />
                              <button type='submit'>
                                 <FontAwesomeIcon icon={faSearch} />
                              </button>
                           </div>
                        </form>
                     </div>

                     <div className='sidebar-widget categories-widget'>
                        <h3>Categories</h3>
                        <ul>
                           <li className={selectedCategory === "All" ? "active" : ""} onClick={() => setSelectedCategory("All")}>
                              All Categories
                           </li>
                           {categories.map((category) => (
                              <li
                                 key={category}
                                 className={selectedCategory === category ? "active" : ""}
                                 onClick={() => setSelectedCategory(category)}>
                                 {category}
                              </li>
                           ))}
                        </ul>
                     </div>

                     <div className='sidebar-widget tags-widget'>
                        <h3>Tags</h3>
                        <div className='tags-cloud'>
                           <span className={selectedTag === "All" ? "active" : ""} onClick={() => setSelectedTag("All")}>
                              All
                           </span>
                           {uniqueTags.map((tag) => (
                              <span key={tag} className={selectedTag === tag ? "active" : ""} onClick={() => setSelectedTag(tag)}>
                                 {tag}
                              </span>
                           ))}
                        </div>
                     </div>

                     <div className='sidebar-widget recent-posts-widget'>
                        <h3>Recent Posts</h3>
                        <ul>
                           {blogPosts.slice(0, 3).map((post) => (
                              <li key={post.id}>
                                 <div className='recent-post-image'>
                                    <img src={post.image} alt={post.title} />
                                 </div>
                                 <div className='recent-post-info'>
                                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                    <span className='recent-post-date'>{post.date}</span>
                                 </div>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BlogPage;
