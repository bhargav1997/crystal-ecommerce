import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faUser, faTag, faArrowLeft, faComment, faThumbsUp, faClock, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faPinterest, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./BlogPostPage.css";

// Import blog data
import { blogPosts } from "../data/blogData";

const BlogPostPage = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const [post, setPost] = useState(null);
   const [relatedPosts, setRelatedPosts] = useState([]);
   const [comment, setComment] = useState("");
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [comments, setComments] = useState([]);
   const [likes, setLikes] = useState(0);
   const [hasLiked, setHasLiked] = useState(false);

   useEffect(() => {
      // Find the post with the matching ID
      const currentPost = blogPosts.find((post) => post.id === parseInt(id));

      if (currentPost) {
         setPost(currentPost);

         // Find related posts (same category or shared tags)
         const related = blogPosts
            .filter(
               (p) =>
                  p.id !== currentPost.id && (p.category === currentPost.category || p.tags.some((tag) => currentPost.tags.includes(tag))),
            )
            .slice(0, 3);

         setRelatedPosts(related);

         // Simulate loading comments from a database
         setComments([
            {
               id: 1,
               name: "Jane Cooper",
               date: "June 5, 2023",
               content:
                  "This article was so helpful! I've been using amethyst for meditation and it's made a huge difference in my practice.",
               replies: [
                  {
                     id: 101,
                     name: "Sarah Johnson",
                     date: "June 6, 2023",
                     content:
                        "Thanks for sharing your experience, Jane! So glad to hear amethyst has been helpful for your meditation practice.",
                  },
               ],
            },
            {
               id: 2,
               name: "Robert Wilson",
               date: "June 3, 2023",
               content: "I've been collecting crystals for years but never knew about some of these properties. Great information!",
               replies: [],
            },
         ]);

         // Simulate random number of likes
         setLikes(Math.floor(Math.random() * 50) + 10);
      }
   }, [id]);

   const handleSubmitComment = (e) => {
      e.preventDefault();

      if (name && email && comment) {
         const newComment = {
            id: comments.length + 1,
            name,
            date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
            content: comment,
            replies: [],
         };

         setComments([...comments, newComment]);
         setName("");
         setEmail("");
         setComment("");
      }
   };

   const handleLike = () => {
      if (!hasLiked) {
         setLikes(likes + 1);
         setHasLiked(true);
      } else {
         setLikes(likes - 1);
         setHasLiked(false);
      }
   };

   if (!post) {
      return (
         <div className='blog-post-not-found'>
            <div className='container'>
               <h2>Post Not Found</h2>
               <p>The blog post you're looking for doesn't exist.</p>
               <button onClick={() => navigate("/blog")} className='back-btn'>
                  <FontAwesomeIcon icon={faArrowLeft} /> Back to Blog
               </button>
            </div>
         </div>
      );
   }

   return (
      <div className='blog-post-page'>
         {/* Hero Section */}
         <div
            className='blog-post-hero'
            style={{ backgroundImage: `linear-gradient(rgba(0, 78, 146, 0.8), rgba(0, 78, 146, 0.8)), url(${post.image})` }}>
            <div className='container'>
               <div className='post-category-badge'>{post.category}</div>
               <h1>{post.title}</h1>
               <div className='post-meta'>
                  <div className='post-meta-item'>
                     <FontAwesomeIcon icon={faUser} />
                     <span>{post.author}</span>
                  </div>
                  <div className='post-meta-item'>
                     <FontAwesomeIcon icon={faCalendarAlt} />
                     <span>{post.date}</span>
                  </div>
                  <div className='post-meta-item'>
                     <FontAwesomeIcon icon={faClock} />
                     <span>5 min read</span>
                  </div>
               </div>
            </div>
         </div>

         {/* Main Content */}
         <div className='blog-post-content'>
            <div className='container'>
               <div className='blog-post-grid'>
                  {/* Main Post Content */}
                  <div className='post-main-content'>
                     <button onClick={() => navigate("/blog")} className='back-btn'>
                        <FontAwesomeIcon icon={faArrowLeft} /> Back to Blog
                     </button>

                     <div className='post-featured-image'>
                        <img src={post.image} alt={post.title} />
                     </div>

                     <article className='post-body'>
                        <p className='post-intro'>
                           <strong>{post.excerpt}</strong>
                        </p>

                        <h2>Introduction to {post.title.split(" ").slice(-1)[0]}</h2>
                        <p>
                           Crystals have been used for thousands of years for their healing properties and energy work. They are believed to
                           interact with the body's energy field, helping to remove blockages and promote balance and harmony.
                        </p>

                        <p>{post.content}</p>

                        <h2>The Benefits of Using {post.title.split(" ").slice(-1)[0]}</h2>
                        <p>
                           When working with crystals, it's important to set clear intentions and be open to their energy. Here are some of
                           the key benefits associated with {post.title.split(" ").slice(-1)[0]}:
                        </p>

                        <ul className='benefits-list'>
                           <li>Promotes mental clarity and focus</li>
                           <li>Helps reduce stress and anxiety</li>
                           <li>Enhances spiritual awareness and intuition</li>
                           <li>Supports emotional healing and balance</li>
                           <li>Aids in physical healing and pain relief</li>
                        </ul>

                        <div className='post-quote'>
                           <blockquote>
                              "Crystals are living beings, incredibly old and wise. They have been on this planet far longer than we have
                              and have much to teach us about stability and transformation."
                           </blockquote>
                           <cite>— Judy Hall, Crystal Expert</cite>
                        </div>

                        <h2>How to Use {post.title.split(" ").slice(-1)[0]} in Your Daily Practice</h2>
                        <p>There are many ways to incorporate crystals into your daily routine. Here are some suggestions:</p>

                        <ol className='usage-list'>
                           <li>
                              <strong>Meditation:</strong> Hold the crystal in your hand or place it on the relevant chakra during
                              meditation to enhance your practice.
                           </li>
                           <li>
                              <strong>Carry with you:</strong> Keep a small crystal in your pocket or purse to benefit from its energy
                              throughout the day.
                           </li>
                           <li>
                              <strong>Crystal grids:</strong> Create a geometric arrangement of crystals to amplify their energy for a
                              specific purpose.
                           </li>
                           <li>
                              <strong>Home placement:</strong> Place crystals in different rooms of your home to create a harmonious
                              environment.
                           </li>
                        </ol>

                        <div className='post-image-gallery'>
                           <div className='gallery-item'>
                              <img
                                 src='https://images.unsplash.com/photo-1596516109370-29001ec8ec36?q=80&w=600&auto=format&fit=crop'
                                 alt='Crystal meditation'
                              />
                              <p className='image-caption'>Crystal meditation practice</p>
                           </div>
                           <div className='gallery-item'>
                              <img
                                 src='https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?q=80&w=600&auto=format&fit=crop'
                                 alt='Crystal grid'
                              />
                              <p className='image-caption'>Crystal grid for energy amplification</p>
                           </div>
                        </div>

                        <h2>Conclusion</h2>
                        <p>
                           Whether you're new to crystal healing or a seasoned practitioner, {post.title.split(" ").slice(-1)[0]}
                           offers powerful energy that can support your well-being on multiple levels. Remember to cleanse and charge your
                           crystals regularly to maintain their energy and effectiveness.
                        </p>

                        <p>
                           We hope this guide has provided valuable insights into working with {post.title.split(" ").slice(-1)[0]}. If you
                           have any questions or would like to share your experiences, please leave a comment below!
                        </p>
                     </article>

                     <div className='post-tags'>
                        <FontAwesomeIcon icon={faTag} />
                        {post.tags.map((tag, index) => (
                           <Link key={index} to={`/blog?tag=${tag}`} className='post-tag'>
                              {tag}
                           </Link>
                        ))}
                     </div>

                     <div className='post-actions'>
                        <button className={`like-button ${hasLiked ? "liked" : ""}`} onClick={handleLike}>
                           <FontAwesomeIcon icon={faThumbsUp} />
                           <span>{likes} Likes</span>
                        </button>

                        <div className='share-buttons'>
                           <span>Share:</span>
                           <a
                              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='share-button facebook'>
                              <FontAwesomeIcon icon={faFacebook} />
                           </a>
                           <a
                              href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='share-button twitter'>
                              <FontAwesomeIcon icon={faTwitter} />
                           </a>
                           <a
                              href={`https://www.pinterest.com/pin/create/button/?url=${window.location.href}&media=${post.image}&description=${post.title}`}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='share-button pinterest'>
                              <FontAwesomeIcon icon={faPinterest} />
                           </a>
                           <a
                              href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='share-button linkedin'>
                              <FontAwesomeIcon icon={faLinkedin} />
                           </a>
                        </div>
                     </div>

                     <div className='post-author-bio'>
                        <div className='author-image'>
                           <img
                              src={`https://randomuser.me/api/portraits/${post.author.includes("Sarah") ? "women" : "men"}/32.jpg`}
                              alt={post.author}
                           />
                        </div>
                        <div className='author-info'>
                           <h3>{post.author}</h3>
                           <p className='author-role'>Crystal Expert & Writer</p>
                           <p className='author-description'>
                              {post.author} is a certified crystal healer with over 10 years of experience in the field. They are passionate
                              about sharing their knowledge and helping others discover the transformative power of crystals.
                           </p>
                           <div className='author-social'>
                              <a href='#' className='social-link'>
                                 <FontAwesomeIcon icon={faFacebook} />
                              </a>
                              <a href='#' className='social-link'>
                                 <FontAwesomeIcon icon={faTwitter} />
                              </a>
                              <a href='#' className='social-link'>
                                 <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                           </div>
                        </div>
                     </div>

                     {/* Related Posts */}
                     <div className='related-posts'>
                        <h3 className='section-title'>Related Posts</h3>
                        <div className='related-posts-grid'>
                           {relatedPosts.map((relatedPost) => (
                              <div className='related-post' key={relatedPost.id}>
                                 <div className='related-post-image'>
                                    <img src={relatedPost.image} alt={relatedPost.title} />
                                 </div>
                                 <div className='related-post-content'>
                                    <Link to={`/blog/${relatedPost.id}`} className='related-post-title'>
                                       {relatedPost.title}
                                    </Link>
                                    <div className='related-post-meta'>
                                       <span className='related-post-date'>
                                          <FontAwesomeIcon icon={faCalendarAlt} /> {relatedPost.date}
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Comments Section */}
                     <div className='comments-section'>
                        <h3 className='section-title'>
                           <FontAwesomeIcon icon={faComment} /> {comments.length} Comments
                        </h3>

                        <div className='comments-list'>
                           {comments.map((comment) => (
                              <div className='comment' key={comment.id}>
                                 <div className='comment-avatar'>
                                    <img
                                       src={`https://randomuser.me/api/portraits/${
                                          comment.name.includes("Jane") || comment.name.includes("Sarah") ? "women" : "men"
                                       }/${comment.id + 30}.jpg`}
                                       alt={comment.name}
                                    />
                                 </div>
                                 <div className='comment-content'>
                                    <div className='comment-header'>
                                       <h4 className='comment-author'>{comment.name}</h4>
                                       <span className='comment-date'>{comment.date}</span>
                                    </div>
                                    <div className='comment-body'>
                                       <p>{comment.content}</p>
                                    </div>

                                    {/* Comment Replies */}
                                    {comment.replies.length > 0 && (
                                       <div className='comment-replies'>
                                          {comment.replies.map((reply) => (
                                             <div className='comment reply' key={reply.id}>
                                                <div className='comment-avatar'>
                                                   <img
                                                      src={`https://randomuser.me/api/portraits/${
                                                         reply.name.includes("Jane") || reply.name.includes("Sarah") ? "women" : "men"
                                                      }/${reply.id}.jpg`}
                                                      alt={reply.name}
                                                   />
                                                </div>
                                                <div className='comment-content'>
                                                   <div className='comment-header'>
                                                      <h4 className='comment-author'>{reply.name}</h4>
                                                      <span className='comment-date'>{reply.date}</span>
                                                   </div>
                                                   <div className='comment-body'>
                                                      <p>{reply.content}</p>
                                                   </div>
                                                </div>
                                             </div>
                                          ))}
                                       </div>
                                    )}
                                 </div>
                              </div>
                           ))}
                        </div>

                        {/* Comment Form */}
                        <div className='comment-form'>
                           <h3 className='form-title'>Leave a Comment</h3>
                           <form onSubmit={handleSubmitComment}>
                              <div className='form-row'>
                                 <div className='form-group'>
                                    <label htmlFor='name'>Name *</label>
                                    <input
                                       type='text'
                                       id='name'
                                       value={name}
                                       onChange={(e) => setName(e.target.value)}
                                       placeholder='Enter your name'
                                       required
                                    />
                                 </div>
                                 <div className='form-group'>
                                    <label htmlFor='email'>Email *</label>
                                    <input
                                       type='email'
                                       id='email'
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       placeholder='Enter your email (will not be published)'
                                       required
                                    />
                                 </div>
                              </div>
                              <div className='form-group'>
                                 <label htmlFor='comment'>Comment *</label>
                                 <textarea
                                    id='comment'
                                    rows='5'
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder='Share your thoughts about this post...'
                                    required></textarea>
                              </div>
                              <button type='submit' className='submit-button'>
                                 Post Comment
                              </button>
                           </form>
                        </div>
                     </div>
                  </div>

                  {/* Sidebar */}
                  <div className='post-sidebar'>
                     <div className='sidebar-widget about-author-widget'>
                        <h3>About the Author</h3>
                        <div className='author-card'>
                           <div className='author-image'>
                              <img
                                 src={`https://randomuser.me/api/portraits/${post.author.includes("Sarah") ? "women" : "men"}/32.jpg`}
                                 alt={post.author}
                              />
                           </div>
                           <h4>{post.author}</h4>
                           <p>Crystal Expert & Writer</p>
                           <div className='author-social'>
                              <a href='#' className='social-link'>
                                 <FontAwesomeIcon icon={faFacebook} />
                              </a>
                              <a href='#' className='social-link'>
                                 <FontAwesomeIcon icon={faTwitter} />
                              </a>
                              <a href='#' className='social-link'>
                                 <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                           </div>
                        </div>
                     </div>

                     <div className='sidebar-widget categories-widget'>
                        <h3>Categories</h3>
                        <ul>
                           {["Crystal Healing", "Crystal Care", "Manifestation", "Crystal Grids", "Chakras", "Science"].map((category) => (
                              <li key={category} className={post.category === category ? "active" : ""}>
                                 <FontAwesomeIcon icon={faFolderOpen} />
                                 <Link to={`/blog?category=${category}`}>{category}</Link>
                                 <span className='post-count'>(5)</span>
                              </li>
                           ))}
                        </ul>
                     </div>

                     <div className='sidebar-widget tags-widget'>
                        <h3>Popular Tags</h3>
                        <div className='tags-cloud'>
                           {["Amethyst", "Cleansing", "Charging", "Abundance", "Protection", "Chakra", "Energy", "Meditation"].map(
                              (tag) => (
                                 <Link key={tag} to={`/blog?tag=${tag}`} className={post.tags.includes(tag) ? "active" : ""}>
                                    {tag}
                                 </Link>
                              ),
                           )}
                        </div>
                     </div>

                     <div className='sidebar-widget recent-posts-widget'>
                        <h3>Recent Posts</h3>
                        <ul>
                           {blogPosts.slice(0, 4).map((recentPost) => (
                              <li key={recentPost.id}>
                                 <div className='recent-post-image'>
                                    <img src={recentPost.image} alt={recentPost.title} />
                                 </div>
                                 <div className='recent-post-info'>
                                    <Link to={`/blog/${recentPost.id}`}>{recentPost.title}</Link>
                                    <span className='recent-post-date'>{recentPost.date}</span>
                                 </div>
                              </li>
                           ))}
                        </ul>
                     </div>

                     <div className='sidebar-widget newsletter-widget'>
                        <h3>Subscribe to Our Newsletter</h3>
                        <p>Get the latest crystal insights and updates delivered to your inbox.</p>
                        <form className='newsletter-form'>
                           <input type='email' placeholder='Enter your email address' required />
                           <button type='submit'>Subscribe</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BlogPostPage;
