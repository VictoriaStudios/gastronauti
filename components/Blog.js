import { useState, useRef } from 'react'
import { scrollTo } from '../utilities/scrollTo'
import styles from '../styles/Blog.module.css'
import Transition from 'react-transition-group/cjs/Transition'



const Blog = (props) => {
    const [expanded, setExpanded] = useState(false)
    const transTime = 550
    const expandtime = 300
    const blogRef = useRef()

    const handleBlogClick = () => {
        if (!expanded) scrollTo(blogRef)
        setExpanded(!expanded)
    }




    return (
        <Transition in={expanded} timeout={transTime}>
            {state => (
                <>
                    <section ref={blogRef} onClick={handleBlogClick} className={styles.blogWrapper}>
                        <h1 className={styles.blogTitle}>Blog</h1>
                        <div className={styles.blogContent} style={{
                            transition: `all ${expandtime}ms linear`,
                            height: state === 'entering' ? '0' : state === 'entered' ? '75vh' : state === 'exiting' ? '0' : state === 'exited' ? '0' : null ,
                            width: state === 'entering' ? '80vw' : state === 'entered' ? '80vw' : state === 'exiting' ? '80vw' : state === 'exited' ? '10vw' : null ,
                        }}>
                            <h1 style={{
                                transition: `all ${transTime}ms ease-in`,
                                opacity: state === 'entered' ? 1 : 0
                            }}>
                                Content
                            </h1>
                        </div>
                    </section>
                </>
            )}
        </Transition>
    )
}

export default Blog
