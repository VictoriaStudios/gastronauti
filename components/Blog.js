import { useState, useEffect } from 'react'
import styles from '../styles/Blog.module.css'


const Blog = (props) => {
    const [expanded, setExpanded] = useState(false)
    const [blogClass, setBlogClass] = useState (`${styles.blogWrapper}`)

    useEffect(() => {
        if (!expanded) {
            setBlogClass(`${styles.blogWrapper} ${styles.blogClickable}`)
        }
        else {
            setBlogClass(`${styles.blogWrapper}`)
        }
    }, [expanded])

  
    return (
        
      <div onClick={( )=> setExpanded(!expanded)} className={blogClass}>
          <h1 className={styles.blogTitle}>Blog</h1>
      </div>
    )
  }

export default Blog
