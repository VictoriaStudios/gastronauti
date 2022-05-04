import { useState, useEffect } from 'react'
import styles from '../styles/Blog.module.css'
import Transition from 'react-transition-group/cjs/Transition'



const Blog = (props) => {
    const [expanded, setExpanded] = useState(false)
    const [blogClass, setBlogClass] = useState(`${styles.blogWrapper}`)
    const transTime = 800
    const expandtime = 400

    useEffect(() => {
        if (!expanded) {
            setBlogClass(`${styles.blogWrapper} ${styles.blogClickable}`)
        }
        else {
            setBlogClass(`${styles.blogWrapper}`)
        }
    }, [expanded])


    return (

        <section onClick={() => setExpanded(!expanded)} className={blogClass}>
            <h1 className={styles.blogTitle}>Blog</h1>
            <Transition in={expanded} timeout={transTime}>
                {state => (
                    <>
                        <div className={styles.blogContent} style={{
                            transition: `all ${expandtime}ms ease-in`,
                            height: state === 'entered' ? '65vh' : '0'
                            }}>
                            {expanded ? (
                                <h1 style={{
                                    transition: `all ${transTime}ms ease-in`,
                                    opacity: state === 'entered' ? 1 : 0
                                }}>
                                    Content
                                </h1>) : null}
                        </div>
                    </>
                )}
            </Transition>
        </section>
    )
}

export default Blog
